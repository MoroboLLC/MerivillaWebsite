import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-merida.jpg";

export const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120vh]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay with Abstract Shapes */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Floating Abstract Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-sun-yellow/10 morphing-blob blur-3xl" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-ocean-blue/10 morphing-blob blur-3xl" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/10 morphing-blob blur-2xl" style={{ animationDelay: "4s" }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="max-w-5xl text-center text-white animate-fade-in-up">
          {/* Abstract decorative elements */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight relative">
            <span className="inline-block animate-fade-in-up">Where Dreams</span>
            <br />
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Take Shape</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 max-w-3xl mx-auto opacity-95 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Extraordinary real estate developments in the heart of Mérida, Yucatán
          </p>
          <p className="text-lg md:text-xl mb-10 opacity-90 font-['Inter',sans-serif] font-normal animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Founded by Michael McCarthy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 shadow-glow transition-smooth text-lg px-8 py-6 rounded-full group"
            >
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-effect text-white border-2 border-white/40 hover:bg-white/20 hover:scale-105 backdrop-blur-md text-lg px-8 py-6 rounded-full transition-smooth"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
