const capabilities = [
  {
    title: "Web Development",
    description:
      "Fast, scalable, and modern websites designed around your business goals.",
    delay: 80,
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        fill="none"
        className="size-6"
      >
        <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3.5 9h17M7 6.75h.01M10 6.75h.01M8 13l-2 2 2 2m8-4 2 2-2 2m-3-5.5-2 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "SEO & Growth",
    description:
      "Search-focused strategies that help businesses improve visibility and attract the right audience.",
    delay: 160,
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        fill="none"
        className="size-6"
      >
        <circle cx="10.75" cy="10.75" r="6.25" stroke="currentColor" strokeWidth="1.7" />
        <path d="m15.5 15.5 4 4M8 13v-2m2.75 2V8.5m2.75 4.5V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, intuitive experiences designed to make websites easier and more enjoyable to use.",
    delay: 240,
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        fill="none"
        className="size-6"
      >
        <path d="M5 4.5h14A1.5 1.5 0 0 1 20.5 6v12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 18V6A1.5 1.5 0 0 1 5 4.5Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3.5 9h17M7 6.75h.01M10 6.75h.01m-.5 6.25 2.25 5 1.25-2.25 2.5-1.25-5-2.25Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TrustSection() {
  return (
    <section aria-labelledby="trust-heading" className="relative overflow-hidden border-t border-slate-100 bg-white">
      <style>{`
        @keyframes tksTrustRise {
          from { opacity: 0; transform: translate3d(0, 16px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .tks-trust-enter { animation: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-blue-700 sm:text-sm">
            <span aria-hidden="true" className="h-px w-6 bg-blue-600" />
            BUILDING DIGITAL PRESENCE THAT PERFORMS
            <span aria-hidden="true" className="h-px w-6 bg-blue-600" />
          </p>
          <h2 id="trust-heading" className="text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            Digital Solutions Built Around Your Business Goals
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            From high-performance websites to SEO and user-focused design, we combine technology, creativity, and strategy to help businesses build a stronger digital presence.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {capabilities.map((capability) => (
            <li
              key={capability.title}
              className="tks-trust-enter opacity-0 motion-safe:animate-[tksTrustRise_450ms_ease-out_both] motion-reduce:opacity-100"
              style={{ animationDelay: `${capability.delay}ms` }}
            >
              <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-900/5 motion-reduce:transform-none motion-reduce:transition-none sm:p-7">
                <div className="flex size-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-colors duration-200 group-hover:border-blue-200 group-hover:bg-blue-100 motion-reduce:transition-none">
                  {capability.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                  {capability.title}
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
                  {capability.description}
                </p>
                <div aria-hidden="true" className="mt-6 h-px w-10 bg-blue-600/70 transition-[width] duration-200 ease-out group-hover:w-14 motion-reduce:transition-none" />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
