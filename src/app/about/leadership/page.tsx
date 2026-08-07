import type { Metadata } from "next";
import { CTABand } from "@/components/CTABand";
import { LeaderProfile } from "@/components/LeaderProfile";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
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
        eyebrow="About"
      />
      <Reveal>
        <LeaderProfile
          name={leadership.name}
          photo="/images/leadership-hero.jpg"
          scriptureRef={leadership.scriptureRef}
          scriptureText={leadership.scriptureText}
          heading={leadership.callingHeading}
          paragraphs={[leadership.intro, ...leadership.calling]}
          factStrip={[
            { value: "2016", label: "Senior Pastors Since" },
            { value: "Multicultural", label: "Congregation" },
          ]}
        />
      </Reveal>
      <CTABand heading="Connect with our pastoral team" cta={[{ label: "Contact Us", href: "/contact" }]} />
    </>
  );
}
