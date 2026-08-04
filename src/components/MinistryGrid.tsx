import Link from "next/link";
import type { Ministry } from "@/content/ministries";
import { BookOpenIcon, FlameIcon, GlobeIcon, HeartIcon, MapPinIcon, UsersIcon } from "@/components/Icons";

const ministryIcons: Record<string, (props: { className?: string }) => React.ReactElement> = {
  "children-and-youth": BookOpenIcon,
  "mens-group": UsersIcon,
  "women-of-impact": FlameIcon,
  "marriage-and-family": HeartIcon,
  outreach: GlobeIcon,
  welfare: HeartIcon,
  "heavenly-jerusalem-altar": MapPinIcon,
  "training-department": BookOpenIcon,
};

export function MinistryGrid({ ministries }: { ministries: Ministry[] }) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
      {ministries.map((m) => {
        const Icon = ministryIcons[m.slug] ?? HeartIcon;
        return (
          <Link
            key={m.slug}
            href={`/ministries/${m.slug}`}
            className="group flex flex-col rounded-[var(--radius-media)] border border-sand-200 bg-ivory p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-crimson-600/40 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-crimson-50 text-crimson-600 ring-1 ring-crimson-600/15 transition-colors group-hover:bg-crimson-600 group-hover:text-ivory">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink-900 group-hover:text-crimson-600">
              {m.name}
            </h3>
            <p className="mt-2 flex-1 font-sans text-sm text-ink-600">{m.summary}</p>
            <span className="mt-4 font-sans text-sm font-semibold text-crimson-600">
              Learn more &rarr;
            </span>
          </Link>
        );
      })}
    </div>
  );
}
