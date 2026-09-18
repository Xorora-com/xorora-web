import { Cpu, FileCode2, Layers, MemoryStick } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

const DECISIONS = [
  {
    icon: Cpu,
    title: "Keeping the event loop free",
    body: "Node handles thousands of concurrent connections on one thread, which works until something blocks. A synchronous JSON parse over a large payload, an unbounded loop, a regex on user input, and every request on that process stalls. CPU-bound work goes to worker threads or off the box entirely. We set an event loop lag budget and monitor against it from the first release.",
  },
  {
    icon: FileCode2,
    title: "Where the types live",
    body: "Shared type definitions between API and client, in a monorepo or a published package. The contract is enforced by the compiler rather than by a document nobody reads. This is the difference between TypeScript as a formality and TypeScript as an architecture.",
  },
  {
    icon: Layers,
    title: "The process model",
    body: "Node scales by running more processes, not more threads. That means designing stateless from the start: sessions in Redis, no in-memory caches that diverge between instances, and WebSocket state that survives a connection landing on a different server.",
  },
  {
    icon: MemoryStick,
    title: "Memory over time",
    body: "Node processes run for weeks. A listener added and never removed, a cache with no eviction, and the heap climbs until the container restarts at three in the morning. Heap monitoring and load testing that runs long enough to expose it, not just long enough to hit peak.",
  },
] as const;

const diagramSeo = imageAltTitle({
  primary:
    "Node.js architecture with event loop, worker threads and Redis pub/sub scaling",
  secondary: "Event loop, worker threads, Redis pub/sub",
  context: "event loop, worker threads and Redis pub/sub scaling",
});

export function NwdArchitecture() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="How we design"
        title="Node.js web application architecture"
        sub="Node.js fails differently from other backends. It rarely falls over. It gets slow, everywhere at once, for reasons that don't show up in a single slow query. Four decisions we make deliberately."
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
              Runtime path
            </p>
            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {[
                {
                  k: "Event loop",
                  v: "I/O stays non-blocking; lag is budgeted",
                },
                {
                  k: "Worker threads",
                  v: "CPU-bound work leaves the main process",
                },
                { k: "Redis pub/sub", v: "Shared state across Node processes" },
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
