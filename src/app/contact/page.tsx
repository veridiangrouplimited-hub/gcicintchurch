import type { Metadata } from "next";
import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
  SpotifyLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { ServiceTimesStrip } from "@/components/ServiceTimesStrip";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.churchName}, ${siteConfig.address.line1}, ${siteConfig.address.line2}.`,
};

const socials = [
  { label: "Facebook", href: siteConfig.socials.facebook, icon: FacebookLogo },
  { label: "Instagram", href: siteConfig.socials.instagram, icon: InstagramLogo },
  { label: "Twitter", href: siteConfig.socials.twitter, icon: XLogo },
  { label: "YouTube", href: siteConfig.socials.youtube, icon: YoutubeLogo },
  { label: "Spotify", href: siteConfig.socials.spotify, icon: SpotifyLogo },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        crumbLabel="Contact"
        crumbHref="/contact"
        eyebrow="Connect"
        image="/images/pastor-mary-preaching.jpg"
        imageAlt="A GCIC pastor ministering to the congregation"
      />

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
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-crimson-600" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${siteConfig.address.line1}, ${siteConfig.address.line2}`
                  )}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-semibold text-crimson-600 hover:text-crimson-700"
                >
                  {siteConfig.address.line1}, {siteConfig.address.line2}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <EnvelopeSimple className="mt-0.5 h-5 w-5 shrink-0 text-crimson-600" />
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-crimson-600 hover:text-crimson-700">
                  {siteConfig.email}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-crimson-600" />
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
