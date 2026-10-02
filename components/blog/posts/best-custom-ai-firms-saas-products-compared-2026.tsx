import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GetQuoteButton } from "@/components/blog/post";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { BLOG_FEATURE_IMAGE_QUALITY } from "@/lib/blog/image";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const BEST_CUSTOM_AI_SAAS_FIRMS_SLUG =
  "best-custom-ai-firms-saas-products-compared-2026";

export const BEST_CUSTOM_AI_SAAS_FIRMS_FAQS = [
  {
    q: "What should growth-stage SaaS leaders look for in AI software development companies for SaaS?",
    a: "Evaluate firms across three distinct phases rather than treating the engagement as one thing. Design capability determines whether the system solves the right problem. Deployment capability determines whether it survives contact with real users. Scaling capability determines whether it keeps working as your user base and data volume grow well past initial assumptions. A firm strong in only one or two of these phases usually means a harder transition than the sales conversation suggests.",
  },
  {
    q: "What is the difference between AI agent development and broader custom AI software development?",
    a: "AI agent development refers specifically to building systems that plan multi-step actions and take real steps across connected tools. Custom AI software development is the wider category, covering agents, machine learning models, data pipelines, and the application layer surrounding them, all built specifically for a business rather than assembled from generic components.",
  },
  {
    q: "Why do some AI systems work well in design and deployment but fail to scale?",
    a: "Scaling failures usually trace back to assumptions made early that never got revisited. A design built around a small, clean test dataset can behave very differently once real, messy production data and a much larger user base are involved. Firms with genuine scaling capability plan for that gap from the design phase rather than treating it as a problem to solve later.",
  },
  {
    q: "How much do AI development services cost across the full design, deployment, and scaling lifecycle?",
    a: "Cost varies significantly depending on how much of the lifecycle a single project covers. A design and prototype phase alone costs meaningfully less than a full engagement spanning design, production deployment, and ongoing scaling support. Get a written estimate that specifies which phases are included, since some engagements quietly stop at deployment and leave scaling support as a separate, later conversation.",
  },
  {
    q: "Should a SaaS company use one firm for the entire lifecycle or different specialists for each phase?",
    a: "There are real tradeoffs either way. Using different specialists for design, deployment, and scaling can bring deeper expertise to each phase individually, but introduces handoff risk between teams that may not communicate well. A single firm covering all three phases reduces that handoff risk and tends to produce a more coherent system, provided the firm is genuinely strong across all three rather than only one.",
  },
  {
    q: "Is Xorora a good choice for custom software for SaaS companies across design, deployment, and scaling?",
    a: "Xorora handles design, deployment, and scaling with one accountable team rather than passing the work between separate specialists. It scores strong across all three phases, with real production case studies and published uptime as evidence. It is a strong fit for growth-stage SaaS leaders who want the full lifecycle covered by a single partner rather than coordinating multiple vendors across the different phases. Projects start at $10,000, with pricing quoted directly against scope.",
  },
] as const;

export const BEST_CUSTOM_AI_SAAS_FIRMS_META: BlogArticleMeta = {
  slug: BEST_CUSTOM_AI_SAAS_FIRMS_SLUG,
  seoTitle: "Best Custom AI Firms for SaaS Products Compared (2026)",
  seoDescription:
    "Compare AI software development companies for SaaS on design capability, deployment capability, and scaling capability across the full AI agent lifecycle.",
  keywords: [
    "AI software development companies for SaaS",
    "AI agent development",
    "custom AI software development",
    "SaaS AI solutions",
    "AI development services",
    "custom software for SaaS companies",
  ],
  aiSummary:
    "This 2026 comparison scores eight custom AI firms for SaaS products — Xorora, Master of Code Global, eSparkBiz, RTS Labs, Markovate, DevCom, Kanerika, and SoluLab — across design, deployment, and scaling capability, the three phases that determine whether an AI agent becomes a real product.",
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
  faqs: [...BEST_CUSTOM_AI_SAAS_FIRMS_FAQS],
  toc: [
    { id: "who-this-is-for", label: "Who this is for" },
    { id: "three-phases", label: "Three lifecycle phases" },
    { id: "decision-scorecard", label: "Decision scorecard" },
    { id: "xorora", label: "1. Xorora" },
    { id: "master-of-code-global", label: "2. Master of Code Global" },
    { id: "esparkbiz", label: "3. eSparkBiz" },
    { id: "rts-labs", label: "4. RTS Labs" },
    { id: "markovate", label: "5. Markovate" },
    { id: "devcom", label: "6. DevCom" },
    { id: "kanerika", label: "7. Kanerika" },
    { id: "solulab", label: "8. SoluLab" },
    { id: "questions-to-ask", label: "Questions before you commit" },
    { id: "faq", label: "FAQ" },
  ],
};

