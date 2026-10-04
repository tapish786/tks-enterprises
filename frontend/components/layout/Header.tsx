"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  ["Web Development", "/services/web-development"],
  ["SEO Services", "/services/seo"],
  ["UI/UX Design", "/services/ui-ux-design"],
  ["Graphic Design", "/services/graphic-design"],
  ["WordPress Development", "/services/wordpress-development"],
  ["Website Maintenance", "/services/website-maintenance"],
];
const links = [["Home", "/"], ["Our Work", "/work"], ["About", "/about"], ["Blog", "/blog"], ["Contact", "/contact"]];
const itemClass = "relative rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 ease-out after:absolute after:bottom-1 after:left-3 after:h-px after:w-0 after:bg-blue-600 after:transition-[width] after:duration-200 after:ease-out hover:text-blue-700 hover:after:w-[calc(100%-1.5rem)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:after:transition-none";
const ctaClass = "group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-px hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none";

function Arrow({ open }: { open: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={"size-4 transition-transform duration-200 ease-out motion-reduce:transition-none " + (open ? "rotate-180" : "")}><path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMobileOpen(false); setServicesOpen(false); }
    };
    const onPointer = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onPointer); };
  }, []);

  const close = () => { setMobileOpen(false); setServicesOpen(false); };
  const serviceLinks = (mobile: boolean) => services.map(([label, href]) => <Link key={label} href={href} onClick={close} tabIndex={mobile ? (mobileOpen && servicesOpen ? 0 : -1) : (servicesOpen ? 0 : -1)} className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-200 ease-out hover:bg-slate-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 motion-reduce:transition-none"><span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-blue-600/60 transition-transform duration-200 group-hover:scale-125 motion-reduce:transition-none" />{label}</Link>);

  return (
    <header ref={header} className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" onClick={close} aria-label="TKS Enterprises home" className="group inline-flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
          <span className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold tracking-tight text-white shadow-sm transition-all duration-200 ease-out group-hover:-translate-y-px group-hover:bg-blue-700 group-hover:shadow-md group-hover:shadow-blue-600/20 motion-reduce:transition-none">TKS</span>
          <span className="text-base font-semibold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-blue-700 sm:text-[17px] motion-reduce:transition-none">TKS Enterprises</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          <Link href={links[0][1]} className={itemClass}>{links[0][0]}</Link>
          <div className="relative">
            <button type="button" aria-expanded={servicesOpen} aria-controls="desktop-services" onClick={() => setServicesOpen((open) => !open)} className={itemClass + " inline-flex items-center gap-2"}>Services <Arrow open={servicesOpen} /></button>
            <div id="desktop-services" aria-hidden={!servicesOpen} className={"absolute left-0 top-full z-50 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-900/10 transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none " + (servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0")}>{serviceLinks(false)}</div>
          </div>
          {links.slice(1).map(([label, href]) => <Link key={label} href={href} className={itemClass}>{label}</Link>)}
        </nav>
        <Link href="/contact#quote" className={ctaClass + " hidden lg:inline-flex"}>Get a Quote <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        <button type="button" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((open) => !open)} className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 lg:hidden motion-reduce:transition-none">
          <span aria-hidden="true" className="relative block size-5">
            <span className={"absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ease-out motion-reduce:transition-none " + (mobileOpen ? "top-[9px] rotate-45" : "")} />
            <span className={"absolute left-0 top-[9px] block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ease-out motion-reduce:transition-none " + (mobileOpen ? "scale-x-0 opacity-0" : "")} />
            <span className={"absolute left-0 top-[17px] block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ease-out motion-reduce:transition-none " + (mobileOpen ? "top-[9px] -rotate-45" : "")} />
          </span>
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!mobileOpen} className={"overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity,transform] duration-200 ease-out lg:hidden motion-reduce:transition-none " + (mobileOpen ? "max-h-[36rem] translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-1 border-t-transparent opacity-0")}>
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          <Link href={links[0][1]} onClick={close} tabIndex={mobileOpen ? 0 : -1} className={itemClass}>{links[0][0]}</Link>
          <button type="button" aria-expanded={servicesOpen} aria-controls="mobile-services" onClick={() => setServicesOpen((open) => !open)} tabIndex={mobileOpen ? 0 : -1} className={itemClass + " flex w-full items-center justify-between text-left"}>Services <Arrow open={servicesOpen} /></button>
          <div id="mobile-services" aria-hidden={!servicesOpen} className={servicesOpen ? "ml-3 border-l border-slate-200 pl-3" : "hidden"}>{serviceLinks(true)}</div>
          {links.slice(1).map(([label, href]) => <Link key={label} href={href} onClick={close} tabIndex={mobileOpen ? 0 : -1} className={itemClass}>{label}</Link>)}
          <Link href="/contact#quote" onClick={close} tabIndex={mobileOpen ? 0 : -1} className={ctaClass + " mt-2"}>Get a Quote <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        </div>
      </nav>
    </header>
  );
}
