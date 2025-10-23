import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Code, Brain } from "lucide-react";

const About = () => {
  const education = {
    degree: "B.E. CSE (AI & ML)",
    institution: "S.A. Engineering College",
    year: "2027",
  };

  const experience = [
    {
      role: "Internship Trainee",
      company: "HVF Avadi",
      period: "June 2025",
      description: "PHP & MySQL Development",
    },
    {
      role: "Python Programmer Intern",
      company: "CodeAlpha",
      period: "Aug - Sep 2025",
      description: "Python Development & Automation",
    },
  ];

  const technicalSkills = [
    "Python",
    "Java",
    "C",
    "PHP",
    "MySQL",
    "MongoDB",
    "TensorFlow",
    "Scikit-learn",
    "Machine Learning",
    "Deep Learning",
  ];

  const softSkills = [
    "Communication",
    "Team Collaboration",
    "Problem Solving",
    "Adaptability",
    "Critical Thinking",
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate machine learning enthusiast focused on creating real-world impact through 
            innovative AI solutions and problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="p-6 bg-card border-border card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{education.degree}</p>
                  <p className="text-muted-foreground">{education.institution}</p>
                  <p className="text-sm text-primary">Graduating {education.year}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Experience */}
          <Card className="p-6 bg-card border-border card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="space-y-1">
                      <p className="font-medium text-foreground">{exp.role}</p>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                      <p className="text-xs text-primary">{exp.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Technical Skills */}
          <Card className="p-6 bg-card border-border card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Code className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="p-6 bg-card border-border card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Brain className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
