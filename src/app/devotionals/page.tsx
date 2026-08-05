import type { Metadata } from "next";
import { DevotionalCard } from "@/components/DevotionalCard";
import { RevealItem } from "@/components/motion/RevealItem";
import { PageHeader } from "@/components/PageHeader";
import { getDevotionals } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Daily Devotional",
  description: "Daily scripture, reflection, and prayer points from God's City International Church.",
};

export const revalidate = 60;

export default async function DevotionalsPage() {
  const devotionals = await getDevotionals();

  return (
    <>
      <PageHeader title="Daily Devotional" crumbLabel="Daily Devotional" crumbHref="/devotionals" eyebrow="Media" />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        {devotionals.length === 0 ? (
          <p className="mx-auto max-w-xl text-center font-sans text-ink-600">
            No devotionals have been published yet. Check back soon.
          </p>
        ) : (
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {devotionals.map((d, i) => (
              <RevealItem key={d._id} index={i % 9}>
                <DevotionalCard devotional={d} />
              </RevealItem>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
