export interface BlogAuthor {
  slug: string;
  name: string;
  title: string;
  bio: string;
  /** Public path under /public, or empty to use initials fallback */
  avatar: string;
  linkedIn?: string;
}

export const DEFAULT_BLOG_AUTHOR_SLUG = "alex-rivera";

const BLOG_AUTHORS: Record<string, BlogAuthor> = {
  [DEFAULT_BLOG_AUTHOR_SLUG]: {
    slug: DEFAULT_BLOG_AUTHOR_SLUG,
    name: "Alex Rivera",
    title: "Content Strategist at Xorora",
    bio: "Alex Rivera writes about AI development, software delivery, and how agencies and product teams ship practical automation. Placeholder bio — details and photo coming soon.",
    avatar: "",
  },
};

export function getBlogAuthor(slug?: string | null): BlogAuthor {
  if (slug && BLOG_AUTHORS[slug]) {
    return BLOG_AUTHORS[slug];
  }
  return BLOG_AUTHORS[DEFAULT_BLOG_AUTHOR_SLUG];
}

export function listBlogAuthors(): BlogAuthor[] {
  return Object.values(BLOG_AUTHORS);
}

export function getAuthorInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
