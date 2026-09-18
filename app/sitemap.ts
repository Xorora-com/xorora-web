import type { MetadataRoute } from "next";
import { AMAZON_A_TO_Z_PATH } from "@/lib/amazon-a-to-z";
import { AMAZON_INDEXED_PATHS } from "@/lib/amazon-a-to-z-seo";
import { listPublishedBlogPosts } from "@/lib/blog";
import { listPublishedCaseStudies } from "@/lib/case-studies";
import { getAllIndustrySlugs } from "@/lib/industries";
import { ROUTES } from "@/lib/navigation";
import { SITE_URL } from "@/lib/site-url";

export const dynamic = "force-dynamic";

function entry(
  path: string,
  priority: number,
  lastModified?: Date,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: lastModified ?? new Date(),
    changeFrequency: "weekly",
    priority,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [industrySlugs, caseStudies, posts] = await Promise.all([
    getAllIndustrySlugs(),
    listPublishedCaseStudies(),
    listPublishedBlogPosts(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    entry(ROUTES.home, 1.0),
    entry(ROUTES.engineering, 0.8),
    entry(ROUTES.aiSoftwareDevelopment, 0.8),
    entry(ROUTES.customAppDevelopment, 0.8),
    entry(ROUTES.applicationModernization, 0.8),
    entry(ROUTES.mvpPocDevelopment, 0.8),
    entry(ROUTES.cmsDevelopment, 0.8),
    entry(ROUTES.uiUxServices, 0.8),
    entry(ROUTES.pythonWebDevelopment, 0.8),
    entry(ROUTES.pythonApplicationDevelopment, 0.8),
    entry(ROUTES.nodejsWebDevelopment, 0.8),
    entry(ROUTES.laravelWebsiteDevelopment, 0.8),
    entry(ROUTES.customDotnetDevelopment, 0.8),
    entry(ROUTES.djangoDevelopmentCompany, 0.8),
    entry(ROUTES.flutterMobileAppDevelopment, 0.8),
    entry(ROUTES.javaWebDevelopment, 0.8),
    entry(ROUTES.consulting, 0.8),
    entry(ROUTES.discoveryWorkshop, 0.8),
    entry(ROUTES.aiConsultation, 0.8),
    entry(ROUTES.digitalTransformation, 0.8),
    entry(ROUTES.ai, 0.8),
    entry(ROUTES.aiAgentDevelopment, 0.8),
    entry(ROUTES.mlDataScience, 0.8),
    entry(ROUTES.workflowAutomation, 0.8),
    entry(ROUTES.managedServices, 0.8),
    entry(ROUTES.devops, 0.8),
    entry(ROUTES.cybersecurity, 0.8),
    entry(ROUTES.itInfrastructure, 0.8),
    entry(ROUTES.marketingServices, 0.8),
    entry(ROUTES.seoServices, 0.8),
    entry(ROUTES.localSeoServices, 0.8),
    entry(ROUTES.googleAdsServices, 0.8),
    entry(ROUTES.metaAdsServices, 0.8),
    entry(ROUTES.socialMediaManagement, 0.8),
    entry(ROUTES.b2bMarketingServices, 0.8),
    ...AMAZON_INDEXED_PATHS.map((path) =>
      entry(path, path === AMAZON_A_TO_Z_PATH ? 0.85 : 0.8),
    ),
    entry(ROUTES.staffAugmentation, 0.8),
    entry(ROUTES.about, 0.7),
    entry(ROUTES.howWeWork, 0.7),
    entry(ROUTES.ourWork, 0.7),
    entry(ROUTES.industries, 0.7),
    entry(ROUTES.contact, 0.7),
    entry(ROUTES.blog, 0.7),
    entry("/privacy", 0.3),
    entry("/terms", 0.3),
  ];

  const industryRoutes: MetadataRoute.Sitemap = industrySlugs.map((slug) =>
    entry(ROUTES.industry(slug), 0.7),
  );

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) =>
    entry(ROUTES.caseStudy(study.slug), 0.7, study.publishedAt ?? undefined),
  );

  const blogPostRoutes: MetadataRoute.Sitemap = posts.map((post) =>
    entry(ROUTES.blogPost(post.slug), 0.7, post.publishedAt ?? post.updatedAt),
  );

  return [
    ...staticRoutes,
    ...industryRoutes,
    ...caseStudyRoutes,
    ...blogPostRoutes,
  ];
}
