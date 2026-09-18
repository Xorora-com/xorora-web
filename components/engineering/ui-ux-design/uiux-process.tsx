"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";

type TrackId = "ux" | "ui";

interface ProcessStep {
  n: string;
  name: string;
  body: string;
}

const UX_STEPS: ProcessStep[] = [
  {
    n: "01",
    name: "Research and analysis",
    body: "We start by understanding your users, goals, and market through deep research, audits, and persona mapping.",
  },
  {
    n: "02",
    name: "Information architecture",
    body: "We organize content and features into a logical, easy-to-navigate structure, defining hierarchy and flow.",
  },
  {
    n: "03",
    name: "Wireframing",
    body: "We translate strategy into low-fidelity wireframes to map page layouts, interaction zones, and usability.",
  },
  {
    n: "04",
    name: "Interactive prototyping",
    body: "We build high-fidelity, clickable prototypes to test functionality and user journeys before development.",
  },
  {
    n: "05",
    name: "Review and refinement",
    body: "We gather feedback, analyze it, and apply it to refine user flows and interface behavior.",
  },
];

const UI_STEPS: ProcessStep[] = [
  {
    n: "01",
    name: "Moodboards and design references",
    body: "We align visual direction with your brand using references, moodboards, and initial creative themes.",
  },
  {
    n: "02",
    name: "Graphic interface design",
    body: "We create polished visuals, icons, typography, color palettes, and layouts for web, mobile, or cross-platform.",
  },
  {
    n: "03",
    name: "Micro-interactions and animation",
    body: "We add motion and micro-interactions to enhance engagement and clarity.",
  },
  {
    n: "04",
    name: "Design systems and UI guidelines",
    body: "We deliver scalable UI kits and brand-consistent systems for long-term consistency and dev efficiency.",
  },
  {
    n: "05",
    name: "Final design review",
    body: "We run detailed design QA so every pixel, interaction, and guideline matches the product vision.",
  },
];

const TRACK_STYLE = {
  gradient: "from-indigo-500/18 via-indigo-400/5 to-transparent",
  railActive: "from-xo-indigo via-indigo-400 to-indigo-300",
  node: "bg-xo-indigo",
  nodeGlow: "shadow-[0_0_0_6px_rgba(70,76,159,0.18)]",
  activeCard:
    "border-indigo-200 bg-linear-to-br from-indigo-50 to-white shadow-sm",
  accentText: "text-xo-indigo",
  progressDot: "bg-xo-indigo",
} as const;

const TRACKS: Record<
  TrackId,
  {
    label: string;
    short: string;
    eyebrow: string;
    blurb: string;
    steps: ProcessStep[];
  }
> = {
  ux: {
    label: "UX process",
    short: "UX",
    eyebrow: "Insight → structure",
    blurb:
      "Human-centric discovery that defines how the product should feel and flow.",
    steps: UX_STEPS,
  },
  ui: {
    label: "UI process",
    short: "UI",
    eyebrow: "Visual → system",
    blurb:
      "On-brand craft that turns validated flows into polished, scalable interfaces.",
    steps: UI_STEPS,
  },
};

