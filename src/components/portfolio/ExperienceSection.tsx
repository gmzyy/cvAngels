"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Calendar } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { TornCard, GraffitiCircle, GraffitiShape, SprayBlob, CircularSealBadge, VinylRecordBadge } from "./TornCard"

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
            t("Ranking de candidatos por ajuste semántico con la descripción del puesto", "Candidate scoring based on semantic fit with job specs"),
            t("Interfaces responsivas optimizadas con Tailwind CSS para SEO y rendimiento", "Responsive interfaces optimized with Tailwind CSS for SEO and performance"),
          ],
          stack: ["Next.js", "NestJS", "FastAPI", "Python", "SpaCy NLP", "LangChain", "ChromaDB", "Tailwind CSS"],
        },
      ],
    },
    {
      id: "softech",
      trackNum: "TRACK 03",
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
            t("Configuración de pipelines CI/CD acelerando la velocidad de entrega a producción", "CI/CD pipeline configuration accelerating production delivery speed"),
          ],
          stack: ["Next.js", "React", "MongoDB", "Node.js", "CI/CD"],
        },
      ],
    },
    {
      id: "freelance",
      trackNum: "TRACK 04",
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
        padding: "7rem 1.5rem",
        maxWidth: "1400px",
        margin: "0 auto",
        opacity: inView ? 1 : 0,
        transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 30px, 0)",
        transition: "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
        willChange: "opacity, transform",
      }}
    >
      {/* Background Graffiti Accents */}
      <GraffitiCircle size={380} color="#A31621" opacity={0.06} style={{ top: "10%", right: "-80px", zIndex: 0 }} />
      <GraffitiCircle size={300} color="#0F1B33" opacity={0.07} style={{ top: "60%", left: "-60px", zIndex: 0 }} />

      {/* ══ HEADER TITLE BANNER ══ */}
      <div style={{ marginBottom: "5rem", position: "relative", zIndex: 5 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="font-tag" style={{
            background: "var(--navy)",
            color: "#FFFFFF",
            padding: "0.35rem 1.4rem",
            fontSize: "1.3rem",
            transform: "rotate(2deg)",
            boxShadow: "5px 5px 0px var(--red)",
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
          fontSize: "clamp(3.2rem, 9vw, 8rem)",
          color: "var(--navy)",
          WebkitTextStroke: "2px var(--red)",
          textShadow: "5px 5px 0px var(--red)",
          margin: 0,
        }}>
          {t("EXPERIENCIA", "WORK")}
        </h2>
        <div className="font-spray" style={{
          fontSize: "clamp(2.6rem, 8vw, 7rem)",
          color: "var(--red)",
          lineHeight: 0.9,
          transform: "rotate(-4.5deg) translateY(-14px) translateX(20px)",
          WebkitTextStroke: "2px var(--navy)",
          textShadow: "5px 5px 0px var(--navy)",
          display: "inline-block",
        }}>
          {t("PROFESIONAL", "EXPERIENCE")}
        </div>
      </div>

      {/* ══ ASYMMETRICAL TRACKLIST WALL ══ */}
      <div style={{ display: "flex", flexDirection: "column", gap: "5.5rem", position: "relative", zIndex: 10 }}>

        {EXPERIENCES.map((exp, idx) => {
          const shapes: GraffitiShape[] = ["torn1", "tagLeft", "torn3", "slashRight"]
          const shape = shapes[idx % shapes.length]
          const shadow = idx % 2 === 0 ? "red" as const : "navy" as const
          const rotate = idx % 2 === 0 ? -2.5 : 2.5
          const marginLeft = idx % 2 === 1 ? "clamp(0px, 3vw, 40px)" : "0px"

          return (
            <div key={exp.id} style={{ marginLeft, position: "relative" }}>
              <TornCard
                shape={shape}
                shadow={shadow}
                rotate={rotate}
                style={{ zIndex: 1 }}
                floatingElements={
                  <>
                    <div className="washi-tape-top" style={{ top: "-18px", left: idx % 2 === 0 ? "10%" : "70%" }} />
                    <VinylRecordBadge
                      size={64}
                      rotate={idx % 2 === 0 ? 15 : -15}
                      style={{ position: "absolute", top: "-22px", right: idx % 2 === 0 ? "24px" : "auto", left: idx % 2 === 1 ? "24px" : "auto" }}
                    />
                  </>
                }
              >
                {/* Track stamp header badge */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem", flexWrap: "wrap" }}>
                  <div style={{
                    display: "inline-block",
                    background: "var(--red)",
                    color: "#FFF",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    fontWeight: 900,
                    padding: "0.3rem 1.2rem",
                    transform: "rotate(-3deg)",
                    border: "2px solid var(--navy)",
                    boxShadow: "3px 3px 0px var(--navy)",
                  }}>
                    {exp.trackNum}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <Calendar size={18} style={{ color: "var(--red)" }} />
                    <span className="font-mono" style={{ fontSize: "0.9rem", background: "var(--navy)", color: "#FFF", padding: "0.4rem 1rem", border: "2px solid var(--navy)", fontWeight: 900 }}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Company title and role */}
                <div style={{ borderBottom: "3px dashed var(--red)", paddingBottom: "1.5rem", marginBottom: "1.8rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap" }}>
                    <span className="font-display" style={{ fontSize: "3rem", color: "var(--navy)", lineHeight: 1 }}>{exp.company}</span>
                    <span className="font-tag" style={{ background: "var(--navy)", color: "#FFF", padding: "0.25rem 0.9rem", fontSize: "1.15rem", transform: "rotate(-2deg)" }}>{exp.companyTag}</span>
                  </div>
                  <div className="font-spray" style={{ fontSize: "1.9rem", color: "var(--red)", marginTop: 6 }}>{exp.role}</div>
                </div>

                {/* Sub Projects breakdown */}
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {exp.projects.map((proj, pIdx) => (
                    <div
                      key={proj.name}
                      style={{
                        background: "#EAE0D0",
                        border: "3px solid var(--navy)",
                        padding: "1.8rem 1.6rem",
                        boxShadow: "5px 5px 0px var(--navy)",
                        transform: `rotate(${pIdx % 2 === 0 ? -0.8 : 0.8}deg)`,
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.8rem", marginBottom: "1rem" }}>
                        <h4 className="font-display" style={{ fontSize: "2.2rem", color: "var(--navy)", margin: 0 }}>▸ {proj.name}</h4>
                        <span className="font-mono" style={{ fontSize: "0.75rem", background: "var(--red)", color: "#FFF", padding: "4px 10px", fontWeight: 900, clipPath: "polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)" }}>
                          [{proj.tag}]
                        </span>
                      </div>

                      <p className="font-body" style={{ color: "#112233", fontSize: "1.02rem", lineHeight: 1.7, fontWeight: 700, marginBottom: "1.4rem" }}>
                        {proj.desc}
                      </p>

                      <div style={{ marginBottom: "1.4rem", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                        {proj.highlights.map((h, i) => (
                          <div key={i} className="font-mono" style={{ fontSize: "0.85rem", color: "var(--navy)", display: "flex", alignItems: "flex-start", gap: "0.6rem", fontWeight: 800 }}>
                            <span style={{ color: "var(--red)", fontWeight: 900 }}>▸</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", borderTop: "2px dashed var(--red)", paddingTop: "1.2rem" }}>
                        {proj.stack.map((st, i) => (
                          <span key={st} className="font-mono" style={{ fontSize: "0.75rem", background: "var(--navy)", color: "#FFF", padding: "5px 12px", border: "1px solid var(--navy)", fontWeight: 900, transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}>
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TornCard>
            </div>
          )
        })}
      </div>
    </section>
  )
}
