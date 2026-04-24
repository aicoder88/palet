import { NextRequest, NextResponse } from "next/server";

// RFQ intake endpoint. Delivery destination is controlled by env.
// - RFQ_INBOX_EMAIL: primary inbox (required in production)
// - RESEND_API_KEY:  optional; if present, email is sent via Resend.
// Without RESEND_API_KEY the request is logged and persisted via console —
// swap in an SMTP transport when credentials are available.
export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const required = [
    "company",
    "contact",
    "email",
    "productType",
    "volumeMonthly",
    "deliveryLocation",
  ] as const;
  for (const k of required) {
    if (!body[k]?.toString().trim()) {
      return NextResponse.json(
        { ok: false, error: `missing_field:${k}` },
        { status: 400 }
      );
    }
  }

  const inbox = process.env.RFQ_INBOX_EMAIL ?? "ponude@slisuric.hr";
  const subject = `RFQ — ${body.company} (${body.productType})`;
  const text = [
    `Tvrtka: ${body.company}`,
    `Kontakt: ${body.contact}`,
    `Email: ${body.email}`,
    body.phone ? `Telefon: ${body.phone}` : "",
    `Proizvod: ${body.productType}`,
    `Volumen / mj.: ${body.volumeMonthly}`,
    `Odredište: ${body.deliveryLocation}`,
    body.deliveryDate ? `Željeni rok: ${body.deliveryDate}` : "",
    body.specNotes ? `\nNapomena:\n${body.specNotes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RFQ_FROM ?? "no-reply@slisuric.hr",
          to: inbox,
          reply_to: body.email,
          subject,
          text,
        }),
      });
      if (!r.ok) {
        const detail = await r.text();
        console.error("[rfq] resend_failed", r.status, detail);
        return NextResponse.json(
          { ok: false, error: "email_send_failed" },
          { status: 502 }
        );
      }
    } catch (e) {
      console.error("[rfq] resend_exception", e);
      return NextResponse.json(
        { ok: false, error: "email_send_failed" },
        { status: 502 }
      );
    }
  } else {
    console.log("[rfq] new submission (no email transport configured):", {
      to: inbox,
      subject,
      text,
    });
  }

  return NextResponse.json({ ok: true });
}
