import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import type { Ministry } from "@/content/ministries";
import { RevealItem } from "@/components/motion/RevealItem";

export const ministryImages: Record<string, string> = {
  "children-and-youth": "/images/children-ministry.png",
  "women-of-impact": "/images/women-ministry.png",
  "mens-group": "/images/serving-team.jpg",
  "marriage-and-family": "/images/couple-portrait.jpg",
  outreach: "/images/worship-hands-raised.jpg",
  welfare: "/images/quiet-prayer.jpg",
  "heavenly-jerusalem-altar": "/images/pastor-kneeling-prayer.png",
  "training-department": "/images/pastor-teaching.jpg",
};

export function MinistryCard({
  ministry,
  index,
  className = "w-full",
}: {
  ministry: Ministry;
  index?: number;
  className?: string;
}) {
  const image = ministryImages[ministry.slug];

  return (
    <Link
      href={`/ministries/${ministry.slug}`}
      className={`group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[var(--radius-media)] border border-sand-200 bg-ink-900 shadow-warm transition-shadow duration-300 hover:shadow-warm-lg ${className}`}
    >
      {image && (
        <Image
          src={image}
          alt={ministry.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/50 to-ink-900/10 transition-colors duration-300 group-hover:from-ink-900/95" />

      {typeof index === "number" && (
        <span className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/10 font-display text-sm font-semibold text-ivory ring-1 ring-ivory/25 backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}

      <div className="relative p-6">
        <h3 className="font-display text-xl font-semibold text-ivory">{ministry.name}</h3>
        <p className="mt-0 max-h-0 overflow-hidden font-sans text-sm text-ivory/85 opacity-0 transition-all duration-300 ease-out group-hover:mt-2 group-hover:max-h-28 group-hover:opacity-100">
          {ministry.summary}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-ivory">
          Explore ministry
          <ArrowRight size={14} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function MinistryGrid({ ministries }: { ministries: Ministry[] }) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
      {ministries.map((m, i) => (
        <RevealItem key={m.slug} index={i}>
          <MinistryCard ministry={m} index={i} />
        </RevealItem>
      ))}
    </div>
  );
}
