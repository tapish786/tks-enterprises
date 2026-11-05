import Link from "next/link";

const statuses = [
  { label: "Website Status", value: "Operational", tone: "green", mark: "✓" },
  { label: "Updates", value: "Up to date", tone: "blue", mark: "↻" },
  { label: "Backup", value: "Status checked", tone: "violet", mark: "◷" },
  { label: "Performance", value: "Monitoring", tone: "amber", mark: "⌁" },
];

const services = [
  { title: "WordPress Updates", text: "Keep the WordPress core, themes, and plugins in view and plan updates appropriate to the site." },
  { title: "Backup Planning", text: "Review backup arrangements and status as part of a considered website care routine." },
  { title: "Website Health Checks", text: "Review key pages and site behavior to help identify issues that need attention." },
  { title: "Performance Review", text: "Look for practical opportunities to improve loading experience and resource use." },
  { title: "Security Considerations", text: "Apply sensible upkeep practices and discuss security needs appropriate to the website." },
  { title: "Content & Website Updates", text: "Make agreed content or website changes to keep information current and useful." },
];

const steps = [
  { number: "01", title: "Review", text: "Understand your website, current setup, priorities, and maintenance needs." },
  { number: "02", title: "Prioritize", text: "Agree on the work to address first and the appropriate scope." },
  { number: "03", title: "Maintain", text: "Carry out agreed updates and upkeep with care for the existing site." },
  { number: "04", title: "Check", text: "Review key pages and functionality after changes where relevant." },
  { number: "05", title: "Plan ahead", text: "Discuss future improvements and a suitable ongoing arrangement if needed." },
];

const faqs = [
  { question: "What does website maintenance include?", answer: "It depends on the site and the agreed scope. Work may include updates, health checks, backup review, performance considerations, or agreed content changes." },
  { question: "Can you maintain my WordPress website?", answer: "We can review your WordPress setup and discuss the maintenance work that fits your website and requirements." },
  { question: "How often should a website be maintained?", answer: "The right schedule depends on the platform, plugins, how often the site changes, and its operational needs. We can discuss a suitable cadence after reviewing the site." },
  { question: "Do you provide hosting or backups?", answer: "Hosting and backup arrangements depend on the project agreement. We can review your current setup and clarify what is included." },
  { question: "Can I request updates to my website content?", answer: "Agreed content updates can be included in a maintenance scope. The details depend on the type and volume of changes." },
  { question: "Does maintenance guarantee my website will never have issues?", answer: "No. Ongoing care can help keep a site reviewed and up to date, but it cannot guarantee uninterrupted operation or eliminate every risk." },
];

