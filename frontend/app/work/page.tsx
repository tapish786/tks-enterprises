"use client";

import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Web Development", "UI/UX Design", "SEO", "WordPress", "Graphic Design"] as const;
type ProjectCategory = Exclude<(typeof categories)[number], "All">;
type ArtKind = "business" | "ecommerce" | "dashboard" | "seo" | "wordpress" | "identity";

type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  artwork: ArtKind;
};

const projects: Project[] = [
  { title: "Business Website Concept", category: "Web Development", description: "A clear, responsive business website concept built around useful information, simple navigation, and purposeful next steps.", artwork: "business" },
  { title: "E-commerce Experience Concept", category: "UI/UX Design", description: "A considered storefront concept exploring product discovery, readable details, and a straightforward browsing experience.", artwork: "ecommerce" },
  { title: "SaaS Dashboard UI Concept", category: "UI/UX Design", description: "A dashboard interface concept that organizes key actions and information into a calm, consistent workspace.", artwork: "dashboard" },
  { title: "SEO Strategy Concept", category: "SEO", description: "A sample planning concept connecting site structure, relevant content, and technical search foundations.", artwork: "seo" },
  { title: "WordPress Business Website Concept", category: "WordPress", description: "A flexible business website concept with a considered page structure and manageable content sections.", artwork: "wordpress" },
  { title: "Brand Identity Concept", category: "Graphic Design", description: "A visual identity exploration using considered typography, a focused palette, and adaptable graphic elements.", artwork: "identity" },
];

const process = [
  { number: "01", title: "Understand", description: "Clarify the audience, goals, and requirements." },
  { number: "02", title: "Plan", description: "Define structure, priorities, and the technical approach." },
  { number: "03", title: "Create", description: "Design and implement the digital experience." },
  { number: "04", title: "Refine", description: "Review usability, responsiveness, and implementation quality." },
];

