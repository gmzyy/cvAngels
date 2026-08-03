"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { ExternalLink, Terminal, ChevronRight } from "lucide-react"

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

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useLanguage()

  const JOBS: Job[] = [
    {
      company: "PHAROS PAYMENTS",
      role: "Fullstack Developer (Fintech)",
      period: "01/2026 – 07/2026",
      projects: [
        {
          name: "Sendro Financial Platform (SPEI / 2FA)",
          bullets: [
            t(
              "Diseñé e implementé el flujo end-to-end de autenticación 2FA/TOTP (QR, OTP, códigos de respaldo), protegiendo operaciones críticas como transferencias SPEI y administración de cuentas.",
              "Designed and implemented end-to-end 2FA/TOTP authentication flow (QR, OTP, backup codes), securing critical operations like SPEI transfers."
            ),
            t(
              "Resolví vulnerabilidades de replay attack y cifré la transmisión de tokens TOTP en peticiones HTTP, junto con un sistema de expiración automática de sesión.",
              "Mitigated replay attack vulnerabilities and encrypted TOTP transmission over HTTP with automatic inactivity timeout."
            ),
            t(
              "Refactoricé el motor de consultas SPEI IN/OUT migrando a un modelo de filtrado híbrido (servidor + cliente), resolviendo errores 500/502 mediante procesamiento por bloques.",
              "Refactored SPEI IN/OUT query engine with hybrid server/client filtering, eliminating 500/502 errors via chunked fetching."
            ),
            t(
              "Construí un motor de exportación masiva (ZIP/Excel) con sincronización total entre los filtros aplicados y los datos descargados.",
              "Built a mass export engine (ZIP/Excel) ensuring total sync between applied filters and downloaded datasets."
            ),
          ],
        },
        {
          name: "Onboarding & KYC Module",
          bullets: [
            t(
              "Lideré la estandarización de APIs bajo OpenAPI 3.1.0 y documenté modelos relacionales con Prisma ORM.",
              "Led API standardization under OpenAPI 3.1.0 and documented relational models using Prisma ORM."
            ),
            t(
              "Migré la capa de red del frontend a Dio con interceptores personalizados, eliminando tokens dummy y conectando endpoints de producción.",
              "Migrated frontend network layer to Dio with custom interceptors, replacing dummy tokens with production endpoints."
            ),
            t(
              "Rediseñé la carga de archivos KYC migrando a URLs pre-firmadas de AWS S3 (multipart), resolviendo bugs críticos de compatibilidad.",
              "Redesigned KYC file uploads migrating to pre-signed AWS S3 multipart URLs, fixing cross-browser compatibility issues."
            ),
          ],
        },
      ],
    },
    {
      company: "STAICKA",
      role: "Fullstack Developer (Freelance)",
      period: t("11/2025 – PRESENTE", "11/2025 – PRESENT"),
      link: "https://staicka.vercel.app",
      bullets: [
        t(
          "Diseño y desarrollo de aplicaciones web escalables con Next.js y NestJS, optimizando la arquitectura para diversos requerimientos comerciales.",
          "Design and development of scalable web applications using Next.js and NestJS, optimizing architecture for business needs."
        ),
        t(
          "Optimicé flujos de desarrollo mediante herramientas asistidas por IA para generación de boilerplate y validación lógica.",
          "Optimized development workflows using AI-assisted tooling for rapid boilerplate generation and logic validation."
        ),
        t(
          "Construcción de interfaces responsivas con Tailwind CSS, garantizando estándares de SEO y conversión de usuario.",
          "Built responsive interfaces with Tailwind CSS, ensuring SEO compliance and user conversion."
        ),
      ],
    },
    {
      company: "SOFTECH",
      role: "Full Stack Developer",
      period: "07/2024 – 02/2025",
      bullets: [
        t(
          "Optimicé la latencia y rendimiento de consultas en MongoDB mediante el rediseño estratégico de esquemas e índices.",
          "Optimized query latency and performance in MongoDB through strategic schema and index redesign."
        ),
        t(
          "Mejoré significativamente las métricas de LCP (Largest Contentful Paint) mediante la implementación de componentes avanzados con Next.js App Router.",
          "Significantly improved LCP metrics by engineering advanced Next.js App Router components."
        ),
        t(
          "Configuré pipelines de CI/CD, incrementando la agilidad y confiabilidad en entregas a producción.",
          "Configured CI/CD pipelines, boosting deployment agility and reliability in production environments."
        ),
      ],
    },
  ]

  return (
    <section
      ref={ref}
      id="experience"
      style={{
        position: "relative",
        zIndex: 10,
        padding: "6rem 1.5rem",
        maxWidth: "1400px",
        margin: "0 auto",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="sticker-box font-mono" style={{ transform: "rotate(1.5deg)", color: "var(--red)" }}>
            // {t("TRAYECTORIA PROFESIONAL", "CAREER PATH")}
          </span>
          <span className="font-mono" style={{ fontSize: "0.7rem", color: "var(--grey)", letterSpacing: "0.2em" }}>
            [TRACK_RECORD: 2024-2026]
          </span>
        </div>

        <h2 className="font-display" style={{
          fontSize: "clamp(2.4rem, 7.5vw, 6.5rem)",
          lineHeight: 0.85,
          color: "#FFFFFF",
          textShadow: "4px 4px 0px var(--red)",
          textTransform: "uppercase",
          margin: 0,
        }}>
          {t("EXPERIENCIA", "WORK")}
        </h2>
        <div className="font-spray" style={{
          fontSize: "clamp(2.2rem, 6.5vw, 5.5rem)",
          color: "var(--red)",
          lineHeight: 0.9,
          transform: "rotate(-3deg) translateY(-10px)",
          WebkitTextStroke: "1px #FFFFFF",
          textShadow: "4px 4px 0px #000000",
          display: "inline-block",
        }}>
          {t("PROFESIONAL", "EXPERIENCE")}
        </div>
      </div>

      {/* Timeline List Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {JOBS.map((job, idx) => (
          <div
            key={job.company + idx}
            style={{
              background: "#0A0A0A",
              border: "4px solid #FFFFFF",
              boxShadow: idx % 2 === 0 ? "12px 12px 0px var(--red), 12px 12px 0px 4px #000000" : "12px 12px 0px #FFFFFF, 12px 12px 0px 4px var(--red)",
              padding: "2.2rem",
              position: "relative",
            }}
          >
            {/* Corner Badge */}
            <div style={{
              position: "absolute",
              top: "-16px",
              left: "20px",
              background: "#000000",
              border: "2px solid var(--red)",
              color: "#FFFFFF",
              padding: "0.2rem 0.8rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              fontWeight: 700,
              boxShadow: "3px 3px 0px var(--red)",
            }}>
              JOB_STATION #{idx + 1}
            </div>

            {/* Header row */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "1.2rem",
              marginBottom: "1.8rem",
              borderBottom: "3px dashed #333333",
              paddingBottom: "1.2rem",
            }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <h3 className="font-display" style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", color: "#FFFFFF", letterSpacing: "0.03em", lineHeight: 1 }}>
                    {job.company}
                  </h3>
                  {job.link && (
                    <a href={job.link} target="_blank" rel="noreferrer" className="btn-street-secondary" style={{ fontSize: "1.1rem", padding: "0.3rem 0.8rem" }}>
                      VISITAR SITE <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <div className="font-spray" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "var(--red)", marginTop: 4 }}>
                  {job.role}
                </div>
              </div>

              <div className="sticker-box font-mono" style={{ transform: "rotate(-2deg)", background: "var(--red)", color: "#FFF" }}>
                {job.period}
              </div>
            </div>

            {/* General Bullets */}
            {job.bullets && (
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {job.bullets.map((b, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.9rem", color: "#DDDDDD", fontSize: "1rem", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
                    <span className="font-mono" style={{ color: "var(--red)", fontWeight: "bold", fontSize: "1.1rem" }}>[+]</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Sub Projects Zine Cards */}
            {job.projects && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem", marginTop: "1.5rem" }}>
                {job.projects.map((proj, pIdx) => (
                  <div key={pIdx} style={{
                    background: "#111111",
                    border: "3px solid #FFFFFF",
                    boxShadow: "6px 6px 0px var(--red)",
                    padding: "1.5rem",
                    borderLeft: "6px solid var(--red)",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                      <span className="tag-red font-marker" style={{ fontSize: "1.2rem", padding: "0.2rem 0.8rem" }}>
                        {t("PROYECTO", "PROJECT")}
                      </span>
                      <h4 className="font-display" style={{ fontSize: "1.8rem", color: "#FFFFFF", letterSpacing: "0.05em", margin: 0 }}>
                        {proj.name}
                      </h4>
                    </div>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {proj.bullets.map((b, i) => (
                        <li key={i} style={{ display: "flex", gap: "0.8rem", color: "#CCCCCC", fontSize: "0.95rem", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
                          <ChevronRight size={16} style={{ color: "var(--red)", flexShrink: 0, marginTop: 3 }} />
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
