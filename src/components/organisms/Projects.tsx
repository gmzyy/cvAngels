"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionHeader from "../molecules/SectionHeader"
import ProjectCard from "../molecules/ProjectCard"
import { FolderGit2 } from "lucide-react"
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/animations"

const projects = [
  {
    title: "STAICKA STUDIO — Agencia Digital & Software Lab",
    description: "Sitio web oficial de Staicka. Desarrollado con Next.js y React para ofrecer experiencia web ultra reactiva, arquitectura moderna y desarrollo a medida.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Gmzyy",
    demo: "https://staicka.vercel.app/",
    featured: true,
  },
  {
    title: "EMPAQUES SAN ANDRÉS — Plataforma Industrial",
    description: "Plataforma web comercial y catálogo interactivo de productos para distribuidora de empaques e insumos industriales.",
    tech: ["HTML5", "JavaScript", "CSS3", "Netlify"],
    demo: "https://sanandrestt.netlify.app/",
  },
  {
    title: "BARBER ÁNGELES — Sistema de Citas en Tiempo Real",
    description: "Sistema integral de reservas en tiempo real y catálogo digital interactivo para barbería con panel de control.",
    tech: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
    demo: "https://barber-angeles.vercel.app/home",
  },
  {
    title: "EMCIEL NAILS — Estudio de Estética & Catálogo",
    description: "Aplicación web y catálogo digital de servicios para estudio de uñas y estética profesional.",
    tech: ["Next.js", "React", "Tailwind CSS"],
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