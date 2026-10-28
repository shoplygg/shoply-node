// Shoply's API from your own server: every route as a method, with types, retries that are safe
// to repeat, a page at a time or all of it, and checking a webhook came from Shoply.
//
//   import Shoply from "@shoplygg/node";
//
//   const shoply = new Shoply({ apiKey: process.env.SHOPLY_API_KEY });
//   const order = await shoply.orders.show("8f2c...");
//
// A route's id in the API reference is its method: `orders.show` is `shoply.orders.show()`.
// The Customer API, which a buyer's own device asks with a token of theirs, is ShoplyCustomer.
// An app connected to a seller's store by OAuth passes its token as `apiKey`, and `oauth` has
// the steps that get one.
// Docs: https://docs.shoply.gg/api-reference/node

import { EVENTS, OPERATIONS } from "./generated/operations.js";

export const VERSION = "0.7.0";

const API = "https://api.shoply.gg/v1";

const inBrowser = () => typeof window !== "undefined" && typeof window.document !== "undefined";

const sleep = (ms, signal) =>
  new Promise((done, fail) => {
    const timer = setTimeout(done, ms);
    signal?.addEventListener("abort", () => (clearTimeout(timer), fail(signal.reason)), { once: true });
  });

/**
 * A request Shoply refused, or one that never got an answer.
 *
 * `status` is the HTTP status (0 when nothing answered), `code` the word that does not change
 * (`not_found`, `missing_scope`, `validation_failed`, `rate_limited`... and `connection_error`
 * or `timeout` when nothing answered), `errors` what is wrong with each field for
 * `validation_failed`, `requestId` what to quote to Shoply about it, `retryAfter` the seconds
 * to wait when told to slow down, and `body` the whole answer.
 */
export class ShoplyError extends Error {
  constructor({ status = 0, message, code = null, errors = null, requestId = null, retryAfter = null, body = null, cause } = {}) {
    super(message, cause ? { cause } : undefined);
    this.name = "ShoplyError";
    this.status = status;
    this.code = code;
    this.errors = errors;
    this.requestId = requestId;
    this.retryAfter = retryAfter;
    this.body = body;
  }
}

/** One page of a list: `data` its rows, `page` which page, `pages` how many there are, `total` the rows in all. */
export class Page {
  constructor({ data, page, pages, total, meta }, next) {
    this.data = data ?? [];
    this.page = page;
    this.pages = pages ?? null;
    this.total = total ?? null;
    this.meta = meta ?? null;
    Object.defineProperty(this, "next", { value: next, enumerable: false });
  }

  hasNextPage() {
    return this.pages !== null && this.page < this.pages;
  }

  /** The page after this one, or null when this is the last. */
  async nextPage() {
    return this.hasNextPage() ? this.next(this.page + 1) : null;
  }

  /** Every row from this page on, asking for the next page as it goes. */
  async *[Symbol.asyncIterator]() {
    for (let page = this; page; page = await page.nextPage()) {
      yield* page.data;
    }
  }
}

/**
 * What a list method answers: a promise of its first page, which `for await` also walks row by
 * row through every page.
 */
export class PagePromise extends Promise {
  static get [Symbol.species]() {
    return Promise;
  }

  async *[Symbol.asyncIterator]() {
    yield* await this;
  }
}

// ── Asking ─────────────────────────────────────────────────────────────────────────────

const RETRY_STATUS = new Set([408, 429, 500, 502, 503, 504]);

class Transport {
  constructor({ baseURL, timeout, maxRetries, fetch: fetchFn, auth, agent }) {
    this.baseURL = String(baseURL ?? API).replace(/\/+$/, "");
    this.timeout = timeout ?? 60_000;
    this.maxRetries = maxRetries ?? 2;
    this.fetch = fetchFn ?? globalThis.fetch;
    this.auth = auth;
    this.agent = agent;

    if (typeof this.fetch !== "function") {
      throw new ShoplyError({ message: "No fetch to ask Shoply with. Use Node 20 or later, or pass `fetch` in the options.", code: "no_fetch" });
    }
  }

