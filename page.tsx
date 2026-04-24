import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import WorkGrid from "@/components/WorkGrid";
import CaseStudy from "@/components/CaseStudy";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <ProofBar />
      <WorkGrid />
      <CaseStudy />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
