"use client"

import Head from "next/head"
import dynamic from "next/dynamic"
import TopNavBar            from "@/components/portfolio/TopNavBar"
import HeroSection          from "@/components/portfolio/HeroSection"
import AboutSection         from "@/components/portfolio/AboutSection"
import ExperienceSection    from "@/components/portfolio/ExperienceSection"
import SkillsSection        from "@/components/portfolio/SkillsSection"
import PortfolioSection     from "@/components/portfolio/PortfolioSection"
import EducationSection     from "@/components/portfolio/EducationSection"
import SiteFooter           from "@/components/portfolio/SiteFooter"

// Load canvas-based components client-side only
const BgCanvas   = dynamic(() => import("@/components/portfolio/BgCanvas"),   { ssr: false })
const CursorGlow = dynamic(() => import("@/components/portfolio/CursorGlow"), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>ANGEL GOMEZ GARCIA — Desarrollador Fullstack &amp; IA</title>
        <meta
          name="description"
          content="Angel Gomez Garcia – Desarrollador Fullstack versátil. Fintech (SPEI/2FA), IA (LLMs/SpaCy), NestJS, Next.js, FastAPI, Docker. Puebla, México."
        />
        <meta name="author" content="Angel Gomez Garcia" />
        <meta property="og:title" content="ANGEL GOMEZ GARCIA — Desarrollador Fullstack" />
        <meta property="og:description" content="Construyendo software con precisión y arquitectura real." />
      </Head>

      {/* Background (stars + light streaks) */}
      <BgCanvas />

      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Fixed top navigation */}
      <TopNavBar />

      {/* Main Page Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <PortfolioSection />
        <EducationSection />
      </main>

      {/* Footer */}
      <SiteFooter />
    </>
  )
}
