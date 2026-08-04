import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { SermonCard } from "@/components/SermonCard";
import { getYouTubeEmbedUrl, getYouTubeThumbnail } from "@/lib/youtube";
import { getSermonBySlug, getSermons, type Sermon } from "@/sanity/queries";

export const revalidate = 60;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateStaticParams() {
  const sermons = await getSermons();
  return sermons.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sermon = await getSermonBySlug(slug);
  if (!sermon) return {};
  return { title: sermon.title, description: sermon.description ?? undefined };
}

export default async function SermonDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sermon = await getSermonBySlug(slug);
  if (!sermon) notFound();

  const embedUrl = getYouTubeEmbedUrl(sermon.videoUrl);
  const speaker = sermon.speakerRefName ?? sermon.speakerName;

  const allSermons = await getSermons();
  const related: Sermon[] = allSermons
    .filter((s) => s._id !== sermon._id && sermon.series && s.series === sermon.series)
    .slice(0, 3);

  const thumbnailUrl = getYouTubeThumbnail(sermon.videoUrl);

  return (
    <>
      {embedUrl && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: sermon.title,
            description: sermon.description || sermon.title,
            thumbnailUrl: thumbnailUrl ? [thumbnailUrl] : undefined,
            uploadDate: new Date(sermon.date).toISOString(),
            embedUrl,
            url: `${siteUrl}/sermons/${sermon.slug}`,
          }}
        />
      )}
      <PageHeader title={sermon.title} crumbLabel="Sermons" crumbHref="/sermons" eyebrow="Media" />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {embedUrl ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-media)] border border-sand-200">
              <iframe
                src={embedUrl}
                title={sermon.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : sermon.audioUrl ? (
            <audio controls src={sermon.audioUrl} className="w-full" />
          ) : (
            <div className="flex aspect-video items-center justify-center rounded-[var(--radius-media)] border border-sand-200 bg-sand-100 font-sans text-sm text-ink-600">
              No video or audio has been added for this sermon yet.
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-sans text-sm text-ink-600">
            {speaker && <span>{speaker}</span>}
            <span aria-hidden="true">·</span>
            <span>
              {new Date(sermon.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            {sermon.series && (
              <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-semibold text-ink-900">{sermon.series}</span>
            )}
          </div>

          {sermon.scriptureRefs && sermon.scriptureRefs.length > 0 && (
            <p className="mt-3 font-sans text-sm font-semibold text-crimson-600">
              {sermon.scriptureRefs.join(", ")}
            </p>
          )}

          {sermon.description && <p className="mt-6 font-sans text-ink-600">{sermon.description}</p>}
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-sand-100 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-xl font-semibold text-ink-900">More from {sermon.series}</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <SermonCard key={s._id} sermon={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="px-4 py-8 text-center sm:px-6 lg:px-8">
        <Link href="/sermons" className="font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700">
          &larr; Back to all sermons
        </Link>
      </div>
    </>
  );
}
