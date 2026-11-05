import Link from "next/link";

const focusAreas = [
  { label: "Web", detail: "Performance-first", mark: "01" },
  { label: "SEO", detail: "Built for discovery", mark: "02" },
  { label: "Design", detail: "Made for people", mark: "03" },
];

export default function About() {
  return (
    <section aria-labelledby="about-heading" className="relative isolate overflow-hidden border-t border-slate-100 bg-white">
      <style>{`
        @keyframes tksAboutRise {
          from { opacity: 0; transform: translate3d(0, 18px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes tksAboutVisual {
          from { opacity: 0; transform: translate3d(0, 14px, 0) scale(0.985); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes tksAboutFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -5px, 0); }
        }
        @keyframes tksAboutPulse {
          0%, 100% { opacity: 0.55; transform: scale(0.92); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @supports (animation-timeline: view()) {
          .tks-about-enter {
            animation-timeline: view();
            animation-range: entry 0% entry 35%;
            animation-delay: 0ms !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .tks-about-enter, .tks-about-float, .tks-about-pulse { animation: none !important; }
        }
      `}</style>

      <div aria-hidden="true" className="pointer-events-none absolute -left-48 top-1/2 -z-10 size-[28rem] -translate-y-1/2 rounded-full bg-blue-50/80 blur-3xl" />

      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-10 lg:py-28 xl:px-12">
        <div className="tks-about-enter max-w-xl text-center opacity-0 motion-safe:animate-[tksAboutRise_520ms_ease-out_both] motion-reduce:animate-none motion-reduce:opacity-100 lg:text-left">
          <p className="mb-5 inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.16em] text-blue-700 sm:text-sm">
            <span aria-hidden="true" className="h-px w-7 bg-blue-600" />
            ABOUT TKS ENTERPRISES
          </p>
          <h2 id="about-heading" className="text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-[2.8rem]">
            Building Digital Solutions With Purpose.
          </h2>
          <p className="mt-6 text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            TKS Enterprises helps businesses build a stronger digital presence through modern web development, SEO, user-focused design, and reliable digital solutions.
          </p>
          <p className="mt-4 text-pretty text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            We combine technology, creativity, and business thinking to create digital experiences that are not only visually polished, but also fast, usable, search-friendly, and built with growth in mind.
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
          >
            Learn More About Us
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none">→</span>
          </Link>
        </div>

        <div role="img" aria-label="TKS digital strategy visual connecting web development, SEO, and design into one growth-focused presence." className="tks-about-enter relative mx-auto w-full max-w-[590px] opacity-0 motion-safe:animate-[tksAboutVisual_800ms_ease-out_120ms_both] motion-reduce:animate-none motion-reduce:opacity-100">
          <div aria-hidden="true" className="absolute inset-[8%] rounded-[2.5rem] bg-gradient-to-br from-blue-100/70 via-white/40 to-sky-100/70 blur-2xl" />
          <div aria-hidden="true" className="absolute inset-[2%] rounded-[2rem] border border-blue-100/70 bg-slate-50/50" />
          <div aria-hidden="true" className="absolute left-[13%] top-[12%] size-12 rounded-2xl border border-white bg-white/80 shadow-sm shadow-blue-900/5 sm:size-16" />
          <div aria-hidden="true" className="absolute bottom-[12%] right-[9%] size-10 rounded-full border border-blue-100 bg-blue-50/80 sm:size-14" />

          <div className="relative mx-auto my-8 w-[86%] rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.32)] sm:my-10 sm:rounded-[1.75rem] sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="size-2 rounded-full bg-blue-600" />
                <span className="text-[10px] font-semibold tracking-[0.14em] text-slate-500 sm:text-xs">TKS DIGITAL STUDIO</span>
              </div>
              <span className="rounded-full border border-slate-200 px-2.5 py-1 text-[9px] font-medium text-slate-500 sm:text-[10px]">PURPOSE → PROGRESS</span>
            </div>

            <div className="relative py-8 sm:py-10">
              <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100" />
              <div className="relative mx-auto flex w-fit items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-md shadow-blue-900/5 sm:gap-4 sm:px-5 sm:py-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold tracking-tight text-white shadow-sm shadow-blue-600/20 sm:size-12">TKS</span>
                <span className="text-left">
                  <span className="block text-sm font-semibold tracking-tight text-slate-900 sm:text-base">Digital presence</span>
                  <span className="mt-0.5 block text-[10px] text-slate-500 sm:text-xs">One clear direction for growth</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {focusAreas.map((area, index) => (
                <div
                  key={area.label}
                  className="tks-about-enter rounded-xl border border-slate-200 bg-slate-50/70 p-3 opacity-0 motion-safe:animate-[tksAboutRise_480ms_ease-out_both] motion-reduce:animate-none motion-reduce:opacity-100 sm:p-4"
                  style={{ animationDelay: `${260 + index * 100}ms` }}
                >
                  <span className="flex items-center justify-between">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-blue-600" />
                    <span className="font-mono text-[9px] tracking-wide text-slate-400">{area.mark}</span>
                  </span>
                  <span className="mt-3 block text-xs font-semibold text-slate-800 sm:text-sm">{area.label}</span>
                  <span className="mt-1 block text-[9px] leading-4 text-slate-500 sm:text-[10px]">{area.detail}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-3 sm:px-4">
              <span className="text-[10px] font-medium text-slate-600 sm:text-xs">Technology + creativity + strategy</span>
              <span className="flex items-center gap-2 text-[10px] font-semibold text-blue-700 sm:text-xs">
                <span aria-hidden="true" className="tks-about-pulse size-1.5 rounded-full bg-blue-600 motion-safe:animate-[tksAboutPulse_2.8s_ease-in-out_infinite] motion-reduce:animate-none" />
                Built for growth
              </span>
            </div>
          </div>

          <div className="tks-about-float absolute -right-1 top-[10%] rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-md shadow-slate-900/5 motion-safe:animate-[tksAboutFloat_5.5s_ease-in-out_infinite] motion-reduce:animate-none sm:-right-2 sm:top-[8%] sm:px-3.5">
            <span className="flex items-center gap-2 text-[10px] font-semibold text-slate-700 sm:text-xs">
              <span aria-hidden="true" className="flex size-6 items-center justify-center rounded-lg bg-blue-50 text-blue-600">↗</span>
              Strategy-led
            </span>
          </div>
          <div className="tks-about-float absolute -left-1 bottom-[11%] rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-md shadow-slate-900/5 motion-safe:animate-[tksAboutFloat_6.2s_ease-in-out_500ms_infinite] motion-reduce:animate-none sm:-left-2 sm:bottom-[9%] sm:px-3.5">
            <span className="flex items-center gap-2 text-[10px] font-semibold text-slate-700 sm:text-xs">
              <span aria-hidden="true" className="flex size-6 items-center justify-center rounded-lg bg-slate-50 text-slate-600">✓</span>
              Made to perform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
