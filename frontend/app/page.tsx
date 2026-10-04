import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import WhyTKS from "@/components/home/WhyTKS";
import Process from "@/components/home/Process";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <Services />
      <About />
      <WhyTKS />
      <Process />
      <FinalCTA />
    </main>
  );
}