  /**
   * One request: `path` after /v1, `query` into the address, `body` as JSON or `form` as
   * multipart. Answers the parsed envelope, or the Response itself for a file.
   */
  async send({ method, path, query, body, form, idempotent, file }, options = {}) {
    const url = new URL(this.baseURL + path);

    for (const [name, value] of Object.entries(query ?? {})) {
      if (value === undefined || value === null) continue;
      for (const one of Array.isArray(value) ? value : [value]) url.searchParams.append(name, String(one));
    }

    const headers = { Accept: "application/json", ...(this.agent ? { "User-Agent": this.agent } : {}) };
    const token = await this.auth();

    if (token) headers.Authorization = `Bearer ${token}`;
    if (body !== undefined) headers["Content-Type"] = "application/json";

    // A change carries a key of its own, the same on every try, so that a try whose answer was
    // lost is answered as the first was rather than carried out twice.
    const key = idempotent ? options.idempotencyKey ?? globalThis.crypto.randomUUID() : null;

    if (key) headers["Idempotency-Key"] = key;

    Object.assign(headers, options.headers ?? {});

    const retries = options.maxRetries ?? this.maxRetries;
    const safe = method === "GET" || Boolean(key);

    for (let attempt = 0; ; attempt++) {
      const timeout = options.timeout ?? this.timeout;
      const timer = AbortSignal.timeout(timeout);
      const signal = options.signal ? either(options.signal, timer) : timer;
      let answer;

      try {
        answer = await this.fetch(url, {
          method,
          headers,
          body: form ?? (body !== undefined ? JSON.stringify(body) : undefined),
          signal,
        });
      } catch (error) {
        if (options.signal?.aborted) throw options.signal.reason ?? error;

        const timedOut = timer.aborted;
        const failure = new ShoplyError({
          message: timedOut ? `Shoply did not answer within ${timeout / 1000} seconds.` : `Shoply could not be reached: ${error.cause?.code ?? error.message}`,
          code: timedOut ? "timeout" : "connection_error",
          cause: error,
        });

        // Whether a change that got no answer was made is not known: only one with a key is sent again.
        if (safe && attempt < retries) {
          await sleep(backoff(attempt), options.signal);
          continue;
        }

        throw failure;
      }

      if (answer.ok && file) return answer;

      const text = await answer.text();
      let parsed = null;

      try {
        parsed = text ? JSON.parse(text) : null;
      } catch {
        parsed = null;
      }

      if (answer.ok && parsed && parsed.success !== false) return parsed;

      const retryAfter = Number.parseInt(answer.headers.get("retry-after") ?? "", 10);
      const error = new ShoplyError({
        status: answer.status,
        message: parsed?.message || `Shoply answered ${answer.status}.`,
        code: parsed?.code ?? null,
        errors: parsed?.errors ?? null,
        requestId: answer.headers.get("x-request-id"),
        retryAfter: Number.isFinite(retryAfter) ? retryAfter : null,
        body: parsed ?? text,
      });

      // Told to slow down or to wait for the same request still running, and anything the server
      // could not answer: tried again, after as long as it said where it said, where it is safe
      // to. A change with no key is never sent again by itself: a buyer's sign-in told to wait
      // is theirs to see at once, not a minute later.
      const again =
        safe &&
        attempt < retries &&
        (RETRY_STATUS.has(answer.status) || (answer.status === 409 && error.code === "request_in_progress"));

      if (again && (error.retryAfter === null || error.retryAfter <= 60)) {
        await sleep(error.retryAfter !== null ? error.retryAfter * 1000 : backoff(attempt), options.signal);
        continue;
      }

      throw error;
    }
  }
}

/** A signal that aborts when either does. AbortSignal.any where there is one (Node 20.3 on). */
function either(a, b) {
  if (typeof AbortSignal.any === "function") return AbortSignal.any([a, b]);

  const both = new AbortController();

  for (const one of [a, b]) {
    if (one.aborted) both.abort(one.reason);
    else one.addEventListener("abort", () => both.abort(one.reason), { once: true });
  }

  return both.signal;
}

const backoff = (attempt) => Math.min(8000, 500 * 2 ** attempt) * (0.75 + Math.random() * 0.5);

/** Options a call takes after its fields. */
const OPTION_NAMES = ["idempotencyKey", "maxRetries", "signal"];

