"use client"
import { useState } from "react"
import CardVisual from "./CardVisual"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

type Theme = "nexus" | "lumina" | "orion"
type Category = "all" | "frontend" | "fullstack_ai"

interface Project {
  id: string
  num: string
  title: string
  subtitle?: string
  category: Category
  desc: string
  details?: string[]
  tags: string[]
  github?: string
  demo?: string
  theme: Theme
  badge: "bell" | "star" | "sun"
  featured?: boolean
}

function FeaturedProjectCard({ p }: { p: Project }) {
  return (
    <div
      style={{
        background: "#0A0A0A",
        border: "3px solid #FFFFFF",
        boxShadow: "8px 8px 0px var(--red), 8px 8px 0px 3px #000000",
        position: "relative",
        marginBottom: "2rem",
        display: "grid",
        gridTemplateColumns: "1fr",
      }}
      className="md:!grid-cols-[260px_1fr]"
    >
      <div style={{
        position: "absolute",
        top: "-12px",
        left: "16px",
        background: "var(--red)",
        color: "#FFFFFF",
        padding: "2px 8px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.65rem",
        fontWeight: 700,
        transform: "rotate(-2deg)",
        zIndex: 20,
        border: "1px solid #FFFFFF",
      }}>
        FLAGSHIP // RELEASE #{p.num}
      </div>

      <div style={{ borderRight: "3px solid #FFFFFF", background: "#000" }}>
        <CardVisual theme={p.theme} height={180} />
      </div>

      <div style={{ padding: "1.2rem 1.5rem", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.2rem" }}>
          <span className="sticker-box font-mono" style={{ fontSize: "0.65rem", padding: "1px 5px" }}>
            [FLAGSHIP PROJECT]
          </span>
          <span className="font-wild" style={{ color: "var(--red)", fontSize: "1.1rem" }}>
            #GEELMZ
          </span>
        </div>

        <h3 className="font-display" style={{ fontSize: "1.8rem", color: "#FFFFFF", lineHeight: 1, marginTop: 2 }}>
          {p.title}
        </h3>

        {p.subtitle && (
          <div className="font-spray" style={{ fontSize: "1.2rem", color: "var(--red)", margin: "0.2rem 0 0.6rem" }}>
            {p.subtitle}
          </div>
        )}

        <p style={{ fontSize: "0.88rem", color: "#CCCCCC", lineHeight: 1.5, fontFamily: "var(--font-body)", marginBottom: "0.8rem" }}>
          {p.desc}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
          {p.tags.map(t => (
            <span key={t} className="font-mono" style={{ fontSize: "0.68rem", background: "#000000", color: "#FFFFFF", padding: "2px 6px", border: "1px solid #333333" }}>
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "0.8rem", borderTop: "2px dashed #333333", paddingTop: "0.8rem", marginTop: "auto", flexWrap: "wrap" }}>
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className="btn-street-secondary" style={{ fontSize: "1rem", padding: "0.4rem 0.8rem" }}>
              REPOSITORIO <Github size={14} />
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="btn-street-primary" style={{ fontSize: "1rem", padding: "0.4rem 0.8rem" }}>
              DEMO LIVE <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function StandardProjectCard({ p, idx }: { p: Project; idx: number }) {
  return (
    <div
      style={{
        background: "#080808",
        border: "3px solid #FFFFFF",
        boxShadow: idx % 2 === 0 ? "6px 6px 0px var(--red)" : "6px 6px 0px #FFFFFF",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease",
      }}
    >
      <div style={{
        position: "absolute",
        top: "-12px",
        left: "12px",
        background: "#000000",
        color: "var(--red)",
        padding: "1px 6px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.6rem",
        fontWeight: 700,
        zIndex: 20,
        border: "1px solid var(--red)",
      }}>
        #{p.num}
      </div>

      <CardVisual theme={p.theme} height={100} />

      <div style={{ padding: "1.1rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.2rem" }}>
          <span className="font-mono" style={{ fontSize: "0.65rem", color: "var(--red)", fontWeight: 700 }}>
            [SN: {p.id.toUpperCase()}]
          </span>
          <span className="font-wild" style={{ color: "var(--red)", fontSize: "1rem" }}>
            #GEELMZ
          </span>
        </div>

        <h3 className="font-display" style={{ fontSize: "1.5rem", color: "#FFFFFF", lineHeight: 1, marginTop: 2 }}>
          {p.title}
        </h3>

        {p.subtitle && (
          <div className="font-spray" style={{ fontSize: "1.1rem", color: "var(--red)", margin: "0.2rem 0 0.5rem" }}>
            {p.subtitle}
          </div>
        )}

        <p style={{ fontSize: "0.84rem", color: "#CCCCCC", lineHeight: 1.5, flex: 1, marginBottom: "0.8rem", fontFamily: "var(--font-body)" }}>
          {p.desc}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.9rem" }}>
          {p.tags.map(t => (
            <span key={t} className="font-mono" style={{ fontSize: "0.65rem", background: "#000000", color: "#FFFFFF", padding: "2px 5px", border: "1px solid #333333" }}>
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "0.6rem", borderTop: "1px dashed #333333", paddingTop: "0.7rem", marginTop: "auto", flexWrap: "wrap" }}>
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className="btn-street-secondary" style={{ fontSize: "0.9rem", padding: "0.3rem 0.7rem" }}>
              REPO <Github size={12} />
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="btn-street-primary" style={{ fontSize: "0.9rem", padding: "0.3rem 0.7rem" }}>
              DEMO <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  const [filter, setFilter] = useState<Category>("all")
  const { t } = useLanguage()

  const PROJECTS: Project[] = [
    {
      id: "rag-py",
      num: "01",
      featured: true,
      title: t("STAICKA RAG — Análisis de Documentos", "STAICKA RAG — Document Analysis"),
      subtitle: "LangChain, ChromaDB & Gemini",
      category: "fullstack_ai",
      theme: "nexus",
      badge: "star",
      desc: t(
        "Motor de búsqueda y análisis semántico para procesar PDFs (CVs o manuales corporativos) y extraer información mediante vectores matemáticos.",
        "Semantic search and analysis engine for processing PDFs (resumes or manuals) and extracting insights via mathematical vectors."
      ),
      tags: ["Python 3.10", "LangChain", "ChromaDB", "Gemini", "FastAPI"],
      github: "https://github.com/gatsbyy/RAG-PY",
    },
    {
      id: "talent-scout",
      num: "02",
      title: "STAICKA Talent Scout",
      subtitle: t("Motor IA 100% On-Premise", "100% On-Premise AI Engine"),
      category: "fullstack_ai",
      theme: "lumina",
      badge: "bell",
      desc: t(
        "Sistema integral de reclutamiento inteligente que utiliza SpaCy NLP para extraer texto de PDFs y rankear candidatos.",
        "Intelligent recruitment system using SpaCy NLP to extract text from PDFs and score candidate profiles."
      ),
      tags: ["FastAPI", "Next.js 15", "SpaCy NLP", "MongoDB", "Docker"],
      github: "https://github.com/gatsbyy/talent-ia",
    },
    {
      id: "auth-core",
      num: "03",
      title: "AUTH CORE — Identity System",
      subtitle: t("Fullstack Dockerizado", "Dockerized Fullstack"),
      category: "fullstack_ai",
      theme: "orion",
      badge: "star",
      desc: t(
        "Sistema de autenticación fullstack con arquitectura desacoplada, JWT, Prisma ORM, MySQL y despliegue multi-contenedor.",
        "Fullstack authentication system featuring decoupled architecture, JWT, Prisma ORM, MySQL, and multi-container deployment."
      ),
      tags: ["NestJS", "Prisma ORM", "MySQL", "JWT", "Docker"],
      github: "https://github.com/gatsbyy/auth-system-docker",
    },
    {
      id: "arcika",
      num: "04",
      title: "STAICKA ARCIKA",
      subtitle: t("Generador de Arquitecturas IA", "AI Architecture Generator"),
      category: "fullstack_ai",
      theme: "nexus",
      badge: "sun",
      desc: t(
        "Herramienta que transforma requerimientos técnicos en esquemas y diagramas mediante LLMs avanzados.",
        "Tool that transforms technical requirements into architecture schemas and diagrams using advanced LLMs."
      ),
      tags: ["Next.js", "NestJS", "LLMs", "Prompt Engineering"],
      github: "https://github.com/Gmzyy",
      demo: "https://staicka.vercel.app/",
    },
    {
      id: "barber",
      num: "05",
      title: "Barber Management Platform",
      subtitle: t("Gestión de Citas Real-Time", "Real-Time Appointment System"),
      category: "frontend",
      theme: "orion",
      badge: "star",
      desc: t(
        "Plataforma completa de reserva y gestión de citas en tiempo real con panel administrativo y UI intuitiva.",
        "Complete real-time booking and appointment management platform with admin panel and intuitive UI."
      ),
      tags: ["Next.js", "MongoDB", "Tailwind CSS", "Express"],
      github: "https://github.com/gatsbyy/BarberAngeles",
      demo: "https://barber-angeles.vercel.app/home",
    },
    {
      id: "sante",
      num: "06",
      title: "Santē Dental Clinic",
      subtitle: t("Plataforma Web Odontológica", "Dental Clinic Web Platform"),
      category: "frontend",
      theme: "lumina",
      badge: "sun",
      desc: t(
        "Sitio web comercial para clínica dental con interfaz moderna, servicios médicos e integración de citas.",
        "Commercial website for a dental clinic featuring a modern UI, medical services overview, and booking integration."
      ),
      tags: ["React", "Next.js", "Tailwind CSS", "UX/UI"],
      demo: "https://sante-dental.vercel.app/",
    },
    {
      id: "la-ververa",
      num: "07",
      title: "La Ververa",
      subtitle: "E-Commerce / Branding Web",
      category: "frontend",
      theme: "nexus",
      badge: "bell",
      desc: t(
        "Aplicación web comercial y catálogo interactivo con diseño minimalista y animaciones fluidas.",
        "Commercial web app and interactive product catalog with clean aesthetics and smooth animations."
      ),
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demo: "https://la-ververa.vercel.app/",
    },
    {
      id: "staicka-studio",
      num: "08",
      title: "Staicka Studio",
      subtitle: t("Estudio Freelance Dev & IA", "Freelance Dev & AI Studio"),
      category: "frontend",
      theme: "orion",
      badge: "star",
      desc: t(
        "Plataforma oficial de Staicka Studio para exhibición de servicios fullstack e integración de soluciones cloud.",
        "Official Staicka Studio platform showcasing fullstack engineering services and cloud integrations."
      ),
      tags: ["Next.js", "Tailwind CSS", "NestJS", "Vercel"],
      demo: "https://staicka.vercel.app/",
    },
  ]

  const filteredProjects = PROJECTS.filter(p => filter === "all" || p.category === filter)
  const featured = filteredProjects.find(p => p.featured) || (filteredProjects.length > 0 ? filteredProjects[0] : null)
  const restProjects = filteredProjects.filter(p => p.id !== (featured ? featured.id : ""))

  return (
    <section id="portfolio" style={{ padding: "4rem 1.5rem", maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 10 }}>

      {/* Title Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.3rem" }}>
            <span className="sticker-box font-mono" style={{ transform: "rotate(-1.5deg)", color: "var(--red)", fontSize: "0.7rem" }}>
              // {t("GALERÍA DE TRABAJOS", "WORK GALLERY")}
            </span>
            <span className="font-mono" style={{ fontSize: "0.65rem", color: "var(--grey)", letterSpacing: "0.15em" }}>
              [REPOS: 08]
            </span>
          </div>

          <h2 className="font-display" style={{
            fontSize: "clamp(2.4rem, 7vw, 5rem)",
            lineHeight: 0.85,
            color: "#FFFFFF",
            textShadow: "4px 4px 0px var(--red)",
            textTransform: "uppercase",
            margin: 0,
          }}>
            {t("PROYECTOS", "PROJECTS")}
          </h2>
          <div className="font-spray" style={{
            fontSize: "clamp(2.1rem, 5.5vw, 4.2rem)",
            color: "var(--red)",
            lineHeight: 0.9,
            transform: "rotate(-3deg) translateY(-8px)",
            WebkitTextStroke: "1px #FFFFFF",
            display: "inline-block",
          }}>
            {t("SELECCIONADOS", "SELECTED WORK")}
          </div>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {[
            { id: "all", label: t("TODOS", "ALL") },
            { id: "fullstack_ai", label: "FULLSTACK & IA" },
            { id: "frontend", label: "FRONTEND & WEBS" },
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as Category)}
              className="font-display"
              style={{
                fontSize: "1.2rem",
                letterSpacing: "0.03em",
                padding: "0.4rem 1rem",
                background: filter === btn.id ? "var(--red)" : "#000000",
                color: "#FFFFFF",
                border: "2px solid #FFFFFF",
                boxShadow: filter === btn.id ? "4px 4px 0px #FFFFFF" : "2px 2px 0px var(--red)",
                cursor: "pointer",
                transform: filter === btn.id ? "rotate(-2deg)" : "none",
                transition: "all 0.2s ease",
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Compact Hero */}
      {featured && filter === "all" && (
        <FeaturedProjectCard p={featured} />
      )}

      {/* 3-Column Compact Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        gap: "1.5rem"
      }}>
        {(filter === "all" ? restProjects : filteredProjects).map((p, idx) => (
          <StandardProjectCard key={p.id} p={p} idx={idx} />
        ))}
      </div>
    </section>
  )
}
