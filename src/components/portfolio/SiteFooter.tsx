"use client"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"
import { Mail, MessageSquare, Github, ArrowUp } from "lucide-react"

export default function SiteFooter() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer style={{
      background: "var(--navy)",
      borderTop: "4px solid var(--red)",
      color: "#FFFFFF",
      padding: "4rem 1.5rem 2rem",
      position: "relative",
      zIndex: 10,
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "3rem",
      }} className="lg:!grid-cols-[1.2fr_0.8fr]">

        {/* LEFT COLUMN — BRAND & BIO */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
            <div style={{
              width: 36, height: 36,
              background: "#FFFFFF",
              border: "2px solid var(--red)",
              overflow: "hidden",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/image.png" alt="Geelmz Avatar" style={{ width: "100%", height: "100%", objectFit: "contain", padding: "2px" }} />
            </div>

            <div className="font-tag" style={{ fontSize: "1.8rem", color: "#FFFFFF" }}>
              FEELMZ // GEELMZ
            </div>
          </div>

          <p style={{ color: "#EAE2D0", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "520px", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            {t(
              "Desarrollador Fullstack & IA enfocado en sistemas robustos, seguridad transaccional 2FA/TOTP y arquitectura moderna.",
              "Fullstack & AI Developer focused on robust systems, 2FA/TOTP security, and modern software architecture."
            )}
          </p>

          <div className="font-mono" style={{ fontSize: "0.75rem", color: "var(--red)", fontWeight: 700 }}>
            ● STATUS: OPEN FOR FULLSTACK &amp; AI OPPORTUNITIES
          </div>
        </div>

        {/* RIGHT COLUMN — QUICK CONTACT & BACK TO TOP */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "1.5rem" }}>
          <div>
            <div className="font-mono" style={{ fontSize: "0.75rem", color: "var(--red)", marginBottom: "0.8rem", fontWeight: 700 }}>
              [ DIRECT CONTACT ]
            </div>
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/522218226470"
                target="_blank"
                rel="noreferrer"
                className="font-mono"
                style={{
                  background: "var(--red)",
                  color: "#FFFFFF",
                  padding: "0.6rem 1.2rem",
                  fontSize: "0.8rem",
                  textDecoration: "none",
                  fontWeight: 700,
                  border: "2px solid #FFFFFF",
                  boxShadow: "4px 4px 0px #061024",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <MessageSquare size={16} /> WHATSAPP (+52 221 822 6470)
              </a>

              <a
                href="mailto:angelgom042@gmail.com"
                className="font-mono"
                style={{
                  background: "#061024",
                  color: "#FFFFFF",
                  padding: "0.6rem 1.2rem",
                  fontSize: "0.8rem",
                  textDecoration: "none",
                  fontWeight: 700,
                  border: "2px solid var(--red)",
                  boxShadow: "4px 4px 0px var(--red)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Mail size={16} style={{ color: "var(--red)" }} /> CORREO
              </a>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px dashed var(--red)", paddingTop: "1.5rem" }}>
            <div className="font-mono" style={{ fontSize: "0.7rem", color: "#AAAAAA" }}>
              © 2026 ANGEL GOMEZ GARCIA (GEELMZ). ALL RIGHTS RESERVED.
            </div>

            <button
              onClick={scrollToTop}
              className="font-mono"
              style={{
                background: "var(--red)",
                color: "#FFFFFF",
                border: "2px solid #FFFFFF",
                padding: "0.4rem 0.8rem",
                fontSize: "0.75rem",
                cursor: "pointer",
                fontWeight: 700,
                boxShadow: "3px 3px 0px #061024",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
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
