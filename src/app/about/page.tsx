import type { Metadata } from "next";
import { BookOpen, Flame, Globe, Heart, MapPin } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { CTABand } from "@/components/CTABand";
import { PageHeader } from "@/components/PageHeader";
import { Tabs } from "@/components/Tabs";
import { ourVision, whatWeBelieve, whoWeAre } from "@/content/about";
import { leadership } from "@/content/leadership";

export const metadata: Metadata = {
  title: "About Us",
  description: whoWeAre[0],
};

// Matches the fixed 5-item order of `ourVision` in src/content/about.ts.
const visionIcons = [Flame, MapPin, BookOpen, Heart, Globe];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        crumbLabel="About Us"
        eyebrow="About"
        subtitle="Deliverance. Rescue. Restoration. Mobile Fire."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink-900">Who Are We</h2>
            <div className="mt-4 space-y-4 font-sans text-ink-600">
              {whoWeAre.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-media)] border border-sand-200">
            <Image src="/images/leadership-secondary.jpg" alt="GCIC congregation" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section id="what-we-believe" className="bg-sand-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Tabs
            items={[
              {
                id: "vision",
                label: "Our Vision",
                content: (
                  <>
                    <p className="mb-8 text-center font-sans text-sm uppercase tracking-wide text-ink-600">
                      Founded on biblical principles, our vision is to and are committed to:
                    </p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      {ourVision.map((v, i) => {
                        const Icon = visionIcons[i];
                        return (
                          <div
                            key={v.title}
                            className="group rounded-[var(--radius-media)] border border-sand-200 bg-ivory p-7 shadow-warm transition-all duration-200 hover:-translate-y-1 hover:border-crimson-600/40 hover:shadow-warm-lg"
                          >
                            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-crimson-50 text-crimson-600 ring-1 ring-crimson-600/15 transition-colors group-hover:bg-crimson-600 group-hover:text-ivory">
                              <Icon size={24} weight="regular" />
                            </span>
                            <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{v.title}</h3>
                            <p className="mt-2 font-sans text-sm text-ink-600">{v.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ),
              },
              {
                id: "what-we-believe",
                label: "What We Believe",
                content: (
                  <div className="mx-auto max-w-3xl">
                    <Accordion
                      items={whatWeBelieve.map((text, i) => ({
                        question: `${i + 1}. ${text.split(".")[0]}.`,
                        answer: text,
                      }))}
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-sand-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-sand-200">
            <Image src="/images/leadership-hero.jpg" alt={leadership.name} fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink-900">{leadership.name}</h2>
            <p className="mt-1 font-sans text-sm text-ink-600">Senior Pastors, God&rsquo;s City International Church</p>
            <Link href="/about/leadership" className="mt-2 inline-block font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700">
              Meet Our Pastors &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        heading="Ready to take the next step?"
        cta={[
          { label: "Membership Class", href: "/about/membership-class" },
          { label: "Plan Your Visit", href: "/new-here" },
        ]}
      />
    </>
  );
}
