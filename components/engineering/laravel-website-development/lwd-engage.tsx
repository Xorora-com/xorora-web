import { CalendarClock, FileText, Users } from "lucide-react";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { ROUTES } from "@/lib/navigation";

const MODELS = [
  {
    icon: FileText,
    title: "Fixed scope",
    body: "Defined requirements, agreed deliverables, a fixed price. Best when the problem is well understood and the boundary is clear. You know the total before work starts, and change requests are priced separately rather than absorbed silently.",
  },
  {
    icon: CalendarClock,
    title: "Variable scope",
    body: "Sprint-based delivery with priorities set at each sprint boundary. Best when discovery is ongoing or requirements will move. You can redirect the team every two weeks without renegotiating the contract.",
  },
  {
    icon: Users,
    title: "Staff augmentation",
    body: "Our Laravel engineers working inside your team, under your process and your management. Best when you have the direction and need capacity. Engineers stay with your project rather than rotating.",
    href: ROUTES.staffAugmentation,
  },
] as const;

export function LwdEngage() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="How we engage"
        title="Laravel website development engagement models"
        sub="All three carry the same handover terms. Source, infrastructure, and documentation are yours throughout, and you have repository access from the first sprint."
        className="mb-12 max-w-[760px]"
      />
      <div className="grid gap-[22px] md:grid-cols-3">
        {MODELS.map((item) => {
          const Icon = item.icon;
          const inner = (
            <>
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-[23px] w-[23px]" aria-hidden />
              </span>
              <h3 className="mb-2.5 font-sans font-semibold text-[19px] text-fg1 leading-snug">
                {item.title}
              </h3>
              <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                {item.body}
              </p>
            </>
          );
          if ("href" in item && item.href) {
            return (
              <Link
                key={item.title}
                href={item.href}
                className="hover:-translate-y-0.5 rounded-(--r-lg) border border-border bg-white p-[clamp(24px,2.6vw,32px)] no-underline transition-all duration-200 hover:border-border-strong hover:shadow-md"
              >
                {inner}
              </Link>
            );
          }
          return (
            <div
              key={item.title}
              className="rounded-(--r-lg) border border-border bg-white p-[clamp(24px,2.6vw,32px)]"
            >
              {inner}
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}
