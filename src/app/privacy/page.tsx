import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.churchName} collects, uses, and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" crumbLabel="Privacy Policy" crumbHref="/privacy" />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl space-y-10 font-sans text-ink-600">
          <div className="rounded-[var(--radius-media)] border border-gold-500/40 bg-crimson-50 p-4 text-sm text-ink-900 shadow-warm">
            <strong>Draft for review.</strong> This page was drafted as a standard-practice starting
            point and has not been reviewed by a lawyer or church leadership. Please review and
            confirm accuracy, especially the data retention section, before this page is treated as
            the church&rsquo;s official policy.
          </div>

          <p className="text-sm text-ink-600">Last updated: [date to be set on publish]</p>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink-900">Information We Collect</h2>
            <p className="mt-3">
              We collect information you choose to give us when you use a form on this site:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>
                <strong>Contact form:</strong> name, email, subject, and message.
              </li>
              <li>
                <strong>Prayer requests:</strong> name (optional), email, phone (optional), and
                your request. Prayer requests are kept private and are shared only with our prayer
                team; they are never published or stored as public content on this site.
              </li>
              <li>
                <strong>Testimonies:</strong> name, email (kept private), and your testimony text.
                If approved, your name and testimony may be published on this site.
              </li>
              <li>
                <strong>Volunteering / Plan Your Visit / Membership Class:</strong> name, email,
                phone, and the details you provide in the form.
              </li>
              <li>
                <strong>Giving:</strong> name, email, phone, and gift amount/category. Card
                payments are processed by Paystack; we never see or store your full card details.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink-900">How We Use This Information</h2>
            <p className="mt-3">
              We use the information you give us only to respond to you, connect you with the
              relevant ministry team, process your gift, and, where you&rsquo;ve opted in, such as
              a testimony, to share what God has done. We do not sell or rent your information to
              anyone.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink-900">Cookies</h2>
            <p className="mt-3">
              This site does not set advertising or tracking cookies of its own. Embedded content
              from YouTube and Spotify may set cookies when you interact with their players,
              governed by their respective privacy policies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink-900">Data Retention</h2>
            <p className="mt-3">
              [Draft, to confirm with the church] We retain form submissions and giving records for
              as long as reasonably needed to respond to you, maintain financial records, and
              comply with any applicable legal or accounting requirements.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink-900">Your Requests</h2>
            <p className="mt-3">
              To ask what information we hold about you, or to request it be corrected or deleted,
              email us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-crimson-600 hover:text-crimson-700">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink-900">Contact</h2>
            <p className="mt-3">
              {siteConfig.churchName}
              <br />
              {siteConfig.address.line1}, {siteConfig.address.line2}
              <br />
              {siteConfig.phone} ·{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-crimson-600 hover:text-crimson-700">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
