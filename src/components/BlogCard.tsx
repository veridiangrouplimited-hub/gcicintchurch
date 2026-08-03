import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image";
import type { BlogPost } from "@/sanity/queries";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-media)] border border-sand-200 bg-ivory transition-colors hover:border-crimson-600"
    >
      {post.heroImage ? (
        <div className="relative aspect-video w-full overflow-hidden bg-sand-100">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any -- Sanity image ref, typed loosely at this boundary */}
          <Image src={urlFor(post.heroImage as any).width(600).url()} alt="" fill className="object-cover" />
        </div>
      ) : (
        <div className="aspect-video w-full bg-sand-100" />
      )}
      <div className="flex flex-1 flex-col p-5">
        {post.category && (
          <span className="mb-2 inline-block w-fit rounded-full bg-sand-100 px-3 py-1 font-sans text-xs font-semibold text-ink-900">
            {post.category}
          </span>
        )}
        <h3 className="font-display text-base font-semibold text-ink-900 group-hover:text-crimson-600">{post.title}</h3>
        {post.excerpt && <p className="mt-2 line-clamp-3 font-sans text-sm text-ink-600">{post.excerpt}</p>}
        <p className="mt-auto pt-3 font-sans text-xs text-ink-600">
          {post.authorName && <span>{post.authorName} · </span>}
          {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
    </Link>
  );
}
