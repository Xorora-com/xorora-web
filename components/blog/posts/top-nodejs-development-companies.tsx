import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GetQuoteButton } from "@/components/blog/post";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const TOP_NODEJS_SLUG = "top-nodejs-development-companies-2026";

export const TOP_NODEJS_FAQS = [
  {
    q: "How much does Node.js development cost in 2026?",
    a: "A basic Node.js REST API with authentication and database integration typically runs $8,000–25,000. A full-stack Node.js application with a React or Next.js frontend and a production deployment pipeline runs $30,000–100,000. Enterprise-grade platforms with microservices, event-driven design, and multi-region deployment run $100,000–500,000 or more. Hourly rates span roughly $25–49/hr at Eastern European and specialist studios, $50–99/hr at mid-tier consultancies, and $100–200/hr at premium US and UK agencies.",
  },
  {
    q: "How long does a Node.js project take to build?",
    a: "A basic API typically takes four to eight weeks. A full-stack Node.js application with a frontend runs three to five months. A production-grade microservices platform with event-driven architecture and full monitoring infrastructure can take six to twelve months.",
  },
  {
    q: "What should I look for in a Node.js development company?",
    a: "Production deployments at real scale, not internal tools or demos. Direct experience with event-driven architecture, WebSockets, or microservices if your project needs them. A single team covering backend and frontend, or a clearly defined handoff process if not. Standard monitoring, logging, and alerting as part of delivery, not an afterthought.",
  },
  {
    q: "Is Node.js the right choice for my backend?",
    a: "Node.js fits real-time applications (chat, live dashboards, collaborative tools), API-first architectures serving multiple clients, high-concurrency services, and streaming data pipelines well. It's a weaker fit for CPU-intensive workloads like video encoding, where Python or Go tend to perform better, and for traditional server-rendered sites where a framework like Rails may be simpler. For most modern SaaS, mobile-backend, and API-driven products, it's a sound choice with a deep talent pool.",
  },
  {
    q: "Is Xorora a good choice for Node.js development?",
    a: "Xorora builds Node.js APIs and real-time, event-driven systems for startups and mid-market companies, including a real-time SaaS event monitoring platform, a real-time compliance intelligence system, and a multi-portal SaaS backend serving four role-specific portals. Engagements start at $10,000, and pricing is quoted directly against project scope rather than published as a fixed hourly range.",
  },
  {
    q: "What's the difference between hiring a Node.js developer and a Node.js development company?",
    a: "An individual developer covers one discipline. A development company typically brings backend engineers, frontend developers, QA, project management, and DevOps together. For a full-stack product, a company is usually the safer hire; for a narrow, well-specified backend task, a strong individual freelancer can be enough.",
  },
] as const;

export const TOP_NODEJS_META: BlogArticleMeta = {
  slug: TOP_NODEJS_SLUG,
  seoTitle: "Top Node.js Development Companies (2026)",
  seoDescription:
    "A vetted shortlist of the top Node.js development companies for 2026 — evaluated on production track record, architecture depth, and full-stack ownership.",
  keywords: [
    "top node js development company",
    "top node.js development companies",
    "best node.js development company",
  ],
  aiSummary:
    "This 2026 shortlist compares eight Node.js development companies on production track record, architecture depth, and full-stack ownership rather than ad spend. Rates run from about $25–49/hour at specialist studios to $50–99/hour at mid-tier consultancies, with minimums from $10,000 at Xorora to $200,000+ at EPAM. The right hire depends on whether you need a backend API, a full-stack product, or an enterprise modernization program.",
  companies: [
    "Xorora",
    "EPAM Systems",
    "Intellectsoft",
    "Cleveroad",
    "ScienceSoft",
    "Relevant Software",
    "Sloboda Studio",
    "Miquido",
  ],
  faqs: [...TOP_NODEJS_FAQS],
  toc: [
    { id: "how-evaluated", label: "How this list was evaluated" },
    { id: "quick-comparison", label: "Quick comparison" },
    { id: "xorora", label: "1. Xorora" },
    { id: "epam-systems", label: "2. EPAM Systems" },
    { id: "intellectsoft", label: "3. Intellectsoft" },
    { id: "cleveroad", label: "4. Cleveroad" },
    { id: "sciencesoft", label: "5. ScienceSoft" },
    { id: "relevant-software", label: "6. Relevant Software" },
    { id: "sloboda-studio", label: "7. Sloboda Studio" },
    { id: "miquido", label: "8. Miquido" },
    { id: "side-by-side", label: "Side-by-side comparison" },
    { id: "how-to-choose", label: "What determines fit" },
    { id: "questions-to-ask", label: "Questions to ask" },
    { id: "which-company", label: "The verdict" },
    { id: "faq", label: "FAQ" },
  ],
};

