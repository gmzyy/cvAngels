"use client"

import { useRef, useState } from "react"
import { useInView, motion, AnimatePresence } from "framer-motion"
import { Sparkles, Layers, Cpu, Server, Layout, Cloud } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import InteractiveGrid from "./InteractiveGrid"

interface FrameworkItem {
  src: string
  title: string
  category: "backend" | "frontend" | "ai" | "cloud"
}

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const ALL_FRAMEWORKS: FrameworkItem[] = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", title: "Next.js 16", category: "frontend" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React 19", category: "frontend" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", title: "TypeScript", category: "frontend" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", title: "NestJS (SPEI/2FA)", category: "backend" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", title: "Node.js", category: "backend" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", title: "Python 3.11", category: "ai" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", title: "FastAPI", category: "backend" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", title: "Docker", category: "cloud" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", title: "PostgreSQL", category: "backend" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", title: "MongoDB", category: "backend" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", title: "Tailwind CSS", category: "frontend" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", title: "Git / GitHub", category: "cloud" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", title: "Redis Cache", category: "backend" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", title: "Pandas / SpaCy", category: "ai" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", title: "AWS S3", category: "cloud" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", title: "Figma UI", category: "frontend" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", title: "Linux Shell", category: "cloud" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", title: "Postman / OpenAPI", category: "backend" },
  ]

  const filteredFrameworks = activeFilter === "all"
    ? ALL_FRAMEWORKS
    : ALL_FRAMEWORKS.filter((item) => item.category === activeFilter)

  const FILTERS = [
    { id: "all", label: t("TODOS", "ALL STACK"), icon: Layers },
    { id: "backend", label: t("BACKEND & FINTECH", "BACKEND & FINTECH"), icon: Server },
    { id: "frontend", label: t("FRONTEND & UI", "FRONTEND & UI"), icon: Layout },
    { id: "ai", label: t("IA & NLP", "AI & NLP"), icon: Cpu },
    { id: "cloud", label: t("DEVOPS & CLOUD", "DEVOPS & CLOUD"), icon: Cloud },
  ]

  return (
    <section
      ref={ref}
      id="skills"
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
      <div style={{ marginBottom: "2.5rem", position: "relative", zIndex: 5, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: "0.4rem 1.2rem", borderRadius: "9999px", marginBottom: "1rem" }}>
          <Sparkles size={14} style={{ color: "#FFFFFF" }} />
          <span className="font-mono" style={{ fontSize: "0.78rem", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.08em" }}>
            // {t("FRAMEWORKS & TECNOLOGÍAS", "FRAMEWORKS & NEURAL STACK")}
          </span>
        </div>

        <h2 className="spray-drippy-title" style={{ fontSize: "clamp(1.7rem, 6.5vw, 5.5rem)", color: "#FFFFFF", margin: 0, lineHeight: 1 }}>
          {t("STACK TECNOLÓGICO", "TECH STACK")}
        </h2>
      </div>

      {/* ══ CATEGORY PILL FILTERS ══ */}
      <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2.5rem", position: "relative", zIndex: 10 }}>
        {FILTERS.map((tab) => {
          const isActive = activeFilter === tab.id
          const Icon = tab.icon

          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
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
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Icon size={15} style={{ color: "#FFFFFF" }} />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* ══ 3D INTERACTIVE FRAMEWORK GRID ══ */}
      <div
        style={{
          background: "rgba(10, 14, 26, 0.8)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "28px",
          padding: "1.8rem 1.2rem",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.85), inset 0 0 25px rgba(255, 255, 255, 0.05)",
          position: "relative",
          zIndex: 10,
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <InteractiveGrid
              images={filteredFrameworks}
              gap={14}
              rounded={14}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
