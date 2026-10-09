import { ArrowUpRight, Linkedin } from "lucide-react";
import Link from "next/link";
import { AuthorAvatar } from "@/components/blog/author-avatar";
import { BlogBreadcrumb } from "@/components/blog/blog-breadcrumb";
import type { BlogAuthor } from "@/lib/blog/authors";
import { ROUTES } from "@/lib/navigation";

interface AuthorPageHeaderProps {
  author: BlogAuthor;
  articleCount: number;
}

export function AuthorPageHeader({
  author,
  articleCount,
}: AuthorPageHeaderProps) {
  return (
    <section className="relative overflow-x-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, #f6f7fb 0%, #eeeff8 38%, #dddff0 72%, #eeeff8 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[20%] right-[-8%] h-[140%] w-[58%] rotate-[-18deg] rounded-[48px] bg-indigo-100/70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[8%] right-[18%] h-[70%] w-[36%] rotate-[-18deg] rounded-[40px] bg-indigo-200/35"
      />

      <div className="relative mx-auto max-w-[1180px] px-8 pt-[clamp(112px,16vw,148px)] pb-[clamp(40px,6vw,64px)]">
        <BlogBreadcrumb
          className="mb-8"
          items={[
            { label: "Home", href: ROUTES.home },
            { label: "Blog", href: ROUTES.blog },
            { label: author.name },
          ]}
        />

        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
          <AuthorAvatar author={author} size={128} />

          <div className="min-w-0 flex-1">
            <h1 className="m-0 mb-2 font-extrabold font-sans text-[clamp(32px,4.5vw,48px)] text-indigo-800 leading-[1.05] tracking-[-0.03em]">
              {author.name}
            </h1>
            <p className="m-0 mb-5 font-sans font-medium text-[clamp(16px,2vw,18px)] text-indigo-700">
              {author.title}
            </p>

            <div className="mb-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              {author.linkedIn ? (
                <Link
                  href={author.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-(--r-md) bg-indigo-800 px-4 py-3 font-sans font-semibold text-[14.5px] text-white no-underline shadow-sm transition-colors hover:bg-indigo-700"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                  LinkedIn Profile
                  <ArrowUpRight className="h-4 w-4 opacity-90" aria-hidden />
                </Link>
              ) : null}
              <span className="font-sans text-[14px] text-fg3">
                {articleCount} article{articleCount === 1 ? "" : "s"}
              </span>
            </div>

            <p className="m-0 mx-auto max-w-[640px] font-sans text-[16px] text-fg2 leading-relaxed sm:mx-0">
              {author.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
