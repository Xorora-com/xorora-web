import { Linkedin } from "lucide-react";
import Image from "next/image";
import { getAuthorInitials, type BlogAuthor } from "@/lib/blog/authors";
import { cn } from "@/lib/utils";

interface AuthorAvatarProps {
  author: BlogAuthor;
  size?: number;
  /** Hide the LinkedIn badge overlay (e.g. when a LinkedIn button is shown nearby) */
  showLinkedInBadge?: boolean;
}

export function AuthorAvatar({
  author,
  size = 112,
  showLinkedInBadge = true,
}: AuthorAvatarProps) {
  const initials = getAuthorInitials(author.name);
  const linkedIn = author.linkedIn;
  const showBadge = Boolean(showLinkedInBadge && linkedIn);

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      {author.avatar ? (
        <Image
          src={author.avatar}
          alt={author.name}
          width={size}
          height={size}
          className="h-full w-full rounded-full border-2 border-white object-cover object-[center_18%] shadow-sm"
          sizes={`${size}px`}
          priority={size >= 112}
        />
      ) : (
        <span
          className="inline-flex h-full w-full items-center justify-center rounded-full border-2 border-white bg-indigo-50 font-sans font-bold text-xo-indigo shadow-sm"
          style={{ fontSize: Math.round(size * 0.28) }}
          aria-hidden
        >
          {initials}
        </span>
      )}
      {showBadge ? (
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${author.name} on LinkedIn`}
          className={cn(
            "absolute right-0 bottom-0 flex items-center justify-center rounded-full bg-[#0a66c2] text-white shadow-sm",
            "no-underline transition-transform hover:scale-105",
          )}
          style={{
            width: Math.max(28, Math.round(size * 0.32)),
            height: Math.max(28, Math.round(size * 0.32)),
          }}
        >
          <Linkedin className="h-[55%] w-[55%]" aria-hidden />
        </a>
      ) : null}
    </div>
  );
}
