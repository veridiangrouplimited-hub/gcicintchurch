import type { Metadata } from "next";
import Link from "next/link";
import { givingContent } from "@/content/pages";

export const metadata: Metadata = { title: "Thank You" };

export default function GivingThankYouPage() {
  return (
    <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <h1 className="font-display text-3xl font-semibold text-ink-900">Thank You for Your Gift</h1>
        <blockquote className="mt-6 border-l-2 border-gold-500 pl-4 text-left font-display text-lg italic text-ink-900">
          &ldquo;{givingContent.scriptureText}&rdquo;
          <cite className="mt-2 block font-sans text-sm not-italic text-ink-600">{givingContent.scriptureRef}</cite>
        </blockquote>
        <p className="mt-8 font-sans text-ink-600">
          A receipt has been sent to your email. May God bless you abundantly for your generosity.
        </p>
        <Link href="/" className="mt-8 inline-block font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700">
          &larr; Back to Home
        </Link>
      </div>
    </section>
  );
}
