import type { Metadata } from "next";
import { MinistryGrid } from "@/components/MinistryGrid";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ministries } from "@/content/ministries";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Every ministry at GCIC exists to help you grow in faith, strengthen your family, and walk out discipleship in community.",
};

export default function MinistriesIndexPage() {
  return (
    <>
      <PageHeader
        title="Ministries"
        crumbLabel="Ministries"
        crumbHref="/ministries"
        subtitle="Every ministry at GCIC exists to help you grow in faith, strengthen your family, and walk out discipleship in community."
      />
      <section className="pb-16 pt-16">
        <Reveal>
          <MinistryGrid ministries={ministries} />
        </Reveal>
      </section>
    </>
  );
}
