import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GetQuoteButton } from "@/components/blog/post";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const TOP_10_PYTHON_SLUG =
  "top-10-python-development-companies-in-usa-2026";

export const TOP_10_PYTHON_FAQS = [
  {
    q: "What are the top Python development companies in USA?",
    a: "This 2026 comparison covers Xorora, Perpetual, ELEKS, ScienceSoft, A3Logics, Grid Dynamics, Uvik Software, Expedition Co., Dev.Pro, and Emergent Software.",
  },
  {
    q: "How much do Python development companies charge?",
    a: "Published rates in this comparison range from around $25–49/hour at the low end to $150–199/hour at the high end. Some companies don't publish current rates and require a direct quote.",
  },
  {
    q: "What is the average Python developer hourly rate in the USA?",
    a: "There's no single figure. Python developers can be hired as employees, freelancers, or through a development company, and agency rates fold in project management, QA, and overhead that a freelance rate doesn't.",
  },
  {
    q: "Which is the best Python development company?",
    a: "It depends on the project. Some companies specialize in Python and AI specifically, while others offer Python inside a broader enterprise software practice.",
  },
  {
    q: "What is a good Django development company?",
    a: "Look for a company with real, referenceable Django projects rather than one that simply lists Django among its technologies. Several companies in this comparison, including Uvik and ScienceSoft, name Django directly in their service offering.",
  },
  {
    q: "Is FastAPI a good choice for business applications?",
    a: "FastAPI works well for APIs, backend services, and microservices. Whether it's the right choice depends on your architecture and performance requirements.",
  },
  {
    q: "How much does a Python project actually cost?",
    a: "Total cost depends on scope, team size, complexity, integrations, and what happens after launch, not just the hourly rate.",
  },
  {
    q: "Should I hire individual Python developers or a development company?",
    a: "Hiring individuals works well if you already have an internal team to manage them. A development company makes more sense when you need architecture, QA, project management, and delivery handled end to end.",
  },
] as const;

