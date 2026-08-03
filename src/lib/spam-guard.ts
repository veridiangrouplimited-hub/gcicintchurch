/**
 * Shared bot-mitigation for form Route Handlers (see
 * GCIC-WEBSITE-BUILD-PROMPT.md §8.4): a honeypot field that must stay empty,
 * plus a minimum time-on-form so scripted submissions "faster than ~2s"
 * bounce. Neither is user-visible friction for a genuine visitor.
 */
export function isSpam(body: { honeypot?: unknown; formRenderedAt?: unknown }): boolean {
  if (typeof body.honeypot === "string" && body.honeypot.trim() !== "") return true;

  const renderedAt = typeof body.formRenderedAt === "number" ? body.formRenderedAt : null;
  if (renderedAt !== null && Date.now() - renderedAt < 2000) return true;

  return false;
}
