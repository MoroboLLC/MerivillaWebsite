import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import project1 from "@/assets/project-1.jpg";

export const ConstructionTimelapse = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (progress >= 100) {
      setProgress(0);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 gradient-sky relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-ocean">
              Watch Dreams Unfold
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the transformation from vision to reality
            </p>
          </div>

          {/* Abstract decorative blobs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
          
          <div className="glass-effect rounded-[2.5rem] overflow-hidden shadow-strong relative z-10 border border-white/10">
            <div className="relative">
              {/* Main Image */}
              <div
                className="relative h-[400px] md:h-[600px] overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - progress}% 0 0)`,
                  transition: "clip-path 0.05s linear",
                }}
              >
                <img
                  src={project1}
                  alt="Construction Progress"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Background (construction phase) */}
              <div className="absolute inset-0 -z-10">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20" />
              </div>

              {/* Play/Pause Button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Pulsing ring effect around button */}
                <div className="absolute inset-0 w-20 h-20 rounded-full bg-secondary/30 animate-ping" />
                
                <Button
                  onClick={togglePlay}
                  size="lg"
                  className="relative w-20 h-20 rounded-full bg-secondary hover:bg-secondary/90 hover:scale-110 shadow-glow transition-smooth group"
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8 group-hover:scale-110 transition-smooth" />
                  ) : (
                    <Play className="h-8 w-8 ml-1 group-hover:scale-110 transition-smooth" />
                  )}
                </Button>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex items-center justify-between text-white mb-2">
                  <span className="font-semibold">Construction Phase</span>
                  <span className="font-semibold">{progress}%</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary transition-all duration-100 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8 text-lg">
            From groundbreaking to grand opening, witness the craftsmanship and
            dedication that goes into every McCarthy Development project
          </p>
        </div>
      </div>
    </section>
  );
};
