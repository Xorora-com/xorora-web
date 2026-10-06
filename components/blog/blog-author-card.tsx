"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getAuthorInitials, getBlogAuthor } from "@/lib/blog/authors";
import { ROUTES } from "@/lib/navigation";

interface BlogAuthorCardProps {
  authorSlug: string;
  publishedAt: Date | null;
  updatedAt: Date;
}

function formatLongDate(date: Date | null): string {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function BlogAuthorCard({
  authorSlug,
  publishedAt,
  updatedAt,
}: BlogAuthorCardProps) {
  const author = getBlogAuthor(authorSlug);
  const initials = getAuthorInitials(author.name);
  const [expanded, setExpanded] = useState(false);
  const longBio = author.bio.length > 120;
  const preview = longBio ? `${author.bio.slice(0, 110).trimEnd()}…` : author.bio;
  const published = formatLongDate(publishedAt);
  const updated = formatLongDate(updatedAt);

  return (
    <div className="flex flex-col gap-5 rounded-(--r-lg) border border-border bg-white p-5 sm:flex-row sm:items-start">
      {author.avatar ? (
        <Image
          src={author.avatar}
          alt={author.name}
          width={72}
          height={72}
          className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
        />
      ) : (
        <span
          className="inline-flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-indigo-100 font-sans font-bold text-[22px] text-xo-indigo"
          aria-hidden
        >
          {initials}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <Link
          href={ROUTES.author(author.slug)}
          className="font-sans font-semibold text-[17px] text-fg1 no-underline hover:text-tangerine-600"
        >
          {author.name}
        </Link>
        <p className="m-0 mt-0.5 font-sans text-[13.5px] text-xo-indigo">{author.title}</p>
        <p className="m-0 mt-3 font-sans text-[14.5px] text-fg2 leading-relaxed">
          {expanded || !longBio ? author.bio : preview}{" "}
          {longBio ? (
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="cursor-pointer border-0 bg-transparent p-0 font-sans font-semibold text-[14.5px] text-accent hover:text-tangerine-600"
            >
              {expanded ? "See less" : "See more"}
            </button>
          ) : null}
        </p>
        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-sans text-[13px] text-fg3">
          {updated ? (
            <div className="flex gap-1.5">
              <dt className="font-semibold text-fg1">Updated:</dt>
              <dd className="m-0">
                <time dateTime={updatedAt.toISOString()}>{updated}</time>
              </dd>
            </div>
          ) : null}
          {published ? (
            <div className="flex gap-1.5">
              <dt className="font-semibold text-fg1">Published:</dt>
              <dd className="m-0">
                <time dateTime={publishedAt?.toISOString()}>{published}</time>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </div>
  );
}
