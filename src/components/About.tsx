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
      className="py-24 md:py-32 gradient-sky relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient-ocean">
            Redefining Luxury Living
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
            <p className="font-medium">
              McCarthy Development specializes in creating extraordinary real
              estate experiences that blend modern design with the timeless
              beauty of Mérida's colonial charm.
            </p>
            <p>
              Founded by Michael McCarthy, our company is dedicated to bringing
              world-class developments to Americans seeking retirement
              paradise or investment opportunities in the Yucatán Peninsula.
            </p>
            <p>
              Each project is meticulously crafted to exceed expectations,
              offering unparalleled quality, innovative design, and a lifestyle
              that celebrates the best of Mexican living.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Completed Projects" },
              { number: "1000+", label: "Happy Residents" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`glass-effect p-8 rounded-2xl shadow-medium transition-all duration-700 delay-${index * 100} ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-sunset mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
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
