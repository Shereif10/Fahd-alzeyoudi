import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { href, locales, tr, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { pageMetadata } from "@/lib/seo";
import { formatDate, getInsight, insights, isPublished, sortedInsights } from "@/data/insights";
import { JsonLd, articleLd, breadcrumbLd } from "@/lib/structured-data";
import { getPractice } from "@/data/practices";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArchImage } from "@/components/media/ArchImage";
import { InsightRow, insightVariant } from "@/components/sections/InsightItems";
import { CTASection } from "@/components/sections/CTASection";
import { ButtonLink } from "@/components/ui/primitives";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => insights.map((a) => ({ locale, slug: a.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const a = getInsight(slug);
  if (!a) return {};
  const l = locale as Locale;
  const meta = pageMetadata(
    l,
    `/insights/${slug}`,
    tr(a.seo?.title ?? a.title, l),
    tr(a.seo?.description ?? a.excerpt, l),
  );
  const withArticle: Metadata = {
    ...meta,
    keywords: a.keywords ? tr(a.keywords, l) : undefined,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: a.date,
      ...(a.image ? { images: [{ url: a.image.src, alt: tr(a.image.alt, l) }] } : {}),
    },
  };
  // Placeholders and drafts awaiting legal approval must not be indexed.
  return isPublished(a) ? withArticle : { ...withArticle, robots: { index: false, follow: true } };
}

export default async function ArticlePage({ params }: Props) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const article = getInsight(slug);
  if (!article) notFound();
  const t = getDictionary(locale);
  const practice = article.practice ? getPractice(article.practice) : undefined;
  const related = sortedInsights()
    .filter((a) => a.slug !== slug)
    .slice(0, 3);
  const [first, ...body] = article.body;
  const crumbs = [
    { label: t.nav.home, href: href(locale) },
    { label: t.nav.insights, href: href(locale, "/insights") },
    { label: tr(article.title, locale) },
  ];

  return (
    <>
      <header className="article-head">
        <div className="container">
          <Breadcrumbs
            label={t.breadcrumb}
            items={crumbs}
          />
          <h1 className="article-head__title">{tr(article.title, locale)}</h1>
          <p className="lead">{tr(article.excerpt, locale)}</p>
          <ArchImage
            variant={insightVariant(article.slug)}
            src={article.image?.src}
            alt={article.image ? tr(article.image.alt, locale) : undefined}
            label={t.placeholder.image}
            sizes="100vw"
            priority
          />
        </div>
      </header>

      <div className="container article-layout">
        <aside className="article-aside">
          <dl>
            <dt>{t.insights.category}</dt>
            <dd>{tr(article.category, locale)}</dd>
          </dl>
          <dl>
            <dt>{t.insights.published}</dt>
            <dd>
              <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
              {article.readingMinutes && (
                <>
                  <br />
                  {article.readingMinutes} {t.insights.minutes}
                </>
              )}
            </dd>
          </dl>
          {practice && (
            <dl>
              <dt>{t.nav.practices}</dt>
              <dd>
                <Link className="link" href={href(locale, `/practices/${practice.slug}`)}>
                  {tr(practice.title, locale)}
                </Link>
              </dd>
            </dl>
          )}
          {article.placeholder ? (
            <p className="article-note">{t.insights.placeholderNote}</p>
          ) : (
            !article.reviewed && <p className="article-note">{t.insights.draftNote}</p>
          )}
        </aside>

        <article className="prose">
          {first?.type === "p" && <p className="lede">{tr(first.text, locale)}</p>}
          {body.map((b, i) => {
            if (b.type === "h2") return <h2 key={i}>{tr(b.text, locale)}</h2>;
            if (b.type === "quote") return <blockquote key={i}>{tr(b.text, locale)}</blockquote>;
            if (b.type === "faq")
              return (
                <p key={i}>
                  <strong>{tr(b.q, locale)}</strong>
                  <br />
                  {tr(b.a, locale)}
                </p>
              );
            if (b.type === "sources")
              return (
                <Fragment key={i}>
                  <h2>{t.insights.sources}</h2>
                  {tr(b.items, locale).map((s) => (
                    <p key={s}>{s}</p>
                  ))}
                </Fragment>
              );
            return <p key={i}>{tr(b.text, locale)}</p>;
          })}
        </article>
        <JsonLd data={[articleLd(article, locale), breadcrumbLd(locale, crumbs)]} />
      </div>

      <section className="section section--tint section--tight" aria-labelledby="related-title">
        <div className="container">
          <div className="section-head">
            <h2 id="related-title" className="h2">
              {t.insights.related}
            </h2>
            <ButtonLink href={href(locale, "/insights")} variant="text">
              {t.cta.allInsights}
            </ButtonLink>
          </div>
          <div className="insights-related">
            {related.map((a) => (
              <InsightRow key={a.slug} insight={a} locale={locale} dict={t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection locale={locale} dict={t} />
    </>
  );
}