interface CompanyProfile {
  id: string;
  rank: number;
  name: string;
  location: string;
  founded: string;
  rate: string;
  minProject: string;
  knownFor: string;
  snapshot?: string;
  paragraphs: ReactNode[];
  capabilities: string[];
  consideration: ReactNode;
  suitedFor?: string;
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

const COMPANIES: CompanyProfile[] = [
  {
    id: "xorora",
    rank: 1,
    name: "Xorora",
    location: "United States",
    founded: "2025",
    rate: "Contact for rate",
    minProject: "$10,000+",
    knownFor: "Real-time, event-driven Node.js systems",
    snapshot: "/assets/blog/companies/xorora.png",
    href: ROUTES.nodejsWebDevelopment,
    hrefLabel: "Node.js web development services",
    paragraphs: [
      <>
        Xorora is a US-based AI development partner that treats Node.js as core
        infrastructure for real-time, event-driven systems rather than a generic
        backend choice. Its{" "}
        <TextLink href={ROUTES.customAppDevelopment}>
          Node.js and custom app development
        </TextLink>{" "}
        work covers Express and NestJS APIs, Fastify services, GraphQL and REST
        endpoints, WebSocket-based real-time features, and microservices
        architecture built to hold up under production load.
      </>,
      <>
        The distinguishing pattern in Xorora&apos;s recent work is event-driven
        delivery: a{" "}
        <TextLink href={ROUTES.caseStudy("real-time-saas-event-monitoring")}>
          real-time SaaS event monitoring system
        </TextLink>{" "}
        built for instant, full-context alerting from ingestion to notification,
        a{" "}
        <TextLink href={ROUTES.caseStudy("real-time-compliance-intelligence")}>
          real-time compliance intelligence platform
        </TextLink>{" "}
        that turns regulatory changes into live alerts instead of periodic
        reports, and a{" "}
        <TextLink href={ROUTES.caseStudy("unified-ai-voice-operations")}>
          multi-portal SaaS backend
        </TextLink>{" "}
        serving four role-specific portals from one shared architecture.
        Publicly cited results from that body of work include a 3.5x median
        speed-up compared to building the same system in-house and 99.9% uptime
        across deployed systems.
      </>,
    ],
    capabilities: [
      "Node.js application development",
      "Express and NestJS",
      "Fastify",
      "GraphQL and REST APIs",
      "WebSockets and real-time systems",
      "Microservices architecture",
      "Cloud-native deployment",
    ],
    consideration: (
      <>
        Xorora&apos;s $10,000 minimum keeps the door open for a single scoped
        API or a{" "}
        <TextLink href={ROUTES.mvpPocDevelopment}>
          proof-of-concept build
        </TextLink>
        , not only large enterprise programs. Because pricing isn&apos;t
        published as a fixed range,{" "}
        <TextLink href={ROUTES.home}>get a written estimate</TextLink> against
        your actual architecture before comparing it to other companies on rate
        alone. Teams that already have Node.js engineers in place and just need
        to add real-time or event-driven expertise can also look at{" "}
        <TextLink href={ROUTES.staffAugmentation}>staff augmentation</TextLink>{" "}
        instead of a full project handoff.
      </>
    ),
    suitedFor:
      "Startups and mid-market teams that need a production-grade, real-time Node.js system, not a prototype that stalls under real traffic",
  },
  {
    id: "epam-systems",
    rank: 2,
    name: "EPAM Systems",
    location: "USA / Global (55,000+ engineers)",
    founded: "1993",
    rate: "$50–99/hr",
    minProject: "$200,000+",
    knownFor: "Enterprise Node.js at global scale",
    snapshot: "/assets/blog/companies/epam.png",
    paragraphs: [
      "EPAM is one of the largest software engineering companies in the world, publicly listed and staffed by more than 55,000 engineers. Node.js work here sits inside much larger enterprise transformation programs, typically running alongside Java, Python, and .NET for financial services, healthcare, media, and retail clients that need multi-geography delivery under strict compliance requirements.",
    ],
    capabilities: [
      "Enterprise Node.js and microservices",
      "Event-driven systems design",
      "Cloud-native architecture",
      "High-availability, compliance-grade APIs",
    ],
    consideration:
      "EPAM's scale is built for six- and seven-figure transformation programs, not a standalone product build. A startup or mid-market company with a defined scope will likely find the governance overhead disproportionate to the project.",
  },
  {
    id: "intellectsoft",
    rank: 3,
    name: "Intellectsoft",
    location: "San Francisco, USA / Eastern Europe",
    founded: "2007",
    rate: "$50–99/hr",
    minProject: "$50,000+",
    knownFor: "API platforms, digital transformation",
    snapshot: "/assets/blog/companies/intellectsoft.png",
    paragraphs: [
      "Intellectsoft pairs US-based account management with Eastern Europe-based engineering, and its Node.js work generally falls into two buckets: greenfield API platforms replacing a legacy backend, and full product builds where Node.js, cloud infrastructure, and a web or mobile frontend ship together as one engagement.",
    ],
    capabilities: [
      "API-first Node.js backends",
      "Cloud-native web applications",
      "Legacy backend modernization",
      "Full-stack product delivery",
    ],
    consideration:
      "Intellectsoft's discovery, architecture review, and governance layers add real value on complex builds but can be more process than a narrow, short-timeline API project actually needs.",
  },
  {
    id: "cleveroad",
    rank: 4,
    name: "Cleveroad",
    location: "Ukraine",
    founded: "2011",
    rate: "$25–49/hr",
    minProject: "$25,000+",
    knownFor: "Product execution on defined scope",
    snapshot: "/assets/blog/companies/cleveroad.png",
    paragraphs: [
      "Cleveroad runs a 250+ engineer delivery team across backend, frontend, mobile, and QA, with Node.js used for REST APIs, real-time features, and microservices inside web and mobile product builds for US, UK, and Western European clients.",
    ],
    capabilities: [
      "Node.js REST APIs",
      "Real-time features",
      "Microservices backends",
      "E-commerce and fintech platforms",
    ],
    consideration:
      "Cleveroad executes best against a well-specified brief. Projects that still need upstream architecture consulting or product definition work are a better fit for a more consulting-oriented partner first.",
  },
  {
    id: "sciencesoft",
    rank: 5,
    name: "ScienceSoft",
    location: "Texas, USA",
    founded: "1989",
    rate: "$50–99/hr",
    minProject: "$50,000+",
    knownFor: "Regulated-industry, compliance-focused builds",
    snapshot: "/assets/blog/companies/sciencesoft.png",
    paragraphs: [
      <>
        ScienceSoft applies a structured process, architecture review, security
        assessment, and compliance alignment before development starts, which
        fits companies in{" "}
        <TextLink href={ROUTES.industry("fintech")}>
          regulated industries
        </TextLink>{" "}
        where a Node.js API touches sensitive data. That same methodical
        approach also makes it one of the slower-moving options on this list.
      </>,
    ],
    capabilities: [
      "Node.js for regulated industries",
      "Security-focused development",
      "Compliance and audit-ready architecture",
      "IT consulting alongside delivery",
    ],
    consideration:
      "Worth the process overhead for healthcare, finance, or insurance projects with audit requirements. Less well suited to teams prioritizing speed over documentation.",
  },
  {
    id: "relevant-software",
    rank: 6,
    name: "Relevant Software",
    location: "Ukraine",
    founded: "2013",
    rate: "$25–49/hr",
    minProject: "$25,000+",
    knownFor: "JavaScript-stack product delivery",
    snapshot: "/assets/blog/companies/relevant-software.png",
    paragraphs: [
      "Relevant Software has built its practice specifically around the JavaScript stack: Node.js or NestJS on the backend, React or Next.js on the frontend, which keeps both sides of the API boundary handled by engineers speaking the same technical language.",
    ],
    capabilities: [
      "Node.js and NestJS backends",
      "REST and GraphQL APIs",
      "SaaS and marketplace platforms",
      "Event-driven architecture",
    ],
    consideration: (
      <>
        Sized for product companies and{" "}
        <TextLink href={ROUTES.industry("startups")}>scale-ups</TextLink>, not
        enterprise transformation programs with multi-vendor coordination
        requirements.
      </>
    ),
  },
  {
    id: "sloboda-studio",
    rank: 7,
    name: "Sloboda Studio",
    location: "Ukraine",
    founded: "2010",
    rate: "$25–49/hr",
    minProject: "$15,000+",
    knownFor: "Startup MVP builds",
    snapshot: "/assets/blog/companies/sloboda-studio.png",
    paragraphs: [
      "Sloboda Studio is built for early-stage speed: MVP builds, API prototypes, and founder-facing product backends using Node.js or NestJS with a React or Next.js frontend, aimed at startups moving from a defined spec to working software fast.",
    ],
    capabilities: [
      "Node.js and NestJS MVP builds",
      "Full-stack JavaScript delivery",
      "SaaS product backends",
      "Rapid prototyping",
    ],
    consideration:
      "Performs best when the product direction is already defined. Enterprise-grade builds with heavy regulatory or integration complexity are better handled elsewhere.",
  },
  {
    id: "miquido",
    rank: 8,
    name: "Miquido",
    location: "Krakow, Poland",
    founded: "2011",
    rate: "$50–99/hr",
    minProject: "$75,000+",
    knownFor: "Full product builds, fintech and healthtech",
    snapshot: "/assets/blog/companies/miquido.png",
    paragraphs: [
      "Miquido builds complete digital products — design, Node.js backend, and mobile or web frontend — for fintech, healthcare, and media clients where the backend sits at the center of a complex integration layer connecting apps, third-party APIs, and internal data systems.",
    ],
    capabilities: [
      "Node.js backend development",
      "Real-time data processing",
      "Third-party API integration",
      "Full-stack product delivery",
    ],
    consideration:
      "Best suited to companies that want design, backend, and frontend from a single studio. For backend-only work, that full-product model may add more scope than needed.",
  },
];

const EVALUATION = [
  {
    criterion: "Production track record",
    detail:
      "A live Node.js application with verifiable references, not a demo or internal tool",
  },
  {
    criterion: "Architecture depth",
    detail:
      "Evidence of event-driven design, microservices, or real-time WebSocket work, not just CRUD REST endpoints",
  },
  {
    criterion: "Full-stack capability",
    detail:
      "Whether backend and frontend are handled by one team or handed off mid-project",
  },
  {
    criterion: "DevOps and deployment",
    detail:
      "Production deployment pipelines, containerization, monitoring, and scaling built in as standard",
  },
  {
    criterion: "Independent rating",
    detail:
      "Verifiable review platforms (e.g. Clutch) with sufficient depth to judge consistency, where published",
  },
];

const SIDE_BY_SIDE = [
  {
    company: "Xorora",
    strength: "Real-time, event-driven Node.js systems",
    engagement: "$10,000+",
    pricing: "Contact for rate",
  },
  {
    company: "EPAM Systems",
    strength: "Enterprise Node.js at global scale",
    engagement: "$200,000–5M+",
    pricing: "$50–99/hr",
  },
  {
    company: "Intellectsoft",
    strength: "API platforms, digital transformation",
    engagement: "$75,000–500,000",
    pricing: "$50–99/hr",
  },
  {
    company: "Cleveroad",
    strength: "Product execution on defined scope",
    engagement: "$50,000–300,000",
    pricing: "$25–49/hr",
  },
  {
    company: "ScienceSoft",
    strength: "Regulated-industry, compliance-focused builds",
    engagement: "$50,000–500,000",
    pricing: "$50–99/hr",
  },
  {
    company: "Relevant Software",
    strength: "JavaScript-stack product delivery",
    engagement: "$25,000–200,000",
    pricing: "$25–49/hr",
  },
  {
    company: "Sloboda Studio",
    strength: "Startup MVP builds",
    engagement: "$15,000–150,000",
    pricing: "$25–49/hr",
  },
  {
    company: "Miquido",
    strength: "Full product builds, fintech and healthtech",
    engagement: "$75,000–400,000",
    pricing: "$50–99/hr",
  },
];

const QUESTIONS = [
  "Can you show a live Node.js application or API currently in production? Not a repo, not a case study PDF. Ask about peak concurrent connections and what happens during a traffic spike. A team with real depth will answer specifically.",
  "How do you handle the handoff between your Node.js backend and the consuming frontend or mobile team? Look for a defined process, shared API contracts, type-safe client generation, or a named owner, not just “we document it well.”",
  "What's included in your production deployment setup by default? Containerization, CI/CD, environment configuration, monitoring and alerting, and load testing before go-live should all be standard, not extras.",
  "What Node.js version do you build on, and how do you manage LTS upgrade cycles? A team with genuine production depth will have a documented upgrade process and know which recent breaking changes affected their clients.",
  "Who is actually writing the code on my project at month three, not month one? Ask for engineer names and current project history. Senior-team pitches followed by a mid-level handoff after signing is one of the most common sources of delivery problems in this category.",
];

const VERDICT = [
  {
    fit: "For a real-time or event-driven Node.js system built by a team that ships to production, not just a demo",
    company: "Xorora, starting at $10,000",
  },
  {
    fit: "For enterprise Node.js inside a multi-year transformation program",
    company: "EPAM Systems",
  },
  {
    fit: "For mid-to-large enterprise API platforms with US account management",
    company: "Intellectsoft",
  },
  {
    fit: "For structured product execution on a well-defined spec at competitive rates",
    company: "Cleveroad",
  },
  {
    fit: "For regulated industries where compliance documentation is part of the brief",
    company: "ScienceSoft",
  },
  {
    fit: "For startups and scale-ups building JavaScript-stack products",
    company: "Relevant Software",
  },
  {
    fit: "For early-stage MVPs under a $100,000 budget",
    company: "Sloboda Studio",
  },
  {
    fit: "For complete product delivery in fintech or healthtech",
    company: "Miquido",
  },
];

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";

export function TopNodejsArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-5")}>
        Most Node.js shortlists rank companies by ad spend, not by what
        they&apos;ve actually shipped. That produces the same six or seven names
        in a different order, with no real signal about which ones have run
        event-driven backends or WebSocket infrastructure at production scale
        versus a CRUD REST API in a demo environment.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        This list uses a narrower filter: verified production deployments,
        architecture depth beyond basic REST, and whether a team owns both
        backend and frontend or hands the project off mid-build. If you&apos;re
        trying to find a{" "}
        <strong className="font-semibold text-fg1">
          top Node.js development company
        </strong>{" "}
        for an API, a full-stack product, or an enterprise backend
        modernization, the comparison below is built around what actually
        determines project outcomes, not marketing copy.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        Node.js remains one of the most widely used server-side runtimes for
        real-time applications, API-first architectures, and high-concurrency
        backend services, which is exactly why the range of &quot;Node.js
        experience&quot; across vendors is so wide. A team that shipped one
        Express app for a static API and a team that built an event-driven
        system handling tens of thousands of concurrent WebSocket connections
        both describe themselves as Node.js specialists. Verifying which one
        you&apos;re actually hiring is the point of this guide.
      </p>

