"use client"
import { useRef } from "react"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

export default function HeroSection() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement>(null)

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "var(--bg)",
        overflow: "hidden",
        paddingTop: "clamp(5.5rem, 12vw, 7rem)",
      }}
    >
      {/* ══ TOP STREET BADGE BAR (BURNT RED & NAVY) ══ */}
      <div style={{
        width: "100%",
        marginTop: "0.2rem",
        marginBottom: "1.2rem",
        zIndex: 20,
      }}>
        <div style={{
          background: "var(--red)",
          color: "#FFFFFF",
          borderTop: "3px solid var(--navy)",
          borderBottom: "3px solid var(--navy)",
          padding: "0.5rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.8rem",
          transform: "rotate(-0.8deg)",
          boxShadow: "0 6px 12px rgba(11,27,61,0.15)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
            <span className="font-mono" style={{ background: "var(--navy)", color: "#FFFFFF", padding: "2px 10px", fontSize: "0.75rem", fontWeight: 700, border: "1px solid #FFFFFF" }}>
              [ FULLSTACK DEVELOPER &amp; IA ]
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <span className="font-marker" style={{ color: "var(--navy)", fontSize: "1.4rem", lineHeight: 1 }}>
              GEELMZ
            </span>
            <span className="font-mono" style={{ fontSize: "0.65rem", background: "#FFFFFF", color: "var(--navy)", padding: "2px 8px", fontWeight: 900, border: "1px solid var(--navy)" }}>
              ONLINE ●
            </span>
          </div>
        </div>
      </div>

      {/* ══ HERO MAIN CONTENT ══ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2.5rem",
          alignItems: "center",
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          padding: "1rem 1.5rem 3rem",
        }}
        className="lg:!grid-cols-[1.1fr_0.9fr]"
      >

        {/* LEFT COLUMN — BONE, NAVY & BURNT RED TYPOGRAPHY */}
        <div style={{ zIndex: 10, display: "flex", flexDirection: "column", gap: "1.2rem" }}>

          {/* Metadata Stamp */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <span className="sticker-box font-mono">
              V 2.4.0 // STABLE
            </span>
            <span className="font-marker" style={{ color: "var(--red)", fontSize: "1.8rem", transform: "rotate(-3deg)" }}>
              Geelmz = True
            </span>
          </div>

          {/* SOFTWARE IN DEEP NAVY + GEELMZ IN BURNT RED SPRAY OVERLAY */}
          <div style={{ position: "relative" }}>
            <h1 className="font-display" style={{
              fontSize: "clamp(2.6rem, 10vw, 8rem)",
              lineHeight: 0.85,
              letterSpacing: "0.02em",
              color: "var(--navy)",
              textTransform: "uppercase",
              textShadow: "4px 4px 0px rgba(184, 29, 29, 0.3)",
            }}>
              SOFTWARE
            </h1>

            {/* GEELMZ Overlay Tag in Burnt Red Spray */}
            <div className="font-spray" style={{
              fontSize: "clamp(2.5rem, 9.5vw, 7.8rem)",
              color: "var(--red)",
              lineHeight: 0.9,
              transform: "rotate(-6deg) translateY(-18px)",
              WebkitTextStroke: "1.5px var(--navy)",
              textShadow: "4px 4px 0px var(--navy)",
              display: "inline-block",
            }}>
              GEELMZ
            </div>
          </div>

          {/* Subtitle Tag */}
          <div style={{ margin: "0.2rem 0 0.8rem" }}>
            <div className="tag-white font-marker" style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.2rem)", transform: "rotate(-1deg)" }}>
              {t("DESARROLLADOR FULLSTACK & IA // PUEBLA, MÉXICO", "FULLSTACK & AI DEVELOPER // PUEBLA, MEXICO")}
            </div>
          </div>

          {/* Description Card in Navy Blue */}
          <div style={{
            background: "var(--navy)",
            border: "3px solid var(--red)",
            boxShadow: "8px 8px 0px var(--red)",
            padding: "1.5rem",
            position: "relative",
            maxWidth: "620px",
            color: "#FFFFFF",
          }}>
            <div className="font-mono" style={{ fontSize: "0.75rem", color: "var(--red)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ width: 8, height: 8, background: "var(--red)", display: "inline-block" }}></span>
              SOFTWARE_ARCHITECTURE // HIGH_PERFORMANCE
            </div>
            <p style={{ color: "#F4EFE6", fontSize: "0.98rem", lineHeight: 1.65, fontFamily: "var(--font-body)" }}>
              {t(
                "Construyendo infraestructura digital robusta y escalable. Enfoque en backends de alto rendimiento, frontends reactivos y arquitectura moderna que desafía la monotonía corporativa.",
                "Building robust, scalable digital infrastructure. Focusing on high-performance backends, reactive frontends, and modern architecture that challenges corporate monotony."
              )}
            </p>

            <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["[ NODE.JS ]", "[ NESTJS ]", "[ NEXT.JS ]", "[ PYTHON/IA ]", "[ DOCKER ]"].map((tech) => (
                <span key={tech} className="font-mono" style={{ fontSize: "0.7rem", color: "#FFFFFF", background: "#061024", padding: "2px 8px", border: "1px solid var(--red)", fontWeight: 700 }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <a href="#portfolio" className="btn-street-primary">
              {t("EXPLORAR PROYECTOS", "EXPLORE PROJECTS")} <span style={{ fontSize: "1.8rem" }}>→</span>
            </a>
            <Link href="/conoce-de-mi" className="btn-street-secondary">
              {t("CONOCE DE MÍ", "KNOW MORE")} <span className="font-marker" style={{ color: "var(--red)", fontSize: "1.6rem" }}>GEELMZ</span>
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN — PROTAGONIST AVATAR */}
        <div style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          {/* Avatar Navy & Red Frame */}
          <div style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "420px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <div className="font-wild" style={{
              position: "absolute",
              top: "-15px",
              left: "10px",
              color: "var(--red)",
              fontSize: "1.8rem",
              zIndex: 20,
              transform: "rotate(-12deg)",
              textShadow: "2px 2px 0px var(--navy)",
            }}>
              #GEELMZ!!
            </div>

            <div className="font-marker font-bold" style={{
              position: "absolute",
              bottom: "15px",
              right: "10px",
              background: "var(--navy)",
              color: "#FFFFFF",
              border: "2px solid var(--red)",
              padding: "0.2rem 0.6rem",
              fontSize: "1.2rem",
              zIndex: 20,
              transform: "rotate(4deg)",
              boxShadow: "3px 3px 0px var(--red)",
            }}>
              // ONLY ONE //
            </div>

            {/* Avatar Frame */}
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1/1",
              background: "#FFFFFF",
              border: "4px solid var(--navy)",
              boxShadow: "8px 8px 0px var(--red)",
              overflow: "hidden",
              transform: "rotate(-2deg)",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image.png"
                alt="Geelmz / Feelmz Avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: "1rem",
                  filter: "contrast(1.15)",
                }}
              />
            </div>

            {/* Zine Caption */}
            <div className="font-mono" style={{
              marginTop: "1.2rem",
              background: "var(--navy)",
              border: "1px solid var(--red)",
              padding: "0.4rem 0.8rem",
              fontSize: "0.72rem",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.4rem",
              maxWidth: "100%",
            }}>
              <span style={{ color: "var(--red)" }}>[FIG_01]</span> ANGEL GOMEZ GARCIA (GEELMZ)
            </div>
          </div>
        </div>

      </div>

      {/* ══ BOTTOM COLLABORATE BANNER ══ */}
      <div style={{
        background: "var(--navy)",
        borderTop: "3px solid var(--red)",
        padding: "1.5rem 1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        zIndex: 15,
        width: "100%",
        overflow: "hidden",
        color: "#FFFFFF",
      }}>
        <div>
          <h2 className="font-marker" style={{ fontSize: "clamp(1.6rem, 4.5vw, 3rem)", color: "var(--red)", lineHeight: 0.9 }}>
            {t("LET'S COLLABORATE", "LET'S COLLABORATE")}
          </h2>
          <p className="font-mono" style={{ fontSize: "0.7rem", color: "#AAAAAA", marginTop: "0.3rem" }}>
            // DISRUPTING THE DIGITAL LANDSCAPE SINCE 20XX
          </p>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://github.com/Gmzyy" target="_blank" rel="noreferrer" className="font-marker" style={{ fontSize: "1.3rem", color: "#FFFFFF", textDecoration: "none" }}>
            <u>GITHUB_REPOS</u> ↗
          </a>
          <a href="mailto:angelgom042@gmail.com" className="font-marker" style={{ fontSize: "1.3rem", color: "var(--red)", textDecoration: "none" }}>
            <u>EMAIL_ME</u> ↗
          </a>
        </div>
      </div>
    </section>
  )
}
