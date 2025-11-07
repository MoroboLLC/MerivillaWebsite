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
    <div className="fixed inset-0 -z-10 bg-background transition-colors duration-1000 overflow-hidden">
      {/* Stage 1: Ground foundation (0-20%) */}
      <div
        style={{ opacity: getStageOpacity(0, 20) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Ground level base */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-ocean/20 via-deep-ocean/10 to-transparent" />
        
        {/* Foundation footprint - subtle rounded rectangles */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[600px] h-12 bg-deep-ocean/5 rounded-t-3xl" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[500px] h-8 bg-deep-ocean/8 rounded-t-2xl" />
      </div>

      {/* Stage 2: Lower floors emerging (20-40%) */}
      <div
        style={{ opacity: getStageOpacity(20, 40) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Building base - first 2 floors */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-gradient-to-t from-deep-ocean/15 to-deep-ocean/8 rounded-t-3xl" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[580px] h-28 bg-gradient-to-t from-ocean-blue/10 to-ocean-blue/5 rounded-t-3xl" />
        
        {/* Window shadows */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-8">
          <div className="w-12 h-16 bg-sky-blue/10 rounded-lg" />
          <div className="w-12 h-16 bg-sky-blue/10 rounded-lg" />
          <div className="w-12 h-16 bg-sky-blue/10 rounded-lg" />
        </div>
      </div>

      {/* Stage 3: Mid-level construction (40-60%) */}
      <div
        style={{ opacity: getStageOpacity(40, 60) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Building growing - 4-5 floors */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gradient-to-t from-deep-ocean/20 via-deep-ocean/12 to-deep-ocean/5 rounded-t-[3rem]" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[560px] h-56 bg-gradient-to-t from-ocean-blue/15 via-ocean-blue/8 to-transparent rounded-t-[2.5rem]" />
        
        {/* More windows appearing */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 grid grid-cols-5 gap-6">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-10 h-12 bg-sky-blue/10 rounded-lg" />
          ))}
        </div>
        
        {/* Side structures */}
        <div className="absolute bottom-16 left-1/2 -translate-x-[350px] w-32 h-40 bg-primary/8 rounded-t-3xl" />
        <div className="absolute bottom-16 left-1/2 translate-x-[220px] w-32 h-40 bg-secondary/8 rounded-t-3xl" />
      </div>

      {/* Stage 4: Upper floors rising (60-80%) */}
      <div
        style={{ opacity: getStageOpacity(60, 80) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Taller building - 7-8 floors */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-gradient-to-t from-deep-ocean/25 via-deep-ocean/15 to-deep-ocean/5 rounded-t-[4rem]" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[550px] h-[360px] bg-gradient-to-t from-ocean-blue/20 via-ocean-blue/10 to-transparent rounded-t-[3.5rem]" />
        
        {/* Full grid of windows */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 grid grid-cols-6 gap-5">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-10 h-12 bg-sky-blue/15 rounded-lg" />
          ))}
        </div>
        
        {/* Rooftop elements emerging */}
        <div className="absolute bottom-[400px] left-1/2 -translate-x-1/2 w-[500px] h-16 bg-primary/10 rounded-t-3xl" />
        
        {/* Ambient lighting */}
        <div className="absolute bottom-64 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-sun-yellow/8 blur-3xl" />
      </div>

      {/* Stage 5: Completed building (80-100%) */}
      <div
        style={{ opacity: getStageOpacity(80, 100) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Fully built development */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-t from-deep-ocean/30 via-deep-ocean/20 to-deep-ocean/8 rounded-t-[5rem]" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[540px] h-[480px] bg-gradient-to-t from-ocean-blue/25 via-ocean-blue/15 to-transparent rounded-t-[4.5rem]" />
        
        {/* All windows lit up */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 grid grid-cols-6 gap-4">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-10 h-12 bg-sun-yellow/20 rounded-lg shadow-[0_0_10px_rgba(255,214,10,0.3)]" />
          ))}
        </div>
        
        {/* Rooftop completed */}
        <div className="absolute bottom-[500px] left-1/2 -translate-x-1/2 w-[600px] h-20 bg-gradient-to-t from-primary/20 to-primary/10 rounded-t-[4rem]" />
        <div className="absolute bottom-[515px] left-1/2 -translate-x-1/2 w-[500px] h-12 bg-secondary/15 rounded-t-3xl" />
        
        {/* Surrounding landscaping */}
        <div className="absolute bottom-8 left-1/2 -translate-x-[400px] w-64 h-20 bg-sage-green/15 rounded-t-3xl" />
        <div className="absolute bottom-8 left-1/2 translate-x-[136px] w-64 h-20 bg-sage-green/15 rounded-t-3xl" />
        
        {/* Warm ambient glow - building is alive */}
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-sun-glow/15 blur-[120px] animate-pulse" />
        
        {/* Sky gradient at completion */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-blue/10 via-transparent to-transparent" />
      </div>
    </div>
  );
};
