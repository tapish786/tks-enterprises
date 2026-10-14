"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type ArtKind = "technical" | "onpage" | "content" | "keyword" | "local" | "audit";

const seoAreas: { title: string; description: string; art: ArtKind }[] = [
  { title: "Technical SEO", art: "technical", description: "Review crawlability, indexing, site structure, metadata, and performance considerations that support a sound technical foundation." },
  { title: "On-Page SEO", art: "onpage", description: "Improve page titles, headings, content structure, internal links, and relevance to the questions a page should answer." },
  { title: "Content Strategy", art: "content", description: "Plan useful, relevant content around audience questions and the subjects that matter to your business." },
  { title: "Keyword Research", art: "keyword", description: "Explore relevant queries, topics, search intent, and opportunities to inform a practical content and optimization plan." },
  { title: "Local SEO", art: "local", description: "Strengthen local search visibility where location-based searches are relevant to your service and audience." },
  { title: "SEO Audits", art: "audit", description: "Identify technical, structural, content, and on-page opportunities to help guide the next improvements." },
];

const foundations = [
  "Clear site architecture",
  "Crawlable and indexable pages",
  "Descriptive metadata",
  "Semantic heading structure",
  "Useful internal links",
  "Mobile-friendly experience",
  "Performance-conscious implementation",
  "Useful and relevant content",
];

const process = [
  { number: "01", title: "Discover", description: "Understand your business, audience, goals, market, and current search presence." },
  { number: "02", title: "Audit", description: "Review technical SEO, content, structure, indexing, and on-page factors." },
  { number: "03", title: "Strategy", description: "Prioritize opportunities by relevance, search intent, competition, and business goals." },
  { number: "04", title: "Optimize", description: "Implement technical, on-page, content, and structural improvements." },
  { number: "05", title: "Measure & Improve", description: "Monitor meaningful SEO indicators and refine the approach over time." },
];

const focusAreas = [
  "Search intent",
  "Site structure",
  "Technical health",
  "Content quality",
  "Internal linking",
  "Metadata",
  "Mobile experience",
  "Performance",
  "Local visibility where relevant",
];

const seoDevItems = ["Crawlability", "Performance", "Accessibility", "Clear information architecture", "Search-friendly page structure"];

