"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { Mail, MessageSquare, ExternalLink, Globe } from "lucide-react"

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const NAV = [
    { label: t("INICIO", "HOME"), href: "/#hero" },
    { label: t("PERFIL", "PROFILE"), href: "/#about" },
    { label: t("EXPERIENCIA", "EXPERIENCE"), href: "/#experience" },
    { label: t("SKILLS", "SKILLS"), href: "/#skills" },
    { label: t("PROYECTOS", "PROJECTS"), href: "/#portfolio" },
    { label: t("FORMACIÓN", "EDUCATION"), href: "/#education" },
    { label: t("CONOCE DE MÍ", "ABOUT ME"), href: "/conoce-de-mi", page: true },
  ]

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
      padding: "0.8rem clamp(1.25rem, 5vw, 4rem)",
      borderBottom: scrolled || mobileOpen ? "4px solid var(--red)" : "4px solid transparent",
      backdropFilter: scrolled || mobileOpen ? "blur(16px)" : "none",
      WebkitBackdropFilter: scrolled || mobileOpen ? "blur(16px)" : "none",
      background: scrolled || mobileOpen ? "rgba(6,6,6,0.98)" : "transparent",
      transition: "all 0.3s ease",
    }}>

      {/* ── LOGO / BRAND ── */}
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div style={{
          width: 40, height: 40,
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
      <div className="lg:!hidden" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        {/* Language Switcher Mobile */}
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="font-marker"
          style={{
            background: "var(--red)",
            border: "2px solid #FFFFFF",
            color: "#FFFFFF",
            padding: "0.2rem 0.7rem",
            fontSize: "1.2rem",
            cursor: "pointer",
            boxShadow: "3px 3px 0px #000000",
            transform: "rotate(-2deg)",
          }}
        >
          {lang === "es" ? "EN ↗" : "ES ↗"}
        </button>

        {/* Mobile Toggle Button */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
          style={{
            background: mobileOpen ? "var(--red)" : "#000000",
            border: "2px solid #FFFFFF",
            padding: "0.5rem 0.8rem",
            color: "#FFFFFF",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "4px 4px 0px var(--red)",
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            letterSpacing: "0.05em",
          }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                style={{ color: "#FFF", fontWeight: 900 }}
              >
                ✕ CERRAR
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                style={{ color: "#FFF", fontWeight: 900, display: "flex", alignItems: "center", gap: 6 }}
              >
                MENU <span style={{ color: "var(--red)" }}>//</span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ══ ULTRA STREET MOBILE ZINE DROPDOWN MENU ══ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:!hidden"
            initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -16, scaleY: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "absolute", top: "100%", left: 0, right: 0,
              background: "#080808",
              borderBottom: "6px solid var(--red)",
              borderTop: "2px solid #333333",
              padding: "1.8rem 1.5rem 2.5rem",
              display: "flex", flexDirection: "column", gap: "0.8rem",
              backdropFilter: "blur(24px)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.95), 0 10px 20px rgba(255, 34, 34, 0.3)",
              maxHeight: "85vh",
              overflowY: "auto",
            }}
          >
            {/* Street Header Stamp inside Mobile Menu */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem", borderBottom: "2px dashed var(--red)", paddingBottom: "0.6rem" }}>
              <span className="sticker-box font-mono" style={{ fontSize: "0.65rem", background: "var(--red)", color: "#FFF" }}>
                // NAVIGATION ZINE SHEET
              </span>
              <span className="font-spray" style={{ color: "var(--red)", fontSize: "1.2rem" }}>
                #GEELMZ_MOBILE
              </span>
            </div>

            {/* Mobile Nav Links */}
            {NAV.map((item, idx) => {
              const sectionKey = item.href.replace("/#", "").replace("#", "")
              const isActive = !item.page && activeSection === sectionKey

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{
                      background: item.page ? "var(--red)" : isActive ? "#FFFFFF" : "#111111",
                      color: item.page ? "#FFFFFF" : isActive ? "#000000" : "#FFFFFF",
                      border: "2px solid #FFFFFF",
                      boxShadow: isActive ? "4px 4px 0px var(--red)" : "3px 3px 0px #000000",
                      padding: "0.75rem 1.2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transform: idx % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
                      transition: "transform 0.2s ease",
                    }}>
                      <span className="font-display" style={{ fontSize: "1.8rem", letterSpacing: "0.04em", lineHeight: 1 }}>
                        {item.label}
                      </span>
                      <span className="font-mono" style={{ fontSize: "1rem", fontWeight: 700 }}>
                        {item.page ? "EXPLORAR ↗" : isActive ? "● VERIFIED" : "➔"}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )
            })}

            {/* Mobile Footer Direct Contact Actions */}
            <div style={{ borderTop: "2px dashed #333333", paddingTop: "1.2rem", marginTop: "1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
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