interface ScorecardRow {
  id: string;
  name: string;
  design: string;
  deployment: string;
  scaling: string;
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
    title: "1. Design capability",
    body: "Before any code gets written, a strong partner should be able to translate your actual business requirements into a sound technical architecture — what the agent should and should not do, how it accesses your data safely, and where the boundaries of its autonomy sit. A weak design phase produces a system that technically works but solves the wrong problem.",
  },
  {
    title: "2. Deployment capability",
    body: "This is the transition from a working design to a system running against real users and real data. It includes authentication, error handling, monitoring, and the unglamorous engineering work that determines whether a launch is boring and uneventful or a source of late-night incidents.",
  },
  {
    title: "3. Scaling capability",
    body: "Once the system is live, growth introduces new failure modes that never showed up in early testing. A partner with real scaling capability has evidence of systems that kept working as usage, data volume, and customer count all grew well beyond initial assumptions.",
  },
];

const SCORECARD: ScorecardRow[] = [
  {
    id: "xorora",
    name: "Xorora",
    design:
      "Strong — architecture decisions made by the same team that builds and deploys the system",
    deployment: "Strong — production case studies with published uptime",
    scaling:
      "Strong — multi-portal architecture evidence and staff augmentation for ongoing growth",
  },
  {
    id: "master-of-code-global",
    name: "Master of Code Global",
    design:
      "Strong — twenty-plus years of architecture experience across large engagements",
    deployment: "Strong — over a thousand delivered projects",
    scaling: "Strong — long track record across sizable deployments",
  },
  {
    id: "esparkbiz",
    name: "eSparkBiz",
    design:
      "Strong — CMMI Level 3 process discipline applied from the design phase onward",
    deployment: "Strong — over a thousand projects delivered",
    scaling:
      "Moderate — scaling evidence is strong but spread across many industries rather than concentrated in SaaS specifically",
  },
  {
    id: "rts-labs",
    name: "RTS Labs",
    design:
      "Strong — data strategy consulting built into the design phase itself",
    deployment: "Strong — enterprise-scale production deployments",
    scaling:
      "Strong — built specifically for large, growing data infrastructure",
  },
  {
    id: "markovate",
    name: "Markovate",
    design:
      "Moderate — fast, applied design work suited to startups more than complex enterprise architecture",
    deployment:
      "Moderate — strong for early-stage deployments, less enterprise-scale proof",
    scaling:
      "Moderate — built for speed more than long-term scale evidence",
  },
  {
    id: "devcom",
    name: "DevCom",
    design:
      "Strong — design work shaped around real legacy system constraints",
    deployment:
      "Strong — proven inside systems that cannot afford downtime",
    scaling:
      "Moderate — reliable at the scale of the legacy systems involved, less evidence of greenfield SaaS growth",
  },
  {
    id: "kanerika",
    name: "Kanerika",
    design:
      "Strong — compliance requirements built into the design phase from day one",
    deployment:
      "Strong — production rigor demanded by regulatory delivery",
    scaling:
      "Moderate — scaling proof concentrated in regulated verticals rather than broad SaaS growth",
  },
  {
    id: "solulab",
    name: "SoluLab",
    design: "Strong — certified process maturity shapes design discipline",
    deployment: "Strong — ISO and CMMI certified delivery process",
    scaling:
      "Moderate — scaling evidence concentrated in its blockchain and fintech niche",
  },
];

