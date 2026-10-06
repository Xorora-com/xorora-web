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
  async headers() {
    return [
      {
        source: "/assets/_noindex/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      ...legacyRedirectsForNextConfig(),
      {
        source: "/author/alex-rivera",
        destination: "/author/zarrar-ahmad",
        permanent: true,
      },
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
      // Retired case studies
      {
        source: "/case-studies/unified-ai-voice-operations",
        destination: "/",
        permanent: true,
      },
      {
        source: "/case-studies/real-time-compliance-intelligence",
        destination: "/",
        permanent: true,
      },
      {
        source: "/case-studies/real-time-saas-event-monitoring",
        destination: "/",
        permanent: true,
      },
      // Retired Solutions products
      {
        source: "/solutions",
        destination: "/",
        permanent: true,
      },
      {
        source: "/solutions/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
