/**
 * Minimal per-IP sliding-window rate limiter for form/giving Route Handlers
 * (see GCIC-WEBSITE-BUILD-PROMPT.md §11). In-memory, so it resets on deploy
 * and does not share state across multiple server instances — fine for a
 * single-instance deployment; upgrade to Upstash/Redis if this ever runs
 * behind a horizontally-scaled/serverless fleet where each instance would
 * otherwise track its own separate counts.
 */

const buckets = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (bucket.count >= limit) return false;

  bucket.count += 1;
  return true;
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}
