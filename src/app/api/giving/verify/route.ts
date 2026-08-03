import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/email";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

/**
 * Verifies a Paystack transaction server-side before treating it as
 * complete — see GCIC-WEBSITE-BUILD-PROMPT.md §8.1 ("never trust
 * client-side 'success' alone"). The client only ever learns whether a
 * charge succeeded through this endpoint's response.
 *
 * NOTE: this does not yet persist a donation record anywhere — §8.1 calls
 * for a private, access-controlled store separate from public Sanity. No
 * database is provisioned yet, so a verified transaction currently results
 * in a receipt email only. Add real storage before launch.
 */
export async function POST(request: Request) {
  if (!rateLimit(`giving-verify:${getClientIp(request)}`, 10)) {
    return NextResponse.json({ ok: false, error: "Too many requests — please try again in a minute." }, { status: 429 });
  }

  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ ok: false, error: "Online giving is not configured yet." }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const reference = body?.reference;
  if (typeof reference !== "string" || !reference) {
    return NextResponse.json({ ok: false, error: "Missing transaction reference." }, { status: 400 });
  }

  const verifyRes = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
    headers: { Authorization: `Bearer ${secretKey}` },
  });
  const verifyJson = await verifyRes.json().catch(() => null);

  if (!verifyRes.ok || !verifyJson?.status || verifyJson.data?.status !== "success") {
    return NextResponse.json({ ok: false, error: "We couldn't confirm this payment." }, { status: 400 });
  }

  const { amount, customer, metadata } = verifyJson.data;
  const amountNgn = amount / 100;

  await sendNotificationEmail({
    subject: `New gift received: ₦${amountNgn.toLocaleString()}`,
    text: `Category: ${metadata?.category ?? "(not specified)"}\nName: ${metadata?.givingName ?? "(not given)"}\nEmail: ${
      customer?.email ?? "(unknown)"
    }\nPhone: ${metadata?.phone ?? "(not given)"}\nAmount: ₦${amountNgn.toLocaleString()}\nReference: ${reference}\nNote: ${
      metadata?.note ?? "(none)"
    }`,
  });

  return NextResponse.json({ ok: true, amount: amountNgn, email: customer?.email });
}
