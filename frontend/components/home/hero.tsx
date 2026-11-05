"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const capabilities = ["Web Development", "SEO On-Page & Off-Page", "UI/UX Design", "Wordpress"];

const growthBars = [36, 48, 42, 61, 55, 72, 66, 88];

const RING_RADIUS = 20;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

/* Smoothly counts from 0 to `to` once, after `delay` ms. Respects reduced motion. */
function CountUp({ to, decimals = 0, prefix = "", delay = 0, duration = 1400 }: { to: number; decimals?: number; prefix?: string; delay?: number; duration?: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    let raf = 0;
    let start = 0;
    const timer = window.setTimeout(() => {
      const tick = (now: number) => {
        if (!start) start = now;
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 4); // easeOutQuart
        setValue(to * eased);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [to, delay, duration]);

  return (
    <>
      {prefix}
      {value.toFixed(decimals)}
    </>
  );
}

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  /* Mouse parallax: writes --px / --py (-1 to 1) on the visual container. */
  useEffect(() => {
    const el = visualRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const loop = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.setProperty("--px", cx.toFixed(3));
      el.style.setProperty("--py", cy.toFixed(3));
      if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0;
      }
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      tx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2)));
      ty = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height / 2)));
      kick();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      kick();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* Parallax helper: depth = px of travel at the edges. */
  const par = (depth: number) => ({
    transform: `translate3d(calc(var(--px, 0) * ${depth}px), calc(var(--py, 0) * ${depth}px), 0)`,
    willChange: "transform" as const,
  });

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <style>{`
        @keyframes tksRise {
          from { opacity: 0; transform: translate3d(0, 22px, 0); filter: blur(6px); }
          to   { opacity: 1; transform: translate3d(0, 0, 0);    filter: blur(0); }
        }
        @keyframes tksPop {
          from { opacity: 0; transform: translate3d(0, 16px, 0) scale(0.92); }
          to   { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes tksFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50%      { transform: translate3d(0, -9px, 0); }
        }
        @keyframes tksFloatSlow {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50%      { transform: translate3d(0, -12px, 0) rotate(4deg); }
        }
        @keyframes tksBlobA {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(-40px, 30px, 0) scale(1.08); }
        }
        @keyframes tksBlobB {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(50px, -30px, 0) scale(1.1); }
        }
        @keyframes tksPing {
          0%   { transform: scale(1);   opacity: 0.55; }
          80%, 100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes tksBar {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes tksRing {
          from { stroke-dashoffset: ${RING_CIRCUMFERENCE}; }
          to   { stroke-dashoffset: ${(RING_CIRCUMFERENCE * 0.02).toFixed(2)}; }
        }
        @keyframes tksFill {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes tksSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes tksSpinRev {
          to { transform: rotate(-360deg); }
        }
        @keyframes tksGridPan {
          from { background-position: 0 0; }
          to   { background-position: 48px 48px; }
        }
        @keyframes tksShimmer {
          0%   { transform: translateX(-120%) skewX(-18deg); }
          60%, 100% { transform: translateX(260%) skewX(-18deg); }
        }
        @keyframes tksCaret {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.2; }
        }

        .tks-rise   { opacity: 0; animation: tksRise 700ms cubic-bezier(0.22, 1, 0.36, 1) both; animation-delay: var(--d, 0ms); }
        .tks-pop    { opacity: 0; animation: tksPop 650ms cubic-bezier(0.34, 1.56, 0.64, 1) both; animation-delay: var(--d, 0ms); }
        .tks-float  { animation: tksFloat 6s ease-in-out infinite; animation-delay: var(--fd, 0s); }
        .tks-float-slow { animation: tksFloatSlow 9s ease-in-out infinite; animation-delay: var(--fd, 0s); }
        .tks-blob-a { animation: tksBlobA 16s ease-in-out infinite; }
        .tks-blob-b { animation: tksBlobB 20s ease-in-out infinite; }
        .tks-ping   { animation: tksPing 2.2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .tks-bar    { transform-origin: bottom; animation: tksBar 700ms cubic-bezier(0.22, 1, 0.36, 1) both; animation-delay: var(--d, 0ms); }
        .tks-ring   { stroke-dasharray: ${RING_CIRCUMFERENCE.toFixed(2)}; stroke-dashoffset: ${RING_CIRCUMFERENCE.toFixed(2)}; animation: tksRing 1500ms cubic-bezier(0.22, 1, 0.36, 1) 1000ms forwards; }
        .tks-fill   { transform-origin: left; animation: tksFill 1100ms cubic-bezier(0.22, 1, 0.36, 1) both; animation-delay: var(--d, 0ms); }
        .tks-orbit  { animation: tksSpin 60s linear infinite; }
        .tks-orbit-rev { animation: tksSpinRev 90s linear infinite; }
        .tks-grid-pan { animation: tksGridPan 8s linear infinite; }
        .tks-caret  { animation: tksCaret 1.2s ease-in-out infinite; }
        .tks-cta:hover .tks-shimmer { animation: tksShimmer 900ms ease-out; }

        @media (prefers-reduced-motion: reduce) {
          .tks-rise, .tks-pop, .tks-float, .tks-float-slow, .tks-blob-a, .tks-blob-b,
          .tks-ping, .tks-bar, .tks-fill, .tks-orbit, .tks-orbit-rev, .tks-grid-pan, .tks-caret {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .tks-ring { animation: none !important; stroke-dashoffset: ${(RING_CIRCUMFERENCE * 0.02).toFixed(2)}; }
          .tks-cta:hover .tks-shimmer { animation: none !important; }
        }
      `}</style>

      {/* Background: drifting blobs + slowly panning grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="tks-blob-a absolute -right-40 -top-48 size-[34rem] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="tks-blob-b absolute -bottom-64 left-[38%] size-[32rem] rounded-full bg-sky-50 blur-3xl" />
        <div className="tks-grid-pan absolute inset-0 opacity-[0.28] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_right,black,transparent_74%)]" />
      </div>

      <div className="mx-auto grid min-h-[660px] w-full max-w-[1280px] items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:min-h-[720px] lg:grid-cols-[1fr_0.96fr] lg:gap-10 lg:px-10 lg:py-28 xl:px-12">
        {/* ---------- Left: copy (staggered entrance) ---------- */}
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <div
            style={{ ["--d" as string]: "0ms" }}
            className="tks-rise mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-2 text-xs font-semibold tracking-[0.04em] text-blue-700 sm:text-sm"
          >
            <span aria-hidden="true" className="relative flex size-2">
              <span className="tks-ping absolute inline-flex size-full rounded-full bg-blue-400" />
              <span className="relative inline-flex size-2 rounded-full bg-blue-600" />
            </span>
            Digital Solutions for Business Growth
          </div>

          <h1 className="text-balance text-[2.65rem] font-semibold leading-[1.08] tracking-[-0.045em] text-slate-900 sm:text-5xl lg:text-[3.55rem] xl:text-[4rem]">
            <span style={{ ["--d" as string]: "120ms" }} className="tks-rise inline-block">We Build Digital</span>{" "}
            <span style={{ ["--d" as string]: "220ms" }} className="tks-rise inline-block">Experiences That</span>{" "}
            <span style={{ ["--d" as string]: "320ms" }} className="tks-rise inline-block">Help Businesses</span>{" "}
            <span style={{ ["--d" as string]: "440ms" }} className="tks-rise inline-block text-blue-600">Grow.</span>
          </h1>

          <p
            style={{ ["--d" as string]: "560ms" }}
            className="tks-rise mx-auto mt-6 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0"
          >
            We create high-performance websites, digital experiences, and growth-focused solutions that help businesses build a stronger online presence.
          </p>

          <div style={{ ["--d" as string]: "680ms" }} className="tks-rise mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/contact#quote"
              className="tks-cta group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-md shadow-blue-600/15 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span aria-hidden="true" className="tks-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <span className="relative">Get a Quote</span>
              <span aria-hidden="true" className="relative transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none">→</span>
            </Link>
            <Link
              href="/work"
              className="group inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-700 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
            >
              Explore Our Work
            </Link>
          </div>

          <ul aria-label="Core capabilities" className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600 lg:justify-start">
            {capabilities.map((capability, i) => (
              <li
                key={capability}
                style={{ ["--d" as string]: `${800 + i * 90}ms` }}
                className="tks-rise inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-blue-700"
              >
                <span aria-hidden="true" className="size-1.5 rounded-full bg-blue-600" />
                {capability}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Right: animated visual with parallax ---------- */}
        <div ref={visualRef} className="relative mx-auto w-full max-w-[590px]">
          <div style={{ ["--d" as string]: "150ms" }} className="tks-pop relative">
            <div aria-hidden="true" className="absolute -inset-7 rounded-[2.5rem] bg-gradient-to-br from-blue-100/70 via-white/30 to-sky-100/70 blur-2xl" />

            <div aria-hidden="true" className="relative aspect-[1.08/1] min-h-[370px] sm:aspect-[1.16/1] sm:min-h-[430px]">
              {/* backdrop panel */}
              <div style={par(-6)} className="absolute inset-x-7 bottom-5 top-5">
                <div className="size-full rounded-[2rem] border border-blue-100/80 bg-gradient-to-br from-blue-50/90 via-white to-sky-50/80 shadow-[0_24px_70px_-38px_rgba(37,99,235,0.42)]" />
              </div>

              {/* decorative floaters */}
              <div style={par(14)} className="absolute left-[11%] top-[8%]">
                <div style={{ ["--fd" as string]: "0s" }} className="tks-float-slow size-16 rounded-2xl border border-white/90 bg-white/70 shadow-lg shadow-blue-900/5 backdrop-blur-sm sm:size-20" />
              </div>
              <div style={par(20)} className="absolute right-[9%] top-[15%]">
                <div style={{ ["--fd" as string]: "1.2s" }} className="tks-float size-10 rounded-full border border-blue-100 bg-blue-50/80 sm:size-14" />
              </div>
              <div style={par(10)} className="absolute bottom-[12%] left-[5%]">
                <div style={{ ["--fd" as string]: "2s" }} className="tks-float size-11 rounded-full bg-gradient-to-br from-blue-200/70 to-sky-100/20 blur-[1px] sm:size-16" />
              </div>

              {/* main browser card */}
              <div style={par(8)} className="absolute left-[8%] top-[15%] w-[84%] sm:top-[13%]">
                <div style={{ ["--d" as string]: "350ms" }} className="tks-pop">
                  <div style={{ ["--fd" as string]: "0.4s" }} className="tks-float">
                    <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_28px_65px_-32px_rgba(15,23,42,0.32)] transition-shadow duration-300 ease-out hover:shadow-[0_34px_72px_-32px_rgba(15,23,42,0.4)] motion-reduce:transition-none">
                      <div className="flex h-11 items-center gap-1.5 border-b border-slate-100 bg-slate-50/90 px-4">
                        <span className="size-2 rounded-full bg-slate-300" />
                        <span className="size-2 rounded-full bg-slate-300" />
                        <span className="size-2 rounded-full bg-blue-300" />
                        <div className="mx-auto flex h-5 w-[44%] items-center justify-center gap-1 rounded-md border border-slate-200/80 bg-white text-[8px] font-medium tracking-wide text-slate-400">
                          YOUR DIGITAL PRESENCE
                          <span className="tks-caret inline-block h-2 w-px bg-blue-500" />
                        </div>
                      </div>
                      <div className="grid grid-cols-[1.08fr_0.92fr] gap-4 p-4 sm:gap-6 sm:p-6">
                        <div className="flex flex-col justify-center">
                          <div style={{ ["--d" as string]: "600ms" }} className="tks-fill mb-3 h-2 w-16 rounded-full bg-blue-100" />
                          <div style={{ ["--d" as string]: "680ms" }} className="tks-fill h-3 w-[92%] rounded-full bg-slate-800" />
                          <div style={{ ["--d" as string]: "760ms" }} className="tks-fill mt-2 h-3 w-[70%] rounded-full bg-slate-800" />
                          <div className="mt-4 space-y-2">
                            <div style={{ ["--d" as string]: "840ms" }} className="tks-fill h-1.5 w-full rounded-full bg-slate-100" />
                            <div style={{ ["--d" as string]: "900ms" }} className="tks-fill h-1.5 w-[88%] rounded-full bg-slate-100" />
                          </div>
                          <div style={{ ["--d" as string]: "980ms" }} className="tks-pop mt-5 h-7 w-24 rounded-lg bg-blue-600 shadow-sm shadow-blue-600/20" />
                        </div>
                        <div className="relative min-h-32 overflow-hidden rounded-xl border border-blue-100/80 bg-gradient-to-br from-blue-50 via-sky-100/80 to-blue-200/70 sm:min-h-40">
                          <div className="tks-orbit absolute -right-5 -top-6 size-24 rounded-full border-[12px] border-white/50 border-t-white/20 sm:size-32" />
                          <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/80 bg-white/75 p-2 shadow-sm backdrop-blur-sm sm:bottom-4 sm:left-4 sm:right-4 sm:p-3">
                            <div className="flex items-end gap-1.5">
                              {growthBars.map((height, index) => (
                                <span
                                  key={index}
                                  className="tks-bar flex-1 rounded-t-sm bg-blue-600/80"
                                  style={{ height: `${height * 0.32}px`, ["--d" as string]: `${700 + index * 80}ms` }}
                                />
                              ))}
                            </div>
                            <div className="mt-2 h-px w-full bg-slate-200" />
                          </div>
                          <div className="absolute left-3 top-3 size-6 rounded-lg border border-white/80 bg-white/70 sm:left-4 sm:top-4 sm:size-8" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3 sm:px-6">
                        <div className="flex gap-1.5">
                          <span className="size-1.5 rounded-full bg-blue-600" />
                          <span className="size-1.5 rounded-full bg-slate-200" />
                          <span className="size-1.5 rounded-full bg-slate-200" />
                        </div>
                        <div className="h-1.5 w-20 rounded-full bg-slate-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* growth chip */}
              <div style={par(22)} className="absolute right-[2%] top-[8%] sm:right-0 sm:top-[5%]">
                <div style={{ ["--d" as string]: "900ms" }} className="tks-pop">
                  <div style={{ ["--fd" as string]: "0.8s" }} className="tks-float">
                    <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-lg shadow-slate-900/8 transition-shadow duration-300 hover:shadow-xl motion-reduce:transition-none sm:p-4">
                      <div className="flex items-center gap-2.5">
                        <span className="flex size-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-700">↑</span>
                        <div>
                          <div className="text-[10px] font-medium text-slate-500">Online growth</div>
                          <div className="mt-0.5 text-sm font-semibold tracking-tight text-slate-900 tabular-nums">
                            <CountUp to={32.8} decimals={1} prefix="+" delay={1000} />%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* performance card */}
              <div style={par(18)} className="absolute bottom-[10%] right-[4%] w-[46%] sm:bottom-[9%] sm:right-[2%] sm:w-[43%]">
                <div style={{ ["--d" as string]: "1050ms" }} className="tks-pop">
                  <div style={{ ["--fd" as string]: "1.6s" }} className="tks-float">
                    <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xl shadow-slate-900/10 transition-shadow duration-300 hover:shadow-2xl motion-reduce:transition-none sm:p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-medium text-slate-500 sm:text-xs">Performance</span>
                        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-700 sm:text-[10px]">OPTIMIZED</span>
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="relative flex size-11 shrink-0 items-center justify-center sm:size-12">
                          <svg viewBox="0 0 48 48" className="absolute inset-0 size-full -rotate-90">
                            <circle cx="24" cy="24" r={RING_RADIUS} fill="none" strokeWidth="3.5" className="stroke-blue-100" />
                            <circle cx="24" cy="24" r={RING_RADIUS} fill="none" strokeWidth="3.5" strokeLinecap="round" className="tks-ring stroke-blue-600" />
                          </svg>
                          <span className="text-xs font-bold text-slate-800 tabular-nums">
                            <CountUp to={98} delay={1000} duration={1500} />
                          </span>
                        </div>
                        <div className="flex-1 space-y-1.5">
                          <div className="h-1.5 w-full rounded-full bg-slate-100">
                            <div style={{ ["--d" as string]: "1300ms" }} className="tks-fill h-full w-[88%] rounded-full bg-blue-500" />
                          </div>
                          <div className="h-1.5 w-[82%] rounded-full bg-slate-100">
                            <div style={{ ["--d" as string]: "1450ms" }} className="tks-fill h-full w-[72%] rounded-full bg-sky-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* built to scale chip */}
              <div style={par(24)} className="absolute bottom-[13%] left-[4%] sm:bottom-[12%] sm:left-[1%]">
                <div style={{ ["--d" as string]: "1200ms" }} className="tks-pop">
                  <div style={{ ["--fd" as string]: "2.4s" }} className="tks-float">
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-lg shadow-slate-900/8 transition-shadow duration-300 hover:shadow-xl motion-reduce:transition-none sm:gap-2.5 sm:px-3.5">
                      <span className="flex size-7 items-center justify-center rounded-lg bg-sky-50">
                        <span className="relative flex size-2">
                          <span className="tks-ping absolute inline-flex size-full rounded-full bg-blue-400" />
                          <span className="relative inline-flex size-2 rounded-full bg-blue-600" />
                        </span>
                      </span>
                      <span className="text-[10px] font-semibold text-slate-700 sm:text-xs">Built to scale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* slowly rotating orbit rings */}
            <div className="tks-orbit absolute left-1/2 top-1/2 -z-10 size-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/70" />
            <div className="tks-orbit-rev absolute left-1/2 top-1/2 -z-10 size-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-100/60" />
          </div>
        </div>
      </div>
    </section>
  );
}