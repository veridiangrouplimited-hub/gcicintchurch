/**
 * Sends a plain-text notification email via Resend. Without RESEND_API_KEY
 * configured (see .env.local.example / GCIC-WEBSITE-BUILD-PROMPT.md §9),
 * this logs the message server-side and resolves `sent: false` rather than
 * throwing — form Route Handlers still record/acknowledge the submission,
 * they just can't deliver it anywhere until a real key is added.
 */
export async function sendNotificationEmail({
  subject,
  text,
  replyTo,
}: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<{ sent: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CHURCH_NOTIFICATION_EMAIL || "gcichq@gcicintchurch.org";

  if (!apiKey) {
    console.warn(
      `[email] RESEND_API_KEY not set — logging instead of sending.\nTo: ${to}\nSubject: ${subject}\n\n${text}`
    );
    return { sent: false };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "GCIC Website <no-reply@gcicintchurch.org>",
        to: [to],
        reply_to: replyTo,
        subject,
        text,
      }),
    });
    return { sent: res.ok };
  } catch (err) {
    console.error("[email] Resend request failed:", err);
    return { sent: false };
  }
}
