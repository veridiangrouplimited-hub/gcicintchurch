import type { Metadata } from "next";
import { ArrowRight, Clock } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ministryImages } from "@/components/MinistryGrid";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SchoolsGrid } from "@/components/SchoolsGrid";
import { getMinistry, ministries, schools } from "@/content/ministries";

export function generateStaticParams() {
  return ministries.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ministry = getMinistry(slug);
  if (!ministry) return {};
  return { title: ministry.name, description: ministry.summary };
}

export default async function MinistryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ministry = getMinistry(slug);
  if (!ministry) notFound();

  const index = ministries.findIndex((m) => m.slug === ministry.slug);
  const image = ministryImages[ministry.slug];
  const otherMinistries = ministries.filter((m) => m.slug !== ministry.slug);

  return (
    <>
      <PageHeader
        title={ministry.name}
        crumbLabel="Ministries"
        crumbHref="/ministries"
        eyebrow="Ministry"
        numeral={index + 1}
        subtitle={ministry.summary}
        image={image}
        imageAlt={ministry.name}
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_300px]">
          <Reveal className="max-w-3xl">
            {ministry.anchorScripture && (
              <blockquote className="mb-8 border-l-2 border-gold-500 pl-4 font-display text-xl italic text-ink-900">
                &ldquo;{ministry.anchorScripture.text}&rdquo;
                <cite className="mt-2 block font-sans text-sm not-italic text-ink-600">
                  {ministry.anchorScripture.reference}
                </cite>
              </blockquote>
            )}

            <div className="space-y-4 font-sans text-ink-600">
              {ministry.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[var(--radius-media)] border border-sand-200 bg-ivory p-6 shadow-warm">
                <h2 className="font-display text-base font-semibold text-ink-900">Get Involved</h2>
                {ministry.meetingInfo && (
                  <p className="mt-3 flex items-start gap-2 font-sans text-sm text-ink-600">
                    <Clock size={16} weight="regular" className="mt-0.5 shrink-0 text-crimson-600" />
                    {ministry.meetingInfo}
                  </p>
                )}
                <Link
                  href={ministry.ctaHref}
                  className="mt-5 flex items-center justify-center gap-1.5 rounded-[var(--radius-control)] bg-crimson-600 px-5 py-2.5 font-sans text-sm font-semibold text-ivory transition-colors hover:bg-crimson-700"
                >
                  {ministry.ctaLabel}
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>

              <div className="rounded-[var(--radius-media)] border border-sand-200 bg-ivory p-6 shadow-warm">
                <h2 className="font-display text-base font-semibold text-ink-900">Other Ministries</h2>
                <ul className="mt-2 divide-y divide-sand-200">
                  {otherMinistries.map((m) => (
                    <li key={m.slug}>
                      <Link
                        href={`/ministries/${m.slug}`}
                        className="group flex items-center justify-between gap-2 py-2.5 font-sans text-sm text-ink-900 transition-colors hover:text-crimson-600"
                      >
                        {m.name}
                        <ArrowRight
                          size={13}
                          weight="regular"
                          className="shrink-0 text-ink-600 opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-crimson-600"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {ministry.slug === "training-department" && (
        <Reveal>
          <section className="pb-16">
            <SchoolsGrid schools={schools} />
          </section>
        </Reveal>
      )}
    </>
  );
}
