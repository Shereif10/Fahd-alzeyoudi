import Link from "next/link";
import { href, tr, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { offices, type Office } from "@/data/offices";
import { getPerson } from "@/data/people";
import { Arrow, Pending } from "@/components/ui/primitives";
import { ArchImage } from "@/components/media/ArchImage";

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="office__row">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

export function OfficeCard({ office, locale, dict, full = false }: { office: Office; locale: Locale; dict: Dictionary; full?: boolean }) {
  const manager = office.managerSlug ? getPerson(office.managerSlug) : undefined;
  return (
    <article className={`office${full ? " office--full" : ""}`} id={office.id} data-reveal="">
      <header className="office__head">
        <h3 className="office__city">{tr(office.city, locale)}</h3>
        <p className="office__name">{tr(office.name, locale)}</p>
      </header>
      <dl className="office__details">
        <Detail label={dict.contact.address}>
          {office.address ? tr(office.address, locale) : <Pending>{dict.placeholder.address}</Pending>}
        </Detail>
        <Detail label={dict.contact.phone}>
          {office.phone ? (
            <a href={`tel:${office.phone.replace(/\s/g, "")}`} dir="ltr">{office.phone}</a>
          ) : (
            <Pending>{dict.placeholder.phone}</Pending>
          )}
        </Detail>
        {full && (
          <>
            <Detail label={dict.contact.email}>
              {office.email ? <a href={`mailto:${office.email}`}>{office.email}</a> : <Pending>{dict.placeholder.email}</Pending>}
            </Detail>
            <Detail label={dict.contact.hours}>
              {office.hours ? tr(office.hours, locale) : <Pending>{dict.placeholder.hours}</Pending>}
            </Detail>
          </>
        )}
        {manager && (
          <Detail label={dict.contact.manager}>
            <Link href={href(locale, `/people/${manager.slug}`)} className="link">
              {tr(manager.name, locale)}
            </Link>
          </Detail>
        )}
      </dl>

      {full && (
        <div className="office__map">
          {office.mapEmbedUrl ? (
            <iframe
              src={office.mapEmbedUrl}
              title={`${dict.contact.map} — ${tr(office.name, locale)}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <ArchImage variant={office.id === "dubai" ? "towers" : "arcade"} label={dict.placeholder.map} />
          )}
        </div>
      )}

      <div className="office__actions">
        {office.mapUrl ? (
          <a className="btn btn--text" href={office.mapUrl} target="_blank" rel="noopener noreferrer">
            <span>{dict.cta.directions}</span>
            <Arrow />
          </a>
        ) : full ? (
          <span className="btn btn--text is-disabled" aria-disabled="true">
            <span>{dict.cta.directions}</span>
            <Pending>{dict.placeholder.map}</Pending>
          </span>
        ) : (
          <Link className="btn btn--text" href={href(locale, `/contact/locations#${office.id}`)}>
            <span>{dict.cta.locations}</span>
            <Arrow />
          </Link>
        )}
      </div>
    </article>
  );
}

export function OfficeList({ locale, dict, full = false }: { locale: Locale; dict: Dictionary; full?: boolean }) {
  return (
    <div className={`office-list${full ? " office-list--full" : ""}`}>
      {offices.map((o) => (
        <OfficeCard key={o.id} office={o} locale={locale} dict={dict} full={full} />
      ))}
    </div>
  );
}
