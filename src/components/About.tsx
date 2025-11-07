import { useEffect, useRef, useState } from "react";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-background via-sky-blue/30 to-background"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/10 morphing-blob blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-secondary/10 morphing-blob blur-[120px]" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative inline-block mb-6 md:mb-8">
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-[3rem] blur-2xl" />
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gradient-ocean relative z-10">
              Redefining Luxury Living
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 md:w-32 h-1 bg-gradient-to-r from-transparent via-sun-yellow to-transparent" />
          </div>
          <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed px-4">
            <p className="font-medium">
              MERIVILLA specializes in creating extraordinary real
              estate experiences that blend modern design with the timeless
              beauty of Mérida's colonial charm.
            </p>
            <p>
              We are dedicated to bringing world-class developments to Americans seeking retirement
              paradise or investment opportunities in the Yucatán Peninsula.
            </p>
            <p>
              Each project is meticulously crafted to exceed expectations,
              offering unparalleled quality, innovative design, and a lifestyle
              that celebrates the best of Mexican living.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 px-4">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Completed Projects" },
              { number: "1000+", label: "Happy Residents" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`glass-effect p-6 md:p-8 rounded-2xl shadow-medium transition-all duration-700 delay-${index * 100} ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-sunset mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
