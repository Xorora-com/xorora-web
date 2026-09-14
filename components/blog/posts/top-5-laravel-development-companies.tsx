import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GetQuoteButton } from "@/components/blog/post";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const TOP_5_LARAVEL_SLUG = "top-5-laravel-development-companies-2026";

export const TOP_5_LARAVEL_FAQS = [
  {
    q: "Who are the best Laravel developers for a custom web application?",
    a: "It depends on scope. For teams wanting Laravel development as part of a broader full-stack or AI-capable partner, Xorora's in-house Laravel team is a strong fit. For deep, long-standing Laravel-only consulting, agencies like Tighten or byte5 bring a longer public Laravel-specific track record.",
  },
  {
    q: "What makes a Laravel development company reliable?",
    a: "Look for a documented testing strategy, a clear process for major version upgrades, a real production deployment pipeline (not just local development), and evidence of managing background jobs and queues at production scale. Ask who specifically will write the code on your project, not just who's in the sales call.",
  },
  {
    q: "How much does Laravel development cost?",
    a: "Rates vary heavily by region. Senior engineers in North America generally run higher than Eastern Europe or South/Southeast Asia, and specialist Laravel agencies typically price above their region's general-market average. Get a scoped, written estimate rather than comparing headline hourly rates alone.",
  },
  {
    q: "Should I choose a large Laravel agency or a smaller specialized team?",
    a: "Larger agencies suit long, complex, multi-team engagements where capacity and process maturity matter most. Smaller or newer teams, including in-house specialists inside a broader engineering partner, can offer more direct access to senior developers and faster iteration on a defined-scope project.",
  },
  {
    q: "Is Xorora a good choice for Laravel development?",
    a: "Xorora has an in-house team of Laravel developers actively working on client projects, alongside its broader AI and full-stack engineering practice. It's a reasonable fit for companies that want Laravel development handled by a team that also brings API, data, and AI capability to the same engagement, rather than a narrowly scoped Laravel-only vendor. Projects start at $10,000, with pricing quoted directly against scope.",
  },
  {
    q: "What's the difference between hiring a freelance Laravel developer and a Laravel development company?",
    a: "A freelancer covers one discipline and one set of hands. A development company brings a team, backend engineers, QA, and typically project management, so accountability and continuity don't rest on a single person. For anything beyond a small, well-specified task, a company is usually the safer choice.",
  },
] as const;

