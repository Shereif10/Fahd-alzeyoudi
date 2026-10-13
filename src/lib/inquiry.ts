/**
 * Inquiry submission contract, shared by the form (client) and the API route (server).
 *
 * INTEGRATION POINT — Brief Q31–32: inquiries must reach the firm with a clear
 * notification and allow the team to reply and continue the conversation (e.g. a
 * chat/CRM inbox or WhatsApp Business). Connect that service in
 * src/app/api/inquiry/route.ts by setting INQUIRY_WEBHOOK_URL; nothing else changes.
 */
export type InquiryType = "inquiry" | "consultation" | "appointment";
export type ContactMethod = "phone" | "email" | "whatsapp";

export type InquiryPayload = {
  type: InquiryType;
  name: string;
  email: string;
  phone: string;
  matter: string;
  message: string;
  preferred: ContactMethod;
  office: "dubai" | "ajman" | "any";
  consent: boolean;
  locale: "en" | "ar";
};

export type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message" | "consent", "required" | "format">>;

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const PHONE_RE = /^\+?[0-9\s()-]{7,20}$/;

export function validateInquiry(p: Partial<InquiryPayload>): FieldErrors {
  const e: FieldErrors = {};
  if (!p.name?.trim()) e.name = "required";
  if (!p.email?.trim()) e.email = "required";
  else if (!EMAIL_RE.test(p.email.trim())) e.email = "format";
  if (!p.phone?.trim()) e.phone = "required";
  else if (!PHONE_RE.test(p.phone.trim())) e.phone = "format";
  if (!p.message?.trim()) e.message = "required";
  if (!p.consent) e.consent = "required";
  return e;
}

export type SubmitResult = { ok: true } | { ok: false; reason: "invalid" | "not-configured" | "network" };

export async function submitInquiry(payload: InquiryPayload): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) return { ok: true };
    if (res.status === 422) return { ok: false, reason: "invalid" };
    if (res.status === 501) return { ok: false, reason: "not-configured" };
    return { ok: false, reason: "network" };
  } catch {
    return { ok: false, reason: "network" };
  }
}
