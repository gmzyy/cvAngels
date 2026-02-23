"use client"

import Button from "../atoms/Button"
import ThemeSwitch from "../atoms/ThemeSwitch"
import { Phone, Mail, Github, Linkedin, Download, Code2 } from "lucide-react"

const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Habilidades", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Educación", href: "#education" },
]

export default function Header() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/CV_Angel_GG.pdf"
    link.download = "CV_Angel_GG.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header className="flex flex-col gap-6">
      {/* Top row: avatar + theme switch */}
      <div className="flex items-start justify-between">
        {/* Avatar */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl text-white flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #4f46e5, #06b6d4)',
            boxShadow: '0 0 20px rgba(124,58,237,0.4), 0 0 40px rgba(124,58,237,0.15)',
          }}
        >
          AG
        </div>
        <ThemeSwitch />
      </div>

      {/* Name + title */}
      <div>
        <h1 className="gradient-name text-4xl xl:text-5xl font-black leading-none tracking-tight">
          Angel Gomez
        </h1>
        <p className="mt-2 text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--accent-cyan)' }}>
          Full Stack Developer
        </p>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Especializado en construir aplicaciones web escalables y APIs robustas con el ecosistema MERN, Next.js y NestJS.
        </p>
      </div>

      {/* Contact links */}
      <div className="flex flex-col gap-2">
        <a
          href="tel:2218226470"
          className="flex items-center gap-2.5 text-xs transition-colors duration-200"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)' }}
        >
          <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--accent-violet)' }} />
          221 822 6470
        </a>
        <a
          href="mailto:angelgom042@gmail.com"
          className="flex items-center gap-2.5 text-xs transition-colors duration-200 break-all"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)' }}
        >
          <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--accent-violet)' }} />
          angelgom042@gmail.com
        </a>
        <a
          href="https://github.com/Gmzyy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 text-xs transition-colors duration-200"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)' }}
        >
          <Github className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--accent-violet)' }} />
          github.com/Gmzyy
        </a>
        <a
          href="https://www.linkedin.com/in/angel-gomez-59b341350"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 text-xs transition-colors duration-200"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)' }}
        >
          <Linkedin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--accent-violet)' }} />
          LinkedIn
        </a>
      </div>

      {/* Divider */}
      <div className="h-px w-full" style={{
        background: 'linear-gradient(90deg, var(--accent-violet), var(--accent-cyan), transparent)',
        opacity: 0.3,
      }} />

      {/* Nav (desktop sidebar) */}
      <nav className="flex flex-col gap-1" aria-label="Secciones del CV">
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.color = 'var(--text-primary)'
              el.style.background = 'rgba(124,58,237,0.08)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.color = 'var(--text-secondary)'
              el.style.background = 'transparent'
            }}
          >
            <Code2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--accent-cyan)' }} />
            {label}
          </a>
        ))}
      </nav>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-3">
        <Button onClick={handleDownloadCV} variant="primary">
          <span className="flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Descargar CV
          </span>
        </Button>
        <Button
          variant="ghost"
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Ver proyectos
        </Button>
      </div>
    </header>
  )
}