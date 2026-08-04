import { Clock } from "@phosphor-icons/react/dist/ssr";
import { serviceTimes } from "@/lib/site-config";

export function ServiceTimesStrip() {
  return (
    <section className="border-y border-sand-200 bg-sand-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 divide-sand-200 sm:divide-x">
        {serviceTimes.map((s, i) => (
          <div key={s.label} className={`flex items-center gap-2.5 font-sans text-sm ${i > 0 ? "sm:pl-8" : ""}`}>
            <Clock className="h-4 w-4 shrink-0 text-crimson-600" weight="regular" />
            <span>
              <span className="font-semibold text-ink-900">{s.label}</span>
              <span className="text-ink-600"> · {s.time}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
