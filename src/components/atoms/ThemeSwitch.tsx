"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setMounted(true) 
    
    const isDarkMode = 
      localStorage.getItem("theme") === "dark" || 
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      setDark(true)
    } else {
      document.documentElement.classList.remove("dark")
      setDark(false)
    }
  }, [])

  const toggle = () => {
    if (dark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light") 
      setDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark") 
      setDark(true)
    }
  }

  if (!mounted) {
    return <div className="w-[140px] h-[38px] opacity-0"></div> 
  }

  return (
    <button
      onClick={toggle}
      className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm text-gray-700 dark:text-gray-200 flex items-center gap-2"
    >
      {dark ? (
        <>
          <Sun className="w-4 h-4 text-amber-500" /> Modo Claro
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-indigo-500" /> Modo Oscuro
        </>
      )}
    </button>
  )
}