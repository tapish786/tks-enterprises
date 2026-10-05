"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type ArtKind = "web" | "search" | "design" | "graphic" | "wordpress" | "maintenance";

type Service = {
  title: string;
  short: string;
  description: string;
  href: string;
  icon: ArtKind;
};

const services: Service[] = [
  {
    title: "Web Development",
    short: "Web",
    description:
      "Modern, responsive websites and web applications built with usability, performance, and your goals in mind.",
    href: "/services/web-development",
    icon: "web",
  },
  {
    title: "SEO Services",
    short: "SEO",
    description:
      "Improve search visibility with considered technical, on-page, and sustainable SEO practices.",
    href: "/services/seo",
    icon: "search",
  },
  {
    title: "UI/UX Design",
    short: "UI/UX",
    description:
      "User-focused interfaces that make digital experiences clearer, easier to use, and visually consistent.",
    href: "/services/ui-ux-design",
    icon: "design",
  },
  {
    title: "Graphic Design",
    short: "Graphic",
    description:
      "Professional visual assets that help your brand communicate clearly across digital touchpoints.",
    href: "/services/graphic-design",
    icon: "graphic",
  },
  {
    title: "WordPress Development",
    short: "WordPress",
    description:
      "Custom WordPress websites and enhancements designed for performance and straightforward maintenance.",
    href: "/services/wordpress-development",
    icon: "wordpress",
  },
  {
    title: "Website Maintenance",
    short: "Maintenance",
    description:
      "Ongoing updates, monitoring, and improvements to help keep your website current and dependable.",
    href: "/services/website-maintenance",
    icon: "maintenance",
  },
];

const approachPoints = [
  "Start with your business goals and audience",
  "Plan a practical solution for your needs",
  "Build with quality, usability, and performance in mind",
  "Create maintainable foundations for long-term growth",
];

const processSteps = [
  { number: "01", title: "Discover", description: "Understand your goals, audience, and requirements." },
  { number: "02", title: "Plan", description: "Set the right direction, scope, and priorities." },
  { number: "03", title: "Build", description: "Design and develop with care and purpose." },
  { number: "04", title: "Improve", description: "Refine the solution as your needs evolve." },
];

const heroMessages = [
  "Thoughtful digital work, built around your goals",
  "Fast, responsive websites that convert",
  "Search visibility that grows steadily",
  "Interfaces people actually enjoy using",
];

const cardLinkClass =
  "group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_8px_30px_-25px_rgba(15,23,42,0.25)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_20px_40px_-25px_rgba(37,99,235,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none";

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function ServiceIcon({ kind }: { kind: ArtKind }) {
  const common = {
    className: "size-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (kind) {
    case "web":
      return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 13h8M8 16h5" /></svg>;
    case "search":
      return <svg {...common}><circle cx="10.8" cy="10.8" r="6.3" /><path d="m16 16 4.5 4.5M8.2 12.7l1.8-2 1.6 1.3 2.2-2.7" /></svg>;
    case "design":
      return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M8 4v16M8 8h13M12 12h5M12 16h3" /></svg>;
    case "graphic":
      return <svg {...common}><path d="M12 3a9 9 0 1 0 0 18h1.2a2 2 0 0 0 1.4-3.4 1.8 1.8 0 0 1 1.3-3.1H18a3 3 0 0 0 3-3A8.5 8.5 0 0 0 12 3Z" /><path d="M7.5 11h.01M10 7.5h.01M15 7.5h.01" /></svg>;
    case "wordpress":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m7 8 3.2 9 2.1-5.1 2 5.1L17 9M5.5 9h3M15.5 9h3" /></svg>;
    case "maintenance":
      return <svg {...common}><path d="M20 7v5h-5M4 17v-5h5" /><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2" /></svg>;
  }
}

function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 20 20" fill="none">
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated SVG illustrations (SMIL — no assets or CSS required)      */
/* ------------------------------------------------------------------ */

const B = "#2563EB";
const L = "#DBEAFE";
const S = "#CBD5E1";
const D = "#0F172A";

