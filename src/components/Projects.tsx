import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
            <div
              key={index}
              className="group cursor-pointer animate-fade-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Abstract hover glow */}
              <div 
                className={`absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2.5rem] blur-2xl transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
              
              <div className="relative overflow-hidden rounded-[2rem] shadow-strong transition-smooth hover:shadow-glow transform hover:-translate-y-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-smooth group-hover:scale-110"
                />
                
                {/* Abstract shape overlay */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-sun-yellow/20 rounded-full blur-2xl group-hover:scale-150 transition-smooth" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean via-deep-ocean/50 to-transparent opacity-60 group-hover:opacity-80 transition-smooth" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-smooth group-hover:translate-y-0 translate-y-2">
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-lg opacity-90 mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                    <span className="text-sm font-semibold bg-secondary text-secondary-foreground px-4 py-2 rounded-full">
                      Explore Project
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
