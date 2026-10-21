// node --test packages/node/test
//
// The client against a stand-in for the API on a free port: what it sends, what it does with
// each kind of answer, and webhooks. Nothing here reaches Shoply.

import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFileSync } from "node:fs";

import Shoply, { Page, PagePromise, ShoplyCustomer, ShoplyError, VERSION, webhooks } from "../index.js";
import { OPERATIONS } from "../generated/operations.js";

const KEY = "shoply_sk_test0000000000000000000000000000000000000000";
const STORE = "11111111-2222-3333-4444-555555555555";

/** A stand-in that answers with whatever `route` says, and keeps every request it was sent. */
async function standIn(route) {
  const seen = [];
  const server = createServer(async (req, res) => {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = Buffer.concat(chunks);
    const url = new URL(req.url, "http://x");
    const request = { method: req.method, path: url.pathname, query: Object.fromEntries(url.searchParams), all: url.searchParams, headers: req.headers, body };
    seen.push(request);

    if (url.pathname === "/v1/key") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: true, message: null, code: null, data: { store: { id: STORE } } }));
      return;
    }

    const answer = (await route(request, seen)) ?? { status: 200, json: { success: true, message: null, code: null, data: { ok: true } } };
    res.writeHead(answer.status ?? 200, { "Content-Type": answer.type ?? "application/json", ...(answer.headers ?? {}) });
    if (answer.delay) await new Promise((done) => setTimeout(done, answer.delay));
    res.end(answer.text ?? JSON.stringify(answer.json));
  });

  await new Promise((done) => server.listen(0, "127.0.0.1", done));

  const { port } = server.address();

  return { seen, url: `http://127.0.0.1:${port}/v1`, close: () => new Promise((done) => server.close(done)) };
}

const ok = (data, extra = {}) => ({ status: 200, json: { success: true, message: null, code: null, data, ...extra } });
const refusal = (status, code, message = "No.", headers = {}, extra = {}) => ({ status, headers, json: { success: false, message, code, data: null, ...extra } });

test("the version is the package's", () => {
  const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
  assert.equal(VERSION, pkg.version);
  assert.equal(Shoply.VERSION, pkg.version);
});

test("every route of the reference is a method", () => {
  const shoply = new Shoply({ apiKey: KEY, storeId: STORE });
  const buyer = new ShoplyCustomer({ storeId: STORE });

  for (const op of OPERATIONS) {
    const owner = op.customer ? buyer : shoply;
    const method = op.name.split(".").reduce((node, part) => node?.[part], owner);
    assert.equal(typeof method, "function", `${op.id} has no method`);
  }
});

test("a key is needed, and never in a web page", () => {
  const saved = process.env.SHOPLY_API_KEY;
  delete process.env.SHOPLY_API_KEY;

  try {
    assert.throws(() => new Shoply(), (error) => error instanceof ShoplyError && error.code === "api_key_required");
    assert.throws(() => new Shoply({ apiKey: "shoply_ct_buyer" }), (error) => error.code === "api_key_required");

    globalThis.window = { document: {} };
    assert.throws(() => new Shoply({ apiKey: KEY }), (error) => error.code === "browser");
    assert.doesNotThrow(() => new ShoplyCustomer({ storeId: STORE }));
  } finally {
    delete globalThis.window;
    if (saved !== undefined) process.env.SHOPLY_API_KEY = saved;
  }
});

test("the store is asked of the key once, and the request is signed with it", async () => {
  const api = await standIn(() => ok({ id: "o1" }));

  try {
    const shoply = new Shoply({ apiKey: KEY, baseURL: api.url });
    await shoply.orders.show("o1");
    await shoply.orders.show("o2");

    assert.equal(api.seen.filter((r) => r.path === "/v1/key").length, 1);
    assert.equal(api.seen[1].path, `/v1/stores/${STORE}/orders/o1`);
    assert.equal(api.seen[1].headers.authorization, `Bearer ${KEY}`);
    assert.equal(api.seen[1].headers.accept, "application/json");
    assert.equal(api.seen[1].headers["user-agent"], `shoply-node/${VERSION} (node/${process.versions.node})`);
    assert.equal(await shoply.storeId(), STORE);
  } finally {
    await api.close();
  }
});

test("a store given is not asked for, and an address's parts are escaped", async () => {
  const api = await standIn(() => ok({}));

  try {
    const shoply = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: api.url });
    await shoply.orders.show("a/b c");

    assert.equal(api.seen.length, 1);
    assert.equal(api.seen[0].path, `/v1/stores/${STORE}/orders/a%2Fb%20c`);
    assert.throws(() => shoply.orders.show(), TypeError);
    assert.throws(() => shoply.orders.show(""), TypeError);
    assert.throws(() => shoply.orders.markPaid("o1", { idempotencyKey: "k" }), /idempotencyKey is an option: pass it after the fields, as orders\.markPaid\(orderId, fields, \{ idempotencyKey \}\)/);
  } finally {
    await api.close();
  }
});

