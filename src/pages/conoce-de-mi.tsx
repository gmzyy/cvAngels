"use client"

import Head from "next/head"
import Link from "next/link"

const Icons = {
  ArrowLeft: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  ),
  Layout: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  Sparkles: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  ),
  Brain: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5a3 3 0 10-5.997.125 4 4 0 00-2.526 5.77 4 4 0 00.556 6.588A4 4 0 1011 20v-5a1 1 0 011-1M12 5a3 3 0 115.997.125 4 4 0 012.526 5.77 4 4 0 01-.556 6.588A4 4 0 1113 20v-5a1 1 0 00-1-1" />
    </svg>
  ),
  BookOpen: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 04-4 4v14a3 3 0 013-3h7z" />
    </svg>
  ),
  Music: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18V5l12-2v13M9 9l12-2" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  MapPin: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Rocket: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.79-1.81l-1.98-1.98s-1.1.08-1.81.79zM12 15l-3-3m5.5-2.5l-3-3M15 3a9 9 0 016.36 15.36L15 12V3z" />
    </svg>
  ),
  Mail: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  MessageSquare: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
}

export default function ConoceDeMiPage() {
  const intereses = [
    { IconComponent: Icons.Layout, label: "Diseño de interfaces (UI) y experiencias digitales." },
    { IconComponent: Icons.Sparkles, label: "Animaciones e interacción para la web." },
    { IconComponent: Icons.Brain, label: "Desarrollo personal." },
    { IconComponent: Icons.BookOpen, label: "Filosofía y reflexión." },
    { IconComponent: Icons.Music, label: "Música." },
    { IconComponent: Icons.MapPin, label: "Conocer nuevos lugares y vivir experiencias." },
    { IconComponent: Icons.Rocket, label: "Crear productos y proyectos propios." },
  ]

  return (
    <>
      <Head>
        <title>Más allá del desarrollo — Angel Gomez Garcia</title>
        <meta
          name="description"
          content="Un vistazo personal a mi visión, valores, intereses y filosofía de vida."
        />
      </Head>

      <div style={{ background: "#FDFBF7", color: "#1C1C1E", minHeight: "100vh" }}>

        {/* Top Header */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(253, 251, 247, 0.9)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
            padding: "1.2rem clamp(1.25rem, 5vw, 4rem)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              textDecoration: "none",
              color: "#1C1C1E",
              fontSize: "0.82rem",
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span style={{ color: "#c9184a", display: "flex", alignItems: "center" }}>
              <Icons.ArrowLeft />
            </span>
            <span>Volver al inicio</span>
          </Link>

          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem", fontWeight: 700, fontStyle: "italic", color: "#8B1A2B" }}>
            Angel Gomez Garcia
          </span>
        </header>

        {/* Main Editorial Body */}
        <main style={{ maxWidth: 780, margin: "0 auto", padding: "4.5rem clamp(1.25rem, 5vw, 2.5rem)" }}>

          {/* Cursive / Editorial Hero Title */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.5rem, 5.5vw, 4rem)",
              fontWeight: 900,
              fontStyle: "italic",
              lineHeight: 1.12,
              color: "#111111",
              letterSpacing: "-0.02em",
            }}>
              Más allá del desarrollo
            </h1>
            <div style={{ width: 60, height: 3, background: "#c9184a", marginTop: "1.5rem", borderRadius: 2 }} />
          </section>

          {/* Personal Essay / Story */}
          <section
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(1.02rem, 1.8vw, 1.12rem)",
              color: "#2C2C2E",
              lineHeight: 1.9,
              fontWeight: 400,
              display: "flex",
              flexDirection: "column",
              gap: "1.6rem",
              marginBottom: "4.5rem",
            }}
          >
            <p>
              Para mí, desarrollar software va mucho más allá de escribir código. Es una forma de crear, resolver problemas y convertir ideas en experiencias que las personas puedan disfrutar.
            </p>
            <p>
              También me interesa entender cómo funciona la mente humana. Disfruto leer y reflexionar sobre psicología, filosofía y desarrollo personal porque creo que crecer profesionalmente también implica crecer como persona. Me gusta cuestionar mis propias ideas, aprender de los errores y mantener una mentalidad de mejora constante.
            </p>
            <p>
              La música ocupa un lugar importante en mi vida. Me acompañan canciones que transmiten emociones, cuentan historias y me inspiran a seguir adelante. Muchas veces una buena canción es suficiente para despejar mi mente o encontrar motivación.
            </p>
            <p>
              Otra de mis pasiones es el diseño de interfaces. Me gusta crear experiencias limpias, modernas y visualmente atractivas. Disfruto cuidar los pequeños detalles, desde la tipografía y los colores hasta las animaciones y la interacción con el usuario. Creo que un buen software también debe sentirse agradable de usar.
            </p>
            <p>
              Fuera del trabajo valoro mucho el tiempo con mi familia, mi pareja y mis amigos. Disfruto salir al cine, conocer lugares nuevos, compartir buenos momentos y crear recuerdos con las personas que más quiero. Son esas experiencias las que me recuerdan que el éxito también se mide por la vida que construimos fuera del trabajo.
            </p>
          </section>

          {/* Intereses */}
          <section style={{ marginBottom: "4.5rem" }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              fontStyle: "italic",
              color: "#111111",
              marginBottom: "2rem",
            }}>
              Mis intereses
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {intereses.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.06)",
                    borderRadius: 12,
                    padding: "1.1rem 1.4rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    boxShadow: "0 6px 16px -6px rgba(0,0,0,0.03)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <span style={{ color: "#c9184a", display: "flex", alignItems: "center", flexShrink: 0 }}>
                    <item.IconComponent />
                  </span>
                  <span style={{ fontSize: "0.98rem", fontWeight: 500, color: "#1C1C1E" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Mi Filosofía — Cursive Card */}
          <section
            style={{
              background: "#18181B",
              color: "#FFFFFF",
              borderRadius: 20,
              padding: "clamp(2.2rem, 5vw, 3.5rem)",
              marginBottom: "5rem",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            }}
          >
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#e8225a",
              display: "block",
              marginBottom: "1.2rem",
            }}>
              Mi Filosofía
            </span>
            <blockquote style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.65,
              color: "#F4F4F5",
              borderLeft: "3px solid #c9184a",
              paddingLeft: "1.4rem",
              margin: 0,
            }}>
              “Quiero que mi trabajo hable por mí. Cada proyecto, cada error y cada aprendizaje son un paso más hacia la persona y el profesional que quiero llegar a ser.”
            </blockquote>
          </section>

          {/* Contacto Llamativo — HASTA ABAJO */}
          <section
            id="contacto"
            style={{
              background: "linear-gradient(135deg, #18181B 0%, #09090B 100%)",
              color: "#FFFFFF",
              borderRadius: 22,
              padding: "clamp(2.5rem, 5vw, 4rem)",
              textAlign: "center",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
              border: "1px solid rgba(201,24,74,0.3)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)",
              width: "400px", height: "300px",
              background: "radial-gradient(circle, rgba(201,24,74,0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 2 }}>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 900,
                fontStyle: "italic",
                color: "#FFFFFF",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                marginBottom: "1.2rem",
              }}>
                ¿Buscas a un desarrollador comprometido o tienes un proyecto en mente?
              </h2>

              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
                color: "#D4D4D8",
                maxWidth: 640,
                margin: "0 auto",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
                fontWeight: 400,
              }}>
                Si necesitas a alguien que se ponga la camiseta, resuelva problemas reales sin dar excusas y entregue trabajo de máxima calidad, mándame un mensaje hoy mismo.
              </p>

              <div style={{ display: "flex", gap: "1.2rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="https://wa.me/522219156631"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    padding: "0.95rem 2.2rem",
                    background: "#c9184a",
                    color: "#FFFFFF",
                    borderRadius: 999,
                    fontWeight: 800,
                    fontSize: "0.88rem",
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "none",
                    boxShadow: "0 10px 25px rgba(201,24,74,0.35)",
                    transition: "transform 0.2s, background 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <Icons.MessageSquare />
                  <span>Mándame mensaje por WhatsApp</span>
                </a>

                <a
                  href="mailto:angelgom042@gmail.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    padding: "0.95rem 2.2rem",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#FFFFFF",
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "none",
                    backdropFilter: "blur(8px)",
                    transition: "transform 0.2s, background 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <Icons.Mail />
                  <span>Enviar Correo Directo</span>
                </a>
              </div>
            </div>
          </section>

        </main>

        {/* Simple Footer */}
        <footer style={{ borderTop: "1px solid rgba(0,0,0,0.06)", padding: "2.5rem 1.5rem", textAlign: "center", fontSize: "0.78rem", color: "#71717A", fontFamily: "'Inter', sans-serif" }}>
          © {new Date().getFullYear()} Angel Gomez Garcia · Puebla, México
        </footer>

      </div>
    </>
  )
}
