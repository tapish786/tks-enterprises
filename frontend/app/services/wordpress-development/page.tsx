import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WordPress Development | TKS Enterprises",
  description: "Responsive, manageable WordPress websites planned around your business, content, and goals.",
};

const services = [
  { title: "Business Website Development", text: "Build a professional website around your services, audiences, and the information your visitors need." },
  { title: "WordPress Theme Customization", text: "Adapt a suitable theme to better reflect your brand, content, and practical requirements." },
  { title: "Elementor Website Development", text: "Use Elementor where its visual editing approach is a good fit for the website and its editors." },
  { title: "Landing Page Development", text: "Create a focused page that explains an offer or service and guides visitors to a clear next step." },
  { title: "Website Redesign", text: "Refresh an existing website's structure, visual direction, and experience around current goals." },
  { title: "WordPress SEO Foundations", text: "Set up clear page structure and on-page essentials to support useful, search-aware content." },
];

const advantages = [
  { title: "Manageable publishing", text: "A content management interface can make routine page and post updates more accessible to your team." },
  { title: "Flexible structure", text: "Pages, posts, and suitable extensions can support different kinds of business content." },
  { title: "A broad ecosystem", text: "Themes and plugins offer options for common needs, with choices made to suit the project." },
  { title: "Sites and blogs", text: "WordPress can bring core business pages and ongoing publishing together in one platform." },
  { title: "Room to extend", text: "A site can evolve as requirements change, with additions planned around its existing foundation." },
];

const process = [
  { number: "01", title: "Discovery", description: "Understand business goals, audience, content, and requirements." },
  { number: "02", title: "Planning", description: "Define page structure, navigation, content hierarchy, and functionality." },
  { number: "03", title: "Design", description: "Establish a responsive visual direction consistent with the brand." },
  { number: "04", title: "Development", description: "Build and configure the WordPress website, then review functionality and responsive behavior." },
  { number: "05", title: "Launch & Handover", description: "Test key pages and interactions, then provide an agreed handover." },
];

const foundations = [
  { title: "Responsive layouts", text: "Content and navigation planned to adapt across mobile, tablet, and desktop." },
  { title: "Clear navigation", text: "A structure that helps visitors find relevant information and next steps." },
  { title: "Content management", text: "A manageable editing experience shaped around the content your team updates." },
  { title: "Contact forms", text: "Forms can be included where required and agreed for the project." },
  { title: "On-page SEO structure", text: "Descriptive titles, semantic headings, and a sensible page hierarchy." },
  { title: "Performance-conscious build", text: "Practical implementation choices that consider page weight and responsiveness." },
  { title: "Accessibility considerations", text: "Attention to readable content, keyboard use, contrast, and meaningful structure." },
  { title: "Security & maintenance", text: "Considerations for updates and ongoing care can be scoped to your needs." },
];

// Illustrative example only (sums to 100). Real projects vary with scope, content, and functionality.
const phaseSplit = [
  { label: "Discovery", value: 10, color: "#BFDBFE" },
  { label: "Planning", value: 15, color: "#93C5FD" },
  { label: "Design", value: 25, color: "#60A5FA" },
  { label: "Development", value: 35, color: "#2563EB" },
  { label: "Launch & Handover", value: 15, color: "#1D4ED8" },
];
const DONUT_CIRCUMFERENCE = 2 * Math.PI * 40;

const audiences = ["Small businesses", "Service providers", "Professional portfolios", "Blogs and publishers", "Businesses refreshing an existing website"];

const faqs = [
  { question: "What types of WordPress websites can you build?", answer: "We can discuss business websites, service provider sites, portfolios, blogs, landing pages, and other WordPress projects based on your requirements." },
  { question: "Can you redesign my existing WordPress website?", answer: "Yes. We can review the current site, understand what needs to improve, and agree on a redesign scope that fits your goals." },
  { question: "Do you work with Elementor?", answer: "Yes, when Elementor is suitable for the project. It is one option; the right approach depends on the site's editing needs and requirements." },
  { question: "Will my website work on mobile devices?", answer: "Responsive behavior is considered during design and development so the experience can adapt to mobile, tablet, and desktop screens." },
  { question: "Can I update website content myself?", answer: "WordPress supports content editing. The editing setup and handover can be planned around the content you need to manage." },
  { question: "Is WordPress SEO-friendly?", answer: "WordPress can support sound SEO foundations, but rankings depend on many factors. Technical setup alone cannot guarantee search visibility." },
  { question: "Do you provide ongoing maintenance?", answer: "Maintenance and additional services depend on the project agreement and can be discussed as part of planning." },
];