export const TOP_10_PYTHON_META: BlogArticleMeta = {
  slug: TOP_10_PYTHON_SLUG,
  seoTitle: "Top 10 Python Development Companies in USA (2026)",
  seoDescription:
    "Compare the top 10 Python development companies in USA for 2026 on rates, services, specializations, and project experience — including Xorora.",
  keywords: [
    "top python web development company",
    "best python development company",
  ],
  aiSummary:
    "This 2026 guide compares 10 companies serving US businesses that need Python development, covering location, rates, minimum project size, and what each team is known for. Published rates run from about $25 an hour to $150–199 an hour, with minimums from $10,000 to $50,000 or more. Xorora and A3Logics sit at the lower minimums; Expedition Co. and Dev.Pro start at $50,000+. The right fit depends on whether you need a scoped Python or AI build, staff augmentation, or a large enterprise program — not a generic popularity ranking.",
  companies: [
    "Xorora",
    "Perpetual",
    "ELEKS",
    "ScienceSoft",
    "A3Logics",
    "Grid Dynamics",
    "Uvik Software",
    "Expedition Co.",
    "Dev.Pro",
    "Emergent Software",
  ],
  faqs: [...TOP_10_PYTHON_FAQS],
  toc: [
    { id: "quick-comparison", label: "Quick comparison" },
    { id: "xorora", label: "1. Xorora" },
    { id: "perpetual", label: "2. Perpetual" },
    { id: "eleks", label: "3. ELEKS" },
    { id: "sciencesoft", label: "4. ScienceSoft" },
    { id: "a3logics", label: "5. A3Logics" },
    { id: "grid-dynamics", label: "6. Grid Dynamics" },
    { id: "uvik-software", label: "7. Uvik Software" },
    { id: "expedition-co", label: "8. Expedition Co." },
    { id: "dev-pro", label: "9. Dev.Pro" },
    { id: "emergent-software", label: "10. Emergent Software" },
    { id: "pricing-comparison", label: "Pricing comparison" },
    { id: "what-determines-cost", label: "What determines cost" },
    { id: "services-worth-comparing", label: "Services worth comparing" },
    { id: "how-to-choose", label: "How to choose" },
    { id: "questions-to-ask", label: "Questions to ask" },
    { id: "which-company", label: "Which company to choose" },
    { id: "conclusion", label: "Conclusion" },
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
  snapshot: string;
  paragraphs: string[];
  capabilities: string[];
  consideration: string;
  suitedFor?: string;
  href?: string;
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
    knownFor: "AI-driven Python systems, SaaS backends",
    snapshot: "/assets/blog/companies/xorora.png",
    href: ROUTES.pythonWebDevelopment,
    paragraphs: [
      "Xorora is a US-based AI development partner built for teams that need software to reach production, not just a demo. Its Python work spans Django and FastAPI backends, Flask microservices, REST API development, and the data and AI/ML layers that increasingly sit behind modern SaaS products.",
      "The company positions itself around outcomes rather than headcount. It has shipped 40+ AI systems to production, with discovery typically taking 1–2 weeks to an architecture proposal that the client keeps either way. Python engagements are scoped as Django, FastAPI, and Flask systems engineered for production — custom web apps, APIs, and data platforms — rather than prototypes.",
    ],
    capabilities: [
      "Python application development",
      "Django and FastAPI",
      "Flask",
      "REST APIs and microservices",
      "AI/ML integration",
      "Data pipelines",
      "Cloud-native deployment",
    ],
    consideration:
      "Xorora's $10,000 minimum project size is lower than nearly every other company in this comparison, which makes it accessible for a scoped MVP or a single Python service rather than only full enterprise engagements. Because the company doesn't publish a fixed hourly range, get a written estimate against your specific scope before comparing it to competitors on price alone.",
    suitedFor:
      "Startups and mid-market teams that need a Python-based AI or SaaS system built and shipped, not just prototyped",
  },
  {
    id: "perpetual",
    rank: 2,
    name: "Perpetual",
    location: "New York, USA / India",
    founded: "2013",
    rate: "$50–99/hr",
    minProject: "$25,000+",
    knownFor: "Web and product development",
    snapshot: "/assets/blog/companies/perpetual.png",
    paragraphs: [
      "Perpetual runs as a full-stack software and product studio out of New York, with delivery support in India. Python sits inside a broader offering that includes UX/UI design and product strategy rather than standing alone as the company's headline service.",
      "Public project references include work for Reuters Insider, the commercial real estate platform Biproxi, and Roo, a veterinary staffing marketplace. That range points to a team comfortable moving between media, real estate, and healthcare-adjacent clients.",
    ],
    capabilities: [
      "Python backend development",
      "API development",
      "SaaS architecture",
      "Database-driven applications",
      "Product design and strategy",
    ],
    consideration:
      "Perpetual reads better as a product partner than a pure engineering vendor. If you already have a Python team and just need extra hands, its design-led model may add more overhead than you need.",
  },
  {
    id: "eleks",
    rank: 3,
    name: "ELEKS",
    location: "Europe / USA / Canada",
    founded: "1991",
    rate: "$50–99/hr",
    minProject: "$25,000+",
    knownFor: "Enterprise software delivery",
    snapshot: "/assets/blog/companies/eleks.png",
    paragraphs: [
      "ELEKS is one of the largest and longest-running companies in this comparison, with a US office in Chicago and more than 1,000 employees globally. Its Clutch profile shows over 1,000 delivered projects and more than 120 active accounts, figures that put it in a different weight class than most boutique Python shops.",
      "Python work at ELEKS typically comes bundled with data engineering, QA, and cloud infrastructure rather than sold as a standalone line item, which fits companies that need several disciplines coordinated under one roof.",
    ],
    capabilities: [
      "Python and Django development",
      "Data engineering and AI/ML",
      "Backend architecture",
      "Cloud infrastructure",
      "QA and testing",
    ],
    consideration:
      "ELEKS' size and process maturity suit complex, multi-team programs. A single small Python application may not need this much organizational overhead.",
  },
  {
    id: "sciencesoft",
    rank: 4,
    name: "ScienceSoft",
    location: "USA / Global",
    founded: "1989",
    rate: "Contact for rate",
    minProject: "Contact",
    knownFor: "Enterprise data, AI, and BI",
    snapshot: "/assets/blog/companies/sciencesoft.png",
    paragraphs: [
      "ScienceSoft has been operating since 1989 and has built a broad IT consulting practice around data, AI, and enterprise software. Its Python offering explicitly names Django, Flask, and Celery, and the company positions Python primarily as infrastructure for analytics, business intelligence, and machine learning products.",
      "Industries served include healthcare, banking, retail, manufacturing, and oil and gas, which reflects a consulting practice built for regulated, data-heavy environments rather than fast-moving startups.",
    ],
    capabilities: [
      "Django, Flask, Celery",
      "Machine learning and big data",
      "Business intelligence",
      "SaaS and enterprise data platforms",
      "IoT",
    ],
    consideration:
      "ScienceSoft doesn't publish current pricing, so budget-sensitive buyers will need a direct quote early in the conversation rather than relying on published rate cards.",
  },
  {
    id: "a3logics",
    rank: 5,
    name: "A3Logics",
    location: "Carlsbad, CA / India",
    founded: "2003",
    rate: "$25–49/hr",
    minProject: "$10,000+",
    knownFor: "Custom software and AI",
    snapshot: "/assets/blog/companies/a3logics.png",
    paragraphs: [
      "A3Logics is a US-headquartered software company with delivery operations in India and a Clutch-listed team of 250–999 people. Its Python capability sits inside a wider portfolio that covers AI, mobile, blockchain, and cloud development, so most projects blend Python with at least one other technology area.",
      "Public examples include healthcare platforms, EHS software, and API integration work, which suggests a team used to working inside existing systems rather than only greenfield builds.",
    ],
    capabilities: [
      "Python backend systems",
      "AI and machine learning",
      "Cloud and API integration",
      "Enterprise applications",
    ],
    consideration:
      "The hourly rate is among the lowest in this list. Confirm the seniority and actual composition of the assigned team rather than assuming rate alone tells you what you're getting.",
  },
  {
    id: "grid-dynamics",
    rank: 6,
    name: "Grid Dynamics",
    location: "USA / Global",
    founded: "2006",
    rate: "Verify directly",
    minProject: "$25,000+",
    knownFor: "Enterprise engineering at scale",
    snapshot: "/assets/blog/companies/grid-dynamics.png",
    paragraphs: [
      "Grid Dynamics is an enterprise engineering firm where Python shows up mainly inside data engineering, machine learning, and large-scale backend work rather than as a marketed specialty. The company also has historical ties to Daxx, a staffing-focused engineering brand that appeared in earlier Python comparisons, so older rate figures tied to that name should be verified rather than assumed current.",
      "Clients span retail, financial services, healthcare, and telecommunications, industries where Grid Dynamics' scale and enterprise process tend to matter more than in a small application build.",
    ],
    capabilities: [
      "Python for data and backend engineering",
      "Machine learning and AI",
      "Cloud-native applications",
      "Enterprise data platforms",
    ],
    consideration:
      "This is a large engineering organization built for enterprise-scale programs. A small Python MVP will likely be over-served by this level of infrastructure.",
  },
  {
    id: "uvik-software",
    rank: 7,
    name: "Uvik Software",
    location: "Estonia / UK",
    founded: "2015",
    rate: "$50–99/hr",
    minProject: "$25,000+",
    knownFor: "Python and AI staff augmentation",
    snapshot: "/assets/blog/companies/uvik-software.png",
    paragraphs: [
      "Uvik is one of the more Python-focused companies on this list, built around staff augmentation with senior Python, AI, and data engineers rather than fixed-scope project delivery. Its Clutch rating currently sits at 5.0 from more than 30 reviews.",
      "Public project references include data protection platforms, legal operations tools, and messaging systems, all areas where embedded senior engineers matter more than a large delivery team.",
    ],
    capabilities: [
      "Python, Django, FastAPI, Flask",
      "AI/ML and data engineering",
      "Cloud applications",
      "Application maintenance",
    ],
    consideration:
      "Uvik's model fits companies that already run their own delivery process and want to plug in strong individual engineers, not those looking for a vendor to own the whole project.",
  },
  {
    id: "expedition-co",
    rank: 8,
    name: "Expedition Co.",
    location: "El Segundo, CA, USA",
    founded: "2015",
    rate: "$100–149/hr",
    minProject: "$50,000+",
    knownFor: "Custom digital products",
    snapshot: "/assets/blog/companies/expedition-co.png",
    paragraphs: [
      "Expedition Co. is a California-based product studio that builds custom software with AI, big data, and cloud components layered on top of a Python-capable engineering base. Public work includes a content management system for Hyundai and a mobile app for CoffeeNow, both larger consumer-facing builds rather than internal tools.",
    ],
    capabilities: [
      "Python backend development",
      "AI and big data",
      "Cloud infrastructure",
      "Web and mobile product builds",
    ],
    consideration:
      "Both the rate and the $50,000 minimum put Expedition Co. toward the higher end of this list. It's a better fit for funded companies building a full product than for a single backend service.",
  },
  {
    id: "dev-pro",
    rank: 9,
    name: "Dev.Pro",
    location: "Charlotte, NC, USA / Global",
    founded: "2011",
    rate: "$50–99/hr",
    minProject: "$50,000+",
    knownFor: "Custom software and engineering",
    snapshot: "/assets/blog/companies/dev-pro.png",
    paragraphs: [
      "Dev.Pro runs a distributed delivery model with a US base in Charlotte, and Python is one part of a broader stack that also covers DevOps, IoT, blockchain, and cloud engineering. Referenced projects include a healthcare communication platform, a blockchain-based financial system, and hospitality point-of-sale software.",
    ],
    capabilities: [
      "Python backend and API development",
      "Cloud and DevOps",
      "AI and data",
      "Custom software delivery",
    ],
    consideration:
      "The $50,000 minimum makes Dev.Pro a better match for established businesses with a defined, sizable scope than for an early-stage MVP.",
  },
  {
    id: "emergent-software",
    rank: 10,
    name: "Emergent Software",
    location: "Minneapolis, MN, USA",
    founded: "2015",
    rate: "$150–199/hr",
    minProject: "$25,000+",
    knownFor: "Software, cloud, and data solutions",
    snapshot: "/assets/blog/companies/emergent-software.png",
    paragraphs: [
      "Emergent Software carries the highest published hourly rate in this comparison, built around custom software, cloud, data, and Microsoft-oriented engineering out of Minneapolis. Its Clutch rating is 4.9 from 35 reviews, and referenced clients include Kalahari Resorts and Compeer Financial.",
    ],
    capabilities: [
      "Python and full-stack development",
      "Data engineering",
      "Cloud applications",
      "Database development",
    ],
    consideration:
      "The premium rate reflects a fully US-based team and deep Microsoft-stack experience. Whether that's worth it depends on how much your project actually needs those specific strengths versus a lower-cost alternative.",
  },
];