export const TOP_5_LARAVEL_META: BlogArticleMeta = {
  slug: TOP_5_LARAVEL_SLUG,
  seoTitle: "Top 5 Laravel Development Companies for 2026",
  seoDescription:
    "A region-by-region comparison of 5 Laravel development companies for 2026 — evaluated on Laravel expertise, client reputation, and delivery track record.",
  keywords: [
    "best laravel developers",
    "best laravel development company",
    "top laravel development company",
  ],
  aiSummary:
    "This 2026 guide profiles five Laravel development companies by region and fit rather than a single global ranking: Xorora (US, AI-driven and full-stack Laravel), Tighten (Chicago, rescue and senior consulting), Steadfast Collective (UK, long-term product support), byte5 (DACH enterprises), and UCodeSoft (India, cost-conscious long-term delivery). Scoring weights Laravel expertise, reviews, portfolio, and team trust — not hourly rate — because geography already drives pricing.",
  companies: [
    "Xorora",
    "Tighten",
    "Steadfast Collective",
    "byte5",
    "UCodeSoft",
  ],
  faqs: [...TOP_5_LARAVEL_FAQS],
  toc: [
    { id: "how-evaluated", label: "How this list was evaluated" },
    { id: "quick-comparison", label: "Quick comparison" },
    { id: "xorora", label: "1. Xorora" },
    { id: "tighten", label: "2. Tighten" },
    { id: "steadfast-collective", label: "3. Steadfast Collective" },
    { id: "byte5", label: "4. byte5" },
    { id: "ucodesoft", label: "5. UCodeSoft" },
    { id: "how-to-choose", label: "How to choose" },
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
  teamSize?: string;
  regions?: string;
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
    rate: "Contact for current rate",
    minProject: "$10,000+",
    knownFor: "AI-driven products, full-stack and Laravel builds",
    teamSize: "In-house engineering team",
    snapshot: "/assets/blog/companies/xorora.png",
    href: ROUTES.laravelWebsiteDevelopment,
    hrefLabel: "Laravel website development services",
    paragraphs: [
      <>
        Xorora is a US-based{" "}
        <TextLink href={ROUTES.home}>AI development partner</TextLink> with an
        in-house team of Laravel developers, actively delivering Laravel
        projects rather than treating the framework as a line item on a services
        page. Its{" "}
        <TextLink href={ROUTES.customAppDevelopment}>
          Laravel and custom application development
        </TextLink>{" "}
        work covers API-driven backends, database-driven admin systems, and
        Laravel paired with modern frontends (Vue or React), alongside{" "}
        <TextLink href={ROUTES.applicationModernization}>
          application modernization
        </TextLink>{" "}
        for existing Laravel codebases.
      </>,
      <>
        Laravel sits inside a broader{" "}
        <TextLink href={ROUTES.engineering}>engineering practice</TextLink> that
        also covers Python, Node.js, and{" "}
        <TextLink href={ROUTES.mlDataScience}>AI/ML systems</TextLink>, which
        means Laravel projects at Xorora typically come with the same production
        discipline the company applies elsewhere: real deployment pipelines,
        monitoring, and senior engineers who stay on a project from architecture
        through launch. Across its broader{" "}
        <TextLink href={ROUTES.ourWork}>delivery record</TextLink>, publicly
        cited results include a 3.5x median speed-up compared to building the
        same system in-house and 99.9% uptime across deployed systems.
      </>,
    ],
    capabilities: [
      "Custom Laravel web application development",
      "Laravel REST APIs",
      "Laravel + Vue.js / React frontends",
      "Database architecture and admin systems",
      "Laravel migrations and modernization",
      "Production deployment and monitoring",
    ],
    consideration: (
      <>
        Xorora is newer than every other company on this list, so it
        doesn&apos;t have the multi-year public Laravel portfolio that an agency
        like Tighten or byte5 can point to. What it does have is an active
        in-house Laravel team currently delivering client work. If a long public
        track record specifically in Laravel matters most to you, weigh that
        against the other names here; if you want a full-stack AI-capable
        partner where Laravel is one strong, functioning part of a broader
        engineering team, <TextLink href={ROUTES.home}>get in touch</TextLink>{" "}
        for a scoping call and a look at current project work. Companies that
        already have Laravel developers in place and just need extra capacity
        can also use Xorora&apos;s{" "}
        <TextLink href={ROUTES.staffAugmentation}>staff augmentation</TextLink>{" "}
        model.
      </>
    ),
    suitedFor:
      "Companies that want Laravel development inside a broader AI or full-stack engineering partner, not a narrow single-framework shop",
  },
  {
    id: "tighten",
    rank: 2,
    name: "Tighten",
    location: "Chicago, Illinois, USA",
    founded: "2013",
    rate: "Contact for rate",
    minProject: "Contact",
    knownFor: "Rescue projects, senior Laravel consulting",
    teamSize: "~25",
    regions: "North America",
    snapshot: "/assets/blog/companies/tighten.png",
    paragraphs: [
      "Tighten has built its name on Laravel consulting, custom application development, and modernization rather than delivery volume. Its reputation in the Laravel community comes from technical leadership, open-source contributions, and long-standing ecosystem involvement, and it's frequently recommended specifically for rescue projects that need architectural correction rather than a greenfield build.",
    ],
    capabilities: [
      "Laravel consulting and architecture",
      "Legacy application modernization",
      "Performance optimization",
      "Long-term product development",
    ],
    consideration:
      "Tighten's consulting-led model and North American base suit organizations that prioritize close collaboration and senior engineering judgment over the lowest possible hourly rate.",
    suitedFor:
      "Organizations needing senior Laravel consultants, modernization work, or rescue engagements requiring deep framework expertise",
  },
  {
    id: "steadfast-collective",
    rank: 3,
    name: "Steadfast Collective",
    location: "Leeds, England",
    founded: "2014",
    rate: "Contact for rate",
    minProject: "Contact",
    knownFor: "UK organizations, long-term product development",
    teamSize: "~20",
    regions: "United Kingdom and Europe",
    snapshot: "/assets/blog/companies/steadfast-collective.png",
    paragraphs: [
      "Steadfast Collective focuses on long-term product development and ongoing engineering support rather than one-off project delivery. Its work spans healthcare, education, membership organizations, and the public sector, with an emphasis on maintainable, long-term Laravel products over quick-turnaround builds.",
    ],
    capabilities: [
      "Long-term Laravel product development",
      "Digital transformation",
      "Sector-specific builds (healthcare, education, public sector)",
      "Ongoing engineering support",
    ],
    consideration:
      "A strong fit for UK-based organizations wanting a durable Laravel partner. Buyers outside the UK should weigh time-zone overlap alongside technical fit.",
    suitedFor:
      "UK organizations and European businesses looking for a long-term Laravel partner with ongoing support, not just a delivery vendor",
  },
  {
    id: "byte5",
    rank: 4,
    name: "byte5",
    location: "Germany",
    founded: "2009",
    rate: "Contact for rate",
    minProject: "Contact",
    knownFor: "DACH enterprises, digital transformation",
    teamSize: "~25–30",
    regions: "Germany, the DACH region, and Europe",
    snapshot: "/assets/blog/companies/byte5.png",
    paragraphs: [
      "byte5 specializes in enterprise Laravel applications and business-critical software for established organizations across the DACH market. Its portfolio favors long-term, complex platform development over short-turnaround projects, and it combines Laravel expertise with familiarity in German and broader European business expectations.",
    ],
    capabilities: [
      "Enterprise Laravel development",
      "Process digitization",
      "Custom business applications",
      "Digital transformation for established organizations",
    ],
    consideration:
      "Less public information is available about byte5's team and portfolio compared to some others here, so discovery conversations and direct references matter more during evaluation.",
    suitedFor:
      "Enterprises in Germany or wider Europe needing a Laravel partner for long-term, business-critical platform development",
  },
  {
    id: "ucodesoft",
    rank: 5,
    name: "UCodeSoft",
    location: "India",
    founded: "2015",
    rate: "Contact for rate",
    minProject: "Contact",
    knownFor: "Cost-conscious long-term development",
    teamSize: "~45–50",
    regions: "Asia, Europe, North America",
    snapshot: "/assets/blog/companies/ucodesoft.png",
    paragraphs: [
      "UCodeSoft pairs Laravel specialization with a cost-effective delivery model, working across custom Laravel development, SaaS platforms, enterprise web applications, and dedicated development teams. Its portfolio spans business applications, marketplaces, and CRM systems for clients ranging from startups to established businesses.",
    ],
    capabilities: [
      "Custom Laravel development",
      "SaaS platforms",
      "CRM and marketplace systems",
      "Dedicated Laravel development teams",
    ],
    consideration:
      "Cost efficiency shouldn't be the only deciding factor. Evaluate communication process and time-zone overlap alongside pricing before committing to a long-term engagement.",
    suitedFor:
      "Organizations wanting an experienced Laravel team at a competitive rate for long-term product development or staff augmentation",
  },
];

