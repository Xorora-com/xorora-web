import { and, asc, eq } from "drizzle-orm";
import { BLOG_POSTS } from "@/components/blog/blog-data";
import { db, hasDatabaseUrl } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { DEFAULT_BLOG_AUTHOR_SLUG } from "./authors";
import type { BlogPost } from "./types";

function formatDate(date: Date | null): string {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function resolveAuthorSlug(slug?: string | null): string {
  return slug?.trim() || DEFAULT_BLOG_AUTHOR_SLUG;
}

function mapPost(
  row: typeof blogPosts.$inferSelect,
  authorSlug?: string | null,
): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    cat: row.category,
    title: row.title,
    excerpt: row.excerpt,
    read: row.readTime,
    date: formatDate(row.publishedAt),
    img: row.image,
    featured: row.featured === 1,
    authorSlug: resolveAuthorSlug(authorSlug),
    publishedAt: row.publishedAt,
    updatedAt: row.updatedAt,
  };
}

function mapSeedPost(post: (typeof BLOG_POSTS)[number]): BlogPost {
  const publishedAt = new Date(post.date);
  return {
    id: `seed-${post.slug}`,
    slug: post.slug,
    cat: post.cat,
    title: post.title,
    excerpt: post.excerpt,
    read: post.read,
    date: post.date,
    img: post.img,
    featured: Boolean(post.featured),
    authorSlug: resolveAuthorSlug(post.authorSlug),
    publishedAt: Number.isNaN(publishedAt.getTime()) ? null : publishedAt,
    updatedAt: Number.isNaN(publishedAt.getTime()) ? new Date() : publishedAt,
  };
}

function seedPosts(): BlogPost[] {
  return BLOG_POSTS.map(mapSeedPost);
}

/** Prefer seed image paths so hero updates in blog-data.ts apply without re-seeding DB. */
function mergeSeedFields(post: BlogPost, seed?: BlogPost): BlogPost {
  if (!seed) return post;
  return {
    ...post,
    img: seed.img,
    authorSlug: seed.authorSlug,
  };
}

export async function listPublishedBlogPosts(): Promise<BlogPost[]> {
  if (!hasDatabaseUrl()) {
    return seedPosts();
  }

  const rows = await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.status, "published"))
    .orderBy(asc(blogPosts.sortOrder));

  const fromSeed = seedPosts();
  const fromDb = new Map(
    rows.map((row) => {
      const seed = fromSeed.find((post) => post.slug === row.slug);
      return [row.slug, mapPost(row, seed?.authorSlug)] as const;
    }),
  );
  const listed = fromSeed.map((post) => {
    const dbPost = fromDb.get(post.slug);
    return dbPost ? mergeSeedFields(dbPost, post) : post;
  });
  const extras = rows
    .map((row) => {
      const seed = fromSeed.find((post) => post.slug === row.slug);
      return mapPost(row, seed?.authorSlug);
    })
    .filter((post) => !fromSeed.some((seed) => seed.slug === post.slug));
  return [...listed, ...extras];
}

export async function listPublishedBlogPostsByAuthor(
  authorSlug: string,
): Promise<BlogPost[]> {
  const posts = await listPublishedBlogPosts();
  return posts.filter((post) => post.authorSlug === authorSlug);
}

export async function getPublishedBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  if (hasDatabaseUrl()) {
    const rows = await db
      .select()
      .from(blogPosts)
      .where(and(eq(blogPosts.slug, slug), eq(blogPosts.status, "published")))
      .limit(1);

    const row = rows[0];
    if (row) {
      const seed = seedPosts().find((post) => post.slug === slug);
      return mergeSeedFields(mapPost(row, seed?.authorSlug), seed);
    }
  }

  return seedPosts().find((post) => post.slug === slug) ?? null;
}