test("a read's fields go in the address; a change's in its body, with the address's own in the address", async () => {
  const api = await standIn(() => ok({ id: "c1" }));

  try {
    const shoply = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: api.url });
    await shoply.customers.list({ search: "ana", perPage: 5, nothing: undefined });
    await shoply.coupons.create({ code: "SAVE10", value: 10, tz: "Europe/Riga" });

    assert.deepEqual(api.seen[0].query, { search: "ana", perPage: "5", page: "1" });
    assert.equal(api.seen[1].method, "POST");
    assert.deepEqual(api.seen[1].query, { tz: "Europe/Riga" });
    assert.deepEqual(JSON.parse(api.seen[1].body), { code: "SAVE10", value: 10 });
    assert.equal(api.seen[1].headers["content-type"], "application/json");
  } finally {
    await api.close();
  }
});

test("a change carries an Idempotency-Key, the same on every try", async () => {
  let tries = 0;
  const api = await standIn(() => (++tries < 3 ? refusal(503, null, "Down.") : ok({ id: "c1" })));

  try {
    const shoply = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: api.url });
    const coupon = await shoply.coupons.create({ code: "SAVE10", value: 10 });

    assert.deepEqual(coupon, { id: "c1" });
    assert.equal(api.seen.length, 3);
    const keys = api.seen.map((r) => r.headers["idempotency-key"]);
    assert.match(keys[0], /^[0-9a-f-]{36}$/);
    assert.ok(keys.every((key) => key === keys[0]));

    await shoply.coupons.create({ code: "SAVE20", value: 20 }, { idempotencyKey: "mine-1" });
    assert.equal(api.seen.at(-1).headers["idempotency-key"], "mine-1");

    await shoply.orders.show("o1");
    assert.equal(api.seen.at(-1).headers["idempotency-key"], undefined);
  } finally {
    await api.close();
  }
});

test("what is tried again, and what is not", async (t) => {
  await t.test("a read the server could not answer", async () => {
    let tries = 0;
    const api = await standIn(() => (++tries === 1 ? refusal(500, null) : ok({ id: "o1" })));
    try {
      const shoply = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: api.url });
      assert.deepEqual(await shoply.orders.show("o1"), { id: "o1" });
      assert.equal(api.seen.length, 2);
    } finally {
      await api.close();
    }
  });

  await t.test("told to slow down: after as long as it said", async () => {
    let tries = 0;
    const api = await standIn(() => (++tries === 1 ? refusal(429, "rate_limited", "Slow down.", { "Retry-After": "1" }) : ok({})));
    try {
      const shoply = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: api.url });
      const began = Date.now();
      await shoply.orders.show("o1");
      assert.ok(Date.now() - began >= 900, `waited ${Date.now() - began}ms`);
      assert.equal(api.seen.length, 2);
    } finally {
      await api.close();
    }
  });

  await t.test("told to wait longer than a minute: not tried again, and said", async () => {
    const api = await standIn(() => refusal(429, "rate_limited", "Slow down.", { "Retry-After": "120" }));
    try {
      const shoply = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: api.url });
      await assert.rejects(shoply.orders.show("o1"), (error) => error.status === 429 && error.retryAfter === 120);
      assert.equal(api.seen.length, 1);
    } finally {
      await api.close();
    }
  });

  await t.test("the same request still running", async () => {
    let tries = 0;
    const api = await standIn(() => (++tries === 1 ? refusal(409, "request_in_progress") : ok({ id: "c1" })));
    try {
      const shoply = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: api.url });
      await shoply.coupons.create({ code: "A1", value: 1 });
      assert.equal(api.seen.length, 2);
    } finally {
      await api.close();
    }
  });

  await t.test("a refusal is not tried again", async () => {
    const api = await standIn(() =>
      refusal(422, "validation_failed", "Check the fields.", { "X-Request-Id": "req-1" }, { errors: { code: "Taken." } }),
    );
    try {
      const shoply = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: api.url });
      await assert.rejects(shoply.coupons.create({ code: "A1", value: 1 }), (error) => {
        assert.ok(error instanceof ShoplyError);
        assert.equal(error.status, 422);
        assert.equal(error.code, "validation_failed");
        assert.equal(error.message, "Check the fields.");
        assert.deepEqual(error.errors, { code: "Taken." });
        assert.equal(error.requestId, "req-1");
        return true;
      });
      assert.equal(api.seen.length, 1);
    } finally {
      await api.close();
    }
  });

  await t.test("maxRetries 0 tries once", async () => {
    const api = await standIn(() => refusal(503, null));
    try {
      const shoply = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: api.url, maxRetries: 0 });
      await assert.rejects(shoply.orders.show("o1"), (error) => error.status === 503);
      assert.equal(api.seen.length, 1);
    } finally {
      await api.close();
    }
  });
});

