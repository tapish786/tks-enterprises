import Link from "next/link";
import type { CSSProperties } from "react";

type Project = {
  category: string;
  title: string;
  description: string;
  services: string;
  label: "Concept Project";
  href: string;
  visual: "business" | "commerce" | "growth";
};

const projects: Project[] = [
  {
    category: "Web Development",
    title: "Modern Business Website",
    label: "Concept Project",
    description:
      "A responsive business website focused on clear messaging, strong user experience, and performance.",
    services: "Web Development · UI/UX",
    href: "/work",
    visual: "business",
  },
  {
    category: "E-commerce",
    title: "Modern E-commerce Experience",
    label: "Concept Project",
    description:
      "A clean e-commerce interface designed around product discovery, usability, and conversion-focused structure.",
    services: "Web Development · UI/UX",
    href: "/work",
    visual: "commerce",
  },
  {
    category: "SEO & Digital Growth",
    title: "Organic Growth Strategy",
    label: "Concept Project",
    description:
      "A search-focused digital concept combining technical foundations, content structure, and growth-oriented UX.",
    services: "SEO · Strategy",
    href: "/work",
    visual: "growth",
  },
];

function ProjectPreview({ visual }: { visual: Project["visual"] }) {
  if (visual === "business") {
    return (
      <div className="preview-art preview-business relative flex h-full min-h-[260px] items-center justify-center overflow-hidden bg-[#EFF6FF] p-5 sm:min-h-[340px] lg:min-h-[400px]">
        <div aria-hidden="true" className="absolute -right-12 -top-16 h-56 w-56 rounded-full border-[34px] border-blue-200/60" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-blue-200/35 blur-2xl" />
        <div className="relative w-full max-w-[560px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_18px_55px_-28px_rgba(15,23,42,0.35)] transition-transform duration-300 ease-out group-hover:scale-[1.015]">
          <div className="flex h-8 items-center gap-1.5 border-b border-slate-100 px-3">
            <i className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            <i className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            <i className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            <div className="mx-auto h-3 w-2/5 rounded-sm bg-slate-100" />
          </div>
          <div className="grid min-h-[210px] grid-cols-[1.05fr_0.95fr] sm:min-h-[270px]">
            <div className="flex flex-col justify-center p-5 sm:p-8">
              <span className="h-1.5 w-14 rounded-full bg-blue-500" />
              <span className="mt-4 h-4 w-full max-w-48 rounded bg-slate-800" />
              <span className="mt-2 h-4 w-4/5 rounded bg-slate-800" />
              <span className="mt-4 h-2 w-full max-w-52 rounded bg-slate-200" />
              <span className="mt-2 h-2 w-4/5 rounded bg-slate-200" />
              <span className="mt-5 h-8 w-24 rounded-md bg-blue-600" />
            </div>
            <div aria-hidden="true" className="relative m-3 overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 via-slate-100 to-indigo-200 sm:m-5">
              <div className="absolute right-4 top-5 h-16 w-16 rounded-full bg-white/80 shadow-sm sm:h-24 sm:w-24" />
              <div className="absolute bottom-0 left-0 h-2/3 w-3/5 -skew-x-12 bg-blue-300/80" />
              <div className="absolute bottom-0 right-0 h-4/5 w-2/3 skew-x-[-18deg] bg-indigo-400/70" />
              <div className="absolute bottom-3 left-3 right-3 h-6 rounded bg-white/70" />
            </div>
          </div>
        </div>
        <span aria-hidden="true" className="absolute bottom-5 right-5 rounded-full border border-blue-200 bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-wide text-blue-700 shadow-sm">DIGITAL PRESENCE</span>
      </div>
    );
  }

  if (visual === "commerce") {
    return (
      <div className="preview-art relative flex h-full min-h-[220px] items-center justify-center overflow-hidden bg-[#F8FAFC] p-4 sm:min-h-[250px]">
        <div aria-hidden="true" className="absolute right-0 top-0 h-36 w-36 rounded-full bg-blue-100/70 blur-2xl" />
        <div className="relative w-full max-w-sm rounded-xl border border-slate-200 bg-white p-3 shadow-[0_14px_40px_-28px_rgba(15,23,42,0.35)] transition-transform duration-300 ease-out group-hover:scale-[1.02] sm:p-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="h-2 w-16 rounded bg-slate-800" />
            <div className="flex gap-2"><span className="h-2 w-7 rounded bg-slate-200" /><span className="h-2 w-7 rounded bg-slate-200" /><span className="h-4 w-4 rounded-full bg-blue-100" /></div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((item) => (
              <div key={item} className="rounded-md border border-slate-100 p-1.5">
                <div className={`flex h-16 items-center justify-center rounded-sm ${item === 1 ? "bg-blue-50" : "bg-slate-100"}`}>
                  <span aria-hidden="true" className={`h-8 w-7 rounded-t-full ${item === 1 ? "bg-blue-300" : "bg-slate-300"}`} />
                </div>
                <div className="mt-2 h-1.5 w-4/5 rounded bg-slate-300" />
                <div className="mt-1.5 h-1.5 w-1/2 rounded bg-slate-200" />
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between rounded-md bg-slate-50 px-2.5 py-2">
            <span className="h-1.5 w-20 rounded bg-slate-300" /><span className="h-5 w-16 rounded bg-blue-600" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="preview-art relative flex h-full min-h-[220px] items-center justify-center overflow-hidden bg-[#F1F5F9] p-4 sm:min-h-[250px]">
      <div aria-hidden="true" className="absolute -bottom-16 -left-8 h-40 w-40 rounded-full bg-blue-200/60 blur-2xl" />
      <div className="relative w-full max-w-sm rounded-xl border border-slate-200 bg-white p-3 shadow-[0_14px_40px_-28px_rgba(15,23,42,0.35)] transition-transform duration-300 ease-out group-hover:scale-[1.02] sm:p-4">
        <div className="flex items-center justify-between">
          <div className="h-2 w-24 rounded bg-slate-800" />
          <div className="h-5 w-12 rounded bg-blue-50" />
        </div>
        <div className="mt-3 grid grid-cols-[1fr_1.2fr] gap-2">
          <div className="space-y-2 rounded-md bg-slate-50 p-2.5">
            <div className="h-1.5 w-4/5 rounded bg-slate-300" />
            <div className="h-1.5 w-full rounded bg-slate-200" />
            <div className="h-1.5 w-3/5 rounded bg-slate-200" />
            <div className="mt-3 h-5 w-14 rounded bg-blue-100" />
          </div>
          <div className="relative flex h-[92px] items-end gap-1.5 overflow-hidden rounded-md bg-blue-50 p-2.5">
            <div aria-hidden="true" className="absolute inset-x-2 top-1/4 border-t border-dashed border-blue-200" />
            <div className="h-1/3 flex-1 rounded-t-sm bg-blue-200" />
            <div className="h-1/2 flex-1 rounded-t-sm bg-blue-300" />
            <div className="h-2/3 flex-1 rounded-t-sm bg-blue-400" />
            <div className="h-full flex-1 rounded-t-sm bg-blue-600" />
          </div>
        </div>
        <div className="mt-2.5 h-1.5 w-2/3 rounded bg-slate-200" />
      </div>
    </div>
  );
}

function ProjectCard({ project, featured = false, index }: { project: Project; featured?: boolean; index: number }) {
  return (
    <article
      className={`portfolio-reveal group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-[border-color,box-shadow] duration-300 ease-out hover:border-blue-200 hover:shadow-[0_18px_50px_-32px_rgba(37,99,235,0.35)] ${featured ? "lg:row-span-2" : ""}`}
      style={{ "--portfolio-delay": `${index * 110}ms` } as CSSProperties}
    >
      <Link
        href={project.href}
        aria-label={`Explore work: ${project.title} (${project.label})`}
        className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563EB]"
      >
        <div className="relative overflow-hidden">
          <ProjectPreview visual={project.visual} />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-blue-950/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className={`p-5 sm:p-6 ${featured ? "lg:p-7" : ""}`}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold tracking-wide text-[#2563EB]">{project.category}</span>
            <span className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-blue-700">{project.label}</span>
          </div>
          <h3 className={`mt-3 font-semibold tracking-tight text-[#0F172A] transition-transform duration-300 ease-out group-hover:translate-x-0.5 ${featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#64748B]">{project.description}</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E8F0] pt-4">
            <span className="text-xs text-[#64748B]">{project.services}</span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A] transition-colors duration-200 group-hover:text-[#2563EB]">
              Explore Work
              <svg aria-hidden="true" className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section aria-labelledby="portfolio-heading" className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      <style>{`
        @keyframes portfolio-enter {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .portfolio-reveal {
          animation: portfolio-enter 450ms ease-out both;
          animation-delay: var(--portfolio-delay, 0ms);
        }
        @supports (animation-timeline: view()) {
          .portfolio-reveal {
            animation-timeline: view();
            animation-range: entry 0% entry 35%;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .portfolio-reveal,
          .portfolio-reveal * {
            animation: none !important;
            transition-duration: 0.01ms !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="portfolio-reveal mb-10 max-w-3xl sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] sm:text-sm">OUR WORK</p>
          <h2 id="portfolio-heading" className="mt-4 text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">Selected Digital Work.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
            Explore a selection of digital experiences that demonstrate our approach to development, design, and digital growth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr]">
          <ProjectCard project={projects[0]} featured index={0} />
          {projects.slice(1).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
