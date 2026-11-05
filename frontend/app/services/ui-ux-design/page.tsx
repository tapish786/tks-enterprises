"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type ArtKind = "website" | "landing" | "webapp" | "ux" | "system" | "responsive";

const designServices: { title: string; description: string; art: ArtKind }[] = [
  { title: "Website UI Design", art: "website", description: "Modern, responsive interfaces shaped around your content, users, and business goals." },
  { title: "Landing Page Design", art: "landing", description: "Focused page experiences with clear hierarchy, messaging, and calls to action." },
  { title: "Web Application UI", art: "webapp", description: "Structured interfaces for dashboards, tools, portals, and browser-based products." },
  { title: "User Experience Design", art: "ux", description: "Information architecture, user flows, navigation, and interaction planning." },
  { title: "Design Systems", art: "system", description: "Reusable visual patterns and components that help maintain consistency across a product." },
  { title: "Responsive Design", art: "responsive", description: "Interfaces planned to work naturally across desktop, tablet, and mobile devices." },
];

const principles = [
  { name: "Clarity", detail: "Make content and next steps easy to understand." },
  { name: "Consistency", detail: "Use familiar patterns so interactions feel predictable." },
  { name: "Simplicity", detail: "Keep each screen focused on what matters to the user." },
  { name: "Accessibility", detail: "Consider different abilities, devices, and ways of interacting." },
  { name: "Usability", detail: "Help people complete tasks with less friction." },
  { name: "Visual hierarchy", detail: "Use layout and emphasis to guide attention through content." },
];

const process = [
  { number: "01", title: "Discover", description: "Understand the business, users, goals, requirements, and context." },
  { number: "02", title: "Structure", description: "Define information architecture, content hierarchy, navigation, and user flows." },
  { number: "03", title: "Wireframe", description: "Establish layout, functionality, and interaction structure before visual polish." },
  { number: "04", title: "Design", description: "Develop the visual system, components, typography, spacing, and responsive states." },
  { number: "05", title: "Refine", description: "Review the experience, identify friction points, and improve the design before implementation." },
];

const designSystemElements = ["Typography", "Color", "Spacing", "Components", "Buttons and forms", "States and interactions", "Responsive behavior"];

const developmentBenefits = [
  "Designs that are practical to implement",
  "Responsive behavior considered early",
  "Clear component structure",
  "Consistent interface patterns",
  "Better communication between design and development",
];

const accessibilityDetails = [
  "Readable typography",
  "Clear interaction states",
  "Keyboard-friendly interaction",
  "Meaningful labels",
  "Adequate contrast",
  "Responsive layouts",
  "Simple navigation",
];

const faqs = [
  { question: "What is the difference between UI and UX design?", answer: "UX design considers how an experience is structured and used, including flows and information architecture. UI design focuses on the visual interface and its interactive elements. The two inform each other throughout a project." },
  { question: "Can you redesign an existing website?", answer: "Yes. We can review your current website, understand what needs to improve, and plan a redesign around your users and business goals." },
  { question: "Do you design responsive interfaces?", answer: "Yes. We consider how layouts, content, and interactions should adapt across desktop, tablet, and mobile screens." },
  { question: "Can you create a design system?", answer: "Yes. We can define reusable components and visual rules that help keep an interface consistent and easier to extend." },
  { question: "Do you design before development?", answer: "Design is planned with implementation in mind. The sequence and level of design detail depend on the project scope and how the design and development work are organized." },
  { question: "Can you work with an existing brand identity?", answer: "Yes. We can use your existing brand elements as a foundation and apply them consistently across the digital experience." },
];

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

