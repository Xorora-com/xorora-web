import { createBrandedOgImage } from "@/lib/og/branded-og-image";

export {
  OG_CONTENT_TYPE,
  OG_SIZE,
} from "@/lib/og/branded-og-image";

/** Our Work share card — full logo via shared branded renderer. */
export function OurWorkOgImage() {
  return createBrandedOgImage({
    eyebrow: "Case Studies",
    title: "Work that ships and scales.",
    subtitle:
      "Production software, AI platforms, and marketplace launches — engineered end-to-end.",
  });
}
