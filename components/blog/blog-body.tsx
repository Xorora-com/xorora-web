"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { LightSection } from "@/components/case-study/light-section";
import { BLOG_CATEGORIES, type BlogCategory, type BlogPost } from "@/lib/blog";
import {
  BLOG_CARD_IMAGE_SIZES,
  BLOG_FEATURE_IMAGE_QUALITY,
  BLOG_HERO_IMAGE_SIZES,
} from "@/lib/blog/image";
import { blogImageAlt, blogImageTitle } from "@/lib/image-seo";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface BlogBodyProps {
  posts: BlogPost[];
}

export function BlogBody({ posts }: BlogBodyProps) {
  const [category, setCategory] = useState<BlogCategory>("All posts");

  const featuredPost = useMemo(() => {
    return (
      posts.find((post) => post.featured) ??
      posts[0] ??
      null
    );
  }, [posts]);

  const topicLabels = useMemo(() => {
    return BLOG_CATEGORIES.map((cat) =>
      cat === "All posts" ? "All" : cat,
    );
  }, []);

  const filteredPosts = useMemo(() => {
    const base =
      category === "All posts"
        ? posts
        : posts.filter((post) => post.cat === category);

    // Keep featured in the grid too (Crest pattern); or exclude for cleaner list.
    // Crest shows featured both as hero and again in grid — we'll exclude from grid
    // when viewing All to avoid duplicate, but include when filtered by category.
    if (category === "All posts" && featuredPost) {
      return base.filter((post) => post.id !== featuredPost.id);
    }
    return base;
  }, [posts, category, featuredPost]);

  const articleCount =
    category === "All posts" ? posts.length : filteredPosts.length;

  return (
    <LightSection bg="var(--surface)" className="!pt-0">
      {featuredPost && category === "All posts" ? (
        <FeaturedPost post={featuredPost} />
      ) : null}

      <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-3 font-mono text-[11px] text-fg3 uppercase tracking-[0.16em]">
            Topic
          </p>
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((cat, index) => {
              const active = category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "cursor-pointer rounded-pill border px-4 py-2 font-sans text-[13.5px] transition-colors duration-150",
                    active
                      ? "border-navy-900 bg-navy-900 font-semibold text-white"
                      : "border-border bg-white font-medium text-fg2 hover:border-border-strong hover:text-fg1",
                  )}
                >
                  {topicLabels[index]}
                </button>
              );
            })}
          </div>
        </div>
        <span className="font-sans text-fg3 text-sm sm:pt-7">
          {articleCount} article{articleCount === 1 ? "" : "s"}
        </span>
      </div>

      {filteredPosts.length === 0 ? (
        <p className="rounded-(--r-lg) border border-border bg-white px-6 py-10 text-center font-sans text-[15px] text-fg3">
          No articles in this topic yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-[clamp(16px,2.5vw,22px)] sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </LightSection>
  );
}

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      href={ROUTES.blogPost(post.slug)}
      className={cn(
        "group mb-[clamp(36px,5vw,56px)] grid overflow-hidden rounded-(--r-xl) border border-border bg-white no-underline shadow-xs",
        "transition-all duration-220 ease-in-out",
        "hover:border-border-strong hover:shadow-md",
        "lg:grid-cols-[1.15fr_0.85fr]",
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-white lg:aspect-auto lg:min-h-[360px]">
        <Image
          src={post.img}
          alt={blogImageAlt(post.title)}
          title={blogImageTitle(post.excerpt, post.cat)}
          fill
          priority
          quality={BLOG_FEATURE_IMAGE_QUALITY}
          sizes={BLOG_HERO_IMAGE_SIZES}
          className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-col justify-center p-[clamp(24px,3.5vw,40px)]">
        <p className="mb-4 font-mono text-[11px] text-tangerine-600 uppercase tracking-[0.14em]">
          Featured · {post.cat}
        </p>
        <h2 className="mb-3 font-bold font-sans text-[clamp(24px,3vw,34px)] text-fg1 leading-snug tracking-[-0.02em]">
          {post.title}
        </h2>
        <p className="mb-5 line-clamp-3 font-sans text-[15.5px] text-fg2 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mb-6 flex flex-wrap items-center gap-2.5 font-sans text-[13px] text-fg3">
          <span>{post.read} read</span>
          <span className="h-[3px] w-[3px] rounded-full bg-slate-300" />
          <span>{post.date}</span>
        </div>
        <span className="inline-flex items-center gap-2 font-sans font-semibold text-[14.5px] text-accent transition-colors duration-150 group-hover:text-tangerine-600">
          Read article
          <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={ROUTES.blogPost(post.slug)}
      className={cn(
        "blog-card group flex h-full flex-col overflow-hidden rounded-(--r-lg) border border-border bg-white no-underline shadow-xs",
        "transition-all duration-220 ease-in-out",
        "hover:translate-y-[-3px] hover:border-border-strong hover:shadow-md",
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
        <h3 className="mb-2 font-sans font-semibold text-[clamp(17px,1.8vw,20px)] text-fg1 leading-snug tracking-[-0.01em]">
          {post.title}
        </h3>
        <p className="m-0 mb-4 line-clamp-3 flex-1 font-sans text-[14px] text-fg2 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-2.5 font-sans text-[12.5px] text-fg3">
          <span>{post.read} read</span>
          <span className="h-[3px] w-[3px] rounded-full bg-slate-300" />
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
}
