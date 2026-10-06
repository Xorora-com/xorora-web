"use client";

import Link from "next/link";
import { useState } from "react";
import type { BlogPost } from "@/lib/blog";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface BlogArticleListProps {
  posts: BlogPost[];
  /** Show this many first; omit to show all */
  initialCount?: number;
  emptyLabel?: string;
}

export function BlogArticleList({
  posts,
  initialCount,
  emptyLabel = "No articles yet.",
}: BlogArticleListProps) {
  const [visible, setVisible] = useState(initialCount ?? posts.length);
  const shown = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  if (posts.length === 0) {
    return (
      <p className="rounded-(--r-lg) border border-border bg-white px-6 py-10 text-center font-sans text-[15px] text-fg3">
        {emptyLabel}
      </p>
    );
  }

  return (
    <div>
      <ul className="m-0 flex list-none flex-col gap-4 p-0">
        {shown.map((post) => (
          <li key={post.id}>
            <Link
              href={ROUTES.blogPost(post.slug)}
              className={cn(
                "group block rounded-(--r-lg) border border-border bg-white p-[clamp(18px,2.2vw,24px)] no-underline",
                "transition-all duration-220 hover:border-border-strong hover:shadow-md",
              )}
            >
              <h3 className="m-0 mb-2 font-sans font-semibold text-[clamp(18px,2vw,22px)] text-fg1 leading-snug tracking-[-0.01em] group-hover:text-xo-indigo">
                {post.title}
              </h3>
              <p className="m-0 mb-3 font-sans text-[13px] text-fg3">
                <span className="font-semibold uppercase tracking-[0.08em] text-tangerine-600">
                  {post.cat}
                </span>
                <span className="mx-2 text-slate-300">·</span>
                <span>{post.read} read</span>
              </p>
              <p className="m-0 mb-4 line-clamp-2 font-sans text-[15px] text-fg2 leading-relaxed">
                {post.excerpt}
              </p>
              <p className="m-0 font-sans text-[13px] text-fg3">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
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
