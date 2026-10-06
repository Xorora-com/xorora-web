import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuthorPageHeader } from "@/components/blog/author-page-header";
import { BlogCardGrid } from "@/components/blog/blog-card-grid";
import { LightSection } from "@/components/case-study/light-section";
import {
  getBlogAuthor,
  listBlogAuthors,
  listPublishedBlogPostsByAuthor,
} from "@/lib/blog";
import { ROUTES } from "@/lib/navigation";
import { SITE_URL } from "@/lib/site-url";

export const dynamic = "force-dynamic";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = listBlogAuthors().find((item) => item.slug === slug);
  if (!author) return {};

  const url = ROUTES.author(author.slug);
  return {
    title: `${author.name} | Xorora Blog`,
    description: author.bio,
    alternates: { canonical: url },
    openGraph: {
      title: `${author.name} | Xorora Blog`,
      description: author.bio,
      url,
      siteName: "Xorora",
      type: "profile",
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const known = listBlogAuthors().find((item) => item.slug === slug);
  if (!known) {
    notFound();
  }

  const author = getBlogAuthor(slug);
  const posts = await listPublishedBlogPostsByAuthor(author.slug);
  const authorUrl = `${SITE_URL}${ROUTES.author(author.slug)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.title,
    description: author.bio,
    url: authorUrl,
    worksFor: {
      "@type": "Organization",
      name: "Xorora",
      url: SITE_URL,
    },
    ...(author.linkedIn ? { sameAs: [author.linkedIn] } : {}),
    ...(author.avatar ? { image: `${SITE_URL}${author.avatar}` } : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}${ROUTES.blog}`,
      },
      { "@type": "ListItem", position: 3, name: author.name, item: authorUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AuthorPageHeader author={author} articleCount={posts.length} />

      <LightSection bg="var(--surface)" className="!pt-2">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-[11px] text-fg3 uppercase tracking-[0.16em]">
              Blogs
            </p>
            <h2 className="m-0 font-bold font-sans text-[clamp(24px,3vw,32px)] text-fg1 tracking-[-0.02em]">
              Articles by {author.name}
            </h2>
          </div>
          <span className="font-sans text-fg3 text-sm">
            {posts.length} article{posts.length === 1 ? "" : "s"}
          </span>
        </div>
        <BlogCardGrid posts={posts} hideAuthor initialCount={9} />
      </LightSection>
    </>
  );
}
