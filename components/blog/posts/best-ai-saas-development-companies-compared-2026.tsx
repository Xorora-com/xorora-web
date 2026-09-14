import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GetQuoteButton } from "@/components/blog/post";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const BEST_AI_SAAS_COMPARED_SLUG =
  "best-ai-saas-development-companies-compared-2026";

export const BEST_AI_SAAS_COMPARED_FAQS = [
  {
    q: "What's the difference between an AI prototype and a production-ready AI agent?",
    a: "A prototype demonstrates that an idea works under controlled conditions. A production-ready agent handles real, messy user input at scale, includes proper authentication and error handling, degrades gracefully when a tool call fails, and is monitored so issues get caught before they become customer-facing incidents. The engineering effort to bridge that gap is often underestimated when a demo looks convincing.",
  },
  {
    q: "How do I evaluate AI agent development companies for SaaS specifically at the production stage?",
    a: "Score them on three things distinct from a typical vendor comparison: production engineering depth (can they actually harden a system, not just build one), scaling and reliability track record (real evidence of systems handling growing load), and post-launch iteration capacity (is tuning an ongoing part of the relationship or a one-time handoff).",
  },
  {
    q: "Why does a working prototype sometimes fail in production?",
    a: "Common causes include insufficient error handling for edge cases the prototype never encountered, no monitoring to catch degraded performance before users notice, architecture that wasn't built to handle concurrent load, and agent behavior that was tuned against a narrow set of test cases rather than real, varied user input.",
  },
  {
    q: "Should I use the same vendor for the prototype and the production build?",
    a: "Not necessarily. Some teams intentionally validate an idea quickly and cheaply, then bring in a different partner specifically for production hardening and scaling. What matters is being explicit about which phase you're hiring for, since the skills and evaluation criteria genuinely differ between the two.",
  },
  {
    q: "How much does it cost to take an AI agent from prototype to production?",
    a: "Cost depends heavily on how far the existing prototype is from production-ready and how much of the surrounding application, data pipeline, and monitoring infrastructure needs to be built. Get a written estimate against your actual prototype and target scale rather than assuming a \"small tweak\" price, since production hardening is often a larger scope than the original build.",
  },
  {
    q: "Is Xorora a good choice for taking an AI agent from prototype to production?",
    a: "Xorora's team owns the agent, the surrounding application, and the data layer together, structured specifically to avoid the gap where a prototype works in a demo but nobody owns making it genuinely production-grade. It's a strong fit for growth-stage teams that need real production engineering and ongoing iteration capacity, not just an initial build. Projects start at $10,000, with pricing quoted directly against scope.",
  },
] as const;

export const BEST_AI_SAAS_COMPARED_META: BlogArticleMeta = {
  slug: BEST_AI_SAAS_COMPARED_SLUG,
  seoTitle: "Best AI SaaS Development Companies Compared (2026)",
  seoDescription:
    "Compare AI agent development companies for SaaS on production engineering depth, scaling reliability, and post-launch iteration capacity, built for teams moving past prototype.",
  keywords: [
    "AI agent development companies for SaaS",
    "custom AI software development",
    "SaaS AI solutions",
    "AI development services",
    "AI agent development",
    "custom software for SaaS companies",
  ],
  aiSummary:
    "This 2026 comparison scores eight AI agent development companies for SaaS on production engineering depth, scaling and reliability track record, and post-launch iteration capacity — the criteria that matter once a prototype needs to survive real traffic. Xorora, Master of Code Global, eSparkBiz, RTS Labs, Markovate, DevCom, Kanerika, and SoluLab are evaluated for growth-stage teams moving past demo.",
  companies: [
    "Xorora",
    "Master of Code Global",
    "eSparkBiz",
    "RTS Labs",
    "Markovate",
    "DevCom",
    "Kanerika",
    "SoluLab",
  ],
  faqs: [...BEST_AI_SAAS_COMPARED_FAQS],
  toc: [
    { id: "who-this-is-for", label: "Who this is for" },
    { id: "three-criteria", label: "Three decision criteria" },
    { id: "decision-scorecard", label: "Decision scorecard" },
    { id: "xorora", label: "1. Xorora" },
    { id: "master-of-code-global", label: "2. Master of Code Global" },
    { id: "esparkbiz", label: "3. eSparkBiz" },
    { id: "rts-labs", label: "4. RTS Labs" },
    { id: "markovate", label: "5. Markovate" },
    { id: "devcom", label: "6. DevCom" },
    { id: "kanerika", label: "7. Kanerika" },
    { id: "solulab", label: "8. SoluLab" },
    { id: "questions-to-ask", label: "Questions before production" },
    { id: "faq", label: "FAQ" },
  ],
};

