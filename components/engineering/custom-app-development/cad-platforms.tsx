import type { LucideIcon } from "lucide-react";
import { Boxes, Code2, Smartphone } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const PLATFORMS: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Boxes,
    title: "Cross-platform mobile apps",
    body: "Custom-tailored cross-platform apps built with the features and functions that optimize the user experience.",
  },
  {
    icon: Smartphone,
    title: "Native mobile apps",
    body: "High-performance, secure, intuitive native apps that improve conversion rates and build customer loyalty.",
  },
  {
    icon: Code2,
    title: "Hybrid mobile apps",
    body: "Hybrid apps built on the Apache Cordova framework with JavaScript, HTML, and CSS, to reach more devices.",
  },
];

export function CadPlatforms() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Platforms"
        title="Mobile application platforms"
        sub="We design cross-platform, native, and hybrid apps using the right tools for each."
        className="mb-12 max-w-[720px]"
      />
      <div className="svc-grid3 grid grid-cols-3 gap-[22px]">
        {PLATFORMS.map((item) => {
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
