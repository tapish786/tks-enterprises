import Link from "next/link";

const navigationGroups = [
  {
    title: "Services",
    links: [
      ["Web Development", "/services/web-development"],
      ["SEO Services", "/services/seo"],
      ["UI/UX Design", "/services/ui-ux-design"],
      ["Graphic Design", "/services/graphic-design"],
      ["WordPress Development", "/services/wordpress-development"],
      ["Website Maintenance", "/services/website-maintenance"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Our Work", "/work"],
      ["Contact", "/contact"],
      ["Get a Quote", "/contact#quote"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Blog", "/blog"],
      ["FAQ", "/faq"],
      ["Careers", "/careers"],
    ],
  },
];

const linkClass =
  "inline-flex rounded-sm text-sm leading-6 text-[#64748B] transition-colors duration-200 ease-out hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none";

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_0.8fr_0.8fr] lg:gap-12">
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="TKS Enterprises home"
              className="group inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#2563EB] text-sm font-bold tracking-tight text-white shadow-sm transition-colors duration-200 group-hover:bg-blue-700 motion-reduce:transition-none">
                TKS
              </span>
              <span className="text-base font-semibold tracking-tight text-[#0F172A] transition-colors duration-200 group-hover:text-[#2563EB] motion-reduce:transition-none sm:text-[17px]">
                TKS Enterprises
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#64748B]">
              Building digital experiences that help businesses grow.
            </p>
          </div>

          {navigationGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold text-[#0F172A]">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link className={linkClass} href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#E2E8F0] pt-6 text-sm sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[#64748B]">
            © 2026 TKS Enterprises. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link className={linkClass} href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/terms">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}