function DesignArt({ kind, className = "" }: { kind: ArtKind; className?: string }) {
  return (
    <svg viewBox="0 0 160 90" className={className} role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`ux-bg-${kind}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#EFF6FF" />
          <stop offset="1" stopColor="#DBEAFE" />
        </linearGradient>
      </defs>
      <rect width="160" height="90" fill={`url(#ux-bg-${kind})`} />
      <circle cx="142" cy="10" r="26" fill="#fff" opacity=".45">
        <animate attributeName="r" values="22;30;22" dur="6s" repeatCount="indefinite" />
      </circle>

      {kind === "website" && (
        <g>
          <rect x="22" y="10" width="116" height="72" rx="6" fill="#fff" stroke={S} />
          <rect x="22" y="10" width="116" height="11" rx="6" fill={L} />
          <rect x="30" y="14" width="14" height="3" rx="1.5" fill={B} />
          {[70, 88, 106].map((x) => <rect key={x} x={x} y="14.5" width="12" height="2.5" rx="1.25" fill={S} />)}
          <rect x="30" y="30" width="0" height="6" rx="3" fill={D}>
            <animate attributeName="width" values="0;50;50;0" keyTimes="0;.35;.85;1" dur="4.4s" repeatCount="indefinite" />
          </rect>
          <rect x="30" y="41" width="0" height="3" rx="1.5" fill={S}>
            <animate attributeName="width" values="0;42;42;0" keyTimes="0;.45;.85;1" dur="4.4s" begin=".2s" repeatCount="indefinite" />
          </rect>
          <rect x="30" y="52" width="24" height="9" rx="3" fill={B}>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.55;.85;1" dur="4.4s" repeatCount="indefinite" />
          </rect>
          <rect x="88" y="28" width="42" height="44" rx="5" fill={L}>
            <animate attributeName="opacity" values=".4;1;.4" dur="3.4s" repeatCount="indefinite" />
          </rect>
          <path d="M88 72 104 52 116 64 130 46V72Z" fill={B} opacity=".75" />
        </g>
      )}

      {kind === "landing" && (
        <g>
          <rect x="44" y="6" width="72" height="80" rx="6" fill="#fff" stroke={S} />
          <rect x="52" y="14" width="0" height="6" rx="3" fill={D}>
            <animate attributeName="width" values="0;56;56;0" keyTimes="0;.3;.85;1" dur="4s" repeatCount="indefinite" />
          </rect>
          <rect x="52" y="24" width="0" height="3" rx="1.5" fill={S}>
            <animate attributeName="width" values="0;44;44;0" keyTimes="0;.4;.85;1" dur="4s" begin=".2s" repeatCount="indefinite" />
          </rect>
          <rect x="52" y="34" width="56" height="22" rx="4" fill={L} />
          <rect x="52" y="62" width="30" height="10" rx="5" fill={B}>
            <animate attributeName="width" values="30;36;30" dur="1.6s" repeatCount="indefinite" />
          </rect>
          <path d="M0 0 L0 12 L3.5 9 L6 14 L8 13 L5.5 8 L10 8Z" fill={D}>
            <animateMotion dur="4s" repeatCount="indefinite" path="M100,76 C90,70 80,68 70,68 L66,66 C80,70 94,76 100,76" />
          </path>
          <circle cx="132" cy="24" r="10" fill="#fff" opacity=".8" />
          <path d="m127.5 24 3 3 5-6" stroke={B} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}

      {kind === "webapp" && (
        <g>
          <rect x="18" y="10" width="124" height="72" rx="6" fill="#fff" stroke={S} />
          <rect x="18" y="10" width="24" height="72" rx="6" fill={D} />
          {[20, 30, 40, 50].map((y, i) => (
            <rect key={y} x="24" y={y} width="12" height="4" rx="2" fill="#60A5FA" opacity=".35">
              <animate attributeName="opacity" values=".3;1;.3" dur="4s" begin={`${i}s`} repeatCount="indefinite" />
            </rect>
          ))}
          {[0, 1, 2].map((i) => <rect key={i} x={50 + i * 30} y="18" width="26" height="15" rx="3" fill={L} />)}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={52 + i * 14} y="70" width="9" height="4" rx="2" fill={i === 4 ? B : "#93C5FD"}>
              <animate attributeName="height" values={`4;${16 + ((i * 9) % 20)};4`} dur="3.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
              <animate attributeName="y" values={`70;${70 - 12 - ((i * 9) % 20)};70`} dur="3.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            </rect>
          ))}
        </g>
      )}

      {kind === "ux" && (
        <g>
          <path d="M34 45H62M98 45H126M80 28V17M80 62V73" stroke={S} strokeWidth="2" strokeDasharray="4 3">
            <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.2s" repeatCount="indefinite" />
          </path>
          <rect x="16" y="35" width="26" height="20" rx="5" fill="#fff" stroke={B} strokeWidth="1.5" />
          <rect x="62" y="30" width="36" height="30" rx="6" fill={D} />
          <path d="M80 36 86 45 80 54 74 45Z" fill="#60A5FA" />
          <rect x="118" y="35" width="26" height="20" rx="5" fill="#fff" stroke={B} strokeWidth="1.5" />
          <rect x="68" y="8" width="24" height="14" rx="4" fill={L} />
          <rect x="68" y="68" width="24" height="14" rx="4" fill={L} />
          <circle r="4" fill={B}>
            <animateMotion dur="5s" repeatCount="indefinite" path="M29,45 L80,45 L131,45 L80,45 L80,20 L80,45 L80,75 L80,45 L29,45" />
          </circle>
        </g>
      )}

      {kind === "system" && (
        <g>
          {[[26, 16, 40, 24], [72, 16, 26, 24], [104, 16, 30, 24]].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="5" fill="#fff" stroke={i === 0 ? B : S} strokeWidth="1.5">
              <animate attributeName="stroke" values={`${S};${B};${S}`} dur="4.5s" begin={`${i * 1.5}s`} repeatCount="indefinite" />
            </rect>
          ))}
          <rect x="32" y="24" width="20" height="4" rx="2" fill={D} />
          <rect x="32" y="31" width="28" height="3" rx="1.5" fill={S} />
          <circle cx="85" cy="28" r="6" fill={B} />
          <rect x="110" y="24" width="18" height="8" rx="4" fill={B} />
          {["#2563EB", "#60A5FA", "#93C5FD", D, "#E2E8F0"].map((c, i) => (
            <circle key={c} cx={34 + i * 18} cy="62" r="8" fill={c} stroke="#fff" strokeWidth="2">
              <animate attributeName="cy" values="62;56;62" dur="2.6s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <rect x="26" y="76" width="108" height="3" rx="1.5" fill="#fff" />
        </g>
      )}

      {kind === "responsive" && (
        <g>
          <rect x="14" y="16" width="64" height="44" rx="5" fill="#fff" stroke={D} strokeWidth="2" />
          <rect x="22" y="24" width="24" height="4" rx="2" fill={B} />
          <rect x="22" y="32" width="48" height="3" rx="1.5" fill={S} />
          <rect x="22" y="40" width="34" height="14" rx="3" fill={L} />
          <path d="M34 60v8M24 68h20" stroke={D} strokeWidth="2" strokeLinecap="round" />
          <g>
            <rect x="92" y="28" width="30" height="40" rx="5" fill="#fff" stroke={D} strokeWidth="2" />
            <rect x="98" y="35" width="18" height="3" rx="1.5" fill={B} />
            <rect x="98" y="42" width="18" height="12" rx="3" fill={L} />
            <rect x="98" y="58" width="18" height="4" rx="2" fill={S} />
            <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="2.6s" repeatCount="indefinite" />
          </g>
          <g>
            <rect x="128" y="40" width="22" height="28" rx="4" fill="#fff" stroke={D} strokeWidth="2" />
            <rect x="133" y="46" width="12" height="3" rx="1.5" fill={B} />
            <rect x="133" y="52" width="12" height="9" rx="2" fill={L} />
            <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="2.6s" begin=".5s" repeatCount="indefinite" />
          </g>
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
/*  Animated hero: interface being designed                            */
/* ------------------------------------------------------------------ */

const selections = [
  { label: "Card · 16px radius" },
  { label: "Chart · 4 bars" },
  { label: "Grid · 3 columns" },
];
const swatches = ["#2563EB", "#60A5FA", "#818CF8", "#0F172A"];
const barHeights = [45, 70, 60, 100];

function Handles() {
  return (
    <>
      {["-left-1 -top-1", "-right-1 -top-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map((pos) => (
        <i key={pos} className={`absolute ${pos} size-2 rounded-[2px] border border-blue-600 bg-white`} />
      ))}
    </>
  );
}

function HeroVisual() {
  const [nav, setNav] = useState(1);
  const [sel, setSel] = useState(0);
  const [comps, setComps] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setNav((n) => (n + 1) % 5), 3000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const id = setInterval(() => setSel((s) => (s + 1) % selections.length), 1700);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (t: number) => {
      const p = Math.min(((t - start) % 6000) / 2800, 1);
      setComps(Math.round((1 - Math.pow(1 - p, 3)) * 48));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const ring = (i: number) => (sel === i ? "ring-2 ring-blue-500/80 ring-offset-2 ring-offset-white" : "");

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-xl">
      <style>{`
        @keyframes ux-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes ux-glow { 0%,100% { opacity:.5; transform: scale(1) } 50% { opacity:.9; transform: scale(1.07) } }
        @keyframes ux-in { from { opacity:0; transform: translateY(14px) scale(.98) } to { opacity:1; transform:none } }
        @keyframes ux-ping { 0% { transform: scale(1); opacity:.6 } 100% { transform: scale(2.6); opacity:0 } }
        @keyframes ux-bar { from { transform: scaleY(0) } to { transform: scaleY(1) } }
        @keyframes ux-tile { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-3px) } }
        @keyframes ux-btn { 0%,100% { box-shadow: 0 0 0 0 rgba(37,99,235,.45) } 50% { box-shadow: 0 0 0 8px rgba(37,99,235,0) } }
        @keyframes ux-cursor {
          0% { left: 14%; top: 72%; transform: scale(1) } 25% { left: 72%; top: 14%; transform: scale(1) }
          32% { left: 72%; top: 14%; transform: scale(.8) } 40% { left: 72%; top: 14%; transform: scale(1) }
          70% { left: 38%; top: 80%; transform: scale(1) } 100% { left: 14%; top: 72%; transform: scale(1) }
        }
        @keyframes ux-fade { from { opacity:0; transform: translateX(8px) } to { opacity:1; transform:none } }
        @media (prefers-reduced-motion: reduce) { .ux-anim { animation: none !important } }
      `}</style>

      <div className="ux-anim absolute -inset-5 rounded-[2rem] bg-blue-100/55 blur-2xl" style={{ animation: "ux-glow 5s ease-in-out infinite" }} />

      {/* floating chips */}
      <div className="ux-anim absolute -left-4 top-36 z-10 hidden rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 shadow-lg sm:block" style={{ animation: "ux-float 5s ease-in-out infinite" }}>
        <p className="text-[10px] font-medium text-[#64748B]">Design system</p>
        <p className="text-sm font-semibold text-[#0F172A]">{comps} components</p>
      </div>
      <div className="ux-anim absolute -right-3 bottom-20 z-10 hidden items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 shadow-lg sm:flex" style={{ animation: "ux-float 6s ease-in-out -2s infinite" }}>
        <span className="relative flex size-2.5">
          <span className="ux-anim absolute inset-0 rounded-full bg-emerald-400" style={{ animation: "ux-ping 1.8s ease-out infinite" }} />
          <span className="relative size-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs font-semibold text-[#0F172A]">Contrast checked</span>
      </div>

      <div className="ux-anim relative rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.35)] sm:p-6" style={{ animation: "ux-in .8s ease-out both" }}>
        <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
          <div className="flex gap-1.5"><span className="size-2 rounded-full bg-red-300" /><span className="size-2 rounded-full bg-amber-300" /><span className="size-2 rounded-full bg-emerald-300" /></div>
          <div className="flex h-5 w-2/5 items-center justify-center rounded-md border border-slate-200 bg-[#F8FAFC] text-[9px] text-slate-400">app / dashboard</div>
          <div className="flex -space-x-1.5">
            {swatches.map((c) => <span key={c} className="size-4 rounded-full border-2 border-white" style={{ backgroundColor: c }} />)}
          </div>
        </div>

        <div className="relative grid min-h-[290px] grid-cols-[52px_1fr] gap-3 pt-4 sm:min-h-[340px] sm:grid-cols-[64px_1fr] sm:gap-4">
          {/* sidebar */}
          <div className="space-y-2 rounded-lg bg-[#F8FAFC] p-2">
            <div className="mx-auto size-6 rounded-md bg-blue-600" />
            {[0, 1, 2, 3, 4].map((item) => (
              <div key={item} className={`mx-auto h-5 w-full rounded-md transition-all duration-500 ${item === nav ? "scale-105 bg-blue-100 shadow-sm" : "bg-white"}`}>
                <div className={`mx-auto mt-[7px] h-1.5 rounded transition-all duration-500 ${item === nav ? "w-3/5 bg-blue-500" : "w-2/5 bg-slate-200"}`} />
              </div>
            ))}
          </div>

          {/* content (re-animates when nav changes) */}
          <div key={nav} className="ux-anim min-w-0" style={{ animation: "ux-fade .5s ease-out both" }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="h-3 w-28 rounded bg-slate-700" />
                <div className="mt-2 h-1.5 w-40 max-w-full rounded bg-slate-200" />
              </div>
              <div className="ux-anim h-7 w-16 rounded-md bg-blue-600" style={{ animation: "ux-btn 2.4s ease-out infinite" }} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className={`relative rounded-lg border border-slate-100 p-2.5 transition-all duration-300 ${ring(0)}`}>
                {sel === 0 && <Handles />}
                <div className="h-1.5 w-1/2 rounded bg-slate-200" />
                <div className="mt-3 h-10 rounded-md bg-blue-50" />
                <div className="mt-2 h-1.5 w-3/4 rounded bg-slate-200" />
              </div>
              <div className={`relative rounded-lg border border-slate-100 p-2.5 transition-all duration-300 ${ring(1)}`}>
                {sel === 1 && <Handles />}
                <div className="h-1.5 w-2/3 rounded bg-slate-200" />
                <div className="mt-3 flex h-10 items-end gap-1 rounded-md bg-slate-50 p-1.5">
                  {barHeights.map((h, i) => (
                    <i key={`${nav}-${i}`} className="ux-anim flex-1 origin-bottom rounded-sm" style={{ height: `${h}%`, backgroundColor: ["#BFDBFE", "#93C5FD", "#60A5FA", "#2563EB"][i], animation: `ux-bar .7s ease-out ${i * 0.1}s both` }} />
                  ))}
                </div>
                <div className="mt-2 h-1.5 w-3/5 rounded bg-slate-200" />
              </div>
            </div>

            <div className={`relative mt-3 rounded-lg border border-dashed border-blue-200 bg-blue-50/40 p-3 transition-all duration-300 ${ring(2)}`}>
              {sel === 2 && <Handles />}
              <div className="flex items-center gap-2"><span className="size-5 rounded-md bg-blue-100" /><div className="h-2 w-24 rounded bg-slate-300" /></div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="ux-anim h-8 rounded bg-white" style={{ animation: `ux-tile 2.4s ease-in-out ${i * 0.3}s infinite` }} />
                ))}
              </div>
            </div>

            <div className="mt-3">
              <span key={sel} className="ux-anim inline-block rounded-md bg-blue-600 px-2 py-1 text-[10px] font-medium text-white" style={{ animation: "ux-in .35s ease-out both" }}>
                {selections[sel].label}
              </span>
            </div>
          </div>

          {/* moving cursor */}
          <div className="pointer-events-none absolute inset-0">
            <svg className="ux-anim absolute size-5 text-[#0F172A] drop-shadow-md" viewBox="0 0 20 20" fill="currentColor" style={{ animation: "ux-cursor 7s ease-in-out infinite" }}>
              <path d="M3 2l12 6.5-5 1.4-2 5.1z" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-lg border border-[#E2E8F0] px-3 py-2 text-[11px] text-[#64748B]">
          <span>Interface concept</span>
          <span className="flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-blue-500" />Responsive layout</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function UiUxDesignPage() {
  return (
    <main>
      <style>{`
        @keyframes ux-faq { from { opacity:0; transform: translateY(-6px) } to { opacity:1; transform:none } }
        details[open] > .ux-faq-body { animation: ux-faq .3s ease-out both }
        @media (prefers-reduced-motion: reduce) { details[open] > .ux-faq-body { animation: none } }
      `}</style>

      <section className="relative isolate overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_82%_12%,rgba(219,234,254,0.62),transparent_38%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="max-w-3xl">
            <Reveal><p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] sm:text-sm">UI/UX DESIGN</p></Reveal>
            <Reveal delay={100}>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#0F172A] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                Designing Digital Experiences That Feel Clear and Natural
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
                We create thoughtful user experiences and clean interfaces that make websites and digital products easier to understand, navigate, and use.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact#quote" className={`${linkClass} bg-[#2563EB] text-white shadow-sm hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md`}>
                  Get a Quote<ArrowIcon />
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

      <section aria-labelledby="design-services-heading" className="bg-[#F8FAFC] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="WHAT WE DESIGN" title="Design support for websites and digital products" description="From early experience planning to polished responsive interfaces, our design work helps bring structure and clarity to a digital project." id="design-services-heading" />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
            {designServices.map((service, index) => (
              <Reveal key={service.title} as="article" delay={(index % 3) * 120} className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_20px_40px_-25px_rgba(37,99,235,0.35)] motion-reduce:transform-none">
                <div className="relative h-36 overflow-hidden border-b border-[#E2E8F0]">
                  <DesignArt kind={service.art} className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transform-none" />
                  <span aria-hidden="true" className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-xl border border-blue-100 bg-white/90 text-xs font-semibold text-[#2563EB] shadow-sm backdrop-blur">0{index + 1}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-[#0F172A]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#64748B]">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="principles-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="UI/UX PRINCIPLES" title="Design choices that make an experience work better" description="Good interfaces help people find their way, understand what is happening, and complete tasks with confidence." id="principles-heading" />
          <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#E2E8F0] sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.name} as="article" delay={(index % 3) * 100} className="group relative bg-white p-5 transition-colors duration-300 hover:bg-blue-50/40 sm:p-6">
                <span className="text-xs font-semibold tracking-[0.14em] text-[#2563EB]">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-[#0F172A]">{principle.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">{principle.detail}</p>
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#2563EB] transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="design-process-heading" className="border-y border-[#E2E8F0] bg-[#F8FAFC] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="OUR DESIGN PROCESS" title="From understanding to a considered interface" description="We move from context and structure to visual detail, reviewing the experience along the way." id="design-process-heading" />
          <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-5">
            {process.map((step, i) => (
              <Reveal as="li" key={step.number} delay={i * 110} className="group rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
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

      <section aria-labelledby="design-system-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionIntro eyebrow="DESIGN SYSTEMS" title="A consistent visual language, built to be maintained" description="A design system brings shared rules and reusable parts together. It helps teams create a more predictable interface and makes future updates easier to plan." id="design-system-heading" />
          <Reveal delay={120} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-7">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {designSystemElements.map((element, index) => (
                <Reveal as="li" key={element} delay={200 + index * 80} className="group rounded-xl border border-[#E2E8F0] bg-white p-3.5 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-blue-50 text-xs font-semibold text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white">{index + 1}</span>
                  <span className="mt-2 block text-xs font-medium leading-5 text-slate-700 sm:text-sm">{element}</span>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="design-development-heading" className="bg-[#F8FAFC] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <SectionIntro eyebrow="DESIGN + DEVELOPMENT" title="Thought through for the build ahead" description="Design and development work best together. We consider implementation details early so the visual direction translates clearly into a working interface." id="design-development-heading" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {developmentBenefits.map((benefit, i) => (
              <Reveal as="li" key={benefit} delay={(i % 4) * 90} className="group flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 text-sm font-medium leading-6 text-slate-700 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                <span aria-hidden="true" className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white"><CheckIcon /></span>
                {benefit}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="accessibility-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <SectionIntro eyebrow="ACCESSIBILITY & USABILITY" title="Consider the people using the interface" description="Digital experiences are used in different contexts and with different needs. Clear patterns help make an interface easier to understand and navigate." id="accessibility-heading" />
          <ul className="flex flex-wrap gap-2.5">
            {accessibilityDetails.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 70} className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2 text-sm font-medium text-slate-700 transition-[border-color,background-color,color,transform] hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-[#2563EB]">
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="design-faq-heading" className="bg-[#F8FAFC] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <SectionIntro eyebrow="FAQ" title="UI/UX design questions" description="A few useful details about our approach to digital design." id="design-faq-heading" />
          <Reveal delay={120}>
            <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm text-left text-base font-semibold text-[#0F172A] transition-colors hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] text-[#2563EB] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"><PlusIcon /></span>
                  </summary>
                  <p className="ux-faq-body mt-3 pr-10 text-sm leading-6 text-[#64748B]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="design-cta-heading" className="bg-white px-5 pb-16 pt-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <Reveal className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-16">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">LET&apos;S MAKE THE EXPERIENCE CLEARER</p>
            <h2 id="design-cta-heading" className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">Have an Experience Worth Improving?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#64748B]">Tell us about your website or digital product, and let&apos;s design a clearer experience for your users.</p>
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