test("nothing answering, and too slow an answer", async () => {
  const shoply = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: "http://127.0.0.1:9/v1", maxRetries: 1 });
  await assert.rejects(shoply.orders.show("o1"), (error) => error.status === 0 && error.code === "connection_error");

  const api = await standIn(() => ({ ...ok({}), delay: 400 }));
  try {
    const slow = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: api.url, timeout: 100, maxRetries: 0 });
    await assert.rejects(slow.orders.show("o1"), (error) => error.code === "timeout");

    const controller = new AbortController();
    const stopped = slow.orders.show("o1", { timeout: 5000, signal: controller.signal });
    controller.abort(new Error("stopped by me"));
    await assert.rejects(stopped, /stopped by me/);
  } finally {
    await api.close();
  }
});

test("a list is a page, and every row of every page with for await", async () => {
  const rows = Array.from({ length: 5 }, (_, i) => ({ id: `o${i + 1}` }));
  const api = await standIn((request) => {
    const page = Number(request.query.page);
    return ok(rows.slice((page - 1) * 2, page * 2), { pages: 3, total: 5, meta: { statusCounts: { all: 5 } } });
  });

  try {
    const shoply = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: api.url });
    const listed = shoply.orders.list({ perPage: 2 });
    assert.ok(listed instanceof PagePromise);

    const first = await listed;
    assert.ok(first instanceof Page);
    assert.deepEqual(first.data.map((r) => r.id), ["o1", "o2"]);
    assert.equal(first.page, 1);
    assert.equal(first.pages, 3);
    assert.equal(first.total, 5);
    assert.deepEqual(first.meta, { statusCounts: { all: 5 } });
    assert.ok(first.hasNextPage());

    const second = await first.nextPage();
    assert.deepEqual(second.data.map((r) => r.id), ["o3", "o4"]);

    const all = [];
    for await (const row of shoply.orders.list({ perPage: 2 })) all.push(row.id);
    assert.deepEqual(all, ["o1", "o2", "o3", "o4", "o5"]);

    const fromTwo = [];
    for await (const row of shoply.orders.list({ perPage: 2, page: 2 })) fromTwo.push(row.id);
    assert.deepEqual(fromTwo, ["o3", "o4", "o5"]);

    const last = await shoply.orders.list({ perPage: 2, page: 3 });
    assert.equal(last.hasNextPage(), false);
    assert.equal(await last.nextPage(), null);
  } finally {
    await api.close();
  }
});

test("a file is answered as the Response it is", async () => {
  const api = await standIn(() => ({ status: 200, type: "text/csv", text: "Order ID,Email\no1,a@example.com\n" }));

  try {
    const shoply = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: api.url });
    const file = await shoply.orders.export({ status: "completed" });
    assert.equal(file.headers.get("content-type"), "text/csv");
    assert.equal(await file.text(), "Order ID,Email\no1,a@example.com\n");
  } finally {
    await api.close();
  }
});

test("an upload is sent as a form, under the field the route takes", async () => {
  const upload = OPERATIONS.find((op) => op.id === "productImages.upload");
  const api = await standIn(() => ok({ id: "i1" }));

  try {
    const shoply = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: api.url });
    await shoply.productImages.upload("p1", { file: Buffer.from("PNGBYTES"), filename: "cover.png", contentType: "image/png" });

    const sent = api.seen[0];
    assert.match(sent.headers["content-type"], /^multipart\/form-data; boundary=/);
    const text = sent.body.toString();
    assert.match(text, new RegExp(`name="${upload.upload}"; filename="cover.png"`));
    assert.match(text, /Content-Type: image\/png/);
    assert.match(text, /PNGBYTES/);
    await assert.rejects(async () => shoply.productImages.upload("p1", { file: "not a file" }), TypeError);

    // What the route takes beside the file goes in the address.
    await shoply.disputes.addFile("d1", { file: Buffer.from("%PDF"), filename: "chat.pdf", kind: "communication" });
    assert.equal(api.seen.at(-1).query.kind, "communication");
    assert.match(api.seen.at(-1).body.toString(), /name="file"; filename="chat.pdf"/);
  } finally {
    await api.close();
  }
});

