import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/email";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { isSpam } from "@/lib/spam-guard";
import { writeClient } from "@/sanity/write-client";

export async function POST(request: Request) {
  if (!rateLimit(`testimony:${getClientIp(request)}`)) {
    return NextResponse.json({ ok: false, error: "Too many requests — please try again in a minute." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });

  if (isSpam(body)) return NextResponse.json({ ok: true });

  const { name, email, testimony } = body;
  if (typeof name !== "string" || !name.trim() || typeof testimony !== "string" || !testimony.trim()) {
    return NextResponse.json({ ok: false, error: "Name and testimony are required." }, { status: 400 });
  }

  await writeClient.create({
    _type: "testimony",
    name,
    email: typeof email === "string" ? email : undefined,
    testimonyText: testimony,
    status: "pending",
    submittedAt: new Date().toISOString(),
  });

  await sendNotificationEmail({
    subject: "New testimony submitted (pending review)",
    text: `${name} submitted a testimony for review in Sanity Studio.\n\n"${testimony}"`,
    replyTo: typeof email === "string" ? email : undefined,
  });

  return NextResponse.json({ ok: true });
}
