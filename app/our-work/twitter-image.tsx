import { OG_CONTENT_TYPE, OG_SIZE, OurWorkOgImage } from "./og-image";

export const runtime = "nodejs";
export const alt = "Xorora Our Work — Work that ships and scales.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return OurWorkOgImage();
}