/** What a list, a file or anything else is made of, for one route. */
function prepare(op, args) {
  const values = [...args];
  const path = {};

  for (const name of op.params) {
    const value = values.shift();

    if (typeof value !== "string" || value === "") {
      throw new TypeError(`${op.id} needs ${name} as its ${op.params.indexOf(name) + 1 === 1 ? "first" : "next"} argument.`);
    }

    path[name] = value;
  }

  const takesParams = op.upload || op.body || op.query.length > 0;
  const params = takesParams ? values.shift() ?? {} : {};
  const options = values.shift() ?? {};

  if (params === null || typeof params !== "object" || Array.isArray(params)) {
    throw new TypeError(`${op.id} takes its fields as one object.`);
  }

  // An option among the fields would be sent as a field and do nothing. No route has a field
  // by these names (scripts/generate.mjs holds that), so one here is a mistake.
  for (const name of OPTION_NAMES) {
    if (name in params) {
      throw new TypeError(`${name} is an option: pass it after the fields, as ${op.id}(${[...op.params, takesParams ? "fields" : null].filter(Boolean).join(", ")}, { ${name} }).`);
    }
  }

  let query;
  let body;
  let form;

  if (op.upload) {
    form = new FormData();
    form.append(op.upload, toBlob(params.file, params.contentType), params.filename ?? params.file?.name ?? "upload");
    // What the route takes beside the file (a dispute's file says its `kind`) is in the address.
    query = Object.fromEntries(op.query.filter((name) => params[name] !== undefined).map((name) => [name, params[name]]));
  } else if (op.body) {
    query = {};
    body = {};

    for (const [name, value] of Object.entries(params)) {
      (op.query.includes(name) ? query : body)[name] = value;
    }
  } else {
    query = params;
  }

  return { path, params, query, body, form, options };
}

function toBlob(file, contentType) {
  if (typeof Blob !== "undefined" && file instanceof Blob) return file;
  if (file instanceof ArrayBuffer || ArrayBuffer.isView(file)) return new Blob([file], contentType ? { type: contentType } : {});
  throw new TypeError("An upload takes `file` as a Blob, a File, a Buffer, a Uint8Array or an ArrayBuffer.");
}

const fill = (template, values) => template.replace(/\{([A-Za-z]+)\}/g, (_, name) => encodeURIComponent(values[name]));

/** The methods of a set of routes, as nested objects: `orders.show` becomes `orders.show()`. */
function attach(target, ops, call) {
  for (const op of ops) {
    const parts = op.name.split(".");
    let node = target;

    for (const part of parts.slice(0, -1)) node = node[part] ??= {};

    node[parts.at(-1)] = (...args) => call(op, args);
  }
}

// ── The keyed API ──────────────────────────────────────────────────────────────────────

/**
 * The keyed API: a store's own server, with a secret API key made under Developers in the
 * dashboard. Every route of the API reference is a method, named by its id.
 */
export class Shoply {
  static VERSION = VERSION;
  static EVENTS = EVENTS;

  #transport;
  #storeId;

  /**
   * @param options.apiKey     `shoply_sk_...`, or an app's token (`shoply_at_...`). Left out, SHOPLY_API_KEY from the environment.
   * @param options.storeId    The store's ID. Left out, it is asked of the key the first time it is needed.
   * @param options.timeout    How long one try waits for an answer, in milliseconds. 60 seconds.
   * @param options.maxRetries How many more tries a request that can be repeated safely is given. 2.
   */
  constructor(options = {}) {
    if (inBrowser()) {
      throw new ShoplyError({
        message: "A secret API key is never put in a web page: anybody could read it there. Ask Shoply from your server, and use the Customer API (ShoplyCustomer) in a buyer's browser.",
        code: "browser",
      });
    }

    const apiKey = options.apiKey ?? globalThis.process?.env?.SHOPLY_API_KEY;

    if (typeof apiKey !== "string" || !(apiKey.startsWith("shoply_sk_") || apiKey.startsWith("shoply_at_"))) {
      throw new ShoplyError({
        message: "Pass the store's secret API key as `apiKey` (shoply_sk_...), or an app's token (shoply_at_...), or set SHOPLY_API_KEY.",
        code: "api_key_required",
      });
    }

    this.#storeId = options.storeId ? Promise.resolve(options.storeId) : null;
    this.#transport = new Transport({ ...options, auth: () => apiKey, agent: userAgent() });

    attach(
      this,
      OPERATIONS.filter((op) => !op.customer),
      (op, args) => this.#call(op, args),
    );
  }

