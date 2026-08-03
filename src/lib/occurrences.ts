import { RRule } from "rrule";
import type { ChurchEvent } from "@/sanity/queries";

export type Occurrence = { event: ChurchEvent; start: Date; end: Date | null };

/** Expands an event (recurring or one-off) into concrete occurrences between `from` and `to`. */
export function expandEvent(event: ChurchEvent, from: Date, to: Date): Occurrence[] {
  const start = new Date(event.startDateTime);
  const durationMs = event.endDateTime ? new Date(event.endDateTime).getTime() - start.getTime() : null;

  if (!event.isRecurring || !event.recurrenceRule) {
    if (start >= from && start <= to) {
      return [{ event, start, end: event.endDateTime ? new Date(event.endDateTime) : null }];
    }
    return [];
  }

  try {
    const rule = RRule.fromString(`DTSTART:${toRRuleDate(start)}\nRRULE:${event.recurrenceRule}`);
    const dates = rule.between(from, to, true);
    return dates.map((d) => ({
      event,
      start: d,
      end: durationMs !== null ? new Date(d.getTime() + durationMs) : null,
    }));
  } catch {
    return [];
  }
}

export function expandEvents(events: ChurchEvent[], from: Date, to: Date): Occurrence[] {
  return events
    .flatMap((e) => expandEvent(e, from, to))
    .sort((a, b) => a.start.getTime() - b.start.getTime());
}

function toRRuleDate(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}
