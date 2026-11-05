import Link from "next/link";

const services = [
  { title: "Brand Identity Design", text: "Build a recognizable visual system with considered color, type, and supporting graphic elements." },
  { title: "Logo Design", text: "Create a clear, memorable mark shaped around your business and how it needs to be recognized." },
  { title: "Marketing Materials", text: "Design brochures, flyers, and other collateral that present your message with clarity." },
  { title: "Social Media Graphics", text: "Prepare platform-aware graphics that make your content feel connected and easy to identify." },
  { title: "Digital Ad Creatives", text: "Develop focused visual assets that bring an offer or campaign message into view." },
  { title: "Presentation Design", text: "Organize information into polished, readable slides for business and brand communication." },
];

const identity = [
  { n: "01", title: "Logo & variations", text: "A primary mark and considered variations help your identity adapt to different sizes and placements." },
  { n: "02", title: "Color palette", text: "A defined palette gives communications a recognizable tone and a consistent visual base." },
  { n: "03", title: "Typography", text: "Type choices and usage create a distinctive voice while keeping information readable." },
  { n: "04", title: "Visual elements", text: "Shapes, patterns, and supporting graphics add character and help extend the identity." },
  { n: "05", title: "Consistency", text: "Using these elements with care connects your website, social channels, and materials." },
];

const process = [
  { number: "01", title: "Discover", description: "Understand the business, audience, goals, and brief." },
  { number: "02", title: "Direction", description: "Establish the visual direction and creative priorities." },
  { number: "03", title: "Concept", description: "Explore suitable concepts and layouts." },
  { number: "04", title: "Refine", description: "Improve the selected direction using feedback." },
  { number: "05", title: "Deliver", description: "Prepare final assets in appropriate formats." },
];

const applications = ["Websites & landing pages", "Social media", "Digital advertising", "Marketing collateral", "Business presentations", "Brand communication"];
const principles = [
  { title: "Clarity", text: "Make the message easy to understand at a glance." },
  { title: "Consistency", text: "Use a recognizable visual language across every touchpoint." },
  { title: "Visual hierarchy", text: "Give the most important information the right emphasis." },
  { title: "Typography", text: "Choose readable type and use it with purpose." },
  { title: "Color", text: "Use color to support meaning, recognition, and contrast." },
  { title: "Simplicity", text: "Keep the composition focused on what matters." },
];
const faqs = [
  { question: "What graphic design services do you offer?", answer: "We can discuss brand identity, logo design, marketing materials, social media graphics, digital ad creatives, and presentation design based on your project requirements." },
  { question: "Can you design a logo and brand identity?", answer: "Yes. We can work on a logo and the supporting visual elements that help establish a cohesive identity. The scope is agreed around your needs." },
  { question: "Can you create social media graphics?", answer: "Yes. We can plan graphics around your content, brand, and the platforms where you intend to use them." },
  { question: "What information should I provide before starting?", answer: "A short brief about your business, audience, goals, intended use, preferences, and any existing brand assets is a useful starting point." },
  { question: "Which file formats can be delivered?", answer: "The appropriate formats depend on the design and how you plan to use it. We can agree on suitable final files at the project planning stage." },
  { question: "Can graphic design be combined with web development?", answer: "Yes. Design and web development can be discussed together so the visual direction and the website implementation work well as one project." },
];

