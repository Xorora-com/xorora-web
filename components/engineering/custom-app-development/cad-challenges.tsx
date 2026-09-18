import type { LucideIcon } from "lucide-react";
import { FileWarning, RouteOff, Wrench } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CHALLENGES: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: FileWarning,
    title: "Requirements that shift mid-build",
    body: "Vague scope at the start turns into rework, missed dates, and costs no one budgeted for.",
  },
  {
    icon: RouteOff,
    title: "The wrong platform decision",
    body: "Choosing native, hybrid, or cross-platform without weighing the tradeoffs is expensive to undo later.",
  },
  {
    icon: Wrench,
    title: "No plan after launch",
    body: "An app shipped without support, monitoring, or a maintenance path degrades fast in real use.",
  },
];

export function CadChallenges() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Why builds go wrong"
        title="Where custom app projects lose their way"
        sub="Most app builds don't fail on code. They fail on unclear requirements, the wrong platform choice, and no plan for what happens after launch."
        className="mb-12 max-w-[720px]"
      />
      <div className="svc-grid3 grid grid-cols-3 gap-[22px]">
        {CHALLENGES.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(24px,2.6vw,32px)]"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                {item.title}
              </h3>
              <p className="m-0 flex-1 font-sans text-[14.5px] text-fg2 leading-relaxed">
                {item.body}
              </p>
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}
