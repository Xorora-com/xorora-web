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
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[clamp(200px,28vw,280px)]"
        style={{
          background:
            "linear-gradient(135deg, #1a1c3a 0%, #2f336b 42%, #464c9f 78%, #6b70b6 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_15%_20%,rgba(255,255,255,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_70%_at_90%_10%,rgba(242,107,33,0.22),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-surface" />
      </div>

      <div className="relative mx-auto max-w-[900px] px-8 pt-[clamp(112px,14vw,148px)] pb-10">
        <BlogBreadcrumb
          tone="onDark"
          className="mb-8"
          items={[
            { label: "Home", href: ROUTES.home },
            { label: "Blog", href: ROUTES.blog },
            { label: author.name },
          ]}
        />

        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:text-left">
          <div className="relative shrink-0 rounded-full bg-surface p-1.5 shadow-[0_12px_32px_rgba(8,8,13,0.18)]">
            <AuthorAvatar author={author} size={148} />
          </div>

          <div className="min-w-0 flex-1 pb-1">
            <p className="m-0 mb-2 font-mono text-[11px] text-tangerine-600 uppercase tracking-[0.16em]">
              Author
            </p>
            <h1 className="m-0 mb-2 font-extrabold font-sans text-[clamp(32px,4vw,48px)] text-fg1 tracking-[-0.03em]">
              {author.name}
            </h1>
            <div className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:justify-start">
              <p className="m-0 font-sans font-semibold text-[16px] text-xo-indigo">
                {author.title}
              </p>
              <span
                aria-hidden
                className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block"
              />
              <span className="font-sans text-[14px] text-fg3">
                {articleCount} article{articleCount === 1 ? "" : "s"}
              </span>
              {author.linkedIn ? (
                <>
                  <span
                    aria-hidden
                    className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block"
                  />
                  <Link
                    href={author.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-semibold text-[14px] text-accent no-underline hover:text-tangerine-600"
                  >
                    LinkedIn
                  </Link>
                </>
              ) : null}
            </div>
            <p className="m-0 mx-auto max-w-[640px] font-sans text-[16.5px] text-fg2 leading-relaxed sm:mx-0">
              {author.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