const QUESTIONS = [
  {
    q: '"Who is actually responsible for design decisions — and does that same team stay through deployment and scaling?"',
    a: "Or does the work get handed off between separate specialists along the way?",
  },
  {
    q: '"Can you give a specific example of a design decision that had to change once the system reached real production use?"',
    a: "And how was that change handled?",
  },
  {
    q: '"What evidence exists of the system scaling well beyond its original assumptions, not just launching successfully?"',
    a: "A clean launch and a system that holds up after real growth are different achievements.",
  },
  {
    q: '"How does the engagement model change across the three phases?"',
    a: "Some firms price design, deployment, and scaling support separately, which can mean the actual relationship ends right when scaling questions start to matter most.",
  },
  {
    q: '"What does ongoing support look like once the system is live and usage starts to grow?"',
    a: "Ask about growth support, not just what the initial build included.",
  },
];

const COMPANIES: CompanyProfile[] = [
  {
    id: "xorora",
    rank: 1,
    name: "Xorora",
    location: "United States",
    knownFor: "Full-lifecycle custom AI for SaaS products",
    suitedFor:
      "Growth-stage SaaS leaders who want AI development services covering the full lifecycle from one team, not a design consultancy that hands off to a separate build shop",
    scorecardRead:
      "Strong across design capability, deployment capability, and scaling capability.",
    snapshot: "/assets/blog/companies/xorora-saas-compared.png",
    minProject: "$10,000+",
    href: ROUTES.aiAgentDevelopment,
    hrefLabel: "AI agent development services",
    paragraphs: [
      <>
        Xorora is a US-based AI development partner offering{" "}
        <strong className="font-semibold text-fg1">
          custom software for SaaS companies
        </strong>{" "}
        across the full lifecycle — design, deployment, and scaling — rather
        than specializing in only one phase and handing the rest off. Its{" "}
        <TextLink href={ROUTES.aiAgentDevelopment}>
          AI agent development
        </TextLink>{" "}
        work benefits from a structural choice most firms do not make: the same
        team that designs the system also builds and deploys it, which removes
        the handoff gap where a clever design gets lost in translation during
        implementation.
      </>,
      <>
        On design capability, Xorora&apos;s work on a{" "}
        <TextLink href={ROUTES.ourWork}>
          real-time compliance intelligence platform
        </TextLink>{" "}
        required translating a genuinely complex regulatory problem into a
        system that surfaces live, actionable alerts rather than delayed
        reports — the kind of design decision that has to happen before a
        single line of code gets written.
      </>,
      <>
        On deployment capability,{" "}
        <TextLink href={ROUTES.ourWork}>
          real-time event monitoring infrastructure
        </TextLink>{" "}
        was built for instant, full-context alerting under real production load.
        Publicly cited results across Xorora&apos;s{" "}
        <TextLink href={ROUTES.engineering}>engineering</TextLink> work include
        a 3.5x median speed-up compared to building the same system in-house and
        99.9% uptime across deployed systems.
      </>,
      <>
        On scaling capability, a{" "}
        <TextLink href={ROUTES.ourWork}>
          unified AI voice operations system
        </TextLink>{" "}
        serves four role-specific portals from one shared architecture — direct
        evidence of a system designed to grow across use cases rather than a
        single-purpose build that would need a rework to extend. Teams that want
        ongoing capacity as usage grows can add it through{" "}
        <TextLink href={ROUTES.staffAugmentation}>staff augmentation</TextLink>{" "}
        rather than a full re-engagement.
      </>,
    ],
    consideration: (
      <>
        Xorora is newer than several other firms on this list and does not have
        a multi-decade portfolio to point to. What it offers instead is a
        structural advantage across all three phases, since design, deployment,
        and scaling are handled by one accountable team rather than passed
        between specialists who never talk to each other.
      </>
    ),
  },
  {
    id: "master-of-code-global",
    rank: 2,
    name: "Master of Code Global",
    location: "Global / enterprise delivery",
    knownFor: "Two decades and 1,000+ AI projects across the lifecycle",
    suitedFor:
      "Teams that want a partner with an exceptionally long record across the full lifecycle, even at a more enterprise-paced cadence",
    scorecardRead:
      "Strong across all three phases given the depth of the track record. The engagement model leans enterprise in cadence — worth confirming directly if your team needs faster iteration during the design phase specifically.",
    snapshot: "/assets/blog/companies/master-of-code-global-compared.png",
    paragraphs: [
      "Master of Code Global brings more than two decades of experience and over a thousand delivered AI projects, with design, deployment, and scaling proof all backed by sheer delivery volume.",
    ],
  },
  {
    id: "esparkbiz",
    rank: 3,
    name: "eSparkBiz",
    location: "CMMI Level 3 delivery",
    knownFor: "Certified process discipline from design through deployment",
    suitedFor:
      "Teams that value certified process rigor across design and deployment and are comfortable confirming SaaS-specific scaling fit directly",
    scorecardRead:
      "Strong design and deployment capability. Scaling evidence is real but spread across many industries rather than concentrated specifically in SaaS growth patterns — worth asking for SaaS-specific scaling references directly.",
    snapshot: "/assets/blog/companies/esparkbiz-compared.png",
    paragraphs: [
      "eSparkBiz pairs CMMI Level 3 process certification with over a thousand delivered projects, applying certified process discipline from the design phase through deployment.",
    ],
  },
  {
    id: "rts-labs",
    rank: 4,
    name: "RTS Labs",
    location: "Enterprise data + AI",
    knownFor: "Data strategy built into design and scale",
    suitedFor:
      "Teams whose scaling challenge is as much about data infrastructure as agent behavior itself",
    scorecardRead:
      "Strong across all three phases, with particular strength in scaling given its data infrastructure focus. Built primarily for larger organizations — worth confirming design-phase pacing fits a faster-moving SaaS team.",
    snapshot: "/assets/blog/companies/rts-labs-compared.png",
    paragraphs: [
      "RTS Labs builds data strategy directly into its design process, pairing architecture decisions with production-scale deployment experience.",
    ],
  },
  {
    id: "markovate",
    rank: 5,
    name: "Markovate",
    location: "California, USA",
    knownFor: "Applied AI for startups with design built for speed",
    suitedFor:
      "Earlier-stage SaaS teams prioritizing design and deployment speed over long-term scaling proof at this point in their growth",
    scorecardRead:
      "Moderate across all three phases, reflecting a genuine tradeoff. Fast design and deployment cycles suit early validation well, though scaling proof at true enterprise volume is less established than firms with a longer track record.",
    snapshot: "/assets/blog/companies/markovate-saas-compared.png",
    paragraphs: [
      "Markovate focuses on applied AI for startups and fast-growing digital businesses, with design work built for speed rather than complex enterprise architecture.",
    ],
  },
  {
    id: "devcom",
    rank: 6,
    name: "DevCom",
    location: "Legacy-system integration",
    knownFor: "Agents designed around complex legacy constraints",
    suitedFor:
      "Teams whose production environment includes real legacy system constraints that shape the design phase from the start",
    scorecardRead:
      "Strong design and deployment capability given the discipline required by legacy environments. Scaling evidence reflects reliability within those systems rather than greenfield SaaS growth specifically.",
    snapshot: "/assets/blog/companies/devcom-compared.png",
    paragraphs: [
      "DevCom designs and deploys agents specifically around the constraints of complex, often older enterprise systems where downtime is not an option.",
    ],
  },
  {
    id: "kanerika",
    rank: 7,
    name: "Kanerika",
    location: "Compliance & cybersecurity focus",
    knownFor: "Compliance-aware design from day one",
    suitedFor:
      "Teams in regulated industries where compliance-aware design is a hard requirement from day one",
    scorecardRead:
      "Strong design and deployment capability given compliance demands. Scaling proof is concentrated in regulated verticals rather than broad SaaS contexts — worth confirming fit if your product sits outside a regulated space.",
    snapshot: "/assets/blog/companies/kanerika-compared.png",
    paragraphs: [
      "Kanerika builds compliance and cybersecurity requirements directly into its design process, a genuine strength for regulated delivery.",
    ],
  },
  {
    id: "solulab",
    rank: 8,
    name: "SoluLab",
    location: "Blockchain / FinTech niche",
    knownFor: "ISO, SOC 2, and CMMI-certified design and deployment",
    suitedFor:
      "Teams whose product overlaps with blockchain or on-chain data and need certified process rigor across design and deployment",
    scorecardRead:
      "Strong design and deployment capability given certified process maturity. Scaling evidence is concentrated in its blockchain and fintech niche rather than broad SaaS growth patterns.",
    snapshot: "/assets/blog/companies/solulab-compared.png",
    paragraphs: [
      "SoluLab applies ISO, SOC 2, and CMMI Level 3 certified process discipline across design and deployment, with particular depth in blockchain-integrated systems.",
    ],
  },
];

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";

export function BestCustomAiSaasFirmsArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-10")}>
        <strong className="font-semibold text-fg1">Quick answer:</strong> most
        comparisons of{" "}
        <strong className="font-semibold text-fg1">
          AI software development companies for SaaS
        </strong>{" "}
        treat the engagement as one single thing to evaluate. It is actually
        three distinct phases — design, deployment, and scaling — and very few
        vendors are genuinely strong across all three. Xorora, Master of Code
        Global, eSparkBiz, RTS Labs, Markovate, DevCom, Kanerika, and SoluLab
        are scored below against each phase separately, since the firm that
        designs a smart system is not always the firm that ships it reliably,
        and the firm that ships it reliably is not always the firm that can
        scale it as your user base grows.
      </p>

      <h2 id="who-this-is-for" className={h2Class}>
        Who this comparison is for
      </h2>
      <p className={cn(bodyClass, "mb-10")}>
        This is written for growth-stage SaaS and software company leaders
        evaluating a partner to build an AI agent as part of their product, not
        a single feature experiment. Teams building genuine{" "}
        <strong className="font-semibold text-fg1">SaaS AI solutions</strong>{" "}
        rather than a surface-level chatbot addition tend to face the same
        underlying question across all three phases. At this stage the question
        is rarely whether{" "}
        <strong className="font-semibold text-fg1">
          AI agent development
        </strong>{" "}
        is possible. It is whether a specific firm can carry the work through
        the entire lifecycle a real product needs — from sound architecture
        through a stable production launch and into the kind of growth that
        breaks systems nobody stress-tested.
      </p>

      <h2 id="three-phases" className={h2Class}>
        The three phases that actually determine outcome
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
                "Design capability",
                "Deployment capability",
                "Scaling capability",
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
                  {row.design}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.deployment}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.scaling}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={cn(bodyClass, "mb-10")}>
        Use this as a starting filter, not a final verdict. A firm that is
        strong in design but weak in scaling may still be right for an early
        architecture engagement — as long as you plan who owns the later phases
        before you sign.
      </p>

      {COMPANIES.map((company) => (
        <CompanySection key={company.id} company={company} />
      ))}

      <h2 id="questions-to-ask" className={h2Class}>
        Questions to ask before you commit
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
        {BEST_CUSTOM_AI_SAAS_FIRMS_FAQS.map((faq, index) => (
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
            quality={BLOG_FEATURE_IMAGE_QUALITY}
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
