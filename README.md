# @shoplygg/node

Shoply's API from your own server. Every route of the [API reference](https://docs.shoply.gg/api-reference/introduction) is a method, with TypeScript types, safe retries, lists a page at a time or all at once, and checking that a webhook came from Shoply.

```sh
npm install @shoplygg/node
```

Node 20 or later. No dependencies.

```js
import Shoply from "@shoplygg/node";

const shoply = new Shoply({ apiKey: process.env.SHOPLY_API_KEY });

const order = await shoply.orders.show("ORDER_ID");

for await (const customer of shoply.customers.list({ search: "gmail.com" })) {
  console.log(customer.emailAddress);
}

const coupon = await shoply.coupons.create({ code: "SPRING10", value: 10 });
```

Make the key under **Developers**, **API Keys** in the dashboard, with the permissions your code needs. It is a secret: the client refuses to start in a web page.

A route's method is its id: **Get an order** is `orders.show`, so `shoply.orders.show(orderId)`. The address's IDs come first, in order, then the fields as one object, then options.

## Errors

A refusal is a `ShoplyError`, with `status`, `code` (`not_found`, `missing_scope`, `validation_failed`...), `errors` for each field that is wrong, and `requestId`.

```js
import { ShoplyError } from "@shoplygg/node";

try {
  await shoply.coupons.create({ code: "SPRING10", value: 10 });
} catch (error) {
  if (error instanceof ShoplyError && error.code === "validation_failed") console.log(error.errors);
}
```

A change is sent with an `Idempotency-Key`, the same on every try, so a try whose answer was lost is never carried out twice. Pass `{ idempotencyKey }` in the options, the last argument, to use your own.

## Webhooks

```js
import express from "express";
import { webhooks } from "@shoplygg/node";

const app = express();

app.post("/shoply", express.raw({ type: "application/json" }), async (req, res) => {
  const event = await webhooks.verify(req.body, req.headers, process.env.SHOPLY_WEBHOOK_SECRET);

  if (event.event === "order.paid") {
    // event.data is the order
  }

  res.sendStatus(200);
});
```

## The Customer API

`ShoplyCustomer` signs a buyer in with a code emailed to them, and reads their own orders, keys and subscriptions. It holds the buyer's token and no key, so it is safe in a browser or an app.

```js
import { ShoplyCustomer } from "@shoplygg/node";

const buyer = new ShoplyCustomer({ storeId: "YOUR_STORE_ID" });

await buyer.login({ email });
await buyer.verify({ email, code });
const me = await buyer.show();
```

The whole guide: https://docs.shoply.gg/api-reference/node
