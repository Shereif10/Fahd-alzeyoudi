import { site } from "@/config/site";
import { href, tr, type Locale } from "@/i18n/config";
import { firm } from "@/data/firm";
import type { Insight } from "@/data/insights";
import type { Person } from "@/data/people";
import type { Crumb } from "@/components/layout/Breadcrumbs";

/**
 * Schema.org JSON-LD. Only facts the firm has supplied are included: no address,
 * phone, ratings, reviews, founding date or awards until they are provided and
 * approved. When office details arrive, add `address`/`telephone` to `firmLd`
 * (one `LegalService` per office, linked by `parentOrganization`).
 */
const abs = (path: string) => `${site.url}${path}`;
const firmId = () => `${site.url}/#firm`;

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be emitted as raw JSON; content is built from our own data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function firmLd(locale: Locale) {
  const sameAs = [site.social.linkedin, site.social.instagram].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": firmId(),
    name: site.name[locale],
    alternateName: site.name[locale === "en" ? "ar" : "en"],
    url: abs(href(locale)),
    description: tr(firm.introduction, locale),
    areaServed: { "@type": "Country", name: locale === "ar" ? "الإمارات العربية المتحدة" : "United Arab Emirates" },
    knowsLanguage: ["ar", "en"],
    ...(site.email ? { email: site.email } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name[locale],
    url: abs(href(locale)),
    inLanguage: locale === "ar" ? "ar-AE" : "en",
    publisher: { "@id": firmId() },
  };
}

export function breadcrumbLd(locale: Locale, crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: abs(c.href) } : {}),
    })),
  };
}

export function articleLd(a: Insight, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: tr(a.title, locale),
    description: tr(a.seo?.description ?? a.excerpt, locale),
    datePublished: a.date,
    inLanguage: locale === "ar" ? "ar-AE" : "en",
    mainEntityOfPage: abs(href(locale, `/insights/${a.slug}`)),
    author: { "@id": firmId() },
    publisher: { "@id": firmId() },
    ...(a.keywords ? { keywords: tr(a.keywords, locale).join(", ") } : {}),
    ...(a.image ? { image: abs(a.image.src) } : {}),
  };
}

export function personLd(p: Person, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: tr(p.name, locale),
    jobTitle: tr(p.role, locale),
    url: abs(href(locale, `/people/${p.slug}`)),
    worksFor: { "@id": firmId() },
    ...(p.portrait ? { image: abs(p.portrait) } : {}),
  };
}