interface ScorecardRow {
  id: string;
  name: string;
  production: string;
  scaling: string;
  iteration: string;
}

interface CompanyProfile {
  id: string;
  rank: number;
  name: string;
  location: string;
  knownFor: string;
  suitedFor: string;
  scorecardRead: string;
  snapshot?: string;
  paragraphs: ReactNode[];
  consideration?: ReactNode;
  minProject?: string;
  href?: string;
  hrefLabel?: string;
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="font-semibold text-accent no-underline hover:text-tangerine-600"
    >
      {children}
    </Link>
  );
}

const CRITERIA = [
  {
    title: "1. Production engineering depth",
    body: "Building a working demo and hardening it for production — real authentication, error handling, monitoring, graceful degradation when a tool call fails — are different skill sets. Ask specifically what changes between a vendor's prototype and their production deliverable, not just whether they can demo something impressive.",
  },
  {
    title: "2. Scaling and reliability track record",
    body: "Can this partner show systems handling real, growing load — not a pilot that never left a single customer's sandbox? Published uptime numbers and evidence of systems that scaled alongside a growing user base matter far more here than a long list of logos.",
  },
  {
    title: "3. Post-launch iteration capacity",
    body: "AI development services don't end at launch — agent behavior needs tuning as real usage reveals edge cases the prototype never hit. A vendor that treats delivery as a one-time handoff is a materially different partner than one built for ongoing iteration.",
  },
];

const SCORECARD: ScorecardRow[] = [
  {
    id: "xorora",
    name: "Xorora",
    production:
      "Strong — full-stack team owns hardening, not just initial build",
    scaling: "Strong — published uptime and real production case studies",
    iteration: "Strong — staff augmentation model supports ongoing iteration",
  },
  {
    id: "master-of-code-global",
    name: "Master of Code Global",
    production: "Strong — 20+ years, 1,000+ delivered projects",
    scaling: "Strong — long track record across large deployments",
    iteration: "Moderate — enterprise engagement model, less agile iteration",
  },
  {
    id: "esparkbiz",
    name: "eSparkBiz",
    production: "Strong — CMMI Level 3 process discipline",
    scaling: "Strong — 1,000+ projects across regulated industries",
    iteration: "Moderate — process-heavy, iteration speed varies by contract",
  },
  {
    id: "rts-labs",
    name: "RTS Labs",
    production: "Strong — enterprise-scale production deployments",
    scaling: "Strong — built specifically for large-scale data infrastructure",
    iteration:
      "Moderate — enterprise cadence, not built for rapid startup iteration",
  },
  {
    id: "markovate",
    name: "Markovate",
    production:
      "Moderate — startup-focused, less enterprise-scale hardening proof",
    scaling: "Moderate — strong for early-stage, less evidence at large scale",
    iteration: "Strong — startup-native, built for fast iteration cycles",
  },
  {
    id: "devcom",
    name: "DevCom",
    production: "Strong — production work inside complex legacy systems",
    scaling: "Strong — proven inside systems that can't afford downtime",
    iteration: "Moderate — legacy-system cadence, slower iteration by nature",
  },
  {
    id: "kanerika",
    name: "Kanerika",
    production: "Strong — compliance-heavy delivery demands production rigor",
    scaling: "Moderate — track record concentrated in regulated verticals",
    iteration: "Moderate — compliance review cycles can slow iteration speed",
  },
  {
    id: "solulab",
    name: "SoluLab",
    production: "Strong — ISO/SOC2/CMMI certified process maturity",
    scaling: "Moderate — strong within its blockchain/FinTech niche",
    iteration: "Moderate — niche focus limits broader SaaS iteration evidence",
  },
];

