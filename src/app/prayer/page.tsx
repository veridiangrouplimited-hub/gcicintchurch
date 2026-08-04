import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { PageHeader } from "@/components/PageHeader";
import { PrayerForm } from "@/components/PrayerForm";
import { prayerRequests } from "@/content/pages";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Prayer Requests",
  description: prayerRequests.body,
};

export default function PrayerPage() {
  return (
    <>
      <PageHeader title={prayerRequests.heading} crumbLabel="Prayer Requests" crumbHref="/prayer" />
      <PageBanner image="/images/pastor-praying-blue.jpg" alt="A GCIC pastor in prayer" />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="font-sans text-ink-600">{prayerRequests.body}</p>
          <p className="mt-4 font-sans text-sm text-ink-600">
            Prayer requests are kept private and shared only with our prayer team.
          </p>
          <div className="mt-8">
            <PrayerForm />
          </div>
          <p className="mt-8 text-center font-sans text-sm text-ink-600">
            Telephone Prayer Team: daily, 7am–4pm GMT · {siteConfig.phone}
          </p>
        </div>
      </section>
    </>
  );
}
