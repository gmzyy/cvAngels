"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionHeader from "../molecules/SectionHeader"
import { Rocket } from "lucide-react"
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
        <SectionHeader title="Sobre mí" sectionNumber="01" />
      </motion.div>

      <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        <motion.p variants={fadeUp} transition={{ ...defaultTransition, delay: 0.05 }}>
          Soy Angel,{" "}
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
            Ingeniero de Software y Full Stack Developer
          </span>{" "}
          de Puebla, México. Me obsesiona construir sistemas que escalen sin romperse y que realmente ayuden a negocios a crecer.
        </motion.p>

        <motion.p variants={fadeUp} transition={{ ...defaultTransition, delay: 0.1 }}>
          Domino el ecosistema{" "}
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>TypeScript</span>{" "}
          de punta a punta:{" "}
          <span className="font-semibold" style={{ color: 'var(--accent)' }}>Next.js (App Router + Server Components)</span>{" "}
          para frontends rápidos y{" "}
          <span className="font-semibold" style={{ color: 'var(--accent)' }}>NestJS + Prisma</span>{" "}
          para backends limpios. He reducido latencia en MongoDB un{" "}
          <strong style={{ color: 'var(--text-primary)' }}>35%</strong>, mejorado LCP un{" "}
          <strong style={{ color: 'var(--text-primary)' }}>20%</strong>{" "}
          y automatizado despliegues con Docker y CI/CD.
        </motion.p>

        <motion.div
          variants={scaleIn}
          transition={{ ...defaultTransition, delay: 0.15 }}
          className="rounded-lg p-4 flex items-start gap-3"
          style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' }}
          whileHover={{ scale: 1.01 }}
        >
          <Rocket className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
          <div>
            <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>Lo que más me motiva:</p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Crear productos production-ready con IA integrada, optimizar APIs y ayudar a startups a lanzar sin dolores técnicos.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}