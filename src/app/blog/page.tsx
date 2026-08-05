import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { RevealItem } from "@/components/motion/RevealItem";
import { PageHeader } from "@/components/PageHeader";
import { getBlogPosts } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles from God's City International Church.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHeader title="Blog" crumbLabel="Blog" crumbHref="/blog" eyebrow="Media" />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <p className="mx-auto max-w-xl text-center font-sans text-ink-600">
            No articles have been published yet. Check back soon.
          </p>
        ) : (
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <RevealItem key={p._id} index={i % 9}>
                <BlogCard post={p} />
              </RevealItem>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