function ServiceArt({ kind, className = "" }: { kind: ArtKind; className?: string }) {
  return (
    <svg viewBox="0 0 160 90" className={className} role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`bg-${kind}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#EFF6FF" />
          <stop offset="1" stopColor="#DBEAFE" />
        </linearGradient>
      </defs>
      <rect width="160" height="90" fill={`url(#bg-${kind})`} />
      <circle cx="140" cy="12" r="26" fill="#fff" opacity=".45">
        <animate attributeName="r" values="22;30;22" dur="6s" repeatCount="indefinite" />
      </circle>

      {kind === "web" && (
        <g>
          <rect x="22" y="14" width="116" height="66" rx="6" fill="#fff" stroke={S} />
          <rect x="22" y="14" width="116" height="12" rx="6" fill={L} />
          <circle cx="30" cy="20" r="1.8" fill={B} />
          <circle cx="36" cy="20" r="1.8" fill={B} opacity=".6" />
          <circle cx="42" cy="20" r="1.8" fill={B} opacity=".3" />
          <rect x="30" y="34" width="0" height="5" rx="2.5" fill={D}>
            <animate attributeName="width" values="0;56;56;0" keyTimes="0;.4;.85;1" dur="4s" repeatCount="indefinite" />
          </rect>
          <rect x="30" y="44" width="0" height="3" rx="1.5" fill={S}>
            <animate attributeName="width" values="0;80;80;0" keyTimes="0;.5;.85;1" dur="4s" begin=".3s" repeatCount="indefinite" />
          </rect>
          <rect x="30" y="54" width="28" height="18" rx="3" fill={L}>
            <animate attributeName="y" values="62;54;54;62" keyTimes="0;.3;.85;1" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.3;.85;1" dur="4s" repeatCount="indefinite" />
          </rect>
          <rect x="62" y="54" width="28" height="18" rx="3" fill={B} opacity=".85">
            <animate attributeName="y" values="62;54;54;62" keyTimes="0;.4;.85;1" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;.85;.85;0" keyTimes="0;.4;.85;1" dur="4s" repeatCount="indefinite" />
          </rect>
          <rect x="94" y="54" width="28" height="18" rx="3" fill={L}>
            <animate attributeName="y" values="62;54;54;62" keyTimes="0;.5;.85;1" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.5;.85;1" dur="4s" repeatCount="indefinite" />
          </rect>
        </g>
      )}

      {kind === "search" && (
        <g>
          <path d="M20 70H140M20 50H140M20 30H140" stroke="#fff" strokeWidth="1" />
          <polyline points="22,66 44,56 64,60 86,40 108,44 138,20" fill="none" stroke={B} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="200" strokeDashoffset="200">
            <animate attributeName="stroke-dashoffset" values="200;0;0;200" keyTimes="0;.55;.9;1" dur="4.5s" repeatCount="indefinite" />
          </polyline>
          {[[44, 56], [86, 40], [138, 20]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3.5" fill="#fff" stroke={B} strokeWidth="2">
              <animate attributeName="r" values="0;3.5;3.5;0" keyTimes="0;.5;.9;1" dur="4.5s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <g>
            <circle cx="0" cy="0" r="9" fill="#fff" fillOpacity=".7" stroke={D} strokeWidth="2" />
            <path d="M6.5 6.5 13 13" stroke={D} strokeWidth="2.5" strokeLinecap="round" />
            <animateMotion dur="4.5s" repeatCount="indefinite" path="M30,60 C60,50 80,30 120,30 C100,50 60,62 30,60" />
          </g>
        </g>
      )}

      {kind === "design" && (
        <g>
          <rect x="22" y="12" width="116" height="68" rx="6" fill="#fff" stroke={S} />
          <rect x="22" y="12" width="28" height="68" rx="6" fill={L} />
          <rect x="29" y="22" width="14" height="4" rx="2" fill={B} />
          <rect x="29" y="32" width="14" height="4" rx="2" fill={B} opacity=".5" />
          <rect x="29" y="42" width="14" height="4" rx="2" fill={B} opacity=".3" />
          <rect x="58" y="22" width="72" height="14" rx="3" fill={L} />
          <rect x="58" y="42" width="34" height="28" rx="3" fill="#fff" stroke={B} strokeDasharray="3 2">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite" />
          </rect>
          <rect x="98" y="42" width="32" height="28" rx="3" fill={B} opacity=".85">
            <animate attributeName="width" values="32;20;32" dur="3s" repeatCount="indefinite" />
          </rect>
          <path d="M0 0 L0 12 L3.5 9 L6 14 L8 13 L5.5 8 L10 8 Z" fill={D}>
            <animateMotion dur="5s" repeatCount="indefinite" path="M60,30 L110,56 L70,60 L36,44 L60,30" />
          </path>
        </g>
      )}

      {kind === "graphic" && (
        <g>
          {[[48, 46, B], [74, 36, "#60A5FA"], [100, 46, "#93C5FD"], [126, 36, D]].map(([x, y, c], i) => (
            <circle key={i} cx={x as number} cy={y as number} r="14" fill={c as string}>
              <animate attributeName="cy" values={`${y};${(y as number) - 8};${y}`} dur="2.6s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
              <animate attributeName="r" values="13;16;13" dur="2.6s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <path d="M26 72 C50 52 70 82 94 66 S128 56 138 70" fill="none" stroke={D} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="160" strokeDashoffset="160">
            <animate attributeName="stroke-dashoffset" values="160;0;0;160" keyTimes="0;.6;.9;1" dur="4s" repeatCount="indefinite" />
          </path>
        </g>
      )}

      {kind === "wordpress" && (
        <g>
          <circle cx="80" cy="45" r="26" fill="#fff" stroke={B} strokeWidth="2" />
          <circle cx="80" cy="45" r="33" fill="none" stroke={B} strokeWidth="1.5" strokeDasharray="4 6" opacity=".7">
            <animateTransform attributeName="transform" type="rotate" from="0 80 45" to="360 80 45" dur="12s" repeatCount="indefinite" />
          </circle>
          <path d="M66 36 74 58 80 44 86 58 94 36" fill="none" stroke={B} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {[24, 124].map((x, i) => (
            <rect key={`t${x}`} x={x} y="30" width="14" height="14" rx="3" fill={i ? B : D}>
              <animate attributeName="y" values="30;24;30" dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            </rect>
          ))}
          {[24, 124].map((x, i) => (
            <rect key={`b${x}`} x={x} y="52" width="14" height="14" rx="3" fill="#93C5FD">
              <animate attributeName="y" values="52;58;52" dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            </rect>
          ))}
        </g>
      )}

      {kind === "maintenance" && (
        <g>
          <g>
            <path d="M80 20a25 25 0 0 1 22 13M80 70a25 25 0 0 1-22-13" fill="none" stroke={B} strokeWidth="4" strokeLinecap="round" />
            <path d="M104 24v12H92M56 66V54h12" fill="none" stroke={B} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <animateTransform attributeName="transform" type="rotate" from="0 80 45" to="360 80 45" dur="6s" repeatCount="indefinite" />
          </g>
          <circle cx="80" cy="45" r="11" fill="#fff" stroke={D} strokeWidth="2" />
          <path d="m74.5 45 4 4 7-8" fill="none" stroke={D} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="20" strokeDashoffset="20">
            <animate attributeName="stroke-dashoffset" values="20;0;0;20" keyTimes="0;.3;.8;1" dur="3s" repeatCount="indefinite" />
          </path>
          <rect x="30" y="78" width="100" height="4" rx="2" fill="#fff" />
          <rect x="30" y="78" width="0" height="4" rx="2" fill={B}>
            <animate attributeName="width" values="0;100;100;0" keyTimes="0;.7;.9;1" dur="4s" repeatCount="indefinite" />
          </rect>
        </g>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Scroll reveal                                                      */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated hero card                                                 */
/* ------------------------------------------------------------------ */

const TICK = 2600;

function HeroVisual() {
  const items = services.slice(0, 4);
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), TICK);
    return () => clearInterval(id);
  }, [items.length]);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (t: number) => {
      const p = ((t - start) % 5200) / 3200;
      const eased = 1 - Math.pow(1 - Math.min(p, 1), 3);
      setCount(Math.round(eased * 128));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes tks-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes tks-shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
        @keyframes tks-draw { 0% { stroke-dashoffset: 40 } 55%,85% { stroke-dashoffset: 0 } 100% { stroke-dashoffset: -40 } }
        @keyframes tks-ping { 0% { transform: scale(1); opacity: .6 } 100% { transform: scale(2.6); opacity: 0 } }
        @keyframes tks-glow { 0%,100% { opacity: .5; transform: scale(1) } 50% { opacity: .9; transform: scale(1.08) } }
        @keyframes tks-in { from { opacity: 0; transform: translateY(14px) scale(.97) } to { opacity: 1; transform: none } }
        @keyframes tks-msg { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: none } }
        @keyframes tks-bar { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .tks-shimmer { background-image: linear-gradient(90deg, rgba(203,213,225,.9) 0%, rgba(241,245,249,1) 40%, rgba(203,213,225,.9) 80%); background-size: 200% 100%; animation: tks-shimmer 2.2s linear infinite }
        @media (prefers-reduced-motion: reduce) { .tks-anim, .tks-shimmer { animation: none !important } }
      `}</style>

      <div className="tks-anim absolute -inset-5 rounded-[2rem] bg-blue-100/60 blur-2xl" style={{ animation: "tks-glow 5s ease-in-out infinite" }} />

      <div className="tks-anim absolute -left-3 top-24 z-10 hidden rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 shadow-lg sm:block" style={{ animation: "tks-float 5s ease-in-out infinite" }}>
        <p className="text-[10px] font-medium text-[#64748B]">Organic traffic</p>
        <p className="text-sm font-semibold text-[#0F172A]">
          +{count}% <span className="text-emerald-500">↑</span>
        </p>
      </div>
      <div className="tks-anim absolute -right-3 bottom-20 z-10 hidden items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 shadow-lg sm:flex" style={{ animation: "tks-float 6s ease-in-out -2s infinite" }}>
        <span className="relative flex size-2.5">
          <span className="tks-anim absolute inset-0 rounded-full bg-emerald-400" style={{ animation: "tks-ping 1.8s ease-out infinite" }} />
          <span className="relative size-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs font-semibold text-[#0F172A]">Site live</span>
      </div>

      <div className="tks-anim relative rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.35)] sm:p-7" style={{ animation: "tks-in .8s ease-out both" }}>
        <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
          <div>
            <div className="tks-shimmer h-2.5 w-28 rounded" style={{ backgroundImage: "linear-gradient(90deg,#0F172A,#334155,#0F172A)" }} />
            <div className="tks-shimmer mt-2 h-1.5 w-20 rounded" />
          </div>
          <span className="flex size-9 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
            <svg className="size-5" viewBox="0 0 24 24" fill="none">
              <path d="M4 17.5 9 12l3.5 3.5L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="40" className="tks-anim" style={{ animation: "tks-draw 3.4s ease-in-out infinite" }} />
              <path d="M15.5 7H20v4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {items.map((item, i) => {
            const on = i === active;
            return (
              <div
                key={item.title}
                className={`tks-anim overflow-hidden rounded-xl border bg-[#F8FAFC] transition-all duration-500 ease-out ${
                  on ? "-translate-y-1 border-blue-300 shadow-[0_14px_28px_-18px_rgba(37,99,235,0.55)] ring-2 ring-blue-200/70" : "border-slate-100"
                }`}
                style={{ animation: `tks-in .6s ease-out ${0.15 + i * 0.12}s both` }}
              >
                <div className="relative h-16 overflow-hidden">
                  <ServiceArt kind={item.icon} className={`h-full w-full transition-all duration-500 ${on ? "scale-110 opacity-100" : "scale-100 opacity-60 grayscale-[40%]"}`} />
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-2">
                    <span className={`flex size-7 items-center justify-center rounded-lg bg-white shadow-sm transition-colors duration-500 ${on ? "text-[#2563EB]" : "text-slate-400"}`}>
                      <span className="[&>svg]:size-4">
                        <ServiceIcon kind={item.icon} />
                      </span>
                    </span>
                    <span className={`text-[11px] font-semibold transition-colors duration-500 ${on ? "text-[#0F172A]" : "text-slate-500"}`}>{item.short}</span>
                  </div>
                  <div className="mt-2.5 h-1.5 overflow-hidden rounded bg-slate-200">
                    <div
                      key={on ? `on-${active}` : `off-${i}`}
                      className="tks-anim h-full origin-left rounded bg-[#2563EB]"
                      style={on ? { animation: `tks-bar ${TICK}ms linear both` } : { transform: "scaleX(0)" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-xl bg-blue-50/80 px-4 py-3 text-xs font-medium text-slate-600">
          <span className="relative flex size-2 shrink-0">
            <span className="tks-anim absolute inset-0 rounded-full bg-[#2563EB]" style={{ animation: "tks-ping 1.8s ease-out infinite" }} />
            <span className="relative size-2 rounded-full bg-[#2563EB]" />
          </span>
          <span key={active} className="tks-anim" style={{ animation: "tks-msg .5s ease-out both" }}>
            {heroMessages[active % heroMessages.length]}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_15%,rgba(219,234,254,0.65),transparent_38%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] sm:text-sm">OUR SERVICES</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#0F172A] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                Digital Solutions Built Around Your Business Goals
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
                We bring development, search, and design together to help businesses build a stronger digital presence—from the first idea through ongoing improvement.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link
                href="#services-list"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
              >
                Explore Services
                <ArrowIcon />
              </Link>
            </Reveal>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section id="services-list" aria-labelledby="services-heading" className="scroll-mt-24 bg-[#F8FAFC] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] sm:text-sm">WHAT WE DO</p>
            <h2 id="services-heading" className="mt-3 text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">Digital services for every stage</h2>
            <p className="mt-4 text-base leading-7 text-[#64748B]">Choose a focused service or bring together the capabilities your project needs.</p>
          </Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 120} className="h-full">
                <Link href={service.href} className={cardLinkClass} aria-label={`Learn more about ${service.title}`}>
                  <div className="relative h-36 overflow-hidden border-b border-[#E2E8F0]">
                    <ServiceArt kind={service.icon} className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transform-none" />
                    <span className="absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-xl border border-blue-100 bg-white/90 text-[#2563EB] shadow-sm backdrop-blur transition-colors duration-200 group-hover:bg-blue-50">
                      <ServiceIcon kind={service.icon} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-lg font-semibold text-[#0F172A]">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-[#64748B]">{service.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
                      Learn More
                      <ArrowIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] sm:text-sm">A THOUGHTFUL APPROACH</p>
            <h2 id="approach-heading" className="mt-3 text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">The right solution starts with understanding your business.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#64748B]">We focus on useful, well-planned digital work that supports your goals today and is practical to maintain as your business grows.</p>
          </Reveal>
          <ul className="space-y-4">
            {approachPoints.map((point, index) => (
              <Reveal as="li" key={point} delay={index * 120} className="group flex items-start gap-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition-[border-color,background-color,box-shadow] hover:border-blue-200 hover:bg-white hover:shadow-md sm:p-5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-semibold text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white">0{index + 1}</span>
                <span className="pt-1 text-sm font-medium leading-6 text-[#334155]">{point}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="service-process-heading" className="border-y border-[#E2E8F0] bg-[#F8FAFC] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] sm:text-sm">HOW WE WORK</p>
            <h2 id="service-process-heading" className="mt-3 text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">A clear path from start to next steps</h2>
          </Reveal>
          <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal as="li" key={step.number} delay={i * 130} className="group rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-6">
                <span className="text-sm font-semibold tracking-wide text-[#2563EB]">{step.number}</span>
                <div className="mt-2 h-0.5 w-8 rounded bg-blue-100">
                  <div className="h-full w-0 rounded bg-[#2563EB] transition-[width] duration-500 group-hover:w-full" />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-[#0F172A]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="services-cta-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <Reveal className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-16">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] sm:text-sm">LET&apos;S TALK ABOUT YOUR PROJECT</p>
            <h2 id="services-cta-heading" className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">Have a project in mind?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#64748B]">Let&apos;s discuss the right digital solution for your business and the best way to move forward.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact#quote" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none">
                Get a Quote
                <ArrowIcon />
              </Link>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] transition duration-200 ease-out hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none">
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}