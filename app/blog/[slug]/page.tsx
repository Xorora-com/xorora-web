import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostLayout } from "@/components/blog/post";
import {
  type BlogPost,
  getBlogAuthor,
  getPublishedBlogPostBySlug,
  listRelatedBlogPosts,
} from "@/lib/blog";
import {
  type BlogArticleDefinition,
  getBlogArticle,
} from "@/lib/blog/articles";
import { ROUTES } from "@/lib/navigation";
import { SITE_URL } from "@/lib/site-url";

export const dynamic = "force-dynamic";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogPostBySlug(slug);
  const article = getBlogArticle(slug);

  if (!post || !article) {
    return {};
  }

  const url = ROUTES.blogPost(slug);
  const author = getBlogAuthor(post.authorSlug);

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: article.keywords,
    alternates: { canonical: url },
    authors: [{ name: author.name, url: ROUTES.author(author.slug) }],
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url,
      siteName: "Xorora",
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      images: post.img ? [{ url: post.img }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
      images: post.img ? [post.img] : undefined,
    },
  };
}

function buildJsonLd(post: BlogPost, article: BlogArticleDefinition) {
  const url = `${SITE_URL}${ROUTES.blogPost(post.slug)}`;
  const image = post.img.startsWith("http")
    ? post.img
    : `${SITE_URL}${post.img}`;
  const author = getBlogAuthor(post.authorSlug);
  const authorUrl = `${SITE_URL}${ROUTES.author(author.slug)}`;

  const blogPosting = {
    "@type": "BlogPosting",
    headline: article.seoTitle,
    description: article.seoDescription,
    image,
    keywords: article.keywords.join(", "),
    datePublished: post.publishedAt?.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    mainEntityOfPage: url,
    url,
    author: {
      "@type": "Person",
      name: author.name,
      url: authorUrl,
      jobTitle: author.title,
    },
    publisher: { "@type": "Organization", name: "Xorora", url: SITE_URL },
    articleSection: post.cat,
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}${ROUTES.blog}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.cat,
        item: `${SITE_URL}${ROUTES.blog}`,
      },
      { "@type": "ListItem", position: 4, name: article.seoTitle, item: url },
    ],
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: article.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const itemList = {
    "@type": "ItemList",
    name: article.seoTitle,
    itemListElement: article.companies.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [blogPosting, breadcrumb, faq, itemList],
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPublishedBlogPostBySlug(slug);
  const article = getBlogArticle(slug);

  if (!post || !article) {
    notFound();
  }

  const relatedPosts = await listRelatedBlogPosts(post.slug, post.cat);
  const jsonLd = buildJsonLd(post, article);
  const Article = article.Article;

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        post={post}
        article={article}
        shareUrl={ROUTES.blogPost(slug)}
        relatedPosts={relatedPosts}
      >
        <Article />
      </BlogPostLayout>
    </>
  );
}
