import {
  AlertCircle,
  ArrowUpRight,
  BellRing,
  Check,
  Cloud,
  CreditCard,
  Database,
  Layers,
  LayoutDashboard,
  type LucideIcon,
  Plug,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AmazonAssetShowcase } from "@/components/case-study/amazon-asset-showcase";
import { AmazonListingFrame } from "@/components/case-study/amazon-listing-frame";
import { BrowserFrame } from "@/components/case-study/browser-frame";
import { CaseStudyGallery } from "@/components/case-study/case-study-gallery";
import { CaseStudyVideo } from "@/components/case-study/case-study-video";
import { ErdDiagram } from "@/components/case-study/erd-diagram";
import { XWatermark } from "@/components/geometry/x-watermark";
import {
  industryHref,
  serviceHref,
  splitServiceNames,
} from "@/lib/case-studies/meta-links";
import { techIconUrl } from "@/lib/case-studies/tech-icons";
import type {
  BulletItem,
  CaseStudySection,
  CaseStudySectionContent,
} from "@/lib/case-studies/types";
import { whyMattersImage } from "@/lib/case-studies/why-images";
import { caseStudySectionTitle } from "@/lib/image-seo";
import { cn } from "@/lib/utils";
import { DarkSection } from "./dark-section";
import { LightSection } from "./light-section";
import { SectionHead } from "./section-head";

const ARCH_ICONS: Record<string, LucideIcon> = {
  "layout-dashboard": LayoutDashboard,
  server: Server,
  "shield-check": ShieldCheck,
  database: Database,
  "credit-card": CreditCard,
  plug: Plug,
  workflow: Workflow,
  sparkles: Sparkles,
  "bell-ring": BellRing,
  zap: Zap,
  cloud: Cloud,
};

