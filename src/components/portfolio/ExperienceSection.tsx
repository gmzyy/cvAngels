"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"

interface ProjectDetail {
  name: string
  bullets: string[]
}

interface Job {
  company: string
  role: string
  period: string
  link?: string
  projects?: ProjectDetail[]
  bullets?: string[]
}

const JOBS: Job[] = [
  {
    company: "Pharos Payments",
    role: "Fullstack Developer",
    period: "Enero 2026 – Julio 2026",
    projects: [
      {
        name: "Sendro Financial Platform (Fintech / SPEI)",
        bullets: [
          "Diseñé e implementé el flujo end-to-end de autenticación 2FA/TOTP (QR, OTP, códigos de respaldo), protegiendo operaciones críticas como transferencias SPEI y administración de cuentas.",
          "Resolví vulnerabilidades de replay attack y cifré la transmisión de tokens TOTP en peticiones HTTP, junto con un sistema de expiración automática de sesión por inactividad.",
          "Refactoricé el motor de consultas SPEI IN/OUT migrando a un modelo de filtrado híbrido (servidor + cliente), resolviendo errores 500/502 mediante procesamiento por bloques (chunked fetching).",
          "Construí un motor de exportación masiva (ZIP/Excel) con sincronización total entre los filtros aplicados y los datos descargados.",
          "Diseñé el custom hook central useServerList, estandarizando paginación y manejo de filtros en toda la plataforma.",
        ],
      },
      {
        name: "Onboarding & KYC Module",
        bullets: [
          "Lideré la estandarización de APIs bajo OpenAPI 3.1.0 y documenté modelos relacionales con Prisma ORM.",
          "Migré la capa de red del frontend a Dio con interceptores personalizados, eliminando tokens dummy y conectando endpoints de producción en Onboarding y Admin Dashboard.",
          "Rediseñé la carga de archivos KYC migrando a URLs pre-firmadas de AWS S3 (multipart), resolviendo bugs críticos de compatibilidad entre navegadores.",
          "Implementé el flujo completo de recuperación de contraseña (Forgot/Reset Password) y persistencia segura de sesión, corrigiendo cierres de sesión involuntarios en Safari móvil.",
        ],
      },
    ],
  },
  {
    company: "Staicka",
    role: "Desarrollador Fullstack (Freelance)",
    period: "Noviembre 2025 – Presente",
    link: "https://staicka.vercel.app",
    bullets: [
      "Diseño y desarrollo de aplicaciones web escalables con Next.js y NestJS, optimizando la arquitectura para diversos requerimientos comerciales.",
      "Optimicé flujos de desarrollo y velocidad de entregas mediante flujos asistidos por IA para generación de boilerplate y validación lógica.",
      "Construcción de interfaces responsivas con Tailwind CSS, garantizando estándares de SEO y conversión de usuario.",
    ],
  },
  {
    company: "Softech",
    role: "Full Stack Developer",
    period: "Julio 2024 – Febrero 2025",
    bullets: [
      "Optimicé la latencia y rendimiento de consultas en MongoDB mediante el rediseño estratégico de esquemas e índices.",
      "Mejoré significativamente las métricas de LCP (Largest Contentful Paint) mediante la implementación de componentes avanzados con Next.js App Router.",
      "Configuré pipelines de CI/CD, incrementando la agilidad y confiabilidad en entregas a producción.",
    ],
  },
]

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      id="experience"
      className="container-pad"
      style={{
        position: "relative",
        zIndex: 10,
        borderTop: "1px solid rgba(255,255,255,0.05)",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--red)", fontWeight: 600, marginBottom: "0.7rem" }}>
        Trayectoria
      </p>
      <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "3rem" }}>
        Experiencia Profesional
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", position: "relative" }}>
        {/* Timeline line */}
        <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 1, background: "linear-gradient(to bottom, var(--red), rgba(255,255,255,0.06))" }} />

        {JOBS.map((job, idx) => (
          <div key={job.company + idx} style={{ position: "relative", paddingLeft: "clamp(1.5rem, 4vw, 2.2rem)" }}>
            {/* Timeline node */}
            <div style={{
              position: "absolute", left: 4, top: 7, width: 7, height: 7, borderRadius: "50%",
              background: "var(--red)", boxShadow: "0 0 8px var(--red)",
            }} />

            {/* Header */}
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.8rem" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.7rem", flexWrap: "wrap" }}>
                <h3 style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em" }}>
                  {job.company}
                </h3>
                <span style={{ fontSize: "0.8rem", color: "var(--red)", fontWeight: 600 }}>
                  — {job.role}
                </span>
                {job.link && (
                  <a href={job.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.7rem", color: "var(--grey)", textDecoration: "none" }}>
                    ({job.link.replace("https://", "")}) ↗
                  </a>
                )}
              </div>
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--grey)", padding: "0.2rem 0.7rem", borderRadius: 999, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
                {job.period}
              </span>
            </div>

            {/* Direct Bullets */}
            {job.bullets && (
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                {job.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: "0.82rem", color: "var(--grey)", lineHeight: 1.65, display: "flex", gap: "0.65rem" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--red)", marginTop: 7, flexShrink: 0 }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Sub Projects */}
            {job.projects && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginTop: "0.6rem" }}>
                {job.projects.map((proj, pIdx) => (
                  <div key={pIdx} style={{ background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 8, padding: "1.2rem" }}>
                    <h4 style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--white)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ width: 6, height: 2, background: "var(--red)", display: "inline-block" }} />
                      Proyecto: {proj.name}
                    </h4>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {proj.bullets.map((b, i) => (
                        <li key={i} style={{ fontSize: "0.8rem", color: "var(--grey)", lineHeight: 1.65, display: "flex", gap: "0.65rem" }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--red)", marginTop: 7, flexShrink: 0 }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
