import Link from "next/link";
import type { Ministry } from "@/content/ministries";

export function MinistryGrid({ ministries }: { ministries: Ministry[] }) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
      {ministries.map((m) => (
        <Link
          key={m.slug}
          href={`/ministries/${m.slug}`}
          className="group flex flex-col rounded-[var(--radius-media)] border border-sand-200 bg-ivory p-6 transition-colors hover:border-crimson-600"
        >
          <h3 className="font-display text-lg font-semibold text-ink-900 group-hover:text-crimson-600">
            {m.name}
          </h3>
          <p className="mt-2 flex-1 font-sans text-sm text-ink-600">{m.summary}</p>
          <span className="mt-4 font-sans text-sm font-semibold text-crimson-600">
            Learn more &rarr;
          </span>
        </Link>
      ))}
    </div>
  );
}
