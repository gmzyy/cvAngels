"use client"
import React, { createContext, useContext, useState } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (esText: string, enText: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  t: (es, _en) => es,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("es")

  const t = (esText: string, enText: string) => {
    return lang === "es" ? esText : enText
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
