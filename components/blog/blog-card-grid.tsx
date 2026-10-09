"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BlogAuthorByline } from "@/components/blog/blog-author-byline";
import type { BlogPost } from "@/lib/blog";
import {
  BLOG_CARD_IMAGE_SIZES,
  BLOG_FEATURE_IMAGE_QUALITY,
} from "@/lib/blog/image";
import { blogImageAlt, blogImageTitle } from "@/lib/image-seo";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface BlogCardGridProps {
  posts: BlogPost[];
  /** Hide author chip when already on an author profile */
  hideAuthor?: boolean;
  /** Show this many first; omit to show all */
  initialCount?: number;
}

export function BlogCardGrid({
  posts,
  hideAuthor = false,
  initialCount,
}: BlogCardGridProps) {
  const [visible, setVisible] = useState(initialCount ?? posts.length);
  const shown = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  if (posts.length === 0) {
    return (
      <p className="rounded-(--r-lg) border border-border bg-white px-6 py-10 text-center font-sans text-[15px] text-fg3">
        No articles yet.
      </p>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 items-start gap-[clamp(16px,2.5vw,22px)] sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((post) => (
          <BlogCard key={post.id} post={post} hideAuthor={hideAuthor} />
        ))}
      </div>
      {hasMore ? (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setVisible(posts.length)}
            className="cursor-pointer rounded-pill border border-navy-900 bg-navy-900 px-6 py-2.5 font-sans font-semibold text-[14px] text-white transition-colors hover:bg-navy-800"
          >
            Load more
          </button>
        </div>
      ) : null}
    </div>
  );
}

function BlogCard({
  post,
  hideAuthor,
}: {
  post: BlogPost;
  hideAuthor: boolean;
}) {
  return (
    <Link
      href={ROUTES.blogPost(post.slug)}
      className={cn(
        "blog-card group flex h-full flex-col overflow-hidden rounded-(--r-lg) border border-border bg-white no-underline shadow-xs",
        "transition-[border-color,box-shadow] duration-220 ease-in-out",
        "hover:border-border-strong hover:shadow-md",
      )}
    >
      <div className="blog-card-media relative aspect-video w-full shrink-0 overflow-hidden bg-white">
        <Image
          src={post.img}
          alt={blogImageAlt(post.title)}
          title={blogImageTitle(post.excerpt, post.cat)}
          fill
          quality={BLOG_FEATURE_IMAGE_QUALITY}
          sizes={BLOG_CARD_IMAGE_SIZES}
          className="object-cover object-center"
        />
        <span className="absolute top-3.5 left-3.5 rounded-pill border border-white/18 bg-[rgba(8,12,30,0.72)] px-[11px] py-[5px] font-mono text-[10.5px] text-white tracking-[0.08em]">
          {post.cat}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-[clamp(18px,2.2vw,24px)]">
        <h3 className="mb-2 line-clamp-2 font-sans font-semibold text-[clamp(17px,1.8vw,20px)] text-fg1 leading-snug tracking-[-0.01em]">
          {post.title}
        </h3>
        <p className="m-0 mb-4 line-clamp-3 flex-1 font-sans text-[14px] text-fg2 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-auto flex flex-col gap-3">
          <div className="flex items-center gap-2.5 font-sans text-[12.5px] text-fg3">
            <span>{post.read} read</span>
            <span className="h-[3px] w-[3px] rounded-full bg-slate-300" />
            <span>{post.date}</span>
          </div>
          {hideAuthor ? null : (
            <BlogAuthorByline authorSlug={post.authorSlug} compact nested />
          )}
        </div>
      </div>
    </Link>
  );
}