const actionClass = "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none";

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function GraphicDesignPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0F172A]">
      <section className="relative isolate border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold tracking-[.2em] text-[#2563EB]">GRAPHIC DESIGN</p>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">Visual Design That Makes Your Brand Stand Out</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">Thoughtful visual design helps your business communicate clearly and build a consistent brand identity. From a distinctive logo to everyday marketing graphics, each element can work together to make your message easier to recognize.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#quote" className={`${actionClass} bg-[#2563EB] text-white hover:bg-blue-700`}>Get a Quote <Arrow /></Link>
              <Link href="/contact" className={`${actionClass} border border-[#CBD5E1] bg-white text-[#0F172A] hover:border-[#2563EB] hover:text-[#2563EB]`}>Let&apos;s Talk</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl" aria-label="Abstract graphic design canvas with typography, color swatches, and brand layouts" role="img">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-100/60 blur-2xl" />
            <div className="relative rounded-3xl border border-[#E2E8F0] bg-white p-4 shadow-xl shadow-slate-900/[.06] sm:p-6">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4"><div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-[#CBD5E1]"/><span className="size-2.5 rounded-full bg-[#CBD5E1]"/><span className="size-2.5 rounded-full bg-[#CBD5E1]"/></div><span className="text-[10px] font-semibold tracking-[.16em] text-[#64748B]">IDENTITY / 01</span><span className="rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[10px] font-medium text-[#2563EB]">Canvas</span></div>
              <div className="grid grid-cols-[1.15fr_.85fr] gap-3 py-4 sm:gap-4">
                <div className="relative flex min-h-48 flex-col justify-between overflow-hidden rounded-2xl bg-[#0F172A] p-5 text-white sm:min-h-56 sm:p-7"><div className="absolute -right-8 -top-8 size-32 rounded-full border-[20px] border-[#2563EB] sm:size-40"/><div className="relative"><span className="text-[9px] font-semibold tracking-[.24em] text-blue-200">FORM / FUNCTION</span><p className="mt-5 max-w-[10rem] text-3xl font-semibold leading-[.95] tracking-tight sm:text-4xl">Make it<br/>matter<span className="text-blue-400">.</span></p></div><div className="relative flex items-center gap-2"><span className="grid size-7 place-items-center rounded-lg bg-[#2563EB] text-xs font-bold">T</span><span className="text-[10px] tracking-wide text-slate-300">A VISUAL STUDY</span></div></div>
                <div className="grid grid-rows-[1fr_auto] gap-3 sm:gap-4"><div className="relative min-h-28 overflow-hidden rounded-2xl bg-[#DBEAFE] p-4"><div className="absolute -right-3 top-3 size-20 rotate-12 rounded-[1.25rem] bg-[#2563EB] sm:size-24"/><div className="absolute right-8 top-9 size-12 rounded-full border-[7px] border-white/80 sm:right-10 sm:top-10"/><span className="relative text-[9px] font-bold tracking-[.18em] text-[#1E3A8A]">SHAPE / SPACE</span><div className="absolute bottom-4 left-4 h-1.5 w-16 rounded-full bg-white/90"/></div><div className="rounded-2xl border border-[#E2E8F0] p-3 sm:p-4"><p className="text-[9px] font-bold tracking-[.16em] text-[#64748B]">PALETTE</p><div className="mt-3 flex gap-1.5 sm:gap-2"><span className="h-8 flex-1 rounded-md bg-[#0F172A]"/><span className="h-8 flex-1 rounded-md bg-[#2563EB]"/><span className="h-8 flex-1 rounded-md bg-[#93C5FD]"/><span className="h-8 flex-1 rounded-md bg-[#F8FAFC] ring-1 ring-inset ring-[#E2E8F0]"/></div></div></div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-[#F8FAFC] px-3 py-3 sm:px-4"><div><p className="text-[9px] font-bold tracking-[.16em] text-[#64748B]">TYPE STUDY</p><p className="mt-1 text-lg font-semibold tracking-tight">Aa <span className="ml-1 text-sm font-normal text-[#64748B]">Clear by design</span></p></div><div className="grid size-10 place-items-center rounded-full border border-[#E2E8F0] bg-white text-xs font-medium">Aa</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24" aria-labelledby="services-heading">
        <div className="max-w-2xl"><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">WHAT WE DO</p><h2 id="services-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Graphic design services</h2><p className="mt-4 leading-7 text-[#64748B]">Practical visual design shaped around your message, audience, and the places your brand needs to show up.</p></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map((item, i) => <article key={item.title} className="group rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-colors hover:border-blue-200 sm:p-7"><span className="grid size-11 place-items-center rounded-xl bg-[#EFF6FF] text-sm font-semibold text-[#2563EB]">0{i + 1}</span><h3 className="mt-5 text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#64748B]">{item.text}</p></article>)}</div>
      </section>

      <section className="border-y border-[#E2E8F0] bg-[#F8FAFC]" aria-labelledby="identity-heading"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-24"><div><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">A COHESIVE FOUNDATION</p><h2 id="identity-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Build a brand identity that holds together</h2><p className="mt-5 leading-7 text-[#64748B]">A strong identity is more than a single mark. Its pieces work as a system, helping your business feel recognizable wherever people encounter it.</p></div><div className="divide-y divide-[#E2E8F0] rounded-2xl border border-[#E2E8F0] bg-white px-5 sm:px-7">{identity.map(item => <div key={item.n} className="flex gap-4 py-5 sm:gap-6"><span className="pt-1 text-xs font-bold tracking-wider text-[#2563EB]">{item.n}</span><div><h3 className="font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-6 text-[#64748B]">{item.text}</p></div></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24" aria-labelledby="process-heading"><div className="max-w-2xl"><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">FROM BRIEF TO FILES</p><h2 id="process-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Our design process</h2><p className="mt-4 leading-7 text-[#64748B]">A clear sequence keeps the work connected to your goals and gives each stage room to develop.</p></div><ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{process.map(step => <li key={step.number} className="rounded-2xl border border-[#E2E8F0] p-5"><span className="text-sm font-bold text-[#2563EB]">{step.number}</span><h3 className="mt-5 font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#64748B]">{step.description}</p></li>)}</ol></section>

      <section className="bg-[#0F172A] text-white" aria-labelledby="applications-heading"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-12 lg:py-24"><div><p className="text-xs font-bold tracking-[.18em] text-blue-300">ONE BRAND, MANY PLACES</p><h2 id="applications-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Where design is used</h2><p className="mt-5 leading-7 text-slate-300">Consistent graphics help people recognize your business across the moments and materials where you communicate.</p></div><ul className="grid gap-3 sm:grid-cols-2">{applications.map((item, i) => <li key={item} className="flex min-h-16 items-center gap-4 rounded-xl border border-white/10 bg-white/[.04] px-4"><span className="text-xs font-bold text-blue-300">0{i + 1}</span><span className="font-medium">{item}</span></li>)}</ul></div></section>

      <section className="border-b border-[#E2E8F0] bg-[#F8FAFC]" aria-labelledby="principles-heading"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"><div className="max-w-2xl"><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">DESIGN WITH PURPOSE</p><h2 id="principles-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Design principles</h2></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{principles.map((item, i) => <article key={item.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6"><span className="text-xs font-bold text-[#2563EB]">0{i + 1}</span><h3 className="mt-3 font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#64748B]">{item.text}</p></article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24" aria-labelledby="working-heading"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"><div><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">A THOUGHTFUL PARTNERSHIP</p><h2 id="working-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Working with TKS</h2></div><div><p className="text-lg leading-8 text-[#334155]">Good design starts with understanding the brief: what your business needs to say, who needs to hear it, and what the work needs to do.</p><div className="mt-7 grid gap-5 sm:grid-cols-2">{["Keep the visual language consistent across the brand.", "Prepare practical assets for their intended use.", "Consider where and how each design will appear.", "Make choices that support clear communication."].map((item, i) => <div key={item} className="flex gap-3"><span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#EFF6FF] text-xs font-bold text-[#2563EB]">{i + 1}</span><p className="text-sm leading-6 text-[#64748B]">{item}</p></div>)}</div></div></div></section>

      <section className="border-y border-[#E2E8F0] bg-[#F8FAFC]" aria-labelledby="faq-heading"><div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24"><div className="text-center"><p className="text-xs font-bold tracking-[.18em] text-[#2563EB]">QUESTIONS & ANSWERS</p><h2 id="faq-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Graphic design FAQs</h2></div><div className="mt-9 space-y-3">{faqs.map((faq, i) => <details key={faq.question} className="group rounded-xl border border-[#E2E8F0] bg-white"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563EB] [&::-webkit-details-marker]:hidden"><span>{faq.question}</span><span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-[#EFF6FF] text-[#2563EB] transition-transform motion-reduce:transition-none group-open:rotate-45">+</span></summary><p className="px-5 pb-5 pr-14 text-sm leading-6 text-[#64748B]">{faq.answer}</p></details>)}</div></div></section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"><div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0F172A] px-6 py-12 text-center text-white sm:px-12 sm:py-16"><p className="text-xs font-bold tracking-[.18em] text-blue-300">YOUR NEXT CHAPTER</p><h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s Create a Stronger Visual Identity</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">Tell us about your brand, design requirements, and project goals. We&apos;ll discuss an approach that fits what you need.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/contact#quote" className={`${actionClass} bg-[#2563EB] text-white hover:bg-blue-700`}>Get a Quote <Arrow /></Link><Link href="/contact" className={`${actionClass} border border-white/25 text-white hover:bg-white/10`}>Let&apos;s Talk</Link></div></div></section>
    </main>
  );
}
