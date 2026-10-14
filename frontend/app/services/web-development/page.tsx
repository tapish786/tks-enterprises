"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type ArtKind = "business" | "corporate" | "landing" | "ecommerce" | "webapp" | "conversion";

const solutions: { title: string; description: string; art: ArtKind }[] = [
  { title: "Business Websites", art: "business", description: "Clear, professional websites that introduce your business and help visitors understand what you offer." },
  { title: "Corporate Websites", art: "corporate", description: "Structured digital experiences for organizations with multiple audiences, teams, and areas of expertise." },
  { title: "Landing Pages", art: "landing", description: "Focused pages that communicate one offer or idea and guide visitors toward a useful next step." },
  { title: "E-commerce Websites", art: "ecommerce", description: "Online storefronts designed to make browsing products and completing a purchase straightforward." },
  { title: "Custom Web Applications", art: "webapp", description: "Purpose-built browser-based tools and workflows shaped around specific business requirements." },
  { title: "Conversion-Focused Websites", art: "conversion", description: "Thoughtful page structure and clear calls to action that make it easier for visitors to get in touch." },
];

const capabilities = [
  "Responsive design",
  "Modern frontend development",
  "Performance-focused implementation",
  "SEO-friendly structure",
  "Accessible interfaces",
  "API integration",
  "Scalable architecture",
  "Maintainable code",
];

const process = [
  { number: "01", title: "Discover", description: "Understand your business, audience, goals, requirements, and project scope." },
  { number: "02", title: "Plan", description: "Define information architecture, technology direction, functionality, and priorities." },
  { number: "03", title: "Design", description: "Create a clear interface and user experience aligned with your business." },
  { number: "04", title: "Build", description: "Develop the website or application with responsive, maintainable implementation." },
  { number: "05", title: "Test & Launch", description: "Test responsiveness, functionality, usability, and technical quality before launch." },
  { number: "06", title: "Improve", description: "Continue with maintenance, enhancements, and future improvements where needed." },
];

const benefits = [
  "Development shaped around your business goals",
  "Clean implementation that is easier to maintain",
  "Responsive experiences across devices",
  "An SEO-ready technical foundation",
  "Performance-conscious development choices",
  "A flexible foundation for future growth",
];

const faqs = [
  { question: "What types of websites do you develop?", answer: "We develop business and corporate websites, landing pages, e-commerce experiences, and custom web applications based on your project needs." },
  { question: "Can you build a custom web application?", answer: "Yes. We can discuss your workflows and requirements and plan a browser-based application around the way your business needs to work." },
  { question: "Do you build responsive websites?", answer: "Yes. We design and develop layouts to adapt to mobile, tablet, and desktop screen sizes." },
  { question: "Can you work with an existing website?", answer: "We can review your current website and discuss updates, redesigns, integrations, or other improvements that fit your goals." },
  { question: "Do you provide website maintenance after launch?", answer: "Ongoing maintenance and improvements can be discussed as part of your project or as a follow-on service." },
];

const technologyOptions = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js / Express", "PostgreSQL", "Prisma"];

const linkClass =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none";

/* ------------------------------------------------------------------ */
/*  Small icons                                                        */
/* ------------------------------------------------------------------ */

