import Link from "next/link";
import type { Sermon } from "@/sanity/queries";
import { getYouTubeThumbnail } from "@/lib/youtube";

export function SermonCard({ sermon }: { sermon: Sermon }) {
  const thumbnail = getYouTubeThumbnail(sermon.videoUrl);
  const speaker = sermon.speakerRefName ?? sermon.speakerName;

  return (
    <Link
      href={`/sermons/${sermon.slug}`}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-media)] border border-sand-200 bg-ivory transition-colors hover:border-crimson-600"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-sand-100">
        {thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element -- external YouTube thumbnail, not an optimizable local/remote-configured asset
          <img src={thumbnail} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-ink-600">
            <PlayIcon />
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-ink-900/0 transition-colors group-hover:bg-ink-900/20">
          <span className="scale-90 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
            <PlayIcon light />
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

function PlayIcon({ light = false }: { light?: boolean }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill={light ? "white" : "currentColor"} opacity={light ? 0.9 : 0.15} />
      <path d="M16 13l12 7-12 7V13z" fill={light ? "#B23A38" : "currentColor"} />
    </svg>
  );
}
