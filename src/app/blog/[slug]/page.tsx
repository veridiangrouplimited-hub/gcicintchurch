import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { portableTextToPlainText } from "@/lib/portable-text";
import { siteConfig } from "@/lib/site-config";
import { urlFor } from "@/sanity/image";
import { getBlogPostBySlug, getBlogPosts } from "@/sanity/queries";

export const revalidate = 60;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt ?? portableTextToPlainText(post.body).slice(0, 160) };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt || portableTextToPlainText(post.body).slice(0, 160),
          datePublished: new Date(post.publishedAt).toISOString(),
          author: post.authorName ? { "@type": "Person", name: post.authorName } : undefined,
          publisher: { "@type": "Organization", name: siteConfig.churchName },
          url: `${siteUrl}/blog/${post.slug}`,
        }}
      />
      <PageHeader title={post.title} crumbLabel="Blog" crumbHref="/blog" eyebrow="Media" />
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="font-sans text-sm text-ink-600">
            {post.authorName && <span>{post.authorName} · </span>}
            {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          {post.heroImage != null && (
            <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-[var(--radius-media)] border border-sand-200">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any -- Sanity image ref, typed loosely at this boundary */}
              <Image src={urlFor(post.heroImage as any).width(1200).url()} alt="" fill className="object-cover" />
            </div>
          )}

          {post.body && (
            <div className="prose-devotional mt-8 space-y-4 font-sans text-ink-600">
              <PortableText value={post.body} />
            </div>
          )}

          <div className="mt-12 border-t border-sand-200 pt-6">
            <Link href="/blog" className="font-sans text-sm font-semibold text-crimson-600 hover:text-crimson-700">
              &larr; Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
