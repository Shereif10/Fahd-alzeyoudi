export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeDir: Record<Locale, "ltr" | "rtl"> = { en: "ltr", ar: "rtl" };
export const localeLabel: Record<Locale, string> = { en: "English", ar: "العربية" };
export const localeShort: Record<Locale, string> = { en: "EN", ar: "ع" };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** A string (or any value) that exists in both site languages. */
export type Localized<T = string> = { en: T; ar: T };

export function tr<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

/** Build a locale-prefixed href, e.g. href("ar", "/practices") -> "/ar/practices". */
export function href(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}