const PRICE_BANDS: { range: string; companies: string }[] = [
  { range: "Contact for current rate", companies: "Xorora, ScienceSoft" },
  { range: "$25–49/hr", companies: "A3Logics" },
  { range: "$50–99/hr", companies: "Perpetual, ELEKS, Uvik, Dev.Pro" },
  { range: "$100–149/hr", companies: "Expedition Co." },
  { range: "$150–199/hr", companies: "Emergent Software" },
  { range: "Verify directly", companies: "Grid Dynamics" },
];

const COST_FACTORS: { title: string; body: string }[] = [
  {
    title: "Project complexity",
    body: "A single API costs far less to build than a multi-tenant SaaS platform with authentication, billing, and third-party integrations.",
  },
  {
    title: "Developer seniority",
    body: "Senior engineers cost more per hour but tend to make fewer architectural mistakes on complex systems, which can lower total cost even at a higher rate.",
  },
  {
    title: "Framework",
    body: "Django, Flask, and FastAPI solve different problems. The right one changes both the build approach and the timeline.",
  },
  {
    title: "AI and machine learning scope",
    body: "Data preparation, model integration, evaluation, and MLOps add real engineering time beyond the core application.",
  },
  {
    title: "Integrations",
    body: "Payment systems, CRMs, ERPs, and third-party APIs increase both build and testing time.",
  },
  {
    title: "Team composition",
    body: "A project that needs frontend developers, QA, DevOps, and a solution architect alongside Python engineers will cost more than a single-developer engagement, regardless of hourly rate.",
  },
];

