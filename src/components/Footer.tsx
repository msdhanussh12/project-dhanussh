import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} M.S. Dhanussh. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/msdhanussh12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/msdhanussh12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:msdhanussh12@gmail.com"
              className="p-2 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
