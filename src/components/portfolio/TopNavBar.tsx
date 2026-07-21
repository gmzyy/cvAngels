"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const NAV = [
  { label: "Inicio",        href: "#hero" },
  { label: "Perfil CV",     href: "#about" },
  { label: "Conoce de Mí",  href: "/conoce-de-mi", page: true },
  { label: "Experiencia",   href: "#experience" },
  { label: "Habilidades",   href: "#skills" },
  { label: "Proyectos",     href: "#portfolio" },
  { label: "Educación",     href: "#education" },
  { label: "CV PDF",        href: "/CV_Angel_GG.pdf", external: true },
]

// Custom Crimson Wine Monogram Logo Mark SVG Component
function LogoMark() {
  return (
    <div style={{ position: "relative", width: 38, height: 38, flexShrink: 0 }}>
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D94663" />
            <stop offset="50%" stopColor="#A31638" />
            <stop offset="100%" stopColor="#5E0B1B" />
          </linearGradient>
          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#D94663" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Outer Hexagon / Rounded Diamond */}
        <rect
          x="3" y="3" width="34" height="34" rx="10"
          fill="url(#logoGrad)"
          stroke="rgba(243, 239, 239, 0.25)"
          strokeWidth="1.2"
          filter="url(#logoGlow)"
        />

        {/* Stylized AG Monogram Lines */}
        {/* Letter A */}
        <path
          d="M13 28L18 12L23 28"
          stroke="#F3EFEF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 22H21"
          stroke="#F3EFEF"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Letter G accent curve */}
        <path
          d="M27 15C25.5 13.5 23 13.5 21.5 15C20 16.5 20 19 21.5 21C23 23 25.5 23 27 21.5V18.5H24.5"
          stroke="#F3EFEF"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = NAV.filter(n => !n.page && !n.external).map(n => n.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 220) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0.85rem clamp(1.25rem, 5vw, 4rem)",
        borderBottom: `1px solid ${scrolled || mobileOpen ? "rgba(243,239,239,0.08)" : "transparent"}`,
        backdropFilter: scrolled || mobileOpen ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled || mobileOpen ? "blur(20px)" : "none",
        background: scrolled || mobileOpen ? "rgba(11,11,16,0.92)" : "transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      {/* Logo & Brand */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.85rem", textDecoration: "none" }}>
        <LogoMark />
        <div>
          <div style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: 1, color: "#F3EFEF" }}>
            ANGEL GOMEZ GARCIA
          </div>
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.12em", color: "var(--grey)", marginTop: 4, textTransform: "uppercase" }}>
            Desarrollador Fullstack · Puebla, México
          </div>
        </div>
      </Link>

      {/* Desktop Nav */}
      <nav style={{ display: "none" }} className="lg:!flex items-center">
        {NAV.map((item, i) => {
          const sectionKey = item.href.replace("#", "")
          const isActive = !item.page && !item.external && activeSection === sectionKey

          if (item.page) {
            return (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize: "0.64rem", fontWeight: 700, letterSpacing: "0.12em",
                  textTransform: "uppercase", textDecoration: "none",
                  color: "#D94663",
                  padding: "0.28rem 0.8rem",
                  borderRight: "1px solid var(--grey2)",
                  transition: "color 0.2s",
                }}
              >
                {item.label} ↗
              </Link>
            )
          }

          return (
            <a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              style={{
                fontSize: "0.64rem", fontWeight: 600, letterSpacing: "0.12em",
                textTransform: "uppercase", textDecoration: "none",
                color: isActive ? "var(--red-accent)" : "var(--grey)",
                padding: "0.28rem 0.8rem",
                borderRight: i === NAV.length - 1 ? "none" : "1px solid var(--grey2)",
                position: "relative",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "#F3EFEF" }}
              onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "var(--grey)" }}
            >
              {item.label}
              {isActive && (
                <span style={{
                  position: "absolute", bottom: -1, left: "50%", transform: "translateX(-50%)",
                  width: 14, height: 2, background: "var(--red-accent)", borderRadius: 2,
                }} />
              )}
            </a>
          )
        })}
      </nav>

      {/* Mobile Toggle Button */}
      <motion.button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:!hidden"
        whileTap={{ scale: 0.9 }}
        style={{
          background: "rgba(243,239,239,0.04)",
          border: "1px solid rgba(243,239,239,0.14)",
          borderRadius: 8, padding: "0.45rem", color: "#F3EFEF", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={mobileOpen ? "close" : "open"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:!hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute", top: "100%", left: 0, right: 0,
              background: "rgba(11,11,16,0.96)",
              borderBottom: "1px solid rgba(243,239,239,0.1)",
              padding: "1.5rem 1.8rem",
              display: "flex", flexDirection: "column", gap: "0.9rem",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            }}
          >
            {NAV.map((item, idx) => {
              const sectionKey = item.href.replace("#", "")
              const isActive = !item.page && !item.external && activeSection === sectionKey

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.25 }}
                >
                  {item.page ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.14em",
                        textTransform: "uppercase", textDecoration: "none",
                        color: "#D94663",
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "0.4rem 0",
                      }}
                    >
                      <span>{item.label} ↗</span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      style={{
                        fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.14em",
                        textTransform: "uppercase", textDecoration: "none",
                        color: isActive ? "var(--red-accent)" : "var(--grey)",
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "0.4rem 0",
                      }}
                    >
                      <span>{item.label}</span>
                      {isActive && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--red-accent)", boxShadow: "0 0 8px var(--red-accent)" }} />}
                    </a>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
