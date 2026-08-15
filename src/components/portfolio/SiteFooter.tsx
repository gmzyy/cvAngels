"use client"
import { useState, useEffect } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { Mail, MessageSquare, ArrowUp, Copy, Check } from "lucide-react"

export default function SiteFooter() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)
  const [timeStr, setTimeStr] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Mexico_City",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }
      setTimeStr(now.toLocaleTimeString("es-MX", options))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText("angelgom042@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      style={{
        background: "rgba(10, 14, 26, 0.95)",
        borderTop: "1px solid rgba(255, 255, 255, 0.15)",
        color: "#FFFFFF",
        padding: "4rem 1.5rem 3rem",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
        }}
        className="lg:!grid-cols-[1.2fr_0.8fr]"
      >
        {/* LEFT COLUMN — BRAND & LIVE PUEBLA TIME */}
        <div>
          <div className="font-display" style={{ fontSize: "2rem", color: "#FFFFFF", letterSpacing: "0.04em", marginBottom: "0.5rem" }}>
            ANGEL GOMEZ GARCIA <span style={{ color: "#94A3B8" }}>// GEELMZ</span>
          </div>

          <p style={{ color: "#CBD5E1", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "520px", fontFamily: "var(--font-body)", marginBottom: "1.2rem" }}>
            {t(
              "Desarrollador Fullstack e Ingeniero de Software enfocado en plataformas seguras SPEI/2FA, IA y arquitectura web moderna.",
              "Fullstack Engineer & Software Developer focused on secure SPEI/2FA platforms, AI, and modern web architecture."
            )}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <span className="font-mono" style={{ fontSize: "0.78rem", background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "#FFFFFF", padding: "0.35rem 0.9rem", borderRadius: "9999px" }}>
              PUEBLA, MX {timeStr ? `[ ${timeStr} CST ]` : ""}
            </span>
            <span className="font-mono" style={{ fontSize: "0.78rem", color: "#FFFFFF", fontWeight: 700 }}>
              ● AVAILABLE FOR HIRE
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN — QUICK CONTACT & COPY EMAIL */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "1.5rem" }}>
          <div>
            <div className="font-mono" style={{ fontSize: "0.75rem", color: "#94A3B8", marginBottom: "0.8rem", fontWeight: 700 }}>
              // CONTACTO DIRECTO
            </div>
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/522218226470"
                target="_blank"
                rel="noreferrer"
                className="font-mono"
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: "9999px",
                  padding: "0.6rem 1.4rem",
                  fontSize: "0.82rem",
                  textDecoration: "none",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <MessageSquare size={14} /> WHATSAPP
              </a>

              <button
                onClick={copyEmail}
                className="font-mono"
                style={{
                  background: copied ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.12)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: "9999px",
                  padding: "0.6rem 1.4rem",
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "all 0.2s ease",
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? "COPIADO!" : "COPIAR EMAIL"}</span>
              </button>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255, 255, 255, 0.12)", paddingTop: "1.4rem" }}>
            <div className="font-mono" style={{ fontSize: "0.72rem", color: "#94A3B8" }}>
              © 2026 ANGEL GOMEZ GARCIA (GEELMZ)
            </div>

            <button
              onClick={scrollToTop}
              className="font-mono"
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                color: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                padding: "0.4rem 1rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                fontWeight: 700,
              }}
            >
              <ArrowUp size={14} /> TOP
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
