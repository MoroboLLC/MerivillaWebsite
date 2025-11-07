import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-merida.jpg";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Fixed Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Gradient Overlay with Abstract Shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-ocean/60 via-ocean-blue/50 to-primary/40" />
      
      {/* Large Floating Abstract Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-sun-yellow/20 morphing-blob blur-[100px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-secondary/25 morphing-blob blur-[120px]" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-sky-blue/15 morphing-blob blur-[90px]" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-sun-glow/10 morphing-blob blur-[110px]" style={{ animationDelay: "6s" }} />
      </div>
      
      {/* Subtle Abstract Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute bottom-32 right-[20%] w-32 h-32 rounded-full border border-sun-yellow/30 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 z-20">
        <div className="max-w-6xl text-center text-white animate-fade-in-up relative">
          <div className="relative z-10 backdrop-blur-sm bg-white/5 rounded-[3rem] p-8 md:p-16 border border-white/10">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 md:mb-8 tracking-tight relative">
              <span className="inline-block animate-fade-in-up text-gradient-sunset drop-shadow-2xl">MERIVILLA</span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-sun-yellow to-transparent" />
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-sun-yellow animate-pulse" />
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-sun-yellow to-transparent" />
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-4 md:mb-6 max-w-4xl mx-auto opacity-95 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Extraordinary real estate developments in the heart of Mérida, Yucatán
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-sun-yellow to-sun-glow text-foreground hover:scale-110 hover:shadow-[0_0_50px_rgba(255,214,10,0.5)] transition-smooth text-base md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-full group font-bold w-full sm:w-auto"
              >
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-2 transition-smooth" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="glass-effect text-white border-2 border-white/60 hover:bg-white/30 hover:scale-110 hover:border-sun-yellow backdrop-blur-xl text-base md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-full transition-smooth font-semibold w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Mouse on Desktop, Phone on Mobile */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float z-30">
        {/* Desktop Mouse */}
        <div className="hidden md:flex w-6 h-10 border-2 border-white/50 rounded-full justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
        {/* Mobile Phone */}
        <div className="md:hidden">
          <Smartphone className="w-8 h-8 text-white/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
