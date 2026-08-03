import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { VolunteerForm } from "@/components/VolunteerForm";
import { getInvolved } from "@/content/pages";

export const metadata: Metadata = {
  title: "Get Involved",
  description: getInvolved.subheading,
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader title={getInvolved.heading} crumbLabel="Get Involved" crumbHref="/get-involved" />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
            {getInvolved.subheading}
          </p>
          <div className="mt-4 space-y-4 font-sans text-ink-600">
            {getInvolved.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <VolunteerForm />
          </div>
        </div>
      </section>
    </>
  );
}
