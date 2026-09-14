import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GetQuoteButton } from "@/components/blog/post";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const BEST_JAVA_STARTUPS_SLUG =
  "best-java-development-companies-startups-2026";

export const BEST_JAVA_STARTUPS_FAQS = [
  {
    q: "What's the difference between a Java development company and a JavaScript development company?",
    a: "Java and JavaScript are unrelated languages despite the similar name. A Java development company builds JVM-based backend systems, enterprise software, and Android apps using Java or Kotlin. A JavaScript development company builds browser-based frontends and, often via Node.js, JavaScript-based backends. Confirm which one you actually need before requesting proposals, since the naming overlap causes real mix-ups.",
  },
  {
    q: "Is Java still a good choice for a new startup in 2026?",
    a: "Yes, particularly for FinTech, logistics, security, and other domains where correctness and long-term maintainability matter more than the fastest possible first launch. Modern Java (17/21+) with Spring Boot 3 and Virtual Threads is a meaningfully different, more productive language than the Java most people picture.",
  },
  {
    q: "How much does it cost to hire a custom Java development company?",
    a: "Rates vary widely by region and specialization. Architecture-first consultancies and framework-authorship-level firms tend to price at a premium, while full-cycle product shops in Eastern Europe and similar regions offer more startup-friendly rates. Get a written estimate against your specific scope rather than comparing headline hourly rates.",
  },
  {
    q: "What should I look for in a Java web application development company?",
    a: "Real production experience with modern Java (17/21+), demonstrated Spring Boot or lightweight-framework depth, clean API design discipline, and a documented testing strategy. If your roadmap includes AI or data features, ask directly whether the team handles that in-house.",
  },
  {
    q: "Is Xorora a good choice among Java development companies?",
    a: "Xorora has an in-house team building Java and Spring Boot applications, alongside its broader AI, .NET, Python, Node.js, and Laravel engineering practice. It's a strong fit for startups that want Java development handled by a team that also brings AI, data, and full-stack capability to the same engagement, rather than a narrowly scoped Java-only vendor. Projects start at $10,000, with pricing quoted directly against scope.",
  },
  {
    q: "What's the difference between a Java software company and a Java outsourcing company?",
    a: "The terms are often used interchangeably, but \"software company\" typically implies product-focused, end-to-end delivery, while \"outsourcing company\" often implies staff augmentation or capacity extension for an existing team. Clarify which model you actually need, since pricing, ownership, and engagement structure differ meaningfully between the two.",
  },
] as const;

