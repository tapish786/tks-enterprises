import type { CSSProperties } from "react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals, challenges, and project requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the strategy, structure, technology, priorities, and direction for the project.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and develop the solution with usability, performance, scalability, and quality in mind.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test, optimize, refine, and prepare the final solution for a smooth launch.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "We continue improving the digital experience through maintenance, optimization, and future enhancements.",
  },
];

export default function Process() {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <style>{`
        @keyframes tks-process-reveal {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tks-process-line-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes tks-process-line-y {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        .tks-process-enter {
          animation: tks-process-reveal 420ms ease-out both;
          animation-delay: var(--process-delay, 0ms);
        }
        .tks-process-line-x {
          transform: scaleX(0);
          transform-origin: left center;
          animation: tks-process-line-x 900ms 180ms ease-out forwards;
        }
        .tks-process-line-y {
          transform: scaleY(0);
          transform-origin: top center;
          animation: tks-process-line-y 700ms 180ms ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .tks-process-enter,
          .tks-process-line-x,
          .tks-process-line-y {
            animation: none !important;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-12 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="tks-process-enter text-xs font-semibold tracking-[0.18em] text-[#2563EB] sm:text-sm">
            HOW WE WORK
          </p>
          <h2
            id="process-heading"
            className="tks-process-enter mt-4 text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl"
            style={{ "--process-delay": "70ms" } as CSSProperties}
          >
            From Idea to Launch, With a Clear Process.
          </h2>
          <p
            className="tks-process-enter mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8"
            style={{ "--process-delay": "130ms" } as CSSProperties}
          >
            We follow a structured approach that keeps every project focused,
            transparent, and aligned with your business goals—from the first
            conversation to ongoing growth.
          </p>
        </div>

        <ol
          aria-label="Our five-step project process"
          className="relative mt-14 grid grid-cols-1 gap-0 md:mt-20 md:grid-cols-5 md:gap-5"
        >
          <li
            aria-hidden="true"
            className="pointer-events-none absolute left-[15px] top-4 bottom-4 w-px bg-[#E2E8F0] md:hidden"
          >
            <span className="tks-process-line-y absolute inset-0 block bg-[#2563EB]" />
          </li>
          <li
            aria-hidden="true"
            className="pointer-events-none absolute left-[10%] right-[10%] top-4 hidden h-px bg-[#E2E8F0] md:block"
          >
            <span className="tks-process-line-x absolute inset-0 block bg-[#2563EB]" />
          </li>

          {steps.map((step, index) => (
            <li
              key={step.number}
              className="group tks-process-enter relative grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 pb-9 last:pb-0 md:flex md:flex-col md:items-center md:px-1 md:pb-0 md:text-center"
              style={
                { "--process-delay": `${180 + index * 90}ms` } as CSSProperties
              }
            >
              <span
                aria-hidden="true"
                className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#BFDBFE] bg-white shadow-[0_0_0_5px_#fff] transition duration-200 ease-out group-hover:border-[#2563EB] md:mb-6"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]" />
              </span>
              <div className="pt-0.5 md:pt-0">
                <p className="text-xs font-semibold tracking-[0.14em] text-[#2563EB]">
                  STEP {step.number}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#0F172A] transition-colors duration-200 ease-out hover:text-[#2563EB] sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B] sm:text-[15px]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
