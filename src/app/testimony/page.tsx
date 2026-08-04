import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { PageHeader } from "@/components/PageHeader";
import { TestimonyForm } from "@/components/TestimonyForm";
import { testimonyContent } from "@/content/pages";
import { getApprovedTestimonies } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Share a Testimony",
  description: testimonyContent.heading,
};

export const revalidate = 60;

export default async function TestimonyPage() {
  const testimonies = await getApprovedTestimonies();

  return (
    <>
      <PageHeader title={testimonyContent.heading} crumbLabel="Share a Testimony" crumbHref="/testimony" />
      <PageBanner image="/images/testimonies.jpg" alt="GCIC members sharing testimonies" />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="space-y-4 font-sans text-ink-600">
            {testimonyContent.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8">
            <TestimonyForm />
          </div>
        </div>
      </section>

      {testimonies.length > 0 && (
        <section className="bg-sand-100 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-2xl font-semibold text-ink-900">Testimonies</h2>
            <div className="mt-8 space-y-6">
              {testimonies.map((t) => (
                <blockquote key={t._id} className="rounded-[var(--radius-media)] border border-sand-200 bg-ivory p-6">
                  <p className="font-display italic text-ink-900">&ldquo;{t.testimonyText}&rdquo;</p>
                  <cite className="mt-3 block font-sans text-sm not-italic text-ink-600">— {t.name}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
