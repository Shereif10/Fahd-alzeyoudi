# SEO Strategy, Internal Linking & Technical SEO Audit

**Status (final QA, 10 Oct 2026):** SEO FOUNDATION + TECHNICAL SEO + CONTENT OPTIMIZATION complete in code: **COMPLETE / WEB TEAM REQUIRED (domain)**. This is a foundation, not a ranking outcome. Search performance can only be assessed after deployment, indexing (Search Console) and real query data. Verified in a production build: 78 content pages each with one H1, a title, a description and correct `lang`/`dir`; 0 duplicate titles; canonical + hreflang (en, ar, x-default) on every page; 132 JSON-LD blocks, all valid, none with address/rating/review/award data; draft articles `noindex, follow` and absent from the sitemap.

Implemented titles and descriptions: `src/data/seo.ts` (pages and practices) and `src/data/insights.ts` (`seo`, `keywords`). The layout appends "— Fahad Al Zeyoudi" / "— فهد الزيودي". H1s are unchanged (design).

**Principles:** one primary intent per page; Arabic keywords researched as Arabic search terms, not translations; no superlatives ("best", "top", "No.1"), no "free consultation" (Brief Q2/Q32); legal accuracy over keyword density.

## 1. Keyword map — main pages

| Page | Intent | Primary EN | Secondary EN | Primary AR | Secondary AR |
|---|---|---|---|---|---|
| Home | Navigational / commercial | law firm Dubai Ajman | UAE litigation lawyers; Emirati advocate Dubai; legal representation UAE | مكتب محاماة دبي | محامي إماراتي؛ مكتب محاماة عجمان؛ التقاضي في الإمارات |
| About | Trust | Fahad Al Zeyoudi law firm | Emirati advocates; UAE legal team | مكتب فهد الزيودي للمحاماة | محامون إماراتيون؛ مستشارون قانونيون |
| Practices | Commercial | UAE litigation practice areas | civil commercial disputes lawyers | مجالات المحاماة في الإمارات | قضايا مدنية وتجارية |
| People | Trust | lawyers Dubai team | legal consultants Dubai | محامون في دبي | مستشار قانوني دبي |
| Insights | Informational | UAE law articles | UAE legal updates 2026 | مقالات قانونية إماراتية | مستجدات القانون الإماراتي |
| Contact / Inquiry | Transactional | legal consultation Dubai | contact lawyer Dubai; lawyer appointment Ajman | استشارة قانونية دبي | التواصل مع محامي؛ موعد محامي عجمان |
| Locations | Local | law firm Dubai office | law firm Ajman address | مكتب محاماة في دبي | عنوان مكتب محاماة عجمان |

## 2. Keyword map — 14 practice areas

