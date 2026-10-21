// Types for @shoplygg/node. The routes' own types are in generated/api.d.ts, written from the API
// reference: a route's id is its method, `orders.show` is `shoply.orders.show()`.

import type {
  ShoplyCustomerResources,
  ShoplyResources,
  WebhookEventData,
  WebhookEventName,
} from "./generated/api.js";

export * from "./generated/api.js";

export declare const VERSION: string;

export interface ClientOptions {
  /** `shoply_sk_...`, made under Developers, API Keys. Left out, SHOPLY_API_KEY from the environment. */
  apiKey?: string;
  /** The store's ID. Left out, it is asked of the key the first time it is needed. */
  storeId?: string;
  /** Where the API is. Left out, https://api.shoply.gg/v1. */
  baseURL?: string;
  /** How long one try waits for an answer, in milliseconds. Left out, 60 seconds. */
  timeout?: number;
  /** How many more tries a request that is safe to repeat is given. Left out, 2. */
  maxRetries?: number;
  /** The fetch to ask with. Left out, the global one. */
  fetch?: typeof fetch;
}

export interface CustomerOptions extends Omit<ClientOptions, "apiKey" | "storeId"> {
  /** The store's ID, from Settings, General. It is not a secret. */
  storeId: string;
  /** A token from an earlier sign-in (`shoply_ct_...`), if you kept one. */
  token?: string | null;
}

export interface RequestOptions {
  /**
   * A word of your own for this one change, so that sending it again is answered as the first
   * time and not carried out twice. Left out, a new one is made for each call, kept the same
   * on its retries.
   */
  idempotencyKey?: string;
  /** How long one try waits, in milliseconds. */
  timeout?: number;
  /** How many more tries this request is given. */
  maxRetries?: number;
  /** Stops the request. */
  signal?: AbortSignal;
  /** More headers to send. */
  headers?: Record<string, string>;
}

/** A file to upload: a Blob, a File, a Buffer, a Uint8Array or an ArrayBuffer. */
export interface FileUpload {
  file: Blob | ArrayBuffer | ArrayBufferView;
  /** Its name. Left out, the File's own, or "upload". */
  filename?: string;
  /** Its type, for bytes that are not a Blob: "image/png". */
  contentType?: string;
}

/**
 * A request Shoply refused, or one that never got an answer. `status` is 0 when nothing answered,
 * and `code` then `connection_error` or `timeout`.
 */
export declare class ShoplyError extends Error {
  readonly status: number;
  /** The word that does not change: `not_found`, `missing_scope`, `validation_failed`, `rate_limited`... */
  readonly code: string | null;
  /** For `validation_failed`: what is wrong with each field, by its name. */
  readonly errors: Record<string, string> | null;
  /** What to quote to Shoply about this request. */
  readonly requestId: string | null;
  /** Seconds to wait before asking again, when told to slow down. */
  readonly retryAfter: number | null;
  /** The whole answer. */
  readonly body: unknown;
}

/** One page of a list. Walk every row from it on with `for await`. */
export declare class Page<T> implements AsyncIterable<T> {
  readonly data: T[];
  /** Which page this is. The first is 1. */
  readonly page: number;
  /** How many pages there are. */
  readonly pages: number | null;
  /** How many rows there are in all. */
  readonly total: number | null;
  /** Anything else the list answers beside its rows: counts, figures. */
  readonly meta: Record<string, unknown> | null;
  hasNextPage(): boolean;
  /** The page after this one, or null when this is the last. */
  nextPage(): Promise<Page<T> | null>;
  [Symbol.asyncIterator](): AsyncIterator<T>;
}

/** What a list method answers: its first page, and with `for await`, every row of every page. */
export declare class PagePromise<T> extends Promise<Page<T>> implements AsyncIterable<T> {
  [Symbol.asyncIterator](): AsyncIterator<T>;
}

/** An envelope as `request()` answers it. */
export interface Envelope<T = unknown> {
  success: true;
  message: string | null;
  code: string | null;
  data: T;
  meta?: Record<string, unknown>;
  pages?: number;
  total?: number;
}

export interface Shoply extends ShoplyResources {}

/** The keyed API: a store's own server, with its secret API key. */
export declare class Shoply {
  static readonly VERSION: string;
  static readonly EVENTS: readonly WebhookEventName[];
  static readonly webhooks: Webhooks;
  constructor(options?: ClientOptions);
  /** The store the key belongs to, asked once and remembered. */
  storeId(): Promise<string>;
  /**
   * Any route, by its method and its address after /v1 (`{storeId}` filled in), for one newer
   * than this package. Answers the whole envelope.
   */
  request<T = unknown>(
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    path: string,
    params?: { query?: Record<string, unknown>; body?: unknown },
    options?: RequestOptions,
  ): Promise<Envelope<T>>;
}

export interface ShoplyCustomer extends ShoplyCustomerResources {}

/**
 * The Customer API: a buyer signed in with a code emailed to them, on your own site or in an app.
 * Safe in a browser: it holds the buyer's own token and no key. `verify` keeps the token it
 * answers, and signing out forgets it.
 */
export declare class ShoplyCustomer {
  static readonly VERSION: string;
  constructor(options: CustomerOptions);
  readonly storeId: string;
  /** The buyer's token, once signed in: keep it to sign them in again without a code. */
  token: string | null;
}

/** A webhook Shoply sent, once its signature is checked. Narrow it with `event.event`. */
export interface WebhookEvent<E extends WebhookEventName = WebhookEventName> {
  /** The event's ID: the same on every try of it. */
  id: string;
  event: E;
  createdAt: string;
  storeId: string;
  data: WebhookEventData[E];
}

/** Every event, as a union that `switch (event.event)` narrows. */
export type AnyWebhookEvent = { [E in WebhookEventName]: WebhookEvent<E> }[WebhookEventName];

export interface Webhooks {
  /**
   * The event, once its signature checks out with the endpoint's signing secret and it was sent
   * within `tolerance` seconds (300). Pass the raw body, as it arrived. Throws a ShoplyError with
   * code `invalid_signature` or `too_old` otherwise.
   */
  verify(
    payload: string | ArrayBuffer | ArrayBufferView,
    headers: Headers | Record<string, string | string[] | undefined>,
    secret: string,
    options?: { tolerance?: number },
  ): Promise<AnyWebhookEvent>;
  /** The headers Shoply would send with this body, for testing your own handler. */
  sign(
    payload: string | ArrayBuffer | ArrayBufferView,
    secret: string,
    timestamp?: number,
  ): Promise<{ "X-Shoply-Timestamp": string; "X-Shoply-Signature": string }>;
}

export declare const webhooks: Webhooks;

export default Shoply;
