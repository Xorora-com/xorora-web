import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GetQuoteButton } from "@/components/blog/post";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { BLOG_FEATURE_IMAGE_QUALITY } from "@/lib/blog/image";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const BEST_AI_AGENCY_AUTOMATION_SLUG =
  "best-ai-agent-providers-agency-client-automation-2026";

export const BEST_AI_AGENCY_AUTOMATION_FAQS = [
  {
    q: "How do I know if an AI agent development services provider can actually support multiple clients, not just one?",
    a: "Ask them to walk you through what changes, technically, between onboarding client one and client twenty. If the answer involves new engineering work for each client rather than configuration against a shared system, deployment repeatability is weaker than the sales conversation suggests. Also ask for a reference from an agency actually running several live client instances, not just a single flagship account.",
  },
  {
    q: "What is the real difference between AI automation copilots sold as a platform versus built as custom AI agent development?",
    a: "A platform gives you a shared, templated system that many agencies can license, which is faster to launch but harder to differentiate. Custom AI agent development means the underlying system is built specifically for your agency, with your own architecture for repeatability, branding, and data isolation. It takes longer to stand up but produces something a shared platform cannot fully replicate.",
  },
  {
    q: "Do client-facing AI agents built for one client automatically work for another client with different needs?",
    a: "Not automatically. A well-architected system separates reusable core logic from client-specific configuration, so a new client's branding, data sources, and workflow rules can be applied without touching the underlying engineering. A poorly architected system requires a partial rebuild for every new client, which quietly caps how many accounts an agency can realistically manage.",
  },
  {
    q: "How does business process automation change when it needs to serve many different client workflows at once?",
    a: "Each client typically has its own version of a similar process — different tools, different approval steps, different edge cases. A system built for multi-client delivery needs to handle that variation through configuration rather than hardcoded logic, otherwise every client's workflow quirks become a new engineering ticket instead of a settings change.",
  },
  {
    q: "What does agency automation solutions pricing typically look like as client count grows?",
    a: "Pricing models vary widely. Some providers charge per seat or per active agent, which scales in a predictable, linear way. Others price each client engagement as a separate custom project, which can mean lower cost per client early on but a much higher total cost once you are managing dozens of accounts. Ask directly how pricing changes specifically between your fifth client and your fiftieth.",
  },
  {
    q: "What should be confirmed about data isolation before deploying the same AI agent architecture across multiple clients?",
    a: "Confirm explicitly how one client's data is kept separate from another's, both in storage and during any AI processing step, and ask what happens if that isolation ever fails. This matters even more once you are running many client instances on a shared underlying system, since a single misconfiguration could expose one client's data to another.",
  },
  {
    q: "Is Xorora a good choice for agencies planning repeatable multi-client AI agent deployments?",
    a: "Xorora builds the agent, the client-facing interface, and the underlying workflow architecture together, with multi-client repeatability treated as a core requirement rather than an afterthought. It is a strong fit for agencies planning to deploy the same core system across many client accounts rather than agencies needing only a single custom build. Projects start at $10,000, with pricing quoted directly against scope.",
  },
] as const;

