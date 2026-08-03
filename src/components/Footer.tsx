import Image from "next/image";
import Link from "next/link";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SpotifyIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/Icons";
import { footerNav, serviceTimes, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-200 bg-sand-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Centered brand block */}
        <div className="flex flex-col items-center text-center">
          <Image src="/images/gcic-logo.png" alt={siteConfig.churchName} width={72} height={72} className="h-16 w-16" />
          <p className="mt-4 font-display text-lg font-semibold text-ink-900">{siteConfig.shortName}</p>
          <p className="mt-2 max-w-sm font-sans text-sm italic text-ink-600">
            &ldquo;You will seek me and find me when you seek me with all your heart.&rdquo;
          </p>
          <div className="mt-5 flex gap-3">
            <SocialLink href={siteConfig.socials.facebook} label="Facebook" icon={FacebookIcon} />
            <SocialLink href={siteConfig.socials.instagram} label="Instagram" icon={InstagramIcon} />
            <SocialLink href={siteConfig.socials.twitter} label="Twitter" icon={TwitterIcon} />
            <SocialLink href={siteConfig.socials.youtube} label="YouTube" icon={YoutubeIcon} />
            <SocialLink href={siteConfig.socials.spotify} label="Spotify" icon={SpotifyIcon} />
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-sand-200 pt-12 sm:grid-cols-2 md:grid-cols-4">
          <FooterColumn title="GCIC Ministries" links={footerNav.ministries} />
          <FooterColumn title="Programmes" links={footerNav.programmes} />
          <FooterColumn title="Explore" links={footerNav.explore} />

          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-ink-900">Contact Info</h3>
            <ul className="mt-4 space-y-3 font-sans text-sm text-ink-600">
              <li className="flex items-start gap-2">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-crimson-600" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-crimson-600" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-crimson-600">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-crimson-600" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2}
                </span>
              </li>
            </ul>
            <h3 className="mt-6 font-sans text-sm font-semibold uppercase tracking-wide text-ink-900">Service Times</h3>
            <ul className="mt-3 space-y-2 font-sans text-sm text-ink-600">
              {serviceTimes.map((s) => (
                <li key={s.label} className="flex items-start gap-2">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-crimson-600" />
                  <span>
                    <span className="text-ink-900">{s.label}:</span> {s.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-sand-200 pt-6 font-sans text-xs text-ink-600 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.churchName}. All Rights Reserved.
          </p>
          <Link href="/privacy" className="hover:text-crimson-600">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-ink-900">
        {title}
      </h3>
      <ul className="mt-4 space-y-2 font-sans text-sm text-ink-600">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-crimson-600">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: (props: { className?: string }) => React.ReactElement;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 text-ink-600 transition-colors hover:border-crimson-600 hover:text-crimson-600"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