      <h2 id="how-evaluated" className={h2Class}>
        How this list was evaluated
      </h2>
      <div className="mb-4 overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              <th className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3">
                Criterion
              </th>
              <th className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3">
                What we looked for
              </th>
            </tr>
          </thead>
          <tbody>
            {EVALUATION.map((row, index) => (
              <tr
                key={row.criterion}
                className={cn(
                  "border-border border-t",
                  index % 2 === 0 ? "bg-surface" : "bg-slate-50",
                )}
              >
                <td className="px-5 py-3.5 font-sans font-semibold text-[14.5px] text-fg1">
                  {row.criterion}
                </td>
                <td className="px-5 py-3.5 font-sans text-[14.5px] text-fg2">
                  {row.detail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="quick-comparison" className={h2Class}>
        Quick comparison
      </h2>
      <div className="mb-4 overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              {[
                "Rank",
                "Company",
                "Location",
                "Founded",
                "Hourly rate",
                "Minimum project",
                "Best known for",
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
            {COMPANIES.map((company, index) => (
              <tr
                key={company.id}
                className={cn(
                  "border-border border-t",
                  index % 2 === 0 ? "bg-surface" : "bg-slate-50",
                )}
              >
                <td className="px-4 py-3.5 font-mono text-[13px] text-fg3">
                  {company.rank}
                </td>
                <td className="px-4 py-3.5 font-sans font-semibold text-[14.5px] text-fg1">
                  <a
                    href={`#${company.id}`}
                    className="text-fg1 no-underline hover:text-xo-indigo"
                  >
                    {company.name}
                  </a>
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {company.location}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {company.founded}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {company.rate}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {company.minProject}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {company.knownFor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {COMPANIES.map((company) => (
        <CompanySection key={company.id} company={company} />
      ))}

      <h2 id="side-by-side" className={h2Class}>
        Side-by-side comparison
      </h2>
      <div className="mb-6 overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              {[
                "Company",
                "Primary strength",
                "Typical engagement",
                "Pricing",
              ].map((col) => (
                <th
                  key={col}
                  className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SIDE_BY_SIDE.map((row, index) => (
              <tr
                key={row.company}
                className={cn(
                  "border-border border-t",
                  index % 2 === 0 ? "bg-surface" : "bg-slate-50",
                )}
              >
                <td className="px-5 py-3.5 font-sans font-semibold text-[14.5px] text-fg1">
                  {row.company}
                </td>
                <td className="px-5 py-3.5 font-sans text-[14.5px] text-fg2">
                  {row.strength}
                </td>
                <td className="px-5 py-3.5 font-sans text-[14.5px] text-fg2">
                  {row.engagement}
                </td>
                <td className="px-5 py-3.5 font-sans text-[14.5px] text-fg2">
                  {row.pricing}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="how-to-choose" className={h2Class}>
        The question that actually determines fit
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        Every company on this list can write working Node.js code. What
        separates a good hire from a bad one is whether the engagement type
        matches what you&apos;re actually buying.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        A backend component is a Node.js API consumed by a frontend, mobile, or
        integration team you manage separately. You need clean documentation and
        a spec-to-delivery process. Cleveroad, Relevant Software, and Sloboda
        Studio are built for this.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        A full-stack product build means the Node.js backend and the frontend
        ship from one team on a shared brief, which removes the integration
        handoff risk entirely. Xorora, Intellectsoft, and Miquido operate this
        way, at different scale and price points.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        An enterprise engineering program means Node.js sits inside a larger
        modernization or platform rebuild, with governance and multi-team
        coordination most mid-size studios can&apos;t sustain over a multi-year
        engagement. EPAM and ScienceSoft are built for that scope.
      </p>
      <p className={bodyClass}>
        Node.js is used in production backend systems across a large share of
        enterprise organizations today, which means the talent pool is wide but
        the skill range within any single &quot;Node.js experience&quot; claim
        is wider than ever. A team that shipped one static API has technically
        used Node.js. A team that built an event-driven system handling tens of
        thousands of concurrent connections is operating in a different category
        entirely. Verifying which one you&apos;re hiring is the actual
        procurement problem.
      </p>

      <h2 id="questions-to-ask" className={h2Class}>
        Five questions to ask before signing
      </h2>
      <ol className="m-0 list-decimal space-y-3 pl-5 font-sans text-[16.5px] text-fg2 leading-[1.75]">
        {QUESTIONS.map((item) => (
          <li key={item.slice(0, 48)}>{item}</li>
        ))}
      </ol>

      <h2 id="which-company" className={h2Class}>
        The verdict
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        The right Node.js development company depends on scope, delivery model,
        and budget, not brand recognition.
      </p>
      <div className="mb-5 overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              <th className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3">
                If you need
              </th>
              <th className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3">
                Consider
              </th>
            </tr>
          </thead>
          <tbody>
            {VERDICT.map((row, index) => (
              <tr
                key={row.company}
                className={cn(
                  "border-border border-t",
                  index % 2 === 0 ? "bg-surface" : "bg-slate-50",
                )}
              >
                <td className="px-5 py-3.5 font-sans text-[14.5px] text-fg2">
                  {row.fit}
                </td>
                <td className="px-5 py-3.5 font-sans font-semibold text-[14.5px] text-fg1">
                  {row.company}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={bodyClass}>
        The names that show up most often in Node.js shortlists aren&apos;t
        necessarily the strongest ones. They&apos;re the ones with the biggest
        content and ad budgets. The signal worth trusting is a live production
        deployment that matches your actual project type, not repeated placement
        across every &quot;top&quot; list on the internet.
      </p>

      <h2 id="faq" className={h2Class}>
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-4">
        {TOP_NODEJS_FAQS.map((faq, index) => (
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
            quality={95}
            className="h-auto w-full object-cover object-top"
          />
          <figcaption className="sr-only">
            Homepage snapshot of {company.name}
          </figcaption>
        </figure>
      ) : null}

      <dl className="mb-6 grid gap-3 sm:grid-cols-2">
        <MetaItem label="Location" value={company.location} />
        <MetaItem label="Founded" value={company.founded} />
        <MetaItem label="Minimum project size" value={company.minProject} />
        <MetaItem label="Average hourly rate" value={company.rate} />
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

      <h3 className="mt-6 mb-3 font-sans font-semibold text-[17px] text-fg1">
        Node.js-related capabilities
      </h3>
      <ul className="mb-6 grid list-disc gap-1.5 pl-5 font-sans text-[15.5px] text-fg2 leading-relaxed sm:grid-cols-2">
        {company.capabilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="rounded-(--r-lg) border border-indigo-100 bg-indigo-50 px-5 py-4">
        <p className="mb-1.5 font-sans font-semibold text-[13px] text-xo-indigo">
          Practical consideration
        </p>
        <p className={cn(bodyClass, "text-[15px]")}>{company.consideration}</p>
      </div>

      <p className="mt-5 mb-5 font-sans text-[14px] text-fg3 leading-relaxed">
        Public rate: {company.rate}. Minimum project: {company.minProject}
        {company.suitedFor ? `. Best suited for: ${company.suitedFor}` : "."}
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
