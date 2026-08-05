import Image from "next/image";
import type { ReactNode } from "react";
import { HeroReveal } from "@/components/motion/HeroReveal";
import { MotionCTA } from "@/components/motion/MotionCTA";

export function HeroFullBleed({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  cta,
  live = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  image: string;
  imageAlt: string;
  cta?: { label: string; href: string; variant?: "primary" | "secondary" }[];
  live?: boolean;
}) {
  return (
    <section className="relative flex min-h-[75dvh] items-end overflow-hidden sm:min-h-[85dvh]">
      <Image src={image} alt={imageAlt} fill priority className="object-cover" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/55 to-ink-900/10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pb-20">
        <div className="max-w-2xl">
          {eyebrow && (
            <HeroReveal index={0}>
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">
                {eyebrow}
              </p>
            </HeroReveal>
          )}
          <HeroReveal index={1}>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </HeroReveal>
          {subtitle && (
            <HeroReveal index={2}>
              <div className="mt-5 max-w-xl font-sans text-lg text-ivory/85">{subtitle}</div>
            </HeroReveal>
          )}

          {live && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-crimson-600 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-ivory">
              <span className="h-2 w-2 animate-pulse rounded-full bg-ivory" />
              Live Now
            </div>
          )}

          {cta && cta.length > 0 && (
            <HeroReveal index={3} className="mt-8 flex flex-wrap gap-3">
              {cta.map((c) => (
                <MotionCTA
                  key={c.href}
                  href={c.href}
                  className={
                    c.variant === "secondary"
                      ? "block rounded-[var(--radius-control)] border border-ivory/60 px-6 py-3 font-sans text-sm font-semibold text-ivory hover:bg-ivory/10"
                      : "block rounded-[var(--radius-control)] bg-crimson-600 px-6 py-3 font-sans text-sm font-semibold text-ivory hover:bg-crimson-700"
                  }
                >
                  {c.label}
                </MotionCTA>
              ))}
            </HeroReveal>
          )}
        </div>
      </div>
    </section>
  );
}
