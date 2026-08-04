"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type SerializedOccurrence = {
  slug: string;
  title: string;
  location: string | null;
  ministryName: string | null;
  startISO: string;
  endISO: string | null;
};

export function EventsBrowser({ occurrences }: { occurrences: SerializedOccurrence[] }) {
  const [view, setView] = useState<"list" | "month">("list");
  const [monthOffset, setMonthOffset] = useState(0);

  const monthDate = useMemo(() => {
    const d = new Date();
    d.setMonth(d.getMonth() + monthOffset, 1);
    return d;
  }, [monthOffset]);

  const byDay = useMemo(() => {
    const map = new Map<string, SerializedOccurrence[]>();
    for (const o of occurrences) {
      const key = new Date(o.startISO).toDateString();
      map.set(key, [...(map.get(key) ?? []), o]);
    }
    return map;
  }, [occurrences]);

  return (
    <div>
      <div className="mx-auto mb-8 flex max-w-5xl justify-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex gap-1 rounded-full bg-sand-100 p-1">
          <button
            type="button"
            onClick={() => setView("list")}
            className={`rounded-full px-4 py-2 font-sans text-sm font-semibold transition-colors duration-200 ${
              view === "list" ? "bg-crimson-600 text-ivory shadow-warm" : "text-ink-900 hover:text-crimson-600"
            }`}
          >
            List
          </button>
          <button
            type="button"
            onClick={() => setView("month")}
            className={`rounded-full px-4 py-2 font-sans text-sm font-semibold transition-colors duration-200 ${
              view === "month" ? "bg-crimson-600 text-ivory shadow-warm" : "text-ink-900 hover:text-crimson-600"
            }`}
          >
            Month Calendar
          </button>
        </div>
      </div>

      {view === "list" ? (
        <div className="mx-auto max-w-3xl space-y-3 px-4 sm:px-6 lg:px-8">
          {occurrences.length === 0 ? (
            <p className="text-center font-sans text-ink-600">No upcoming events in this window.</p>
          ) : (
            occurrences.map((o, i) => {
              const start = new Date(o.startISO);
              const end = o.endISO ? new Date(o.endISO) : null;
              return (
                <Link
                  key={`${o.slug}-${o.startISO}-${i}`}
                  href={`/events/${o.slug}`}
                  className="group flex gap-4 rounded-[var(--radius-media)] border border-sand-200 bg-ivory p-5 shadow-warm transition-all duration-200 hover:-translate-y-0.5 hover:border-crimson-600/40 hover:shadow-warm-lg"
                >
                  <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-[var(--radius-control)] bg-sand-100 py-2 text-center ring-1 ring-crimson-600/10 transition-colors group-hover:bg-crimson-600 group-hover:ring-crimson-600">
                    <span className="font-sans text-xs font-semibold uppercase text-crimson-600 group-hover:text-ivory">
                      {start.toLocaleDateString("en-US", { month: "short" })}
                    </span>
                    <span className="font-display text-2xl font-semibold text-ink-900 group-hover:text-ivory">{start.getDate()}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-semibold text-ink-900 group-hover:text-crimson-600">
                      {o.title}
                    </h3>
                    <p className="mt-1 font-sans text-sm text-ink-600">
                      {start.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
                      {end && ` to ${end.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`}
                      {o.location && <span> · {o.location}</span>}
                    </p>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      ) : (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMonthOffset((m) => m - 1)}
              className="font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700"
            >
              &larr; Prev
            </button>
            <h2 className="font-display text-lg font-semibold text-ink-900">
              {monthDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </h2>
            <button
              type="button"
              onClick={() => setMonthOffset((m) => m + 1)}
              className="font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700"
            >
              Next &rarr;
            </button>
          </div>
          <MonthGrid monthDate={monthDate} byDay={byDay} />
        </div>
      )}
    </div>
  );
}

function MonthGrid({ monthDate, byDay }: { monthDate: Date; byDay: Map<string, SerializedOccurrence[]> }) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startWeekday = firstDay.getDay();

  const cells: (Date | null)[] = [
    ...Array.from({ length: startWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  return (
    <div className="grid grid-cols-7 gap-1 text-center">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
        <div key={d} className="pb-2 font-sans text-xs font-semibold uppercase text-ink-600">
          {d}
        </div>
      ))}
      {cells.map((date, i) => {
        const dayEvents = date ? byDay.get(date.toDateString()) ?? [] : [];
        return (
          <div
            key={i}
            className={`min-h-20 rounded-[var(--radius-control)] border p-1 text-left ${
              date ? "border-sand-200 bg-ivory" : "border-transparent"
            }`}
          >
            {date && (
              <>
                <span className="font-sans text-xs text-ink-600">{date.getDate()}</span>
                <div className="mt-1 space-y-1">
                  {dayEvents.slice(0, 2).map((o, i) => (
                    <Link
                      key={i}
                      href={`/events/${o.slug}`}
                      className="block truncate rounded bg-crimson-50 px-1 py-0.5 font-sans text-[10px] font-medium text-crimson-700"
                      title={o.title}
                    >
                      {o.title}
                    </Link>
                  ))}
                  {dayEvents.length > 2 && (
                    <span className="block font-sans text-[10px] text-ink-600">+{dayEvents.length - 2} more</span>
                  )}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
