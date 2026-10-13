import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";

/** Per-page metadata with canonical URL and hreflang alternates for both languages. */
export function pageMetadata(locale: Locale, path: string, title: string | undefined, description: string): Metadata {
  const p = path === "/" ? "" : path;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: `/${locale}${p}`,
      languages: { en: `/en${p}`, ar: `/ar${p}`, "x-default": `/en${p}` },
    },
    openGraph: { title, description, url: `/${locale}${p}` },
  };
}

export async function resolveLocale(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params;
  return isLocale(locale) ? locale : "en";
}
