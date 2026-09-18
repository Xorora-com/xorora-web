import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";
import { ROUTES } from "@/lib/navigation";

const PATTERNS = [
  {
    href: ROUTES.industry("saas"),
    tag: "Subscriptions",
    title: "Billing without a quarter of custom work",
    body: "Cashier against Stripe or Paddle covers plan changes, proration, trials, and dunning. We extend it for usage or marketplace payouts instead of rebuilding billing from scratch.",
  },
  {
    href: ROUTES.customAppDevelopment,
    tag: "Operations",
    title: "Admin panels in days, not months",
    body: "Filament puts a working operations interface over your Eloquent models early. Budget goes into domain rules, not reinventing CRUD screens.",
  },
  {
    href: ROUTES.applicationModernization,
    tag: "Upgrades",
    title: "Legacy Laravel brought onto a supported path",
    body: "Version and package audits first. Abandoned packages usually drive more cost than Laravel itself. You keep the assessment either way.",
  },
] as const;

export function LwdPortfolio() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="How we ship"
        title="Our Laravel website development portfolio"
        sub="The pattern we use on Laravel platforms: use the framework for solved problems, keep domain logic separable, and leave the upgrade path open."
        className="mb-10 max-w-[760px]"
      />
      <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-(--r-xl) border border-border bg-white p-[clamp(24px,3vw,40px)]">
          <p className="mb-3 font-mono text-[12px] text-tangerine-600 uppercase tracking-[0.14em]">
            Business platforms
          </p>
          <h3 className="mb-4 font-sans font-semibold text-[clamp(22px,2.4vw,28px)] text-fg1 leading-snug">
            Domain rules first. Framework machinery second.
          </h3>
          <p className="mb-4 font-sans text-[15.5px] text-fg2 leading-relaxed">
            Teams often rebuild auth, billing, queues, and admin tooling because
            those pieces feel &quot;custom.&quot; On Laravel they already exist
            and are maintained. Rebuilding them is how a six-month platform
            becomes a year.
          </p>
          <p className="mb-4 font-sans text-[15.5px] text-fg2 leading-relaxed">
            We put Livewire or Inertia where the team shape needs one codebase,
            Filament where operations need an interface early, and Cashier where
            subscriptions are the commercial model. Custom code stays on the
            rules only your business has.
          </p>
          <p className="m-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
            Domain logic stays out of controllers and off models, so next
            year&apos;s major version is a weekend rather than a quarter.
          </p>
        </article>
        <article className="flex flex-col justify-between rounded-(--r-xl) border border-border bg-white p-[clamp(24px,3vw,36px)]">
          <div>
            <p className="mb-3 font-mono text-[12px] text-tangerine-600 uppercase tracking-[0.14em]">
              Frontend boundary
            </p>
            <h3 className="mb-4 font-sans font-semibold text-[clamp(22px,2.4vw,26px)] text-fg1 leading-snug">
              One team. One codebase. When it fits.
            </h3>
            <p className="m-0 font-sans text-[15px] text-fg2 leading-relaxed">
              Blade with Livewire is our default for business applications and
              internal platforms. We only split a separate frontend when a
              mobile app or second consumer forces the coordination cost.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={ROUTES.ourWork}
              className={buttonClassName({ variant: "primary", size: "lg" })}
            >
              See our work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <LetsTalkContactLink
              className={buttonClassName({ variant: "secondary", size: "lg" })}
            >
              Talk to an engineer
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </LetsTalkContactLink>
          </div>
        </article>
      </div>
      <div className="svc-grid3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PATTERNS.map((item) => (
          <Link
            key={item.href + item.title}
            href={item.href}
            className="group hover:-translate-y-1 overflow-hidden rounded-(--r-xl) border border-border bg-white no-underline shadow-sm transition-all duration-300 hover:border-border-strong hover:shadow-md"
          >
            <div className="p-[clamp(22px,2.4vw,28px)]">
              <p className="mb-2 font-mono text-[11px] text-tangerine-600 uppercase tracking-[0.12em]">
                {item.tag}
              </p>
              <h3 className="mb-2 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                {item.title}
              </h3>
              <p className="m-0 mb-4 font-sans text-[14px] text-fg2 leading-relaxed">
                {item.body}
              </p>
              <span className="inline-flex items-center gap-1.5 font-sans font-semibold text-[13.5px] text-accent">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </LightSection>
  );
}
