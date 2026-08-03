import type { Metadata } from "next";
import { CTABand } from "@/components/CTABand";
import { LeaderProfile } from "@/components/LeaderProfile";
import { PageHeader } from "@/components/PageHeader";
import { leadership } from "@/content/leadership";

export const metadata: Metadata = {
  title: "Pastor Matthew and Pastor (Mrs.) Mary Morakinyo",
  description: leadership.intro,
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        title="Pastor Matthew and Pastor (Mrs.) Mary Morakinyo"
        crumbLabel="Our Leadership"
        crumbHref="/about/leadership"
      />
      <LeaderProfile
        name={leadership.name}
        photo="/images/leadership-hero.jpg"
        scriptureRef={leadership.scriptureRef}
        scriptureText={leadership.scriptureText}
        heading={leadership.callingHeading}
        paragraphs={[leadership.intro, ...leadership.calling]}
      />
      <CTABand heading="Connect with our pastoral team" cta={[{ label: "Contact Us", href: "/contact" }]} />
    </>
  );
}
