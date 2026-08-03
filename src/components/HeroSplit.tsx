import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function HeroSplit({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  imageSide = "right",
  cta,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  image?: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
  cta?: { label: string; href: string; variant?: "primary" | "secondary" }[];
  children?: ReactNode;
}) {
  return (
    <section className="bg-ivory px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          imageSide === "left" ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          {eyebrow && (
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.25em] text-crimson-600">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
            {title}
          </h1>
          {subtitle && <div className="mt-5 font-sans text-lg text-ink-600">{subtitle}</div>}
          {children}
          {cta && cta.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {cta.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className={
                    c.variant === "secondary"
                      ? "rounded-[var(--radius-control)] border border-ink-900 px-6 py-3 font-sans text-sm font-semibold text-ink-900 hover:bg-sand-100"
                      : "rounded-[var(--radius-control)] bg-crimson-600 px-6 py-3 font-sans text-sm font-semibold text-ivory hover:bg-crimson-700"
                  }
                >
                  {c.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        {image && (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-media)] border border-sand-200">
            <Image src={image} alt={imageAlt ?? ""} fill className="object-cover" priority />
          </div>
        )}
      </div>
    </section>
  );
}
