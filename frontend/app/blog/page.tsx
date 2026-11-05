"use client";

import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Web Development", "SEO", "UI/UX Design", "WordPress", "Technology"] as const;
type Category = (typeof categories)[number];
type ArtworkKind = "web" | "seo" | "ux" | "wordpress" | "technology" | "responsive";

type Article = {
  category: Exclude<Category, "All">;
  title: string;
  description: string;
  readingTime: string;
  artwork: ArtworkKind;
};

const articles: Article[] = [
  { category: "Web Development", title: "What Makes a Business Website Effective in 2026?", description: "Explore the essential elements of a modern business website, from user experience and performance to search visibility and clear calls to action.", readingTime: "6 min read", artwork: "web" },
  { category: "SEO", title: "Technical SEO Fundamentals Every Website Owner Should Know", description: "A practical introduction to the site structure, crawlability, metadata, and performance considerations behind technical SEO.", readingTime: "7 min read", artwork: "seo" },
  { category: "UI/UX Design", title: "Designing User Experiences That Feel Simple", description: "See how clear hierarchy, predictable patterns, and thoughtful content can make digital experiences easier to use.", readingTime: "5 min read", artwork: "ux" },
  { category: "WordPress", title: "How to Maintain a WordPress Website", description: "Understand the regular checks and considered updates that can help keep a WordPress site in good shape.", readingTime: "6 min read", artwork: "wordpress" },
  { category: "Technology", title: "How Modern Web Technologies Improve Digital Experiences", description: "Explore how current web tools can support responsive, capable, and maintainable digital products.", readingTime: "8 min read", artwork: "technology" },
  { category: "Web Development", title: "Responsive Web Design: From Desktop to Mobile", description: "Learn how flexible layouts and content-first decisions help a website adapt across screen sizes.", readingTime: "5 min read", artwork: "responsive" },
];

const featured = articles[0];

