"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("theme")
    // Default to dark if no preference stored
    const isDark = stored === "dark" || (!stored)
    applyTheme(isDark)
    setDark(isDark)
  }, [])

  const applyTheme = (isDark: boolean) => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
      root.classList.remove("light")
    } else {
      root.classList.remove("dark")
      root.classList.add("light")
    }
  }

  const toggle = () => {
    const next = !dark
    applyTheme(next)
    localStorage.setItem("theme", next ? "dark" : "light")
    setDark(next)
  }

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full opacity-0" />
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        background: 'rgba(99,102,241,0.12)',
        border: '1px solid rgba(99,102,241,0.25)',
        color: dark ? '#fbbf24' : '#7c3aed',
        boxShadow: dark ? '0 0 12px rgba(251,191,36,0.15)' : '0 0 12px rgba(124,58,237,0.15)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(99,102,241,0.22)'
          ; (e.currentTarget as HTMLButtonElement).style.transform = 'rotate(15deg) scale(1.1)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(99,102,241,0.12)'
          ; (e.currentTarget as HTMLButtonElement).style.transform = 'rotate(0deg) scale(1)'
      }}
    >
      {dark
        ? <Sun className="w-4 h-4" />
        : <Moon className="w-4 h-4" />
      }
    </button>
  )
}