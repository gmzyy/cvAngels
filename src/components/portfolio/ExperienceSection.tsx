"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Calendar, Disc, Flame, Mic, ShieldCheck, Zap } from "lucide-react"
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
  trackNum: string
  company: string
  companyTag: string
  role: string
  period: string
  isCurrent?: boolean
  projects: ProjectSub[]
}

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useLanguage()

  const EXPERIENCES: ExperienceItem[] = [
    {
      id: "pharos",
      trackNum: "TRACK 01",
      company: "PHAROS PAYMENTS",
      companyTag: "FINTECH & SPEI PLATFORM",
      role: t("Fullstack Developer (Fintech)", "Fullstack Developer (Fintech)"),
      period: "01/2026 – 07/2026",
      isCurrent: true,
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
            t("Documentación técnica con OpenAPI 3.1.0 (Swagger)", "Technical documentation with OpenAPI 3.1.0 (Swagger)"),
          ],
          stack: ["NestJS", "Next.js 15", "Prisma ORM", "2FA/TOTP", "OpenAPI 3.1", "MySQL"],
        },
      ],
    },
    {
      id: "staicka-ai",
      trackNum: "TRACK 02",
      company: "STAICKA STUDIO",
      companyTag: "AI & RAG MOTORS",
      role: t("Lead AI & Fullstack Developer", "Lead AI & Fullstack Developer"),
      period: "08/2025 – 12/2025",
      projects: [
        {
          name: "Staicka Talent Scout & RAG Engine",
          tag: "AI_RECRUITMENT",
          desc: t(
            "Sistema inteligente de reclutamiento con lectura masiva de CVs (PDF) usando SpaCy NLP y motor RAG con LangChain + ChromaDB para búsqueda semántica.",
            "Intelligent recruitment system reading PDF resumes with SpaCy NLP and a RAG engine with LangChain + ChromaDB for semantic search."
          ),
          highlights: [
            t("Extracción de texto PDF en backend Python con FastAPI", "PDF text extraction on Python backend with FastAPI"),
            t("Indexación vectorial con ChromaDB y embeddings con Google Gemini", "Vector indexing with ChromaDB and Google Gemini embeddings"),
            t("Ranking de candidatos por ajuste semántico con la descripción del puesto", "Candidate scoring based on semantic fit with job specs"),
            t("Despliegue multi-contenedor con Docker Compose", "Multi-container deployment via Docker Compose"),
          ],
          stack: ["FastAPI", "Python 3.10", "SpaCy NLP", "LangChain", "ChromaDB", "Docker"],
        },
      ],
    },
    {
      id: "freelance",
      trackNum: "TRACK 03",
      company: "DESARROLLO INDEPENDIENTE",
      companyTag: "WEB & CLOUD SERVICES",
      role: t("Fullstack Developer Freelance", "Freelance Fullstack Developer"),
      period: "2024 – 2025",
      projects: [
        {
          name: "Barber Angeles & Santē Dental",
          tag: "WEB_PLATFORMS",
          desc: t(
            "Desarrollo de aplicaciones web para gestión de citas en tiempo real, catálogo interactivo de servicios y paneles administrativos.",
            "Development of web apps for real-time appointment booking, interactive service catalogs, and admin dashboards."
          ),
          highlights: [
            t("Interfaces ultra reactivas construidas con Next.js y Tailwind CSS", "Ultra reactive UIs built with Next.js and Tailwind CSS"),
            t("Integración de almacenamiento cloud en AWS S3", "Cloud storage integration on AWS S3"),
            t("Optimizaciones de SEO y rendimiento de carga (Lighthouse 95+)", "SEO optimizations and performance tuning (Lighthouse 95+)"),
          ],
          stack: ["Next.js", "React", "MongoDB", "AWS S3", "Tailwind CSS"],
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
        transform: inView ? "none" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* ══ HEADER TITLE BANNER ══ */}
      <div style={{ marginBottom: "4rem", position: "relative" }}>
        {/* Halftone Dot Accent */}
        <div className="halftone-red-bg" style={{ position: "absolute", top: "-20px", right: "40px", width: "220px", height: "100px", pointerEvents: "none" }} />

        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="font-tag" style={{
            background: "var(--navy)",
            color: "#FFFFFF",
            padding: "0.3rem 1.2rem",
            fontSize: "1.3rem",
            transform: "rotate(2deg)",
            boxShadow: "4px 4px 0px var(--red)",
            border: "2px solid var(--red)",
          }}>
            // {t("TRAYECTORIA & TRACKLIST", "TRACKLIST & CAREER")}
          </span>
          <span className="stamp-badge">
            CONFIDENTIAL
          </span>
          <span className="handwritten-note font-marker">
            Verified Track Records ➔
          </span>
        </div>

        <h2 className="spray-drippy-title" style={{
          fontSize: "clamp(3rem, 8.5vw, 7.5rem)",
          color: "var(--navy)",
          WebkitTextStroke: "2px var(--red)",
          textShadow: "5px 5px 0px var(--red)",
          margin: 0,
        }}>
          {t("EXPERIENCIA", "WORK")}
        </h2>
        <div className="font-spray" style={{
          fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)",
          color: "var(--red)",
          lineHeight: 0.9,
          transform: "rotate(-4deg) translateY(-12px) translateX(15px)",
          WebkitTextStroke: "2px var(--navy)",
          textShadow: "5px 5px 0px var(--navy)",
          display: "inline-block",
        }}>
          {t("PROFESIONAL", "EXPERIENCE")}
        </div>
      </div>

      {/* ══ TRACKLIST CARDS ══ */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={exp.id}
            style={{
              background: "#FAF5EB",
              border: "4px solid var(--navy)",
              boxShadow: idx % 2 === 0 ? "14px 14px 0px var(--red)" : "14px 14px 0px var(--navy)",
              padding: "2.5rem 2rem",
              position: "relative",
              color: "var(--navy)",
              transform: idx % 2 === 0 ? "rotate(-1.2deg)" : "rotate(1.2deg)",
            }}
          >
            {/* Washi Tape */}
            <div className="washi-tape-top" />

            {/* Stamp Badge */}
            <div className="stamp-badge" style={{ position: "absolute", top: "20px", right: "20px" }}>
              {exp.isCurrent ? "ACTIVE PROJECT" : "APPROVED"}
            </div>

            {/* Track Stamp */}
            <div style={{
              display: "inline-block",
              background: "var(--red)",
              color: "#FFFFFF",
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              fontWeight: 900,
              padding: "0.25rem 1rem",
              transform: "rotate(-3deg)",
              border: "2px solid var(--navy)",
              boxShadow: "3px 3px 0px var(--navy)",
              marginBottom: "1rem",
            }}>
              {exp.trackNum}
            </div>

            {/* Header Tag */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "1.5rem",
              borderBottom: "3px dashed var(--red)",
              paddingBottom: "1.5rem",
              marginBottom: "1.8rem",
            }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap" }}>
                  <span className="font-display" style={{ fontSize: "2.8rem", color: "var(--navy)", lineHeight: 1 }}>
                    {exp.company}
                  </span>
                  <span className="font-tag" style={{ background: "var(--navy)", color: "#FFFFFF", padding: "0.2rem 0.8rem", fontSize: "1.1rem", transform: "rotate(-2deg)" }}>
                    {exp.companyTag}
                  </span>
                </div>
                <div className="font-spray" style={{ fontSize: "1.8rem", color: "var(--red)", marginTop: 4 }}>
                  {exp.role}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Calendar size={18} style={{ color: "var(--red)" }} />
                <span className="font-mono" style={{ fontSize: "0.9rem", background: "var(--navy)", color: "#FFF", padding: "0.4rem 0.9rem", border: "2px solid var(--navy)", fontWeight: 900 }}>
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Sub Projects Breakdown */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
              {exp.projects.map((proj) => (
                <div
                  key={proj.name}
                  style={{
                    background: "#EAE0D0",
                    border: "3px solid var(--navy)",
                    padding: "1.8rem",
                    boxShadow: "4px 4px 0px var(--navy)",
                    transform: "rotate(-0.5deg)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.8rem", marginBottom: "0.8rem" }}>
                    <h4 className="font-display" style={{ fontSize: "2rem", color: "var(--navy)", margin: 0 }}>
                      ▸ {proj.name}
                    </h4>
                    <span className="font-mono" style={{ fontSize: "0.7rem", background: "var(--red)", color: "#FFF", padding: "3px 8px", fontWeight: 900 }}>
                      [{proj.tag}]
                    </span>
                  </div>

                  <p className="font-body" style={{ color: "#112233", fontSize: "1rem", lineHeight: 1.65, fontWeight: 700, marginBottom: "1.2rem" }}>
                    {proj.desc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div style={{ marginBottom: "1.2rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {proj.highlights.map((h, i) => (
                      <div key={i} className="font-mono" style={{ fontSize: "0.82rem", color: "var(--navy)", display: "flex", alignItems: "flex-start", gap: "0.6rem", fontWeight: 800 }}>
                        <span style={{ color: "var(--red)", fontWeight: 900 }}>▸</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stack Badges */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", borderTop: "2px dashed var(--red)", paddingTop: "1rem" }}>
                    {proj.stack.map(st => (
                      <span key={st} className="font-mono" style={{ fontSize: "0.72rem", background: "var(--navy)", color: "#FFFFFF", padding: "4px 10px", border: "1px solid var(--navy)", fontWeight: 900, transform: "rotate(-1deg)" }}>
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