const QUESTIONS = [
  {
    q: '"What specifically changes between your prototype and your production deliverable?"',
    a: 'A vague answer here usually means the "production" version is closer to the demo than you\'d want.',
  },
  {
    q: '"Show me a system you built that scaled significantly after launch — what broke, and how you handled it."',
    a: "Every production system hits unexpected load or edge cases. The honest answer to this question tells you more than any case study summary.",
  },
  {
    q: '"What does the engagement look like after launch?"',
    a: "Get specifics: is tuning and iteration priced separately, is there a retainer model, or does the relationship effectively end at handoff?",
  },
  {
    q: '"How do you monitor agent behavior in production, and what happens when it does something wrong?"',
    a: 'A team with real production discipline will have a concrete answer involving monitoring, guardrails, and rollback — not just "we test it before launch."',
  },
  {
    q: '"Can we bring this in-house partially, and how does that work?"',
    a: "Especially relevant for growth-stage teams building internal AI capability alongside external delivery — ask directly whether staff augmentation or knowledge transfer is part of the model.",
  },
];

const COMPANIES: CompanyProfile[] = [
  {
    id: "xorora",
    rank: 1,
    name: "Xorora",
    location: "United States",
    knownFor: "Prototype-to-production AI agents for growth-stage SaaS",
    suitedFor:
      "Growth-stage teams that need custom software for SaaS companies covering the full journey from working prototype to production system, not a vendor that stops engaging once the demo looks good",
    scorecardRead:
      "Strong across production engineering depth, scaling and reliability, and post-launch iteration capacity.",
    snapshot: "/assets/blog/companies/xorora-saas-compared.png",
    minProject: "$10,000+",
    href: ROUTES.aiAgentDevelopment,
    hrefLabel: "AI agent development services",
    paragraphs: [
      <>
        Xorora is a US-based AI development partner built specifically around
        the transition growth-stage teams actually face: taking something that
        works in a demo and making it work in production. Its{" "}
        <TextLink href={ROUTES.aiAgentDevelopment}>
          AI agent development
        </TextLink>{" "}
        work isn&apos;t handed off after initial delivery — the same team that
        builds the agent also owns the surrounding application and data layer,
        which is the structural reason production hardening doesn&apos;t get
        treated as a separate, deprioritized phase.
      </>,
      <>
        On production engineering depth: relevant work includes a{" "}
        <TextLink href={ROUTES.caseStudy("real-time-compliance-intelligence")}>
          real-time compliance intelligence platform
        </TextLink>{" "}
        turning regulatory changes into live alerts under real production load,
        and{" "}
        <TextLink href={ROUTES.caseStudy("real-time-saas-event-monitoring")}>
          real-time event monitoring infrastructure
        </TextLink>{" "}
        built for instant, full-context alerting — systems that had to be
        engineered for reliability from day one, not retrofitted after a
        prototype started breaking.
      </>,
      <>
        On scaling and reliability: a{" "}
        <TextLink href={ROUTES.caseStudy("unified-ai-voice-operations")}>
          unified AI voice operations system
        </TextLink>{" "}
        serves four role-specific SaaS portals from one shared architecture —
        evidence of a system built to scale across use cases rather than a
        single-purpose demo. Publicly cited results across Xorora&apos;s{" "}
        <TextLink href={ROUTES.engineering}>engineering</TextLink> work include
        a 3.5x median speed-up compared to building the same system in-house and
        99.9% uptime across deployed systems.
      </>,
      <>
        On post-launch iteration capacity: teams that want ongoing tuning
        capacity without a full re-engagement cycle can add capacity through{" "}
        <TextLink href={ROUTES.staffAugmentation}>staff augmentation</TextLink>,
        which matters specifically for growth-stage teams whose agent behavior
        needs to keep evolving as real usage patterns emerge.
      </>,
    ],
    consideration: (
      <>
        Xorora is newer than several other names on this list and doesn&apos;t
        have the multi-decade portfolio some larger firms can point to. What it
        offers instead is a team structurally built to avoid the handoff gap
        where a prototype &quot;works&quot; in a demo but nobody owns making it
        actually production-grade.
      </>
    ),
  },
  {
    id: "master-of-code-global",
    rank: 2,
    name: "Master of Code Global",
    location: "Global / enterprise delivery",
    knownFor: "Deep production bench across 1,000+ AI projects",
    suitedFor:
      "Growth-stage teams that want a partner with an exceptionally long production track record, even if the engagement model runs closer to enterprise pacing",
    scorecardRead:
      "Strong on production depth and scaling track record given the sheer delivery volume; post-launch iteration leans toward an enterprise engagement cadence — worth confirming directly if your team needs fast, frequent tuning cycles.",
    snapshot: "/assets/blog/companies/master-of-code-global-compared.png",
    paragraphs: [
      "Master of Code Global brings more than two decades of experience and over a thousand delivered AI projects — a genuinely deep bench for production engineering and scaling proof.",
    ],
  },
  {
    id: "esparkbiz",
    rank: 3,
    name: "eSparkBiz",
    location: "CMMI Level 3 delivery",
    knownFor: "Certified process maturity for production AI builds",
    suitedFor:
      "Growth-stage teams that specifically value certified process maturity over the fastest possible iteration cycle",
    scorecardRead:
      "Strong on production engineering and delivery volume; process discipline is a genuine strength but can trade off against iteration speed depending on contract structure.",
    snapshot: "/assets/blog/companies/esparkbiz-compared.png",
    paragraphs: [
      "eSparkBiz brings CMMI Level 3 process certification and over a thousand delivered projects to production-grade custom AI software development across regulated and non-regulated industries alike.",
    ],
  },
  {
    id: "rts-labs",
    rank: 4,
    name: "RTS Labs",
    location: "Enterprise data + AI",
    knownFor: "Production-scale data infrastructure for agent systems",
    suitedFor:
      "Growth-stage teams whose production bottleneck is data infrastructure as much as agent behavior",
    scorecardRead:
      "Strong on production depth and scaling proof at enterprise scale; iteration cadence is built for larger organizations — worth clarifying fit if your team needs startup-speed tuning cycles.",
    snapshot: "/assets/blog/companies/rts-labs-compared.png",
    paragraphs: [
      "RTS Labs pairs data strategy consulting with production-scale deployment experience — useful for teams whose scaling challenge is as much about data infrastructure as the agent logic itself.",
    ],
  },
  {
    id: "markovate",
    rank: 5,
    name: "Markovate",
    location: "California, USA",
    knownFor: "Startup-native AI delivery with fast iteration cycles",
    suitedFor:
      "Growth-stage teams prioritizing iteration speed over a long enterprise-scale production history",
    scorecardRead:
      "Strong on iteration speed and startup-native delivery; production engineering and scaling proof at true enterprise volume is less established than firms with a longer, larger-scale track record.",
    snapshot: "/assets/blog/companies/markovate-saas-compared.png",
    paragraphs: [
      "Markovate focuses on applied AI for startups and fast-growing digital businesses, with genuine strength in fast iteration cycles built for teams that move quickly.",
    ],
  },
  {
    id: "devcom",
    rank: 6,
    name: "DevCom",
    location: "Legacy-system integration",
    knownFor: "Mission-critical agents inside complex legacy stacks",
    suitedFor:
      "Growth-stage teams whose production environment includes real legacy system constraints that can't be wished away",
    scorecardRead:
      "Strong on production depth and reliability given the legacy-system context; iteration speed is inherently slower given the constraints of the systems involved.",
    snapshot: "/assets/blog/companies/devcom-compared.png",
    paragraphs: [
      "DevCom specializes in embedding agents into complex, often mission-critical legacy systems where downtime isn't an option — a genuine test of production engineering discipline.",
    ],
  },
  {
    id: "kanerika",
    rank: 7,
    name: "Kanerika",
    location: "Compliance & cybersecurity focus",
    knownFor: "Compliance-grade AI, analytics, and automation delivery",
    suitedFor:
      "Growth-stage teams in regulated industries where compliance-grade production rigor is a hard requirement, not a nice-to-have",
    scorecardRead:
      "Strong on production engineering given compliance demands; scaling evidence and iteration speed are more concentrated in regulated verticals than broad SaaS contexts.",
    snapshot: "/assets/blog/companies/kanerika-compared.png",
    paragraphs: [
      "Kanerika focuses on AI, analytics, and automation with particular strength in compliance and cybersecurity-heavy delivery, where production rigor is non-negotiable by regulatory requirement.",
    ],
  },
  {
    id: "solulab",
    rank: 8,
    name: "SoluLab",
    location: "Blockchain / FinTech niche",
    knownFor: "ISO, SOC 2, and CMMI-certified AI + blockchain delivery",
    suitedFor:
      "Growth-stage teams whose product overlaps with blockchain or on-chain data and need certified process rigor",
    scorecardRead:
      "Strong on certified production process; scaling and iteration evidence is concentrated in its FinTech/blockchain niche rather than broad SaaS production contexts.",
    snapshot: "/assets/blog/companies/solulab-compared.png",
    paragraphs: [
      "SoluLab combines AI agent development with blockchain expertise and holds ISO, SOC 2, and CMMI Level 3 certifications — real evidence of process maturity applied to production delivery.",
    ],
  },
];

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";

