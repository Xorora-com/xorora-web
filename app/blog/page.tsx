import type { Metadata } from "next";
import {
  BlogBody,
  BlogContact,
  BlogHeader,
  BlogNewsletter,
} from "@/components/blog";
import { listPublishedBlogPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

const TITLE =
  "Engineering Blog | Guides, Comparisons & Production AI | Xorora";
const DESCRIPTION =
  "Field notes on shipping production software — comparisons, practices, and lessons from the systems we build.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "software development blog",
    "python development companies",
    "top python web development company",
    "top node js development company",
    "node.js development companies",
    "custom AI development services",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/blog",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default async function BlogPage() {
  const posts = await listPublishedBlogPosts();

  return (
    <div className="bg-surface">
      <BlogHeader />
      <BlogBody posts={posts} />
      <BlogNewsletter />
      <BlogContact />
    </div>
  );
}
