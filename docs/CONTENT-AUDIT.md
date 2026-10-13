# Content Audit: EN / AR, Brand Voice, Placeholders

Updated 10 October 2026 (final QA pass). Legend: **A** approved/keep · **B** needs revision · **C** placeholder · **D** client data required · **E** legal verification required · **F** remove.

## 1. Page-by-page

| Page / block | Class | Note |
|---|---|---|
| Home hero line "Precision in law. Confidence in action." | A* | Proposed copy, needs firm approval |
| Home hero **image** | A (fixed) | Lady Justice image replaced with licensed Dubai architecture |
| Firm statements (`data/firm.ts`) | A* | Faithful to the brief; subject to Q6/Q22 review |
| Legal Experience case summaries (Home, About) | D | Anonymised cases from the client |
| Practice summaries + matters (14) | A | Brief Q8 |
| Legal considerations (14) | **E** | Second verification pass done; corrections logged in RESEARCH-RECORDS §A3 |
| "Labor Disputes" (US spelling) | B (minor) | The rest of the site uses UK spelling; sitemap name, so confirm with the client |
| People (index + 9) | D | Portraits, bios, Ibrahim's full name, Aouni/Awni spelling |
| Insights (4 articles) | **E** | Drafts, `noindex`; images implemented |
| Contact / Inquiry / Locations | D | Phones, emails, WhatsApp, addresses, hours, maps |
| Legal pages (4) | **E + D** | Accurate to current functionality (see §3) |
| Footer + disclaimer line | A | Legal links consistent with the existing footer pattern |

## 2. Placeholder / marker search (whole project)

Searched for: lorem, ipsum, TODO, FIXME, dummy, example, test, fake, sample, [insert], [TBD], [CLIENT DATA…].

| Finding | Count | Class | Action |
|---|---|---|---|
| Lorem ipsum, TODO, FIXME, dummy, fake, sample, [insert], [TBD] | **0** | — | — |
| `[CLIENT DATA REQUIRED — …]` / `[بيانات مطلوبة من المكتب — …]` in `data/legal.ts` (general email, inquiry service, hosting) | 4 pairs | B: temporary client placeholder | Replace when supplied |
| `[LEGAL CONFIRMATION REQUIRED — …]` / `[تأكيد قانوني مطلوب — …]` in `data/legal.ts` (legal name/licence, retention period, governing emirate) | 3 pairs | D: legal review marker | Abanoub Awni |
| `Pending` components ("final content required": office data, WhatsApp, email, bios, case summaries) | system | E: legitimate system placeholder | Disappear automatically when data is set |
| "Draft for legal review" markers (14 practices, 4 legal pages) and "Draft — legal review" (4 articles) | system | D: legal review marker | Set `reviewed: true` after approval |
| "Image — approved photography required" label | 0 visible now on Home/About/Insights | E | Remains only as a fallback for future articles without an image |
| Portrait label "approved photography required" | 9 + | B | Client portraits |
| Internal developer notes in code comments | several | C | Keep (document data provenance) |

## 3. Legal pages vs actual implementation (verified in code)

| Claim in legal pages | Implementation | Match |
|---|---|---|
| One inquiry form collecting name, email, phone, type, subject, message, preferred contact method, preferred office, consent | `InquiryForm.tsx`, `lib/inquiry.ts` | ✅ |
| Submissions delivered via a service provider | `api/inquiry/route.ts` → `INQUIRY_WEBHOOK_URL` (provider not yet chosen → bracketed) | ✅ |
| No analytics, advertising or tracking cookies; no cookie consent needed | No analytics or cookie code in the project | ✅ |
| Google may set cookies **if** a map is embedded | Map iframe renders only when `mapEmbedUrl` is set (currently null) | ✅ (conditional wording) |
| Fonts | Self-hosted via `next/font` (no third-party request) | ✅ (not mentioned, correct) |
| Images | Self-hosted in `/public/images` (no third-party request) | ✅ |
| HTTPS transmission | Depends on hosting | ⚠ WEB TEAM: ensure HTTPS in production |
| Consent links to the Data Protection Notice | Link inside the consent label | ✅ |

Terms: governing emirate bracketed (legal confirmation). Disclaimer: general information; no lawyer-client relationship; no individual advice; no guaranteed outcomes; case-specific; jurisdiction; external links. ✅ All remain DRAFT — LEGAL REVIEW REQUIRED.

## 4. EN / AR legal consistency (spot-checked after corrections)

- Numbers and dates identical in both languages: AED 100,000; 30 days; 9%; three months; 80/60/40/25/30%; 18 / 15 years.
- Law titles: Decree-Law 6/2025 now matches the official Arabic title (`في شأن المصرف المركزي وتنظيم المنشآت والأنشطة الماليَّة وأعمال التأمين`).
- Terminology: «سند تنفيذي», «قاضي التنفيذ», «لجان تسوية المنازعات», «محكمة الاستئناف», «تعويض عادل», «بيع الأراضي»: consistent with UAE usage.
- No meaning drift found between the EN and AR versions of the corrected passages.

## 5. Brand voice

No superlatives, guarantees or "free consultation" anywhere (re-searched). Tone remains precise and client-first.
