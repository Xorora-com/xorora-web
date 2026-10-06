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
}

export function BlogBreadcrumb({ items, className }: BlogBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "mb-6 flex flex-wrap items-center gap-2 font-sans text-[13.5px] text-fg3",
        className,
      )}
    >
      {items.map((item, index) => {
        const last = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
            {index > 0 ? <Chevron size={13} className="text-slate-300" /> : null}
            {item.href && !last ? (
              <Link
                href={item.href}
                className="text-fg3 no-underline transition-colors hover:text-fg1"
              >
                {item.label}
              </Link>
            ) : (
              <span className={cn(last && "font-semibold text-fg1")}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
