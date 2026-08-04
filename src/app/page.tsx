import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { CTABand } from "@/components/CTABand";
import { HeroFullBleed } from "@/components/HeroFullBleed";
import { JsonLd } from "@/components/JsonLd";
import { MandateBanner } from "@/components/MandateBanner";
import { MinistryGrid } from "@/components/MinistryGrid";
import { SermonCard } from "@/components/SermonCard";
import { ServiceTimesStrip } from "@/components/ServiceTimesStrip";
import { mandate, whoWeAre } from "@/content/about";
import { ministries } from "@/content/ministries";
import { expandEvents } from "@/lib/occurrences";
import { siteConfig } from "@/lib/site-config";
import { getBlogPosts, getEvents, getSermons } from "@/sanity/queries";

export const revalidate = 60;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const churchJsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: siteConfig.churchName,
  alternateName: siteConfig.shortName,
  url: siteUrl,
  logo: `${siteUrl}/images/gcic-logo.png`,
  image: `${siteUrl}/images/congregation-hall.jpg`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  sameAs: Object.values(siteConfig.socials),
};

export default async function Home() {
  const [sermons, blogPosts, events] = await Promise.all([getSermons(), getBlogPosts(), getEvents()]);

  const from = new Date();
  const to = new Date();
  to.setDate(to.getDate() + 90);
  const upcoming = expandEvents(events, from, to).slice(0, 3);

  return (
    <>
      <JsonLd data={churchJsonLd} />
      <HeroFullBleed
        eyebrow={siteConfig.churchName}
        title={siteConfig.tagline}
        subtitle="A multicultural church in Abuja, Nigeria, inaugurated 1 May 2016 with an assignment to preach the gospel and, with the help of the Holy Spirit, deliver, rescue and restore."
        image="/images/congregation-hall.jpg"
        imageAlt="GCIC congregation gathered for a service, filling the sanctuary"
        cta={[
          { label: "Plan Your Visit", href: "/new-here" },
          { label: "Watch Live", href: "/watch", variant: "secondary" },
        ]}
      />

      <ServiceTimesStrip />

      <MandateBanner items={mandate} />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.25em] text-crimson-600">
              Who We Are
            </p>
            <p className="mt-4 font-sans text-lg text-ink-600">{whoWeAre[0]}</p>
            <Link
              href="/about"
              className="mt-6 inline-block font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700"
            >
              Read Our Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="px-0 py-16">
        <div className="mx-auto mb-10 max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink-900">Ministries</h2>
          <p className="mt-3 font-sans text-ink-600">
            Every ministry at GCIC exists to help you grow in faith, strengthen your family, and
            walk out discipleship in community.
          </p>
        </div>
        <MinistryGrid ministries={ministries.slice(0, 4)} />
        <div className="mt-8 text-center">
          <Link href="/ministries" className="font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700">
            View All Ministries &rarr;
          </Link>
        </div>
      </section>

      {sermons.length > 0 && (
        <section className="bg-sand-100 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-6xl text-center">
            <h2 className="font-display text-3xl font-semibold text-ink-900">Latest Sermons</h2>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
            {sermons.slice(0, 3).map((s) => (
              <SermonCard key={s._id} sermon={s} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/sermons" className="font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700">
              View All Sermons &rarr;
            </Link>
          </div>
        </section>
      )}

      {upcoming.length > 0 && (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-semibold text-ink-900">Upcoming Events</h2>
            <div className="mt-8 space-y-3">
              {upcoming.map((o, i) => (
                <Link
                  key={`${o.event._id}-${i}`}
                  href={`/events/${o.event.slug}`}
                  className="group flex items-center gap-4 rounded-[var(--radius-media)] border border-sand-200 bg-ivory p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-crimson-600/40 hover:shadow-md"
                >
                  <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-[var(--radius-control)] bg-sand-100 py-2 text-center ring-1 ring-crimson-600/10 transition-colors group-hover:bg-crimson-600 group-hover:ring-crimson-600">
                    <span className="font-sans text-xs font-semibold uppercase text-crimson-600 group-hover:text-ivory">
                      {o.start.toLocaleDateString("en-US", { month: "short" })}
                    </span>
                    <span className="font-display text-2xl font-semibold text-ink-900 group-hover:text-ivory">{o.start.getDate()}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink-900 group-hover:text-crimson-600">
                    {o.event.title}
                  </h3>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/events" className="font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700">
                View All Events &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTABand
        heading="Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
        cta={[{ label: "Give Now", href: "/give" }]}
        size="large"
      />

      {blogPosts.length > 0 && (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-6xl text-center">
            <h2 className="font-display text-3xl font-semibold text-ink-900">From the Blog</h2>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
            {blogPosts.slice(0, 3).map((p) => (
              <BlogCard key={p._id} post={p} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700">
              Read More Articles &rarr;
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
