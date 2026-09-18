const STATS = [
  { value: "40+", label: "AI systems shipped to production" },
  { value: "3.5×", label: "Median speed-up vs. in-house build" },
  { value: "99.9%", label: "Uptime across deployed models" },
] as const;

export function NwdProof() {
  return (
    <section className="border-border border-b bg-white px-8 py-8">
      <ul className="m-0 mx-auto flex max-w-[1180px] list-none flex-wrap items-center justify-center gap-x-10 gap-y-5 p-0 sm:justify-between">
        {STATS.map((stat) => (
          <li key={stat.label} className="flex min-w-0 items-baseline gap-3">
            <span className="font-extrabold font-sans text-[22px] text-xo-indigo tracking-tight">
              {stat.value}
            </span>
            <span className="font-sans text-[14px] text-fg2 leading-snug">
              {stat.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
