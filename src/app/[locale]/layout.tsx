import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isLocale, locales, localeDir, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { site } from "@/config/site";
import { plexArabic, plexSans, plexSerif } from "../fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { JsonLd, firmLd, websiteLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: "#293545",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l = (isLocale(locale) ? locale : "en") as Locale;
  const name = site.name[l];
  return {
    metadataBase: new URL(site.url),
    title: { default: name, template: `%s — ${name}` },
    description:
      l === "ar"
        ? "مكتب فهد الزيودي للمحاماة: خدمات التقاضي والتمثيل القانوني للأفراد والشركات والمستثمرين في دولة الإمارات، من مكتبي دبي وعجمان."
        : "Fahad Al Zeyoudi: litigation and legal representation for individuals, companies and investors in the UAE, from offices in Dubai and Ajman.",
    openGraph: { siteName: name, locale: l === "ar" ? "ar_AE" : "en_AE", type: "website" },
    icons: { icon: "/icon.svg" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale === "ar" ? "ar-AE" : "en"}
      dir={localeDir[locale]}
      className={`${plexSans.variable} ${plexArabic.variable} ${plexSerif.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <a className="skip-link" href="#main">
          {dict.skip}
        </a>
        <Header locale={locale} dict={dict} />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
        <RevealObserver />
        <JsonLd data={[firmLd(locale), websiteLd(locale)]} />
      </body>
    </html>
  );
}
