import type { Metadata } from "next";
import { CTABand } from "@/components/CTABand";
import { HeroSplit } from "@/components/HeroSplit";
import { nightVigil } from "@/content/pages";

export const metadata: Metadata = {
  title: "Night Vigil",
  description: nightVigil.body[0],
};

export default function NightVigilPage() {
  return (
    <>
      <HeroSplit
        eyebrow={nightVigil.when}
        title={nightVigil.heading}
        subtitle={
          <blockquote className="border-l-2 border-gold-500 pl-4 font-display text-lg italic text-ink-900">
            &ldquo;{nightVigil.scriptureText}&rdquo;
            <cite className="mt-2 block font-sans text-sm not-italic text-ink-600">
              {nightVigil.scriptureRef}
            </cite>
          </blockquote>
        }
        image="/images/pastor-purple-stage.jpg"
        imageAlt="Evening worship under stage lighting at GCIC's Friday night vigil"
      />

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 font-sans text-ink-600">
          {nightVigil.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <CTABand
        heading="Join us this Friday at 9pm"
        cta={[
          { label: "Watch Live", href: "/watch" },
          { label: "Plan Your Visit", href: "/new-here" },
        ]}
      />
    </>
  );
}