const faqs = [
  { question: "What does an SEO service include?", answer: "Depending on your needs, SEO work can include technical and on-page reviews, keyword research, content planning, site structure improvements, and ongoing measurement." },
  { question: "How long does SEO take to show results?", answer: "Timing varies with your website, market, competition, and the changes involved. SEO is an ongoing effort, and meaningful changes can take time to be reflected in search results." },
  { question: "Do you guarantee Google rankings?", answer: "No. Responsible SEO cannot guarantee specific Google rankings. Search results depend on many external factors, including competition and changes to search systems." },
  { question: "Can you optimize an existing website?", answer: "Yes. We can review an existing site and identify technical, content, and structural opportunities based on your goals." },
  { question: "Do you provide technical SEO?", answer: "Yes. Technical SEO can include reviewing crawlability, indexability, site architecture, metadata, and performance considerations." },
  { question: "Can SEO and web development be handled together?", answer: "Yes. Coordinating SEO with development can help align technical implementation, site structure, and content needs throughout a project." },
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

function SeoArt({ kind, className = "" }: { kind: ArtKind; className?: string }) {
  return (
    <svg viewBox="0 0 160 90" className={className} role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`seo-bg-${kind}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#EFF6FF" />
          <stop offset="1" stopColor="#DBEAFE" />
        </linearGradient>
      </defs>
      <rect width="160" height="90" fill={`url(#seo-bg-${kind})`} />
      <circle cx="142" cy="10" r="26" fill="#fff" opacity=".45">
        <animate attributeName="r" values="22;30;22" dur="6s" repeatCount="indefinite" />
      </circle>

      {kind === "technical" && (
        <g>
          {/* site map tree being crawled */}
          <path d="M80 26V40M80 40H44M80 40H116M44 40V54M116 40V54M80 40V54" stroke={S} strokeWidth="2" fill="none" />
          <rect x="62" y="12" width="36" height="14" rx="4" fill={D} />
          {[44, 80, 116].map((x, i) => (
            <rect key={x} x={x - 14} y="54" width="28" height="14" rx="4" fill={i === 1 ? B : "#fff"} stroke={i === 1 ? B : S}>
              <animate attributeName="fill" values={`#fff;${L};#fff`} dur="3s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
            </rect>
          ))}
          <circle r="4" fill={B}>
            <animateMotion dur="3.6s" repeatCount="indefinite" path="M80,26 L80,40 L44,40 L44,54 L44,40 L80,40 L116,40 L116,54 L116,40 L80,40 L80,26" />
          </circle>
          <rect x="30" y="76" width="100" height="4" rx="2" fill="#fff" />
          <rect x="30" y="76" width="0" height="4" rx="2" fill={B}>
            <animate attributeName="width" values="0;100;100;0" keyTimes="0;.7;.9;1" dur="3.6s" repeatCount="indefinite" />
          </rect>
        </g>
      )}

      {kind === "onpage" && (
        <g>
          <rect x="30" y="10" width="100" height="72" rx="6" fill="#fff" stroke={S} />
          <rect x="38" y="18" width="0" height="7" rx="3" fill={B}>
            <animate attributeName="width" values="0;60;60;0" keyTimes="0;.35;.85;1" dur="4s" repeatCount="indefinite" />
          </rect>
          <text x="38" y="35" fontSize="5.5" fill={B} fontFamily="monospace" opacity="0">
            &lt;h1&gt;
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.4;.85;1" dur="4s" repeatCount="indefinite" />
          </text>
          {[44, 52, 60, 68].map((y, i) => (
            <rect key={y} x="38" y={y} width="0" height="3" rx="1.5" fill={S}>
              <animate attributeName="width" values={`0;${84 - i * 14};${84 - i * 14};0`} keyTimes="0;.5;.85;1" dur="4s" begin={`${0.2 + i * 0.15}s`} repeatCount="indefinite" />
            </rect>
          ))}
          <rect x="36" y="42" width="48" height="8" rx="2" fill="none" stroke={B} strokeWidth="1.5" strokeDasharray="4 3">
            <animate attributeName="stroke-dashoffset" values="0;14" dur="1s" repeatCount="indefinite" />
          </rect>
        </g>
      )}

      {kind === "content" && (
        <g>
          <rect x="36" y="10" width="68" height="72" rx="5" fill="#fff" stroke={S} />
          <rect x="44" y="18" width="30" height="5" rx="2.5" fill={D} />
          {[30, 38, 46, 54, 62].map((y, i) => (
            <rect key={y} x="44" y={y} width="0" height="3" rx="1.5" fill={i === 2 ? "#93C5FD" : S}>
              <animate attributeName="width" values={`0;${i % 2 ? 40 : 52};${i % 2 ? 40 : 52};0`} keyTimes="0;.5;.88;1" dur="4.4s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
            </rect>
          ))}
          <g>
            <path d="M0 0 L14 -14 L19 -9 L5 5 L-2 7Z" fill={B} />
            <path d="M14 -14 L16.5 -16.5 L21.5 -11.5 L19 -9Z" fill={D} />
            <animateMotion dur="4.4s" repeatCount="indefinite" path="M60,32 L96,32 L60,40 L90,48 L60,56 L88,64 L60,32" />
          </g>
          <rect x="112" y="24" width="28" height="22" rx="4" fill={L}>
            <animate attributeName="y" values="24;18;24" dur="3s" repeatCount="indefinite" />
          </rect>
          <path d="M118 38 124 32 130 36 136 28" stroke={B} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="opacity" values=".4;1;.4" dur="3s" repeatCount="indefinite" />
          </path>
        </g>
      )}

      {kind === "keyword" && (
        <g>
          {["seo", "intent", "local", "topic"].map((t, i) => (
            <g key={t}>
              <rect x={20 + i * 34} y="62" width="30" height="12" rx="6" fill="#fff" stroke={S} />
              <text x={35 + i * 34} y="70.5" textAnchor="middle" fontSize="6" fill={D} fontFamily="sans-serif">{t}</text>
              <animateTransform attributeName="transform" type="translate" values={`0 0;0 -${6 + i * 2};0 0`} dur={`${2.4 + i * 0.3}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </g>
          ))}
          <g>
            <circle cx="0" cy="0" r="13" fill="#fff" fillOpacity=".75" stroke={D} strokeWidth="2.5" />
            <path d="M9.5 9.5 18 18" stroke={D} strokeWidth="3" strokeLinecap="round" />
            <rect x="-6" y="-2" width="12" height="3" rx="1.5" fill={B} />
            <rect x="-6" y="3" width="8" height="3" rx="1.5" fill={S} />
            <animateMotion dur="5s" repeatCount="indefinite" path="M50,30 C70,18 100,18 116,32 C100,44 70,46 50,30" />
          </g>
        </g>
      )}

      {kind === "local" && (
        <g>
          <path d="M20 70 C50 60 60 40 90 46 S130 30 142 22" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
          <path d="M20 70 C50 60 60 40 90 46 S130 30 142 22" fill="none" stroke={S} strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.5s" repeatCount="indefinite" />
          </path>
          <circle cx="80" cy="66" r="6" fill={B} opacity=".4">
            <animate attributeName="r" values="4;22;4" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values=".5;0;.5" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <g>
            <path d="M80 62 C70 50 66 44 66 38a14 14 0 0 1 28 0c0 6-4 12-14 24Z" fill={B} />
            <circle cx="80" cy="38" r="5.5" fill="#fff" />
            <animateTransform attributeName="transform" type="translate" values="0 0;0 -5;0 0" dur="1.8s" repeatCount="indefinite" />
          </g>
          {[[30, 30], [124, 62]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="4" fill="#93C5FD">
              <animate attributeName="opacity" values=".3;1;.3" dur="2.4s" begin={`${i}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      )}

      {kind === "audit" && (
        <g>
          <rect x="26" y="10" width="76" height="72" rx="6" fill="#fff" stroke={S} />
          {[22, 38, 54].map((y, i) => (
            <g key={y}>
              <rect x="34" y={y} width="10" height="10" rx="2.5" fill="none" stroke={S} strokeWidth="1.5" />
              <path d={`m36 ${y + 5} 2.5 2.5 4-5`} fill="none" stroke={B} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="12" strokeDashoffset="12">
                <animate attributeName="stroke-dashoffset" values="12;0;0;12" keyTimes="0;.2;.85;1" dur="4.5s" begin={`${i * 1}s`} repeatCount="indefinite" />
              </path>
              <rect x="50" y={y + 2} width="40" height="3" rx="1.5" fill={S} />
              <rect x="50" y={y + 7} width="26" height="2.5" rx="1.25" fill={L} />
            </g>
          ))}
          <g>
            <circle cx="0" cy="0" r="12" fill="#fff" fillOpacity=".7" stroke={D} strokeWidth="2.5" />
            <path d="M8.5 8.5 16 16" stroke={D} strokeWidth="3" strokeLinecap="round" />
            <animateMotion dur="4.5s" repeatCount="indefinite" path="M108,26 C112,40 112,52 108,62 C114,50 116,38 108,26" />
          </g>
          <circle cx="124" cy="68" r="10" fill={B}>
            <animate attributeName="r" values="9;11;9" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <path d="m119.5 68 3 3 6-6.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
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
/*  Animated hero: search results                                      */
/* ------------------------------------------------------------------ */

const queries = ["web design for small business", "how to improve site structure", "local seo services near me"];
const meters = [
  { label: "Structure", color: "#2563EB" },
  { label: "Content", color: "#818CF8" },
  { label: "Technical", color: "#2563EB" },
];

function HeroVisual() {
  const [qIndex, setQIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const [phase, setPhase] = useState<"typing" | "results">("typing");
  const [rank, setRank] = useState(5);
  const [meter, setMeter] = useState(0);
  const [visibility, setVisibility] = useState(0);

  const query = queries[qIndex];

  // typing -> results -> next query
  useEffect(() => {
    if (phase === "typing") {
      if (typed < query.length) {
        const id = setTimeout(() => setTyped((t) => t + 1), 55);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setPhase("results"), 450);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setQIndex((q) => (q + 1) % queries.length);
      setTyped(0);
      setRank(5);
      setPhase("typing");
    }, 4600);
    return () => clearTimeout(id);
  }, [phase, typed, query.length]);

  // rank climbs up while results are showing
  useEffect(() => {
    if (phase !== "results") return;
    const id = setInterval(() => setRank((r) => (r > 1 ? r - 1 : r)), 650);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    const id = setInterval(() => setMeter((m) => (m + 1) % meters.length), 1800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (t: number) => {
      const p = Math.min(((t - start) % 6000) / 2800, 1);
      setVisibility(Math.round((1 - Math.pow(1 - p, 3)) * 64));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const showResults = phase === "results";
  // display order: "your site" row moves from position `rank` to top
  const rows = [0, 1, 2, 3, 4].map((i) => i);
  const youIndex = Math.min(rank, 5) - 1; // 0 = top
  const order = rows.filter((r) => r !== 4);
  order.splice(youIndex > 3 ? 3 : youIndex, 0, 4);

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-xl">
      <style>{`
        @keyframes sx-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes sx-glow { 0%,100% { opacity:.5; transform: scale(1) } 50% { opacity:.9; transform: scale(1.07) } }
        @keyframes sx-in { from { opacity:0; transform: translateY(14px) } to { opacity:1; transform:none } }
        @keyframes sx-ping { 0% { transform: scale(1); opacity:.6 } 100% { transform: scale(2.6); opacity:0 } }
        @keyframes sx-blink { 0%,45% { opacity:1 } 50%,95% { opacity:0 } 100% { opacity:1 } }
        @keyframes sx-sweep { 0% { transform: translateX(-120%) } 100% { transform: translateX(320%) } }
        @media (prefers-reduced-motion: reduce) { .sx-anim { animation: none !important } }
      `}</style>

      <div className="sx-anim absolute -inset-5 rounded-[2rem] bg-blue-100/55 blur-2xl" style={{ animation: "sx-glow 5s ease-in-out infinite" }} />

      {/* floating chips */}
      <div className="sx-anim absolute -left-4 top-32 z-10 hidden rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 shadow-lg sm:block" style={{ animation: "sx-float 5s ease-in-out infinite" }}>
        <p className="text-[10px] font-medium text-[#64748B]">Search visibility</p>
        <p className="text-sm font-semibold text-[#0F172A]">+{visibility}% <span className="text-emerald-500">↑</span></p>
      </div>
      <div className="sx-anim absolute -right-3 bottom-24 z-10 hidden items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 shadow-lg sm:flex" style={{ animation: "sx-float 6s ease-in-out -2s infinite" }}>
        <span className="relative flex size-2.5">
          <span className="sx-anim absolute inset-0 rounded-full bg-emerald-400" style={{ animation: "sx-ping 1.8s ease-out infinite" }} />
          <span className="relative size-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs font-semibold text-[#0F172A]">Indexed</span>
      </div>

      <div className="sx-anim relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.35)] sm:p-7" style={{ animation: "sx-in .8s ease-out both" }}>
        {/* search bar */}
        <div className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2.5">
          <svg className="size-4 shrink-0 text-[#64748B]" viewBox="0 0 20 20" fill="none"><circle cx="8.75" cy="8.75" r="5.5" stroke="currentColor" strokeWidth="1.5" /><path d="m13 13 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          <span className="min-w-0 flex-1 truncate text-xs text-slate-600 sm:text-sm">
            {query.slice(0, typed)}
            <span className="sx-anim ml-px inline-block h-3.5 w-px translate-y-0.5 bg-slate-500" style={{ animation: "sx-blink 1s steps(1) infinite" }} />
          </span>
          <span className={`h-6 w-12 shrink-0 rounded-md bg-blue-600 transition-transform duration-200 ${phase === "results" && rank === 5 ? "scale-90" : ""}`} />
        </div>

        {/* results */}
        <div className="relative mt-4 h-[236px] space-y-2.5 sm:h-[250px]">
          {!showResults && (
            <div className="absolute inset-0 space-y-2.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="relative h-[72px] overflow-hidden rounded-xl border border-slate-100 bg-slate-50/60">
                  <span className="sx-anim absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white to-transparent" style={{ animation: `sx-sweep 1.4s ease-in-out ${i * 0.15}s infinite` }} />
                </div>
              ))}
            </div>
          )}
          {showResults &&
            order.slice(0, 3).map((id, pos) => {
              const you = id === 4;
              return (
                <div
                  key={id}
                  className={`sx-anim rounded-xl border p-3.5 transition-all duration-500 ${you ? "border-blue-300 bg-blue-50/50 shadow-[0_10px_24px_-16px_rgba(37,99,235,0.5)]" : "border-slate-100 bg-white"}`}
                  style={{ animation: `sx-in .45s ease-out ${pos * 0.12}s both` }}
                >
                  <div className="flex items-start gap-3">
                    <span className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-semibold ${you ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-400"}`}>
                      {pos + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 rounded ${you ? "w-3/5 bg-[#0F172A]" : "w-3/5 bg-slate-600"}`} />
                        {you && <span className="rounded-full bg-blue-600 px-1.5 py-0.5 text-[9px] font-semibold text-white">Your site</span>}
                      </div>
                      <div className={`mt-2 h-1.5 w-2/5 rounded ${you ? "bg-blue-300" : "bg-blue-200"}`} />
                      <div className="mt-2 h-1.5 w-full rounded bg-slate-100" />
                      <div className="mt-1.5 h-1.5 w-4/5 rounded bg-slate-100" />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* meters */}
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {meters.map((m, i) => {
            const on = i === meter;
            return (
              <div key={m.label} className={`rounded-lg px-2 py-2.5 text-center transition-all duration-500 ${on ? "bg-blue-50 shadow-sm" : "bg-[#F8FAFC]"}`}>
                <span className="mx-auto block size-1.5 rounded-full transition-transform duration-500" style={{ backgroundColor: m.color, transform: on ? "scale(1.8)" : "scale(1)" }} />
                <span className={`mt-1.5 block text-[10px] font-medium transition-colors duration-500 sm:text-xs ${on ? "text-[#0F172A]" : "text-slate-500"}`}>{m.label}</span>
                <span className="mx-auto mt-1.5 block h-1 w-3/4 overflow-hidden rounded bg-slate-200">
                  <span className="block h-full rounded transition-[width] duration-700 ease-out" style={{ width: on ? "100%" : "35%", backgroundColor: m.color }} />
                </span>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-center text-xs text-[#64748B]">A thoughtful foundation for discoverable content · illustrative example</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SeoServicesPage() {
  return (
    <main>
      <style>{`
        @keyframes sx-faq { from { opacity:0; transform: translateY(-6px) } to { opacity:1; transform:none } }
        details[open] > .sx-faq-body { animation: sx-faq .3s ease-out both }
        @media (prefers-reduced-motion: reduce) { details[open] > .sx-faq-body { animation: none } }
      `}</style>

      <section className="relative isolate overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_10%,rgba(219,234,254,0.62),transparent_36%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-3xl">
            <Reveal><p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] sm:text-sm">SEO SERVICES</p></Reveal>
            <Reveal delay={100}>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#0F172A] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                Build Search Visibility That Supports Long-Term Growth
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
                We approach SEO through technical foundations, on-page optimization, useful content, clear site structure, and ongoing improvement—guided by your business goals and audience.
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

      <section aria-labelledby="seo-areas-heading" className="bg-[#F8FAFC] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="WHAT WE DO" title="SEO work grounded in the details" description="We look at the technical structure of your site and the usefulness of its content to find relevant areas to improve." id="seo-areas-heading" />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
            {seoAreas.map((area, index) => (
              <Reveal key={area.title} as="article" delay={(index % 3) * 120} className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_20px_40px_-25px_rgba(37,99,235,0.35)] motion-reduce:transform-none">
                <div className="relative h-36 overflow-hidden border-b border-[#E2E8F0]">
                  <SeoArt kind={area.art} className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transform-none" />
                  <span aria-hidden="true" className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-xl border border-blue-100 bg-white/90 text-sm font-semibold text-[#2563EB] shadow-sm backdrop-blur">0{index + 1}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-[#0F172A]">{area.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#64748B]">{area.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="foundation-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <SectionIntro eyebrow="A STRONG SEO FOUNDATION" title="Start with a site people and search engines can understand" description="Clear structure and useful information make a more coherent experience. These foundations support SEO work, but do not guarantee specific rankings." id="foundation-heading" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {foundations.map((item, i) => (
              <Reveal as="li" key={item} delay={(i % 4) * 90} className="group flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-sm font-medium leading-6 text-slate-700 transition-[border-color,background-color,box-shadow] hover:border-blue-200 hover:bg-white hover:shadow-md">
                <span aria-hidden="true" className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white"><CheckIcon /></span>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="seo-process-heading" className="border-y border-[#E2E8F0] bg-[#F8FAFC] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="OUR SEO PROCESS" title="A practical cycle of review and improvement" description="We organize SEO work into clear stages, then revisit priorities as the website and business needs develop." id="seo-process-heading" />
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

      <section aria-labelledby="seo-focus-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <SectionIntro eyebrow="WHAT WE FOCUS ON" title="Make each improvement count" description="We consider relevance and usefulness across the whole experience—not just where a keyword appears." id="seo-focus-heading" />
          <ul className="flex flex-wrap gap-2.5">
            {focusAreas.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 70} className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2 text-sm font-medium text-slate-700 transition-[border-color,background-color,color,transform] hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-[#2563EB]">
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="seo-development-heading" className="bg-[#F8FAFC] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionIntro eyebrow="SEO + WEB DEVELOPMENT" title="Technical implementation and useful content work together" description="SEO is easier to support when the website is built with clear information architecture and dependable technical foundations." id="seo-development-heading" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {seoDevItems.map((item, i) => (
              <Reveal as="li" key={item} delay={(i % 4) * 90} className="rounded-xl border border-[#E2E8F0] bg-white p-4 text-sm font-medium leading-6 text-slate-700 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="seo-faq-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <SectionIntro eyebrow="FAQ" title="SEO questions, answered clearly" description="A few useful details about search optimization and what to expect." id="seo-faq-heading" />
          <Reveal delay={120}>
            <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm text-left text-base font-semibold text-[#0F172A] transition-colors hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] text-[#2563EB] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"><PlusIcon /></span>
                  </summary>
                  <p className="sx-faq-body mt-3 pr-10 text-sm leading-6 text-[#64748B]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="seo-cta-heading" className="bg-white px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <Reveal className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-16">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">LET&apos;S PLAN YOUR NEXT STEP</p>
            <h2 id="seo-cta-heading" className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">Ready to Improve Your Search Visibility?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#64748B]">Tell us about your website and goals, and let&apos;s identify the right SEO priorities.</p>
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