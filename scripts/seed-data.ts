import { withUniqueIndustryImageList } from "@/lib/case-studies/apply-industry-images";
import { seedIndustryCaseStudies } from "@/lib/case-studies/industry-case-studies-data";
import { seedMarketingCaseStudies } from "@/lib/case-studies/marketing-case-studies-data";
import type {
  CaseStudyCategory,
  CaseStudySectionContent,
  CaseStudySectionType,
} from "@/lib/case-studies/types";

export interface SeedMetric {
  value: string;
  label: string;
  note?: string;
}

export interface SeedSection {
  type: CaseStudySectionType;
  content: CaseStudySectionContent;
}

export interface SeedCaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  category: CaseStudyCategory;
  lead: string;
  heroImage: string;
  headerBg: string;
  heroUrl: string;
  featured: boolean;
  sortOrder: number;
  metaTitle: string;
  metaDescription: string;
  metrics: SeedMetric[];
  sections: SeedSection[];
}

export const seedCaseStudies: SeedCaseStudy[] = [
  {
    slug: "unified-ai-voice-operations",
    title: "From fragmented tools to unified AI voice operations.",
    subtitle: "AI Voice Automation · B2B SaaS",
    tags: ["AI Voice Automation", "B2B SaaS"],
    category: "development",
    lead: "A B2B AI voice company had powerful voice-agent technology — but no platform to deploy, monitor, and scale it. Xorora engineered four purpose-built portals on one shared backend, turning scattered operations into a commercially-ready product.",
    heroImage: "/assets/mocks/portal-business.webp",
    headerBg: "/assets/header-bg.jpg",
    heroUrl: "app.xorora.ai/dashboard",
    featured: false,
    sortOrder: 1,
    metaTitle: "Unified AI Voice Operations Case Study | Xorora",
    metaDescription:
      "How Xorora engineered four role-based portals on one shared backend — turning scattered AI voice operations into a commercially-ready product.",
    metrics: [
      {
        value: "4",
        label: "Role-specific portals built and deployed",
      },
      {
        value: "7+",
        label: "External service integrations delivered",
      },
      {
        value: "16mo",
        label: "Concept to fully operational platform",
      },
      {
        value: "0→1",
        label: "Full platform built from the ground up",
      },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "The big picture",
          paragraphs: [
            "A B2B AI voice automation company had built powerful voice-agent technology — but lacked the operational platform to deploy, monitor, and scale it commercially. Four distinct user groups each needed purpose-built tools, without sacrificing a unified backbone.",
            "Xorora engineered a modular multi-panel SaaS ecosystem — four portals on a single shared backend — transforming scattered operations into a fully unified AI voice management platform, commercially ready from day one.",
          ],
          chips:
            "User groups served: Business operators · Sales teams · Developers · Testing operations",
          meta: [
            { label: "Engagement", value: "16-month build" },
            { label: "Team", value: "4 specialists" },
            { label: "Architecture", value: "Multi-portal SaaS" },
            { label: "Delivery model", value: "0 → 1, ground-up" },
          ],
          image: {
            src: "/assets/mocks/portal-business.webp",
            alt: "Business operations portal",
            url: "app.xorora.ai/business",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "Challenge & Solution",
          title: "Where it broke, and how we fixed it",
          subtitle:
            "The AI voice agents were ready. The infrastructure to manage them wasn't. Xorora rebuilt the operational layer from the ground up.",
          pairs: [
            {
              challenge:
                "No centralized way to deploy and monitor AI voice agents at scale — business, sales, and developer teams worked in silos with no shared workflows.",
              solution:
                "A role-first architecture: four purpose-built portals — Business, Sales, Developer, Testing — sharing one backend API, one design system, and standardized core flows.",
            },
            {
              challenge:
                "Subscription and billing management was scattered across separate systems, with no unified commercial backbone.",
              solution:
                "A single billing layer powered by Stripe, standardized across every portal — one operational backbone for all commercial activity.",
            },
            {
              challenge:
                "No standardized role-based authentication or access control across business, sales, and engineering teams.",
              solution:
                "OTP-based authentication and role-based access control deployed uniformly across all four portals.",
            },
            {
              challenge:
                "Bilingual UX and legal-compliance requirements were unmet, and external telephony, payment, and geolocation providers were unintegrated.",
              solution:
                "Bilingual UX and compliance built into the architecture; Twilio, Vapi, Mapbox, IP Geolocation and Documso integrated end-to-end.",
            },
          ],
        },
      },
      {
        type: "architecture",
        content: {
          label: "How it was built",
          title: "One architecture, four front doors",
          subtitle:
            "Four independent React + TypeScript + Vite SPAs — one per role — each a standalone deployment sharing a single REST backend, billing layer, and support infrastructure.",
          items: [
            {
              title: "Client (role-based SPAs)",
              icon: "layout-dashboard",
              body: "Business (operations & config), Sales (CRM & revenue), Developer (API & system control), Testing (QA & pre-deploy) — all React · TS · Vite.",
            },
            {
              title: "Unified REST API · shared backend",
              icon: "server",
              body: "Environment-configured endpoints, one backbone for all portals.",
            },
            {
              title: "Auth & Access",
              icon: "shield-check",
              body: "OTP flows, RBAC, per-portal scopes.",
            },
            {
              title: "State & Data",
              icon: "database",
              body: "Redux Toolkit, RTK Query, react-hook-form, Zod.",
            },
            {
              title: "Billing",
              icon: "credit-card",
              body: "Stripe subscriptions, unified across portals.",
            },
            {
              title: "External integrations",
              icon: "plug",
              body: "Twilio, Vapi, Mapbox, IP Geolocation, Documso, ImgBB.",
            },
          ],
        },
      },
      {
        type: "outcomes",
        content: {
          label: "Measurable Outcomes",
          title: "Measurable Outcomes",
          subtitle:
            "What started as a fragmented set of requirements became one of the most architecturally cohesive platforms Xorora has delivered — the operational backbone behind a live AI voice service.",
          bullets: [
            {
              title: "4 portals live",
              body: "Business, sales, developer, and testing portals fully operational and serving real users.",
            },
            {
              title: "Full platform delivery",
              body: "Concept to production in 16 months with a lean team of four.",
            },
            {
              title: "7+ integrations live",
              body: "Stripe, Twilio, Vapi, Mapbox, IP Geolocation, ImgBB and Documso, all in production.",
            },
            {
              title: "Unified billing",
              body: "Subscription and payment management standardized across every portal.",
            },
            {
              title: "Role-based auth deployed",
              body: "OTP flows and access controls live across all four portals.",
            },
            {
              title: "Compliance ready",
              body: "Bilingual UX and legal-compliance requirements built into the architecture.",
            },
          ],
        },
      },
      {
        type: "results",
        content: {
          label: "Results obtained",
          title: "Results obtained",
          subtitle:
            "By treating each user role as a first-class product decision — not an afterthought — Xorora gave this AI voice company the operational backbone it needed to scale commercially.",
          bullets: [
            {
              title: "Four portals, one architecture",
              body: "All run fully operational on a single shared backend, serving real users in production.",
            },
            {
              title: "A commercial engine, live",
              body: "From agent deployment to billing, call analytics to developer access, every commercial activity runs from one unified system.",
            },
            {
              title: "Built to scale from day one",
              body: "Role-based access, unified billing, and bilingual compliance are baked into the architecture, ready for enterprise clients.",
            },
          ],
          quote: "Four portals. One architecture. Zero fragmentation.",
        },
      },
    ],
  },
  {
    slug: "real-time-compliance-intelligence",
    title: "Turning regulatory chaos into real-time compliance intelligence.",
    subtitle: 'RegTech · AI Automation · FinTech — "Regula"',
    tags: ["RegTech", "AI Automation", "FinTech"],
    category: "development",
    lead: "Legacy RegTech left emerging markets behind. Xorora built an automation-first, AI-powered platform that monitors regulators continuously, scores business impact, and alerts compliance teams in under an hour.",
    heroImage: "/assets/regula/dashboard.webp",
    headerBg: "/assets/regula/header-bg.jpg",
    heroUrl: "app.regula.io/dashboard",
    featured: false,
    sortOrder: 2,
    metaTitle: "Real-Time Compliance Intelligence Platform | Xorora",
    metaDescription:
      "Case study: an automation-first RegTech platform delivering real-time compliance intelligence — continuous regulator monitoring with prioritized alerts in under an hour.",
    metrics: [
      {
        value: "70%",
        label: "Reduction in compliance workload (platform target)",
      },
      {
        value: "<1hr",
        label: "Regulatory change detection latency (platform target)",
      },
      {
        value: "48hr",
        label: "Time to first alert for new users (platform target)",
      },
      {
        value: "12mo",
        label: "Full SaaS platform built and launched (solo founder build)",
      },
    ],
    sections: [
      {
        type: "market_context",
        content: {
          label: "Market context",
          title: "Legacy RegTech left emerging markets behind",
          paragraphs: [
            "Existing tools were built for US and EU enterprise compliance teams — expensive, over-engineered, and with zero coverage of local regulators in Southeast Asia, Africa, Latin America, and the Middle East. FinTech SMBs in these markets were left monitoring regulatory websites manually, parsing PDFs, and tracking circulars by hand — all while facing the same compliance risk as their enterprise counterparts.",
          ],
          chips:
            "Markets: Southeast Asia · Africa · Latin America · Middle East",
        },
      },
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "The big picture",
          paragraphs: [
            "A RegTech founder identified a clear gap — thousands of FinTech SMBs operating in emerging markets were flying blind on regulatory compliance. Fast-changing rules, fragmented sources, and zero affordable tooling meant compliance teams were buried in manual work with no reliable way to stay ahead of regulatory change.",
            "Xorora built a real-time regulatory intelligence platform from the ground up — an automation-first, AI-powered SaaS that continuously monitors regulator websites, extracts changes, scores their business impact, and delivers prioritized alerts to compliance teams in under an hour. What legacy tools charged enterprise prices for, this platform delivers to SMBs at a fraction of the cost.",
          ],
          meta: [
            { label: "Domain", value: "RegTech · AI Automation" },
            { label: "Market", value: "Emerging-market FinTech" },
            { label: "Engagement", value: "12-month build" },
            {
              label: "Delivery model",
              value: "0 → Production SaaS (founder-led, single-engineer build)",
            },
          ],
          image: {
            src: "/assets/regula/dashboard.webp",
            alt: "Regula compliance dashboard",
            url: "regula.app/dashboard",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The challenge",
          title: "The challenge",
          lead: "Compliance teams in emerging markets were drowning — and the tools built to help them didn't exist.",
          paragraphs: [
            "Regulatory bodies publish updates across dozens of disconnected channels. For a small compliance team monitoring multiple jurisdictions, keeping up manually was a full-time job with a high margin for error. A missed circular could mean non-compliance. A delayed response could mean a fine.",
          ],
          bullets: [
            "Regulations published across fragmented sources — websites, PDFs, portals, circulars — with no unified feed.",
            "Manual monitoring created high compliance workload and significant non-compliance risk.",
            "Legacy RegTech tools priced for enterprise and built for US/EU markets — inaccessible to SMBs.",
            "No local coverage of emerging-market regulators in existing tools.",
            "No audit trail or change history for compliance documentation.",
            "Zero automated impact scoring — teams couldn't prioritize which changes mattered most.",
          ],
        },
      },
      {
        type: "solution",
        content: {
          label: "How Xorora solved it",
          title: "How Xorora solved it",
          paragraphs: [
            "An automation-first regulatory intelligence platform with one core promise — no compliance team should ever have to manually monitor a regulator website again.",
            "The platform runs a continuous end-to-end monitoring pipeline: compliance teams configure their regulatory targets, the system crawls those sources on a defined schedule, compares new content against version history, passes changes through AI analysis for summarization and impact scoring, and delivers prioritized alerts via email, Slack, Teams, or custom webhooks — all in under an hour from the moment a regulation changes.",
            "Beyond monitoring, the platform delivers a full compliance workspace — onboarding wizard for fast setup, audit-ready change history, billing and usage controls, and a pricing model built specifically for SMB budgets. Everything legacy RegTech tools charged enterprise rates for, at a fraction of the cost.",
          ],
          pipeline:
            "End-to-end monitoring pipeline (< 1 hour): 01 Target Setup (configure sources) → 02 Crawl (automated monitoring) → 03 Version Diff (change detection) → 04 AI Analysis (impact scoring) → 05 Alert (email / webhook).",
          image: {
            src: "/assets/regula/targets.webp",
            alt: "Regulatory targets monitoring",
            url: "regula.app/targets",
          },
        },
      },
      {
        type: "architecture",
        content: {
          label: "How it was built",
          title: "Architecture",
          subtitle:
            "A multi-tenant Next.js full-stack application built for reliability, scalability, and cost-efficient infrastructure — with durable, event-driven background workflows orchestrated by Inngest.",
          items: [
            {
              title: "Application (multi-tenant SaaS)",
              icon: "layout-dashboard",
              body: "Next.js 16 · React 19 full-stack app — NextAuth.js v5, Tailwind 4, shadcn/ui, deployed on Vercel. Compliance workspace, onboarding, billing.",
            },
            {
              title: "Orchestration",
              icon: "workflow",
              body: "Inngest workflow engine — crawl scheduling, version diffing, AI analysis, alert delivery, with no queue infrastructure to manage.",
            },
            {
              title: "Processing",
              icon: "sparkles",
              body: "Crawl4AI (extraction, anti-bot resilient) → Google Gemini (summarize, impact scoring).",
            },
            {
              title: "Data layer",
              icon: "database",
              body: "PostgreSQL (Drizzle ORM), Upstash Redis (caching), AWS S3 (document & content store).",
            },
            {
              title: "Multi-channel alert delivery",
              icon: "bell-ring",
              body: "Resend (email), Slack, MS Teams, and custom webhooks.",
            },
            {
              title: "Billing",
              icon: "credit-card",
              body: "Stripe — subscription billing & usage controls.",
            },
          ],
        },
      },
      {
        type: "outcomes",
        content: {
          label: "Measurable Outcomes",
          title: "Measurable Outcomes",
          subtitle:
            "An automation-first platform that doesn't just monitor regulations — it eliminates the manual compliance burden entirely, delivered end-to-end by a single founder-engineer in twelve months.",
          bullets: [
            {
              title: "Up to 70% less manual workload",
              body: "Teams monitor more regulators with less effort.",
            },
            {
              title: "Sub-1-hour detection",
              body: "Regulatory changes identified and alerted faster than any manual process.",
            },
            {
              title: "Under 48 hours to first alert",
              body: "The onboarding wizard gets new teams monitoring within the same day.",
            },
            {
              title: "Audit-ready change history",
              body: "Every change logged, versioned, and documented for compliance.",
            },
            {
              title: "SMB-accessible pricing",
              body: "Far lower cost than legacy enterprise RegTech, with equal or better coverage.",
            },
            {
              title: "Full SaaS in 12 months",
              body: "Concept to live multi-tenant platform by a founder-led single-engineer build.",
            },
          ],
        },
      },
      {
        type: "results",
        content: {
          label: "The result",
          title: "The result",
          subtitle:
            "Legacy RegTech solved compliance for the companies that could afford it. This platform solves it for everyone else — bringing enterprise-grade regulatory intelligence to the emerging-market FinTechs that needed it most.",
          bullets: [
            {
              title: "Built for the underserved",
              body: "Continuous AI-powered crawling and intelligent impact scoring in an affordable SaaS — enterprise-grade intelligence at SMB pricing.",
            },
            {
              title: "Eliminates the manual burden",
              body: "The platform removes the manual compliance work entirely. Teams respond to change instead of hunting for it.",
            },
            {
              title: "Production from day one",
              body: "A live multi-tenant SaaS — onboarding, audit history, billing, and multi-channel alerting — delivered end-to-end in twelve months.",
            },
          ],
          quote: "Monitor continuously. Score impact. Respond, don't hunt.",
        },
      },
    ],
  },
  {
    slug: "real-time-saas-event-monitoring",
    title:
      "Real-time SaaS event monitoring. From blind spots to instant visibility.",
    subtitle: 'SaaS Monitoring · Real-Time Analytics · API-First — "PingPanda"',
    tags: ["SaaS Monitoring", "Real-Time Analytics", "API-First"],
    category: "development",
    lead: "SaaS teams move fast — but without real-time visibility, they always react late. Xorora built a lightweight, API-first event notifier: ingest a typed event, get an instant Discord alert with full context. No dashboards to configure, no blind spots.",
    heroImage: "/assets/pingpanda/dashboard.webp",
    headerBg: "/assets/pingpanda/header-bg.jpg",
    heroUrl: "app.pingpanda.io/dashboard",
    featured: false,
    sortOrder: 3,
    metaTitle: "Real-Time SaaS Event Monitoring | Case Study | Xorora",
    metaDescription:
      "Case study: an API-first SaaS event monitoring platform delivering instant, real-time alerts with full context — from blind spots to total visibility.",
    metrics: [
      {
        value: "Real-time",
        label: "Event delivery from ingestion to notification (core promise)",
      },
      {
        value: "0 → 1",
        label: "Full API-first SaaS built from the ground up (greenfield)",
      },
      {
        value: "13mo",
        label: "Concept to production (founder-led)",
      },
      {
        value: "3",
        label: "Core integrations: Discord, Stripe, Clerk (wired end-to-end)",
      },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "The big picture",
          paragraphs: [
            "SaaS teams move fast — but without real-time visibility into what is happening in their product, they are always reacting late. A new signup, a failed payment, a surge in usage. By the time these events surface in a dashboard, the moment to respond has already passed.",
            "Xorora built a lightweight, API-first SaaS monitoring tool that solves this with a single core workflow: ingest typed events via API, map them to categories, and receive instant Discord notifications with full contextual detail. No complex setup, no enterprise pricing, no monitoring blind spots — just immediate operational awareness delivered where the team already works.",
          ],
          meta: [
            { label: "Domain", value: "SaaS · Real-time analytics" },
            { label: "Product", value: "API-first event notifier" },
            { label: "Engagement", value: "13-month build" },
            {
              label: "Delivery model",
              value: "0 → Production SaaS (founder-led build)",
            },
          ],
          image: {
            src: "/assets/pingpanda/dashboard.webp",
            alt: "PingPanda dashboard",
            url: "app.pingpanda.io/dashboard",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The challenge",
          title: "The challenge",
          lead: "SaaS teams were flying blind on the events that mattered most.",
          paragraphs: [
            "Critical product and revenue events — new signups, subscription upgrades, payment failures, incident spikes — were buried in logs, surfaced late through manual dashboard checks, or never tracked at all. The time between an event happening and a team member knowing about it was simply too long.",
          ],
          bullets: [
            "No real-time visibility into critical product and revenue events.",
            "Teams relying on manual dashboard checks that were slow, inconsistent and unreliable.",
            "No structured event modeling — every team tracked events differently.",
            "Existing monitoring tools were either too complex or too expensive for lean SaaS teams.",
            "No per-plan quota enforcement or usage controls for multi-tier SaaS operations.",
            "Delayed awareness meant delayed decisions — incidents and opportunities handled too late.",
          ],
        },
      },
      {
        type: "solution",
        content: {
          label: "How Xorora solved it",
          title: "How Xorora solved it",
          paragraphs: [
            "An API-first SaaS event notifier with a deliberately simple workflow — send an event, get an alert. No dashboards to configure, no monitoring infrastructure to manage.",
            "Teams integrate via a single API endpoint, define their event categories, and every tracked event triggers an instant, richly formatted Discord notification with full contextual fields. The platform handles category-based event modeling with strict Zod validation, secure API-key ingestion, per-plan monthly quota enforcement, and a clean dashboard for delivery-status tracking and analytics.",
          ],
          pipeline:
            "Pipeline (send an event · get an alert · real-time): 01 Event Ingested (via API endpoint) → 02 Validated & Categorized (Zod + category rules) → 03 Quota Checked (per-plan enforcement) → 04 Discord Alert Sent (instant notification).",
          chips:
            "Event types supported: Sales Events (new signups, upgrades) · Incident Events (errors, failures, spikes) · Usage Events (quota hits, milestones).",
          image: {
            src: "/assets/pingpanda/events.webp",
            alt: "PingPanda event API example",
            url: "app.pingpanda.io/api-key",
          },
        },
      },
      {
        type: "architecture",
        content: {
          label: "How it was built",
          title: "Architecture",
          subtitle:
            "A Next.js App Router frontend with a Hono API layer on the critical event path — lightweight, edge-compatible, and built for instant delivery on a serverless stack.",
          items: [
            {
              title: "Client",
              icon: "layout-dashboard",
              body: "Next.js 15 App Router · React 19 — TypeScript, Tailwind CSS, TanStack Query, deployed on Vercel. Dashboard, API keys, usage.",
            },
            {
              title: "API",
              icon: "zap",
              body: "Hono API layer — edge-compatible, API-key auth, Zod validation, per-plan quota enforcement.",
            },
            {
              title: "Data & identity",
              icon: "database",
              body: "Prisma + Neon (serverless PostgreSQL), Neon Adapter (connection pooling), Clerk (auth & user sync).",
            },
            {
              title: "Billing & delivery",
              icon: "credit-card",
              body: "Stripe (checkout, webhooks, plans) and Discord REST (rich formatted alerts).",
            },
            {
              title: "Deployment",
              icon: "cloud",
              body: "Vercel serverless edge runtime.",
            },
          ],
        },
      },
      {
        type: "outcomes",
        content: {
          label: "Measurable Outcomes",
          title: "Measurable Outcomes",
          subtitle:
            "A lean, API-first tool that gives SaaS teams the operational visibility they need — without the complexity and cost they don't — delivered end-to-end in thirteen months.",
          bullets: [
            {
              title: "Zero monitoring blind spots",
              body: "Every critical event surfaces instantly where the team already works.",
            },
            {
              title: "Real-time delivery",
              body: "From event ingestion to Discord notification with no meaningful delay.",
            },
            {
              title: "Faster incident response",
              body: "Teams aware of errors, failures, and spikes the moment they occur.",
            },
            {
              title: "Revenue moment visibility",
              body: "Signups, upgrades, and payment events tracked and alerted in real time.",
            },
            {
              title: "Full quota management",
              body: "Per-plan enforcement and usage controls built in from day one.",
            },
            {
              title: "Production in 13 months",
              body: "API-first SaaS with billing, auth, and delivery tracking all live and operational.",
            },
          ],
        },
      },
      {
        type: "results",
        content: {
          label: "The result",
          title: "The result",
          subtitle:
            "The best monitoring tools are the ones teams actually use. By delivering event alerts directly into Discord — where SaaS teams already operate — this platform removed every barrier between a critical event happening and the right person knowing about it.",
          bullets: [
            {
              title: "No missed signups",
              body: "Revenue moments (signups, upgrades, payments) are tracked and alerted the instant they happen.",
            },
            {
              title: "No delayed incident response",
              body: "Errors, failures, and spikes reach the team in real time, where they already work.",
            },
            {
              title: "No setup overhead",
              body: "A single API endpoint and event categories. No dashboards to configure, no infrastructure to manage.",
            },
          ],
          quote: "Send an event. Get an alert. Never miss a moment.",
        },
      },
    ],
  },
  {
    slug: "amazon-au-product-launch",
    title: "From Empty Storefront to 2.5 ROAS: An Amazon AU Launch",
    subtitle: "Amazon AU · Product Launch · PPC",
    tags: ["Amazon AU", "Product Launch", "PPC"],
    category: "amazon",
    lead: "A new-to-Amazon brand entered Amazon Australia with a demand-validated multi-unit card tracker, a conversion-ready listing, Brand Registry assets, and a disciplined $20/day Sponsored Products plan — reaching 2.5 ROAS in about five weeks.",
    heroImage: "/assets/case-studies/amazon-au-product-launch/hero.webp",
    headerBg: "/assets/header-bg.jpg",
    heroUrl: "amazon.com.au",
    featured: true,
    sortOrder: 4,
    metaTitle: "Amazon AU Product Launch Case Study — 2.5 ROAS | Xorora",
    metaDescription:
      "How Xorora launched a card tracker on Amazon Australia — product hunting, listing optimization, Brand Registry A+ content, and Sponsored Products — from empty storefront to 2.5 ROAS.",
    metrics: [
      {
        value: "2.5",
        label: "ROAS on Sponsored Products",
      },
      {
        value: "$1,756.80",
        label: "Attributed sales in the launch window",
      },
      {
        value: "$20/day",
        label: "Controlled daily Sponsored Products budget",
      },
      {
        value: "~5 wks",
        label: "Empty storefront to profitable launch",
      },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "Launching into Amazon Australia with proof, not hope",
          paragraphs: [
            "The brief was straightforward and unforgiving: stand up a new Amazon AU storefront for a slim card tracker, validate demand before scaling spend, and turn a cold listing into profitable Sponsored Products performance.",
            "Xorora ran the full marketplace build — product hunting through listing, Brand Registry and A+ modules, then a tightly capped PPC plan — so creative, catalog, and ads compounded instead of competing.",
          ],
          meta: [
            { label: "Market", value: "Amazon Australia" },
            { label: "Seller profile", value: "New-to-Amazon" },
            { label: "Ad plan", value: "$20/day Sponsored Products" },
            { label: "Engagement", value: "~5-week launch sprint" },
          ],
          image: {
            src: "/assets/case-studies/amazon-au-product-launch/hero.webp",
            alt: "Card tracker product hero still used on the Amazon AU listing",
            url: "amazon.com.au",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The challenge",
          title: "Wrong product means wasted spend",
          lead: "On Amazon, creative polish cannot rescue a SKU the market does not want — and aggressive PPC only accelerates the loss.",
          paragraphs: [
            "The client needed a multi-unit offer with clear demand signals on Amazon AU, not a speculative single SKU. Without validated product–market fit, Brand Registry assets and ad budget would burn before the listing ever had a chance.",
          ],
          bullets: [
            "Empty storefront with no catalog history, reviews, or organic rank to lean on.",
            "High risk of launching an unvalidated product and learning too late through paid traffic.",
            "Listing and A+ needed to read as premium hardware, not a bare bullet dump.",
            "PPC had to prove return on a hard $20/day Sponsored Products ceiling.",
          ],
        },
      },
      {
        type: "market_context",
        content: {
          layout: "asset-showcase",
          label: "Listing Optimization",
          title: "Images engineered to convert cold Amazon traffic",
          subtitle:
            "Above-the-fold proof first — then secondary frames that answer the objections Sponsored Products traffic always brings.",
          paragraphs: [
            "We built the listing like a conversion funnel, not a photo dump: a clean main still for the search grid, then feature modules that prove tech, durability, charging, Find My / Find Hub reach across Australia, and wallet fit.",
          ],
          meta: [
            { label: "Module", value: "Main + 5 secondary" },
            { label: "Intent", value: "Cold SP traffic" },
            { label: "Market", value: "Amazon AU" },
          ],
          bullets: [
            {
              title: "Above fold",
              body: "Hero still reads as premium hardware in the search grid — no lifestyle clutter competing with the ASIN click.",
            },
            {
              title: "Objection stack",
              body: "Secondary frames pre-answer “does it work with Find My?”, water resistance, wireless charging, and real wallet fit.",
            },
            {
              title: "AU-native proof",
              body: "Find Anywhere module pins Sydney and Melbourne so shoppers see local network relevance, not generic global stock.",
            },
          ],
          image: {
            src: "/assets/case-studies/amazon-au-product-launch/listing-05-find-anywhere.webp",
            alt: "Find it Anywhere listing showing Apple Find My and Android Find Hub with AU map pins",
            url: "amazon.com.au",
          },
          gallery: [
            {
              src: "/assets/case-studies/amazon-au-product-launch/hero.webp",
              alt: "Main listing still — geometric card tracker on white",
            },
            {
              src: "/assets/case-studies/amazon-au-product-launch/listing-01-tech.webp",
              alt: "Exploded listing module — chipset, battery, wireless charging coil",
            },
            {
              src: "/assets/case-studies/amazon-au-product-launch/listing-03-water-resistant.webp",
              alt: "Water-resistant listing proof with beaded droplets",
            },
            {
              src: "/assets/case-studies/amazon-au-product-launch/listing-04-wireless-charging.webp",
              alt: "Wireless charging listing still on a charging pad",
            },
            {
              src: "/assets/case-studies/amazon-au-product-launch/listing-06-wallet.webp",
              alt: "Lifestyle listing — card tracker sliding from a leather wallet",
            },
          ],
        },
      },
      {
        type: "solution",
        content: {
          label: "How Xorora solved it",
          title: "One connected build: hunt → list → brand → PPC",
          subtitle:
            "Every phase fed the next — demand-validated inventory, a shopper-ready listing, Brand Registry A+ modules, then disciplined Sponsored Products.",
          paragraphs: [
            "We treated the launch as a single system: find a multi-unit card tracker with AU demand, build listing images shoppers actually scroll, register the brand and ship A+ modules that carry the story, then open Sponsored Products only when the catalog could convert.",
            "Listing creative sat upstream of ads — so every dollar of the $20/day Sponsored Products plan hit a page already built to convert.",
          ],
          pipeline:
            "Launch pipeline: 01 Product hunting (demand-validated multi-unit) → 02 Listing optimization (main + secondary images) → 03 Brand assets (Registry + A+) → 04 Sponsored Products ($20/day).",
        },
      },
      {
        type: "architecture",
        content: {
          label: "How it was built",
          title: "Four phases, one storefront",
          subtitle:
            "Marketplace execution — not a SaaS rebuild. Each phase had a clear deliverable and a proof artifact shoppers or ads could use immediately.",
          items: [
            {
              title: "Product hunting",
              icon: "sparkles",
              body: "Demand-validated multi-unit card tracker brief for Amazon AU — selected for fit, margin, and search intent before creative or ads started.",
            },
            {
              title: "Listing optimization",
              icon: "layout-dashboard",
              body: "Main image plus secondary frames covering tech, durability, charging, Find My / Find Hub, and wallet lifestyle — built to convert cold traffic.",
            },
            {
              title: "Brand assets",
              icon: "shield-check",
              body: "Brand Registry unlock and desktop A+ modules that carry comparison, trust, and lifestyle narrative beyond bare bullets.",
            },
            {
              title: "Sponsored Products",
              icon: "zap",
              body: "Hard $20/day SP budget with structure tuned to the validated ASIN — protecting ROAS while the listing collected early conversion data.",
            },
          ],
          gallery: [
            {
              src: "/assets/case-studies/amazon-au-product-launch/aplus-01-never-lose.webp",
              alt: "A+ desktop module — Never lose what matters, golf lifestyle with wallet insert",
            },
            {
              src: "/assets/case-studies/amazon-au-product-launch/aplus-02-travel-easy.webp",
              alt: "A+ desktop module — Drop in, travel easy, tracker into a bag pocket",
            },
            {
              src: "/assets/case-studies/amazon-au-product-launch/aplus-03-always-know.webp",
              alt: "A+ desktop module — Always know, never guess, with iOS and Android tracking UI",
            },
            {
              src: "/assets/case-studies/amazon-au-product-launch/aplus-04-track-anywhere.webp",
              alt: "A+ desktop module — Track anywhere, tracker on suitcase handle in city street",
            },
            {
              src: "/assets/case-studies/amazon-au-product-launch/aplus-05-total-control.webp",
              alt: "A+ desktop module — Designed for total control, cinematic product still",
            },
          ],
        },
      },
      {
        type: "outcomes",
        content: {
          label: "Measurable Outcomes",
          title: "From cold traffic to 2.5 ROAS",
          subtitle:
            "With listing and brand assets in place, Sponsored Products had something to sell. Lifetime PPC in the launch window hit 2.5 ROAS on $1,756.80 attributed sales — including a strong recent five-day stretch that confirmed the system was compounding.",
          bullets: [
            {
              title: "2.5 ROAS",
              body: "Sponsored Products returned $2.50 for every $1 of ad spend in the launch window.",
            },
            {
              title: "$1,756.80 sales",
              body: "Attributed revenue while the storefront was still building early history.",
            },
            {
              title: "$20/day discipline",
              body: "Budget stayed capped — efficiency came from catalog and structure, not spend inflation.",
            },
            {
              title: "~5 weeks",
              body: "Empty Amazon AU storefront to profitable launch cadence.",
            },
          ],
          video: {
            src: "/assets/case-studies/amazon-au-product-launch/product-15s.mp4",
            poster:
              "/assets/case-studies/amazon-au-product-launch/video-poster.webp",
            title: "Card tracker · 15s product film",
          },
        },
      },
      {
        type: "results",
        content: {
          label: "The result",
          title: "A storefront that earns its ads",
          subtitle:
            "Amazon AU did not need another flashy agency deck — it needed a connected launch. Demand validation, listing proof, Brand Registry A+, and capped Sponsored Products turned an empty seller account into a measurable 2.5 ROAS system.",
          bullets: [
            {
              title: "Product chosen for the market",
              body: "Multi-unit card tracker selected against AU demand signals before creative or PPC spend.",
            },
            {
              title: "Listing and brand ready to convert",
              body: "Shopper-facing stills and A+ modules carried the hardware story past bare bullets.",
            },
            {
              title: "PPC that protected return",
              body: "A $20/day Sponsored Products plan scaled only what the catalog could defend.",
            },
          ],
          quote: "Hunt. List. Brand. Then spend. 2.5 ROAS.",
          chips:
            "Services: Product Hunting · Listing Optimization · Launch · Brand Assets · PPC",
        },
      },
    ],
  },
  {
    slug: "amazon-au-laundry-bag-launch",
    title: "Laundry Bag Set: An Amazon AU Launch at 2.44 ROAS",
    subtitle: "Amazon AU · Product Launch · PPC",
    tags: ["Amazon AU", "Product Launch", "PPC"],
    category: "amazon",
    lead: "With the brand's first product already live, Xorora sourced and launched a second: a laundry bag set for delicates — reaching 2.44 ROAS on a $30/day Sponsored Products campaign one month into the brand's Amazon presence.",
    heroImage: "/assets/case-studies/amazon-au-laundry-bag-launch/hero.webp",
    headerBg: "/assets/header-bg.jpg",
    heroUrl: "amazon.com.au",
    featured: false,
    sortOrder: 5,
    metaTitle: "Amazon Laundry Bag Launch Case Study | Xorora",
    metaDescription:
      "See how Xorora took an Amazon AU laundry bag set from sourcing to a live PPC campaign generating a 2.44 ROAS across product hunting and listing optimization.",
    metrics: [
      {
        value: "2.44",
        label: "ROAS on Sponsored Products",
      },
      {
        value: "$271.20",
        label: "Attributed sales since campaign launch",
      },
      {
        value: "$30/day",
        label: "Sponsored Products daily budget",
      },
      {
        value: "1 mo in",
        label: "Brand already live before this SKU's PPC",
      },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title:
            "A second SKU with Brand Registry, assets, and process already in place",
          paragraphs: [
            "With the brand's first product already live, Xorora sourced and launched a second: a laundry bag set for delicates. This case study covers what changed the second time — when Brand Registry, brand assets, and a proven process were already in place before the product ever touched a listing.",
            "The campaign launched as Sponsored Products with automatic targeting and a $30 daily budget, a month after the first product's campaign had already validated the brand's PPC structure in the AU market.",
          ],
          meta: [
            { label: "Market", value: "Amazon Australia" },
            { label: "Seller profile", value: "Second SKU" },
            { label: "Ad plan", value: "$30/day Sponsored Products" },
            { label: "Window", value: "Since 15 Aug 2026" },
          ],
          image: {
            src: "/assets/case-studies/amazon-au-laundry-bag-launch/hero.webp",
            alt: "Elvra 7-piece mesh laundry bag set — Amazon AU main listing still",
            url: "amazon.com.au",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The challenge",
          title: "Second product, same cold-traffic problem",
          lead: "Launching a second product under an existing brand carries a different risk than the first — infrastructure helps, but a new SKU still has to earn its own demand.",
          paragraphs: [
            "The brand infrastructure exists, but a new SKU still needs its own demand validation, its own keyword strategy, and its own listing built to convert cold traffic. Reusing the first product's shortcuts would have wasted the head start the brand had already earned.",
          ],
          bullets: [
            "Brand history existed — the new ASIN still had no reviews or organic rank of its own.",
            "Category demand and feature completeness had to be validated again, not assumed from the first launch.",
            "Keyword strategy and listing copy needed laundry-care research, not reused terms from the first product.",
            "PPC still had to prove return on a disciplined $30/day Sponsored Products ceiling.",
          ],
        },
      },
      {
        type: "market_context",
        content: {
          layout: "asset-showcase",
          label: "Listing Optimization",
          title: "Images built to convert cold Amazon traffic",
          subtitle:
            "Above-the-fold proof first — then secondary frames that answer the objections Sponsored Products traffic always brings.",
          paragraphs: [
            "The listing was built to the same front-end and back-end optimization standards as the first product: image SOPs, keyword-driven title and bullet points, and backend search terms from category-specific keyword research rather than reused terms from the first launch.",
          ],
          meta: [
            { label: "Module", value: "Main + 5 secondary" },
            { label: "Intent", value: "Cold SP traffic" },
            { label: "Market", value: "Amazon AU" },
          ],
          bullets: [
            {
              title: "Above fold",
              body: "Hero still shows the full seven-piece set on white — set completeness reads instantly in the search grid.",
            },
            {
              title: "Objection stack",
              body: "Secondary frames pre-answer sizes, snag-resistant zipper covers, wash protection, and everyday capacity.",
            },
            {
              title: "Category-native keywords",
              body: "Backend search terms came from laundry-care research — not a copy-paste of the first product's index terms.",
            },
          ],
          image: {
            src: "/assets/case-studies/amazon-au-laundry-bag-launch/listing-04-secure-zip.webp",
            alt: "Secure Zip listing module — zipper pull tucked into protective cover",
            url: "amazon.com.au",
          },
          gallery: [
            {
              src: "/assets/case-studies/amazon-au-laundry-bag-launch/hero.webp",
              alt: "Main listing still — 7-piece mesh laundry bag set on white",
            },
            {
              src: "/assets/case-studies/amazon-au-laundry-bag-launch/listing-01-sized.webp",
              alt: "Sized for Everything You Own — dimension callouts across three bag sizes",
            },
            {
              src: "/assets/case-studies/amazon-au-laundry-bag-launch/listing-02-every-size.webp",
              alt: "Every Size, Sorted — Large 3pc, Medium 3pc, Small 1pc",
            },
            {
              src: "/assets/case-studies/amazon-au-laundry-bag-launch/listing-03-protects-wash.webp",
              alt: "Protects Through Every Wash — cylindrical bag submerged with shoes inside",
            },
            {
              src: "/assets/case-studies/amazon-au-laundry-bag-launch/listing-05-everyday.webp",
              alt: "A Neat Fit for Everyday Clothes — mesh bag filled with folded garments",
            },
          ],
        },
      },
      {
        type: "solution",
        content: {
          label: "How Xorora solved it",
          title: "Same disciplined process — with brand assets already earned",
          subtitle:
            "Product hunting and sourcing, listing optimization, then PPC — but Brand Registry, A+, and the Brand Store were already in place at the account level.",
          paragraphs: [
            "Xorora ran the same disciplined process as the first launch, but with brand assets already established rather than built from zero. The chosen product filled a gap in the AU laundry care category: a heavy-duty, breathable mesh laundry bag set built to protect delicates during machine washing.",
            "That head start shortened the pre-PPC runway the first product had to build from scratch — so Sponsored Products dollars hit a page that could convert sooner.",
          ],
          pipeline:
            "Launch pipeline: 01 Product hunting (opportunity score + risk factors) → 02 Listing optimization (main + secondary + category keywords) → 03 Brand assets inherited (Registry + A+ + Store) → 04 Sponsored Products ($30/day auto targeting).",
        },
      },
      {
        type: "architecture",
        content: {
          label: "How it was built",
          title: "Four phases, one connected launch",
          subtitle:
            "Marketplace execution with a second-SKU advantage — each phase had a clear deliverable shoppers or ads could use immediately.",
          items: [
            {
              title: "Product hunting",
              icon: "sparkles",
              body: "Validated against the same opportunity score and risk framework as the first launch. The seven-piece set stood out on completeness — three sizes, snag-resistant zipper covers, and tear-resistant stitching competitors offered only partially.",
            },
            {
              title: "Listing optimization",
              icon: "layout-dashboard",
              body: "Image SOPs, keyword-driven title and bullets, and backend search terms built from laundry-care research — not reused from the first ASIN.",
            },
            {
              title: "Brand assets",
              icon: "shield-check",
              body: "No new Brand Registry work — the listing inherited the existing A+ Content framework and Brand Store secured during the first launch.",
            },
            {
              title: "Sponsored Products",
              icon: "zap",
              body: "Automatic targeting, $30 daily budget, launched a month after the first campaign had already validated the brand's PPC structure in AU.",
            },
          ],
          gallery: [
            {
              src: "/assets/case-studies/amazon-au-laundry-bag-launch/aplus-01-size-every-wash.webp",
              alt: "A+ desktop module — A size for every wash, lifestyle with eucalyptus and linens",
            },
            {
              src: "/assets/case-studies/amazon-au-laundry-bag-launch/aplus-02-module-1.webp",
              alt: "A+ desktop module 1 — laundry bag brand story",
            },
            {
              src: "/assets/case-studies/amazon-au-laundry-bag-launch/aplus-03-module-2.webp",
              alt: "A+ desktop module 2 — feature and lifestyle narrative",
            },
            {
              src: "/assets/case-studies/amazon-au-laundry-bag-launch/aplus-04-module-3.webp",
              alt: "A+ desktop module 3 — product proof and comparison",
            },
            {
              src: "/assets/case-studies/amazon-au-laundry-bag-launch/aplus-05-module-4.webp",
              alt: "A+ desktop module 4 — closing brand module",
            },
          ],
        },
      },
      {
        type: "outcomes",
        content: {
          label: "Measurable Outcomes",
          title: "2.44 ROAS from a second-SKU campaign",
          subtitle:
            "Lifetime since campaign launch (15 Aug 2026 to present): Sponsored Products returned $2.44 for every $1 of ad spend — $271.20 attributed sales on $111.13 spend.",
          bullets: [
            {
              title: "2.44 ROAS",
              body: "Sponsored Products returned $2.44 for every $1 of ad spend since campaign launch.",
            },
            {
              title: "$271.20 sales",
              body: "Attributed revenue on 16 purchases while the new ASIN was still building early history.",
            },
            {
              title: "$1.71 avg CPC",
              body: "65 clicks at 1.12% CTR — efficiency on a hard $30/day automatic-targeting plan.",
            },
            {
              title: "$111.13 spend",
              body: "Controlled spend against the $30/day ceiling — return came from catalog readiness, not budget inflation.",
            },
          ],
          video: {
            src: "/assets/case-studies/amazon-au-laundry-bag-launch/product-15s.mp4",
            poster:
              "/assets/case-studies/amazon-au-laundry-bag-launch/video-poster.webp",
            title: "Laundry bag set · 15s product film",
          },
        },
      },
      {
        type: "results",
        content: {
          label: "The result",
          title: "Infrastructure doing the work the first launch earned",
          subtitle:
            "The second product converted faster and cheaper than the first — at a CPC nearly 20% lower and a ROAS almost half again as strong. That's not the product being inherently easier to sell. It's Brand Registry, content, and store already doing work the first campaign had to earn from a standing start.",
          bullets: [
            {
              title: "Product chosen for completeness",
              body: "Seven-piece mesh set selected against AU laundry-care demand and feature gaps competitors left open.",
            },
            {
              title: "Listing ready; brand already unlocked",
              body: "Shopper-facing stills plus inherited A+ and Brand Store shortened the runway to PPC.",
            },
            {
              title: "PPC that protected return",
              body: "A $30/day automatic Sponsored Products plan scaled only what the new ASIN could defend.",
            },
          ],
          quote: "Second SKU. Same system. 2.44 ROAS.",
          chips:
            "Services: Product Hunting · Listing Optimization · Product Launch · PPC",
        },
      },
    ],
  },

  {
    slug: "amazon-uk-rugs-acos-turnaround",
    title: "122% ACOS to 42%: An Amazon UK Rugs Turnaround",
    subtitle: "Amazon UK · PPC · Home Furnishings",
    tags: ["Amazon UK", "PPC", "Home Furnishings"],
    category: "amazon",
    lead: "One of the UK's largest rugs and home furnishings retailers was spending £6,000+ a month on Amazon ads at 122% ACOS — growing sales while losing money on every pound of PPC. Xorora rebuilt the account without killing the revenue engine behind it.",
    heroImage: "/assets/case-studies/amazon-uk-rugs-acos-turnaround/hero.png",
    headerBg: "/assets/header-bg.jpg",
    heroUrl: "amazon.co.uk",
    featured: true,
    sortOrder: 6,
    metaTitle: "Amazon UK PPC Case Study: 122% to 42% ACOS | Xorora",
    metaDescription:
      "How Xorora cut Amazon ACOS from 122% to 42% for a UK home furnishings retailer in six months — while sales kept growing. See the PPC turnaround.",
    metrics: [
      {
        value: "122%→42%",
        label: "ACOS after six months of management",
      },
      {
        value: "~66%",
        label: "Reduction in advertising cost of sale",
      },
      {
        value: "Sales↑",
        label: "Revenue grew through the engagement",
      },
      {
        value: "6 mo",
        label: "Audit to sustained ACOS result",
      },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "Scale that was costing more than it earned",
          paragraphs: [
            "The retailer was already generating meaningful Amazon revenue and spending more than £6,000 a month on advertising to do it. On the surface, the account looked like a growth story. Underneath, PPC was running at 122% ACOS — £122 in ad spend for every £100 in attributed sales.",
            "Xorora took over Amazon PPC management with one brief: make advertising profitable without shutting down the campaigns that kept sales moving. Six months later, ACOS sat at 42%, sales had grown, and the account was finally compounding the right way.",
          ],
          meta: [
            { label: "Market", value: "Amazon UK" },
            { label: "Category", value: "Rugs & home furnishings" },
            { label: "Ad spend", value: "£6,000+/month before engagement" },
            { label: "Duration", value: "6 months" },
            { label: "Management fee", value: "£750 → £1,600 / month" },
          ],
          image: {
            src: "/assets/case-studies/amazon-uk-rugs-acos-turnaround/rugs-detail.png",
            alt: "Close-up of textured area rug weave and fringe detail",
            url: "amazon.co.uk",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The tension",
          title: "You couldn't pause spend without pausing the business",
          subtitle:
            "Most agencies would slash budget to fix ACOS. That wasn't an option here — PPC was the live revenue engine.",
          bullets: [
            {
              title: "122% ACOS on live revenue",
              body: "Every pound of attributed sales cost more than a pound in ads. The account was growing into a loss, not out of one.",
            },
            {
              title: "Cut spend, cut sales",
              body: "Campaigns that were inefficient were also carrying meaningful volume. A blunt pause risked the top line the client depended on.",
            },
            {
              title: "Waste hidden at scale",
              body: "Broad, overlapping, and underperforming keywords were burning budget inside a large account — hard to unwind without a systematic rebuild.",
            },
          ],
          image: {
            src: "/assets/case-studies/amazon-uk-rugs-acos-turnaround/rugs-rolled.png",
            alt: "Thick wool area rug rolled open on hardwood — UK rugs catalog product",
          },
        },
      },
      {
        type: "solution",
        content: {
          label: "What we did",
          title: "Rebuild the account. Protect the sales. Then tighten.",
          subtitle:
            "No single 'big switch' — a disciplined, data-led program from audit through ongoing optimization.",
          pipeline:
            "Full account audit → Kill wasted spend → Restructure targeting → Bid & keyword optimization on a rolling loop",
          bullets: [
            {
              title: "Audit where the money actually went",
              body: "Campaign and keyword-level review to separate profitable demand from spend that only looked busy.",
            },
            {
              title: "Remove waste without gutting volume",
              body: "Broad and underperforming terms were isolated and cut so budget could move to terms that paid back.",
            },
            {
              title: "Restructure for clarity",
              body: "Targeting rebuilt so winners and losers no longer shared the same budgets and bid logic.",
            },
            {
              title: "Optimize for months, not a week",
              body: "Bids and targeting adjusted as new data landed — with sales tracked throughout so ACOS gains never came from killing revenue.",
            },
          ],
          image: {
            src: "/assets/case-studies/amazon-uk-rugs-acos-turnaround/rugs-layered.png",
            alt: "Layered patterned area rugs on light wood floor in a bright UK home",
          },
        },
      },
      {
        type: "architecture",
        content: {
          label: "How the engagement ran",
          title: "Four phases from loss-making scale to profitable growth",
          items: [
            {
              title: "Audit",
              body: "Map campaign and keyword performance to see exactly where spend leaked vs. where it converted.",
            },
            {
              title: "Cut waste",
              body: "Identify and remove broad, poorly targeted, and underperforming keywords burning budget with no return.",
            },
            {
              title: "Restructure",
              body: "Separate profitable terms from the rest so bids, budgets, and reporting finally matched reality.",
            },
            {
              title: "Ongoing optimization",
              body: "Keep adjusting as data changes — so the ACOS result holds after the first win, not just on a good week.",
            },
          ],
        },
      },
      {
        type: "outcomes",
        content: {
          label: "The numbers",
          title: "ACOS down ~66%. Sales still up.",
          subtitle:
            "The outcome that matters for paid acquisition: advertising got cheaper and more efficient while the business kept growing.",
          bullets: [
            {
              title: "122% → 42% ACOS",
              body: "Advertising cost of sale fell by roughly two-thirds over the six-month engagement.",
            },
            {
              title: "Sales grew throughout",
              body: "Efficiency did not come from starving the account — revenue moved up while waste came out.",
            },
            {
              title: "Scope that earned a larger retainer",
              body: "Xorora's monthly PPC management fee grew from £750 to £1,600 as results and responsibility expanded.",
            },
            {
              title: "A playbook, not a one-off hack",
              body: "Structure and ongoing optimization replaced hope-based spending — the foundation for durable ROAS.",
            },
          ],
          image: {
            src: "/assets/case-studies/amazon-uk-rugs-acos-turnaround/rugs-living.png",
            alt: "Colorful area rug as living-room centerpiece after profitable Amazon UK PPC growth",
          },
        },
      },
      {
        type: "results",
        content: {
          label: "The takeaway",
          title: "Profitable Amazon growth without killing the engine",
          subtitle:
            "If your Amazon account is scaling into a loss, the fix isn't always 'spend less.' It's spend on what converts — and stop funding what doesn't — without freezing the sales your business needs.",
          bullets: [
            {
              title: "Built for brands already spending at scale",
              body: "Ideal when volume is real but ACOS has slipped past profitable. We stabilize first, then compound.",
            },
            {
              title: "Measured on sales and ACOS together",
              body: "We refuse vanity efficiency that only looks good because revenue collapsed.",
            },
            {
              title: "Ready for your next campaign",
              body: "Book a scoping call. We'll tell you what a turnaround path looks like for your Amazon UK account.",
            },
          ],
          quote: "122% to 42% ACOS. Sales still climbing.",
          chips:
            "Services: Amazon PPC · Account audit · Keyword restructuring · Ongoing optimization",
        },
      },
    ],
  },
  {
    slug: "amazon-us-bedding-sku-ppc",
    title: "~31% ACOS on 60 SKUs — Without Spending the Full Budget",
    subtitle: "Amazon US · PPC · Bedding",
    tags: ["Amazon US", "PPC", "Bedding"],
    category: "amazon",
    lead: "A major US bedding brand with 3,000+ Amazon SKUs gave Xorora a $10,000 monthly budget for a 60-SKU segment. We didn't try to spend it all. In three months, ACOS landed near 31% on ~$5,500/month — and portfolio growth held.",
    heroImage: "/assets/case-studies/amazon-us-bedding-sku-ppc/hero.png",
    headerBg: "/assets/header-bg.jpg",
    heroUrl: "amazon.com",
    featured: true,
    sortOrder: 7,
    metaTitle: "Amazon US Bedding PPC Case Study — ~31% ACOS | Xorora",
    metaDescription:
      "How Xorora managed Amazon PPC for a 60-SKU bedding segment: ~31% ACOS in 3 months, ~$5,500 spend vs a $10,000 budget, growth maintained. See the results.",
    metrics: [
      {
        value: "~31%",
        label: "ACOS within three months",
      },
      {
        value: "~$5.5k",
        label: "Monthly spend vs $10k allocated",
      },
      {
        value: "Growth",
        label: "Portfolio growth held as spend fell",
      },
      {
        value: "3 mo",
        label: "Engagement to sustained result",
      },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "A $10,000 ceiling is not a spending target",
          paragraphs: [
            "A major US bedding brand with more than 3,000 SKUs live on Amazon brought Xorora in to manage PPC for a defined 60-SKU segment in bedding. The client allocated a $10,000 monthly ad budget to that slice of the catalog.",
            "Xorora's job was not to empty the budget. It was to spend only what the data justified — and prove the segment could stay profitable even if monthly spend landed well under the ceiling. Three months later, ACOS was about 31% on roughly $5,500 of spend, with growth maintained across the portfolio.",
          ],
          meta: [
            { label: "Market", value: "Amazon US" },
            { label: "Catalog", value: "3,000+ SKUs brand-wide" },
            { label: "Scope", value: "60-SKU bedding segment" },
            { label: "Budget ceiling", value: "$10,000 / month allocated" },
            { label: "Management fee", value: "~$3,300 / month" },
          ],
          image: {
            src: "/assets/case-studies/amazon-us-bedding-sku-ppc/sheets-lifestyle.png",
            alt: "Made bed with crisp white sheets and duvet in a bright bedroom",
            url: "amazon.com",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The tension",
          title: "Sixty SKUs means overlap is the default, not the exception",
          subtitle:
            "At this density, bad structure doesn't leak a little — it cannibalizes dozens of listings at once.",
          bullets: [
            {
              title: "Keyword overlap across the segment",
              body: "Products competed with each other for the same queries, inflating CPCs and muddying which SKU actually deserved the click.",
            },
            {
              title: "Budget cannibalization risk",
              body: "A misallocated dollar didn't hurt one listing — it pulled oxygen from many listings in the same category.",
            },
            {
              title: "Pressure to 'use' the $10k",
              body: "The working assumption was that the allocated budget was a target to hit. Xorora's mandate was the opposite: prove profitability even if spend came in under the ceiling.",
            },
          ],
          image: {
            src: "/assets/case-studies/amazon-us-bedding-sku-ppc/sheets-folded.png",
            alt: "Folded white and ivory cotton bed sheets with visible weave texture",
          },
        },
      },
      {
        type: "solution",
        content: {
          label: "What we did",
          title: "Product-level performance over budget theater",
          subtitle:
            "Campaign structure, targeting, and bids rebuilt around what each SKU earned — not how much budget was left to burn.",
          pipeline:
            "Own the 60-SKU segment → Rebuild structure on product data → Fund winners, starve losers → Track growth at SKU level",
          bullets: [
            {
              title: "Structure around products, not the ceiling",
              body: "Campaigns and targeting rebuilt so spend followed profitable SKUs and keywords — not a monthly 'spend it' ritual.",
            },
            {
              title: "Leave money on the table on purpose",
              body: "When data said stop, we stopped — including leaving allocated budget unspent rather than buying empty clicks.",
            },
            {
              title: "Pull back what didn't pay",
              body: "Underperforming keywords and products lost budget fast so winners could scale without cross-SKU noise.",
            },
            {
              title: "Prove growth while spend fell",
              body: "SKU-level tracking confirmed the portfolio kept growing as monthly spend settled near $5,500 — not $10,000.",
            },
          ],
          image: {
            src: "/assets/case-studies/amazon-us-bedding-sku-ppc/sheets-pillowcases.png",
            alt: "Sage and white pillowcases and flat sheets folded on a wooden dresser",
          },
        },
      },
      {
        type: "architecture",
        content: {
          label: "How the engagement ran",
          title: "Four moves that replaced budget theater with profit logic",
          items: [
            {
              title: "Segment ownership",
              body: "Full PPC ownership of the 60-SKU bedding slice — one team accountable for structure, bids, and outcomes.",
            },
            {
              title: "Product-level rebuild",
              body: "Campaigns and targeting redesigned around how each SKU actually performed, not how budgets were traditionally split.",
            },
            {
              title: "Profit-led spend",
              body: "Money followed return. Unprofitable paths lost fuel — even when that meant underspending the allocation.",
            },
            {
              title: "SKU-level proof",
              body: "Growth and efficiency tracked per product so 'saving budget' never meant 'losing the catalog.'",
            },
          ],
        },
      },
      {
        type: "outcomes",
        content: {
          label: "The numbers",
          title: "~31% ACOS. ~$4,500 left unspent. Growth held.",
          subtitle:
            "The paid-ads story: you don't need to max the budget to grow a multi-SKU Amazon segment — you need to spend what the data earns.",
          bullets: [
            {
              title: "~31% ACOS in three months",
              body: "Advertising efficiency landed in a profitable band without a six-month slog to get there.",
            },
            {
              title: "~$5,500 monthly spend",
              body: "About $4,500 under the $10,000 allocated ceiling — by design, not by accident.",
            },
            {
              title: "Portfolio growth maintained",
              body: "Cutting empty spend did not stall the 60-SKU segment. Growth held across the same three months.",
            },
            {
              title: "~$3,300 / month management",
              body: "A clear retainer for a clearly scoped segment — results tied to efficiency, not budget burn.",
            },
          ],
          image: {
            src: "/assets/case-studies/amazon-us-bedding-sku-ppc/sheets-stack.png",
            alt: "Stacked fitted sheets, flat sheets, and pillowcases after efficient Amazon PPC",
          },
        },
      },
      {
        type: "results",
        content: {
          label: "The takeaway",
          title: "Multi-SKU Amazon PPC that respects the P&L",
          subtitle:
            "If your brand is funding Amazon ads to hit a budget number instead of a profit number, this is the pattern: structure by product, spend what converts, and prove growth without emptying the wallet.",
          bullets: [
            {
              title: "Built for catalogs, not single ASINs",
              body: "Especially strong when keyword overlap and cannibalization are already eating margin across a segment.",
            },
            {
              title: "Underspend is a feature",
              body: "Leaving allocated budget unused is a win when the alternative is buying ACOS you can't defend.",
            },
            {
              title: "Ready for your next campaign",
              body: "Book a scoping call. We'll map what a profit-led plan looks like for your Amazon US catalog.",
            },
          ],
          quote: "~31% ACOS. Half the budget ceiling. Growth intact.",
          chips:
            "Services: Amazon PPC · Multi-SKU structure · Bid strategy · Spend discipline",
        },
      },
    ],
  },
  ...seedMarketingCaseStudies,
  ...withUniqueIndustryImageList(seedIndustryCaseStudies),
];
