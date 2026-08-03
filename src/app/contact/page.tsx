import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SpotifyIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/Icons";
import { PageHeader } from "@/components/PageHeader";
import { ServiceTimesStrip } from "@/components/ServiceTimesStrip";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.churchName} — ${siteConfig.address.line1}, ${siteConfig.address.line2}.`,
};

const socials = [
  { label: "Facebook", href: siteConfig.socials.facebook, icon: FacebookIcon },
  { label: "Instagram", href: siteConfig.socials.instagram, icon: InstagramIcon },
  { label: "Twitter", href: siteConfig.socials.twitter, icon: TwitterIcon },
  { label: "YouTube", href: siteConfig.socials.youtube, icon: YoutubeIcon },
  { label: "Spotify", href: siteConfig.socials.spotify, icon: SpotifyIcon },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" crumbLabel="Contact" crumbHref="/contact" />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink-900">Get in Touch via Mail</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink-900">Contact Info</h2>
            <div className="mt-6 space-y-4 font-sans text-ink-600">
              <p className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-crimson-600" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2}
                </span>
              </p>
              <p className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-crimson-600" />
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-crimson-600 hover:text-crimson-700">
                  {siteConfig.email}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-crimson-600" />
                <span>{siteConfig.phone}</span>
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 text-ink-600 transition-colors hover:border-crimson-600 hover:text-crimson-600"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceTimesStrip />
    </>
  );
}
