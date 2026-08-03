"use client";

import { useMemo, useState } from "react";
import { SermonCard } from "@/components/SermonCard";
import type { Sermon } from "@/sanity/queries";

export function SermonsBrowser({ sermons }: { sermons: Sermon[] }) {
  const [search, setSearch] = useState("");
  const [series, setSeries] = useState("all");

  const allSeries = useMemo(
    () => Array.from(new Set(sermons.map((s) => s.series).filter((s): s is string => Boolean(s)))),
    [sermons]
  );

  const filtered = sermons.filter((s) => {
    const matchesSeries = series === "all" || s.series === series;
    const haystack = `${s.title} ${s.speakerRefName ?? ""} ${s.speakerName ?? ""} ${(s.scriptureRefs ?? []).join(" ")}`.toLowerCase();
    const matchesSearch = search.trim() === "" || haystack.includes(search.trim().toLowerCase());
    return matchesSeries && matchesSearch;
  });

  return (
    <div>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pb-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search sermons by title, speaker, or scripture..."
          className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm sm:max-w-sm"
        />
        {allSeries.length > 0 && (
          <select
            value={series}
            onChange={(e) => setSeries(e.target.value)}
            className="rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm"
          >
            <option value="all">All Series</option>
            {allSeries.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="font-sans text-ink-600">
            {sermons.length === 0
              ? "No sermons have been published yet — check back soon."
              : "No sermons match your search."}
          </p>
          {sermons.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSeries("all");
              }}
              className="mt-4 font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700"
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 pb-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {filtered.map((s) => (
            <SermonCard key={s._id} sermon={s} />
          ))}
        </div>
      )}
    </div>
  );
}
