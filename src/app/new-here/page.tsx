import type { Metadata } from "next";
import { BookOpen, Heart, MapPin, Users } from "@phosphor-icons/react/dist/ssr";
import { Accordion } from "@/components/Accordion";
import { HeroSplit } from "@/components/HeroSplit";
import { PlanVisitForm } from "@/components/PlanVisitForm";
import { ServiceTimesStrip } from "@/components/ServiceTimesStrip";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description: "Everything you need to know before visiting God's City International Church for the first time.",
};

const steps = [
  { icon: MapPin, title: "Arrive & Park", text: "Head to The Place, GCIC Tower, No. 16 Ebitu Ukiwe Street, Jabi, Abuja. Our welcome team will help you find your way in." },
  { icon: BookOpen, title: "Join the Service", text: "Services run roughly 90-120 minutes, with worship, the Word, and prayer. Come as you are, there's no dress code." },
  { icon: Users, title: "Kids Are Welcome", text: "Our Children and Youth Club cares for your children in a loving, age-appropriate environment during the service." },
  { icon: Heart, title: "Connect Afterward", text: "Stick around after the service, our team would love to meet you and answer any questions." },
];

const faqs = [
  { question: "What should I wear?", answer: "Come as you are, there's no dress code at GCIC. Many members dress smart-casual, but you're welcome exactly as you are." },
  { question: "Is there a place for my kids?", answer: "Yes, our Children and Youth Club welcomes children of all ages during every service." },
  { question: "How long is the service?", answer: "Services typically run 90-120 minutes, including worship, the Word, and prayer." },
  { question: "Where do I park?", answer: "Parking is available at The Place, GCIC Tower on Ebitu Ukiwe Street, Jabi. Our welcome team can direct you on arrival." },
  { question: "Can I watch online first?", answer: "Of course, visit our Watch Live page to experience a service from home before you visit in person." },
];

export default function NewHerePage() {
  return (
    <>
      <HeroSplit
        eyebrow="New Here?"
        title="We'd love to meet you."
        subtitle="Whether you're exploring faith for the first time or looking for a new church home, you're welcome at God's City International Church exactly as you are."
        image="/images/sanctuary-welcome.jpg"
        imageAlt="Congregation gathered for worship at GCIC"
        cta={[
          { label: "Watch Online First", href: "/watch", variant: "secondary" },
        ]}
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-2xl font-semibold text-ink-900">What to Expect</h2>
          <div className="relative mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-sand-200 lg:block" aria-hidden="true" />
            {steps.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-center text-center lg:items-center">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-crimson-600 text-ivory">
                  <s.icon size={20} weight="regular" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-ivory bg-gold-500 font-sans text-[10px] font-bold text-ink-900">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-2 font-sans text-sm text-ink-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceTimesStrip />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-sm text-ink-600">{siteConfig.address.line1}, {siteConfig.address.line2}</p>
        </div>
      </section>

      <section className="bg-sand-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink-900">Frequently Asked Questions</h2>
          <div className="mt-6">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl rounded-[var(--radius-media)] border border-sand-200 bg-ivory p-8">
          <h2 className="font-display text-xl font-semibold text-ink-900">Let Us Know You&rsquo;re Coming</h2>
          <p className="mt-2 font-sans text-sm text-ink-600">
            Tell us when you&rsquo;re visiting so our welcome team can prepare for you.
          </p>
          <PlanVisitForm />
        </div>
      </section>
    </>
  );
}
