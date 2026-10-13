"use client";

import { useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { href, tr, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { practices } from "@/data/practices";
import { offices } from "@/data/offices";
import { Arrow } from "@/components/ui/primitives";
import {
  submitInquiry,
  validateInquiry,
  type ContactMethod,
  type FieldErrors,
  type InquiryPayload,
  type InquiryType,
} from "@/lib/inquiry";

type Status = "idle" | "sending" | "sent" | "error" | "not-configured";

const TYPES: InquiryType[] = ["inquiry", "consultation", "appointment"];
const METHODS: ContactMethod[] = ["phone", "email", "whatsapp"];

export function InquiryForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const params = useSearchParams();
  const initialType = (TYPES as string[]).includes(params.get("type") ?? "") ? (params.get("type") as InquiryType) : "inquiry";
  const initialMatter = practices.some((p) => p.slug === params.get("matter")) ? params.get("matter")! : "";

  const f = dict.form;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const labels: Record<keyof FieldErrors, string> = {
    name: f.name,
    email: f.email,
    phone: f.phone,
    message: f.message,
    consent: f.consent,
  };

  const messageFor = (key: keyof FieldErrors) => {
    const kind = errors[key];
    if (!kind) return null;
    if (key === "consent") return f.errorConsent;
    if (kind === "format") return key === "email" ? f.errorEmail : f.errorPhone;
    return f.errorRequired.replace("{field}", labels[key]);
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload: InquiryPayload = {
      type: (data.get("type") as InquiryType) ?? "inquiry",
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      matter: String(data.get("matter") ?? ""),
      message: String(data.get("message") ?? ""),
      preferred: (data.get("preferred") as ContactMethod) ?? "phone",
      office: (data.get("office") as InquiryPayload["office"]) ?? "any",
      consent: data.get("consent") === "on",
      locale,
    };
    const found = validateInquiry(payload);
    setErrors(found);
    if (Object.keys(found).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setStatus("sending");
    const result = await submitInquiry(payload);
    if (result.ok) {
      setStatus("sent");
      requestAnimationFrame(() => successRef.current?.focus());
    } else {
      setStatus(result.reason === "not-configured" ? "not-configured" : "error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-success" ref={successRef} tabIndex={-1} role="status">
        <span className="plane" aria-hidden="true" />
        <h2>{f.successTitle}</h2>
        <p>{f.successBody}</p>
        <button
          type="button"
          className="btn btn--outline on-dark"
          onClick={() => {
            setStatus("idle");
            setErrors({});
          }}
        >
          <span>{f.another}</span>
          <Arrow />
        </button>
      </div>
    );
  }

  const errorKeys = Object.keys(errors) as (keyof FieldErrors)[];
  const describe = (key: keyof FieldErrors, hint?: string) =>
    [hint, errors[key] ? `${key}-error` : null].filter(Boolean).join(" ") || undefined;

  return (
    <form ref={formRef} className="form" noValidate onSubmit={onSubmit}>
      {errorKeys.length > 0 && (
        <div className="form__summary" ref={summaryRef} tabIndex={-1} role="alert">
          {f.errorSummary}
          <ul>
            {errorKeys.map((k) => (
              <li key={k}>
                <a href={`#${k}`}>{messageFor(k)}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <fieldset className="fieldset">
        <legend className="fieldset__legend">{f.type}</legend>
        <div className="options">
          {TYPES.map((tp) => (
            <label key={tp} className="option">
              <input type="radio" name="type" value={tp} defaultChecked={tp === initialType} />
              <span>{tp === "inquiry" ? f.typeInquiry : tp === "consultation" ? f.typeConsultation : f.typeAppointment}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label className="field__label" htmlFor="name">
          {f.name}
          <span className="field__req">({f.required})</span>
        </label>
        <input
          id="name"
          name="name"
          className="field__input"
          autoComplete="name"
          required
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={describe("name")}
        />
        {errors.name && <p id="name-error" className="field__error">{messageFor("name")}</p>}
      </div>

      <div className="form__row">
        <div className="field">
          <label className="field__label" htmlFor="email">
            {f.email}
            <span className="field__req">({f.required})</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            dir="ltr"
            className="field__input"
            autoComplete="email"
            required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describe("email")}
          />
          {errors.email && <p id="email-error" className="field__error">{messageFor("email")}</p>}
        </div>
        <div className="field">
          <label className="field__label" htmlFor="phone">
            {f.phone}
            <span className="field__req">({f.required})</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            dir="ltr"
            inputMode="tel"
            className="field__input"
            autoComplete="tel"
            required
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={describe("phone")}
          />
          {errors.phone && <p id="phone-error" className="field__error">{messageFor("phone")}</p>}
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label className="field__label" htmlFor="matter">
            {f.subject}
          </label>
          <select id="matter" name="matter" className="field__input" defaultValue={initialMatter}>
            <option value="">{f.subjectPlaceholder}</option>
            {practices.map((p) => (
              <option key={p.slug} value={p.slug}>
                {tr(p.title, locale)}
              </option>
            ))}
            <option value="other">{f.subjectOther}</option>
          </select>
        </div>
        <div className="field">
          <label className="field__label" htmlFor="office">
            {f.office}
          </label>
          <select id="office" name="office" className="field__input" defaultValue="any">
            <option value="any">{f.officeAny}</option>
            {offices.map((o) => (
              <option key={o.id} value={o.id}>
                {tr(o.name, locale)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label className="field__label" htmlFor="message">
          {f.message}
          <span className="field__req">({f.required})</span>
        </label>
        <p id="message-hint" className="field__hint">
          {f.messageHint}
        </p>
        <textarea
          id="message"
          name="message"
          className="field__input"
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describe("message", "message-hint")}
        />
        {errors.message && <p id="message-error" className="field__error">{messageFor("message")}</p>}
      </div>

      <fieldset className="fieldset">
        <legend className="fieldset__legend">{f.preferred}</legend>
        <div className="options">
          {METHODS.map((m) => (
            <label key={m} className="option">
              <input type="radio" name="preferred" value={m} defaultChecked={m === "phone"} />
              <span>{m === "phone" ? f.viaPhone : m === "email" ? f.viaEmail : f.viaWhatsapp}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label className="check" htmlFor="consent">
          <input id="consent" name="consent" type="checkbox" aria-invalid={errors.consent ? true : undefined} aria-describedby={describe("consent")} />
          <span>
            {f.consent}{" "}
            <a className="link" href={href(locale, "/legal/data-protection-notice")} target="_blank" rel="noopener">
              {f.consentNotice}
            </a>
          </span>
        </label>
        {errors.consent && <p id="consent-error" className="field__error">{messageFor("consent")}</p>}
      </div>

      {(status === "error" || status === "not-configured") && (
        <div className="form__summary" role="alert">
          {status === "error" ? f.errorSubmit : f.errorNotConfigured}
        </div>
      )}

      <button type="submit" className="btn btn--solid form__submit" disabled={status === "sending"}>
        <span>{status === "sending" ? f.sending : f.submit}</span>
        <Arrow />
      </button>
    </form>
  );
}
