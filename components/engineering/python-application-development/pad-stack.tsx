import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import {
  TechStackGrid,
  type TechStackGroup,
} from "@/components/engineering/shared/tech-stack-grid";
import { imageAltTitle } from "@/lib/image-seo";
import { ROUTES } from "@/lib/navigation";

const FRAMEWORKS = [
  {
    name: "Django",
    body: "The standard choice for full-featured web applications and platforms that need an ORM, admin interface, authentication, and a strong security posture by default. Content-heavy sites, SaaS platforms, and complex data models.",
    depthHref: ROUTES.djangoDevelopmentCompany,
    depthLabel: "Django development",
  },
  {
    name: "FastAPI",
    body: "The go-to for modern, high-performance APIs. Built around Python's async capabilities and automatic OpenAPI documentation — a strong fit for microservices, mobile app backends, and systems where request throughput matters.",
    depthHref: ROUTES.ourWork,
    depthLabel: "real-time SaaS event monitoring",
  },
  {
    name: "Flask",
    body: "A lightweight microframework for smaller applications or services that don't need Django's full feature set. More architectural control at the cost of assembling more pieces manually.",
  },
  {
    name: "Celery",
    body: "Asynchronous task queues and background job processing — a near-standard component when heavy or time-delayed work (emails, uploads, scheduled jobs) must leave the main request cycle.",
  },
  {
    name: "Kivy & BeeWare",
    body: "Cross-platform mobile and desktop UI from a shared Python codebase. Useful for internal tools and certain consumer apps where a fully native experience isn't a hard requirement.",
  },
] as const;

const GROUPS: TechStackGroup[] = [
  {
    title: "Frameworks",
    logos: ["Python", "Django", "FastAPI", "Flask", "Django REST Framework"],
  },
  {
    title: "Async & queues",
    logos: ["Celery", "Redis", "RabbitMQ", "asyncio"],
  },
  {
    title: "Data",
    logos: ["PostgreSQL", "MongoDB", "Elasticsearch", "pandas"],
  },
  {
    title: "Infra",
    logos: ["Docker", "Kubernetes", "AWS", "GCP", "GitHub Actions"],
  },
  {
    title: "Quality",
    logos: ["pytest", "mypy", "ruff", "Sentry"],
  },
];

const gridSeo = imageAltTitle({
  primary: "Python application development stack",
  secondary: "Django, FastAPI, Flask, Celery, PostgreSQL",
  context: "Django, FastAPI, Flask, Celery, PostgreSQL",
});

export function PadStack() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Tech & tools"
        title="Python frameworks worth knowing in 2026"
        sub="Framework choice shapes almost everything about a Python project's architecture. Here is what each one is actually built for."
        className="mb-10 max-w-[760px]"
      />
      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FRAMEWORKS.map((item) => (
          <div
            key={item.name}
            className="rounded-(--r-lg) border border-border bg-white p-[clamp(22px,2.4vw,28px)]"
          >
            <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              {item.name}
            </h3>
            <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {item.body}
              {"depthHref" in item && item.depthHref ? (
                <>
                  {" "}
                  See our{" "}
                  <Link
                    href={item.depthHref}
                    className="font-semibold text-accent no-underline hover:text-tangerine-600"
                  >
                    {item.depthLabel}
                  </Link>{" "}
                  work.
                </>
              ) : null}
            </p>
          </div>
        ))}
      </div>
      <TechStackGrid groups={GROUPS} title={gridSeo.title} />
    </LightSection>
  );
}
