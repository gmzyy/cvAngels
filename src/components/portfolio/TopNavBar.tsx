"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { Mail, MessageSquare, Menu, X, ArrowUpRight, Sparkles, Home, User, Briefcase, Code, FolderGit2, GraduationCap, Globe, Download } from "lucide-react"

export default function TopNavBar() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleLockRef = useRef(false)
  const { lang, setLang, t } = useLanguage()

  const NAV = [
    { label: t("INICIO", "HOME"), href: "/#hero", icon: Home },
    { label: t("PERFIL", "PROFILE"), href: "/#about", icon: User },
    { label: t("PROYECTOS", "PROJECTS"), href: "/#portfolio", icon: FolderGit2 },
    { label: t("SKILLS", "SKILLS"), href: "/#skills", icon: Code },
    { label: t("EXPERIENCIA", "EXPERIENCE"), href: "/#experience", icon: Briefcase },
    { label: t("FORMACIÓN", "EDUCATION"), href: "/#education", icon: GraduationCap },
    { label: t("CONOCE DE MÍ", "ABOUT ME"), href: "/conoce-de-mi", page: true, icon: Sparkles },
  ]

  const handleToggle = () => {
    if (toggleLockRef.current) return
    toggleLockRef.current = true
    setMobileOpen((prev) => !prev)
    setTimeout(() => {
      toggleLockRef.current = false
    }, 180)
  }

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
      const sections = ["hero", "about", "portfolio", "skills", "experience", "education"]
      for (const s of sections.reverse()) {
        const el = document.getElementById(s)
        if (el && el.getBoundingClientRect().top <= 280) {
          setActiveSection(s)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lang])

  return (
    <>
      {/* ══ EXPANDED APPLE LIQUID GLASS FLOATING DOCK NAVBAR ══ */}
      <header
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.45rem 0.85rem",
          background: "rgba(10, 14, 26, 0.92)",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.22)",
          borderRadius: "9999px",
          boxShadow: "0 18px 45px rgba(0, 0, 0, 0.95)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          maxWidth: "min(96vw, 1200px)",
        }}
      >
        {/* DESKTOP EXPANDED NAV ITEMS */}
        <nav style={{ display: "none" }} className="md:!flex items-center gap-1">
          {NAV.map((item) => {
            const sectionKey = item.href.replace("/#", "").replace("#", "")
            const isActive = !item.page && activeSection === sectionKey
            const Icon = item.icon

            if (item.page) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-mono"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    color: "#FFFFFF",
                    padding: "0.42rem 0.95rem",
                    background: "rgba(255, 255, 255, 0.18)",
                    border: "1px solid rgba(255, 255, 255, 0.35)",
                    borderRadius: "9999px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Icon size={14} /> {item.label} <ArrowUpRight size={13} />
                </Link>
              )
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="font-mono"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  color: isActive ? "#FFFFFF" : "#CBD5E1",
                  padding: "0.42rem 0.85rem",
                  borderRadius: "9999px",
                  background: isActive ? "rgba(255, 255, 255, 0.16)" : "transparent",
                  border: isActive ? "1px solid rgba(255, 255, 255, 0.28)" : "1px solid transparent",
                  transition: "all 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontWeight: isActive ? 700 : 500,
                }}
              >
                <Icon size={14} /> {item.label}
              </Link>
            )
          })}
        </nav>

        {/* DESKTOP QUICK ACTION SHORTCUTS (WHATSAPP & CV & LANG) */}
        <div style={{ display: "none" }} className="md:!flex items-center gap-1.5 border-l border-white/15 pl-2">
          <a
            href="https://wa.me/522218226470"
            target="_blank"
            rel="noreferrer"
            className="font-mono"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              color: "#FFFFFF",
              padding: "0.4rem 0.8rem",
              borderRadius: "9999px",
              fontSize: "0.74rem",
              textDecoration: "none",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <MessageSquare size={13} /> WHATSAPP
          </a>

          <a
            href="/CV_Angel_GG.pdf"
            download="CV_Angel_GG.pdf"
            className="font-mono"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              color: "#FFFFFF",
              padding: "0.4rem 0.8rem",
              borderRadius: "9999px",
              fontSize: "0.74rem",
              textDecoration: "none",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <Download size={13} /> CV
          </a>

          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="font-mono"
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              color: "#FFFFFF",
              padding: "0.4rem 0.75rem",
              borderRadius: "9999px",
              fontSize: "0.74rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              fontWeight: 700,
            }}
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <Globe size={13} /> <span>{lang === "es" ? "ES" : "EN"}</span>
          </button>
        </div>

        {/* MOBILE DOCK WITH QUICK ACTION ICONS & MENU TRIGGER */}
        <div className="md:!hidden" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <Link
            href="/#hero"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#FFFFFF",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title="Inicio"
          >
            <Home size={16} />
          </Link>

          <Link
            href="/#portfolio"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#FFFFFF",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title="Proyectos"
          >
            <FolderGit2 size={16} />
          </Link>

          <a
            href="https://wa.me/522218226470"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#FFFFFF",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title="WhatsApp"
          >
            <MessageSquare size={16} />
          </a>

          <button
            onClick={handleToggle}
            className="font-mono"
            style={{
              background: "rgba(255, 255, 255, 0.16)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#FFFFFF",
              padding: "0.45rem 0.95rem",
              borderRadius: "9999px",
              fontSize: "0.82rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontWeight: 700,
            }}
          >
            <Menu size={16} /> <span>{t("MENÚ", "MENU")}</span>
          </button>

          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="font-mono"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#FFFFFF",
              padding: "0.45rem 0.75rem",
              borderRadius: "9999px",
              fontSize: "0.78rem",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </header>

      {/* MOBILE APPLE GLASS MENU CARD */}
      <AnimatePresence mode="wait">
        {mobileOpen && (
          <motion.div
            key="mobile-nav-overlay"
            className="md:!hidden"
            initial={{ opacity: 0, y: 15, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 15, x: "-50%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{
              position: "fixed",
              bottom: "80px",
              left: "50%",
              width: "calc(100vw - 32px)",
              maxWidth: "380px",
              background: "rgba(10, 14, 26, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.28)",
              borderRadius: "28px",
              padding: "1.2rem",
              display: "flex",
              flexDirection: "column",
              backdropFilter: "blur(32px) saturate(180%)",
              WebkitBackdropFilter: "blur(32px) saturate(180%)",
              zIndex: 99,
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.95)",
              maxHeight: "75vh",
              overflowY: "auto",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                paddingBottom: "0.8rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFFFFF" }} />
                <span className="font-mono" style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.85rem" }}>
                  ANGEL GOMEZ GARCIA
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  color: "#FFFFFF",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {NAV.map((item) => {
                const sectionKey = item.href.replace("/#", "").replace("#", "")
                const isActive = !item.page && activeSection === sectionKey
                const Icon = item.icon

                return (
                  <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        background: isActive ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.05)",
                        color: "#FFFFFF",
                        border: isActive ? "1px solid rgba(255, 255, 255, 0.35)" : "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "16px",
                        padding: "0.75rem 1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                        <Icon size={16} style={{ color: "#FFFFFF" }} />
                        <span className="font-mono" style={{ fontSize: "0.9rem", letterSpacing: "0.03em", fontWeight: 700 }}>
                          {item.label}
                        </span>
                      </div>
                      <span className="font-mono" style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                        {item.page ? "PÁGINA ➔" : isActive ? "ACTIVO" : "➔"}
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Quick Contact Actions */}
            <div
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                paddingTop: "0.9rem",
                marginTop: "0.9rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.6rem",
              }}
            >
              <a
                href="https://wa.me/522218226470"
                target="_blank"
                rel="noreferrer"
                className="font-mono"
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  padding: "0.65rem",
                  borderRadius: "12px",
                  fontSize: "0.78rem",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                }}
              >
                <MessageSquare size={14} /> WHATSAPP
              </a>

              <a
                href="/CV_Angel_GG.pdf"
                download="CV_Angel_GG.pdf"
                className="font-mono"
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  padding: "0.65rem",
                  borderRadius: "12px",
                  fontSize: "0.78rem",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                }}
              >
                <Download size={14} /> CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
