"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export function Carousel({ children, className = "" }: { children: ReactNode[]; className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    function updateEdges() {
      if (!el) return;
      setCanPrev(el.scrollLeft > 8);
      setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
    }
    updateEdges();

    let frame: number;
    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        updateEdges();
        let closest = 0;
        let min = Infinity;
        itemRefs.current.forEach((item, i) => {
          if (!item || !el) return;
          const d = Math.abs(item.offsetLeft - el.scrollLeft);
          if (d < min) {
            min = d;
            closest = i;
          }
        });
        setActive(closest);
      });
    }
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateEdges);
      cancelAnimationFrame(frame);
    };
  }, []);

  function scrollToIndex(i: number) {
    const item = itemRefs.current[i];
    const el = trackRef.current;
    if (!item || !el) return;
    el.scrollTo({ left: item.offsetLeft, behavior: "smooth" });
  }

  function step(dir: 1 | -1) {
    const next = Math.min(Math.max(active + dir, 0), children.length - 1);
    scrollToIndex(next);
  }

  return (
    <div className={className}>
      <div
        ref={trackRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-6 lg:px-8"
      >
        {children.map((child, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="snap-start shrink-0"
          >
            {child}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => step(-1)}
          disabled={!canPrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 text-ink-900 transition-colors hover:border-crimson-600 hover:text-crimson-600 disabled:pointer-events-none disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
            <path d="M15 5.5 8.5 12l6.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex gap-2">
          {children.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={active === i}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-200 ${
                active === i ? "w-6 bg-crimson-600" : "w-2 bg-sand-200 hover:bg-sand-200/80"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => step(1)}
          disabled={!canNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 text-ink-900 transition-colors hover:border-crimson-600 hover:text-crimson-600 disabled:pointer-events-none disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
            <path d="m9 5.5 6.5 6.5L9 18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
