import Image from "next/image";
import { V2Rise } from "./v2-shared";

const BADGES = [
  {
    src: "/assets/home/recognitions/iso-27001.png",
    alt: "ISO 27001",
    width: 200,
    height: 200,
  },
  {
    src: "/assets/home/recognitions/selected-firms.webp",
    alt: "SelectedFirms Top Software Consulting Company",
    width: 200,
    height: 200,
  },
  {
    src: "/assets/home/recognitions/goodfirms.png",
    alt: "Recognized on GoodFirms",
    width: 280,
    height: 128,
  },
  {
    src: "/assets/home/recognitions/clutch-2025.png",
    alt: "Clutch Top Company Software Developers 2025",
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

        <ul className="m-0 grid list-none grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 p-0 sm:grid-cols-4 sm:gap-x-12">
          {BADGES.map((badge, index) => (
            <li
              key={badge.src}
              className="flex w-full max-w-[220px] items-center justify-center"
            >
              <V2Rise delay={index * 60} className="flex w-full justify-center">
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
          ))}
        </ul>
      </div>
    </section>
  );
}
