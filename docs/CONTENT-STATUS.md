# Content status

Nothing on the site was invented. Everything shown as fact comes from the Project Brief (answers to the developer's questions) or the sitemap. Anything not supplied appears on screen as a visible bracketed placeholder, e.g. `[OFFICE ADDRESS — FINAL CONTENT REQUIRED]`.

Per the brief (Q6, Q22), **all copy must be reviewed by Legal Consultant Abanoub Awni before publication.**

## Sourced from the brief

| Content                                                                                                           | Brief        | File                      |
| ----------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------- |
| 14 practice areas and the scope of each                                                                           | Q8           | `src/data/practices.ts`   |
| Appeal / cassation / enforcement coverage                                                                         | Q8           | `src/data/firm.ts`        |
| Equal weight for all practices                                                                                    | Q9           | practices pages           |
| Integrated team under Abanoub Awni (practices are not tied to individual lawyers)                                 | Q10          | practice pages, profiles  |
| Team members and roles                                                                                            | Q12          | `src/data/people.ts`      |
| Prominence order: Fahad, then Abanoub, Amna, Ammar, then the rest                                                 | Q14–15       | People/About/Home layouts |
| Positioning sentence                                                                                              | Q6           | hero, footer              |
| Differentiators: all seven Emirates, communication, integrity, client interest first, settlement when appropriate | Q5           | approach sections         |
| Areas where the firm has obtained judgments in significant cases                                                  | Q19          | Legal Experience          |
| Audiences: individuals, companies, investors; UAE focus                                                           | Q3–4         | About                     |
| Inquiry welcome and confirmation messages; never "free"                                                           | Q2, Q32      | inquiry form              |
| No awards, testimonials or client names                                                                           | Q17–18       | none shown                |
| Dubai and Ajman offices                                                                                           | Sitemap, Q33 | `src/data/offices.ts`     |

English text is a faithful rendering of the Arabic brief. The interface copy, the hero line "Precision in law. Confidence in action." and section headings are proposed copy for approval.

## Required from the firm

| Item                                                                                                           | Where to add                                    |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Office addresses, phones, emails, hours                                                                        | `src/data/offices.ts`                           |
| Google Maps links and embeds for both offices                                                                  | `src/data/offices.ts` (`mapUrl`, `mapEmbedUrl`) |
| WhatsApp number, general email, social links                                                                   | `src/config/site.ts`                            |
| Production domain                                                                                              | env `NEXT_PUBLIC_SITE_URL`                      |
| Team portraits (see `portrait-photography-brief.md`)                                                           | `public/…` + `portrait` in `src/data/people.ts` |
| Biographies, education, languages, licences                                                                    | `bio` in `src/data/people.ts`                   |
| Approval of practice guidance ("Legal considerations": drafted Oct 2026, `src/data/practice-considerations.ts`) | set `reviewed: true` per entry |
| Anonymised case summaries (Q19, confidentiality review)                                                        | Legal Experience sections                       |
| Approval of the 4 drafted articles (placeholders removed Oct 2026; drafts stay `noindex` until approved) | `src/data/insights.ts` (`reviewed`) |
| Architectural / office photography                                                                             | `src` prop on `ArchImage`                       |
| Ara Al Bayan web font files (licensed)                                                                         | `public/fonts/` + `globals.css`                 |
| Spelling confirmation: sitemap "Abanoub Aouni" vs Arabic "أبانوب عوني" (Abanoub Awni)                          | `src/data/people.ts`                            |

## Integrations still to connect

- **Inquiry delivery (Q31–32):** set `INQUIRY_WEBHOOK_URL` to the firm's inbox, CRM or chat tool. The endpoint is `src/app/api/inquiry/route.ts`. Until it is set, development accepts submissions without delivering them, and production returns a clear "contact an office directly" message so no inquiry is silently lost.
- **Articles management (Q24):** `src/data/insights.ts` defines the `Insight` shape; replace it with a headless CMS query that returns the same shape.

## October 2026 update

Legal research, 14 Legal Considerations, 4 articles, legal pages (privacy, consent, terms, disclaimer), SEO metadata, structured data and audits were added. Everything is a **draft for legal review**. See `docs/FINAL-REPORT.md` for the full list of what remains with the client, the legal reviewer and the web team.
