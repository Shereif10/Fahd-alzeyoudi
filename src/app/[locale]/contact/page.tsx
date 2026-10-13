import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import Link from "next/link";
import { href, tr } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { pageMetadata, resolveLocale } from "@/lib/seo";
import { site } from "@/config/site";
import { Arrow, Eyebrow, Pending } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { OfficeList } from "@/components/sections/Offices";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata(locale, "/contact", tr(pageSeo.contact.title, locale), tr(pageSeo.contact.description, locale));
}

export default async function ContactPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getDictionary(locale);

  return (
    <>
      <PageHero
        crumbs={[{ label: t.nav.home, href: href(locale) }, { label: t.nav.contact }]}
        crumbLabel={t.breadcrumb}
        title={t.contact.title}
        lead={<p>{t.contact.lead}</p>}
        size="lg"
      />

      <section className="section section--tight" aria-label={t.contact.title}>
        <div className="container">
          <div className="contact-paths">
            <Link href={href(locale, "/contact/inquiry")} className="contact-path contact-path--navy" data-reveal="">
              <div>
                <h2 className="contact-path__title">{t.contact.inquiryTitle}</h2>
                <p>{t.contact.inquiryBody}</p>
              </div>
              <Arrow />
            </Link>
            <Link href={href(locale, "/contact/locations")} className="contact-path" data-reveal="">
              <div>
                <h2 className="contact-path__title">{t.contact.locationsTitle}</h2>
                <p>{t.contact.locationsBody}</p>
              </div>
              <Arrow />
            </Link>
          </div>

          <dl className="channel-list" style={{ marginTop: "clamp(56px, 6vw, 96px)" }}>
            <div>
              <dt>{t.contact.whatsapp}</dt>
              <dd>
                {site.whatsapp ? (
                  <a className="link" href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`} dir="ltr">
                    {site.whatsapp}
                  </a>
                ) : (
                  <Pending>{t.placeholder.whatsapp}</Pending>
                )}
              </dd>
            </div>
            <div>
              <dt>{t.contact.email}</dt>
              <dd>
                {site.email ? (
                  <a className="link" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                ) : (
                  <Pending>{t.placeholder.email}</Pending>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="offices-title">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>{t.home.officesLabel}</Eyebrow>
              <h2 id="offices-title" className="h2">
                {t.home.officesTitle}
              </h2>
            </div>
          </div>
          <OfficeList locale={locale} dict={t} />
        </div>
      </section>
    </>
  );
}
