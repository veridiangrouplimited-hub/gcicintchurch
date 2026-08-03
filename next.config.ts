import type { NextConfig } from "next";

// Allow-listed third parties this site actually embeds/calls from the
// browser — see GCIC-WEBSITE-BUILD-PROMPT.md §9/§11. Keep this list in sync
// with any new embed (a new video provider, a new payment method, etc).
const isDev = process.env.NODE_ENV !== "production";

const csp = [
  "default-src 'self'",
  // 'unsafe-eval' is dev-only — React's dev-mode debugging uses eval() for
  // stack traces; it never does in production, so production stays strict.
  `script-src 'self' 'unsafe-inline' https://js.paystack.co${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://cdn.sanity.io https://i.ytimg.com https://yt3.ggpht.com",
  "media-src 'self' https://cdn.sanity.io",
  "font-src 'self' data:",
  "connect-src 'self' https://*.api.sanity.io https://api.paystack.co",
  "frame-src https://www.youtube-nocookie.com https://open.spotify.com https://checkout.paystack.com https://js.paystack.co",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

// Legitimate old WordPress URLs → their new home. Sourced from the actual
// nav menu on the recovered live site (see GCIC-WEBSITE-BUILD-PROMPT.md §12).
// Deliberately excludes the 299 spam URLs, the abandoned WooCommerce shop,
// and WordPress author/category archives — none of those are redirected
// anywhere; they simply 404 on this domain, which is the correct outcome
// for content that was never legitimate.
const legacyRedirects = [
  ["/home", "/"],
  ["/about-us", "/about"],
  ["/about-us-2", "/about"],
  ["/pastor-matthew-and-pastor-mrs-mary-morakinyo", "/about/leadership"],
  ["/membership-class", "/about/membership-class"],
  ["/gcic-children-and-youth-club", "/ministries/children-and-youth"],
  ["/mens-group", "/ministries/mens-group"],
  ["/women-of-impact", "/ministries/women-of-impact"],
  ["/marriage-and-family", "/ministries/marriage-and-family"],
  ["/outreach", "/ministries/outreach"],
  ["/welfare", "/ministries/welfare"],
  ["/heavenly-jerusalem-altar", "/ministries/heavenly-jerusalem-altar"],
  ["/gcic-training-department-schools", "/ministries/training-department"],
  ["/echurch", "/watch"],
  ["/giving", "/give"],
  ["/prayer-requests", "/prayer"],
  ["/get-involved", "/get-involved"],
  ["/blog", "/blog"],
  ["/category/daily-devotional", "/devotionals"],
] as const;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  async redirects() {
    return legacyRedirects
      .filter(([from, to]) => from !== to)
      .map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      // Sanity Studio is an authenticated internal tool that needs a much
      // looser CSP to run its own bundler/eval — keep the baseline hardening
      // headers but skip the strict CSP/frame policy here.
      {
        source: "/studio/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/((?!studio).*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
