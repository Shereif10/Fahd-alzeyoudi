/**
 * Site-wide configuration.
 *
 * Every `null` below is information the firm has NOT yet supplied. Components
 * render a visible "final content required" placeholder for null values, so
 * nothing is presented as fact before it is provided and approved.
 */
const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");

/**
 * PRODUCTION DOMAIN REQUIRED: set NEXT_PUBLIC_SITE_URL (e.g. https://<domain>)
 * in the production environment. Without it, URLs fall back to localhost and
 * robots.txt blocks indexing, so localhost canonicals are never indexed.
 */
export const hasProductionUrl = Boolean(envUrl) && !/localhost|127\.0\.0\.1/.test(envUrl ?? "");

if (process.env.NODE_ENV === "production" && !hasProductionUrl) {
  console.warn("[site] NEXT_PUBLIC_SITE_URL is not set to a public domain — indexing is disabled via robots.txt.");
}

export const site = {
  name: { en: "Fahad Al Zeyoudi", ar: "فهد الزيودي" },
  /** Production domain exists (per brief) but was not supplied. */
  url: envUrl ?? "http://localhost:3000",
  email: null as string | null,
  /** Brief Q33: the firm will provide a WhatsApp number in the firm's name. */
  whatsapp: null as string | null,
  social: {
    linkedin: null as string | null,
    instagram: null as string | null,
  },
};
