"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Calendar, Briefcase, Sparkles } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

interface ProjectSub {
  name: string
  tag: string
  desc: string
  highlights: string[]
  stack: string[]
}

interface ExperienceItem {
  id: string
  company: string
  companyTag: string
  role: string
  period: string
  projects: ProjectSub[]
}

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useLanguage()

  const EXPERIENCES: ExperienceItem[] = [
    {
      id: "pharos",
      company: "PHAROS PAYMENTS",
      companyTag: "FINTECH & SPEI PLATFORM",
      role: t("Fullstack Developer (Fintech)", "Fullstack Developer (Fintech)"),
      period: "01/2026 – 07/2026",
      projects: [
        {
          name: "Sendro Financial Platform (SPEI / 2FA)",
          tag: "FINTECH_CORE",
          desc: t(
            "Diseñé e implementé el flujo end-to-end de autenticación 2FA/TOTP (QR, OTP, códigos de respaldo), protegiendo operaciones críticas como transferencias SPEI y administración de cuenta.",
            "Designed and implemented end-to-end 2FA/TOTP authentication (QR, OTP, backup codes), securing critical operations like SPEI transfers and account admin."
          ),
          highlights: [
            t("Mecanismos anti-replay (tokens de un solo uso y firmas de solicitud) en NestJS", "Anti-replay mechanisms (one-time tokens & signatures) in NestJS"),
            t("Panel administrativo para soporte y gestión de comercios", "Admin portal for support and merchant management"),
            t("Estructuración de base de datos relacional y migraciones con Prisma ORM", "Relational database structuring and migrations via Prisma ORM"),
          ],
          stack: ["NestJS", "Next.js 16", "Prisma ORM", "2FA/TOTP", "OpenAPI 3.1", "MySQL"],
        },
      ],
    },
    {
      id: "staicka-ai",
      company: "STAICKA",
      companyTag: "AI & WEB DEVELOPMENT",
      role: t("Desarrollador Fullstack Freelance", "Freelance Fullstack Developer"),
      period: "11/2025 – Presente",
      projects: [
        {
          name: "Staicka Talent Scout & RAG Engine",
          tag: "AI_RECRUITMENT",
          desc: t(
            "Sistema inteligente de reclutamiento con lectura masiva de CVs (PDF) usando SpaCy NLP y motor RAG con LangChain + ChromaDB para búsqueda semántica, junto con aplicaciones web escalables con Next.js y Tailwind CSS.",
            "Intelligent recruitment system reading PDF resumes with SpaCy NLP and a RAG engine with LangChain + ChromaDB for semantic search, alongside scalable web apps with Next.js and Tailwind CSS."
          ),
          highlights: [
            t("Diseño y desarrollo de aplicaciones web escalables con Next.js y NestJS", "Design and development of scalable web applications with Next.js and NestJS"),
            t("Extracción de texto PDF e indexación vectorial RAG (LangChain + ChromaDB)", "PDF text extraction and RAG vector indexing (LangChain + ChromaDB)"),
          ],
          stack: ["Next.js", "NestJS", "FastAPI", "Python", "SpaCy NLP", "LangChain", "ChromaDB"],
        },
      ],
    },
    {
      id: "softech",
      company: "SOFTECH",
      companyTag: "SOFTWARE & DATABASE OPTIMIZATION",
      role: t("Fullstack Developer", "Fullstack Developer"),
      period: "07/2024 – 02/2025",
      projects: [
        {
          name: "Plataforma Web & Optimización MongoDB",
          tag: "FULLSTACK_CORE",
          desc: t(
            "Desarrollo de módulos web con Next.js App Router y optimización estratégica de la arquitectura de datos y consultas en MongoDB.",
            "Web module development with Next.js App Router and strategic data architecture & query optimization in MongoDB."
          ),
          highlights: [
            t("Reducción del 35% en latencia de consultas MongoDB mediante rediseño de esquemas e índices", "35% reduction in MongoDB query latency via strategic schema and index redesign"),
            t("Mejora del 20% en métricas LCP (Largest Contentful Paint) con Next.js App Router", "20% improvement in LCP metrics with Next.js App Router"),
          ],
          stack: ["Next.js", "React", "MongoDB", "Node.js", "CI/CD"],
        },
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
        transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 30px, 0)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* ══ HEADER TITLE BANNER ══ */}
      <div style={{ marginBottom: "4rem", textAlign: "center", position: "relative", zIndex: 5 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: "0.4rem 1.2rem", borderRadius: "9999px", marginBottom: "1rem" }}>
          <Sparkles size={14} style={{ color: "#FFFFFF" }} />
          <span className="font-mono" style={{ fontSize: "0.78rem", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.08em" }}>
            // {t("EXPERIENCIA & TRAYECTORIA", "WORK HISTORY & LOGS")}
          </span>
        </div>

        <h2 className="spray-drippy-title" style={{ fontSize: "clamp(1.7rem, 6.5vw, 5.5rem)", color: "#FFFFFF", margin: 0, lineHeight: 1 }}>
          {t("EXPERIENCIA", "EXPERIENCE")}
        </h2>
      </div>

      {/* ══ UN-BOXED FLOATING TIMELINE ══ */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem", position: "relative", zIndex: 10, maxWidth: "1100px", margin: "0 auto" }}>
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
              alignItems: "flex-start",
            }}
            className="md:!grid-cols-[260px_1fr]"
          >
            {/* LEFT: CIRCULAR COMPANY MEDALLION & DATES (UN-BOXED) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(255, 255, 255, 0.15)", border: "1px solid rgba(255, 255, 255, 0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Briefcase size={18} style={{ color: "#FFFFFF" }} />
                </div>
                <div>
                  <h3 className="font-display" style={{ fontSize: "1.6rem", color: "#FFFFFF", margin: 0, lineHeight: 1 }}>
                    {exp.company}
                  </h3>
                  <div className="font-mono" style={{ fontSize: "0.72rem", color: "#94A3B8", marginTop: "2px" }}>
                    {exp.companyTag}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.4rem" }}>
                <Calendar size={14} style={{ color: "#FFFFFF" }} />
                <span className="font-mono" style={{ fontSize: "0.8rem", color: "#CBD5E1" }}>
                  {exp.period}
                </span>
              </div>
            </div>

            {/* RIGHT: FLUID UN-BOXED ROLE DETAILS */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <h4 className="font-mono" style={{ fontSize: "1.15rem", color: "#FFFFFF", fontWeight: 700, margin: 0 }}>
                  {exp.role}
                </h4>
              </div>

              {exp.projects.map((proj) => (
                <div key={proj.name} style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <p style={{ color: "#CBD5E1", fontSize: "0.98rem", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-body)" }}>
                    {proj.desc}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {proj.highlights.map((h, i) => (
                      <div key={i} className="font-mono" style={{ fontSize: "0.82rem", color: "#F1F5F9", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ color: "#FFFFFF" }}>➔</span> {h}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.4rem" }}>
                    {proj.stack.map((st) => (
                      <span
                        key={st}
                        className="font-mono"
                        style={{
                          fontSize: "0.72rem",
                          background: "rgba(255, 255, 255, 0.08)",
                          color: "#FFFFFF",
                          padding: "3px 9px",
                          borderRadius: "9999px",
                          border: "1px solid rgba(255, 255, 255, 0.18)",
                        }}
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