| Practice | Primary EN | Secondary EN | Primary AR | Secondary AR | Related insight |
|---|---|---|---|---|---|
| Civil & Financial Claims | civil claims lawyer UAE | debt recovery UAE; compensation claim; new Civil Transactions Law | محامي دعاوى مدنية | مطالبة مالية؛ دعوى تعويض؛ قانون المعاملات المدنية الجديد | New Civil Transactions Law |
| Commercial & Corporate | commercial dispute lawyer Dubai | partner dispute UAE; unpaid invoices claim | محامي قضايا تجارية | منازعات الشركاء؛ مطالبة فواتير | — (gap) |
| Banking & Finance | banking dispute lawyer UAE | loan dispute; bank guarantee dispute | محامي قضايا بنوك | نزاع قرض؛ خطاب ضمان | — (gap) |
| Real Estate | real estate lawyer Dubai | off-plan dispute; developer delay; refund off-plan | محامي عقارات دبي | نزاع مطور عقاري؛ فسخ عقد على الخريطة | Dubai off-plan disputes |
| Construction | construction dispute lawyer UAE | contractor payment claim; decennial liability | محامي مقاولات | المسؤولية العشرية؛ مستحقات المقاول | — (gap) |
| Rental | rental dispute lawyer Dubai | eviction notice Dubai; RDC case; Ajman rent dispute | محامي إيجارات دبي | إخلاء مستأجر؛ مركز فض المنازعات الإيجارية | — (gap) |
| Labour | labour lawyer UAE | MOHRE complaint; end of service gratuity; unfair dismissal | محامي عمالي | شكوى عمالية؛ مكافأة نهاية الخدمة | Labour claims |
| Personal Status | family lawyer UAE | divorce lawyer Dubai; custody UAE; non-Muslim divorce | محامي أحوال شخصية | محامي طلاق؛ حضانة الأطفال؛ نفقة | — (gap) |
| Estates | inheritance lawyer UAE | will registration UAE; estate distribution non-Muslim | محامي تركات | حصر إرث؛ قسمة تركة؛ وصية غير المسلمين | — (gap) |
| Criminal | criminal lawyer Dubai | fraud case UAE; breach of trust; cybercrime lawyer | محامي جنائي | قضية احتيال؛ خيانة أمانة؛ جرائم إلكترونية | — (gap) |
| Cheques & Enforcement | bounced cheque lawyer UAE | cheque execution; payment order UAE | محامي شيكات | شيك مرتجع؛ أمر أداء؛ تنفيذ حكم | Bounced cheques |
| Insurance | insurance claim lawyer UAE | accident compensation UAE | محامي تأمين | تعويض حادث؛ مطالبة تأمين | — (gap) |
| Bankruptcy | bankruptcy lawyer UAE | restructuring UAE; preventive settlement | محامي إفلاس | إعادة هيكلة؛ تسوية وقائية؛ إعسار | — (gap) |
| IP | intellectual property lawyer UAE | trademark infringement UAE | محامي ملكية فكرية | تعدي على علامة تجارية؛ حقوق المؤلف | — (gap) |

**Content gaps → next articles (priority order):** (1) custody under the 2025 Personal Status Law; (2) Dubai eviction notice and the RDC / new Ajman centre; (3) decennial liability under the new civil code; (4) non-Muslim wills and inheritance; (5) payment orders vs ordinary claims; (6) partner disputes under the amended Companies Law.

## 3. Article SEO (implemented)

| Article | Intent | Primary EN | Primary AR | SEO title | Internal links |
|---|---|---|---|---|---|
| New Civil Transactions Law | Informational / news | UAE Civil Transactions Law 2026 | قانون المعاملات المدنية الجديد | New UAE Civil Transactions Law 2026: Key Changes | → Civil Claims; Construction; Commercial |
| Bounced cheques | Informational → transactional | bounced cheque UAE | شيك مرتجع | Bounced Cheque in the UAE: How Direct Enforcement Works | → Cheques & Enforcement; Banking; Criminal |
| Labour claims | Informational | UAE labour claim | دعوى عمالية | UAE Labour Claims: Deadlines, MOHRE and End-of-Service | → Labour; Contact/inquiry `?matter=labor-disputes` |
| Dubai off-plan | Informational | off-plan property dispute Dubai | نزاع عقار على الخريطة | Dubai Off-Plan Property Disputes: Buyer and Developer Rights | → Real Estate; Construction |

Each article has an H1 (title), logical H2s, an FAQ (genuine questions), legal sources, `Article` JSON-LD, and keywords. Articles stay `noindex` and out of the sitemap until `reviewed: true`.

## 4. Internal linking architecture

| From | To | Anchor (EN / AR) | Status |
|---|---|---|---|
| Practice page | Related insights | article title | ✅ existing (filters by `practice`) |
| Insight | Its practice | practice title, in the aside | ✅ existing |
| Practice page | Inquiry with matter pre-selected | "Request a consultation" / "اطلب استشارة" | ✅ existing |
| Practice page | Related practices (3) | practice titles | ✅ existing |
| Practice page | About#approach, People | "Our approach", "Meet our team" | ✅ existing |
| Home | All 14 practices, insights, people | existing | ✅ existing |
| Footer | 14 practices, legal pages | titles | ✅ (legal added) |
| Inquiry form consent | Data Protection Notice | "Data Protection & Consent Notice" | ✅ added |
| **Recommended:** article body → practice | in-text link on the first mention of the practice, e.g. "bounced cheque enforcement" | needs a `link` block type | Web team |
| **Recommended:** article "More insights" | prefer same-practice articles first | small logic change | Web team |
| People profile → practices | none: practices are not tied to individuals (Brief Q10) | — | intentionally not linked |