export const BEST_AI_AGENCY_AUTOMATION_META: BlogArticleMeta = {
  slug: BEST_AI_AGENCY_AUTOMATION_SLUG,
  seoTitle: "Best AI Agent Providers for Agency Client Automation (2026)",
  seoDescription:
    "Compare AI agent development services for agencies on deployment repeatability, per-client customization, and operational reliability at scale.",
  keywords: [
    "AI agent development services",
    "AI automation copilots",
    "client-facing AI agents",
    "agency automation solutions",
    "custom AI agent development",
    "business process automation",
  ],
  aiSummary:
    "This 2026 guide compares eight AI agent providers for agency client automation — Xorora, Stammer.ai, Voiceflow, Botpress, CustomGPT.ai, LeewayHertz, Entrans, and JPLoft — scored on deployment repeatability, per-client customization without rebuilds, and operational reliability across many live client instances.",
  companies: [
    "Xorora",
    "Stammer.ai",
    "Voiceflow",
    "Botpress",
    "CustomGPT.ai",
    "LeewayHertz",
    "Entrans",
    "JPLoft",
  ],
  faqs: [...BEST_AI_AGENCY_AUTOMATION_FAQS],
  toc: [
    { id: "who-this-is-for", label: "Who this is for" },
    { id: "three-criteria", label: "Three decision criteria" },
    { id: "decision-scorecard", label: "Decision scorecard" },
    { id: "xorora", label: "1. Xorora" },
    { id: "stammer-ai", label: "2. Stammer.ai" },
    { id: "voiceflow", label: "3. Voiceflow" },
    { id: "botpress", label: "4. Botpress" },
    { id: "customgpt-ai", label: "5. CustomGPT.ai" },
    { id: "leewayhertz", label: "6. LeewayHertz" },
    { id: "entrans", label: "7. Entrans" },
    { id: "jploft", label: "8. JPLoft" },
    { id: "questions-to-ask", label: "Questions before you commit" },
    { id: "faq", label: "FAQ" },
  ],
};

interface ScorecardRow {
  id: string;
  name: string;
  repeatability: string;
  customization: string;
  reliability: string;
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
    title: "1. Deployment repeatability",
    body: "Can a new client instance actually be provisioned in days using a shared core system, or does every new account require meaningful new engineering work before it can go live?",
  },
  {
    title: "2. Per-client customization without rebuild",
    body: "Branding, data isolation, and light workflow tweaks should be handled through configuration, not through rewriting core logic for each client. This is the difference between a scalable product and a series of one-off projects that happen to look similar.",
  },
  {
    title: "3. Operational reliability at scale",
    body: "Running twenty or fifty client instances simultaneously is a different operational problem than running one well. Ask specifically how monitoring, updates, and failures are handled once you are managing many live deployments at once, not just one.",
  },
];

const SCORECARD: ScorecardRow[] = [
  {
    id: "xorora",
    name: "Xorora",
    repeatability:
      "Strong — architecture built for repeatable rollout from the first engagement",
    customization:
      "Strong — client-specific workflow and data handled through configuration, not rebuilds",
    reliability:
      "Strong — production monitoring and published uptime across deployed systems",
  },
  {
    id: "stammer-ai",
    name: "Stammer.ai",
    repeatability:
      "Strong — purpose-built for agency resale with fast client onboarding",
    customization:
      "Moderate — templated agents with limited deep workflow customization",
    reliability:
      "Moderate — shared platform reliability, less control over individual client tuning",
  },
  {
    id: "voiceflow",
    name: "Voiceflow",
    repeatability:
      "Moderate — visual builder speeds new builds but each client often needs real setup work",
    customization:
      "Strong — deep flow customization for teams with technical capacity",
    reliability:
      "Moderate — reliability depends heavily on how each flow is engineered",
  },
  {
    id: "botpress",
    name: "Botpress",
    repeatability:
      "Moderate — open-source flexibility means faster teams move quickly, slower teams do not",
    customization:
      "Strong — genuine architectural control for custom workflows",
    reliability:
      "Moderate — reliability is largely the deploying team's own responsibility",
  },
  {
    id: "customgpt-ai",
    name: "CustomGPT.ai",
    repeatability:
      "Strong — isolated per-client agents with custom domains built in",
    customization:
      "Moderate — strong for knowledge-base use cases specifically, narrower elsewhere",
    reliability:
      "Strong — purpose-built for many isolated client deployments at once",
  },
  {
    id: "leewayhertz",
    name: "LeewayHertz",
    repeatability:
      "Weak-to-moderate — enterprise consulting model, not built for rapid multi-client rollout",
    customization: "Strong — deep custom engineering per engagement",
    reliability:
      "Strong within each individual deployment, less evidence at agency scale",
  },
  {
    id: "entrans",
    name: "Entrans",
    repeatability:
      "Weak-to-moderate — enterprise-first delivery, not agency-resale focused",
    customization: "Strong — full-lifecycle custom agentic engineering",
    reliability:
      "Strong within each deployment, agency-scale evidence is limited",
  },
  {
    id: "jploft",
    name: "JPLoft",
    repeatability:
      "Weak-to-moderate — project-based delivery model, not packaged for repeatable rollout",
    customization:
      "Strong — deep integration work tailored per client system",
    reliability:
      "Strong within each deployment, not explicitly built for many parallel clients",
  },
];

