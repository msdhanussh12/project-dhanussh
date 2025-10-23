import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "AetherCode",
      role: "Generative AI Developer",
      description:
        "Web-based IDE powered by Google's Gemini models, featuring AI-driven code analysis, conversational debugging, multi-language support, code generation, translation, library migration, and unit test generation with TTS support.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "ShadCN UI",
        "Tailwind CSS",
        "Gemini AI",
        "Genkit",
      ],
      highlights: [
        "AI-powered code analysis & debugging",
        "Multi-language code generation",
        "Interactive Q&A with TTS",
        "Library migration tools",
        "Unit test generation",
      ],
      github: "https://github.com/msdhanussh12",
    },
    {
      title: "Secure File Exchange System",
      role: "PHP & MySQL Developer",
      description:
        "Offline web application for secure file sharing with 10-layer encryption, user authentication, HTTPS offline operation, dashboard interface, activity logging, and comprehensive transaction management.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      highlights: [
        "10-layer encryption system",
        "Offline HTTPS operation",
        "User authentication & authorization",
        "Activity logging & monitoring",
        "Transaction management",
      ],
      github: "https://github.com/msdhanussh12",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative projects that demonstrate expertise in AI, ML, and full-stack development.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 bg-card border-border card-hover"
            >
              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {project.title}
                      </h3>
                      <p className="text-primary font-medium mt-1">
                        {project.role}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">
                    Key Highlights:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
