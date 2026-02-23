import SectionHeader from "../molecules/SectionHeader"
import SkillItem from "../molecules/SkillItem"
import { Cpu } from "lucide-react"

const skillCategories = [
  {
    category: "Frontend & UI",
    accent: "#7c3aed",
    skills: [
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
      "Zustand",
      "Shadcn/ui",
    ],
  },
  {
    category: "Arquitectura & Backend",
    accent: "#06b6d4",
    skills: ["Node.js", "Express", "NestJS", "Prisma ORM", "REST APIs", "JWT & Auth"],
  },
  {
    category: "Data & DevOps / Cloud",
    accent: "#10b981",
    skills: [
      "MongoDB",
      "PostgreSQL / MySQL",
      "Docker",
      "CI/CD (Vercel, GitHub Actions)",
      "AWS (ECS, RDS)",
      "Git / GitHub",
    ],
  },
  {
    category: "Otras Tecnologías",
    accent: "#f59e0b",
    skills: ["C# / .NET Core", "PHP", "Scrum", "Postman"],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="rounded-2xl p-6 md:p-8"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid rgba(99,102,241,0.1)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      }}
    >
      <SectionHeader title="Habilidades Técnicas" sectionNumber="03" icon={<Cpu className="w-5 h-5" />} />

      <div className="flex flex-col gap-8">
        {skillCategories.map((group) => (
          <div key={group.category}>
            {/* Category label */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="h-1 w-4 rounded-full flex-shrink-0"
                style={{ background: group.accent }}
              />
              <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: group.accent }}>
                {group.category}
              </h3>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {group.skills.map((skill) => (
                <SkillItem key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}