import Link from "next/link";
import type { ReactNode } from "react";
import { GetQuoteButton } from "@/components/blog/post";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const CUSTOM_AI_SMB_GUIDE_SLUG =
  "complete-guide-custom-ai-services-smbs-2026";

export const CUSTOM_AI_SMB_GUIDE_FAQS = [
  {
    q: "What is included in custom AI development services?",
    a: "A full engagement typically includes discovery and workflow analysis, system architecture and design, the AI/automation build itself, integration with existing software (CRM, accounting, e-commerce, or other business systems), testing, deployment, and a plan for post-launch monitoring and iteration. The best partners treat the AI layer and the surrounding software integration as one connected deliverable, not two separate projects.",
  },
  {
    q: "Is custom AI development worth it for a small business, or should I use off-the-shelf tools?",
    a: "It depends on how specific your workflow is and how much first-party data your business already has. A standard process well served by an existing tool's built-in AI features usually doesn't need a custom build. Custom development earns its cost when your workflow is specific enough that no off-the-shelf product fits well, or when you've outgrown what generic tools can do.",
  },
  {
    q: "How much does custom AI development cost for an SMB?",
    a: "Cost depends on scope: a single, well-defined automation or integration costs meaningfully less than a multi-system build spanning several business processes. Get a written estimate against your specific workflows and systems rather than a generic price range, since integration work often accounts for a significant share of total project cost.",
  },
  {
    q: "How long does a typical custom AI project take?",
    a: "A single, well-scoped automation or integration typically takes several weeks to a couple of months. Larger builds spanning multiple systems take longer. Be cautious of quotes promising a complex custom system in an unrealistically short timeframe.",
  },
  {
    q: "Can custom AI help with healthcare operations optimization specifically?",
    a: "Yes. Common applications include scheduling and no-show prediction, insurance eligibility verification, documentation support, and compliance monitoring that turns regulatory changes into actionable alerts. Because the margin for error is higher in healthcare, production-grade engineering discipline matters more than in lower-stakes categories.",
  },
  {
    q: "What's the difference between business workflow automation and a full custom AI system?",
    a: "Workflow automation typically means replacing manual, repetitive steps with automated ones — often the fastest, most measurable starting point. A full custom AI system usually adds a decision-making or predictive layer on top, using automated, connected data to actually recommend or trigger the next action — closer to genuine data-driven decision making than task automation alone.",
  },
  {
    q: "Is Xorora a good choice for custom AI development services?",
    a: "Xorora builds workflow automation, software integration, and AI agent systems together for growth-focused SMBs, rather than treating each as a separate project. It's a strong fit for businesses that have outgrown generic tools and need a system built specifically around their own data and processes. Projects start at $10,000, with pricing quoted directly against scope.",
  },
] as const;

export const CUSTOM_AI_SMB_GUIDE_META: BlogArticleMeta = {
  slug: CUSTOM_AI_SMB_GUIDE_SLUG,
  seoTitle: "The Complete Guide to Custom AI Services for SMBs (2026)",
  seoDescription:
    "A practical guide to custom AI development services for SMBs, covering workflow automation, software integration, evaluation criteria, and measurable outcomes.",
  keywords: [
    "custom AI development services",
    "AI software development for SMBs",
    "business workflow automation",
    "AI business growth solutions",
    "software integration",
    "healthcare operations optimization",
    "data-driven decision making",
  ],
  aiSummary:
    "This 2026 buyer guide explains custom AI development services for SMBs: what custom AI actually means, where workflow automation, software integration, and data-driven decision making pay off, how to evaluate a partner, what a realistic engagement looks like, and how Xorora approaches production-grade builds for growth-focused small and mid-sized businesses.",
  companies: ["Xorora"],
  faqs: [...CUSTOM_AI_SMB_GUIDE_FAQS],
  toc: [
    { id: "what-custom-ai-means", label: "What custom AI means" },
    { id: "where-ai-pays-off", label: "Where AI pays off" },
    { id: "industry-applications", label: "Industry applications" },
    { id: "how-to-evaluate", label: "How to evaluate a partner" },
    { id: "realistic-engagement", label: "What an engagement looks like" },
    { id: "xorora", label: "Custom AI at Xorora" },
    { id: "faq", label: "FAQ" },
  ],
};

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

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";
const h3Class =
  "mt-8 mb-3 font-sans font-semibold text-[clamp(18px,2vw,22px)] text-fg1";