export const BEST_JAVA_STARTUPS_META: BlogArticleMeta = {
  slug: BEST_JAVA_STARTUPS_SLUG,
  seoTitle: "Best Java Development Companies for Startups in 2026",
  seoDescription:
    "8 startup-friendly Java development companies for 2026, compared by specialty, rates, and delivery model, including Xorora at #1.",
  keywords: [
    "java development company",
    "java software development company",
    "custom java development company",
    "java web development company",
    "java development company in usa",
  ],
  aiSummary:
    "This 2026 guide profiles eight Java development companies suited to startup buyers, from full-stack Spring Boot delivery and AI-integrated engineering at Xorora to Spring ecosystem specialists, Micronaut experts, architecture boutiques, Kotlin/graph-data teams, MVP re-architecture shops, and regulated-industry builders. The comparison covers headquarters, founding year, niche, and best fit rather than ad spend, with practical questions on modern Java, Spring Boot 3, Virtual Threads, API design, and AI integration.",
  companies: [
    "Xorora",
    "Codecentric",
    "Object Computing (OCI)",
    "OpenValue",
    "Instil",
    "JDriven",
    "Dreamix",
    "Kindgeek",
  ],
  faqs: [...BEST_JAVA_STARTUPS_FAQS],
  toc: [
    { id: "java-vs-javascript", label: "Java vs JavaScript" },
    { id: "what-java-work-means", label: "What Java work means" },
    { id: "quick-comparison", label: "Quick comparison" },
    { id: "xorora", label: "1. Xorora" },
    { id: "codecentric", label: "2. Codecentric" },
    { id: "object-computing", label: "3. Object Computing (OCI)" },
    { id: "openvalue", label: "4. OpenValue" },
    { id: "instil", label: "5. Instil" },
    { id: "jdriven", label: "6. JDriven" },
    { id: "dreamix", label: "7. Dreamix" },
    { id: "kindgeek", label: "8. Kindgeek" },
    { id: "how-to-evaluate", label: "How to evaluate" },
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
  rate?: string;
  minProject?: string;
  teamSize?: string;
  niche: string;
  knownFor: string;
  snapshot?: string;
  paragraphs: ReactNode[];
  capabilities: string[];
  consideration: ReactNode;
  suitedFor: string;
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
    niche: "Full-stack Java/Spring, AI-integrated systems",
    knownFor:
      "Startups wanting Java delivery inside a broader AI-capable engineering team",
    snapshot: "/assets/blog/companies/xorora.png",
    href: ROUTES.javaWebDevelopment,
    hrefLabel: "Java web development services",
    paragraphs: [
      <>
        Xorora is a US-based{" "}
        <TextLink href={ROUTES.home}>AI development partner</TextLink> with an
        in-house team building enterprise Java and Spring-based systems,
        alongside .NET, Python, Node.js, and Laravel. Its{" "}
        <TextLink href={ROUTES.customAppDevelopment}>
          Java and custom application development
        </TextLink>{" "}
        work covers Spring Boot backends, REST APIs, database-driven enterprise
        applications, and{" "}
        <TextLink href={ROUTES.applicationModernization}>
          modernization
        </TextLink>{" "}
        of legacy Java systems that have outgrown their original architecture.
      </>,
      <>
        What sets Xorora apart from most names on this list is that Java sits
        inside a genuinely polyglot engineering practice rather than a
        single-language specialty. A growing share of Java projects now need an{" "}
        <TextLink href={ROUTES.mlDataScience}>
          AI or data layer
        </TextLink>{" "}
        somewhere in the stack, and having that capability under the same roof
        avoids the coordination overhead of a second vendor. Across its broader{" "}
        <TextLink href={ROUTES.ourWork}>delivery record</TextLink>, publicly
        cited results include a 3.5x median speed-up compared to building the
        same system in-house and 99.9% uptime across deployed systems.
      </>,
    ],
    capabilities: [
      "Java and Spring Boot backend development",
      "REST and GraphQL APIs",
      "Enterprise application development",
      "Legacy Java modernization and migration",
      "AI/ML integration alongside Java systems",
      "Cloud-native deployment",
    ],
    consideration: (
      <>
        Xorora doesn&apos;t have the multi-decade Java-specific portfolio that a
        firm like Object Computing or Codecentric has built. What it offers
        instead is an active in-house Java team combined with real AI and
        full-stack capability, useful if your roadmap includes anything beyond a
        traditional backend. If you need deep, framework-authorship-level Java
        pedigree specifically, weigh that against the other names here.
      </>
    ),
    suitedFor:
      "Startups wanting Java/Spring Boot delivery from a team that also handles AI, data, and full-stack work under one roof",
  },
  {
    id: "codecentric",
    rank: 2,
    name: "Codecentric",
    location: "Germany",
    founded: "2005",
    teamSize: "500+",
    niche: "Spring ecosystem, cloud-native transformation",
    knownFor:
      "Funded startups needing Spring expertise and hands-on build capacity",
    paragraphs: [
      "Codecentric is a well-established consultancy with deep roots in the Spring framework community, known for Spring Boot Admin, a widely used tool for monitoring Spring Boot applications in production. Beyond new builds, the firm helps teams modernize legacy Java EE, Jakarta EE, and older frameworks toward the current Spring stack.",
    ],
    capabilities: [
      "Spring ecosystem consulting and delivery",
      "Cloud-native transformation",
      "DevOps and agile delivery",
      "Legacy Java EE/J2EE modernization",
    ],
    consideration:
      "Codecentric is larger and more premium-priced than a boutique shop, better suited to funded startups that need both hands-on build capacity and senior architectural guidance, not the lowest possible hourly rate.",
    suitedFor:
      "Products fully committed to the Spring ecosystem needing cloud-native transformation support",
  },
  {
    id: "object-computing",
    rank: 3,
    name: "Object Computing (OCI)",
    location: "USA",
    founded: "1993",
    teamSize: "50–250",
    niche: "Micronaut, lightweight microservices, IoT",
    knownFor: "Cold-start-sensitive microservices and framework-level engineering",
    paragraphs: [
      "OCI is the creator of Micronaut, a JVM framework purpose-built for low-memory, fast-startup microservices and serverless applications. That pedigree makes the firm a strong fit for products where cold-start speed and small deployment footprints directly affect cloud costs.",
    ],
    capabilities: [
      "Micronaut and Grails framework expertise",
      "Lightweight microservices architecture",
      "IoT development",
      "Enterprise Java consulting and training",
    ],
    consideration:
      "OCI's rates run higher than Eastern European alternatives, so it's best suited to teams that specifically value framework-authorship-level expertise or OCI's enterprise software legacy, not budget-driven decisions.",
    suitedFor:
      "Startups whose cloud economics depend on fast-booting, low-footprint microservices",
  },
  {
    id: "openvalue",
    rank: 4,
    name: "OpenValue",
    location: "Netherlands",
    founded: "2017",
    teamSize: "200+",
    niche: "Spring Boot 3, Virtual Threads, AI workflows",
    knownFor: "High-stakes architecture reviews and greenfield builds on modern Java",
    paragraphs: [
      "OpenValue is a boutique JVM consultancy built around top-tier Java expertise, with a focus squarely on the modern stack: Spring Boot 3, Virtual Threads, and AI-accelerated development workflows. The firm runs training and community events, reflecting a team of engineers who publish and speak regularly in the Java ecosystem.",
    ],
    capabilities: [
      "Spring Boot 3 and Virtual Threads",
      "AI-integrated Java development workflows",
      "Architecture reviews and greenfield builds",
      "Team mentoring toward senior-level practices",
    ],
    consideration:
      "OpenValue is deliberately small, which suits founders who can plan engagements in advance and already have developers in place, rather than needing a large, fast-scaling delivery team.",
    suitedFor:
      "High-stakes architecture decisions and greenfield builds on cutting-edge Java",
  },
  {
    id: "instil",
    rank: 5,
    name: "Instil",
    location: "UK",
    founded: "2005",
    teamSize: "50–249",
    niche: "Bespoke engineering + Java/Kotlin training",
    knownFor: "Teams that need both a build partner and in-house upskilling",
    paragraphs: [
      "Instil pairs bespoke Java and Kotlin development with instructor-led training, and is JetBrains' official partner for Kotlin certification. The firm works across FinTech, medical, audio, and security domains, and is particularly known for rescuing troubled projects and raising an in-house team's engineering standards.",
    ],
    capabilities: [
      "Java and Kotlin development",
      "Spring Boot delivery",
      "Test-driven development and testing discipline",
      "Instructor-led team training",
    ],
    consideration:
      "Instil is the right fit when the challenge is both building something technically hard and levelling up your own team's practices, not just outsourcing delivery.",
    suitedFor:
      "Teams that want a build partner and in-house engineering training in the same engagement",
  },
  {
    id: "jdriven",
    rank: 6,
    name: "JDriven",
    location: "Netherlands",
    founded: "2011",
    teamSize: "50–100",
    niche: "Kotlin on JVM, Spring Boot, graph data",
    knownFor: "Products already committed to Kotlin and connected-data architecture",
    paragraphs: [
      "JDriven focuses on the contemporary JVM stack: Kotlin, Spring Boot microservices, and Neo4j graph databases, delivered cloud-native. The firm's graph-database expertise is a genuinely rare edge for products built on deeply connected data.",
    ],
    capabilities: [
      "Kotlin on the JVM",
      "Spring Boot microservices",
      "Neo4j and graph data architecture",
      "Cloud-native delivery",
    ],
    consideration:
      "Pricing runs mid-to-premium for a European boutique, suited to teams that specifically want senior craftsmanship and have already standardized on Kotlin.",
    suitedFor:
      "Products built on connected, graph-structured data that have chosen Kotlin",
  },
  {
    id: "dreamix",
    rank: 7,
    name: "Dreamix",
    location: "Bulgaria",
    founded: "2007",
    teamSize: "250–500",
    niche: "Full-cycle Spring Boot microservices",
    knownFor: "Re-architecting an MVP into production-grade microservices",
    paragraphs: [
      "Dreamix centers its stack on Java, Spring Boot, and Hibernate, with delivery across aviation, healthcare, FinTech, and RegTech, including a track record of Spring Boot systems processing millions of daily transactions. The firm works in visible, iterative sprints rather than a single end-of-project handoff.",
    ],
    capabilities: [
      "Full-cycle Spring Boot microservices",
      "Hibernate and database architecture",
      "MVP re-architecting into production-grade systems",
      "Business analysis and digital transformation",
    ],
    consideration:
      "A dependable, cost-effective option for turning an early build into a scalable product, without the premium pricing of the architecture-first consultancies higher on this list.",
    suitedFor:
      "Startups needing a scrappy MVP re-architected into scalable, production-grade microservices",
  },
  {
    id: "kindgeek",
    rank: 8,
    name: "Kindgeek",
    location: "Ukraine",
    founded: "2013",
    teamSize: "50–249",
    niche: "Spring Boot for FinTech/healthcare, HIPAA-aware",
    knownFor: "Regulated-industry builds on a startup-friendly budget",
    paragraphs: [
      "Kindgeek specializes in Spring Boot delivery for FinTech, healthcare, and other regulated environments, with HIPAA-aware delivery processes and real financial-domain experience. The firm handles both full product development and staff augmentation.",
    ],
    capabilities: [
      "Spring Boot for regulated industries",
      "HIPAA-aware delivery",
      "Full-cycle product development",
      "Staff augmentation for scaling an existing team",
    ],
    consideration:
      "Kindgeek's combination of compliance awareness and competitive rates is a genuinely rare pairing, worth strong consideration for any regulated-industry startup on a tighter budget.",
    suitedFor:
      "FinTech or healthcare startups needing compliance built in without elite-consultancy pricing",
  },
];

