import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/email";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { isSpam } from "@/lib/spam-guard";

export async function POST(request: Request) {
  if (!rateLimit(`volunteer:${getClientIp(request)}`)) {
    return NextResponse.json({ ok: false, error: "Too many requests — please try again in a minute." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });

  if (isSpam(body)) return NextResponse.json({ ok: true });

  const { name, email, phone, areas, message } = body;
  if (typeof name !== "string" || !name.trim() || typeof email !== "string" || !email.trim()) {
    return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 });
  }

  const areasText = Array.isArray(areas) ? areas.join(", ") : typeof areas === "string" ? areas : "(not specified)";

  await sendNotificationEmail({
    subject: "New volunteer sign-up",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${typeof phone === "string" && phone ? phone : "(not given)"}\nAreas of interest: ${areasText}\n\n${
      typeof message === "string" ? message : ""
    }`,
    replyTo: email,
  });

  return NextResponse.json({ ok: true });
}
