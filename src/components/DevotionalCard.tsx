import Link from "next/link";
import type { Devotional } from "@/sanity/queries";

export function DevotionalCard({ devotional }: { devotional: Devotional }) {
  return (
    <Link
      href={`/devotionals/${devotional.slug}`}
      className="group block rounded-[var(--radius-media)] border border-sand-200 bg-ivory p-6 transition-colors hover:border-crimson-600"
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-wide text-crimson-600">
        {new Date(devotional.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold text-ink-900 group-hover:text-crimson-700">
        {devotional.title}
      </h3>
      {devotional.scriptureRef && (
        <p className="mt-2 font-sans text-sm text-ink-600">{devotional.scriptureRef}</p>
      )}
    </Link>
  );
}