  /** The store the key belongs to, asked once and remembered. */
  async storeId() {
    this.#storeId ??= this.#transport.send({ method: "GET", path: "/key" }).then(
      (answer) => answer.data.store.id,
      (error) => {
        this.#storeId = null;
        throw error;
      },
    );

    return this.#storeId;
  }

  /**
   * Any route, by its method and its address after /v1, for one newer than this package:
   * `{storeId}` in the path is filled in. Answers the whole envelope: `data`, and `meta`,
   * `pages` and `total` where the route has them.
   */
  async request(method, path, { query, body } = {}, options = {}) {
    const verb = method.toUpperCase();
    const filled = path.includes("{storeId}") ? path.replace("{storeId}", encodeURIComponent(await this.storeId())) : path;

    return this.#transport.send({ method: verb, path: filled, query, body, idempotent: verb !== "GET" }, options);
  }

  #call(op, args) {
    const { path, params, query, body, form, options } = prepare(op, args);

    const fetchPage = async (page) => {
      const storeId = op.path.includes("{storeId}") ? await this.storeId() : undefined;
      const pageQuery = op.paged ? { ...query, page } : query;
      const answer = await this.#transport.send(
        { method: op.method, path: fill(op.path, { ...path, storeId }), query: pageQuery, body, form, idempotent: op.idempotent, file: op.file },
        options,
      );

      if (op.file) return answer;
      if (!op.paged) return answer.data;

      return new Page({ ...answer, page }, fetchPage);
    };

    if (op.paged) {
      const first = Number.isInteger(params.page) && params.page > 0 ? params.page : 1;
      return new PagePromise((resolve, reject) => fetchPage(first).then(resolve, reject));
    }

    return fetchPage();
  }
}

// ── The Customer API ───────────────────────────────────────────────────────────────────

/**
 * The Customer API: a buyer signed in on your own site or app, with a code emailed to them.
 * Safe in a browser: it holds the buyer's own token and no key.
 *
 *   const buyer = new ShoplyCustomer({ storeId });
 *   await buyer.login({ email });
 *   await buyer.verify({ email, code });   // keeps the token it answers
 *   const me = await buyer.show();
 */
export class ShoplyCustomer {
  static VERSION = VERSION;

  #transport;

  /**
   * @param options.storeId The store's ID, from Settings, General. It is not a secret.
   * @param options.token   A token from an earlier sign-in (`shoply_ct_...`), if you kept one.
   */
  constructor(options = {}) {
    if (typeof options.storeId !== "string" || options.storeId === "") {
      throw new ShoplyError({ message: "Pass the store's ID as `storeId`. It is in Settings, General, in the store's dashboard.", code: "store_id_required" });
    }

    this.storeId = options.storeId;
    this.token = options.token ?? null;
    this.#transport = new Transport({ ...options, auth: () => this.token, agent: inBrowser() ? null : userAgent() });

    attach(
      this,
      OPERATIONS.filter((op) => op.customer),
      (op, args) => this.#call(op, args),
    );
  }

  async #call(op, args) {
    const { path, query, body, options } = prepare(op, args);

    if (op.signedIn && !this.token) {
      throw new ShoplyError({ message: "Sign the buyer in first: login, then verify with the code they were emailed.", code: "customer_token_required" });
    }

    const answer = await this.#transport.send(
      { method: op.method, path: fill(op.path, { ...path, storeId: this.storeId }), query, body, idempotent: false },
      options,
    );

    // Signing in hands out the token; signing out ends it.
    if (op.name === "verify" && answer.data?.token) this.token = answer.data.token;
    if (op.name === "logout" || op.name === "logoutEverywhere") this.token = null;

    return answer.data;
  }
}

// ── Webhooks ───────────────────────────────────────────────────────────────────────────

