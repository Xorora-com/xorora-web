import Image from "next/image";
import { V2Rise } from "./v2-shared";
import { cn } from "@/lib/utils";

const BADGES = [
  {
    src: "/assets/home/recognitions/iso-27001.png",
    alt: "ISO 27001",
    label: "ISO 27001 CERTIFIED",
    width: 200,
    height: 200,
  },
  {
    src: "/assets/home/recognitions/selected-firms.webp",
    alt: "SelectedFirms Top Software Consulting Company",
    label: "TOP SOFTWARE CONSULTING COMPANY",
    width: 200,
    height: 200,
  },
  {
    src: "/assets/home/recognitions/goodfirms.png",
    alt: "Recognized on GoodFirms",
    label: "RECOGNIZED ON GOODFIRMS",
    width: 280,
    height: 128,
  },
  {
    src: "/assets/home/recognitions/clutch-2025.png",
    alt: "Clutch Top Company Software Developers 2025",
    label: "CLUTCH TOP SOFTWARE DEVELOPERS 2025",
    width: 180,
    height: 200,
  },
] as const;

export function V2Recognitions() {
  return (
    <section className="bg-surface px-8 py-[clamp(64px,8vw,100px)]">
      <div className="mx-auto max-w-[1180px]">
        <V2Rise>
          <h2 className="m-0 mb-[clamp(40px,5vw,64px)] text-center text-balance font-extrabold font-sans text-[clamp(28px,4vw,44px)] text-fg1 leading-tight tracking-tight">
            We&apos;ve been recognized by the best, year after year
            <span className="text-tangerine-500">.</span>
          </h2>
        </V2Rise>

        <ul className="m-0 grid list-none grid-cols-2 p-0 sm:grid-cols-4">
          {BADGES.map((badge, index) => {
            const isLastInRowMobile = index % 2 === 1;
            const isLastInRowDesktop = index === BADGES.length - 1;

            return (
              <li
                key={badge.src}
                className={cn(
                  "flex flex-col items-center gap-5 px-4 py-[clamp(28px,3.5vw,40px)] text-center sm:px-6",
                  // Internal dividers only — open at outer top/bottom (no closed boxes)
                  !isLastInRowMobile && "border-border border-r",
                  index < 2 && "border-border border-b sm:border-b-0",
                  "sm:border-r-0",
                  !isLastInRowDesktop && "sm:border-border sm:border-r",
                )}
              >
                <V2Rise
                  delay={index * 60}
                  className="flex w-full flex-col items-center gap-5"
                >
                  <span className="min-h-[2.6em] font-mono text-[10.5px] text-fg3 uppercase leading-snug tracking-[0.12em] sm:text-[11px]">
                    {badge.label}
                  </span>
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={badge.width}
                    height={badge.height}
                    className="h-[clamp(96px,12vw,128px)] w-auto max-w-full object-contain"
                    sizes="(max-width: 640px) 40vw, 200px"
                  />
                </V2Rise>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
