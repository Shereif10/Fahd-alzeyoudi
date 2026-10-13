import Link from "next/link";
import { href, tr, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { practices } from "@/data/practices";
import { offices } from "@/data/offices";
import { firm } from "@/data/firm";
import { legalDocs } from "@/data/legal";
import { Logo } from "@/components/brand/Logo";
import { Arrow } from "@/components/ui/primitives";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo className="site-footer__logo" title="Fahad Al Zeyoudi" />
            <p>{tr(firm.positioning, locale)}</p>
            <Link href={href(locale, "/contact/inquiry")} className="btn btn--light">
              <span>{dict.cta.inquiryConsultation}</span>
              <Arrow />
            </Link>
          </div>

          <nav className="site-footer__cols" aria-label={dict.footer.firm}>
            <div>
              <h2 className="site-footer__head">{dict.footer.firm}</h2>
              <ul>
                <li><Link href={href(locale, "/about")}>{dict.nav.about}</Link></li>
                <li><Link href={href(locale, "/people")}>{dict.nav.people}</Link></li>
                <li><Link href={href(locale, "/insights")}>{dict.nav.insights}</Link></li>
                <li><Link href={href(locale, "/practices")}>{dict.cta.allPractices}</Link></li>
              </ul>
              <h2 className="site-footer__head site-footer__head--spaced">{dict.footer.legal}</h2>
              <ul>
                {legalDocs.map((d) => (
                  <li key={d.slug}>
                    <Link href={href(locale, `/legal/${d.slug}`)}>{tr(d.title, locale)}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="site-footer__practices">
              <h2 className="site-footer__head">{dict.footer.practices}</h2>
              <ul>
                {practices.map((p) => (
                  <li key={p.slug}>
                    <Link href={href(locale, `/practices/${p.slug}`)}>{tr(p.title, locale)}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="site-footer__head">{dict.footer.contact}</h2>
              <ul>
                <li><Link href={href(locale, "/contact/inquiry")}>{dict.cta.inquiryConsultation}</Link></li>
                <li><Link href={href(locale, "/contact/locations")}>{dict.contact.locationsTitle}</Link></li>
              </ul>
              <h2 className="site-footer__head site-footer__head--spaced">{dict.footer.offices}</h2>
              <ul>
                {offices.map((o) => (
                  <li key={o.id}>
                    <Link href={href(locale, `/contact/locations#${o.id}`)}>{tr(o.name, locale)}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__disclaimer">{dict.footer.disclaimer}</p>
          <p>
            © {year} {locale === "ar" ? "فهد الزيودي" : "Fahad Al Zeyoudi"}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
