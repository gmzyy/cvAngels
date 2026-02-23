"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionHeader from "../molecules/SectionHeader"
import { Briefcase } from "lucide-react"
import { fadeUp, staggerContainer, drawLine, defaultTransition } from "@/lib/animations"
import { useCounter } from "@/hooks/useAnimations"

// Animated metric number that counts up
function Metric({ value, suffix = "%", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCounter(value, 1000, inView)

  return (
    <span ref={ref}>
      <strong style={{ color: 'var(--text-primary)' }}>
        {count}{suffix}
      </strong>{" "}{label}
    </span>
  )
}

const jobs = [
  {
    title: "Full Stack Developer",
    company: "Softech",
    period: "Julio 2024 – Febrero 2025",
    bullets: [
      <><Metric value={35} label="de reducción de latencia en MongoDB" /> mediante rediseño de esquemas e índices.</>,
      <>Mejora del <Metric value={20} label="en métricas de LCP" /> con Next.js App Router.</>,
      <>Incrementé la velocidad de entrega de funcionalidades en un <Metric value={15} label="" />% automatizando pipelines CI/CD.</>,
    ],
  },
  {
    title: "Software Developer Jr",
    company: "Quavanti Innovación Digital",
    period: "Julio 2025 – Septiembre 2025",
    bullets: [
      <>Desarrollé módulos MVC con <strong style={{ color: 'var(--text-primary)' }}>C# / .NET Core</strong>, garantizando consistencia de datos en MySQL.</>,
      <>Participé en revisiones de código y ceremonias <strong style={{ color: 'var(--text-primary)' }}>Scrum</strong> para asegurar calidad y entregas.</>,
    ],
  },
]

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.section
      ref={ref}
      id="experience"
      variants={staggerContainer}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="rounded-xl p-6"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <motion.div variants={fadeUp} transition={defaultTransition}>
        <SectionHeader title="Experiencia Laboral" sectionNumber="02" icon={<Briefcase className="w-4 h-4" />} />
      </motion.div>

      <div className="relative flex flex-col gap-8">
        {/* Animated timeline line */}
        <motion.div
          variants={drawLine}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          className="absolute left-[7px] top-2 bottom-2 w-px"
          style={{ background: 'var(--border)', transformOrigin: 'top' }}
        />

        {jobs.map((job, jobIdx) => (
          <motion.div
            key={job.company}
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: jobIdx * 0.15 + 0.1 }}
            className="relative pl-7"
          >
            {/* Animated dot */}
            <motion.span
              className="absolute left-0 top-[6px] h-3 w-3 rounded-full"
              style={{ background: 'var(--accent)', border: '2px solid var(--bg-card)' }}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ ...defaultTransition, delay: jobIdx * 0.15 + 0.35, type: "spring", stiffness: 300 }}
            />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                {job.title}{" "}
                <span className="font-normal" style={{ color: 'var(--accent)' }}>@ {job.company}</span>
              </h3>
              <span
                className="text-xs px-2.5 py-0.5 rounded-full flex-shrink-0 w-fit"
                style={{ background: 'var(--bg-surface)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
              >
                {job.period}
              </span>
            </div>

            <ul className="flex flex-col gap-2">
              {job.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ ...defaultTransition, delay: jobIdx * 0.15 + i * 0.08 + 0.4 }}
                >
                  <span className="mt-1.5 h-1 w-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}