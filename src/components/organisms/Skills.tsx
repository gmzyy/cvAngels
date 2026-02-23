"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionHeader from "../molecules/SectionHeader"
import SkillItem from "../molecules/SkillItem"
import { Cpu } from "lucide-react"
import { fadeUp, staggerContainer, staggerContainerFast, defaultTransition } from "@/lib/animations"

const skillCategories = [
  {
    category: "Frontend & UI",
    skills: ["JavaScript (ES6+)", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query", "Zustand", "Shadcn/ui"],
  },
  {
    category: "Arquitectura & Backend",
    skills: ["Node.js", "Express", "NestJS", "Prisma ORM", "REST APIs", "JWT & Auth"],
  },
  {
    category: "Data & DevOps / Cloud",
    skills: ["MongoDB", "PostgreSQL / MySQL", "Docker", "CI/CD (Vercel, GitHub Actions)", "AWS (ECS, RDS)", "Git / GitHub"],
  },
  {
    category: "Otras Tecnologías",
    skills: ["C# / .NET Core", "PHP", "Scrum", "Postman"],
  },
]

function SkillGroup({ category, skills, groupIndex }: { category: string; skills: string[]; groupIndex: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      variants={staggerContainerFast}
      initial="initial"
      animate={inView ? "animate" : "initial"}
    >
      <motion.p
        className="section-tag mb-3"
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
        transition={{ ...defaultTransition, delay: 0.05 }}
      >
        {category}
      </motion.p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.95 }}
            transition={{ ...defaultTransition, delay: i * 0.04 + 0.1 }}
          >
            <SkillItem name={skill} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.section
      ref={ref}
      id="skills"
      variants={staggerContainer}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="rounded-xl p-6"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <motion.div variants={fadeUp} transition={defaultTransition}>
        <SectionHeader title="Habilidades Técnicas" sectionNumber="03" icon={<Cpu className="w-4 h-4" />} />
      </motion.div>

      <div className="flex flex-col gap-7">
        {skillCategories.map((group, i) => (
          <SkillGroup key={group.category} groupIndex={i} {...group} />
        ))}
      </div>
    </motion.section>
  )
}