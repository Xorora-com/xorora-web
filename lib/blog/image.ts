/** Display quality for blog feature/hero graphics (text-heavy designs). */
export const BLOG_FEATURE_IMAGE_QUALITY = 95;

/**
 * Post hero sits in a max 1180px frame; request ~2x for retina so Next
 * picks the 2048/2400 device size instead of a soft mid-tier resize.
 */
export const BLOG_HERO_IMAGE_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1180px) 100vw, 2400px";

/**
 * Listing cards are roughly half-width on desktop; ask for ~2x so text
 * in feature graphics stays crisp on retina displays.
 */
export const BLOG_CARD_IMAGE_SIZES =
  "(max-width: 640px) 100vw, (max-width: 960px) 50vw, 760px";
