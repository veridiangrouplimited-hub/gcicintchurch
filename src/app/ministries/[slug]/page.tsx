import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/CTABand";
import { PageHeader } from "@/components/PageHeader";
import { SchoolsGrid } from "@/components/SchoolsGrid";
import { getMinistry, ministries, schools } from "@/content/ministries";

const ministryImages: Record<string, string> = {
  "children-and-youth": "/images/children-ministry.png",
  "women-of-impact": "/images/women-ministry.png",
};

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

  const image = ministryImages[ministry.slug];

  return (
    <>
      <PageHeader title={ministry.name} crumbLabel="Ministries" crumbHref="/ministries" />

      {image && (
        <div className="relative mx-auto mt-8 aspect-[21/9] w-full max-w-5xl overflow-hidden rounded-[var(--radius-media)] border border-sand-200 px-4 sm:px-6 lg:px-0">
          <Image src={image} alt={ministry.name} fill className="object-cover" />
        </div>
      )}

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {ministry.anchorScripture && (
            <blockquote className="mb-8 border-l-2 border-gold-500 pl-4 font-display text-xl italic text-ink-900">
              &ldquo;{ministry.anchorScripture.text}&rdquo;
              <cite className="mt-2 block font-sans text-sm not-italic text-ink-600">
                — {ministry.anchorScripture.reference}
              </cite>
            </blockquote>
          )}

          {ministry.meetingInfo && (
            <p className="mb-6 inline-block rounded-full bg-sand-100 px-4 py-2 font-sans text-sm font-medium text-ink-900">
              {ministry.meetingInfo}
            </p>
          )}

          <div className="space-y-4 font-sans text-ink-600">
            {ministry.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {ministry.slug === "training-department" && (
        <section className="pb-16">
          <SchoolsGrid schools={schools} />
        </section>
      )}

      <CTABand heading={`Interested in ${ministry.name}?`} cta={[{ label: ministry.ctaLabel, href: ministry.ctaHref }]} />
    </>
  );
}
