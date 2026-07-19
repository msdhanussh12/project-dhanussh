import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Code, Brain } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.E. CSE (AI & ML)",
      institution: "S.A. Engineering College",
      period: "2023 - 2027",
      grade: "CGPA: 7.80 (as of 6th semester)",
    },
    {
      degree: "AISSCE (HSC)",
      institution: "Kendriya Vidyalaya HVF Avadi, Chennai - 54",
      period: "August 2021 - May 2023",
      grade: "Aggregate: 81.00%",
    },
    {
      degree: "AISSCE (SSC)",
      institution: "Kendriya Vidyalaya HVF Avadi, Chennai - 54",
      period: "April 2011 - August 2021",
      grade: "Aggregate: 94.80%",
    },
  ];

  const experience = [
    {
      role: "Student Intern",
      company: "ISRO-IPRC, Mahendragiri R.F.",
      period: "June 2026 - July 2026",
      description: "Research & Development",
    },
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
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="space-y-1">
                      <p className="font-medium text-foreground">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <p className="text-xs text-primary">{edu.period}</p>
                      <p className="text-xs text-muted-foreground">{edu.grade}</p>
                    </div>
                  ))}
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