export function BestAiSaasComparedArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-10")}>
        <strong className="font-semibold text-fg1">Quick answer:</strong> The
        gap that actually matters for growth-stage teams isn&apos;t which{" "}
        <strong className="font-semibold text-fg1">
          AI agent development companies for SaaS
        </strong>{" "}
        can build a working prototype — most can. It&apos;s which ones can take
        that prototype and turn it into something that survives real production
        traffic, scales with your user base, and keeps improving after launch
        instead of degrading. Xorora, Master of Code Global, eSparkBiz, RTS Labs,
        Markovate, DevCom, Kanerika, and SoluLab are scored below specifically
        on that transition, not just on whether they can ship a v1.
      </p>

      <h2 id="who-this-is-for" className={h2Class}>
        Who this comparison is for
      </h2>
      <p className={cn(bodyClass, "mb-10")}>
        This is written for growth-stage SaaS and software company leaders who
        have already validated an AI agent use case — a pilot, a proof of
        concept, an internal demo — and now need to decide who takes it to
        production. That&apos;s a different evaluation than choosing a vendor
        for a first prototype. Building{" "}
        <strong className="font-semibold text-fg1">SaaS AI solutions</strong>{" "}
        that hold up under real usage is a different discipline than proving a
        concept works in a controlled demo. The risk profile changes: a
        prototype that breaks is embarrassing; a production agent that breaks is
        a customer-facing incident. If you&apos;re past the &quot;should we
        build this&quot; question and into &quot;who can actually run this at
        scale,&quot; the criteria below are built for that specific decision.
      </p>

      <h2 id="three-criteria" className={h2Class}>
        The three criteria that actually matter at this stage
      </h2>
      <div className="mb-10 flex flex-col gap-4">
        {CRITERIA.map((item) => (
          <div
            key={item.title}
            className="rounded-(--r-lg) border border-border bg-white px-5 py-5"
          >
            <h3 className="m-0 mb-2 font-sans font-semibold text-[17px] text-fg1">
              {item.title}
            </h3>
            <p className={cn(bodyClass, "text-[15.5px]")}>{item.body}</p>
          </div>
        ))}
      </div>

      <h2 id="decision-scorecard" className={h2Class}>
        Decision scorecard
      </h2>
      <div className="mb-5 overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              {[
                "Company",
                "Production engineering depth",
                "Scaling & reliability track record",
                "Post-launch iteration capacity",
              ].map((col) => (
                <th
                  key={col}
                  className="px-4 py-3.5 font-sans font-semibold text-[12.5px] text-fg3"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SCORECARD.map((row, index) => (
              <tr
                key={row.id}
                className={cn(
                  "border-border border-t",
                  index % 2 === 0 ? "bg-surface" : "bg-slate-50",
                )}
              >
                <td className="px-4 py-3.5 font-sans font-semibold text-[14.5px] text-fg1">
                  <a
                    href={`#${row.id}`}
                    className="text-fg1 no-underline hover:text-xo-indigo"
                  >
                    {row.name}
                  </a>
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.production}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.scaling}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.iteration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={cn(bodyClass, "mb-10")}>
        Use this table as a starting filter, not a final verdict. A
        &quot;moderate&quot; on iteration speed isn&apos;t disqualifying if your
        team plans to own ongoing tuning internally after a strong initial
        build.
      </p>

      {COMPANIES.map((company) => (
        <CompanySection key={company.id} company={company} />
      ))}

      <h2 id="questions-to-ask" className={h2Class}>
        Questions to ask before you move to production
      </h2>
      <div className="mb-10 flex flex-col gap-4">
        {QUESTIONS.map((item) => (
          <div
            key={item.q}
            className="rounded-(--r-lg) border border-border bg-white px-5 py-5"
          >
            <h3 className="m-0 mb-2 font-sans font-semibold text-[17px] text-fg1">
              {item.q}
            </h3>
            <p className={cn(bodyClass, "text-[15.5px]")}>{item.a}</p>
          </div>
        ))}
      </div>

      <h2 id="faq" className={h2Class}>
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-4">
        {BEST_AI_SAAS_COMPARED_FAQS.map((faq, index) => (
          <div
            key={faq.q}
            className="rounded-(--r-lg) border border-border bg-white px-5 py-5"
          >
            <h3 className="m-0 mb-2 font-sans font-semibold text-[17px] text-fg1">
              Q{index + 1}: {faq.q}
            </h3>
            <p className={cn(bodyClass, "text-[15.5px]")}>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompanySection({ company }: { company: CompanyProfile }) {
  return (
    <section
      id={company.id}
      className="mt-12 scroll-mt-[110px] rounded-(--r-xl) border border-border bg-white p-[clamp(22px,3vw,36px)]"
    >
      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mb-2 font-mono text-[11px] text-tangerine-600 uppercase tracking-[0.16em]">
            {String(company.rank).padStart(2, "0")}
          </p>
          <h2 className="m-0 font-bold font-sans text-[clamp(26px,3vw,34px)] text-fg1 tracking-[-0.02em]">
            {company.name}
          </h2>
        </div>
      </div>

      {company.snapshot ? (
        <figure className="relative z-0 mb-6 overflow-hidden rounded-(--r-lg) border border-border bg-slate-100">
          <Image
            src={company.snapshot}
            alt={`${company.name} homepage`}
            title={`${company.name} website homepage snapshot`}
            width={1200}
            height={675}
            sizes="(max-width: 1180px) 100vw, 760px"
            quality={90}
            className="h-auto w-full object-cover object-top"
          />
          <figcaption className="sr-only">
            Homepage snapshot of {company.name}
          </figcaption>
        </figure>
      ) : null}

      <dl className="mb-6 grid gap-3 sm:grid-cols-2">
        <MetaItem label="Location" value={company.location} />
        <MetaItem label="Best known for" value={company.knownFor} />
        {company.minProject ? (
          <MetaItem label="Minimum project size" value={company.minProject} />
        ) : null}
        <MetaItem label="Best suited for" value={company.suitedFor} />
      </dl>

      {company.paragraphs.map((paragraph, index) => (
        <p key={index} className={cn(bodyClass, "mb-4")}>
          {paragraph}
        </p>
      ))}

      {company.href ? (
        <p className="mb-5">
          <Link
            href={company.href}
            className="inline-flex items-center gap-1.5 font-sans font-semibold text-[14.5px] text-accent no-underline hover:text-tangerine-600"
          >
            {company.hrefLabel ?? "Learn more"}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </p>
      ) : null}

      <div className="rounded-(--r-lg) border border-indigo-100 bg-indigo-50 px-5 py-4">
        <p className="mb-1.5 font-sans font-semibold text-[13px] text-xo-indigo">
          Scorecard read
        </p>
        <p className={cn(bodyClass, "text-[15px]")}>{company.scorecardRead}</p>
      </div>

      {company.consideration ? (
        <div className="mt-4 rounded-(--r-lg) border border-border bg-slate-50 px-5 py-4">
          <p className="mb-1.5 font-sans font-semibold text-[13px] text-fg3">
            Practical consideration
          </p>
          <p className={cn(bodyClass, "text-[15px]")}>{company.consideration}</p>
        </div>
      ) : null}

      <p className="mt-5 mb-5 font-sans text-[14px] text-fg3 leading-relaxed">
        {company.minProject ? `Minimum project: ${company.minProject}. ` : ""}
        Best suited for: {company.suitedFor}
      </p>
      <GetQuoteButton company={company.name} />
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-(--r-md) border border-border bg-slate-50 px-4 py-3">
      <dt className="mb-1 font-mono text-[10.5px] text-fg3 uppercase tracking-[0.12em]">
        {label}
      </dt>
      <dd className="m-0 font-sans font-semibold text-[14.5px] text-fg1">
        {value}
      </dd>
    </div>
  );
}
