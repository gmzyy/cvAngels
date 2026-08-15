"use client"
import { useState, useEffect, useRef } from "react"
import { useInView, motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Sparkles, Search, X, CheckCircle2, Globe, Eye } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import CoverflowGallery, { CoverflowSlide } from "./CoverflowGallery"

interface ProjectItem {
  id: string
  title: string
  subtitle: string
  tag: string
  category: "web" | "ai"
  status: string
  image: string
  demoUrl: string
  githubUrl?: string
  description: string
  architectureDetails: string
  features: string[]
  metrics: { label: string; val: string }[]
  techStack: string[]
}

export default function PortfolioSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useLanguage()
  const [filter, setFilter] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0)
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null)

  useEffect(() => {
    if (modalProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [modalProject])

  const PROJECTS: ProjectItem[] = [
    {
      id: "barber-angeles",
      title: "BARBER ANGELES",
      subtitle: "Plataforma Web de Citas & Barbería",
      tag: "SAAS_BOOKING",
      category: "web",
      status: "EN PRODUCCIÓN",
      image: "/barber.png",
      demoUrl: "https://barber-angeles.vercel.app/home",
      description: t(
        "Plataforma web interactiva para agendamiento de citas en tiempo real, selección de barberos, catálogo de cortes y panel de administración.",
        "Interactive web platform for real-time appointment booking, barber selection, service catalog, and schedule management."
      ),
      architectureDetails: t(
        "Arquitectura frontend reactiva con Next.js y Tailwind CSS. Almacenamiento de multimedia en AWS S3 y optimización de carga LCP < 1.1s con puntuación 96+ en Google Lighthouse.",
        "Reactive frontend architecture with Next.js and Tailwind CSS. AWS S3 media storage and LCP load optimization < 1.1s with 96+ Google Lighthouse score."
      ),
      metrics: [
        { label: "ESTADO", val: "En Producción" },
        { label: "LIGHTHOUSE", val: "96 / 100" },
        { label: "STORAGE", val: "AWS S3 Cloud" },
      ],
      features: [
        t("Agendamiento de citas sin traslape en tiempo real", "Real-time non-overlapping appointment booking"),
        t("Catálogo interactivo de servicios y estilos", "Interactive service & style catalog"),
        t("Panel administrativo para control de agenda", "Admin dashboard for schedule management"),
      ],
      techStack: ["Next.js", "React", "MongoDB", "AWS S3", "Tailwind CSS"],
    },
    {
      id: "san-andres-empaques",
      title: "SAN ANDRÉS EMPAQUES",
      subtitle: "Catálogo Industrial B2B (EMCiel)",
      tag: "INDUSTRIAL_WEB",
      category: "web",
      status: "EN PRODUCCIÓN",
      image: "/empaques.png",
      demoUrl: "https://emciel.vercel.app/",
      description: t(
        "Aplicación web corporativa para catálogo de empaques industriales, especificaciones técnicas de productos y contacto comercial directo.",
        "Corporate web application for industrial packaging catalog, technical product specs, and direct commercial contact."
      ),
      architectureDetails: t(
        "Construido con Next.js App Router, componentes optimizados e imágenes de alta definición alojadas en CDN global con tiempo de respuesta < 50ms.",
        "Built with Next.js App Router, optimized components, and high-res images served via global CDN with response time < 50ms."
      ),
      metrics: [
        { label: "CATÁLOGO", val: "Industrial B2B" },
        { label: "PERFORMANCE", val: "CDN < 50ms" },
        { label: "HOSTING", val: "Vercel Edge" },
      ],
      features: [
        t("Catálogo de productos industriales con filtros", "Industrial product catalog with filters"),
        t("Fichas técnicas descargables", "Downloadable technical datasheets"),
        t("Formulario de cotización comercial directo", "Direct commercial quote form"),
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    },
    {
      id: "staicka-saas",
      title: "STAICKA SAAS",
      subtitle: "Plataforma Web SaaS & Inteligencia Artificial",
      tag: "SAAS_AI_PLATFORM",
      category: "ai",
      status: "EN PRODUCCIÓN",
      image: "/staickasaas.png",
      demoUrl: "https://staicka.vercel.app/",
      description: t(
        "Plataforma web SaaS de inteligencia artificial para gestión de talento, reclutamiento inteligente, lectura de documentos y servicios cloud.",
        "SaaS AI web platform for talent management, intelligent recruitment, document parsing, and cloud services."
      ),
      architectureDetails: t(
        "Desarrollo fullstack con Next.js, FastAPI, Python y servicios de IA. Búsquedas vectoriales de alta velocidad e interfaz web responsiva de nivel empresarial.",
        "Fullstack engineering with Next.js, FastAPI, Python, and AI services. High-speed vector retrieval and enterprise-grade responsive web interface."
      ),
      metrics: [
        { label: "DESPLIEGUE", val: "Vercel Production" },
        { label: "TIPO", val: "SaaS AI Platform" },
        { label: "STACK", val: "Next.js + Python" },
      ],
      features: [
        t("Plataforma SaaS en tiempo real con autenticación", "Real-time SaaS platform with authentication"),
        t("Procesamiento de documentos e inteligencia de datos", "Document processing and data intelligence"),
        t("Diseño web fluido e interfaz responsiva", "Fluid web design and responsive UI"),
      ],
      techStack: ["Next.js", "React", "FastAPI", "Python", "Tailwind CSS", "Vercel"],
    },
    {
      id: "nava-taller",
      title: "TALLER MECÁNICO NAVA",
      subtitle: "Sistema de Servicio & Cotizaciones",
      tag: "AUTOMOTIVE_SAAS",
      category: "web",
      status: "EN PRODUCCIÓN",
      image: "/tallerMecanico.png",
      demoUrl: "https://nava-opal.vercel.app/",
      description: t(
        "Portal web automotriz para cotización de reparaciones, agendamiento de diagnóstico mecánico y catálogo de servicios especializados.",
        "Automotive web portal for repair quotes, mechanical diagnostic scheduling, and specialized service showcase."
      ),
      architectureDetails: t(
        "Frontend de alto rendimiento construido en Next.js. Integración directa con WhatsApp Business API para atención a clientes al instante.",
        "High-performance frontend built with Next.js. Direct integration with WhatsApp Business API for instant client support."
      ),
      metrics: [
        { label: "CONVERSIÓN", val: "Direct WhatsApp" },
        { label: "TIEMPO", val: "LCP < 1.0s" },
        { label: "HOSTING", val: "Vercel Edge" },
      ],
      features: [
        t("Cotización rápida de diagnósticos mecánicos", "Fast mechanical diagnostic quoting"),
        t("Contacto instantáneo vía WhatsApp API", "Instant contact via WhatsApp API"),
        t("Catálogo interactivo de servicios mecánicos", "Interactive mechanical service catalog"),
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    },
    {
      id: "emciel-nails",
      title: "EMCIEL NAILS",
      subtitle: "Plataforma Web de Agendamiento & Estética",
      tag: "BEAUTY_SAAS",
      category: "web",
      status: "EN PRODUCCIÓN",
      image: "/emciel.png",
      demoUrl: "https://emciel.vercel.app/",
      description: t(
        "Sistema interactivo de reservas en tiempo real para salón de belleza y aplicación de uñas, catálogo de diseños y gestión eficiente de citas.",
        "Interactive real-time booking system for beauty salon & nail art, design catalog, and efficient appointment management."
      ),
      architectureDetails: t(
        "Interfaz web de alta velocidad desarrollada con Next.js y Tailwind CSS. Diseño adaptable a móviles y flujo de confirmación automática de citas.",
        "High-speed web interface built with Next.js and Tailwind CSS. Mobile-responsive design and automated booking confirmation flow."
      ),
      metrics: [
        { label: "TIPO", val: "Beauty SaaS" },
        { label: "AGENDAMIENTO", val: "Tiempo Real" },
        { label: "RESPONSIVE", val: "Mobile-First" },
      ],
      features: [
        t("Sistema de agendamiento en tiempo real para salón de belleza", "Real-time appointment booking for beauty salon"),
        t("Catálogo interactivo de diseños y servicios", "Interactive design and service catalog"),
        t("Interfaz responsiva adaptada a dispositivos móviles", "Mobile-responsive user interface"),
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    },
  ]

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesFilter = filter === "all" || p.category === filter
    const matchesSearch = searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  // Format slides for Coverflow Gallery
  const coverflowSlides: CoverflowSlide[] = filteredProjects.map((p) => ({
    image: { src: p.image, alt: p.title },
    title: p.title,
    subtitle: p.subtitle,
    demoUrl: p.demoUrl,
    techStack: p.techStack,
  }))

  const activeProject = filteredProjects[activeProjectIndex] || filteredProjects[0] || PROJECTS[0]

  const handleSelectSlide = (slide: CoverflowSlide, idx: number) => {
    setActiveProjectIndex(idx)
  }

  const handleOpenModal = (slide: CoverflowSlide) => {
    const matched = PROJECTS.find((p) => p.title === slide.title)
    if (matched) {
      setModalProject(matched)
    }
  }

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
        transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 30px, 0)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* ══ HEADER TITLE BANNER ══ */}
      <div style={{ marginBottom: "2rem", textAlign: "center", position: "relative", zIndex: 5 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: "0.4rem 1.2rem", borderRadius: "9999px", marginBottom: "1rem" }}>
          <Sparkles size={14} style={{ color: "#FFFFFF" }} />
          <span className="font-mono" style={{ fontSize: "0.78rem", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.08em" }}>
            // {t("GALERÍA DE PROYECTOS REALES", "REAL PROJECTS GALLERY")}
          </span>
        </div>

        <h2 className="spray-drippy-title" style={{ fontSize: "clamp(1.7rem, 6.5vw, 5.5rem)", color: "#FFFFFF", margin: 0, lineHeight: 1 }}>
          {t("GALERÍA DE PROYECTOS", "PROJECTS GALLERY")}
        </h2>
      </div>

      {/* ══ SEARCH & FILTER BAR ══ */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.2rem", marginBottom: "2rem", zIndex: 10, position: "relative" }}>
        {/* Search Bar */}
        <div
          style={{
            position: "relative",
            width: "min(100%, 420px)",
          }}
        >
          <Search size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#94A3B8" }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("Buscar proyecto (ej. Barber, Staicka, EMCiel)...", "Search project (e.g. Barber, Staicka, EMCiel)...")}
            className="font-mono"
            style={{
              width: "100%",
              background: "rgba(10, 14, 26, 0.85)",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              borderRadius: "9999px",
              padding: "0.6rem 1rem 0.6rem 2.6rem",
              color: "#FFFFFF",
              fontSize: "0.82rem",
              outline: "none",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.6)",
              boxSizing: "border-box",
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#94A3B8", cursor: "pointer" }}
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Filter Category Tabs */}
        <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { id: "all", label: t("TODOS (5)", "ALL (5)") },
            { id: "web", label: "WEB PLATFORMS" },
            { id: "ai", label: "IA & SAAS" },
          ].map((f) => {
            const isActive = filter === f.id
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className="font-mono"
                style={{
                  background: isActive ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.05)",
                  color: "#FFFFFF",
                  border: isActive ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: isActive ? "0 0 20px rgba(255, 255, 255, 0.2)" : "none",
                  padding: "0.55rem 1.4rem",
                  borderRadius: "9999px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {f.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* ══ 3D COVERFLOW GALLERY SHOWCASE ══ */}
      <div style={{ width: "100%", minHeight: "300px", marginBottom: "2rem", position: "relative", zIndex: 10 }}>
        <CoverflowGallery
          slides={coverflowSlides}
          cardWidth={480}
          cardHeight={340}
          gap={8}
          tilt={12}
          sideTilt={8}
          opacity={60}
          showTitle={true}
          onSelectSlide={handleSelectSlide}
          onOpenModal={handleOpenModal}
        />
      </div>

      {/* ══ CLEAN ACTIVE PROJECT EXPLANATION PANEL (NO CARDS GRID!) ══ */}
      <AnimatePresence mode="wait">
        {activeProject && (
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            style={{
              maxWidth: "1050px",
              margin: "0 auto",
              background: "rgba(10, 14, 26, 0.88)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              borderRadius: "32px",
              padding: "1.5rem 1.4rem",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.85)",
              position: "relative",
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1.2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap" }}>
                <span className="font-mono" style={{ fontSize: "0.75rem", color: "#FFFFFF", background: "rgba(255, 255, 255, 0.12)", padding: "4px 12px", borderRadius: "9999px", border: "1px solid rgba(255, 255, 255, 0.25)" }}>
                  [{activeProject.tag}]
                </span>
                <span className="font-mono" style={{ fontSize: "0.75rem", color: "#FFFFFF", fontWeight: 700 }}>
                  ● {activeProject.status}
                </span>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                <a
                  href={activeProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.65rem 1.4rem",
                    background: "rgba(255, 255, 255, 0.22)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    color: "#FFFFFF",
                    borderRadius: "9999px",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  <Globe size={15} /> ABRIR SITIO EN VIVO <ExternalLink size={14} />
                </a>

                <button
                  onClick={() => setModalProject(activeProject)}
                  className="font-mono"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.65rem 1.2rem",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.22)",
                    color: "#CBD5E1",
                    borderRadius: "9999px",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                >
                  <Eye size={15} /> VER IMAGEN COMPLETA &amp; ARQUITECTURA
                </button>
              </div>
            </div>

            <div style={{ marginBottom: "1.2rem" }}>
              <div className="font-mono" style={{ fontSize: "0.85rem", color: "#94A3B8" }}>// {activeProject.subtitle}</div>
              <h3 className="font-display" style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", color: "#FFFFFF", lineHeight: 1.05, marginTop: "0.2rem", margin: 0 }}>
                {activeProject.title}
              </h3>
            </div>

            <p style={{ color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.7, fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
              {activeProject.description}
            </p>

            {/* Key Features Bullet List */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.8rem", marginBottom: "1.5rem" }}>
              {activeProject.features.map((feat, i) => (
                <div key={i} className="font-mono" style={{ fontSize: "0.85rem", color: "#F1F5F9", display: "flex", alignItems: "center", gap: "0.6rem", background: "rgba(255, 255, 255, 0.05)", padding: "0.6rem 0.9rem", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <CheckCircle2 size={16} style={{ color: "#FFFFFF" }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", borderTop: "1px solid rgba(255, 255, 255, 0.12)", paddingTop: "1.2rem" }}>
              {activeProject.techStack.map((tech) => (
                <span key={tech} className="font-mono" style={{ fontSize: "0.75rem", background: "rgba(255, 255, 255, 0.08)", color: "#FFFFFF", padding: "4px 12px", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.2)" }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══ FULL HIGH-RES IMAGE & ARCHITECTURE MODAL (PERFECTLY SCROLLED & CENTERED ON MOBILE) ══ */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalProject(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              background: "rgba(0, 0, 0, 0.93)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              padding: "16px 12px 100px 12px",
              boxSizing: "border-box",
            }}
          >
            <motion.div
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "min(96vw, 760px)",
                background: "#0A0E1A",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "24px",
                padding: "1.2rem",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.95)",
                color: "#FFFFFF",
                position: "relative",
                margin: "20px auto 0 auto",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <button
                onClick={() => setModalProject(null)}
                aria-label="Cerrar modal"
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "12px",
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  color: "#FFFFFF",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 30,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.6)",
                }}
              >
                <X size={18} />
              </button>

              {/* Full Uncropped High-Res Image Banner */}
              <div
                style={{
                  width: "100%",
                  maxHeight: "260px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  marginBottom: "1rem",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  background: "#030712",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={modalProject.image}
                  alt={modalProject.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "260px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="font-mono" style={{ fontSize: "0.75rem", color: "#94A3B8", marginBottom: "0.3rem" }}>
                // PROYECTO REAL // {modalProject.tag}
              </div>
              <h3 className="font-display" style={{ fontSize: "clamp(1.4rem, 4.5vw, 2.2rem)", color: "#FFFFFF", margin: 0, lineHeight: 1.1 }}>
                {modalProject.title}
              </h3>

              {/* Metrics Grid */}
              <div style={{ marginTop: "0.9rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem" }}>
                {modalProject.metrics.map((m) => (
                  <div key={m.label} style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.12)", padding: "0.5rem 0.3rem", borderRadius: "10px", textAlign: "center" }}>
                    <div className="font-mono" style={{ fontSize: "0.6rem", color: "#94A3B8" }}>{m.label}</div>
                    <div className="font-mono" style={{ fontSize: "0.78rem", color: "#FFFFFF", fontWeight: 700, marginTop: "2px" }}>{m.val}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "1rem" }}>
                <h4 className="font-mono" style={{ fontSize: "0.82rem", color: "#FFFFFF", fontWeight: 700, marginBottom: "0.4rem" }}>
                  [ DESCRIPCIÓN &amp; DETALLES TÉCNICOS ]
                </h4>
                <p style={{ color: "#CBD5E1", fontSize: "0.9rem", lineHeight: 1.6, fontFamily: "var(--font-body)", margin: 0 }}>
                  {modalProject.architectureDetails}
                </p>
              </div>

              {/* Footer Actions */}
              <div style={{ marginTop: "1.4rem", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.15)", display: "flex", gap: "0.8rem", justifyContent: "flex-end", flexWrap: "wrap" }}>
                <a
                  href={modalProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono"
                  style={{
                    background: "rgba(255, 255, 255, 0.22)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    color: "#FFFFFF",
                    padding: "0.6rem 1.4rem",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Globe size={15} /> ABRIR SITIO EN VIVO <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
