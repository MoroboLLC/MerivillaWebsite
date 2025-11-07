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
      <div className="absolute inset-0 bg-gradient-to-br from-deep-ocean/95 via-ocean-blue/90 to-primary/85" />
      
      {/* Large Floating Abstract Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-sun-yellow/20 morphing-blob blur-[100px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-secondary/25 morphing-blob blur-[120px]" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-sky-blue/15 morphing-blob blur-[90px]" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-sun-glow/10 morphing-blob blur-[110px]" style={{ animationDelay: "6s" }} />
      </div>
      
      {/* Abstract Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-[15%] w-64 h-64 rounded-[4rem] border-2 border-white/30 rotate-12 animate-float" />
        <div className="absolute bottom-32 right-[20%] w-48 h-48 rounded-full border-2 border-sun-yellow/40 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-[15%] w-40 h-40 rounded-[2rem] border-2 border-secondary/30 -rotate-6 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="max-w-6xl text-center text-white animate-fade-in-up relative">
          {/* Large Abstract decorative frame */}
          <div className="absolute -inset-40 border-2 border-white/10 rounded-[5rem] -rotate-3 pointer-events-none animate-float" style={{ animationDuration: "6s" }} />
          <div className="absolute -inset-32 border border-sun-yellow/20 rounded-[4rem] rotate-2 pointer-events-none animate-float" style={{ animationDuration: "7s", animationDelay: "1s" }} />
          
          <div className="relative z-10 backdrop-blur-sm bg-white/5 rounded-[3rem] p-12 md:p-16 border border-white/10">
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold mb-8 tracking-tight relative">
              <span className="inline-block animate-fade-in-up text-gradient-sunset drop-shadow-2xl">Where Dreams</span>
              <br />
              <span className="inline-block animate-fade-in-up text-white drop-shadow-2xl" style={{ animationDelay: "0.2s" }}>Take Shape</span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-sun-yellow to-transparent" />
              <div className="w-3 h-3 rounded-full bg-sun-yellow animate-pulse" />
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-sun-yellow to-transparent" />
            </div>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 max-w-4xl mx-auto opacity-95 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Extraordinary real estate developments in the heart of Mérida, Yucatán
            </p>
            <p className="text-xl md:text-2xl mb-12 opacity-90 font-['Inter',sans-serif] font-normal animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              Founded by <span className="text-sun-yellow font-semibold">Michael McCarthy</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-sun-yellow to-sun-glow text-foreground hover:scale-110 hover:shadow-[0_0_50px_rgba(255,214,10,0.5)] transition-smooth text-xl px-12 py-8 rounded-full group font-bold"
              >
                Explore Projects
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-smooth" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="glass-effect text-white border-2 border-white/60 hover:bg-white/30 hover:scale-110 hover:border-sun-yellow backdrop-blur-xl text-xl px-12 py-8 rounded-full transition-smooth font-semibold"
              >
                Get in Touch
              </Button>
            </div>
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
