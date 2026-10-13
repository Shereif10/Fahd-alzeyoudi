# Fahad Al Zeyoudi — Website

Bilingual (English LTR / Arabic RTL) multi-page website for Fahad Al Zeyoudi, built with Next.js (App Router) and TypeScript. No UI or CSS framework: one design-system stylesheet and plain components.

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /en
npm run build      # static prerender of every page (79 routes)
npm run typecheck
```

## Information architecture (follows the approved sitemap)

| Sitemap | Route |
| --- | --- |
| Home (Hero, Firm Introduction, Practices, Our Approach, People, Legal Experience, Insights, Offices, Contact CTA) | `/{en,ar}` |
| About (Firm Introduction, Who We Are, Our Approach, Our Experience, Leadership, Our Team, Offices → Dubai / Ajman, Final CTA) | `/{locale}/about` (offices: `#offices`, `#dubai`, `#ajman`) |
| Practices → All Practices | `/{locale}/practices` |
| 14 practice areas | `/{locale}/practices/[slug]` |
| People → Our Team | `/{locale}/people` |
| 9 profiles | `/{locale}/people/[slug]` |
| Insights → All Insights | `/{locale}/insights` |
| Article Detail | `/{locale}/insights/[slug]` |
| Contact (hub) | `/{locale}/contact` |
| Inquiry / Consultation | `/{locale}/contact/inquiry` (accepts `?type=consultation&matter=<practice-slug>`) |
| Contact & Locations | `/{locale}/contact/locations` |

## Where things live

```
src/
  app/[locale]/…        pages (one folder per route)
  app/api/inquiry/      inquiry endpoint — the single integration point for form delivery
  app/globals.css       design system: tokens, type scale, components, RTL rules
  components/           layout (Header, Footer, Breadcrumbs, LanguageSwitcher), brand (Logo),
                        media (ArchImage, Portrait), sections, forms, ui primitives
  data/                 practices, people, offices, insights, firm statements (EN + AR)
  config/site.ts        domain, email, WhatsApp, social — null until supplied
  i18n/                 locale config + interface dictionary (EN + AR)
```

Pages are generated from `src/data`. To change a practice, person, office or article, edit the data file. No markup changes needed.

## Design system (from the Brand Guidelines)

- **Colour:** Warm Light Gray `#E6E5E1`, Dark `#262626`, Deep Navy `#293545`, Muted Blue `#97B5C9` (accent only); secondary `#ADB2B5`, `#486479`. `#F4F4F4` (the guideline document's own surface) is used for alternating sections. The only added colour is a muted red, used for form errors.
- **Type:** Ara Al Bayan for display headings, IBM Plex Sans for sub-headings and body (Plex Sans Arabic for Arabic). **Ara Al Bayan is licensed and not in the repo.** Add the web font files to `public/fonts/` and uncomment the `url()` lines at the top of `globals.css`. Until then headings fall back to IBM Plex Serif (Latin) and IBM Plex Sans Arabic, so the stand-in stays inside the Plex family.
- **Logo:** vector paths extracted from the guideline PDF (`components/brand/logo-paths.ts`). They are never redrawn or mirrored.
- **Signature device:** the logo mark is built from planes sheared at 1:3. The same shear appears in section markers, hover accents and the clipped hero and feature images.

## Before launch: see `docs/CONTENT-STATUS.md`
