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

/** Rotated onto Marketing / Digital Marketing posts when authorSlug is omitted. */
export const MARKETING_BLOG_AUTHOR_SLUGS = ["waqas-raza", "bilal-khan"] as const;

const BLOG_AUTHORS: Record<string, BlogAuthor> = {
  "zarrar-ahmad": {
    slug: "zarrar-ahmad",
    name: "Zarrar Ahmad",
    title: "Software Development at Xorora",
    bio: "Zarrar Ahmad writes about custom software, AI product delivery, and how engineering teams choose the right development partner. Results-driven IT specialist with expertise in network administration, cloud computing, and building scalable digital solutions.",
    avatar: "/assets/blog/authors/zarrar-ahmad.png",
    linkedIn: "https://www.linkedin.com/in/zarrar-ahmad-401461179/",
  },
  "zubair-shakoor": {
    slug: "zubair-shakoor",
    name: "Zubair Shakoor",
    title: "Software Development at Xorora",
    bio: "Zubair Shakoor writes about software engineering, frameworks, and practical comparisons for teams shipping production systems. AI-first senior engineer with 8+ years of experience building scalable backend systems.",
    avatar: "",
    linkedIn: "https://www.linkedin.com/in/zubair-shakoor-733216a2/",
  },
  "waqas-raza": {
    slug: "waqas-raza",
    name: "Waqas Raza",
    title: "Digital Marketing at Xorora",
    bio: "Waqas Raza writes about digital marketing, SEO, paid media, and performance strategy for growing businesses. Performance marketer passionate about helping teams make smarter marketing decisions.",
    avatar: "",
    linkedIn: "https://www.linkedin.com/in/waqas-raza-marketing/",
  },
  "bilal-khan": {
    slug: "bilal-khan",
    name: "Bilal Khan",
    title: "Digital Marketing at Xorora",
    bio: "Bilal Khan writes about digital marketing strategy, growth, and tech-sector demand generation. Experienced marketing leader specializing in tech sectors to drive growth.",
    avatar: "",
    linkedIn: "https://www.linkedin.com/in/mbilalkkhan/",
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

/** True for Marketing / Digital Marketing (and close variants). */
export function isMarketingBlogCategory(category?: string | null): boolean {
  if (!category) return false;
  const normalized = category.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  if (!normalized) return false;
  if (normalized.includes("digital marketing")) return true;
  if (normalized === "marketing") return true;
  if (normalized.startsWith("marketing ")) return true;
  if (normalized.endsWith(" marketing")) return true;
  return /\bmarketing\b/.test(normalized);
}

function pickAuthorSlug(slugs: readonly string[], salt: string): string {
  let hash = 0;
  for (let i = 0; i < salt.length; i += 1) {
    hash = (hash * 31 + salt.charCodeAt(i)) >>> 0;
  }
  return slugs[hash % slugs.length] ?? slugs[0];
}

/**
 * Resolve which author appears on a post.
 * Explicit authorSlug wins; otherwise Marketing / Digital Marketing posts
 * rotate between Waqas Raza and Bilal Khan.
 */
export function resolveBlogAuthorSlug(options: {
  authorSlug?: string | null;
  category?: string | null;
  /** Stable salt for rotation — usually the post slug */
  salt?: string | null;
}): string {
  const explicit = options.authorSlug?.trim();
  if (explicit && BLOG_AUTHORS[explicit]) {
    return explicit;
  }

  if (isMarketingBlogCategory(options.category)) {
    return pickAuthorSlug(
      MARKETING_BLOG_AUTHOR_SLUGS,
      options.salt?.trim() || options.category?.trim() || "marketing",
    );
  }

  return DEFAULT_BLOG_AUTHOR_SLUG;
}