## 5. Technical SEO audit

| Area | Finding | Severity | Action |
|---|---|---|---|
| **Production URL** | **PRODUCTION DOMAIN REQUIRED.** `site.url` comes from `NEXT_PUBLIC_SITE_URL`. Guard added (final pass): if it is missing or is localhost, `robots.txt` returns `Disallow: /` and the build logs a warning, so localhost canonicals are never indexed. Verified: no-domain build → `Disallow: /`; test-domain build → 70 sitemap URLs, 0 localhost. | Blocker until the domain is set | Set `NEXT_PUBLIC_SITE_URL=https://<domain>` in production. |
| Metadata | Titles and descriptions were generic (dictionary leads). | Fixed | `src/data/seo.ts` |
| Home title | Layout template does not apply to the same segment, so the title had no brand. | Fixed | home composes "Fahad Al Zeyoudi — …" |
| Canonical / hreflang | Per page, `en`/`ar`/`x-default` (= `/en`). Correct. | OK | — |
| HTML lang / dir | `en` + `ltr`; `ar-AE` + `rtl`. Correct. | OK | — |
| Sitemap | Lists all locales with alternates. Now excludes unreviewed articles; includes legal pages. No `lastModified`. | Minor | Add `lastModified` from data dates (optional). |
| robots.txt | With a public domain: allow all, disallow `/api/`, sitemap link. Without one: disallow all. | OK | Staging without the variable is automatically non-indexable. |
| Structured data | None before. | Fixed | `LegalService` + `WebSite` (all pages); `BreadcrumbList` (practices, people, articles); `Person` (profiles); `Article` (insights). No address/phone/ratings (not supplied). |
| Open Graph | Title, description, URL, locale on every page. **Articles now publish `og:image`** (their featured image). Other pages have no `og:image`; no Twitter card. | Minor | Add a brand OG image (1200×630) via `app/[locale]/opengraph-image` for non-article pages: web team, needs approved brand asset. |
| Headings | One H1 per page. Practice page: eyebrow "Legal considerations" duplicates the H2 text (existing design). | Minor | Design-level; leave. |
| Image alt | Hero `alt=""` (decorative). All other new images have localized EN/AR alt text (`src/data/images.ts`, `insights.ts`). Portrait alt uses the English name on Arabic pages (no portraits yet). | Minor | Pass the localized name to `Portrait` when portraits arrive. |
| URL structure | Lowercase hyphenated slugs, except **`/people/Abanoub-aouni`** (capital A, and spelling unconfirmed: Aouni vs Awni). | Medium | After spelling is confirmed: rename slug to lowercase (`abanoub-awni`) + add a 301 redirect from the old slug. |
| 404 | Catch-all → localized 404 with status 404. Verified. | OK | — |
| Redirects | `/` → `/en` (307). | OK | Optional: Accept-Language detection. Keep 307. |
| Indexability | Placeholder/draft articles `noindex,follow`. Practice pages are indexable and contain draft considerations marked on screen. | Note | Do not launch publicly before legal approval, or temporarily `noindex` practice pages. |
| Duplicate content | EN/AR are distinct languages with hreflang. No duplicates. | OK | — |
| Performance | Static prerender (SSG) for all routes; `next/font` self-hosted; `next/image` for photos; hero `priority`. `hero-pic.jpg` is 2400×1600 progressive JPEG served through `next/image` (AVIF/WebP negotiated). | OK | Enable `images.formats: ['image/avif','image/webp']` in `next.config.ts` (optional). |
| Local SEO | No NAP data yet. | Blocked | When addresses arrive: add per-office `LegalService` with `address`, `telephone`, `geo`, `openingHours`, and create/verify Google Business Profiles (client). |