const buttonClass = "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none";

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function MaintenanceDashboard() {
  return (
    <div className="maintenance-dashboard relative mx-auto w-full max-w-xl" aria-label="Illustrative website maintenance dashboard showing sample status cards, an animated performance chart, and a maintenance checklist" role="img">
      <div className="absolute -inset-5 rounded-[2rem] bg-blue-100/60 blur-2xl" />
      <div className="maintenance-card maintenance-card-1 relative rounded-3xl border border-[#E2E8F0] bg-white p-4 shadow-xl shadow-slate-900/[.07] sm:p-5">
        <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
          <div className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-xl bg-[#EFF6FF] text-[#2563EB]"><svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="none"><path d="M4 19V5m0 14h16M7 15l4-4 3 2 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span><div><p className="text-sm font-semibold">Site health overview</p><p className="mt-0.5 text-[10px] text-[#64748B]">Illustrative dashboard</p></div></div>
          <span className="rounded-full border border-[#E2E8F0] px-2.5 py-1 text-[10px] font-medium text-[#64748B]">Past 30 days</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">{statuses.map((item, index) => <div key={item.label} className={`maintenance-card maintenance-card-${index + 2} rounded-xl border border-[#E2E8F0] bg-white p-3`}><div className="flex items-center justify-between"><p className="text-[9px] font-medium leading-4 text-[#64748B]">{item.label}</p><span className={`maintenance-pulse status-${item.tone} grid size-5 place-items-center rounded-full text-[10px] font-bold`} aria-hidden="true">{item.mark}</span></div><p className="mt-1 text-[11px] font-semibold text-[#0F172A]">{item.value}</p></div>)}</div>

        <div className="mt-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3.5 sm:p-4">
          <div className="flex items-start justify-between"><div><p className="text-xs font-semibold">Performance trend</p><p className="mt-1 text-[10px] text-[#64748B]">Sample visualization · not live monitoring</p></div><span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2 py-1 text-[9px] font-medium text-[#2563EB]"><span className="size-1.5 rounded-full bg-[#2563EB]"/>Illustrative</span></div>
          <div className="mt-3 overflow-hidden">
            <svg className="h-28 w-full overflow-visible sm:h-32" viewBox="0 0 420 120" fill="none" preserveAspectRatio="none" aria-hidden="true">
              <path d="M8 98H412M8 68H412M8 38H412" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 5" />
              <path d="M8 91C31 88 37 75 60 79S91 83 110 67 143 72 164 58 197 67 216 53 250 59 270 43 303 55 326 35 360 45 382 26 400 32 412 17" stroke="#BFDBFE" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity=".55" />
              <path className="maintenance-chart-line" d="M8 91C31 88 37 75 60 79S91 83 110 67 143 72 164 58 197 67 216 53 250 59 270 43 303 55 326 35 360 45 382 26 400 32 412 17" pathLength="100" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path className="maintenance-chart-glint" d="M8 91C31 88 37 75 60 79S91 83 110 67 143 72 164 58 197 67 216 53 250 59 270 43 303 55 326 35 360 45 382 26 400 32 412 17" pathLength="100" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="412" cy="17" r="5" fill="#2563EB" stroke="white" strokeWidth="2" />
            </svg>
            <div className="mt-1 flex justify-between text-[9px] text-[#64748B]"><span>30 days ago</span><span>Recent</span></div>
          </div>
        </div>

        <div className="maintenance-card maintenance-card-6 mt-3 flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white p-3.5">
          <div className="maintenance-ring relative grid size-10 shrink-0 place-items-center rounded-full bg-[#EFF6FF]"><svg aria-hidden="true" className="absolute inset-0 size-10 -rotate-90" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="none" stroke="#DBEAFE" strokeWidth="3"/><circle className="maintenance-ring-progress" cx="20" cy="20" r="16" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" pathLength="100"/></svg><span className="text-[9px] font-bold text-[#2563EB]">✓</span></div>
          <div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-2"><p className="text-[11px] font-semibold">Maintenance checklist</p><span className="text-[9px] text-[#64748B]">Sample state</span></div><div className="mt-2 grid grid-cols-3 gap-2">{["Updates", "Backup", "Review"].map((item, i) => <div key={item} className={`maintenance-check maintenance-check-${i + 1} flex items-center gap-1 text-[9px] text-[#64748B]`}><span className="grid size-3 shrink-0 place-items-center rounded-full bg-[#DCFCE7] text-[8px] font-bold text-[#15803D]" aria-hidden="true">✓</span>{item}</div>)}</div></div>
        </div>
        <p className="mt-3 text-center text-[9px] text-[#64748B]">Visual concept only · statuses do not reflect a live website</p>
      </div>
      <style>{`
        .maintenance-chart-line { stroke-dasharray: 100; stroke-dashoffset: 100; animation: maintenance-draw 2.4s cubic-bezier(.22,.7,.2,1) .25s forwards; }
        .maintenance-chart-glint { stroke-dasharray: 4 96; stroke-dashoffset: 100; opacity: .75; animation: maintenance-glint 11s linear 2.7s infinite; }
        .maintenance-ring-progress { stroke-dasharray: 100; stroke-dashoffset: 100; animation: maintenance-ring-fill 1.6s ease-out .8s forwards; }
        .maintenance-pulse { animation: maintenance-pulse 3s ease-in-out infinite; }
        .maintenance-card { opacity: 0; transform: translateY(8px); animation: maintenance-enter .55s cubic-bezier(.2,.7,.2,1) forwards; }
        .maintenance-card-1 { animation-delay: .05s; }
        .maintenance-card-2 { animation-delay: .16s; }
        .maintenance-card-3 { animation-delay: .23s; }
        .maintenance-card-4 { animation-delay: .3s; }
        .maintenance-card-5 { animation-delay: .37s; }
        .maintenance-card-6 { animation-delay: .45s; }
        .maintenance-check { opacity: 0; transform: translateY(4px); animation: maintenance-enter .4s ease-out forwards; }
        .maintenance-check-1 { animation-delay: .75s; }
        .maintenance-check-2 { animation-delay: .9s; }
        .maintenance-check-3 { animation-delay: 1.05s; }
        @keyframes maintenance-draw { to { stroke-dashoffset: 0; } }
        @keyframes maintenance-glint { to { stroke-dashoffset: -100; } }
        @keyframes maintenance-ring-fill { to { stroke-dashoffset: 28; } }
        @keyframes maintenance-pulse { 0%,100% { opacity: 1; } 50% { opacity: .62; } }
        @keyframes maintenance-enter { to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          .maintenance-chart-line, .maintenance-chart-glint, .maintenance-ring-progress, .maintenance-pulse, .maintenance-card, .maintenance-check { animation: none !important; }
          .maintenance-chart-line { stroke-dashoffset: 0; }
          .maintenance-chart-glint { opacity: 0; }
          .maintenance-ring-progress { stroke-dashoffset: 28; }
          .maintenance-card, .maintenance-check { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}

export default function WebsiteMaintenancePage() {
  return (
    <main className="overflow-hidden bg-white text-[#0F172A]">
      <section className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-12 lg:py-24">
          <div>
            <p className="mb-5 text-xs font-bold tracking-[.2em] text-[#2563EB]">WEBSITE MAINTENANCE</p>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">Keep Your Website Ready for What&apos;s Next</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">Thoughtful website maintenance helps keep your site reviewed, current, and aligned with your business. TKS can help you plan updates, check key parts of your website, and address agreed improvements with care.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/contact#quote" className={`${buttonClass} bg-[#2563EB] text-white hover:bg-blue-700`}>Get a Quote <Arrow /></Link><Link href="/contact" className={`${buttonClass} border border-[#CBD5E1] bg-white text-[#0F172A] hover:border-[#2563EB] hover:text-[#2563EB]`}>Let&apos;s Talk</Link></div>
          </div>
          <MaintenanceDashboard />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24" aria-labelledby="maintenance-services-heading"><div className="max-w-2xl"><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">ONGOING WEBSITE CARE</p><h2 id="maintenance-services-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Maintenance that fits your website</h2><p className="mt-4 leading-7 text-[#64748B]">Every site has different needs. We can review your setup and agree on a practical scope for care and improvements.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map((item, i) => <article key={item.title} className="rounded-2xl border border-[#E2E8F0] p-6 sm:p-7"><span className="grid size-11 place-items-center rounded-xl bg-[#EFF6FF] text-sm font-semibold text-[#2563EB]">0{i + 1}</span><h3 className="mt-5 text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#64748B]">{item.text}</p></article>)}</div></section>

      <section className="border-y border-[#E2E8F0] bg-[#F8FAFC]" aria-labelledby="process-heading"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"><div className="max-w-2xl"><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">A CLEAR ROUTINE</p><h2 id="process-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A considered maintenance process</h2><p className="mt-4 leading-7 text-[#64748B]">We begin with your site's needs, then agree what to prioritize and how to review the work.</p></div><ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{steps.map(step => <li key={step.number} className="rounded-2xl border border-[#E2E8F0] bg-white p-5"><span className="text-sm font-bold text-[#2563EB]">{step.number}</span><h3 className="mt-5 font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#64748B]">{step.text}</p></li>)}</ol></div></section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24" aria-labelledby="faq-heading"><div className="text-center"><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">QUESTIONS & ANSWERS</p><h2 id="faq-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Website maintenance FAQs</h2></div><div className="mt-9 space-y-3">{faqs.map(faq => <details key={faq.question} className="group rounded-xl border border-[#E2E8F0] bg-white"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563EB] [&::-webkit-details-marker]:hidden"><span>{faq.question}</span><span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-[#EFF6FF] text-[#2563EB] transition-transform motion-reduce:transition-none group-open:rotate-45">+</span></summary><p className="px-5 pb-5 pr-14 text-sm leading-6 text-[#64748B]">{faq.answer}</p></details>)}</div></section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24"><div className="mx-auto max-w-7xl rounded-3xl bg-[#0F172A] px-6 py-12 text-center text-white sm:px-12 sm:py-16"><p className="text-xs font-bold tracking-[.18em] text-blue-300">READY WHEN YOU ARE</p><h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s Keep Your Website in Good Shape</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">Tell us about your website, current priorities, and the kind of support you are looking for.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/contact#quote" className={`${buttonClass} bg-[#2563EB] text-white hover:bg-blue-700`}>Get a Quote <Arrow /></Link><Link href="/contact" className={`${buttonClass} border border-white/25 text-white hover:bg-white/10`}>Let&apos;s Talk</Link></div></div></section>
    </main>
  );
}
