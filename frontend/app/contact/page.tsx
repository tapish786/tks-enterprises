"use client";

import Link from "next/link";
import { useId, useState, type ChangeEvent, type FormEvent } from "react";

type FormValues = {
  fullName: string;
  email: string;
  service: string;
  details: string;
};

type FieldName = keyof FormValues;
type FormErrors = Partial<Record<FieldName, string>>;

const serviceOptions = [
  "Web Development",
  "SEO",
  "UI/UX Design",
  "Graphic Design",
  "WordPress Development",
  "Website Maintenance",
  "Other",
];

const steps = [
  { number: "01", title: "Share your goals", text: "Tell us about your business, what you want to achieve, and what prompted the project." },
  { number: "02", title: "Discuss the approach", text: "We can explore the requirements, useful options, and any questions you have." },
  { number: "03", title: "Plan the next steps", text: "If it feels like a fit, we can outline a practical scope and how to move forward." },
];

const initialValues: FormValues = { fullName: "", email: "", service: "", details: "" };

function fieldError(field: FieldName, value: string): string {
  const cleanValue = value.trim();
  if (!cleanValue) {
    const labels: Record<FieldName, string> = {
      fullName: "Enter your full name.",
      email: "Enter your email address.",
      service: "Choose a service to discuss.",
      details: "Add a few details about your project.",
    };
    return labels[field];
  }
  if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanValue)) {
    return "Enter a valid email address.";
  }
  return "";
}

function validate(values: FormValues): FormErrors {
  return {
    fullName: fieldError("fullName", values.fullName),
    email: fieldError("email", values.email),
    service: fieldError("service", values.service),
    details: fieldError("details", values.details),
  };
}

