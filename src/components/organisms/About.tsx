"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionHeader from "../molecules/SectionHeader"
import { Rocket, Zap } from "lucide-react"
import { fadeUp, staggerContainer, scaleIn, defaultTransition } from "@/lib/animations"

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={ref}
      id="about"
      variants={staggerContainer}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="rounded-xl p-6"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <motion.div variants={fadeUp} transition={defaultTransition}>
        <SectionHeader title="Perfil Profesional" sectionNumber="01" />
      </motion.div>

      <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        <motion.p variants={fadeUp} transition={{ ...defaultTransition, delay: 0.05 }}>
          Soy{" "}
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
            Angel Gomez Garcia
          </span>
          , Desarrollador Fullstack versátil de Puebla, México. Construyo soluciones en distintos dominios:{" "}
          <span style={{ color: 'var(--accent-light)' }}>plataformas fintech de alta transaccionalidad</span>,{" "}
          sistemas de reclutamiento con inteligencia artificial y aplicaciones web comerciales.
        </motion.p>

        <motion.p variants={fadeUp} transition={{ ...defaultTransition, delay: 0.1 }}>
          Me muevo con soltura entre{" "}
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>backend, frontend, seguridad y NLP</span>,
          adaptando arquitecturas escalables a las necesidades de cada proyecto. Integro herramientas de IA
          para acelerar el ciclo de vida de desarrollo, siempre con foco en{" "}
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>soluciones eficientes, seguras y de calidad</span>.
        </motion.p>

        {/* Highlight boxes */}
        <motion.div
          variants={fadeUp}
          transition={{ ...defaultTransition, delay: 0.12 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          <motion.div
            className="rounded-lg p-4 flex items-start gap-3"
            style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' }}
            whileHover={{ scale: 1.01 }}
          >
            <Rocket className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
            <div>
              <p className="font-semibold text-xs mb-1" style={{ color: 'var(--text-primary)' }}>Lo que más me motiva</p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                Crear productos production-ready con IA integrada, optimizar APIs y ayudar a startups a lanzar sin dolores técnicos.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="rounded-lg p-4 flex items-start gap-3"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
            whileHover={{ scale: 1.01, borderColor: 'var(--accent-border)' }}
          >
            <Zap className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
            <div>
              <p className="font-semibold text-xs mb-1" style={{ color: 'var(--text-primary)' }}>Mi stack principal</p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                TypeScript · Next.js · NestJS · Prisma · Docker · AWS S3 · FastAPI · Python
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}