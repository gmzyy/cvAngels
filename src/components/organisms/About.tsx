import SectionHeader from "../molecules/SectionHeader"
import { Rocket } from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="rounded-2xl p-6 md:p-8"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid rgba(99,102,241,0.1)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      }}
    >
      <SectionHeader title="Sobre mí" sectionNumber="01" />

      <div
        className="flex flex-col gap-5 text-sm leading-relaxed"
        style={{ color: 'var(--text-secondary)' }}
      >
        <p>
          Soy Angel,{" "}
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
            Ingeniero de Software y Full Stack Developer
          </span>{" "}
          de Puebla, México. No me conformo con que &ldquo;funcione&rdquo;: me obsesiona construir sistemas que escalen sin romperse y que realmente ayuden a negocios a crecer.
        </p>

        <p>
          Domino el ecosistema{" "}
          <span className="font-semibold" style={{ color: 'var(--accent-cyan)' }}>TypeScript</span>{" "}
          de punta a punta:{" "}
          <span className="font-semibold" style={{ color: 'var(--accent-violet)', opacity: 0.9 }}>
            Next.js (App Router + Server Components)
          </span>{" "}
          para frontends rápidos y{" "}
          <span className="font-semibold" style={{ color: 'var(--accent-violet)', opacity: 0.9 }}>
            NestJS + Prisma
          </span>{" "}
          para backends limpios y mantenibles. He reducido latencia en MongoDB un{" "}
          <span className="font-bold" style={{ color: 'var(--text-primary)' }}>35%</span>, mejorado LCP un{" "}
          <span className="font-bold" style={{ color: 'var(--text-primary)' }}>20%</span>{" "}
          y automatizado despliegues con Docker y CI/CD.
        </p>

        {/* Highlight block */}
        <div
          className="rounded-xl p-5 flex items-start gap-4"
          style={{
            background: 'rgba(124,58,237,0.06)',
            border: '1px solid rgba(124,58,237,0.2)',
            borderLeft: '3px solid var(--accent-violet)',
          }}
        >
          <Rocket className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-violet)' }} />
          <div>
            <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
              Lo que más me motiva ahora:
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Crear productos production-ready con IA integrada (como en Staicka, mi estudio freelance), optimizar APIs para que respondan en milisegundos y ayudar a startups a lanzar sin dolores técnicos.
            </p>
          </div>
        </div>

        <p className="text-xs italic" style={{ color: 'var(--text-muted)' }}>
          Fuera del código, exploro videojuegos independientes y proyectos creativos que me mantienen pensando diferente.
        </p>
      </div>
    </section>
  )
}