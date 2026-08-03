import { ClockIcon } from "@/components/Icons";
import { serviceTimes } from "@/lib/site-config";

export function ServiceTimesStrip() {
  return (
    <section className="border-y border-sand-200 bg-sand-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 text-center sm:grid-cols-3">
        {serviceTimes.map((s) => (
          <div key={s.label} className="flex flex-col items-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-crimson-50 text-crimson-600">
              <ClockIcon className="h-5 w-5" />
            </span>
            <p className="mt-3 font-display text-lg font-semibold text-ink-900">{s.label}</p>
            <p className="mt-1 font-sans text-sm text-ink-600">{s.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
