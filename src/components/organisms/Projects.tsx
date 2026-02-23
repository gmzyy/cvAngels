"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionHeader from "../molecules/SectionHeader"
import ProjectCard from "../molecules/ProjectCard"
import { FolderGit2 } from "lucide-react"
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/animations"

const projects = [
  {
    title: "Staicka – Estudio Freelance de Fullstack & IA",
    description: "Proyecto fundado y desarrollado por mí. Estudio especializado en desarrollo de software escalable e integración real de IA (LLMs). Incluye VaultNote AI, AI Business Assistant y Secure Auth System. Landing con Next.js + Tailwind CSS, enfoque en arquitectura limpia y cero deuda técnica.",
    tech: ["Next.js", "IA / LLMs", "Tailwind CSS"],
    github: "https://github.com/gmzyy",
    demo: "https://staicka.vercel.app/",
    featured: true,
  },
  {
    title: "AUTH CORE (Identity System)",
    description: "Sistema de identidad fullstack dockerizado con NestJS y Prisma. JWT para gestión segura de sesiones, roles y control de acceso. Arquitectura limpia lista para producción.",
    tech: ["NestJS", "Prisma", "MySQL", "Docker", "JWT"],
    github: "https://github.com/gmzyy/auth-system-docker",
  },
  {
    title: "TRELLUNA (API Kanban)",
    description: "API REST modular para gestión de tableros Kanban con Node.js + Express + SQL. Validación TypeScript estricta, manejo de workspaces, columnas y tareas.",
    tech: ["Node.js", "Express", "SQL", "TypeScript"],
    github: "https://github.com/gmzyy/kanban-api",
  },
  {
    title: "Barber Management Platform",
    description: "Plataforma completa de gestión de citas en tiempo real. Panel administrativo y UX optimizada. Backend Node/Express + MongoDB con CRUD completo.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Node.js", "Express"],
    github: "https://github.com/gmzyy/BarberAngeles",
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