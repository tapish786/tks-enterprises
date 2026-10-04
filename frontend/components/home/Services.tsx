import type { CSSProperties } from "react";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description:
      "Fast, scalable, and conversion-focused websites built around your business goals.",
    href: "/services/web-development",
    delay: 80,
    stagger: 0,
    icon: (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" className="size-6">
        <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3.5 9h17M9 13l-2 2 2 2m6-4 2 2-2 2m-3-4.5-1.5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "SEO Services",
    description:
      "Search-focused strategies designed to improve visibility, attract qualified traffic, and support sustainable growth.",
    href: "/services/seo",
    delay: 150,
    stagger: 4,
    icon: (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" className="size-6">
        <circle cx="10.5" cy="10.5" r="6.25" stroke="currentColor" strokeWidth="1.7" />
        <path d="m15.25 15.25 4.25 4.25M8 13v-2m2.5 2V8.5m2.5 4.5V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Clear, intuitive, and engaging interfaces designed around real users and business objectives.",
    href: "/services/ui-ux-design",
    delay: 220,
    stagger: 8,
    icon: (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" className="size-6">
        <path d="M5 4.5h14A1.5 1.5 0 0 1 20.5 6v12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 18V6A1.5 1.5 0 0 1 5 4.5Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3.5 9h17M8.5 12.5l6.25 6.25-1.5-3.5 3.5-1.5-8.25-1.25Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    description:
      "Distinctive visual designs that strengthen your brand identity across digital touchpoints.",
    href: "/services/graphic-design",
    delay: 290,
    stagger: 12,
    icon: (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" className="size-6">
        <path d="m12 3.75 8.25 4.5L12 12.75 3.75 8.25 12 3.75Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="m3.75 12 8.25 4.5 8.25-4.5M3.75 15.75l8.25 4.5 8.25-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "WordPress Development",
    description:
      "Flexible, responsive WordPress websites that are easy to manage and built for performance.",
    href: "/services/wordpress-development",
    delay: 360,
    stagger: 16,
    icon: (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" className="size-6">
        <path d="M6 3.75h8l4.25 4.5v11A1.75 1.75 0 0 1 16.5 21h-10A1.75 1.75 0 0 1 4.75 19.25V5.5A1.75 1.75 0 0 1 6.5 3.75Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M13.75 4v4.5h4.5M8 12h8m-8 3.5h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Website Maintenance",
    description:
      "Reliable website updates, improvements, monitoring, and ongoing technical support.",
    href: "/services/website-maintenance",
    delay: 430,
    stagger: 20,
    icon: (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" className="size-6">
        <path d="M12 3.5 19 6v5.25c0 4.5-2.85 7.55-7 9.25-4.15-1.7-7-4.75-7-9.25V6l7-2.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="m9 12.25 2 2 4-4.25" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section aria-labelledby="services-heading" className="relative isolate overflow-hidden border-t border-slate-100 bg-slate-50/60">
      <style>{`
        @keyframes tksServicesRise {
          from { opacity: 0; transform: translate3d(0, 16px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .tks-services-enter { animation: none !important; }
        }
        @supports (animation-timeline: view()) {
          .tks-services-enter {
            animation-timeline: view();
            animation-range: entry var(--service-stagger, 0%) entry calc(var(--service-stagger, 0%) + 38%);
            animation-delay: 0ms !important;
          }
        }
      `}</style>

      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-20 -z-10 size-80 rounded-full bg-blue-100/35 blur-3xl" />
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-12">
        <header className="tks-services-enter mx-auto mb-12 max-w-3xl text-center opacity-0 motion-safe:animate-[tksServicesRise_500ms_ease-out_both] motion-reduce:animate-none motion-reduce:opacity-100 sm:mb-14">
          <p className="mb-4 inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.16em] text-blue-700 sm:text-sm">
            <span aria-hidden="true" className="h-px w-7 bg-blue-600" />
            WHAT WE DO
            <span aria-hidden="true" className="h-px w-7 bg-blue-600" />
          </p>
          <h2 id="services-heading" className="text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            Digital Solutions Designed to Move Your Business Forward.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            From high-performance websites to search visibility and user-focused design, we create digital solutions that combine technology, creativity, and measurable business value.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <li
              key={service.title}
              className="tks-services-enter opacity-0 motion-safe:animate-[tksServicesRise_520ms_ease-out_both] motion-reduce:animate-none motion-reduce:opacity-100"
              style={{
                animationDelay: `${service.delay}ms`,
                "--service-stagger": `${service.stagger}%`,
              } as CSSProperties}
            >
              <article className="group/card flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-250 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-900/5 motion-reduce:transform-none motion-reduce:transition-none sm:p-7">
                <div className="flex size-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-colors duration-200 group-hover/card:border-blue-200 group-hover/card:bg-blue-100 motion-reduce:transition-none">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  aria-label={`Explore ${service.title} service`}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm text-sm font-semibold text-blue-700 transition-colors duration-200 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 motion-reduce:transition-none"
                >
                  Explore service
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20" fill="none" className="size-4 transition-transform duration-200 ease-out group-hover/card:translate-x-1 motion-reduce:transition-none">
                    <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
