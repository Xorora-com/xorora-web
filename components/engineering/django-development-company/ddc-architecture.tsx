import { Database, Layers, Shield, Timer } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

const DECISIONS = [
  {
    icon: Layers,
    title: "Where business logic lives",
    body: "Django's convention is fat models, and it works well until a model reaches four hundred lines and every save has three side effects nobody can trace. We keep orchestration out of models and views both, in a service layer that can be tested without a request or a database fixture. Not on day one for a small app. Before the second team joins, always.",
  },
  {
    icon: Timer,
    title: "Migrations as a production event",
    body: "This is the part almost nobody writes about, and it is where Django systems break during deploys rather than in development. A dropped column breaks the old code still running during a rolling deploy. A new index locks writes unless it's created concurrently. A rename is two deploys, not one. We write migrations as backwards-compatible steps, separate schema changes from data changes, and test them against a copy of production volume rather than an empty database.",
  },
  {
    icon: Database,
    title: "The ORM boundary",
    body: "Querysets are lazy, which means a query written in a view can be completed in a template that has no idea what it costs. One missing select_related inside a loop becomes hundreds of queries and stays invisible until the dataset grows. We set query budgets per view, assert against them in tests, and use only and defer where a table is wide.",
  },
  {
    icon: Shield,
    title: "How far the admin goes",
    body: "The Django admin is a genuine advantage for internal operations and a trap as a product surface. We push it hard for staff tooling, and we stop before it becomes the thing customers log into. Knowing where that line is saves months at both ends.",
  },
] as const;

const diagramSeo = imageAltTitle({
  primary: "Django architecture with service layer",
  secondary: "Celery workers and query boundaries",
  context: "Celery workers and query boundaries",
});

export function DdcArchitecture() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="How we design"
        title="Django application architecture"
        sub="Django gets you to production quickly and then charges interest. Four decisions determine what that interest costs."
        className="mb-12 max-w-[760px]"
      />
      <div className="grid gap-[clamp(36px,5vw,56px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2">
          {DECISIONS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-(--r-lg) border border-border bg-white p-[clamp(20px,2.2vw,26px)]"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                  <Icon className="h-[22px] w-[22px]" aria-hidden />
                </span>
                <h3 className="mb-2 font-sans font-semibold text-[17px] text-fg1 leading-snug">
                  {item.title}
                </h3>
                <p className="m-0 font-sans text-[14px] text-fg2 leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
        <figure className="m-0">
          <div
            role="img"
            aria-label={diagramSeo.alt}
            title={diagramSeo.title}
            className="overflow-hidden rounded-(--r-xl) border border-border bg-white p-[clamp(22px,2.6vw,32px)] shadow-sm"
          >
            <p className="mb-5 font-mono text-[11px] text-tangerine-600 uppercase tracking-[0.16em]">
              Request path
            </p>
            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {[
                {
                  k: "Views & templates",
                  v: "Thin handlers, HTMX where it fits",
                },
                {
                  k: "Service layer",
                  v: "Orchestration outside models and views",
                },
                {
                  k: "ORM + PostgreSQL",
                  v: "Query budgets, select_related, defer",
                },
                {
                  k: "Celery workers",
                  v: "Idempotent tasks outside the request",
                },
              ].map((row, i) => (
                <li
                  key={row.k}
                  className="rounded-(--r-md) border border-border bg-slate-50 px-4 py-3.5"
                >
                  <p className="mb-1 font-mono text-[11px] text-xo-indigo">
                    0{i + 1}
                  </p>
                  <p className="m-0 font-sans font-semibold text-[16px] text-fg1">
                    {row.k}
                  </p>
                  <p className="mt-1 mb-0 font-sans text-[13.5px] text-fg2">
                    {row.v}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </figure>
      </div>
    </LightSection>
  );
}