const encoder = new TextEncoder();

async function hmac(secret, text) {
  const key = await globalThis.crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const signed = new Uint8Array(await globalThis.crypto.subtle.sign("HMAC", key, encoder.encode(text)));

  return [...signed].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

const header = (headers, name) => {
  if (!headers) return null;
  if (typeof headers.get === "function") return headers.get(name);

  const found = Object.entries(headers).find(([key]) => key.toLowerCase() === name);
  const value = found?.[1];

  return Array.isArray(value) ? value[0] : value ?? null;
};

const rawText = (payload) => {
  if (typeof payload === "string") return payload;
  if (payload instanceof ArrayBuffer || ArrayBuffer.isView(payload)) return new TextDecoder().decode(payload);

  throw new TypeError("Pass the request's raw body, as it arrived: a string or a Buffer. A parsed object can't be checked, since the signature is of the exact bytes.");
};

/** Checking that a webhook came from Shoply, and making a signed one to test your handler with. */
export const webhooks = {
  /**
   * The event, once its signature checks out with the endpoint's signing secret and it was sent
   * within `tolerance` seconds (300). Throws a ShoplyError with code `invalid_signature` or
   * `too_old` otherwise.
   */
  async verify(payload, headers, secret, { tolerance = 300 } = {}) {
    const text = rawText(payload);
    const timestamp = header(headers, "x-shoply-timestamp");
    const given = header(headers, "x-shoply-signature");

    if (typeof secret !== "string" || secret === "") throw new TypeError("Pass the endpoint's signing secret, from its page under Developers, Webhooks.");

    if (!timestamp || !/^\d+$/.test(timestamp) || !given) {
      throw new ShoplyError({ message: "The request has no Shoply signature: X-Shoply-Timestamp and X-Shoply-Signature.", code: "invalid_signature" });
    }

    const expected = `v1=${await hmac(secret, `${timestamp}.${text}`)}`;
    const signatures = String(given).split(",").map((one) => one.trim());

    if (!signatures.some((one) => same(one, expected))) {
      throw new ShoplyError({ message: "The signature does not match. Check the signing secret, and that the body is the raw one.", code: "invalid_signature" });
    }

    if (Math.abs(Date.now() / 1000 - Number(timestamp)) > tolerance) {
      throw new ShoplyError({ message: `The webhook was signed more than ${tolerance} seconds ago.`, code: "too_old" });
    }

    return JSON.parse(text);
  },

  /** The headers Shoply would send with this body: for testing your own handler. */
  async sign(payload, secret, timestamp = Math.floor(Date.now() / 1000)) {
    const text = rawText(payload);

    return {
      "X-Shoply-Timestamp": String(timestamp),
      "X-Shoply-Signature": `v1=${await hmac(secret, `${timestamp}.${text}`)}`,
    };
  },
};

/** Two strings compared in the same time whatever they hold. */
function same(a, b) {
  if (a.length !== b.length) return false;

  let difference = 0;

  for (let i = 0; i < a.length; i++) difference |= a.charCodeAt(i) ^ b.charCodeAt(i);

  return difference === 0;
}

Shoply.webhooks = webhooks;

// ── OAuth ──────────────────────────────────────────────────────────────────────────────

const DASHBOARD = "https://dashboard.shoply.gg";

const base64url = (bytes) => btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

/** An OAuth answer that was an error, as a ShoplyError: `code` is OAuth's own word (`invalid_grant`...). */
async function oauthPost(path, form, { clientId, clientSecret, baseURL, fetch: fetchFn }) {
  const headers = { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json", "User-Agent": userAgent() };

  if (clientSecret) {
    headers.Authorization = `Basic ${btoa(`${encodeURIComponent(clientId)}:${encodeURIComponent(clientSecret)}`)}`;
  } else {
    form.client_id = clientId;
  }

  let answer;

  try {
    answer = await (fetchFn ?? globalThis.fetch)(`${String(baseURL ?? API).replace(/\/+$/, "")}${path}`, {
      method: "POST",
      headers,
      body: new URLSearchParams(form).toString(),
    });
  } catch (cause) {
    throw new ShoplyError({ message: "Shoply did not answer.", code: "connection_error", cause });
  }

  const text = await answer.text();
  let body = null;

  try {
    body = text === "" ? {} : JSON.parse(text);
  } catch {
    body = null;
  }

  if (!answer.ok) {
    throw new ShoplyError({
      status: answer.status,
      code: body?.error ?? (answer.status === 429 ? "rate_limited" : "oauth_error"),
      message: body?.error_description ?? body?.message ?? `Shoply answered ${answer.status}.`,
      retryAfter: Number(answer.headers.get("retry-after")) || null,
      body,
    });
  }

  return body ?? {};
}

/**
 * Connecting an app to a seller's store, by OAuth's authorization code flow:
 *
 *   1. Send the seller to `authorizeUrl()`. With PKCE (always, for a desktop or phone app),
 *      make a pair with `pkce()` first, keep its verifier and send its challenge.
 *   2. They come back to your redirect URL with `code` and your `state`. Check the state.
 *   3. `exchange()` the code, on your server with the client secret, or with the verifier.
 *   4. The token is a key of their store: `new Shoply({ apiKey: token })`. It works until the
 *      seller disconnects the app; `revoke()` gives it up.
 */
export const oauth = {
  /** The page to send a seller to. `state` is yours, sent back unchanged: check it. */
  authorizeUrl({ clientId, redirectUri, state, codeChallenge, dashboardURL = DASHBOARD } = {}) {
    if (!clientId || !redirectUri) throw new TypeError("Pass the app's clientId and the redirectUri the seller is sent back to.");

    const url = new URL("/oauth/authorize/", dashboardURL);

    url.searchParams.set("response_type", "code");
    url.searchParams.set("client_id", clientId);
    url.searchParams.set("redirect_uri", redirectUri);
    if (state) url.searchParams.set("state", state);

    if (codeChallenge) {
      url.searchParams.set("code_challenge", codeChallenge);
      url.searchParams.set("code_challenge_method", "S256");
    }

    return url.toString();
  },

  /** A PKCE pair: keep `verifier` until the code comes back, and send `challenge`. */
  async pkce() {
    const verifier = base64url(globalThis.crypto.getRandomValues(new Uint8Array(32)));
    const challenge = base64url(new Uint8Array(await globalThis.crypto.subtle.digest("SHA-256", encoder.encode(verifier))));

    return { verifier, challenge, method: "S256" };
  },

  /** A random `state`, to keep with the seller's session and compare when they come back. */
  state() {
    return base64url(globalThis.crypto.getRandomValues(new Uint8Array(16)));
  },

  /**
   * The code swapped for the token. A web app sends its client secret; a desktop or phone app
   * sends the PKCE verifier and no secret. Throws a ShoplyError whose `code` is OAuth's word:
   * `invalid_grant` (the code is wrong, used, or older than ten minutes), `invalid_client`.
   */
  async exchange({ clientId, clientSecret, code, redirectUri, codeVerifier, baseURL, fetch } = {}) {
    if (!clientId || !code || !redirectUri) throw new TypeError("Pass clientId, the code and the redirectUri it came back to.");

    const form = { grant_type: "authorization_code", code, redirect_uri: redirectUri };

    if (codeVerifier) form.code_verifier = codeVerifier;

    const body = await oauthPost("/oauth/token", form, { clientId, clientSecret, baseURL, fetch });

    return {
      accessToken: body.access_token,
      tokenType: body.token_type,
      scopes: String(body.scope ?? "").split(" ").filter(Boolean),
      storeId: body.store_id,
    };
  },

  /** A token given up: it stops working at once. Answered the same whether or not there was one. */
  async revoke({ clientId, clientSecret, token, baseURL, fetch } = {}) {
    if (!clientId || !token) throw new TypeError("Pass clientId and the token to give up.");

    await oauthPost("/oauth/revoke", { token }, { clientId, clientSecret, baseURL, fetch });
  },
};

Shoply.oauth = oauth;

function userAgent() {
  const runtime = globalThis.process?.versions?.node ? `node/${globalThis.process.versions.node}` : "unknown";

  return `shoply-node/${VERSION} (${runtime})`;
}

export default Shoply;