const EVALUATION = [
  {
    criterion: "Laravel expertise & ecosystem contribution",
    weight: "30%",
    detail:
      "Framework specialization, open-source packages, technical writing, community involvement",
  },
  {
    criterion: "Client reviews & reputation",
    weight: "25%",
    detail:
      "Independent review platforms, verified testimonials, client retention",
  },
  {
    criterion: "Portfolio & case studies",
    weight: "25%",
    detail:
      "Laravel-specific projects, technical complexity, industries served, outcomes",
  },
  {
    criterion: "Team experience & trust",
    weight: "20%",
    detail:
      "Years in business, engineering maturity, technical leadership, transparency",
  },
];

const CHOICE_POINTS = [
  {
    title: "How does the company approach testing?",
    body: "A mature automated testing strategy protects critical functionality during future releases and makes long-term development more predictable.",
  },
  {
    title: "How does it handle major Laravel version upgrades?",
    body: "Laravel ships a new major version annually. A capable partner should upgrade production applications with minimal downtime and compatibility risk.",
  },
  {
    title: "What does its deployment process look like?",
    body: "Zero-downtime releases, rollback procedures, and post-update monitoring reduce risk and protect production stability.",
  },
  {
    title: "How does it manage queue architecture?",
    body: "Background jobs power much of what a Laravel application does behind the scenes, from notifications to payment processing. Ask how the team designs, monitors, and recovers queue-based workflows.",
  },
];

const QUESTIONS = [
  "Can you show projects similar in size or complexity to ours?",
  "How do you approach major Laravel version upgrades?",
  "What testing strategy do you use by default?",
  "How are production deployments managed?",
  "How do you monitor and recover background jobs?",
  "Who owns the source code, documentation, and infrastructure after launch?",
  "What support and maintenance options are available after delivery?",
  "Who on your team will actually be writing the code, and what's their experience?",
];

