import { NextResponse } from "next/server";
import { validateInquiry, type InquiryPayload } from "@/lib/inquiry";

/**
 * Receives inquiry / consultation requests.
 *
 * Delivery is intentionally isolated here. Set INQUIRY_WEBHOOK_URL to the firm's
 * chosen inbox (CRM, chat platform, email relay). Until then:
 *   - development: the inquiry is logged to the server console and accepted,
 *     so the full UI flow can be reviewed;
 *   - production: the endpoint answers 501 so visitors are told to contact an
 *     office directly — no inquiry is silently lost.
 */
export async function POST(request: Request) {
  let body: Partial<InquiryPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid-json" }, { status: 400 });
  }

  const errors = validateInquiry(body);
  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) return NextResponse.json({ error: "delivery-failed" }, { status: 502 });
    return NextResponse.json({ ok: true }, { status: 202 });
  }

  if (process.env.NODE_ENV !== "production") {
    // Personal details are deliberately not logged.
    console.info("[inquiry] received in development — not delivered", { type: body.type, matter: body.matter, locale: body.locale });
    return NextResponse.json({ ok: true, delivered: false }, { status: 202 });
  }

  return NextResponse.json({ error: "not-configured" }, { status: 501 });
}