const QUESTIONS = [
  {
    q: '"How long does it actually take to onboard client number ten compared to client number one?"',
    a: "A real answer will be specific, not a vague assurance that it scales well.",
  },
  {
    q: '"What happens when ten client instances are running at once and one of them breaks?"',
    a: "Get specifics on monitoring, alerting, and how a failure in one account is contained from affecting the others.",
  },
  {
    q: '"How much of the customization for each new client can be handled through configuration versus new engineering work?"',
    a: "This single question separates a genuinely repeatable product from a series of similar-looking custom projects.",
  },
  {
    q: '"What is the real cost structure as client volume grows?"',
    a: "Some providers price per seat or per agent in a way that scales predictably. Others require a new scoped engagement for every client, which changes the economics significantly at volume.",
  },
  {
    q: '"What does ongoing support look like once you are managing many live client deployments simultaneously?"',
    a: "Ask about support for the fleet of live accounts, not just the one used in the sales demo.",
  },
];

const COMPANIES: CompanyProfile[] = [
  {
    id: "xorora",
    rank: 1,
    name: "Xorora",
    location: "United States",
    knownFor: "Multi-client AI agents built for repeatable rollout",
    suitedFor:
      "Agencies planning genuinely repeatable, multi-client custom AI agent development rather than a single-client pilot",
    scorecardRead:
      "Strong across deployment repeatability, per-client customization without rebuilds, and operational reliability at scale.",
    snapshot: "/assets/blog/companies/xorora-agency-automation.png",
    minProject: "$10,000+",
    href: ROUTES.aiAgentDevelopment,
    hrefLabel: "AI agent development services",
    paragraphs: [
      <>
        Xorora is a US-based AI development partner offering{" "}
        <strong className="font-semibold text-fg1">
          AI agent development services
        </strong>{" "}
        built with multi-client repeatability as a core design goal, not an
        afterthought bolted onto a single-client build. Its{" "}
        <TextLink href={ROUTES.aiAgentDevelopment}>
          AI agent development
        </TextLink>{" "}
        work pairs the agent itself with the underlying data and workflow
        architecture so a new client account can be configured against a shared
        core system rather than engineered from scratch each time.
      </>,
      <>
        On deployment repeatability, relevant work includes a{" "}
        <TextLink href={ROUTES.ourWork}>
          unified AI voice operations system
        </TextLink>{" "}
        that serves four role-specific portals from one shared architecture —
        direct evidence of a system designed to serve multiple distinct
        audiences without duplicating engineering effort for each one.
      </>,
      <>
        On per-client customization,{" "}
        <TextLink href={ROUTES.workflowAutomation}>
          workflow automation
        </TextLink>{" "}
        and{" "}
        <TextLink href={ROUTES.customAppDevelopment}>
          custom application development
        </TextLink>{" "}
        are handled by the same team that builds the agent, so client-specific
        branding, data boundaries, and workflow logic can be configured without
        a separate rebuild for every new account.
      </>,
      <>
        On operational reliability at scale, relevant infrastructure includes{" "}
        <TextLink href={ROUTES.ourWork}>
          real-time event monitoring
        </TextLink>{" "}
        built for instant, full-context alerting rather than delayed discovery
        of a problem. Publicly cited results across Xorora&apos;s{" "}
        <TextLink href={ROUTES.engineering}>engineering</TextLink> work include
        a 3.5x median speed-up compared to building the same system in-house and
        99.9% uptime across deployed systems.
      </>,
    ],
    consideration: (
      <>
        Xorora does not offer a self-serve signup the way Stammer.ai does, so
        the first engagement takes longer to launch than subscribing to a
        platform. What an agency gets in exchange is a system architected from
        the start to scale across many client accounts rather than a template
        that needs real engineering work behind the scenes for every new
        client. Teams building internal capacity alongside delivery can also
        look at{" "}
        <TextLink href={ROUTES.staffAugmentation}>staff augmentation</TextLink>.
      </>
    ),
  },
  {
    id: "stammer-ai",
    rank: 2,
    name: "Stammer.ai",
    location: "White-label platform",
    knownFor: "Agency-resale platform for fast multi-client onboarding",
    suitedFor:
      "Agencies prioritizing speed of client onboarding over deep, individualized customization for each account",
    scorecardRead:
      "Strong deployment repeatability by design, since the entire product exists to support rapid multi-client rollout. Per-client customization and operational depth are solid but lean templated rather than deeply bespoke.",
    snapshot: "/assets/blog/companies/stammer-ai-automation.png",
    paragraphs: [
      "Stammer.ai is built specifically for agencies reselling AI agents under their own brand, with a marketplace of pre-built templates and a dashboard designed for fast client onboarding at volume.",
    ],
  },
  {
    id: "voiceflow",
    rank: 3,
    name: "Voiceflow",
    location: "Platform / visual builder",
    knownFor: "Visual canvas for complex conversation flows",
    suitedFor:
      "Agencies with in-house technical resources willing to invest in building their own reusable templates on top of the platform",
    scorecardRead:
      "Strong per-client customization for teams with real technical capacity. Deployment repeatability across many clients depends heavily on how much reusable structure the team builds into the underlying flows — it is not automatic out of the box.",
    snapshot: "/assets/blog/companies/voiceflow-automation.png",
    paragraphs: [
      "Voiceflow gives technical teams a visual canvas for building complex conversation flows, with strong API integration options for teams that want to build something genuinely custom.",
    ],
  },
  {
    id: "botpress",
    rank: 4,
    name: "Botpress",
    location: "Open-source + enterprise",
    knownFor: "Open-source agent platform with architectural control",
    suitedFor:
      "Agencies with development resources who want full architectural control over how each client instance is built and maintained",
    scorecardRead:
      "Strong customization depth for teams willing to build. Deployment repeatability and operational reliability at scale largely depend on the deploying team's own engineering discipline rather than being handled by the platform itself.",
    snapshot: "/assets/blog/companies/botpress-automation.png",
    paragraphs: [
      "Botpress offers open-source flexibility with built-in natural language understanding and multi-channel deployment, backed by an active developer community.",
    ],
  },
  {
    id: "customgpt-ai",
    rank: 5,
    name: "CustomGPT.ai",
    location: "RAG / knowledge platform",
    knownFor: "Isolated per-client knowledge agents with custom domains",
    suitedFor:
      "Agencies whose primary client use case is knowledge search or document-grounded support rather than broader business process automation",
    scorecardRead:
      "Strong deployment repeatability and operational reliability given the platform's explicit design around many isolated client deployments. Customization is strong specifically for knowledge-base and document-grounded use cases, narrower for broader workflow automation.",
    snapshot: "/assets/blog/companies/customgpt-ai-automation.png",
    paragraphs: [
      "CustomGPT.ai focuses on knowledge-based agents, letting agencies deploy isolated, separately branded assistants per client with dedicated custom domains and clear data boundaries.",
    ],
  },
  {
    id: "leewayhertz",
    rank: 6,
    name: "LeewayHertz",
    location: "San Francisco, USA",
    knownFor: "Enterprise generative AI via the ZBrain platform",
    suitedFor:
      "Consultancies serving a small number of large enterprise clients where deep customization matters more than rapid onboarding volume",
    scorecardRead:
      "Strong customization depth and reliability within each individual engagement. Deployment repeatability across many agency clients is weaker, since the delivery model is built around enterprise consulting engagements rather than agency resale.",
    snapshot: "/assets/blog/companies/leewayhertz-automation.png",
    paragraphs: [
      "LeewayHertz is a full-stack enterprise AI partner known for deep, custom generative AI engineering through its ZBrain platform, with genuine strength in secure, enterprise-grade copilot work.",
    ],
  },
  {
    id: "entrans",
    rank: 7,
    name: "Entrans",
    location: "Enterprise agentic delivery",
    knownFor: "Full-lifecycle agentic copilots via Thunai",
    suitedFor:
      "Consultancies building deep, agentic systems for a smaller set of enterprise or mid-market clients rather than a high-volume resale model",
    scorecardRead:
      "Strong customization and reliability within each deployment. Repeatability across many agency clients is less proven, reflecting an enterprise delivery orientation rather than a packaged multi-client product.",
    snapshot: "/assets/blog/companies/entrans-automation.png",
    paragraphs: [
      "Entrans combines agentic AI and full-lifecycle copilot development through its Thunai platform, covering everything from data engineering to deployed, action-taking agents.",
    ],
  },
  {
    id: "jploft",
    rank: 8,
    name: "JPLoft",
    location: "Project-based custom builds",
    knownFor: "Secure copilots integrated into ERP/CRM/HRMS",
    suitedFor:
      "Agencies whose clients need deep integration into existing enterprise systems for each individual engagement",
    scorecardRead:
      "Strong customization given deep system-integration work. Deployment repeatability is weaker, since delivery is project-based rather than packaged for fast, repeatable rollout across many clients.",
    snapshot: "/assets/blog/companies/jploft-automation.png",
    paragraphs: [
      "JPLoft builds secure AI copilots integrated into ERP, CRM, and HRMS systems across industries including healthcare, fintech, and retail.",
    ],
  },
];

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";

export function BestAiAgencyAutomationArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-10")}>
        <strong className="font-semibold text-fg1">Quick answer:</strong> an
        agency evaluating{" "}
        <strong className="font-semibold text-fg1">
          AI agent development services
        </strong>{" "}
        for client automation faces a question most comparisons skip entirely.
        It is not only whether a provider can build one good copilot. It is
        whether that same provider can help you deploy a version of it to your
        tenth client, your fiftieth client, and your two hundredth client
        without each one becoming a fresh engineering project. Stammer.ai,
        Voiceflow, Botpress, CustomGPT.ai, LeewayHertz, Entrans, JPLoft, and
        Xorora are compared below specifically on that repeatability question,
        not just on whether the first build looks impressive.
      </p>

      <h2 id="who-this-is-for" className={h2Class}>
        Who this comparison is for
      </h2>
      <p className={cn(bodyClass, "mb-10")}>
        This is written for digital agencies and consultancies planning to sell{" "}
        <strong className="font-semibold text-fg1">
          AI automation copilots
        </strong>{" "}
        and other{" "}
        <strong className="font-semibold text-fg1">
          agency automation solutions
        </strong>{" "}
        to multiple clients, not build a single internal tool. The moment you
        move past client number one, the real cost of a provider stops being
        &quot;can they build it&quot; and becomes &quot;how much manual
        engineering does every new client require.&quot; A provider that quietly
        needs a custom rebuild for each account will cap how many clients your
        team can realistically onboard, no matter how good the first demo
        looked.
      </p>

      <h2 id="three-criteria" className={h2Class}>
        The three criteria that actually matter for multi-client delivery
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
                "Provider",
                "Deployment repeatability",
                "Per-client customization",
                "Operational reliability at scale",
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
                  {row.repeatability}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.customization}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.reliability}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={cn(bodyClass, "mb-10")}>
        Use this as a starting filter, not a final verdict. Platforms often
        score higher on speed of onboarding; custom development partners score
        higher when each client needs real workflow depth. The right choice
        depends on how many accounts you plan to run — and whether every new
        one can reuse the same core system.
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
        {BEST_AI_AGENCY_AUTOMATION_FAQS.map((faq, index) => (
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
