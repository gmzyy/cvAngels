import SectionHeader from "../molecules/SectionHeader"
import SkillItem from "../molecules/SkillItem"

const skillCategories = [
  {
    category: "Frontend & UI",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Arquitectura & Backend",
    skills: ["Node.js", "NestJS", "Express", "Prisma ORM", "C# / .NET Core"],
  },
  {
    category: "Data & DevOps",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Docker", "CI/CD & Git"],
  },
]

export default function Skills() {
  return (
    <section className="mb-14" id="skills">
      <SectionHeader title="Habilidades Técnicas" />

      <div className="flex flex-col gap-8">
        {skillCategories.map((group) => (
          <div key={group.category}>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 border-b-2 border-gray-100 dark:border-gray-800 pb-1 w-fit">
              {group.category}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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