const buttonClass =
  "tks-btn group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const cardHover =
  "group h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/[.08] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

/*
  All motion is CSS only, so this stays a single server component (metadata keeps working).
  Scroll reveals use CSS scroll-driven animations (animation-timeline: view()).
  Browsers without support simply show the content normally, nothing is hidden.
*/
const animationCss = `
@keyframes tks-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-14px) } }
@keyframes tks-float-b { 0%,100% { transform: translateY(0) rotate(-2deg) } 50% { transform: translateY(10px) rotate(1deg) } }
@keyframes tks-drift { 0%,100% { transform: translate(0,0) scale(1) } 33% { transform: translate(24px,-18px) scale(1.08) } 66% { transform: translate(-18px,14px) scale(.95) } }
@keyframes tks-glow { 0%,100% { opacity: .55; transform: scale(1) } 50% { opacity: .95; transform: scale(1.08) } }
@keyframes tks-fade-up { from { opacity: 0; transform: translateY(26px) } to { opacity: 1; transform: translateY(0) } }
@keyframes tks-pop { from { opacity: 0; transform: scale(.88) translateY(20px) } to { opacity: 1; transform: scale(1) translateY(0) } }
@keyframes tks-shimmer { 0% { transform: translateX(-120%) } 100% { transform: translateX(220%) } }
@keyframes tks-gradient { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } }
@keyframes tks-ping { 0% { transform: scale(1); opacity: .7 } 100% { transform: scale(2.6); opacity: 0 } }
@keyframes tks-orbit { from { transform: translate(-50%,-50%) rotate(0deg) } to { transform: translate(-50%,-50%) rotate(360deg) } }
@keyframes tks-open { from { opacity: 0; transform: translateY(-8px) } to { opacity: 1; transform: translateY(0) } }

.tks-float { animation: tks-float 6s ease-in-out infinite; }
.tks-float-b { animation: tks-float-b 7s ease-in-out infinite; }
.tks-drift { animation: tks-drift 14s ease-in-out infinite; }
.tks-drift-slow { animation: tks-drift 20s ease-in-out infinite reverse; }
.tks-glow { animation: tks-glow 5s ease-in-out infinite; }
.tks-orbit { animation: tks-orbit 28s linear infinite; }
.tks-in { opacity: 0; animation: tks-fade-up .8s cubic-bezier(.2,.7,.2,1) forwards; }
.tks-pop { opacity: 0; animation: tks-pop .9s cubic-bezier(.2,.7,.2,1) .25s forwards; }
.tks-ping { animation: tks-ping 2s cubic-bezier(0,0,.2,1) infinite; }
.tks-grad-text { background: linear-gradient(90deg,#2563EB,#60A5FA,#1D4ED8,#2563EB); background-size: 300% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: tks-gradient 6s ease infinite; }
.tks-shimmer { position: relative; overflow: hidden; }
.tks-shimmer::after { content: ""; position: absolute; inset: 0; width: 45%; background: linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent); animation: tks-shimmer 2.8s ease-in-out infinite; }
.tks-btn::before { content: ""; position: absolute; inset: 0; width: 40%; transform: translateX(-160%) skewX(-20deg); background: linear-gradient(90deg,transparent,rgba(255,255,255,.35),transparent); transition: transform .7s ease; }
.tks-btn:hover::before { transform: translateX(320%) skewX(-20deg); }

.tks-line { transform-origin: left; }
.tks-progress { display: none; }
details[open] > .tks-answer { animation: tks-open .35s ease both; }

@supports (animation-timeline: view()) {
  @keyframes tks-r-up { from { opacity: 0; transform: translateY(36px) } to { opacity: 1; transform: none } }
  @keyframes tks-r-left { from { opacity: 0; transform: translateX(-44px) } to { opacity: 1; transform: none } }
  @keyframes tks-r-right { from { opacity: 0; transform: translateX(44px) } to { opacity: 1; transform: none } }
  @keyframes tks-r-scale { from { opacity: 0; transform: scale(.92) translateY(22px) } to { opacity: 1; transform: none } }
  @keyframes tks-r-line { from { transform: scaleX(0) } to { transform: scaleX(1) } }
  @keyframes tks-r-progress { from { transform: scaleX(0) } to { transform: scaleX(1) } }

  .tks-reveal { animation: tks-r-up linear both; animation-timeline: view(); animation-range: entry var(--s, 0%) entry calc(40% + var(--s, 0%)); }
  .tks-reveal[data-dir="left"] { animation-name: tks-r-left; }
  .tks-reveal[data-dir="right"] { animation-name: tks-r-right; }
  .tks-reveal[data-dir="scale"] { animation-name: tks-r-scale; }
  .tks-line { animation: tks-r-line linear both; animation-timeline: view(); animation-range: entry 10% entry 70%; }
  .tks-progress { display: block; animation: tks-r-progress linear both; animation-timeline: scroll(root block); }
}

@property --n { syntax: "<integer>"; inherits: false; initial-value: 0; }
.tks-count { --n: var(--t); counter-reset: c var(--n); }
.tks-count::after { content: counter(c) "%"; }
.tks-bar { width: var(--w); }
.tks-donut-seg { stroke-dasharray: var(--d); }

@keyframes tks-marquee { to { transform: translateX(-50%) } }
.tks-marquee-track { display: flex; width: max-content; animation: tks-marquee 38s linear infinite; }
.tks-marquee:hover .tks-marquee-track { animation-play-state: paused; }

@keyframes tks-particle { 0% { transform: translateY(0) scale(1); opacity: 0 } 20% { opacity: .85 } 100% { transform: translateY(-160px) scale(.4); opacity: 0 } }
.tks-particle { animation: tks-particle 7s ease-in infinite; }

@keyframes tks-spin-y { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
.tks-ring { animation: tks-spin-y 18s linear infinite; }

@supports (animation-timeline: view()) {
  @keyframes tks-r-bar { from { width: 0 } to { width: var(--w) } }
  @keyframes tks-r-count { from { --n: 0 } to { --n: var(--t) } }
  @keyframes tks-r-donut { from { stroke-dasharray: 0 251.33 } to { stroke-dasharray: var(--d) } }
  .tks-bar { animation: tks-r-bar linear both; animation-timeline: view(); animation-range: entry 10% entry 80%; }
  .tks-count { animation: tks-r-count linear both; animation-timeline: view(); animation-range: entry 10% entry 80%; }
  .tks-donut-seg { animation: tks-r-donut linear both; animation-timeline: view(); animation-range: entry 10% entry 85%; }
}

@media (prefers-reduced-motion: reduce) {
  .tks-marquee-track, .tks-particle, .tks-ring, .tks-bar, .tks-count, .tks-donut-seg { animation: none !important; }
  .tks-particle { display: none; }
  .tks-float, .tks-float-b, .tks-drift, .tks-drift-slow, .tks-glow, .tks-ping, .tks-grad-text { animation: none !important; }
  .tks-orbit { animation: none !important; transform: translate(-50%,-50%); }
  .tks-shimmer::after { display: none; }
  .tks-in, .tks-pop { animation: none !important; opacity: 1 !important; }
  .tks-reveal, .tks-line, .tks-progress { animation: none !important; opacity: 1 !important; transform: none !important; }
  details[open] > .tks-answer { animation: none !important; }
  .tks-btn::before { display: none; }
}
`;

