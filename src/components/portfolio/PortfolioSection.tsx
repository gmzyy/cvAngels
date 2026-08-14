"use client"
import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { ExternalLink, Github, Sparkles, Shield, Cpu, Code2, Flame, Disc } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

interface ProjectItem {
  id: string
  title: string
  subtitle: string
  category: string
  tag: string
  description: string
  features: string[]
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  status: string
  highlighted?: boolean
  imagePlaceholder?: string
}

export default function PortfolioSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [filter, setFilter] = useState("all")
  const { t } = useLanguage()

  const PROJECTS: ProjectItem[] = [
    {
      id: "staicka-agency",
      title: "STAICKA STUDIO",
      subtitle: "Digital Agency & Software Lab",
      category: "web",
      tag: "AGENCIA_PRINCIPAL",
      description: t(
        "Sitio web oficial de Staicka: agencia digital especializada en desarrollo de aplicaciones web de alto rendimiento, IA y soluciones digitales personalizadas.",
        "Official website for Staicka: digital agency specialized in high-performance web applications, AI, and custom digital solutions."
      ),
      features: [
        t("Arquitectura web moderna con Next.js y React 19", "Modern web architecture with Next.js and React 19"),
        t("Animaciones e interacciones fluidas de alto impacto", "Fluid animations and high-impact micro-interactions"),
        t("Diseño responsive con enfoque en conversión y SEO", "Responsive design focused on conversion and technical SEO"),
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://staicka.vercel.app/",
      status: "LIVE",
      highlighted: true,
    },
    {
      id: "empaques-san-andres",
      title: "EMPAQUES SAN ANDRÉS",
      subtitle: "Industrial Packaging & Catalog",
      category: "web",
      tag: "INDUSTRIAL_WEB",
      description: t(
        "Plataforma web comercial y catálogo de productos para empresa distribuidora de empaques e insumos industriales.",
        "Commercial web platform and product catalog for industrial packaging distributor."
      ),
      features: [
        t("Catálogo interactivo estructurado de productos", "Structured interactive product catalog"),
        t("Rendimiento de carga optimizado en Netlify CDN", "Optimized load performance on Netlify CDN"),
        t("Navegación adaptativa para dispositivos móviles", "Adaptive mobile-first navigation"),
      ],
      techStack: ["HTML5", "JavaScript", "CSS3", "Netlify"],
      demoUrl: "https://sanandrestt.netlify.app/",
      status: "LIVE",
      highlighted: true,
    },
    {
      id: "barber-angeles",
      title: "BARBER ÁNGELES",
      subtitle: "Realtime Booking & Admin System",
      category: "web",
      tag: "WEB_PLATFORM",
      description: t(
        "Sistema integral de reservas en tiempo real y catálogo digital interactivo para barbería con gestión de servicios.",
        "Comprehensive real-time booking system and interactive digital catalog for barbershop."
      ),
      features: [
        t("Reserva de turnos interactiva con confirmación instantánea", "Interactive slot booking with instant confirmation"),
        t("Panel de administración para horarios y catálogo", "Admin panel for schedule and service catalog"),
        t("Despliegue continuo en Vercel", "Continuous deployment on Vercel"),
      ],
      techStack: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
      demoUrl: "https://barber-angeles.vercel.app/home",
      status: "LIVE",
      highlighted: true,
    },
    {
      id: "emciel-nails",
      title: "EMCIEL NAILS",
      subtitle: "Beauty Studio & Catalog",
      category: "web",
      tag: "BEAUTY_WEB",
      description: t(
        "Aplicación web y catálogo digital de servicios para estudio de uñas y estética profesional.",
        "Web application and digital service catalog for beauty and nail studio."
      ),
      features: [
        t("Catálogo visual interactivo de diseños y servicios", "Interactive visual catalog of nail designs and services"),
        t("Integración de contacto rápido por WhatsApp", "Quick WhatsApp contact integration"),
        t("Diseño responsivo enfocado en experiencia móvil", "Responsive design focused on mobile experience"),
      ],
      techStack: ["Next.js", "React", "Tailwind CSS"],
      status: "LIVE",
    },
    {
      id: "staicka-rag",
      title: "STAICKA TALENT SCOUT",
      subtitle: "AI Resume Parsing & RAG Engine",
      category: "ai",
      tag: "AI_RAG_ENGINE",
      description: t(
        "Motor inteligente de reclutamiento que procesa CVs masivos en PDF usando SpaCy NLP y búsquedas semánticas con RAG (LangChain + ChromaDB).",
        "Intelligent recruitment engine processing PDF resumes via SpaCy NLP and semantic search with RAG (LangChain + ChromaDB)."
      ),
      features: [
        t("Extracción de texto PDF en backend Python / FastAPI", "PDF text extraction in Python / FastAPI backend"),
        t("Embeddings vectoriales con LangChain y ChromaDB", "Vector embeddings via LangChain and ChromaDB"),
        t("Scoring semántico ponderado por perfil de vacante", "Weighted semantic scoring per job profile"),
      ],
      techStack: ["FastAPI", "Python", "SpaCy NLP", "LangChain", "ChromaDB", "Docker"],
      githubUrl: "https://github.com/Gmzyy",
      status: "STABLE",
    },
  ]

  const filteredProjects = filter === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter)

  return (
    <section
      ref={ref}
      id="portfolio"
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
      {/* Title Header */}
      <div style={{ marginBottom: "3rem", position: "relative" }}>

        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="font-tag" style={{
            background: "var(--red)",
            color: "#FFFFFF",
            padding: "0.3rem 1.2rem",
            fontSize: "1.3rem",
            transform: "rotate(2deg)",
            boxShadow: "4px 4px 0px var(--navy)",
            border: "2px solid var(--navy)",
          }}>
            // {t("PROYECTOS & COMPROBABLES", "VERIFIABLE PROJECTS")}
          </span>
          <span className="stamp-badge">
            ONLY ONE
          </span>
          <span className="handwritten-note font-marker">
            Handcrafted Systems ➔
          </span>
        </div>

        <h2 className="spray-drippy-title" style={{
          fontSize: "clamp(3rem, 8.5vw, 7.5rem)",
          color: "var(--navy)",
          WebkitTextStroke: "2px var(--red)",
          textShadow: "5px 5px 0px var(--red)",
          margin: 0,
        }}>
          {t("PROYECTOS", "SELECTED")}
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
          {t("SELECCIONADOS", "WORKS")}
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "3rem" }}>
        {[
          { id: "all", label: t("TODOS (5)", "ALL (5)") },
          { id: "web", label: "WEB PLATFORMS" },
          { id: "ai", label: "IA & RAG" },
        ].map((f) => {
          const isActive = filter === f.id
          return (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className="font-mono"
              style={{
                background: isActive ? "var(--red)" : "var(--navy)",
                color: "#FFFFFF",
                border: "3px solid var(--navy)",
                boxShadow: isActive ? "5px 5px 0px var(--navy)" : "3px 3px 0px var(--red)",
                padding: "0.6rem 1.4rem",
                fontSize: "0.85rem",
                fontWeight: 900,
                cursor: "pointer",
                transform: isActive ? "rotate(-2deg) scale(1.03)" : "none",
                transition: "all 0.15s ease",
              }}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2.5rem",
      }}>
        {filteredProjects.map((p, idx) => (
          <div
            key={p.id}
            style={{
              background: "#FAF5EB",
              border: "4px solid var(--navy)",
              boxShadow: p.highlighted ? "12px 12px 0px var(--red)" : "10px 10px 0px var(--navy)",
              padding: "2rem 1.8rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              color: "var(--navy)",
              transform: idx % 2 === 0 ? "rotate(-1.5deg)" : "rotate(1.5deg)",
            }}
          >
            {/* Washi Tape */}
            <div className="washi-tape-top" />

            {/* Stamp Badge */}
            <div className="stamp-badge" style={{ position: "absolute", bottom: "15px", right: "15px", fontSize: "0.95rem" }}>
              {p.status}
            </div>

            <div>
              {/* Header Badge */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span className="font-mono" style={{ fontSize: "0.7rem", background: "var(--red)", color: "#FFF", padding: "3px 10px", fontWeight: 900, transform: "rotate(-2deg)" }}>
                  [{p.tag}]
                </span>
                <span className="font-mono" style={{ fontSize: "0.7rem", background: "var(--navy)", color: "#FFF", padding: "3px 10px", fontWeight: 900 }}>
                  {p.status}
                </span>
              </div>

              <h3 className="font-display" style={{ fontSize: "2.4rem", color: "var(--navy)", lineHeight: 0.95, marginBottom: "0.2rem" }}>
                {p.title}
              </h3>
              <div className="font-spray" style={{ fontSize: "1.4rem", color: "var(--red)", marginBottom: "1rem" }}>
                {p.subtitle}
              </div>

              <p className="font-body" style={{ color: "#112233", fontSize: "0.98rem", lineHeight: 1.6, fontWeight: 700, marginBottom: "1.4rem" }}>
                {p.description}
              </p>

              {/* Bullet Features */}
              <div style={{ marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {p.features.map((feat, i) => (
                  <div key={i} className="font-mono" style={{ fontSize: "0.82rem", color: "var(--navy)", display: "flex", alignItems: "flex-start", gap: "0.6rem", fontWeight: 800 }}>
                    <span style={{ color: "var(--red)", fontWeight: 900 }}>▸</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stack & Links */}
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem", borderTop: "2px dashed var(--red)", paddingTop: "1rem" }}>
                {p.techStack.map((tech) => (
                  <span key={tech} className="font-mono" style={{ fontSize: "0.72rem", background: "var(--navy)", color: "#FFF", padding: "3px 8px", border: "1px solid var(--navy)", fontWeight: 900 }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-street-primary"
                    style={{ flex: 1, justifyContent: "center", fontSize: "1.1rem", padding: "0.6rem" }}
                  >
                    <ExternalLink size={16} /> SITIO LIVE ➔
                  </a>
                )}
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-street-secondary"
                    style={{ flex: 1, justifyContent: "center", fontSize: "1.1rem", padding: "0.6rem" }}
                  >
                    <Github size={16} /> REPO ➔
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
