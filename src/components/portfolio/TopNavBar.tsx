"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
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
        padding: "1rem clamp(1.25rem, 5vw, 4rem)",
        borderBottom: `1px solid ${scrolled || mobileOpen ? "rgba(255,255,255,0.08)" : "transparent"}`,
        backdropFilter: scrolled || mobileOpen ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled || mobileOpen ? "blur(20px)" : "none",
        background: scrolled || mobileOpen ? "rgba(10,10,18,0.92)" : "transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      {/* Logo */}
      <div>
        <div style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: 1, color: "#fff" }}>
          ANGEL GOMEZ GARCIA
        </div>
        <div style={{ fontSize: "0.58rem", letterSpacing: "0.12em", color: "var(--grey)", marginTop: 4, textTransform: "uppercase" }}>
          Desarrollador Fullstack · Puebla, México
        </div>
      </div>

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
                  color: "#c9184a",
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
                color: isActive ? "var(--red)" : "var(--grey)",
                padding: "0.28rem 0.8rem",
                borderRight: i === NAV.length - 1 ? "none" : "1px solid var(--grey2)",
                position: "relative",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "#fff" }}
              onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "var(--grey)" }}
            >
              {item.label}
              {isActive && (
                <span style={{
                  position: "absolute", bottom: -1, left: "50%", transform: "translateX(-50%)",
                  width: 14, height: 2, background: "var(--red)", borderRadius: 2,
                }} />
              )}
            </a>
          )
        })}
      </nav>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:!hidden"
        style={{
          background: "transparent", border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 8, padding: "0.4rem", color: "#fff", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div
          className="lg:!hidden"
          style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            background: "rgba(10,10,18,0.96)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            padding: "1.2rem 1.5rem",
            display: "flex", flexDirection: "column", gap: "0.8rem",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {NAV.map(item => {
            const sectionKey = item.href.replace("#", "")
            const isActive = !item.page && !item.external && activeSection === sectionKey

            if (item.page) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em",
                    textTransform: "uppercase", textDecoration: "none",
                    color: "#c9184a",
                    padding: "0.4rem 0",
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
                onClick={() => setMobileOpen(false)}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                style={{
                  fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em",
                  textTransform: "uppercase", textDecoration: "none",
                  color: isActive ? "var(--red)" : "var(--grey)",
                  padding: "0.4rem 0",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}
              >
                <span>{item.label}</span>
                {isActive && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--red)" }} />}
              </a>
            )
          })}
        </div>
      )}
    </header>
  )
}