const VALUE_AREAS = [
  {
    title: "Business workflow automation",
    body: (
      <>
        This is the most common entry point, and usually the fastest to show
        measurable return.{" "}
        <strong className="font-semibold text-fg1">
          Business workflow automation
        </strong>{" "}
        replaces the manual, repetitive steps that quietly consume hours every
        week: reconciling data between two systems, manually triaging incoming
        support requests, generating reports that currently require someone to
        open five different tools and assemble the numbers by hand. The value
        isn&apos;t automation for its own sake — it&apos;s freeing a person
        who&apos;s currently doing rote work to do something that actually
        requires judgment. A well-scoped automation project typically pays for
        itself in staff time within the first several months, not years.
      </>
    ),
  },
  {
    title: "Software integration",
    body: (
      <>
        Most SMBs run on a patchwork of tools — a CRM, an accounting platform,
        an e-commerce system, a support desk — each holding a piece of the
        picture with no clean way to see them together.{" "}
        <strong className="font-semibold text-fg1">Software integration</strong>{" "}
        work connects these systems so data flows automatically instead of
        requiring manual export-and-reconcile work, and it&apos;s often the
        unglamorous foundation that makes every other AI initiative actually
        work. An AI agent that&apos;s supposed to make smart decisions but only
        has access to half your business data will make confidently wrong
        recommendations.
      </>
    ),
  },
  {
    title: "Data-driven decision making",
    body: (
      <>
        Once workflows are automated and systems are connected, the next layer
        is turning that unified data into something a founder or operations lead
        can actually act on: forecasting, anomaly detection, and recommendations
        — not just another dashboard. Genuine{" "}
        <strong className="font-semibold text-fg1">
          data-driven decision making
        </strong>{" "}
        means the system tells you what&apos;s happening and what to do about
        it, not just what happened last month in a report nobody has time to
        fully read.
      </>
    ),
  },
];

const INDUSTRIES = [
  {
    title: "Healthcare operations optimization",
    body: "Small and mid-sized healthcare practices and healthcare-adjacent businesses face some of the highest-value automation opportunities anywhere: scheduling and no-show prediction, insurance eligibility verification, clinical documentation support, and compliance monitoring that turns regulatory changes into actionable alerts instead of a manual review process. The margin for error is also higher here, which makes production-grade engineering (not a quick prototype) genuinely non-negotiable.",
  },
  {
    title: "E-commerce and retail",
    body: "Inventory forecasting, dynamic pricing, and customer service automation that actually resolves issues rather than just routing tickets.",
  },
  {
    title: "Professional services",
    body: "Automated intake and qualification, document generation, and billing reconciliation across client engagements.",
  },
  {
    title: "Logistics and field operations",
    body: "Route optimization, predictive maintenance alerts, and automated status updates that reduce manual check-ins.",
  },
];

const EVAL_POINTS = [
  {
    title: "Ask what changes between a demo and a production system",
    body: "A working prototype and something reliable enough to run your actual operations are different deliverables. A partner should be able to explain concretely what production-hardening involves, not wave the question away.",
  },
  {
    title: "Check for real, referenceable production work",
    body: "Ask to see a system handling real business data at real volume, and ask what happened when something broke — not just a features list.",
  },
  {
    title: "Confirm they can handle both the AI layer and the integration work",
    body: "An AI recommendation engine that can't actually see your CRM or accounting data isn't useful. Ask directly whether the team handles the surrounding software integration work or expects you to have that solved already.",
  },
  {
    title: "Get a clear, scoped estimate — not a vague range",
    body: 'Cost should be tied to your specific workflows and systems, not a generic "AI project" price. If a vendor can\'t scope your project without understanding your actual data and process, that\'s a signal worth noting.',
  },
  {
    title: "Ask how success gets measured",
    body: "A serious partner will want to define a measurable outcome (hours saved, error rate reduced, response time improved) before the project starts, not after.",
  },
  {
    title: "Clarify what happens after launch",
    body: "Systems need tuning as real usage reveals edge cases the initial build didn't anticipate. Ask whether ongoing iteration is part of the engagement or a separate, unstated cost.",
  },
];