const VERDICT = [
  {
    fit: "For Laravel development inside a broader AI-capable, full-stack engineering team, with an in-house team currently delivering active Laravel projects",
    company: "Xorora",
  },
  {
    fit: "For senior Laravel consulting and rescue projects in North America",
    company: "Tighten",
  },
  {
    fit: "For a long-term UK-based Laravel partner with ongoing product support",
    company: "Steadfast Collective",
  },
  {
    fit: "For enterprise Laravel development in the DACH region",
    company: "byte5",
  },
  {
    fit: "For a cost-effective, experienced Laravel team at scale",
    company: "UCodeSoft",
  },
];

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";

export function Top5LaravelArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-5")}>
        Finding a Laravel agency isn&apos;t the hard part. A search returns
        dozens of firms claiming deep framework expertise, and most of those
        claims aren&apos;t independently checkable. The decision that actually
        shapes the outcome happens earlier, when a buyer picks a region and a
        team, not just a company name off a list.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        This guide profiles 5 companies for anyone comparing the{" "}
        <strong className="font-semibold text-fg1">
          best Laravel development company
        </strong>{" "}
        or trying to shortlist the{" "}
        <strong className="font-semibold text-fg1">
          top Laravel development company
        </strong>{" "}
        for a specific project. Instead of a single global ranking, it looks at
        what each company actually offers, who it&apos;s the right fit for, and
        what to watch before signing.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        Laravel remains one of the most widely adopted PHP frameworks for
        building secure, scalable web applications, and the gap between &quot;a
        team that uses Laravel&quot; and &quot;a team with genuine production
        Laravel depth&quot; is wider than most buyers expect.
      </p>

      <h2 id="how-evaluated" className={h2Class}>
        How this list was evaluated
      </h2>
      <div className="mb-4 overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              <th className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3">
                Criterion
              </th>
              <th className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3">
                Weight
              </th>
              <th className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3">
                What was examined
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
                  {row.weight}
                </td>
                <td className="px-5 py-3.5 font-sans text-[14.5px] text-fg2">
                  {row.detail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={cn(bodyClass, "mb-10")}>
        Pricing isn&apos;t part of the scoring. Regional labor markets shift
        hourly rates more than they shift engineering quality, so treating a
        lower rate as automatically better (or worse) mostly just measures
        geography twice.
      </p>

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
                "Headquarters",
                "Founded",
                "Team size",
                "Best suited for",
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
                  {company.teamSize}
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

      <h2 id="how-to-choose" className={h2Class}>
        How do you choose the right Laravel development company?
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        A strong portfolio matters, but the engineering practices behind it
        matter more over the life of the application.
      </p>
      <div className="mb-10 flex flex-col gap-4">
        {CHOICE_POINTS.map((item) => (
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

      <h2 id="questions-to-ask" className={h2Class}>
        Questions to ask before hiring a Laravel development company
      </h2>
      <ol className="mb-5 list-decimal space-y-3 pl-5 font-sans text-[16.5px] text-fg2 leading-[1.75]">
        {QUESTIONS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      <p className={cn(bodyClass, "mb-10")}>
        The answers reveal more than technical capability. They also show
        communication style, engineering maturity, and whether the team can
        support your application over the long term, not just through launch.
      </p>

      <h2 id="which-company" className={h2Class}>
        The verdict
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        The right Laravel partner depends on scope, region, and how much ongoing
        support you need, not a single universal ranking.
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
        Every company here can write working Laravel code. What separates a good
        hire from a costly mismatch is whether the team&apos;s model, region,
        and depth actually line up with what your project needs, not just what a
        homepage claims. If you&apos;re scoping a Laravel project and want to
        see <TextLink href={ROUTES.ourWork}>recent work</TextLink> or talk
        through architecture, Xorora&apos;s{" "}
        <TextLink href={ROUTES.engineering}>engineering team</TextLink> can walk
        through fit and provide a written estimate.
      </p>

      <h2 id="faq" className={h2Class}>
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-4">
        {TOP_5_LARAVEL_FAQS.map((faq, index) => (
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
        {company.teamSize ? (
          <MetaItem label="Team size" value={company.teamSize} />
        ) : null}
        {company.regions ? (
          <MetaItem label="Regions served" value={company.regions} />
        ) : (
          <MetaItem label="Minimum project size" value={company.minProject} />
        )}
        {company.regions ? (
          <MetaItem label="Minimum project size" value={company.minProject} />
        ) : null}
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
        Laravel-related capabilities
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
