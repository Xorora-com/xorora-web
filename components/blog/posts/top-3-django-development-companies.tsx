import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GetQuoteButton } from "@/components/blog/post";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const TOP_3_DJANGO_SLUG = "top-3-django-development-companies-2026";

export const TOP_3_DJANGO_FAQS = [
  {
    q: "What should I look for in a Django development company?",
    a: "Real production experience with Django REST Framework or GraphQL, a documented approach to version upgrades and testing, and clarity on who will actually write your code. If your project has any AI or data component, ask directly whether the team handles that in-house or would need a second vendor.",
  },
  {
    q: "How much does it cost to hire a Django web development company?",
    a: "Cost depends heavily on scope. A scoped API or admin system can start in the low five figures, while a full-stack platform with a custom frontend, third-party integrations, and AI features runs significantly higher. Get a written estimate against your specific requirements rather than comparing headline rates.",
  },
  {
    q: "What's the difference between a Django development agency and a freelance Django developer?",
    a: "A freelancer covers one set of hands and one discipline. An agency typically brings backend engineers, QA, and project management together, so project continuity doesn't depend on a single person's availability. For anything beyond a narrow, well-defined task, an agency is usually the safer choice.",
  },
  {
    q: "Is Django still a good choice for a new web project in 2026?",
    a: "Yes. Django's batteries-included approach, strong security defaults, and mature ecosystem remain a solid foundation for content-heavy sites, internal tools, SaaS backends, and increasingly, applications with an AI or data layer built in.",
  },
  {
    q: "Is Xorora a good choice among Django development companies?",
    a: "Xorora has an in-house Django team building production applications, including Django REST Framework APIs and Django paired with AI/ML features, alongside its broader full-stack and AI engineering practice. It's a strong fit for companies that want Django development handled by a team that also brings API, data, and AI capability to the same engagement rather than a narrowly scoped Django-only vendor. Projects start at $10,000, with pricing quoted directly against scope.",
  },
] as const;

