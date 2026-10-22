// Written by scripts/generate.mjs from the API reference. Do not edit by hand.
//
// What a route takes is the API's own description of it. What it answers is read off an answer
// the route gave, as the reference's is: a field that was text there may be null in another
// answer, and a route with no recorded answer answers `unknown`.

import type { FileUpload, PagePromise, RequestOptions } from "../index.js";

/** What get the current key answers: `key.show`. */
export type KeyShowResult = {
  key: {
    id: string;
    name: string;
    prefix: string;
    scopes: string[];
    allowedIps: unknown[] | Record<string, unknown>;
    allowedDomains: unknown[] | Record<string, unknown>;
    expiresAt: unknown;
    expired: boolean;
    createdAt: string;
    lastUsedAt: unknown;
    revokedAt: unknown;
  };
  app: unknown;
  store: {
    id: string;
    name: string;
    slug: string;
    url: string;
  };
  api: string;
};

/** What get the store answers: `store.show`. */
export type StoreShowResult = {
  id: string;
  name: string;
  slug: string;
  urlChangeableAt: unknown;
  supportUrl: string;
  guideUrl: string;
  panelUrl: string;
  socialLinks: {
    discord: string;
    youtube: string;
    tiktok: string;
    x: string;
    instagram: string;
    telegram: string;
  };
  customLinks: unknown[] | Record<string, unknown>;
  description: string;
  currencyCode: string;
  adaptivePricing: boolean;
  currencies: {
    code: string;
    name: string;
  }[];
  ratesFetchedAt: string;
  locale: string;
  logoUrl: unknown;
  faviconUrl: unknown;
  storefrontPassword: string;
  storefrontPasswordUnreadable: boolean;
  accentColor: string;
  theme: string;
  publishStock: boolean;
  lowStockThreshold: number;
  dashboardCards: string[];
  termsOfService: string;
  refundPolicy: string;
  autoReviews: boolean;
  publicStats: boolean;
  saleNotifications: boolean;
  publicOnline: boolean;
  active: boolean;
  blocked: unknown;
  businessType: string;
  businessName: string;
  businessTaxId: string;
  businessVatNumber: string;
  businessLine1: string;
  businessLine2: string;
  businessCity: string;
  businessRegion: string;
  businessPostalCode: string;
  businessCountry: string;
  invoiceFooter: string;
  originCountry: string;
  hasDynamicSecret: boolean;
  dynamicSecretEnd: string;
  updatedAt: string;
  settingsVersion: string;
};

/** What update the store takes: `store.update`. */
export interface StoreUpdateParams {
  /** The store's name. */
  name: string;
  /** What the store says about itself. */
  description?: string;
  /** The currency its prices are in, as a three-letter code. */
  currencyCode?: string;
  /** Whether buyers are shown and charged prices in their own currency. */
  adaptivePricing?: boolean;
  /** The store's colour, as `#rrggbb`. */
  accentColor?: string;
  /** The store's language and region, like `en-GB` or `de-DE`. */
  locale?: string;
  /** How few license keys a variant has left when the store is alerted. */
  lowStockThreshold?: number;
  /** Where buyers get help. */
  supportUrl?: string;
  /** Where buyers find instructions. */
  guideUrl?: string;
  /** A panel of the store's own that buyers sign in to. */
  panelUrl?: string;
  /** The store's social networks: a network's name and its link. A blank link clears that network. */
  socialLinks?: Record<string, unknown>;
  /** Links of the store's own, shown with its socials. */
  customLinks?: {
    /** What it says. */
    label: string;
    /** Where it leads. */
    url: string;
    /** The icon drawn beside it. */
    icon?: string;
  }[];
  /** The store's terms, as text. */
  termsOfService?: string;
  /** The store's refund policy, as text. */
  refundPolicy?: string;
  /** The store's logo, as "Get the store" answers it. Empty removes it. */
  logoUrl?: string;
  /** The icon in the browser tab on the store's site. Empty removes it. */
  faviconUrl?: string;
  /** A password visitors have to enter to see the storefront. Empty opens it to everybody. */
  storefrontPassword?: string;
  /** Whether the storefront shows how many of a variant are left. */
  publishStock?: boolean;
  /** Whether an order nobody reviewed is given five stars after seven days. */
  autoReviews?: boolean;
  /** Whether the storefront shows items sold and customers. */
  publicStats?: boolean;
  /** Whether the storefront shows a note when somebody buys. */
  saleNotifications?: boolean;
  /** Whether the storefront shows how many visitors are on it. */
  publicOnline?: boolean;
  /** Whether the store is open. Switched off, nothing can be bought. */
  active?: boolean;
  /** What kind of business it is. */
  businessType?: "sole_proprietorship" | "partnership" | "llc" | "corporation" | "nonprofit" | "other";
  /** The business's name, printed on invoices. With `businessCountry`, it opens Finance. */
  businessName?: string;
  /** Its tax number. */
  businessTaxId?: string;
  /** Its VAT number. */
  businessVatNumber?: string;
  /** The first line of its address. */
  businessLine1?: string;
  /** The second. */
  businessLine2?: string;
  /** Its city. */
  businessCity?: string;
  /** Its state or region. */
  businessRegion?: string;
  /** Its postal code. */
  businessPostalCode?: string;
  /** Its country, as a two-letter code. */
  businessCountry?: string;
  /** A line printed at the foot of every invoice. */
  invoiceFooter?: string;
  /** The `settingsVersion` you last read. Sent, the change is refused with `stale_write` only if something this route saves has changed since; the store's other settings (Support Tickets on or off, its tax, its payment options and the like) changing is not that. Use it rather than `expectedUpdatedAt`, which every one of them moves. */
  expectedVersion?: string;
  /** The `updatedAt` you last read. Sent, the change is refused with `stale_write` if the record has changed since. Left out, it is saved whatever happened in between. */
  expectedUpdatedAt?: string;
}

/** What update the store answers: `store.update`. */
export type StoreUpdateResult = {
  id: string;
  name: string;
  slug: string;
  urlChangeableAt: unknown;
  supportUrl: string;
  guideUrl: string;
  panelUrl: string;
  socialLinks: {
    discord: string;
    youtube: string;
    tiktok: string;
    x: string;
    instagram: string;
    telegram: string;
  };
  customLinks: unknown[] | Record<string, unknown>;
  description: string;
  currencyCode: string;
  adaptivePricing: boolean;
  currencies: {
    code: string;
    name: string;
  }[];
  ratesFetchedAt: string;
  locale: string;
  logoUrl: unknown;
  faviconUrl: unknown;
  storefrontPassword: string;
  storefrontPasswordUnreadable: boolean;
  accentColor: string;
  theme: string;
  publishStock: boolean;
  lowStockThreshold: number;
  dashboardCards: string[];
  termsOfService: string;
  refundPolicy: string;
  autoReviews: boolean;
  publicStats: boolean;
  saleNotifications: boolean;
  publicOnline: boolean;
  active: boolean;
  blocked: unknown;
  businessType: string;
  businessName: string;
  businessTaxId: string;
  businessVatNumber: string;
  businessLine1: string;
  businessLine2: string;
  businessCity: string;
  businessRegion: string;
  businessPostalCode: string;
  businessCountry: string;
  invoiceFooter: string;
  originCountry: string;
  hasDynamicSecret: boolean;
  dynamicSecretEnd: string;
  updatedAt: string;
  settingsVersion: string;
};

/** What change the store's address takes: `store.setAddress`. */
export interface StoreSetAddressParams {
  /** The new name: the part before `.myshoply.gg`. */
  slug: string;
}

/** What change the store's address answers: `store.setAddress`. */
export type StoreSetAddressResult = unknown;

/** What upload the store's logo answers: `store.uploadLogo`. */
export type StoreUploadLogoResult = unknown;

/** What upload the store's icon answers: `store.uploadFavicon`. */
export type StoreUploadFaviconResult = unknown;

/** What get email and alert settings answers: `store.emailSettings`. */
export type StoreEmailSettingsResult = {
  fromName: string;
  replyTo: string;
  defaultInstructions: string;
  buttons: unknown[] | Record<string, unknown>;
  buttonDefaultLabel: string;
  maxButtons: number;
  panelButtonUrl: string;
  autoReviews: boolean;
  firstOrderCouponEnabled: boolean;
  firstOrderCouponPercent: number;
  firstOrderCouponDays: number;
  firstOrderCouponDelivery: string;
  firstOrderCouponDelayMinutes: number;
  firstOrderCouponPrefix: string;
  maxFirstOrderPercent: number;
  maxFirstOrderDays: number;
  notifyEnabled: boolean;
  notifyAddress: string;
  emailStockEnabled: boolean;
  emailStockThreshold: number;
  emailPayoutsEnabled: boolean;
  emailCustomPaidEnabled: boolean;
  emailTicketsEnabled: boolean;
  emailDisputeOpenedEnabled: boolean;
  emailDisputeClosedEnabled: boolean;
  testEmailEvery: {
    limit: number;
    window: number;
  };
  discordWebhookSet: boolean;
  discordWebhookMasked: string;
  discordOrdersEnabled: boolean;
  discordStockEnabled: boolean;
  discordErrorsEnabled: boolean;
  discordReviewsEnabled: boolean;
  discordPayoutsEnabled: boolean;
  discordCustomPaidEnabled: boolean;
  discordTicketsEnabled: boolean;
  discordDisputesEnabled: boolean;
  discordStockThreshold: number;
  discordFailure: unknown;
  storeName: string;
  emailAccent: string;
  updatedAt: string;
  version: string;
};

/** What get the store's domain answers: `domain.show`. */
export type DomainShowResult = {
  domain: unknown;
  cnameTarget: string;
  available: boolean;
};

/** What connect a domain takes: `domain.connect`. */
export interface DomainConnectParams {
  /** The domain, with no `https://` in front. */
  hostname: string;
}

/** What connect a domain answers: `domain.connect`. */
export type DomainConnectResult = unknown;

/** What remove the store's domain answers: `domain.remove`. */
export type DomainRemoveResult = unknown;

/** What list payment methods answers: `paymentMethods.list`. */
export type PaymentMethodsListResult = Array<{
  provider: string;
  name: string;
  kind: string;
  blurb: string;
  tagline: string;
  accent: string;
  site: string;
  callbackUrl: string;
  returnOrigin: string;
  originHint: string;
  callbackHint: string;
  copies: unknown[] | Record<string, unknown>;
  authorizeUrl: string;
  connected: boolean;
  enabled: boolean;
  usable: boolean;
  ready: boolean;
  testMode: boolean;
  modes: unknown[] | Record<string, unknown>;
  mode: string;
  label: string;
  buyerLabel: string;
  defaultLabel: string;
  fields: {
    name: string;
    label: string;
    placeholder: string;
    required: boolean;
    max: number;
    secret: boolean;
    showCallback: boolean;
    mode: string;
    isSet: boolean;
    value: string;
  }[];
  toggles: {
    name: string;
    label: string;
    hint: string;
    group: string;
    needs: string;
    on: boolean;
  }[];
  unpaidHours: unknown;
  updatedAt: unknown;
}>;

/** What switch a payment method on or off takes: `paymentMethods.setEnabled`. */
export interface PaymentMethodsSetEnabledParams {
  /** Whether the checkout offers it. */
  enabled: boolean;
}

/** What switch a payment method on or off answers: `paymentMethods.setEnabled`. */
export type PaymentMethodsSetEnabledResult = unknown;

/** What sort payment methods takes: `paymentMethods.sort`. */
export interface PaymentMethodsSortParams {
  /** The methods' names in their new order. */
  providers: string[];
}

/** What sort payment methods answers: `paymentMethods.sort`. */
export type PaymentMethodsSortResult = unknown;

/** What switch paying with balance on or off takes: `paymentMethods.setBalance`. */
export interface PaymentMethodsSetBalanceParams {
  /** Whether buyers may pay with their balance. */
  enabled: boolean;
}

/** What switch paying with balance on or off answers: `paymentMethods.setBalance`. */
export type PaymentMethodsSetBalanceResult = Array<{
  provider: string;
  name: string;
  kind: string;
  blurb: string;
  tagline: string;
  accent: string;
  site: string;
  callbackUrl: string;
  returnOrigin: string;
  originHint: string;
  callbackHint: string;
  copies: unknown[] | Record<string, unknown>;
  authorizeUrl: string;
  connected: boolean;
  enabled: boolean;
  usable: boolean;
  ready: boolean;
  testMode: boolean;
  modes: unknown[] | Record<string, unknown>;
  mode: string;
  label: string;
  buyerLabel: string;
  defaultLabel: string;
  fields: {
    name: string;
    label: string;
    placeholder: string;
    required: boolean;
    max: number;
    secret: boolean;
    showCallback: boolean;
    mode: string;
    isSet: boolean;
    value: string;
  }[];
  toggles: {
    name: string;
    label: string;
    hint: string;
    group: string;
    needs: string;
    on: boolean;
  }[];
  unpaidHours: unknown;
  updatedAt: unknown;
}>;

/** What set how long an unpaid order is kept takes: `paymentMethods.setUnpaidHours`. */
export interface PaymentMethodsSetUnpaidHoursParams {
  /** Hours, from 1 to 336. */
  hours: number;
}

/** What set how long an unpaid order is kept answers: `paymentMethods.setUnpaidHours`. */
export type PaymentMethodsSetUnpaidHoursResult = Array<{
  provider: string;
  name: string;
  kind: string;
  blurb: string;
  tagline: string;
  accent: string;
  site: string;
  callbackUrl: string;
  returnOrigin: string;
  originHint: string;
  callbackHint: string;
  copies: unknown[] | Record<string, unknown>;
  authorizeUrl: string;
  connected: boolean;
  enabled: boolean;
  usable: boolean;
  ready: boolean;
  testMode: boolean;
  modes: unknown[] | Record<string, unknown>;
  mode: string;
  label: string;
  buyerLabel: string;
  defaultLabel: string;
  fields: {
    name: string;
    label: string;
    placeholder: string;
    required: boolean;
    max: number;
    secret: boolean;
    showCallback: boolean;
    mode: string;
    isSet: boolean;
    value: string;
  }[];
  toggles: {
    name: string;
    label: string;
    hint: string;
    group: string;
    needs: string;
    on: boolean;
  }[];
  unpaidHours: unknown;
  updatedAt: string;
}>;

/** What set a payment method's own time for an unpaid order takes: `paymentMethods.setMethodUnpaidHours`. */
export interface PaymentMethodsSetMethodUnpaidHoursParams {
  /** Hours, from 1 to 336, or null for the store's. */
  hours: number;
}

/** What set a payment method's own time for an unpaid order answers: `paymentMethods.setMethodUnpaidHours`. */
export type PaymentMethodsSetMethodUnpaidHoursResult = Array<{
  provider: string;
  name: string;
  kind: string;
  blurb: string;
  tagline: string;
  accent: string;
  site: string;
  callbackUrl: string;
  returnOrigin: string;
  originHint: string;
  callbackHint: string;
  copies: unknown[] | Record<string, unknown>;
  authorizeUrl: string;
  connected: boolean;
  enabled: boolean;
  usable: boolean;
  ready: boolean;
  testMode: boolean;
  modes: unknown[] | Record<string, unknown>;
  mode: string;
  label: string;
  buyerLabel: string;
  defaultLabel: string;
  fields: {
    name: string;
    label: string;
    placeholder: string;
    required: boolean;
    max: number;
    secret: boolean;
    showCallback: boolean;
    mode: string;
    isSet: boolean;
    value: string;
  }[];
  toggles: {
    name: string;
    label: string;
    hint: string;
    group: string;
    needs: string;
    on: boolean;
  }[];
  unpaidHours: number;
  updatedAt: string;
}>;

/** What get the overview takes: `analytics.overview`. */
export interface AnalyticsOverviewParams {
  /**
   * The period.
   *
   * Left out, it is "30d".
   */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** The first day of a period of your own, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Its last day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** What get the overview answers: `analytics.overview`. */
export type AnalyticsOverviewResult = {
  store: {
    id: string;
    name: string;
    slug: string;
  };
  range: {
    preset: string;
    from: string;
    to: string;
    days: number;
    timezone: string;
    inProgress: boolean;
  };
  currencyCode: string;
  totals: {
    revenue: number;
    orders: number;
    completedOrders: number;
    newCustomers: number;
    averageOrderValue: number;
    visitors: number;
    conversionRate: number;
    recovered: {
      revenue: number;
      orders: number;
    };
  };
  previous: {
    revenue: number;
    orders: number;
    newCustomers: number;
    averageOrderValue: number;
    visitors: number;
    conversionRate: number;
  };
  change: {
    revenue: unknown;
    orders: unknown;
    newCustomers: unknown;
    averageOrderValue: unknown;
    visitors: unknown;
    conversionRate: unknown;
  };
  funnel: {
    key: string;
    count: number;
    previousCount: number;
    rate: number;
    previousRate: number;
    change: unknown;
  }[];
  returningCustomers: {
    customers: number;
    returning: number;
    rate: number;
    previous: {
      customers: number;
      returning: number;
      rate: number;
    };
    change: unknown;
  };
  series: {
    bucket: string;
    points: {
      at: string;
      revenue: number;
      orders: number;
      previousAt: string;
      previousRevenue: number;
      previousOrders: number;
    }[];
  };
  customerSeries: {
    bucket: string;
    points: {
      at: string;
      customers: number;
      previousAt: string;
      previousCustomers: number;
    }[];
  };
  statusCounts: {
    completed: number;
    pending: number;
    refunded: number;
    cancelled: number;
    chargeback: number;
  };
  statusTotals: {
    completed: {
      orders: number;
      amount: number;
    };
    pending: {
      orders: number;
      amount: number;
    };
    refunded: {
      orders: number;
      amount: number;
    };
    cancelled: {
      orders: number;
      amount: number;
    };
    chargeback: {
      orders: number;
      amount: number;
    };
  };
  week: number[][];
  topCountries: {
    key: string;
    orders: number;
    revenue: number;
    share: number;
  }[];
  topPaymentMethods: {
    key: string;
    orders: number;
    revenue: number;
    share: number;
  }[];
  topProducts: {
    productName: string;
    units: number;
    orders: number;
    revenue: number;
  }[];
  lifetime: {
    products: number;
    orders: number;
    customers: number;
    categories: number;
  };
};

/** What get the visits report takes: `analytics.report`. */
export interface AnalyticsReportParams {
  /**
   * The period.
   *
   * Left out, it is "30d".
   */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** The first day of a period of your own, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Its last day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** What get the visits report answers: `analytics.report`. */
export type AnalyticsReportResult = {
  store: {
    id: string;
    name: string;
    slug: string;
  };
  range: {
    preset: string;
    from: string;
    to: string;
    days: number;
    timezone: string;
    inProgress: boolean;
  };
  currencyCode: string;
  totals: {
    sessions: number;
    visitors: number;
    pageViews: number;
    orders: number;
    revenue: number;
    visitOrders: number;
    visitRevenue: number;
    viewsPerSession: number;
    avgEngagedSeconds: number;
    measuredSessions: number;
    bounceRate: number;
    cartRate: number;
    conversionRate: number;
  };
  previous: {
    sessions: number;
    visitors: number;
    pageViews: number;
    orders: number;
    revenue: number;
    visitOrders: number;
    visitRevenue: number;
    viewsPerSession: number;
    avgEngagedSeconds: number;
    measuredSessions: number;
    bounceRate: number;
    cartRate: number;
    conversionRate: number;
  };
  change: {
    sessions: unknown;
    visitors: unknown;
    pageViews: unknown;
    orders: unknown;
    revenue: unknown;
    visitOrders: unknown;
    visitRevenue: unknown;
    viewsPerSession: unknown;
    avgEngagedSeconds: unknown;
    bounceRate: unknown;
    cartRate: unknown;
    conversionRate: unknown;
  };
  series: {
    bucket: string;
    points: {
      at: string;
      sessions: number;
      views: number;
      previousAt: string;
      previousSessions: number;
      previousViews: number;
    }[];
  };
  pages: {
    rows: unknown[] | Record<string, unknown>;
    distinct: number;
    views: number;
    coversFrom: string;
    retentionDays: number;
  };
  landing: {
    rows: unknown[] | Record<string, unknown>;
    distinct: number;
  };
  exit: {
    rows: unknown[] | Record<string, unknown>;
    distinct: number;
  };
  channels: {
    rows: unknown[] | Record<string, unknown>;
    distinct: number;
  };
  referrers: {
    rows: unknown[] | Record<string, unknown>;
    distinct: number;
  };
  devices: {
    rows: unknown[] | Record<string, unknown>;
    distinct: number;
  };
  browsers: {
    rows: unknown[] | Record<string, unknown>;
    distinct: number;
  };
  systems: {
    rows: unknown[] | Record<string, unknown>;
    distinct: number;
  };
  campaigns: {
    rows: unknown[] | Record<string, unknown>;
    distinct: number;
  };
  sources: {
    rows: unknown[] | Record<string, unknown>;
    distinct: number;
  };
  campaignSales: unknown[] | Record<string, unknown>;
  engines: {
    rows: unknown[] | Record<string, unknown>;
    sessions: number;
  };
  affiliates: unknown[] | Record<string, unknown>;
  countries: {
    rows: unknown[] | Record<string, unknown>;
    distinct: number;
  };
  cities: {
    rows: unknown[] | Record<string, unknown>;
  };
};

/** What get the live view takes: `analytics.live`. */
export interface AnalyticsLiveParams {
  /** The time zone "today" is in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** What get the live view answers: `analytics.live`. */
export type AnalyticsLiveResult = {
  windowMinutes: number;
  currencyCode: string;
  home: {
    countryCode: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  now: {
    visitors: number;
    carted: number;
    checkingOut: number;
    purchased: number;
  };
  today: {
    sessions: number;
    views: number;
    orders: number;
    revenue: number;
    from: string;
    timezone: string;
  };
  visitors: unknown[] | Record<string, unknown>;
  orders: unknown[] | Record<string, unknown>;
  topPages: unknown[] | Record<string, unknown>;
  topLocations: unknown[] | Record<string, unknown>;
};

/** What get visitors now answers: `analytics.visitorsNow`. */
export type AnalyticsVisitorsNowResult = {
  visitors: number;
  windowMinutes: number;
};

/** What get the search report takes: `analytics.search`. */
export interface AnalyticsSearchParams {
  /**
   * Which engine.
   *
   * Left out, it is "google".
   */
  provider?: "google" | "bing";
  /**
   * The period.
   *
   * Left out, it is "30d".
   */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** The first day of a period of your own, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Its last day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
  /** To ask about one thing: what kind of thing `value` is. */
  dimension?: "query" | "page" | "country" | "device";
  /** The one search, page, country or device to ask about. */
  value?: string;
  /** Only rows of one list that contain these words. */
  find?: string;
  /** Which list `find` narrows. */
  findIn?: "query" | "page";
}

/** What get the search report answers: `analytics.search`. */
export type AnalyticsSearchResult = unknown;

/** What list storefronts answers: `storefronts.list`. */
export type StorefrontsListResult = {
  id: string;
  name: string;
  theme: string;
  themeVersion: string;
  published: boolean;
  publishedAt: unknown;
  live: boolean;
  createdAt: string;
  updatedAt: string;
  code: boolean;
  engine: string;
  codeOnCopy: unknown;
  unpublished: boolean;
  accent: unknown;
  headingFont: unknown;
  pages: number;
}[];

/** What create a storefront takes: `storefronts.create`. */
export interface StorefrontsCreateParams {
  /** What to call it. */
  name: string;
  /**
   * The theme it starts from, by its ID in `meta.themes`.
   *
   * Left out, it is "simplistic".
   */
  theme?: string;
  /** A storefront to copy in place of starting from the theme, by its ID. */
  from?: string;
}

/** What create a storefront answers: `storefronts.create`. */
export type StorefrontsCreateResult = {
  id: string;
  name: string;
  theme: string;
  themeVersion: string;
  published: boolean;
  publishedAt: unknown;
  live: boolean;
  createdAt: string;
  updatedAt: string;
  code: boolean;
  engine: string;
  codeOnCopy: unknown;
  unpublished: boolean;
  accent: unknown;
  headingFont: unknown;
  pages: number;
}[];

/** What import a storefront answers: `storefronts.import`. */
export type StorefrontsImportResult = unknown;

/** What export a storefront answers: `storefronts.export`. */
export type StorefrontsExportResult = {
  filename: string;
  storefront: {
    kind: string;
    format: number;
    exportedAt: string;
    name: string;
    theme: string;
    design: {
      version: number;
      theme: {
        accent: string;
        accentText: string;
        page: string;
        cards: string;
        text: string;
        muted: string;
        border: string;
        tintArt: boolean;
        headingFont: string;
        bodyFont: string;
        headingWeight: string;
        radius: string;
        buttonRadius: string;
        pageWidth: number;
        motion: boolean;
        customCss: string;
      };
      announcement: {
        enabled: boolean;
        text: string;
        icon: string;
        link: string;
        bg: string;
        color: string;
        dismissible: boolean;
      };
      header: {
        showLogo: boolean;
        logo: string;
        logoSize: number;
        showName: boolean;
        categoriesMenu: boolean;
        categoriesLabel: string;
        nav: {
          label: unknown;
          link: unknown;
          icon: unknown;
        }[];
        featured: boolean;
        showBlog: boolean;
        showOnline: boolean;
        showSearch: boolean;
        showCart: boolean;
        showAccount: boolean;
        accountLabel: string;
      };
      footer: {
        showLogo: boolean;
        showName: boolean;
        tagline: string;
        about: string;
        columns: {
          title: unknown;
          links: unknown;
        }[];
        legalTitle: string;
        policies: boolean;
        privacy: string;
        help: boolean;
        helpTitle: string;
        helpText: string;
        helpLabel: string;
        helpLink: string;
        directory: boolean;
        socials: unknown[] | Record<string, unknown>;
        copyright: string;
      };
      cart: {
        openOnAdd: boolean;
        bar: boolean;
        showImages: boolean;
        title: string;
        checkoutLabel: string;
        note: string;
        emptyText: string;
        emptyLinkLabel: string;
        emptyLink: string;
      };
      pages: {
        id: string;
        kind: string;
        name: string;
        path: string;
        title: string;
        description: string;
        hideHeader: boolean;
        hideFooter: boolean;
        sections: unknown[];
      }[];
    };
    files: unknown;
  };
};

/** What rename a storefront takes: `storefronts.rename`. */
export interface StorefrontsRenameParams {
  /** The new name. */
  name: string;
}

/** What rename a storefront answers: `storefronts.rename`. */
export type StorefrontsRenameResult = {
  id: string;
  name: string;
  theme: string;
  themeVersion: string;
  published: boolean;
  publishedAt: unknown;
  live: boolean;
  createdAt: string;
  updatedAt: string;
  code: boolean;
  engine: string;
  codeOnCopy: unknown;
  unpublished: boolean;
  accent: unknown;
  headingFont: unknown;
  pages: number;
}[];

/** What delete a storefront answers: `storefronts.delete`. */
export type StorefrontsDeleteResult = {
  id: string;
  name: string;
  theme: string;
  themeVersion: string;
  published: boolean;
  publishedAt: string;
  live: boolean;
  createdAt: string;
  updatedAt: string;
  code: boolean;
  engine: string;
  codeOnCopy: unknown;
  unpublished: boolean;
  accent: unknown;
  headingFont: unknown;
  pages: number;
}[];

/** What make a storefront live takes: `storefronts.setLive`. */
export interface StorefrontsSetLiveParams {
  /**
   * For a storefront that was never published: publish it as it stands and make it live in one go. A mistake in one of its templates refuses it and names the file.
   *
   * Left out, it is false.
   */
  publish?: boolean;
}

/** What make a storefront live answers: `storefronts.setLive`. */
export type StorefrontsSetLiveResult = {
  id: string;
  name: string;
  theme: string;
  themeVersion: string;
  published: boolean;
  publishedAt: string;
  live: boolean;
  createdAt: string;
  updatedAt: string;
  code: boolean;
  engine: string;
  codeOnCopy: unknown;
  unpublished: boolean;
  accent: unknown;
  headingFont: unknown;
  pages: number;
}[];

/** What get a storefront's code answers: `storefronts.code`. */
export type StorefrontsCodeResult = {
  storefront: {
    id: string;
    name: string;
    theme: string;
    themeVersion: string;
    published: boolean;
    publishedAt: unknown;
    live: boolean;
    createdAt: string;
    updatedAt: string;
    code: boolean;
    engine: string;
    codeOnCopy: unknown;
    unpublished: boolean;
    accent: unknown;
    headingFont: unknown;
    pages: number;
  };
  theme: string;
  available: boolean;
  started: boolean;
  version: number;
  code: unknown;
  versions: unknown[] | Record<string, unknown>;
  preview: unknown;
};

/** What give a storefront files answers: `storefronts.codeStart`. */
export type StorefrontsCodeStartResult = {
  storefront: {
    id: string;
    name: string;
    theme: string;
    themeVersion: string;
    published: boolean;
    publishedAt: unknown;
    live: boolean;
    createdAt: string;
    updatedAt: string;
    code: boolean;
    engine: string;
    codeOnCopy: unknown;
    unpublished: boolean;
    accent: unknown;
    headingFont: unknown;
    pages: number;
  };
  theme: string;
  available: boolean;
  started: boolean;
  version: number;
  code: {
    rev: number;
    ahead: number;
    designAhead: boolean;
    base: string;
    files: {
      path: string;
      hash: string;
      size: number;
      added: boolean;
      changed: boolean;
      updatedAt: string;
    }[];
    problems: unknown[] | Record<string, unknown>;
    limits: {
      files: number;
      fileBytes: number;
      bytes: number;
      used: number;
    };
    folders: {
      layout: string[];
      pages: string[];
      elements: string[];
      parts: string[];
      assets: string[];
      locales: string[];
      config: string[];
    };
  };
  versions: unknown[] | Record<string, unknown>;
  preview: {
    url: string;
    param: string;
    token: string;
    seconds: number;
    pages: {
      name: string;
      path: string;
    }[];
  };
};

/** What get a file takes: `storefronts.codeFile`. */
export interface StorefrontsCodeFileParams {
  /** The file's path, its folder and its name: `pages/index.liquid`, `assets/theme.css`. */
  path: string;
}

/** What get a file answers: `storefronts.codeFile`. */
export type StorefrontsCodeFileResult = {
  path: string;
  hash: string;
  size: number;
  added: boolean;
  changed: boolean;
  updatedAt: string;
  content: string;
};

/** What save a file takes: `storefronts.codeSave`. */
export interface StorefrontsCodeSaveParams {
  /** The file's path, its folder and its name: `pages/index.liquid`, `assets/theme.css`. */
  path: string;
  /** The file's whole text. */
  content: string;
  /** The SHA-256 the file had when you read it. */
  was?: string;
}

/** What save a file answers: `storefronts.codeSave`. */
export type StorefrontsCodeSaveResult = {
  file: {
    path: string;
    hash: string;
    size: number;
    added: boolean;
    changed: boolean;
    updatedAt: string;
    content: string;
  };
  rev: number;
  code: {
    rev: number;
    ahead: number;
    designAhead: boolean;
    base: string;
    files: {
      path: string;
      hash: string;
      size: number;
      added: boolean;
      changed: boolean;
      updatedAt: string;
    }[];
    problems: unknown[] | Record<string, unknown>;
    limits: {
      files: number;
      fileBytes: number;
      bytes: number;
      used: number;
    };
    folders: {
      layout: string[];
      pages: string[];
      elements: string[];
      parts: string[];
      assets: string[];
      locales: string[];
      config: string[];
    };
  };
};

/** What add a file takes: `storefronts.codeAdd`. */
export interface StorefrontsCodeAddParams {
  /** The file's path, its folder and its name: `pages/index.liquid`, `assets/theme.css`. */
  path: string;
  /** The file's whole text. */
  content: string;
}

/** What add a file answers: `storefronts.codeAdd`. */
export type StorefrontsCodeAddResult = {
  file: {
    path: string;
    hash: string;
    size: number;
    added: boolean;
    changed: boolean;
    updatedAt: string;
    content: string;
  };
  rev: number;
  code: {
    rev: number;
    ahead: number;
    designAhead: boolean;
    base: string;
    files: {
      path: string;
      hash: string;
      size: number;
      added: boolean;
      changed: boolean;
      updatedAt: string;
    }[];
    problems: unknown[] | Record<string, unknown>;
    limits: {
      files: number;
      fileBytes: number;
      bytes: number;
      used: number;
    };
    folders: {
      layout: string[];
      pages: string[];
      elements: string[];
      parts: string[];
      assets: string[];
      locales: string[];
      config: string[];
    };
  };
};

/** What delete a file takes: `storefronts.codeDelete`. */
export interface StorefrontsCodeDeleteParams {
  /** The file's path, its folder and its name: `pages/index.liquid`, `assets/theme.css`. */
  path: string;
}

/** What delete a file answers: `storefronts.codeDelete`. */
export type StorefrontsCodeDeleteResult = {
  rev: number;
};

/** What rename a file takes: `storefronts.codeRename`. */
export interface StorefrontsCodeRenameParams {
  /** Its path now. */
  from: string;
  /** Its new path. */
  to: string;
}

/** What rename a file answers: `storefronts.codeRename`. */
export type StorefrontsCodeRenameResult = {
  file: {
    path: string;
    hash: string;
    size: number;
    added: boolean;
    changed: boolean;
    updatedAt: string;
  };
  rev: number;
};

/** What publish a storefront's code takes: `storefronts.codePublish`. */
export interface StorefrontsCodePublishParams {
  /** The files' count of changes, `code.rev`. */
  rev: number;
  /** The design's, `version`. */
  version: number;
}

/** What publish a storefront's code answers: `storefronts.codePublish`. */
export type StorefrontsCodePublishResult = {
  storefront: {
    id: string;
    name: string;
    theme: string;
    themeVersion: string;
    published: boolean;
    publishedAt: string;
    live: boolean;
    createdAt: string;
    updatedAt: string;
    code: boolean;
    engine: string;
    codeOnCopy: unknown;
    unpublished: boolean;
    accent: unknown;
    headingFont: unknown;
    pages: number;
  };
  theme: string;
  available: boolean;
  started: boolean;
  version: number;
  code: {
    rev: number;
    ahead: number;
    designAhead: boolean;
    base: string;
    files: {
      path: string;
      hash: string;
      size: number;
      added: boolean;
      changed: boolean;
      updatedAt: string;
    }[];
    problems: unknown[] | Record<string, unknown>;
    limits: {
      files: number;
      fileBytes: number;
      bytes: number;
      used: number;
    };
    folders: {
      layout: string[];
      pages: string[];
      elements: string[];
      parts: string[];
      assets: string[];
      locales: string[];
      config: string[];
    };
  };
  versions: {
    id: string;
    number: number;
    live: boolean;
    files: number;
    createdAt: string;
  }[];
  preview: {
    url: string;
    param: string;
    token: string;
    seconds: number;
    pages: {
      name: string;
      path: string;
    }[];
  };
};

/** What get Payment Routing answers: `routing.show`. */
export type RoutingShowResult = {
  set: boolean;
  settings: {
    enabled: boolean;
    mode: string;
    retry: boolean;
    sticky: boolean;
    guard: boolean;
    guardDeclines: number;
    guardWindow: number;
    disputeAlert: number;
  };
  processors: {
    provider: string;
    name: string;
    share: number;
    capMonth: number;
    capDay: unknown;
    minOrder: unknown;
    maxOrder: unknown;
    state: string;
    pausedReason: string;
    pausedAt: unknown;
    month: number;
    day: number;
    approved: unknown;
    disputes: unknown;
    fee: unknown;
  }[];
  rules: {
    id: string;
    kind: string;
    countries: string[];
    amountOp: unknown;
    amount: unknown;
    action: string;
    provider: string;
  }[];
  available: unknown[] | Record<string, unknown>;
  figures: {
    routed: {
      orders: number;
      volume: number;
    };
    approved: unknown;
    saved: {
      orders: number;
      volume: number;
    };
    disputes: unknown;
  };
  limits: {
    rules: number;
    countries: number;
    guardWindowMin: number;
    guardWindowMax: number;
  };
};

/** What change Payment Routing takes: `routing.update`. */
export interface RoutingUpdateParams {
  /** Whether checkouts are routed. */
  enabled?: boolean;
  /** How a checkout is given a processor. */
  mode?: "share" | "order" | "cheapest";
  /** Whether a declined card is moved to the next processor. A card declined as stolen, lost or fake never is. */
  retry?: boolean;
  /** Whether a returning buyer goes to the processor they last paid with. */
  sticky?: boolean;
  /** Whether a processor whose keys fail, or with too many declines, is paused. The last one in rotation never is. */
  guard?: boolean;
  /** How many of the window's payments declined pause a processor, from 1 to `guardWindow`. */
  guardDeclines?: number;
  /** How many of its last routed payments are judged, from 5 to 200. */
  guardWindow?: number;
  /** The percent of a processor's paid orders disputed that the store is told of, once a week at most, above 0 and up to 100. Empty or null for none. Nothing is moved for it. */
  disputeAlert?: number;
}

/** What change Payment Routing answers: `routing.update`. */
export type RoutingUpdateResult = {
  set: boolean;
  settings: {
    enabled: boolean;
    mode: string;
    retry: boolean;
    sticky: boolean;
    guard: boolean;
    guardDeclines: number;
    guardWindow: number;
    disputeAlert: number;
  };
  processors: {
    provider: string;
    name: string;
    share: number;
    capMonth: number;
    capDay: unknown;
    minOrder: unknown;
    maxOrder: unknown;
    state: string;
    pausedReason: string;
    pausedAt: unknown;
    month: number;
    day: number;
    approved: unknown;
    disputes: unknown;
    fee: unknown;
  }[];
  rules: {
    id: string;
    kind: string;
    countries: string[];
    amountOp: unknown;
    amount: unknown;
    action: string;
    provider: string;
  }[];
  available: unknown[] | Record<string, unknown>;
  figures: {
    routed: {
      orders: number;
      volume: number;
    };
    approved: unknown;
    saved: {
      orders: number;
      volume: number;
    };
    disputes: unknown;
  };
  limits: {
    rules: number;
    countries: number;
    guardWindowMin: number;
    guardWindowMax: number;
  };
};

/** What add a processor takes: `routing.addProcessor`. */
export interface RoutingAddProcessorParams {
  /** The card method, by its name in "List payment methods". */
  provider: string;
}

/** What add a processor answers: `routing.addProcessor`. */
export type RoutingAddProcessorResult = {
  set: boolean;
  settings: {
    enabled: boolean;
    mode: string;
    retry: boolean;
    sticky: boolean;
    guard: boolean;
    guardDeclines: number;
    guardWindow: number;
    disputeAlert: number;
  };
  processors: {
    provider: string;
    name: string;
    share: number;
    capMonth: unknown;
    capDay: unknown;
    minOrder: unknown;
    maxOrder: unknown;
    state: string;
    pausedReason: string;
    pausedAt: unknown;
    month: number;
    day: number;
    approved: unknown;
    disputes: unknown;
    fee: unknown;
  }[];
  rules: unknown[] | Record<string, unknown>;
  available: {
    provider: string;
    name: string;
    usable: boolean;
  }[];
  figures: {
    routed: {
      orders: number;
      volume: number;
    };
    approved: unknown;
    saved: {
      orders: number;
      volume: number;
    };
    disputes: unknown;
  };
  limits: {
    rules: number;
    countries: number;
    guardWindowMin: number;
    guardWindowMax: number;
  };
};

/** What change a processor takes: `routing.updateProcessor`. */
export interface RoutingUpdateProcessorParams {
  /** Its share of the month's volume, as a whole percent from 0 to 100, for `mode` `share`. */
  share?: number;
  /** The most it is given in a UTC month, in the store's currency. Empty for no cap. */
  capMonth?: number;
  /** The most it is given in a UTC day. No more than `capMonth`. */
  capDay?: number;
  /** The smallest order it is given. */
  minOrder?: number;
  /** The largest order it is given. At least `minOrder`. */
  maxOrder?: number;
}

/** What change a processor answers: `routing.updateProcessor`. */
export type RoutingUpdateProcessorResult = {
  set: boolean;
  settings: {
    enabled: boolean;
    mode: string;
    retry: boolean;
    sticky: boolean;
    guard: boolean;
    guardDeclines: number;
    guardWindow: number;
    disputeAlert: number;
  };
  processors: {
    provider: string;
    name: string;
    share: number;
    capMonth: number;
    capDay: unknown;
    minOrder: unknown;
    maxOrder: unknown;
    state: string;
    pausedReason: string;
    pausedAt: unknown;
    month: number;
    day: number;
    approved: unknown;
    disputes: unknown;
    fee: unknown;
  }[];
  rules: unknown[] | Record<string, unknown>;
  available: unknown[] | Record<string, unknown>;
  figures: {
    routed: {
      orders: number;
      volume: number;
    };
    approved: unknown;
    saved: {
      orders: number;
      volume: number;
    };
    disputes: unknown;
  };
  limits: {
    rules: number;
    countries: number;
    guardWindowMin: number;
    guardWindowMax: number;
  };
};

/** What remove a processor answers: `routing.removeProcessor`. */
export type RoutingRemoveProcessorResult = {
  set: boolean;
  settings: {
    enabled: boolean;
    mode: string;
    retry: boolean;
    sticky: boolean;
    guard: boolean;
    guardDeclines: number;
    guardWindow: number;
    disputeAlert: number;
  };
  processors: {
    provider: string;
    name: string;
    share: number;
    capMonth: number;
    capDay: unknown;
    minOrder: unknown;
    maxOrder: unknown;
    state: string;
    pausedReason: string;
    pausedAt: unknown;
    month: number;
    day: number;
    approved: unknown;
    disputes: unknown;
    fee: unknown;
  }[];
  rules: unknown[] | Record<string, unknown>;
  available: {
    provider: string;
    name: string;
    usable: boolean;
  }[];
  figures: {
    routed: {
      orders: number;
      volume: number;
    };
    approved: unknown;
    saved: {
      orders: number;
      volume: number;
    };
    disputes: unknown;
  };
  limits: {
    rules: number;
    countries: number;
    guardWindowMin: number;
    guardWindowMax: number;
  };
};

/** What put a processor back answers: `routing.resumeProcessor`. */
export type RoutingResumeProcessorResult = {
  set: boolean;
  settings: {
    enabled: boolean;
    mode: string;
    retry: boolean;
    sticky: boolean;
    guard: boolean;
    guardDeclines: number;
    guardWindow: number;
    disputeAlert: number;
  };
  processors: {
    provider: string;
    name: string;
    share: number;
    capMonth: number;
    capDay: unknown;
    minOrder: unknown;
    maxOrder: unknown;
    state: string;
    pausedReason: string;
    pausedAt: unknown;
    month: number;
    day: number;
    approved: unknown;
    disputes: unknown;
    fee: unknown;
  }[];
  rules: {
    id: string;
    kind: string;
    countries: string[];
    amountOp: unknown;
    amount: unknown;
    action: string;
    provider: string;
  }[];
  available: unknown[] | Record<string, unknown>;
  figures: {
    routed: {
      orders: number;
      volume: number;
    };
    approved: unknown;
    saved: {
      orders: number;
      volume: number;
    };
    disputes: unknown;
  };
  limits: {
    rules: number;
    countries: number;
    guardWindowMin: number;
    guardWindowMax: number;
  };
};

/** What sort processors takes: `routing.sortProcessors`. */
export interface RoutingSortProcessorsParams {
  /** The processors' names in their new order. */
  providers: string[];
}

/** What sort processors answers: `routing.sortProcessors`. */
export type RoutingSortProcessorsResult = {
  set: boolean;
  settings: {
    enabled: boolean;
    mode: string;
    retry: boolean;
    sticky: boolean;
    guard: boolean;
    guardDeclines: number;
    guardWindow: number;
    disputeAlert: number;
  };
  processors: {
    provider: string;
    name: string;
    share: number;
    capMonth: number;
    capDay: unknown;
    minOrder: unknown;
    maxOrder: unknown;
    state: string;
    pausedReason: string;
    pausedAt: unknown;
    month: number;
    day: number;
    approved: unknown;
    disputes: unknown;
    fee: unknown;
  }[];
  rules: unknown[] | Record<string, unknown>;
  available: unknown[] | Record<string, unknown>;
  figures: {
    routed: {
      orders: number;
      volume: number;
    };
    approved: unknown;
    saved: {
      orders: number;
      volume: number;
    };
    disputes: unknown;
  };
  limits: {
    rules: number;
    countries: number;
    guardWindowMin: number;
    guardWindowMax: number;
  };
};

/** What add a rule takes: `routing.addRule`. */
export interface RoutingAddRuleParams {
  /** What it looks at: the buyer's country, or the order's amount. */
  kind: "country" | "amount";
  /** For `country`: up to 100 countries, as two-letter codes. */
  countries?: string[];
  /** For `amount`: whether it is about orders over the amount or under it. */
  amountOp?: "over" | "under";
  /** For `amount`: the amount, in the store's currency. */
  amount?: number;
  /** `only`: such orders go to this processor and no other. `never`: they never go to it. */
  action: "only" | "never";
  /** The processor the rule is about, one in the routing. */
  provider: string;
}

/** What add a rule answers: `routing.addRule`. */
export type RoutingAddRuleResult = {
  set: boolean;
  settings: {
    enabled: boolean;
    mode: string;
    retry: boolean;
    sticky: boolean;
    guard: boolean;
    guardDeclines: number;
    guardWindow: number;
    disputeAlert: number;
  };
  processors: {
    provider: string;
    name: string;
    share: number;
    capMonth: number;
    capDay: unknown;
    minOrder: unknown;
    maxOrder: unknown;
    state: string;
    pausedReason: string;
    pausedAt: unknown;
    month: number;
    day: number;
    approved: unknown;
    disputes: unknown;
    fee: unknown;
  }[];
  rules: Array<{
    id: string;
    kind: string;
    countries: unknown[] | Record<string, unknown>;
    amountOp: string;
    amount: number;
    action: string;
    provider: string;
  }>;
  available: unknown[] | Record<string, unknown>;
  figures: {
    routed: {
      orders: number;
      volume: number;
    };
    approved: unknown;
    saved: {
      orders: number;
      volume: number;
    };
    disputes: unknown;
  };
  limits: {
    rules: number;
    countries: number;
    guardWindowMin: number;
    guardWindowMax: number;
  };
};

/** What change a rule takes: `routing.updateRule`. */
export interface RoutingUpdateRuleParams {
  /** What it looks at: the buyer's country, or the order's amount. */
  kind: "country" | "amount";
  /** For `country`: up to 100 countries, as two-letter codes. */
  countries?: string[];
  /** For `amount`: whether it is about orders over the amount or under it. */
  amountOp?: "over" | "under";
  /** For `amount`: the amount, in the store's currency. */
  amount?: number;
  /** `only`: such orders go to this processor and no other. `never`: they never go to it. */
  action: "only" | "never";
  /** The processor the rule is about, one in the routing. */
  provider: string;
}

/** What change a rule answers: `routing.updateRule`. */
export type RoutingUpdateRuleResult = {
  set: boolean;
  settings: {
    enabled: boolean;
    mode: string;
    retry: boolean;
    sticky: boolean;
    guard: boolean;
    guardDeclines: number;
    guardWindow: number;
    disputeAlert: number;
  };
  processors: {
    provider: string;
    name: string;
    share: number;
    capMonth: number;
    capDay: unknown;
    minOrder: unknown;
    maxOrder: unknown;
    state: string;
    pausedReason: string;
    pausedAt: unknown;
    month: number;
    day: number;
    approved: unknown;
    disputes: unknown;
    fee: unknown;
  }[];
  rules: {
    id: string;
    kind: string;
    countries: string[];
    amountOp: unknown;
    amount: unknown;
    action: string;
    provider: string;
  }[];
  available: unknown[] | Record<string, unknown>;
  figures: {
    routed: {
      orders: number;
      volume: number;
    };
    approved: unknown;
    saved: {
      orders: number;
      volume: number;
    };
    disputes: unknown;
  };
  limits: {
    rules: number;
    countries: number;
    guardWindowMin: number;
    guardWindowMax: number;
  };
};

/** What delete a rule answers: `routing.deleteRule`. */
export type RoutingDeleteRuleResult = {
  set: boolean;
  settings: {
    enabled: boolean;
    mode: string;
    retry: boolean;
    sticky: boolean;
    guard: boolean;
    guardDeclines: number;
    guardWindow: number;
    disputeAlert: number;
  };
  processors: {
    provider: string;
    name: string;
    share: number;
    capMonth: number;
    capDay: unknown;
    minOrder: unknown;
    maxOrder: unknown;
    state: string;
    pausedReason: string;
    pausedAt: unknown;
    month: number;
    day: number;
    approved: unknown;
    disputes: unknown;
    fee: unknown;
  }[];
  rules: unknown[] | Record<string, unknown>;
  available: unknown[] | Record<string, unknown>;
  figures: {
    routed: {
      orders: number;
      volume: number;
    };
    approved: unknown;
    saved: {
      orders: number;
      volume: number;
    };
    disputes: unknown;
  };
  limits: {
    rules: number;
    countries: number;
    guardWindowMin: number;
    guardWindowMax: number;
  };
};

/** What sort rules takes: `routing.sortRules`. */
export interface RoutingSortRulesParams {
  /** The rules' IDs in their new order. */
  ids: string[];
}

/** What sort rules answers: `routing.sortRules`. */
export type RoutingSortRulesResult = {
  set: boolean;
  settings: {
    enabled: boolean;
    mode: string;
    retry: boolean;
    sticky: boolean;
    guard: boolean;
    guardDeclines: number;
    guardWindow: number;
    disputeAlert: number;
  };
  processors: {
    provider: string;
    name: string;
    share: number;
    capMonth: number;
    capDay: unknown;
    minOrder: unknown;
    maxOrder: unknown;
    state: string;
    pausedReason: string;
    pausedAt: unknown;
    month: number;
    day: number;
    approved: unknown;
    disputes: unknown;
    fee: unknown;
  }[];
  rules: {
    id: string;
    kind: string;
    countries: string[];
    amountOp: unknown;
    amount: unknown;
    action: string;
    provider: string;
  }[];
  available: unknown[] | Record<string, unknown>;
  figures: {
    routed: {
      orders: number;
      volume: number;
    };
    approved: unknown;
    saved: {
      orders: number;
      volume: number;
    };
    disputes: unknown;
  };
  limits: {
    rules: number;
    countries: number;
    guardWindowMin: number;
    guardWindowMax: number;
  };
};

/** What list custom payment methods answers: `customMethods.list`. */
export type CustomMethodsListResult = {
  id: string;
  kind: string;
  name: string;
  description: string;
  instructions: string;
  redirectUrl: string;
  iconUrl: unknown;
  asksProof: boolean;
  requiresPicture: boolean;
  enabled: boolean;
}[];

/** What create a custom payment method takes: `customMethods.create`. */
export interface CustomMethodsCreateParams {
  /** `instructions`: the buyer is shown how to pay. `redirect`: the buyer is sent to a page of yours. */
  kind?: "instructions" | "redirect";
  /** What the checkout calls it, up to 60 characters. */
  name?: string;
  /** A line under its name at checkout, up to 160 characters. */
  description?: string;
  /** For `instructions`: how to pay, in Markdown, up to 300 characters. `{order}`, `{amount}`, `{currency}`, `{email}` and `{store}` are filled in. */
  instructions?: string;
  /** For `redirect`: the https address the buyer is sent to, up to 1000 characters, with the same variables filled in. */
  redirectUrl?: string;
  /** Whether the buyer is asked for a reference or a proof of payment, at least one. */
  asksProof?: boolean;
  /** Whether a proof of payment is required, whatever else is sent. Needs `asksProof`. */
  requiresPicture?: boolean;
  /** Whether the checkout offers it. */
  enabled?: boolean;
}

/** What create a custom payment method answers: `customMethods.create`. */
export type CustomMethodsCreateResult = {
  id: string;
  kind: string;
  name: string;
  description: string;
  instructions: string;
  redirectUrl: string;
  iconUrl: unknown;
  asksProof: boolean;
  requiresPicture: boolean;
  enabled: boolean;
};

/** What update a custom payment method takes: `customMethods.update`. */
export interface CustomMethodsUpdateParams {
  /** `instructions`: the buyer is shown how to pay. `redirect`: the buyer is sent to a page of yours. */
  kind?: "instructions" | "redirect";
  /** What the checkout calls it, up to 60 characters. */
  name?: string;
  /** A line under its name at checkout, up to 160 characters. */
  description?: string;
  /** For `instructions`: how to pay, in Markdown, up to 300 characters. `{order}`, `{amount}`, `{currency}`, `{email}` and `{store}` are filled in. */
  instructions?: string;
  /** For `redirect`: the https address the buyer is sent to, up to 1000 characters, with the same variables filled in. */
  redirectUrl?: string;
  /** Whether the buyer is asked for a reference or a proof of payment, at least one. */
  asksProof?: boolean;
  /** Whether a proof of payment is required, whatever else is sent. Needs `asksProof`. */
  requiresPicture?: boolean;
  /** Whether the checkout offers it. */
  enabled?: boolean;
}

/** What update a custom payment method answers: `customMethods.update`. */
export type CustomMethodsUpdateResult = {
  id: string;
  kind: string;
  name: string;
  description: string;
  instructions: string;
  redirectUrl: string;
  iconUrl: unknown;
  asksProof: boolean;
  requiresPicture: boolean;
  enabled: boolean;
}[];

/** What delete a custom payment method answers: `customMethods.delete`. */
export type CustomMethodsDeleteResult = {
  id: string;
  kind: string;
  name: string;
  description: string;
  instructions: string;
  redirectUrl: string;
  iconUrl: unknown;
  asksProof: boolean;
  requiresPicture: boolean;
  enabled: boolean;
}[];

/** What switch a custom payment method on or off takes: `customMethods.setEnabled`. */
export interface CustomMethodsSetEnabledParams {
  /** Whether the checkout offers it. */
  enabled: boolean;
}

/** What switch a custom payment method on or off answers: `customMethods.setEnabled`. */
export type CustomMethodsSetEnabledResult = {
  id: string;
  kind: string;
  name: string;
  description: string;
  instructions: string;
  redirectUrl: string;
  iconUrl: unknown;
  asksProof: boolean;
  requiresPicture: boolean;
  enabled: boolean;
}[];

/** What sort custom payment methods takes: `customMethods.sort`. */
export interface CustomMethodsSortParams {
  /** The methods' IDs in their new order. */
  ids: string[];
}

/** What sort custom payment methods answers: `customMethods.sort`. */
export type CustomMethodsSortResult = {
  id: string;
  kind: string;
  name: string;
  description: string;
  instructions: string;
  redirectUrl: string;
  iconUrl: unknown;
  asksProof: boolean;
  requiresPicture: boolean;
  enabled: boolean;
}[];

/** What upload a custom payment method's icon answers: `customMethods.uploadIcon`. */
export type CustomMethodsUploadIconResult = unknown;

/** What remove a custom payment method's icon answers: `customMethods.deleteIcon`. */
export type CustomMethodsDeleteIconResult = unknown;

/** What list products takes: `products.list`. */
export interface ProductsListParams {
  /** Only products with this visibility. */
  visibility?: "public" | "unlisted" | "private";
  /** Only products whose name contains this. */
  search?: string;
}

/** What list products answers: `products.list`. */
export type ProductsListResult = Array<{
  id: string;
  storeId: string;
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageUrl: unknown;
  visibility: string;
  sort: number;
  isBestSeller: boolean;
  badges: {
    label: string;
    color: string;
    kind: string;
  }[];
  features: {
    type: string;
    name: string;
  }[];
  deliveryInstructions: string;
  blockedPaymentMethods: unknown[] | Record<string, unknown>;
  paymentFees: unknown[] | Record<string, unknown>;
  showViewers: boolean;
  showSales: boolean;
  salesWindow: string;
  saleNotifications: boolean;
  metadata: string;
  dateCreated: string;
  updatedAt: string;
  categoryIds: string[];
  unitsSold: number;
  revenue: number;
  lowPrice: number;
  highPrice: number;
  totalStock: number;
  untrackedVariants: number;
  imageCount: number;
  images: unknown[] | Record<string, unknown>;
  variants: Array<{
    id: string;
    label: string;
    price: number;
    duration: string;
    durationDays: number;
    stockMode: number;
    minQuantity: number;
    maxQuantity: number;
    stock: number;
    keyCount: number;
    deliveryMethods: string[];
    deliveryType: string;
    deliveryInstructions: string;
    dynamicUrl: string;
    customFieldsOn: boolean;
    customFields: unknown[] | Record<string, unknown>;
    sort: number;
    blockedPaymentMethods: unknown[] | Record<string, unknown>;
  }>;
  runningSubscriptions: number;
}>;

/** What create a product takes: `products.create`. */
export interface ProductsCreateParams {
  /** The product's name. */
  name: string;
  /** The last part of its address on the storefront. Left out, it is made from the name. */
  slug?: string;
  /** What the product page says. Plain text with a few marks: a line that starts with `#` is a heading, one that starts with `-` is a point of a list, a blank line ends a paragraph, and `**bold**` and backticks for code work inside a line. */
  description?: string;
  /**
   * `public` is listed and can be bought. `unlisted` can be bought by whoever has its link. `private` cannot be bought.
   *
   * Left out, it is "public".
   */
  visibility?: "public" | "unlisted" | "private";
  /** The product's options, 1 to 100 of them, in the order buyers see them. A variant of the product that is not in this list is removed. */
  variants: Array<{
    /** An existing variant's ID, to keep it and change it. Left out, the entry is a new variant. */
    id?: string;
    /** Its name, as a buyer picks it. No two variants of a product share one. */
    label: string;
    /** Its price in the store's currency, with at most 2 decimals. */
    price: number;
    /**
     * The fewest one order may hold: 1 to 100.
     *
     * Left out, it is 1.
     */
    minQuantity?: number;
    /**
     * The most one order may hold: 1 to 100, or -1 for no limit.
     *
     * Left out, it is -1.
     */
    maxQuantity?: number;
    /** What a buyer is sent when the order is paid. Any of these together. */
    deliveryMethods?: Array<"license_keys" | "instructions" | "dynamic" | "files">;
    /**
     * How its stock is counted. `2`: it sells as many as it has license keys in stock, which needs the `license_keys` method. `3`: it sells down from a number you set as `stock`. `1`: stock is not counted, and it never sells out. Left out, an existing variant keeps its own.
     *
     * Left out, it is 2.
     */
    stockMode?: 1 | 2 | 3;
    /** For `stockMode` 3: how many are left, from 0 to 1,000,000. Each sale takes from it. Left out, the number stays as it is, so a change to something else does not undo what has sold since you read it. A variant new to this way of counting starts at 0. */
    stock?: number;
    /** Text sent to the buyer with their order, up to 5,000 characters. For the `instructions` method. The product's own instructions, if it has some, are sent before it. */
    deliveryInstructions?: string;
    /** The https address Shoply asks for the goods when the order is paid. Needed for the `dynamic` method. It cannot point at a private network. */
    dynamicUrl?: string;
    /** Whether the buyer is asked `customFields` before they pay. Left out, it stays as it is. */
    customFieldsOn?: boolean;
    /** Questions the buyer answers before they pay, up to 10, in the order they are asked. Kept while `customFieldsOn` is false. The answers are on the order, as `customFields`, and in the request to your server for dynamic delivery. Left out, they stay as they are. */
    customFields?: Array<{
      /** What the buyer reads over the box, up to 80 characters. */
      label: string;
      /** What the answer is called on the order and in the request to your server: small letters, digits and underscores, starting with a letter, up to 40. No two of a variant share one. Left out, it is made from the label. */
      key?: string;
      /**
       * `text` is one line of up to 200 characters, `long_text` up to 2,000, `number` a number, `dropdown` and `choice` one of `options`, and `tick` a box the buyer ticks.
       *
       * Left out, it is "text".
       */
      type?: "text" | "long_text" | "number" | "dropdown" | "choice" | "tick";
      /**
       * Whether the buyer can pay without answering. A required `tick` has to be ticked.
       *
       * Left out, it is false.
       */
      required?: boolean;
      /** Shown in the box until something is typed, up to 120 characters. For `text`, `long_text` and `number`. */
      placeholder?: string;
      /** A line under the box, up to 200 characters. */
      hint?: string;
      /** What the buyer picks from, 1 to 25, each up to 80 characters. For `dropdown` and `choice`. */
      options?: string[];
    }>;
    /** Payment methods this variant cannot be bought with, by their names in the payment methods list. */
    blockedPaymentMethods?: string[];
    /** Its place among the product's variants. Left out, its place in the list sent. */
    sort?: number;
  }>;
  /** Text sent to the buyer with every variant of the product once the order is paid, whatever the variant delivers, up to 5,000 characters. A variant's own instructions are sent after it. Empty is none. Left out on an update, it stays as it is. */
  deliveryInstructions?: string;
  /** The categories it is in. Left out on an update, they stay as they are. */
  categoryIds?: string[];
  /**
   * Whether the storefront marks it as a best seller.
   *
   * Left out, it is false.
   */
  isBestSeller?: boolean;
  /** Up to 3 short labels on the product. Left out on an update, they stay as they are. */
  badges?: Array<{
    /** What it says, up to 32 characters. */
    label: string;
    /** A preset, a colour of your own as `#rrggbb`, or empty for the theme's neutral look. */
    color?: "" | "blue" | "green" | "amber" | "red" | "purple" | "gray";
    /**
     * `status` also lists the product on the store's Status page. One status a product.
     *
     * Left out, it is "label".
     */
    kind?: "label" | "status";
  }>;
  /** What the product does, as a list. Each entry is a feature on its own or a named group of features. Up to 500 features and 30 groups. Left out on an update, they stay as they are. */
  features?: Array<{
    /** A feature on its own, or a group. */
    type: "feature" | "category";
    /** The feature, or the group's heading. Up to 100 characters. */
    name: string;
    /** A group's features, as names. */
    features?: string[];
  }>;
  /** Payment methods the product cannot be bought with, by their names in the payment methods list. Left out on an update, they stay as they are. */
  blockedPaymentMethods?: string[];
  /** What a payment method adds to this product's price: a payment method's name, and under it `percent` and `fixed`. A fee can only add. Left out on an update, the fees stay as they are. */
  paymentFees?: Record<string, unknown>;
  /**
   * The period the storefront's "sold" figure for this product counts.
   *
   * Left out, it is "all".
   */
  salesWindow?: "all" | "1h" | "6h" | "12h" | "24h" | "7d" | "30d";
  /** Anything of your own to keep with the product, as JSON. Shoply stores it and does nothing with it. It is answered as text. */
  metadata?: Record<string, unknown>;
  /** The product's own title in search results, up to 70 characters. Empty is its name. */
  seoTitle?: string;
  /** Its own description in search results, up to 200 characters. Empty is its description. */
  seoDescription?: string;
}

/** What create a product answers: `products.create`. */
export type ProductsCreateResult = {
  id: string;
  storeId: string;
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageUrl: unknown;
  visibility: string;
  sort: number;
  isBestSeller: boolean;
  badges: {
    label: string;
    color: string;
    kind: string;
  }[];
  features: {
    type: string;
    name: string;
  }[];
  deliveryInstructions: string;
  blockedPaymentMethods: unknown[] | Record<string, unknown>;
  paymentFees: unknown[] | Record<string, unknown>;
  showViewers: boolean;
  showSales: boolean;
  salesWindow: string;
  saleNotifications: boolean;
  metadata: string;
  dateCreated: string;
  updatedAt: string;
  categoryIds: string[];
  unitsSold: number;
  revenue: number;
  lowPrice: number;
  highPrice: number;
  totalStock: number;
  untrackedVariants: number;
  imageCount: number;
  images: unknown[] | Record<string, unknown>;
  variants: Array<{
    id: string;
    label: string;
    price: number;
    duration: string;
    durationDays: number;
    stockMode: number;
    minQuantity: number;
    maxQuantity: number;
    stock: number;
    keyCount: number;
    deliveryMethods: string[];
    deliveryType: string;
    deliveryInstructions: string;
    dynamicUrl: string;
    customFieldsOn: boolean;
    customFields: unknown[] | Record<string, unknown>;
    sort: number;
    blockedPaymentMethods: unknown[] | Record<string, unknown>;
  }>;
  runningSubscriptions: number;
};

/** What get a product answers: `products.show`. */
export type ProductsShowResult = {
  id: string;
  storeId: string;
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageUrl: unknown;
  visibility: string;
  sort: number;
  isBestSeller: boolean;
  badges: {
    label: string;
    color: string;
    kind: string;
  }[];
  features: {
    type: string;
    name: string;
  }[];
  deliveryInstructions: string;
  blockedPaymentMethods: unknown[] | Record<string, unknown>;
  paymentFees: unknown[] | Record<string, unknown>;
  showViewers: boolean;
  showSales: boolean;
  salesWindow: string;
  saleNotifications: boolean;
  metadata: string;
  dateCreated: string;
  updatedAt: string;
  categoryIds: string[];
  unitsSold: number;
  revenue: number;
  lowPrice: number;
  highPrice: number;
  totalStock: number;
  untrackedVariants: number;
  imageCount: number;
  images: unknown[] | Record<string, unknown>;
  variants: Array<{
    id: string;
    label: string;
    price: number;
    duration: string;
    durationDays: number;
    stockMode: number;
    minQuantity: number;
    maxQuantity: number;
    stock: number;
    keyCount: number;
    deliveryMethods: string[];
    deliveryType: string;
    deliveryInstructions: string;
    dynamicUrl: string;
    customFieldsOn: boolean;
    customFields: unknown[] | Record<string, unknown>;
    sort: number;
    blockedPaymentMethods: unknown[] | Record<string, unknown>;
  }>;
  runningSubscriptions: number;
};

/** What update a product takes: `products.update`. */
export interface ProductsUpdateParams {
  /** The product's name. */
  name: string;
  /** The last part of its address on the storefront. Left out, it is made from the name. */
  slug?: string;
  /** What the product page says. Plain text with a few marks: a line that starts with `#` is a heading, one that starts with `-` is a point of a list, a blank line ends a paragraph, and `**bold**` and backticks for code work inside a line. */
  description?: string;
  /**
   * `public` is listed and can be bought. `unlisted` can be bought by whoever has its link. `private` cannot be bought.
   *
   * Left out, it is "public".
   */
  visibility?: "public" | "unlisted" | "private";
  /** The product's options, 1 to 100 of them, in the order buyers see them. A variant of the product that is not in this list is removed. */
  variants: Array<{
    /** An existing variant's ID, to keep it and change it. Left out, the entry is a new variant. */
    id?: string;
    /** Its name, as a buyer picks it. No two variants of a product share one. */
    label: string;
    /** Its price in the store's currency, with at most 2 decimals. */
    price: number;
    /**
     * The fewest one order may hold: 1 to 100.
     *
     * Left out, it is 1.
     */
    minQuantity?: number;
    /**
     * The most one order may hold: 1 to 100, or -1 for no limit.
     *
     * Left out, it is -1.
     */
    maxQuantity?: number;
    /** What a buyer is sent when the order is paid. Any of these together. */
    deliveryMethods?: Array<"license_keys" | "instructions" | "dynamic" | "files">;
    /**
     * How its stock is counted. `2`: it sells as many as it has license keys in stock, which needs the `license_keys` method. `3`: it sells down from a number you set as `stock`. `1`: stock is not counted, and it never sells out. Left out, an existing variant keeps its own.
     *
     * Left out, it is 2.
     */
    stockMode?: 1 | 2 | 3;
    /** For `stockMode` 3: how many are left, from 0 to 1,000,000. Each sale takes from it. Left out, the number stays as it is, so a change to something else does not undo what has sold since you read it. A variant new to this way of counting starts at 0. */
    stock?: number;
    /** Text sent to the buyer with their order, up to 5,000 characters. For the `instructions` method. The product's own instructions, if it has some, are sent before it. */
    deliveryInstructions?: string;
    /** The https address Shoply asks for the goods when the order is paid. Needed for the `dynamic` method. It cannot point at a private network. */
    dynamicUrl?: string;
    /** Whether the buyer is asked `customFields` before they pay. Left out, it stays as it is. */
    customFieldsOn?: boolean;
    /** Questions the buyer answers before they pay, up to 10, in the order they are asked. Kept while `customFieldsOn` is false. The answers are on the order, as `customFields`, and in the request to your server for dynamic delivery. Left out, they stay as they are. */
    customFields?: Array<{
      /** What the buyer reads over the box, up to 80 characters. */
      label: string;
      /** What the answer is called on the order and in the request to your server: small letters, digits and underscores, starting with a letter, up to 40. No two of a variant share one. Left out, it is made from the label. */
      key?: string;
      /**
       * `text` is one line of up to 200 characters, `long_text` up to 2,000, `number` a number, `dropdown` and `choice` one of `options`, and `tick` a box the buyer ticks.
       *
       * Left out, it is "text".
       */
      type?: "text" | "long_text" | "number" | "dropdown" | "choice" | "tick";
      /**
       * Whether the buyer can pay without answering. A required `tick` has to be ticked.
       *
       * Left out, it is false.
       */
      required?: boolean;
      /** Shown in the box until something is typed, up to 120 characters. For `text`, `long_text` and `number`. */
      placeholder?: string;
      /** A line under the box, up to 200 characters. */
      hint?: string;
      /** What the buyer picks from, 1 to 25, each up to 80 characters. For `dropdown` and `choice`. */
      options?: string[];
    }>;
    /** Payment methods this variant cannot be bought with, by their names in the payment methods list. */
    blockedPaymentMethods?: string[];
    /** Its place among the product's variants. Left out, its place in the list sent. */
    sort?: number;
  }>;
  /** Text sent to the buyer with every variant of the product once the order is paid, whatever the variant delivers, up to 5,000 characters. A variant's own instructions are sent after it. Empty is none. Left out on an update, it stays as it is. */
  deliveryInstructions?: string;
  /** The categories it is in. Left out on an update, they stay as they are. */
  categoryIds?: string[];
  /**
   * Whether the storefront marks it as a best seller.
   *
   * Left out, it is false.
   */
  isBestSeller?: boolean;
  /** Up to 3 short labels on the product. Left out on an update, they stay as they are. */
  badges?: Array<{
    /** What it says, up to 32 characters. */
    label: string;
    /** A preset, a colour of your own as `#rrggbb`, or empty for the theme's neutral look. */
    color?: "" | "blue" | "green" | "amber" | "red" | "purple" | "gray";
    /**
     * `status` also lists the product on the store's Status page. One status a product.
     *
     * Left out, it is "label".
     */
    kind?: "label" | "status";
  }>;
  /** What the product does, as a list. Each entry is a feature on its own or a named group of features. Up to 500 features and 30 groups. Left out on an update, they stay as they are. */
  features?: Array<{
    /** A feature on its own, or a group. */
    type: "feature" | "category";
    /** The feature, or the group's heading. Up to 100 characters. */
    name: string;
    /** A group's features, as names. */
    features?: string[];
  }>;
  /** Payment methods the product cannot be bought with, by their names in the payment methods list. Left out on an update, they stay as they are. */
  blockedPaymentMethods?: string[];
  /** What a payment method adds to this product's price: a payment method's name, and under it `percent` and `fixed`. A fee can only add. Left out on an update, the fees stay as they are. */
  paymentFees?: Record<string, unknown>;
  /**
   * The period the storefront's "sold" figure for this product counts.
   *
   * Left out, it is "all".
   */
  salesWindow?: "all" | "1h" | "6h" | "12h" | "24h" | "7d" | "30d";
  /** Anything of your own to keep with the product, as JSON. Shoply stores it and does nothing with it. It is answered as text. */
  metadata?: Record<string, unknown>;
  /** The product's own title in search results, up to 70 characters. Empty is its name. */
  seoTitle?: string;
  /** Its own description in search results, up to 200 characters. Empty is its description. */
  seoDescription?: string;
  /** The `updatedAt` you last read. Sent, the change is refused with `stale_write` if the record has changed since. Left out, it is saved whatever happened in between. */
  expectedUpdatedAt?: string;
}

/** What update a product answers: `products.update`. */
export type ProductsUpdateResult = {
  id: string;
  storeId: string;
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageUrl: unknown;
  visibility: string;
  sort: number;
  isBestSeller: boolean;
  badges: {
    label: string;
    color: string;
    kind: string;
  }[];
  features: {
    type: string;
    name: string;
  }[];
  deliveryInstructions: string;
  blockedPaymentMethods: unknown[] | Record<string, unknown>;
  paymentFees: unknown[] | Record<string, unknown>;
  showViewers: boolean;
  showSales: boolean;
  salesWindow: string;
  saleNotifications: boolean;
  metadata: string;
  dateCreated: string;
  updatedAt: string;
  categoryIds: string[];
  unitsSold: number;
  revenue: number;
  lowPrice: number;
  highPrice: number;
  totalStock: number;
  untrackedVariants: number;
  imageCount: number;
  images: unknown[] | Record<string, unknown>;
  variants: Array<{
    id: string;
    label: string;
    price: number;
    duration: string;
    durationDays: number;
    stockMode: number;
    minQuantity: number;
    maxQuantity: number;
    stock: number;
    keyCount: number;
    deliveryMethods: string[];
    deliveryType: string;
    deliveryInstructions: string;
    dynamicUrl: string;
    customFieldsOn: boolean;
    customFields: unknown[] | Record<string, unknown>;
    sort: number;
    blockedPaymentMethods: unknown[] | Record<string, unknown>;
  }>;
  runningSubscriptions: number;
};

/** What delete a product answers: `products.delete`. */
export type ProductsDeleteResult = unknown;

/** What set a product's visibility takes: `products.setVisibility`. */
export interface ProductsSetVisibilityParams {
  /** The new visibility. */
  visibility: "public" | "unlisted" | "private";
}

/** What set a product's visibility answers: `products.setVisibility`. */
export type ProductsSetVisibilityResult = {
  id: string;
  visibility: string;
};

/** What sort products takes: `products.sort`. */
export interface ProductsSortParams {
  /** The products' IDs in their new order. */
  productIds: string[];
}

/** What sort products answers: `products.sort`. */
export type ProductsSortResult = {
  reordered: number;
};

/** What change many products takes: `products.bulkUpdate`. */
export interface ProductsBulkUpdateParams {
  /** The products, by ID. Up to 250. */
  productIds: string[];
  /** A visibility for all of them. */
  visibility?: "public" | "unlisted" | "private";
  /** Whether all of them are marked as best sellers. */
  isBestSeller?: boolean;
  /** A payment method's name, and `block` or `allow`. `block` adds the method to each product's blocked list. `allow` takes it off the product and off every variant of it. */
  paymentMethods?: Record<string, unknown>;
  /** Instructions for every variant of all of them, up to 5,000 characters, in place of what each has. Empty takes them off. A variant's own instructions are not touched. */
  deliveryInstructions?: string;
}

/** What change many products answers: `products.bulkUpdate`. */
export type ProductsBulkUpdateResult = {
  updated: number;
};

/** What delete many products takes: `products.bulkDelete`. */
export interface ProductsBulkDeleteParams {
  /** The products, by ID. Up to 250. */
  productIds: string[];
}

/** What delete many products answers: `products.bulkDelete`. */
export type ProductsBulkDeleteResult = unknown;

/** What upload a product picture answers: `productImages.upload`. */
export type ProductImagesUploadResult = unknown;

/** What sort a product's pictures takes: `productImages.sort`. */
export interface ProductImagesSortParams {
  /** Every picture's ID, in the new order. */
  imageIds?: string[];
  /** One picture to move to the front, leaving the rest as they are. */
  imageId?: string;
}

/** What sort a product's pictures answers: `productImages.sort`. */
export type ProductImagesSortResult = unknown;

/** What delete a product picture answers: `productImages.delete`. */
export type ProductImagesDeleteResult = unknown;

/** What list a variant's license keys takes: `stock.listKeys`. */
export interface StockListKeysParams {
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * How many a page holds, up to 5,000.
   *
   * Left out, it is 100.
   */
  perPage?: number;
  /** Only keys that contain this. */
  search?: string;
}

/** A row of what list a variant's license keys lists: `stock.listKeys`. */
export type StockListKeysItem = {
  id: string;
  value: string;
};

/** What add license keys takes: `stock.addKeys`. */
export interface StockAddKeysParams {
  /** The keys, one an entry, each up to 500 characters with no line break in it. */
  keys: string[];
}

/** What add license keys answers: `stock.addKeys`. */
export type StockAddKeysResult = {
  added: number;
  skipped: number;
  duplicates: number;
  available: number;
};

/** What replace a variant's license keys takes: `stock.replaceKeys`. */
export interface StockReplaceKeysParams {
  /** The keys the variant is to have in stock, one an entry. An empty list empties the stock. */
  keys: string[];
  /** How many unsold keys you last read. Sent, the change is refused with `stale_write` if that number has changed, so a key sold in the meantime is not put back. */
  expectedAvailable?: number;
}

/** What replace a variant's license keys answers: `stock.replaceKeys`. */
export type StockReplaceKeysResult = unknown;

/** What delete license keys takes: `stock.deleteKeys`. */
export interface StockDeleteKeysParams {
  /** The keys to delete, by ID. */
  ids: string[];
}

/** What delete license keys answers: `stock.deleteKeys`. */
export type StockDeleteKeysResult = {
  removed: number;
  available: number;
};

/** What delete a license key answers: `stock.deleteKey`. */
export type StockDeleteKeyResult = unknown;

/** What list a variant's files answers: `stock.listFiles`. */
export type StockListFilesResult = unknown[] | Record<string, unknown>;

/** What start a file upload takes: `stock.addFile`. */
export interface StockAddFileParams {
  /** The file's name, with its ending. Buyers download it under this name. */
  name: string;
  /** Its size in bytes. */
  size: number;
}

/** What start a file upload answers: `stock.addFile`. */
export type StockAddFileResult = unknown;

/** What finish a file upload answers: `stock.finishFile`. */
export type StockFinishFileResult = unknown;

/** What delete a file answers: `stock.deleteFile`. */
export type StockDeleteFileResult = unknown;

/** What list categories takes: `categories.list`. */
export interface CategoriesListParams {
  /** Only categories with this visibility. */
  visibility?: "public" | "unlisted" | "private";
}

/** What list categories answers: `categories.list`. */
export type CategoriesListResult = {
  id: string;
  storeId: string;
  name: string;
  slug: string;
  visibility: string;
  isPopular: boolean;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageUrl: unknown;
  sort: number;
  productIds: string[];
  productCount: number;
  dateCreated: string;
  updatedAt: string;
}[];

/** What create a category takes: `categories.create`. */
export interface CategoriesCreateParams {
  /** The category's name. */
  name: string;
  /** The last part of its address on the storefront. Left out, it is made from the name. */
  slug?: string;
  /** What the category's page says under its name. */
  description?: string;
  /**
   * `public` is listed on the storefront. `unlisted` is reached by its link. `private` is not shown.
   *
   * Left out, it is "public".
   */
  visibility?: "public" | "unlisted" | "private";
  /**
   * Whether themes that feature a category may feature this one.
   *
   * Left out, it is false.
   */
  isPopular?: boolean;
  /** The products in it, in the order the category lists them. */
  productIds?: string[];
  /** The category's own title in search results, up to 70 characters. Empty is its name. */
  seoTitle?: string;
  /** Its own description in search results, up to 200 characters. Empty is its description. */
  seoDescription?: string;
}

/** What create a category answers: `categories.create`. */
export type CategoriesCreateResult = {
  id: string;
  storeId: string;
  name: string;
  slug: string;
  visibility: string;
  isPopular: boolean;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageUrl: unknown;
  sort: number;
  productIds: unknown[] | Record<string, unknown>;
  productCount: number;
  dateCreated: string;
  updatedAt: string;
};

/** What update a category takes: `categories.update`. */
export interface CategoriesUpdateParams {
  /** The category's name. */
  name: string;
  /** The last part of its address on the storefront. Left out, it is made from the name. */
  slug?: string;
  /** What the category's page says under its name. */
  description?: string;
  /**
   * `public` is listed on the storefront. `unlisted` is reached by its link. `private` is not shown.
   *
   * Left out, it is "public".
   */
  visibility?: "public" | "unlisted" | "private";
  /**
   * Whether themes that feature a category may feature this one.
   *
   * Left out, it is false.
   */
  isPopular?: boolean;
  /** The products in it, in the order the category lists them. */
  productIds?: string[];
  /** The category's own title in search results, up to 70 characters. Empty is its name. */
  seoTitle?: string;
  /** Its own description in search results, up to 200 characters. Empty is its description. */
  seoDescription?: string;
  /** The `updatedAt` you last read. Sent, the change is refused with `stale_write` if the record has changed since. Left out, it is saved whatever happened in between. */
  expectedUpdatedAt?: string;
}

/** What update a category answers: `categories.update`. */
export type CategoriesUpdateResult = {
  id: string;
  storeId: string;
  name: string;
  slug: string;
  visibility: string;
  isPopular: boolean;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageUrl: unknown;
  sort: number;
  productIds: string[];
  productCount: number;
  dateCreated: string;
  updatedAt: string;
};

/** What delete a category answers: `categories.delete`. */
export type CategoriesDeleteResult = {
  id: string;
  deleted: boolean;
};

/** What sort categories takes: `categories.sort`. */
export interface CategoriesSortParams {
  /** The categories' IDs in their new order. */
  categoryIds: string[];
}

/** What sort categories answers: `categories.sort`. */
export type CategoriesSortResult = {
  reordered: number;
};

/** What upload a category's picture answers: `categories.uploadImage`. */
export type CategoriesUploadImageResult = unknown;

/** What delete a category's picture answers: `categories.deleteImage`. */
export type CategoriesDeleteImageResult = unknown;

/** What list upsells takes: `upsells.list`. */
export interface UpsellsListParams {
  /**
   * The period: `today`, `7d`, `30d`, `this_month`, `last_month`, `this_year`, `custom` with `from` and `to`, or `all`.
   *
   * Left out, it is "30d".
   */
  range?: string;
  /** With `range` `custom`: the first day, as YYYY-MM-DD. */
  from?: string;
  /** With `range` `custom`: the last day, as YYYY-MM-DD. */
  to?: string;
  /** The time zone the days are read in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** What list upsells answers: `upsells.list`. */
export type UpsellsListResult = {
  id: string;
  kind: string;
  name: string;
  enabled: boolean;
  sells: string;
  productId: unknown;
  variantId: unknown;
  productName: unknown;
  productImage: unknown;
  variantLabel: unknown;
  variantPrice: unknown;
  price: number;
  cost: unknown;
  message: string;
  offered: string;
  charged: string;
  trigger: string;
  minSubtotal: unknown;
  discountType: string;
  discountValue: number;
  words: string;
  startsAt: unknown;
  endsAt: unknown;
  firstOrders: boolean;
  hideOwned: boolean;
  targets: {
    type: string;
    id: string;
    name: string;
  }[];
  shown: number;
  taken: number;
  revenue: number;
  dateCreated: string;
  updatedAt: string;
}[];

/** What create an upsell takes: `upsells.create`. */
export interface UpsellsCreateParams {
  /** The time zone `startsAt` and `endsAt` are read in when they name none, as an IANA name. Left out, UTC. */
  tz?: string;
  /** What kind of upsell it is. Set when it is made, and never changes. */
  kind: "addon" | "cart" | "checkout" | "together" | "upgrade";
  /** Up to 80 characters. An add-on that is a plain extra needs one: it is what the buyer reads. */
  name?: string;
  /**
   * An add-on only: a plain extra, or one of the store's products.
   *
   * Left out, it is "product".
   */
  sells?: "extra" | "product";
  /** What it sells, or for `together` what is shown. Not for a plain extra. */
  productId?: string;
  /** Which of the product's variants. Optional for `together`. */
  variantId?: string;
  /** An add-on's price as an add-on, in the store's currency. */
  price?: number;
  /** A plain extra's cost for one, for Finance. */
  cost?: number;
  /** A plain extra's message to the buyer after payment, up to 2,000 characters. */
  message?: string;
  /**
   * An add-on: the buyer ticks it, it is ticked for them, or it is always in the order.
   *
   * Left out, it is "optional".
   */
  offered?: "optional" | "ticked" | "included";
  /**
   * An add-on: once an order, or for each unit of its line.
   *
   * Left out, it is "order".
   */
  charged?: "order" | "item";
  /**
   * A cart or checkout offer: what it asks for in the cart.
   *
   * Left out, it is "product".
   */
  trigger?: "product" | "category" | "amount";
  /** With `trigger` `amount`: the cart total it asks for. */
  minSubtotal?: number;
  /**
   * A cart, checkout or upgrade offer: what it takes off its product, on that order only.
   *
   * Left out, it is "none".
   */
  discountType?: "none" | "percent" | "amount";
  /** How much: above 0 and up to 100 for `percent`, an amount for `amount`. */
  discountValue?: number;
  /** Up to 100. What an add-on is offered with (products or categories), what a cart or checkout offer asks for, what `together` is shown under and what an upgrade replaces (products). */
  targets?: Array<{
    /** What `id` names. */
    type: "product" | "category";
    /** The product or the category. */
    id: string;
  }>;
  /** The line over it where the buyer meets it, up to 80 characters. Left out, the buyer's language's own words. */
  words?: string;
  /** When it starts, as a date and time. Left out, now. */
  startsAt?: string;
  /** When it ends, as a date and time. Left out, never. */
  endsAt?: string;
  /**
   * A checkout offer only, since the checkout is where the buyer is known: offered only to a buyer who has never paid at the store.
   *
   * Left out, it is false.
   */
  firstOrders?: boolean;
  /**
   * A checkout offer only: not offered to a buyer who has bought it before.
   *
   * Left out, it is false.
   */
  hideOwned?: boolean;
  /**
   * Whether it is offered.
   *
   * Left out, it is true.
   */
  enabled?: boolean;
}

/** What create an upsell answers: `upsells.create`. */
export type UpsellsCreateResult = {
  id: string;
  kind: string;
  name: string;
  enabled: boolean;
  sells: string;
  productId: unknown;
  variantId: unknown;
  productName: unknown;
  productImage: unknown;
  variantLabel: unknown;
  variantPrice: unknown;
  price: number;
  cost: unknown;
  message: string;
  offered: string;
  charged: string;
  trigger: string;
  minSubtotal: unknown;
  discountType: string;
  discountValue: number;
  words: string;
  startsAt: unknown;
  endsAt: unknown;
  firstOrders: boolean;
  hideOwned: boolean;
  targets: {
    type: string;
    id: string;
    name: string;
  }[];
  shown: number;
  taken: number;
  revenue: number;
  dateCreated: string;
  updatedAt: string;
};

/** What sort upsells takes: `upsells.sort`. */
export interface UpsellsSortParams {
  /** Which kind. */
  kind: "addon" | "cart" | "checkout" | "together" | "upgrade";
  /** Its upsells, in their new order. */
  ids: string[];
}

/** What sort upsells answers: `upsells.sort`. */
export type UpsellsSortResult = {
  sorted: number;
};

/** What change upsell settings takes: `upsells.settings`. */
export interface UpsellsSettingsParams {
  /** Whether what is bought together is worked out from the store's orders too. */
  boughtTogetherAuto: boolean;
}

/** What change upsell settings answers: `upsells.settings`. */
export type UpsellsSettingsResult = {
  boughtTogetherAuto: boolean;
};

/** What update an upsell takes: `upsells.update`. */
export interface UpsellsUpdateParams {
  /** The time zone `startsAt` and `endsAt` are read in when they name none, as an IANA name. Left out, UTC. */
  tz?: string;
  /** What kind of upsell it is. Set when it is made, and never changes. */
  kind: "addon" | "cart" | "checkout" | "together" | "upgrade";
  /** Up to 80 characters. An add-on that is a plain extra needs one: it is what the buyer reads. */
  name?: string;
  /**
   * An add-on only: a plain extra, or one of the store's products.
   *
   * Left out, it is "product".
   */
  sells?: "extra" | "product";
  /** What it sells, or for `together` what is shown. Not for a plain extra. */
  productId?: string;
  /** Which of the product's variants. Optional for `together`. */
  variantId?: string;
  /** An add-on's price as an add-on, in the store's currency. */
  price?: number;
  /** A plain extra's cost for one, for Finance. */
  cost?: number;
  /** A plain extra's message to the buyer after payment, up to 2,000 characters. */
  message?: string;
  /**
   * An add-on: the buyer ticks it, it is ticked for them, or it is always in the order.
   *
   * Left out, it is "optional".
   */
  offered?: "optional" | "ticked" | "included";
  /**
   * An add-on: once an order, or for each unit of its line.
   *
   * Left out, it is "order".
   */
  charged?: "order" | "item";
  /**
   * A cart or checkout offer: what it asks for in the cart.
   *
   * Left out, it is "product".
   */
  trigger?: "product" | "category" | "amount";
  /** With `trigger` `amount`: the cart total it asks for. */
  minSubtotal?: number;
  /**
   * A cart, checkout or upgrade offer: what it takes off its product, on that order only.
   *
   * Left out, it is "none".
   */
  discountType?: "none" | "percent" | "amount";
  /** How much: above 0 and up to 100 for `percent`, an amount for `amount`. */
  discountValue?: number;
  /** Up to 100. What an add-on is offered with (products or categories), what a cart or checkout offer asks for, what `together` is shown under and what an upgrade replaces (products). */
  targets?: Array<{
    /** What `id` names. */
    type: "product" | "category";
    /** The product or the category. */
    id: string;
  }>;
  /** The line over it where the buyer meets it, up to 80 characters. Left out, the buyer's language's own words. */
  words?: string;
  /** When it starts, as a date and time. Left out, now. */
  startsAt?: string;
  /** When it ends, as a date and time. Left out, never. */
  endsAt?: string;
  /**
   * A checkout offer only, since the checkout is where the buyer is known: offered only to a buyer who has never paid at the store.
   *
   * Left out, it is false.
   */
  firstOrders?: boolean;
  /**
   * A checkout offer only: not offered to a buyer who has bought it before.
   *
   * Left out, it is false.
   */
  hideOwned?: boolean;
  /**
   * Whether it is offered.
   *
   * Left out, it is true.
   */
  enabled?: boolean;
}

/** What update an upsell answers: `upsells.update`. */
export type UpsellsUpdateResult = {
  id: string;
  kind: string;
  name: string;
  enabled: boolean;
  sells: string;
  productId: unknown;
  variantId: unknown;
  productName: unknown;
  productImage: unknown;
  variantLabel: unknown;
  variantPrice: unknown;
  price: number;
  cost: unknown;
  message: string;
  offered: string;
  charged: string;
  trigger: string;
  minSubtotal: unknown;
  discountType: string;
  discountValue: number;
  words: string;
  startsAt: unknown;
  endsAt: unknown;
  firstOrders: boolean;
  hideOwned: boolean;
  targets: {
    type: string;
    id: string;
    name: string;
  }[];
  shown: number;
  taken: number;
  revenue: number;
  dateCreated: string;
  updatedAt: string;
};

/** What delete an upsell answers: `upsells.delete`. */
export type UpsellsDeleteResult = {
  id: string;
  deleted: boolean;
};

/** What switch an upsell on or off takes: `upsells.setEnabled`. */
export interface UpsellsSetEnabledParams {
  /** Whether it is offered. */
  enabled: boolean;
}

/** What switch an upsell on or off answers: `upsells.setEnabled`. */
export type UpsellsSetEnabledResult = {
  id: string;
  kind: string;
  name: string;
  enabled: boolean;
  sells: string;
  productId: unknown;
  variantId: unknown;
  productName: unknown;
  productImage: unknown;
  variantLabel: unknown;
  variantPrice: unknown;
  price: number;
  cost: unknown;
  message: string;
  offered: string;
  charged: string;
  trigger: string;
  minSubtotal: unknown;
  discountType: string;
  discountValue: number;
  words: string;
  startsAt: unknown;
  endsAt: unknown;
  firstOrders: boolean;
  hideOwned: boolean;
  targets: {
    type: string;
    id: string;
    name: string;
  }[];
  shown: number;
  taken: number;
  revenue: number;
  dateCreated: string;
  updatedAt: string;
};

/** What list subscriptions takes: `subscriptions.list`. */
export interface SubscriptionsListParams {
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * Only these: running and not cancelling, past due, paused, cancelling, or ended (cancelled and expired).
   *
   * Left out, it is "all".
   */
  show?: "all" | "active" | "attention" | "paused" | "cancelling" | "ended";
  /** Only subscriptions to this option, by its ID. */
  variant?: string;
  /** Part of a buyer's email. */
  search?: string;
}

/** A row of what list subscriptions lists: `subscriptions.list`. */
export type SubscriptionsListItem = {
  id: string;
  email: string;
  customerId: unknown;
  productId: string;
  variantId: string;
  productName: string;
  variantName: string;
  quantity: number;
  price: number;
  currency: string;
  every: number;
  unit: string;
  status: string;
  periodEnd: string;
  graceEnd: unknown;
  renewalOrderId: unknown;
  renewalUrl: unknown;
  firstOrderId: string;
  cycles: number;
  remindedAt: unknown;
  endedAt: unknown;
  revoked: boolean;
  pausedAt: unknown;
  resumeAt: unknown;
  pausedBy: unknown;
  renewsWith: unknown;
  autoRenews: boolean;
  chargeTried: number;
  chargeNextAt: unknown;
  createdAt: string;
};

/** What get subscription settings answers: `subscriptions.settings`. */
export type SubscriptionsSettingsResult = {
  cancelOn: boolean;
  cancelMode: string;
  undoOn: boolean;
  pauseOn: boolean;
  pauseDays: number;
  pausesAYear: number;
  remindersOn: boolean;
  reminderDays: number[];
  graceDays: number;
  revokeOn: boolean;
  autoOn: boolean;
  cardChangeOn: boolean;
  chargeTries: number;
};

/** What change subscription settings takes: `subscriptions.updateSettings`. */
export interface SubscriptionsUpdateSettingsParams {
  /** Whether a buyer may cancel from their customer panel. */
  cancelOn?: boolean;
  /** When a buyer's cancellation takes effect: when what was paid for runs out, or straight away. */
  cancelMode?: "end" | "now";
  /** Whether a buyer may take a cancellation back before it takes effect. */
  undoOn?: boolean;
  /** Whether a buyer may pause from their customer panel. */
  pauseOn?: boolean;
  /** The longest a buyer may pause for, from 1 to 365 days. */
  pauseDays?: number;
  /** How many times in a year a buyer may pause, from 1 to 12. */
  pausesAYear?: number;
  /** Whether the buyer is reminded before a renewal is due. */
  remindersOn?: boolean;
  /** How many days before it is due each reminder goes: up to 5, each from 1 to 30. */
  reminderDays?: number[];
  /** How long a renewal may go unpaid after the period runs out before the subscription ends, from 0 to 30 days. */
  graceDays?: number;
  /** Whether an ended or paused subscription's keys and files are hidden from its buyer. */
  revokeOn?: boolean;
  /** Whether a card paid with through Stripe, Authorize.net, Tagada, Mollie, MONEI, Adyen or Square, or through NMI where its Keep Cards for Subscriptions is on, is kept and each renewal charged to it by itself. Off, every renewal is paid by an emailed link. */
  autoOn?: boolean;
  /** Whether a renewal a buyer pays by its link with another card keeps that card, and a buyer whose card is kept through Stripe may give another on Stripe's own page. */
  cardChangeOn?: boolean;
  /** How many times a declined card is tried, one a day while the grace days last, from 1 to 5. */
  chargeTries?: number;
}

/** What change subscription settings answers: `subscriptions.updateSettings`. */
export type SubscriptionsUpdateSettingsResult = {
  cancelOn: boolean;
  cancelMode: string;
  undoOn: boolean;
  pauseOn: boolean;
  pauseDays: number;
  pausesAYear: number;
  remindersOn: boolean;
  reminderDays: number[];
  graceDays: number;
  revokeOn: boolean;
  autoOn: boolean;
  cardChangeOn: boolean;
  chargeTries: number;
};

/** What list subscription plans answers: `subscriptions.plans`. */
export type SubscriptionsPlansResult = {
  variantId: string;
  productId: string;
  productName: string;
  variantName: string;
  price: number;
  every: number;
  unit: string;
  running: number;
  automatic: number;
}[];

/** What sell options as subscriptions takes: `subscriptions.savePlans`. */
export interface SubscriptionsSavePlansParams {
  /** The options and how often each renews. */
  items: Array<{
    /** The option, by its ID. */
    variantId: string;
    /** How many of `unit`: up to 52 weeks, 12 months or 5 years, or 7 to 365 days. */
    every: number;
    /** What it renews by. */
    unit: "day" | "week" | "month" | "year";
  }>;
}

/** What sell options as subscriptions answers: `subscriptions.savePlans`. */
export type SubscriptionsSavePlansResult = {
  variantId: string;
  productId: string;
  productName: string;
  variantName: string;
  price: number;
  every: number;
  unit: string;
  running: number;
  automatic: number;
}[];

/** What sell an option once again answers: `subscriptions.removePlan`. */
export type SubscriptionsRemovePlanResult = unknown[] | Record<string, unknown>;

/** What get a subscription answers: `subscriptions.show`. */
export type SubscriptionsShowResult = {
  id: string;
  email: string;
  customerId: unknown;
  productId: string;
  variantId: string;
  productName: string;
  variantName: string;
  quantity: number;
  price: number;
  currency: string;
  every: number;
  unit: string;
  status: string;
  periodEnd: string;
  graceEnd: unknown;
  renewalOrderId: unknown;
  renewalUrl: unknown;
  firstOrderId: string;
  cycles: number;
  remindedAt: unknown;
  endedAt: unknown;
  revoked: boolean;
  pausedAt: unknown;
  resumeAt: unknown;
  pausedBy: unknown;
  renewsWith: unknown;
  autoRenews: boolean;
  chargeTried: number;
  chargeNextAt: unknown;
  createdAt: string;
};

/** What cancel a subscription takes: `subscriptions.cancel`. */
export interface SubscriptionsCancelParams {
  /**
   * When it ends.
   *
   * Left out, it is "end".
   */
  when?: "end" | "now";
}

/** What cancel a subscription answers: `subscriptions.cancel`. */
export type SubscriptionsCancelResult = {
  id: string;
  email: string;
  customerId: unknown;
  productId: string;
  variantId: string;
  productName: string;
  variantName: string;
  quantity: number;
  price: number;
  currency: string;
  every: number;
  unit: string;
  status: string;
  periodEnd: string;
  graceEnd: unknown;
  renewalOrderId: unknown;
  renewalUrl: unknown;
  firstOrderId: string;
  cycles: number;
  remindedAt: unknown;
  endedAt: unknown;
  revoked: boolean;
  pausedAt: unknown;
  resumeAt: unknown;
  pausedBy: unknown;
  renewsWith: unknown;
  autoRenews: boolean;
  chargeTried: number;
  chargeNextAt: unknown;
  createdAt: string;
};

/** What undo a cancellation answers: `subscriptions.undo`. */
export type SubscriptionsUndoResult = {
  id: string;
  email: string;
  customerId: unknown;
  productId: string;
  variantId: string;
  productName: string;
  variantName: string;
  quantity: number;
  price: number;
  currency: string;
  every: number;
  unit: string;
  status: string;
  periodEnd: string;
  graceEnd: unknown;
  renewalOrderId: unknown;
  renewalUrl: unknown;
  firstOrderId: string;
  cycles: number;
  remindedAt: unknown;
  endedAt: unknown;
  revoked: boolean;
  pausedAt: unknown;
  resumeAt: unknown;
  pausedBy: unknown;
  renewsWith: unknown;
  autoRenews: boolean;
  chargeTried: number;
  chargeNextAt: unknown;
  createdAt: string;
};

/** What pause a subscription takes: `subscriptions.pause`. */
export interface SubscriptionsPauseParams {
  /** How long, from 1 to 365 days. */
  days: number;
}

/** What pause a subscription answers: `subscriptions.pause`. */
export type SubscriptionsPauseResult = {
  id: string;
  email: string;
  customerId: unknown;
  productId: string;
  variantId: string;
  productName: string;
  variantName: string;
  quantity: number;
  price: number;
  currency: string;
  every: number;
  unit: string;
  status: string;
  periodEnd: string;
  graceEnd: unknown;
  renewalOrderId: unknown;
  renewalUrl: unknown;
  firstOrderId: string;
  cycles: number;
  remindedAt: unknown;
  endedAt: unknown;
  revoked: boolean;
  pausedAt: string;
  resumeAt: string;
  pausedBy: string;
  renewsWith: unknown;
  autoRenews: boolean;
  chargeTried: number;
  chargeNextAt: unknown;
  createdAt: string;
};

/** What resume a subscription answers: `subscriptions.resume`. */
export type SubscriptionsResumeResult = {
  id: string;
  email: string;
  customerId: unknown;
  productId: string;
  variantId: string;
  productName: string;
  variantName: string;
  quantity: number;
  price: number;
  currency: string;
  every: number;
  unit: string;
  status: string;
  periodEnd: string;
  graceEnd: unknown;
  renewalOrderId: unknown;
  renewalUrl: unknown;
  firstOrderId: string;
  cycles: number;
  remindedAt: unknown;
  endedAt: unknown;
  revoked: boolean;
  pausedAt: unknown;
  resumeAt: unknown;
  pausedBy: unknown;
  renewsWith: unknown;
  autoRenews: boolean;
  chargeTried: number;
  chargeNextAt: unknown;
  createdAt: string;
};

/** What add free days takes: `subscriptions.addDays`. */
export interface SubscriptionsAddDaysParams {
  /** How many, from 1 to 365. */
  days: number;
}

/** What add free days answers: `subscriptions.addDays`. */
export type SubscriptionsAddDaysResult = {
  id: string;
  email: string;
  customerId: unknown;
  productId: string;
  variantId: string;
  productName: string;
  variantName: string;
  quantity: number;
  price: number;
  currency: string;
  every: number;
  unit: string;
  status: string;
  periodEnd: string;
  graceEnd: unknown;
  renewalOrderId: unknown;
  renewalUrl: unknown;
  firstOrderId: string;
  cycles: number;
  remindedAt: unknown;
  endedAt: unknown;
  revoked: boolean;
  pausedAt: unknown;
  resumeAt: unknown;
  pausedBy: unknown;
  renewsWith: unknown;
  autoRenews: boolean;
  chargeTried: number;
  chargeNextAt: unknown;
  createdAt: string;
};

/** What email the renewal again answers: `subscriptions.email`. */
export type SubscriptionsEmailResult = {
  id: string;
  email: string;
  customerId: unknown;
  productId: string;
  variantId: string;
  productName: string;
  variantName: string;
  quantity: number;
  price: number;
  currency: string;
  every: number;
  unit: string;
  status: string;
  periodEnd: string;
  graceEnd: unknown;
  renewalOrderId: string;
  renewalUrl: string;
  firstOrderId: string;
  cycles: number;
  remindedAt: string;
  endedAt: unknown;
  revoked: boolean;
  pausedAt: unknown;
  resumeAt: unknown;
  pausedBy: unknown;
  renewsWith: unknown;
  autoRenews: boolean;
  chargeTried: number;
  chargeNextAt: unknown;
  createdAt: string;
};

/** What list orders takes: `orders.list`. */
export interface OrdersListParams {
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * How many a page holds, up to 100.
   *
   * Left out, it is 20.
   */
  perPage?: number;
  /** Only orders in this status. */
  status?: "pending" | "completed" | "refunded" | "cancelled" | "chargeback";
  /** Only orders paid with this payment method, by its name in the payment methods list. */
  gateway?: string;
  /** An order's ID, or part of a buyer's email. */
  search?: string;
  /**
   * What the list is ordered by.
   *
   * Left out, it is "created_at".
   */
  sort?: "created_at" | "amount" | "email" | "status";
  /**
   * Which way it is ordered.
   *
   * Left out, it is "desc".
   */
  direction?: "asc" | "desc";
  /** Only orders placed in this period. */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** Only orders placed on or after this day, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Only orders placed on or before this day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone the days of `range`, `from` and `to` are in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** A row of what list orders lists: `orders.list`. */
export type OrdersListItem = {
  id: string;
  dateCreated: string;
  email: string;
  customerId: string;
  productId: string;
  productName: string;
  variantId: string;
  variantName: string;
  itemCount: number;
  subtotal: number;
  discount: number;
  fee: number;
  balanceUsed: number;
  tax: unknown;
  amount: number;
  currencyCode: string;
  charged: unknown;
  status: string;
  gateway: string;
  couponCode: unknown;
  returning: boolean;
  country: unknown;
  billing: {
    name: string;
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  ip: unknown;
  userAgent: unknown;
  source: string;
  subscriptionId: unknown;
  transactionId: unknown;
  paidAt: unknown;
  note: string;
  customFields: unknown[] | Record<string, unknown>;
  emailState: string;
  emailError: string;
  emailAttempts: number;
  emailSentAt: unknown;
  notifyState: string;
  notifyError: string;
  notifyAttempts: number;
  notifySentAt: unknown;
  summary: string;
  items: Array<{
    id: string;
    productId: string;
    productName: string;
    variantId: string;
    variantName: string;
    amount: number;
    unitPrice: number;
    quantity: number;
    lineTotal: number;
    upsellId: unknown;
    addonOf: unknown;
    deliveredKeys: unknown[] | Record<string, unknown>;
    redeliveryCount: number;
    lastRedeliveredAt: unknown;
    deliveryInstructions: string;
    dynamicState: string;
    dynamicMessage: string;
    dynamicItems: unknown[] | Record<string, unknown>;
    previousDynamicItems: unknown[] | Record<string, unknown>;
    dynamicDeliveredAt: unknown;
    dynamicError: string;
    dynamicAttempts: number;
  }>;
  invoice: unknown;
};

/** What export orders takes: `orders.export`. */
export interface OrdersExportParams {
  /** Only orders in this status. */
  status?: "pending" | "completed" | "refunded" | "cancelled" | "chargeback";
  /** Only orders paid with this payment method, by its name in the payment methods list. */
  gateway?: string;
  /** An order's ID, or part of a buyer's email. */
  search?: string;
  /**
   * What the list is ordered by.
   *
   * Left out, it is "created_at".
   */
  sort?: "created_at" | "amount" | "email" | "status";
  /**
   * Which way it is ordered.
   *
   * Left out, it is "desc".
   */
  direction?: "asc" | "desc";
  /** Only orders placed in this period. */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** Only orders placed on or after this day, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Only orders placed on or before this day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone the days of `range`, `from` and `to` are in, as an IANA name. Left out, UTC. */
  tz?: string;
  /**
   * What a row is: an order, or one product line of one.
   *
   * Left out, it is "orders".
   */
  rows?: "orders" | "lines";
  /** `1` for how many rows the file would have, as `{ rows }`, in place of the file. Not counted against the store's exports, and refused with 429 where none are left. */
  check?: "1";
}

/** What get an order answers: `orders.show`. */
export type OrdersShowResult = {
  id: string;
  dateCreated: string;
  email: string;
  customerId: string;
  productId: string;
  productName: string;
  variantId: string;
  variantName: string;
  itemCount: number;
  subtotal: number;
  discount: number;
  fee: number;
  balanceUsed: number;
  tax: unknown;
  amount: number;
  currencyCode: string;
  charged: unknown;
  status: string;
  gateway: string;
  couponCode: unknown;
  returning: boolean;
  country: unknown;
  billing: {
    name: string;
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  ip: unknown;
  userAgent: unknown;
  source: string;
  subscriptionId: unknown;
  transactionId: string;
  paidAt: string;
  note: string;
  customFields: unknown[] | Record<string, unknown>;
  emailState: string;
  emailError: string;
  emailAttempts: number;
  emailSentAt: string;
  notifyState: string;
  notifyError: string;
  notifyAttempts: number;
  notifySentAt: unknown;
  summary: string;
  items: Array<{
    id: string;
    productId: string;
    productName: string;
    variantId: string;
    variantName: string;
    amount: number;
    unitPrice: number;
    quantity: number;
    lineTotal: number;
    upsellId: unknown;
    addonOf: unknown;
    deliveredKeys: string[];
    redeliveryCount: number;
    lastRedeliveredAt: unknown;
    deliveryInstructions: string;
    dynamicState: string;
    dynamicMessage: string;
    dynamicItems: unknown[] | Record<string, unknown>;
    previousDynamicItems: unknown[] | Record<string, unknown>;
    dynamicDeliveredAt: unknown;
    dynamicError: string;
    dynamicAttempts: number;
    redeliverable: boolean;
    stockAvailable: number;
    previousKeys: unknown[] | Record<string, unknown>;
  }>;
  refund: {
    amount: number;
    currency: string;
    fromBalance: number;
    paid: number;
    source: {
      available: boolean;
      why: string;
      provider: string;
      name: string;
    };
    balance: {
      available: boolean;
      why: string;
    };
    record: {
      available: boolean;
      why: string;
    };
  };
  productSlug: string;
  imageUrl: unknown;
  customer: {
    id: string;
    emailAddress: string;
    dateCreated: string;
  };
  visit: unknown;
  affiliate: unknown;
  timeline: {
    id: string;
    kind: string;
    detail: string;
    actor: string;
    at: string;
  }[];
  testPayment: boolean;
  payments: unknown[] | Record<string, unknown>;
  invoice: unknown;
  disputes: unknown[] | Record<string, unknown>;
  review: unknown;
  requests: unknown[] | Record<string, unknown>;
  customPayment: unknown;
  customerTotals: {
    totalOrders: number;
    totalSpend: number;
    paidOrders: number;
  };
  customerOrders: {
    id: string;
    productName: string;
    variantName: string;
    itemCount: number;
    amount: number;
    status: string;
    dateCreated: string;
  }[];
};

/** What get an order's network answers: `orders.network`. */
export type OrdersNetworkResult = unknown;

/** What mark an order as paid takes: `orders.markPaid`. */
export interface OrdersMarkPaidParams {
  /** Your own reference for the payment, up to 100 characters. Shown on the order. */
  transactionId?: string;
}

/** What mark an order as paid answers: `orders.markPaid`. */
export type OrdersMarkPaidResult = {
  id: string;
  status: string;
  dynamic: unknown[] | Record<string, unknown>;
};

/** What refund an order takes: `orders.refund`. */
export interface OrdersRefundParams {
  /** `source`: back through the payment provider, to what paid. `balance`: credit on the buyer's balance at the store. `record`: only marked as refunded, because you returned the money yourself. */
  destination: "source" | "balance" | "record";
  /** Why. */
  reason: "requested" | "duplicate" | "fraudulent" | "other";
  /** For `balance` only: how much to credit, from 0.01 up to what was paid, with at most 2 decimals. Left out, all of it. */
  amount?: number;
}

/** What refund an order answers: `orders.refund`. */
export type OrdersRefundResult = {
  id: string;
  status: string;
  destination: string;
};

/** What deliver an order again takes: `orders.redeliver`. */
export interface OrdersRedeliverParams {
  /** The order's lines to act on, by their IDs. Left out, every line it applies to. */
  itemIds?: number[];
}

/** What deliver an order again answers: `orders.redeliver`. */
export type OrdersRedeliverResult = {
  id: string;
  items: {
    id: number;
    productName: string;
    variantName: string;
    keys: string[];
  }[];
  email: {
    state: string;
    reason: string;
  };
  dynamic: unknown[] | Record<string, unknown>;
};

/** What retry a dynamic delivery takes: `orders.retryDelivery`. */
export interface OrdersRetryDeliveryParams {
  /** The order's lines to act on, by their IDs. Left out, every line it applies to. */
  itemIds?: number[];
}

/** What retry a dynamic delivery answers: `orders.retryDelivery`. */
export type OrdersRetryDeliveryResult = unknown;

/** What send an order's email again answers: `orders.resendEmail`. */
export type OrdersResendEmailResult = unknown;

/** What approve a payment to check answers: `orders.approvePayment`. */
export type OrdersApprovePaymentResult = {
  id: string;
  status: string;
  dynamic: unknown[] | Record<string, unknown>;
};

/** What reject a payment to check answers: `orders.rejectPayment`. */
export type OrdersRejectPaymentResult = {
  id: string;
  status: string;
};

/** What get an order's proof of payment answers: `orders.proof`. */
export type OrdersProofResult = unknown;

/** What write an order's note takes: `orders.setNote`. */
export interface OrdersSetNoteParams {
  /** The note. Empty clears it. */
  note: string;
  /** The note as you last read it. Sent, the change is refused with `stale_write` if somebody has changed it since. */
  expectedNote?: string;
}

/** What write an order's note answers: `orders.setNote`. */
export type OrdersSetNoteResult = {
  id: string;
};

/** What list invoices takes: `invoices.list`. */
export interface InvoicesListParams {
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * How many a page holds, up to 100.
   *
   * Left out, it is 20.
   */
  perPage?: number;
  /** Only invoices whose order is in this status. */
  status?: "pending" | "completed" | "refunded" | "cancelled" | "chargeback";
  /** An invoice's number, part of a buyer's email or name, or part of what a payment link is for. */
  search?: string;
  /** Only invoices written for a buyer, or only payment links. */
  kind?: "invoice" | "link";
}

/** A row of what list invoices lists: `invoices.list`. */
export type InvoicesListItem = {
  orderId: string;
  number: number;
  label: string;
  recipientName: string;
  note: string;
  gateways: string[];
  dueAt: string;
  overdue: boolean;
  sentAt: unknown;
  sendCount: number;
  dateCreated: string;
  payUrl: string;
  kind: string;
  title: string;
  uses: unknown;
  linkOf: string;
  charge: unknown;
  email: string;
  amount: number;
  currencyCode: string;
  status: string;
  itemCount: number;
  paidAt: unknown;
};

/** What create an invoice takes: `invoices.create`. */
export interface InvoicesCreateParams {
  /** The buyer's email address. */
  email: string;
  /** The buyer's name, up to 120 characters. Printed on the invoice. */
  name?: string;
  /** A note printed on the invoice, up to 1,000 characters. */
  note?: string;
  /**
   * How many days the buyer has to pay: 1 to 30.
   *
   * Left out, it is 7.
   */
  dueDays?: number;
  /** The payment methods the buyer may pay with, by their names in the payment methods list. At least one the store has switched on. */
  gateways: string[];
  /** What is being charged for, up to 50 lines. Each is a product from the catalogue (`productId`, `variantId`, `quantity`) or a line of your own (`description`, `quantity`, `unitPrice`). */
  items: {
    /** A product of the store. */
    productId?: string;
    /** The variant of it being bought. */
    variantId?: string;
    /** A line of your own: what it is for, up to 255 characters. */
    description?: string;
    /** A line of your own: its price for one. */
    unitPrice?: number;
    /** How many. */
    quantity: number;
  }[];
  /**
   * Whether to email the invoice to the buyer now.
   *
   * Left out, it is true.
   */
  send?: boolean;
}

/** What create an invoice answers: `invoices.create`. */
export type InvoicesCreateResult = unknown;

/** What send an invoice takes: `invoices.send`. */
export interface InvoicesSendParams {
  /** For a payment link: the address to send it to. Left out, it goes to the address already on it. */
  email?: string;
}

/** What send an invoice answers: `invoices.send`. */
export type InvoicesSendResult = unknown;

/** What create a payment link takes: `invoices.link`. */
export interface InvoicesLinkParams {
  /** How much to ask for, above zero. Left out when `items` is sent. */
  amount?: number;
  /** What it is for, up to 255 characters. The buyer sees it as the order's one line. Left out, the line is called Payment. */
  description?: string;
  /** The currency the amount is in and the buyer is charged in, as a three-letter code. Left out, the store's own. */
  currency?: string;
  /**
   * How many times the link can be paid: 1 to 1,000.
   *
   * Left out, it is 1.
   */
  uses?: number;
  /** Products the link sells, in place of an amount: up to 50 lines. */
  items?: {
    /** A product of the store. */
    productId: string;
    /** The variant of it being sold. */
    variantId: string;
    /** How many. */
    quantity: number;
  }[];
  /** The payment methods it may be paid with, by their names in the payment methods list. Left out, every method the store has switched on. */
  gateways?: string[];
  /** When it stops being payable, as a date and time, or a day (`YYYY-MM-DD`) for the end of that day. At least an hour from now and at most 365 days. */
  expiresAt?: string;
  /**
   * In place of `expiresAt`: how many days it is open, 1 to 365.
   *
   * Left out, it is 7.
   */
  dueDays?: number;
}

/** What create a payment link answers: `invoices.link`. */
export type InvoicesLinkResult = {
  orderId: string;
  number: number;
  label: string;
  recipientName: string;
  note: string;
  gateways: string[];
  dueAt: string;
  overdue: boolean;
  sentAt: unknown;
  sendCount: number;
  dateCreated: string;
  payUrl: string;
  kind: string;
  title: string;
  uses: unknown;
  linkOf: string;
  charge: unknown;
  email: string;
  amount: number;
  currencyCode: string;
  status: string;
  itemCount: number;
  paidAt: unknown;
};

/** What delete a payment link answers: `invoices.deleteLink`. */
export type InvoicesDeleteLinkResult = unknown;

/** What list reviews takes: `reviews.list`. */
export interface ReviewsListParams {
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * How many a page holds.
   *
   * Left out, it is 20.
   */
  perPage?: number;
  /** Only reviews of this many stars: 1 to 5. */
  rating?: number;
  /** Only reviews a buyer wrote, or only the ones given by themselves. */
  type?: "buyer" | "automatic";
  /** A buyer's email, an order's ID, or words from a review. */
  search?: string;
}

/** A row of what list reviews lists: `reviews.list`. */
export type ReviewsListItem = {
  id: string;
  rating: number;
  message: string;
  automatic: boolean;
  dateCreated: string;
  items: {
    productId: string;
    productName: string;
    variantName: string;
  }[];
  orderId: string;
  customerId: string;
  email: string;
  orderAmount: number;
  currencyCode: string;
  flag: {
    id: string;
    status: string;
    reason: string;
    reasonLabel: string;
    note: string;
    answer: string;
    dateCreated: string;
    dateDecided: unknown;
  };
};

/** What list coupons takes: `coupons.list`. */
export interface CouponsListParams {
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * How many a page holds, up to 500.
   *
   * Left out, it is 20.
   */
  perPage?: number;
  /** Only coupons whose code contains this. */
  search?: string;
  /** Only coupons in this state. */
  state?: "active" | "inactive" | "expired";
  /** Only coupons in this coupon category. */
  categoryId?: string;
}

/** A row of what list coupons lists: `coupons.list`. */
export type CouponsListItem = {
  id: string;
  storeId: string;
  categoryId: string;
  code: string;
  discountType: string;
  value: number;
  maxUses: number;
  uses: number;
  remainingUses: number;
  minSubtotal: number;
  expiresAt: unknown;
  active: boolean;
  appliesTo: string;
  targets: unknown[] | Record<string, unknown>;
  sort: number;
  discountGiven: number;
  revenue: number;
  dateCreated: string;
  updatedAt: string;
};

/** What create a coupon takes: `coupons.create`. */
export interface CouponsCreateParams {
  /** The time zone a bare date in `expiresAt` is read in, as an IANA name. Left out, UTC. */
  tz?: string;
  /** What a buyer types. 3 to 64 letters, digits, hyphens or underscores, kept in capitals. One coupon a code in a store. */
  code: string;
  /**
   * A share of the order, or an amount in the store's currency.
   *
   * Left out, it is "percent".
   */
  discountType?: "percent" | "fixed";
  /** How much comes off: 1 to 100 for `percent`, an amount for `fixed`. */
  value: number;
  /**
   * How many orders may use it. 0 is no limit.
   *
   * Left out, it is 0.
   */
  maxUses?: number;
  /**
   * The smallest order it works on, before discounts. 0 is any order.
   *
   * Left out, it is 0.
   */
  minSubtotal?: number;
  /** When it stops working: a date (`2026-12-31`, good to the end of that day) or a date and time. Empty is never. */
  expiresAt?: string;
  /**
   * Whether buyers can use it.
   *
   * Left out, it is true.
   */
  active?: boolean;
  /** The coupon category it is filed in. Left out, it goes in the store's Default category. */
  categoryId?: string;
  /**
   * Every product, or only the ones in `targets`.
   *
   * Left out, it is "all".
   */
  appliesTo?: "all" | "some";
  /** The products it works on when `appliesTo` is `some`. Each names a product, and optionally one variant of it. */
  targets?: {
    /** The product. */
    productId: string;
    /** One variant of it. Left out, every variant. */
    variantId?: string;
  }[];
}

/** What create a coupon answers: `coupons.create`. */
export type CouponsCreateResult = {
  id: string;
  storeId: string;
  categoryId: string;
  code: string;
  discountType: string;
  value: number;
  maxUses: number;
  uses: number;
  remainingUses: number;
  minSubtotal: number;
  expiresAt: unknown;
  active: boolean;
  appliesTo: string;
  targets: unknown[] | Record<string, unknown>;
  sort: number;
  discountGiven: number;
  revenue: number;
  dateCreated: string;
  updatedAt: string;
};

/** What update a coupon takes: `coupons.update`. */
export interface CouponsUpdateParams {
  /** The time zone a bare date in `expiresAt` is read in, as an IANA name. Left out, UTC. */
  tz?: string;
  /** What a buyer types. 3 to 64 letters, digits, hyphens or underscores, kept in capitals. One coupon a code in a store. */
  code: string;
  /**
   * A share of the order, or an amount in the store's currency.
   *
   * Left out, it is "percent".
   */
  discountType?: "percent" | "fixed";
  /** How much comes off: 1 to 100 for `percent`, an amount for `fixed`. */
  value: number;
  /**
   * How many orders may use it. 0 is no limit.
   *
   * Left out, it is 0.
   */
  maxUses?: number;
  /**
   * The smallest order it works on, before discounts. 0 is any order.
   *
   * Left out, it is 0.
   */
  minSubtotal?: number;
  /** When it stops working: a date (`2026-12-31`, good to the end of that day) or a date and time. Empty is never. */
  expiresAt?: string;
  /**
   * Whether buyers can use it.
   *
   * Left out, it is true.
   */
  active?: boolean;
  /** The coupon category it is filed in. Left out, it goes in the store's Default category. */
  categoryId?: string;
  /**
   * Every product, or only the ones in `targets`.
   *
   * Left out, it is "all".
   */
  appliesTo?: "all" | "some";
  /** The products it works on when `appliesTo` is `some`. Each names a product, and optionally one variant of it. */
  targets?: {
    /** The product. */
    productId: string;
    /** One variant of it. Left out, every variant. */
    variantId?: string;
  }[];
  /** The `updatedAt` you last read. Sent, the change is refused with `stale_write` if the record has changed since. Left out, it is saved whatever happened in between. */
  expectedUpdatedAt?: string;
}

/** What update a coupon answers: `coupons.update`. */
export type CouponsUpdateResult = {
  id: string;
  storeId: string;
  categoryId: string;
  code: string;
  discountType: string;
  value: number;
  maxUses: number;
  uses: number;
  remainingUses: number;
  minSubtotal: number;
  expiresAt: unknown;
  active: boolean;
  appliesTo: string;
  targets: unknown[] | Record<string, unknown>;
  sort: number;
  discountGiven: number;
  revenue: number;
  dateCreated: string;
  updatedAt: string;
};

/** What delete a coupon answers: `coupons.delete`. */
export type CouponsDeleteResult = {
  id: string;
  deleted: boolean;
};

/** What sort coupons takes: `coupons.sort`. */
export interface CouponsSortParams {
  /** The coupon category being sorted. Left out, the Default category. */
  categoryId?: string;
  /** The coupons' IDs in their new order. */
  couponIds: string[];
}

/** What sort coupons answers: `coupons.sort`. */
export type CouponsSortResult = {
  reordered: number;
};

/** What list coupon categories answers: `couponCategories.list`. */
export type CouponCategoriesListResult = {
  id: string;
  storeId: string;
  name: string;
  slug: string;
  description: string;
  sort: number;
  systemKey: string;
  couponCount: number;
  activeCount: number;
  uses: number;
  discountGiven: number;
  dateCreated: string;
  updatedAt: string;
}[];

/** What create a coupon category takes: `couponCategories.create`. */
export interface CouponCategoriesCreateParams {
  /** Its name. One category a name in a store. */
  name: string;
  /** A note for whoever manages the store. Buyers never see it. */
  description?: string;
}

/** What create a coupon category answers: `couponCategories.create`. */
export type CouponCategoriesCreateResult = {
  id: string;
  storeId: string;
  name: string;
  slug: string;
  description: string;
  sort: number;
  systemKey: string;
  couponCount: number;
  activeCount: number;
  uses: number;
  discountGiven: number;
  dateCreated: string;
  updatedAt: string;
};

/** What update a coupon category takes: `couponCategories.update`. */
export interface CouponCategoriesUpdateParams {
  /** Its name. */
  name: string;
  /** A note for whoever manages the store. */
  description?: string;
}

/** What update a coupon category answers: `couponCategories.update`. */
export type CouponCategoriesUpdateResult = {
  id: string;
  storeId: string;
  name: string;
  slug: string;
  description: string;
  sort: number;
  systemKey: string;
  couponCount: number;
  activeCount: number;
  uses: number;
  discountGiven: number;
  dateCreated: string;
  updatedAt: string;
};

/** What delete a coupon category answers: `couponCategories.delete`. */
export type CouponCategoriesDeleteResult = {
  id: string;
  deleted: boolean;
  moved: number;
};

/** What sort coupon categories takes: `couponCategories.sort`. */
export interface CouponCategoriesSortParams {
  /** The categories' IDs in their new order. */
  categoryIds: string[];
}

/** What sort coupon categories answers: `couponCategories.sort`. */
export type CouponCategoriesSortResult = unknown;

/** What get the coupon pop-up answers: `couponPopup.show`. */
export type CouponPopupShowResult = {
  enabled: boolean;
  couponId: string;
  coupon: unknown;
  title: string;
  message: string;
  buttonText: string;
  opens: string;
  delaySeconds: number;
  frequency: string;
  updatedAt: unknown;
};

/** What update the coupon pop-up takes: `couponPopup.update`. */
export interface CouponPopupUpdateParams {
  /**
   * Whether the storefront shows it.
   *
   * Left out, it is false.
   */
  enabled?: boolean;
  /** The coupon it hands out. */
  couponId?: string;
  /** Its heading, up to 80 characters. */
  title?: string;
  /** The line under the heading, up to 240 characters. */
  message?: string;
  /** What its button says, up to 30 characters. */
  buttonText?: string;
  /**
   * After a wait, or when the visitor looks like leaving.
   *
   * Left out, it is "delay".
   */
  opens?: "delay" | "leave";
  /**
   * How long the wait is when `opens` is `delay`: 0 to 120 seconds.
   *
   * Left out, it is 5.
   */
  delaySeconds?: number;
  /**
   * How often one visitor sees it: on every page, once a visit, or once in that browser.
   *
   * Left out, it is "visit".
   */
  frequency?: "page" | "visit" | "browser";
}

/** What update the coupon pop-up answers: `couponPopup.update`. */
export type CouponPopupUpdateResult = {
  enabled: boolean;
  couponId: string;
  coupon: {
    id: string;
    code: string;
    discountType: string;
    value: number;
    minSubtotal: number;
    expiresAt: unknown;
    appliesTo: string;
    unusable: string;
    pausedBySale: boolean;
  };
  title: string;
  message: string;
  buttonText: string;
  opens: string;
  delaySeconds: number;
  frequency: string;
  updatedAt: string;
};

/** What list sales answers: `sales.list`. */
export type SalesListResult = Array<{
  id: string;
  name: string;
  enabled: boolean;
  status: string;
  discountType: string;
  value: number;
  appliesTo: string;
  targets: unknown[] | Record<string, unknown>;
  startsAt: string;
  endsAt: string;
  couponRule: string;
  exceptions: unknown[] | Record<string, unknown>;
  showBar: boolean;
  orders: number;
  revenue: number;
  dateCreated: string;
  updatedAt: string;
}>;

/** What create a sale takes: `sales.create`. */
export interface SalesCreateParams {
  /** The time zone `startsAt` and `endsAt` are read in when they name none, as an IANA name. Left out, UTC. */
  tz?: string;
  /** What the sale is called, up to 60 characters. Buyers see it on the storefront's countdown. */
  name: string;
  /**
   * A share of each price, or an amount in the store's currency.
   *
   * Left out, it is "percent".
   */
  discountType?: "percent" | "fixed";
  /** How much comes off: above 0 and up to 100 for `percent`, an amount with at most 2 decimals for `fixed`. */
  value: number;
  /**
   * Every product, or only the ones in `targets`.
   *
   * Left out, it is "all".
   */
  appliesTo?: "all" | "some";
  /** The products on sale when `appliesTo` is `some`. Each names a product, and optionally one variant of it. */
  targets?: {
    /** The product. */
    productId: string;
    /** One variant of it. Left out, every variant. */
    variantId?: string;
  }[];
  /** When it starts, as a date and time. */
  startsAt: string;
  /** When it ends, as a date and time. After `startsAt`, and not already past. */
  endsAt: string;
  /**
   * What coupons do while the sale runs. `rest`: a coupon counts only the items in the cart that are not on sale. `all`: coupons work on sale items too. `none`: no coupon works anywhere in the store.
   *
   * Left out, it is "rest".
   */
  couponRule?: "rest" | "all" | "none";
  /** Up to 100 coupons or coupon categories that `couponRule` is turned around for. */
  exceptions?: Array<{
    /** What `id` names. */
    kind: "coupon" | "category";
    /** The coupon or the coupon category. */
    id: string;
  }>;
  /**
   * Whether the sale runs when its time comes.
   *
   * Left out, it is true.
   */
  enabled?: boolean;
  /**
   * Whether the storefront shows the sale's countdown bar.
   *
   * Left out, it is true.
   */
  showBar?: boolean;
}

/** What create a sale answers: `sales.create`. */
export type SalesCreateResult = {
  id: string;
  name: string;
  enabled: boolean;
  status: string;
  discountType: string;
  value: number;
  appliesTo: string;
  targets: unknown[] | Record<string, unknown>;
  startsAt: string;
  endsAt: string;
  couponRule: string;
  exceptions: unknown[] | Record<string, unknown>;
  showBar: boolean;
  orders: number;
  revenue: number;
  dateCreated: string;
  updatedAt: string;
};

/** What get a sale answers: `sales.show`. */
export type SalesShowResult = {
  id: string;
  name: string;
  enabled: boolean;
  status: string;
  discountType: string;
  value: number;
  appliesTo: string;
  targets: unknown[] | Record<string, unknown>;
  startsAt: string;
  endsAt: string;
  couponRule: string;
  exceptions: unknown[] | Record<string, unknown>;
  showBar: boolean;
  orders: number;
  revenue: number;
  dateCreated: string;
  updatedAt: string;
};

/** What update a sale takes: `sales.update`. */
export interface SalesUpdateParams {
  /** The time zone `startsAt` and `endsAt` are read in when they name none, as an IANA name. Left out, UTC. */
  tz?: string;
  /** What the sale is called, up to 60 characters. Buyers see it on the storefront's countdown. */
  name: string;
  /**
   * A share of each price, or an amount in the store's currency.
   *
   * Left out, it is "percent".
   */
  discountType?: "percent" | "fixed";
  /** How much comes off: above 0 and up to 100 for `percent`, an amount with at most 2 decimals for `fixed`. */
  value: number;
  /**
   * Every product, or only the ones in `targets`.
   *
   * Left out, it is "all".
   */
  appliesTo?: "all" | "some";
  /** The products on sale when `appliesTo` is `some`. Each names a product, and optionally one variant of it. */
  targets?: {
    /** The product. */
    productId: string;
    /** One variant of it. Left out, every variant. */
    variantId?: string;
  }[];
  /** When it starts, as a date and time. */
  startsAt: string;
  /** When it ends, as a date and time. After `startsAt`, and not already past. */
  endsAt: string;
  /**
   * What coupons do while the sale runs. `rest`: a coupon counts only the items in the cart that are not on sale. `all`: coupons work on sale items too. `none`: no coupon works anywhere in the store.
   *
   * Left out, it is "rest".
   */
  couponRule?: "rest" | "all" | "none";
  /** Up to 100 coupons or coupon categories that `couponRule` is turned around for. */
  exceptions?: Array<{
    /** What `id` names. */
    kind: "coupon" | "category";
    /** The coupon or the coupon category. */
    id: string;
  }>;
  /**
   * Whether the sale runs when its time comes.
   *
   * Left out, it is true.
   */
  enabled?: boolean;
  /**
   * Whether the storefront shows the sale's countdown bar.
   *
   * Left out, it is true.
   */
  showBar?: boolean;
}

/** What update a sale answers: `sales.update`. */
export type SalesUpdateResult = unknown;

/** What delete a sale answers: `sales.delete`. */
export type SalesDeleteResult = {
  id: string;
  deleted: boolean;
};

/** What switch a sale on or off takes: `sales.setEnabled`. */
export interface SalesSetEnabledParams {
  /** Whether the sale runs when its time comes. */
  enabled: boolean;
}

/** What switch a sale on or off answers: `sales.setEnabled`. */
export type SalesSetEnabledResult = {
  id: string;
  name: string;
  enabled: boolean;
  status: string;
  discountType: string;
  value: number;
  appliesTo: string;
  targets: unknown[] | Record<string, unknown>;
  startsAt: string;
  endsAt: string;
  couponRule: string;
  exceptions: unknown[] | Record<string, unknown>;
  showBar: boolean;
  orders: number;
  revenue: number;
  dateCreated: string;
  updatedAt: string;
};

/** What list blog categories and posts answers: `blog.list`. */
export type BlogListResult = {
  id: string;
  name: string;
  slug: string;
  path: string;
  description: string;
  imageUrl: unknown;
  posts: {
    id: string;
    categoryId: string;
    title: string;
    slug: string;
    path: string;
    status: string;
    coverUrl: unknown;
    views: number;
    publishedAt: string;
    updatedAt: string;
  }[];
}[];

/** What create a blog category takes: `blogCategories.create`. */
export interface BlogCategoriesCreateParams {
  /** The category's name. */
  name: string;
  /** What it is about. Shown on the blog's own page. */
  description?: string;
  /** The part of its address after `/blog/`. Left out, it is made from the name. A post and a category cannot share one. */
  slug?: string;
}

/** What create a blog category answers: `blogCategories.create`. */
export type BlogCategoriesCreateResult = {
  id: string;
  name: string;
  slug: string;
  path: string;
  description: string;
  imageUrl: unknown;
  posts: unknown[] | Record<string, unknown>;
};

/** What update a blog category takes: `blogCategories.update`. */
export interface BlogCategoriesUpdateParams {
  /** The category's name. */
  name: string;
  /** What it is about. Shown on the blog's own page. */
  description?: string;
  /** The part of its address after `/blog/`. Left out, it is made from the name. A post and a category cannot share one. */
  slug?: string;
}

/** What update a blog category answers: `blogCategories.update`. */
export type BlogCategoriesUpdateResult = {
  id: string;
  name: string;
  slug: string;
  path: string;
  description: string;
  imageUrl: unknown;
};

/** What delete a blog category answers: `blogCategories.delete`. */
export type BlogCategoriesDeleteResult = {
  id: string;
  deleted: boolean;
};

/** What sort blog categories takes: `blogCategories.sort`. */
export interface BlogCategoriesSortParams {
  /** The categories' IDs in their new order. */
  ids: string[];
}

/** What sort blog categories answers: `blogCategories.sort`. */
export type BlogCategoriesSortResult = {
  reordered: number;
};

/** What upload a blog category's picture answers: `blogCategories.uploadImage`. */
export type BlogCategoriesUploadImageResult = unknown;

/** What delete a blog category's picture answers: `blogCategories.deleteImage`. */
export type BlogCategoriesDeleteImageResult = unknown;

/** What create a blog post takes: `blogPosts.create`. */
export interface BlogPostsCreateParams {
  /** The blog category it goes in. */
  categoryId: string;
  /** Its title. */
  title?: string;
}

/** What create a blog post answers: `blogPosts.create`. */
export type BlogPostsCreateResult = {
  id: string;
  categoryId: string;
  title: string;
  slug: string;
  path: string;
  status: string;
  coverUrl: unknown;
  views: number;
  publishedAt: unknown;
  updatedAt: string;
  body: string;
  coverAlt: string;
  seoTitle: string;
  seoDescription: string;
  url: string;
  search: {
    title: string;
    description: string;
    html: string;
    checks: {
      ok: boolean;
      text: string;
    }[];
  };
};

/** What get a blog post answers: `blogPosts.show`. */
export type BlogPostsShowResult = {
  id: string;
  categoryId: string;
  title: string;
  slug: string;
  path: string;
  status: string;
  coverUrl: unknown;
  views: number;
  publishedAt: string;
  updatedAt: string;
  body: string;
  coverAlt: string;
  seoTitle: string;
  seoDescription: string;
  url: string;
  search: {
    title: string;
    description: string;
    html: string;
    checks: {
      ok: boolean;
      text: string;
    }[];
  };
};

/** What update a blog post takes: `blogPosts.update`. */
export interface BlogPostsUpdateParams {
  /** Its title. */
  title: string;
  /** The last part of its address. Left out, it is made from the title. */
  slug?: string;
  /** The post's text, as Markdown. */
  body?: string;
  /** A draft is nowhere on the store. A published post is. */
  status?: "draft" | "published";
  /** The blog category it is in. A post moved to another category is counted there as a new one. */
  categoryId?: string;
  /** What its cover picture shows, for readers who cannot see it. */
  coverAlt?: string;
  /** Its own title in search results. Empty is its title. */
  seoTitle?: string;
  /** Its own description in search results. Empty is the start of its text. */
  seoDescription?: string;
}

/** What update a blog post answers: `blogPosts.update`. */
export type BlogPostsUpdateResult = {
  id: string;
  categoryId: string;
  title: string;
  slug: string;
  path: string;
  status: string;
  coverUrl: unknown;
  views: number;
  publishedAt: unknown;
  updatedAt: string;
  body: string;
  coverAlt: string;
  seoTitle: string;
  seoDescription: string;
  url: string;
  search: {
    title: string;
    description: string;
    html: string;
    checks: {
      ok: boolean;
      text: string;
    }[];
  };
};

/** What delete a blog post answers: `blogPosts.delete`. */
export type BlogPostsDeleteResult = {
  id: string;
  deleted: boolean;
};

/** What publish or unpublish a blog post takes: `blogPosts.setStatus`. */
export interface BlogPostsSetStatusParams {
  /** The new status. */
  status: "draft" | "published";
}

/** What publish or unpublish a blog post answers: `blogPosts.setStatus`. */
export type BlogPostsSetStatusResult = {
  id: string;
  categoryId: string;
  title: string;
  slug: string;
  path: string;
  status: string;
  coverUrl: unknown;
  views: number;
  publishedAt: string;
  updatedAt: string;
};

/** What sort a category's blog posts takes: `blogPosts.sort`. */
export interface BlogPostsSortParams {
  /** The blog category being sorted. */
  categoryId: string;
  /** The posts' IDs in their new order. */
  ids: string[];
}

/** What sort a category's blog posts answers: `blogPosts.sort`. */
export type BlogPostsSortResult = {
  reordered: number;
};

/** What upload a blog post's cover answers: `blogPosts.uploadCover`. */
export type BlogPostsUploadCoverResult = unknown;

/** What delete a blog post's cover answers: `blogPosts.deleteCover`. */
export type BlogPostsDeleteCoverResult = unknown;

/** What upload a picture for a blog post's text answers: `blogPosts.uploadImage`. */
export type BlogPostsUploadImageResult = unknown;

/** What get search settings answers: `seo.show`. */
export type SeoShowResult = {
  googleVerification: string;
  bingVerification: string;
  aiCrawlers: boolean;
  indexNow: boolean;
  analytics: {
    measurementId: string;
    hasSecret: boolean;
  };
};

/** What update search settings takes: `seo.update`. */
export interface SeoUpdateParams {
  /** The code Google Search Console gives a site's owner, as the code or as the whole meta tag. Empty removes it. */
  googleVerification?: string;
  /** The same, from Bing Webmaster Tools. */
  bingVerification?: string;
  /** Whether AI crawlers may read the store. Off, the store's robots.txt asks each of them not to. */
  aiCrawlers?: boolean;
  /** Whether search engines are told when a product, a post or a page changes. */
  indexNow?: boolean;
  /** The Google Analytics property paid orders are sent to, as `G-XXXXXXXXXX`. Empty stops sending them. */
  measurementId?: string;
  /** That property's Measurement Protocol API secret. It is never answered back. */
  apiSecret?: string;
}

/** What update search settings answers: `seo.update`. */
export type SeoUpdateResult = {
  googleVerification: string;
  bingVerification: string;
  aiCrawlers: boolean;
  indexNow: boolean;
  analytics: {
    measurementId: string;
    hasSecret: boolean;
  };
};

/** What list redirects and broken links answers: `redirects.list`. */
export type RedirectsListResult = {
  id: string;
  from: string;
  to: string;
  hits: number;
  createdAt: string;
  live: boolean;
}[];

/** What create a redirect takes: `redirects.create`. */
export interface RedirectsCreateParams {
  /** The address that has nothing at it, as a path on the store (`/old-page`). A whole address of the store is cut down to its path. */
  from: string;
  /** Where it leads, as a path on the store. A redirect never leaves the store, and never leads to an address that is itself redirected. */
  to: string;
}

/** What create a redirect answers: `redirects.create`. */
export type RedirectsCreateResult = {
  id: string;
  from: string;
  to: string;
  hits: number;
  createdAt: string;
  live: boolean;
}[];

/** What update a redirect takes: `redirects.update`. */
export interface RedirectsUpdateParams {
  /** The address that has nothing at it, as a path on the store (`/old-page`). A whole address of the store is cut down to its path. */
  from: string;
  /** Where it leads, as a path on the store. A redirect never leaves the store, and never leads to an address that is itself redirected. */
  to: string;
}

/** What update a redirect answers: `redirects.update`. */
export type RedirectsUpdateResult = {
  id: string;
  from: string;
  to: string;
  hits: number;
  createdAt: string;
  live: boolean;
}[];

/** What delete a redirect answers: `redirects.delete`. */
export type RedirectsDeleteResult = unknown[] | Record<string, unknown>;

/** What dismiss broken links takes: `brokenLinks.dismiss`. */
export interface BrokenLinksDismissParams {
  /** The one address to take off the list. Left out, the whole list is emptied. */
  path?: string;
}

/** What dismiss broken links answers: `brokenLinks.dismiss`. */
export type BrokenLinksDismissResult = unknown[] | Record<string, unknown>;

/** What get the sitemap answers: `sitemap.show`. */
export type SitemapShowResult = {
  url: string;
  served: boolean;
  total: number;
  listed: number;
  priorities: string[];
  frequencies: string[];
  kinds: {
    id: string;
    listed: boolean;
    priority: string;
    changefreq: string;
    entries: {
      ref: string;
      name: string;
      path: string;
      changed: string;
      on: boolean;
      priority: string;
      changefreq: string;
    }[];
  }[];
};

/** What update a kind of address takes: `sitemap.updateKind`. */
export interface SitemapUpdateKindParams {
  /** Whether the sitemap lists it. */
  listed?: boolean;
  /** Its priority, from `0.1` to `1.0`. */
  priority?: string;
  /** How often it changes. */
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}

/** What update a kind of address answers: `sitemap.updateKind`. */
export type SitemapUpdateKindResult = {
  url: string;
  served: boolean;
  total: number;
  listed: number;
  priorities: string[];
  frequencies: string[];
  kinds: {
    id: string;
    listed: boolean;
    priority: string;
    changefreq: string;
    entries: {
      ref: string;
      name: string;
      path: string;
      changed: string;
      on: boolean;
      priority: string;
      changefreq: string;
    }[];
  }[];
};

/** What update one address takes: `sitemap.updateEntry`. */
export interface SitemapUpdateEntryParams {
  /** The kind the address is of. */
  kind: "pages" | "categories" | "products" | "blog";
  /** Which address of that kind, as "Get the sitemap" names it. */
  ref: string;
  /** Whether the sitemap lists it. */
  listed?: boolean;
  /** Its priority, from `0.1` to `1.0`. */
  priority?: string;
  /** How often it changes. */
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}

/** What update one address answers: `sitemap.updateEntry`. */
export type SitemapUpdateEntryResult = unknown;

/** What get Cart Recovery takes: `cartRecovery.show`. */
export interface CartRecoveryShowParams {
  /**
   * The period.
   *
   * Left out, it is "30d".
   */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** The first day of a period of your own, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Its last day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** What get Cart Recovery answers: `cartRecovery.show`. */
export type CartRecoveryShowResult = {
  enabled: boolean;
  firstOn: boolean;
  firstMinutes: number;
  firstSubject: string;
  declinedOn: boolean;
  declinedMinutes: number;
  declinedSubject: string;
  secondOn: boolean;
  secondMinutes: number;
  secondSubject: string;
  secondPercent: number;
};

/** What change Cart Recovery takes: `cartRecovery.update`. */
export interface CartRecoveryUpdateParams {
  /** Whether Cart Recovery writes to buyers at all. */
  enabled?: boolean;
  /** Whether the first email is sent. */
  firstOn?: boolean;
  /** Minutes after the buyer left. One of 30, 60, 120, 240. */
  firstMinutes?: number;
  /** Its subject, up to 150 characters. */
  firstSubject?: string;
  /** Whether the declined card email takes the first one's place after a card was turned down. */
  declinedOn?: boolean;
  /** Minutes after the decline. One of 5, 15, 30, 60. */
  declinedMinutes?: number;
  /** Its subject, up to 150 characters. */
  declinedSubject?: string;
  /** Whether the second email is sent. */
  secondOn?: boolean;
  /** Minutes after the buyer left. One of 720, 1200, 1440, 2880. */
  secondMinutes?: number;
  /** Its subject, up to 150 characters. */
  secondSubject?: string;
  /** The percent off its coupon. One of 0, 5, 10, 15, 20, 25. 0 sends it with no coupon. */
  secondPercent?: number;
}

/** What change Cart Recovery answers: `cartRecovery.update`. */
export type CartRecoveryUpdateResult = {
  enabled: boolean;
  firstOn: boolean;
  firstMinutes: number;
  firstSubject: string;
  declinedOn: boolean;
  declinedMinutes: number;
  declinedSubject: string;
  secondOn: boolean;
  secondMinutes: number;
  secondSubject: string;
  secondPercent: number;
};

/** What list carts takes: `cartRecovery.carts`. */
export interface CartRecoveryCartsParams {
  /**
   * The period.
   *
   * Left out, it is "30d".
   */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** The first day of a period of your own, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Its last day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
  /**
   * Only these.
   *
   * Left out, it is "all".
   */
  show?: "all" | "waiting" | "emailed" | "recovered" | "unsubscribed" | "clicked";
  /** Part of a buyer's email. */
  search?: string;
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
}

/** A row of what list carts lists: `cartRecovery.carts`. */
export type CartRecoveryCartsItem = {
  id: string;
  email: string;
  total: number;
  currency: string;
  what: string;
  leftAt: string;
  state: string;
  note: string;
  clickedAt: unknown;
  emailedAt: unknown;
  secondEmailAt: unknown;
  couponCode: unknown;
  recoveredOrderId: unknown;
  recoveredAt: unknown;
};

/** What get a cart answers: `cartRecovery.cart`. */
export type CartRecoveryCartResult = {
  id: string;
  email: string;
  total: number;
  currency: string;
  what: string;
  leftAt: string;
  state: string;
  note: string;
  clickedAt: unknown;
  emailedAt: unknown;
  secondEmailAt: unknown;
  couponCode: unknown;
  recoveredOrderId: unknown;
  recoveredAt: unknown;
};

/** What get Win-Back takes: `winBack.show`. */
export interface WinBackShowParams {
  /**
   * The period.
   *
   * Left out, it is "30d".
   */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** The first day of a period of your own, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Its last day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** What get Win-Back answers: `winBack.show`. */
export type WinBackShowResult = {
  enabled: boolean;
  firstOn: boolean;
  firstDays: number;
  firstSubject: string;
  secondOn: boolean;
  secondDays: number;
  secondSubject: string;
  secondPercent: number;
  audience: string;
};

/** What change Win-Back takes: `winBack.update`. */
export interface WinBackUpdateParams {
  /** Whether Win-Back writes to anybody. */
  enabled?: boolean;
  /** Whether the first email is sent. */
  firstOn?: boolean;
  /** Days after a buyer's last order. One of 14, 21, 30, 45, 60, 90. */
  firstDays?: number;
  /** Its subject, up to 150 characters. */
  firstSubject?: string;
  /** Whether the second email is sent. */
  secondOn?: boolean;
  /** Days after the first. One of 3, 7, 14, 21, 30. */
  secondDays?: number;
  /** Its subject, up to 150 characters. */
  secondSubject?: string;
  /** The percent off its coupon. One of 0, 5, 10, 15, 20, 25. 0 sends it with no coupon. */
  secondPercent?: number;
  /** Who is written to: empty for every subscriber, `vip`, or the ID of one of the store's tags. */
  audience?: string;
}

/** What change Win-Back answers: `winBack.update`. */
export type WinBackUpdateResult = {
  enabled: boolean;
  firstOn: boolean;
  firstDays: number;
  firstSubject: string;
  secondOn: boolean;
  secondDays: number;
  secondSubject: string;
  secondPercent: number;
  audience: string;
};

/** What list Win-Back buyers takes: `winBack.buyers`. */
export interface WinBackBuyersParams {
  /**
   * Only these.
   *
   * Left out, it is "all".
   */
  show?: "all" | "due" | "emailed" | "won" | "unsubscribed" | "clicked";
  /** Part of a buyer's email. */
  search?: string;
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
}

/** A row of what list Win-Back buyers lists: `winBack.buyers`. */
export type WinBackBuyersItem = {
  id: string;
  email: string;
  customerId: string;
  orders: number;
  spent: number;
  tags: unknown[] | Record<string, unknown>;
  state: string;
  stopped: unknown;
  lastOrderId: string;
  lastOrderAt: string;
  what: string;
  nextStep: string;
  dueAt: string;
  emailedAt: unknown;
  secondEmailAt: unknown;
  clickedAt: unknown;
  couponCode: unknown;
  couponExpiresAt: unknown;
  wonOrderId: unknown;
  wonAt: unknown;
  wonAfter: unknown;
  quietDays: unknown;
  unsubscribedAt: unknown;
};

/** What get a Win-Back buyer answers: `winBack.buyer`. */
export type WinBackBuyerResult = {
  id: string;
  email: string;
  customerId: string;
  orders: number;
  spent: number;
  tags: unknown[] | Record<string, unknown>;
  state: string;
  stopped: unknown;
  lastOrderId: string;
  lastOrderAt: string;
  what: string;
  nextStep: string;
  dueAt: string;
  emailedAt: unknown;
  secondEmailAt: unknown;
  clickedAt: unknown;
  couponCode: unknown;
  couponExpiresAt: unknown;
  wonOrderId: unknown;
  wonAt: unknown;
  wonAfter: unknown;
  quietDays: unknown;
  unsubscribedAt: unknown;
};

/** What get subscriber figures takes: `subscribers.summary`. */
export interface SubscribersSummaryParams {
  /**
   * The period.
   *
   * Left out, it is "30d".
   */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** The first day of a period of your own, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Its last day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** What get subscriber figures answers: `subscribers.summary`. */
export type SubscribersSummaryResult = {
  asking: boolean;
  figures: {
    subscribed: number;
    joined: number;
    asked: number;
    rate: number;
    unsubscribed: number;
    sent: number;
  };
};

/** What change asking at checkout takes: `subscribers.asking`. */
export interface SubscribersAskingParams {
  /** Ask, or not. */
  on: boolean;
}

/** What change asking at checkout answers: `subscribers.asking`. */
export type SubscribersAskingResult = {
  asking: boolean;
};

/** What list subscribers takes: `subscribers.list`. */
export interface SubscribersListParams {
  /**
   * Only these.
   *
   * Left out, it is "all".
   */
  show?: "all" | "subscribed" | "unsubscribed";
  /** Part of an email address. */
  search?: string;
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
}

/** A row of what list subscribers lists: `subscribers.list`. */
export type SubscribersListItem = {
  email: string;
  customerId: string;
  subscribed: boolean;
  subscribedAt: string;
  source: string;
  where: string;
  orderId: string;
  unsubscribedAt: unknown;
  unsubscribedBy: unknown;
};

/** What export subscribers takes: `subscribers.export`. */
export interface SubscribersExportParams {
  /**
   * Only these.
   *
   * Left out, it is "all".
   */
  show?: "all" | "subscribed" | "unsubscribed";
  /** Part of an email address. */
  search?: string;
  /** `1` for how many rows the file would have, as `{ rows }`, in place of the file. */
  check?: "1";
}

/** What unsubscribe a subscriber takes: `subscribers.unsubscribe`. */
export interface SubscribersUnsubscribeParams {
  /** Their email address. */
  email: string;
}

/** What unsubscribe a subscriber answers: `subscribers.unsubscribe`. */
export type SubscribersUnsubscribeResult = {
  email: string;
  customerId: unknown;
  subscribed: boolean;
  subscribedAt: string;
  source: string;
  where: string;
  orderId: string;
  unsubscribedAt: string;
  unsubscribedBy: string;
};

/** What list customers takes: `customers.list`. */
export interface CustomersListParams {
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * How many a page holds.
   *
   * Left out, it is 20.
   */
  perPage?: number;
  /** Part of an email address. */
  search?: string;
  /**
   * What the list is ordered by, largest or latest first.
   *
   * Left out, it is "newest".
   */
  sort?: "newest" | "spent" | "orders" | "recent" | "balance";
  /** Only customers who are affiliates, or who are subscribed to the store's news and offers. */
  only?: "affiliates" | "subscribed";
  /** Only customers wearing this tag: `vip`, `disputed`, or the ID of one of the store's own. */
  tag?: string;
  /** Only customers first seen in this period. */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** Only customers first seen on or after this day, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Only customers first seen on or before this day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** A row of what list customers lists: `customers.list`. */
export type CustomersListItem = {
  id: string;
  emailAddress: string;
  dateCreated: string;
  totalOrders: number;
  totalSpend: number;
  paidOrders: number;
  lastOrderAt: unknown;
  balance: number;
  affiliateState: unknown;
  tags: {
    id: string;
    name: string;
    tone: string;
    automatic: boolean;
  }[];
};

/** What create a customer takes: `customers.create`. */
export interface CustomersCreateParams {
  /** The customer's email address. */
  email: string;
}

/** What create a customer answers: `customers.create`. */
export type CustomersCreateResult = {
  id: string;
  emailAddress: string;
  dateCreated: string;
  totalOrders: number;
  totalSpend: number;
  paidOrders: number;
  lastOrderAt: unknown;
  balance: number;
  affiliateState: unknown;
};

/** What export customers takes: `customers.export`. */
export interface CustomersExportParams {
  /** Part of an email address. */
  search?: string;
  /**
   * What the file is ordered by, largest or latest first.
   *
   * Left out, it is "newest".
   */
  sort?: "newest" | "spent" | "orders" | "recent" | "balance";
  /** Only customers who are affiliates, or who are subscribed to the store's news and offers. */
  only?: "affiliates" | "subscribed";
  /** Only customers wearing this tag: `vip`, `disputed`, or the ID of one of the store's own. */
  tag?: string;
  /** `1` for how many rows the file would have, as `{ rows }`, in place of the file. Not counted against the store's exports, and refused with 429 where none are left. */
  check?: "1";
  /** Only customers first seen in this period. */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** Only customers first seen on or after this day, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Only customers first seen on or before this day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** What get customer figures takes: `customers.stats`. */
export interface CustomersStatsParams {
  /** Only customers first seen in this period. */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** Only customers first seen on or after this day, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Only customers first seen on or before this day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** What get customer figures answers: `customers.stats`. */
export type CustomersStatsResult = {
  range: {
    preset: string;
    from: string;
    to: string;
  };
  currencyCode: string;
  customers: {
    total: number;
    change: unknown;
  };
  newCustomers: {
    count: number;
    previous: number;
    change: unknown;
  };
  returning: {
    rate: number;
    returning: number;
    customers: number;
    change: unknown;
  };
  averageSpend: {
    value: number;
    previous: number;
    change: unknown;
  };
};

/** What get a customer answers: `customers.show`. */
export type CustomersShowResult = {
  balance: number;
  balanceAtCheckout: boolean;
  tags: {
    id: string;
    name: string;
    tone: string;
    automatic: boolean;
  }[];
  balanceHistory: {
    id: string;
    kind: string;
    amount: number;
    balanceAfter: number;
    currencyCode: string;
    note: string;
    orderId: unknown;
    by: string;
    dateCreated: string;
  }[];
  affiliate: unknown;
  blacklisted: boolean;
  blacklistedBy: unknown[] | Record<string, unknown>;
  blacklistRules: number;
  knownAddresses: number;
  id: string;
  emailAddress: string;
  dateCreated: string;
  totalOrders: number;
  totalSpend: number;
  paidOrders: number;
  lastOrderAt: unknown;
  currencyCode: string;
  ordersTruncated: boolean;
  orders: unknown[] | Record<string, unknown>;
};

/** What change a customer's balance takes: `customers.setBalance`. */
export interface CustomersSetBalanceParams {
  /** Add to it, take from it, or set it to exactly this. */
  mode: "add" | "subtract" | "set";
  /** How much, in the store's currency, with at most 2 decimals. */
  amount: number;
  /** Why, up to 500 characters. Kept in the balance's history. */
  note?: string;
}

/** What change a customer's balance answers: `customers.setBalance`. */
export type CustomersSetBalanceResult = {
  balance: number;
  balanceAtCheckout: boolean;
  tags: {
    id: string;
    name: string;
    tone: string;
    automatic: boolean;
  }[];
  balanceHistory: {
    id: string;
    kind: string;
    amount: number;
    balanceAfter: number;
    currencyCode: string;
    note: string;
    orderId: unknown;
    by: string;
    dateCreated: string;
  }[];
  affiliate: unknown;
  blacklisted: boolean;
  blacklistedBy: unknown[] | Record<string, unknown>;
  blacklistRules: number;
  knownAddresses: number;
};

/** What blacklist a customer takes: `customers.blacklist`. */
export interface CustomersBlacklistParams {
  /**
   * Whether to blacklist the IP addresses their orders came from too, up to 20.
   *
   * Left out, it is true.
   */
  addresses?: boolean;
  /** Why. Kept with the rules it makes. */
  note?: string;
}

/** What blacklist a customer answers: `customers.blacklist`. */
export type CustomersBlacklistResult = {
  balance: number;
  balanceAtCheckout: boolean;
  tags: {
    id: string;
    name: string;
    tone: string;
    automatic: boolean;
  }[];
  balanceHistory: {
    id: string;
    kind: string;
    amount: number;
    balanceAfter: number;
    currencyCode: string;
    note: string;
    orderId: unknown;
    by: string;
    dateCreated: string;
  }[];
  affiliate: unknown;
  blacklisted: boolean;
  blacklistedBy: {
    id: string;
    type: string;
    value: string;
    part: string;
  }[];
  blacklistRules: number;
  knownAddresses: number;
  added: number;
};

/** What clear a customer from the blacklist takes: `customers.unblacklist`. */
export interface CustomersUnblacklistParams {
  /**
   * Whether to take off the rules on the IP addresses their orders came from too, which someone added by hand.
   *
   * Left out, it is true.
   */
  addresses?: boolean;
}

/** What clear a customer from the blacklist answers: `customers.unblacklist`. */
export type CustomersUnblacklistResult = {
  balance: number;
  balanceAtCheckout: boolean;
  tags: {
    id: string;
    name: string;
    tone: string;
    automatic: boolean;
  }[];
  balanceHistory: {
    id: string;
    kind: string;
    amount: number;
    balanceAfter: number;
    currencyCode: string;
    note: string;
    orderId: unknown;
    by: string;
    dateCreated: string;
  }[];
  affiliate: unknown;
  blacklisted: boolean;
  blacklistedBy: unknown[] | Record<string, unknown>;
  blacklistRules: number;
  knownAddresses: number;
  removed: number;
};

/** What list customer tags answers: `customerTags.list`. */
export type CustomerTagsListResult = {
  id: string;
  name: string;
  tone: string;
  automatic: boolean;
  customers: number;
}[];

/** What add a customer tag takes: `customerTags.create`. */
export interface CustomerTagsCreateParams {
  /** Its name, up to 32 characters. */
  name: string;
  /**
   * Its colour.
   *
   * Left out, it is "neutral".
   */
  tone?: "neutral" | "primary" | "success" | "warning" | "danger";
}

/** What add a customer tag answers: `customerTags.create`. */
export type CustomerTagsCreateResult = {
  id: string;
  name: string;
  tone: string;
  automatic: boolean;
};

/** What change VIP and Disputed Before takes: `customerTags.automatic`. */
export interface CustomerTagsAutomaticParams {
  /** Whether VIP is put on. */
  vipOn?: boolean;
  /** A VIP has spent at least this, in the store's currency, on completed orders. 0 leaves it out. */
  vipSpent?: number;
  /** Or paid for at least this many orders. 0 leaves it out. */
  vipOrders?: number;
  /** Over this many days back, 0 for all time. */
  vipDays?: 0 | 365 | 180 | 90 | 30;
  /** Whether Disputed Before is put on: a dispute on any of their orders, won or lost. */
  disputedOn?: boolean;
}

/** What change VIP and Disputed Before answers: `customerTags.automatic`. */
export type CustomerTagsAutomaticResult = {
  id: string;
  name: string;
  tone: string;
  automatic: boolean;
  customers: number;
}[];

/** What change a customer tag takes: `customerTags.update`. */
export interface CustomerTagsUpdateParams {
  /** Its name, up to 32 characters. */
  name?: string;
  /** Its colour. */
  tone?: "neutral" | "primary" | "success" | "warning" | "danger";
}

/** What change a customer tag answers: `customerTags.update`. */
export type CustomerTagsUpdateResult = {
  id: string;
  name: string;
  tone: string;
  automatic: boolean;
};

/** What delete a customer tag answers: `customerTags.delete`. */
export type CustomerTagsDeleteResult = unknown[] | Record<string, unknown>;

/** What set a customer's tags takes: `customers.setTags`. */
export interface CustomersSetTagsParams {
  /** The IDs of the store's tags they wear. */
  tags: string[];
}

/** What set a customer's tags answers: `customers.setTags`. */
export type CustomersSetTagsResult = {
  id: string;
  name: string;
  tone: string;
  automatic: boolean;
}[];

/** What put a tag on a customer answers: `customers.tag`. */
export type CustomersTagResult = {
  id: string;
  name: string;
  tone: string;
  automatic: boolean;
}[];

/** What take a tag off a customer answers: `customers.untag`. */
export type CustomersUntagResult = unknown[] | Record<string, unknown>;

/** What list affiliates answers: `affiliates.list`. */
export type AffiliatesListResult = {
  id: string;
  customerId: string;
  email: string;
  code: string;
  link: string;
  commission: number;
  discount: number;
  active: boolean;
  clicks: number;
  orders: number;
  revenue: number;
  earned: number;
  balance: number;
  requested: number;
  paidOut: number;
  paidAsCredit: number;
  joinedThemselves: boolean;
  dateCreated: string;
}[];

/** What create an affiliate takes: `affiliates.create`. */
export interface AffiliatesCreateParams {
  /** The customer's email address. */
  customer: string;
  /** What their link ends in: 2 to 40 letters, digits and dashes. One affiliate a code in a store. */
  code?: string;
  /** The share of each order they earn, in percent: above 0, up to 90. It is taken on what the buyer paid for the products, after every discount, before fees and tax. */
  commission?: number;
  /**
   * What their link takes off for the buyer, in percent: 0 to 90.
   *
   * Left out, it is 0.
   */
  discount?: number;
  /** Whether their link works. Switched off, it takes nothing off and earns nothing. */
  active?: boolean;
}

/** What create an affiliate answers: `affiliates.create`. */
export type AffiliatesCreateResult = {
  id: string;
  customerId: string;
  email: string;
  code: string;
  link: string;
  commission: number;
  discount: number;
  active: boolean;
  clicks: number;
  orders: number;
  revenue: number;
  earned: number;
  balance: number;
  requested: number;
  paidOut: number;
  paidAsCredit: number;
  joinedThemselves: boolean;
  dateCreated: string;
};

/** What update an affiliate takes: `affiliates.update`. */
export interface AffiliatesUpdateParams {
  /** What their link ends in: 2 to 40 letters, digits and dashes. One affiliate a code in a store. */
  code?: string;
  /** The share of each order they earn, in percent: above 0, up to 90. It is taken on what the buyer paid for the products, after every discount, before fees and tax. */
  commission?: number;
  /**
   * What their link takes off for the buyer, in percent: 0 to 90.
   *
   * Left out, it is 0.
   */
  discount?: number;
  /** Whether their link works. Switched off, it takes nothing off and earns nothing. */
  active?: boolean;
}

/** What update an affiliate answers: `affiliates.update`. */
export type AffiliatesUpdateResult = {
  id: string;
  customerId: string;
  email: string;
  code: string;
  link: string;
  commission: number;
  discount: number;
  active: boolean;
  clicks: number;
  orders: number;
  revenue: number;
  earned: number;
  balance: number;
  requested: number;
  paidOut: number;
  paidAsCredit: number;
  joinedThemselves: boolean;
  dateCreated: string;
};

/** What delete an affiliate answers: `affiliates.delete`. */
export type AffiliatesDeleteResult = {
  id: string;
  customerId: string;
  email: string;
  code: string;
  link: string;
  commission: number;
  discount: number;
  active: boolean;
  clicks: number;
  orders: number;
  revenue: number;
  earned: number;
  balance: number;
  requested: number;
  paidOut: number;
  paidAsCredit: number;
  joinedThemselves: boolean;
  dateCreated: string;
}[];

/** What change an affiliate's balance takes: `affiliates.setBalance`. */
export interface AffiliatesSetBalanceParams {
  /** Add to it, take from it, or set it to exactly this. */
  mode: "add" | "subtract" | "set";
  /** How much, in the store's currency, with at most 2 decimals. */
  amount: number;
  /** Why, up to 500 characters. Kept in the balance's history. */
  note?: string;
}

/** What change an affiliate's balance answers: `affiliates.setBalance`. */
export type AffiliatesSetBalanceResult = {
  id: string;
  customerId: string;
  email: string;
  code: string;
  link: string;
  commission: number;
  discount: number;
  active: boolean;
  clicks: number;
  orders: number;
  revenue: number;
  earned: number;
  balance: number;
  requested: number;
  paidOut: number;
  paidAsCredit: number;
  joinedThemselves: boolean;
  dateCreated: string;
};

/** What get an affiliate's history answers: `affiliates.history`. */
export type AffiliatesHistoryResult = {
  changes: {
    id: string;
    kind: string;
    amount: number;
    balanceAfter: number;
    currencyCode: string;
    dateCreated: string;
    note: string;
    orderId: unknown;
    by: string;
  }[];
  payouts: unknown[] | Record<string, unknown>;
};

/** What list referred orders takes: `affiliates.orders`. */
export interface AffiliatesOrdersParams {
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * How many a page holds.
   *
   * Left out, it is 25.
   */
  perPage?: number;
  /** Only one affiliate's orders, by the affiliate's ID. */
  affiliate?: string;
}

/** A row of what list referred orders lists: `affiliates.orders`. */
export type AffiliatesOrdersItem = unknown;

/** What list payout requests takes: `affiliates.payouts`. */
export interface AffiliatesPayoutsParams {
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * How many a page holds.
   *
   * Left out, it is 25.
   */
  perPage?: number;
  /** Only payouts in this status. */
  status?: "requested" | "paid" | "declined" | "cancelled";
}

/** A row of what list payout requests lists: `affiliates.payouts`. */
export type AffiliatesPayoutsItem = unknown;

/** What answer a payout request takes: `affiliates.answerPayout`. */
export interface AffiliatesAnswerPayoutParams {
  /** What became of it. */
  action: "paid" | "declined";
  /** For a declined payout, the reason. The affiliate reads it. Up to 500 characters. */
  note?: string;
}

/** What answer a payout request answers: `affiliates.answerPayout`. */
export type AffiliatesAnswerPayoutResult = unknown;

/** What ask for a payout for an affiliate takes: `affiliates.askPayout`. */
export interface AffiliatesAskPayoutParams {
  /** How much, above zero and up to what the affiliate is owed. */
  amount: number;
  /** How they want to be paid, in their own words. Up to 300 characters. */
  details: string;
}

/** What ask for a payout for an affiliate answers: `affiliates.askPayout`. */
export type AffiliatesAskPayoutResult = unknown;

/** What take back a payout request answers: `affiliates.withdrawPayout`. */
export type AffiliatesWithdrawPayoutResult = unknown;

/** What move commission to store balance takes: `affiliates.toStoreBalance`. */
export interface AffiliatesToStoreBalanceParams {
  /** How much, above zero and up to what the affiliate is owed. */
  amount: number;
}

/** What move commission to store balance answers: `affiliates.toStoreBalance`. */
export type AffiliatesToStoreBalanceResult = unknown;

/** What get the affiliate programme answers: `affiliateProgramme.show`. */
export type AffiliateProgrammeShowResult = {
  enabled: boolean;
  defaultCommission: number;
  defaultDiscount: number;
  selfSignup: boolean;
  ownLinks: boolean;
  toStore: boolean;
  payouts: boolean;
};

/** What update the affiliate programme takes: `affiliateProgramme.update`. */
export interface AffiliateProgrammeUpdateParams {
  /** Whether the programme is on. */
  enabled?: boolean;
  /** The commission a new affiliate gets, in percent: above 0, up to 90. */
  defaultCommission?: number;
  /** The discount a new affiliate's link gives buyers, in percent: 0 to 90. */
  defaultDiscount?: number;
  /** Whether a customer may join from the customer panel. */
  selfSignup?: boolean;
  /** Whether an affiliate may change the code their link ends in. */
  ownLinks?: boolean;
  /** Whether an affiliate may move commission to their store balance. */
  toStore?: boolean;
  /** Whether an affiliate may ask for a payout. */
  payouts?: boolean;
}

/** What update the affiliate programme answers: `affiliateProgramme.update`. */
export type AffiliateProgrammeUpdateResult = {
  enabled: boolean;
  defaultCommission: number;
  defaultDiscount: number;
  selfSignup: boolean;
  ownLinks: boolean;
  toStore: boolean;
  payouts: boolean;
};

/** What list support tickets takes: `tickets.list`. */
export interface TicketsListParams {
  /**
   * Only these: `unresolved` is `open` and `answered` together.
   *
   * Left out, it is "all".
   */
  show?: "all" | "unresolved" | "open" | "answered" | "resolved";
  /** Part of the subject, the buyer's email or the latest message, or the start of the ticket's or the order's ID. */
  search?: string;
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * How many a page holds, up to 100.
   *
   * Left out, it is 25.
   */
  perPage?: number;
}

/** A row of what list support tickets lists: `tickets.list`. */
export type TicketsListItem = {
  id: string;
  email: string;
  customerId: unknown;
  orderId: string;
  subject: string;
  status: string;
  messages: number;
  pictures: number;
  lastMessageAt: string;
  lastFrom: string;
  lastLine: string;
  unread: boolean;
  firstReplyAt: unknown;
  answeredAt: unknown;
  resolvedAt: unknown;
  resolvedBy: unknown;
  createdAt: string;
  updatedAt: string;
};

/** What switch Support Tickets on or off takes: `tickets.settings`. */
export interface TicketsSettingsParams {
  /** Whether buyers can open tickets. */
  on: boolean;
}

/** What switch Support Tickets on or off answers: `tickets.settings`. */
export type TicketsSettingsResult = {
  on: boolean;
};

/** What get a support ticket answers: `tickets.get`. */
export type TicketsGetResult = {
  id: string;
  email: string;
  customerId: unknown;
  orderId: string;
  subject: string;
  status: string;
  messages: number;
  pictures: number;
  lastMessageAt: string;
  lastFrom: string;
  lastLine: string;
  unread: boolean;
  firstReplyAt: unknown;
  answeredAt: unknown;
  resolvedAt: unknown;
  resolvedBy: unknown;
  createdAt: string;
  updatedAt: string;
  conversation: Array<{
    id: string;
    from: string;
    body: string;
    pictures: unknown[] | Record<string, unknown>;
    createdAt: string;
  }>;
  canReopenUntil: unknown;
  limits: {
    body: number;
    subject: number;
    picturesPerMessage: number;
    picturesPerTicket: number;
    pictureBytes: number;
  };
  customer: {
    id: unknown;
    email: string;
    tags: unknown[] | Record<string, unknown>;
  };
  order: {
    id: string;
    status: string;
    amount: string;
  };
  orders: {
    id: string;
    status: string;
    amount: string;
    products: string[];
    createdAt: string;
  }[];
  on: boolean;
};

/** What reply to a support ticket takes: `tickets.reply`. */
export interface TicketsReplyParams {
  /** The reply, up to 500 characters. */
  message: string;
  /**
   * Mark the ticket resolved with the reply.
   *
   * Left out, it is false.
   */
  resolve?: boolean;
}

/** What reply to a support ticket answers: `tickets.reply`. */
export type TicketsReplyResult = {
  id: string;
  email: string;
  customerId: unknown;
  orderId: string;
  subject: string;
  status: string;
  messages: number;
  pictures: number;
  lastMessageAt: string;
  lastFrom: string;
  lastLine: string;
  unread: boolean;
  firstReplyAt: string;
  answeredAt: string;
  resolvedAt: unknown;
  resolvedBy: unknown;
  createdAt: string;
  updatedAt: string;
  conversation: Array<{
    id: string;
    from: string;
    body: string;
    pictures: unknown[] | Record<string, unknown>;
    createdAt: string;
  }>;
  canReopenUntil: unknown;
  limits: {
    body: number;
    subject: number;
    picturesPerMessage: number;
    picturesPerTicket: number;
    pictureBytes: number;
  };
  customer: {
    id: unknown;
    email: string;
    tags: unknown[] | Record<string, unknown>;
  };
  order: {
    id: string;
    status: string;
    amount: string;
  };
  orders: {
    id: string;
    status: string;
    amount: string;
    products: string[];
    createdAt: string;
  }[];
  on: boolean;
};

/** What resolve a support ticket answers: `tickets.resolve`. */
export type TicketsResolveResult = {
  id: string;
  email: string;
  customerId: unknown;
  orderId: string;
  subject: string;
  status: string;
  messages: number;
  pictures: number;
  lastMessageAt: string;
  lastFrom: string;
  lastLine: string;
  unread: boolean;
  firstReplyAt: string;
  answeredAt: string;
  resolvedAt: string;
  resolvedBy: string;
  createdAt: string;
  updatedAt: string;
  conversation: Array<{
    id: string;
    from: string;
    body: string;
    pictures: unknown[] | Record<string, unknown>;
    createdAt: string;
  }>;
  canReopenUntil: string;
  limits: {
    body: number;
    subject: number;
    picturesPerMessage: number;
    picturesPerTicket: number;
    pictureBytes: number;
  };
  customer: {
    id: unknown;
    email: string;
    tags: unknown[] | Record<string, unknown>;
  };
  order: {
    id: string;
    status: string;
    amount: string;
  };
  orders: {
    id: string;
    status: string;
    amount: string;
    products: string[];
    createdAt: string;
  }[];
  on: boolean;
};

/** What reopen a support ticket answers: `tickets.reopen`. */
export type TicketsReopenResult = {
  id: string;
  email: string;
  customerId: unknown;
  orderId: string;
  subject: string;
  status: string;
  messages: number;
  pictures: number;
  lastMessageAt: string;
  lastFrom: string;
  lastLine: string;
  unread: boolean;
  firstReplyAt: string;
  answeredAt: string;
  resolvedAt: unknown;
  resolvedBy: unknown;
  createdAt: string;
  updatedAt: string;
  conversation: Array<{
    id: string;
    from: string;
    body: string;
    pictures: unknown[] | Record<string, unknown>;
    createdAt: string;
  }>;
  canReopenUntil: unknown;
  limits: {
    body: number;
    subject: number;
    picturesPerMessage: number;
    picturesPerTicket: number;
    pictureBytes: number;
  };
  customer: {
    id: unknown;
    email: string;
    tags: unknown[] | Record<string, unknown>;
  };
  order: {
    id: string;
    status: string;
    amount: string;
  };
  orders: {
    id: string;
    status: string;
    amount: string;
    products: string[];
    createdAt: string;
  }[];
  on: boolean;
};

/** What list blacklist rules takes: `blacklist.list`. */
export interface BlacklistListParams {
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * How many a page holds.
   *
   * Left out, it is 20.
   */
  perPage?: number;
  /** Only rules that are in force, or only ones switched off. */
  status?: "enabled" | "disabled";
  /** Only rules of this type. */
  type?: "email" | "domain" | "ip" | "cidr" | "asn" | "isp" | "city";
  /** Part of a rule's value or note. */
  search?: string;
}

/** A row of what list blacklist rules lists: `blacklist.list`. */
export type BlacklistListItem = {
  id: string;
  type: string;
  value: string;
  label: string;
  note: string;
  enabled: boolean;
  source: string;
  customerId: unknown;
  orderId: unknown;
  hits: number;
  lastHitAt: unknown;
  dateCreated: string;
  updatedAt: string;
};

/** What create a blacklist rule takes: `blacklist.create`. */
export interface BlacklistCreateParams {
  /** What the rule matches: an email address, an email domain, an IP address, a range of them (`cidr`), a network by its number (`asn`) or its provider's name (`isp`), or a city. Countries are blocked in the settings instead. */
  type: "email" | "domain" | "ip" | "cidr" | "asn" | "isp" | "city";
  /** What to match. */
  value: string;
  /** Why, up to 500 characters. */
  note?: string;
  /**
   * Whether the rule is in force.
   *
   * Left out, it is true.
   */
  enabled?: boolean;
}

/** What create a blacklist rule answers: `blacklist.create`. */
export type BlacklistCreateResult = {
  id: string;
  type: string;
  value: string;
  label: string;
  note: string;
  enabled: boolean;
  source: string;
  customerId: unknown;
  orderId: unknown;
  hits: number;
  lastHitAt: unknown;
  dateCreated: string;
  updatedAt: string;
};

/** What export blacklist rules takes: `blacklist.export`. */
export interface BlacklistExportParams {
  /** Only rules that are in force, or only ones switched off. */
  status?: "enabled" | "disabled";
  /** Only rules of this type. */
  type?: "email" | "domain" | "ip" | "cidr" | "asn" | "isp" | "city";
  /** Part of a rule's value or note. */
  search?: string;
  /** `1` for how many rows the file would have, as `{ rows }`, in place of the file. Not counted against the store's exports, and refused with 429 where none are left. */
  check?: "1";
}

/** What update a blacklist rule takes: `blacklist.update`. */
export interface BlacklistUpdateParams {
  /** What the rule matches: an email address, an email domain, an IP address, a range of them (`cidr`), a network by its number (`asn`) or its provider's name (`isp`), or a city. Countries are blocked in the settings instead. */
  type: "email" | "domain" | "ip" | "cidr" | "asn" | "isp" | "city";
  /** What to match. */
  value: string;
  /** Why, up to 500 characters. */
  note?: string;
  /**
   * Whether the rule is in force.
   *
   * Left out, it is true.
   */
  enabled?: boolean;
}

/** What update a blacklist rule answers: `blacklist.update`. */
export type BlacklistUpdateResult = {
  id: string;
  type: string;
  value: string;
  label: string;
  note: string;
  enabled: boolean;
  source: string;
  customerId: unknown;
  orderId: unknown;
  hits: number;
  lastHitAt: unknown;
  dateCreated: string;
  updatedAt: string;
};

/** What delete a blacklist rule answers: `blacklist.delete`. */
export type BlacklistDeleteResult = {
  id: string;
};

/** What switch a blacklist rule on or off takes: `blacklist.setEnabled`. */
export interface BlacklistSetEnabledParams {
  /** Whether the rule is in force. */
  enabled: boolean;
}

/** What switch a blacklist rule on or off answers: `blacklist.setEnabled`. */
export type BlacklistSetEnabledResult = {
  id: string;
  type: string;
  value: string;
  label: string;
  note: string;
  enabled: boolean;
  source: string;
  customerId: unknown;
  orderId: unknown;
  hits: number;
  lastHitAt: unknown;
  dateCreated: string;
  updatedAt: string;
};

/** What list fraud events takes: `fraudEvents.list`. */
export interface FraudEventsListParams {
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * How many a page holds.
   *
   * Left out, it is 20.
   */
  perPage?: number;
  /** Only events of this reason. `changes` is every change to the rules and settings. */
  reason?: "blacklist" | "vpn" | "country" | "unpaid_limit" | "dispute" | "refund" | "changes";
  /** Part of an email address, an IP address or a rule's value. */
  search?: string;
  /** Only events in this period. */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** Only events on or after this day, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Only events on or before this day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** A row of what list fraud events lists: `fraudEvents.list`. */
export type FraudEventsListItem = {
  id: string;
  reason: string;
  orderId: unknown;
  email: string;
  ip: string;
  country: string;
  ruleId: unknown;
  ruleType: string;
  ruleValue: string;
  detail: string;
  attempts: number;
  by: {
    name: string;
    email: string;
  };
  dateCreated: string;
  lastAt: string;
  network: unknown;
};

/** What export fraud events takes: `fraudEvents.export`. */
export interface FraudEventsExportParams {
  /** Only events of this reason. `changes` is every change to the rules and settings. */
  reason?: "blacklist" | "vpn" | "country" | "unpaid_limit" | "dispute" | "refund" | "changes";
  /** Part of an email address, an IP address or a rule's value. */
  search?: string;
  /** `1` for how many rows the file would have, as `{ rows }`, in place of the file. Not counted against the store's exports, and refused with 429 where none are left. */
  check?: "1";
  /** Only events in this period. */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** Only events on or after this day, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Only events on or before this day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** What get a fraud event's network answers: `fraudEvents.network`. */
export type FraudEventsNetworkResult = unknown;

/** What get fraud settings answers: `fraudSettings.show`. */
export type FraudSettingsShowResult = {
  blockVpn: boolean;
  blockOnDispute: boolean;
  blockedCountries: unknown[] | Record<string, unknown>;
};

/** What update fraud settings takes: `fraudSettings.update`. */
export interface FraudSettingsUpdateParams {
  /** Whether checkouts from a VPN, a proxy or a data centre are refused. */
  blockVpn: boolean;
  /**
   * Whether a buyer who disputes a payment is blacklisted.
   *
   * Left out, it is true.
   */
  blockOnDispute?: boolean;
  /** The countries checkouts are refused from, as two-letter codes. An empty list blocks none. */
  blockedCountries?: string[];
}

/** What update fraud settings answers: `fraudSettings.update`. */
export type FraudSettingsUpdateResult = {
  blockVpn: boolean;
  blockOnDispute: boolean;
  blockedCountries: string[];
};

/** What list disputes takes: `disputes.list`. */
export interface DisputesListParams {
  /** Part of the buyer's email, the order's ID or the provider's ID for the dispute. */
  q?: string;
  /**
   * Only these: `open` is the two that have not ended.
   *
   * Left out, it is "all".
   */
  show?: "all" | "open" | "needs_response" | "under_review" | "won" | "lost" | "accepted" | "closed";
  /** Only disputes with this payment method, by its ID. */
  provider?: string;
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * How many a page holds.
   *
   * Left out, it is 20.
   */
  perPage?: number;
}

/** A row of what list disputes lists: `disputes.list`. */
export type DisputesListItem = {
  id: string;
  orderId: string;
  email: string;
  provider: string;
  providerName: string;
  externalId: string;
  reason: string;
  reasonText: string;
  stage: string;
  providerStatus: string;
  status: string;
  amount: number;
  currency: string;
  dueAt: string;
  answer: {
    state: string;
    at: unknown;
    by: string;
    note: string;
  };
  answeredFrom: string;
  answerPlace: string;
  accessTaken: boolean;
  dateCreated: string;
  dateClosed: unknown;
};

/** What export disputes takes: `disputes.export`. */
export interface DisputesExportParams {
  /** Part of the buyer's email, the order's ID or the provider's ID for the dispute. */
  q?: string;
  /**
   * Only these: `open` is the two that have not ended.
   *
   * Left out, it is "all".
   */
  show?: "all" | "open" | "needs_response" | "under_review" | "won" | "lost" | "accepted" | "closed";
  /** Only disputes with this payment method, by its ID. */
  provider?: string;
}

/** What list an order's disputes answers: `disputes.forOrder`. */
export type DisputesForOrderResult = {
  id: string;
  orderId: string;
  email: string;
  provider: string;
  providerName: string;
  externalId: string;
  reason: string;
  reasonText: string;
  stage: string;
  providerStatus: string;
  status: string;
  amount: number;
  currency: string;
  dueAt: string;
  answer: {
    state: string;
    at: unknown;
    by: string;
    note: string;
  };
  answeredFrom: string;
  answerPlace: string;
  accessTaken: boolean;
  dateCreated: string;
  dateClosed: unknown;
}[];

/** What get a dispute answers: `disputes.get`. */
export type DisputesGetResult = {
  id: string;
  orderId: string;
  email: string;
  provider: string;
  providerName: string;
  externalId: string;
  reason: string;
  reasonText: string;
  stage: string;
  providerStatus: string;
  status: string;
  amount: number;
  currency: string;
  dueAt: string;
  answer: {
    state: string;
    at: unknown;
    by: string;
    note: string;
  };
  answeredFrom: string;
  answerPlace: string;
  accessTaken: boolean;
  dateCreated: string;
  dateClosed: unknown;
  order: {
    id: string;
    status: string;
    amount: number;
    currency: string;
    dateCreated: string;
  };
  can: {
    edit: boolean;
    submit: boolean;
    accept: boolean;
    markSubmitted: boolean;
  };
  records: {
    key: string;
    title: string;
    facts: {
      key: string;
      name: string;
      value: string;
      strong: boolean;
    }[];
  }[];
  activity: string[];
  draft: {
    decision: string;
    contacted: string;
    used: string;
    words: string;
    saved: boolean;
    statement: string;
  };
  files: unknown[] | Record<string, unknown>;
  after: {
    key: string;
    done: boolean;
    text: string;
  }[];
  history: {
    at: string;
    what: string;
    detail: string;
  }[];
};

/** What save a dispute's answer takes: `disputes.saveDraft`. */
export interface DisputesSaveDraftParams {
  /** Whether to fight it or accept it. */
  decision?: "fight" | "accept";
  /** Whether the buyer contacted the store before disputing. Empty when not said. */
  contacted?: "" | "yes" | "no";
  /** Whether they used what they bought, or `unknown`. Empty when not said. */
  used?: "" | "yes" | "unknown";
  /** The store's statement in its own words, up to 10,000 characters. Sent apart from what Shoply recorded. */
  words?: string;
}

/** What save a dispute's answer answers: `disputes.saveDraft`. */
export type DisputesSaveDraftResult = {
  id: string;
  orderId: string;
  email: string;
  provider: string;
  providerName: string;
  externalId: string;
  reason: string;
  reasonText: string;
  stage: string;
  providerStatus: string;
  status: string;
  amount: number;
  currency: string;
  dueAt: string;
  answer: {
    state: string;
    at: unknown;
    by: string;
    note: string;
  };
  answeredFrom: string;
  answerPlace: string;
  accessTaken: boolean;
  dateCreated: string;
  dateClosed: unknown;
  order: {
    id: string;
    status: string;
    amount: number;
    currency: string;
    dateCreated: string;
  };
  can: {
    edit: boolean;
    submit: boolean;
    accept: boolean;
    markSubmitted: boolean;
  };
  records: {
    key: string;
    title: string;
    facts: {
      key: string;
      name: string;
      value: string;
      strong: boolean;
    }[];
  }[];
  activity: string[];
  draft: {
    decision: string;
    contacted: string;
    used: string;
    words: string;
    saved: boolean;
    statement: string;
  };
  files: unknown[] | Record<string, unknown>;
  after: {
    key: string;
    done: boolean;
    text: string;
  }[];
  history: {
    at: string;
    what: string;
    detail: string;
  }[];
};

/** What submit a dispute's answer takes: `disputes.submit`. */
export interface DisputesSubmitParams {
  /** Whether to fight it or accept it. */
  decision?: "fight" | "accept";
  /** Whether the buyer contacted the store before disputing. Empty when not said. */
  contacted?: "" | "yes" | "no";
  /** Whether they used what they bought, or `unknown`. Empty when not said. */
  used?: "" | "yes" | "unknown";
  /** The store's statement in its own words, up to 10,000 characters. Sent apart from what Shoply recorded. */
  words?: string;
}

/** What submit a dispute's answer answers: `disputes.submit`. */
export type DisputesSubmitResult = unknown;

/** What accept a dispute answers: `disputes.accept`. */
export type DisputesAcceptResult = unknown;

/** What mark a dispute as answered answers: `disputes.markSubmitted`. */
export type DisputesMarkSubmittedResult = {
  id: string;
  orderId: string;
  email: string;
  provider: string;
  providerName: string;
  externalId: string;
  reason: string;
  reasonText: string;
  stage: string;
  providerStatus: string;
  status: string;
  amount: number;
  currency: string;
  dueAt: string;
  answer: {
    state: string;
    at: string;
    by: string;
    note: string;
  };
  answeredFrom: string;
  answerPlace: string;
  accessTaken: boolean;
  dateCreated: string;
  dateClosed: unknown;
  order: {
    id: string;
    status: string;
    amount: number;
    currency: string;
    dateCreated: string;
  };
  can: {
    edit: boolean;
    submit: boolean;
    accept: boolean;
    markSubmitted: boolean;
  };
  records: {
    key: string;
    title: string;
    facts: {
      key: string;
      name: string;
      value: string;
      strong: boolean;
    }[];
  }[];
  activity: unknown[] | Record<string, unknown>;
  draft: {
    decision: string;
    contacted: string;
    used: string;
    words: string;
    saved: boolean;
    statement: string;
  };
  files: unknown[] | Record<string, unknown>;
  after: {
    key: string;
    done: boolean;
    text: string;
  }[];
  history: {
    at: string;
    what: string;
    detail: string;
  }[];
};

/** What add a file to a dispute's answer takes: `disputes.addFile`, the file and its fields. */
export interface DisputesAddFileParams extends FileUpload {
  /**
   * What the file is: a chat with the buyer, a receipt, or something else.
   *
   * Left out, it is "other".
   */
  kind?: "communication" | "receipt" | "other";
}

/** What add a file to a dispute's answer answers: `disputes.addFile`. */
export type DisputesAddFileResult = unknown;

/** What remove a file from a dispute's answer answers: `disputes.deleteFile`. */
export type DisputesDeleteFileResult = unknown;

/** What hide or show what an order delivered takes: `disputes.access`. */
export interface DisputesAccessParams {
  /** True to hide them, false to show them again. */
  hidden: boolean;
}

/** What hide or show what an order delivered answers: `disputes.access`. */
export type DisputesAccessResult = {
  id: string;
  orderId: string;
  email: string;
  provider: string;
  providerName: string;
  externalId: string;
  reason: string;
  reasonText: string;
  stage: string;
  providerStatus: string;
  status: string;
  amount: number;
  currency: string;
  dueAt: string;
  answer: {
    state: string;
    at: unknown;
    by: string;
    note: string;
  };
  answeredFrom: string;
  answerPlace: string;
  accessTaken: boolean;
  dateCreated: string;
  dateClosed: unknown;
  order: {
    id: string;
    status: string;
    amount: number;
    currency: string;
    dateCreated: string;
  };
  can: {
    edit: boolean;
    submit: boolean;
    accept: boolean;
    markSubmitted: boolean;
  };
  records: {
    key: string;
    title: string;
    facts: {
      key: string;
      name: string;
      value: string;
      strong: boolean;
    }[];
  }[];
  activity: string[];
  draft: {
    decision: string;
    contacted: string;
    used: string;
    words: string;
    saved: boolean;
    statement: string;
  };
  files: unknown[] | Record<string, unknown>;
  after: {
    key: string;
    done: boolean;
    text: string;
  }[];
  history: {
    at: string;
    what: string;
    detail: string;
  }[];
};

/** What blacklist a dispute's buyer answers: `disputes.blacklist`. */
export type DisputesBlacklistResult = {
  id: string;
  orderId: string;
  email: string;
  provider: string;
  providerName: string;
  externalId: string;
  reason: string;
  reasonText: string;
  stage: string;
  providerStatus: string;
  status: string;
  amount: number;
  currency: string;
  dueAt: string;
  answer: {
    state: string;
    at: unknown;
    by: string;
    note: string;
  };
  answeredFrom: string;
  answerPlace: string;
  accessTaken: boolean;
  dateCreated: string;
  dateClosed: unknown;
  order: {
    id: string;
    status: string;
    amount: number;
    currency: string;
    dateCreated: string;
  };
  can: {
    edit: boolean;
    submit: boolean;
    accept: boolean;
    markSubmitted: boolean;
  };
  records: {
    key: string;
    title: string;
    facts: {
      key: string;
      name: string;
      value: string;
      strong: boolean;
    }[];
  }[];
  activity: string[];
  draft: {
    decision: string;
    contacted: string;
    used: string;
    words: string;
    saved: boolean;
    statement: string;
  };
  files: unknown[] | Record<string, unknown>;
  after: {
    key: string;
    done: boolean;
    text: string;
  }[];
  history: {
    at: string;
    what: string;
    detail: string;
  }[];
};

/** What get dispute settings answers: `disputes.settings`. */
export type DisputesSettingsResult = {
  blacklist: boolean;
  takeBackAccess: boolean;
  acceptSmall: boolean;
  acceptUnder: number;
  autoSubmit: boolean;
  askAboveOn: boolean;
  askAbove: number;
  emailOpened: boolean;
  emailClosed: boolean;
  discord: boolean;
  currency: string;
};

/** What change dispute settings takes: `disputes.updateSettings`. */
export interface DisputesUpdateSettingsParams {
  /** Blacklist the buyer's email and addresses when a dispute opens. */
  blacklist?: boolean;
  /** Hide what the order delivered from its buyer while a dispute is open, shown again if it is won. */
  takeBackAccess?: boolean;
  /** Accept a dispute answered from Shoply under `acceptUnder` rather than fight it. */
  acceptSmall?: boolean;
  /** The amount, above 0. */
  acceptUnder?: number;
  /** Submit the answer of a dispute answered from Shoply with a day left. */
  autoSubmit?: boolean;
  /** Never send or accept one over `askAbove` by itself. */
  askAboveOn?: boolean;
  /** The amount, above 0, up to 1,000,000. */
  askAbove?: number;
  /** Email the store when one opens, with its deadline. */
  emailOpened?: boolean;
  /** Email the store how one ended. */
  emailClosed?: boolean;
  /** Post both to the store's Discord. Needs a webhook in its notification settings. */
  discord?: boolean;
}

/** What change dispute settings answers: `disputes.updateSettings`. */
export type DisputesUpdateSettingsResult = {
  blacklist: boolean;
  takeBackAccess: boolean;
  acceptSmall: boolean;
  acceptUnder: number;
  autoSubmit: boolean;
  askAboveOn: boolean;
  askAbove: number;
  emailOpened: boolean;
  emailClosed: boolean;
  discord: boolean;
  currency: string;
};

/** What get finance access answers: `finance.access`. */
export type FinanceAccessResult = {
  open: boolean;
  missing: unknown[] | Record<string, unknown>;
};

/** What get profit takes: `finance.profit`. */
export interface FinanceProfitParams {
  /**
   * The period.
   *
   * Left out, it is "this_month".
   */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** The first day of a period of your own, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Its last day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** What get profit answers: `finance.profit`. */
export type FinanceProfitResult = {
  period: {
    from: string;
    to: string;
    label: string;
    previousFrom: string;
    previousTo: string;
    previousLabel: string;
  };
  currency: string;
  now: {
    netSales: number;
    orders: number;
    costOfGoods: number;
    fees: number;
    commission: number;
    expenses: number;
    profit: number;
    margin: number;
    units: number;
    uncosted: number;
  };
  previous: {
    netSales: number;
    orders: number;
    costOfGoods: number;
    fees: number;
    commission: number;
    expenses: number;
    profit: number;
    margin: unknown;
    units: number;
    uncosted: number;
  };
  perOrder: number;
  average: number;
  breakEven: {
    orders: number;
    reachedOn: unknown;
    each: number;
  };
  fees: {
    rated: boolean;
    unrated: string[];
  };
  months: {
    month: string;
    sales: number;
    profit: number;
  }[];
  products: {
    id: string;
    name: string;
    image: unknown;
    expenses: number;
    variants: {
      id: string;
      label: string;
      price: number;
      costAmount: number;
      costPercent: unknown;
      sold: number;
      sales: number;
      cost: number;
      uncosted: number;
      profit: unknown;
    }[];
    sold: number;
    sales: number;
    cost: number;
    uncosted: number;
    profit: unknown;
    costSet: string;
  }[];
};

/** What get the books takes: `finance.accounting`. */
export interface FinanceAccountingParams {
  /**
   * The period.
   *
   * Left out, it is "this_month".
   */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** The first day of a period of your own, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Its last day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** What get the books answers: `finance.accounting`. */
export type FinanceAccountingResult = {
  period: {
    from: string;
    to: string;
    label: string;
    previousFrom: string;
    previousTo: string;
    previousLabel: string;
  };
  currency: string;
  business: string[];
  lines: {
    kind: string;
    label: string;
  }[];
  tax: {
    now: number;
    previous: number;
  };
  now: {
    netSales: number;
    grossProfit: number;
    expenses: number;
    profit: number;
    margin: number;
  };
  previous: {
    netSales: number;
    grossProfit: number;
    expenses: number;
    profit: number;
    margin: unknown;
  };
  checks: {
    text: string;
    href: string;
    action: string;
  }[];
  counts: {
    orders: number;
    expenses: number;
  };
  countries: {
    country: string;
    name: string;
    orders: number;
    amount: number;
    share: number;
  }[];
  methods: {
    provider: string;
    name: string;
    orders: number;
    volume: number;
    fees: number;
    rated: boolean;
    net: number;
  }[];
  taxReport: {
    rows: unknown[] | Record<string, unknown>;
    taxable: number;
    tax: number;
  };
};

/** What export the books takes: `finance.export`. */
export interface FinanceExportParams {
  /**
   * The period.
   *
   * Left out, it is "this_month".
   */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** The first day of a period of your own, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Its last day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
  /** For `statement`: `csv` for a spreadsheet in place of the PDF. */
  format?: "csv";
}

/** What set a variant's cost takes: `finance.setCost`. */
export interface FinanceSetCostParams {
  /** The cost of one, in the store's currency. */
  amount?: number;
  /** Or the cost as a percent of what each one sold for. */
  percent?: number;
  /**
   * Whether to give this cost to the lines already sold that have none. `past` in the answer says how many such lines there are.
   *
   * Left out, it is false.
   */
  applyToPast?: boolean;
}

/** What set a variant's cost answers: `finance.setCost`. */
export type FinanceSetCostResult = {
  variantId: string;
  costAmount: number;
  costPercent: unknown;
  stamped: number;
  past: number;
};

/** What get payment fee rates answers: `finance.paymentCosts`. */
export type FinancePaymentCostsResult = {
  currency: string;
  rates: {
    provider: string;
    name: string;
    percent: number;
    fixed: number;
  }[];
  limits: {
    percent: number;
    fixed: number;
  };
};

/** What set payment fee rates takes: `finance.setPaymentCosts`. */
export interface FinanceSetPaymentCostsParams {
  /** A rate a provider. */
  rates: {
    /** The payment provider, by its name in "Get payment fee rates". */
    provider: string;
    /** The share it keeps, in percent. */
    percent?: number;
    /** The fixed amount it keeps of each payment, in the store's currency. */
    fixed?: number;
  }[];
}

/** What set payment fee rates answers: `finance.setPaymentCosts`. */
export type FinanceSetPaymentCostsResult = {
  provider: string;
  name: string;
  percent: number;
  fixed: number;
}[];

/** What get tax settings answers: `tax.show`. */
export type TaxShowResult = {
  collect: boolean;
  included: boolean;
  business: boolean;
  home: string;
  homeName: string;
  rates: {
    country: string;
    countryName: string;
    region: string;
    regionName: string;
    rate: number;
    label: string;
    standard: number;
  }[];
  standard: {
    AT: {
      label: string;
      rate: number;
    };
    BE: {
      label: string;
      rate: number;
    };
    BG: {
      label: string;
      rate: number;
    };
    HR: {
      label: string;
      rate: number;
    };
    CY: {
      label: string;
      rate: number;
    };
    CZ: {
      label: string;
      rate: number;
    };
    DK: {
      label: string;
      rate: number;
    };
    EE: {
      label: string;
      rate: number;
    };
    FI: {
      label: string;
      rate: number;
    };
    FR: {
      label: string;
      rate: number;
    };
    DE: {
      label: string;
      rate: number;
    };
    GR: {
      label: string;
      rate: number;
    };
    HU: {
      label: string;
      rate: number;
    };
    IE: {
      label: string;
      rate: number;
    };
    IT: {
      label: string;
      rate: number;
    };
    LV: {
      label: string;
      rate: number;
    };
    LT: {
      label: string;
      rate: number;
    };
    LU: {
      label: string;
      rate: number;
    };
    MT: {
      label: string;
      rate: number;
    };
    NL: {
      label: string;
      rate: number;
    };
    PL: {
      label: string;
      rate: number;
    };
    PT: {
      label: string;
      rate: number;
    };
    RO: {
      label: string;
      rate: number;
    };
    SK: {
      label: string;
      rate: number;
    };
    SI: {
      label: string;
      rate: number;
    };
    ES: {
      label: string;
      rate: number;
    };
    SE: {
      label: string;
      rate: number;
    };
    GB: {
      label: string;
      rate: number;
    };
    NO: {
      label: string;
      rate: number;
    };
    CH: {
      label: string;
      rate: number;
    };
    LI: {
      label: string;
      rate: number;
    };
    IS: {
      label: string;
      rate: number;
    };
    RS: {
      label: string;
      rate: number;
    };
    UA: {
      label: string;
      rate: number;
    };
    TR: {
      label: string;
      rate: number;
    };
    AU: {
      label: string;
      rate: number;
    };
    NZ: {
      label: string;
      rate: number;
    };
    CA: {
      label: string;
      rate: number;
    };
    SG: {
      label: string;
      rate: number;
    };
    IN: {
      label: string;
      rate: number;
    };
    JP: {
      label: string;
      rate: number;
    };
    KR: {
      label: string;
      rate: number;
    };
    TW: {
      label: string;
      rate: number;
    };
    TH: {
      label: string;
      rate: number;
    };
    MY: {
      label: string;
      rate: number;
    };
    ID: {
      label: string;
      rate: number;
    };
    PH: {
      label: string;
      rate: number;
    };
    VN: {
      label: string;
      rate: number;
    };
    AE: {
      label: string;
      rate: number;
    };
    SA: {
      label: string;
      rate: number;
    };
    BH: {
      label: string;
      rate: number;
    };
    OM: {
      label: string;
      rate: number;
    };
    IL: {
      label: string;
      rate: number;
    };
    EG: {
      label: string;
      rate: number;
    };
    MA: {
      label: string;
      rate: number;
    };
    ZA: {
      label: string;
      rate: number;
    };
    NG: {
      label: string;
      rate: number;
    };
    KE: {
      label: string;
      rate: number;
    };
    MX: {
      label: string;
      rate: number;
    };
    CL: {
      label: string;
      rate: number;
    };
    CO: {
      label: string;
      rate: number;
    };
    AR: {
      label: string;
      rate: number;
    };
    PE: {
      label: string;
      rate: number;
    };
  };
  eu: string[];
  regions: {
    US: {
      code: string;
      name: string;
    }[];
  };
  limit: number;
  maxRate: number;
};

/** What update tax settings takes: `tax.update`. */
export interface TaxUpdateParams {
  /** Whether tax is charged at checkout. */
  collect?: boolean;
  /** Whether the store's prices already include the tax. Off, it is added on top. */
  included?: boolean;
  /** Whether a business buyer's VAT number takes the tax off, when the EU's register confirms it and it is from another country than the store's. */
  business?: boolean;
}

/** What update tax settings answers: `tax.update`. */
export type TaxUpdateResult = {
  collect: boolean;
  included: boolean;
  business: boolean;
  home: string;
  homeName: string;
  rates: unknown[] | Record<string, unknown>;
  standard: {
    AT: {
      label: string;
      rate: number;
    };
    BE: {
      label: string;
      rate: number;
    };
    BG: {
      label: string;
      rate: number;
    };
    HR: {
      label: string;
      rate: number;
    };
    CY: {
      label: string;
      rate: number;
    };
    CZ: {
      label: string;
      rate: number;
    };
    DK: {
      label: string;
      rate: number;
    };
    EE: {
      label: string;
      rate: number;
    };
    FI: {
      label: string;
      rate: number;
    };
    FR: {
      label: string;
      rate: number;
    };
    DE: {
      label: string;
      rate: number;
    };
    GR: {
      label: string;
      rate: number;
    };
    HU: {
      label: string;
      rate: number;
    };
    IE: {
      label: string;
      rate: number;
    };
    IT: {
      label: string;
      rate: number;
    };
    LV: {
      label: string;
      rate: number;
    };
    LT: {
      label: string;
      rate: number;
    };
    LU: {
      label: string;
      rate: number;
    };
    MT: {
      label: string;
      rate: number;
    };
    NL: {
      label: string;
      rate: number;
    };
    PL: {
      label: string;
      rate: number;
    };
    PT: {
      label: string;
      rate: number;
    };
    RO: {
      label: string;
      rate: number;
    };
    SK: {
      label: string;
      rate: number;
    };
    SI: {
      label: string;
      rate: number;
    };
    ES: {
      label: string;
      rate: number;
    };
    SE: {
      label: string;
      rate: number;
    };
    GB: {
      label: string;
      rate: number;
    };
    NO: {
      label: string;
      rate: number;
    };
    CH: {
      label: string;
      rate: number;
    };
    LI: {
      label: string;
      rate: number;
    };
    IS: {
      label: string;
      rate: number;
    };
    RS: {
      label: string;
      rate: number;
    };
    UA: {
      label: string;
      rate: number;
    };
    TR: {
      label: string;
      rate: number;
    };
    AU: {
      label: string;
      rate: number;
    };
    NZ: {
      label: string;
      rate: number;
    };
    CA: {
      label: string;
      rate: number;
    };
    SG: {
      label: string;
      rate: number;
    };
    IN: {
      label: string;
      rate: number;
    };
    JP: {
      label: string;
      rate: number;
    };
    KR: {
      label: string;
      rate: number;
    };
    TW: {
      label: string;
      rate: number;
    };
    TH: {
      label: string;
      rate: number;
    };
    MY: {
      label: string;
      rate: number;
    };
    ID: {
      label: string;
      rate: number;
    };
    PH: {
      label: string;
      rate: number;
    };
    VN: {
      label: string;
      rate: number;
    };
    AE: {
      label: string;
      rate: number;
    };
    SA: {
      label: string;
      rate: number;
    };
    BH: {
      label: string;
      rate: number;
    };
    OM: {
      label: string;
      rate: number;
    };
    IL: {
      label: string;
      rate: number;
    };
    EG: {
      label: string;
      rate: number;
    };
    MA: {
      label: string;
      rate: number;
    };
    ZA: {
      label: string;
      rate: number;
    };
    NG: {
      label: string;
      rate: number;
    };
    KE: {
      label: string;
      rate: number;
    };
    MX: {
      label: string;
      rate: number;
    };
    CL: {
      label: string;
      rate: number;
    };
    CO: {
      label: string;
      rate: number;
    };
    AR: {
      label: string;
      rate: number;
    };
    PE: {
      label: string;
      rate: number;
    };
  };
  eu: string[];
  regions: {
    US: {
      code: string;
      name: string;
    }[];
  };
  limit: number;
  maxRate: number;
};

/** What add or change tax rates takes: `tax.setRates`. */
export interface TaxSetRatesParams {
  /** The places. */
  places: {
    /** The country, as a two-letter code. */
    country: string;
    /** One state of it, where the country is taxed state by state. */
    region?: string;
    /** The rate, in percent. Left out for a whole country, its built-in rate. A state's rate is always sent. */
    rate?: number;
  }[];
}

/** What add or change tax rates answers: `tax.setRates`. */
export type TaxSetRatesResult = {
  collect: boolean;
  included: boolean;
  business: boolean;
  home: string;
  homeName: string;
  rates: {
    country: string;
    countryName: string;
    region: string;
    regionName: string;
    rate: number;
    label: string;
    standard: number;
  }[];
  standard: {
    AT: {
      label: string;
      rate: number;
    };
    BE: {
      label: string;
      rate: number;
    };
    BG: {
      label: string;
      rate: number;
    };
    HR: {
      label: string;
      rate: number;
    };
    CY: {
      label: string;
      rate: number;
    };
    CZ: {
      label: string;
      rate: number;
    };
    DK: {
      label: string;
      rate: number;
    };
    EE: {
      label: string;
      rate: number;
    };
    FI: {
      label: string;
      rate: number;
    };
    FR: {
      label: string;
      rate: number;
    };
    DE: {
      label: string;
      rate: number;
    };
    GR: {
      label: string;
      rate: number;
    };
    HU: {
      label: string;
      rate: number;
    };
    IE: {
      label: string;
      rate: number;
    };
    IT: {
      label: string;
      rate: number;
    };
    LV: {
      label: string;
      rate: number;
    };
    LT: {
      label: string;
      rate: number;
    };
    LU: {
      label: string;
      rate: number;
    };
    MT: {
      label: string;
      rate: number;
    };
    NL: {
      label: string;
      rate: number;
    };
    PL: {
      label: string;
      rate: number;
    };
    PT: {
      label: string;
      rate: number;
    };
    RO: {
      label: string;
      rate: number;
    };
    SK: {
      label: string;
      rate: number;
    };
    SI: {
      label: string;
      rate: number;
    };
    ES: {
      label: string;
      rate: number;
    };
    SE: {
      label: string;
      rate: number;
    };
    GB: {
      label: string;
      rate: number;
    };
    NO: {
      label: string;
      rate: number;
    };
    CH: {
      label: string;
      rate: number;
    };
    LI: {
      label: string;
      rate: number;
    };
    IS: {
      label: string;
      rate: number;
    };
    RS: {
      label: string;
      rate: number;
    };
    UA: {
      label: string;
      rate: number;
    };
    TR: {
      label: string;
      rate: number;
    };
    AU: {
      label: string;
      rate: number;
    };
    NZ: {
      label: string;
      rate: number;
    };
    CA: {
      label: string;
      rate: number;
    };
    SG: {
      label: string;
      rate: number;
    };
    IN: {
      label: string;
      rate: number;
    };
    JP: {
      label: string;
      rate: number;
    };
    KR: {
      label: string;
      rate: number;
    };
    TW: {
      label: string;
      rate: number;
    };
    TH: {
      label: string;
      rate: number;
    };
    MY: {
      label: string;
      rate: number;
    };
    ID: {
      label: string;
      rate: number;
    };
    PH: {
      label: string;
      rate: number;
    };
    VN: {
      label: string;
      rate: number;
    };
    AE: {
      label: string;
      rate: number;
    };
    SA: {
      label: string;
      rate: number;
    };
    BH: {
      label: string;
      rate: number;
    };
    OM: {
      label: string;
      rate: number;
    };
    IL: {
      label: string;
      rate: number;
    };
    EG: {
      label: string;
      rate: number;
    };
    MA: {
      label: string;
      rate: number;
    };
    ZA: {
      label: string;
      rate: number;
    };
    NG: {
      label: string;
      rate: number;
    };
    KE: {
      label: string;
      rate: number;
    };
    MX: {
      label: string;
      rate: number;
    };
    CL: {
      label: string;
      rate: number;
    };
    CO: {
      label: string;
      rate: number;
    };
    AR: {
      label: string;
      rate: number;
    };
    PE: {
      label: string;
      rate: number;
    };
  };
  eu: string[];
  regions: {
    US: {
      code: string;
      name: string;
    }[];
  };
  limit: number;
  maxRate: number;
};

/** What remove a tax rate takes: `tax.deleteRate`. */
export interface TaxDeleteRateParams {
  /** The country, as a two-letter code. */
  country: string;
  /** One state of it. Left out, the whole country. */
  region?: string;
}

/** What remove a tax rate answers: `tax.deleteRate`. */
export type TaxDeleteRateResult = {
  collect: boolean;
  included: boolean;
  business: boolean;
  home: string;
  homeName: string;
  rates: {
    country: string;
    countryName: string;
    region: string;
    regionName: string;
    rate: number;
    label: string;
    standard: number;
  }[];
  standard: {
    AT: {
      label: string;
      rate: number;
    };
    BE: {
      label: string;
      rate: number;
    };
    BG: {
      label: string;
      rate: number;
    };
    HR: {
      label: string;
      rate: number;
    };
    CY: {
      label: string;
      rate: number;
    };
    CZ: {
      label: string;
      rate: number;
    };
    DK: {
      label: string;
      rate: number;
    };
    EE: {
      label: string;
      rate: number;
    };
    FI: {
      label: string;
      rate: number;
    };
    FR: {
      label: string;
      rate: number;
    };
    DE: {
      label: string;
      rate: number;
    };
    GR: {
      label: string;
      rate: number;
    };
    HU: {
      label: string;
      rate: number;
    };
    IE: {
      label: string;
      rate: number;
    };
    IT: {
      label: string;
      rate: number;
    };
    LV: {
      label: string;
      rate: number;
    };
    LT: {
      label: string;
      rate: number;
    };
    LU: {
      label: string;
      rate: number;
    };
    MT: {
      label: string;
      rate: number;
    };
    NL: {
      label: string;
      rate: number;
    };
    PL: {
      label: string;
      rate: number;
    };
    PT: {
      label: string;
      rate: number;
    };
    RO: {
      label: string;
      rate: number;
    };
    SK: {
      label: string;
      rate: number;
    };
    SI: {
      label: string;
      rate: number;
    };
    ES: {
      label: string;
      rate: number;
    };
    SE: {
      label: string;
      rate: number;
    };
    GB: {
      label: string;
      rate: number;
    };
    NO: {
      label: string;
      rate: number;
    };
    CH: {
      label: string;
      rate: number;
    };
    LI: {
      label: string;
      rate: number;
    };
    IS: {
      label: string;
      rate: number;
    };
    RS: {
      label: string;
      rate: number;
    };
    UA: {
      label: string;
      rate: number;
    };
    TR: {
      label: string;
      rate: number;
    };
    AU: {
      label: string;
      rate: number;
    };
    NZ: {
      label: string;
      rate: number;
    };
    CA: {
      label: string;
      rate: number;
    };
    SG: {
      label: string;
      rate: number;
    };
    IN: {
      label: string;
      rate: number;
    };
    JP: {
      label: string;
      rate: number;
    };
    KR: {
      label: string;
      rate: number;
    };
    TW: {
      label: string;
      rate: number;
    };
    TH: {
      label: string;
      rate: number;
    };
    MY: {
      label: string;
      rate: number;
    };
    ID: {
      label: string;
      rate: number;
    };
    PH: {
      label: string;
      rate: number;
    };
    VN: {
      label: string;
      rate: number;
    };
    AE: {
      label: string;
      rate: number;
    };
    SA: {
      label: string;
      rate: number;
    };
    BH: {
      label: string;
      rate: number;
    };
    OM: {
      label: string;
      rate: number;
    };
    IL: {
      label: string;
      rate: number;
    };
    EG: {
      label: string;
      rate: number;
    };
    MA: {
      label: string;
      rate: number;
    };
    ZA: {
      label: string;
      rate: number;
    };
    NG: {
      label: string;
      rate: number;
    };
    KE: {
      label: string;
      rate: number;
    };
    MX: {
      label: string;
      rate: number;
    };
    CL: {
      label: string;
      rate: number;
    };
    CO: {
      label: string;
      rate: number;
    };
    AR: {
      label: string;
      rate: number;
    };
    PE: {
      label: string;
      rate: number;
    };
  };
  eu: string[];
  regions: {
    US: {
      code: string;
      name: string;
    }[];
  };
  limit: number;
  maxRate: number;
};

/** What list expenses takes: `expenses.list`. */
export interface ExpensesListParams {
  /**
   * The period.
   *
   * Left out, it is "this_month".
   */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** The first day of a period of your own, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Its last day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
  /** Part of a payee, a note or a reference. */
  search?: string;
  /** Only expenses in this expense category, by its ID. */
  category?: string;
  /** Only expenses paid this way. */
  method?: "card" | "bank" | "crypto" | "paypal" | "cash" | "other";
}

/** What list expenses answers: `expenses.list`. */
export type ExpensesListResult = {
  id: string;
  spentOn: string;
  payee: string;
  note: string;
  category: {
    id: string;
    name: string;
    icon: string;
  };
  method: string;
  reference: string;
  amount: number;
  entered: unknown;
  productId: unknown;
  recurring: boolean;
  source: string;
  receipt: unknown;
  createdAt: string;
  updatedAt: string;
}[];

/** What create an expense takes: `expenses.create`. */
export interface ExpensesCreateParams {
  /** The day it was paid, as `YYYY-MM-DD`. Not in the future: a bill still to come is a recurring expense. */
  spentOn: string;
  /** Who was paid, up to 120 characters. */
  payee: string;
  /** How much, above zero, with at most 2 decimals. */
  amount: number;
  /** The currency `amount` is in, when it is not the store's own. It is converted at today's rate and kept in the store's currency. */
  currency?: string;
  /** How it was paid. */
  method?: "card" | "bank" | "crypto" | "paypal" | "cash" | "other";
  /** The expense category it is filed in, by ID. */
  categoryId?: string;
  /** The same, by the category's name, for a script that has no reason to know an ID. With neither, the store's rules file it. */
  category?: string;
  /** A note, up to 255 characters. */
  note?: string;
  /** An invoice number or the like, up to 160 characters. */
  reference?: string;
  /** A product this expense is a cost of. */
  productId?: string;
}

/** What create an expense answers: `expenses.create`. */
export type ExpensesCreateResult = {
  id: string;
  spentOn: string;
  payee: string;
  note: string;
  category: {
    id: string;
    name: string;
    icon: string;
  };
  method: string;
  reference: string;
  amount: number;
  entered: unknown;
  productId: unknown;
  recurring: boolean;
  source: string;
  receipt: unknown;
  createdAt: string;
  updatedAt: string;
};

/** What get an expense summary takes: `expenses.summary`. */
export interface ExpensesSummaryParams {
  /**
   * The period.
   *
   * Left out, it is "this_month".
   */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** The first day of a period of your own, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Its last day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
}

/** What get an expense summary answers: `expenses.summary`. */
export type ExpensesSummaryResult = {
  period: {
    from: string;
    to: string;
    label: string;
    previousFrom: string;
    previousTo: string;
    previousLabel: string;
  };
  spent: number;
  previous: number;
  recurring: {
    count: number;
    monthly: number;
  };
  largest: {
    name: string;
    icon: string;
    total: number;
    share: number;
  };
  receipts: {
    attached: number;
    total: number;
  };
  months: {
    month: string;
    total: number;
  }[];
  comingUp: unknown[] | Record<string, unknown>;
  counts: {
    recurring: number;
    rules: number;
  };
};

/** What get what an expense can be answers: `expenses.setup`. */
export type ExpensesSetupResult = {
  currency: string;
  currencies: unknown[] | Record<string, unknown>;
  categories: {
    id: string;
    name: string;
    icon: string;
    updatedAt: string;
  }[];
  icons: string[];
  payees: {
    payee: string;
    categoryId: string;
    method: string;
  }[];
  methods: {
    key: string;
    name: string;
  }[];
  receipts: {
    enabled: boolean;
    maxSize: number;
    types: string[];
  };
  limits: {
    categories: number;
    recurring: number;
    rules: number;
    importRows: number;
    payee: number;
    note: number;
    reference: number;
    amount: number;
    category: number;
    phrase: number;
  };
};

/** What export expenses takes: `expenses.export`. */
export interface ExpensesExportParams {
  /**
   * The period.
   *
   * Left out, it is "this_month".
   */
  range?: "today" | "yesterday" | "7d" | "30d" | "this_week" | "last_week" | "this_month" | "last_month" | "this_year";
  /** The first day of a period of your own, as `YYYY-MM-DD`. With `to`, in place of `range`. */
  from?: string;
  /** Its last day, as `YYYY-MM-DD`. */
  to?: string;
  /** The time zone those days are in, as an IANA name. Left out, UTC. */
  tz?: string;
  /** Part of a payee, a note or a reference. */
  search?: string;
  /** Only expenses in this expense category, by its ID. */
  category?: string;
  /** Only expenses paid this way. */
  method?: "card" | "bank" | "crypto" | "paypal" | "cash" | "other";
  /**
   * A spreadsheet or a document.
   *
   * Left out, it is "csv".
   */
  format?: "csv" | "pdf";
}

/** What update an expense takes: `expenses.update`. */
export interface ExpensesUpdateParams {
  /** The day it was paid, as `YYYY-MM-DD`. Not in the future: a bill still to come is a recurring expense. */
  spentOn: string;
  /** Who was paid, up to 120 characters. */
  payee: string;
  /** How much, above zero, with at most 2 decimals. */
  amount: number;
  /** The currency `amount` is in, when it is not the store's own. It is converted at today's rate and kept in the store's currency. */
  currency?: string;
  /** How it was paid. */
  method?: "card" | "bank" | "crypto" | "paypal" | "cash" | "other";
  /** The expense category it is filed in, by ID. */
  categoryId?: string;
  /** The same, by the category's name, for a script that has no reason to know an ID. With neither, the store's rules file it. */
  category?: string;
  /** A note, up to 255 characters. */
  note?: string;
  /** An invoice number or the like, up to 160 characters. */
  reference?: string;
  /** A product this expense is a cost of. */
  productId?: string;
}

/** What update an expense answers: `expenses.update`. */
export type ExpensesUpdateResult = {
  id: string;
  spentOn: string;
  payee: string;
  note: string;
  category: {
    id: string;
    name: string;
    icon: string;
  };
  method: string;
  reference: string;
  amount: number;
  entered: unknown;
  productId: unknown;
  recurring: boolean;
  source: string;
  receipt: unknown;
  createdAt: string;
  updatedAt: string;
};

/** What delete an expense answers: `expenses.delete`. */
export type ExpensesDeleteResult = {
  id: string;
  deleted: boolean;
};

/** What get an expense's receipt answers: `expenses.receipt`. */
export type ExpensesReceiptResult = unknown;

/** What start a receipt upload takes: `expenses.addReceipt`. */
export interface ExpensesAddReceiptParams {
  /** The file's name, with its ending. */
  name: string;
  /** Its size in bytes. */
  size: number;
}

/** What start a receipt upload answers: `expenses.addReceipt`. */
export type ExpensesAddReceiptResult = unknown;

/** What delete an expense's receipt answers: `expenses.deleteReceipt`. */
export type ExpensesDeleteReceiptResult = unknown;

/** What finish a receipt upload answers: `expenses.finishReceipt`. */
export type ExpensesFinishReceiptResult = unknown;

/** What list expense categories answers: `expenseCategories.list`. */
export type ExpenseCategoriesListResult = {
  id: string;
  name: string;
  icon: string;
  updatedAt: string;
}[];

/** What create an expense category takes: `expenseCategories.create`. */
export interface ExpenseCategoriesCreateParams {
  /** Its name, up to 60 characters. */
  name: string;
  /**
   * The icon the dashboard draws beside it, from the list in "Get what an expense can be".
   *
   * Left out, it is "tag".
   */
  icon?: string;
}

/** What create an expense category answers: `expenseCategories.create`. */
export type ExpenseCategoriesCreateResult = {
  id: string;
  name: string;
  icon: string;
  updatedAt: string;
};

/** What update an expense category takes: `expenseCategories.update`. */
export interface ExpenseCategoriesUpdateParams {
  /** Its name. */
  name: string;
  /** Its icon. Left out, it stays as it is. */
  icon?: string;
}

/** What update an expense category answers: `expenseCategories.update`. */
export type ExpenseCategoriesUpdateResult = {
  id: string;
  name: string;
  icon: string;
  updatedAt: string;
};

/** What delete an expense category answers: `expenseCategories.delete`. */
export type ExpenseCategoriesDeleteResult = {
  id: string;
  deleted: boolean;
  moved: number;
};

/** What sort expense categories takes: `expenseCategories.sort`. */
export interface ExpenseCategoriesSortParams {
  /** The categories' IDs in their new order. */
  categoryIds: string[];
}

/** What sort expense categories answers: `expenseCategories.sort`. */
export type ExpenseCategoriesSortResult = {
  reordered: number;
};

/** What list recurring expenses answers: `recurringExpenses.list`. */
export type RecurringExpensesListResult = {
  id: string;
  payee: string;
  note: string;
  category: unknown;
  method: string;
  reference: string;
  amount: number;
  cadence: string;
  onDay: number;
  nextOn: string;
  asks: boolean;
  paused: boolean;
  waiting: boolean;
  updatedAt: string;
}[];

/** What create a recurring expense takes: `recurringExpenses.create`. */
export interface RecurringExpensesCreateParams {
  /** Who is paid, up to 120 characters. */
  payee: string;
  /** How much each time, in the store's currency. */
  amount: number;
  /** How often it comes round. */
  cadence: "month" | "year";
  /** The day it is next due, as `YYYY-MM-DD`. */
  nextOn: string;
  /** How it is paid. */
  method?: "card" | "bank" | "crypto" | "paypal" | "cash" | "other";
  /** The expense category it is filed in. */
  categoryId?: string;
  /** A note, up to 255 characters. */
  note?: string;
  /** A reference, up to 160 characters. */
  reference?: string;
}

/** What create a recurring expense answers: `recurringExpenses.create`. */
export type RecurringExpensesCreateResult = {
  id: string;
  payee: string;
  note: string;
  category: unknown;
  method: string;
  reference: string;
  amount: number;
  cadence: string;
  onDay: number;
  nextOn: string;
  asks: boolean;
  paused: boolean;
  waiting: boolean;
  updatedAt: string;
};

/** What update a recurring expense takes: `recurringExpenses.update`. */
export interface RecurringExpensesUpdateParams {
  /** Who is paid, up to 120 characters. */
  payee: string;
  /** How much each time, in the store's currency. */
  amount: number;
  /** How often it comes round. */
  cadence: "month" | "year";
  /** The day it is next due, as `YYYY-MM-DD`. */
  nextOn: string;
  /** How it is paid. */
  method?: "card" | "bank" | "crypto" | "paypal" | "cash" | "other";
  /** The expense category it is filed in. */
  categoryId?: string;
  /** A note, up to 255 characters. */
  note?: string;
  /** A reference, up to 160 characters. */
  reference?: string;
}

/** What update a recurring expense answers: `recurringExpenses.update`. */
export type RecurringExpensesUpdateResult = {
  id: string;
  payee: string;
  note: string;
  category: unknown;
  method: string;
  reference: string;
  amount: number;
  cadence: string;
  onDay: number;
  nextOn: string;
  asks: boolean;
  paused: boolean;
  waiting: boolean;
  updatedAt: string;
};

/** What delete a recurring expense answers: `recurringExpenses.delete`. */
export type RecurringExpensesDeleteResult = {
  id: string;
  deleted: boolean;
};

/** What mark a recurring expense as paid answers: `recurringExpenses.paid`. */
export type RecurringExpensesPaidResult = unknown;

/** What skip a recurring expense answers: `recurringExpenses.skip`. */
export type RecurringExpensesSkipResult = {
  recurring: {
    id: string;
    payee: string;
    note: string;
    category: unknown;
    method: string;
    reference: string;
    amount: number;
    cadence: string;
    onDay: number;
    nextOn: string;
    asks: boolean;
    paused: boolean;
    waiting: boolean;
    updatedAt: string;
  };
  expense: unknown;
};

/** What list expense rules answers: `expenseRules.list`. */
export type ExpenseRulesListResult = {
  id: string;
  phrase: string;
  category: {
    id: string;
    name: string;
    icon: string;
  };
}[];

/** What create an expense rule takes: `expenseRules.create`. */
export interface ExpenseRulesCreateParams {
  /** What to look for in a payee. */
  phrase: string;
  /** The expense category it means. */
  categoryId: string;
}

/** What create an expense rule answers: `expenseRules.create`. */
export type ExpenseRulesCreateResult = {
  id: string;
  phrase: string;
  category: {
    id: string;
    name: string;
    icon: string;
  };
};

/** What delete an expense rule answers: `expenseRules.delete`. */
export type ExpenseRulesDeleteResult = {
  id: string;
  deleted: boolean;
};

/** What list API requests takes: `requests.list`. */
export interface RequestsListParams {
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * How many a page holds, up to 100.
   *
   * Left out, it is 50.
   */
  perPage?: number;
  /** Only requests made with this API key. */
  keyId?: string;
  /** Only requests of this method. */
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  /** Only requests that worked (`ok`), that were refused or failed (`failed`), or with one status code (`404`). */
  status?: string;
  /** A request's ID, or part of a path. */
  search?: string;
}

/** A row of what list API requests lists: `requests.list`. */
export type RequestsListItem = {
  id: string;
  method: string;
  path: string;
  query: string;
  operation: string;
  status: number;
  code: unknown;
  durationMs: number;
  ip: string;
  userAgent: string;
  apiKey: {
    id: string;
    name: string;
    prefix: string;
  };
  createdAt: string;
};

/** What get an API request answers: `requests.show`. */
export type RequestsShowResult = {
  id: string;
  method: string;
  path: string;
  query: string;
  operation: string;
  status: number;
  code: unknown;
  durationMs: number;
  ip: string;
  userAgent: string;
  apiKey: {
    id: string;
    name: string;
    prefix: string;
  };
  createdAt: string;
  requestBody: unknown;
  responseBody: string;
};

/** What list webhook endpoints answers: `webhooks.list`. */
export type WebhooksListResult = Array<{
  id: string;
  url: string;
  description: string;
  events: string[];
  enabled: boolean;
  pausedAt: unknown;
  failures: number;
  lastDeliveryAt: unknown;
  lastStatus: unknown;
  dateCreated: string;
  updatedAt: string;
  recentDeliveries: unknown[] | Record<string, unknown>;
}>;

/** What create a webhook endpoint takes: `webhooks.create`. */
export interface WebhooksCreateParams {
  /** The https address deliveries are posted to. It cannot point at a private network, and it may name port 80, 443, 8080 or 8443. */
  url: string;
  /** The events it is sent, by name, or `["*"]` for every event there is and every one there will be. */
  events: string[];
  /** A note for whoever manages the store, up to 160 characters. */
  description?: string;
}

/** What create a webhook endpoint answers: `webhooks.create`. */
export type WebhooksCreateResult = {
  id: string;
  url: string;
  description: string;
  events: string[];
  enabled: boolean;
  pausedAt: unknown;
  failures: number;
  lastDeliveryAt: unknown;
  lastStatus: unknown;
  dateCreated: string;
  updatedAt: string;
  secret: string;
};

/** What get a webhook endpoint answers: `webhooks.show`. */
export type WebhooksShowResult = {
  id: string;
  url: string;
  description: string;
  events: string[];
  enabled: boolean;
  pausedAt: unknown;
  failures: number;
  lastDeliveryAt: unknown;
  lastStatus: unknown;
  dateCreated: string;
  updatedAt: string;
};

/** What update a webhook endpoint takes: `webhooks.update`. */
export interface WebhooksUpdateParams {
  /** The https address deliveries are posted to. It cannot point at a private network, and it may name port 80, 443, 8080 or 8443. */
  url: string;
  /** The events it is sent, by name, or `["*"]` for every event there is and every one there will be. */
  events: string[];
  /** A note for whoever manages the store, up to 160 characters. */
  description?: string;
  /** Whether events are sent to it. Switched off, nothing is sent, and what happens meanwhile is not kept for it. */
  enabled?: boolean;
}

/** What update a webhook endpoint answers: `webhooks.update`. */
export type WebhooksUpdateResult = {
  id: string;
  url: string;
  description: string;
  events: string[];
  enabled: boolean;
  pausedAt: unknown;
  failures: number;
  lastDeliveryAt: unknown;
  lastStatus: unknown;
  dateCreated: string;
  updatedAt: string;
};

/** What delete a webhook endpoint answers: `webhooks.delete`. */
export type WebhooksDeleteResult = {
  id: string;
  deleted: boolean;
};

/** What replace a signing secret answers: `webhooks.rotateSecret`. */
export type WebhooksRotateSecretResult = unknown;

/** What send a test delivery answers: `webhooks.test`. */
export type WebhooksTestResult = unknown;

/** What list webhook deliveries takes: `webhookDeliveries.list`. */
export interface WebhookDeliveriesListParams {
  /**
   * Which page of the list. The first is 1.
   *
   * Left out, it is 1.
   */
  page?: number;
  /**
   * How many a page holds, up to 100.
   *
   * Left out, it is 50.
   */
  perPage?: number;
  /** Only deliveries to this endpoint. */
  endpointId?: string;
  /** Only deliveries of this event. */
  event?: string;
  /** Only deliveries in this state. */
  state?: "pending" | "delivered" | "failed";
  /** A delivery's ID, an event's ID, or the ID of what the event is about, such as an order. */
  search?: string;
}

/** A row of what list webhook deliveries lists: `webhookDeliveries.list`. */
export type WebhookDeliveriesListItem = unknown;

/** What get a webhook delivery answers: `webhookDeliveries.show`. */
export type WebhookDeliveriesShowResult = unknown;

/** What resend a webhook delivery answers: `webhookDeliveries.resend`. */
export type WebhookDeliveriesResendResult = unknown;

/** What send a sign-in code takes: `customer.login`. */
export interface CustomerLoginParams {
  /** The address the buyer bought with. */
  email: string;
}

/** What send a sign-in code answers: `customer.login`. */
export type CustomerLoginResult = {
  email: string;
  resendIn: number;
  expiresIn: number;
};

/** What sign in with the code takes: `customer.verify`. */
export interface CustomerVerifyParams {
  /** The address the code was sent to. */
  email: string;
  /** The six digits from the email. */
  code: string;
}

/** What sign in with the code answers: `customer.verify`. */
export type CustomerVerifyResult = {
  token: string;
  tokenType: string;
  expiresAt: string;
  email: string;
};

/** What get the signed-in buyer answers: `customer.show`. */
export type CustomerShowResult = {
  email: string;
  customerSince: string;
  balance: unknown;
  affiliate: {
    member: boolean;
    canJoin: boolean;
  };
  totals: {
    spent: {
      currencyCode: string;
      amount: number;
    }[];
    orders: number;
    keys: number;
  };
  orders: {
    id: string;
    status: string;
    dateCreated: string;
    currencyCode: string;
    total: number;
    productName: string;
    variantName: string;
    quantity: number;
    moreItems: number;
    imageUrl: unknown;
  }[];
  subscriptions: boolean;
  support: boolean;
  downloads: {
    buttons: unknown[] | Record<string, unknown>;
    guideUrl: string;
    files: unknown[] | Record<string, unknown>;
    instructions: unknown[] | Record<string, unknown>;
    general: string;
  };
  supportUrl: string;
};

/** What get an order answers: `customer.orders.show`. */
export type CustomerOrdersShowResult = {
  id: string;
  status: string;
  dateCreated: string;
  paidAt: string;
  paidWith: string;
  currencyCode: string;
  shopCurrency: string;
  subtotal: number;
  discount: number;
  fee: number;
  tax: unknown;
  total: number;
  couponCode: string;
  checkoutUrl: string;
  lines: Array<{
    productName: string;
    variantName: string;
    quantity: number;
    lineTotal: number;
    imageUrl: unknown;
    productPath: string;
    delivery: {
      keys: string[];
      previousKeys: unknown[] | Record<string, unknown>;
      items: unknown[] | Record<string, unknown>;
      previousItems: unknown[] | Record<string, unknown>;
      state: string;
      message: string;
      instructions: string;
      files: unknown[] | Record<string, unknown>;
    };
  }>;
  general: string;
};

/** What sign out answers: `customer.logout`. */
export type CustomerLogoutResult = {
  signedOut: boolean;
  sessions: number;
};

/** What sign out everywhere answers: `customer.logoutEverywhere`. */
export type CustomerLogoutEverywhereResult = {
  signedOut: boolean;
  sessions: number;
};

/** What get the affiliate page answers: `customer.affiliate.show`. */
export type CustomerAffiliateShowResult = {
  member: boolean;
  canJoin: boolean;
  offered: {
    commission: number;
    discount: number;
  };
  active: boolean;
  code: string;
  link: string;
  linkStart: string;
  commission: number;
  discount: number;
  clicks: number;
  orders: number;
  earned: {
    amount: number;
    currencyCode: string;
  };
  balance: {
    amount: number;
    currencyCode: string;
  };
  paidOut: {
    amount: number;
    currencyCode: string;
  };
  can: {
    editLink: boolean;
    toStore: boolean;
    payouts: boolean;
  };
  payout: unknown;
  payouts: unknown[] | Record<string, unknown>;
  changes: {
    id: string;
    kind: string;
    amount: number;
    balanceAfter: number;
    currencyCode: string;
    dateCreated: string;
  }[];
  limits: {
    codeMin: number;
    codeMax: number;
    details: number;
  };
};

/** What join the affiliate programme answers: `customer.affiliate.join`. */
export type CustomerAffiliateJoinResult = {
  member: boolean;
  canJoin: boolean;
  offered: {
    commission: number;
    discount: number;
  };
  active: boolean;
  code: string;
  link: string;
  linkStart: string;
  commission: number;
  discount: number;
  clicks: number;
  orders: number;
  earned: {
    amount: number;
    currencyCode: string;
  };
  balance: {
    amount: number;
    currencyCode: string;
  };
  paidOut: {
    amount: number;
    currencyCode: string;
  };
  can: {
    editLink: boolean;
    toStore: boolean;
    payouts: boolean;
  };
  payout: unknown;
  payouts: unknown[] | Record<string, unknown>;
  changes: unknown[] | Record<string, unknown>;
  limits: {
    codeMin: number;
    codeMax: number;
    details: number;
  };
};

/** What change the link's code takes: `customer.affiliate.link`. */
export interface CustomerAffiliateLinkParams {
  /** What the link ends in: letters, digits and dashes, as long as `limits` on the affiliate page says. One affiliate a code in a store. */
  code: string;
}

/** What change the link's code answers: `customer.affiliate.link`. */
export type CustomerAffiliateLinkResult = {
  member: boolean;
  canJoin: boolean;
  offered: {
    commission: number;
    discount: number;
  };
  active: boolean;
  code: string;
  link: string;
  linkStart: string;
  commission: number;
  discount: number;
  clicks: number;
  orders: number;
  earned: {
    amount: number;
    currencyCode: string;
  };
  balance: {
    amount: number;
    currencyCode: string;
  };
  paidOut: {
    amount: number;
    currencyCode: string;
  };
  can: {
    editLink: boolean;
    toStore: boolean;
    payouts: boolean;
  };
  payout: unknown;
  payouts: unknown[] | Record<string, unknown>;
  changes: {
    id: string;
    kind: string;
    amount: number;
    balanceAfter: number;
    currencyCode: string;
    dateCreated: string;
  }[];
  limits: {
    codeMin: number;
    codeMax: number;
    details: number;
  };
};

/** What ask for a payout takes: `customer.affiliate.payouts.create`. */
export interface CustomerAffiliatePayoutsCreateParams {
  /** How much, in the store's currency, up to their affiliate balance. */
  amount: number;
  /** How they want to be paid, in their own words. */
  details: string;
}

/** What ask for a payout answers: `customer.affiliate.payouts.create`. */
export type CustomerAffiliatePayoutsCreateResult = {
  member: boolean;
  canJoin: boolean;
  offered: {
    commission: number;
    discount: number;
  };
  active: boolean;
  code: string;
  link: string;
  linkStart: string;
  commission: number;
  discount: number;
  clicks: number;
  orders: number;
  earned: {
    amount: number;
    currencyCode: string;
  };
  balance: {
    amount: number;
    currencyCode: string;
  };
  paidOut: {
    amount: number;
    currencyCode: string;
  };
  can: {
    editLink: boolean;
    toStore: boolean;
    payouts: boolean;
  };
  payout: {
    id: string;
    amount: number;
    currencyCode: string;
    details: string;
    status: string;
    note: string;
    dateRequested: string;
    dateResolved: unknown;
  };
  payouts: {
    id: string;
    amount: number;
    currencyCode: string;
    details: string;
    status: string;
    note: string;
    dateRequested: string;
    dateResolved: unknown;
  }[];
  changes: {
    id: string;
    kind: string;
    amount: number;
    balanceAfter: number;
    currencyCode: string;
    dateCreated: string;
  }[];
  limits: {
    codeMin: number;
    codeMax: number;
    details: number;
  };
};

/** What take back a payout request answers: `customer.affiliate.payouts.cancel`. */
export type CustomerAffiliatePayoutsCancelResult = {
  member: boolean;
  canJoin: boolean;
  offered: {
    commission: number;
    discount: number;
  };
  active: boolean;
  code: string;
  link: string;
  linkStart: string;
  commission: number;
  discount: number;
  clicks: number;
  orders: number;
  earned: {
    amount: number;
    currencyCode: string;
  };
  balance: {
    amount: number;
    currencyCode: string;
  };
  paidOut: {
    amount: number;
    currencyCode: string;
  };
  can: {
    editLink: boolean;
    toStore: boolean;
    payouts: boolean;
  };
  payout: unknown;
  payouts: {
    id: string;
    amount: number;
    currencyCode: string;
    details: string;
    status: string;
    note: string;
    dateRequested: string;
    dateResolved: string;
  }[];
  changes: {
    id: string;
    kind: string;
    amount: number;
    balanceAfter: number;
    currencyCode: string;
    dateCreated: string;
  }[];
  limits: {
    codeMin: number;
    codeMax: number;
    details: number;
  };
};

/** What move commission to store balance takes: `customer.affiliate.toStore`. */
export interface CustomerAffiliateToStoreParams {
  /** How much, in the store's currency, up to their affiliate balance. */
  amount: number;
}

/** What move commission to store balance answers: `customer.affiliate.toStore`. */
export type CustomerAffiliateToStoreResult = {
  member: boolean;
  canJoin: boolean;
  offered: {
    commission: number;
    discount: number;
  };
  active: boolean;
  code: string;
  link: string;
  linkStart: string;
  commission: number;
  discount: number;
  clicks: number;
  orders: number;
  earned: {
    amount: number;
    currencyCode: string;
  };
  balance: {
    amount: number;
    currencyCode: string;
  };
  paidOut: {
    amount: number;
    currencyCode: string;
  };
  can: {
    editLink: boolean;
    toStore: boolean;
    payouts: boolean;
  };
  payout: unknown;
  payouts: {
    id: string;
    amount: number;
    currencyCode: string;
    details: string;
    status: string;
    note: string;
    dateRequested: string;
    dateResolved: string;
  }[];
  changes: {
    id: string;
    kind: string;
    amount: number;
    balanceAfter: number;
    currencyCode: string;
    dateCreated: string;
  }[];
  limits: {
    codeMin: number;
    codeMax: number;
    details: number;
  };
};

/** What list subscriptions answers: `customer.subscriptions.list`. */
export type CustomerSubscriptionsListResult = {
  id: string;
  email: string;
  productName: string;
  variantName: string;
  quantity: number;
  price: number;
  currency: string;
  every: number;
  unit: string;
  status: string;
  periodEnd: string;
  graceEnd: unknown;
  renewalOrderId: string;
  renewalUrl: string;
  firstOrderId: string;
  endedAt: unknown;
  revoked: boolean;
  pausedAt: unknown;
  resumeAt: unknown;
  pausedBy: unknown;
  renewsWith: unknown;
  autoRenews: boolean;
  chargeTried: number;
  chargeNextAt: unknown;
  createdAt: string;
  pausesLeft: number;
}[];

/** What cancel a subscription answers: `customer.subscriptions.cancel`. */
export type CustomerSubscriptionsCancelResult = {
  id: string;
  email: string;
  productName: string;
  variantName: string;
  quantity: number;
  price: number;
  currency: string;
  every: number;
  unit: string;
  status: string;
  periodEnd: string;
  graceEnd: unknown;
  renewalOrderId: unknown;
  renewalUrl: unknown;
  firstOrderId: string;
  endedAt: unknown;
  revoked: boolean;
  pausedAt: unknown;
  resumeAt: unknown;
  pausedBy: unknown;
  renewsWith: unknown;
  autoRenews: boolean;
  chargeTried: number;
  chargeNextAt: unknown;
  createdAt: string;
  pausesLeft: number;
}[];

/** What undo a cancellation answers: `customer.subscriptions.undo`. */
export type CustomerSubscriptionsUndoResult = {
  id: string;
  email: string;
  productName: string;
  variantName: string;
  quantity: number;
  price: number;
  currency: string;
  every: number;
  unit: string;
  status: string;
  periodEnd: string;
  graceEnd: unknown;
  renewalOrderId: unknown;
  renewalUrl: unknown;
  firstOrderId: string;
  endedAt: unknown;
  revoked: boolean;
  pausedAt: unknown;
  resumeAt: unknown;
  pausedBy: unknown;
  renewsWith: unknown;
  autoRenews: boolean;
  chargeTried: number;
  chargeNextAt: unknown;
  createdAt: string;
  pausesLeft: number;
}[];

/** What pause a subscription takes: `customer.subscriptions.pause`. */
export interface CustomerSubscriptionsPauseParams {
  /** How long, from 1 to the store's longest pause (`pauseDays` in `meta`). */
  days: number;
}

/** What pause a subscription answers: `customer.subscriptions.pause`. */
export type CustomerSubscriptionsPauseResult = {
  id: string;
  email: string;
  productName: string;
  variantName: string;
  quantity: number;
  price: number;
  currency: string;
  every: number;
  unit: string;
  status: string;
  periodEnd: string;
  graceEnd: unknown;
  renewalOrderId: unknown;
  renewalUrl: unknown;
  firstOrderId: string;
  endedAt: unknown;
  revoked: boolean;
  pausedAt: string;
  resumeAt: string;
  pausedBy: string;
  renewsWith: unknown;
  autoRenews: boolean;
  chargeTried: number;
  chargeNextAt: unknown;
  createdAt: string;
  pausesLeft: number;
}[];

/** What resume a subscription answers: `customer.subscriptions.resume`. */
export type CustomerSubscriptionsResumeResult = {
  id: string;
  email: string;
  productName: string;
  variantName: string;
  quantity: number;
  price: number;
  currency: string;
  every: number;
  unit: string;
  status: string;
  periodEnd: string;
  graceEnd: unknown;
  renewalOrderId: unknown;
  renewalUrl: unknown;
  firstOrderId: string;
  endedAt: unknown;
  revoked: boolean;
  pausedAt: unknown;
  resumeAt: unknown;
  pausedBy: unknown;
  renewsWith: unknown;
  autoRenews: boolean;
  chargeTried: number;
  chargeNextAt: unknown;
  createdAt: string;
  pausesLeft: number;
}[];

/** What give another card answers: `customer.subscriptions.card`. */
export type CustomerSubscriptionsCardResult = unknown;

/** What list support tickets answers: `customer.tickets.list`. */
export type CustomerTicketsListResult = {
  id: string;
  orderId: string;
  subject: string;
  status: string;
  messages: number;
  pictures: number;
  lastMessageAt: string;
  lastFrom: string;
  lastLine: string;
  firstReplyAt: string;
  answeredAt: string;
  resolvedAt: unknown;
  resolvedBy: unknown;
  createdAt: string;
  updatedAt: string;
}[];

/** What open a support ticket takes: `customer.tickets.create`. */
export interface CustomerTicketsCreateParams {
  /** What it is about, up to 100 characters. */
  subject: string;
  /** The first message, up to 500 characters. */
  message: string;
  /** The order it is about, one of `meta.orders` on List support tickets. Left out, something else. */
  order?: string;
}

/** What open a support ticket answers: `customer.tickets.create`. */
export type CustomerTicketsCreateResult = {
  id: string;
  orderId: string;
  subject: string;
  status: string;
  messages: number;
  pictures: number;
  lastMessageAt: string;
  lastFrom: string;
  lastLine: string;
  firstReplyAt: unknown;
  answeredAt: unknown;
  resolvedAt: unknown;
  resolvedBy: unknown;
  createdAt: string;
  updatedAt: string;
  conversation: Array<{
    id: string;
    from: string;
    body: string;
    pictures: unknown[] | Record<string, unknown>;
    createdAt: string;
  }>;
  canReopenUntil: unknown;
  limits: {
    body: number;
    subject: number;
    picturesPerMessage: number;
    picturesPerTicket: number;
    pictureBytes: number;
  };
  orderLabel: string;
  orderProducts: string[];
  orderMore: number;
};

/** What get a support ticket answers: `customer.tickets.show`. */
export type CustomerTicketsShowResult = {
  id: string;
  orderId: string;
  subject: string;
  status: string;
  messages: number;
  pictures: number;
  lastMessageAt: string;
  lastFrom: string;
  lastLine: string;
  firstReplyAt: string;
  answeredAt: string;
  resolvedAt: unknown;
  resolvedBy: unknown;
  createdAt: string;
  updatedAt: string;
  conversation: Array<{
    id: string;
    from: string;
    body: string;
    pictures: unknown[] | Record<string, unknown>;
    createdAt: string;
  }>;
  canReopenUntil: unknown;
  limits: {
    body: number;
    subject: number;
    picturesPerMessage: number;
    picturesPerTicket: number;
    pictureBytes: number;
  };
  orderLabel: string;
  orderProducts: string[];
  orderMore: number;
};

/** What write on a support ticket takes: `customer.tickets.reply`. */
export interface CustomerTicketsReplyParams {
  /** The message, up to 500 characters. */
  message: string;
}

/** What write on a support ticket answers: `customer.tickets.reply`. */
export type CustomerTicketsReplyResult = {
  id: string;
  orderId: string;
  subject: string;
  status: string;
  messages: number;
  pictures: number;
  lastMessageAt: string;
  lastFrom: string;
  lastLine: string;
  firstReplyAt: string;
  answeredAt: string;
  resolvedAt: unknown;
  resolvedBy: unknown;
  createdAt: string;
  updatedAt: string;
  conversation: Array<{
    id: string;
    from: string;
    body: string;
    pictures: unknown[] | Record<string, unknown>;
    createdAt: string;
  }>;
  canReopenUntil: unknown;
  limits: {
    body: number;
    subject: number;
    picturesPerMessage: number;
    picturesPerTicket: number;
    pictureBytes: number;
  };
  orderLabel: string;
  orderProducts: string[];
  orderMore: number;
};

/** What resolve a support ticket answers: `customer.tickets.resolve`. */
export type CustomerTicketsResolveResult = {
  id: string;
  orderId: string;
  subject: string;
  status: string;
  messages: number;
  pictures: number;
  lastMessageAt: string;
  lastFrom: string;
  lastLine: string;
  firstReplyAt: string;
  answeredAt: string;
  resolvedAt: string;
  resolvedBy: string;
  createdAt: string;
  updatedAt: string;
  conversation: Array<{
    id: string;
    from: string;
    body: string;
    pictures: unknown[] | Record<string, unknown>;
    createdAt: string;
  }>;
  canReopenUntil: string;
  limits: {
    body: number;
    subject: number;
    picturesPerMessage: number;
    picturesPerTicket: number;
    pictureBytes: number;
  };
  orderLabel: string;
  orderProducts: string[];
  orderMore: number;
};

export interface ShoplyResourcesKey {
  /**
   * **Get the current key**
   *
   * What the key in the request is: its name, the permissions it carries, the addresses it accepts, and the store it belongs to with that store's ID. Make this your first call. Every other address needs the store's ID, and `api` in the answer is where that store's routes begin.
   *
   * An app's token is a key of the store it was approved for, and `app` says which app it is (null for the store's own keys): an app connected to many stores asks this to learn which store a token is for.
   *
   * Any live key may ask it, whatever its permissions.
   *
   * Any live API key may call this, whatever its permissions.
   *
   * @see https://docs.shoply.gg/api-reference/api-key/get-the-current-key
   */
  show(options?: RequestOptions): Promise<KeyShowResult>;
}

export interface ShoplyResourcesStore {
  /**
   * **Get the store**
   *
   * The store's details and settings: its name and address, currency, branding, links, policies, what its storefront shows, and its business details.
   *
   * Needs the `store.read` permission (Read Store).
   *
   * @see https://docs.shoply.gg/api-reference/store/get-the-store
   */
  show(options?: RequestOptions): Promise<StoreShowResult>;
  /**
   * **Update the store**
   *
   * Saves the store's settings. Read the store first and send it back changed: `name` is needed, and `description`, `logoUrl`, `supportUrl`, `guideUrl` and `panelUrl` are cleared when left out. Every other field stays as it is when left out.
   *
   * The store's address is changed with "Change the store's address", and its logo and icon are uploaded with their own routes.
   *
   * Needs the `store.write` permission (Change Store).
   *
   * @see https://docs.shoply.gg/api-reference/store/update-the-store
   */
  update(params: StoreUpdateParams, options?: RequestOptions): Promise<StoreUpdateResult>;
  /**
   * **Change the store's address**
   *
   * Moves the store to a new name under myshoply.gg. The old address leads to the new one. It can be changed once a week, and a name that is taken or reserved is refused.
   *
   * Needs the `store.write` permission (Change Store).
   *
   * @see https://docs.shoply.gg/api-reference/store/change-the-stores-address
   */
  setAddress(params: StoreSetAddressParams, options?: RequestOptions): Promise<StoreSetAddressResult>;
  /**
   * **Upload the store's logo**
   *
   * Gives the store its logo, replacing any it had. Sent as `multipart/form-data` in a field called `image`.
   *
   * Needs the `store.write` permission (Change Store).
   *
   * @see https://docs.shoply.gg/api-reference/store/upload-the-stores-logo
   */
  uploadLogo(params: FileUpload, options?: RequestOptions): Promise<StoreUploadLogoResult>;
  /**
   * **Upload the store's icon**
   *
   * Gives the store the icon its site shows in a browser tab, replacing any it had. Sent as `multipart/form-data` in a field called `image`.
   *
   * Needs the `store.write` permission (Change Store).
   *
   * @see https://docs.shoply.gg/api-reference/store/upload-the-stores-icon
   */
  uploadFavicon(params: FileUpload, options?: RequestOptions): Promise<StoreUploadFaviconResult>;
  /**
   * **Get email and alert settings**
   *
   * What the store's emails say, which alerts it is sent, the coupon for a first order, and whether an order with no review is given one (`autoReviews`). Its Discord webhook is answered only as saved or not. These settings are changed in the dashboard.
   *
   * Needs the `store.read` permission (Read Store).
   *
   * @see https://docs.shoply.gg/api-reference/store/get-email-and-alert-settings
   */
  emailSettings(options?: RequestOptions): Promise<StoreEmailSettingsResult>;
}

export interface ShoplyResourcesDomain {
  /**
   * **Get the store's domain**
   *
   * The store's own domain, if it has connected one, with where it stands (`status`, and `checks`: whether it points here, whether its TXT record has proved it the store's, and whether its certificate is issued), and `cnameTarget`: what the domain's DNS record has to point at.
   *
   * Needs the `store.read` permission (Read Store).
   *
   * @see https://docs.shoply.gg/api-reference/domain/get-the-stores-domain
   */
  show(options?: RequestOptions): Promise<DomainShowResult>;
  /**
   * **Connect a domain**
   *
   * Connects a domain of the store's own. Point a CNAME record for it at `cnameTarget` and it goes live once that is seen and its certificate is issued. A store has one domain: remove it to connect another.
   *
   * Needs the `store.write` permission (Change Store).
   *
   * @see https://docs.shoply.gg/api-reference/domain/connect-a-domain
   */
  connect(params: DomainConnectParams, options?: RequestOptions): Promise<DomainConnectResult>;
  /**
   * **Remove the store's domain**
   *
   * Disconnects the store's own domain. The store goes on answering at its myshoply.gg address.
   *
   * Needs the `store.write` permission (Change Store).
   *
   * @see https://docs.shoply.gg/api-reference/domain/remove-the-stores-domain
   */
  remove(options?: RequestOptions): Promise<DomainRemoveResult>;
}

export interface ShoplyResourcesPaymentMethods {
  /**
   * **List payment methods**
   *
   * Every payment method Shoply supports, and for each whether this store has connected it and switched it on, in the order its checkout offers them. Never a method's credentials. `meta.balance` says whether buyers may pay with their store balance. A method's name here is the name the rest of the API uses for it. `meta.order` is every method the store has connected and every custom payment method it has (paid outside Shoply: "List custom payment methods"), by name or id, in the checkout's one order. Each method's `unpaidHours` is its own time for an unpaid order, or null for the store's, which is `meta.unpaid.hours`; `meta.routing.providers` is the card methods Payment Routing chooses between.
   *
   * Needs the `payments.read` permission (Read Payment Methods).
   *
   * @see https://docs.shoply.gg/api-reference/payment-methods/list-payment-methods
   */
  list(options?: RequestOptions): Promise<PaymentMethodsListResult>;
  /**
   * **Switch a payment method on or off**
   *
   * Takes a connected method off the checkout, or puts it back. Off keeps its credentials. On is refused for a method that is missing something it needs, which is put right in the dashboard. Answers the list again.
   *
   * Needs the `payments.write` permission (Change Payment Methods).
   *
   * @see https://docs.shoply.gg/api-reference/payment-methods/switch-a-payment-method-on-or-off
   */
  setEnabled(provider: string, params: PaymentMethodsSetEnabledParams, options?: RequestOptions): Promise<PaymentMethodsSetEnabledResult>;
  /**
   * **Sort payment methods**
   *
   * Sets the order the checkout offers payment methods in. The first is the one most buyers take. Name some of them and they are put in this order in the places they hold now, and the rest stay where they are: a custom payment method between two connected ones stays between them. A custom method is named by its id in `meta.order`. Answers the list again.
   *
   * Needs the `payments.write` permission (Change Payment Methods).
   *
   * @see https://docs.shoply.gg/api-reference/payment-methods/sort-payment-methods
   */
  sort(params: PaymentMethodsSortParams, options?: RequestOptions): Promise<PaymentMethodsSortResult>;
  /**
   * **Switch paying with balance on or off**
   *
   * Whether the checkout offers buyers their balance at the store. Answers the list again.
   *
   * Needs the `payments.write` permission (Change Payment Methods).
   *
   * @see https://docs.shoply.gg/api-reference/payment-methods/switch-paying-with-balance-on-or-off
   */
  setBalance(params: PaymentMethodsSetBalanceParams, options?: RequestOptions): Promise<PaymentMethodsSetBalanceResult>;
  /**
   * **Set how long an unpaid order is kept**
   *
   * How long the store keeps an order nobody pays before it is cancelled, from 1 hour to 14 days. A method with a time of its own keeps its own. An order is never cancelled within an hour of a payment being opened on it. Answers the list again, with the store's time in `meta.unpaid`.
   *
   * Needs the `payments.write` permission (Change Payment Methods).
   *
   * @see https://docs.shoply.gg/api-reference/payment-methods/set-how-long-an-unpaid-order-is-kept
   */
  setUnpaidHours(params: PaymentMethodsSetUnpaidHoursParams, options?: RequestOptions): Promise<PaymentMethodsSetUnpaidHoursResult>;
  /**
   * **Set a payment method's own time for an unpaid order**
   *
   * How long an order is kept unpaid once a payment has been opened on it with this method, from 1 hour to 14 days. Null gives it back the store's time. Answers the list again, each method with its `unpaidHours`.
   *
   * Needs the `payments.write` permission (Change Payment Methods).
   *
   * @see https://docs.shoply.gg/api-reference/payment-methods/set-a-payment-methods-own-time-for-an-unpaid-order
   */
  setMethodUnpaidHours(provider: string, params: PaymentMethodsSetMethodUnpaidHoursParams, options?: RequestOptions): Promise<PaymentMethodsSetMethodUnpaidHoursResult>;
}

export interface ShoplyResourcesAnalytics {
  /**
   * **Get the overview**
   *
   * A period's headline figures (revenue, orders, customers and the rest), the same figures for the period before, and a day by day series. What the dashboard's home page draws.
   *
   * Needs the `analytics.read` permission (Read Analytics). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/analytics/get-the-overview
   */
  overview(params?: AnalyticsOverviewParams, options?: RequestOptions): Promise<AnalyticsOverviewResult>;
  /**
   * **Get the visits report**
   *
   * A period's visits and what they went on to buy: visitors, where they came from by channel, website, campaign and affiliate, the pages they landed on, countries and devices. A sale is given to the last visit its buyer began before it, within 30 days. An order with no visit behind it (one made by hand, an invoice) counts in the totals and in none of the lists that say where sales came from.
   *
   * Needs the `analytics.read` permission (Read Analytics). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/analytics/get-the-visits-report
   */
  report(params?: AnalyticsReportParams, options?: RequestOptions): Promise<AnalyticsReportResult>;
  /**
   * **Get the live view**
   *
   * What is happening on the store now: who is on it and where, the checkouts and orders of the last ten minutes, and the day's running totals.
   *
   * Needs the `analytics.read` permission (Read Analytics).
   *
   * @see https://docs.shoply.gg/api-reference/analytics/get-the-live-view
   */
  live(params?: AnalyticsLiveParams, options?: RequestOptions): Promise<AnalyticsLiveResult>;
  /**
   * **Get visitors now**
   *
   * How many visitors are on the store now: one number, counted over the last ten minutes.
   *
   * Needs the `analytics.read` permission (Read Analytics).
   *
   * @see https://docs.shoply.gg/api-reference/analytics/get-visitors-now
   */
  visitorsNow(options?: RequestOptions): Promise<AnalyticsVisitorsNowResult>;
  /**
   * **Get the search report**
   *
   * How the store was found in a search engine over a period: clicks, impressions, click rate and position, over time and by search, page, country and device. From an engine the store has connected in the dashboard. With none connected it is refused with `search_unavailable`. Neither engine has figures for today.
   *
   * Needs the `analytics.read` permission (Read Analytics). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/analytics/get-the-search-report
   */
  search(params?: AnalyticsSearchParams, options?: RequestOptions): Promise<AnalyticsSearchResult>;
}

export interface ShoplyResourcesStorefronts {
  /**
   * **List storefronts**
   *
   * The store's storefronts: each a design of its site, on a theme. One of them is live (`meta.liveId`), which is the one buyers see. A store holds up to 10. `meta.themes` is the themes a new one can start from.
   *
   * Needs the `storefronts.read` permission (Read Storefronts).
   *
   * @see https://docs.shoply.gg/api-reference/storefronts/list-storefronts
   */
  list(options?: RequestOptions): Promise<StorefrontsListResult>;
  /**
   * **Create a storefront**
   *
   * Adds a storefront as a draft: a theme's starting design, or a copy of one the store already has. Answers the store's storefronts with the new one among them.
   *
   * Needs the `storefronts.write` permission (Change Storefronts).
   *
   * @see https://docs.shoply.gg/api-reference/storefronts/create-a-storefront
   */
  create(params: StorefrontsCreateParams, options?: RequestOptions): Promise<StorefrontsCreateResult>;
  /**
   * **Import a storefront**
   *
   * Makes a new storefront, as a draft, from one that was exported: the JSON document "Export a storefront" answers under `storefront`, sent as `multipart/form-data` in a field called `file`. Nothing in it is trusted: its design is rebuilt from the theme, and each of its files is checked. One thing wrong refuses all of it, and the refusal names the file. `meta.imported` says which storefront it became and how many problems its code has to be fixed before it can be published.
   *
   * Needs the `storefronts.write` permission (Change Storefronts).
   *
   * @see https://docs.shoply.gg/api-reference/storefronts/import-a-storefront
   */
  import(params: FileUpload, options?: RequestOptions): Promise<StorefrontsImportResult>;
  /**
   * **Export a storefront**
   *
   * A storefront to keep, work on or hand on: its design, and every file of its code when it has code of its own, as text. `storefront` in the answer is what "Import a storefront" takes.
   *
   * Needs the `storefronts.read` permission (Read Storefronts). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/storefronts/export-a-storefront
   */
  export(storefrontId: string, options?: RequestOptions): Promise<StorefrontsExportResult>;
  /**
   * **Rename a storefront**
   *
   * Changes what a storefront is called. Buyers never see the name. Answers the store's storefronts again.
   *
   * Needs the `storefronts.write` permission (Change Storefronts).
   *
   * @see https://docs.shoply.gg/api-reference/storefronts/rename-a-storefront
   */
  rename(storefrontId: string, params: StorefrontsRenameParams, options?: RequestOptions): Promise<StorefrontsRenameResult>;
  /**
   * **Delete a storefront**
   *
   * Removes a storefront that is not the live one. Answers the storefronts that are left.
   *
   * Needs the `storefronts.write` permission (Change Storefronts).
   *
   * @see https://docs.shoply.gg/api-reference/storefronts/delete-a-storefront
   */
  delete(storefrontId: string, options?: RequestOptions): Promise<StorefrontsDeleteResult>;
  /**
   * **Make a storefront live**
   *
   * Makes this storefront the one buyers see, as it was last published. Answers the store's storefronts again.
   *
   * Needs the `storefronts.write` permission (Change Storefronts).
   *
   * @see https://docs.shoply.gg/api-reference/storefronts/make-a-storefront-live
   */
  setLive(storefrontId: string, params?: StorefrontsSetLiveParams, options?: RequestOptions): Promise<StorefrontsSetLiveResult>;
  /**
   * **Get a storefront's code**
   *
   * Whether this storefront can be edited as code (`available`), whether it has files of its own yet (`started`), and when it has: every file with its SHA-256 `hash`, what is wrong in the templates (`code.problems`), the count of changes to its files (`code.rev`) and to its design (`version`), which "Publish a storefront's code" takes, and a link to look at the draft on the store's own address for an hour (`preview`: its `url`, with `param` set to `token` in the query string). A file's text is "Get a file", or every file at once in "Export a storefront".
   *
   * Needs the `storefronts.read` permission (Read Storefronts).
   *
   * @see https://docs.shoply.gg/api-reference/storefront-code/get-a-storefronts-code
   */
  code(storefrontId: string, options?: RequestOptions): Promise<StorefrontsCodeResult>;
  /**
   * **Give a storefront files**
   *
   * Gives a storefront files of its own, copied from its theme's, as opening the code studio does. Until then it is drawn from its theme's files and follows them as they change. Nothing buyers see changes. Refused with `code_needs_copy` for a storefront from before its theme could be edited as code: make a copy of it ("Create a storefront" with `from`) and work on that. Answers as "Get a storefront's code".
   *
   * Needs the `storefronts.write` permission (Change Storefronts).
   *
   * @see https://docs.shoply.gg/api-reference/storefront-code/give-a-storefront-files
   */
  codeStart(storefrontId: string, options?: RequestOptions): Promise<StorefrontsCodeStartResult>;
  /**
   * **Get a file**
   *
   * One file of the storefront's draft, with its text in `content` and its SHA-256 in `hash`. `file_not_found` for a path it does not have.
   *
   * Needs the `storefronts.read` permission (Read Storefronts).
   *
   * @see https://docs.shoply.gg/api-reference/storefront-code/get-a-file
   */
  codeFile(storefrontId: string, params: StorefrontsCodeFileParams, options?: RequestOptions): Promise<StorefrontsCodeFileResult>;
  /**
   * **Save a file**
   *
   * Saves a file the draft has. Send `was`, the `hash` it had when you read it, and the save is refused with `file_conflict` if it has changed since (in the code studio, say), with the file as it now stands in `file`: left out, it is saved whatever happened in between. Saved to the draft only: buyers see it once it is published. Answers the file as it now stands (`file`) and the whole list again (`code`), with what is now wrong in the templates. What is written counts toward the store's hour of saves, as the code studio's does.
   *
   * Needs the `storefronts.write` permission (Change Storefronts).
   *
   * @see https://docs.shoply.gg/api-reference/storefront-code/save-a-file
   */
  codeSave(storefrontId: string, params: StorefrontsCodeSaveParams, options?: RequestOptions): Promise<StorefrontsCodeSaveResult>;
  /**
   * **Add a file**
   *
   * Adds a file the draft does not have. Its path has to be in one of the folders a storefront has (`code.folders` in "Get a storefront's code") with that folder's ending. Answers as "Save a file".
   *
   * Needs the `storefronts.write` permission (Change Storefronts).
   *
   * @see https://docs.shoply.gg/api-reference/storefront-code/add-a-file
   */
  codeAdd(storefrontId: string, params: StorefrontsCodeAddParams, options?: RequestOptions): Promise<StorefrontsCodeAddResult>;
  /**
   * **Delete a file**
   *
   * Takes a file you added out of the draft. A file of the theme's can be changed and put back, never deleted: `file_fixed`.
   *
   * Needs the `storefronts.write` permission (Change Storefronts).
   *
   * @see https://docs.shoply.gg/api-reference/storefront-code/delete-a-file
   */
  codeDelete(storefrontId: string, params: StorefrontsCodeDeleteParams, options?: RequestOptions): Promise<StorefrontsCodeDeleteResult>;
  /**
   * **Rename a file**
   *
   * Moves a file you added to another path. A file of the theme's keeps its name (`file_fixed`).
   *
   * Needs the `storefronts.write` permission (Change Storefronts).
   *
   * @see https://docs.shoply.gg/api-reference/storefront-code/rename-a-file
   */
  codeRename(storefrontId: string, params: StorefrontsCodeRenameParams, options?: RequestOptions): Promise<StorefrontsCodeRenameResult>;
  /**
   * **Publish a storefront's code**
   *
   * Puts the draft live, its files and its design together, and makes this storefront the one buyers see, as Publish in the code studio does. Send `rev` and `version` from "Get a storefront's code" as you last read it: if either has moved since (somebody saved in the meantime) it is refused with `draft_conflict`, so you never publish what you have not seen. A mistake in a template refuses it with `code_problems`, the mistakes listed in `problems`.
   *
   * Needs the `storefronts.write` permission (Change Storefronts).
   *
   * @see https://docs.shoply.gg/api-reference/storefront-code/publish-a-storefronts-code
   */
  codePublish(storefrontId: string, params: StorefrontsCodePublishParams, options?: RequestOptions): Promise<StorefrontsCodePublishResult>;
}

export interface ShoplyResourcesRouting {
  /**
   * **Get Payment Routing**
   *
   * `settings`: whether it is on, how a checkout is given a processor (`mode`: `share`, by the share of the month's volume each should have; `order`, the first that can take it; `cheapest`, by the payment fee rates set in Finance), whether a declined card is moved to the next (`retry`), whether a returning buyer goes to their last one (`sticky`), and the health guard (`guard`, pausing a processor with `guardDeclines` of its last `guardWindow` routed payments declined) and `disputeAlert`, the dispute percent the store is told of. `processors` are in the routing in their order, each with its share, caps and order limits, its `state` (`rotation`, `cap`, `paused`, or `off` where it cannot take a card today) and its figures this month. `rules` are checked in their order, `available` is the connected card methods not in the routing yet, and `set` is false where the store has never set it up.
   *
   * Needs the `routing.read` permission (Read Payment Routing).
   *
   * @see https://docs.shoply.gg/api-reference/payment-routing/get-payment-routing
   */
  show(options?: RequestOptions): Promise<RoutingShowResult>;
  /**
   * **Change Payment Routing**
   *
   * Changes the settings named and keeps the rest. Switching it on needs a processor in the routing that can take a card today. Answers the whole of Payment Routing again, as "Get Payment Routing" does.
   *
   * Needs the `routing.write` permission (Change Payment Routing).
   *
   * @see https://docs.shoply.gg/api-reference/payment-routing/change-payment-routing
   */
  update(params?: RoutingUpdateParams, options?: RequestOptions): Promise<RoutingUpdateResult>;
  /**
   * **Add a processor**
   *
   * Puts one of the store's connected card methods into the routing, last. The shares are made even again. Answers the whole of Payment Routing again, as "Get Payment Routing" does.
   *
   * Needs the `routing.write` permission (Change Payment Routing).
   *
   * @see https://docs.shoply.gg/api-reference/payment-routing/add-a-processor
   */
  addProcessor(params: RoutingAddProcessorParams, options?: RequestOptions): Promise<RoutingAddProcessorResult>;
  /**
   * **Change a processor**
   *
   * Sets a processor's share and limits, all five at once: one left out is no limit, and a share left out is 0. Caps count every paid order through the method, routed or not, over the UTC month and day. Answers the whole of Payment Routing again, as "Get Payment Routing" does.
   *
   * Needs the `routing.write` permission (Change Payment Routing).
   *
   * @see https://docs.shoply.gg/api-reference/payment-routing/change-a-processor
   */
  updateProcessor(provider: string, params?: RoutingUpdateProcessorParams, options?: RequestOptions): Promise<RoutingUpdateProcessorResult>;
  /**
   * **Remove a processor**
   *
   * Takes a processor out of the routing, with every rule about it. The method itself stays connected. The last one out switches routing off. Answers the whole of Payment Routing again, as "Get Payment Routing" does.
   *
   * Needs the `routing.write` permission (Change Payment Routing).
   *
   * @see https://docs.shoply.gg/api-reference/payment-routing/remove-a-processor
   */
  removeProcessor(provider: string, options?: RequestOptions): Promise<RoutingRemoveProcessorResult>;
  /**
   * **Put a processor back**
   *
   * Puts a processor the health guard paused back into the split. A `routing.processor_resumed` webhook is sent. Answers the whole of Payment Routing again, as "Get Payment Routing" does.
   *
   * Needs the `routing.write` permission (Change Payment Routing).
   *
   * @see https://docs.shoply.gg/api-reference/payment-routing/put-a-processor-back
   */
  resumeProcessor(provider: string, options?: RequestOptions): Promise<RoutingResumeProcessorResult>;
  /**
   * **Sort processors**
   *
   * Sets the processors' order, which `mode` `order` takes the first of. Every processor in the routing, once each. Answers the whole of Payment Routing again, as "Get Payment Routing" does.
   *
   * Needs the `routing.write` permission (Change Payment Routing).
   *
   * @see https://docs.shoply.gg/api-reference/payment-routing/sort-processors
   */
  sortProcessors(params: RoutingSortProcessorsParams, options?: RequestOptions): Promise<RoutingSortProcessorsResult>;
  /**
   * **Add a rule**
   *
   * Adds a rule, last. Every `never` that fits an order leaves its processor out, then the first `only` that fits picks. A store holds up to 50. Answers the whole of Payment Routing again, as "Get Payment Routing" does.
   *
   * Needs the `routing.write` permission (Change Payment Routing).
   *
   * @see https://docs.shoply.gg/api-reference/payment-routing/add-a-rule
   */
  addRule(params: RoutingAddRuleParams, options?: RequestOptions): Promise<RoutingAddRuleResult>;
  /**
   * **Change a rule**
   *
   * Replaces a rule with the one sent. Answers the whole of Payment Routing again, as "Get Payment Routing" does.
   *
   * Needs the `routing.write` permission (Change Payment Routing).
   *
   * @see https://docs.shoply.gg/api-reference/payment-routing/change-a-rule
   */
  updateRule(ruleId: string, params: RoutingUpdateRuleParams, options?: RequestOptions): Promise<RoutingUpdateRuleResult>;
  /**
   * **Delete a rule**
   *
   * Answers the whole of Payment Routing again, as "Get Payment Routing" does.
   *
   * Needs the `routing.write` permission (Change Payment Routing).
   *
   * @see https://docs.shoply.gg/api-reference/payment-routing/delete-a-rule
   */
  deleteRule(ruleId: string, options?: RequestOptions): Promise<RoutingDeleteRuleResult>;
  /**
   * **Sort rules**
   *
   * Sets the order rules are checked in. Every rule, once each. Answers the whole of Payment Routing again, as "Get Payment Routing" does.
   *
   * Needs the `routing.write` permission (Change Payment Routing).
   *
   * @see https://docs.shoply.gg/api-reference/payment-routing/sort-rules
   */
  sortRules(params: RoutingSortRulesParams, options?: RequestOptions): Promise<RoutingSortRulesResult>;
}

export interface ShoplyResourcesCustomMethods {
  /**
   * **List custom payment methods**
   *
   * The store's custom payment methods. Where each stands at checkout among the connected methods is `meta.order` in "List payment methods". `meta.max` is how many a store may have, and `meta.variables` the words its instructions and address may fill in.
   *
   * Needs the `payments.read` permission (Read Payment Methods).
   *
   * @see https://docs.shoply.gg/api-reference/custom-payment-methods/list-custom-payment-methods
   */
  list(options?: RequestOptions): Promise<CustomMethodsListResult>;
  /**
   * **Create a custom payment method**
   *
   * Adds a method, after every other at checkout. A store holds up to 10. Answers the new method.
   *
   * Needs the `payments.write` permission (Change Payment Methods).
   *
   * @see https://docs.shoply.gg/api-reference/custom-payment-methods/create-a-custom-payment-method
   */
  create(params?: CustomMethodsCreateParams, options?: RequestOptions): Promise<CustomMethodsCreateResult>;
  /**
   * **Update a custom payment method**
   *
   * Changes what is sent and keeps the rest. A payment already opened keeps what its buyer was told. Answers the store's custom methods again, as "List custom payment methods" does.
   *
   * Needs the `payments.write` permission (Change Payment Methods).
   *
   * @see https://docs.shoply.gg/api-reference/custom-payment-methods/update-a-custom-payment-method
   */
  update(methodId: string, params?: CustomMethodsUpdateParams, options?: RequestOptions): Promise<CustomMethodsUpdateResult>;
  /**
   * **Delete a custom payment method**
   *
   * Its orders keep its name. Its ID is never used again. Answers the store's custom methods again, as "List custom payment methods" does.
   *
   * Needs the `payments.write` permission (Change Payment Methods).
   *
   * @see https://docs.shoply.gg/api-reference/custom-payment-methods/delete-a-custom-payment-method
   */
  delete(methodId: string, options?: RequestOptions): Promise<CustomMethodsDeleteResult>;
  /**
   * **Switch a custom payment method on or off**
   *
   * Answers the store's custom methods again, as "List custom payment methods" does.
   *
   * Needs the `payments.write` permission (Change Payment Methods).
   *
   * @see https://docs.shoply.gg/api-reference/custom-payment-methods/switch-a-custom-payment-method-on-or-off
   */
  setEnabled(methodId: string, params: CustomMethodsSetEnabledParams, options?: RequestOptions): Promise<CustomMethodsSetEnabledResult>;
  /**
   * **Sort custom payment methods**
   *
   * Puts the methods named in this order, in the places they hold now among the connected ones. To move one between connected methods, use "Sort payment methods" with its ID. Answers the store's custom methods again, as "List custom payment methods" does.
   *
   * Needs the `payments.write` permission (Change Payment Methods).
   *
   * @see https://docs.shoply.gg/api-reference/custom-payment-methods/sort-custom-payment-methods
   */
  sort(params: CustomMethodsSortParams, options?: RequestOptions): Promise<CustomMethodsSortResult>;
  /**
   * **Upload a custom payment method's icon**
   *
   * Sent as `multipart/form-data` in a field called `image`. It replaces the one it had. Answers the store's custom methods again, as "List custom payment methods" does.
   *
   * Needs the `payments.write` permission (Change Payment Methods).
   *
   * @see https://docs.shoply.gg/api-reference/custom-payment-methods/upload-a-custom-payment-methods-icon
   */
  uploadIcon(methodId: string, params: FileUpload, options?: RequestOptions): Promise<CustomMethodsUploadIconResult>;
  /**
   * **Remove a custom payment method's icon**
   *
   * Answers the store's custom methods again, as "List custom payment methods" does.
   *
   * Needs the `payments.write` permission (Change Payment Methods).
   *
   * @see https://docs.shoply.gg/api-reference/custom-payment-methods/remove-a-custom-payment-methods-icon
   */
  deleteIcon(methodId: string, options?: RequestOptions): Promise<CustomMethodsDeleteIconResult>;
}

export interface ShoplyResourcesProducts {
  /**
   * **List products**
   *
   * Every product the store has, in the store's own order, each with its variants, pictures, categories and stock counts. A store holds up to 250 products, so the list is not paged.
   *
   * Needs the `products.read` permission (Read Products).
   *
   * @see https://docs.shoply.gg/api-reference/products/list-products
   */
  list(params?: ProductsListParams, options?: RequestOptions): Promise<ProductsListResult>;
  /**
   * **Create a product**
   *
   * Adds a product with its variants. A store holds up to 250 products. Stock is added afterwards, a variant at a time, with the variant IDs in the answer.
   *
   * A refusal names the field, and for a variant its place in the list: `variants.0.price`.
   *
   * Needs the `products.write` permission (Change Products).
   *
   * @see https://docs.shoply.gg/api-reference/products/create-a-product
   */
  create(params: ProductsCreateParams, options?: RequestOptions): Promise<ProductsCreateResult>;
  /**
   * **Get a product**
   *
   * One product, with everything its editor shows.
   *
   * Needs the `products.read` permission (Read Products).
   *
   * @see https://docs.shoply.gg/api-reference/products/get-a-product
   */
  show(productId: string, options?: RequestOptions): Promise<ProductsShowResult>;
  /**
   * **Update a product**
   *
   * Saves the product whole, as its editor does: send every field as it should be. `variants` is the complete list. An entry with an `id` changes that variant, an entry without one is added, and a variant left out is removed with its unsold stock. A variant buyers have received license keys from cannot be removed.
   *
   * Read the product first and send it back changed. The fields that say "stay as they are" are the only ones that may be left out.
   *
   * Needs the `products.write` permission (Change Products).
   *
   * @see https://docs.shoply.gg/api-reference/products/update-a-product
   */
  update(productId: string, params: ProductsUpdateParams, options?: RequestOptions): Promise<ProductsUpdateResult>;
  /**
   * **Delete a product**
   *
   * Removes the product with its variants, pictures and unsold stock. Refused for a product buyers have received license keys from, since those keys are part of their orders: set its visibility to `private` instead.
   *
   * Needs the `products.write` permission (Change Products).
   *
   * @see https://docs.shoply.gg/api-reference/products/delete-a-product
   */
  delete(productId: string, options?: RequestOptions): Promise<ProductsDeleteResult>;
  /**
   * **Set a product's visibility**
   *
   * Changes who can see and buy the product, without sending the rest of it.
   *
   * Needs the `products.write` permission (Change Products).
   *
   * @see https://docs.shoply.gg/api-reference/products/set-a-products-visibility
   */
  setVisibility(productId: string, params: ProductsSetVisibilityParams, options?: RequestOptions): Promise<ProductsSetVisibilityResult>;
  /**
   * **Sort products**
   *
   * Sets the order products are listed in, on the storefront and everywhere else.
   *
   * Needs the `products.write` permission (Change Products).
   *
   * @see https://docs.shoply.gg/api-reference/products/sort-products
   */
  sort(params: ProductsSortParams, options?: RequestOptions): Promise<ProductsSortResult>;
  /**
   * **Change many products**
   *
   * One change made to many products. Only what is sent changes.
   *
   * Needs the `products.write` permission (Change Products).
   *
   * @see https://docs.shoply.gg/api-reference/products/change-many-products
   */
  bulkUpdate(params: ProductsBulkUpdateParams, options?: RequestOptions): Promise<ProductsBulkUpdateResult>;
  /**
   * **Delete many products**
   *
   * Deletes each product as deleting one does. A product buyers have received license keys from is kept, and the answer names the ones that stayed.
   *
   * Needs the `products.write` permission (Change Products).
   *
   * @see https://docs.shoply.gg/api-reference/products/delete-many-products
   */
  bulkDelete(params: ProductsBulkDeleteParams, options?: RequestOptions): Promise<ProductsBulkDeleteResult>;
}

export interface ShoplyResourcesProductImages {
  /**
   * **Upload a product picture**
   *
   * Adds a picture to the product, sent as `multipart/form-data` in a field called `image`. A product holds up to 10. The first one uploaded is the one listings show.
   *
   * Needs the `products.write` permission (Change Products).
   *
   * @see https://docs.shoply.gg/api-reference/product-pictures/upload-a-product-picture
   */
  upload(productId: string, params: FileUpload, options?: RequestOptions): Promise<ProductImagesUploadResult>;
  /**
   * **Sort a product's pictures**
   *
   * Sets the order of the product's pictures, or moves one to the front. The first picture is the one listings show. Send one of the two fields.
   *
   * Needs the `products.write` permission (Change Products).
   *
   * @see https://docs.shoply.gg/api-reference/product-pictures/sort-a-products-pictures
   */
  sort(productId: string, params?: ProductImagesSortParams, options?: RequestOptions): Promise<ProductImagesSortResult>;
  /**
   * **Delete a product picture**
   *
   * Removes one picture from the product.
   *
   * Needs the `products.write` permission (Change Products).
   *
   * @see https://docs.shoply.gg/api-reference/product-pictures/delete-a-product-picture
   */
  delete(productId: string, imageId: string, options?: RequestOptions): Promise<ProductImagesDeleteResult>;
}

export interface ShoplyResourcesStock {
  /**
   * **List a variant's license keys**
   *
   * The license keys a variant has in stock: the unsold ones and nothing else. A key that was delivered belongs to its order and is read there.
   *
   * Needs the `stock.read` permission (Read Stock).
   *
   * @see https://docs.shoply.gg/api-reference/stock/list-a-variants-license-keys
   */
  listKeys(variantId: string, params?: StockListKeysParams, options?: RequestOptions): PagePromise<StockListKeysItem>;
  /**
   * **Add license keys**
   *
   * Adds license keys to a variant's stock, up to 5,000 in one request. A variant holds up to 5,000 unsold keys and a store 100,000.
   *
   * A key sent twice is stocked twice, which is how one key is sold to several buyers. `duplicates` in the answer counts the ones that matched stock the variant already had, so sending the same batch a second time by mistake shows.
   *
   * Needs the `stock.write` permission (Change Stock).
   *
   * @see https://docs.shoply.gg/api-reference/stock/add-license-keys
   */
  addKeys(variantId: string, params: StockAddKeysParams, options?: RequestOptions): Promise<StockAddKeysResult>;
  /**
   * **Replace a variant's license keys**
   *
   * Makes the variant's unsold stock exactly the keys sent. Keys already delivered are not touched: they are order history, not stock.
   *
   * Needs the `stock.write` permission (Change Stock).
   *
   * @see https://docs.shoply.gg/api-reference/stock/replace-a-variants-license-keys
   */
  replaceKeys(variantId: string, params: StockReplaceKeysParams, options?: RequestOptions): Promise<StockReplaceKeysResult>;
  /**
   * **Delete license keys**
   *
   * Deletes the unsold keys among the ones named. `removed` in the answer can be lower than the number sent: a key sold in the meantime stays with its order.
   *
   * Needs the `stock.write` permission (Change Stock).
   *
   * @see https://docs.shoply.gg/api-reference/stock/delete-license-keys
   */
  deleteKeys(variantId: string, params: StockDeleteKeysParams, options?: RequestOptions): Promise<StockDeleteKeysResult>;
  /**
   * **Delete a license key**
   *
   * Deletes one unsold key. Refused for a key that has been sold.
   *
   * Needs the `stock.write` permission (Change Stock).
   *
   * @see https://docs.shoply.gg/api-reference/stock/delete-a-license-key
   */
  deleteKey(variantId: string, keyId: string, options?: RequestOptions): Promise<StockDeleteKeyResult>;
  /**
   * **List a variant's files**
   *
   * The files a variant delivers to its buyers.
   *
   * Needs the `stock.read` permission (Read Stock).
   *
   * @see https://docs.shoply.gg/api-reference/stock/list-a-variants-files
   */
  listFiles(variantId: string, options?: RequestOptions): Promise<StockListFilesResult>;
  /**
   * **Start a file upload**
   *
   * The first of three steps to give a variant a file to deliver. This one says what the file is and answers a signed address to send it to. Then send the file itself to that address with a `PUT`. Then call "Finish a file upload".
   *
   * A variant holds up to 3 files of up to 100 MB each, and a store up to 100 files and 5 GB. Accepted: ZIP, RAR, 7z, PDF, MP4, MP3, WAV, EPUB, EXE, DMG, MSI and APK.
   *
   * Needs the `stock.write` permission (Change Stock).
   *
   * @see https://docs.shoply.gg/api-reference/stock/start-a-file-upload
   */
  addFile(variantId: string, params: StockAddFileParams, options?: RequestOptions): Promise<StockAddFileResult>;
  /**
   * **Finish a file upload**
   *
   * The last step of adding a file: says the file has been sent. Shoply checks it arrived and is the size that was said, and from then on buyers of the variant receive it.
   *
   * Needs the `stock.write` permission (Change Stock).
   *
   * @see https://docs.shoply.gg/api-reference/stock/finish-a-file-upload
   */
  finishFile(variantId: string, fileId: string, options?: RequestOptions): Promise<StockFinishFileResult>;
  /**
   * **Delete a file**
   *
   * Removes a file from the variant. Buyers who already have a link to it can no longer download it.
   *
   * Needs the `stock.write` permission (Change Stock).
   *
   * @see https://docs.shoply.gg/api-reference/stock/delete-a-file
   */
  deleteFile(variantId: string, fileId: string, options?: RequestOptions): Promise<StockDeleteFileResult>;
}

export interface ShoplyResourcesCategories {
  /**
   * **List categories**
   *
   * Every category the store has, in the store's own order, each with the products in it. A store holds up to 150, so the list is not paged.
   *
   * Needs the `categories.read` permission (Read Categories).
   *
   * @see https://docs.shoply.gg/api-reference/categories/list-categories
   */
  list(params?: CategoriesListParams, options?: RequestOptions): Promise<CategoriesListResult>;
  /**
   * **Create a category**
   *
   * Adds a category, with the products that go in it. A store holds up to 150.
   *
   * Needs the `categories.write` permission (Change Categories).
   *
   * @see https://docs.shoply.gg/api-reference/categories/create-a-category
   */
  create(params: CategoriesCreateParams, options?: RequestOptions): Promise<CategoriesCreateResult>;
  /**
   * **Update a category**
   *
   * Saves the category whole: send every field as it should be. `productIds` is the exception: left out, the products in the category stay as they are.
   *
   * Needs the `categories.write` permission (Change Categories).
   *
   * @see https://docs.shoply.gg/api-reference/categories/update-a-category
   */
  update(categoryId: string, params: CategoriesUpdateParams, options?: RequestOptions): Promise<CategoriesUpdateResult>;
  /**
   * **Delete a category**
   *
   * Removes the category. The products that were in it are not deleted.
   *
   * Needs the `categories.write` permission (Change Categories).
   *
   * @see https://docs.shoply.gg/api-reference/categories/delete-a-category
   */
  delete(categoryId: string, options?: RequestOptions): Promise<CategoriesDeleteResult>;
  /**
   * **Sort categories**
   *
   * Sets the order categories are listed in.
   *
   * Needs the `categories.write` permission (Change Categories).
   *
   * @see https://docs.shoply.gg/api-reference/categories/sort-categories
   */
  sort(params: CategoriesSortParams, options?: RequestOptions): Promise<CategoriesSortResult>;
  /**
   * **Upload a category's picture**
   *
   * Gives the category its one picture, sent as `multipart/form-data` in a field called `image`. A picture it already had is replaced.
   *
   * Needs the `categories.write` permission (Change Categories).
   *
   * @see https://docs.shoply.gg/api-reference/categories/upload-a-categorys-picture
   */
  uploadImage(categoryId: string, params: FileUpload, options?: RequestOptions): Promise<CategoriesUploadImageResult>;
  /**
   * **Delete a category's picture**
   *
   * Removes the category's picture.
   *
   * Needs the `categories.write` permission (Change Categories).
   *
   * @see https://docs.shoply.gg/api-reference/categories/delete-a-categorys-picture
   */
  deleteImage(categoryId: string, options?: RequestOptions): Promise<CategoriesDeleteImageResult>;
}

export interface ShoplyResourcesUpsells {
  /**
   * **List upsells**
   *
   * Every upsell the store has, a kind at a time in the store's order, with the times each was shown, the paid orders that took it and what those lines came to over a period. A store holds up to 200.
   *
   * Needs the `upsells.read` permission (Read Upsells).
   *
   * @see https://docs.shoply.gg/api-reference/upsells/list-upsells
   */
  list(params?: UpsellsListParams, options?: RequestOptions): Promise<UpsellsListResult>;
  /**
   * **Create an upsell**
   *
   * Adds an upsell of one kind. What it needs depends on the kind: see each field. A store holds up to 200.
   *
   * Needs the `upsells.write` permission (Change Upsells).
   *
   * @see https://docs.shoply.gg/api-reference/upsells/create-an-upsell
   */
  create(params: UpsellsCreateParams, options?: RequestOptions): Promise<UpsellsCreateResult>;
  /**
   * **Sort upsells**
   *
   * Puts one kind's upsells in a new order. The first that applies is the one shown where only one is.
   *
   * Needs the `upsells.write` permission (Change Upsells).
   *
   * @see https://docs.shoply.gg/api-reference/upsells/sort-upsells
   */
  sort(params: UpsellsSortParams, options?: RequestOptions): Promise<UpsellsSortResult>;
  /**
   * **Change upsell settings**
   *
   * Whether a product's page also shows what the store's own orders most often have with it.
   *
   * Needs the `upsells.write` permission (Change Upsells).
   *
   * @see https://docs.shoply.gg/api-reference/upsells/change-upsell-settings
   */
  settings(params: UpsellsSettingsParams, options?: RequestOptions): Promise<UpsellsSettingsResult>;
  /**
   * **Update an upsell**
   *
   * Saves the upsell whole: send every field as it should be, not only what changed. Its kind does not change.
   *
   * Needs the `upsells.write` permission (Change Upsells).
   *
   * @see https://docs.shoply.gg/api-reference/upsells/update-an-upsell
   */
  update(upsellId: string, params: UpsellsUpdateParams, options?: RequestOptions): Promise<UpsellsUpdateResult>;
  /**
   * **Delete an upsell**
   *
   * Removes the upsell. Orders that took it keep their lines as they were.
   *
   * Needs the `upsells.write` permission (Change Upsells).
   *
   * @see https://docs.shoply.gg/api-reference/upsells/delete-an-upsell
   */
  delete(upsellId: string, options?: RequestOptions): Promise<UpsellsDeleteResult>;
  /**
   * **Switch an upsell on or off**
   *
   * Changes whether the upsell is offered, without sending the rest of it.
   *
   * Needs the `upsells.write` permission (Change Upsells).
   *
   * @see https://docs.shoply.gg/api-reference/upsells/switch-an-upsell-on-or-off
   */
  setEnabled(upsellId: string, params: UpsellsSetEnabledParams, options?: RequestOptions): Promise<UpsellsSetEnabledResult>;
}

export interface ShoplyResourcesSubscriptions {
  /**
   * **List subscriptions**
   *
   * The store's subscriptions, newest first, 25 a page. A subscription's `status` is `active`, `renewal_due` (its renewal is made and waits to be paid), `past_due` (the period ran out unpaid: it ends after the store's grace days), `paused`, `cancelling` (it ends when what was paid for runs out), `cancelled` or `expired`. `renewsWith` is the card kept for one paid through Stripe, NMI, Authorize.net, Tagada, Mollie, MONEI, Adyen or Square (`provider`, `name`, `label` once named, and `canChange`, whether its buyer may give another on Stripe's own page), and null for one renewed by email; `autoRenews` says whether its next renewal is charged to it by itself. `meta.figures` is what the dashboard shows over the list, `meta.attention` the past due ones, and `meta.plans` which options are sold as subscriptions.
   *
   * Needs the `subscriptions.read` permission (Read Subscriptions).
   *
   * @see https://docs.shoply.gg/api-reference/subscriptions/list-subscriptions
   */
  list(params?: SubscriptionsListParams, options?: RequestOptions): PagePromise<SubscriptionsListItem>;
  /**
   * **Get subscription settings**
   *
   * What a buyer may do for themselves from their customer panel, when renewal reminders go, how long a past due one is kept, and whether an ended one's keys and files are taken back. `meta.plans` is the store's plans and `meta.limits` the ceilings each setting is held to.
   *
   * Needs the `subscriptions.read` permission (Read Subscriptions).
   *
   * @see https://docs.shoply.gg/api-reference/subscriptions/get-subscription-settings
   */
  settings(options?: RequestOptions): Promise<SubscriptionsSettingsResult>;
  /**
   * **Change subscription settings**
   *
   * Changes the settings named and keeps the rest. A change reaches every subscription from then on, the running ones included.
   *
   * Needs the `subscriptions.write` permission (Change Subscriptions).
   *
   * @see https://docs.shoply.gg/api-reference/subscriptions/change-subscription-settings
   */
  updateSettings(params?: SubscriptionsUpdateSettingsParams, options?: RequestOptions): Promise<SubscriptionsUpdateSettingsResult>;
  /**
   * **List subscription plans**
   *
   * Which of the store's options are sold as subscriptions, each with how often it renews and how many subscriptions to it are running. An option on this list is sold only as a subscription, and bought on its own.
   *
   * Needs the `subscriptions.read` permission (Read Subscriptions).
   *
   * @see https://docs.shoply.gg/api-reference/subscriptions/list-subscription-plans
   */
  plans(options?: RequestOptions): Promise<SubscriptionsPlansResult>;
  /**
   * **Sell options as subscriptions**
   *
   * Makes options subscriptions, or changes how often one renews. A change reaches new subscriptions only: a running one renews as it started. A store has up to 200 plans. The answer is every plan the store has.
   *
   * Needs the `subscriptions.write` permission (Change Subscriptions).
   *
   * @see https://docs.shoply.gg/api-reference/subscriptions/sell-options-as-subscriptions
   */
  savePlans(params: SubscriptionsSavePlansParams, options?: RequestOptions): Promise<SubscriptionsSavePlansResult>;
  /**
   * **Sell an option once again**
   *
   * The option is sold once again from now on. Subscriptions already running to it go on renewing until they are cancelled. The answer is every plan left.
   *
   * Needs the `subscriptions.write` permission (Change Subscriptions).
   *
   * @see https://docs.shoply.gg/api-reference/subscriptions/sell-an-option-once-again
   */
  removePlan(variantId: string, options?: RequestOptions): Promise<SubscriptionsRemovePlanResult>;
  /**
   * **Get a subscription**
   *
   * The subscription as `data`, with `meta.history` (what happened to it, newest first) and `meta.orders` (its first order and every renewal). An order's `subscriptionId` names the subscription it started or renewed.
   *
   * Needs the `subscriptions.read` permission (Read Subscriptions).
   *
   * @see https://docs.shoply.gg/api-reference/subscriptions/get-a-subscription
   */
  show(subscriptionId: string, options?: RequestOptions): Promise<SubscriptionsShowResult>;
  /**
   * **Cancel a subscription**
   *
   * At the end of what was paid for, or straight away. A past due or paused one ends straight away whichever is asked. A renewal waiting to be paid is cancelled. Whatever the store lets its buyers do, the store may always cancel. The subscription as `data`, with `meta.history` (what happened to it, newest first) and `meta.orders` (its first order and every renewal).
   *
   * Needs the `subscriptions.write` permission (Change Subscriptions).
   *
   * @see https://docs.shoply.gg/api-reference/subscriptions/cancel-a-subscription
   */
  cancel(subscriptionId: string, params?: SubscriptionsCancelParams, options?: RequestOptions): Promise<SubscriptionsCancelResult>;
  /**
   * **Undo a cancellation**
   *
   * Takes back a cancellation that has not taken effect yet, so it renews again. Refused with 409 for one that has ended, or whose option was deleted. The subscription as `data`, with `meta.history` (what happened to it, newest first) and `meta.orders` (its first order and every renewal).
   *
   * Needs the `subscriptions.write` permission (Change Subscriptions).
   *
   * @see https://docs.shoply.gg/api-reference/subscriptions/undo-a-cancellation
   */
  undo(subscriptionId: string, options?: RequestOptions): Promise<SubscriptionsUndoResult>;
  /**
   * **Pause a subscription**
   *
   * Starts at once: nothing renews, a renewal waiting to be paid is cancelled, and where the store takes access back its keys and files are hidden until it resumes. The days left of what was paid for are kept: it renews that much later. It resumes by itself after `days`. The buyer is emailed. The subscription as `data`, with `meta.history` (what happened to it, newest first) and `meta.orders` (its first order and every renewal).
   *
   * Needs the `subscriptions.write` permission (Change Subscriptions).
   *
   * @see https://docs.shoply.gg/api-reference/subscriptions/pause-a-subscription
   */
  pause(subscriptionId: string, params: SubscriptionsPauseParams, options?: RequestOptions): Promise<SubscriptionsPauseResult>;
  /**
   * **Resume a subscription**
   *
   * Ends a pause now, whoever paused it. Refused with 409 for one that is not paused. The subscription as `data`, with `meta.history` (what happened to it, newest first) and `meta.orders` (its first order and every renewal).
   *
   * Needs the `subscriptions.write` permission (Change Subscriptions).
   *
   * @see https://docs.shoply.gg/api-reference/subscriptions/resume-a-subscription
   */
  resume(subscriptionId: string, options?: RequestOptions): Promise<SubscriptionsResumeResult>;
  /**
   * **Add free days**
   *
   * Moves its next renewal later by that many days, at no charge, and every renewal after it with it. The subscription as `data`, with `meta.history` (what happened to it, newest first) and `meta.orders` (its first order and every renewal).
   *
   * Needs the `subscriptions.write` permission (Change Subscriptions).
   *
   * @see https://docs.shoply.gg/api-reference/subscriptions/add-free-days
   */
  addDays(subscriptionId: string, params: SubscriptionsAddDaysParams, options?: RequestOptions): Promise<SubscriptionsAddDaysResult>;
  /**
   * **Email the renewal again**
   *
   * Sends the buyer the link to pay their renewal again, for one whose renewal is waiting. Once an hour a subscription, and 20 every 10 minutes a store, whoever asks: after that the answer is 429. Refused with 409 where no renewal is waiting. The subscription as `data`, with `meta.history` (what happened to it, newest first) and `meta.orders` (its first order and every renewal).
   *
   * Needs the `subscriptions.write` permission (Change Subscriptions). It sends an email, and is counted against a budget of its own: 60 in ten minutes for each key.
   *
   * @see https://docs.shoply.gg/api-reference/subscriptions/email-the-renewal-again
   */
  email(subscriptionId: string, options?: RequestOptions): Promise<SubscriptionsEmailResult>;
}

export interface ShoplyResourcesOrders {
  /**
   * **List orders**
   *
   * The store's orders, a page at a time, newest first unless sorted otherwise. `meta.statusCounts` says how many orders are in each status, and `meta.stats` what the orders matched come to.
   *
   * Needs the `orders.read` permission (Read Orders).
   *
   * @see https://docs.shoply.gg/api-reference/orders/list-orders
   */
  list(params?: OrdersListParams, options?: RequestOptions): PagePromise<OrdersListItem>;
  /**
   * **Export orders**
   *
   * The orders the same filters would list, as a CSV file: a row an order with every field its page shows (when it was paid, the fee, tax, balance and affiliate in it, the currency it was charged in, the billing address), or a row a product line with `rows=lines`. The first thirteen columns are always Order ID, Created, Email, Status, Payment, Currency, Subtotal, Discount, Total, Coupon, Country, Items and Products, in that order. No delivered key is in it. Every order the filters match is in the file, however many: it is sent as it is read, with no length given. Add `check=1` for `{ rows }`, how many it would have, which is not counted. A store exports at most 30 files every 10 minutes, orders, customers, fraud events and blacklist rules together, whoever asks: after that the answer is 429.
   *
   * Needs the `orders.read` permission (Read Orders). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/orders/export-orders
   */
  export(params?: OrdersExportParams, options?: RequestOptions): Promise<Response>;
  /**
   * **Get an order**
   *
   * One order with everything its page shows: its lines and what each delivered, its payments, the buyer, its timeline, where it came from, `refund`, which says which ways it can be refunded, and `requests`: what Shoply sent your servers about it, each try of each webhook about the order and each line's dynamic delivery, newest first, with the first 300 characters of what came back. `customPayment` is for an order paid with one of your custom payment methods, and null for any other: the method's name, `status` (`open`, `review` while it waits for you to approve or reject it, `paid` or `rejected`), the amount, and `proof`, what the buyer sent when they said they paid (the reference, whether a proof of payment was sent, and when).
   *
   * Needs the `orders.read` permission (Read Orders).
   *
   * @see https://docs.shoply.gg/api-reference/orders/get-an-order
   */
  show(orderId: string, options?: RequestOptions): Promise<OrdersShowResult>;
  /**
   * **Get an order's network**
   *
   * What is known about the connection the order was placed from: its provider, and whether it looks like a VPN, a proxy or a data centre. Asked of a lookup service when it is called, so it is a route of its own.
   *
   * Needs the `orders.read` permission (Read Orders). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/orders/get-an-orders-network
   */
  network(orderId: string, options?: RequestOptions): Promise<OrdersNetworkResult>;
  /**
   * **Get an order's PDF**
   *
   * The order's invoice as a PDF file. Every order has one, paid or not.
   *
   * Needs the `orders.read` permission (Read Orders). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/orders/get-an-orders-pdf
   */
  pdf(orderId: string, options?: RequestOptions): Promise<Response>;
  /**
   * **Mark an order as paid**
   *
   * Completes a pending or cancelled order as a payment would: it is delivered, its receipt is sent and it counts as revenue. For money that reached you some other way.
   *
   * Refused if any line cannot be delivered in full, so an order is never half delivered. Refused for an order that was refunded or charged back, and for a checkout the buyer never pressed Pay on, which has nobody to deliver to.
   *
   * Needs the `orders.fulfil` permission (Deliver Orders).
   *
   * @see https://docs.shoply.gg/api-reference/orders/mark-an-order-as-paid
   */
  markPaid(orderId: string, params?: OrdersMarkPaidParams, options?: RequestOptions): Promise<OrdersMarkPaidResult>;
  /**
   * **Refund an order**
   *
   * Refunds a completed order, all of it. Which `destination` an order can take is in `refund` on the order: a payment method that cannot send money back (crypto, always) can only be refunded as store credit or recorded.
   *
   * Send an `Idempotency-Key` with this request. The order is marked refunded only once the payment provider has said the money is on its way, or the buyer has been credited.
   *
   * Needs the `orders.refund` permission (Refund Orders).
   *
   * @see https://docs.shoply.gg/api-reference/orders/refund-an-order
   */
  refund(orderId: string, params: OrdersRefundParams, options?: RequestOptions): Promise<OrdersRefundResult>;
  /**
   * **Deliver an order again**
   *
   * Gives the buyer fresh license keys for the order's lines and emails them. The keys those lines held before are revoked, not returned to stock, so this costs stock: it is for a key that did not work.
   *
   * It goes to the order's own email address. Sending an order to another address is done in the dashboard.
   *
   * One order is delivered again at most ten times an hour, whoever asks: after that the answer is 429.
   *
   * Needs the `orders.fulfil` permission (Deliver Orders).
   *
   * @see https://docs.shoply.gg/api-reference/orders/deliver-an-order-again
   */
  redeliver(orderId: string, params?: OrdersRedeliverParams, options?: RequestOptions): Promise<OrdersRedeliverResult>;
  /**
   * **Retry a dynamic delivery**
   *
   * Asks your delivery endpoint again for the lines whose dynamic delivery failed. Nothing is revoked: those lines never delivered anything. A store may ask for 150 of these in ten minutes.
   *
   * Needs the `orders.fulfil` permission (Deliver Orders).
   *
   * @see https://docs.shoply.gg/api-reference/orders/retry-a-dynamic-delivery
   */
  retryDelivery(orderId: string, params?: OrdersRetryDeliveryParams, options?: RequestOptions): Promise<OrdersRetryDeliveryResult>;
  /**
   * **Send an order's email again**
   *
   * Sends the order's delivery email again, with what it delivered, to the order's own email address. One customer's order emails are sent again at most five times an hour at your store, across all their orders and whoever asks: after that the answer is 429.
   *
   * Needs the `orders.fulfil` permission (Deliver Orders). It sends an email, and is counted against a budget of its own: 60 in ten minutes for each key.
   *
   * @see https://docs.shoply.gg/api-reference/orders/send-an-orders-email-again
   */
  resendEmail(orderId: string, options?: RequestOptions): Promise<OrdersResendEmailResult>;
  /**
   * **Approve a payment to check**
   *
   * Approves the payment a buyer says they made with one of the store's custom payment methods, and completes the order as a payment would: its keys are delivered and its receipt sent. Only for an order whose payment waits for review (an `order.payment_submitted` webhook says so). Shoply never sees that money: approve once you have seen it arrive. Answers the order's ID, its `status`, and `dynamic`, what each dynamic delivery answered. One that cannot deliver (short of stock) is refused with why, and still waits.
   *
   * Needs the `orders.fulfil` permission (Deliver Orders).
   *
   * @see https://docs.shoply.gg/api-reference/orders/approve-a-payment-to-check
   */
  approvePayment(orderId: string, options?: RequestOptions): Promise<OrdersApprovePaymentResult>;
  /**
   * **Reject a payment to check**
   *
   * Rejects the payment a buyer says they made with a custom method, and cancels the order. Its coupon's use is handed back, and the buyer is not emailed.
   *
   * Needs the `orders.fulfil` permission (Deliver Orders).
   *
   * @see https://docs.shoply.gg/api-reference/orders/reject-a-payment-to-check
   */
  rejectPayment(orderId: string, options?: RequestOptions): Promise<OrdersRejectPaymentResult>;
  /**
   * **Get an order's proof of payment**
   *
   * The picture a buyer sent with a payment made with a custom method, as the file itself: a PNG, JPEG or WebP. Under the permission that approves the payment, since it is what the payment is checked by. 404 where the order has none.
   *
   * Needs the `orders.fulfil` permission (Deliver Orders).
   *
   * @see https://docs.shoply.gg/api-reference/orders/get-an-orders-proof-of-payment
   */
  proof(orderId: string, options?: RequestOptions): Promise<OrdersProofResult>;
  /**
   * **Write an order's note**
   *
   * Sets the store's own note on the order. The buyer never sees it.
   *
   * Needs the `orders.write` permission (Change Orders).
   *
   * @see https://docs.shoply.gg/api-reference/orders/write-an-orders-note
   */
  setNote(orderId: string, params: OrdersSetNoteParams, options?: RequestOptions): Promise<OrdersSetNoteResult>;
}

export interface ShoplyResourcesInvoices {
  /**
   * **List invoices**
   *
   * The invoices the store has raised, a page at a time, newest first. An invoice is an order the store made for a buyer to pay: `orderId` is that order, and `payUrl` the page it is paid on. A payment link is listed with them (`kind` is `link`): an amount and what it is for (`title`), with no buyer on it (`email` is empty) until it is emailed to somebody or paid. One made in another currency than the store's says what the buyer is asked for in `charge`.
   *
   * Needs the `invoices.read` permission (Read Invoices).
   *
   * @see https://docs.shoply.gg/api-reference/invoices/list-invoices
   */
  list(params?: InvoicesListParams, options?: RequestOptions): PagePromise<InvoicesListItem>;
  /**
   * **Create an invoice**
   *
   * Raises an invoice: an order for a buyer to pay, with a page to pay it on. This is how a script makes an order. The answer has the order's ID (`orderId`) and the page it is paid on (`payUrl`), which you can hand to the buyer yourself.
   *
   * With `send` on, the invoice is also emailed to the buyer with its PDF. A store may email one invoice in five minutes, so a script that makes many leaves `send` off and delivers the link itself.
   *
   * A product line costs what the product costs. For any other price, add a line of your own with a `description` and a `unitPrice`. An invoice carries no automatic tax. A store may hold up to 2,000 unpaid invoices at once.
   *
   * Needs the `invoices.write` permission (Raise Invoices). It makes an order, and is counted against a budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/invoices/create-an-invoice
   */
  create(params: InvoicesCreateParams, options?: RequestOptions): Promise<InvoicesCreateResult>;
  /**
   * **Send an invoice**
   *
   * Emails the invoice to the address on it, with its PDF. Only while it can still be paid, and one invoice email a store in five minutes.
   *
   * A payment link has no address on it until it is sent or paid, so the first send names one in `email`. The link is that buyer's from then on: the page it is paid on stops asking who is paying, and a later send with no `email` goes to the same address. It cannot be sent to another address once somebody has started paying it (`link_in_use`).
   *
   * A link that can be paid more than once stays nobody's: every send names an `email`, which is only where that one email goes, and it may be sent to as many people as you like at the same pace.
   *
   * Needs the `invoices.write` permission (Raise Invoices). It sends an email, and is counted against a budget of its own: 60 in ten minutes for each key.
   *
   * @see https://docs.shoply.gg/api-reference/invoices/send-an-invoice
   */
  send(orderId: string, params?: InvoicesSendParams, options?: RequestOptions): Promise<InvoicesSendResult>;
  /**
   * **Create a payment link**
   *
   * Makes a payment link: an invoice for an amount, with no buyer on it. `payUrl` in the answer is the link. Whoever opens it gives their email address and pays, and the order is theirs. It is an invoice in every other way: it is listed with them, has a number and a PDF, and is cancelled if it is not paid in seven days.
   *
   * A link is paid once unless `uses` says more. A link for more than one payment is never the order that is paid: each person who presses Pay on it is given an order and an invoice of their own, which names the link in `linkOf`, and the link's `uses` says how many times it has been paid and how many are left. The count is asked when Pay is pressed, so two people who press it for the last use at the same moment can both pay.
   *
   * It may be paid with whichever payment methods the store has switched on when it is made. It counts toward the 2,000 unpaid invoices a store may hold at once. To email it to somebody, send it (Send an invoice) with their address.
   *
   * With `currency`, the amount is in that currency and the buyer is charged exactly it, where the store may charge in it: its own currency always, and the others only while adaptive pricing is on. The order is then for the amount's worth in the store's currency at the rate of the moment.
   *
   * With `items`, the link sells products in place of an amount: it is for what they cost, in the store's own currency, and whoever pays is sent them as any buyer is. `amount` and `description` are then left out. What it sells has to be in stock when the link is made, and again each time somebody pays through a link for several payments (`out_of_stock`).
   *
   * It may be paid with every payment method the store has switched on, or with the ones named in `gateways`. It is open for seven days, or until `expiresAt`, or for `dueDays` days, up to 365.
   *
   * Needs the `invoices.write` permission (Raise Invoices). It makes an order, and is counted against a budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/invoices/create-a-payment-link
   */
  link(params?: InvoicesLinkParams, options?: RequestOptions): Promise<InvoicesLinkResult>;
  /**
   * **Delete a payment link**
   *
   * Removes a payment link nobody has paid or started to pay. Its address stops working for anyone who has it.
   *
   * Only a payment link, never an invoice (`not_a_link`). Not one that was paid, which is an order (`link_paid`), and not one somebody has pressed Pay on, in case their payment arrives (`link_in_use`): that one closes by itself on its due day.
   *
   * Needs the `invoices.write` permission (Raise Invoices).
   *
   * @see https://docs.shoply.gg/api-reference/invoices/delete-a-payment-link
   */
  deleteLink(orderId: string, options?: RequestOptions): Promise<InvoicesDeleteLinkResult>;
}

export interface ShoplyResourcesReviews {
  /**
   * **List reviews**
   *
   * The reviews left on the store's orders, a page at a time, newest first. A buyer leaves one for a paid order; an order nobody reviewed is given five stars by itself after seven days. `meta.summary` is the whole store's average and counts, whatever the filters. A review the store flagged for removal carries `flag`: how it stands (`open`, or `kept` with the answer given) and why it was flagged. One that was removed is no longer listed.
   *
   * Needs the `reviews.read` permission (Read Reviews).
   *
   * @see https://docs.shoply.gg/api-reference/reviews/list-reviews
   */
  list(params?: ReviewsListParams, options?: RequestOptions): PagePromise<ReviewsListItem>;
}

export interface ShoplyResourcesCoupons {
  /**
   * **List coupons**
   *
   * The store's coupons, a page at a time, each with how often it has been used and what it has taken off. `meta.counts` says how many there are in each state.
   *
   * Needs the `coupons.read` permission (Read Coupons).
   *
   * @see https://docs.shoply.gg/api-reference/coupons/list-coupons
   */
  list(params?: CouponsListParams, options?: RequestOptions): PagePromise<CouponsListItem>;
  /**
   * **Create a coupon**
   *
   * Adds a coupon. Its expiry cannot already have passed.
   *
   * Needs the `coupons.write` permission (Change Coupons).
   *
   * @see https://docs.shoply.gg/api-reference/coupons/create-a-coupon
   */
  create(params: CouponsCreateParams, options?: RequestOptions): Promise<CouponsCreateResult>;
  /**
   * **Update a coupon**
   *
   * Saves the coupon whole: send every field as it should be, not only what changed. A field left out goes back to its default. The exceptions are `appliesTo` and `targets`, which stay as they are when `appliesTo` is left out.
   *
   * Needs the `coupons.write` permission (Change Coupons).
   *
   * @see https://docs.shoply.gg/api-reference/coupons/update-a-coupon
   */
  update(couponId: string, params: CouponsUpdateParams, options?: RequestOptions): Promise<CouponsUpdateResult>;
  /**
   * **Delete a coupon**
   *
   * Removes the coupon. Orders that used it keep the code they were placed with.
   *
   * Needs the `coupons.write` permission (Change Coupons).
   *
   * @see https://docs.shoply.gg/api-reference/coupons/delete-a-coupon
   */
  delete(couponId: string, options?: RequestOptions): Promise<CouponsDeleteResult>;
  /**
   * **Sort coupons**
   *
   * Sets the order of the coupons in one coupon category. Send every coupon of that category, in the order they should be in.
   *
   * Needs the `coupons.write` permission (Change Coupons).
   *
   * @see https://docs.shoply.gg/api-reference/coupons/sort-coupons
   */
  sort(params: CouponsSortParams, options?: RequestOptions): Promise<CouponsSortResult>;
}

export interface ShoplyResourcesCouponCategories {
  /**
   * **List coupon categories**
   *
   * The categories the store files its coupons in, in the store's own order, each with how many coupons it holds. Two are the store's from the start and cannot be renamed or deleted: Default, and First Timer, which holds the codes the first-order reward makes.
   *
   * Needs the `coupons.read` permission (Read Coupons).
   *
   * @see https://docs.shoply.gg/api-reference/coupon-categories/list-coupon-categories
   */
  list(options?: RequestOptions): Promise<CouponCategoriesListResult>;
  /**
   * **Create a coupon category**
   *
   * Adds a category to file coupons in. A store holds up to 30 of its own.
   *
   * Needs the `coupons.write` permission (Change Coupons).
   *
   * @see https://docs.shoply.gg/api-reference/coupon-categories/create-a-coupon-category
   */
  create(params: CouponCategoriesCreateParams, options?: RequestOptions): Promise<CouponCategoriesCreateResult>;
  /**
   * **Update a coupon category**
   *
   * Renames a category or changes its note. The two the store starts with are refused with `system_category`.
   *
   * Needs the `coupons.write` permission (Change Coupons).
   *
   * @see https://docs.shoply.gg/api-reference/coupon-categories/update-a-coupon-category
   */
  update(categoryId: string, params: CouponCategoriesUpdateParams, options?: RequestOptions): Promise<CouponCategoriesUpdateResult>;
  /**
   * **Delete a coupon category**
   *
   * Removes the category. The coupons in it are not deleted: they move to Default, since buyers may be holding their codes.
   *
   * Needs the `coupons.write` permission (Change Coupons).
   *
   * @see https://docs.shoply.gg/api-reference/coupon-categories/delete-a-coupon-category
   */
  delete(categoryId: string, options?: RequestOptions): Promise<CouponCategoriesDeleteResult>;
  /**
   * **Sort coupon categories**
   *
   * Sets the order the categories are listed in.
   *
   * Needs the `coupons.write` permission (Change Coupons).
   *
   * @see https://docs.shoply.gg/api-reference/coupon-categories/sort-coupon-categories
   */
  sort(params: CouponCategoriesSortParams, options?: RequestOptions): Promise<CouponCategoriesSortResult>;
}

export interface ShoplyResourcesCouponPopup {
  /**
   * **Get the coupon pop-up**
   *
   * The pop-up that offers visitors of the storefront a coupon. A store that never set one up reads back the defaults, switched off. `unusable` says why buyers are not being shown it when its coupon no longer works.
   *
   * Needs the `coupons.read` permission (Read Coupons).
   *
   * @see https://docs.shoply.gg/api-reference/coupon-pop-up/get-the-coupon-pop-up
   */
  show(options?: RequestOptions): Promise<CouponPopupShowResult>;
  /**
   * **Update the coupon pop-up**
   *
   * Saves the pop-up whole. Switched off, it is saved as it is, finished or not. Switched on, it needs a title and a coupon buyers can use today.
   *
   * Needs the `coupons.write` permission (Change Coupons).
   *
   * @see https://docs.shoply.gg/api-reference/coupon-pop-up/update-the-coupon-pop-up
   */
  update(params?: CouponPopupUpdateParams, options?: RequestOptions): Promise<CouponPopupUpdateResult>;
}

export interface ShoplyResourcesSales {
  /**
   * **List sales**
   *
   * Every sale the store has, newest first. A store holds up to 30, so the list is not paged.
   *
   * Needs the `sales.read` permission (Read Sales).
   *
   * @see https://docs.shoply.gg/api-reference/sales/list-sales
   */
  list(options?: RequestOptions): Promise<SalesListResult>;
  /**
   * **Create a sale**
   *
   * Adds a sale. A store holds up to 30.
   *
   * Needs the `sales.write` permission (Change Sales).
   *
   * @see https://docs.shoply.gg/api-reference/sales/create-a-sale
   */
  create(params: SalesCreateParams, options?: RequestOptions): Promise<SalesCreateResult>;
  /**
   * **Get a sale**
   *
   * One sale, with the products it covers and its coupon exceptions.
   *
   * Needs the `sales.read` permission (Read Sales).
   *
   * @see https://docs.shoply.gg/api-reference/sales/get-a-sale
   */
  show(saleId: string, options?: RequestOptions): Promise<SalesShowResult>;
  /**
   * **Update a sale**
   *
   * Saves the sale whole: send every field as it should be, not only what changed.
   *
   * Needs the `sales.write` permission (Change Sales).
   *
   * @see https://docs.shoply.gg/api-reference/sales/update-a-sale
   */
  update(saleId: string, params: SalesUpdateParams, options?: RequestOptions): Promise<SalesUpdateResult>;
  /**
   * **Delete a sale**
   *
   * Removes the sale. Orders placed during it keep the prices they were charged.
   *
   * Needs the `sales.write` permission (Change Sales).
   *
   * @see https://docs.shoply.gg/api-reference/sales/delete-a-sale
   */
  delete(saleId: string, options?: RequestOptions): Promise<SalesDeleteResult>;
  /**
   * **Switch a sale on or off**
   *
   * Changes whether the sale runs, without sending the rest of it.
   *
   * Needs the `sales.write` permission (Change Sales).
   *
   * @see https://docs.shoply.gg/api-reference/sales/switch-a-sale-on-or-off
   */
  setEnabled(saleId: string, params: SalesSetEnabledParams, options?: RequestOptions): Promise<SalesSetEnabledResult>;
}

export interface ShoplyResourcesBlog {
  /**
   * **List blog categories and posts**
   *
   * Every blog category in the store's own order, each with its posts in theirs, drafts included, without their text. A store holds up to 20 categories and a category up to 15 posts.
   *
   * Needs the `blog.read` permission (Read Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/list-blog-categories-and-posts
   */
  list(options?: RequestOptions): Promise<BlogListResult>;
}

export interface ShoplyResourcesBlogCategories {
  /**
   * **Create a blog category**
   *
   * Adds a category for posts to go in. A category with no published post is nowhere on the store.
   *
   * Needs the `blog.write` permission (Change Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/create-a-blog-category
   */
  create(params: BlogCategoriesCreateParams, options?: RequestOptions): Promise<BlogCategoriesCreateResult>;
  /**
   * **Update a blog category**
   *
   * Saves the category's name, description and address. A changed address is safe: the old one leads to the new.
   *
   * Needs the `blog.write` permission (Change Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/update-a-blog-category
   */
  update(categoryId: string, params: BlogCategoriesUpdateParams, options?: RequestOptions): Promise<BlogCategoriesUpdateResult>;
  /**
   * **Delete a blog category**
   *
   * Removes a category that has no posts. One that still has posts is refused with `blog_category_not_empty`: move or delete them first.
   *
   * Needs the `blog.write` permission (Change Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/delete-a-blog-category
   */
  delete(categoryId: string, options?: RequestOptions): Promise<BlogCategoriesDeleteResult>;
  /**
   * **Sort blog categories**
   *
   * Sets the order the blog's own page lists its categories in.
   *
   * Needs the `blog.write` permission (Change Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/sort-blog-categories
   */
  sort(params: BlogCategoriesSortParams, options?: RequestOptions): Promise<BlogCategoriesSortResult>;
  /**
   * **Upload a blog category's picture**
   *
   * Gives the category its one picture, replacing any it had. Sent as `multipart/form-data` in a field called `image`.
   *
   * Needs the `blog.write` permission (Change Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/upload-a-blog-categorys-picture
   */
  uploadImage(categoryId: string, params: FileUpload, options?: RequestOptions): Promise<BlogCategoriesUploadImageResult>;
  /**
   * **Delete a blog category's picture**
   *
   * Removes the category's picture.
   *
   * Needs the `blog.write` permission (Change Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/delete-a-blog-categorys-picture
   */
  deleteImage(categoryId: string, options?: RequestOptions): Promise<BlogCategoriesDeleteImageResult>;
}

export interface ShoplyResourcesBlogPosts {
  /**
   * **Create a blog post**
   *
   * Starts a post as a draft with a title and nothing else. Write it and publish it with "Update a blog post".
   *
   * Needs the `blog.write` permission (Change Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/create-a-blog-post
   */
  create(params: BlogPostsCreateParams, options?: RequestOptions): Promise<BlogPostsCreateResult>;
  /**
   * **Get a blog post**
   *
   * One post with its text, as Markdown.
   *
   * Needs the `blog.read` permission (Read Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/get-a-blog-post
   */
  show(postId: string, options?: RequestOptions): Promise<BlogPostsShowResult>;
  /**
   * **Update a blog post**
   *
   * Saves the post whole: send every field as it should be. `status` and `categoryId` are the exceptions, and stay as they are when left out. The text is Markdown and nothing in it is trusted as HTML. A picture in the text that the text no longer shows is removed when the post is saved.
   *
   * Needs the `blog.write` permission (Change Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/update-a-blog-post
   */
  update(postId: string, params: BlogPostsUpdateParams, options?: RequestOptions): Promise<BlogPostsUpdateResult>;
  /**
   * **Delete a blog post**
   *
   * Removes the post and its pictures.
   *
   * Needs the `blog.write` permission (Change Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/delete-a-blog-post
   */
  delete(postId: string, options?: RequestOptions): Promise<BlogPostsDeleteResult>;
  /**
   * **Publish or unpublish a blog post**
   *
   * Puts a post out, or takes it back to a draft, and changes nothing else about it.
   *
   * Needs the `blog.write` permission (Change Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/publish-or-unpublish-a-blog-post
   */
  setStatus(postId: string, params: BlogPostsSetStatusParams, options?: RequestOptions): Promise<BlogPostsSetStatusResult>;
  /**
   * **Sort a category's blog posts**
   *
   * Sets the order one category's page lists its posts in.
   *
   * Needs the `blog.write` permission (Change Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/sort-a-categorys-blog-posts
   */
  sort(params: BlogPostsSortParams, options?: RequestOptions): Promise<BlogPostsSortResult>;
  /**
   * **Upload a blog post's cover**
   *
   * Gives the post its one cover picture, replacing any it had. Sent as `multipart/form-data` in a field called `image`.
   *
   * Needs the `blog.write` permission (Change Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/upload-a-blog-posts-cover
   */
  uploadCover(postId: string, params: FileUpload, options?: RequestOptions): Promise<BlogPostsUploadCoverResult>;
  /**
   * **Delete a blog post's cover**
   *
   * Removes the post's cover picture.
   *
   * Needs the `blog.write` permission (Change Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/delete-a-blog-posts-cover
   */
  deleteCover(postId: string, options?: RequestOptions): Promise<BlogPostsDeleteCoverResult>;
  /**
   * **Upload a picture for a blog post's text**
   *
   * Uploads a picture to use in the post's text, and answers its address (`url`) to write into the Markdown. Sent as `multipart/form-data` in a field called `image`. It stays the post's for as long as the saved text shows it.
   *
   * Needs the `blog.write` permission (Change Blog).
   *
   * @see https://docs.shoply.gg/api-reference/blog/upload-a-picture-for-a-blog-posts-text
   */
  uploadImage(postId: string, params: FileUpload, options?: RequestOptions): Promise<BlogPostsUploadImageResult>;
}

export interface ShoplyResourcesSeo {
  /**
   * **Get search settings**
   *
   * The four things a store sets once for search: its site verification codes, whether AI crawlers are asked to stay away, whether search engines are told of changes, and where paid orders are sent in Google Analytics.
   *
   * Needs the `seo.read` permission (Read Search Settings).
   *
   * @see https://docs.shoply.gg/api-reference/search-settings/get-search-settings
   */
  show(options?: RequestOptions): Promise<SeoShowResult>;
  /**
   * **Update search settings**
   *
   * Changes the store's search settings. Only what is sent changes.
   *
   * Needs the `seo.write` permission (Change Search Settings).
   *
   * @see https://docs.shoply.gg/api-reference/search-settings/update-search-settings
   */
  update(params?: SeoUpdateParams, options?: RequestOptions): Promise<SeoUpdateResult>;
}

export interface ShoplyResourcesRedirects {
  /**
   * **List redirects and broken links**
   *
   * The store's redirects, and under `meta.missing` the addresses people asked the store for that had nothing at them, most asked for first. A redirect from an address that still has a page is kept and waits: `live` says which.
   *
   * Needs the `seo.read` permission (Read Search Settings).
   *
   * @see https://docs.shoply.gg/api-reference/redirects/list-redirects-and-broken-links
   */
  list(options?: RequestOptions): Promise<RedirectsListResult>;
  /**
   * **Create a redirect**
   *
   * Sends an address that has nothing at it to one that has. It is followed only once the first address has turned out to be nothing, so a redirect can never take a page away. Adding one for a broken link takes that link off the list. Answers the store's redirects as they now stand.
   *
   * Needs the `seo.write` permission (Change Search Settings).
   *
   * @see https://docs.shoply.gg/api-reference/redirects/create-a-redirect
   */
  create(params: RedirectsCreateParams, options?: RequestOptions): Promise<RedirectsCreateResult>;
  /**
   * **Update a redirect**
   *
   * Changes where a redirect is from and where it leads. Answers the store's redirects as they now stand.
   *
   * Needs the `seo.write` permission (Change Search Settings).
   *
   * @see https://docs.shoply.gg/api-reference/redirects/update-a-redirect
   */
  update(redirectId: string, params: RedirectsUpdateParams, options?: RequestOptions): Promise<RedirectsUpdateResult>;
  /**
   * **Delete a redirect**
   *
   * Removes a redirect. Answers the redirects that are left.
   *
   * Needs the `seo.write` permission (Change Search Settings).
   *
   * @see https://docs.shoply.gg/api-reference/redirects/delete-a-redirect
   */
  delete(redirectId: string, options?: RequestOptions): Promise<RedirectsDeleteResult>;
}

export interface ShoplyResourcesBrokenLinks {
  /**
   * **Dismiss broken links**
   *
   * Takes one address off the list of broken links, or all of them when none is named. An address somebody asks for again is counted again.
   *
   * Needs the `seo.write` permission (Change Search Settings).
   *
   * @see https://docs.shoply.gg/api-reference/redirects/dismiss-broken-links
   */
  dismiss(params?: BrokenLinksDismissParams, options?: RequestOptions): Promise<BrokenLinksDismissResult>;
}

export interface ShoplyResourcesSitemap {
  /**
   * **Get the sitemap**
   *
   * Every address the store has, a kind at a time (pages, categories, products, blog), each with whether the sitemap lists it, its priority and how often it is said to change. This is the file the store serves at `/sitemap.xml`.
   *
   * Needs the `seo.read` permission (Read Search Settings).
   *
   * @see https://docs.shoply.gg/api-reference/sitemap/get-the-sitemap
   */
  show(options?: RequestOptions): Promise<SitemapShowResult>;
  /**
   * **Update a kind of address**
   *
   * Sets the rule for a whole kind. Every address of that kind that has no rule of its own follows it, and a kind that is not listed lists none of its addresses. Send any of the three. Answers the whole sitemap again.
   *
   * Needs the `seo.write` permission (Change Search Settings).
   *
   * @see https://docs.shoply.gg/api-reference/sitemap/update-a-kind-of-address
   */
  updateKind(kind: string, params?: SitemapUpdateKindParams, options?: RequestOptions): Promise<SitemapUpdateKindResult>;
  /**
   * **Update one address**
   *
   * Sets one address's own rule. An address set to what its kind says follows its kind again. Only an address the store has can be given a rule. Answers the whole sitemap again.
   *
   * Needs the `seo.write` permission (Change Search Settings).
   *
   * @see https://docs.shoply.gg/api-reference/sitemap/update-one-address
   */
  updateEntry(params: SitemapUpdateEntryParams, options?: RequestOptions): Promise<SitemapUpdateEntryResult>;
}

export interface ShoplyResourcesCartRecovery {
  /**
   * **Get Cart Recovery**
   *
   * Cart Recovery's settings as `data`. `meta.figures` is the period's four figures: what it recovered, the checkouts left and what was in them, the share of emailed carts recovered, and the emails sent with how many buyers clicked and unsubscribed, each with the period before. `meta.set` is false where the store has never set it up, `meta.sendable` whether the store can send email at all, and `meta.choices` the delays and discounts each setting may take.
   *
   * Needs the `recovery.read` permission (Read Cart Recovery).
   *
   * @see https://docs.shoply.gg/api-reference/cart-recovery/get-cart-recovery
   */
  show(params?: CartRecoveryShowParams, options?: RequestOptions): Promise<CartRecoveryShowResult>;
  /**
   * **Change Cart Recovery**
   *
   * Changes the settings named and keeps the rest. Switching it on writes to nobody who left a checkout before: only checkouts started after it was switched on are followed. The first email goes out a while after the buyer left, or in its place the declined card email after a card was turned down; the second, later, carries a coupon made for that buyer, good for 48 hours. An empty subject is the email's own.
   *
   * Needs the `recovery.write` permission (Change Cart Recovery).
   *
   * @see https://docs.shoply.gg/api-reference/cart-recovery/change-cart-recovery
   */
  update(params?: CartRecoveryUpdateParams, options?: RequestOptions): Promise<CartRecoveryUpdateResult>;
  /**
   * **List carts**
   *
   * The checkouts buyers left in the period, newest first, 25 a page, each with where it stands. A cart's `id` is its checkout's order ID. `state` is `waiting` (its first email is to come, `note` says when), `not_emailed` (it will not be written to, `note` says why), `first`, `declined` or `second` (the email it last had), `recovered`, `unsubscribed`, or `stopped` (let go with nothing sent). `emailedAt` and `secondEmailAt` are when its emails went, `couponCode` the second email's coupon, `clickedAt` when a browser first opened its button, and `recoveredOrderId` and `recoveredAt` the order that paid: the cart's own, or the checkout its button opened.
   *
   * Needs the `recovery.read` permission (Read Cart Recovery).
   *
   * @see https://docs.shoply.gg/api-reference/cart-recovery/list-carts
   */
  carts(params?: CartRecoveryCartsParams, options?: RequestOptions): PagePromise<CartRecoveryCartsItem>;
  /**
   * **Get a cart**
   *
   * One cart as "List carts" has it, whatever its period. What the `cart.` webhooks send.
   *
   * Needs the `recovery.read` permission (Read Cart Recovery).
   *
   * @see https://docs.shoply.gg/api-reference/cart-recovery/get-a-cart
   */
  cart(cartId: string, options?: RequestOptions): Promise<CartRecoveryCartResult>;
}

export interface ShoplyResourcesWinBack {
  /**
   * **Get Win-Back**
   *
   * Win-Back's settings as `data`. `meta.figures` is the period's four figures: the revenue it won back (and the period before's), subscribers and the share of buyers asked who said yes, the share of buyers emailed who came back, and the emails sent with how many buyers clicked and unsubscribed. `meta.set` is false where the store has never set it up, `meta.asking` whether the checkout asks buyers for leave, `meta.sendable` whether the store can send email at all, `meta.audiences` the tags it may be narrowed to, and `meta.choices` what each setting may take.
   *
   * Needs the `marketing.read` permission (Read Email Marketing).
   *
   * @see https://docs.shoply.gg/api-reference/email-marketing/get-win-back
   */
  show(params?: WinBackShowParams, options?: RequestOptions): Promise<WinBackShowResult>;
  /**
   * **Change Win-Back**
   *
   * Changes the settings named and keeps the rest. Win-Back writes only to subscribers: buyers who ticked "Email me news and offers" at checkout on an order they paid, and have not said no since. The first email goes the set number of days after a buyer's last completed order, if they have not ordered since; the second, days after the first, carries a coupon made for that buyer, good for 7 days. A buyer with a dispute on record is not written to. Switching it on also switches on asking at checkout, and `meta.askingTurnedOn` says so. An empty subject is the email's own.
   *
   * Needs the `marketing.write` permission (Change Email Marketing).
   *
   * @see https://docs.shoply.gg/api-reference/email-marketing/change-win-back
   */
  update(params?: WinBackUpdateParams, options?: RequestOptions): Promise<WinBackUpdateResult>;
  /**
   * **List Win-Back buyers**
   *
   * The buyers Win-Back has written to or will within 7 days, the latest to have moved first, 25 a page. A buyer is here once for each time they go quiet. `state` is `due` (`dueAt` says when its first email goes), `first` or `second` (the email it last had), `won` (they ordered within 14 days of an email: `wonOrderId`, `wonAt`, `wonAfter`, `quietDays`), `unsubscribed`, or `stopped` (`stopped` says why: `ordered`, `off`, `audience`, `disputed`, `failed`). `orders` and `spent` are their completed orders at the store, `tags` theirs as on Get a customer, `couponCode` and `couponExpiresAt` the second email's coupon, and `clickedAt` when a browser first opened an email's button.
   *
   * Needs the `marketing.read` permission (Read Email Marketing).
   *
   * @see https://docs.shoply.gg/api-reference/email-marketing/list-win-back-buyers
   */
  buyers(params?: WinBackBuyersParams, options?: RequestOptions): PagePromise<WinBackBuyersItem>;
  /**
   * **Get a Win-Back buyer**
   *
   * One buyer as "List Win-Back buyers" has them. What the `winback.` webhooks send.
   *
   * Needs the `marketing.read` permission (Read Email Marketing).
   *
   * @see https://docs.shoply.gg/api-reference/email-marketing/get-a-win-back-buyer
   */
  buyer(buyerId: string, options?: RequestOptions): Promise<WinBackBuyerResult>;
}

export interface ShoplyResourcesSubscribers {
  /**
   * **Get subscriber figures**
   *
   * `asking`, whether the checkout asks buyers "Email me news and offers", and `figures` for the period: `subscribed` now, `joined` in the period, `asked` (paid orders whose box was shown) and `rate` (the share of those ticked), `unsubscribed` in the period, and `sent`, the emails Cart Recovery and Win-Back sent in it.
   *
   * Needs the `marketing.read` permission (Read Email Marketing).
   *
   * @see https://docs.shoply.gg/api-reference/email-marketing/get-subscriber-figures
   */
  summary(params?: SubscribersSummaryParams, options?: RequestOptions): Promise<SubscribersSummaryResult>;
  /**
   * **Change asking at checkout**
   *
   * Whether the checkout shows buyers an unticked box above Pay, "Email me news and offers from" the store, on checkouts they start on the store, in the embed and in the Checkout Kit. Never on an invoice or a payment link. Switched off, nobody new subscribes, and everybody subscribed stays so.
   *
   * Needs the `marketing.write` permission (Change Email Marketing).
   *
   * @see https://docs.shoply.gg/api-reference/email-marketing/change-asking-at-checkout
   */
  asking(params: SubscribersAskingParams, options?: RequestOptions): Promise<SubscribersAskingResult>;
  /**
   * **List subscribers**
   *
   * Who said yes to the store's news and offers, newest first, 25 a page: `subscribedAt`, `source` and `where` (the store's checkout, the embed or the Checkout Kit), `orderId` (the order whose box was ticked; they became a subscriber when it was paid), and for one who said no since, `unsubscribedAt` and `unsubscribedBy` (`email`, a link in an email; `seller`; `key`).
   *
   * Needs the `marketing.read` permission (Read Email Marketing).
   *
   * @see https://docs.shoply.gg/api-reference/email-marketing/list-subscribers
   */
  list(params?: SubscribersListParams, options?: RequestOptions): PagePromise<SubscribersListItem>;
  /**
   * **Export subscribers**
   *
   * The subscribers the same filters would list, as a CSV file. Add `check=1` for `{ rows }`, how many it would have, which is not counted. A store exports at most 30 files every 10 minutes, every kind together, whoever asks: after that the answer is 429.
   *
   * Needs the `marketing.read` permission (Read Email Marketing). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/email-marketing/export-subscribers
   */
  export(params?: SubscribersExportParams, options?: RequestOptions): Promise<Response>;
  /**
   * **Unsubscribe a subscriber**
   *
   * No more Win-Back to this address. They become a subscriber again only by ticking the box on another order they pay. 404 for an address that never said yes. Answers the subscriber.
   *
   * Needs the `marketing.write` permission (Change Email Marketing).
   *
   * @see https://docs.shoply.gg/api-reference/email-marketing/unsubscribe-a-subscriber
   */
  unsubscribe(params: SubscribersUnsubscribeParams, options?: RequestOptions): Promise<SubscribersUnsubscribeResult>;
}

export interface ShoplyResourcesCustomers {
  /**
   * **List customers**
   *
   * The store's customers, a page at a time, each with how many orders they have paid for, what they have spent, their balance and their `tags`: Shoply's two first (`vip` and `disputed`, worked out from their orders as they are read), then the store's own.
   *
   * Needs the `customers.read` permission (Read Customers).
   *
   * @see https://docs.shoply.gg/api-reference/customers/list-customers
   */
  list(params?: CustomersListParams, options?: RequestOptions): PagePromise<CustomersListItem>;
  /**
   * **Create a customer**
   *
   * Adds an address to the customer list before it has ordered, so it can be given a balance or made an affiliate. An address that is already a customer is answered as it is, with `meta.alreadyExisted` saying so.
   *
   * Needs the `customers.write` permission (Change Customers).
   *
   * @see https://docs.shoply.gg/api-reference/customers/create-a-customer
   */
  create(params: CustomersCreateParams, options?: RequestOptions): Promise<CustomersCreateResult>;
  /**
   * **Export customers**
   *
   * The customers the same filters would list, as a CSV file: each one's email, when they were first seen, the orders they paid for and what they spent, their first and last paid order, their store balance, their affiliate code and balance where they have one, their tags, and whether they are subscribed to the store's news and offers. Every customer the filters match is in the file, however many: it is sent as it is read. Add `check=1` for `{ rows }`, how many it would have, which is not counted. A store exports at most 30 files every 10 minutes, orders, customers, fraud events and blacklist rules together, whoever asks: after that the answer is 429.
   *
   * Needs the `customers.read` permission (Read Customers). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/customers/export-customers
   */
  export(params?: CustomersExportParams, options?: RequestOptions): Promise<Response>;
  /**
   * **Get customer figures**
   *
   * The four figures over the customers list, each beside the period before it. With no period named, the last 30 days.
   *
   * Needs the `customers.read` permission (Read Customers).
   *
   * @see https://docs.shoply.gg/api-reference/customers/get-customer-figures
   */
  stats(params?: CustomersStatsParams, options?: RequestOptions): Promise<CustomersStatsResult>;
  /**
   * **Get a customer**
   *
   * One customer: their orders, their balance and its history, their `tags`, whether they are blacklisted, and their affiliate figures if they are one.
   *
   * Needs the `customers.read` permission (Read Customers).
   *
   * @see https://docs.shoply.gg/api-reference/customers/get-a-customer
   */
  show(customerId: string, options?: RequestOptions): Promise<CustomersShowResult>;
  /**
   * **Change a customer's balance**
   *
   * Adds to, takes from or sets the customer's balance at the store, which they can spend at checkout. Send an `Idempotency-Key` with this request, so that a retry does not credit twice. Answers the customer with the new balance and its history.
   *
   * Needs the `customers.balance` permission (Change Balances).
   *
   * @see https://docs.shoply.gg/api-reference/customers/change-a-customers-balance
   */
  setBalance(customerId: string, params: CustomersSetBalanceParams, options?: RequestOptions): Promise<CustomersSetBalanceResult>;
  /**
   * **Blacklist a customer**
   *
   * Stops the customer buying: their email is added to the store's blacklist, and with `addresses` the IP addresses their orders came from. Their open checkouts are refused from this moment.
   *
   * Needs the `customers.write` permission (Change Customers).
   *
   * @see https://docs.shoply.gg/api-reference/customers/blacklist-a-customer
   */
  blacklist(customerId: string, params?: CustomersBlacklistParams, options?: RequestOptions): Promise<CustomersBlacklistResult>;
  /**
   * **Clear a customer from the blacklist**
   *
   * Takes the customer off the blacklist: the rules their page or a dispute of theirs added, any rule on their email, and with `addresses` the rules on an IP address their orders came from. A rule that covers other buyers too (a domain, a range) stays: the customer's `blacklistedBy` lists each rule still refusing them.
   *
   * Needs the `customers.write` permission (Change Customers).
   *
   * @see https://docs.shoply.gg/api-reference/customers/clear-a-customer-from-the-blacklist
   */
  unblacklist(customerId: string, params?: CustomersUnblacklistParams, options?: RequestOptions): Promise<CustomersUnblacklistResult>;
  /**
   * **Set a customer's tags**
   *
   * The customer's own tags become exactly these: any not listed is taken off, any new one is put on, and each is sent as `customer.tagged` or `customer.untagged`. Shoply's two are not set here. Answers their tags.
   *
   * Needs the `customers.tags` permission (Change Tags).
   *
   * @see https://docs.shoply.gg/api-reference/customers/set-a-customers-tags
   */
  setTags(customerId: string, params: CustomersSetTagsParams, options?: RequestOptions): Promise<CustomersSetTagsResult>;
  /**
   * **Put a tag on a customer**
   *
   * One of the store's tags on the customer. One they already wear changes nothing. Answers their tags.
   *
   * Needs the `customers.tags` permission (Change Tags).
   *
   * @see https://docs.shoply.gg/api-reference/customers/put-a-tag-on-a-customer
   */
  tag(customerId: string, tagId: string, options?: RequestOptions): Promise<CustomersTagResult>;
  /**
   * **Take a tag off a customer**
   *
   * One of the store's tags off the customer. One they do not wear changes nothing. Answers their tags.
   *
   * Needs the `customers.tags` permission (Change Tags).
   *
   * @see https://docs.shoply.gg/api-reference/customers/take-a-tag-off-a-customer
   */
  untag(customerId: string, tagId: string, options?: RequestOptions): Promise<CustomersUntagResult>;
}

export interface ShoplyResourcesCustomerTags {
  /**
   * **List customer tags**
   *
   * The store's own tags as `data`, by name, each with `customers`, how many wear it. `meta.automatic` is Shoply's two: VIP's rule (`vipOn`, `vipSpent` in the store's currency, `vipOrders` completed orders, `vipDays` the period, 0 for all time; either number 0 leaves that half out) and `disputedOn`, with `vipCustomers` and `disputedCustomers`, how many wear each today.
   *
   * Needs the `customers.read` permission (Read Customers).
   *
   * @see https://docs.shoply.gg/api-reference/customers/list-customer-tags
   */
  list(options?: RequestOptions): Promise<CustomerTagsListResult>;
  /**
   * **Add a customer tag**
   *
   * A tag of the store's own. A store has at most 50. Names are told apart without regard to case, and VIP and Disputed Before are Shoply's.
   *
   * Needs the `customers.tags` permission (Change Tags).
   *
   * @see https://docs.shoply.gg/api-reference/customers/add-a-customer-tag
   */
  create(params: CustomerTagsCreateParams, options?: RequestOptions): Promise<CustomerTagsCreateResult>;
  /**
   * **Change VIP and Disputed Before**
   *
   * Shoply's two tags: whether each is put on, and who is a VIP. Both are worked out from a customer's orders whenever they are read, so a change reaches every customer at once. Answers as List customer tags does.
   *
   * Needs the `customers.tags` permission (Change Tags).
   *
   * @see https://docs.shoply.gg/api-reference/customers/change-vip-and-disputed-before
   */
  automatic(params?: CustomerTagsAutomaticParams, options?: RequestOptions): Promise<CustomerTagsAutomaticResult>;
  /**
   * **Change a customer tag**
   *
   * Renames a tag or changes its colour, keeping what is not sent. Everybody wearing it keeps it.
   *
   * Needs the `customers.tags` permission (Change Tags).
   *
   * @see https://docs.shoply.gg/api-reference/customers/change-a-customer-tag
   */
  update(tagId: string, params?: CustomerTagsUpdateParams, options?: RequestOptions): Promise<CustomerTagsUpdateResult>;
  /**
   * **Delete a customer tag**
   *
   * Deletes a tag and takes it off everybody wearing it. No `customer.untagged` is sent for each. Win-Back narrowed to this tag writes to everybody subscribed again. Answers the tags left.
   *
   * Needs the `customers.tags` permission (Change Tags).
   *
   * @see https://docs.shoply.gg/api-reference/customers/delete-a-customer-tag
   */
  delete(tagId: string, options?: RequestOptions): Promise<CustomerTagsDeleteResult>;
}

export interface ShoplyResourcesAffiliates {
  /**
   * **List affiliates**
   *
   * Every affiliate of the store, each with their link, their rates, what their link has led to, what they have earned and what they are owed. `meta.totals` adds them up, and `meta.programme` is the programme's settings. A store holds up to 500, so the list is not paged.
   *
   * Needs the `affiliates.read` permission (Read Affiliates).
   *
   * @see https://docs.shoply.gg/api-reference/affiliates/list-affiliates
   */
  list(options?: RequestOptions): Promise<AffiliatesListResult>;
  /**
   * **Create an affiliate**
   *
   * Makes a customer of the store an affiliate, with a link of their own. The address has to be a customer already: create the customer first if it is not.
   *
   * Needs the `affiliates.write` permission (Change Affiliates).
   *
   * @see https://docs.shoply.gg/api-reference/affiliates/create-an-affiliate
   */
  create(params: AffiliatesCreateParams, options?: RequestOptions): Promise<AffiliatesCreateResult>;
  /**
   * **Update an affiliate**
   *
   * Changes an affiliate's code, rates or whether their link works. Only what is sent changes.
   *
   * Needs the `affiliates.write` permission (Change Affiliates).
   *
   * @see https://docs.shoply.gg/api-reference/affiliates/update-an-affiliate
   */
  update(affiliateId: string, params?: AffiliatesUpdateParams, options?: RequestOptions): Promise<AffiliatesUpdateResult>;
  /**
   * **Delete an affiliate**
   *
   * Removes an affiliate who has earned nothing. One who has earned commission is refused with `affiliate_has_earned`: switch them off instead, so that what an order earned is still on record if that order is refunded later. Answers the affiliates that are left.
   *
   * Needs the `affiliates.write` permission (Change Affiliates).
   *
   * @see https://docs.shoply.gg/api-reference/affiliates/delete-an-affiliate
   */
  delete(affiliateId: string, options?: RequestOptions): Promise<AffiliatesDeleteResult>;
  /**
   * **Change an affiliate's balance**
   *
   * Adds to, takes from or sets what an affiliate is owed. Send an `Idempotency-Key` with this request.
   *
   * Needs the `affiliates.payouts` permission (Answer Payouts).
   *
   * @see https://docs.shoply.gg/api-reference/affiliates/change-an-affiliates-balance
   */
  setBalance(affiliateId: string, params: AffiliatesSetBalanceParams, options?: RequestOptions): Promise<AffiliatesSetBalanceResult>;
  /**
   * **Get an affiliate's history**
   *
   * One affiliate's balance line by line (`changes`), and the payouts they have asked for (`payouts`).
   *
   * Needs the `affiliates.read` permission (Read Affiliates).
   *
   * @see https://docs.shoply.gg/api-reference/affiliates/get-an-affiliates-history
   */
  history(affiliateId: string, options?: RequestOptions): Promise<AffiliatesHistoryResult>;
  /**
   * **List referred orders**
   *
   * The orders that came through affiliates' links, newest first, each with what it earned. `state` is `credited` (paid, and the commission is on the affiliate's balance), `waiting` (not paid yet) or `back` (refunded or charged back, and the commission taken back).
   *
   * Needs the `affiliates.read` permission (Read Affiliates).
   *
   * @see https://docs.shoply.gg/api-reference/affiliates/list-referred-orders
   */
  orders(params?: AffiliatesOrdersParams, options?: RequestOptions): PagePromise<AffiliatesOrdersItem>;
  /**
   * **List payout requests**
   *
   * The payouts affiliates have asked for, the ones still waiting first. A payout is a request and a record: the affiliate says how they want to be paid, and the store pays it itself. Shoply sends no money.
   *
   * Needs the `affiliates.read` permission (Read Affiliates).
   *
   * @see https://docs.shoply.gg/api-reference/affiliates/list-payout-requests
   */
  payouts(params?: AffiliatesPayoutsParams, options?: RequestOptions): PagePromise<AffiliatesPayoutsItem>;
  /**
   * **Answer a payout request**
   *
   * Marks a payout as paid, which records that you paid it yourself, or declines it, which puts the amount back on the affiliate's balance. A payout that was already answered is refused with `payout_answered`. Answers the store's affiliates as they now stand.
   *
   * Needs the `affiliates.payouts` permission (Answer Payouts).
   *
   * @see https://docs.shoply.gg/api-reference/affiliates/answer-a-payout-request
   */
  answerPayout(payoutId: string, params: AffiliatesAnswerPayoutParams, options?: RequestOptions): Promise<AffiliatesAnswerPayoutResult>;
  /**
   * **Ask for a payout for an affiliate**
   *
   * Asks for a payout in an affiliate's name, for a panel of your own where they sign in with you. The amount leaves their balance now and is held until you answer the request; declined or taken back, it returns. One request at a time, and never more than they are owed. Refused with `payout_refused` while the programme is off or does not take payout requests. Answers the request (`payout`) and what the affiliate is still owed (`balance`).
   *
   * Needs the `affiliates.payouts` permission (Answer Payouts).
   *
   * @see https://docs.shoply.gg/api-reference/affiliates/ask-for-a-payout-for-an-affiliate
   */
  askPayout(affiliateId: string, params: AffiliatesAskPayoutParams, options?: RequestOptions): Promise<AffiliatesAskPayoutResult>;
  /**
   * **Take back a payout request**
   *
   * Takes back a request that has not been answered, and puts its amount back on the affiliate's balance. One that was already answered is refused with `payout_answered`.
   *
   * Needs the `affiliates.payouts` permission (Answer Payouts).
   *
   * @see https://docs.shoply.gg/api-reference/affiliates/take-back-a-payout-request
   */
  withdrawPayout(affiliateId: string, payoutId: string, options?: RequestOptions): Promise<AffiliatesWithdrawPayoutResult>;
  /**
   * **Move commission to store balance**
   *
   * Moves what an affiliate is owed onto their balance at the store, to spend at checkout. It counts as paid out. What lands is what leaves: where the store balance is near its ceiling, less than was asked for moves, and `moved` says how much. Refused with `move_refused` while the programme is off or does not move commission to store balance.
   *
   * The key needs the `customers.balance` permission as well, since this adds to a customer's balance. Send an `Idempotency-Key` with this request.
   *
   * Needs the `affiliates.payouts` permission (Answer Payouts).
   *
   * @see https://docs.shoply.gg/api-reference/affiliates/move-commission-to-store-balance
   */
  toStoreBalance(affiliateId: string, params: AffiliatesToStoreBalanceParams, options?: RequestOptions): Promise<AffiliatesToStoreBalanceResult>;
}

export interface ShoplyResourcesAffiliateProgramme {
  /**
   * **Get the affiliate programme**
   *
   * The programme's settings: whether it is on, the rates a new affiliate gets, and what an affiliate may do for themselves.
   *
   * Needs the `affiliates.read` permission (Read Affiliates).
   *
   * @see https://docs.shoply.gg/api-reference/affiliates/get-the-affiliate-programme
   */
  show(options?: RequestOptions): Promise<AffiliateProgrammeShowResult>;
  /**
   * **Update the affiliate programme**
   *
   * Changes the programme's settings. Only what is sent changes. Switched off, no link takes anything off or earns anything, and the customer panel says nothing of affiliates.
   *
   * Needs the `affiliates.write` permission (Change Affiliates).
   *
   * @see https://docs.shoply.gg/api-reference/affiliates/update-the-affiliate-programme
   */
  update(params?: AffiliateProgrammeUpdateParams, options?: RequestOptions): Promise<AffiliateProgrammeUpdateResult>;
}

export interface ShoplyResourcesTickets {
  /**
   * **List support tickets**
   *
   * The store's tickets, the latest message first. `status` is `open` (the buyer wrote last: Waiting on You on the dashboard), `answered` (the store did) or `resolved`, with `resolvedBy`: `store`, `buyer`, or `auto` (48 hours after the store's reply with no word from the buyer). `lastFrom` and `lastLine` are the latest message's author and first words, `unread` whether the store has opened it since the buyer last wrote, and `orderId` the order it is about, where the buyer picked one. `meta.on` is whether the store takes tickets (off, buyers can open none and the panel shows no Support), and `meta.figures` the dashboard's four: tickets waiting on the store and when the oldest was written, open ones, the average minutes to a first reply over the last 30 days and the 30 before, and how many were resolved in the last 30 days.
   *
   * Needs the `tickets.read` permission (Read Support Tickets).
   *
   * @see https://docs.shoply.gg/api-reference/support-tickets/list-support-tickets
   */
  list(params?: TicketsListParams, options?: RequestOptions): PagePromise<TicketsListItem>;
  /**
   * **Switch Support Tickets on or off**
   *
   * Off for every store until switched on. Off, buyers can open no ticket and write on none, the customer panel shows no Support, and the store can resolve and reopen but not reply. The tickets are kept.
   *
   * Needs the `tickets.write` permission (Answer Support Tickets).
   *
   * @see https://docs.shoply.gg/api-reference/support-tickets/switch-support-tickets-on-or-off
   */
  settings(params: TicketsSettingsParams, options?: RequestOptions): Promise<TicketsSettingsResult>;
  /**
   * **Get a support ticket**
   *
   * A ticket with its `conversation`, oldest first: each message's `from` (`buyer` or `store`), `body`, `pictures` (each one's `name` and the `url` the dashboard reads it at; read it with Get a ticket's picture) and `createdAt`. `customer` is who wrote it, with their tags, `order` the order it is about, `orders` their five latest, and `canReopenUntil` the last moment the buyer can open a resolved ticket again by writing on it. Reading a ticket marks it read, as opening it on the dashboard does.
   *
   * Needs the `tickets.read` permission (Read Support Tickets).
   *
   * @see https://docs.shoply.gg/api-reference/support-tickets/get-a-support-ticket
   */
  get(ticketId: string, options?: RequestOptions): Promise<TicketsGetResult>;
  /**
   * **Reply to a support ticket**
   *
   * Writes on the ticket as the store, which the buyer reads in their customer panel and is emailed (at most once a ticket in 15 minutes; what is written meanwhile follows when they are over). A reply to a resolved ticket opens it again, unless `resolve` is true. Refused with `tickets_off` while the store takes no tickets, since the buyer could not read it. Answers the ticket as Get a support ticket does.
   *
   * Needs the `tickets.write` permission (Answer Support Tickets).
   *
   * @see https://docs.shoply.gg/api-reference/support-tickets/reply-to-a-support-ticket
   */
  reply(ticketId: string, params: TicketsReplyParams, options?: RequestOptions): Promise<TicketsReplyResult>;
  /**
   * **Resolve a support ticket**
   *
   * Marks it resolved, by the store. The buyer can still write on it for 30 days, which opens it again. One already resolved is left as it is.
   *
   * Needs the `tickets.write` permission (Answer Support Tickets).
   *
   * @see https://docs.shoply.gg/api-reference/support-tickets/resolve-a-support-ticket
   */
  resolve(ticketId: string, options?: RequestOptions): Promise<TicketsResolveResult>;
  /**
   * **Reopen a support ticket**
   *
   * Opens a resolved ticket again: `open` where the buyer wrote last, else `answered`. One that is not resolved is left as it is.
   *
   * Needs the `tickets.write` permission (Answer Support Tickets).
   *
   * @see https://docs.shoply.gg/api-reference/support-tickets/reopen-a-support-ticket
   */
  reopen(ticketId: string, options?: RequestOptions): Promise<TicketsReopenResult>;
  /**
   * **Get a ticket's picture**
   *
   * A picture sent in the conversation: a PNG, JPEG or WebP of up to 5 MB, read out of the picture itself when it was sent.
   *
   * Needs the `tickets.read` permission (Read Support Tickets).
   *
   * @see https://docs.shoply.gg/api-reference/support-tickets/get-a-tickets-picture
   */
  picture(ticketId: string, name: string, options?: RequestOptions): Promise<Response>;
}

export interface ShoplyResourcesBlacklist {
  /**
   * **List blacklist rules**
   *
   * The store's blacklist, a page at a time. A buyer who matches a rule that is in force cannot start or pay for a checkout. A store holds up to 10,000 rules.
   *
   * Needs the `fraud.read` permission (Read Fraud Protection).
   *
   * @see https://docs.shoply.gg/api-reference/blacklist/list-blacklist-rules
   */
  list(params?: BlacklistListParams, options?: RequestOptions): PagePromise<BlacklistListItem>;
  /**
   * **Create a blacklist rule**
   *
   * Adds a rule. Something already on the blacklist is refused.
   *
   * Needs the `fraud.write` permission (Change Fraud Protection).
   *
   * @see https://docs.shoply.gg/api-reference/blacklist/create-a-blacklist-rule
   */
  create(params: BlacklistCreateParams, options?: RequestOptions): Promise<BlacklistCreateResult>;
  /**
   * **Export blacklist rules**
   *
   * The rules the same filters would list, as a CSV file, newest first: each one's type, value and note, whether it is in force, when and how it was added, the customer or order it came from, and how many checkouts it has stopped. Every rule the filters match is in the file. Add `check=1` for `{ rows }`, how many it would have, which is not counted. A store exports at most 30 files every 10 minutes, orders, customers, fraud events and blacklist rules together, whoever asks: after that the answer is 429.
   *
   * Needs the `fraud.read` permission (Read Fraud Protection). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/blacklist/export-blacklist-rules
   */
  export(params?: BlacklistExportParams, options?: RequestOptions): Promise<Response>;
  /**
   * **Update a blacklist rule**
   *
   * Saves the rule whole: send every field as it should be.
   *
   * Needs the `fraud.write` permission (Change Fraud Protection).
   *
   * @see https://docs.shoply.gg/api-reference/blacklist/update-a-blacklist-rule
   */
  update(ruleId: string, params: BlacklistUpdateParams, options?: RequestOptions): Promise<BlacklistUpdateResult>;
  /**
   * **Delete a blacklist rule**
   *
   * Removes the rule.
   *
   * Needs the `fraud.write` permission (Change Fraud Protection).
   *
   * @see https://docs.shoply.gg/api-reference/blacklist/delete-a-blacklist-rule
   */
  delete(ruleId: string, options?: RequestOptions): Promise<BlacklistDeleteResult>;
  /**
   * **Switch a blacklist rule on or off**
   *
   * Changes whether the rule is in force, without sending the rest of it.
   *
   * Needs the `fraud.write` permission (Change Fraud Protection).
   *
   * @see https://docs.shoply.gg/api-reference/blacklist/switch-a-blacklist-rule-on-or-off
   */
  setEnabled(ruleId: string, params: BlacklistSetEnabledParams, options?: RequestOptions): Promise<BlacklistSetEnabledResult>;
}

export interface ShoplyResourcesFraudEvents {
  /**
   * **List fraud events**
   *
   * What fraud protection did, newest first: the checkouts it refused and why, and every change to the blacklist and its settings. `meta.counts` says how many events of each reason the same filters match.
   *
   * Needs the `fraud.read` permission (Read Fraud Protection).
   *
   * @see https://docs.shoply.gg/api-reference/fraud-protection/list-fraud-events
   */
  list(params?: FraudEventsListParams, options?: RequestOptions): PagePromise<FraudEventsListItem>;
  /**
   * **Export fraud events**
   *
   * The events the same filters would list, as a CSV file, newest first: when each happened and how many attempts it gathered, what it was, the email, IP address, country and order, the rule it matched or the change that was made and by whom, and what a lookup of the address already knew (its provider and network, where it is, and whether it looked like a VPN, a data centre or a phone). Nothing is looked up to write the file: an address never looked up has those empty. Every event the filters match is in the file, however many: it is sent as it is read. Add `check=1` for `{ rows }`, how many it would have, which is not counted. A store exports at most 30 files every 10 minutes, orders, customers, fraud events and blacklist rules together, whoever asks: after that the answer is 429.
   *
   * Needs the `fraud.read` permission (Read Fraud Protection). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/fraud-protection/export-fraud-events
   */
  export(params?: FraudEventsExportParams, options?: RequestOptions): Promise<Response>;
  /**
   * **Get a fraud event's network**
   *
   * What is known about the connection an event came from: its provider, and whether it looks like a VPN, a proxy or a data centre.
   *
   * Needs the `fraud.read` permission (Read Fraud Protection). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/fraud-protection/get-a-fraud-events-network
   */
  network(eventId: string, options?: RequestOptions): Promise<FraudEventsNetworkResult>;
}

export interface ShoplyResourcesFraudSettings {
  /**
   * **Get fraud settings**
   *
   * What the store refuses before an order is made: VPNs and proxies, countries, and buyers who have disputed a payment.
   *
   * Needs the `fraud.read` permission (Read Fraud Protection).
   *
   * @see https://docs.shoply.gg/api-reference/fraud-protection/get-fraud-settings
   */
  show(options?: RequestOptions): Promise<FraudSettingsShowResult>;
  /**
   * **Update fraud settings**
   *
   * Saves the two switches as they are sent. `blockedCountries` changes only when it is sent.
   *
   * Needs the `fraud.write` permission (Change Fraud Protection).
   *
   * @see https://docs.shoply.gg/api-reference/fraud-protection/update-fraud-settings
   */
  update(params: FraudSettingsUpdateParams, options?: RequestOptions): Promise<FraudSettingsUpdateResult>;
}

export interface ShoplyResourcesDisputes {
  /**
   * **List disputes**
   *
   * The disputes buyers opened on the store's payments, as their payment providers reported them: the ones that need an answer first, soonest deadline first, then the rest newest first. `status` is how it reads on the dashboard: `needs_response`, `under_review`, `won`, `lost`, `accepted` or `closed` (ended with no chargeback). `providerStatus` is the provider's own last word, `stage` is `inquiry`, `chargeback`, `claim` (a PayPal case), `pre_arbitration` or `arbitration`, and `dueAt` when the provider stops taking an answer, where it says. `answeredFrom` is where it is answered: `here` (through this API: Stripe's, Revolut's, Adyen's, and PayPal's where PayPal is connected with API keys), `provider` (in the provider's own dashboard, named in `answerPlace`) or `none`. `meta.figures` is the dashboard's four: how many need an answer and how many are due within three days, the money in the open ones in the store's currency, how many ended won and lost in the last 90 days, and the orders disputed beside those that took money in that time.
   *
   * Needs the `disputes.read` permission (Read Disputes).
   *
   * @see https://docs.shoply.gg/api-reference/disputes/list-disputes
   */
  list(params?: DisputesListParams, options?: RequestOptions): PagePromise<DisputesListItem>;
  /**
   * **Export disputes**
   *
   * The disputes the same filters would list, as a CSV file, newest first. Add `check=1` for `{ rows }`, how many it would have, which is not counted. A store exports at most 30 files every 10 minutes, whatever they are of and whoever asks: after that the answer is 429.
   *
   * Needs the `disputes.read` permission (Read Disputes). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/disputes/export-disputes
   */
  export(params?: DisputesExportParams, options?: RequestOptions): Promise<Response>;
  /**
   * **List an order's disputes**
   *
   * The disputes on one order, newest first, each as List disputes has it. Most orders have none; a payment disputed twice has two.
   *
   * Needs the `disputes.read` permission (Read Disputes).
   *
   * @see https://docs.shoply.gg/api-reference/disputes/list-an-orders-disputes
   */
  forOrder(orderId: string, options?: RequestOptions): Promise<DisputesForOrderResult>;
  /**
   * **Get a dispute**
   *
   * One dispute with everything its page shows. `records` is what Shoply recorded about the order, in four groups (the buyer, the order, after delivery, history), each fact a `name` and a `value` in words, `strong` on the order being opened again from the address it was paid from. A delivered license key or file is never in it. `activity` is every look at the order after delivery, a line each. `draft` is the store's answer as it was left, with `statement`, the whole of what is sent. `can` says what may be done now: `edit`, `submit`, `accept` and `markSubmitted`. `files` are the store's own files for the answer, `after` what was done on Shoply's side (the buyer blacklisted, their keys and files hidden), and `history` the dispute's story, newest first.
   *
   * Needs the `disputes.read` permission (Read Disputes).
   *
   * @see https://docs.shoply.gg/api-reference/disputes/get-a-dispute
   */
  get(disputeId: string, options?: RequestOptions): Promise<DisputesGetResult>;
  /**
   * **Save a dispute's answer**
   *
   * Keeps the fields named and leaves the rest, while the answer can still change: nothing has been sent or accepted, and the dispute has not ended. Answers 409 `not_answerable` after that. Sends nothing anywhere.
   *
   * Needs the `disputes.write` permission (Answer Disputes).
   *
   * @see https://docs.shoply.gg/api-reference/disputes/save-a-disputes-answer
   */
  saveDraft(disputeId: string, params?: DisputesSaveDraftParams, options?: RequestOptions): Promise<DisputesSaveDraftResult>;
  /**
   * **Submit a dispute's answer**
   *
   * Sends a dispute's answer to its provider, once: what Shoply recorded, Shoply's PDF of it, the store's own files, and the statement, in each provider's own shape. Stripe's evidence fields; Revolut's files and a challenge whose comment is the statement's first 250 characters; PayPal's evidence, appeal or supporting information, whichever the dispute takes now, with the statement as its notes; Adyen's documents under a defense reason, the statement in the PDF. It cannot be taken back. Any draft fields in the body are saved first. Answers 409 `answered_elsewhere` for a dispute answered in its provider's own dashboard, `not_answerable` for one not waiting on an answer, `past_due` once its deadline has passed, and `file_not_taken` for one of the store's files the provider does not take (Adyen takes no PNG, and a PDF of up to 2 MB). The provider refusing it is 502, with `stripe_key` or `provider_key` where the store's key or app may not answer disputes, and `provider_refused` otherwise, the dispute back to a draft with `answer.note` saying why. A store sends at most 20 answers or acceptances every 10 minutes.
   *
   * Needs the `disputes.write` permission (Answer Disputes).
   *
   * @see https://docs.shoply.gg/api-reference/disputes/submit-a-disputes-answer
   */
  submit(disputeId: string, params?: DisputesSubmitParams, options?: RequestOptions): Promise<DisputesSubmitResult>;
  /**
   * **Accept a dispute**
   *
   * Concedes a dispute in its provider (Stripe, Revolut, Adyen, or PayPal's claim, which PayPal refunds from the store's account): the buyer keeps the money and the order becomes a chargeback. Cannot be undone. Answers as Submit does when it cannot be done, and counts toward the same 20 every 10 minutes.
   *
   * Needs the `disputes.write` permission (Answer Disputes).
   *
   * @see https://docs.shoply.gg/api-reference/disputes/accept-a-dispute
   */
  accept(disputeId: string, options?: RequestOptions): Promise<DisputesAcceptResult>;
  /**
   * **Mark a dispute as answered**
   *
   * Says the store answered a dispute in its provider's own dashboard (PayPal's Resolution Center, Revolut, Adyen, Whop, Shopify), which Shoply cannot send to. It then reads as under review, and its answer can no longer change. 409 `not_answerable` where it is not waiting on an answer there.
   *
   * Needs the `disputes.write` permission (Answer Disputes).
   *
   * @see https://docs.shoply.gg/api-reference/disputes/mark-a-dispute-as-answered
   */
  markSubmitted(disputeId: string, options?: RequestOptions): Promise<DisputesMarkSubmittedResult>;
  /**
   * **Get a dispute's PDF**
   *
   * The answer as one PDF, as it stands: the dispute, the store's statement, what Shoply recorded, every look at the order after delivery, and the store's refund policy and terms. For a provider that takes a file. Never a license key or a delivered file.
   *
   * Needs the `disputes.read` permission (Read Disputes).
   *
   * @see https://docs.shoply.gg/api-reference/disputes/get-a-disputes-pdf
   */
  packet(disputeId: string, options?: RequestOptions): Promise<Response>;
  /**
   * **Add a file to a dispute's answer**
   *
   * One of the store's own files for the answer, sent as `multipart/form-data` in a field called `file`: a PDF, a PNG or a JPEG, its type read from the file itself. One of each `kind`, a new one in place of the one there was, and all of a dispute's files together up to 4 MB, which with Shoply's PDF is within Stripe's limit. Sent to Stripe as `customer_communication`, `receipt` and `service_documentation`, and to Revolut, PayPal and Adyen beside Shoply's PDF. For a dispute answered to Adyen, a PNG is refused as `invalid_type`, and a PDF over 2 MB as `too_large`: Adyen takes neither. A store adds at most 30 files every 10 minutes.
   *
   * Needs the `disputes.write` permission (Answer Disputes).
   *
   * @see https://docs.shoply.gg/api-reference/disputes/add-a-file-to-a-disputes-answer
   */
  addFile(disputeId: string, params: DisputesAddFileParams, options?: RequestOptions): Promise<DisputesAddFileResult>;
  /**
   * **Remove a file from a dispute's answer**
   *
   * While the answer can still change.
   *
   * Needs the `disputes.write` permission (Answer Disputes).
   *
   * @see https://docs.shoply.gg/api-reference/disputes/remove-a-file-from-a-disputes-answer
   */
  deleteFile(disputeId: string, fileId: string, options?: RequestOptions): Promise<DisputesDeleteFileResult>;
  /**
   * **Hide or show what an order delivered**
   *
   * Hides the order's license keys, files and instructions from its buyer for this dispute, on the order's page, in the customer panel and at its download links, or shows them again. What was emailed cannot be taken back. A dispute that is won shows them again by itself.
   *
   * Needs the `disputes.write` permission (Answer Disputes).
   *
   * @see https://docs.shoply.gg/api-reference/disputes/hide-or-show-what-an-order-delivered
   */
  access(disputeId: string, params: DisputesAccessParams, options?: RequestOptions): Promise<DisputesAccessResult>;
  /**
   * **Blacklist a dispute's buyer**
   *
   * Puts the buyer's email and the addresses they ordered from on the blacklist, as a dispute does by itself where the store's settings say to. Rules already there are left as they are.
   *
   * Needs the `disputes.write` permission (Answer Disputes).
   *
   * @see https://docs.shoply.gg/api-reference/disputes/blacklist-a-disputes-buyer
   */
  blacklist(disputeId: string, options?: RequestOptions): Promise<DisputesBlacklistResult>;
  /**
   * **Get dispute settings**
   *
   * What happens by itself when a dispute opens, how one is answered, and who is told. Amounts are in the store's currency, `currency`.
   *
   * Needs the `disputes.read` permission (Read Disputes).
   *
   * @see https://docs.shoply.gg/api-reference/disputes/get-dispute-settings
   */
  settings(options?: RequestOptions): Promise<DisputesSettingsResult>;
  /**
   * **Change dispute settings**
   *
   * Changes the settings named and keeps the rest. Accepting small ones and submitting before the deadline are for disputes answered from Shoply (Stripe's, Revolut's, Adyen's, and PayPal's with API keys), and run every few minutes: a dispute under `acceptUnder` that nobody has started an answer for is accepted, and with a day left an answer is submitted as it stands, or where there is none, only when the buyer opened their order or took a file from the address they paid from. Nothing over `askAbove` is sent or accepted by itself where `askAboveOn` is on.
   *
   * Needs the `disputes.write` permission (Answer Disputes).
   *
   * @see https://docs.shoply.gg/api-reference/disputes/change-dispute-settings
   */
  updateSettings(params?: DisputesUpdateSettingsParams, options?: RequestOptions): Promise<DisputesUpdateSettingsResult>;
}

export interface ShoplyResourcesFinance {
  /**
   * **Get finance access**
   *
   * Whether the store may use Finance yet (`open`), and what its business details still lack if not (`missing`). They are set in the dashboard's settings.
   *
   * Needs the `finance.read` permission (Read Finance).
   *
   * @see https://docs.shoply.gg/api-reference/finance/get-finance-access
   */
  access(options?: RequestOptions): Promise<FinanceAccessResult>;
  /**
   * **Get profit**
   *
   * What the store kept in a period and how that is made up, beside the period before: net sales, the cost of goods, payment fees, affiliate commission, expenses and net profit, twelve months of sales and profit, and every product with what each variant sold and cost. A sale is what the buyer paid: at its sale price, after its coupon and any affiliate link's discount, without tax. Payment fees are worked out from the rates the store typed, never read from a provider, so they can be slightly off. A store makes at most 20 reports every 10 minutes, counting this one, the other report, their files and the dashboard's Generate Report together: after that the answer is 429. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `finance.read` permission (Read Finance). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/finance/get-profit
   */
  profit(params?: FinanceProfitParams, options?: RequestOptions): Promise<FinanceProfitResult>;
  /**
   * **Get the books**
   *
   * The books for a period: the profit and loss line by line beside the period before, where the buyers were, and what each payment method took in. Gross sales are at the prices before any sale, and what sales, discounts, refunds and chargebacks took off is a line each; affiliate commission is a cost of sales. Tax collected is not income and is in none of it but the tax report. A store makes at most 20 reports every 10 minutes, counting this one, the other report, their files and the dashboard's Generate Report together: after that the answer is 429. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `finance.read` permission (Read Finance). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/finance/get-the-books
   */
  accounting(params?: FinanceAccountingParams, options?: RequestOptions): Promise<FinanceAccountingResult>;
  /**
   * **Export the books**
   *
   * One of a period's files: `statement` (the profit and loss as a PDF, or as a CSV with `format=csv`), `countries`, `transactions` or `tax` (each a CSV), or `pack`, a ZIP of all of them with the expenses beside them. A store makes at most 20 reports every 10 minutes, counting this one, the other report, their files and the dashboard's Generate Report together: after that the answer is 429. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `finance.read` permission (Read Finance). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/finance/export-the-books
   */
  export(what: string, params?: FinanceExportParams, options?: RequestOptions): Promise<Response>;
  /**
   * **Set a variant's cost**
   *
   * What one sale of a variant costs the store, as an amount or as a share of what it sold for: what the buyer paid for it, after its sale price and discounts, without tax. Send neither to clear it. The cost is stamped onto each order line when the order is paid, so a later change does not rewrite old months. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `finance.write` permission (Change Finance).
   *
   * @see https://docs.shoply.gg/api-reference/finance/set-a-variants-cost
   */
  setCost(variantId: string, params?: FinanceSetCostParams, options?: RequestOptions): Promise<FinanceSetCostResult>;
  /**
   * **Get payment fee rates**
   *
   * The rate the store has typed for each payment provider: what that provider keeps of a payment, as a percent and a fixed amount. Profit takes payment fees from these. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `finance.read` permission (Read Finance).
   *
   * @see https://docs.shoply.gg/api-reference/finance/get-payment-fee-rates
   */
  paymentCosts(options?: RequestOptions): Promise<FinancePaymentCostsResult>;
  /**
   * **Set payment fee rates**
   *
   * Saves the rates for the providers named. A refusal names the provider and the field: `stripe.percent`. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `finance.write` permission (Change Finance).
   *
   * @see https://docs.shoply.gg/api-reference/finance/set-payment-fee-rates
   */
  setPaymentCosts(params: FinanceSetPaymentCostsParams, options?: RequestOptions): Promise<FinanceSetPaymentCostsResult>;
}

export interface ShoplyResourcesTax {
  /**
   * **Get tax settings**
   *
   * Whether the store collects tax at checkout, whether its prices include it, the places it collects in and at what rate, and each country's built-in rate. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `finance.read` permission (Read Finance).
   *
   * @see https://docs.shoply.gg/api-reference/tax/get-tax-settings
   */
  show(options?: RequestOptions): Promise<TaxShowResult>;
  /**
   * **Update tax settings**
   *
   * Changes the store's three tax switches. Only what is sent changes. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `finance.write` permission (Change Finance).
   *
   * @see https://docs.shoply.gg/api-reference/tax/update-tax-settings
   */
  update(params?: TaxUpdateParams, options?: RequestOptions): Promise<TaxUpdateResult>;
  /**
   * **Add or change tax rates**
   *
   * Adds each place the store collects tax in, or changes its rate where it already does. The United States is taxed a state at a time. Answers the tax settings as they now stand. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `finance.write` permission (Change Finance).
   *
   * @see https://docs.shoply.gg/api-reference/tax/add-or-change-tax-rates
   */
  setRates(params: TaxSetRatesParams, options?: RequestOptions): Promise<TaxSetRatesResult>;
  /**
   * **Remove a tax rate**
   *
   * Stops collecting tax in a place. A country named with no state goes with all of its states. Answers the tax settings as they now stand. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `finance.write` permission (Change Finance).
   *
   * @see https://docs.shoply.gg/api-reference/tax/remove-a-tax-rate
   */
  deleteRate(params: TaxDeleteRateParams, options?: RequestOptions): Promise<TaxDeleteRateResult>;
}

export interface ShoplyResourcesExpenses {
  /**
   * **List expenses**
   *
   * A period's expenses, newest first, up to 2,000 of them. `meta.totals` is what the expenses matched come to, counting every one, and `meta.groups` the same by category. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.read` permission (Read Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expenses/list-expenses
   */
  list(params?: ExpensesListParams, options?: RequestOptions): Promise<ExpensesListResult>;
  /**
   * **Create an expense**
   *
   * Files an expense: what a bot paid a member of staff, a provider's invoice a script read. A store holds up to 50,000. A recurring expense is set up with its own route. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expenses/create-an-expense
   */
  create(params: ExpensesCreateParams, options?: RequestOptions): Promise<ExpensesCreateResult>;
  /**
   * **Get an expense summary**
   *
   * A period's spending at a glance: the total beside the period before, what repeats, the largest category, how many have receipts, twelve months of totals and what is coming up. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.read` permission (Read Expenses). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/expenses/get-an-expense-summary
   */
  summary(params?: ExpensesSummaryParams, options?: RequestOptions): Promise<ExpensesSummaryResult>;
  /**
   * **Get what an expense can be**
   *
   * What an expense is made from: the store's expense categories, who it has paid before, the ways of paying, the currencies an amount can be sent in, and every limit. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.read` permission (Read Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expenses/get-what-an-expense-can-be
   */
  setup(options?: RequestOptions): Promise<ExpensesSetupResult>;
  /**
   * **Export expenses**
   *
   * The expenses the same filters would list, as a CSV file or as a PDF on the store's letterhead. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.read` permission (Read Expenses). It is one of the heavier reads, and is counted against a smaller budget of its own: 60 a minute for each key.
   *
   * @see https://docs.shoply.gg/api-reference/expenses/export-expenses
   */
  export(params?: ExpensesExportParams, options?: RequestOptions): Promise<Response>;
  /**
   * **Update an expense**
   *
   * Changes an expense. A field left out stays as it is. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expenses/update-an-expense
   */
  update(expenseId: string, params: ExpensesUpdateParams, options?: RequestOptions): Promise<ExpensesUpdateResult>;
  /**
   * **Delete an expense**
   *
   * Removes an expense, and its receipt with it. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expenses/delete-an-expense
   */
  delete(expenseId: string, options?: RequestOptions): Promise<ExpensesDeleteResult>;
  /**
   * **Get an expense's receipt**
   *
   * A link to the expense's receipt that works for five minutes. A receipt is private: there is no address for it that lasts. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.read` permission (Read Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expenses/get-an-expenses-receipt
   */
  receipt(expenseId: string, options?: RequestOptions): Promise<ExpensesReceiptResult>;
  /**
   * **Start a receipt upload**
   *
   * The first of three steps to attach a receipt: a PDF, PNG, JPG or WEBP. This one says what the file is and answers a signed address to send it to. Then send the file to that address with a `PUT`. Then call "Finish a receipt upload". Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expenses/start-a-receipt-upload
   */
  addReceipt(expenseId: string, params: ExpensesAddReceiptParams, options?: RequestOptions): Promise<ExpensesAddReceiptResult>;
  /**
   * **Delete an expense's receipt**
   *
   * Removes the receipt and keeps the expense. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expenses/delete-an-expenses-receipt
   */
  deleteReceipt(expenseId: string, options?: RequestOptions): Promise<ExpensesDeleteReceiptResult>;
  /**
   * **Finish a receipt upload**
   *
   * The last step of attaching a receipt: says the file has been sent. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expenses/finish-a-receipt-upload
   */
  finishReceipt(expenseId: string, options?: RequestOptions): Promise<ExpensesFinishReceiptResult>;
}

export interface ShoplyResourcesExpenseCategories {
  /**
   * **List expense categories**
   *
   * The categories the store files its expenses in, in its own order. A store holds up to 50. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.read` permission (Read Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expense-setup/list-expense-categories
   */
  list(options?: RequestOptions): Promise<ExpenseCategoriesListResult>;
  /**
   * **Create an expense category**
   *
   * Adds a category to file expenses in. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expense-setup/create-an-expense-category
   */
  create(params: ExpenseCategoriesCreateParams, options?: RequestOptions): Promise<ExpenseCategoriesCreateResult>;
  /**
   * **Update an expense category**
   *
   * Renames a category or changes its icon. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expense-setup/update-an-expense-category
   */
  update(categoryId: string, params: ExpenseCategoriesUpdateParams, options?: RequestOptions): Promise<ExpenseCategoriesUpdateResult>;
  /**
   * **Delete an expense category**
   *
   * Removes the category. The expenses filed under it stay, in no category: `moved` says how many. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expense-setup/delete-an-expense-category
   */
  delete(categoryId: string, options?: RequestOptions): Promise<ExpenseCategoriesDeleteResult>;
  /**
   * **Sort expense categories**
   *
   * Sets the order the categories are listed in. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expense-setup/sort-expense-categories
   */
  sort(params: ExpenseCategoriesSortParams, options?: RequestOptions): Promise<ExpenseCategoriesSortResult>;
}

export interface ShoplyResourcesRecurringExpenses {
  /**
   * **List recurring expenses**
   *
   * The expenses that come round every month or year, with the day each is next due. A store holds up to 100. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.read` permission (Read Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expense-setup/list-recurring-expenses
   */
  list(options?: RequestOptions): Promise<RecurringExpensesListResult>;
  /**
   * **Create a recurring expense**
   *
   * Adds an expense that comes round. When it falls due it waits to be answered: paid, or skipped this once. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expense-setup/create-a-recurring-expense
   */
  create(params: RecurringExpensesCreateParams, options?: RequestOptions): Promise<RecurringExpensesCreateResult>;
  /**
   * **Update a recurring expense**
   *
   * Changes a recurring expense. A field left out stays as it is. The expenses it has already written are not changed. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expense-setup/update-a-recurring-expense
   */
  update(recurringId: string, params: RecurringExpensesUpdateParams, options?: RequestOptions): Promise<RecurringExpensesUpdateResult>;
  /**
   * **Delete a recurring expense**
   *
   * Stops it coming round. The expenses it has already written stay. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expense-setup/delete-a-recurring-expense
   */
  delete(recurringId: string, options?: RequestOptions): Promise<RecurringExpensesDeleteResult>;
  /**
   * **Mark a recurring expense as paid**
   *
   * Answers one that is due: it was paid. The expense is filed under the day it fell due, and the recurring expense moves to its next date. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expense-setup/mark-a-recurring-expense-as-paid
   */
  paid(recurringId: string, options?: RequestOptions): Promise<RecurringExpensesPaidResult>;
  /**
   * **Skip a recurring expense**
   *
   * Answers one that is due: not this time. Nothing is filed, and it moves to its next date. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expense-setup/skip-a-recurring-expense
   */
  skip(recurringId: string, options?: RequestOptions): Promise<RecurringExpensesSkipResult>;
}

export interface ShoplyResourcesExpenseRules {
  /**
   * **List expense rules**
   *
   * The store's rules for filing an expense that names no category: a phrase in the payee, and the category it means. A store holds up to 100. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.read` permission (Read Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expense-setup/list-expense-rules
   */
  list(options?: RequestOptions): Promise<ExpenseRulesListResult>;
  /**
   * **Create an expense rule**
   *
   * Adds a rule: an expense whose payee contains the phrase is filed in the category. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expense-setup/create-an-expense-rule
   */
  create(params: ExpenseRulesCreateParams, options?: RequestOptions): Promise<ExpenseRulesCreateResult>;
  /**
   * **Delete an expense rule**
   *
   * Removes the rule. Expenses it has already filed stay where they are. Refused with `business_details_required` until the store has its business details.
   *
   * Needs the `expenses.write` permission (Change Expenses).
   *
   * @see https://docs.shoply.gg/api-reference/expense-setup/delete-an-expense-rule
   */
  delete(ruleId: string, options?: RequestOptions): Promise<ExpenseRulesDeleteResult>;
}

export interface ShoplyResourcesRequests {
  /**
   * **List API requests**
   *
   * The requests made with this store's API keys, newest first, without what was sent or answered. Requests are kept for 30 days. `meta.keptDays` says so.
   *
   * Needs the `logs.read` permission (Read API Requests).
   *
   * @see https://docs.shoply.gg/api-reference/api-requests/list-api-requests
   */
  list(params?: RequestsListParams, options?: RequestOptions): PagePromise<RequestsListItem>;
  /**
   * **Get an API request**
   *
   * One request, with what was sent and what came back. Long bodies are cut short, and values that are secrets or goods (a password, license keys going into stock) are not kept. A request's ID is the `X-Request-Id` header of its answer.
   *
   * Needs the `logs.read` permission (Read API Requests).
   *
   * @see https://docs.shoply.gg/api-reference/api-requests/get-an-api-request
   */
  show(requestId: string, options?: RequestOptions): Promise<RequestsShowResult>;
}

export interface ShoplyResourcesWebhooks {
  /**
   * **List webhook endpoints**
   *
   * The store's webhook endpoints, each with the events it is sent and how its last delivery went. `recentDeliveries` is how its last twenty stand, oldest first: `delivered`, `failed` or `pending`. `meta.events` is every event there is. A store holds up to 20 endpoints.
   *
   * Needs the `webhooks.read` permission (Read Webhooks).
   *
   * @see https://docs.shoply.gg/api-reference/webhook-endpoints/list-webhook-endpoints
   */
  list(options?: RequestOptions): Promise<WebhooksListResult>;
  /**
   * **Create a webhook endpoint**
   *
   * Adds an address for the store's events to be sent to. `secret` in the answer is what every delivery to it is signed with: it is answered here and never again, so keep it. The store's owner is told by email that a webhook was added.
   *
   * Needs the `webhooks.write` permission (Change Webhooks).
   *
   * @see https://docs.shoply.gg/api-reference/webhook-endpoints/create-a-webhook-endpoint
   */
  create(params: WebhooksCreateParams, options?: RequestOptions): Promise<WebhooksCreateResult>;
  /**
   * **Get a webhook endpoint**
   *
   * One endpoint. Never its signing secret.
   *
   * Needs the `webhooks.read` permission (Read Webhooks).
   *
   * @see https://docs.shoply.gg/api-reference/webhook-endpoints/get-a-webhook-endpoint
   */
  show(endpointId: string, options?: RequestOptions): Promise<WebhooksShowResult>;
  /**
   * **Update a webhook endpoint**
   *
   * Saves the endpoint whole: its address, its events and its note. `enabled` stays as it is when left out. Switching an endpoint on is also what starts one again that Shoply had paused for failing. Its signing secret stays the same.
   *
   * Needs the `webhooks.write` permission (Change Webhooks).
   *
   * @see https://docs.shoply.gg/api-reference/webhook-endpoints/update-a-webhook-endpoint
   */
  update(endpointId: string, params: WebhooksUpdateParams, options?: RequestOptions): Promise<WebhooksUpdateResult>;
  /**
   * **Delete a webhook endpoint**
   *
   * Removes the endpoint, and with it the record of what was sent to it.
   *
   * Needs the `webhooks.write` permission (Change Webhooks).
   *
   * @see https://docs.shoply.gg/api-reference/webhook-endpoints/delete-a-webhook-endpoint
   */
  delete(endpointId: string, options?: RequestOptions): Promise<WebhooksDeleteResult>;
  /**
   * **Replace a signing secret**
   *
   * Gives the endpoint a new signing secret, answered here and never again. The old one signs nothing from this moment, so give your server the new one before its next delivery is checked.
   *
   * Needs the `webhooks.write` permission (Change Webhooks).
   *
   * @see https://docs.shoply.gg/api-reference/webhook-endpoints/replace-a-signing-secret
   */
  rotateSecret(endpointId: string, options?: RequestOptions): Promise<WebhooksRotateSecretResult>;
  /**
   * **Send a test delivery**
   *
   * Sends a `webhook.test` event to the endpoint now, whatever it subscribes to, and answers what your server said. It is signed like any other and is in the delivery log. A store may ask for 30 test and resent deliveries in ten minutes.
   *
   * Needs the `webhooks.write` permission (Change Webhooks).
   *
   * @see https://docs.shoply.gg/api-reference/webhook-endpoints/send-a-test-delivery
   */
  test(endpointId: string, options?: RequestOptions): Promise<WebhooksTestResult>;
}

export interface ShoplyResourcesWebhookDeliveries {
  /**
   * **List webhook deliveries**
   *
   * What was sent to the store's endpoints, newest first, without the bodies. A delivery is one event on its way to one endpoint: `pending` while it is being tried, then `delivered` or `failed`. Deliveries are kept for 30 days.
   *
   * Needs the `webhooks.read` permission (Read Webhooks).
   *
   * @see https://docs.shoply.gg/api-reference/webhook-deliveries/list-webhook-deliveries
   */
  list(params?: WebhookDeliveriesListParams, options?: RequestOptions): PagePromise<WebhookDeliveriesListItem>;
  /**
   * **Get a webhook delivery**
   *
   * One delivery, with the body that was sent (`payload`) and every try at sending it (`tries`): the status your server answered with, the start of what it answered, or why it could not be reached.
   *
   * Needs the `webhooks.read` permission (Read Webhooks).
   *
   * @see https://docs.shoply.gg/api-reference/webhook-deliveries/get-a-webhook-delivery
   */
  show(deliveryId: string, options?: RequestOptions): Promise<WebhookDeliveriesShowResult>;
  /**
   * **Resend a webhook delivery**
   *
   * Sends the same body again, to the endpoint's address and under its secret as they are now, and answers the delivery with the new try in it. The delivery's ID is the same, so a server that has already taken it can tell.
   *
   * Needs the `webhooks.write` permission (Change Webhooks).
   *
   * @see https://docs.shoply.gg/api-reference/webhook-deliveries/resend-a-webhook-delivery
   */
  resend(deliveryId: string, options?: RequestOptions): Promise<WebhookDeliveriesResendResult>;
}

export interface ShoplyResources {
  key: ShoplyResourcesKey;
  store: ShoplyResourcesStore;
  domain: ShoplyResourcesDomain;
  paymentMethods: ShoplyResourcesPaymentMethods;
  analytics: ShoplyResourcesAnalytics;
  storefronts: ShoplyResourcesStorefronts;
  routing: ShoplyResourcesRouting;
  customMethods: ShoplyResourcesCustomMethods;
  products: ShoplyResourcesProducts;
  productImages: ShoplyResourcesProductImages;
  stock: ShoplyResourcesStock;
  categories: ShoplyResourcesCategories;
  upsells: ShoplyResourcesUpsells;
  subscriptions: ShoplyResourcesSubscriptions;
  orders: ShoplyResourcesOrders;
  invoices: ShoplyResourcesInvoices;
  reviews: ShoplyResourcesReviews;
  coupons: ShoplyResourcesCoupons;
  couponCategories: ShoplyResourcesCouponCategories;
  couponPopup: ShoplyResourcesCouponPopup;
  sales: ShoplyResourcesSales;
  blog: ShoplyResourcesBlog;
  blogCategories: ShoplyResourcesBlogCategories;
  blogPosts: ShoplyResourcesBlogPosts;
  seo: ShoplyResourcesSeo;
  redirects: ShoplyResourcesRedirects;
  brokenLinks: ShoplyResourcesBrokenLinks;
  sitemap: ShoplyResourcesSitemap;
  cartRecovery: ShoplyResourcesCartRecovery;
  winBack: ShoplyResourcesWinBack;
  subscribers: ShoplyResourcesSubscribers;
  customers: ShoplyResourcesCustomers;
  customerTags: ShoplyResourcesCustomerTags;
  affiliates: ShoplyResourcesAffiliates;
  affiliateProgramme: ShoplyResourcesAffiliateProgramme;
  tickets: ShoplyResourcesTickets;
  blacklist: ShoplyResourcesBlacklist;
  fraudEvents: ShoplyResourcesFraudEvents;
  fraudSettings: ShoplyResourcesFraudSettings;
  disputes: ShoplyResourcesDisputes;
  finance: ShoplyResourcesFinance;
  tax: ShoplyResourcesTax;
  expenses: ShoplyResourcesExpenses;
  expenseCategories: ShoplyResourcesExpenseCategories;
  recurringExpenses: ShoplyResourcesRecurringExpenses;
  expenseRules: ShoplyResourcesExpenseRules;
  requests: ShoplyResourcesRequests;
  webhooks: ShoplyResourcesWebhooks;
  webhookDeliveries: ShoplyResourcesWebhookDeliveries;
}

export interface ShoplyCustomerResourcesOrders {
  /**
   * **Get an order**
   *
   * One of the buyer's orders, as its page in the customer panel shows it: each line, and once it is completed what it delivered (keys, the answers of a dynamic delivery, files with their download links, instructions). An order of another address answers as one that does not exist.
   *
   * Keys and files are left out while the store holds them back: an ended or paused subscription's order, or one whose payment is disputed. `productPath` is the product's path on the store's own site. Opening an order is recorded for the store, as on its order page, as a look from the store's own site.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 300 reads in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/get-an-order
   */
  show(orderId: string, options?: RequestOptions): Promise<CustomerOrdersShowResult>;
}

export interface ShoplyCustomerResourcesAffiliatePayouts {
  /**
   * **Ask for a payout**
   *
   * Asks the seller to pay the affiliate, where the store allows payouts. The amount comes off their affiliate balance now and goes back if the seller declines or the request is taken back. One at a time. Shoply moves no money: the seller pays it and marks it paid.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/ask-for-a-payout
   */
  create(params: CustomerAffiliatePayoutsCreateParams, options?: RequestOptions): Promise<CustomerAffiliatePayoutsCreateResult>;
  /**
   * **Take back a payout request**
   *
   * Takes back a request the seller has not answered, and puts its amount back on the affiliate balance. One already answered is `payout_answered`.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/take-back-a-payout-request
   */
  cancel(payoutId: string, options?: RequestOptions): Promise<CustomerAffiliatePayoutsCancelResult>;
}

export interface ShoplyCustomerResourcesAffiliate {
  payouts: ShoplyCustomerResourcesAffiliatePayouts;
  /**
   * **Get the affiliate page**
   *
   * The buyer as an affiliate of the store: their link and its code, their rates, clicks and orders, what they have earned, their affiliate balance, their payouts and its history, and what the store lets them do (`can`). One who is not an affiliate is answered `member: false` with what joining would give them, where the store lets buyers join. A store with no programme answers `no_programme`.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 300 reads in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/get-the-affiliate-page
   */
  show(options?: RequestOptions): Promise<CustomerAffiliateShowResult>;
  /**
   * **Join the affiliate programme**
   *
   * Makes the buyer an affiliate at the store's own rates, with a link that works at once, where the store lets buyers join. Answers the affiliate page.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/join-the-affiliate-programme
   */
  join(options?: RequestOptions): Promise<CustomerAffiliateJoinResult>;
  /**
   * **Change the link's code**
   *
   * What the affiliate's link ends in, where the store lets affiliates choose it. The old link stops working. Answers the affiliate page.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/change-the-links-code
   */
  link(params: CustomerAffiliateLinkParams, options?: RequestOptions): Promise<CustomerAffiliateLinkResult>;
  /**
   * **Move commission to store balance**
   *
   * Moves commission from the affiliate balance to the buyer's store balance, to spend at checkout, where the store allows it.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/move-commission-to-store-balance
   */
  toStore(params: CustomerAffiliateToStoreParams, options?: RequestOptions): Promise<CustomerAffiliateToStoreResult>;
}

export interface ShoplyCustomerResourcesSubscriptions {
  /**
   * **List subscriptions**
   *
   * The buyer's subscriptions at the store, with each one's renewal waiting to be paid, if any. `meta` says what the store lets a buyer do: cancel (and whether at once or when what was paid for runs out), undo a cancellation, pause and for how long, and give another card.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 300 reads in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/list-subscriptions
   */
  list(options?: RequestOptions): Promise<CustomerSubscriptionsListResult>;
  /**
   * **Cancel a subscription**
   *
   * As the store's setting says: when what was paid for runs out, or at once. Refused with `cancel_off` where the store does not let buyers cancel. Answers the list again.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/cancel-a-subscription
   */
  cancel(subscriptionId: string, options?: RequestOptions): Promise<CustomerSubscriptionsCancelResult>;
  /**
   * **Undo a cancellation**
   *
   * Keeps a subscription cancelled for the end of its period renewing, until that period runs out, where the store allows it (`undo_off`). Answers the list again.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/undo-a-cancellation
   */
  undo(subscriptionId: string, options?: RequestOptions): Promise<CustomerSubscriptionsUndoResult>;
  /**
   * **Pause a subscription**
   *
   * Nothing renews until it resumes, and where the store takes access back its keys and files are hidden until then too. It resumes by itself after `days`, or sooner with Resume a subscription. Up to the store's longest pause, as often a year as it allows (`pausesLeft` on each subscription). Refused with `pause_off` where the store does not let buyers pause. Answers the list again.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/pause-a-subscription
   */
  pause(subscriptionId: string, params: CustomerSubscriptionsPauseParams, options?: RequestOptions): Promise<CustomerSubscriptionsPauseResult>;
  /**
   * **Resume a subscription**
   *
   * Ends a pause the buyer started, now. One the store paused is the store's to end. Answers the list again.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/resume-a-subscription
   */
  resume(subscriptionId: string, options?: RequestOptions): Promise<CustomerSubscriptionsResumeResult>;
  /**
   * **Give another card**
   *
   * The address of Stripe's own page where the buyer gives another card for a subscription charged by itself, where the store allows it (`canChangeCard`). Send the buyer there. Once they are done, Stripe sends them back to the store's customer panel, which says whether the card was saved.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/give-another-card
   */
  card(subscriptionId: string, options?: RequestOptions): Promise<CustomerSubscriptionsCardResult>;
}

export interface ShoplyCustomerResourcesTickets {
  /**
   * **List support tickets**
   *
   * The buyer's support tickets at the store, the latest message first. `status` is `open` (waiting on the store), `answered` or `resolved`. `meta.on` is whether the store takes tickets (off, the list is empty and nothing can be opened), `meta.canOpen` whether the buyer may open one now (one open ticket at a time), `meta.orders` the orders a ticket can be about, each with its `label`, and `meta.limits` what a message may hold.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 300 reads in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/list-support-tickets
   */
  list(options?: RequestOptions): Promise<CustomerTicketsListResult>;
  /**
   * **Open a support ticket**
   *
   * Opens a ticket with its first message, which the store is told of. One open ticket a buyer at a time (`ticket_open`), 250 open at a store (`store_full`), and 100 messages a day a buyer (`daily_limit`). Refused with `tickets_off` where the store takes none. Pictures are sent from the customer panel. Answers the ticket as Get a support ticket does, and the list in `meta`.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/open-a-support-ticket
   */
  create(params: CustomerTicketsCreateParams, options?: RequestOptions): Promise<CustomerTicketsCreateResult>;
  /**
   * **Get a support ticket**
   *
   * A ticket with its `conversation`, oldest first: each message's `from` (`buyer` or `store`), `body`, `pictures` and `createdAt`. A picture is named here and shown in the customer panel. `canReopenUntil` is the last moment writing on a resolved ticket opens it again.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 300 reads in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/get-a-support-ticket
   */
  show(ticketId: string, options?: RequestOptions): Promise<CustomerTicketsShowResult>;
  /**
   * **Write on a support ticket**
   *
   * Writes on the ticket as the buyer, which the store is told of. On a resolved ticket within 30 days it opens it again, if the buyer has no other open ticket; after that, `too_old`. Answers the ticket.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/write-on-a-support-ticket
   */
  reply(ticketId: string, params: CustomerTicketsReplyParams, options?: RequestOptions): Promise<CustomerTicketsReplyResult>;
  /**
   * **Resolve a support ticket**
   *
   * Marks the buyer's ticket resolved, as their "Mark as Resolved" does. Answers the ticket.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/resolve-a-support-ticket
   */
  resolve(ticketId: string, options?: RequestOptions): Promise<CustomerTicketsResolveResult>;
}

export interface ShoplyCustomerResources {
  orders: ShoplyCustomerResourcesOrders;
  affiliate: ShoplyCustomerResourcesAffiliate;
  subscriptions: ShoplyCustomerResourcesSubscriptions;
  tickets: ShoplyCustomerResourcesTickets;
  /**
   * **Send a sign-in code**
   *
   * Emails a six-digit code to the address a buyer typed, for them to type back with Sign in with the code. The code works for 10 minutes, five tries.
   *
   * The answer is the same for any address, and a code is only mailed to an address that has orders at the store, so this cannot be used to find out who has bought there. One address is sent a code a minute at most, five an hour and ten a day: past that the answer is `code_cooldown` with `resendIn`, the seconds to wait. A store sends 60 codes an hour at most, and past that, or on a busy hour for the whole platform, the answer is `store_busy`.
   *
   * Call it from the buyer's own device. It is counted for the address that asks, 10 an hour, so a server asking for every buyer would run out at once.
   *
   * It is counted for the address that asks: 10 an hour.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/send-a-sign-in-code
   */
  login(params: CustomerLoginParams, options?: RequestOptions): Promise<CustomerLoginResult>;
  /**
   * **Sign in with the code**
   *
   * Trades the emailed code for the buyer's token, which every other route of the Customer API takes as `Authorization: Bearer shoply_ct_...`. It reaches this buyer's own orders at this store and nothing else, and works for 30 days.
   *
   * Keep it where only your page or app can read it, never in an address. A buyer holds 20 tokens at a store at most: a 21st ends their oldest.
   *
   * A wrong code is `code_wrong`, and a code past its 10 minutes or its five tries is `code_expired`. After 20 wrong codes in a day for one address, none is checked for it until the day is over (`code_paused`).
   *
   * It is counted for the address that asks: 30 in fifteen minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/sign-in-with-the-code
   */
  verify(params: CustomerVerifyParams, options?: RequestOptions): Promise<CustomerVerifyResult>;
  /**
   * **Get the signed-in buyer**
   *
   * Everything the customer panel's first page shows: the buyer's email, what they have spent, their store balance, their 200 newest orders, and the downloads, files and setup instructions their paid orders hand over.
   *
   * `affiliate` is null unless the store has an affiliate programme the buyer is in or may join, and `subscriptions` says whether they have ever had one. Keys are not listed here: Get an order has them.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 300 reads in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/get-the-signed-in-buyer
   */
  show(options?: RequestOptions): Promise<CustomerShowResult>;
  /**
   * **Sign out**
   *
   * Ends the token the request is made with. Their other tokens, and the customer panel, stay signed in.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/sign-out
   */
  logout(options?: RequestOptions): Promise<CustomerLogoutResult>;
  /**
   * **Sign out everywhere**
   *
   * Ends every token the buyer holds at this store, this one too, and signs them out of its customer panel. `sessions` says how many ended.
   *
   * Needs the buyer's token: `Authorization: Bearer shoply_ct_...`, from Sign in with the code.
   *
   * It is counted for the buyer's token: 30 changes in ten minutes.
   *
   * @see https://docs.shoply.gg/api-reference/customer-api/sign-out-everywhere
   */
  logoutEverywhere(options?: RequestOptions): Promise<CustomerLogoutEverywhereResult>;
}

/** Every webhook event, by name. */
export type WebhookEventName =
  | "order.created"
  | "order.payment_started"
  | "order.paid"
  | "order.delivered"
  | "order.redelivered"
  | "order.email_failed"
  | "order.cancelled"
  | "order.refunded"
  | "order.disputed"
  | "order.chargeback"
  | "order.payment_submitted"
  | "order.rerouted"
  | "review.created"
  | "review.removed"
  | "review.flag_declined"
  | "stock.low"
  | "stock.out"
  | "product.created"
  | "product.updated"
  | "product.deleted"
  | "customer.created"
  | "customer.balance_changed"
  | "customer.tagged"
  | "customer.untagged"
  | "affiliate.created"
  | "affiliate.payout_requested"
  | "affiliate.payout_answered"
  | "affiliate.balance_changed"
  | "subscription.started"
  | "subscription.renewed"
  | "subscription.cancelled"
  | "subscription.ended"
  | "subscription.paused"
  | "subscription.resumed"
  | "subscription.charge_failed"
  | "cart.email_sent"
  | "cart.recovered"
  | "cart.unsubscribed"
  | "winback.email_sent"
  | "winback.won_back"
  | "subscriber.subscribed"
  | "subscriber.unsubscribed"
  | "routing.processor_paused"
  | "routing.processor_resumed"
  | "dispute.opened"
  | "dispute.updated"
  | "dispute.won"
  | "dispute.lost"
  | "dispute.closed"
  | "app.connected"
  | "app.disconnected"
  | "ticket.opened"
  | "ticket.message"
  | "ticket.resolved"
  | "ticket.reopened"
  | "fraud.checkout_blocked"
  | "webhook.test";

/** What each event's `data` holds. */
export interface WebhookEventData {
  /**
   * An order was made: a buyer started a checkout, or the store raised an invoice.
   *
   * `data`: The order, as [Get an order](https://docs.shoply.gg/api-reference/orders/get-an-order) answers it, with `payments`, every payment opened for it, and `invoice` where the store raised it as one.
   */
  "order.created": OrdersShowResult & Record<string, unknown>;
  /**
   * The buyer pressed Pay and a payment was opened with a payment method.
   *
   * `data`: The order, as [Get an order](https://docs.shoply.gg/api-reference/orders/get-an-order) answers it, with `payments`, every payment opened for it, and `invoice` where the store raised it as one.
   */
  "order.payment_started": OrdersShowResult & Record<string, unknown>;
  /**
   * An order was paid for and is complete.
   *
   * `data`: The order, as [Get an order](https://docs.shoply.gg/api-reference/orders/get-an-order) answers it, with `payments`, every payment opened for it, and `invoice` where the store raised it as one.
   */
  "order.paid": OrdersShowResult & Record<string, unknown>;
  /**
   * What an order bought was handed over: license keys, files, a dynamic delivery's answer.
   *
   * `data`: The order, as [Get an order](https://docs.shoply.gg/api-reference/orders/get-an-order) answers it, with `payments`, every payment opened for it, and `invoice` where the store raised it as one.
   */
  "order.delivered": OrdersShowResult & Record<string, unknown>;
  /**
   * An order was delivered again with fresh license keys.
   *
   * `data`: The order, as [Get an order](https://docs.shoply.gg/api-reference/orders/get-an-order) answers it, with `payments`, every payment opened for it, and `invoice` where the store raised it as one.
   */
  "order.redelivered": OrdersShowResult & Record<string, unknown>;
  /**
   * An order's delivery email could not be sent.
   *
   * `data`: The order, as [Get an order](https://docs.shoply.gg/api-reference/orders/get-an-order) answers it, with `payments`, every payment opened for it, and `invoice` where the store raised it as one.
   */
  "order.email_failed": OrdersShowResult & Record<string, unknown>;
  /**
   * An order was cancelled: by its buyer, by the store (a custom payment rejected among them), or because nobody paid it in time.
   *
   * `data`: The order, as [Get an order](https://docs.shoply.gg/api-reference/orders/get-an-order) answers it, with `payments`, every payment opened for it, and `invoice` where the store raised it as one.
   */
  "order.cancelled": OrdersShowResult & Record<string, unknown>;
  /**
   * An order was refunded.
   *
   * `data`: The order, as [Get an order](https://docs.shoply.gg/api-reference/orders/get-an-order) answers it, with `payments`, every payment opened for it, and `invoice` where the store raised it as one.
   */
  "order.refunded": OrdersShowResult & Record<string, unknown>;
  /**
   * A buyer disputed an order's payment with their bank or payment provider.
   *
   * `data`: The order, as [Get an order](https://docs.shoply.gg/api-reference/orders/get-an-order) answers it, with `payments`, every payment opened for it, and `invoice` where the store raised it as one.
   */
  "order.disputed": OrdersShowResult & Record<string, unknown>;
  /**
   * A dispute was lost and the order's money went back.
   *
   * `data`: The order, as [Get an order](https://docs.shoply.gg/api-reference/orders/get-an-order) answers it, with `payments`, every payment opened for it, and `invoice` where the store raised it as one.
   */
  "order.chargeback": OrdersShowResult & Record<string, unknown>;
  /**
   * The buyer said they paid with one of the store's custom payment methods, and the order waits for the store to approve or reject it. Approved, it is `order.paid`; rejected, `order.cancelled`.
   *
   * `data`: The order, as [Get an order](https://docs.shoply.gg/api-reference/orders/get-an-order) answers it, with `payments`, every payment opened for it, and `invoice` where the store raised it as one.
   */
  "order.payment_submitted": OrdersShowResult & Record<string, unknown>;
  /**
   * Payment Routing moved an order to another of the store's card processors, after a decline or after the buyer gave up on a provider's page.
   *
   * `data`: The order, as [Get an order](https://docs.shoply.gg/api-reference/orders/get-an-order) answers it, with `payments`, every payment opened for it, and `invoice` where the store raised it as one.
   */
  "order.rerouted": OrdersShowResult & Record<string, unknown>;
  /**
   * A review was left on an order, by its buyer or by itself after seven days.
   *
   * `data`: `orderId`, `productId`, `email`, and `review` with its `rating`, `message`, `automatic` and `dateCreated`. `review.removed` and `review.flag_declined` add `reviewId` and `flag`, the flag as [List reviews](https://docs.shoply.gg/api-reference/reviews/list-reviews) answers it, with Shoply's `answer`.
   */
  "review.created": Record<string, unknown>;
  /**
   * A review the store flagged was removed by Shoply. It is no longer anywhere, and its order can be given no other.
   *
   * `data`: `orderId`, `productId`, `email`, and `review` with its `rating`, `message`, `automatic` and `dateCreated`. `review.removed` and `review.flag_declined` add `reviewId` and `flag`, the flag as [List reviews](https://docs.shoply.gg/api-reference/reviews/list-reviews) answers it, with Shoply's `answer`.
   */
  "review.removed": Record<string, unknown>;
  /**
   * A review the store flagged was kept by Shoply, with the reason why.
   *
   * `data`: `orderId`, `productId`, `email`, and `review` with its `rating`, `message`, `automatic` and `dateCreated`. `review.removed` and `review.flag_declined` add `reviewId` and `flag`, the flag as [List reviews](https://docs.shoply.gg/api-reference/reviews/list-reviews) answers it, with Shoply's `answer`.
   */
  "review.flag_declined": Record<string, unknown>;
  /**
   * A sale left a variant that counts its stock with few, at or under the store's low stock number.
   *
   * `data`: `productId`, `productName`, `variantId`, `variantName`, `available` (what is left) and `threshold` (the store's low stock number).
   */
  "stock.low": Record<string, unknown>;
  /**
   * A sale took the last of a variant that counts its stock.
   *
   * `data`: `productId`, `productName`, `variantId`, `variantName`, `available` (what is left) and `threshold` (the store's low stock number).
   */
  "stock.out": Record<string, unknown>;
  /**
   * A product was added.
   *
   * `data`: The product, as [Get a product](https://docs.shoply.gg/api-reference/products/get-a-product) answers it. `product.deleted` has only its `id` and `name`.
   */
  "product.created": ProductsShowResult & Record<string, unknown>;
  /**
   * A product, its variants or its pictures were changed.
   *
   * `data`: The product, as [Get a product](https://docs.shoply.gg/api-reference/products/get-a-product) answers it. `product.deleted` has only its `id` and `name`.
   */
  "product.updated": ProductsShowResult & Record<string, unknown>;
  /**
   * A product was deleted.
   *
   * `data`: The product, as [Get a product](https://docs.shoply.gg/api-reference/products/get-a-product) answers it. `product.deleted` has only its `id` and `name`.
   */
  "product.deleted": Record<string, unknown>;
  /**
   * An email address became a customer of the store.
   *
   * `data`: `id`, `emailAddress`, `balance`, `tags` and `dateCreated`. `customer.tagged` and `customer.untagged` add `tag`, the one put on or taken off: `id`, `name`, `tone` and `automatic` (Shoply's own two are `vip` and `disputed`).
   */
  "customer.created": Record<string, unknown>;
  /**
   * A customer's store balance changed: it was spent, credited, refunded to or set.
   *
   * `data`: `id`, `emailAddress`, `balance`, `tags` and `dateCreated`. `customer.tagged` and `customer.untagged` add `tag`, the one put on or taken off: `id`, `name`, `tone` and `automatic` (Shoply's own two are `vip` and `disputed`).
   */
  "customer.balance_changed": Record<string, unknown>;
  /**
   * A tag was put on a customer: one of the store's own, by hand or by a key; VIP, by the sale that made them one; or Disputed Before, by their first dispute.
   *
   * `data`: `id`, `emailAddress`, `balance`, `tags` and `dateCreated`. `customer.tagged` and `customer.untagged` add `tag`, the one put on or taken off: `id`, `name`, `tone` and `automatic` (Shoply's own two are `vip` and `disputed`).
   */
  "customer.tagged": Record<string, unknown>;
  /**
   * One of the store's own tags was taken off a customer, by hand or by a key. A tag deleted, and VIP ending because its period moved on, are not sent.
   *
   * `data`: `id`, `emailAddress`, `balance`, `tags` and `dateCreated`. `customer.tagged` and `customer.untagged` add `tag`, the one put on or taken off: `id`, `name`, `tone` and `automatic` (Shoply's own two are `vip` and `disputed`).
   */
  "customer.untagged": Record<string, unknown>;
  /**
   * A customer became an affiliate, added by the store or by joining.
   *
   * `data`: The affiliate: `id`, `customerId`, `emailAddress`, `code`, `commission`, `discount`, `balance`, `active`, `source` and `dateCreated`. The two `affiliate.payout_` events have the payout request, as [List payout requests](https://docs.shoply.gg/api-reference/affiliates/list-payout-requests) answers it.
   */
  "affiliate.created": Record<string, unknown>;
  /**
   * An affiliate asked for a payout.
   *
   * `data`: The affiliate: `id`, `customerId`, `emailAddress`, `code`, `commission`, `discount`, `balance`, `active`, `source` and `dateCreated`. The two `affiliate.payout_` events have the payout request, as [List payout requests](https://docs.shoply.gg/api-reference/affiliates/list-payout-requests) answers it.
   */
  "affiliate.payout_requested": Record<string, unknown>;
  /**
   * A payout request was marked as paid or declined.
   *
   * `data`: The affiliate: `id`, `customerId`, `emailAddress`, `code`, `commission`, `discount`, `balance`, `active`, `source` and `dateCreated`. The two `affiliate.payout_` events have the payout request, as [List payout requests](https://docs.shoply.gg/api-reference/affiliates/list-payout-requests) answers it.
   */
  "affiliate.payout_answered": Record<string, unknown>;
  /**
   * An affiliate's balance changed: commission earned or taken back by a refund, a payout asked for or given back, a move to store balance, or set by hand.
   *
   * `data`: The affiliate: `id`, `customerId`, `emailAddress`, `code`, `commission`, `discount`, `balance`, `active`, `source` and `dateCreated`. The two `affiliate.payout_` events have the payout request, as [List payout requests](https://docs.shoply.gg/api-reference/affiliates/list-payout-requests) answers it.
   */
  "affiliate.balance_changed": Record<string, unknown>;
  /**
   * A subscription's first order was paid and the subscription began.
   *
   * `data`: The subscription, as [Get a subscription](https://docs.shoply.gg/api-reference/subscriptions/get-a-subscription) answers it.
   */
  "subscription.started": SubscriptionsShowResult & Record<string, unknown>;
  /**
   * A subscription's renewal was paid and it runs another period.
   *
   * `data`: The subscription, as [Get a subscription](https://docs.shoply.gg/api-reference/subscriptions/get-a-subscription) answers it.
   */
  "subscription.renewed": SubscriptionsShowResult & Record<string, unknown>;
  /**
   * A subscription was cancelled, by its buyer or the store. It may run to the end of what was paid for.
   *
   * `data`: The subscription, as [Get a subscription](https://docs.shoply.gg/api-reference/subscriptions/get-a-subscription) answers it.
   */
  "subscription.cancelled": SubscriptionsShowResult & Record<string, unknown>;
  /**
   * A subscription ended: cancelled, or its renewal was not paid. Where the store takes access back, it was.
   *
   * `data`: The subscription, as [Get a subscription](https://docs.shoply.gg/api-reference/subscriptions/get-a-subscription) answers it.
   */
  "subscription.ended": SubscriptionsShowResult & Record<string, unknown>;
  /**
   * A subscription was paused, by its buyer or the store. Nothing renews until it resumes, and where the store takes access back, it was.
   *
   * `data`: The subscription, as [Get a subscription](https://docs.shoply.gg/api-reference/subscriptions/get-a-subscription) answers it.
   */
  "subscription.paused": SubscriptionsShowResult & Record<string, unknown>;
  /**
   * A paused subscription is running again, by itself on its day or when asked. Access is given back.
   *
   * `data`: The subscription, as [Get a subscription](https://docs.shoply.gg/api-reference/subscriptions/get-a-subscription) answers it.
   */
  "subscription.resumed": SubscriptionsShowResult & Record<string, unknown>;
  /**
   * Charging a subscription's renewal to its kept card was declined. It is tried again once a day while the store's tries last, and its buyer can pay by the renewal's link meanwhile.
   *
   * `data`: The subscription, as [Get a subscription](https://docs.shoply.gg/api-reference/subscriptions/get-a-subscription) answers it.
   */
  "subscription.charge_failed": SubscriptionsShowResult & Record<string, unknown>;
  /**
   * Cart Recovery emailed a buyer about a checkout they left: the first email, the declined card email or the second.
   *
   * `data`: The checkout that was left, as [List carts](https://docs.shoply.gg/api-reference/cart-recovery/list-carts) answers it: `state` says which email it last had, and `recoveredOrderId` the order that paid.
   */
  "cart.email_sent": CartRecoveryCartsItem & Record<string, unknown>;
  /**
   * A checkout Cart Recovery emailed about was paid, or the checkout its email's button opened was.
   *
   * `data`: The checkout that was left, as [List carts](https://docs.shoply.gg/api-reference/cart-recovery/list-carts) answers it: `state` says which email it last had, and `recoveredOrderId` the order that paid.
   */
  "cart.recovered": CartRecoveryCartsItem & Record<string, unknown>;
  /**
   * A buyer unsubscribed from the store's Cart Recovery emails. Their receipts still go.
   *
   * `data`: The checkout that was left, as [List carts](https://docs.shoply.gg/api-reference/cart-recovery/list-carts) answers it: `state` says which email it last had, and `recoveredOrderId` the order that paid.
   */
  "cart.unsubscribed": CartRecoveryCartsItem & Record<string, unknown>;
  /**
   * Win-Back emailed a subscriber who has not ordered in a while: the first email or the second.
   *
   * `data`: The buyer, as [List Win-Back buyers](https://docs.shoply.gg/api-reference/email-marketing/list-win-back-buyers) answers it: `state` says which email they last had, and `wonOrderId` the order that brought them back.
   */
  "winback.email_sent": WinBackBuyersItem & Record<string, unknown>;
  /**
   * A buyer Win-Back emailed placed an order within 14 days of the email, and it was paid.
   *
   * `data`: The buyer, as [List Win-Back buyers](https://docs.shoply.gg/api-reference/email-marketing/list-win-back-buyers) answers it: `state` says which email they last had, and `wonOrderId` the order that brought them back.
   */
  "winback.won_back": WinBackBuyersItem & Record<string, unknown>;
  /**
   * A buyer who ticked the store's box at checkout, "Email me news and offers", paid that order, and is a subscriber.
   *
   * `data`: The subscriber, as [List subscribers](https://docs.shoply.gg/api-reference/email-marketing/list-subscribers) answers it: `email`, `customerId`, `subscribed`, `subscribedAt`, `source`, `orderId` (the order whose box was ticked), `unsubscribedAt` and `unsubscribedBy`.
   */
  "subscriber.subscribed": SubscribersListItem & Record<string, unknown>;
  /**
   * A subscriber is one no longer: they unsubscribed from a Win-Back or Cart Recovery email, or the store or a key took them off.
   *
   * `data`: The subscriber, as [List subscribers](https://docs.shoply.gg/api-reference/email-marketing/list-subscribers) answers it: `email`, `customerId`, `subscribed`, `subscribedAt`, `source`, `orderId` (the order whose box was ticked), `unsubscribedAt` and `unsubscribedBy`.
   */
  "subscriber.unsubscribed": SubscribersListItem & Record<string, unknown>;
  /**
   * Payment Routing stopped giving checkouts to one of the store's card processors: its keys stopped working, or too many of its last payments were declined.
   *
   * `data`: `provider`, `name`, `paused`, `pausedAt` and `pausedReason`, the processor as it stands after the change.
   */
  "routing.processor_paused": Record<string, unknown>;
  /**
   * A paused processor was put back into the split.
   *
   * `data`: `provider`, `name`, `paused`, `pausedAt` and `pausedReason`, the processor as it stands after the change.
   */
  "routing.processor_resumed": Record<string, unknown>;
  /**
   * A payment provider told Shoply of a dispute on one of the store's orders: a chargeback, an inquiry from the buyer's bank, or a PayPal claim.
   *
   * `data`: The dispute, as [List disputes](https://docs.shoply.gg/api-reference/disputes/list-disputes) answers it: `status` is how it reads on the dashboard, `providerStatus` what the provider last said, `dueAt` when it stops taking an answer.
   */
  "dispute.opened": DisputesListItem & Record<string, unknown>;
  /**
   * A dispute changed while still open: its status, its stage or its deadline, or its answer was submitted, accepted or marked as answered.
   *
   * `data`: The dispute, as [List disputes](https://docs.shoply.gg/api-reference/disputes/list-disputes) answers it: `status` is how it reads on the dashboard, `providerStatus` what the provider last said, `dueAt` when it stops taking an answer.
   */
  "dispute.updated": DisputesListItem & Record<string, unknown>;
  /**
   * A dispute ended in the store's favour. The money stays with the store.
   *
   * `data`: The dispute, as [List disputes](https://docs.shoply.gg/api-reference/disputes/list-disputes) answers it: `status` is how it reads on the dashboard, `providerStatus` what the provider last said, `dueAt` when it stops taking an answer.
   */
  "dispute.won": DisputesListItem & Record<string, unknown>;
  /**
   * A dispute ended in the buyer's favour, or the store accepted it. The order is a chargeback, and `order.chargeback` is sent too.
   *
   * `data`: The dispute, as [List disputes](https://docs.shoply.gg/api-reference/disputes/list-disputes) answers it: `status` is how it reads on the dashboard, `providerStatus` what the provider last said, `dueAt` when it stops taking an answer.
   */
  "dispute.lost": DisputesListItem & Record<string, unknown>;
  /**
   * A dispute ended with no chargeback: an inquiry the bank closed, or one settled before it became a chargeback.
   *
   * `data`: The dispute, as [List disputes](https://docs.shoply.gg/api-reference/disputes/list-disputes) answers it: `status` is how it reads on the dashboard, `providerStatus` what the provider last said, `dueAt` when it stops taking an answer.
   */
  "dispute.closed": DisputesListItem & Record<string, unknown>;
  /**
   * The store's owner approved an app, and the app's server swapped the approval for its token. An app approved again is connected again, and its old token stops working.
   *
   * `data`: `id` (the connection), `appId`, `name`, `maker`, `website`, `scopes` (what the owner approved), `connectedAt`, and for `app.disconnected` `disconnectedAt` and `reason`: `seller`, `app`, `deleted`, or `code_reused` (the app's approval was offered twice, so its token was ended).
   */
  "app.connected": Record<string, unknown>;
  /**
   * An app stopped reaching the store: the owner disconnected it, the app gave its token up, or its developer deleted it. The endpoints it made are removed with it.
   *
   * `data`: `id` (the connection), `appId`, `name`, `maker`, `website`, `scopes` (what the owner approved), `connectedAt`, and for `app.disconnected` `disconnectedAt` and `reason`: `seller`, `app`, `deleted`, or `code_reused` (the app's approval was offered twice, so its token was ended).
   */
  "app.disconnected": Record<string, unknown>;
  /**
   * A buyer opened a support ticket from the customer panel, or the store's own site through the customer API.
   *
   * `data`: The ticket, as [Get a support ticket](https://docs.shoply.gg/api-reference/support-tickets/get-a-support-ticket) answers it without its conversation: `status` is `open` (the buyer wrote last), `answered` or `resolved`, and `resolvedBy` says who resolved it (`store`, `buyer` or `auto`). `ticket.message` adds `message`: its `id`, `from` (`buyer` or `store`), `body`, `pictures` (each one's `name`, read with a key) and `createdAt`.
   */
  "ticket.opened": TicketsGetResult & Record<string, unknown>;
  /**
   * A message was written on a ticket, by the buyer or the store. Not sent for the message a ticket is opened with: that is `ticket.opened`.
   *
   * `data`: The ticket, as [Get a support ticket](https://docs.shoply.gg/api-reference/support-tickets/get-a-support-ticket) answers it without its conversation: `status` is `open` (the buyer wrote last), `answered` or `resolved`, and `resolvedBy` says who resolved it (`store`, `buyer` or `auto`). `ticket.message` adds `message`: its `id`, `from` (`buyer` or `store`), `body`, `pictures` (each one's `name`, read with a key) and `createdAt`.
   */
  "ticket.message": Record<string, unknown>;
  /**
   * A ticket was marked resolved: by the store, by the buyer, or by itself 48 hours after the store's reply with no word from the buyer.
   *
   * `data`: The ticket, as [Get a support ticket](https://docs.shoply.gg/api-reference/support-tickets/get-a-support-ticket) answers it without its conversation: `status` is `open` (the buyer wrote last), `answered` or `resolved`, and `resolvedBy` says who resolved it (`store`, `buyer` or `auto`). `ticket.message` adds `message`: its `id`, `from` (`buyer` or `store`), `body`, `pictures` (each one's `name`, read with a key) and `createdAt`.
   */
  "ticket.resolved": TicketsGetResult & Record<string, unknown>;
  /**
   * A resolved ticket was opened again: the buyer wrote on it within 30 days, or the store reopened it.
   *
   * `data`: The ticket, as [Get a support ticket](https://docs.shoply.gg/api-reference/support-tickets/get-a-support-ticket) answers it without its conversation: `status` is `open` (the buyer wrote last), `answered` or `resolved`, and `resolvedBy` says who resolved it (`store`, `buyer` or `auto`). `ticket.message` adds `message`: its `id`, `from` (`buyer` or `store`), `body`, `pictures` (each one's `name`, read with a key) and `createdAt`.
   */
  "ticket.reopened": TicketsGetResult & Record<string, unknown>;
  /**
   * A checkout was turned away by the blacklist, a blocked country, the VPN rule or the limit on unpaid orders. The same buyer turned away again for the same reason within ten minutes is not sent again.
   *
   * `data`: The event, as [List fraud events](https://docs.shoply.gg/api-reference/fraud-protection/list-fraud-events) answers it.
   */
  "fraud.checkout_blocked": FraudEventsListItem & Record<string, unknown>;
  /** When you press Send a test on an endpoint. */
  "webhook.test": Record<string, unknown>;
}
