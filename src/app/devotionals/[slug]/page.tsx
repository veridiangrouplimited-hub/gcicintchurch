import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/lib/site-config";
import { getDevotionalBySlug, getDevotionals } from "@/sanity/queries";

export const revalidate = 60;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateStaticParams() {
  const devotionals = await getDevotionals();
  return devotionals.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const devotional = await getDevotionalBySlug(slug);
  if (!devotional) return {};
  return { title: devotional.title, description: devotional.scriptureText ?? undefined };
}

export default async function DevotionalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const devotional = await getDevotionalBySlug(slug);
  if (!devotional) notFound();

  const all = await getDevotionals();
  const index = all.findIndex((d) => d._id === devotional._id);
  const prev = index >= 0 ? all[index + 1] : undefined;
  const next = index > 0 ? all[index - 1] : undefined;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: devotional.title,
          description: devotional.scriptureText || devotional.title,
          datePublished: new Date(devotional.date).toISOString(),
          publisher: { "@type": "Organization", name: siteConfig.churchName },
          url: `${siteUrl}/devotionals/${devotional.slug}`,
        }}
      />
      <PageHeader title={devotional.title} crumbLabel="Daily Devotional" crumbHref="/devotionals" />

      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="font-sans text-sm text-ink-600">
            {new Date(devotional.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          {devotional.scriptureRef && (
            <section className="mt-8">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-crimson-600">Text</h2>
              <blockquote className="mt-2 border-l-2 border-gold-500 pl-4 font-display text-lg italic text-ink-900">
                {devotional.scriptureText && <>&ldquo;{devotional.scriptureText}&rdquo;</>}
                <cite className="mt-2 block font-sans text-sm not-italic text-ink-600">— {devotional.scriptureRef}</cite>
              </blockquote>
            </section>
          )}

          {devotional.wordsOfWisdom && devotional.wordsOfWisdom.length > 0 && (
            <section className="mt-8">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-crimson-600">
                Words of Wisdom
              </h2>
              <div className="prose-devotional mt-2 space-y-4 font-sans text-ink-600">
                <PortableText value={devotional.wordsOfWisdom} />
              </div>
            </section>
          )}

          {devotional.assignment && devotional.assignment.length > 0 && (
            <section className="mt-8">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-crimson-600">Assignment</h2>
              <div className="mt-2 space-y-4 font-sans text-ink-600">
                <PortableText value={devotional.assignment} />
              </div>
            </section>
          )}

          {devotional.prayerPoints && devotional.prayerPoints.length > 0 && (
            <section className="mt-8">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-crimson-600">
                Prayer Points
              </h2>
              <ol className="mt-2 list-decimal space-y-2 pl-5 font-sans text-ink-600">
                {devotional.prayerPoints.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ol>
            </section>
          )}

          {devotional.declaration && (
            <section className="mt-8 rounded-[var(--radius-media)] border border-gold-500/40 bg-sand-100 p-6">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-500">
                The Senior Pastor&rsquo;s Prophetic Declaration
              </h2>
              <p className="mt-2 font-display italic text-ink-900">{devotional.declaration}</p>
            </section>
          )}

          {devotional.bibleInAYearRef && (
            <p className="mt-8 font-sans text-sm text-ink-600">
              <span className="font-semibold text-ink-900">Bible in a Year:</span> {devotional.bibleInAYearRef}
            </p>
          )}

          <div className="mt-12 flex items-center justify-between border-t border-sand-200 pt-6 font-sans text-sm">
            {prev ? (
              <Link href={`/devotionals/${prev.slug}`} className="font-semibold text-crimson-600 hover:text-crimson-700">
                &larr; {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/devotionals/${next.slug}`} className="font-semibold text-crimson-600 hover:text-crimson-700">
                {next.title} &rarr;
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </article>
    </>
  );
}