const JAVA_WORK_BUCKETS = [
  "Building a Spring Boot backend or REST API",
  "Re-architecting an early build into scalable microservices",
  "Cloud migration and DevOps for an existing JVM system",
  "Building compliant software in regulated verticals (FinTech, healthcare, security)",
];

const EVALUATION = [
  {
    title: "Check for modern Java, not legacy habits",
    body: "Ask specifically about production experience with Java 17 or 21, not just \"years of Java experience\" as a vague headline.",
  },
  {
    title: "Confirm real framework depth",
    body: "Spring Boot 3 is the industry standard; lightweight alternatives like Micronaut or Quarkus matter for cold-start-sensitive workloads. A team should be able to explain the trade-off, not just name-drop both.",
  },
  {
    title: "Ask about API design discipline",
    body: "Clean, versioned REST or GraphQL APIs with proper error handling matter more over the life of a product than they do in a first demo.",
  },
  {
    title: "Understand their approach to concurrency",
    body: "Virtual Threads (Project Loom) have changed how modern Java handles high-concurrency workloads. A team without a clear answer here likely hasn't kept current.",
  },
  {
    title: "Ask how AI fits in, if it's relevant to your roadmap",
    body: (
      <>
        A growing share of Java projects need an AI or data layer somewhere in
        the system. A{" "}
        <TextLink href={ROUTES.mlDataScience}>
          team that handles both
        </TextLink>{" "}
        avoids a second vendor relationship.
      </>
    ),
  },
  {
    title: "Get a straight answer on deployment",
    body: "Docker, CI/CD, and cloud deployment (AWS, GCP, Azure) should be standard practice, not an extra line item.",
  },
];