function parseChips(chips?: string): string[] {
  if (!chips) return [];
  const [, values] = chips.split(":");
  const raw = values ?? chips;
  return raw
    .split("·")
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeBullet(bullet: BulletItem | string): {
  title?: string;
  body: string;
} {
  if (typeof bullet === "string") {
    return { body: bullet };
  }
  return bullet;
}

function MetaGridValue({ label, value }: { label: string; value: string }) {
  if (label === "Industry") {
    const href = industryHref(value);
    if (href) {
      return (
        <Link
          href={href}
          className="mt-1 inline-block font-sans font-semibold text-[15px] text-fg1 underline decoration-border-strong underline-offset-4 transition-colors hover:text-xo-indigo hover:decoration-xo-indigo"
        >
          {value}
        </Link>
      );
    }
  }

  if (label === "Services") {
    const names = splitServiceNames(value);
    return (
      <div className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1 font-sans font-semibold text-[15px] text-fg1">
        {names.map((name, index) => {
          const href = serviceHref(name);
          return (
            <span key={name} className="inline-flex items-center gap-1.5">
              {href ? (
                <Link
                  href={href}
                  className="underline decoration-border-strong underline-offset-4 transition-colors hover:text-xo-indigo hover:decoration-xo-indigo"
                >
                  {name}
                </Link>
              ) : (
                <span>{name}</span>
              )}
              {index < names.length - 1 && (
                <span className="text-fg3" aria-hidden>
                  ·
                </span>
              )}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div className="mt-1 font-sans font-semibold text-[15px] text-fg1">
      {value}
    </div>
  );
}

function MetaGrid({
  meta,
}: {
  meta: NonNullable<CaseStudySectionContent["meta"]>;
}) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {meta.map((item) => (
        <div
          key={item.label}
          className="rounded-[var(--r-lg)] border border-border bg-white px-5 py-4"
        >
          <div className="font-mono text-[10.5px] text-fg3 uppercase tracking-[0.12em]">
            {item.label}
          </div>
          <MetaGridValue label={item.label} value={item.value} />
        </div>
      ))}
    </div>
  );
}

function ChipPills({
  chips,
  className,
}: {
  chips?: string;
  className?: string;
}) {
  const items = parseChips(chips);
  if (items.length === 0) return null;

  return (
    <div className={cn("mt-7 flex flex-wrap gap-2.5", className)}>
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-[15px] py-2 font-medium font-sans text-[13.5px] text-slate-700"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-xo-indigo" />
          {item}
        </span>
      ))}
    </div>
  );
}

function OverviewSection({
  content,
  primaryTag,
  amazon,
}: {
  content: CaseStudySectionContent;
  primaryTag: string;
  amazon?: boolean;
}) {
  const media =
    content.gallery && content.gallery.length > 0 ? (
      <CaseStudyGallery
        images={content.gallery}
        amazon={amazon}
        caption="Listing proof"
      />
    ) : content.image ? (
      amazon ? (
        <div className="mx-auto w-full max-w-[520px]">
          <AmazonListingFrame
            src={content.image.src}
            alt={content.image.alt}
            title={caseStudySectionTitle(content.title, primaryTag)}
            marketplace={content.image.url ?? "amazon.com.au"}
          />
        </div>
      ) : (
        <BrowserFrame
          src={content.image.src}
          alt={content.image.alt}
          title={caseStudySectionTitle(content.title, primaryTag)}
          url={content.image.url}
          glow
          tilt
        />
      )
    ) : null;

  if (amazon) {
    return (
      <LightSection bg="var(--indigo-50)">
        <div className="mx-auto max-w-[720px] text-center">
          <SectionHead
            label={content.label}
            title={content.title ?? "The big picture"}
            titleSize="clamp(30px,4vw,48px)"
            align="center"
          />
          {content.paragraphs?.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-7 font-sans text-[16.5px] text-fg2 leading-[1.7] first:mt-7"
            >
              {paragraph}
            </p>
          ))}
          <ChipPills chips={content.chips} className="justify-center" />
        </div>
        {content.meta && (
          <div className="mx-auto mt-10 max-w-[820px]">
            <MetaGrid meta={content.meta} />
          </div>
        )}
        {media && <div className="mt-[clamp(40px,5vw,64px)]">{media}</div>}
      </LightSection>
    );
  }

  return (
    <LightSection bg="var(--indigo-50)">
      <div className="cs-overview-grid grid grid-cols-2 items-center gap-[clamp(36px,5vw,72px)]">
        <div>
          <SectionHead
            label={content.label}
            title={content.title ?? "The big picture"}
            titleSize="clamp(30px,4vw,48px)"
          />
          {content.paragraphs?.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-7 font-sans text-[16.5px] text-fg2 leading-[1.7] first:mt-7"
            >
              {paragraph}
            </p>
          ))}
          <ChipPills chips={content.chips} />
          {content.meta && <MetaGrid meta={content.meta} />}
        </div>
        {media && <div className="cs-overview-art">{media}</div>}
      </div>
    </LightSection>
  );
}

function MarketContextSection({
  content,
}: {
  content: CaseStudySectionContent;
}) {
  if (content.layout === "asset-showcase" && content.image) {
    return (
      <AmazonAssetShowcase
        label={content.label}
        title={content.title ?? "Listing optimization"}
        subtitle={content.subtitle}
        paragraphs={content.paragraphs}
        bullets={content.bullets}
        meta={content.meta}
        image={content.image}
        gallery={content.gallery}
        marketplace={content.image.url ?? "amazon.com.au"}
      />
    );
  }

  return (
    <LightSection>
      <SectionHead
        label={content.label}
        title={content.title ?? "Market context"}
        className="mb-7"
      />
      {content.paragraphs?.map((paragraph) => (
        <p
          key={paragraph.slice(0, 40)}
          className="max-w-[820px] font-sans text-[16.5px] text-fg2 leading-[1.7]"
        >
          {paragraph}
        </p>
      ))}
      <ChipPills chips={content.chips} />
    </LightSection>
  );
}

