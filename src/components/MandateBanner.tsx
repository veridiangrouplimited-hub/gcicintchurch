import { FlameIcon } from "@/components/Icons";

export function MandateBanner({ items }: { items: readonly string[] }) {
  return (
    <section className="relative overflow-hidden border-y border-sand-200 bg-sand-100 px-4 py-10 sm:px-6 lg:px-8">
      <FlameIcon
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 text-crimson-600 opacity-[0.05]"
      />
      <div className="relative mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-3">
            <span className="font-display text-xl font-semibold uppercase tracking-wide text-ink-900 sm:text-2xl">
              {item}
            </span>
            {i < items.length - 1 && <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />}
          </span>
        ))}
      </div>
    </section>
  );
}
