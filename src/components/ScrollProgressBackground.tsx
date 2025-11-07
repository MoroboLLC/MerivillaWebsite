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

  // Dynamic build heights derived from scroll progress (fluid growth)
  const t = scrollProgress / 100;
  const mainH = Math.round(100 + t * 420); // central tower
  const leftH = Math.round(t * 300);       // left wing
  const rightH = Math.round(t * 260);      // right wing

  return (
    <div className="fixed inset-0 z-0 bg-background transition-colors duration-1000 overflow-hidden pointer-events-none">
      {/* Subtle blueprint grid for immediate visibility */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--ocean-blue) / 0.15) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--ocean-blue) / 0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.15,
        }}
      />
      {/* Stage 1: Ground foundation (0-20%) */}
      <div
        style={{ opacity: getStageOpacity(0, 20) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Ground level base and shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-deep-ocean/30 via-deep-ocean/15 to-transparent" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[780px] h-8 bg-deep-ocean/10 rounded-t-[2rem] border-t border-ocean-blue/20" />
        
        {/* Foundation footprint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[640px] h-12 bg-deep-ocean/10 rounded-t-[2.5rem]" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[520px] h-9 bg-ocean-blue/15 rounded-t-3xl" />
      </div>

      {/* Stage 2: Lower floors emerging (20-40%) */}
      <div
        style={{ opacity: getStageOpacity(20, 40) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Early structure: central core + wings (dynamic heights) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[620px]">
          <div
            style={{ height: `${Math.min(mainH, 220)}px` }}
            className="mx-auto w-[420px] bg-gradient-to-t from-deep-ocean/35 via-deep-ocean/20 to-ocean-blue/15 rounded-t-[2.5rem]"
          />
          <div
            style={{ height: `${Math.min(leftH, 140)}px` }}
            className="absolute bottom-0 left-1/2 -translate-x-[360px] w-40 bg-primary/15 rounded-t-3xl"
          />
          <div
            style={{ height: `${Math.min(rightH, 120)}px` }}
            className="absolute bottom-0 left-1/2 translate-x-[220px] w-36 bg-secondary/15 rounded-t-3xl"
          />
        </div>

        {/* Window shadows (first floors) */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 grid grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-12 h-16 bg-sky-blue/15 rounded-md" />
          ))}
        </div>
      </div>

      {/* Stage 3: Mid-level construction (40-60%) */}
      <div
        style={{ opacity: getStageOpacity(40, 60) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Structure grows - more floors */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[620px]">
          <div
            style={{ height: `${Math.min(mainH, 360)}px` }}
            className="mx-auto w-[420px] bg-gradient-to-t from-deep-ocean/40 via-deep-ocean/22 to-deep-ocean/10 rounded-t-[3rem]"
          />
          <div
            style={{ height: `${Math.min(leftH, 220)}px` }}
            className="absolute bottom-0 left-1/2 -translate-x-[360px] w-44 bg-primary/20 rounded-t-3xl"
          />
          <div
            style={{ height: `${Math.min(rightH, 200)}px` }}
            className="absolute bottom-0 left-1/2 translate-x-[230px] w-40 bg-secondary/20 rounded-t-3xl"
          />
        </div>

        {/* Scaffolding grid overlay */}
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

        {/* Windows appearing */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 grid grid-cols-6 gap-5">
          {[...Array(18)].map((_, i) => (
            <div key={i} className="w-10 h-12 bg-sky-blue/20 rounded-md" />
          ))}
        </div>
      </div>

      {/* Stage 4: Upper floors rising (60-80%) */}
      <div
        style={{ opacity: getStageOpacity(60, 80) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Tower reaches near full height */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[620px]">
          <div
            style={{ height: `${Math.min(mainH, 480)}px` }}
            className="mx-auto w-[420px] bg-gradient-to-t from-deep-ocean/45 via-deep-ocean/25 to-deep-ocean/10 rounded-t-[3.5rem]"
          />
          <div
            style={{ height: `${Math.min(leftH, 280)}px` }}
            className="absolute bottom-0 left-1/2 -translate-x-[360px] w-48 bg-primary/25 rounded-t-[2.5rem]"
          />
          <div
            style={{ height: `${Math.min(rightH, 240)}px` }}
            className="absolute bottom-0 left-1/2 translate-x-[240px] w-44 bg-secondary/25 rounded-t-[2.5rem]"
          />
        </div>

        {/* Dense windows grid */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 grid grid-cols-6 gap-4">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-10 h-12 bg-sky-blue/25 rounded-md" />
          ))}
        </div>

        {/* Rooftop elements emerging */}
        <div className="absolute left-1/2 -translate-x-1/2"
             style={{ bottom: `${Math.min(12 + mainH, 520)}px` }}>
          <div className="w-[380px] h-3 bg-primary/30 rounded-full" />
          <div className="w-[280px] h-2 bg-secondary/30 rounded-full mt-2 mx-auto" />
        </div>

        {/* Construction crane */}
        <div className="absolute" style={{ left: 'calc(50% - 380px)', bottom: 12, opacity: 0.9 }}>
          <div style={{ width: 6, height: Math.min(520, mainH + 60), background: 'hsl(var(--primary) / 0.35)', borderRadius: 2 }} />
          <div style={{ position: 'absolute', left: -4, bottom: `${Math.min(mainH + 60, 520)}px`, width: 260, height: 6, background: 'hsl(var(--primary) / 0.35)', borderRadius: 2 }} />
          <div style={{ position: 'absolute', left: 240, bottom: `${Math.min(mainH + 60, 520)}px`, width: 2, height: 120, background: 'hsl(var(--primary) / 0.35)' }} />
          <div style={{ position: 'absolute', left: 236, bottom: `${Math.min(mainH + 10, 470)}px`, width: 12, height: 12, background: 'hsl(var(--secondary) / 0.6)', borderRadius: 4 }} />
        </div>
      </div>

      {/* Stage 5: Completed building (80-100%) */}
      <div
        style={{ opacity: getStageOpacity(80, 100) }}
        className="absolute inset-0 transition-opacity duration-700"
      >
        {/* Completed development silhouettes */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[620px]">
          <div
            style={{ height: `${Math.min(mainH, 520)}px` }}
            className="mx-auto w-[420px] bg-gradient-to-t from-deep-ocean/50 via-deep-ocean/30 to-deep-ocean/12 rounded-t-[4rem]"
          />
          <div
            style={{ height: `${Math.min(leftH, 300)}px` }}
            className="absolute bottom-0 left-1/2 -translate-x-[360px] w-52 bg-primary/30 rounded-t-[3rem]"
          />
          <div
            style={{ height: `${Math.min(rightH, 260)}px` }}
            className="absolute bottom-0 left-1/2 translate-x-[250px] w-48 bg-secondary/30 rounded-t-[3rem]"
          />
        </div>

        {/* Windows lit up */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 grid grid-cols-6 gap-4">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-10 h-12 bg-sun-yellow/30 rounded-md shadow-[0_0_12px_hsl(45_95%_55%_/_0.4)]" />
          ))}
        </div>

        {/* Rooftop completed */}
        <div className="absolute left-1/2 -translate-x-1/2"
             style={{ bottom: `${Math.min(12 + mainH, 540)}px` }}>
          <div className="w-[420px] h-3 bg-primary/35 rounded-full" />
          <div className="w-[320px] h-2 bg-secondary/35 rounded-full mt-2 mx-auto" />
        </div>

        {/* Landscaping */}
        <div className="absolute bottom-6 left-1/2 -translate-x-[420px] w-64 h-20 bg-sage-green/25 rounded-t-[2rem]" />
        <div className="absolute bottom-6 left-1/2 translate-x-[160px] w-64 h-20 bg-sage-green/25 rounded-t-[2rem]" />

        {/* Warm ambient glow */}
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[720px] h-[520px] rounded-full bg-sun-glow/20 blur-[120px] animate-pulse" />

        {/* Sky gradient at completion */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-blue/10 via-transparent to-transparent" />
      </div>
    </div>
  );
};
