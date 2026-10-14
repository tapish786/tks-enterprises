const differentiators = [
  {
    title: "Business-Focused Solutions",
    description:
      "Every solution starts with your business goals, audience, and requirements—not a one-size-fits-all template.",
  },
  {
    title: "Performance First",
    description:
      "We build with responsive design, clean implementation, and performance in mind so your digital presence feels fast and reliable.",
  },
  {
    title: "SEO-Ready Foundation",
    description:
      "We consider structure, semantics, performance, and search visibility from the beginning instead of treating SEO as an afterthought.",
  },
  {
    title: "Built for Long-Term Growth",
    description:
      "We create maintainable digital solutions that can evolve as your business, content, and requirements grow.",
  },
];

const stages = [
  { name: "Strategy", note: "Understand the goal" },
  { name: "Build", note: "Create with purpose" },
  { name: "Optimize", note: "Refine what matters" },
  { name: "Grow", note: "Evolve over time" },
];

export default function WhyTKS() {
  return (
    <section aria-labelledby="why-tks-heading" className="relative isolate overflow-hidden border-t border-slate-100 bg-white">
      <style>{`
        @keyframes tksWhyRise {
          from { opacity: 0; transform: translate3d(0, 14px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes tksWhyDraw {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes tksWhySignal {
          0% { opacity: 0.45; transform: scale(0.85); }
          70% { opacity: 1; transform: scale(1.12); }
          100% { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .tks-why-enter, .tks-why-line, .tks-why-signal { animation: none !important; }
        }
      `}</style>

      <div aria-hidden="true" className="pointer-events-none absolute -right-52 top-0 -z-10 size-[34rem] rounded-full bg-blue-50/70 blur-3xl" />

      <div className="mx-auto grid w-full max-w-[1280px] gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-10 lg:py-28 xl:px-12">
        <div>
          <header className="tks-why-enter opacity-0 motion-safe:animate-[tksWhyRise_500ms_ease-out_both] motion-reduce:animate-none motion-reduce:opacity-100">
            <p className="mb-5 inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.16em] text-blue-700 sm:text-sm">
              <span aria-hidden="true" className="h-px w-7 bg-blue-600" />
              WHY CHOOSE TKS
            </p>
            <h2 id="why-tks-heading" className="max-w-xl text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-[2.8rem]">
              Built Around Your Business, Not Just Your Website.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              We combine thoughtful design, modern technology, performance, and search-focused foundations to build digital solutions that are made to support real business goals.
            </p>
          </header>

          <div role="img" aria-label="TKS approach connecting Strategy, Build, Optimize, and Grow." className="tks-why-enter relative mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/80 p-5 opacity-0 shadow-sm motion-safe:animate-[tksWhyRise_700ms_ease-out_100ms_both] motion-reduce:animate-none motion-reduce:opacity-100 sm:mt-12 sm:p-7">
            <div aria-hidden="true" className="absolute -right-10 -top-10 size-40 rounded-full border border-blue-100/80" />
            <div aria-hidden="true" className="absolute -right-5 -top-5 size-28 rounded-full border border-dashed border-blue-100/70" />

            <div className="relative flex items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-xs font-bold tracking-wide text-white shadow-sm shadow-blue-600/15">TKS</span>
                <span>
                  <span className="block text-xs font-semibold text-slate-900 sm:text-sm">A considered approach</span>
                  <span className="mt-0.5 block text-[10px] text-slate-500 sm:text-xs">From the first conversation onward</span>
                </span>
              </div>
              <span className="hidden rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-[10px] font-medium text-blue-700 sm:inline-flex">Made to move forward</span>
            </div>

            <div className="relative mt-5">
              <span aria-hidden="true" className="absolute bottom-7 left-[15px] top-7 w-px origin-top bg-blue-200 motion-safe:scale-y-0 motion-safe:animate-[tksWhyDraw_1000ms_ease-out_250ms_both]" />
              <ol className="relative space-y-1">
                {stages.map((stage, index) => (
                  <li key={stage.name} className="tks-why-enter opacity-0 motion-safe:animate-[tksWhyRise_420ms_ease-out_both] motion-reduce:animate-none motion-reduce:opacity-100" style={{ animationDelay: `${300 + index * 100}ms` }}>
                    <div className="group/stage flex items-center gap-3 rounded-xl px-2.5 py-2 transition-colors duration-200 hover:bg-white/80 motion-reduce:transition-none sm:gap-4 sm:px-3 sm:py-2.5">
                      <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white font-mono text-[9px] font-semibold text-blue-700 transition-all duration-200 group-hover/stage:border-blue-600 group-hover/stage:bg-blue-600 group-hover/stage:text-white sm:size-8">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold text-slate-900 transition-colors duration-200 group-hover/stage:text-blue-700 sm:text-sm">{stage.name}</span>
                        <span className="mt-0.5 block text-[10px] text-slate-500 sm:text-xs">{stage.note}</span>
                      </span>
                      {index < stages.length - 1 && <span aria-hidden="true" className="text-xs text-slate-300 transition-transform duration-200 group-hover/stage:translate-x-0.5 group-hover/stage:text-blue-600 motion-reduce:transition-none">↓</span>}
                      {index === stages.length - 1 && <span aria-hidden="true" className="tks-why-signal size-1.5 rounded-full bg-blue-600 motion-safe:animate-[tksWhySignal_700ms_ease-out_1000ms_both] motion-reduce:animate-none" />}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <ol aria-label="Reasons to choose TKS Enterprises" className="divide-y divide-slate-200/90">
          {differentiators.map((item, index) => (
            <li key={item.title} className="tks-why-enter opacity-0 motion-safe:animate-[tksWhyRise_500ms_ease-out_both] motion-reduce:animate-none motion-reduce:opacity-100" style={{ animationDelay: `${140 + index * 100}ms` }}>
              <article tabIndex={0} className="group/point -mx-3 flex gap-4 rounded-xl px-3 py-5 outline-none transition-colors duration-200 hover:bg-blue-50/50 focus-visible:bg-blue-50/50 motion-reduce:transition-none sm:gap-5 sm:py-6">
                <span className="mt-0.5 w-9 shrink-0 font-mono text-xs font-medium tracking-wide text-blue-600 transition-transform duration-200 group-hover/point:-translate-x-0.5 group-focus-visible/point:-translate-x-0.5 motion-reduce:transition-none sm:w-10 sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-semibold tracking-tight text-slate-900 transition-colors duration-200 group-hover/point:text-blue-700 group-focus-visible/point:text-blue-700 sm:text-lg">{item.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">{item.description}</span>
                </span>
                <span aria-hidden="true" className="mt-1 text-slate-300 transition-all duration-200 group-hover/point:translate-x-0.5 group-hover/point:text-blue-600 group-focus-visible/point:translate-x-0.5 group-focus-visible/point:text-blue-600 motion-reduce:transition-none">→</span>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
