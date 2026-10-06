import Image from "next/image";
import { BlogArticleList } from "@/components/blog/blog-article-list";
import { BlogAuthorCard } from "@/components/blog/blog-author-card";
import { BlogBreadcrumb } from "@/components/blog/blog-breadcrumb";
import { BlogNewsletter } from "@/components/blog/blog-newsletter";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { BLOG_HERO_IMAGE_SIZES } from "@/lib/blog/image";
import type { BlogPost } from "@/lib/blog/types";
import { blogImageAlt, blogImageTitle } from "@/lib/image-seo";
import { ROUTES } from "@/lib/navigation";
import { SITE_URL } from "@/lib/site-url";
import { BlogAiSummary } from "./blog-ai-summary";
import { BlogQuoteModalProvider } from "./blog-quote-modal";
import { BlogShare } from "./blog-share";
import { BlogToc } from "./blog-toc";

interface BlogPostLayoutProps {
  post: BlogPost;
  article: BlogArticleMeta;
  shareUrl: string;
  relatedPosts?: BlogPost[];
  children: React.ReactNode;
}

export function BlogPostLayout({
  post,
  article,
  shareUrl,
  relatedPosts = [],
  children,
}: BlogPostLayoutProps) {
  const url = shareUrl.startsWith("http") ? shareUrl : `${SITE_URL}${shareUrl}`;

  return (
    <BlogQuoteModalProvider source={post.slug}>
      <article className="bg-surface">
        <header className="px-8 pt-[clamp(120px,14vw,160px)] pb-8">
          <div className="mx-auto max-w-[1180px]">
            <BlogBreadcrumb
              items={[
                { label: "Home", href: ROUTES.home },
                { label: "Blog", href: ROUTES.blog },
                { label: post.cat },
                { label: post.title },
              ]}
            />
            <h1 className="m-0 mb-5 max-w-[920px] text-balance font-extrabold font-sans text-[clamp(32px,4.6vw,56px)] text-fg1 leading-[1.08] tracking-[-0.03em]">
              {post.title}
            </h1>
            <p className="m-0 mb-6 max-w-[720px] font-sans text-[clamp(17px,2vw,20px)] text-fg2 leading-relaxed">
              {post.excerpt}
            </p>
            <BlogAuthorCard
              authorSlug={post.authorSlug}
              publishedAt={post.publishedAt}
              updatedAt={post.updatedAt}
            />
          </div>
        </header>

        <div className="px-8 pb-10">
          <div className="relative z-0 mx-auto aspect-video max-w-[1180px] overflow-hidden rounded-(--r-xl) border border-border bg-white">
            <Image
              src={post.img}
              alt={blogImageAlt(post.title)}
              title={blogImageTitle(post.excerpt, post.cat)}
              fill
              priority
              unoptimized
              sizes={BLOG_HERO_IMAGE_SIZES}
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="px-8 pb-[clamp(48px,6vw,80px)]">
          <div className="blog-post-grid mx-auto grid max-w-[1180px] grid-cols-[240px_1fr] items-start gap-[clamp(28px,4vw,56px)]">
            <aside className="blog-post-toc sticky top-[110px] isolate z-30">
              <BlogToc items={article.toc} />
              <div className="blog-post-toc-desktop">
                <BlogShare url={url} title={article.seoTitle} />
                <BlogAiSummary summary={article.aiSummary} />
              </div>
            </aside>
            <div className="relative z-0 min-w-0">
              <div className="blog-post-toc-mobile">
                <BlogShare url={url} title={article.seoTitle} />
                <BlogAiSummary summary={article.aiSummary} />
              </div>
              {children}
              <BlogShare url={url} title={article.seoTitle} />
              {relatedPosts.length > 0 ? (
                <section className="mt-12">
                  <p className="mb-2 font-mono text-[11px] text-fg3 uppercase tracking-[0.16em]">
                    Related
                  </p>
                  <h2 className="m-0 mb-5 font-bold font-sans text-[clamp(22px,2.6vw,28px)] text-fg1 tracking-[-0.02em]">
                    Related articles
                  </h2>
                  <BlogArticleList posts={relatedPosts} />
                </section>
              ) : null}
            </div>
          </div>
        </div>
      </article>
      <BlogNewsletter />
    </BlogQuoteModalProvider>
  );
}
