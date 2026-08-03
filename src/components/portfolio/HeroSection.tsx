"use client"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        zIndex: 10,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#060606",
        overflow: "hidden",
        paddingTop: "5.5rem",
      }}
    >
      {/* ══ TOP MARQUEE TICKER ══ */}
      <div style={{
        background: "var(--red)",
        color: "#FFFFFF",
        borderTop: "2px solid #FFFFFF",
        borderBottom: "2px solid #FFFFFF",
        padding: "0.4rem 0",
        overflow: "hidden",
        transform: "rotate(-0.8deg) scaleX(1.02)",
        marginTop: "0.5rem",
        zIndex: 20,
      }}>
        <div className="street-ticker-inner font-display" style={{ fontSize: "1.25rem", letterSpacing: "0.1em" }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "1.5rem", paddingRight: "1.5rem" }}>
              <span>FEELMZ // CORE</span>
              <span className="font-marker" style={{ color: "#000", fontSize: "1.6rem" }}>GEELMZ</span>
              <span>STREET FULLSTACK</span>
              <span>PUEBLA, MÉXICO</span>
              <span className="font-tag" style={{ color: "#FFF", textShadow: "1px 1px 0 #000" }}>NO CORPORATE MONOTONY</span>
            </span>
          ))}
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
          padding: "2rem 1.5rem 3rem",
        }}
        className="lg:!grid-cols-[1.1fr_0.9fr]"
      >

        {/* LEFT COLUMN — STREET TYPOGRAPHY IN RED & WHITE */}
        <div style={{ zIndex: 10, display: "flex", flexDirection: "column", gap: "1.2rem" }}>

          {/* Metadata Stamp */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <span className="sticker-box font-mono">
              V 2.4.0 // STABLE
            </span>
            <span className="font-marker" style={{ color: "var(--red)", fontSize: "1.8rem", transform: "rotate(-3deg)" }}>
              Geelmz = True
            </span>
            <span className="font-mono" style={{ fontSize: "0.7rem", color: "var(--grey)", letterSpacing: "0.15em" }}>
              LOCATION: PUEBLA_MX
            </span>
          </div>

          {/* SOFTWARE IN BIG DISPLAY + GEELMZ IN RED GRAFFITI SPRAY */}
          <div style={{ position: "relative" }}>
            <h1 className="font-display" style={{
              fontSize: "clamp(3.8rem, 10vw, 8rem)",
              lineHeight: 0.82,
              letterSpacing: "0.02em",
              color: "#FFFFFF",
              textTransform: "uppercase",
              textShadow: "4px 4px 0px #000000",
            }}>
              SOFTWARE
            </h1>

            {/* GEELMZ Overlay Tag in Real Spray Paint */}
            <div className="font-spray" style={{
              fontSize: "clamp(4rem, 10vw, 7.8rem)",
              color: "var(--red)",
              lineHeight: 0.9,
              transform: "rotate(-6deg) translateY(-30px) translateX(10px)",
              WebkitTextStroke: "1.5px #FFFFFF",
              textShadow: "6px 6px 0px #000000",
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

          {/* Description Card */}
          <div style={{
            background: "#0F0F0F",
            border: "2px solid #FFFFFF",
            boxShadow: "8px 8px 0px var(--red)",
            padding: "1.5rem",
            position: "relative",
            maxWidth: "620px",
          }}>
            <div className="font-mono" style={{ fontSize: "0.75rem", color: "var(--red)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ width: 8, height: 8, background: "var(--red)", display: "inline-block" }}></span>
              SOFTWARE_ARCHITECTURE // INTELLECTUAL STREET
            </div>
            <p style={{ color: "#DDDDDD", fontSize: "0.98rem", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
              {t(
                "Construyendo infraestructura digital robusta y escalable. Enfoque en backends de alto rendimiento, frontends reactivos y estética brutalista street que desafía la monotonía corporativa.",
                "Building robust, scalable digital infrastructure. Focusing on high-performance backends, reactive frontends, and brutalist street aesthetics that challenge corporate monotony."
              )}
            </p>

            <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["[ NODE.JS ]", "[ NESTJS ]", "[ NEXT.JS ]", "[ PYTHON/IA ]", "[ DOCKER ]"].map((tech) => (
                <span key={tech} className="font-mono" style={{ fontSize: "0.7rem", color: "#FFFFFF", background: "#000", padding: "2px 6px", border: "1px solid #333" }}>
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

        {/* RIGHT COLUMN — PROTAGONIST AVATAR (Grillz Illustration /image.png) */}
        <div style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}>
          {/* Background Glow */}
          <div style={{
            position: "absolute",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "var(--red-glow)",
            filter: "blur(60px)",
            zIndex: 1,
          }} />

          {/* Dashed Border */}
          <div style={{
            position: "absolute",
            width: "280px",
            height: "280px",
            border: "3px dashed var(--red)",
            borderRadius: "50%",
            transform: "rotate(15deg)",
            zIndex: 2,
            opacity: 0.6,
          }} />

          {/* Main Portrait Frame */}
          <div style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "420px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            {/* Tag Overlay 1 */}
            <div className="font-wild" style={{
              position: "absolute",
              top: "-15px",
              left: "10px",
              color: "var(--red)",
              fontSize: "1.8rem",
              zIndex: 20,
              transform: "rotate(-12deg)",
              textShadow: "2px 2px 0px #000",
            }}>
              #GEELMZ!!
            </div>

            {/* Tag Overlay 2 */}
            <div className="font-marker font-bold" style={{
              position: "absolute",
              bottom: "20px",
              right: "-10px",
              background: "#000000",
              color: "#FFFFFF",
              border: "2px solid var(--red)",
              padding: "0.3rem 0.9rem",
              fontSize: "1.6rem",
              zIndex: 20,
              transform: "rotate(6deg)",
              boxShadow: "4px 4px 0px var(--red)",
            }}>
              // ONLY ONE //
            </div>

            {/* THE USER'S AVATAR IMAGE */}
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1/1",
              background: "#FFFFFF",
              border: "4px solid #000000",
              boxShadow: "12px 12px 0px var(--red), 12px 12px 0px 4px #000000",
              overflow: "hidden",
              transform: "rotate(-2deg)",
              transition: "transform 0.3s ease",
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

              {/* Red Rayado Lines */}
              <div style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                width: "40px",
                height: "4px",
                background: "var(--red)",
                transform: "rotate(45deg)",
              }} />
              <div style={{
                position: "absolute",
                top: "18px",
                right: "6px",
                width: "40px",
                height: "4px",
                background: "var(--red)",
                transform: "rotate(45deg)",
              }} />
            </div>

            {/* Zine Caption */}
            <div className="font-mono" style={{
              marginTop: "1.2rem",
              background: "#111111",
              border: "1px solid #333333",
              padding: "0.4rem 1rem",
              fontSize: "0.75rem",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              <span style={{ color: "var(--red)" }}>[FIG_01]</span> ANGEL GOMEZ GARCIA (GEELMZ)
            </div>
          </div>
        </div>

      </div>

      {/* ══ BOTTOM COLLABORATE BANNER ══ */}
      <div style={{
        background: "#0F0F0F",
        borderTop: "2px solid #FFFFFF",
        padding: "2rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1.5rem",
        zIndex: 15,
      }}>
        <div>
          <h2 className="font-marker" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--red)", lineHeight: 0.9 }}>
            {t("LET'S COLLABORATE", "LET'S COLLABORATE")}
          </h2>
          <p className="font-mono" style={{ fontSize: "0.75rem", color: "var(--grey)", marginTop: "0.3rem" }}>
            // DISRUPTING THE DIGITAL LANDSCAPE SINCE 20XX
          </p>
        </div>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <a href="https://github.com/Gmzyy" target="_blank" rel="noreferrer" className="font-marker" style={{ fontSize: "1.8rem", color: "#FFFFFF", textDecoration: "none" }}>
            <u>GITHUB_REPOS</u> ↗
          </a>
          <a href="mailto:angelgom042@gmail.com" className="font-marker" style={{ fontSize: "1.8rem", color: "var(--red)", textDecoration: "none" }}>
            <u>EMAIL_ME</u> ↗
          </a>
          <a href="https://www.linkedin.com/in/angel-gomez-59b341350" target="_blank" rel="noreferrer" className="font-marker" style={{ fontSize: "1.8rem", color: "#FFFFFF", textDecoration: "none" }}>
            <u>SOCIALS</u> ↗
          </a>
        </div>
      </div>
    </section>
  )
}
