import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ServiceTimesStrip } from "@/components/ServiceTimesStrip";
import { echurch } from "@/content/pages";
import { siteConfig } from "@/lib/site-config";
import { getLiveStatus } from "@/lib/youtube-live";

export const metadata: Metadata = {
  title: "Watch Live",
  description: echurch.body,
};

export const revalidate = 60;

export default async function WatchPage() {
  const status = await getLiveStatus();

  return (
    <>
      <PageHeader
        title={echurch.heading}
        crumbLabel="Watch Live"
        crumbHref="/watch"
        eyebrow="Media"
        image="/images/stage-broadcast.jpg"
        imageAlt="GCIC's stage set up for live broadcast"
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {status.isLive ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-media)] border border-sand-200">
              <iframe
                src={`https://www.youtube.com/embed/${status.videoId}?autoplay=1`}
                title={status.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-crimson-600 px-3 py-1 font-sans text-xs font-semibold text-ivory">
                <span className="h-2 w-2 animate-pulse rounded-full bg-ivory" /> Live Now
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 rounded-[var(--radius-media)] border border-sand-200 bg-sand-100 px-6 py-16 text-center">
              <p className="font-display text-xl font-semibold text-ink-900">We&rsquo;re not live right now</p>
              <p className="font-sans text-ink-600">Join us at our next service - see the times below.</p>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 rounded-[var(--radius-control)] bg-crimson-600 px-6 py-3 font-sans text-sm font-semibold text-ivory hover:bg-crimson-700"
              >
                Visit Our YouTube Channel
              </a>
            </div>
          )}

          <p className="mt-8 font-sans text-ink-600">{echurch.body}</p>
        </div>
      </section>

      <ServiceTimesStrip />

      <section className="px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="font-sans text-ink-600">Missed a service?</p>
        <Link href="/sermons" className="mt-1 inline-block font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700">
          Browse the Sermon Archive &rarr;
        </Link>
      </section>
    </>
  );
}
