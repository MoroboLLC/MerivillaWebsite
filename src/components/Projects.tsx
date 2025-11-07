import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Vista Paraíso",
    description: "Modern luxury residences with resort-style amenities and tropical landscaping",
    image: project1,
    status: "Available Now",
  },
  {
    title: "Costa Azul Villas",
    description: "Exclusive beachfront properties with stunning ocean views",
    image: project2,
    status: "Pre-Sale",
  },
  {
    title: "Selva Serenity",
    description: "Eco-luxury community integrated with Yucatán's natural beauty",
    image: project3,
    status: "Coming Soon",
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-ocean">
            Featured Developments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our portfolio of exceptional properties designed for those
            who demand the extraordinary
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-500 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 gradient-hero transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-70" : "opacity-30"
                  }`}
                />
                <div className="absolute top-4 right-4">
                  <span className="glass-effect px-4 py-2 rounded-full text-sm font-semibold text-white">
                    {project.status}
                  </span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-gradient-ocean transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
