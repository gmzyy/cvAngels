"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Button from "../atoms/Button"
import ThemeSwitch from "../atoms/ThemeSwitch"
import { Phone, Mail, Github, Linkedin, Download, ChevronRight } from "lucide-react"
import { fadeUp, staggerContainer, slideInLeft, fastTransition, springTransition } from "@/lib/animations"

const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Habilidades", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Educación", href: "#education" },
]

const contactLinks = [
  { icon: Phone, label: '221 822 6470', href: 'tel:2218226470' },
  { icon: Mail, label: 'angelgom042@gmail.com', href: 'mailto:angelgom042@gmail.com' },
  { icon: Github, label: 'github.com/Gmzyy', href: 'https://github.com/Gmzyy', external: true },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/angel-gomez-59b341350', external: true },
]

// Typewriter component
function Typewriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) return
    const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 60)
    return () => clearTimeout(t)
  }, [started, displayed, text])

  return (
    <span>
      {displayed}
      <AnimatePresence>
        {displayed.length < text.length && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block ml-0.5 w-0.5 h-3 rounded-sm align-middle"
            style={{ background: 'var(--accent)' }}
          />
        )}
      </AnimatePresence>
    </span>
  )
}

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
    <motion.header
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-6"
    >
      {/* Avatar + theme switch */}
      <motion.div variants={fadeUp} transition={fastTransition} className="flex items-start justify-between">
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg text-white select-none"
          style={{ background: 'var(--accent)' }}
          whileHover={{ scale: 1.06, rotate: 3 }}
          whileTap={{ scale: 0.96 }}
          transition={springTransition}
        >
          AG
        </motion.div>
        <ThemeSwitch />
      </motion.div>

      {/* Name */}
      <motion.div variants={fadeUp} transition={{ ...fastTransition, delay: 0.05 }}>
        <h1 className="gradient-name text-3xl xl:text-4xl font-black leading-tight tracking-tight">
          Angel Gomez
        </h1>
        <p className="mt-1.5 text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--accent)', minHeight: '1em' }}>
          <Typewriter text="Full Stack Developer" delay={400} />
        </p>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Especializado en construir aplicaciones web escalables y APIs robustas con MERN, Next.js y NestJS.
        </p>
      </motion.div>

      <motion.hr variants={fadeUp} transition={{ ...fastTransition, delay: 0.1 }} style={{ borderColor: 'var(--border)', borderTopWidth: '1px' }} />

      {/* Contact links */}
      <motion.div variants={staggerContainer} className="flex flex-col gap-2">
        {contactLinks.map(({ icon: Icon, label, href, external }, i) => (
          <motion.a
            key={href}
            href={href}
            variants={slideInLeft}
            transition={{ ...fastTransition, delay: i * 0.05 }}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="flex items-center gap-2.5 text-xs break-all"
            style={{ color: 'var(--text-muted)' }}
            whileHover={{ x: 4, color: 'var(--text-primary)' }}
          >
            <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
            {label}
          </motion.a>
        ))}
      </motion.div>

      <motion.hr variants={fadeUp} style={{ borderColor: 'var(--border)', borderTopWidth: '1px' }} />

      {/* Nav */}
      <motion.nav variants={staggerContainer} className="flex flex-col gap-0.5" aria-label="Secciones">
        {navLinks.map(({ label, href }, i) => (
          <motion.a
            key={href}
            href={href}
            variants={fadeUp}
            transition={{ ...fastTransition, delay: i * 0.04 }}
            className="flex items-center gap-2 px-2 py-2 rounded-lg text-sm"
            style={{ color: 'var(--text-secondary)' }}
            whileHover={{
              x: 6,
              color: 'var(--text-primary)',
              backgroundColor: 'var(--accent-soft)',
            }}
          >
            <ChevronRight className="w-3 h-3 opacity-50" style={{ color: 'var(--accent)' }} />
            {label}
          </motion.a>
        ))}
      </motion.nav>

      {/* Buttons */}
      <motion.div variants={fadeUp} transition={{ ...fastTransition, delay: 0.3 }} className="flex flex-col gap-2.5">
        <Button onClick={handleDownloadCV} variant="primary">
          <span className="flex items-center justify-center gap-2">
            <Download className="w-3.5 h-3.5" />
            Descargar CV
          </span>
        </Button>
        <Button
          variant="ghost"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          Ver proyectos
        </Button>
      </motion.div>
    </motion.header>
  )
}