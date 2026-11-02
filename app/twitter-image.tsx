import {
  createBrandedOgImage,
  OG_CONTENT_TYPE,
  OG_SIZE,
} from "@/lib/og/branded-og-image";

export const runtime = "nodejs";
export const alt = "Xorora — Your AI Development Partner";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createBrandedOgImage({
    eyebrow: "Xorora",
    title: "Your AI Development Partner",
    subtitle:
      "Production AI and software, built by a partner who ships — from the first prototype to the system your business runs on.",
  });
}
