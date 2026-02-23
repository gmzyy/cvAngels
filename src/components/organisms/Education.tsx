"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionHeader from "../molecules/SectionHeader"
import { GraduationCap, Globe } from "lucide-react"
import { fadeUp, staggerContainer, drawLine, defaultTransition } from "@/lib/animations"

const education = [
  { degree: "Ingeniería en Software", school: "Universidad Tecnológica de Puebla (UTP)", period: "2024 – 2026" },
  { degree: "TSU en Software", school: "Universidad Tecnológica de Puebla (UTP)", period: "2022 – 2024" },
]

export default function Education() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={ref}
      id="education"
      variants={staggerContainer}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="rounded-xl p-6"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <motion.div variants={fadeUp} transition={defaultTransition}>
        <SectionHeader title="Educación" sectionNumber="05" icon={<GraduationCap className="w-4 h-4" />} />
      </motion.div>

      <div className="relative flex flex-col gap-7 mb-8">
        {/* Timeline draw-in */}
        <motion.div
          variants={drawLine}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
          className="absolute left-[7px] top-2 bottom-2 w-px"
          style={{ background: 'var(--border)', transformOrigin: 'top' }}
        />

        {education.map((entry, i) => (
          <motion.div
            key={entry.degree}
            className="relative pl-7"
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: i * 0.12 + 0.1 }}
          >
            <motion.span
              className="absolute left-0 top-[6px] h-3 w-3 rounded-full"
              style={{ background: 'var(--accent)', border: '2px solid var(--bg-card)' }}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 22, delay: i * 0.12 + 0.3 }}
            />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{entry.degree}</h3>
              <span
                className="text-xs px-2.5 py-0.5 rounded-full flex-shrink-0 w-fit"
                style={{ background: 'var(--bg-surface)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
              >
                {entry.period}
              </span>
            </div>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{entry.school}</p>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeUp} transition={{ ...defaultTransition, delay: 0.35 }}>
        <SectionHeader title="Idiomas" />
      </motion.div>

      <motion.div
        className="rounded-lg p-4"
        style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
        variants={fadeUp}
        transition={{ ...defaultTransition, delay: 0.4 }}
        whileHover={{ borderColor: 'var(--accent)', scale: 1.01 }}
      >
        <div className="flex items-center gap-2.5 mb-2">
          <Globe className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
          <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Inglés</span>
          <motion.span
            className="text-[0.65rem] font-semibold px-2 py-0.5 rounded"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}
            whileHover={{ scale: 1.05 }}
          >
            A2
          </motion.span>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Lectura de <strong style={{ color: 'var(--text-primary)' }}>documentación técnica</strong>, resolución de{" "}
          <span style={{ color: 'var(--accent)' }}>issues</span> en GitHub y comunicación escrita en entornos de desarrollo.
        </p>
      </motion.div>
    </motion.section>
  )
}