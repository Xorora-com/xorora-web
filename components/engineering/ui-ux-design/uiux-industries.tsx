import Link from "next/link";
import { SectionHead } from "@/components/case-study/section-head";
import { NavIcon } from "@/components/ui/nav-icon";
import { XO_NAV } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function UiuxIndustries() {
  const industries = XO_NAV.industries;
  const row = [
    ...industries.map((ind, i) => ({ ...ind, id: `a1-${i}` })),
    ...industries.map((ind, i) => ({ ...ind, id: `a2-${i}` })),
  ];

  return (
    <section className="overflow-hidden border-border border-t bg-surface py-[clamp(72px,9vw,118px)]">
      <div className="mx-auto mb-12 max-w-[1180px] px-8">
        <SectionHead
          label="Industries"
          title="Wherever you are, we design for you"
          sub="Human-centered UI/UX across the sectors we build for every day."
        />
      </div>
      <div className="eng-tmq-wrap">
        <div className={cn("eng-tmq eng-tmq-a gap-4")}>
          {row.map((ind) => (
            <Link
              key={ind.id}
              href={ind.href}
              className="flex shrink-0 items-center gap-3 rounded-(--r-md) border border-border bg-slate-50 px-6 py-[15px] no-underline shadow-xs transition-colors hover:border-border-strong hover:bg-surface"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <NavIcon name={ind.icon} className="h-[18px] w-[18px]" />
              </span>
              <span className="whitespace-nowrap font-sans font-semibold text-[15px] text-fg1">
                {ind.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
