"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { scaleIn, defaultTransition } from "@/lib/animations"

type Props = {
  title: string
  description: string
  tech: string[]
  github: string
  demo?: string
  link?: string
  featured?: boolean
  accentColor?: string
}

export default function ProjectCard({ title, description, tech, github, demo, link, featured = false }: Props) {
  const demoUrl = link || demo
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2) * -8
    const y = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2) * 8
    setTilt({ x, y })
  }

  return (
    <motion.div
      ref={cardRef}
      className="group flex flex-col justify-between h-full rounded-xl overflow-hidden cursor-default"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      animate={hovered
        ? { rotateX: tilt.x, rotateY: tilt.y, scale: 1.015, borderColor: 'var(--accent)' }
        : { rotateX: 0, rotateY: 0, scale: 1, borderColor: 'var(--border)' }
      }
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }) }}
    >
      {/* Accent strip */}
      <div className="h-0.5 w-full" style={{ background: 'var(--accent)' }} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3
          className={`font-semibold tracking-tight ${featured ? 'text-base' : 'text-sm'}`}
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {tech.map((t, i) => (
            <motion.span
              key={t}
              className="text-[0.65rem] font-medium px-2 py-0.5 rounded"
              style={{
                background: 'var(--accent-soft)',
                color: 'var(--accent)',
                border: '1px solid var(--accent-border)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.2 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-4 px-5 py-3" style={{ borderTop: '1px solid var(--border)' }}>
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium"
          style={{ color: 'var(--text-muted)' }}
          whileHover={{ color: 'var(--accent)', x: 2 }}
        >
          <Github className="w-3.5 h-3.5" />
          Código
        </motion.a>
        {demoUrl && (
          <motion.a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium"
            style={{ color: 'var(--text-muted)' }}
            whileHover={{ color: 'var(--accent)', x: 2 }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}