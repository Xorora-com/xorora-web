import type { Metadata } from "next";
import { WorkContact, WorkHeader, WorkTiles } from "@/components/our-work";
import { listPublishedCaseStudies } from "@/lib/case-studies";

/** Case study index is DB-backed — render on each request. */
export const dynamic = "force-dynamic";

const TITLE = "Our Work — Case Studies | Xorora";
const DESCRIPTION =
  "Production software, AI platforms, and Amazon marketplace launches. Explore case studies across development and Amazon AU growth work.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/our-work",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default async function OurWorkPage() {
  const studies = await listPublishedCaseStudies();

  return (
    <div className="bg-surface">
      <WorkHeader />
      <WorkTiles studies={studies} />
      <WorkContact />
    </div>
  );
}
