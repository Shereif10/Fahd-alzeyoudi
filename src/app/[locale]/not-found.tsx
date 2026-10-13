"use client";

import { useParams } from "next/navigation";
import { href, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { ButtonLink, Eyebrow } from "@/components/ui/primitives";

export default function LocaleNotFound() {
  const params = useParams<{ locale: string }>();
  const locale = params?.locale && isLocale(params.locale) ? params.locale : "en";
  const t = getDictionary(locale);
  return (
    <section className="container not-found">
      <Eyebrow>404</Eyebrow>
      <h1 className="page-hero__title">{t.notFound.title}</h1>
      <p className="lead" style={{ marginBlock: "28px 40px" }}>
        {t.notFound.body}
      </p>
      <div className="btn-row">
        <ButtonLink href={href(locale)} variant="solid">
          {t.notFound.home}
        </ButtonLink>
      </div>
    </section>
  );
}
