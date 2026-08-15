"use client"

import Head from "next/head"
import dynamic from "next/dynamic"
import TopNavBar            from "@/components/portfolio/TopNavBar"
import HeroSection          from "@/components/portfolio/HeroSection"
import AboutSection         from "@/components/portfolio/AboutSection"
import PortfolioSection     from "@/components/portfolio/PortfolioSection"
import SkillsSection        from "@/components/portfolio/SkillsSection"
import ExperienceSection    from "@/components/portfolio/ExperienceSection"
import EducationSection     from "@/components/portfolio/EducationSection"
import SiteFooter           from "@/components/portfolio/SiteFooter"

// Dynamic client-side components
const CursorGlow = dynamic(() => import("@/components/portfolio/CursorGlow"), { ssr: false })
const CaraOjos   = dynamic(() => import("@/components/portfolio/CaraOjos"),   { ssr: false })

import SprayDivider from "@/components/portfolio/SprayDivider"

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

      {/* Interactive Cursor Glow */}
      <CursorGlow />

      {/* Floating Bottom Navigation Dock */}
      <TopNavBar />

      {/* Restructured Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection />
        <SprayDivider color="var(--red)" />

        {/* 2. About / Profile Section */}
        <AboutSection />
        <SprayDivider color="var(--navy)" flip />

        {/* 3. Projects Showcase (Moved upfront!) */}
        <PortfolioSection />
        <SprayDivider color="var(--red)" />

        {/* 4. Tech Stack & Frameworks Interactive 3D Grid */}
        <SkillsSection />
        <SprayDivider color="var(--navy)" flip />

        {/* 5. Work Experience Timeline */}
        <ExperienceSection />
        <SprayDivider color="var(--red)" />

        {/* 6. Education & Certifications */}
        <EducationSection />
      </main>

      {/* Site Footer */}
      <SiteFooter />
    </>
  )
}