const QUESTIONS = [
  "Can you show a production Java application currently handling real traffic?",
  "What's your experience with Spring Boot 3 versus lightweight frameworks like Micronaut or Quarkus?",
  "How do you approach API versioning and error handling?",
  "What's your default testing strategy, and do you practice test-driven development?",
  "How do you handle database and ORM efficiency (raw SQL versus Hibernate/JPA)?",
  "Do you have in-house experience integrating AI or ML features into a Java application?",
  "Who owns the source code and documentation after delivery?",
  "Who will actually be writing the code on my project, and what's their seniority?",
];

const VERDICT = [
  {
    fit: "For Java development from a team that also brings AI, data, and full-stack capability to the same engagement",
    company: "Xorora",
  },
  {
    fit: "For Spring ecosystem depth and cloud-native transformation",
    company: "Codecentric",
  },
  {
    fit: "For lightweight, fast-booting microservices",
    company: "Object Computing (OCI)",
  },
  {
    fit: "For cutting-edge architecture on modern Java",
    company: "OpenValue",
  },
  {
    fit: "For a build partner that also trains your in-house team",
    company: "Instil",
  },
  {
    fit: "For Kotlin on the JVM and graph-structured data",
    company: "JDriven",
  },
  {
    fit: "For re-architecting an MVP into production-grade microservices",
    company: "Dreamix",
  },
  {
    fit: "For regulated-industry builds on a startup budget",
    company: "Kindgeek",
  },
];

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";

