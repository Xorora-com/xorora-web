export function BlogHeader() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-surface pt-[72px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(70%_80%_at_50%_0%,rgba(70,76,159,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-[1180px] px-8 pt-[clamp(72px,9vw,112px)] pb-[clamp(28px,4vw,40px)]">
        <p className="mb-5 font-mono text-[12px] text-tangerine-600 uppercase tracking-[0.2em]">
          // Engineering · Blog
        </p>
        <h1 className="mb-5 max-w-[920px] text-balance font-extrabold font-sans text-[clamp(34px,5vw,56px)] text-fg1 leading-[1.05] tracking-[-0.03em]">
          Engineering Blog | Guides, Comparisons &amp; Production AI
        </h1>
        <p className="m-0 max-w-[640px] font-sans text-[clamp(17px,2vw,20px)] text-fg2 leading-relaxed">
          Field notes on shipping production software — comparisons, practices,
          and lessons from the systems we build.
        </p>
      </div>
    </section>
  );
}
