import type { Metadata } from "next";
import {
  BlogBody,
  BlogContact,
  BlogHeader,
  BlogNewsletter,
} from "@/components/blog";
import { listPublishedBlogPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Engineering Blog | Guides, Comparisons & Production AI | Xorora",
  description:
    "Field notes on shipping production software — comparisons, practices, and lessons from the systems we build.",
  keywords: [
    "software development blog",
    "python development companies",
    "top python web development company",
    "top node js development company",
    "node.js development companies",
    "custom AI development services",
  ],
  alternates: { canonical: "/blog" },
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
