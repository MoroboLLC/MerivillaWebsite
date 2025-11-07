import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { ConstructionTimelapse } from "@/components/ConstructionTimelapse";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <ConstructionTimelapse />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