const buttonClass = "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none";

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function ContactPage() {
  const id = useId();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showDemoSuccess, setShowDemoSuccess] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.currentTarget;
    const field = name as FieldName;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: fieldError(field, value) }));
    setShowDemoSuccess(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) {
      setShowDemoSuccess(false);
      return;
    }
    // Demo only: no email, database, or other external submission is performed.
    setShowDemoSuccess(true);
  }

  function inputClass(hasError: boolean) {
    return `mt-2 min-h-12 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition duration-200 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 ${hasError ? "border-rose-500" : "border-[#E2E8F0]"}`;
  }

  return (
    <main className="overflow-hidden bg-white text-[#0F172A]">
      <style>{`
        @keyframes contact-rise { from { opacity:0; transform:translate3d(0,16px,0); } to { opacity:1; transform:translate3d(0,0,0); } }
        @keyframes contact-drift { 0%,100% { transform:translate3d(0,0,0); } 50% { transform:translate3d(7px,-8px,0); } }
        @keyframes contact-orbit { to { transform:rotate(360deg); } }
        @keyframes contact-glow { 0%,100% { opacity:.5; transform:scale(.96); } 50% { opacity:.82; transform:scale(1.04); } }
        .contact-enter { animation:contact-rise .62s cubic-bezier(.22,1,.36,1) both; animation-delay:var(--contact-delay,0ms); }
        .contact-drift { animation:contact-drift 7s ease-in-out infinite; }
        .contact-orbit { animation:contact-orbit 38s linear infinite; transform-origin:center; }
        .contact-glow { animation:contact-glow 10s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .contact-enter,.contact-drift,.contact-orbit,.contact-glow { animation:none !important; opacity:1; transform:none; }
        }
      `}</style>

      <section className="relative isolate overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div aria-hidden="true" className="contact-glow pointer-events-none absolute -right-36 -top-40 size-[32rem] rounded-full bg-blue-100/80 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[.18] [background-image:radial-gradient(#94A3B8_0.7px,transparent_0.7px)] [background-size:24px_24px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[1fr_.82fr] lg:gap-14 lg:px-12 lg:py-20">
          <div className="contact-enter max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2.5 text-xs font-bold tracking-[.2em] text-[#2563EB]"><span aria-hidden="true" className="h-px w-7 bg-[#2563EB]"/>CONTACT TKS ENTERPRISES</p>
            <h1 className="text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Let’s Talk About Your Next Project</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">Tell us what you’re planning. We’ll help you explore the right digital solution for your goals.</p>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#64748B]">Whether you’re starting from scratch or improving an existing website, a little context helps us understand what would be useful.</p>
            <Link href="#quote" className={`${buttonClass} group mt-7 bg-[#2563EB] text-white shadow-sm shadow-blue-900/10 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md`}>Tell us about your project <Arrow /></Link>
          </div>

          <div aria-hidden="true" className="contact-enter relative mx-auto flex min-h-64 w-full max-w-lg items-center justify-center [--contact-delay:120ms] sm:min-h-80">
            <div className="contact-glow absolute inset-[12%] rounded-full bg-blue-100/80 blur-3xl" />
            <svg className="contact-orbit absolute inset-0 size-full" viewBox="0 0 500 360" fill="none"><ellipse cx="250" cy="180" rx="207" ry="126" stroke="#BFDBFE" strokeDasharray="3 8"/><ellipse cx="250" cy="180" rx="154" ry="166" transform="rotate(40 250 180)" stroke="#DBEAFE"/><circle cx="457" cy="180" r="5" fill="#2563EB"/><circle cx="91" cy="77" r="4" fill="#60A5FA"/></svg>
            <svg className="absolute inset-0 size-full" viewBox="0 0 500 360" fill="none"><path d="M113 105 194 151M387 101 306 151M121 256 195 210M379 259 305 210" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 7"/></svg>
            <div className="contact-drift absolute left-[9%] top-[18%] grid size-11 place-items-center rounded-2xl border border-[#E2E8F0] bg-white text-[#2563EB] shadow-lg shadow-slate-900/[.06] sm:size-14"><svg viewBox="0 0 24 24" className="size-5" fill="none"><path d="M4 6h16v12H4zM5 7l7 6 7-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <div className="contact-drift absolute right-[9%] top-[17%] grid size-11 place-items-center rounded-full border border-blue-100 bg-blue-50 text-xs font-bold text-[#2563EB] [animation-delay:-2.5s] sm:size-14">Hi</div>
            <div className="contact-drift absolute bottom-[15%] left-[10%] grid size-10 place-items-center rounded-xl border border-[#E2E8F0] bg-white text-lg text-[#2563EB] shadow-lg shadow-slate-900/[.06] [animation-delay:-4s] sm:size-12">✳</div>
            <div className="contact-drift absolute bottom-[13%] right-[8%] grid size-12 place-items-center rounded-2xl bg-[#0F172A] text-xs font-bold text-white shadow-xl shadow-slate-900/15 [animation-delay:-1s] sm:size-14">TKS</div>
            <div className="relative w-[72%] rounded-[1.6rem] border border-[#E2E8F0] bg-white p-5 shadow-[0_28px_70px_-40px_rgba(15,23,42,.35)] sm:p-7">
              <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-4"><span className="size-2 rounded-full bg-[#2563EB]"/><span className="text-[10px] font-bold tracking-[.15em] text-[#64748B]">PROJECT CONVERSATION</span></div>
              <p className="mt-5 text-xs font-medium text-[#64748B]">A thoughtful start</p><p className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">What would you like to build<span className="text-[#2563EB]">?</span></p>
              <div className="mt-5 space-y-2"><div className="h-2 w-full rounded-full bg-[#F1F5F9]"/><div className="h-2 w-4/5 rounded-full bg-[#F1F5F9]"/></div>
              <div className="mt-5 flex items-center justify-between rounded-xl bg-[#F8FAFC] px-3 py-2.5"><span className="text-[10px] font-medium text-[#64748B]">Goals · Audience · Scope</span><span className="grid size-7 place-items-center rounded-lg bg-[#2563EB] text-white"><Arrow /></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[.76fr_1.24fr] lg:gap-14 lg:px-12 lg:py-20" aria-labelledby="quote-heading">
        <div className="contact-enter max-w-md self-start lg:sticky lg:top-28">
          <p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">START A CONVERSATION</p>
          <h2 id="quote-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A few details help us get started</h2>
          <p className="mt-5 leading-7 text-[#64748B]">Share what you’re hoping to accomplish, who the project is for, and anything you already know about the scope. It’s fine if some details are still taking shape.</p>
          <div className="mt-7 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5"><p className="text-sm font-semibold">Helpful things to include</p><ul className="mt-4 space-y-3 text-sm text-[#64748B]">{["Your goals and intended audience", "The service or type of support you need", "Useful links or existing project context", "Any important requirements or constraints"].map(item => <li key={item} className="flex gap-3"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#DBEAFE] text-[11px] font-bold text-[#2563EB]" aria-hidden="true">✓</span><span>{item}</span></li>)}</ul></div>
          <p className="mt-5 text-xs leading-5 text-[#64748B]">Please don’t include passwords or other sensitive account credentials in this form.</p>
        </div>

        <form id="quote" noValidate onSubmit={handleSubmit} className="contact-enter scroll-mt-28 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-[0_24px_65px_-52px_rgba(15,23,42,.42)] [--contact-delay:100ms] sm:p-8 lg:p-9">
          <div className="mb-7 border-b border-[#E2E8F0] pb-5"><p className="text-xs font-bold tracking-[.16em] text-[#2563EB]">PROJECT ENQUIRY</p><h3 className="mt-2 text-xl font-semibold">Tell us a little about it</h3><p className="mt-2 text-sm leading-6 text-[#64748B]">Fields marked with <span className="font-semibold text-rose-700">*</span> are required.</p></div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2"><label htmlFor={`${id}-name`} className="text-sm font-semibold">Full name <span className="text-rose-700" aria-hidden="true">*</span></label><input id={`${id}-name`} name="fullName" type="text" autoComplete="name" required value={values.fullName} onChange={handleChange} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? `${id}-name-error` : undefined} className={inputClass(Boolean(errors.fullName))} placeholder="Your name"/>{errors.fullName && <p id={`${id}-name-error`} className="mt-1.5 text-xs font-medium text-rose-700">{errors.fullName}</p>}</div>
            <div className="sm:col-span-2"><label htmlFor={`${id}-email`} className="text-sm font-semibold">Email address <span className="text-rose-700" aria-hidden="true">*</span></label><input id={`${id}-email`} name="email" type="email" autoComplete="email" required value={values.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${id}-email-error` : undefined} className={inputClass(Boolean(errors.email))} placeholder="you@example.com"/>{errors.email && <p id={`${id}-email-error`} className="mt-1.5 text-xs font-medium text-rose-700">{errors.email}</p>}</div>
            <div className="sm:col-span-2"><label htmlFor={`${id}-service`} className="text-sm font-semibold">Service required <span className="text-rose-700" aria-hidden="true">*</span></label><select id={`${id}-service`} name="service" required value={values.service} onChange={handleChange} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? `${id}-service-error` : undefined} className={`${inputClass(Boolean(errors.service))} cursor-pointer`}><option value="">Choose a service</option>{serviceOptions.map(option => <option key={option} value={option}>{option}</option>)}</select>{errors.service && <p id={`${id}-service-error`} className="mt-1.5 text-xs font-medium text-rose-700">{errors.service}</p>}</div>
            <div className="sm:col-span-2"><label htmlFor={`${id}-details`} className="text-sm font-semibold">Project details <span className="text-rose-700" aria-hidden="true">*</span></label><textarea id={`${id}-details`} name="details" required rows={5} value={values.details} onChange={handleChange} aria-invalid={Boolean(errors.details)} aria-describedby={errors.details ? `${id}-details-error` : `${id}-details-hint`} className={`${inputClass(Boolean(errors.details))} min-h-36 resize-y`} placeholder="What are you looking to create or improve?"/><p id={`${id}-details-hint`} className="mt-1.5 text-xs text-[#64748B]">A short overview is enough to begin.</p>{errors.details && <p id={`${id}-details-error`} className="mt-1.5 text-xs font-medium text-rose-700">{errors.details}</p>}</div>
          </div>
          <button type="submit" className={`${buttonClass} group mt-7 w-full bg-[#2563EB] text-white shadow-sm shadow-blue-900/10 hover:bg-blue-700 focus-visible:ring-offset-4 sm:w-auto`}>Review enquiry <Arrow /></button>
          {showDemoSuccess && <p role="status" aria-live="polite" className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">Your details passed the demo validation. This form does not send or save your enquiry yet; a backend, API, or email integration is needed for real submission.</p>}
          <p className="mt-4 text-xs leading-5 text-[#64748B]">This demo form validates your entries in the browser only. Submitting does not send or store your information.</p>
        </form>
      </section>

      <section className="border-y border-[#E2E8F0] bg-[#F8FAFC]" aria-labelledby="steps-heading"><div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20"><div className="max-w-2xl"><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">WHAT HAPPENS NEXT</p><h2 id="steps-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A simple way to get started</h2></div><ol className="mt-8 grid gap-4 md:grid-cols-3">{steps.map((step, index) => <li key={step.number} className="contact-enter rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6" style={{ animationDelay: `${index * 100}ms` }}><span className="grid size-10 place-items-center rounded-xl bg-[#EFF6FF] text-xs font-bold text-[#2563EB]">{step.number}</span><h3 className="mt-5 text-lg font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#64748B]">{step.text}</p></li>)}</ol></div></section>

      <section className="px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0F172A] px-6 py-11 text-center text-white sm:px-12 sm:py-14"><div aria-hidden="true" className="contact-glow pointer-events-none absolute -right-20 -top-36 size-80 rounded-full bg-blue-500/20 blur-3xl"/><div className="relative"><p className="text-xs font-bold tracking-[.18em] text-blue-300">EXPLORE WHAT&apos;S POSSIBLE</p><h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Find the right digital service for your goals</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">Explore how web development, SEO, design, and ongoing website care can support your next step.</p><Link href="/services" className={`${buttonClass} group mt-8 bg-[#2563EB] text-white hover:bg-blue-700`}>Explore Services <Arrow /></Link></div></div></section>
    </main>
  );
}
