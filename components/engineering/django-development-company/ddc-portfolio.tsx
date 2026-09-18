import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";
import { ROUTES } from "@/lib/navigation";

const PROJECTS = [
  {
    href: ROUTES.caseStudy("amazon-au-product-launch"),
    img: "/assets/case-studies/amazon-au-product-launch/hero.webp",
    tag: "Amazon AU · Product Launch",
    title: "Empty storefront to 2.5 ROAS",
    body: "Demand validation, listing, Brand Registry, and Sponsored Products — profitable in about five weeks.",
    imageAlt: "Amazon Australia product launch case study",
    imageTitle: "Amazon AU product launch — Xorora case study",
  },
  {
    href: ROUTES.caseStudy("amazon-au-laundry-bag-launch"),
    img: "/assets/case-studies/amazon-au-laundry-bag-launch/hero.webp",
    tag: "Amazon AU · Second Launch",
    title: "Laundry bag set with Brand Registry ready",
    body: "A second Amazon Australia launch with assets and process in place before listing day.",
    imageAlt: "Amazon Australia laundry bag launch case study",
    imageTitle: "Amazon AU laundry bag launch — Xorora case study",
  },
] as const;

export function DdcPortfolio() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="How we ship"
        title="Our Django development portfolio"
        sub="Same multi-portal pattern as our Python web work — written here from the Django depth that buyers searching for specialists actually care about."
        className="mb-10 max-w-[760px]"
      />
      <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-(--r-xl) border border-border bg-white p-[clamp(24px,3vw,40px)]">
          <p className="mb-3 font-mono text-[12px] text-tangerine-600 uppercase tracking-[0.14em]">
            Multi-tenant SaaS · Django ORM
          </p>
          <h3 className="mb-4 font-sans font-semibold text-[clamp(22px,2.4vw,28px)] text-fg1 leading-snug">
            Four portals. One permission model.
          </h3>
          <p className="mb-4 font-sans text-[15.5px] text-fg2 leading-relaxed">
            Distinct user groups needed different views of the same objects and
            different rights over them. Four applications would mean four
            permission systems and the same role rules rewritten four times.
            Drift is inevitable.
          </p>
          <p className="mb-4 font-sans text-[15.5px] text-fg2 leading-relaxed">
            We built one Django backend with role-based portals on top.
            Object-level permissions live in the ORM and resolve at the data
            layer, so a rule written once applies everywhere it should. The
            admin stays staff-facing; customers never log into it.
          </p>
          <p className="m-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
            That is the Django-specific work behind the multi-portal shape —
            permissions and role models structured so the second team can extend
            access without forking the backend.
          </p>
        </article>
        <article className="flex flex-col justify-between rounded-(--r-xl) border border-border bg-white p-[clamp(24px,3vw,36px)]">
          <div>
            <p className="mb-3 font-mono text-[12px] text-tangerine-600 uppercase tracking-[0.14em]">
              Migrations &amp; deploy safety
            </p>
            <h3 className="mb-4 font-sans font-semibold text-[clamp(22px,2.4vw,26px)] text-fg1 leading-snug">
              Schema changes that survive a rolling deploy
            </h3>
            <p className="m-0 font-sans text-[15px] text-fg2 leading-relaxed">
              On long-lived Django platforms we treat migrations as production
              events: backwards-compatible steps, schema separated from data,
              rehearsed against production volume. That discipline is what keeps
              upgrades shippable instead of becoming a freeze.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={ROUTES.ourWork}
              className={buttonClassName({ variant: "primary", size: "lg" })}
            >
              See our work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <LetsTalkContactLink
              className={buttonClassName({ variant: "secondary", size: "lg" })}
            >
              Talk to an engineer
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </LetsTalkContactLink>
          </div>
        </article>
      </div>
      <div className="svc-grid3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <Link
            key={project.href}
            href={project.href}
            className="group hover:-translate-y-1 overflow-hidden rounded-(--r-xl) border border-border bg-white no-underline shadow-sm transition-all duration-300 hover:border-border-strong hover:shadow-md"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <Image
                src={project.img}
                alt={project.imageAlt}
                title={project.imageTitle}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-[clamp(18px,2vw,24px)]">
              <p className="mb-2 font-mono text-[11px] text-tangerine-600 uppercase tracking-[0.12em]">
                {project.tag}
              </p>
              <h3 className="mb-2 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                {project.title}
              </h3>
              <p className="m-0 mb-4 font-sans text-[14px] text-fg2 leading-relaxed">
                {project.body}
              </p>
              <span className="inline-flex items-center gap-1.5 font-sans font-semibold text-[13.5px] text-accent">
                Read the full case study
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </LightSection>
  );
}
