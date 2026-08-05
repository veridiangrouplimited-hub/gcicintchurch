import Image from "next/image";
import { RevealItem } from "@/components/motion/RevealItem";

export function LeaderProfile({
  name,
  photo,
  secondaryPhoto,
  scriptureRef,
  scriptureText,
  paragraphs,
  heading,
  factStrip,
}: {
  name: string;
  photo?: string;
  secondaryPhoto?: string;
  scriptureRef?: string;
  scriptureText?: string;
  heading?: string;
  paragraphs: string[];
  factStrip?: { value: string; label: string }[];
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,340px)_1fr]">
        <div>
          <div className="relative">
            {photo && (
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-media)] border border-sand-200 shadow-warm">
                <Image src={photo} alt={name} fill className="object-cover" />
              </div>
            )}
            {secondaryPhoto && (
              <div className="absolute -bottom-8 -right-6 hidden aspect-[4/3] w-2/3 overflow-hidden rounded-[var(--radius-media)] border-4 border-ivory shadow-warm-lg sm:block">
                <Image src={secondaryPhoto} alt="" fill className="object-cover" />
              </div>
            )}
          </div>
          <p className={`font-display text-lg font-semibold text-ink-900 ${secondaryPhoto ? "mt-14 sm:mt-14" : "mt-4"}`}>
            {name}
          </p>

          {factStrip && factStrip.length > 0 && (
            <div className="mt-6 flex gap-6 border-t border-sand-200 pt-6">
              {factStrip.map((f, i) => (
                <RevealItem key={f.label} index={i}>
                  <p className="font-display text-xl font-semibold text-crimson-600">{f.value}</p>
                  <p className="mt-1 font-sans text-xs uppercase tracking-wide text-ink-600">{f.label}</p>
                </RevealItem>
              ))}
            </div>
          )}
        </div>
        <div>
          {scriptureText && (
            <blockquote className="border-l-2 border-gold-500 pl-4 font-display text-xl italic text-ink-900">
              &ldquo;{scriptureText}&rdquo;
              {scriptureRef && <cite className="mt-2 block font-sans text-sm not-italic text-ink-600">{scriptureRef}</cite>}
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
