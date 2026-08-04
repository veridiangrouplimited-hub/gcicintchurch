import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SermonsBrowser } from "@/components/SermonsBrowser";
import { getSermons } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Sermons",
  description: "Watch and listen to messages from God's City International Church.",
};

export const revalidate = 60;

export default async function SermonsPage() {
  const sermons = await getSermons();

  return (
    <>
      <PageHeader title="Sermons" crumbLabel="Sermons" crumbHref="/sermons" eyebrow="Media" />
      <div className="py-16">
        <SermonsBrowser sermons={sermons} />
      </div>
    </>
  );
}
