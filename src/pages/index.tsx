import Header from "@/components/organisms/Header"
import About from "@/components/organisms/About"
import Experience from "@/components/organisms/Experience"
import Skills from "@/components/organisms/Skills"
import Projects from "@/components/organisms/Projects"
import Education from "@/components/organisms/Education"

export default function Home() {
  return (
    <div className="noise-bg min-h-screen" style={{ background: 'var(--bg-root)', color: 'var(--text-primary)' }}>
      {/* Radial glow background orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 -right-60 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── Sidebar (sticky on desktop) ────────────────────── */}
          <aside className="lg:w-[320px] xl:w-[360px] flex-shrink-0">
            <div className="lg:sticky lg:top-10">
              <Header />
            </div>
          </aside>

          {/* ── Main content ────────────────────────────────────── */}
          <main className="flex-1 min-w-0 flex flex-col gap-6">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
          </main>

        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 mt-4" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          © {new Date().getFullYear()} Angel Gomez · Hecho con Next.js
        </span>
      </footer>
    </div>
  )
}
