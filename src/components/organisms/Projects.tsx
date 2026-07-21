"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionHeader from "../molecules/SectionHeader"
import ProjectCard from "../molecules/ProjectCard"
import { FolderGit2 } from "lucide-react"
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/animations"

const projects = [
  {
    title: "STAICKA ARCIKA — Generador de Arquitecturas con IA",
    description: "Herramienta que transforma requerimientos técnicos en esquemas y diagramas de flujo mediante LLMs avanzados. Redujo un 60% el tiempo de configuración inicial de proyectos automatizando estructura de carpetas y dependencias.",
    tech: ["Next.js", "NestJS", "LLMs", "Prompt Engineering", "Docker"],
    github: "https://github.com/Gmzyy",
    demo: "https://staicka.vercel.app/",
    featured: true,
  },
  {
    title: "STAICKA Talent Scout — Motor de Reclutamiento con IA (On-Premise)",
    description: "Sistema de reclutamiento inteligente 100% on-premise. Extrae y analiza CVs en PDF con NLP (SpaCy). Motor de detección de ~60 patrones de habilidades técnicas y scoring semántico ponderado por sección.",
    tech: ["FastAPI", "Next.js", "MongoDB", "SpaCy", "NLP", "Docker Compose", "GitHub Actions"],
    github: "https://github.com/Gmzyy",
    featured: false,
  },
  {
    title: "AUTH CORE — Identity System",
    description: "Sistema de identidad fullstack dockerizado con NestJS y Prisma. JWT para gestión segura de sesiones, roles y control de acceso. Arquitectura limpia lista para producción.",
    tech: ["NestJS", "Prisma", "MySQL", "Docker", "JWT"],
    github: "https://github.com/gmzyy/auth-system-docker",
  },
  {
    title: "TRELLUNA — API Kanban",
    description: "API REST modular para gestión de tableros Kanban. Validación TypeScript estricta, manejo de workspaces, columnas y tareas con Node.js + Express + SQL.",
    tech: ["Node.js", "Express", "SQL", "TypeScript"],
    github: "https://github.com/gmzyy/kanban-api",
  },
]

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [featured, ...rest] = projects

  return (
    <motion.section
      ref={ref}
      id="projects"
      variants={staggerContainer}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="rounded-xl p-6"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <motion.div variants={fadeUp} transition={defaultTransition}>
        <SectionHeader title="Proyectos Destacados" sectionNumber="04" icon={<FolderGit2 className="w-4 h-4" />} />
      </motion.div>

      {/* Featured card */}
      <motion.div
        variants={fadeUp}
        transition={{ ...defaultTransition, delay: 0.1 }}
        className="mb-4"
      >
        <ProjectCard {...featured} featured />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rest.map((project, i) => (
          <motion.div
            key={project.title}
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: i * 0.1 + 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}