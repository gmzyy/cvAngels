"use client"
import { Mail, MessageSquare } from "lucide-react"

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      position: "relative",
      zIndex: 10,
      background: "#000000",
      borderTop: "4px solid var(--red)",
      padding: "4rem 1.5rem 3rem",
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2rem",
      }}>
        {/* Left */}
        <div>
          <div className="font-spray" style={{ fontSize: "2.8rem", color: "var(--red)", lineHeight: 1, WebkitTextStroke: "1px #FFFFFF" }}>
            FEELMZ // GEELMZ
          </div>
          <div className="font-mono" style={{ fontSize: "0.75rem", color: "#AAAAAA", marginTop: "0.5rem", letterSpacing: "0.1em" }}>
            © {year} ANGEL GOMEZ GARCIA • ALL RIGHTS RESERVED
          </div>
        </div>

        {/* Center Tag */}
        <div className="sticker-box font-mono" style={{ fontSize: "0.85rem", transform: "rotate(-2deg)", background: "#FFFFFF", color: "#000000", border: "2px solid var(--red)" }}>
          STREET FULLSTACK &amp; IA // PUEBLA, MÉXICO
        </div>

        {/* Right Contact Stickers */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="mailto:angelgom042@gmail.com"
            className="font-mono"
            style={{
              background: "#111111",
              color: "#FFFFFF",
              border: "2px solid #FFFFFF",
              padding: "0.5rem 1rem",
              fontSize: "0.8rem",
              textDecoration: "none",
              boxShadow: "3px 3px 0px var(--red)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Mail size={14} style={{ color: "var(--red)" }} />
            <span>angelgom042@gmail.com</span>
          </a>

          <a
            href="https://wa.me/522218226470"
            target="_blank"
            rel="noreferrer"
            className="font-mono"
            style={{
              background: "var(--red)",
              color: "#FFFFFF",
              border: "2px solid #FFFFFF",
              padding: "0.5rem 1rem",
              fontSize: "0.8rem",
              textDecoration: "none",
              boxShadow: "3px 3px 0px #000000",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontWeight: 700,
            }}
          >
            <MessageSquare size={14} style={{ color: "#FFF" }} />
            <span>WA / TEL: +52 221 822 6470</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