test("request() reaches any route, and answers the whole envelope", async () => {
  const api = await standIn(() => ok([{ id: "o1" }], { pages: 1, total: 1 }));

  try {
    const shoply = new Shoply({ apiKey: KEY, storeId: STORE, baseURL: api.url });
    const answer = await shoply.request("GET", "/stores/{storeId}/orders", { query: { page: 1 } });
    assert.equal(api.seen[0].path, `/v1/stores/${STORE}/orders`);
    assert.deepEqual(answer.data, [{ id: "o1" }]);
    assert.equal(answer.total, 1);

    await shoply.request("post", "/stores/{storeId}/coupons", { body: { code: "X1", value: 1 } });
    assert.equal(api.seen[1].method, "POST");
    assert.ok(api.seen[1].headers["idempotency-key"]);
  } finally {
    await api.close();
  }
});

test("the Customer API: a code, a token kept, and signing out forgets it", async () => {
  let posts = 0;
  const api = await standIn((request) => {
    if (request.path.endsWith("/customer/login")) return ok({ sent: true });
    if (request.path.endsWith("/customer/verify")) return ok({ token: "shoply_ct_abc", tokenType: "Bearer", expiresAt: "2026-11-20T00:00:00Z", email: "a@example.com" });
    if (request.path.endsWith("/customer/logout")) return ok(null);
    if (request.path.endsWith("/customer/affiliate/join")) return (posts++, refusal(500, null));
    return ok({ email: "a@example.com", orders: [] });
  });

  try {
    assert.throws(() => new ShoplyCustomer({}), (error) => error.code === "store_id_required");

    const buyer = new ShoplyCustomer({ storeId: STORE, baseURL: api.url });
    await assert.rejects(buyer.show(), (error) => error.code === "customer_token_required");
    assert.equal(api.seen.length, 0);

    await buyer.login({ email: "a@example.com" });
    assert.equal(api.seen[0].path, `/v1/stores/${STORE}/customer/login`);
    assert.equal(api.seen[0].headers.authorization, undefined);
    assert.equal(api.seen[0].headers["idempotency-key"], undefined);
    assert.deepEqual(JSON.parse(api.seen[0].body), { email: "a@example.com" });

    const signed = await buyer.verify({ email: "a@example.com", code: "123456" });
    assert.equal(signed.token, "shoply_ct_abc");
    assert.equal(buyer.token, "shoply_ct_abc");

    const me = await buyer.show();
    assert.equal(me.email, "a@example.com");
    assert.equal(api.seen.at(-1).headers.authorization, "Bearer shoply_ct_abc");

    await assert.rejects(buyer.affiliate.join(), (error) => error.status === 500);
    assert.equal(posts, 1, "a buyer's change with no key is not sent again");

    await buyer.logout();
    assert.equal(buyer.token, null);

    const kept = new ShoplyCustomer({ storeId: STORE, baseURL: api.url, token: "shoply_ct_kept" });
    await kept.show();
    assert.equal(api.seen.at(-1).headers.authorization, "Bearer shoply_ct_kept");
  } finally {
    await api.close();
  }
});

test("webhooks: a signed event checks out, and anything else does not", async () => {
  const secret = "whsec_test_secret";
  const body = JSON.stringify({ id: "e1", event: "order.paid", createdAt: "2026-10-21T10:00:00Z", storeId: STORE, data: { id: "o1" } });
  const headers = await webhooks.sign(body, secret);

  assert.match(headers["X-Shoply-Signature"], /^v1=[0-9a-f]{64}$/);

  // As Shoply signs: HMAC-SHA256 of "<timestamp>.<body>", in hex (Webhooks::signature).
  const { createHmac } = await import("node:crypto");
  const expected = "v1=" + createHmac("sha256", secret).update(`${headers["X-Shoply-Timestamp"]}.${body}`).digest("hex");
  assert.equal(headers["X-Shoply-Signature"], expected);

  const lower = Object.fromEntries(Object.entries(headers).map(([name, value]) => [name.toLowerCase(), value]));
  const event = await webhooks.verify(body, lower, secret);
  assert.equal(event.event, "order.paid");
  assert.equal(event.data.id, "o1");

  assert.equal((await Shoply.webhooks.verify(Buffer.from(body), new Headers(headers), secret)).id, "e1");

  const refused = (code) => (error) => error instanceof ShoplyError && error.code === code;
  await assert.rejects(webhooks.verify(body.replace("o1", "o2"), lower, secret), refused("invalid_signature"));
  await assert.rejects(webhooks.verify(body, lower, "another"), refused("invalid_signature"));
  await assert.rejects(webhooks.verify(body, {}, secret), refused("invalid_signature"));

  const old = await webhooks.sign(body, secret, Math.floor(Date.now() / 1000) - 600);
  await assert.rejects(webhooks.verify(body, old, secret), refused("too_old"));
  assert.equal((await webhooks.verify(body, old, secret, { tolerance: 900 })).id, "e1");

  await assert.rejects(webhooks.verify(JSON.parse(body), lower, secret), TypeError);
});
