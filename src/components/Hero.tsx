import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profilePicture from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                M.S. <span className="text-gradient">Dhanussh</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
                AI & ML Enthusiast | Problem Solver
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Penultimate year CSE student specializing in AI & ML, passionate about building 
              intelligent systems and solving real-world challenges through technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#portfolio">View Projects</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/msdhanussh12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/msdhanussh12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:msdhanussh12@gmail.com"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-glow-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20"></div>
                <img
                  src={profilePicture}
                  alt="M.S. Dhanussh"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/50 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#about">
            <ChevronDown className="w-8 h-8 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
