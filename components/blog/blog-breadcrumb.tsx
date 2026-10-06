import Link from "next/link";
import { Chevron } from "@/components/ui/chevron";
import { cn } from "@/lib/utils";

export interface BlogBreadcrumbItem {
  label: string;
  href?: string;
}

interface BlogBreadcrumbProps {
  items: BlogBreadcrumbItem[];
  className?: string;
  tone?: "light" | "onDark";
}

export function BlogBreadcrumb({
  items,
  className,
  tone = "light",
}: BlogBreadcrumbProps) {
  const onDark = tone === "onDark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "mb-6 flex flex-wrap items-center gap-2 font-sans text-[13.5px]",
        onDark ? "text-white/70" : "text-fg3",
        className,
      )}
    >
      {items.map((item, index) => {
        const last = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
            {index > 0 ? (
              <Chevron
                size={13}
                className={onDark ? "text-white/40" : "text-slate-300"}
              />
            ) : null}
            {item.href && !last ? (
              <Link
                href={item.href}
                className={cn(
                  "no-underline transition-colors",
                  onDark
                    ? "text-white/75 hover:text-white"
                    : "text-fg3 hover:text-fg1",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  last && "font-semibold",
                  last && (onDark ? "text-white" : "text-fg1"),
                )}
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
