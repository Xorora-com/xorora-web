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

export function PwdPortfolio() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="How we ship"
        title="Our Python web development portfolio"
        sub="The pattern we use on multi-tenant Python platforms: one backend, separate access boundaries, shared domain logic."
        className="mb-10 max-w-[760px]"
      />
      <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-(--r-xl) border border-border bg-white p-[clamp(24px,3vw,40px)]">
          <p className="mb-3 font-mono text-[12px] text-tangerine-600 uppercase tracking-[0.14em]">
            Multi-tenant SaaS
          </p>
          <h3 className="mb-4 font-sans font-semibold text-[clamp(22px,2.4vw,28px)] text-fg1 leading-snug">
            Four portals. One backend.
          </h3>
          <p className="mb-4 font-sans text-[15.5px] text-fg2 leading-relaxed">
            Distinct user groups often need different views of the same data and
            different permissions over it. Four applications would mean four
            codebases, four deployment pipelines, and the same business rules
            written four times over. Versions drift within a year.
          </p>
          <p className="mb-4 font-sans text-[15.5px] text-fg2 leading-relaxed">
            We build one backend with role-based portals on top. Shared domain
            logic, separate access boundaries, a single deployment. Permissions
            resolve at the data layer rather than in each interface, so a rule
            written once applies everywhere it should. Adding another role
            becomes a configuration change instead of a new application.
          </p>
          <p className="m-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
            Django&apos;s permission framework and row-level scoping make this
            the natural shape for Python SaaS — the same access-control
            discipline we apply when the product has more than one user type.
          </p>
        </article>
        <article className="flex flex-col justify-between rounded-(--r-xl) border border-border bg-white p-[clamp(24px,3vw,36px)]">
          <div>
            <p className="mb-3 font-mono text-[12px] text-tangerine-600 uppercase tracking-[0.14em]">
              Throughput and latency
            </p>
            <h3 className="mb-4 font-sans font-semibold text-[clamp(22px,2.4vw,26px)] text-fg1 leading-snug">
              FastAPI where concurrency is the constraint
            </h3>
            <p className="m-0 font-sans text-[15px] text-fg2 leading-relaxed">
              When inference or high-throughput endpoints sit next to a Django
              core, we isolate them in a FastAPI service so request latency
              stays inside the budget. We set those performance targets in
              architecture week, then load-test against them before launch — not
              after the first timeout.
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
