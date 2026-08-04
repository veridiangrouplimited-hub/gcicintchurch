import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Power Touch Radio",
  description: "Listen to Power Touch Radio, the podcast of God's City International Church, on Spotify.",
};

export default function RadioPage() {
  const showId = siteConfig.socials.spotify.split("/show/")[1];

  return (
    <>
      <PageHeader
        title="Power Touch Radio"
        crumbLabel="Power Touch Radio"
        crumbHref="/radio"
        eyebrow="Media"
        image="/images/pastor-mic-blue.jpg"
        imageAlt="A GCIC pastor speaking into a microphone"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="font-sans text-ink-600">
            Power Touch Radio brings you messages, devotionals, and worship from God&rsquo;s City
            International Church wherever you are. Listen below, or follow us on Spotify to catch
            every new episode.
          </p>

          <div className="mt-8 overflow-hidden rounded-[var(--radius-media)]">
            <iframe
              title="Power Touch Radio on Spotify"
              src={`https://open.spotify.com/embed/show/${showId}?utm_source=generator`}
              width="100%"
              height="352"
              style={{ border: 0 }}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>

          <a
            href={siteConfig.socials.spotify}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-block font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700"
          >
            Visit our Spotify page &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
