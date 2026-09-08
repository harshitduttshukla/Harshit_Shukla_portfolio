import { Bot, Braces, Cloud, Code2, Database, Server } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS", "Expo", "HTML / CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "Python", "REST APIs", "JWT", "RBAC"],
  },
  {
    icon: Bot,
    title: "AI",
    skills: ["Anthropic Claude", "OpenRouter", "LLM APIs", "Agentic workflows", "Document processing"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLAlchemy"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["Docker", "Docker Compose", "AWS EC2", "AWS RDS", "CI/CD", "Vercel"],
  },
  {
    icon: Braces,
    title: "Languages & Tools",
    skills: ["TypeScript", "JavaScript", "Python", "C++", "Kotlin", "Git", "Linux"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="portfolio-section">
      <div className="section-container">
        <SectionHeading
          eyebrow="Technical toolkit"
          title="The stack behind the work"
          description="Technologies used across the production applications, internships, and products shown above."
        />
        <div className="skills-grid">
          {skillGroups.map(({ icon: Icon, title, skills }) => (
            <article className="skill-card" key={title}>
              <div className="skill-card-head">
                <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                <h3>{title}</h3>
              </div>
              <div className="skill-tags">
                {skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
        <div className="coding-strip">
          <div>
            <span className="section-label">Problem solving</span>
            <h3>Data Structures & Algorithms</h3>
            <p>C++ · Striver&apos;s A2Z DSA Sheet · 250+ problems solved</p>
          </div>
          <div className="coding-links">
            <a href="https://leetcode.com/u/harshitshukla6388/" target="_blank" rel="noopener noreferrer">LeetCode ↗</a>
            <a href="https://codeforces.com/profile/shukla.ji" target="_blank" rel="noopener noreferrer">Codeforces ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
