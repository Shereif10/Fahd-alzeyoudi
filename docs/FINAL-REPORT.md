# Final Report: Verification, QA & Visual Assets (10 October 2026)

## FINAL STATUS (closing cleanup pass, 10 Oct 2026)

> **The 14 legal areas are NOT all officially verified.** Official sources confirmed core points for Banking, Insurance, Cheques and Dubai real estate only. Seven areas are partially verified, and Construction, Estates and Criminal rest on secondary sources only (see RESEARCH-RECORDS §A2). **All legal content (14 Legal Considerations, 4 articles, 4 legal pages) remains a draft subject to review and approval by Abanoub Awni / the firm's legal team.**

| Status | Items |
|---|---|
| **Complete** | Site structure EN/AR (LTR/RTL); 8 licensed non-personal images in existing slots; SEO foundation (metadata, canonical/hreflang, sitemap, robots, JSON-LD); production-domain guard; RevealObserver fix; brand icon map (60, intact, none used); documentation |
| **Legal Review Required** | 14 Legal Considerations; 4 Legal Insights (noindex until `reviewed: true`); Privacy Policy; Data Protection & Consent Notice; Terms of Use; Disclaimer; every item marked SECONDARY / OFFICIAL VERIFICATION REQUIRED |
| **Client Data Required** | 9 portraits and EN/AR bios; Ibrahim's full name; Aouni/Awni spelling; Dubai and Ajman office details and maps; general email; WhatsApp; inquiry destination; case summaries; production domain and hosting; firm's registered legal name/licence |
| **Web Team Required** | Set `NEXT_PUBLIC_SITE_URL` and `INQUIRY_WEBHOOK_URL`; HTTPS; Figma icon-slot check; slug rename + 301 after spelling confirmation; brand OG image; per-office JSON-LD; Search Console |
| **Launch Blocked** | YES, until: (1) legal approval; (2) production domain set; (3) inquiry delivery connected; (4) office contact data supplied |

### Closing cleanup actions
- **Deleted** `public/images/hero-pic.jpg` (Lady Justice; unused, off-brand, unknown licence). Verified it was not referenced anywhere first.
- `public/images/hero-tower.webp` is **non-production / unverified licence: not used**. Do not restore it unless the client provides its licence. (It remains in `public/` unused; the web team may delete it.)
- **RevealObserver verified, no regressions:** Home, About, Practices (index + detail), People (index + profile), Insights, Articles in EN and AR, at 1280×800 and 375×812. Every `data-reveal` element (plain and clip) was shown when brought into view: e.g. Home 40/40, About 33/33, People 15/15, practice detail 16–18/18, Insights 5/5, articles 6/6. Plain (non-clip) reveals use the original logic unchanged.
- Typecheck: **PASS**. Production build: **PASS** (83 static pages).
- No design, layout, typography, spacing, colour, image or content changes in this pass.

Detail: `legal-research/RESEARCH-RECORDS.md` (Part A = second verification pass) · `SEO-STRATEGY.md` · `CONTENT-AUDIT.md` · `VISUAL-ASSET-AUDIT.md`

## Deliverable status

| Deliverable | Status |
|---|---|
| 14 Legal Considerations (EN/AR) | DRAFT — LEGAL REVIEW REQUIRED (2nd pass done, corrections logged) |
| 4 Legal Insights (EN/AR) | DRAFT — LEGAL REVIEW REQUIRED (noindex) |
| Privacy Policy | DRAFT — LEGAL REVIEW REQUIRED + CLIENT DATA REQUIRED |
| Data Protection & Consent Notice | DRAFT — LEGAL REVIEW REQUIRED + CLIENT DATA REQUIRED |
| Terms of Use | DRAFT — LEGAL REVIEW REQUIRED |
| Disclaimer | DRAFT — LEGAL REVIEW REQUIRED |
| SEO foundation (metadata, hreflang, sitemap, robots, JSON-LD) | COMPLETE in code; WEB TEAM REQUIRED (production domain) |
| Non-personal images (8 slots) | COMPLETE: sourced, licensed, implemented |
| Team portraits (9) | CLIENT DATA REQUIRED |
| Brand iconography | VERIFIED (60 mapped, intact); 0 used; FIGMA ICON SLOT VERIFICATION REQUIRED |
| Build / runtime | VERIFIED |

## Code changes in this pass
- `src/data/practice-considerations.ts`, `src/data/insights.ts`: legal corrections (logged OLD→NEW in RESEARCH-RECORDS §A3); article `image` field.
- `src/data/images.ts` (new): image paths, EN/AR alt text, credits.
- `public/images/{hero,about,experience,insights}/`: 8 WebP images.
- `app/[locale]/page.tsx`, `about/page.tsx`, `InsightItems.tsx`, `insights/[slug]/page.tsx`: `src`/`alt` on existing `ArchImage` slots; article `og:image` and JSON-LD `image`.
- `config/site.ts`, `app/robots.ts`: production-domain guard (no domain → `Disallow: /` + build warning).
- `components/ui/RevealObserver.tsx`: fix for a pre-existing bug where clip-revealed images and portraits never appeared.

