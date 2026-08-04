import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image";
import type { BlogPost } from "@/sanity/queries";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-media)] border border-sand-200 shadow-warm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-warm-lg"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-900">
        {post.heroImage ? (
          <Image
            // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Sanity image ref, typed loosely at this boundary
            src={urlFor(post.heroImage as any).width(600).url()}
            alt=""
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/25 to-ink-900/0" />
        {post.category && (
          <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 font-sans text-xs font-semibold text-ink-900 backdrop-blur-sm">
            {post.category}
          </span>
        )}
        <h3 className="absolute inset-x-0 bottom-0 p-5 font-display text-lg font-semibold leading-snug text-ivory">
          {post.title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col gap-2 rounded-b-[var(--radius-media)] border border-t-0 border-sand-200 bg-ivory p-5">
        {post.excerpt && <p className="line-clamp-2 font-sans text-sm text-ink-600">{post.excerpt}</p>}
        <p className="mt-auto pt-1 font-sans text-xs text-ink-600">
          {post.authorName && <span>{post.authorName} · </span>}
          {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
    </Link>
  );
}
