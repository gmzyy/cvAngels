"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionHeader from "../molecules/SectionHeader"
import { Briefcase } from "lucide-react"
import { fadeUp, staggerContainer, drawLine, defaultTransition } from "@/lib/animations"
import { useCounter } from "@/hooks/useAnimations"

function Metric({ value, suffix = "%", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCounter(value, 1000, inView)

  return (
    <span ref={ref}>
      <strong style={{ color: 'var(--accent-light)' }}>
        {count}{suffix}
      </strong>{" "}{label}
    </span>
  )
}

const jobs = [
  {
    title: "Fullstack Developer",
    company: "Pharos Payments",
    link: null,
    period: "Enero 2026 – Julio 2026",
    tag: "Fintech / SPEI",
    bullets: [
      <>Diseñé e implementé el flujo <strong style={{ color: 'var(--text-primary)' }}>end-to-end de autenticación 2FA/TOTP</strong> (QR, OTP, códigos de respaldo), protegiendo transferencias SPEI y administración de cuentas.</>,
      <>Resolví vulnerabilidades de <strong style={{ color: 'var(--text-primary)' }}>replay attack</strong>, cifré tokens TOTP en HTTP y construí expiración automática de sesión por inactividad.</>,
      <>Refactoricé el motor de consultas <strong style={{ color: 'var(--text-primary)' }}>SPEI IN/OUT</strong> migrando a filtrado híbrido (servidor + cliente) con chunked fetching, resolviendo errores 500/502.</>,
      <>Construí motor de <strong style={{ color: 'var(--text-primary)' }}>exportación masiva (ZIP/Excel)</strong> con sincronización del <Metric value={100} label="entre filtros y datos descargados" />.</>,
      <>Diseñé <strong style={{ color: 'var(--text-primary)' }}>useServerList</strong>, custom hook central que estandarizó paginación y filtros en toda la plataforma.</>,
      <>Lideré la estandarización de APIs bajo <strong style={{ color: 'var(--text-primary)' }}>OpenAPI 3.1.0</strong>, migré la capa de red a Dio con interceptores y rediseñé carga KYC con <strong style={{ color: 'var(--text-primary)' }}>AWS S3 Multipart Presigned URLs</strong>.</>,
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Staicka",
    link: "https://staicka.vercel.app",
    period: "Noviembre 2025 – Presente",
    tag: "Freelance",
    bullets: [
      <>Diseño y desarrollo de aplicaciones web escalables con <strong style={{ color: 'var(--text-primary)' }}>Next.js y NestJS</strong>, optimizando arquitecturas para requerimientos comerciales diversos.</>,
      <>Reduje tiempos de entrega en un <Metric value={40} label="mediante flujos de trabajo asistidos por IA" /> para generación de boilerplate y validación lógica.</>,
      <>Interfaces responsivas con <strong style={{ color: 'var(--text-primary)' }}>Tailwind CSS</strong> garantizando estándares de SEO y conversión.</>,
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Softech",
    link: null,
    period: "Julio 2024 – Febrero 2025",
    tag: null,
    bullets: [
      <><Metric value={35} label="de reducción de latencia en MongoDB" /> mediante rediseño estratégico de esquemas e índices.</>,
      <>Mejora del <Metric value={20} label="en métricas LCP (Largest Contentful Paint)" /> con Next.js App Router.</>,
      <>Configuré pipelines de CI/CD, incrementando velocidad de entrega en producción en un <Metric value={15} label="" />%.</>,
    ],
  },
]

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

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
        <SectionHeader title="Experiencia Profesional" sectionNumber="02" icon={<Briefcase className="w-4 h-4" />} />
      </motion.div>

      <div className="relative flex flex-col gap-8">
        {/* Timeline line */}
        <motion.div
          variants={drawLine}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          className="absolute left-[7px] top-2 bottom-2 w-px"
          style={{ background: 'linear-gradient(to bottom, var(--accent), var(--border))', transformOrigin: 'top' }}
        />

        {jobs.map((job, jobIdx) => (
          <motion.div
            key={job.company + job.period}
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: jobIdx * 0.15 + 0.1 }}
            className="relative pl-7"
          >
            {/* Dot */}
            <motion.span
              className="absolute left-0 top-[6px] h-3 w-3 rounded-full"
              style={{ background: 'var(--accent)', border: '2px solid var(--bg-card)', boxShadow: '0 0 8px rgba(139,26,43,0.4)' }}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ ...defaultTransition, delay: jobIdx * 0.15 + 0.35, type: "spring", stiffness: 300 }}
            />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                  {job.title}
                </h3>
                <span className="font-medium text-sm" style={{ color: 'var(--accent)' }}>
                  @{" "}
                  {job.link ? (
                    <a href={job.link} target="_blank" rel="noopener noreferrer"
                      style={{ color: 'var(--accent)', textDecoration: 'underline', textDecorationColor: 'var(--accent-border)' }}>
                      {job.company}
                    </a>
                  ) : job.company}
                </span>
                {job.tag && (
                  <span
                    className="text-[0.6rem] font-semibold px-1.5 py-0.5 rounded"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent-light)', border: '1px solid var(--accent-border)' }}
                  >
                    {job.tag}
                  </span>
                )}
              </div>
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
                  className="flex items-start gap-2 text-xs"
                  style={{ color: 'var(--text-secondary)' }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ ...defaultTransition, delay: jobIdx * 0.12 + i * 0.06 + 0.4 }}
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