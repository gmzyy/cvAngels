import SectionHeader from "../molecules/SectionHeader"
import SkillItem from "../molecules/SkillItem"

const skillCategories = [
  {
    category: "Frontend & UI",
    skills: [
      "JavaScript (ES6+ avanzado)",
      "React.js",
      "Next.js (App Router, Server Components, Server Actions)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion (animaciones y transiciones)",
      "React Query / TanStack Query (data fetching)",
      "Zustand (gestión de estado ligera)",
      "Shadcn/ui & Radix UI (componentes accesibles)",
    ],
  },
  {
    category: "Arquitectura & Backend",
    skills: ["Node.js", "Express", "NestJS", "Prisma ORM", "REST APIs", "JWT & Seguridad"],
  },
  {
    category: "Data & DevOps / Cloud",
    skills: [
      "MongoDB (optimización & agregaciones)",
      "PostgreSQL / MySQL",
      "Docker & Contenedores",
      "CI/CD (Vercel, GitHub Actions)",
      "AWS (ECS, RDS, despliegues básicos)",
      "Git / GitHub"
    ],
  },
  {
    category: "Otras Tecnologías",
    skills: ["C# / .NET Core", "PHP", "Scrum & Metodologías Ágiles", "Postman"],
  },
]

export default function Skills() {
  return (
    <section className="mb-14" id="skills">
      <SectionHeader title="Habilidades Técnicas" />

      <div className="flex flex-col gap-10">
        {skillCategories.map((group) => (
          <div key={group.category}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 w-fit">
              {group.category}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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