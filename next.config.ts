import type { NextConfig } from "next";
import { legacyRedirectsForNextConfig } from "./lib/legacy-redirects";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
    // WebP over AVIF: AVIF softens sharp text in blog/feature graphics.
    formats: ["image/webp"],
    qualities: [75, 85, 90, 95, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2048, 2400],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750],
  },
  async redirects() {
    return [
      ...legacyRedirectsForNextConfig(),
      {
        source: "/data-ai",
        destination: "/ai",
        permanent: true,
      },
      {
        source: "/engagement-models",
        destination: "/",
        permanent: true,
      },
      {
        source: "/engagement-models/staff-augmentation-services",
        destination: "/consulting/staff-augmentation-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
