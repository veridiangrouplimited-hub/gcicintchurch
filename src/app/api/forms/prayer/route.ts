import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/email";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { isSpam } from "@/lib/spam-guard";

// Prayer requests are never stored as public/queryable content (see
// GCIC-WEBSITE-BUILD-PROMPT.md §8.4) — this routes straight to the prayer
// team's inbox and nowhere else.
export async function POST(request: Request) {
  if (!rateLimit(`prayer:${getClientIp(request)}`)) {
    return NextResponse.json({ ok: false, error: "Too many requests — please try again in a minute." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });

  if (isSpam(body)) return NextResponse.json({ ok: true });

  const { name, email, phone, area, message } = body;
  if (typeof email !== "string" || !email.trim() || typeof message !== "string" || !message.trim()) {
    return NextResponse.json({ ok: false, error: "Email and prayer request are required." }, { status: 400 });
  }

  await sendNotificationEmail({
    subject: `Prayer request${typeof area === "string" && area ? `: ${area}` : ""}`,
    text: `Name: ${typeof name === "string" && name ? name : "(not given)"}\nEmail: ${email}\nPhone: ${
      typeof phone === "string" && phone ? phone : "(not given)"
    }\nArea: ${typeof area === "string" && area ? area : "(not specified)"}\n\n${message}`,
    replyTo: email,
  });

  return NextResponse.json({ ok: true });
}