export const TOP_3_DJANGO_META: BlogArticleMeta = {
  slug: TOP_3_DJANGO_SLUG,
  seoTitle: "Top 3 Django Development Companies",
  seoDescription:
    "A close look at 3 Django development companies, evaluated on real technical depth, track record, and client fit, including Xorora at #1.",
  keywords: [
    "django development company",
    "django web development company",
    "django development agency",
    "django development agencies",
    "django development companies",
  ],
  aiSummary:
    "This guide profiles three Django development companies worth shortlisting in 2026: Xorora (US, AI-driven Django and full-stack delivery), Caktus Group (North Carolina, Django core contributors and enterprise consulting), and Imaginary Landscape (Chicago, long-standing Django web development). It covers quick comparison, what each team does best, how to choose a Django partner, questions to ask before hiring, and a verdict matched to project needs rather than a padded directory list.",
  companies: ["Xorora", "Caktus Group", "Imaginary Landscape"],
  faqs: [...TOP_3_DJANGO_FAQS],
  toc: [
    { id: "quick-comparison", label: "Quick comparison" },
    { id: "xorora", label: "1. Xorora" },
    { id: "caktus-group", label: "2. Caktus Group" },
    { id: "imaginary-landscape", label: "3. Imaginary Landscape" },
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
  regions?: string;
  snapshot?: string;
  paragraphs: ReactNode[];
  highlights: string[];
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
    knownFor: "AI-driven Django and Python systems, full-stack delivery",
    snapshot: "/assets/blog/companies/xorora.png",
    href: ROUTES.djangoDevelopmentCompany,
    hrefLabel: "Django development company",
    paragraphs: [
      <>
        Xorora is a US-based{" "}
        <TextLink href={ROUTES.home}>AI development partner</TextLink> with an
        in-house team building{" "}
        <TextLink href={ROUTES.customAppDevelopment}>
          production Django applications
        </TextLink>
        , not just prototypes that stall once real traffic and real data show
        up. Its Django work covers custom web applications, Django REST
        Framework APIs, database-driven admin systems, and Django paired with
        modern frontends like React or Vue, alongside{" "}
        <TextLink href={ROUTES.applicationModernization}>
          migrating and modernizing
        </TextLink>{" "}
        existing Django codebases that have outgrown their original
        architecture.
      </>,
      <>
        Django sits inside a broader{" "}
        <TextLink href={ROUTES.mlDataScience}>
          Python and AI engineering practice
        </TextLink>{" "}
        at Xorora, which matters in 2026 more than it used to: a growing share
        of Django projects now need to talk to an AI or ML layer somewhere in
        the stack, whether that&apos;s a recommendation engine, a
        document-processing pipeline, or an LLM-backed feature. A team that
        builds Django and AI systems under one roof avoids the handoff friction
        of stitching together two separate vendors. Across its broader{" "}
        <TextLink href={ROUTES.ourWork}>delivery record</TextLink>, publicly
        cited results include a 3.5x median speed-up compared to building the
        same system in-house and 99.9% uptime across deployed systems.
      </>,
    ],
    highlights: [
      "Full-stack Django delivery. Backend, API layer, and frontend handled by one team, not handed off between vendors mid-project.",
      "AI-adjacent Django expertise. Relevant for any project that needs Django plus a data or ML component, increasingly common rather than a niche request.",
      "Accessible entry point. A $10,000 minimum makes it realistic to start with a scoped Django API or admin system rather than only a full platform rebuild.",
      "Production discipline. Real deployment pipelines and monitoring, not just a working local build handed over at the end.",
    ],
    consideration: (
      <>
        Xorora is newer than the other two companies on this list and
        doesn&apos;t yet have the multi-year public Django portfolio that a firm
        like Caktus Group has built up. What it does offer is an active, senior
        in-house Django team and a broader engineering practice that covers what
        a growing number of Django projects actually need today: AI integration,
        not just CRUD.
      </>
    ),
    suitedFor:
      "Companies that want Django development from a team that also handles AI, data, and full-stack work under one roof",
  },
  {
    id: "caktus-group",
    rank: 2,
    name: "Caktus Group",
    location: "North Carolina, USA",
    founded: "2007",
    rate: "Contact for rate",
    minProject: "Contact",
    knownFor: "Django core contributors, enterprise Django consulting",
    regions: "United States, remote-first",
    paragraphs: [
      "Caktus Group has built its reputation specifically around Django, with a team that includes Django core contributors and long-standing participants in the framework's open-source community. Nearly two decades in, the company has developed deep familiarity with Django's internals, not just its documented public API.",
    ],
    highlights: [
      "Framework-level expertise. Team members contribute directly to Django itself, which shows up in how they architect and troubleshoot complex applications.",
      "Rigorous engineering standards. A consistent emphasis on code quality, testing discipline, and long-term maintainability over quick delivery.",
      "Collaborative delivery model. Close, ongoing client involvement throughout the build rather than a black-box handoff at the end.",
      "Community investment. Active sponsorship and contribution to the Django ecosystem signals a team genuinely embedded in the framework's future, not just using it as a line item.",
    ],
    consideration:
      "Caktus Group's depth is best matched to complex, long-running Django applications where framework-level expertise actually changes the outcome. For a smaller, well-scoped project, that level of specialization may be more than you need.",
    suitedFor:
      "Organizations building complex, long-term Django applications that benefit from framework-core-level expertise",
  },
  {
    id: "imaginary-landscape",
    rank: 3,
    name: "Imaginary Landscape",
    location: "Chicago, Illinois, USA",
    founded: "1995",
    rate: "Contact for rate",
    minProject: "Contact",
    knownFor: "Long-standing Django web development, CMS-heavy builds",
    paragraphs: [
      "Imaginary Landscape predates Django itself by nearly a decade, having started as a general web development shop before building a long-standing specialty in Django once the framework matured. That history gives the company a broader perspective on web architecture than agencies that started as Django-only shops.",
    ],
    highlights: [
      "Long operating history. Three decades in business is a meaningful signal of stability for a long-term technology partner.",
      "Django-specific technical depth. Extended, hands-on experience with the framework and its common integration points.",
      "Personalized engagement. A client-first approach that tends to suit organizations wanting a more consultative, relationship-driven partner.",
      "Track record of retention. Long client relationships suggest consistent delivery quality over time, not just a strong first project.",
    ],
    consideration:
      "A long operating history is a point in Imaginary Landscape's favor for stability, but it's worth asking directly about the seniority and current composition of the team assigned to your specific project, not just the company's overall tenure.",
    suitedFor:
      "Organizations that want a long-established, relationship-driven Django partner for an ongoing engagement",
  },
];

