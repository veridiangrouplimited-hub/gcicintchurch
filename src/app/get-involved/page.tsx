import type { Metadata } from "next";
import { Megaphone, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "@/components/PageHeader";
import { VolunteerForm } from "@/components/VolunteerForm";
import { getInvolved } from "@/content/pages";

export const metadata: Metadata = {
  title: "Get Involved",
  description: getInvolved.subheading,
};

const wayIcons = [Megaphone, UsersThree];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        title={getInvolved.heading}
        crumbLabel="Get Involved"
        crumbHref="/get-involved"
        eyebrow="Connect"
        image="/images/serving-team.jpg"
        imageAlt="GCIC volunteers serving together"
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-center font-sans text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
            {getInvolved.subheading}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {getInvolved.ways.map((way, i) => {
              const Icon = wayIcons[i];
              return (
                <div
                  key={way.heading}
                  className="rounded-[var(--radius-media)] border border-sand-200 bg-ivory p-7 shadow-warm"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-crimson-50 text-crimson-600 ring-1 ring-crimson-600/15">
                    <Icon size={22} weight="regular" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{way.heading}</h3>
                  <p className="mt-2 font-sans text-sm text-ink-600">{way.body}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12">
            <VolunteerForm />
          </div>
        </div>
      </section>
    </>
  );
}
