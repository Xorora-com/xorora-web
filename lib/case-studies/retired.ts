/** Case studies retired from the public site (redirect to home). */
export const RETIRED_CASE_STUDY_SLUGS = [
  "unified-ai-voice-operations",
  "real-time-compliance-intelligence",
  "real-time-saas-event-monitoring",
] as const;

export type RetiredCaseStudySlug = (typeof RETIRED_CASE_STUDY_SLUGS)[number];

export function isRetiredCaseStudySlug(slug: string): boolean {
  return (RETIRED_CASE_STUDY_SLUGS as readonly string[]).includes(slug);
}
