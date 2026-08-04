import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { PageHeader } from "@/components/PageHeader";
import { membershipClass } from "@/content/pages";

export const metadata: Metadata = {
  title: "Membership Class",
  description: membershipClass.body[0],
};

export default function MembershipClassPage() {
  return (
    <>
      <PageHeader title={membershipClass.heading} crumbLabel="Membership Class" crumbHref="/about/membership-class" />
      <PageBanner image="/images/pastor-teaching.jpg" alt="A GCIC pastor teaching the membership class" />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
            {membershipClass.subheading}
          </p>
          <div className="mt-6 space-y-4 font-sans text-ink-600">
            {membershipClass.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-12 rounded-[var(--radius-media)] border border-sand-200 bg-sand-100 p-8">
            <h2 className="font-display text-xl font-semibold text-ink-900">Join the Next Class</h2>
            <p className="mt-2 font-sans text-sm text-ink-600">
              Let us know you&rsquo;re interested and a member of our team will follow up with the
              next class date.
            </p>
            <p className="mt-4 font-sans text-sm text-ink-600">
              This form will be wired up in a later phase — for now,{" "}
              <a href="/contact" className="font-semibold text-crimson-600 hover:text-crimson-700">
                contact us
              </a>{" "}
              directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
