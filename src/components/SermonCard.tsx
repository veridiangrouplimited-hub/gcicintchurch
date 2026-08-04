import { Play } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import type { Sermon } from "@/sanity/queries";
import { getYouTubeThumbnail } from "@/lib/youtube";

export function SermonCard({ sermon, variant = "default" }: { sermon: Sermon; variant?: "default" | "compact" }) {
  const thumbnail = getYouTubeThumbnail(sermon.videoUrl);
  const speaker = sermon.speakerRefName ?? sermon.speakerName;

  if (variant === "compact") {
    return (
      <Link
        href={`/sermons/${sermon.slug}`}
        className="group flex items-center gap-4 rounded-[var(--radius-control)] p-2 transition-colors hover:bg-ivory"
      >
        <div className="relative aspect-square w-16 shrink-0 overflow-hidden rounded-[var(--radius-control)] bg-sand-200">
          {thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element -- external YouTube thumbnail, not an optimizable local/remote-configured asset
            <img src={thumbnail} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-ink-600">
              <Play size={18} weight="fill" />
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-sm font-semibold text-ink-900 group-hover:text-crimson-600">
            {sermon.title}
          </h3>
          <p className="mt-1 truncate font-sans text-xs text-ink-600">
            {speaker && <span>{speaker} · </span>}
            {new Date(sermon.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/sermons/${sermon.slug}`}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-media)] border border-sand-200 bg-ivory shadow-warm transition-all duration-200 hover:-translate-y-0.5 hover:border-crimson-600/40 hover:shadow-warm-lg"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-sand-100">
        {thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element -- external YouTube thumbnail, not an optimizable local/remote-configured asset
          <img src={thumbnail} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-ink-600">
            <Play size={40} weight="fill" />
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-ink-900/0 transition-colors group-hover:bg-ink-900/20">
          <span className="flex h-14 w-14 scale-90 items-center justify-center rounded-full bg-ivory/90 text-crimson-700 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
            <Play size={22} weight="fill" />
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        {sermon.series && (
          <span className="mb-2 inline-block w-fit rounded-full bg-sand-100 px-3 py-1 font-sans text-xs font-semibold text-ink-900">
            {sermon.series}
          </span>
        )}
        <h3 className="font-display text-base font-semibold text-ink-900 group-hover:text-crimson-600">
          {sermon.title}
        </h3>
        <p className="mt-2 font-sans text-sm text-ink-600">
          {speaker && <span>{speaker} · </span>}
          {new Date(sermon.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
    </Link>
  );
}
