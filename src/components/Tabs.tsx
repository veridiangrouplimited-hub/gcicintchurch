"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export type TabItem = { id: string; label: string; content: ReactNode };

export function Tabs({ items, className = "" }: { items: TabItem[]; className?: string }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Honor a deep link like /about#what-we-believe by opening the matching tab.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const index = items.findIndex((item) => item.id === hash);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from browser location on mount, not derivable during render
    if (index !== -1) setActive(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount only
  }, []);

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % items.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + items.length) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = items.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className={className}>
      <div role="tablist" aria-label="Sections" className="flex flex-wrap justify-center gap-2 border-b border-sand-200">
        {items.map((item, i) => {
          const selected = active === i;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`relative -mb-px px-5 py-3 font-sans text-sm font-semibold transition-colors ${
                selected ? "text-crimson-600" : "text-ink-600 hover:text-ink-900"
              }`}
            >
              {item.label}
              {selected && <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-crimson-600" />}
            </button>
          );
        })}
      </div>

      {items.map((item, i) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`panel-${item.id}`}
          aria-labelledby={`tab-${item.id}`}
          hidden={active !== i}
          className="pt-10"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
