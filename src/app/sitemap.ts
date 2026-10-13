import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { locales } from "@/i18n/config";
import { practices } from "@/data/practices";
import { people } from "@/data/people";
import { insights, isPublished } from "@/data/insights";
import { legalDocs } from "@/data/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/practices",
    ...practices.map((p) => `/practices/${p.slug}`),
    "/people",
    ...people.map((p) => `/people/${p.slug}`),
    "/insights",
    // Only articles approved by the firm's legal reviewer are listed.
    ...insights.filter(isPublished).map((a) => `/insights/${a.slug}`),
    "/contact",
    "/contact/inquiry",
    "/contact/locations",
    ...legalDocs.map((d) => `/legal/${d.slug}`),
  ];
  return paths.flatMap((p) =>
    locales.map((l) => ({
      url: `${site.url}/${l}${p}`,
      alternates: { languages: Object.fromEntries(locales.map((x) => [x, `${site.url}/${x}${p}`])) },
    })),
  );
}