const CHOICE_POINTS = [
  "Ask about real Django REST Framework and API experience, not just Django templates. Most modern projects need an API layer, whether serving a React/Vue frontend, a mobile app, or third-party integrations.",
  "Check how the team handles Django version upgrades. Django has a clear release and long-term-support cadence; a mature partner should have a documented process for staying current without breaking production.",
  "Ask about testing discipline. Django's built-in testing framework is a strength of the ecosystem, but only if the team actually uses it consistently, not just when convenient.",
  <>
    Clarify how AI or data-heavy features fit in, if your roadmap includes them.
    A Django team that also handles the{" "}
    <TextLink href={ROUTES.mlDataScience}>AI/ML layer</TextLink> avoids a second
    vendor relationship and the integration risk that comes with it.
  </>,
  "Get a straight answer on deployment and hosting. Django applications run cleanly on most modern cloud infrastructure, but ask specifically how the team handles environment configuration, database migrations, and zero-downtime deploys.",
];

const QUESTIONS = [
  "Can you show a production Django application currently handling real traffic?",
  "What's your experience with Django REST Framework or GraphQL APIs?",
  "How do you approach Django version upgrades over the life of a project?",
  "What does your default testing strategy look like?",
  "Who owns the source code, documentation, and infrastructure after delivery?",
  "Do you have in-house experience integrating AI or ML features into a Django application?",
  "What support is available after launch?",
  "Who will actually be writing the code on my project, and what's their seniority?",
];

const VERDICT = [
  {
    fit: "For Django development from a team that also brings AI, data, and full-stack capability to the same engagement",
    company: "Xorora",
  },
  {
    fit: "For deep, framework-core-level Django expertise on complex, long-running applications",
    company: "Caktus Group",
  },
  {
    fit: "For a long-established, relationship-driven Django partner with decades of stability",
    company: "Imaginary Landscape",
  },
];

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";

export function Top3DjangoArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-5")}>
        Django keeps its position as one of the most trusted Python web
        frameworks for a reason: sensible defaults, strong security out of the
        box, and a mature ecosystem that scales from a weekend MVP to an
        enterprise platform. That reputation is also why &quot;Django
        expert&quot; shows up on the homepage of far more agencies than actually
        have the production depth to back it up.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        This guide looks closely at 3 companies worth considering when
        you&apos;re evaluating a{" "}
        <strong className="font-semibold text-fg1">
          django development company
        </strong>{" "}
        for a real project, not a padded list of ten or twenty{" "}
        <strong className="font-semibold text-fg1">
          django development agencies
        </strong>{" "}
        that all blur together. Whether you&apos;re searching for a{" "}
        <strong className="font-semibold text-fg1">
          django web development company
        </strong>{" "}
        for a new build or a{" "}
        <strong className="font-semibold text-fg1">
          django development agency
        </strong>{" "}
        to take over an existing codebase, the goal here is the same: understand
        what each team actually does well before you commit budget and timeline
        to them.
      </p>

      <h2 id="quick-comparison" className={h2Class}>
        Quick comparison
      </h2>
      <div className="mb-10 overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              {["Rank", "Company", "Location", "Founded", "Best known for"].map(
                (col) => (
                  <th
                    key={col}
                    className="px-4 py-3.5 font-sans font-semibold text-[12.5px] text-fg3"
                  >
                    {col}
                  </th>
                ),
              )}
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
        How to choose a Django development company
      </h2>
      <ul className="mb-10 list-disc space-y-4 pl-5 font-sans text-[16.5px] text-fg2 leading-[1.75]">
        {CHOICE_POINTS.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 id="questions-to-ask" className={h2Class}>
        Questions to ask before hiring a Django development agency
      </h2>
      <ol className="mb-10 list-decimal space-y-3 pl-5 font-sans text-[16.5px] text-fg2 leading-[1.75]">
        {QUESTIONS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <h2 id="which-company" className={h2Class}>
        The verdict
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        All three companies here can deliver solid Django work; the right fit
        depends on what you actually need.
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
        Every company claiming to be a django development agency can point to a
        portfolio. What separates a strong hire from a costly mismatch is
        whether their specific strengths — framework depth, AI capability, or
        long-term relationship focus — actually match what your project needs
        next. If you&apos;re scoping a Django project and want a straight answer
        on fit, Xorora&apos;s{" "}
        <TextLink href={ROUTES.engineering}>engineering team</TextLink> can walk
        through your requirements and provide a written estimate.
      </p>

      <h2 id="faq" className={h2Class}>
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-4">
        {TOP_3_DJANGO_FAQS.map((faq, index) => (
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
        {company.regions ? (
          <MetaItem label="Regions served" value={company.regions} />
        ) : null}
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
        Why {company.name} stands out
      </h3>
      <ul className="mb-6 list-disc space-y-2 pl-5 font-sans text-[15.5px] text-fg2 leading-relaxed">
        {company.highlights.map((item) => (
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
