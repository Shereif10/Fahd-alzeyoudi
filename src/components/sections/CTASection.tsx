import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { ButtonLink } from "@/components/ui/primitives";
import { Logo } from "@/components/brand/Logo";

/** Closing call to action. Never describes the consultation as free (Brief Q2, Q32). */
export function CTASection({ locale, dict, title, body }: { locale: Locale; dict: Dictionary; title?: string[]; body?: string }) {
  const lines = title ?? dict.home.ctaTitle;
  return (
    <section className="cta" aria-labelledby="cta-title">
      <Logo variant="mark" className="cta__mark" title="" />
      <div className="container cta__grid">
        <h2 id="cta-title" className="cta__title" data-reveal="">
          {lines.map((line, i) => (
            <span key={i} className="cta__line">
              {line}
            </span>
          ))}
        </h2>
        <div className="cta__side" data-reveal="">
          <p>{body ?? dict.home.ctaBody}</p>
          <div className="btn-row">
            <ButtonLink href={href(locale, "/contact/inquiry?type=consultation")} variant="light">
              {dict.cta.consultation}
            </ButtonLink>
            <ButtonLink href={href(locale, "/contact/inquiry?type=inquiry")} variant="outline">
              {dict.cta.inquiry}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
