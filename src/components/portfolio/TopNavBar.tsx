"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { Mail, MessageSquare, ArrowRight, CornerDownRight } from "lucide-react"

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const NAV = [
    { num: "01", label: t("INICIO", "HOME"), href: "/#hero" },
    { num: "02", label: t("PERFIL", "PROFILE"), href: "/#about" },
    { num: "03", label: t("EXPERIENCIA", "EXPERIENCE"), href: "/#experience" },
    { num: "04", label: t("SKILLS", "SKILLS"), href: "/#skills" },
    { num: "05", label: t("PROYECTOS", "PROJECTS"), href: "/#portfolio" },
    { num: "06", label: t("FORMACIÓN", "EDUCATION"), href: "/#education" },
    { num: "07", label: t("CONOCE DE MÍ", "ABOUT ME"), href: "/conoce-de-mi", page: true },
  ]

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = ["hero", "about", "experience", "skills", "portfolio", "education"]
      for (const s of sections.reverse()) {
        const el = document.getElementById(s)
        if (el && el.getBoundingClientRect().top <= 220) {
          setActiveSection(s); break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lang])

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0.75rem clamp(1rem, 4vw, 4rem)",
      borderBottom: scrolled || mobileOpen ? "4px solid var(--red)" : "4px solid transparent",
      backdropFilter: scrolled || mobileOpen ? "blur(16px)" : "none",
      WebkitBackdropFilter: scrolled || mobileOpen ? "blur(16px)" : "none",
      background: scrolled || mobileOpen ? "rgba(6,6,6,0.98)" : "transparent",
      transition: "all 0.3s ease",
    }}>

      {/* ── LOGO / BRAND ── */}
      <Link href="/" onClick={() => setMobileOpen(false)} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div style={{
          width: 38, height: 38,
          background: "#FFFFFF",
          border: "2px solid #000000",
          boxShadow: "3px 3px 0px var(--red)",
          overflow: "hidden",
          flexShrink: 0,
          transform: "rotate(-2deg)",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image.png"
            alt="FEELMZ Avatar"
            style={{ width: "100%", height: "100%", objectFit: "contain", padding: "2px" }}
          />
        </div>

        <div style={{ lineHeight: 1 }}>
          <div className="font-tag" style={{
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            color: "#FFFFFF",
            letterSpacing: "0.02em",
          }}>
            FEELMZ // GEELMZ
          </div>
          <div className="font-mono" style={{
            fontSize: "0.55rem",
            letterSpacing: "0.18em",
            color: "var(--red)",
            textTransform: "uppercase",
            marginTop: 2,
            fontWeight: 700,
          }}>
            [ FULLSTACK &amp; IA ]
          </div>
        </div>
      </Link>

      {/* ── DESKTOP NAV ── */}
      <nav style={{ display: "none" }} className="lg:!flex items-center gap-1">
        {NAV.map((item) => {
          const sectionKey = item.href.replace("/#", "").replace("#", "")
          const isActive = !item.page && activeSection === sectionKey

          if (item.page) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="font-mono"
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  color: "#FFFFFF",
                  padding: "0.4rem 0.9rem",
                  background: "var(--red)",
                  marginLeft: "0.8rem",
                  textTransform: "uppercase",
                  boxShadow: "3px 3px 0px #000000",
                  border: "2px solid #FFFFFF",
                  transform: "rotate(1deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                {item.label} ↗
              </Link>
            )
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className="font-display"
              style={{
                fontSize: "1.2rem",
                letterSpacing: "0.05em",
                textDecoration: "none",
                color: isActive ? "var(--red)" : "#FFFFFF",
                padding: "0.3rem 0.8rem",
                background: isActive ? "#000000" : "transparent",
                border: isActive ? "2px solid var(--red)" : "2px solid transparent",
                transform: isActive ? "rotate(-2deg)" : "none",
                boxShadow: isActive ? "3px 3px 0px var(--red)" : "none",
                transition: "all 0.2s ease",
              }}
            >
              {item.label}
            </Link>
          )
        })}

        {/* ── LANGUAGE SWITCHER (ES / EN) ── */}
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="font-marker"
          style={{
            marginLeft: "1.5rem",
            background: "var(--red)",
            border: "2px solid #FFFFFF",
            color: "#FFFFFF",
            padding: "0.1rem 0.8rem",
            fontSize: "1.2rem",
            cursor: "pointer",
            boxShadow: "4px 4px 0px #000000",
            transform: "rotate(-3deg)",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
          title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
        >
          <span style={{ opacity: lang === "es" ? 1 : 0.5, textDecoration: lang === "es" ? "underline" : "none" }}>ES</span>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ opacity: lang === "en" ? 1 : 0.5, textDecoration: lang === "en" ? "underline" : "none" }}>EN</span>
        </button>
      </nav>

      {/* ── MOBILE ACTIONS (LANG + MENU TOGGLE) ── */}
      <div className="lg:!hidden" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        {/* Language Switcher Mobile */}
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="font-marker"
          style={{
            background: "var(--red)",
            border: "2px solid #FFFFFF",
            color: "#FFFFFF",
            padding: "0.2rem 0.6rem",
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "3px 3px 0px #000000",
            transform: "rotate(-2deg)",
            flexShrink: 0,
          }}
        >
          {lang === "es" ? "EN ↗" : "ES ↗"}
        </button>

        {/* Mobile Toggle Button (STRICT FIXED DIMENSIONS) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: mobileOpen ? "var(--red)" : "#000000",
            border: "2px solid #FFFFFF",
            width: "100px",
            height: "36px",
            color: "#FFFFFF",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "3px 3px 0px var(--red)",
            fontFamily: "var(--font-display)",
            fontSize: "1.15rem",
            letterSpacing: "0.05em",
            boxSizing: "border-box",
            flexShrink: 0,
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕ CERRAR" : "MENU //"}
        </button>
      </div>

      {/* ══ ULTRA CREATIVE STREET MOBILE NAVIGATION OVERLAY ══ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:!hidden"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: "60px",
              left: 0,
              right: 0,
              bottom: 0,
              height: "calc(100vh - 60px)",
              background: "rgba(6, 6, 6, 0.98)",
              borderTop: "3px solid var(--red)",
              padding: "1.2rem 1rem 2rem",
              display: "flex",
              flexDirection: "column",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              zIndex: 99,
              overflowY: "auto",
            }}
          >
            {/* Header Stamp in Menu */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
              borderBottom: "2px dashed var(--red)",
              paddingBottom: "0.6rem",
            }}>
              <span className="sticker-box font-mono" style={{ fontSize: "0.65rem", background: "var(--red)", color: "#FFF" }}>
                // NAVEGACIÓN URBANA
              </span>
              <span className="font-mono" style={{ fontSize: "0.65rem", color: "var(--red)", fontWeight: 700 }}>
                ● SELECT DESTINATION
              </span>
            </div>

            {/* Nav Cards List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", flex: 1 }}>
              {NAV.map((item, idx) => {
                const sectionKey = item.href.replace("/#", "").replace("#", "")
                const isActive = !item.page && activeSection === sectionKey

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{ textDecoration: "none" }}
                    >
                      <div style={{
                        background: item.page ? "var(--red)" : isActive ? "#FFFFFF" : "#121212",
                        color: item.page ? "#FFFFFF" : isActive ? "#000000" : "#FFFFFF",
                        border: "2px solid #FFFFFF",
                        boxShadow: isActive ? "4px 4px 0px var(--red)" : "3px 3px 0px #000000",
                        padding: "0.65rem 1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        transform: idx % 2 === 0 ? "rotate(-0.8deg)" : "rotate(0.8deg)",
                        transition: "all 0.15s ease",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <span className="font-mono" style={{
                            fontSize: "0.7rem",
                            background: item.page ? "#000" : isActive ? "var(--red)" : "#222",
                            color: "#FFF",
                            padding: "2px 6px",
                            fontWeight: 700,
                          }}>
                            {item.num}
                          </span>
                          <span className="font-display" style={{ fontSize: "1.6rem", letterSpacing: "0.04em", lineHeight: 1 }}>
                            {item.label}
                          </span>
                        </div>

                        <span className="font-mono" style={{ fontSize: "0.85rem", fontWeight: 700 }}>
                          {item.page ? "EXPLORAR ↗" : isActive ? "● ACTIVE" : "➔"}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* Quick Action Contact Row at Bottom of Menu */}
            <div style={{
              borderTop: "2px dashed #333333",
              paddingTop: "1rem",
              marginTop: "1.2rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
            }}>
              <a
                href="https://wa.me/522218226470"
                target="_blank"
                rel="noreferrer"
                className="font-mono"
                style={{
                  background: "var(--red)",
                  color: "#FFFFFF",
                  border: "2px solid #FFFFFF",
                  padding: "0.6rem 0.4rem",
                  fontSize: "0.75rem",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: 700,
                  boxShadow: "3px 3px 0px #000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                }}
              >
                <MessageSquare size={14} /> WHATSAPP
              </a>

              <a
                href="mailto:angelgom042@gmail.com"
                className="font-mono"
                style={{
                  background: "#000000",
                  color: "#FFFFFF",
                  border: "2px solid #FFFFFF",
                  padding: "0.6rem 0.4rem",
                  fontSize: "0.75rem",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: 700,
                  boxShadow: "3px 3px 0px var(--red)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                }}
              >
                <Mail size={14} style={{ color: "var(--red)" }} /> CORREO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
