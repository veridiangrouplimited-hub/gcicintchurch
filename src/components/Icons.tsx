/**
 * Shared icon set — social brand marks + a small line-icon kit used for
 * utility/content polish (contact info, service times, vision cards, etc).
 * All icons take `className` and inherit color via `currentColor` so they
 * pick up hover states from their parent (see Footer's SocialLink).
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 8.5h2V5.2c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.78-4.92 5.05v2.65H6.2v3.7h2.93V21h3.8v-4.55h2.9l.46-3.7h-3.36v-2.3c0-1.07.29-1.8 1.83-1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 5.5 11 12l-5.3 6.5h2l4.3-5.25 3.7 5.25H20l-5.3-7.53L19.7 5.5h-2l-4 4.9-3.4-4.9H6Zm2.1 1.3h1.7l6 8.4h-1.7l-6-8.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="6.5" width="17" height="11" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.3 9.3v5.4l4.7-2.7-4.7-2.7Z" fill="currentColor" />
    </svg>
  );
}

export function SpotifyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.2c2.7-.7 5.4-.5 7.8.9M8.4 12.9c2.2-.5 4.4-.4 6.3.75M8.8 15.4c1.8-.35 3.5-.3 5 .6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.6 4h2.4l1.2 3.6-1.7 1.5a10.4 10.4 0 0 0 4.4 4.4l1.5-1.7 3.6 1.2v2.4c0 1-.85 1.75-1.83 1.63A15.5 15.5 0 0 1 4.97 5.83 1.65 1.65 0 0 1 6.6 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.75" y="5.5" width="16.5" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4.5 6.5 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s6.5-6.13 6.5-11A6.5 6.5 0 1 0 5.5 10c0 4.87 6.5 11 6.5 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 20s-7.2-4.4-9.4-9A5 5 0 0 1 12 6.3 5 5 0 0 1 21.4 11c-2.2 4.6-9.4 9-9.4 9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BookOpenIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 6.2C10.4 5 8 4.5 4.5 4.8v13.4c3.5-.3 5.9.2 7.5 1.4 1.6-1.2 4-1.7 7.5-1.4V4.8c-3.5-.3-5.9.2-7.5 1.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 6.2v13.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9.5h16M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="9" cy="8.5" r="2.75" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.75 18.5c.6-3 2.6-4.5 5.25-4.5s4.65 1.5 5.25 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15.5 6.3c1.5.3 2.6 1.6 2.6 3.2s-1.1 2.9-2.6 3.2M17.5 14.4c2.15.4 3.6 1.8 4.1 4.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2.5c1 2.3-.3 3.7-1.4 5-1.3 1.5-2.6 3.1-2.6 5.4a4 4 0 0 0 8 0c0-1-.3-1.8-.7-2.6.9.7 1.7 1.9 1.7 3.6a5 5 0 0 1-10 0c0-4.9 3.6-7.3 5-11.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function RadioIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="9.5" width="17" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8" cy="14.5" r="1.9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 13.5h4M13 15.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="m6.5 9.5 6-5 4 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function VideoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="6.5" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m15.5 10.5 5-2.3v7.6l-5-2.3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.75 12h16.5M12 3.75c2.2 2.2 3.3 5.1 3.3 8.25S14.2 18.05 12 20.25c-2.2-2.2-3.3-5.1-3.3-8.25S9.8 5.95 12 3.75Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
