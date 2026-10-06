export interface BlogAuthor {
  slug: string;
  name: string;
  title: string;
  bio: string;
  /** Public path under /public, or empty to use initials fallback */
  avatar: string;
  linkedIn?: string;
}

export const DEFAULT_BLOG_AUTHOR_SLUG = "zarrar-ahmad";

const BLOG_AUTHORS: Record<string, BlogAuthor> = {
  "zarrar-ahmad": {
    slug: "zarrar-ahmad",
    name: "Zarrar Ahmad",
    title: "Software Development at Xorora",
    bio: "Zarrar Ahmad writes about custom software, AI product delivery, and how engineering teams choose the right development partner. Placeholder bio — details and photo coming soon.",
    avatar: "",
    linkedIn: "https://www.linkedin.com/",
  },
  "zubair-shakoor": {
    slug: "zubair-shakoor",
    name: "Zubair Shakoor",
    title: "Software Development at Xorora",
    bio: "Zubair Shakoor writes about software engineering, frameworks, and practical comparisons for teams shipping production systems. Placeholder bio — details and photo coming soon.",
    avatar: "",
    linkedIn: "https://www.linkedin.com/",
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