const SERVICES: { title: string; body: string }[] = [
  {
    title: "Django development",
    body: "Fits database-driven web applications and SaaS products. Ask for real Django case studies, not just a mention on a tech stack page.",
  },
  {
    title: "FastAPI development",
    body: "The common choice for modern APIs and backend services. Ask providers directly about their experience with async programming, authentication, and production monitoring.",
  },
  {
    title: "Python API development",
    body: "Covers REST APIs, microservices, and backend integrations, usually the core of any Python engagement.",
  },
  {
    title: "AI and machine learning",
    body: "Leans on Python's data science ecosystem, from model training to deployment.",
  },
  {
    title: "Data engineering",
    body: "Covers ETL pipelines, data processing, and the automation layer that feeds analytics and ML systems.",
  },
  {
    title: "Application modernization",
    body: "Applies to existing Python systems that need a version upgrade, a framework migration, or a move to the cloud.",
  },
];

const HOW_TO_CHOOSE = [
  "Define the project before you talk to anyone. What are you building, who uses it, and what does launch actually require?",
  "Confirm framework experience directly. If the project needs Django or FastAPI, ask for real projects built in that framework, not a generic yes.",
  "Read case studies for fit, not polish. Look for similar industry, scale, and complexity to your own project.",
  "Weigh rate against minimum project size together. A lower hourly rate paired with a high minimum can cost more than a higher rate with a smaller minimum, depending on your scope.",
  "Check third-party reviews. Platforms like Clutch surface patterns in communication, timelines, and delivery quality that a sales call won't.",
  "Ask who actually writes the code. Seniority, technical leadership, and QA coverage matter more than the company's headcount.",
  "Get ownership terms in writing. Source code, documentation, and infrastructure access should be unambiguous before you sign.",
  "Plan for what happens after launch. Bug fixes, security patches, and future features are part of the real cost of ownership.",
];

