import { useEffect, useState } from "react";

export const ScrollProgressBackground = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate which stage we're in (0-100%)
  const getStageOpacity = (stageStart: number, stageEnd: number) => {
    if (scrollProgress < stageStart) return 0;
    if (scrollProgress > stageEnd) return 1;
    return (scrollProgress - stageStart) / (stageEnd - stageStart);
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Stage 1: Empty land with subtle grid (0-15%) */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: getStageOpacity(0, 15) }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/20 to-background" />
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Stage 2: Foundation circles (15-30%) */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: getStageOpacity(15, 30) }}
      >
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-primary/5 blur-2xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary/5 blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full bg-accent/5 blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Stage 3: Structure emerging - rounded rectangles (30-50%) */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: getStageOpacity(30, 50) }}
      >
        <div className="absolute top-1/4 left-1/6 w-64 h-96 rounded-[3rem] bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm transform -rotate-12 transition-smooth" />
        <div className="absolute top-1/3 right-1/5 w-48 h-72 rounded-[2.5rem] bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm transform rotate-6 transition-smooth" />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-80 rounded-[2.8rem] bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm transform rotate-3 transition-smooth" />
      </div>

      {/* Stage 4: Buildings taking shape with more definition (50-70%) */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: getStageOpacity(50, 70) }}
      >
        <div className="absolute top-1/5 left-1/4 w-72 h-[28rem] rounded-[3.5rem] bg-gradient-to-br from-primary/15 to-deep-ocean/10 backdrop-blur-md shadow-strong transform -rotate-6" />
        <div className="absolute top-1/4 right-1/6 w-64 h-96 rounded-[3rem] bg-gradient-to-br from-secondary/15 to-sun-glow/10 backdrop-blur-md shadow-medium transform rotate-3" />
        <div className="absolute bottom-1/6 left-2/5 w-60 h-[22rem] rounded-[2.8rem] bg-gradient-to-br from-ocean-blue/15 to-sky-blue/10 backdrop-blur-md shadow-medium transform rotate-6" />
        
        {/* Abstract window patterns */}
        <div className="absolute top-1/3 left-1/3 grid grid-cols-3 gap-2 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-sm bg-primary animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>

      {/* Stage 5: Final polish with atmospheric effects (70-85%) */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: getStageOpacity(70, 85) }}
      >
        <div className="absolute top-1/6 left-1/5 w-80 h-[32rem] rounded-[4rem] bg-gradient-to-br from-primary/20 via-ocean-blue/15 to-deep-ocean/10 backdrop-blur-lg shadow-strong transform -rotate-3">
          <div className="absolute top-8 left-8 right-8 h-32 rounded-3xl bg-white/5 backdrop-blur-sm" />
          <div className="absolute top-44 left-8 right-8 bottom-8 rounded-3xl bg-gradient-to-b from-white/3 to-white/10 backdrop-blur-sm" />
        </div>
        <div className="absolute top-1/4 right-1/8 w-72 h-[26rem] rounded-[3.5rem] bg-gradient-to-br from-secondary/20 via-sun-yellow/15 to-sun-glow/10 backdrop-blur-lg shadow-strong transform rotate-2">
          <div className="absolute inset-6 rounded-[2.8rem] bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm" />
        </div>
        
        {/* Landscaping elements */}
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-sage-green/20 blur-xl" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-sage-green/15 blur-lg" />
      </div>

      {/* Stage 6: Complete with life and activity (85-100%) */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: getStageOpacity(85, 100) }}
      >
        {/* Ambient light effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-sun-yellow/10 blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-ocean-blue/10 blur-[100px] animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
        
        {/* Final architectural elements with depth */}
        <div className="absolute top-1/6 left-1/5 w-[22rem] h-[36rem] rounded-[4.5rem] bg-gradient-to-br from-primary/25 via-ocean-blue/20 to-deep-ocean/15 backdrop-blur-xl shadow-strong transform -rotate-2 border border-white/10">
          <div className="absolute top-6 left-6 right-6 h-40 rounded-[3rem] bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md" />
          <div className="absolute top-52 left-6 right-6 bottom-6 rounded-[3rem] bg-gradient-to-b from-white/5 to-white/15 backdrop-blur-md grid grid-cols-4 gap-3 p-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="rounded-xl bg-sun-yellow/20 animate-pulse" style={{ animationDelay: `${i * 0.2}s`, animationDuration: "3s" }} />
            ))}
          </div>
        </div>
        
        {/* Complementary structures */}
        <div className="absolute top-1/5 right-1/8 w-80 h-[30rem] rounded-[4rem] bg-gradient-to-br from-secondary/25 via-sun-yellow/20 to-sun-glow/15 backdrop-blur-xl shadow-strong transform rotate-1 border border-white/10">
          <div className="absolute inset-6 rounded-[3.2rem] bg-gradient-to-b from-white/5 via-transparent to-white/15 backdrop-blur-sm" />
        </div>
        
        {/* Abstract landscape completion */}
        <div className="absolute bottom-1/5 left-1/3 w-40 h-40 rounded-full bg-gradient-to-br from-sage-green/30 to-sage-green/10 blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-terracotta/20 to-terracotta/5 blur-xl" />
      </div>

      {/* Floating abstract particles throughout */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + (i % 3)}s`,
              opacity: scrollProgress > 20 ? 0.6 : 0,
              transition: "opacity 1s",
            }}
          />
        ))}
      </div>
    </div>
  );
};
