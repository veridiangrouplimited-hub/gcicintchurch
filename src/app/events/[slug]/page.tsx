import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { expandEvent } from "@/lib/occurrences";
import { portableTextToPlainText } from "@/lib/portable-text";
import { siteConfig } from "@/lib/site-config";
import { getEventBySlug, getEvents } from "@/sanity/queries";

export const revalidate = 60;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return {};
  return { title: event.title, description: portableTextToPlainText(event.description) || undefined };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) notFound();

  const now = new Date();
  const farFuture = new Date();
  farFuture.setFullYear(farFuture.getFullYear() + 1);
  const nextOccurrence = expandEvent(event, now, farFuture)[0];

  const description = portableTextToPlainText(event.description) || event.title;

  return (
    <>
      {nextOccurrence && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Event",
            name: event.title,
            startDate: nextOccurrence.start.toISOString(),
            endDate: nextOccurrence.end ? nextOccurrence.end.toISOString() : undefined,
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            description,
            location: {
              "@type": "Place",
              name: event.location ?? siteConfig.churchName,
              address: event.location ?? `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
            },
            organizer: { "@type": "Organization", name: siteConfig.churchName, url: siteUrl },
            url: `${siteUrl}/events/${event.slug}`,
          }}
        />
      )}
      <PageHeader title={event.title} crumbLabel="Events" crumbHref="/events" />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {nextOccurrence && (
            <p className="font-sans text-lg font-semibold text-crimson-600">
              {nextOccurrence.start.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              at {nextOccurrence.start.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
            </p>
          )}
          {event.isRecurring && (
            <p className="mt-1 font-sans text-sm text-ink-600">This is a recurring event.</p>
          )}
          {event.location && <p className="mt-2 font-sans text-ink-600">{event.location}</p>}

          {event.description && (
            <div className="mt-8 space-y-4 font-sans text-ink-600">
              <PortableText value={event.description} />
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`/api/events/${event.slug}/ics`}
              className="rounded-[var(--radius-control)] bg-crimson-600 px-6 py-3 font-sans text-sm font-semibold text-ivory hover:bg-crimson-700"
            >
              Add to Calendar
            </a>
            {event.ministrySlug && (
              <Link
                href={`/ministries/${event.ministrySlug}`}
                className="rounded-[var(--radius-control)] border border-ink-900 px-6 py-3 font-sans text-sm font-semibold text-ink-900 hover:bg-sand-100"
              >
                About {event.ministryName}
              </Link>
            )}
          </div>
        </div>
      </section>

      <div className="px-4 pb-16 text-center sm:px-6 lg:px-8">
        <Link href="/events" className="font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700">
          &larr; Back to all events
        </Link>
      </div>
    </>
  );
}
