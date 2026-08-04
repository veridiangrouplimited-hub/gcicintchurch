import Image from "next/image";
import Link from "next/link";

function Breadcrumb({ crumbLabel, crumbHref }: { crumbLabel?: string; crumbHref?: string }) {
  return (
    <nav className="font-sans text-sm text-ink-600" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-crimson-600">
        Homepage
      </Link>
      {crumbLabel && (
        <>
          <span className="mx-2">/</span>
          {crumbHref ? (
            <Link href={crumbHref} className="hover:text-crimson-600">
              {crumbLabel}
            </Link>
          ) : (
            <span className="text-ink-900">{crumbLabel}</span>
          )}
        </>
      )}
    </nav>
  );
}

export function PageHeader({
  title,
  crumbLabel,
  crumbHref,
  image,
  imageAlt,
  subtitle,
  eyebrow,
  numeral,
}: {
  title: string;
  crumbLabel?: string;
  crumbHref?: string;
  image?: string;
  imageAlt?: string;
  subtitle?: string;
  /** Small uppercase label above the title, e.g. the parent nav section ("About", "Media", "Connect"). */
  eyebrow?: string;
  /** Oversized faint watermark numeral, e.g. a 1-based position within a list (ministries). */
  numeral?: number;
}) {
  return (
    <div className="relative overflow-hidden bg-sand-100 px-4 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Breadcrumb crumbLabel={crumbLabel} crumbHref={crumbHref} />
      </div>

      <div
        className={`relative mx-auto mt-4 grid max-w-6xl items-end gap-10 ${image ? "lg:grid-cols-[1.1fr_360px]" : ""}`}
      >
        <div className="relative pb-12 sm:pb-16">
          {typeof numeral === "number" && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-1 -top-4 select-none font-display text-[7rem] font-semibold leading-none text-ink-900/5 sm:-top-8 sm:text-[9rem]"
            >
              {String(numeral).padStart(2, "0")}
            </span>
          )}
          {eyebrow && (
            <p className="relative font-sans text-sm font-semibold uppercase tracking-[0.25em] text-crimson-600">
              {eyebrow}
            </p>
          )}
          <h1
            className={`relative font-display text-4xl font-semibold leading-[1.05] text-ink-900 sm:text-5xl ${eyebrow ? "mt-3" : ""}`}
          >
            {title}
          </h1>
          {subtitle && <p className="relative mt-5 max-w-md font-sans text-ink-600">{subtitle}</p>}
        </div>

        {image && (
          <div className="relative aspect-[4/5] w-full max-w-sm justify-self-start overflow-hidden rounded-t-[var(--radius-media)] border border-sand-200 shadow-warm-lg lg:justify-self-end">
            <Image src={image} alt={imageAlt ?? ""} fill priority className="object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}