const buttonClass = "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none";

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ArticleArtwork({ kind, featured: isFeatured = false }: { kind: ArtworkKind; featured?: boolean }) {
  const labels: Record<ArtworkKind, string> = {
    web: "Abstract business website layout with content blocks and a blue visual panel",
    seo: "Abstract search optimization chart with structured page elements",
    ux: "Abstract interface cards arranged as a user experience flow",
    wordpress: "Abstract content publishing panel with layered page cards",
    technology: "Abstract modern technology grid with connected interface nodes",
    responsive: "Abstract desktop, tablet, and mobile website layouts",
  };

  return (
    <div role="img" aria-label={labels[kind]} className={`blog-art blog-art-${kind} relative isolate overflow-hidden ${isFeatured ? "min-h-64 sm:min-h-[24rem]" : "h-48"}`}>
      <div aria-hidden="true" className="blog-art-glow absolute -right-16 -top-20 size-56 rounded-full bg-blue-200/60 blur-3xl" />
      <div aria-hidden="true" className="absolute inset-0 opacity-40 [background-image:radial-gradient(#94A3B8_0.7px,transparent_0.7px)] [background-size:20px_20px]" />
      {kind === "web" && <div aria-hidden="true" className={`blog-art-float absolute ${isFeatured ? "left-[12%] top-[15%] w-[76%] rounded-2xl p-4 sm:p-6" : "left-[12%] top-[15%] w-[76%] rounded-xl p-3"} border border-white bg-white/90 shadow-xl shadow-slate-900/10`}><div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2"><span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#2563EB]"/><span className="h-1.5 w-16 rounded bg-slate-200"/></span><span className="h-1.5 w-12 rounded bg-slate-100"/></div><div className="mt-3 grid grid-cols-[1fr_.8fr] gap-3"><div className="py-1"><span className="block h-2 w-4/5 rounded bg-[#0F172A]"/><span className="mt-2 block h-1.5 w-full rounded bg-slate-200"/><span className="mt-1.5 block h-1.5 w-3/4 rounded bg-slate-100"/><span className="mt-3 block h-5 w-14 rounded-md bg-[#2563EB]"/></div><div className="relative min-h-20 overflow-hidden rounded-lg bg-[#DBEAFE]"><span className="absolute -right-2 top-2 size-16 rounded-full bg-[#2563EB]"/><span className="absolute bottom-2 left-2 h-2 w-10 rounded bg-white/80"/></div></div></div>}
      {kind === "seo" && <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center gap-4"><div className="flex h-28 w-48 items-end justify-center gap-2 rounded-2xl border border-white bg-white/85 px-5 pb-4 shadow-xl shadow-slate-900/10"><span className="h-8 w-5 rounded-t bg-blue-200"/><span className="h-12 w-5 rounded-t bg-blue-300"/><span className="h-10 w-5 rounded-t bg-[#2563EB]"/><span className="h-16 w-5 rounded-t bg-[#0F172A]"/></div><span className="grid size-12 place-items-center rounded-full border-4 border-[#2563EB] bg-white text-[#2563EB] shadow-lg"><span className="-mr-4 -mt-4 text-xl">⌕</span></span></div>}
      {kind === "ux" && <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center gap-2.5"><span className="h-20 w-14 rounded-lg border border-blue-100 bg-white/90 shadow-md"/><span className="grid size-14 place-items-center rounded-2xl bg-[#2563EB] text-sm font-bold text-white shadow-lg">UX</span><span className="h-20 w-14 rounded-lg border border-[#E2E8F0] bg-white/90 shadow-md"/><span className="absolute left-[26%] top-1/2 h-px w-[48%] -translate-y-1/2 bg-blue-300"/></div>}
      {kind === "wordpress" && <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center"><div className="relative grid size-28 place-items-center rounded-2xl border border-white bg-white/90 text-5xl font-semibold text-[#2563EB] shadow-xl shadow-slate-900/10">W<span className="absolute -bottom-3 -right-10 rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-[9px] font-semibold tracking-wider text-[#64748B] shadow-md">PUBLISH</span></div><span className="absolute left-[20%] top-[20%] size-3 rounded-full bg-blue-300"/><span className="absolute bottom-[18%] right-[20%] size-2 rounded-full bg-[#2563EB]"/></div>}
      {kind === "technology" && <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center"><div className="grid grid-cols-3 gap-2 rounded-2xl border border-white bg-white/80 p-4 shadow-xl shadow-slate-900/10">{Array.from({ length: 9 }, (_, index) => <span key={index} className={`grid size-8 place-items-center rounded-lg ${index === 4 ? "bg-[#2563EB]" : "bg-[#EFF6FF]"}`}><span className={`size-2 rounded-full ${index === 4 ? "bg-white" : "bg-blue-300"}`}/></span>)}</div><svg className="absolute inset-0 size-full" viewBox="0 0 360 190" fill="none"><path d="M80 45 180 95 280 45M80 145l100-50 100 50" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 7"/></svg></div>}
      {kind === "responsive" && <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center gap-2"><div className="h-24 w-40 rounded-lg border-2 border-slate-700 bg-white p-2 shadow-lg"><div className="h-full rounded bg-[#EFF6FF] p-2"><span className="block h-2 w-1/2 rounded bg-[#2563EB]"/><span className="mt-2 block h-1 w-4/5 rounded bg-blue-200"/><span className="mt-1 block h-1 w-3/5 rounded bg-blue-100"/></div></div><div className="h-20 w-12 rounded-lg border-2 border-slate-700 bg-white p-1.5 shadow-lg"><div className="h-full rounded bg-[#EFF6FF] p-1"><span className="block h-1 w-4/5 rounded bg-[#2563EB]"/><span className="mt-1 block h-1 w-full rounded bg-blue-200"/></div></div></div>}
      <span aria-hidden="true" className="absolute bottom-3 right-3 rounded-full border border-white/80 bg-white/75 px-2.5 py-1 text-[9px] font-bold tracking-[.13em] text-[#475569]">TKS / JOURNAL</span>
    </div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const searchable = `${article.title} ${article.description} ${article.category}`.toLowerCase();
    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
  });

  return (
    <main className="overflow-hidden bg-white text-[#0F172A]">
      <style>{`
        @keyframes journal-rise { from { opacity:0; transform:translate3d(0,16px,0); } to { opacity:1; transform:translate3d(0,0,0); } }
        @keyframes journal-drift { 0%,100% { transform:translate3d(0,0,0); } 50% { transform:translate3d(6px,-7px,0); } }
        @keyframes journal-orbit { to { transform:rotate(360deg); } }
        @keyframes journal-glow { 0%,100% { opacity:.45; transform:scale(.96); } 50% { opacity:.78; transform:scale(1.04); } }
        .journal-enter { animation:journal-rise .58s cubic-bezier(.22,1,.36,1) both; animation-delay:var(--journal-delay,0ms); }
        .journal-drift { animation:journal-drift 8s ease-in-out infinite; }
        .journal-orbit { animation:journal-orbit 52s linear infinite; transform-origin:center; }
        .journal-glow { animation:journal-glow 11s ease-in-out infinite; }
        .blog-art { background:linear-gradient(145deg,#EFF6FF 0%,#F8FAFC 52%,#E0EAFC 100%); }
        .blog-art-seo { background:linear-gradient(145deg,#EAF2FF,#F8FAFC 58%,#DBEAFE); }
        .blog-art-ux { background:linear-gradient(145deg,#F1F5F9,#EFF6FF 55%,#E0F2FE); }
        .blog-art-wordpress { background:linear-gradient(145deg,#DBEAFE,#F8FAFC 60%,#EEF2FF); }
        .blog-art-technology { background:linear-gradient(145deg,#EFF6FF,#E2E8F0 55%,#DBEAFE); }
        .blog-art-responsive { background:linear-gradient(145deg,#F8FAFC,#DBEAFE 55%,#E0F2FE); }
        .blog-card-enter { animation:journal-rise .5s cubic-bezier(.22,1,.36,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .journal-enter,.journal-drift,.journal-orbit,.journal-glow,.blog-card-enter { animation:none !important; opacity:1; transform:none; }
        }
      `}</style>

      <section className="relative isolate overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div aria-hidden="true" className="journal-glow pointer-events-none absolute -right-36 -top-40 size-[32rem] rounded-full bg-blue-100/70 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[.16] [background-image:radial-gradient(#94A3B8_0.7px,transparent_0.7px)] [background-size:24px_24px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[1fr_.82fr] lg:gap-12 lg:px-12 lg:py-20">
          <div className="journal-enter max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2.5 text-xs font-bold tracking-[.2em] text-[#2563EB]"><span aria-hidden="true" className="h-px w-7 bg-[#2563EB]"/>TKS ENTERPRISES JOURNAL</p>
            <h1 className="text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Insights for a Better Digital Future</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">Explore practical insights on web development, SEO, design, WordPress, and the technologies shaping better digital experiences.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="#articles" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transform-none">Explore insights <Arrow/></Link><Link href="/services" className={`${buttonClass} border border-[#CBD5E1] bg-white text-[#0F172A] hover:-translate-y-0.5 hover:border-[#2563EB] hover:text-[#2563EB]`}>Explore services</Link></div>
            <p className="mt-5 text-xs leading-5 text-[#64748B]">The topics below are sample editorial previews. They are not published articles.</p>
          </div>
          <div aria-hidden="true" className="journal-enter relative mx-auto flex min-h-64 w-full max-w-lg items-center justify-center [--journal-delay:120ms] sm:min-h-80">
            <div className="journal-glow absolute inset-[12%] rounded-full bg-blue-100/80 blur-3xl"/><svg className="journal-orbit absolute inset-0 size-full" viewBox="0 0 500 360" fill="none"><ellipse cx="250" cy="180" rx="207" ry="126" stroke="#BFDBFE" strokeDasharray="3 8"/><ellipse cx="250" cy="180" rx="156" ry="164" transform="rotate(42 250 180)" stroke="#DBEAFE"/><circle cx="457" cy="180" r="5" fill="#2563EB"/><circle cx="92" cy="76" r="4" fill="#60A5FA"/></svg>
            <div className="journal-drift absolute left-[8%] top-[18%] grid size-11 place-items-center rounded-xl border border-[#E2E8F0] bg-white text-sm font-bold text-[#2563EB] shadow-lg shadow-slate-900/[.06] sm:size-14">Aa</div><div className="journal-drift absolute right-[8%] top-[20%] grid size-10 place-items-center rounded-full bg-[#0F172A] text-xs font-bold text-white [animation-delay:-3s] sm:size-12">SEO</div>
            <div className="relative w-[75%] rotate-[-2deg] rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-xl shadow-slate-900/10 sm:p-5"><div className="flex items-center justify-between"><span className="text-[9px] font-bold tracking-[.16em] text-[#2563EB]">FIELD NOTES / 01</span><span className="text-[9px] text-[#64748B]">TKS JOURNAL</span></div><p className="mt-5 max-w-xs text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">Ideas that make digital work better<span className="text-[#2563EB]">.</span></p><div className="mt-5 flex gap-2"><span className="rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[9px] font-medium text-[#2563EB]">Web</span><span className="rounded-full bg-[#F8FAFC] px-2.5 py-1 text-[9px] font-medium text-[#64748B]">Design</span><span className="rounded-full bg-[#F8FAFC] px-2.5 py-1 text-[9px] font-medium text-[#64748B]">SEO</span></div></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20" aria-labelledby="featured-heading">
        <div className="mb-6 flex items-center gap-3"><span className="h-px w-8 bg-[#2563EB]"/><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">EDITORIAL PREVIEW</p></div>
        <article className="journal-enter grid overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_24px_65px_-52px_rgba(15,23,42,.42)] lg:grid-cols-[1fr_.92fr]">
          <div className="order-2 flex flex-col justify-center p-6 sm:p-9 lg:order-1 lg:p-12"><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-[10px] font-semibold text-[#2563EB]">{featured.category}</span><span className="text-xs text-[#64748B]">{featured.readingTime}</span><span className="rounded-full border border-[#E2E8F0] px-2.5 py-1 text-[9px] font-medium text-[#64748B]">Sample topic · draft</span></div><h2 id="featured-heading" className="mt-5 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{featured.title}</h2><p className="mt-4 text-sm leading-7 text-[#64748B] sm:text-base">{featured.description}</p><p className="mt-6 inline-flex min-h-11 w-fit items-center rounded-xl border border-dashed border-[#CBD5E1] px-4 text-xs font-semibold text-[#64748B]">Article preview · page not published</p></div>
          <ArticleArtwork kind={featured.artwork} featured />
        </article>
      </section>

      <section id="articles" className="scroll-mt-24 border-y border-[#E2E8F0] bg-[#F8FAFC]" aria-labelledby="articles-heading">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-2xl"><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">EXPLORE THE JOURNAL</p><h2 id="articles-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Ideas, explained clearly</h2><p className="mt-4 leading-7 text-[#64748B]">Browse sample topics across digital strategy, design, and technology. Article pages will be added when the writing is ready.</p></div>
            <div className="w-full lg:max-w-sm"><label htmlFor="article-search" className="text-xs font-semibold text-[#334155]">Search sample topics</label><div className="relative mt-2"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#64748B]"><circle cx="10.8" cy="10.8" r="6.3" stroke="currentColor" strokeWidth="1.7"/><path d="m15.5 15.5 4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg><input id="article-search" type="search" value={query} onChange={(event) => setQuery(event.currentTarget.value)} placeholder="Search topics or categories" className="min-h-12 w-full rounded-xl border border-[#E2E8F0] bg-white py-3 pl-10 pr-24 text-sm text-[#0F172A] outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 placeholder:text-slate-400"/>{query && <button type="button" onClick={() => setQuery("")} className="absolute right-2 top-1/2 min-h-9 -translate-y-1/2 rounded-lg px-2.5 text-xs font-semibold text-[#2563EB] hover:bg-[#EFF6FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]">Clear search</button>}</div></div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter sample articles by category">{categories.map((category) => { const selected = activeCategory === category; return <button key={category} type="button" aria-pressed={selected} onClick={() => setActiveCategory(category)} className={`min-h-11 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none sm:text-sm ${selected ? "border-[#2563EB] bg-[#2563EB] text-white shadow-sm shadow-blue-900/10" : "border-[#E2E8F0] bg-white text-[#475569] hover:border-blue-200 hover:text-[#2563EB]"}`}>{category}</button>; })}</div>

          <p className="mt-5 text-xs text-[#64748B]" aria-live="polite">Showing {visibleArticles.length} of {articles.length} sample topics</p>
          {visibleArticles.length > 0 ? <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{visibleArticles.map((article, index) => <article key={article.title} className="blog-card-enter group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/[.07]" style={{ animationDelay: `${Math.min(index * 75, 375)}ms` }}><ArticleArtwork kind={article.artwork}/><div className="p-5 sm:p-6"><div className="flex items-center justify-between gap-2"><span className="rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[10px] font-semibold text-[#2563EB]">{article.category}</span><span className="text-[10px] text-[#64748B]">{article.readingTime}</span></div><h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">{article.title}</h3><p className="mt-3 text-sm leading-6 text-[#64748B]">{article.description}</p><div className="mt-5 flex items-center justify-between border-t border-[#E2E8F0] pt-4"><span className="text-xs font-semibold text-[#475569]">Sample editorial preview</span><span className="text-[10px] font-medium text-[#64748B]">Draft topic · no article page</span></div></div></article>)}</div> : <div className="mt-4 rounded-2xl border border-dashed border-[#CBD5E1] bg-white px-5 py-12 text-center"><span aria-hidden="true" className="mx-auto grid size-11 place-items-center rounded-xl bg-[#EFF6FF] text-lg text-[#2563EB]">⌕</span><h3 className="mt-4 text-lg font-semibold">No matching topics</h3><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748B]">Try another search phrase or choose a different category to explore the sample topics.</p><button type="button" onClick={() => { setQuery(""); setActiveCategory("All"); }} className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl border border-[#E2E8F0] px-4 text-sm font-semibold text-[#0F172A] transition hover:border-[#2563EB] hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2">Reset filters</button></div>}
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0F172A] px-6 py-11 text-center text-white sm:px-12 sm:py-14"><div aria-hidden="true" className="journal-glow pointer-events-none absolute -right-20 -top-36 size-80 rounded-full bg-blue-500/20 blur-3xl"/><div className="relative"><p className="text-xs font-bold tracking-[.18em] text-blue-300">LET&apos;S PUT IDEAS TO WORK</p><h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Have a Digital Project in Mind?</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">Explore how TKS Enterprises can help with your website, search visibility, design, or ongoing digital needs.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/services" className={`${buttonClass} group bg-[#2563EB] text-white hover:bg-blue-700`}>Explore Services <Arrow/></Link><Link href="/contact" className={`${buttonClass} border border-white/25 text-white hover:bg-white/10`}>Contact Us</Link></div></div></div></section>
    </main>
  );
}
