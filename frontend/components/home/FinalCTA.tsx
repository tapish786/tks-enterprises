import Link from "next/link";
import type { CSSProperties } from "react";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <style>{`
        @keyframes tks-cta-rise {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tks-cta-glow-drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(8px, -6px, 0) scale(1.04); }
        }
        .tks-cta-enter {
          animation: tks-cta-rise 420ms ease-out both;
          animation-delay: var(--cta-delay, 0ms);
        }
        .tks-cta-glow {
          animation: tks-cta-glow-drift 10s ease-in-out infinite;
        }
        @supports (animation-timeline: view()) {
          .tks-cta-enter {
            animation-timeline: view();
            animation-range: entry 0% entry 45%;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .tks-cta-enter,
          .tks-cta-glow {
            animation: none !important;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="tks-cta-glow absolute left-1/2 top-1/2 h-[28rem] w-[42rem] max-w-[110vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.10),rgba(219,234,254,0.06)_42%,transparent_72%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />
      </div>

      <div className="mx-auto flex max-w-[1280px] justify-center">
        <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]/80 px-6 py-12 text-center shadow-[0_20px_60px_-48px_rgba(15,23,42,0.3)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(219,234,254,0.7),transparent_55%)]"
          />
          <div className="relative mx-auto max-w-3xl">
            <p
              className="tks-cta-enter text-xs font-semibold tracking-[0.18em] text-[#2563EB] sm:text-sm"
              style={{ "--cta-delay": "0ms" } as CSSProperties}
            >
              LET&apos;S BUILD SOMETHING GREAT
            </p>
            <h2
              id="final-cta-heading"
              className="tks-cta-enter mt-4 text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl"
              style={{ "--cta-delay": "70ms" } as CSSProperties}
            >
              Ready to Build a Better Digital Presence?
            </h2>
            <p
              className="tks-cta-enter mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8"
              style={{ "--cta-delay": "140ms" } as CSSProperties}
            >
              Tell us about your business, goals, or project. We&apos;ll help you
              find the right digital solution to move forward.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">
              <Link
                href="/contact#quote"
                className="tks-cta-enter group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-10px_rgba(37,99,235,0.8)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_12px_24px_-10px_rgba(37,99,235,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                style={{ "--cta-delay": "210ms" } as CSSProperties}
              >
                Get a Quote
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="tks-cta-enter inline-flex min-h-12 items-center justify-center rounded-xl border border-[#CBD5E1] bg-white/80 px-6 py-3 text-sm font-semibold text-[#0F172A] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                style={{ "--cta-delay": "280ms" } as CSSProperties}
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
