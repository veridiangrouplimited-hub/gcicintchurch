import type { Metadata } from "next";
import { EventsBrowser, type SerializedOccurrence } from "@/components/EventsBrowser";
import { PageHeader } from "@/components/PageHeader";
import { expandEvents } from "@/lib/occurrences";
import { getEvents } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events and recurring programmes at God's City International Church.",
};

export const revalidate = 60;

export default async function EventsPage() {
  const events = await getEvents();

  const from = new Date();
  from.setDate(from.getDate() - 30);
  const to = new Date();
  to.setDate(to.getDate() + 180);

  const occurrences: SerializedOccurrence[] = expandEvents(events, from, to)
    .filter((o) => o.start >= new Date())
    .map((o) => ({
      slug: o.event.slug,
      title: o.event.title,
      location: o.event.location,
      ministryName: o.event.ministryName,
      startISO: o.start.toISOString(),
      endISO: o.end ? o.end.toISOString() : null,
    }));

  return (
    <>
      <PageHeader title="Events" crumbLabel="Events" crumbHref="/events" />
      <div className="py-16">
        <EventsBrowser occurrences={occurrences} />
      </div>
    </>
  );
}