const QUESTIONS = [
  "How many Python developers would be assigned to my project?",
  "Which frameworks does your team use most often?",
  "Can you show real Django or FastAPI projects, not just a skills list?",
  "Who owns technical architecture decisions?",
  "What does your code review process look like?",
  "How is testing handled?",
  "What's your process for security vulnerabilities?",
  "Who owns the source code once the project ships?",
  "What's included in the quoted rate, and what isn't?",
  "Is project management billed separately?",
  "Can the team scale up or down as the project changes?",
  "What support is available after launch?",
  "What's the actual minimum project size for my scope?",
  "How are extra hours or scope changes billed?",
  "Can you provide references from a comparable project?",
];

const FIT_ROWS: { requirement: string; companies: string }[] = [
  { requirement: "Small budget, fast start", companies: "Xorora, A3Logics" },
  {
    requirement: "AI-driven Python systems",
    companies: "Xorora, ScienceSoft, Grid Dynamics",
  },
  { requirement: "Python-focused staff augmentation", companies: "Uvik" },
  {
    requirement: "Enterprise-scale engineering",
    companies: "ELEKS, ScienceSoft, Grid Dynamics",
  },
  { requirement: "Product design plus engineering", companies: "Perpetual" },
  {
    requirement: "Large custom builds",
    companies: "Dev.Pro, Expedition Co.",
  },
  {
    requirement: "Fully US-based team",
    companies: "Xorora, Emergent Software, Expedition Co.",
  },
  {
    requirement: "Highest-end US pricing",
    companies: "Emergent Software, Expedition Co.",
  },
];

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";

