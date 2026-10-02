import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCardGrid } from "@/components/blog/blog-card-grid";
import { LightSection } from "@/components/case-study/light-section";
import {
  getAuthorInitials,
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
  const initials = getAuthorInitials(author.name);
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-surface px-8 pt-[clamp(120px,14vw,160px)] pb-10">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-4 font-mono text-[11px] text-tangerine-600 uppercase tracking-[0.16em]">
            Author
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            {author.avatar ? (
              <Image
                src={author.avatar}
                alt={author.name}
                width={112}
                height={112}
                className="h-28 w-28 rounded-full border border-border object-cover"
              />
            ) : (
              <span
                className="inline-flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50 font-sans font-bold text-[32px] text-xo-indigo"
                aria-hidden
              >
                {initials}
              </span>
            )}
            <div>
              <h1 className="m-0 mb-2 font-extrabold font-sans text-[clamp(32px,4vw,48px)] text-fg1 tracking-[-0.03em]">
                {author.name}
              </h1>
              <p className="m-0 mb-4 font-sans font-semibold text-[16px] text-xo-indigo">
                {author.title}
              </p>
              <p className="m-0 max-w-[640px] font-sans text-[16.5px] text-fg2 leading-relaxed">
                {author.bio}
              </p>
              {author.linkedIn ? (
                <p className="mt-4">
                  <Link
                    href={author.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-semibold text-[14.5px] text-accent no-underline hover:text-tangerine-600"
                  >
                    LinkedIn profile
                  </Link>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <LightSection bg="var(--surface)" className="!pt-0">
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
        <BlogCardGrid posts={posts} hideAuthor />
      </LightSection>
    </>
  );
}
