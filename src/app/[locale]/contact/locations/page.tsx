import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import { href, tr } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { pageMetadata, resolveLocale } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { OfficeList } from "@/components/sections/Offices";
import { CTASection } from "@/components/sections/CTASection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata(locale, "/contact/locations", tr(pageSeo.locations.title, locale), tr(pageSeo.locations.description, locale));
}

export default async function LocationsPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getDictionary(locale);

  return (
    <>
      <PageHero
        crumbs={[
          { label: t.nav.home, href: href(locale) },
          { label: t.nav.contact, href: href(locale, "/contact") },
          { label: t.contact.locationsTitle },
        ]}
        crumbLabel={t.breadcrumb}
        title={t.contact.locationsTitle}
        lead={<p>{t.contact.locationsBody}</p>}
        size="lg"
      />

      <section className="section" aria-label={t.home.officesLabel}>
        <div className="container">
          <OfficeList locale={locale} dict={t} full />
        </div>
      </section>

      <CTASection locale={locale} dict={t} />
    </>
  );
}
