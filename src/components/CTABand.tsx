import Link from "next/link";

export function CTABand({
  heading,
  cta,
}: {
  heading: string;
  cta: { label: string; href: string }[];
}) {
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
