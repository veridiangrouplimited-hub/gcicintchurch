import { NextResponse } from "next/server";
import { buildIcsEvent } from "@/lib/ics";
import { portableTextToPlainText } from "@/lib/portable-text";
import { getEventBySlug } from "@/sanity/queries";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  const ics = buildIcsEvent({
    uid: `${event._id}@gcicintchurch.org`,
    title: event.title,
    description: portableTextToPlainText(event.description),
    location: event.location ?? undefined,
    start: new Date(event.startDateTime),
    end: event.endDateTime ? new Date(event.endDateTime) : undefined,
    recurrenceRule: event.recurrenceRule,
  });

  return new NextResponse(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${slug}.ics"`,
    },
  });
}
