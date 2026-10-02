import Image from "next/image";
import Link from "next/link";
import {
  getAuthorInitials,
  getBlogAuthor,
} from "@/lib/blog/authors";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface BlogAuthorBylineProps {
  authorSlug: string;
  className?: string;
  /** Compact chip for cards; default is post-header style */
  compact?: boolean;
  /** When nested inside another Link, prevent navigation conflict */
  nested?: boolean;
}

export function BlogAuthorByline({
  authorSlug,
  className,
  compact = false,
  nested = false,
}: BlogAuthorBylineProps) {
  const author = getBlogAuthor(authorSlug);
  const href = ROUTES.author(author.slug);
  const initials = getAuthorInitials(author.name);

  const avatar = author.avatar ? (
    <Image
      src={author.avatar}
      alt={author.name}
      width={compact ? 28 : 40}
      height={compact ? 28 : 40}
      className={cn(
        "rounded-full object-cover",
        compact ? "h-7 w-7" : "h-10 w-10",
      )}
    />
  ) : (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-indigo-100 font-sans font-semibold text-xo-indigo",
        compact ? "h-7 w-7 text-[10px]" : "h-10 w-10 text-[13px]",
      )}
      aria-hidden
    >
      {initials}
    </span>
  );

  const label = (
    <span className="min-w-0">
      {!compact ? (
        <span className="block font-mono text-[10px] text-fg3 uppercase tracking-[0.12em]">
          Written by
        </span>
      ) : null}
      <span
        className={cn(
          "block font-sans font-semibold text-fg1 transition-colors group-hover/author:text-tangerine-600",
          compact ? "text-[12.5px]" : "text-[14.5px]",
        )}
      >
        {author.name}
      </span>
    </span>
  );

  const classNames = cn(
    "group/author inline-flex items-center gap-2.5 no-underline",
    className,
  );

  if (nested) {
    return (
      <Link
        href={href}
        className={classNames}
        onClick={(event) => event.stopPropagation()}
      >
        {avatar}
        {label}
      </Link>
    );
  }

  return (
    <Link href={href} className={classNames}>
      {avatar}
      {label}
    </Link>
  );
}