const XORORA_POINTS: ReactNode[] = [
  "A $10,000 minimum project size keeps the door open for a single, well-scoped automation or integration — not only a full platform build",
  <>
    The team handles both the AI layer and the underlying{" "}
    <TextLink href={ROUTES.customAppDevelopment}>
      software integration
    </TextLink>{" "}
    work, so a recommendation engine or agent actually has access to your real
    business data
  </>,
  <>
    Teams that already have staff in place and just need extra capacity can use{" "}
    <TextLink href={ROUTES.staffAugmentation}>staff augmentation</TextLink>{" "}
    instead of a full project handoff
  </>,
  "Ongoing iteration is part of how engagements are structured, not an unstated extra cost discovered after launch",
];

export function CustomAiSmbGuideArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-5")}>
        Most SMB leaders don&apos;t actually need &quot;more AI.&quot; They need
        three or four specific, recurring problems solved: too much manual work
        in a process that hasn&apos;t scaled, data trapped in systems that
        don&apos;t talk to each other, and decisions being made on gut feel
        because nobody has time to pull a real report.{" "}
        <strong className="font-semibold text-fg1">
          Custom AI development services
        </strong>{" "}
        exist to solve exactly that class of problem — not to add a chatbot to
        your website because a competitor has one.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        This guide covers what custom AI actually means for a small or mid-sized
        business, where it delivers real value versus where an off-the-shelf
        tool is the smarter call, how to evaluate a development partner, and
        what a realistic engagement actually looks like from first conversation
        to measured outcome — the practical version of what{" "}
        <strong className="font-semibold text-fg1">
          AI business growth solutions
        </strong>{" "}
        usually means once the marketing language is stripped away.
      </p>

      <h2 id="what-custom-ai-means" className={h2Class}>
        What &quot;custom AI&quot; actually means for an SMB
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        Custom AI development means building software — an agent, an automation,
        a data pipeline — tailored specifically to your business&apos;s data,
        workflows, and systems, rather than configuring a generic SaaS tool
        built for a broad market and hoping it fits.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        The distinction matters more than it sounds. A generic AI tool is
        trained and designed around population-level patterns: what works for
        the average business in your category. A custom system is built around
        your specific customer behavior, your specific operational bottlenecks,
        and your specific existing software stack. For a business with
        meaningful first-party data and a genuinely specific workflow, that
        difference in fit compounds over time in a way a subscription tool
        can&apos;t match.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        This doesn&apos;t mean every SMB needs custom AI. A five-person business
        with a standard sales process is often well served by an existing
        CRM&apos;s built-in AI features.{" "}
        <strong className="font-semibold text-fg1">
          AI software development for SMBs
        </strong>{" "}
        earns its cost specifically when the business has outgrown generic
        tools, or when the workflow is specific enough that no off-the-shelf
        product actually fits it well.
      </p>

      <h2 id="where-ai-pays-off" className={h2Class}>
        Where custom AI delivers real value for SMBs
      </h2>
      <div className="mb-6 flex flex-col gap-4">
        {VALUE_AREAS.map((item) => (
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
      <p className={cn(bodyClass, "mb-10")}>
        Xorora typically starts SMB engagements at the workflow and integration
        layer — through{" "}
        <TextLink href={ROUTES.workflowAutomation}>
          workflow automation
        </TextLink>{" "}
        and{" "}
        <TextLink href={ROUTES.aiAgentDevelopment}>
          AI agent development
        </TextLink>{" "}
        — before layering predictive or recommendation logic on top of data that
        actually flows cleanly.
      </p>

      <h2 id="industry-applications" className={h2Class}>
        Industry-specific applications worth knowing
      </h2>
      <p className={cn(bodyClass, "mb-6")}>
        Custom AI&apos;s value shows up differently depending on the vertical. A
        few examples worth understanding, even if your business sits in a
        different industry, since the underlying pattern usually transfers:
      </p>
      <div className="mb-6 flex flex-col gap-4">
        {INDUSTRIES.map((item) => (
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
      <p className={cn(bodyClass, "mb-10")}>
        The common thread across all of these: the highest-value custom AI
        projects sit at the intersection of a genuinely painful manual process
        and data the business already has but isn&apos;t using well.
      </p>

      <h2 id="how-to-evaluate" className={h2Class}>
        How to evaluate a custom AI development partner
      </h2>
      <div className="mb-10 flex flex-col gap-4">
        {EVAL_POINTS.map((item) => (
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

      <h2 id="realistic-engagement" className={h2Class}>
        What a realistic engagement looks like
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        A well-run custom AI engagement for an SMB typically moves through a few
        clear phases: a discovery conversation to understand your actual
        workflows and data (not a generic sales pitch), a scoped proposal tied
        to a specific, measurable outcome, a build phase with regular
        checkpoints rather than a black-box handoff, and a launch that includes
        monitoring and a plan for iteration — not just a one-time delivery.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        For a single, well-defined automation or integration, a realistic
        timeline runs from several weeks to a couple of months. Larger,
        multi-system builds naturally take longer. Be wary of either extreme: a
        quote that promises a complex custom system in a week, or a proposal so
        vague it can&apos;t commit to a timeline at all. If you&apos;re still
        clarifying whether custom is the right path, a{" "}
        <TextLink href={ROUTES.aiConsultation}>
          short AI consultation
        </TextLink>{" "}
        or{" "}
        <TextLink href={ROUTES.mvpPocDevelopment}>MVP / POC</TextLink> is often
        the fastest way to de-risk the decision before a full build.
      </p>

      <h2 id="xorora" className={h2Class}>
        Custom AI development at Xorora
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        Xorora is a US-based AI development partner offering{" "}
        <strong className="font-semibold text-fg1">
          custom AI development services
        </strong>{" "}
        built specifically for growth-focused SMBs that have outgrown generic
        tools. Its work spans{" "}
        <TextLink href={ROUTES.workflowAutomation}>
          workflow automation
        </TextLink>
        ,{" "}
        <TextLink href={ROUTES.customAppDevelopment}>
          custom application development
        </TextLink>
        , and{" "}
        <TextLink href={ROUTES.aiAgentDevelopment}>
          AI agent development
        </TextLink>
        , built as one connected system rather than separate, disconnected
        deliverables.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        Relevant production work includes a{" "}
        <TextLink href={ROUTES.caseStudy("real-time-compliance-intelligence")}>
          real-time compliance intelligence platform
        </TextLink>{" "}
        that turns regulatory changes into live, actionable alerts — directly
        relevant to businesses in healthcare or other compliance-heavy
        operations — and{" "}
        <TextLink href={ROUTES.caseStudy("real-time-saas-event-monitoring")}>
          real-time event monitoring infrastructure
        </TextLink>{" "}
        built for instant, full-context alerting rather than delayed reporting.
        Publicly cited results across Xorora&apos;s{" "}
        <TextLink href={ROUTES.engineering}>engineering</TextLink> work include
        a 3.5x median speed-up compared to building the same system in-house and
        99.9% uptime across deployed systems.
      </p>

      <h3 className={h3Class}>What this looks like in practice for an SMB</h3>
      <ul className="mb-6 list-disc space-y-2 pl-5 font-sans text-[15.5px] text-fg2 leading-relaxed">
        {XORORA_POINTS.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className={cn(bodyClass, "mb-6")}>
        If you&apos;re trying to figure out whether your business&apos;s
        specific bottleneck is actually worth a custom build, or whether an
        off-the-shelf tool would genuinely serve you just as well,{" "}
        <TextLink href={ROUTES.contact}>get in touch</TextLink> for a scoping
        conversation. That honest assessment costs you nothing — and it&apos;s
        usually the fastest way to know which path actually makes sense.
      </p>
      <GetQuoteButton company="Xorora" />

      <h2 id="faq" className={h2Class}>
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-4">
        {CUSTOM_AI_SMB_GUIDE_FAQS.map((faq, index) => (
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
