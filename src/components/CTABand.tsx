import Link from "next/link";

export function CTABand({
  heading,
  cta,
  size = "compact",
}: {
  heading: string;
  cta: { label: string; href: string }[];
  /** "large" is a bolder full-bleed "mission moment" — see homepage giving section. */
  size?: "compact" | "large";
}) {
  if (size === "large") {
    return (
      <section className="relative overflow-hidden bg-crimson-700 px-4 py-24 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold italic leading-tight text-ivory sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {cta.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-[var(--radius-control)] bg-ivory px-8 py-3.5 font-sans text-sm font-semibold text-crimson-700 transition-colors hover:bg-sand-100"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-crimson-600 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <h2 className="font-display text-2xl font-semibold text-ivory sm:text-3xl">{heading}</h2>
        <div className="flex shrink-0 flex-wrap justify-center gap-3">
          {cta.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-[var(--radius-control)] bg-ivory px-6 py-3 font-sans text-sm font-semibold text-crimson-700 hover:bg-sand-100"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
