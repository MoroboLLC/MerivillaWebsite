import { useEffect, useState } from "react";

export const ScrollProgressBackground = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const SPEED = 1.6; // accelerate build progression
      const progress = ((window.scrollY * SPEED) / totalHeight) * 100;
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

  // Dynamic build heights derived from scroll progress (fluid growth)
  const t = scrollProgress / 100;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // Scale down for mobile
  const scale = isMobile ? 0.5 : 1;
  const mainH = Math.round((100 + t * 420) * scale);
  const leftH = Math.round(t * 300 * scale);
  const rightH = Math.round(t * 260 * scale);
  const mainW = Math.round(420 * scale);
  const leftW = Math.round(52 * scale);
  const rightW = Math.round(48 * scale);

  return (
    <div className="fixed inset-0 z-0 bg-background transition-colors duration-1000 overflow-hidden pointer-events-none">
      {/* Subtle blueprint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--ocean-blue) / 0.15) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--ocean-blue) / 0.15) 1px, transparent 1px)",
          backgroundSize: isMobile ? "32px 32px" : "48px 48px",
          opacity: 0.15,
        }}
      />
      {/* Stage 1: Ground foundation (0-20%) */}
      <div
        style={{ opacity: getStageOpacity(0, 20) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Ground level base and shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-28 bg-gradient-to-t from-deep-ocean/30 via-deep-ocean/15 to-transparent" />
        <div className={`absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 h-6 md:h-8 bg-deep-ocean/10 rounded-t-[2rem] border-t border-ocean-blue/20`}
             style={{ width: isMobile ? '380px' : '780px' }} />
        
        {/* Foundation footprint */}
        <div className={`absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 h-8 md:h-12 bg-deep-ocean/10 rounded-t-[2.5rem]`}
             style={{ width: isMobile ? '320px' : '640px' }} />
        <div className={`absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 h-6 md:h-9 bg-ocean-blue/15 rounded-t-3xl`}
             style={{ width: isMobile ? '260px' : '520px' }} />
      </div>

      {/* Stage 2: Lower floors emerging (20-40%) */}
      <div
        style={{ opacity: getStageOpacity(20, 40) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Early structure: central core + wings (dynamic heights) */}
        <div className={`absolute left-1/2 -translate-x-1/2`}
             style={{ bottom: isMobile ? '8px' : '12px', width: isMobile ? '310px' : '620px' }}>
          <div
            style={{ height: `${Math.min(mainH, isMobile ? 110 : 220)}px`, width: `${mainW}px` }}
            className="mx-auto bg-gradient-to-t from-deep-ocean/35 via-deep-ocean/20 to-ocean-blue/15 rounded-t-[2.5rem]"
          />
          <div
            style={{ 
              height: `${Math.min(leftH, isMobile ? 70 : 140)}px`, 
              width: `${leftW * 3}px`,
              transform: `translateX(${isMobile ? -180 : -360}px)`
            }}
            className={`absolute bottom-0 left-1/2 bg-primary/15 rounded-t-3xl`}
          />
          <div
            style={{ 
              height: `${Math.min(rightH, isMobile ? 60 : 120)}px`, 
              width: `${rightW * 3}px`,
              transform: `translateX(${isMobile ? 110 : 220}px)`
            }}
            className={`absolute bottom-0 left-1/2 bg-secondary/15 rounded-t-3xl`}
          />
        </div>

        {/* Window shadows (first floors) - fewer on mobile */}
        <div className={`absolute left-1/2 -translate-x-1/2 grid gap-4 md:gap-6`}
             style={{ bottom: isMobile ? '24px' : '28px', gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)' }}>
          {[...Array(isMobile ? 6 : 8)].map((_, i) => (
            <div key={i} className="w-8 h-10 md:w-12 md:h-16 bg-sky-blue/15 rounded-md" />
          ))}
        </div>
      </div>

      {/* Stage 3: Mid-level construction (40-60%) */}
      <div
        style={{ opacity: getStageOpacity(40, 60) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Structure grows - more floors */}
        <div className={`absolute left-1/2 -translate-x-1/2`}
             style={{ bottom: isMobile ? '8px' : '12px', width: isMobile ? '310px' : '620px' }}>
          <div
            style={{ height: `${Math.min(mainH, isMobile ? 180 : 360)}px`, width: `${mainW}px` }}
            className="mx-auto bg-gradient-to-t from-deep-ocean/40 via-deep-ocean/22 to-deep-ocean/10 rounded-t-[3rem]"
          />
          <div
            style={{ 
              height: `${Math.min(leftH, isMobile ? 110 : 220)}px`, 
              width: `${leftW * 3.5}px`,
              transform: `translateX(${isMobile ? -180 : -360}px)`
            }}
            className={`absolute bottom-0 left-1/2 bg-primary/20 rounded-t-3xl`}
          />
          <div
            style={{ 
              height: `${Math.min(rightH, isMobile ? 100 : 200)}px`, 
              width: `${rightW * 3.3}px`,
              transform: `translateX(${isMobile ? 115 : 230}px)`
            }}
            className={`absolute bottom-0 left-1/2 bg-secondary/20 rounded-t-3xl`}
          />
        </div>

        {/* Scaffolding grid overlay - hidden on mobile for cleaner look */}
        {!isMobile && (
          <div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            style={{
              width: 420,
              height: Math.min(mainH, 360),
              backgroundImage:
                "linear-gradient(to right, hsl(var(--ocean-blue) / 0.25) 1px, transparent 1px), linear-gradient(to top, hsl(var(--ocean-blue) / 0.25) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              opacity: 0.6,
              borderTopLeftRadius: '2.5rem',
              borderTopRightRadius: '2.5rem',
            }}
          />
        )}

        {/* Windows appearing - fewer on mobile */}
        <div className={`absolute left-1/2 -translate-x-1/2 grid gap-3 md:gap-5`}
             style={{ bottom: isMobile ? '28px' : '32px', gridTemplateColumns: isMobile ? 'repeat(4, 1fr)' : 'repeat(6, 1fr)' }}>
          {[...Array(isMobile ? 12 : 18)].map((_, i) => (
            <div key={i} className="w-7 h-9 md:w-10 md:h-12 bg-sky-blue/20 rounded-md" />
          ))}
        </div>
      </div>

      {/* Stage 4: Upper floors rising (60-80%) */}
      <div
        style={{ opacity: getStageOpacity(60, 80) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Tower reaches near full height */}
        <div className={`absolute left-1/2 -translate-x-1/2`}
             style={{ bottom: isMobile ? '8px' : '12px', width: isMobile ? '310px' : '620px' }}>
          <div
            style={{ height: `${Math.min(mainH, isMobile ? 240 : 480)}px`, width: `${mainW}px` }}
            className="mx-auto bg-gradient-to-t from-deep-ocean/45 via-deep-ocean/25 to-deep-ocean/10 rounded-t-[3.5rem]"
          />
          <div
            style={{ 
              height: `${Math.min(leftH, isMobile ? 140 : 280)}px`, 
              width: `${leftW * 4}px`,
              transform: `translateX(${isMobile ? -180 : -360}px)`
            }}
            className={`absolute bottom-0 left-1/2 bg-primary/25 rounded-t-[2.5rem]`}
          />
          <div
            style={{ 
              height: `${Math.min(rightH, isMobile ? 120 : 240)}px`, 
              width: `${rightW * 3.7}px`,
              transform: `translateX(${isMobile ? 120 : 240}px)`
            }}
            className={`absolute bottom-0 left-1/2 bg-secondary/25 rounded-t-[2.5rem]`}
          />
        </div>

        {/* Dense windows grid - fewer on mobile */}
        <div className={`absolute left-1/2 -translate-x-1/2 grid gap-3 md:gap-4`}
             style={{ bottom: isMobile ? '24px' : '28px', gridTemplateColumns: isMobile ? 'repeat(4, 1fr)' : 'repeat(6, 1fr)' }}>
          {[...Array(isMobile ? 16 : 24)].map((_, i) => (
            <div key={i} className="w-7 h-9 md:w-10 md:h-12 bg-sky-blue/25 rounded-md" />
          ))}
        </div>

        {/* Rooftop elements emerging */}
        <div className="absolute left-1/2 -translate-x-1/2"
             style={{ bottom: `${Math.min(isMobile ? 8 + mainH : 12 + mainH, isMobile ? 260 : 520)}px` }}>
          <div className={`h-2 md:h-3 bg-primary/30 rounded-full`}
               style={{ width: isMobile ? '190px' : '380px' }} />
          <div className={`h-1 md:h-2 bg-secondary/30 rounded-full mt-1 md:mt-2 mx-auto`}
               style={{ width: isMobile ? '140px' : '280px' }} />
        </div>

        {/* Construction crane - hidden on mobile */}
        {!isMobile && (
          <div className="absolute" style={{ left: 'calc(50% - 380px)', bottom: 12, opacity: 0.9 }}>
            <div style={{ width: 6, height: Math.min(520, mainH + 60), background: 'hsl(var(--primary) / 0.35)', borderRadius: 2 }} />
            <div style={{ position: 'absolute', left: -4, bottom: `${Math.min(mainH + 60, 520)}px`, width: 260, height: 6, background: 'hsl(var(--primary) / 0.35)', borderRadius: 2 }} />
            <div style={{ position: 'absolute', left: 240, bottom: `${Math.min(mainH + 60, 520)}px`, width: 2, height: 120, background: 'hsl(var(--primary) / 0.35)' }} />
            <div style={{ position: 'absolute', left: 236, bottom: `${Math.min(mainH + 10, 470)}px`, width: 12, height: 12, background: 'hsl(var(--secondary) / 0.6)', borderRadius: 4 }} />
          </div>
        )}
      </div>

      {/* Stage 5: Completed building (80-100%) */}
      <div
        style={{ opacity: getStageOpacity(80, 100) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Completed development silhouettes */}
        <div className={`absolute left-1/2 -translate-x-1/2`}
             style={{ bottom: isMobile ? '8px' : '12px', width: isMobile ? '310px' : '620px' }}>
          <div
            style={{ height: `${Math.min(mainH, isMobile ? 260 : 520)}px`, width: `${mainW}px` }}
            className="mx-auto bg-gradient-to-t from-deep-ocean/50 via-deep-ocean/30 to-deep-ocean/12 rounded-t-[4rem]"
          />
          <div
            style={{ 
              height: `${Math.min(leftH, isMobile ? 150 : 300)}px`, 
              width: `${leftW * 4.3}px`,
              transform: `translateX(${isMobile ? -180 : -360}px)`
            }}
            className={`absolute bottom-0 left-1/2 bg-primary/30 rounded-t-[3rem]`}
          />
          <div
            style={{ 
              height: `${Math.min(rightH, isMobile ? 130 : 260)}px`, 
              width: `${rightW * 4}px`,
              transform: `translateX(${isMobile ? 125 : 250}px)`
            }}
            className={`absolute bottom-0 left-1/2 bg-secondary/30 rounded-t-[3rem]`}
          />
        </div>

        {/* Windows lit up - fewer on mobile */}
        <div className={`absolute left-1/2 -translate-x-1/2 grid gap-2 md:gap-4`}
             style={{ bottom: isMobile ? '20px' : '24px', gridTemplateColumns: isMobile ? 'repeat(4, 1fr)' : 'repeat(6, 1fr)' }}>
          {[...Array(isMobile ? 20 : 36)].map((_, i) => (
            <div key={i} className="w-7 h-9 md:w-10 md:h-12 bg-sun-yellow/30 rounded-md shadow-[0_0_8px_hsl(45_95%_55%_/_0.3)] md:shadow-[0_0_12px_hsl(45_95%_55%_/_0.4)]" />
          ))}
        </div>

        {/* Rooftop completed */}
        <div className="absolute left-1/2 -translate-x-1/2"
             style={{ bottom: `${Math.min(isMobile ? 8 + mainH : 12 + mainH, isMobile ? 270 : 540)}px` }}>
          <div className={`h-2 md:h-3 bg-primary/35 rounded-full`}
               style={{ width: isMobile ? mainW : '420px' }} />
          <div className={`h-1 md:h-2 bg-secondary/35 rounded-full mt-1 md:mt-2 mx-auto`}
               style={{ width: isMobile ? mainW * 0.75 : '320px' }} />
        </div>

        {/* Landscaping - smaller on mobile */}
        <div className={`absolute left-1/2 h-12 md:h-20 bg-sage-green/25 rounded-t-[2rem]`}
             style={{ bottom: isMobile ? '4px' : '6px', width: isMobile ? '120px' : '256px', transform: `translateX(${isMobile ? -210 : -420}px)` }} />
        <div className={`absolute left-1/2 h-12 md:h-20 bg-sage-green/25 rounded-t-[2rem]`}
             style={{ bottom: isMobile ? '4px' : '6px', width: isMobile ? '120px' : '256px', transform: `translateX(${isMobile ? 80 : 160}px)` }} />

        {/* Warm ambient glow */}
        <div className={`absolute bottom-1/3 left-1/2 -translate-x-1/2 rounded-full bg-sun-glow/20 blur-[120px] animate-pulse`}
             style={{ width: isMobile ? '360px' : '720px', height: isMobile ? '260px' : '520px' }} />

        {/* Sky gradient at completion */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-blue/10 via-transparent to-transparent" />
      </div>
    </div>
  );
};
