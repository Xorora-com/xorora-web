import { ArrowUpRight, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogBreadcrumb } from "@/components/blog/blog-breadcrumb";
import { getAuthorInitials, type BlogAuthor } from "@/lib/blog/authors";
import { ROUTES } from "@/lib/navigation";

interface AuthorPageHeaderProps {
  author: BlogAuthor;
  articleCount: number;
}

export function AuthorPageHeader({
  author,
  articleCount,
}: AuthorPageHeaderProps) {
  const initials = getAuthorInitials(author.name);

  return (
    <section className="relative overflow-hidden">
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_60%_at_88%_40%,rgba(70,76,159,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-[1180px] items-end gap-6 px-8 pt-[clamp(112px,16vw,148px)] pb-0 sm:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,420px)] lg:gap-10">
        <div className="order-2 pb-[clamp(36px,5vw,64px)] lg:order-1">
          <BlogBreadcrumb
            className="mb-6 sm:mb-7"
            items={[
              { label: "Home", href: ROUTES.home },
              { label: "Blog", href: ROUTES.blog },
              { label: author.name },
            ]}
          />

          <h1 className="m-0 mb-3 max-w-[520px] font-extrabold font-sans text-[clamp(36px,5vw,56px)] text-indigo-800 leading-[1.05] tracking-[-0.03em]">
            {author.name}
          </h1>
          <p className="m-0 mb-6 font-sans font-medium text-[clamp(17px,2vw,20px)] text-indigo-700 sm:mb-7">
            {author.title}
          </p>

          <div className="flex flex-wrap items-center gap-3">
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

          <p className="mt-6 mb-0 max-w-[540px] font-sans text-[16px] text-fg2 leading-relaxed sm:mt-7">
            {author.bio}
          </p>
        </div>

        <div className="relative order-1 mx-auto flex w-full max-w-[300px] items-end justify-center self-end sm:max-w-[340px] lg:order-2 lg:mx-0 lg:max-w-none">
          {author.avatar ? (
            <Image
              src={author.avatar}
              alt={author.name}
              width={512}
              height={637}
              priority
              className="h-[clamp(260px,55vw,420px)] w-auto max-w-full object-contain object-bottom drop-shadow-[0_18px_40px_rgba(26,28,58,0.18)] lg:h-[clamp(340px,42vw,460px)]"
              sizes="(max-width: 1024px) 300px, 420px"
            />
          ) : (
            <div
              className="mb-8 flex h-[180px] w-[180px] items-center justify-center rounded-full border-4 border-white bg-indigo-50 font-sans font-bold text-[52px] text-xo-indigo shadow-sm lg:mb-10 lg:h-[220px] lg:w-[220px] lg:text-[64px]"
              aria-hidden
            >
              {initials}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
