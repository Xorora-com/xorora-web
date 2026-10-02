export interface BlogPost {
  id: string;
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  read: string;
  date: string;
  img: string;
  featured: boolean;
  authorSlug: string;
  publishedAt: Date | null;
  updatedAt: Date;
}

export const BLOG_CATEGORIES = ["All posts", "Software Development"] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
