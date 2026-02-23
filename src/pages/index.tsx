"use client"

import { useEffect, useRef, useState } from "react"
import Header from "@/components/organisms/Header"
import About from "@/components/organisms/About"
import Experience from "@/components/organisms/Experience"
import Skills from "@/components/organisms/Skills"
import Projects from "@/components/organisms/Projects"
import Education from "@/components/organisms/Education"

// Spotlight follows the mouse
function SpotlightCursor() {
  const [pos, setPos] = useState({ x: -999, y: -999 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const hide = () => setVisible(false)
    window.addEventListener("mousemove", update)
    window.addEventListener("mouseleave", hide)
    return () => {
      window.removeEventListener("mousemove", update)
      window.removeEventListener("mouseleave", hide)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-0 transition-opacity duration-300"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
        opacity: visible ? 1 : 0,
        willChange: "transform",
      }}
    />
  )
}

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ background: 'var(--bg-root)', color: 'var(--text-primary)' }}>
      <SpotlightCursor />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar */}
          <aside className="lg:w-[300px] xl:w-[340px] flex-shrink-0">
            <div className="lg:sticky lg:top-10">
              <Header />
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 min-w-0 flex flex-col gap-5">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
          </main>

        </div>
      </div>

      <footer
        className="relative z-10 text-center py-8 mt-4"
        style={{ color: 'var(--text-muted)', fontSize: '0.75rem', borderTop: '1px solid var(--border)' }}
      >
        © {new Date().getFullYear()} Angel Gomez
      </footer>
    </div>
  )
}