export function Top10PythonArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-5")}>
        Picking a Python partner is not about finding a company that lists
        Python somewhere on its homepage. Almost every software vendor does
        that. The real work is comparing engagement model, technical depth,
        industry experience, and how a team actually runs a project once the
        contract is signed.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        Published rates across the market vary widely, from roughly $25 an hour
        on the low end to $150–199 an hour at established US firms with a
        minimum project size that can range from a few thousand dollars to
        $50,000 or more. None of that tells you which company is right for your
        project. It only tells you where to start looking.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        This guide compares 10 companies serving US businesses that need Python
        development, covering location, founding year, pricing, minimum
        engagement size, core capabilities, and the kind of work each one is
        known for. It&apos;s built for anyone searching for a{" "}
        <strong className="font-semibold text-fg1">
          top Python web development company
        </strong>{" "}
        or trying to shortlist the{" "}
        <strong className="font-semibold text-fg1">
          best Python development company
        </strong>{" "}
        for a specific project, not a general popularity ranking.
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

      <h2 id="pricing-comparison" className={h2Class}>
        Python development company pricing comparison
      </h2>
      <div className="mb-6 overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              <th className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3">
                Price range
              </th>
              <th className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3">
                Companies
              </th>
            </tr>
          </thead>
          <tbody>
            {PRICE_BANDS.map((row, index) => (
              <tr
                key={row.range}
                className={cn(
                  "border-border border-t",
                  index % 2 === 0 ? "bg-surface" : "bg-slate-50",
                )}
              >
                <td className="px-5 py-3.5 font-sans font-semibold text-[14.5px] text-fg1">
                  {row.range}
                </td>
                <td className="px-5 py-3.5 font-sans text-[14.5px] text-fg2">
                  {row.companies}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={cn(bodyClass, "mb-4")}>
        These are published, company-level rate ranges, not guaranteed quotes
        for a specific project. A theoretical 1,000-hour engagement illustrates
        the spread:
      </p>
      <ul className="mb-6 list-disc pl-5 font-sans text-[16.5px] text-fg2 leading-[1.75]">
        <li>$30/hour → $30,000</li>
        <li>$60/hour → $60,000</li>
        <li>$100/hour → $100,000</li>
        <li>$150/hour → $150,000</li>
      </ul>
      <p className={bodyClass}>
        Treat these as arithmetic, not quotes from any company on this list.
      </p>

      <h2 id="what-determines-cost" className={h2Class}>
        What determines Python development cost?
      </h2>
      <div className="grid gap-4">
        {COST_FACTORS.map((item) => (
          <div
            key={item.title}
            className="rounded-(--r-lg) border border-border bg-slate-50 px-5 py-4"
          >
            <h3 className="m-0 mb-1.5 font-sans font-semibold text-[17px] text-fg1">
              {item.title}
            </h3>
            <p className={cn(bodyClass, "text-[15.5px]")}>{item.body}</p>
          </div>
        ))}
      </div>

      <h2 id="services-worth-comparing" className={h2Class}>
        Python development services worth comparing
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {SERVICES.map((item) => (
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

      <h2 id="how-to-choose" className={h2Class}>
        How to choose among Python development companies
      </h2>
      <ol className="m-0 list-decimal space-y-3 pl-5 font-sans text-[16.5px] text-fg2 leading-[1.75]">
        {HOW_TO_CHOOSE.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <h2 id="questions-to-ask" className={h2Class}>
        Questions to ask a Python development company
      </h2>
      <ul className="m-0 grid list-disc gap-2 pl-5 font-sans text-[16.5px] text-fg2 leading-[1.75] md:grid-cols-2 md:gap-x-8">
        {QUESTIONS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 id="which-company" className={h2Class}>
        Which Python development company should you choose?
      </h2>
      <div className="mb-5 overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              <th className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3">
                Requirement
              </th>
              <th className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3">
                Companies to consider
              </th>
            </tr>
          </thead>
          <tbody>
            {FIT_ROWS.map((row, index) => (
              <tr
                key={row.requirement}
                className={cn(
                  "border-border border-t",
                  index % 2 === 0 ? "bg-surface" : "bg-slate-50",
                )}
              >
                <td className="px-5 py-3.5 font-sans font-semibold text-[14.5px] text-fg1">
                  {row.requirement}
                </td>
                <td className="px-5 py-3.5 font-sans text-[14.5px] text-fg2">
                  {row.companies}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={bodyClass}>
        Use this as a starting filter, not a final verdict. The right fit still
        depends on your specific scope and budget.
      </p>

      <h2 id="conclusion" className={h2Class}>
        Conclusion
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        There is no single best Python development company for every project.
        Some, like Xorora and Uvik, are built specifically around Python and AI
        engineering. Others, like ELEKS and Grid Dynamics, offer Python as part
        of a much larger enterprise engineering practice.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        Rates across this list run from a few thousand dollars for a scoped
        project up to $150–199 an hour at the premium end, with minimum
        engagement sizes ranging from $10,000 to $50,000 or more. For a small or
        early-stage build, minimum project size and responsiveness often matter
        more than brand size. For a large enterprise system, technical depth and
        long-term support usually matter more than the headline rate.
      </p>
      <p className={bodyClass}>
        Before committing, compare the actual team you&apos;ll work with,
        relevant case studies, framework expertise, and what happens after
        launch, not just the number on the rate card.
      </p>

      <h2 id="faq" className={h2Class}>
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-4">
        {TOP_10_PYTHON_FAQS.map((faq, index) => (
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

      <dl className="mb-6 grid gap-3 sm:grid-cols-2">
        <MetaItem label="Location" value={company.location} />
        <MetaItem label="Founded" value={company.founded} />
        <MetaItem label="Minimum project size" value={company.minProject} />
        <MetaItem label="Average hourly rate" value={company.rate} />
      </dl>

      {company.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className={cn(bodyClass, "mb-4")}>
          {paragraph}
        </p>
      ))}

      {company.href ? (
        <p className="mb-5">
          <Link
            href={company.href}
            className="inline-flex items-center gap-1.5 font-sans font-semibold text-[14.5px] text-accent no-underline hover:text-tangerine-600"
          >
            Python web development services
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </p>
      ) : null}

      <h3 className="mt-6 mb-3 font-sans font-semibold text-[17px] text-fg1">
        Python-related capabilities
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
