import type { Metadata } from "next";
import {
  IndContact,
  IndGrid,
  IndHeader,
  IndProcess,
  IndRevealObserver,
} from "@/components/industries";
import { listIndustryNames } from "@/lib/navigation/server";

const TITLE = "Industries We Serve | Xorora";
const DESCRIPTION =
  "Xorora builds custom software and AI for nine industries, from healthcare and fintech to travel and startups. Explore our work and start your project.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/industries" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/industries",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default async function IndustriesPage() {
  const industryNames = await listIndustryNames();

  return (
    <div className="bg-surface">
      <IndRevealObserver />
      <IndHeader />
      <IndGrid />
      <IndProcess />
      <IndContact industryNames={industryNames} />
    </div>
  );
}
