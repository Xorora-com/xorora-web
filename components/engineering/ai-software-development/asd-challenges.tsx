import type { LucideIcon } from "lucide-react";
import { Lock, Presentation, UserX } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CHALLENGES: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Presentation,
    title: "Demos that never ship",
    body: "A prototype impresses in a meeting, then stalls because nothing was built to run in production.",
  },
  {
    icon: Lock,
    title: "Locked to one vendor",
    body: "Betting the architecture on a single model provider leaves you exposed when pricing or performance shifts.",
  },
  {
    icon: UserX,
    title: "No one owns it after launch",
    body: "Models drift, costs creep, and quality slips when there's no evaluation or MLOps discipline behind them.",
  },
];

export function AsdChallenges() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Why AI stalls"
        title="Where AI projects stop short of production"
        sub="The hard part isn't the demo. It's everything between a promising prototype and a system your business can depend on."
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