export function BestJavaStartupsArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-5")}>
        Java in 2026 isn&apos;t the language most people picture. The mental
        image is still Java 8: verbose XML configuration, boilerplate getters
        and setters, and enterprise systems that feel a decade behind. Modern
        Java, records, sealed interfaces, pattern matching, virtual threads,
        reads a lot closer to Kotlin or C# than to Java circa 2014.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        It&apos;s also not the default choice for every product. An e-commerce
        storefront or a fast-moving consumer app will usually ship faster on a
        JavaScript or Python stack. But in FinTech, logistics, security, and
        other domains where correctness, predictable latency, and long-term
        maintainability matter more than speed of first launch, the JVM remains
        a serious default, and demand for a capable{" "}
        <strong className="font-semibold text-fg1">java development company</strong>{" "}
        hasn&apos;t slowed down.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        Java still sits inside the top tier of the TIOBE Index and remains one
        of the most in-demand backend languages in the job market. This guide
        profiles 8 companies worth evaluating if you&apos;re comparing a{" "}
        <strong className="font-semibold text-fg1">
          java software development company
        </strong>
        , a{" "}
        <strong className="font-semibold text-fg1">
          custom java development company
        </strong>{" "}
        for a specific build, or a{" "}
        <strong className="font-semibold text-fg1">
          java development company in usa
        </strong>{" "}
        for time-zone-friendly delivery.
      </p>

      <h2 id="java-vs-javascript" className={h2Class}>
        Quick clarification: Java vs JavaScript
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        Before the list, one thing worth addressing directly, because it trips up
        more buyers than you&apos;d expect: Java and JavaScript are different
        languages, related in name only. Java is a statically typed, compiled
        language running on the JVM, commonly used for backend systems,
        enterprise software, and Android. JavaScript is the language of the web
        browser, used heavily on the frontend and, via Node.js, on the backend
        too.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        If you&apos;re specifically looking for a{" "}
        <strong className="font-semibold text-fg1">
          javascript development company
        </strong>{" "}
        or a{" "}
        <strong className="font-semibold text-fg1">
          javascript web application development company
        </strong>{" "}
        for browser-based or Node.js work, or a{" "}
        <strong className="font-semibold text-fg1">
          javascript software development company
        </strong>{" "}
        more broadly, that&apos;s a different search than what this article
        covers. Every company profiled below builds with Java (JVM-based backend
        systems, Spring Boot, enterprise applications), not JavaScript. Worth a
        30-second gut-check before you request a proposal, since the naming
        overlap causes real confusion in RFPs.
      </p>

      <h2 id="what-java-work-means" className={h2Class}>
        What &quot;Java work&quot; actually means for a startup
      </h2>
      <p className={cn(bodyClass, "mb-4")}>
        For most modern companies, Java engagement usually falls into one of a
        few buckets:
      </p>
      <ul className="mb-5 list-disc space-y-2 pl-5 font-sans text-[16.5px] text-fg2 leading-[1.75]">
        {JAVA_WORK_BUCKETS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className={cn(bodyClass, "mb-10")}>
        And &quot;Java development company&quot; itself covers very different
        types of providers: large enterprise vendors with unlimited budgets,
        architecture-first consultancies for high-stakes system design, boutique
        senior teams priced at a premium, and full-cycle product shops that
        design, build, and ship end-to-end at more accessible rates. Knowing
        which type you actually need matters more than any single ranking.
      </p>

      <h2 id="quick-comparison" className={h2Class}>
        Quick comparison
      </h2>
      <div className="mb-10 overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              {[
                "Rank",
                "Company",
                "Headquarters",
                "Founded",
                "Niche",
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
                  {company.niche}
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

      <h2 id="how-to-evaluate" className={h2Class}>
        How to evaluate a Java development services company
      </h2>
      <div className="mb-10 flex flex-col gap-4">
        {EVALUATION.map((item) => (
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
        Questions to ask before hiring a Java development company
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
        Java in 2026 remains a strong, deliberate choice for startups building
        in regulated, high-correctness, or long-lifecycle domains, and the right
        partner depends far more on your specific niche than on a single
        ranking.
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
      <p className={cn(bodyClass, "mb-5")}>
        Every company on this list can write solid Java code. What actually
        separates a good hire from an expensive mismatch is whether their
        specific niche, architecture-first consulting, full-cycle delivery,
        compliance depth, or AI-integrated engineering, matches what your
        project needs next, not just what a homepage claims. If you&apos;re
        scoping a Java project and want a straight answer on fit, Xorora&apos;s{" "}
        <TextLink href={ROUTES.engineering}>engineering team</TextLink> can walk
        through your requirements and provide a written estimate.
      </p>
      <p className={bodyClass}>
        Whether you&apos;re calling it a{" "}
        <strong className="font-semibold text-fg1">
          java application development company
        </strong>
        , a{" "}
        <strong className="font-semibold text-fg1">
          java web development company
        </strong>
        , a{" "}
        <strong className="font-semibold text-fg1">
          java development software company
        </strong>
        , a{" "}
        <strong className="font-semibold text-fg1">
          java application development services company
        </strong>
        , or a{" "}
        <strong className="font-semibold text-fg1">
          java software outsourcing company
        </strong>
        , the terminology varies more than the underlying question: does this
        team have real, current Java depth and a delivery model that fits your
        project? Use the comparison and questions above to answer that directly,
        rather than relying on any single label.
      </p>

      <h2 id="faq" className={h2Class}>
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-4">
        {BEST_JAVA_STARTUPS_FAQS.map((faq, index) => (
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
        {company.minProject ? (
          <MetaItem label="Minimum project size" value={company.minProject} />
        ) : null}
        {company.rate ? (
          <MetaItem label="Average hourly rate" value={company.rate} />
        ) : null}
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
        Java-related capabilities
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
        {company.rate ? `Public rate: ${company.rate}. ` : ""}
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
