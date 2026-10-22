import { asc, eq } from "drizzle-orm";
import { db, hasDatabaseUrl } from "@/lib/db";
import { industries } from "@/lib/db/schema";
import { XO_NAV } from "@/lib/navigation";
import { INDUSTRIES } from "./data";
import type {
  Industry,
  IndustryHero,
  IndustrySection,
  IndustrySlug,
} from "./types";

function mapIndustry(row: typeof industries.$inferSelect): Industry {
  return {
    slug: row.slug as IndustrySlug,
    name: row.name,
    metaTitle: row.metaTitle,
    metaDescription: row.metaDescription,
    headerBg: row.headerBg,
    hero: row.hero as IndustryHero,
    sections: row.sections as IndustrySection[],
  };
}

export interface IndustryNavItem {
  slug: IndustrySlug;
  name: string;
  icon: string;
  desc: string;
  href: string;
  headerBg: string;
  metaTitle: string;
}

function staticIndustryNavItems(): IndustryNavItem[] {
  const byHref = new Map(
    XO_NAV.industries.map((item) => [item.href, item] as const),
  );

  return Object.values(INDUSTRIES).map((industry) => {
    const nav = byHref.get(`/industries/${industry.slug}`);
    return {
      slug: industry.slug,
      name: nav?.name ?? industry.name,
      icon: nav?.icon ?? "layout-grid",
      desc: nav?.desc ?? industry.metaDescription,
      href: `/industries/${industry.slug}`,
      headerBg: industry.headerBg,
      metaTitle: industry.metaTitle,
    };
  });
}

export async function listPublishedIndustryNavItems(): Promise<
  IndustryNavItem[]
> {
  if (!hasDatabaseUrl()) {
    return staticIndustryNavItems();
  }

  try {
    const rows = await db
      .select()
      .from(industries)
      .where(eq(industries.status, "published"))
      .orderBy(asc(industries.sortOrder));

    if (rows.length === 0) {
      return staticIndustryNavItems();
    }

    return rows.map((row) => ({
      slug: row.slug as IndustrySlug,
      name: row.navName,
      icon: row.navIcon,
      desc: row.navDescription,
      href: `/industries/${row.slug}`,
      headerBg: row.headerBg,
      metaTitle: row.metaTitle,
    }));
  } catch {
    return staticIndustryNavItems();
  }
}

export async function getPublishedIndustrySlugs(): Promise<IndustrySlug[]> {
  if (!hasDatabaseUrl()) {
    return staticIndustryNavItems().map((item) => item.slug);
  }

  try {
    const rows = await db
      .select({ slug: industries.slug })
      .from(industries)
      .where(eq(industries.status, "published"))
      .orderBy(asc(industries.sortOrder));

    if (rows.length === 0) {
      return staticIndustryNavItems().map((item) => item.slug);
    }

    return rows.map((row) => row.slug as IndustrySlug);
  } catch {
    return staticIndustryNavItems().map((item) => item.slug);
  }
}

export async function getAllIndustrySlugs(): Promise<IndustrySlug[]> {
  return getPublishedIndustrySlugs();
}

export async function getIndustryBySlug(
  slug: string,
): Promise<Industry | null> {
  if (hasDatabaseUrl()) {
    try {
      const [row] = await db
        .select()
        .from(industries)
        .where(eq(industries.slug, slug))
        .limit(1);

      if (row && row.status === "published") {
        return mapIndustry(row);
      }
    } catch {
      // Fall through to static industry data when Neon is unavailable.
    }
  }

  return INDUSTRIES[slug as IndustrySlug] ?? null;
}