function TrackColumn({
  id,
  openIndex,
  onOpen,
  className,
}: {
  id: TrackId;
  openIndex: number;
  onOpen: (i: number) => void;
  className?: string;
}) {
  const track = TRACKS[id];
  const style = TRACK_STYLE;
  const progress = ((openIndex + 1) / track.steps.length) * 100;

  return (
    <div className={cn("relative flex flex-col", className)}>
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b",
          style.gradient,
        )}
        aria-hidden
      />

      <div className="relative mb-6 px-1 sm:mb-8">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-white/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] backdrop-blur-sm",
              style.accentText,
            )}
          >
            <Sparkles className="h-3 w-3" aria-hidden />
            {track.eyebrow}
          </span>
          <span className="font-mono text-[12px] text-fg3 tabular-nums">
            <span className="text-xo-indigo">
              {String(openIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-fg3/50"> / </span>
            {String(track.steps.length).padStart(2, "0")}
          </span>
        </div>
        <h3 className="m-0 font-bold font-sans text-[clamp(22px,2.4vw,26px)] text-fg1 tracking-[-0.03em]">
          {track.label}
        </h3>
        <p className="mt-2 mb-4 max-w-[400px] font-sans text-[14.5px] text-fg2 leading-relaxed">
          {track.blurb}
        </p>
        <div className="h-1 overflow-hidden rounded-full bg-slate-100">
          <div
            className={cn(
              "h-full rounded-full bg-linear-to-r transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              style.railActive,
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="relative flex-1">
        <ol className="relative m-0 flex list-none flex-col p-0">
          {track.steps.map((step, i) => {
            const isOpen = openIndex === i;
            const isPast = i < openIndex;
            const isLast = i === track.steps.length - 1;
            const segmentActive = i < openIndex;

            return (
              <li key={step.n} className="relative flex gap-3.5 sm:gap-4">
                {/* Node + connector column — line centered through points */}
                <div className="relative flex w-10 shrink-0 flex-col items-center sm:w-11">
                  <span
                    className={cn(
                      "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold font-mono text-[12px] text-white transition-all duration-300 sm:h-11 sm:w-11 sm:text-[13px]",
                      isOpen || isPast
                        ? cn(style.node, isOpen && style.nodeGlow)
                        : "border-2 border-slate-200 bg-white text-slate-400",
                      isOpen && "scale-105",
                    )}
                  >
                    {isPast && !isOpen ? (
                      <span className="text-[14px]" aria-hidden>
                        ✓
                      </span>
                    ) : (
                      step.n
                    )}
                  </span>
                  {!isLast && (
                    <div
                      className="mt-0 min-h-3 w-0.5 flex-1 rounded-full bg-indigo-100"
                      aria-hidden
                    >
                      <div
                        className={cn(
                          "w-full rounded-full bg-linear-to-b from-xo-indigo to-indigo-400 transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                          segmentActive ? "h-full" : "h-0",
                        )}
                      />
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => onOpen(i)}
                  aria-expanded={isOpen}
                  className={cn(
                    "group mb-2.5 min-w-0 flex-1 rounded-(--r-lg) border px-3 py-3 text-left transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:mb-3 sm:px-4 sm:py-3.5",
                    isLast && "mb-0",
                    isOpen
                      ? style.activeCard
                      : "border-transparent bg-transparent hover:border-border/70 hover:bg-white/70",
                  )}
                >
                  <span className="flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        "font-sans font-semibold text-[15.5px] leading-snug tracking-[-0.015em] transition-colors sm:text-[17px]",
                        isOpen ? "text-fg1" : "text-fg1/85",
                      )}
                    >
                      {step.name}
                    </span>
                    <span
                      className={cn(
                        "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300",
                        isOpen
                          ? cn("scale-125", style.progressDot)
                          : "bg-slate-200 group-hover:bg-slate-300",
                      )}
                    />
                  </span>
                  <span
                    className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <span className="overflow-hidden">
                      <span className="mt-2.5 block font-sans text-[14px] text-fg2 leading-relaxed sm:text-[14.5px]">
                        {step.body}
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export function UiuxProcess() {
  const [mobileTrack, setMobileTrack] = useState<TrackId>("ux");
  const [open, setOpen] = useState<Record<TrackId, number>>({ ux: 0, ui: 0 });

  return (
    <section
      id="process"
      className="relative overflow-hidden px-8 py-[clamp(72px,9vw,118px)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-slate-50"
        aria-hidden
      />
      <div
        className="-top-24 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[420px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(70,76,159,0.14)_0%,transparent_68%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-10%] bottom-0 h-[280px] w-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(70,76,159,0.08)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1180px]">
        <SectionHead
          label="Our process"
          title="Two tracks. One design outcome."
          sub="UX shapes the experience. UI brings it to life. Tap a step — watch the track advance."
          align="center"
          className="mx-auto mb-10 max-w-[720px] md:mb-12"
        />

        {/* Mobile segmented control with sliding pill */}
        <div className="mb-6 flex justify-center lg:hidden">
          <div
            role="tablist"
            aria-label="Design process track"
            className="relative grid w-full max-w-[340px] grid-cols-2 rounded-full border border-border/80 bg-white/80 p-1.5 shadow-sm backdrop-blur-md"
          >
            <span
              className={cn(
                "absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full bg-xo-indigo shadow-[0_8px_24px_-10px_rgba(70,76,159,0.65)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                mobileTrack === "ui"
                  ? "translate-x-[calc(100%+4px)]"
                  : "translate-x-0",
              )}
              style={{ left: 6 }}
              aria-hidden
            />
            {(["ux", "ui"] as const).map((id) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={mobileTrack === id}
                onClick={() => setMobileTrack(id)}
                className={cn(
                  "relative z-10 rounded-full py-2.5 font-sans font-semibold text-[14px] transition-colors duration-200",
                  mobileTrack === id ? "text-white" : "text-fg2",
                )}
              >
                {TRACKS[id].label}
              </button>
            ))}
          </div>
        </div>

        {/* Glass dual-track stage */}
        <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/70 shadow-[0_30px_80px_-40px_rgba(8,12,30,0.45)] backdrop-blur-xl">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-indigo-300/60 to-transparent"
            aria-hidden
          />

          {/* Desktop bridge badge */}
          <div className="-translate-x-1/2 pointer-events-none absolute top-[72px] left-1/2 z-20 hidden lg:flex">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 font-sans font-semibold text-[12px] text-fg2 shadow-md">
              UX
              <ArrowRight className="h-3.5 w-3.5 text-xo-indigo" aria-hidden />
              UI
            </span>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid lg:grid-cols-2">
            <div className="border-border/70 border-r p-[clamp(28px,3vw,40px)]">
              <TrackColumn
                id="ux"
                openIndex={open.ux}
                onOpen={(i) => setOpen((p) => ({ ...p, ux: i }))}
              />
            </div>
            <div className="p-[clamp(28px,3vw,40px)]">
              <TrackColumn
                id="ui"
                openIndex={open.ui}
                onOpen={(i) => setOpen((p) => ({ ...p, ui: i }))}
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="p-5 sm:p-7 lg:hidden">
            <TrackColumn
              key={mobileTrack}
              id={mobileTrack}
              openIndex={open[mobileTrack]}
              onOpen={(i) => setOpen((p) => ({ ...p, [mobileTrack]: i }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
