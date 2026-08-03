import Image from "next/image";

export function LeaderProfile({
  name,
  photo,
  scriptureRef,
  scriptureText,
  paragraphs,
  heading,
}: {
  name: string;
  photo?: string;
  scriptureRef?: string;
  scriptureText?: string;
  heading?: string;
  paragraphs: string[];
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
        <div>
          {photo && (
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-media)] border border-sand-200">
              <Image src={photo} alt={name} fill className="object-cover" />
            </div>
          )}
          <p className="mt-4 font-display text-lg font-semibold text-ink-900">{name}</p>
        </div>
        <div>
          {scriptureText && (
            <blockquote className="border-l-2 border-gold-500 pl-4 font-display text-xl italic text-ink-900">
              &ldquo;{scriptureText}&rdquo;
              {scriptureRef && <cite className="mt-2 block font-sans text-sm not-italic text-ink-600">— {scriptureRef}</cite>}
            </blockquote>
          )}
          {heading && <h2 className="mt-8 font-display text-2xl font-semibold text-ink-900">{heading}</h2>}
          <div className="mt-4 space-y-4 font-sans text-ink-600">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
