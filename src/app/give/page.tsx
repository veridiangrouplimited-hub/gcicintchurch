import type { Metadata } from "next";
import { Accordion } from "@/components/Accordion";
import { CTABand } from "@/components/CTABand";
import { GivingTabs } from "@/components/GivingTabs";
import { HeroSplit } from "@/components/HeroSplit";
import { givingContent } from "@/content/pages";

export const metadata: Metadata = {
  title: "Give",
  description: givingContent.scriptureText,
};

const givingFaqs = [
  { question: "Is my gift secure?", answer: "Yes, online gifts are processed securely by Paystack; we never see or store your card details." },
  { question: "Can I give from outside Nigeria?", answer: "Yes, use the Forex account details under Bank Transfer for international gifts." },
  { question: "Can I set up recurring giving?", answer: "Not yet through this site. Please contact us and our team can help set up recurring giving." },
  { question: "How do I get a giving statement?", answer: "Email us at gcichq@gcicintchurch.org with your details and we'll be glad to issue one." },
];

export default function GivePage() {
  return (
    <>
      <HeroSplit
        eyebrow="Giving"
        title="Give with a Cheerful Heart"
        subtitle={
          <blockquote className="border-l-2 border-gold-500 pl-4 font-display text-lg italic text-ink-900">
            &ldquo;{givingContent.scriptureText}&rdquo;
            <cite className="mt-2 block font-sans text-sm not-italic text-ink-600">{givingContent.scriptureRef}</cite>
          </blockquote>
        }
        image="/images/pastors-seated.jpg"
        imageAlt="GCIC pastors seated together"
      />

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <GivingTabs categories={givingContent.categories} />
        </div>
      </section>

      <section className="bg-sand-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-display text-2xl font-semibold text-ink-900">Frequently Asked Questions</h2>
          <div className="mt-6">
            <Accordion items={givingFaqs} />
          </div>
        </div>
      </section>

      <CTABand heading="Questions about giving?" cta={[{ label: "Contact Us", href: "/contact" }]} />
    </>
  );
}