function ArrowIcon() {
  return <svg aria-hidden="true" className="size-4" viewBox="0 0 20 20" fill="none"><path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function CheckIcon() {
  return <svg aria-hidden="true" className="size-3.5" viewBox="0 0 16 16" fill="none"><path d="m3.5 8.2 2.8 2.8 6.2-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function PlusIcon() {
  return <svg aria-hidden="true" className="size-3.5" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
}

/* ------------------------------------------------------------------ */
/*  Animated SVG illustrations (SMIL — no assets needed)               */
/* ------------------------------------------------------------------ */

const B = "#2563EB";
const L = "#DBEAFE";
const S = "#CBD5E1";
const D = "#0F172A";

function SolutionArt({ kind, className = "" }: { kind: ArtKind; className?: string }) {
  return (
    <svg viewBox="0 0 160 90" className={className} role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`wd-bg-${kind}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#EFF6FF" />
          <stop offset="1" stopColor="#DBEAFE" />
        </linearGradient>
      </defs>
      <rect width="160" height="90" fill={`url(#wd-bg-${kind})`} />
      <circle cx="142" cy="10" r="26" fill="#fff" opacity=".45">
        <animate attributeName="r" values="22;30;22" dur="6s" repeatCount="indefinite" />
      </circle>

      {kind === "business" && (
        <g>
          <rect x="24" y="14" width="112" height="64" rx="6" fill="#fff" stroke={S} />
          <rect x="24" y="14" width="112" height="11" rx="6" fill={L} />
          <rect x="32" y="33" width="0" height="5" rx="2.5" fill={D}>
            <animate attributeName="width" values="0;52;52;0" keyTimes="0;.4;.85;1" dur="4s" repeatCount="indefinite" />
          </rect>
          <rect x="32" y="43" width="0" height="3" rx="1.5" fill={S}>
            <animate attributeName="width" values="0;40;40;0" keyTimes="0;.5;.85;1" dur="4s" begin=".25s" repeatCount="indefinite" />
          </rect>
          <rect x="32" y="56" width="0" height="10" rx="3" fill={B}>
            <animate attributeName="width" values="0;26;26;0" keyTimes="0;.6;.85;1" dur="4s" repeatCount="indefinite" />
          </rect>
          <rect x="92" y="32" width="36" height="38" rx="4" fill={L}>
            <animate attributeName="opacity" values=".5;1;.5" dur="3s" repeatCount="indefinite" />
          </rect>
          <circle cx="110" cy="46" r="6" fill="#fff" />
          <path d="M92 70 104 58 114 66 128 54V70Z" fill={B} opacity=".8" />
        </g>
      )}

      {kind === "corporate" && (
        <g>
          <rect x="38" y="26" width="34" height="54" rx="3" fill="#fff" stroke={S} />
          <rect x="78" y="14" width="44" height="66" rx="3" fill={D} />
          {[0, 1, 2, 3, 4].map((r) =>
            [0, 1, 2].map((c) => (
              <rect key={`${r}${c}`} x={84 + c * 12} y={20 + r * 11} width="7" height="6" rx="1" fill="#60A5FA">
                <animate attributeName="opacity" values="1;.2;1" dur={`${2 + ((r * 3 + c) % 4) * 0.5}s`} begin={`${(r + c) * 0.2}s`} repeatCount="indefinite" />
              </rect>
            )),
          )}
          {[0, 1, 2, 3].map((r) =>
            [0, 1].map((c) => (
              <rect key={`s${r}${c}`} x={44 + c * 14} y={32 + r * 11} width="8" height="6" rx="1" fill={L}>
                <animate attributeName="fill" values={`${L};${B};${L}`} dur="3.5s" begin={`${(r + c) * 0.4}s`} repeatCount="indefinite" />
              </rect>
            )),
          )}
          <path d="M20 80H140" stroke={S} strokeWidth="2" />
        </g>
      )}

      {kind === "landing" && (
        <g>
          <path d="M30 20H130L104 46V72L86 80V46Z" fill="#fff" stroke={S} strokeWidth="1.5" />
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx={46 + i * 22} cy="14" r="4" fill={B}>
              <animate attributeName="cy" values="8;50;66" keyTimes="0;.7;1" dur="2.6s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
              <animate attributeName="cx" values={`${46 + i * 22};${70 + i * 6};95`} keyTimes="0;.7;1" dur="2.6s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <rect x="108" y="62" width="30" height="14" rx="4" fill={B}>
            <animate attributeName="opacity" values=".6;1;.6" dur="1.6s" repeatCount="indefinite" />
          </rect>
        </g>
      )}

      {kind === "ecommerce" && (
        <g>
          <path d="M34 24H46L54 56H114L122 32H50" fill="#fff" stroke={D} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="64" cy="68" r="5" fill={D} />
          <circle cx="104" cy="68" r="5" fill={D} />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={62 + i * 16} y="30" width="12" height="12" rx="3" fill={i === 1 ? B : "#60A5FA"}>
              <animate attributeName="y" values="-10;30;30;-10" keyTimes="0;.35;.85;1" dur="3.6s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </rect>
          ))}
          <g>
            <circle cx="124" cy="20" r="8" fill={B} />
            <path d="m120.5 20 2.4 2.4 4.2-4.8" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <animateTransform attributeName="transform" type="scale" values="1;1.15;1" dur="1.8s" repeatCount="indefinite" additive="sum" />
          </g>
        </g>
      )}

      {kind === "webapp" && (
        <g>
          <rect x="20" y="12" width="120" height="68" rx="6" fill="#fff" stroke={S} />
          <rect x="20" y="12" width="26" height="68" rx="6" fill={D} />
          {[24, 34, 44].map((y, i) => (
            <rect key={y} x="26" y={y} width="14" height="4" rx="2" fill={i === 0 ? "#60A5FA" : "#475569"} />
          ))}
          {[0, 1, 2].map((i) => (
            <rect key={i} x={54 + i * 28} y="20" width="24" height="14" rx="3" fill={L}>
              <animate attributeName="fill" values={`${L};#BFDBFE;${L}`} dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </rect>
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={56 + i * 15} y="74" width="9" height="0" rx="2" fill={i === 3 ? B : "#93C5FD"}>
              <animate attributeName="height" values={`4;${18 + ((i * 7) % 18)};4`} dur="3s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
              <animate attributeName="y" values={`70;${74 - 18 - ((i * 7) % 18)};70`} dur="3s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            </rect>
          ))}
        </g>
      )}

      {kind === "conversion" && (
        <g>
          <rect x="22" y="44" width="116" height="30" rx="6" fill="#fff" stroke={S} />
          <polyline points="30,66 52,58 72,62 96,50 118,52 132,40" fill="none" stroke={B} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="160" strokeDashoffset="160">
            <animate attributeName="stroke-dashoffset" values="160;0;0;160" keyTimes="0;.55;.9;1" dur="4s" repeatCount="indefinite" />
          </polyline>
          <rect x="50" y="14" width="60" height="20" rx="10" fill={B}>
            <animate attributeName="width" values="60;66;60" dur="1.6s" repeatCount="indefinite" />
            <animate attributeName="x" values="50;47;50" dur="1.6s" repeatCount="indefinite" />
          </rect>
          <rect x="62" y="22" width="36" height="4" rx="2" fill="#fff" />
          <path d="M0 0 L0 13 L4 10 L7 15.5 L9.5 14.5 L6.5 9 L11 9Z" fill={D}>
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M130,70 C110,50 100,40 88,32 L86,30 L90,34 C100,48 120,64 130,70" />
          </path>
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
  as?: "div" | "li" | "article";
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

function SectionIntro({ eyebrow, title, description, id }: { eyebrow: string; title: string; description: string; id: string }) {
  return (
    <Reveal className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[#64748B]">{description}</p>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated hero browser mockup                                       */
/* ------------------------------------------------------------------ */

const devices = [
  { label: "Desktop", width: "100%", stacked: false },
  { label: "Tablet", width: "72%", stacked: false },
  { label: "Mobile", width: "44%", stacked: true },
] as const;

const URL_TEXT = "yourbusiness.com";

function HeroVisual() {
  const [device, setDevice] = useState(0);
  const [typed, setTyped] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setDevice((d) => (d + 1) % devices.length), 3200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTyped((t) => (t >= URL_TEXT.length + 8 ? 0 : t + 1)), 170);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (t: number) => {
      const p = Math.min(((t - start) % 6000) / 2600, 1);
      setScore(Math.round((1 - Math.pow(1 - p, 3)) * 98));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const current = devices[device];
  const circ = 2 * Math.PI * 15;

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-xl">
      <style>{`
        @keyframes wd-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes wd-glow { 0%,100% { opacity:.5; transform: scale(1) } 50% { opacity:.9; transform: scale(1.07) } }
        @keyframes wd-in { from { opacity:0; transform: translateY(16px) scale(.98) } to { opacity:1; transform:none } }
        @keyframes wd-ping { 0% { transform: scale(1); opacity:.6 } 100% { transform: scale(2.6); opacity:0 } }
        @keyframes wd-shimmer { 0% { background-position:-200% 0 } 100% { background-position:200% 0 } }
        @keyframes wd-drift { 0%,100% { transform: translateX(0) skewX(-12deg) } 50% { transform: translateX(14px) skewX(-12deg) } }
        @keyframes wd-drift2 { 0%,100% { transform: translateX(0) skewX(-16deg) } 50% { transform: translateX(-12px) skewX(-16deg) } }
        @keyframes wd-sun { 0%,100% { transform: translateY(0) scale(1) } 50% { transform: translateY(-8px) scale(1.06) } }
        @keyframes wd-blink { 0%,45% { opacity:1 } 50%,95% { opacity:0 } 100% { opacity:1 } }
        @keyframes wd-btn { 0%,100% { box-shadow: 0 0 0 0 rgba(37,99,235,.45) } 50% { box-shadow: 0 0 0 8px rgba(37,99,235,0) } }
        .wd-shimmer { background-size:200% 100%; animation: wd-shimmer 2.4s linear infinite }
        @media (prefers-reduced-motion: reduce) { .wd-anim, .wd-shimmer { animation: none !important } }
      `}</style>

      <div className="wd-anim absolute -inset-5 rounded-[2rem] bg-blue-100/60 blur-2xl" style={{ animation: "wd-glow 5s ease-in-out infinite" }} />

      {/* floating chips */}
      <div className="wd-anim absolute -left-4 top-28 z-10 hidden items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 shadow-lg sm:flex" style={{ animation: "wd-float 5s ease-in-out infinite" }}>
        <svg viewBox="0 0 36 36" className="size-9 -rotate-90">
          <circle cx="18" cy="18" r="15" fill="none" stroke="#DBEAFE" strokeWidth="3.5" />
          <circle cx="18" cy="18" r="15" fill="none" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ * (1 - score / 100)} />
        </svg>
        <div>
          <p className="text-[10px] font-medium text-[#64748B]">Performance</p>
          <p className="text-sm font-semibold text-[#0F172A]">{score}/100</p>
        </div>
      </div>
      <div className="wd-anim absolute -right-3 bottom-16 z-10 hidden items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 shadow-lg sm:flex" style={{ animation: "wd-float 6s ease-in-out -2s infinite" }}>
        <span className="relative flex size-2.5">
          <span className="wd-anim absolute inset-0 rounded-full bg-emerald-400" style={{ animation: "wd-ping 1.8s ease-out infinite" }} />
          <span className="relative size-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs font-semibold text-[#0F172A]">Deployed</span>
      </div>

      <div className="wd-anim relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_24px_70px_-40px_rgba(15,23,42,0.38)]" style={{ animation: "wd-in .8s ease-out both" }}>
        {/* browser bar with typing URL */}
        <div className="flex h-11 items-center gap-2 border-b border-[#E2E8F0] bg-[#F8FAFC] px-4">
          <span className="size-2 rounded-full bg-red-300" /><span className="size-2 rounded-full bg-amber-300" /><span className="size-2 rounded-full bg-emerald-300" />
          <div className="mx-auto flex h-6 w-3/5 items-center rounded-md border border-slate-200 bg-white px-2 text-[11px] text-slate-500">
            <svg className="mr-1.5 size-3 shrink-0 text-emerald-500" viewBox="0 0 16 16" fill="none"><path d="M4 7V5a4 4 0 1 1 8 0v2M3.5 7h9v6.5h-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
            <span>{URL_TEXT.slice(0, Math.min(typed, URL_TEXT.length))}</span>
            <span className="wd-anim ml-px h-3 w-px bg-slate-500" style={{ animation: "wd-blink 1s steps(1) infinite" }} />
          </div>
        </div>

        {/* viewport that resizes between desktop / tablet / mobile */}
        <div className="flex min-h-[290px] items-start justify-center bg-gradient-to-b from-slate-50 to-white p-4 sm:min-h-[340px] sm:p-5">
          <div
            className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-sm transition-[width] duration-700 ease-in-out"
            style={{ width: current.width }}
          >
            <div className={`grid gap-4 p-4 transition-all duration-500 sm:p-5 ${current.stacked ? "grid-cols-1" : "grid-cols-[1fr_0.85fr]"}`}>
              <div className="flex flex-col justify-center">
                <div className="h-2 w-12 rounded-full bg-blue-500" />
                <div className="wd-shimmer mt-4 h-4 w-full max-w-40 rounded" style={{ backgroundImage: "linear-gradient(90deg,#0F172A,#475569,#0F172A)" }} />
                <div className="wd-shimmer mt-2 h-4 w-4/5 rounded" style={{ backgroundImage: "linear-gradient(90deg,#0F172A,#475569,#0F172A)" }} />
                <div className="wd-shimmer mt-4 h-2 w-full rounded" style={{ backgroundImage: "linear-gradient(90deg,#E2E8F0,#F8FAFC,#E2E8F0)" }} />
                <div className="wd-shimmer mt-2 h-2 w-4/5 rounded" style={{ backgroundImage: "linear-gradient(90deg,#E2E8F0,#F8FAFC,#E2E8F0)" }} />
                <div className="wd-anim mt-5 h-8 w-24 rounded-lg bg-[#2563EB]" style={{ animation: "wd-btn 2s ease-out infinite" }} />
              </div>
              <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 via-slate-100 to-indigo-100 ${current.stacked ? "h-28" : "min-h-[150px]"}`}>
                <div className="wd-anim absolute right-3 top-4 size-12 rounded-full bg-white/90 shadow-sm sm:size-16" style={{ animation: "wd-sun 4s ease-in-out infinite" }} />
                <div className="wd-anim absolute bottom-0 left-0 h-1/2 w-3/5 bg-blue-200" style={{ animation: "wd-drift 6s ease-in-out infinite" }} />
                <div className="wd-anim absolute bottom-0 right-0 h-3/4 w-2/3 bg-blue-400/80" style={{ animation: "wd-drift2 7s ease-in-out infinite" }} />
                <div className="absolute inset-x-3 bottom-3 h-5 rounded-md border border-white/70 bg-white/70" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#E2E8F0] px-5 py-3 text-xs text-[#64748B] sm:px-7">
          <span className="flex items-center gap-1.5">
            {devices.map((d, i) => (
              <span key={d.label} className={`h-1.5 rounded-full transition-all duration-500 ${i === device ? "w-6 bg-[#2563EB]" : "w-1.5 bg-slate-300"}`} />
            ))}
            <span className="ml-2">Responsive interface</span>
          </span>
          <span key={device} className="wd-anim rounded-full bg-blue-50 px-2.5 py-1 font-medium text-blue-700" style={{ animation: "wd-in .4s ease-out both" }}>
            {current.label} view
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Technology marquee                                                 */
/* ------------------------------------------------------------------ */

function TechMarquee() {
  const items = [...technologyOptions, ...technologyOptions];
  return (
    <div className="relative w-full overflow-hidden lg:max-w-xl [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <style>{`
        @keyframes wd-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @media (prefers-reduced-motion: reduce) { .wd-marquee { animation: none !important; flex-wrap: wrap } }
      `}</style>
      <ul className="wd-marquee flex w-max gap-2.5 py-1 hover:[animation-play-state:paused]" style={{ animation: "wd-marquee 22s linear infinite" }} aria-label="Possible web development technologies">
        {items.map((technology, i) => (
          <li key={`${technology}-${i}`} aria-hidden={i >= technologyOptions.length} className="whitespace-nowrap rounded-full border border-[#E2E8F0] bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:text-[#2563EB]">
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function WebDevelopmentPage() {
  return (
    <main>
      <style>{`
        @keyframes wd-faq { from { opacity:0; transform: translateY(-6px) } to { opacity:1; transform:none } }
        details[open] > .wd-faq-body { animation: wd-faq .3s ease-out both }
        @media (prefers-reduced-motion: reduce) { details[open] > .wd-faq-body { animation: none } }
      `}</style>

      <section className="relative isolate overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_18%,rgba(219,234,254,0.72),transparent_38%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-3xl">
            <Reveal><p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] sm:text-sm">WEB DEVELOPMENT</p></Reveal>
            <Reveal delay={100}>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#0F172A] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                Websites and Web Applications Built for Your Business
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
                We build modern, responsive websites and web applications around your business goals, with usability and performance in mind and a foundation designed to be maintained over time.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact#quote" className={`${linkClass} bg-[#2563EB] text-white shadow-sm hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md`}>
                  Get a Quote
                  <ArrowIcon />
                </Link>
                <Link href="/contact" className={`${linkClass} border border-[#CBD5E1] bg-white text-[#0F172A] hover:border-blue-300 hover:bg-blue-50`}>
                  Let&apos;s Talk
                </Link>
              </div>
            </Reveal>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section aria-labelledby="solutions-heading" className="bg-[#F8FAFC] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="WHAT WE BUILD" title="Web solutions for different business needs" description="From a focused landing page to a custom application, we shape the work around what your business and audience need." id="solutions-heading" />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
            {solutions.map((solution, index) => (
              <Reveal key={solution.title} as="article" delay={(index % 3) * 120} className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_20px_40px_-25px_rgba(37,99,235,0.35)] motion-reduce:transform-none">
                <div className="relative h-36 overflow-hidden border-b border-[#E2E8F0]">
                  <SolutionArt kind={solution.art} className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transform-none" />
                  <span aria-hidden="true" className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-xl border border-blue-100 bg-white/90 text-sm font-semibold text-[#2563EB] shadow-sm backdrop-blur">0{index + 1}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-[#0F172A]">{solution.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#64748B]">{solution.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="capabilities-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <SectionIntro eyebrow="DEVELOPMENT CAPABILITIES" title="A considered technical foundation" description="We bring together the practical parts of web development to create digital experiences that are useful, adaptable, and easier to support." id="capabilities-heading" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability, i) => (
              <Reveal as="li" key={capability} delay={(i % 4) * 90} className="group flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-sm font-medium leading-6 text-[#334155] transition-[border-color,background-color,box-shadow] hover:border-blue-200 hover:bg-white hover:shadow-md">
                <span aria-hidden="true" className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white"><CheckIcon /></span>
                {capability}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="border-y border-[#E2E8F0] bg-[#F8FAFC] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="OUR DEVELOPMENT APPROACH" title="A clear process, from first conversation to ongoing improvement" description="Each stage gives the work direction and creates space to review decisions as the project takes shape." id="approach-heading" />
          <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {process.map((step, i) => (
              <Reveal as="li" key={step.number} delay={(i % 3) * 120} className="group rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-6">
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

      <section aria-labelledby="why-web-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionIntro eyebrow="WHY WEB DEVELOPMENT WITH TKS" title="Built around practical business needs" description="Good development choices support more than launch day. We consider how people will use the website and how your team may need to update it over time." id="why-web-heading" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <Reveal as="li" key={benefit} delay={(i % 4) * 90} className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-sm font-medium leading-6 text-[#334155] transition-[border-color,background-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md">
                {benefit}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="technology-heading" className="bg-[#F8FAFC] px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <Reveal className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">TECHNICAL DIRECTION</p>
            <h2 id="technology-heading" className="mt-3 text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">Tools selected for the project</h2>
            <p className="mt-3 text-sm leading-6 text-[#64748B]">Technology choices depend on your requirements, existing systems, and the right fit for the work.</p>
          </Reveal>
          <TechMarquee />
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <SectionIntro eyebrow="FAQ" title="Web development questions" description="A few helpful details about the way we approach web projects." id="faq-heading" />
          <Reveal delay={120}>
            <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm text-left text-base font-semibold text-[#0F172A] transition-colors hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] text-[#2563EB] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"><PlusIcon /></span>
                  </summary>
                  <p className="wd-faq-body mt-3 pr-10 text-sm leading-6 text-[#64748B]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="web-cta-heading" className="bg-white px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <Reveal className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-16">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">LET&apos;S BUILD WITH PURPOSE</p>
            <h2 id="web-cta-heading" className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">Have a Web Project in Mind?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#64748B]">Tell us what you&apos;re building, and let&apos;s discuss the right approach for your business.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact#quote" className={`${linkClass} bg-[#2563EB] text-white shadow-sm hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md`}>Get a Quote<ArrowIcon /></Link>
              <Link href="/contact" className={`${linkClass} border border-[#CBD5E1] bg-white text-[#0F172A] hover:border-blue-300 hover:bg-blue-50`}>Let&apos;s Talk</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}