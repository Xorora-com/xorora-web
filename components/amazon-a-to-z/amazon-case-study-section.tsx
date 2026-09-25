"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useId, useState, type KeyboardEvent } from "react";
import { AmazonListingFrame } from "@/components/case-study/amazon-listing-frame";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { buttonClassName } from "@/lib/button-styles";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const STUDIES = [
  {
    slug: "amazon-uk-rugs-acos-turnaround",
    tag: "Amazon UK · PPC · Home Furnishings",
    title: "122% ACOS to 42%: An Amazon UK Rugs Turnaround",
    description:
      "One of the UK's largest home furnishings retailers was scaling Amazon ads into a loss. Xorora rebuilt PPC without killing the sales engine — ACOS fell ~66% while revenue kept growing.",
    image: "/assets/case-studies/amazon-uk-rugs-acos-turnaround/hero.png",
    imageAlt:
      "Patterned area rug in a UK living room — home furnishings product hero",
    frameTitle: "UK Home Furnishings",
    marketplace: "amazon.co.uk",
    stats: [
      { value: "122%→42%", label: "ACOS" },
      { value: "~66%", label: "ACOS cut" },
      { value: "6 mo", label: "Engagement" },
    ],
  },
  {
    slug: "amazon-us-bedding-sku-ppc",
    tag: "Amazon US · PPC · Bedding",
    title: "~31% ACOS on 60 SKUs — Without Maxing the Budget",
    description:
      "A major US bedding brand allocated $10,000/month for a 60-SKU segment. Xorora spent ~$5,500, hit ~31% ACOS in three months, and held portfolio growth.",
    image: "/assets/case-studies/amazon-us-bedding-sku-ppc/hero.png",
    imageAlt: "Folded bed sheets and pillowcases — US bedding product hero",
    frameTitle: "US Bedding Segment",
    marketplace: "amazon.com",
    stats: [
      { value: "~31%", label: "ACOS" },
      { value: "~$5.5k", label: "Monthly spend" },
      { value: "3 mo", label: "Engagement" },
    ],
  },
  {
    slug: "amazon-au-product-launch",
    tag: "Amazon AU · Product Launch · PPC",
    title: "From Empty Storefront to 2.5 ROAS",
    description:
      "A new-to-Amazon brand entered Amazon Australia with a demand-validated card tracker, conversion-ready listing, Brand Registry A+, and a disciplined $20/day Sponsored Products plan.",
    image: "/assets/case-studies/amazon-au-product-launch/hero.webp",
    imageAlt: "Card tracker product hero still from the Amazon AU listing",
    frameTitle: "Card Tracker",
    marketplace: "amazon.com.au",
    stats: [
      { value: "2.5", label: "ROAS" },
      { value: "$1,756.80", label: "Attributed sales" },
      { value: "$20/day", label: "SP budget" },
    ],
  },
  {
    slug: "amazon-au-laundry-bag-launch",
    tag: "Amazon AU · Second SKU · PPC",
    title: "Laundry Bag Set: An Amazon AU Launch at 2.44 ROAS",
    description:
      "With Brand Registry and assets already in place, Xorora sourced and launched a second SKU — a seven-piece laundry bag set — reaching 2.44 ROAS on a $30/day Sponsored Products campaign.",
    image: "/assets/case-studies/amazon-au-laundry-bag-launch/hero.webp",
    imageAlt:
      "Elvra 7-piece mesh laundry bag set — Amazon AU main listing still",
    frameTitle: "Laundry Bag Set",
    marketplace: "amazon.com.au",
    stats: [
      { value: "2.44", label: "ROAS" },
      { value: "$271.20", label: "Attributed sales" },
      { value: "$30/day", label: "SP budget" },
    ],
  },
] as const;

function CaseStudySlide({
  study,
}: {
  study: (typeof STUDIES)[number];
}) {
  return (
    <article className="grid w-full shrink-0 basis-full items-center gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1.05fr_0.95fr]">
      <div className="min-h-[280px] lg:min-h-[420px]">
        <AmazonListingFrame
          src={study.image}
          alt={study.imageAlt}
          title={study.frameTitle}
          marketplace={study.marketplace}
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-col justify-center py-2">
        <p className="m-0 mb-3 font-mono text-[11px] text-tangerine-600 uppercase tracking-[0.14em]">
          {study.tag}
        </p>
        <h3 className="m-0 mb-4 text-balance font-bold font-sans text-[clamp(24px,2.8vw,34px)] text-fg1 leading-[1.12] tracking-[-0.02em]">
          {study.title}
        </h3>
        <p className="m-0 mb-7 max-w-[480px] font-sans text-[16px] text-fg2 leading-relaxed">
          {study.description}
        </p>
        <dl className="m-0 mb-8 grid grid-cols-3 gap-4 border-border border-y py-5">
          {study.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="m-0 font-mono text-[10.5px] text-fg3 uppercase tracking-[0.1em]">
                {stat.label}
              </dt>
              <dd className="m-0 mt-1.5 font-sans font-semibold text-[clamp(18px,2vw,24px)] text-fg1 tracking-[-0.02em]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
        <div>
          <Link
            href={ROUTES.caseStudy(study.slug)}
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            View case study
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function AmazonCaseStudySection() {
  const [index, setIndex] = useState(0);
  const labelId = useId();
  const trackId = useId();
  const count = STUDIES.length;
  const atStart = index === 0;
  const atEnd = index === count - 1;

  function goPrev() {
    setIndex((current) => Math.max(0, current - 1));
  }

  function goNext() {
    setIndex((current) => Math.min(count - 1, current + 1));
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  }

  return (
    <LightSection>
      <div className="ind-reveal mb-10 flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          label="Featured work"
          title="Amazon case studies"
          sub="Amazon Australia launches — product hunting, listing and A+ content, then Sponsored Products — with measurable ROAS."
          className="max-w-[640px]"
        />
        <div className="flex items-center gap-2.5">
          <span className="mr-2 font-mono text-[12px] text-fg3 tracking-[0.06em]">
            {index + 1} / {count}
          </span>
          <button
            type="button"
            onClick={goPrev}
            disabled={atStart}
            aria-label="Previous case study"
            aria-controls={trackId}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-(--r-md) border transition-colors",
              atStart
                ? "cursor-not-allowed border-border bg-surface text-fg3 opacity-45"
                : "cursor-pointer border-border bg-surface text-fg1 hover:border-border-strong hover:bg-slate-50",
            )}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={atEnd}
            aria-label="Next case study"
            aria-controls={trackId}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-(--r-md) border transition-colors",
              atEnd
                ? "cursor-not-allowed border-border bg-surface text-fg3 opacity-45"
                : "cursor-pointer border-border bg-surface text-fg1 hover:border-border-strong hover:bg-slate-50",
            )}
          >
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      <div
        id={trackId}
        className="ind-reveal outline-none"
        role="region"
        aria-roledescription="carousel"
        aria-labelledby={labelId}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <p id={labelId} className="sr-only">
          Amazon case study carousel, slide {index + 1} of {count}
        </p>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {STUDIES.map((study) => (
              <CaseStudySlide key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </div>
    </LightSection>
  );
}
