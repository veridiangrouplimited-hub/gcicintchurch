import type { Metadata } from "next";
import { MinistryGrid } from "@/components/MinistryGrid";
import { PageHeader } from "@/components/PageHeader";
import { ministries } from "@/content/ministries";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Every ministry at GCIC exists to help you grow in faith, strengthen your family, and walk out discipleship in community.",
};

export default function MinistriesIndexPage() {
  return (
    <>
      <PageHeader title="Ministries" crumbLabel="Ministries" crumbHref="/ministries" />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-center font-sans text-lg text-ink-600">
          Every ministry at GCIC exists to help you grow in faith, strengthen your family, and
          walk out discipleship in community.
        </p>
      </section>
      <section className="pb-16">
        <MinistryGrid ministries={ministries} />
      </section>
    </>
  );
}
