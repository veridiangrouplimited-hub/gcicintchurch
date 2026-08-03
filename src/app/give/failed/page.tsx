import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Giving Failed" };

export default function GivingFailedPage() {
  return (
    <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <h1 className="font-display text-3xl font-semibold text-ink-900">We Couldn&rsquo;t Process Your Gift</h1>
        <p className="mt-6 font-sans text-ink-600">
          Something went wrong and your payment could not be confirmed. You have not been charged for this
          attempt, or the charge will be automatically reversed.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/give" className="rounded-[var(--radius-control)] bg-crimson-600 px-6 py-3 font-sans text-sm font-semibold text-ivory hover:bg-crimson-700">
            Try Again
          </Link>
          <Link href="/contact" className="rounded-[var(--radius-control)] border border-ink-900 px-6 py-3 font-sans text-sm font-semibold text-ink-900 hover:bg-sand-100">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
