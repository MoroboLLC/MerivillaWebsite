import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { ConstructionTimelapse } from "@/components/ConstructionTimelapse";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgressBackground } from "@/components/ScrollProgressBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ScrollProgressBackground />
      <div className="relative z-10">
        <Hero />
      <About />
      <Projects />
      <ConstructionTimelapse />
      <Contact />
      <Footer />
      </div>
    </div>
  );
};

export default Index;