function ChallengePairsSection({
  content,
}: {
  content: CaseStudySectionContent;
}) {
  return (
    <LightSection>
      <SectionHead
        label={content.label}
        title={content.title ?? "Where it broke, and how we fixed it"}
        sub={content.subtitle}
        className="mb-8"
      />
      <div className="flex flex-col gap-[22px]">
        {content.pairs?.map((pair, index) => (
          <div
            key={pair.challenge.slice(0, 40)}
            className="cs-cs-row grid grid-cols-2 items-stretch gap-[22px]"
          >
            <div className="rounded-[var(--r-lg)] border border-border bg-white p-[clamp(24px,3vw,34px)]">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[var(--r-md)] bg-slate-100 text-slate-500">
                  <AlertCircle className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-mono text-[11.5px] text-slate-400 tracking-[0.14em]">
                  CHALLENGE&nbsp;0{index + 1}
                </span>
              </div>
              <p className="m-0 font-sans text-base text-fg2 leading-[1.6]">
                {pair.challenge}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[var(--r-lg)] bg-navy-900 p-[clamp(24px,3vw,34px)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_100%_0%,rgba(70,76,159,.35),transparent_60%)]" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[var(--r-md)] bg-xo-indigo text-white">
                    <Check className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-mono text-[11.5px] text-tangerine-400 tracking-[0.14em]">
                    SOLUTION&nbsp;0{index + 1}
                  </span>
                </div>
                <p className="m-0 font-sans text-base text-white/82 leading-[1.6]">
                  {pair.solution}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </LightSection>
  );
}

function ChallengeBulletsSection({
  content,
}: {
  content: CaseStudySectionContent;
}) {
  return (
    <LightSection>
      <div className="cs-overview-grid grid grid-cols-[0.46fr_0.54fr] items-start gap-[clamp(36px,5vw,72px)]">
        <div>
          <SectionHead
            label={content.label}
            title={content.title ?? "The challenge"}
            sub={content.subtitle}
          />
          {content.lead && (
            <p className="mt-[26px] mb-[18px] font-medium font-sans text-[18px] text-fg1 leading-[1.6]">
              {content.lead}
            </p>
          )}
          {content.paragraphs?.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="font-sans text-base text-fg2 leading-[1.7]"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {content.bullets?.map((bullet, index) => {
            const item = normalizeBullet(bullet);
            return (
              <div
                key={`${item.title ?? ""}-${item.body.slice(0, 40)}`}
                className="flex items-start gap-4 rounded-[var(--r-lg)] border border-border bg-slate-50 px-5 py-[18px]"
              >
                <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[var(--r-md)] border border-border bg-white font-mono text-[12px] text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 self-center">
                  {item.title && (
                    <h3 className="m-0 mb-1.5 font-sans font-semibold text-[15.5px] text-fg1 leading-snug">
                      {item.title}
                    </h3>
                  )}
                  <p className="m-0 font-sans text-[15px] text-fg2 leading-[1.55]">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
          {content.image && (
            <div className="relative mt-2 aspect-[16/10] overflow-hidden rounded-[var(--r-lg)] border border-border">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                title={content.image.alt}
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </LightSection>
  );
}

function PipelineBanner({ pipeline }: { pipeline: string }) {
  return (
    <div className="mt-10 rounded-[var(--r-lg)] border border-white/12 bg-white/4 px-6 py-5">
      <p className="m-0 font-mono text-[12px] text-white/70 leading-[1.8]">
        {pipeline}
      </p>
    </div>
  );
}

function SolutionSection({
  content,
  primaryTag,
  amazon,
}: {
  content: CaseStudySectionContent;
  primaryTag: string;
  amazon?: boolean;
}) {
  const bodyParagraphs = content.subtitle
    ? content.paragraphs
    : content.paragraphs?.slice(1);

  if (amazon) {
    return (
      <DarkSection bloom="50% 8%" id="solution">
        <div className="mx-auto max-w-[720px] text-center">
          <SectionHead
            label={content.label}
            title={content.title ?? "How Xorora solved it"}
            sub={content.subtitle ?? content.paragraphs?.[0]}
            onDark
            align="center"
            className="mb-8"
          />
          <div className="flex flex-col gap-5 text-left">
            {bodyParagraphs?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="m-0 font-sans text-base text-white/72 leading-[1.72]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {content.gallery && content.gallery.length > 0 && (
          <div className="mt-[clamp(44px,5vw,72px)]">
            <CaseStudyGallery
              images={content.gallery}
              onDark
              amazon
              aspect="square"
              caption="Listing images · what shoppers saw"
            />
          </div>
        )}

        {content.image && !content.gallery?.length && (
          <div className="mx-auto mt-[clamp(44px,5vw,72px)] w-full max-w-[520px]">
            <AmazonListingFrame
              src={content.image.src}
              alt={content.image.alt}
              title={caseStudySectionTitle(content.title, primaryTag)}
              marketplace={content.image.url ?? "amazon.com.au"}
              onDark
            />
          </div>
        )}

        {content.video && (
          <div className="mt-[clamp(36px,4vw,56px)]">
            <CaseStudyVideo
              src={content.video.src}
              poster={content.video.poster}
              title={content.video.title}
              onDark
              amazon
            />
          </div>
        )}

        {content.pipeline && <PipelineBanner pipeline={content.pipeline} />}
        <ChipPills chips={content.chips} />
      </DarkSection>
    );
  }

  return (
    <DarkSection bloom="50% 8%" id="solution">
      <SectionHead
        label={content.label}
        title={content.title ?? "How Xorora solved it"}
        sub={content.subtitle ?? content.paragraphs?.[0]}
        onDark
        className="mb-8"
      />
      {content.gallery && content.gallery.length > 0 ? (
        <div className="cs-overview-grid mb-[clamp(44px,5vw,64px)] grid grid-cols-2 items-center gap-[clamp(28px,4vw,52px)]">
          <div className="flex flex-col gap-5">
            {bodyParagraphs?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="m-0 font-sans text-base text-white/72 leading-[1.72]"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <CaseStudyGallery images={content.gallery} onDark amazon={false} />
        </div>
      ) : content.image ? (
        <div className="cs-overview-grid mb-[clamp(44px,5vw,64px)] grid grid-cols-2 items-center gap-[clamp(28px,4vw,52px)]">
          <div className="flex flex-col gap-5">
            {bodyParagraphs?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="m-0 font-sans text-base text-white/72 leading-[1.72]"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <BrowserFrame
            src={content.image.src}
            alt={content.image.alt}
            title={caseStudySectionTitle(content.title, primaryTag)}
            url={content.image.url}
            glow
          />
        </div>
      ) : (
        bodyParagraphs &&
        bodyParagraphs.length > 0 && (
          <div className="cs-overview-grid mb-[clamp(44px,5vw,64px)] grid grid-cols-2 gap-[clamp(24px,3vw,40px)]">
            {bodyParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="m-0 font-sans text-base text-white/70 leading-[1.72]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )
      )}
      {content.bullets && content.bullets.length > 0 && (
        <div className="mb-[clamp(36px,4vw,52px)] grid gap-4 sm:grid-cols-2">
          {content.bullets.map((bullet, index) => {
            const item = normalizeBullet(bullet);
            return (
              <div
                key={`${item.title ?? ""}-${item.body.slice(0, 40)}`}
                className="rounded-[var(--r-lg)] border border-white/12 bg-white/[0.04] p-5"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="font-mono text-[11px] text-tangerine-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.title && (
                    <h3 className="m-0 font-sans font-semibold text-[16px] text-white leading-snug">
                      {item.title}
                    </h3>
                  )}
                </div>
                <p className="m-0 font-sans text-[14.5px] text-white/70 leading-[1.65]">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      )}
      {content.video && (
        <div className="mb-[clamp(36px,4vw,52px)]">
          <CaseStudyVideo
            src={content.video.src}
            poster={content.video.poster}
            title={content.video.title}
            onDark
            amazon={false}
          />
        </div>
      )}
      {content.pipeline && <PipelineBanner pipeline={content.pipeline} />}
      <ChipPills chips={content.chips} />
    </DarkSection>
  );
}

function ArchitectureSection({
  content,
  amazon,
}: {
  content: CaseStudySectionContent;
  amazon?: boolean;
}) {
  const isErd = content.layout === "erd" && content.erd;

  return (
    <DarkSection
      bloom="50% 12%"
      id="architecture"
      pad="clamp(40px,5vw,64px) 32px"
    >
      <SectionHead
        label={content.label}
        title={content.title ?? (isErd ? "Core data model" : "Architecture")}
        sub={content.subtitle}
        onDark
        align={amazon ? "center" : "left"}
        className="mb-7"
      />
      <div
        className={cn(
          "relative overflow-hidden rounded-[var(--r-xl)] border border-white/10 bg-[rgba(3,9,24,.5)]",
          isErd ? "p-[clamp(16px,2vw,28px)]" : "p-[clamp(20px,3vw,36px)]",
          amazon && !isErd && "mx-auto max-w-[820px]",
        )}
      >
        <XWatermark
          size={isErd ? 280 : 420}
          color="rgba(120,150,240,0.05)"
          className="right-[-120px] bottom-[-160px]"
        />
        <div className="relative">
          {isErd && content.erd ? (
            <ErdDiagram
              entities={content.erd.entities}
              relationships={content.erd.relationships}
              onDark
            />
          ) : (
            content.items?.map((item, index) => {
              const Icon = (item.icon && ARCH_ICONS[item.icon]) || Layers;
              return (
                <div key={item.title}>
                  {index > 0 && (
                    <div className="flex justify-center" aria-hidden>
                      <div className="h-7 w-px bg-linear-to-b from-indigo-400/10 to-indigo-400/60" />
                    </div>
                  )}
                  <div className="relative overflow-hidden rounded-[var(--r-lg)] border border-white/12 bg-white/[0.035] p-5">
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-indigo-400 to-indigo-700" />
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--r-md)] border border-indigo-300/30 bg-indigo-500/20 text-indigo-300">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-mono text-[11px] text-tangerine-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="font-sans font-semibold text-base text-white leading-[1.1]">
                            {item.title}
                          </span>
                        </div>
                        <p className="m-0 mt-2 font-mono text-[11.5px] text-white/55 leading-[1.7]">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      {content.gallery && content.gallery.length > 0 && (
        <div className="mt-[clamp(32px,4vw,56px)]">
          <CaseStudyGallery
            images={content.gallery}
            onDark
            amazon={amazon}
            aspect={amazon ? "wide" : "square"}
            caption={amazon ? "Brand assets · A+ Content (Desktop)" : undefined}
          />
        </div>
      )}
      {content.video && (
        <div className="mt-[clamp(28px,3.5vw,48px)]">
          <CaseStudyVideo
            src={content.video.src}
            poster={content.video.poster}
            title={content.video.title}
            onDark
            amazon={amazon}
          />
        </div>
      )}
    </DarkSection>
  );
}

function ServicesSection({ content }: { content: CaseStudySectionContent }) {
  return (
    <LightSection>
      <SectionHead
        label={content.label}
        title={content.title ?? "Xorora services utilized"}
        titleSize="clamp(28px,3.6vw,44px)"
        className="mb-8"
      />
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {content.services?.map((service) => (
          <div
            key={service.name}
            className="group hover:-translate-y-0.5 flex items-center gap-4 rounded-[var(--r-lg)] border border-border bg-slate-50 px-[22px] py-[22px] transition-all duration-200 hover:border-border-strong hover:bg-white hover:shadow-md"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--r-md)] bg-indigo-50 text-xo-indigo transition-colors group-hover:bg-xo-indigo group-hover:text-white">
              <ArrowUpRight className="h-[22px] w-[22px]" aria-hidden />
            </span>
            <span className="flex-1 font-sans font-semibold text-[15.5px] text-fg1 leading-[1.25]">
              {service.name}
            </span>
            <ArrowUpRight className="h-[18px] w-[18px] text-slate-400 transition-colors group-hover:text-tangerine-500" />
          </div>
        ))}
      </div>
    </LightSection>
  );
}

function TechSection({ content }: { content: CaseStudySectionContent }) {
  const items: Array<{ title?: string; body: string }> =
    content.bullets?.map(normalizeBullet) ??
    parseChips(content.chips).map((body) => ({ body }));

  return (
    <section className="overflow-hidden border-border border-t bg-slate-50 py-[clamp(48px,6vw,80px)]">
      <div className="mx-auto mb-8 max-w-[1180px] px-8">
        <SectionHead
          label={content.label ?? "Engineering"}
          title={content.title ?? "The technology stack"}
          titleSize="clamp(28px,3.6vw,44px)"
          align="center"
        />
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-center gap-4 px-8">
        {items.map((item) => {
          const label = item.title ?? item.body;
          const iconUrl = techIconUrl(label);
          return (
            <div
              key={item.body}
              className="flex shrink-0 items-center gap-3 rounded-[var(--r-md)] border border-border bg-white px-6 py-[15px] shadow-xs"
            >
              {iconUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={iconUrl}
                  alt=""
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] shrink-0 object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[5px] bg-indigo-50 text-xo-indigo">
                  <Layers className="h-3.5 w-3.5" aria-hidden />
                </span>
              )}
              <span className="whitespace-nowrap font-sans font-semibold text-[15px] text-fg1">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const OUTCOME_ICONS: LucideIcon[] = [ArrowUpRight, Check, AlertCircle];

function OutcomesSection({
  content,
  amazon,
}: {
  content: CaseStudySectionContent;
  amazon?: boolean;
}) {
  const bullets = content.bullets?.map(normalizeBullet) ?? [];
  const hasMedia =
    Boolean(content.video) ||
    Boolean(content.gallery && content.gallery.length > 0);

  return (
    <DarkSection bloom="20% 0%">
      <div
        className={cn(
          "cs-outcomes-grid grid items-center gap-[clamp(36px,5vw,72px)]",
          amazon ? "grid-cols-1" : "grid-cols-[0.92fr_1.08fr]",
        )}
      >
        <div
          className={amazon ? "mx-auto max-w-[720px] text-center" : undefined}
        >
          <SectionHead
            label={content.label}
            title={content.title ?? "Measurable outcomes"}
            onDark
            align={amazon ? "center" : "left"}
          />
          {content.subtitle && (
            <p
              className={cn(
                "mt-[26px] font-sans text-[16.5px] text-white/66 leading-[1.7]",
                amazon && "mx-auto max-w-[620px]",
              )}
            >
              {content.subtitle}
            </p>
          )}
        </div>
        <div
          className={cn(
            "cs-outcome-cards grid gap-3.5",
            amazon
              ? "mx-auto max-w-[900px] grid-cols-2 sm:grid-cols-4"
              : "grid-cols-2",
          )}
        >
          {bullets.map((item, index) => {
            const Icon = OUTCOME_ICONS[index % OUTCOME_ICONS.length];
            return (
              <div
                key={item.title ?? item.body.slice(0, 40)}
                className="rounded-[var(--r-lg)] border border-white/10 bg-white/4 p-5"
              >
                <span className="mb-3.5 flex h-[38px] w-[38px] items-center justify-center rounded-[var(--r-md)] border border-[rgba(120,150,240,.3)] bg-[rgba(70,76,159,.25)] text-indigo-300">
                  <Icon className="h-[19px] w-[19px]" aria-hidden />
                </span>
                {item.title && (
                  <div className="mb-1.5 font-sans font-semibold text-[15.5px] text-white">
                    {item.title}
                  </div>
                )}
                <div className="font-sans text-[13px] text-white/58 leading-[1.5]">
                  {item.body}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {hasMedia && (
        <div className="mt-[clamp(48px,6vw,80px)] flex flex-col gap-10">
          {content.gallery && content.gallery.length > 0 && (
            <CaseStudyGallery images={content.gallery} onDark amazon={amazon} />
          )}
          {content.video && (
            <CaseStudyVideo
              src={content.video.src}
              poster={content.video.poster}
              title={content.video.title}
              onDark
              amazon={amazon}
            />
          )}
        </div>
      )}
      {!hasMedia && content.image && (
        <div className="relative mx-auto mt-[clamp(48px,6vw,80px)] aspect-[21/9] max-w-[980px] overflow-hidden rounded-[var(--r-xl)] border border-white/10">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            title={content.image.alt}
            fill
            sizes="(max-width: 980px) 100vw, 980px"
            className="object-cover"
          />
        </div>
      )}
    </DarkSection>
  );
}

function QuoteBanner({ quote }: { quote: string }) {
  // Split on sentence periods only — keep decimals like 2.44 / 2.5 intact.
  const parts = quote
    .split(/(?<!\d)\.(?!\d)/)
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <div className="relative overflow-hidden rounded-[var(--r-xl)] bg-navy-900 p-[clamp(36px,5vw,56px)] text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_120%_at_50%_0%,rgba(70,76,159,.35),transparent_60%)]" />
      <div className="relative flex flex-wrap justify-center gap-[clamp(20px,4vw,52px)]">
        {parts.map((part, index) => (
          <span
            key={part}
            className={cn(
              "font-bold font-sans text-[clamp(22px,3vw,34px)] tracking-[-0.02em]",
              index === parts.length - 1 ? "text-tangerine-400" : "text-white",
            )}
          >
            {part}.
          </span>
        ))}
      </div>
    </div>
  );
}

function ResultsSection({
  content,
  amazon,
  slug,
}: {
  content: CaseStudySectionContent;
  amazon?: boolean;
  slug?: string;
}) {
  const bullets = content.bullets?.map(normalizeBullet) ?? [];
  const paragraphs = content.paragraphs ?? [];
  const stockImage = slug ? whyMattersImage(slug) : null;
  const isWhyMatters =
    Boolean(stockImage) &&
    paragraphs.length > 0 &&
    bullets.length === 0 &&
    !content.gallery?.length &&
    !content.video;

  return (
    <LightSection>
      {isWhyMatters && stockImage ? (
        <div className="cs-overview-grid grid grid-cols-2 items-center gap-[clamp(28px,4vw,56px)]">
          <div>
            <SectionHead
              label={content.label}
              title={content.title ?? "Results obtained"}
              className="mb-6"
            />
            {content.subtitle && (
              <p className="mb-5 font-sans text-[17px] text-fg2 leading-[1.6]">
                {content.subtitle}
              </p>
            )}
            <div className="space-y-5">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="m-0 font-sans text-[16.5px] text-fg2 leading-[1.7]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {content.quote && (
              <div className="mt-8">
                <QuoteBanner quote={content.quote} />
              </div>
            )}
            <ChipPills chips={content.chips} />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--r-xl)] border border-border shadow-sm">
            <Image
              src={stockImage.src}
              alt={stockImage.alt}
              fill
              sizes="(max-width: 900px) 100vw, 520px"
              className="object-cover"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="cs-results-head mb-8 grid grid-cols-2 items-end gap-[clamp(24px,4vw,56px)]">
            <SectionHead
              label={content.label}
              title={content.title ?? "Results obtained"}
            />
            {content.subtitle && (
              <p className="m-0 font-sans text-[17px] text-fg2 leading-[1.6]">
                {content.subtitle}
              </p>
            )}
          </div>
          {paragraphs.length > 0 && (
            <div
              className={cn(
                "mb-8 space-y-5",
                stockImage
                  ? "cs-overview-grid grid grid-cols-2 items-start gap-[clamp(24px,4vw,48px)]"
                  : "max-w-[820px]",
              )}
            >
              <div className="space-y-5">
                {paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="m-0 font-sans text-[16.5px] text-fg2 leading-[1.7]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {stockImage && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--r-xl)] border border-border shadow-sm">
                  <Image
                    src={stockImage.src}
                    alt={stockImage.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 520px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          )}
          {bullets.length > 0 && (
            <div className="mb-8 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
              {bullets.map((item) => (
                <div
                  key={item.title ?? item.body.slice(0, 40)}
                  className="rounded-[var(--r-lg)] border border-border bg-slate-50 p-[clamp(26px,3vw,34px)]"
                >
                  <span className="mb-[22px] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-indigo-50 text-xo-indigo">
                    <Check className="h-6 w-6" aria-hidden />
                  </span>
                  {item.title && (
                    <h3 className="m-0 mb-3 font-sans font-semibold text-[19px] text-fg1 leading-[1.25]">
                      {item.title}
                    </h3>
                  )}
                  <p className="m-0 font-sans text-[15px] text-fg2 leading-[1.6]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          )}
          {content.gallery && content.gallery.length > 0 && (
            <div className="mb-8">
              <CaseStudyGallery images={content.gallery} amazon={amazon} />
            </div>
          )}
          {content.video && (
            <div className="mb-8">
              <CaseStudyVideo
                src={content.video.src}
                poster={content.video.poster}
                title={content.video.title}
                onDark={false}
                amazon={amazon}
              />
            </div>
          )}
          {content.quote && <QuoteBanner quote={content.quote} />}
          <ChipPills chips={content.chips} />
        </>
      )}
    </LightSection>
  );
}

function CaseStudySectionBlock({
  section,
  primaryTag,
  amazon,
  slug,
}: {
  section: CaseStudySection;
  primaryTag: string;
  amazon?: boolean;
  slug?: string;
}) {
  const { type, content } = section;

  switch (type) {
    case "overview":
      return (
        <OverviewSection
          content={content}
          primaryTag={primaryTag}
          amazon={amazon}
        />
      );
    case "market_context":
      return <MarketContextSection content={content} />;
    case "challenge":
      if (content.pairs && content.pairs.length > 0) {
        return <ChallengePairsSection content={content} />;
      }
      return <ChallengeBulletsSection content={content} />;
    case "solution":
      return (
        <SolutionSection
          content={content}
          primaryTag={primaryTag}
          amazon={amazon}
        />
      );
    case "architecture":
      return <ArchitectureSection content={content} amazon={amazon} />;
    case "services":
      return <ServicesSection content={content} />;
    case "tech":
      return <TechSection content={content} />;
    case "outcomes":
      return <OutcomesSection content={content} amazon={amazon} />;
    case "results":
      return <ResultsSection content={content} amazon={amazon} slug={slug} />;
    default:
      return null;
  }
}

export function CaseStudySections({
  sections,
  primaryTag = "case study",
  amazon = false,
  slug,
}: {
  sections: CaseStudySection[];
  primaryTag?: string;
  amazon?: boolean;
  slug?: string;
}) {
  return (
    <>
      {sections.map((section) => (
        <CaseStudySectionBlock
          key={section.id}
          section={section}
          primaryTag={primaryTag}
          amazon={amazon}
          slug={slug}
        />
      ))}
    </>
  );
}
