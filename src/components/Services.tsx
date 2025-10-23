import { Card } from "@/components/ui/card";
import { Brain, BarChart3, Bot, Database, Code2, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description:
        "Building and training custom ML models tailored to your specific business needs, from regression to classification.",
    },
    {
      icon: Bot,
      title: "Deep Learning Solutions",
      description:
        "Developing neural networks and deep learning architectures using TensorFlow and PyTorch for complex problems.",
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Insights",
      description:
        "Extracting meaningful insights from data through statistical analysis and visualization techniques.",
    },
    {
      icon: Database,
      title: "Model Deployment",
      description:
        "Deploying ML models into production environments with scalable and efficient infrastructure.",
    },
    {
      icon: Code2,
      title: "AI Integration",
      description:
        "Integrating AI capabilities into existing applications and systems for enhanced functionality.",
    },
    {
      icon: Sparkles,
      title: "Generative AI",
      description:
        "Leveraging cutting-edge generative AI models for code generation, content creation, and automation.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized AI and ML services to help bring your ideas to life with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border card-hover group"
              >
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary inline-block group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