const buttonClass = "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none";

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ProjectArtwork({ kind, large = false }: { kind: ArtKind; large?: boolean }) {
  const labels: Record<ArtKind, string> = {
    business: "Abstract business website concept with a blue feature panel and page layout",
    ecommerce: "Abstract e-commerce product cards and storefront concept",
    dashboard: "Abstract dashboard interface with panels and data visualization shapes",
    seo: "Abstract SEO planning concept showing connected content and structure",
    wordpress: "Abstract WordPress page preview with content and editor elements",
    identity: "Abstract brand identity concept with typography and color swatches",
  };
  return (
    <div role="img" aria-label={labels[kind]} className={`project-art project-art-${kind} relative isolate overflow-hidden ${large ? "min-h-72 sm:min-h-[26rem]" : "h-52"}`}>
      <div aria-hidden="true" className="project-glow absolute -right-16 -top-20 size-56 rounded-full bg-blue-200/55 blur-3xl" />
      <div aria-hidden="true" className="absolute inset-0 opacity-40 [background-image:radial-gradient(#94A3B8_0.7px,transparent_0.7px)] [background-size:20px_20px]" />
      {kind === "business" && <div aria-hidden="true" className={`project-art-float absolute ${large ? "left-[11%] top-[13%] w-[78%] rounded-2xl p-4 sm:p-6" : "left-[12%] top-[15%] w-[76%] rounded-xl p-3"} border border-white bg-white/90 shadow-xl shadow-slate-900/10`}><div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2"><span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#2563EB]"/><span className="h-1.5 w-16 rounded bg-slate-200"/></span><span className="h-1.5 w-12 rounded bg-slate-100"/></div><div className="mt-3 grid grid-cols-[1fr_.85fr] gap-3"><div className="py-1"><span className="block h-2 w-4/5 rounded bg-[#0F172A]"/><span className="mt-2 block h-1.5 w-full rounded bg-slate-200"/><span className="mt-1.5 block h-1.5 w-3/4 rounded bg-slate-100"/><span className="mt-3 block h-5 w-14 rounded-md bg-[#2563EB]"/></div><div className="relative min-h-24 overflow-hidden rounded-lg bg-[#DBEAFE]"><span className="absolute -right-3 top-2 size-20 rounded-full bg-[#2563EB]"/><span className="absolute bottom-2 left-2 h-2 w-12 rounded bg-white/80"/></div></div></div>}
      {kind === "ecommerce" && <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center gap-3"><div className="w-32 rounded-xl border border-white bg-white/90 p-2.5 shadow-lg"><span className="block h-16 rounded-lg bg-[#DBEAFE]"/><span className="mt-2 block h-1.5 w-4/5 rounded bg-slate-300"/><span className="mt-1.5 block h-1.5 w-1/2 rounded bg-slate-200"/></div><div className="w-32 translate-y-5 rounded-xl border border-white bg-white/90 p-2.5 shadow-lg"><span className="block h-16 rounded-lg bg-[#EFF6FF]"><span className="block h-full w-1/2 rounded-lg bg-[#2563EB]/80"/></span><span className="mt-2 block h-1.5 w-4/5 rounded bg-slate-300"/><span className="mt-1.5 block h-1.5 w-1/2 rounded bg-slate-200"/></div></div>}
      {kind === "dashboard" && <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center"><div className="flex h-32 w-[76%] overflow-hidden rounded-xl border border-white bg-white/90 shadow-xl"><div className="w-10 bg-[#0F172A] p-2"><span className="mx-auto block size-4 rounded bg-[#2563EB]"/><span className="mx-auto mt-3 block h-1 w-5 rounded bg-slate-500"/><span className="mx-auto mt-2 block h-1 w-5 rounded bg-slate-600"/></div><div className="flex-1 p-3"><span className="block h-2 w-1/3 rounded bg-slate-300"/><div className="mt-3 grid grid-cols-3 gap-2"><span className="h-7 rounded bg-[#EFF6FF]"/><span className="h-7 rounded bg-[#F8FAFC]"/><span className="h-7 rounded bg-[#EFF6FF]"/></div><div className="mt-3 flex h-12 items-end gap-1 rounded-lg bg-[#F8FAFC] px-2 pb-2"><span className="h-3 w-3 rounded-t bg-blue-200"/><span className="h-6 w-3 rounded-t bg-[#2563EB]"/><span className="h-4 w-3 rounded-t bg-blue-300"/><span className="h-8 w-3 rounded-t bg-[#0F172A]"/><span className="h-5 w-3 rounded-t bg-blue-200"/></div></div></div></div>}
      {kind === "seo" && <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center"><div className="relative w-[68%] rounded-xl border border-white bg-white/90 p-4 shadow-xl"><span className="block h-2 w-1/2 rounded bg-[#0F172A]"/><div className="mt-4 space-y-2"><div className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#2563EB]"/><span className="h-1.5 w-4/5 rounded bg-blue-100"/></div><div className="flex items-center gap-2"><span className="size-2 rounded-full bg-blue-300"/><span className="h-1.5 w-3/5 rounded bg-slate-200"/></div><div className="flex items-center gap-2"><span className="size-2 rounded-full bg-slate-300"/><span className="h-1.5 w-2/3 rounded bg-slate-100"/></div></div><span className="absolute -right-4 -top-4 grid size-10 place-items-center rounded-full border-4 border-white bg-[#2563EB] text-xs text-white">↗</span></div></div>}
      {kind === "wordpress" && <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center"><div className="relative w-[68%] rounded-xl border border-white bg-white/90 p-3 shadow-xl"><div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-lg bg-[#2563EB] text-xs font-bold text-white">W</span><span className="h-1.5 w-24 rounded bg-slate-200"/><span className="ml-auto size-2 rounded-full bg-emerald-400"/></div><div className="mt-3 grid grid-cols-[.8fr_1.2fr] gap-2"><span className="h-20 rounded-lg bg-[#EFF6FF]"/><div className="py-1"><span className="block h-2 w-4/5 rounded bg-[#0F172A]"/><span className="mt-2 block h-1.5 w-full rounded bg-slate-200"/><span className="mt-1.5 block h-1.5 w-3/4 rounded bg-slate-100"/><span className="mt-3 block h-4 w-12 rounded bg-[#2563EB]"/></div></div></div></div>}
      {kind === "identity" && <div aria-hidden="true" className="absolute inset-0 flex flex-col items-center justify-center"><div className="text-3xl font-semibold tracking-[.12em] text-[#0F172A] sm:text-4xl">TYPE <span className="text-[#2563EB]">/</span> FORM</div><div className="mt-4 flex gap-2"><span className="size-7 rounded-lg bg-[#0F172A]"/><span className="size-7 rounded-lg bg-[#2563EB]"/><span className="size-7 rounded-lg bg-[#93C5FD]"/><span className="size-7 rounded-lg bg-[#E2E8F0]"/></div><div className="mt-4 h-1.5 w-36 rounded-full bg-slate-300"/></div>}
      <span aria-hidden="true" className="absolute bottom-3 right-3 rounded-full border border-white/80 bg-white/75 px-2.5 py-1 text-[9px] font-bold tracking-[.13em] text-[#475569]">CONCEPT PROJECT</span>
    </div>
  );
}

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const visibleProjects = projects.filter((project) => activeCategory === "All" || project.category === activeCategory);
  const featured = projects[0];

  return (
    <main className="overflow-hidden bg-white text-[#0F172A]">
      <style>{`
        @keyframes work-rise { from { opacity:0; transform:translate3d(0,16px,0); } to { opacity:1; transform:translate3d(0,0,0); } }
        @keyframes work-float { 0%,100% { transform:translate3d(0,0,0); } 50% { transform:translate3d(6px,-8px,0); } }
        @keyframes work-orbit { to { transform:rotate(360deg); } }
        @keyframes work-glow { 0%,100% { opacity:.42; transform:scale(.96); } 50% { opacity:.78; transform:scale(1.04); } }
        .work-enter { animation:work-rise .6s cubic-bezier(.22,1,.36,1) both; animation-delay:var(--work-delay,0ms); }
        .work-float { animation:work-float 7.5s ease-in-out infinite; }
        .work-orbit { animation:work-orbit 48s linear infinite; transform-origin:center; }
        .work-glow { animation:work-glow 10s ease-in-out infinite; }
        .project-art { background:linear-gradient(145deg,#EFF6FF 0%,#F8FAFC 52%,#E0EAFC 100%); }
        .project-art-ecommerce { background:linear-gradient(145deg,#F8FAFC,#DBEAFE 58%,#EFF6FF); }
        .project-art-dashboard { background:linear-gradient(145deg,#E2E8F0,#EFF6FF 60%,#DBEAFE); }
        .project-art-seo { background:linear-gradient(145deg,#EAF2FF,#F8FAFC 58%,#DBEAFE); }
        .project-art-wordpress { background:linear-gradient(145deg,#DBEAFE,#F8FAFC 60%,#EEF2FF); }
        .project-art-identity { background:linear-gradient(145deg,#F1F5F9,#EFF6FF 55%,#E0F2FE); }
        .project-art-float { animation:work-float 8s ease-in-out infinite; }
        .work-card-enter { animation:work-rise .5s cubic-bezier(.22,1,.36,1) both; }
        @media (prefers-reduced-motion: reduce) { .work-enter,.work-float,.work-orbit,.work-glow,.project-art-float,.work-card-enter { animation:none !important; opacity:1; transform:none; } }
      `}</style>

      <section className="relative isolate overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div aria-hidden="true" className="work-glow pointer-events-none absolute -right-36 -top-40 size-[32rem] rounded-full bg-blue-100/75 blur-3xl"/>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[.16] [background-image:radial-gradient(#94A3B8_0.7px,transparent_0.7px)] [background-size:24px_24px]"/>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[1fr_.82fr] lg:gap-12 lg:px-12 lg:py-20">
          <div className="work-enter max-w-2xl"><p className="mb-5 inline-flex items-center gap-2.5 text-xs font-bold tracking-[.2em] text-[#2563EB]"><span aria-hidden="true" className="h-px w-7 bg-[#2563EB]"/>OUR WORK</p><h1 className="text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Ideas Into Digital Experiences</h1><p className="mt-6 max-w-xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">Explore the types of digital experiences TKS Enterprises designs and develops, from modern websites to thoughtful user experiences and search-focused solutions.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/services" className={`${buttonClass} group bg-[#2563EB] text-white shadow-sm shadow-blue-900/10 hover:-translate-y-0.5 hover:bg-blue-700`}>Explore Services <Arrow/></Link><Link href="/contact" className={`${buttonClass} border border-[#CBD5E1] bg-white text-[#0F172A] hover:-translate-y-0.5 hover:border-[#2563EB] hover:text-[#2563EB]`}>Let&apos;s Talk</Link></div></div>
          <div aria-hidden="true" className="work-enter relative mx-auto flex min-h-64 w-full max-w-lg items-center justify-center [--work-delay:120ms] sm:min-h-80"><div className="work-glow absolute inset-[12%] rounded-full bg-blue-100/80 blur-3xl"/><svg className="work-orbit absolute inset-0 size-full" viewBox="0 0 500 360" fill="none"><ellipse cx="250" cy="180" rx="205" ry="128" stroke="#BFDBFE" strokeDasharray="3 8"/><ellipse cx="250" cy="180" rx="154" ry="164" transform="rotate(40 250 180)" stroke="#DBEAFE"/><circle cx="455" cy="180" r="5" fill="#2563EB"/><circle cx="93" cy="74" r="4" fill="#60A5FA"/></svg><div className="work-float absolute left-[8%] top-[18%] grid size-11 place-items-center rounded-xl border border-[#E2E8F0] bg-white text-[#2563EB] shadow-lg shadow-slate-900/[.06] sm:size-14"><span className="text-xs font-bold">01</span></div><div className="work-float absolute right-[8%] top-[19%] grid size-11 place-items-center rounded-full bg-[#0F172A] text-xs font-bold text-white [animation-delay:-3s] sm:size-14">UI</div><div className="work-float absolute bottom-[14%] left-[10%] grid size-10 place-items-center rounded-xl border border-[#E2E8F0] bg-white text-lg text-[#2563EB] [animation-delay:-4s]">✳</div><div className="relative w-[76%] rotate-[-2deg] rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-xl shadow-slate-900/10 sm:p-5"><div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3"><span className="text-[9px] font-bold tracking-[.16em] text-[#2563EB]">TKS / DIGITAL WORK</span><span className="flex gap-1"><i className="size-1.5 rounded-full bg-blue-200"/><i className="size-1.5 rounded-full bg-[#2563EB]"/><i className="size-1.5 rounded-full bg-slate-200"/></span></div><p className="mt-5 text-xl font-semibold leading-tight tracking-tight sm:text-2xl">Purpose, shaped into pixels<span className="text-[#2563EB]">.</span></p><div className="mt-4 grid grid-cols-3 gap-2"><span className="h-12 rounded-lg bg-[#EFF6FF]"/><span className="h-12 rounded-lg bg-[#DBEAFE]"/><span className="h-12 rounded-lg bg-[#0F172A]"/></div><div className="mt-4 flex items-center justify-between"><span className="h-1.5 w-2/5 rounded-full bg-slate-200"/><span className="rounded-md bg-[#2563EB] px-2.5 py-1.5 text-[8px] font-semibold text-white">CONCEPT</span></div></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20" aria-labelledby="featured-heading"><div className="mb-6 flex items-center gap-3"><span className="h-px w-8 bg-[#2563EB]"/><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">FEATURED CONCEPT</p></div><article className="work-enter grid overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_24px_65px_-52px_rgba(15,23,42,.42)] lg:grid-cols-[.9fr_1.1fr]"><div className="order-2 flex flex-col justify-center p-6 sm:p-9 lg:order-1 lg:p-12"><span className="w-fit rounded-full border border-blue-100 bg-[#EFF6FF] px-3 py-1 text-[10px] font-bold tracking-wide text-[#2563EB]">CONCEPT PROJECT</span><h2 id="featured-heading" className="mt-5 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{featured.title}</h2><p className="mt-4 text-sm leading-7 text-[#64748B] sm:text-base">A sample direction for a business website that brings clear messaging, thoughtful page structure, and responsive design together around a practical user experience.</p><div className="mt-6 flex flex-wrap gap-2">{["Web development", "Responsive design", "User experience"].map((tag) => <span key={tag} className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-[10px] font-medium text-[#475569]">{tag}</span>)}</div></div><ProjectArtwork kind="business" large/></article></section>

      <section id="projects" className="scroll-mt-24 border-y border-[#E2E8F0] bg-[#F8FAFC]" aria-labelledby="projects-heading"><div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20"><div className="max-w-2xl"><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">PROJECT EXPLORATIONS</p><h2 id="projects-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A range of digital concepts</h2><p className="mt-4 leading-7 text-[#64748B]">These illustrative concepts show the kinds of work TKS can explore. They are not presented as commissioned or completed client projects.</p></div>
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter concept projects by category">{categories.map((category) => { const selected = activeCategory === category; return <button key={category} type="button" aria-pressed={selected} onClick={() => setActiveCategory(category)} className={`min-h-11 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none sm:text-sm ${selected ? "border-[#2563EB] bg-[#2563EB] text-white shadow-sm shadow-blue-900/10" : "border-[#E2E8F0] bg-white text-[#475569] hover:border-blue-200 hover:text-[#2563EB]"}`}>{category}</button>; })}</div>
          <p className="mt-5 text-xs text-[#64748B]" aria-live="polite">Showing {visibleProjects.length} of {projects.length} concept projects</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{visibleProjects.map((project, index) => <article key={project.title} className="work-card-enter group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/[.07] motion-reduce:transition-none motion-reduce:hover:translate-y-0" style={{ animationDelay: `${Math.min(index * 75, 375)}ms` }}><ProjectArtwork kind={project.artwork}/><div className="p-5 sm:p-6"><div className="flex flex-wrap items-center justify-between gap-2"><span className="rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[10px] font-semibold text-[#2563EB]">{project.category}</span><span className="rounded-full border border-[#E2E8F0] px-2.5 py-1 text-[9px] font-semibold text-[#64748B]">Concept Project</span></div><h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">{project.title}</h3><p className="mt-3 text-sm leading-6 text-[#64748B]">{project.description}</p><p className="mt-5 border-t border-[#E2E8F0] pt-4 text-xs font-medium text-[#64748B]">Illustrative concept · not client work</p></div></article>)}</div>
        </div></section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20" aria-labelledby="process-heading"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">HOW WE APPROACH A PROJECT</p><h2 id="process-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">From the first question to a refined result</h2><p className="mt-4 leading-7 text-[#64748B]">A practical process keeps the work tied to its purpose and the people it should serve.</p></div><div className="relative mt-10"><div aria-hidden="true" className="absolute left-[9%] right-[9%] top-5 hidden h-px bg-blue-200 lg:block"/><ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{process.map((step, index) => <li key={step.number} className="work-enter relative rounded-2xl border border-[#E2E8F0] bg-white p-5" style={{ animationDelay: `${index * 90}ms` }}><span className="relative z-10 grid size-10 place-items-center rounded-full border-4 border-white bg-[#2563EB] text-[10px] font-bold text-white shadow-sm shadow-blue-900/15">{step.number}</span><h3 className="mt-5 font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#64748B]">{step.description}</p></li>)}</ol></div></section>

      <section className="px-5 pb-14 sm:px-8 sm:pb-18 lg:px-12 lg:pb-20"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0F172A] px-6 py-11 text-center text-white sm:px-12 sm:py-14"><div aria-hidden="true" className="work-glow pointer-events-none absolute -right-20 -top-36 size-80 rounded-full bg-blue-500/20 blur-3xl"/><div className="relative"><p className="text-xs font-bold tracking-[.18em] text-blue-300">LET&apos;S START A CONVERSATION</p><h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Have a Project in Mind?</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">Let&apos;s discuss your goals and explore a practical digital solution for your business.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/contact#quote" className={`${buttonClass} group bg-[#2563EB] text-white hover:bg-blue-700`}>Get a Quote <Arrow/></Link><Link href="/services" className={`${buttonClass} border border-white/25 text-white hover:bg-white/10`}>Explore Services</Link></div></div></div></section>
    </main>
  );
}