type RevealProps = {
  as?: "div" | "li" | "article" | "section";
  children: ReactNode;
  className?: string;
  step?: number;
  dir?: "up" | "left" | "right" | "scale";
};

// Plain server-rendered wrapper; the animation itself is handled by CSS above.
function Reveal({ as: Tag = "div", children, className = "", step = 0, dir = "up" }: RevealProps) {
  return (
    <Tag className={`tks-reveal ${className}`} data-dir={dir} style={{ "--s": `${step}%` } as CSSProperties}>
      {children}
    </Tag>
  );
}

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4 transition-transform duration-300 group-hover:translate-x-1.5 motion-reduce:transition-none">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WordPressDevelopmentPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0F172A]">
      <style dangerouslySetInnerHTML={{ __html: animationCss }} />
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1">
        <div className="tks-progress h-full origin-left bg-[#2563EB]" style={{ transform: "scaleX(0)" }} />
      </div>

      {/* HERO */}
      <section className="relative border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="tks-drift absolute -left-24 top-10 size-72 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="tks-drift-slow absolute -right-20 bottom-0 size-80 rounded-full bg-blue-100/70 blur-3xl" />
          {[8, 18, 29, 41, 53, 64, 76, 88].map((left, i) => (
            <span key={left} className="tks-particle absolute bottom-6 size-1.5 rounded-full bg-[#2563EB]/50" style={{ left: `${left}%`, animationDelay: `${i * 0.9}s`, animationDuration: `${6 + (i % 3)}s` }} />
          ))}
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-12 lg:py-24">
          <div>
            <p className="tks-in mb-5 text-xs font-bold tracking-[.2em] text-[#2563EB]" style={{ animationDelay: "0.05s" }}>WORDPRESS DEVELOPMENT</p>
            <h1 className="tks-in text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]" style={{ animationDelay: "0.2s" }}>
              WordPress Websites Built Around <span className="tks-grad-text">Your Business</span>
            </h1>
            <p className="tks-in mt-6 max-w-xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8" style={{ animationDelay: "0.4s" }}>
              TKS helps businesses establish a professional online presence through responsive, manageable WordPress websites. We shape the structure, design, and functionality around your content and the goals you want your site to support.
            </p>
            <div className="tks-in mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact#quote" className={`${buttonClass} bg-[#2563EB] text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30`}>Get a Quote <Arrow /></Link>
              <Link href="/contact" className={`${buttonClass} border border-[#CBD5E1] bg-white text-[#0F172A] hover:border-[#2563EB] hover:text-[#2563EB]`}>Let&apos;s Talk</Link>
            </div>
          </div>

          <div role="img" aria-label="Abstract WordPress website preview showing a responsive business page layout" className="tks-pop relative mx-auto w-full max-w-xl">
            <div className="tks-glow absolute -inset-5 rounded-[2rem] bg-blue-100/60 blur-2xl" />
            <div aria-hidden="true" className="tks-float-b absolute -left-3 top-16 z-10 hidden rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 text-[10px] font-semibold text-[#0F172A] shadow-lg shadow-slate-900/[.08] sm:block">
              <span className="mr-1.5 inline-block size-1.5 rounded-full bg-[#2563EB]" />Responsive
            </div>
            <div aria-hidden="true" className="tks-float absolute -right-3 bottom-24 z-10 hidden rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 text-[10px] font-semibold text-[#0F172A] shadow-lg shadow-slate-900/[.08] sm:block" style={{ animationDelay: "1.2s" }}>
              <span className="mr-1.5 inline-block size-1.5 rounded-full bg-[#2563EB]" />SEO structure
            </div>

            <div className="tks-float relative rounded-3xl border border-[#E2E8F0] bg-white p-4 shadow-xl shadow-slate-900/[.06] sm:p-6">
              <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-4">
                <span className="size-2.5 rounded-full bg-[#CBD5E1]" /><span className="size-2.5 rounded-full bg-[#CBD5E1]" /><span className="size-2.5 rounded-full bg-[#CBD5E1]" />
                <span className="ml-auto rounded-full bg-[#F8FAFC] px-3 py-1.5 text-[10px] text-[#64748B]">yourbusiness.com</span>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-[#E2E8F0]">
                <div className="flex items-center justify-between bg-white px-4 py-3">
                  <div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-lg bg-[#2563EB] text-xs font-bold text-white">B</span><span className="text-xs font-semibold">YOUR BRAND</span></div>
                  <div className="hidden gap-4 text-[9px] font-medium text-[#64748B] sm:flex"><span>About</span><span>Services</span><span>Contact</span></div>
                  <span className="grid size-8 place-items-center rounded-lg border border-[#E2E8F0] text-[#64748B] sm:hidden" aria-hidden="true">☰</span>
                </div>
                <div className="grid min-h-56 grid-cols-[1.05fr_.95fr] bg-[#F8FAFC] sm:min-h-64">
                  <div className="flex flex-col items-start justify-center p-4 sm:p-7">
                    <span className="text-[9px] font-bold tracking-[.16em] text-[#2563EB]">A CLEAR START</span>
                    <div className="tks-shimmer mt-3 h-3 w-4/5 rounded-full bg-[#0F172A]" />
                    <div className="tks-shimmer mt-2 h-3 w-3/5 rounded-full bg-[#0F172A]" />
                    <div className="tks-shimmer mt-4 h-2 w-full rounded-full bg-[#CBD5E1]" />
                    <div className="tks-shimmer mt-2 h-2 w-4/5 rounded-full bg-[#CBD5E1]" />
                    <div className="mt-5 rounded-lg bg-[#2563EB] px-3 py-2 text-[9px] font-semibold text-white shadow-md shadow-blue-600/30">Explore services</div>
                  </div>
                  <div className="relative m-3 overflow-hidden rounded-xl bg-[#DBEAFE] sm:m-5">
                    <div className="tks-drift absolute -right-6 top-5 size-28 rounded-full bg-[#2563EB] sm:size-36" />
                    <div className="tks-float-b absolute right-8 top-12 h-28 w-20 -rotate-12 rounded-t-full bg-white/80 sm:right-10 sm:top-14 sm:h-36 sm:w-24" />
                    <div className="absolute bottom-4 left-4 h-2 w-1/2 rounded-full bg-white" />
                    <div className="absolute bottom-9 left-4 h-2 w-1/3 rounded-full bg-white/70" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-[#F8FAFC] px-4 py-3">
                <span className="text-[10px] font-medium text-[#64748B]">Responsive page preview</span>
                <span className="flex items-center gap-1.5 text-[10px] font-semibold text-[#2563EB]">
                  <span className="relative flex size-1.5"><span className="tks-ping absolute inline-flex size-full rounded-full bg-[#2563EB]" /><span className="relative size-1.5 rounded-full bg-[#2563EB]" /></span>
                  Content ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div aria-hidden="true" className="tks-marquee overflow-hidden border-b border-[#E2E8F0] bg-white py-4">
        <div className="tks-marquee-track">
          {[...services, ...services, ...services, ...services].map((item, i) => (
            <span key={i} className="mx-6 flex items-center gap-3 whitespace-nowrap text-sm font-medium text-[#64748B]">
              <span className="size-1.5 rounded-full bg-[#2563EB]" />
              {item.title}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24" aria-labelledby="services-heading">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">WORDPRESS SERVICES</p>
          <h2 id="services-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A website shaped for your needs</h2>
          <p className="mt-4 leading-7 text-[#64748B]">Choose a practical starting point. The platform, theme approach, and scope depend on your content and requirements.</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <Reveal key={item.title} step={(i % 3) * 8} dir="scale">
              <article className={`${cardHover} rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-7`}>
                <span className="grid size-11 place-items-center rounded-xl bg-[#EFF6FF] text-sm font-semibold text-[#2563EB] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white motion-reduce:transition-none">0{i + 1}</span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">{item.text}</p>
                <div className="mt-5 h-0.5 w-0 rounded-full bg-[#2563EB] transition-all duration-500 group-hover:w-12 motion-reduce:transition-none" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY WORDPRESS */}
      <section className="border-y border-[#E2E8F0] bg-[#F8FAFC]" aria-labelledby="why-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-24">
          <Reveal dir="left">
            <p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">A FLEXIBLE PLATFORM</p>
            <h2 id="why-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Why WordPress?</h2>
            <p className="mt-5 leading-7 text-[#64748B]">WordPress is a flexible option for many content-led websites. Whether it fits depends on your goals, editing needs, and required functionality.</p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {advantages.map((item, i) => (
              <Reveal key={item.title} step={(i % 2) * 8} dir="right">
                <article className={`${cardHover} rounded-2xl border border-[#E2E8F0] bg-white p-5`}>
                  <span className="inline-block text-xs font-bold text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">0{i + 1}</span>
                  <h3 className="mt-3 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#64748B]">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24" aria-labelledby="process-heading">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">HOW WE WORK</p>
          <h2 id="process-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Our development process</h2>
          <p className="mt-4 leading-7 text-[#64748B]">Each phase helps keep the finished site connected to the brief and the way you plan to use it.</p>
        </Reveal>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((step, i) => (
            <Reveal as="li" key={step.number} step={i * 6} className="list-none">
              <div className={`${cardHover} relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5`}>
                <div className="tks-line absolute inset-x-0 top-0 h-1 bg-[#2563EB]" />
                <span className="inline-grid size-9 place-items-center rounded-full bg-[#EFF6FF] text-sm font-bold text-[#2563EB] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white motion-reduce:transition-none">{step.number}</span>
                <h3 className="mt-5 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* CHART */}
      <section className="border-y border-[#E2E8F0] bg-[#F8FAFC]" aria-labelledby="chart-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-24">
          <Reveal dir="left">
            <p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">PROJECT AT A GLANCE</p>
            <h2 id="chart-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Where the effort goes</h2>
            <p className="mt-5 leading-7 text-[#64748B]">An illustrative split of effort across the five phases. Real projects vary with scope, content, and functionality.</p>
            <div className="tks-line mt-5 h-1 w-16 rounded-full bg-[#2563EB]" />
          </Reveal>
          <Reveal dir="right" step={6}>
            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-xl shadow-slate-900/[.04] sm:p-8">
              <div className="grid items-center gap-8 sm:grid-cols-[auto_1fr]">
                <div className="relative mx-auto size-44">
                  <svg viewBox="0 0 100 100" className="size-full -rotate-90" role="img" aria-label="Donut chart of illustrative effort split across five project phases">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#E2E8F0" strokeWidth="12" />
                    {phaseSplit.map((p, i) => {
                      const len = (p.value / 100) * DONUT_CIRCUMFERENCE;
                      const offset = phaseSplit.slice(0, i).reduce((sum, s) => sum + (s.value / 100) * DONUT_CIRCUMFERENCE, 0);
                      return (
                        <circle
                          key={p.label}
                          className="tks-donut-seg"
                          cx="50" cy="50" r="40" fill="none" stroke={p.color} strokeWidth="12"
                          strokeDashoffset={-offset}
                          style={{ "--d": `${len.toFixed(2)} ${(DONUT_CIRCUMFERENCE - len).toFixed(2)}` } as CSSProperties}
                        />
                      );
                    })}
                  </svg>
                  <div className="absolute inset-0 grid place-items-center text-center">
                    <div><p className="text-3xl font-semibold tracking-tight">5</p><p className="text-[10px] font-bold tracking-[.16em] text-[#64748B]">PHASES</p></div>
                  </div>
                  <div aria-hidden="true" className="tks-ring pointer-events-none absolute -inset-2 rounded-full border border-dashed border-blue-200" />
                </div>
                <ul className="space-y-4">
                  {phaseSplit.map((p) => (
                    <li key={p.label}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 font-medium"><span className="size-2.5 rounded-full" style={{ background: p.color }} />{p.label}</span>
                        <span className="font-semibold tabular-nums text-[#0F172A]">
                          <span className="sr-only">{p.value}%</span>
                          <span aria-hidden="true" className="tks-count" style={{ "--t": p.value } as CSSProperties} />
                        </span>
                      </div>
                      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-[#E2E8F0]">
                        <div className="tks-bar tks-shimmer h-full rounded-full" style={{ "--w": `${p.value}%`, background: p.color } as CSSProperties} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 border-t border-[#E2E8F0] pt-4 text-xs text-[#64748B]">Illustrative example, not a fixed quote or timeline.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDATIONS (dark) */}
      <section className="relative bg-[#0F172A] text-white" aria-labelledby="foundations-heading">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="tks-drift absolute -left-20 top-0 size-96 rounded-full bg-[#2563EB]/20 blur-3xl" />
          <div className="tks-drift-slow absolute -right-24 bottom-0 size-96 rounded-full bg-blue-400/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-[.18em] text-blue-300">A SOUND STARTING POINT</p>
            <h2 id="foundations-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Features and foundations</h2>
            <p className="mt-4 leading-7 text-slate-300">We consider the practical details that make a site easier to navigate, use, and maintain. Specific features are agreed around the project.</p>
          </Reveal>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {foundations.map((item, i) => (
              <Reveal key={item.title} step={(i % 4) * 6} dir="scale">
                <article className="group h-full rounded-xl border border-white/10 bg-white/[.04] p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/50 hover:bg-white/[.08] hover:shadow-lg hover:shadow-blue-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <span className="inline-block text-xs font-bold text-blue-300 transition-transform duration-300 group-hover:scale-125 motion-reduce:transition-none">0{i + 1}</span>
                  <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-300">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="border-b border-[#E2E8F0] bg-[#F8FAFC]" aria-labelledby="seo-heading">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-24">
          <Reveal dir="left">
            <p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">CONTENT & DISCOVERABILITY</p>
            <h2 id="seo-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">WordPress + SEO</h2>
            <div className="tks-line mt-5 h-1 w-16 rounded-full bg-[#2563EB]" />
          </Reveal>
          <Reveal dir="right" step={8}>
            <p className="text-lg leading-8 text-[#334155]">A clear site structure gives visitors and search engines useful context. Descriptive titles, semantic headings, relevant internal links, and useful content all contribute to a considered SEO foundation.</p>
            <p className="mt-4 leading-7 text-[#64748B]">Technical setup can support discoverability, but it does not guarantee rankings. Search performance also depends on content quality, competition, your audience, and other factors over time.</p>
          </Reveal>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24" aria-labelledby="audience-heading">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <Reveal dir="left">
            <p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">WHO IT&apos;S FOR</p>
            <h2 id="audience-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">WordPress for your next step</h2>
          </Reveal>
          <div>
            <Reveal step={4}>
              <p className="leading-7 text-[#64748B]">A WordPress project can serve a range of needs. We start by understanding what you want your website to do.</p>
            </Reveal>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {audiences.map((item, i) => (
                <Reveal as="li" key={item} step={(i % 2) * 8} dir="right" className="list-none">
                  <div className="group flex h-full items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-4 py-4 transition-all duration-300 hover:translate-x-1.5 hover:border-blue-300 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-x-0">
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#EFF6FF] text-xs font-bold text-[#2563EB] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#2563EB] group-hover:text-white motion-reduce:transition-none">0{i + 1}</span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-[#E2E8F0] bg-[#F8FAFC]" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <Reveal className="text-center">
            <p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">QUESTIONS & ANSWERS</p>
            <h2 id="faq-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">WordPress development FAQs</h2>
          </Reveal>
          <div className="mt-9 space-y-3">
            {faqs.map((faq) => (
              <Reveal key={faq.question}>
                <details className="group rounded-xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:border-blue-300 hover:shadow-md open:border-blue-300 open:shadow-md motion-reduce:transition-none">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563EB] [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-[#EFF6FF] text-[#2563EB] transition-all duration-300 group-open:rotate-45 group-open:bg-[#2563EB] group-open:text-white motion-reduce:transition-none">+</span>
                  </summary>
                  <p className="tks-answer px-5 pb-5 pr-14 text-sm leading-6 text-[#64748B]">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <Reveal dir="scale">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0F172A] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="tks-drift absolute -left-16 -top-16 size-72 rounded-full bg-[#2563EB]/30 blur-3xl" />
              <div className="tks-drift-slow absolute -bottom-20 -right-16 size-80 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="tks-orbit absolute left-1/2 top-1/2 size-[34rem] rounded-full border border-dashed border-white/10" style={{ transform: "translate(-50%,-50%)" }} />
            </div>
            <div className="relative">
              <p className="text-xs font-bold tracking-[.18em] text-blue-300">LET&apos;S GET STARTED</p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Ready to Build Your WordPress Website?</h2>
              <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">Share your business goals and website requirements. We&apos;ll discuss the right scope and a practical approach for your project.</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact#quote" className={`${buttonClass} bg-[#2563EB] text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30`}>Get a Quote <Arrow /></Link>
                <Link href="/contact" className={`${buttonClass} border border-white/25 text-white hover:bg-white/10`}>Let&apos;s Talk</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}