## Remaining work, separated

### A. CLIENT
1. 9 portraits; 9 EN + 9 AR biographies.
2. Ibrahim's full name; any name/title corrections; **Abanoub surname spelling (Aouni vs Awni)**.
3. Dubai office: EN/AR address, phone, email, hours, Google Maps link.
4. Ajman office: EN/AR address, phone, email, hours, Google Maps link, office manager (if any).
5. General email; WhatsApp number; inquiry destination (inbox/CRM/WhatsApp Business) and where its data is stored.
6. Approved anonymised case summaries.
7. Production domain; hosting provider and location.
8. Registered legal name and licence details of the firm (legal pages).
9. Licence/source for `hero-tower.webp`, only if the firm wants it restored (currently non-production, unused).
10. Social profile URLs (only if they exist).
11. Confirm "Labor" vs "Labour" spelling in the practice title.

### B. LEGAL REVIEW (Abanoub Awni)
- 14 Legal Considerations; 4 Legal Insights; Privacy Policy; Data Protection & Consent Notice; Terms of Use; Disclaimer.
- Items marked SECONDARY SOURCE / OFFICIAL VERIFICATION REQUIRED (RESEARCH-RECORDS §A2): Civil Transactions Law effective date and article numbers; Civil Procedure amendment 22/2025 (appeal grounds, specialised chambers); payment-order conditions; construction and decennial liability under the new code; Dubai Law 26/2007 Art. 25 eviction rules; **Ajman rental body and law (2026)**; labour two-year limit, AED 50,000 threshold, appeal court, and whether Art. 47 was amended; Personal Status Law 41/2024 effective date and non-Muslim law 41/2022 provisions; estates/intestacy; criminal Arts. 451/453 and recent amendments; insurance limitation; bankruptcy effective date and individual insolvency law 19/2019; IP laws.
- Legal-page markers: firm's legal name and licence, retention period, governing emirate.
- Jurisdiction wording (federal vs Dubai/Abu Dhabi/RAK courts; DIFC/ADGM carve-outs).
- Any case-related content once supplied (confidentiality review).

### C. CLAUDE / CONTENT & RESEARCH
1. Complete official verification of the items above once uaelegislation.gov.ae / elaws.moj.gov.ae are reachable from an unblocked network, or from PDFs the legal team provides.
2. Apply the legal reviewer's edits to EN and AR content.
3. Write bios from client-supplied material; write anonymised case summaries after confidentiality review.
4. Next articles (content gaps): custody under the 2025 Personal Status Law; Dubai/Ajman eviction; decennial liability under the new code; non-Muslim wills; payment orders; partner disputes.

### D. WEB TEAM
1. Set `NEXT_PUBLIC_SITE_URL` and `INQUIRY_WEBHOOK_URL` in production; serve over HTTPS.
2. Verify the approved Figma for any icon slots before adding brand icons (FIGMA ICON SLOT VERIFICATION REQUIRED).
3. Optionally delete the unused `public/images/hero-tower.webp` (unverified licence). `hero-pic.jpg` has already been deleted.
4. After spelling is confirmed: rename slug `Abanoub-aouni` → lowercase + 301 redirect.
5. Add a brand OG image for non-article pages (`opengraph-image`).
6. Pass the localized name to `Portrait` alt once portraits exist; add portrait files.
7. Add per-office `LegalService` JSON-LD (address, telephone, openingHours) when office data arrives.
8. Set up Google Search Console after launch; submit the sitemap.
9. Flip `reviewed: true` per item after legal approval (articles then become indexable and enter the sitemap automatically).

## Launch blockers
1. Legal approval of all legal content (practices, articles, legal pages).
2. Production domain (`NEXT_PUBLIC_SITE_URL`); without it the site is deliberately non-indexable.
3. Inquiry delivery (`INQUIRY_WEBHOOK_URL`); without it production forms tell visitors to contact an office.
4. Office contact data (the site currently shows no phone, email or address).

## Build status
- Typecheck: PASS (`tsc --noEmit`)
- Build: PASS (`next build`, 83 static pages; verified both without a domain and with a test domain)
- Routes: 78 content pages, each with 1 H1, a title, a description, and lang/dir; 0 duplicate titles; sitemap 70 URLs (35 paths × 2), 0 localhost
- EN: PASS · AR: PASS · RTL: PASS (`dir="rtl"`, `lang="ar-AE"`)
- JSON-LD: 132 blocks, all valid; no fabricated organisation data
- Console: no new runtime errors (only Next dev-mode notices)

## Design status
**UNCHANGED** in layout, typography, colour, spacing, components and animation. Changes visible on screen in this pass:
1. Image content inside existing image slots (hero, about, two experience panels, insight cards and article headers). This replaces placeholders and the Lady Justice photo; it does not change slot dimensions or treatment.
2. The scroll-reveal fix: clip-reveal images and portrait placeholders now appear as designed. Before the fix they stayed hidden, which was a bug.
3. From the previous pass (unchanged now): footer "Legal" link list in the existing column pattern; consent-label link.
