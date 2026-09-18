import { and, asc, eq, inArray, notInArray } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  caseStudies,
  caseStudyMetrics,
  caseStudySections,
} from "@/lib/db/schema";
import { INDUSTRY_CASE_IMAGES } from "./industry-images";
import { isRetiredCaseStudySlug, RETIRED_CASE_STUDY_SLUGS } from "./retired";
import {
  getStaticIndustryCaseStudyBySlug,
  mergeCaseStudyListItems,
} from "./static-industry";
import type {
  CaseStudy,
  CaseStudyListItem,
  CaseStudySectionContent,
  CaseStudySummary,
} from "./types";

function applyIndustryImageOverridesToSummary<
  T extends { slug: string; heroImage: string },
>(study: T): T {
  const images = INDUSTRY_CASE_IMAGES[study.slug];
  if (!images) return study;
  return { ...study, heroImage: images.hero.src };
}

function applyIndustryImageOverrides(study: CaseStudy): CaseStudy {
  const images = INDUSTRY_CASE_IMAGES[study.slug];
  if (!images) return study;

  return {
    ...study,
    heroImage: images.hero.src,
    sections: study.sections.map((section) => {
      if (section.type !== "overview" || !section.content.image) {
        return section;
      }
      return {
        ...section,
        content: {
          ...section.content,
          image: {
            ...section.content.image,
            src: images.overview.src,
            alt: images.overview.alt,
          },
        },
      };
    }),
  };
}

function mapSummary(row: typeof caseStudies.$inferSelect): CaseStudySummary {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle,
    tags: row.tags,
    category: row.category,
    lead: row.lead,
    heroImage: row.heroImage,
    headerBg: row.headerBg,
    featured: row.featured === 1,
    sortOrder: row.sortOrder,
    publishedAt: row.publishedAt,
  };
}

async function loadCaseStudyWithRelations(
  study: typeof caseStudies.$inferSelect,
): Promise<CaseStudy> {
  const [metrics, sections] = await Promise.all([
    db
      .select()
      .from(caseStudyMetrics)
      .where(eq(caseStudyMetrics.caseStudyId, study.id))
      .orderBy(asc(caseStudyMetrics.sortOrder)),
    db
      .select()
      .from(caseStudySections)
      .where(eq(caseStudySections.caseStudyId, study.id))
      .orderBy(asc(caseStudySections.sortOrder)),
  ]);

  return {
    ...mapSummary(study),
    heroUrl: study.heroUrl,
    status: study.status,
    metaTitle: study.metaTitle,
    metaDescription: study.metaDescription,
    createdAt: study.createdAt,
    updatedAt: study.updatedAt,
    metrics: metrics.map((metric) => ({
      id: metric.id,
      value: metric.value,
      label: metric.label,
      note: metric.note,
      sortOrder: metric.sortOrder,
    })),
    sections: sections.map((section) => ({
      id: section.id,
      type: section.type,
      content: section.content as CaseStudySectionContent,
      sortOrder: section.sortOrder,
    })),
  };
}

export async function listPublishedCaseStudies(): Promise<CaseStudyListItem[]> {
  try {
    const rows = await db
      .select()
      .from(caseStudies)
      .where(
        and(
          eq(caseStudies.status, "published"),
          notInArray(caseStudies.slug, [...RETIRED_CASE_STUDY_SLUGS]),
        ),
      )
      .orderBy(asc(caseStudies.sortOrder));

    if (rows.length === 0) {
      return mergeCaseStudyListItems([]);
    }

    const studyIds = rows.map((row) => row.id);
    const metricRows = await db
      .select()
      .from(caseStudyMetrics)
      .where(inArray(caseStudyMetrics.caseStudyId, studyIds))
      .orderBy(asc(caseStudyMetrics.sortOrder));

    const metricsByStudyId = new Map<
      string,
      Array<{ value: string; label: string }>
    >();

    for (const metric of metricRows) {
      const existing = metricsByStudyId.get(metric.caseStudyId) ?? [];
      existing.push({ value: metric.value, label: metric.label });
      metricsByStudyId.set(metric.caseStudyId, existing);
    }

    const dbItems = rows.map((row) =>
      applyIndustryImageOverridesToSummary({
        ...mapSummary(row),
        metaTitle: row.metaTitle,
        metrics: metricsByStudyId.get(row.id) ?? [],
      }),
    );

    return mergeCaseStudyListItems(dbItems);
  } catch {
    return mergeCaseStudyListItems([]);
  }
}

export async function getFeaturedCaseStudy(): Promise<CaseStudy | null> {
  const [study] = await db
    .select()
    .from(caseStudies)
    .where(
      and(
        eq(caseStudies.status, "published"),
        eq(caseStudies.featured, 1),
        notInArray(caseStudies.slug, [...RETIRED_CASE_STUDY_SLUGS]),
      ),
    )
    .orderBy(asc(caseStudies.sortOrder))
    .limit(1);

  if (!study) {
    return null;
  }

  return applyIndustryImageOverrides(await loadCaseStudyWithRelations(study));
}

export async function getCaseStudyBySlug(
  slug: string,
): Promise<CaseStudy | null> {
  if (isRetiredCaseStudySlug(slug)) {
    return null;
  }

  try {
    const [study] = await db
      .select()
      .from(caseStudies)
      .where(
        and(eq(caseStudies.slug, slug), eq(caseStudies.status, "published")),
      )
      .limit(1);

    if (study) {
      return applyIndustryImageOverrides(
        await loadCaseStudyWithRelations(study),
      );
    }
  } catch {
    // Fall through to static industry data.
  }

  return getStaticIndustryCaseStudyBySlug(slug);
}

export async function listPublishedCaseStudiesBySlugs(
  slugs: string[],
): Promise<CaseStudyListItem[]> {
  if (slugs.length === 0) {
    return [];
  }

  const all = await listPublishedCaseStudies();
  const bySlug = new Map(all.map((study) => [study.slug, study]));
  return slugs
    .map((slug) => bySlug.get(slug))
    .filter((study): study is CaseStudyListItem => Boolean(study));
}
