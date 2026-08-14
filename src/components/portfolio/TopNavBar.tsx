"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { Mail, MessageSquare } from "lucide-react"

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
      borderBottom: scrolled || mobileOpen ? "4px solid var(--navy)" : "4px solid transparent",
      backdropFilter: scrolled || mobileOpen ? "blur(16px)" : "none",
      WebkitBackdropFilter: scrolled || mobileOpen ? "blur(16px)" : "none",
      background: scrolled || mobileOpen ? "rgba(244, 239, 230, 0.96)" : "transparent",
      transition: "all 0.3s ease",
    }}>

      {/* ── BRAND LOGO & TITLE ── */}
      <Link href="/" onClick={() => setMobileOpen(false)} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div style={{
          width: 42, height: 42,
          background: "var(--navy)",
          border: "2px solid var(--red)",
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
          <div className="font-display" style={{
            fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
            color: "var(--navy)",
            letterSpacing: "0.02em",
          }}>
            FEELMZ // 2026
          </div>
          <div className="font-mono" style={{
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            color: "var(--red)",
            textTransform: "uppercase",
            marginTop: 2,
            fontWeight: 900,
          }}>
            [ FULLSTACK ARCHITECT ]
          </div>
        </div>
      </Link>

      {/* ── DESKTOP NAV TABS ── */}
      <nav style={{ display: "none" }} className="lg:!flex items-center gap-1.5">
        {NAV.map((item) => {
          const sectionKey = item.href.replace("/#", "").replace("#", "")
          const isActive = !item.page && activeSection === sectionKey

          if (item.page) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="font-mono street-card-hover"
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 900,
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  color: "#FFFFFF",
                  padding: "0.45rem 1rem",
                  background: "var(--red)",
                  marginLeft: "0.8rem",
                  textTransform: "uppercase",
                  boxShadow: "3px 3px 0px var(--navy)",
                  border: "2px solid var(--navy)",
                  transform: "rotate(1deg)",
                }}
              >
                {item.label} ➔
              </Link>
            )
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className="font-display street-card-hover"
              style={{
                fontSize: "1.25rem",
                letterSpacing: "0.05em",
                textDecoration: "none",
                color: isActive ? "#FFFFFF" : "var(--navy)",
                padding: "0.35rem 0.9rem",
                background: isActive ? "var(--navy)" : "transparent",
                border: isActive ? "2px solid var(--red)" : "2px solid transparent",
                transform: isActive ? "rotate(-2deg)" : "none",
                boxShadow: isActive ? "4px 4px 0px var(--red)" : "none",
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
            marginLeft: "1.2rem",
            background: "var(--red)",
            border: "2px solid var(--navy)",
            color: "#FFFFFF",
            padding: "0.2rem 0.9rem",
            fontSize: "1.2rem",
            cursor: "pointer",
            boxShadow: "4px 4px 0px var(--navy)",
            transform: "rotate(-3deg)",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
          title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
        >
          <span style={{ opacity: lang === "es" ? 1 : 0.6, textDecoration: lang === "es" ? "underline" : "none" }}>ES</span>
          <span style={{ opacity: 0.6 }}>/</span>
          <span style={{ opacity: lang === "en" ? 1 : 0.6, textDecoration: lang === "en" ? "underline" : "none" }}>EN</span>
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
            border: "2px solid var(--navy)",
            color: "#FFFFFF",
            padding: "0.2rem 0.6rem",
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "3px 3px 0px var(--navy)",
            transform: "rotate(-2deg)",
            flexShrink: 0,
          }}
        >
          {lang === "es" ? "EN ➔" : "ES ➔"}
        </button>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: mobileOpen ? "var(--red)" : "var(--navy)",
            border: "2px solid var(--navy)",
            width: "110px",
            height: "38px",
            color: "#FFFFFF",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "3px 3px 0px var(--red)",
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            letterSpacing: "0.05em",
            boxSizing: "border-box",
            flexShrink: 0,
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕ CERRAR" : "MENU //"}
        </button>
      </div>

      {/* ══ MIXTAPE TRACKLIST MOBILE OVERLAY ══ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:!hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: "60px",
              left: 0,
              right: 0,
              bottom: 0,
              height: "calc(100vh - 60px)",
              background: "rgba(244, 239, 230, 0.98)",
              borderTop: "4px solid var(--navy)",
              padding: "1.5rem 1.2rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              zIndex: 99,
              overflowY: "auto",
            }}
          >
            {/* Header Directory Stamp */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.2rem",
              borderBottom: "3px dashed var(--red)",
              paddingBottom: "0.8rem",
            }}>
              <span className="font-mono" style={{ fontSize: "0.75rem", background: "var(--navy)", color: "#FFF", padding: "4px 10px", fontWeight: 900 }}>
                DIRECTORY // TRACKLIST
              </span>
              <span className="stamp-badge" style={{ fontSize: "0.85rem", border: "2px solid var(--red)", padding: "1px 6px" }}>
                LIVE EDITION
              </span>
            </div>

            {/* Nav Cards Track List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", flex: 1 }}>
              {NAV.map((item, idx) => {
                const sectionKey = item.href.replace("/#", "").replace("#", "")
                const isActive = !item.page && activeSection === sectionKey

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.22 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="street-card-hover" style={{
                        background: item.page ? "var(--red)" : isActive ? "var(--navy)" : "#FAF5EB",
                        color: item.page ? "#FFFFFF" : isActive ? "#FFFFFF" : "var(--navy)",
                        border: "3px solid var(--navy)",
                        boxShadow: isActive ? "6px 6px 0px var(--red)" : "4px 4px 0px var(--navy)",
                        padding: "0.8rem 1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        transform: idx % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                          <span className="font-mono" style={{
                            fontSize: "0.75rem",
                            background: item.page ? "var(--navy)" : isActive ? "var(--red)" : "var(--bg-paper)",
                            color: item.page || isActive ? "#FFF" : "var(--navy)",
                            padding: "3px 8px",
                            fontWeight: 900,
                            border: "1px solid var(--navy)",
                          }}>
                            {item.num}
                          </span>
                          <span className="font-display" style={{ fontSize: "1.8rem", letterSpacing: "0.04em", lineHeight: 1 }}>
                            {item.label}
                          </span>
                        </div>

                        <span className="font-mono" style={{ fontSize: "0.9rem", fontWeight: 900 }}>
                          {item.page ? "VER PÁGINA ➔" : isActive ? "ACTIVE" : "➔"}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* Quick Contact Buttons at Bottom */}
            <div style={{
              borderTop: "3px dashed var(--navy)",
              paddingTop: "1.2rem",
              marginTop: "1.5rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.9rem",
            }}>
              <a
                href="https://wa.me/522218226470"
                target="_blank"
                rel="noreferrer"
                className="font-mono street-card-hover"
                style={{
                  background: "var(--red)",
                  color: "#FFFFFF",
                  border: "2px solid var(--navy)",
                  padding: "0.75rem 0.5rem",
                  fontSize: "0.8rem",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: 900,
                  boxShadow: "4px 4px 0px var(--navy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <MessageSquare size={16} /> WHATSAPP
              </a>

              <a
                href="mailto:angelgom042@gmail.com"
                className="font-mono street-card-hover"
                style={{
                  background: "var(--navy)",
                  color: "#FFFFFF",
                  border: "2px solid var(--navy)",
                  padding: "0.75rem 0.5rem",
                  fontSize: "0.8rem",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: 900,
                  boxShadow: "4px 4px 0px var(--red)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <Mail size={16} style={{ color: "var(--red)" }} /> CORREO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
