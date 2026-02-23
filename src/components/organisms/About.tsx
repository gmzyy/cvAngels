import SectionHeader from "../molecules/SectionHeader"
import { Rocket } from "lucide-react"

export default function About() {
  return (
    <section className="mb-14" id="about">
      <SectionHeader title="Sobre mí" />

      <div className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 leading-relaxed text-[1.05rem]">
        
        <p>
          Soy Angel, <span className="font-semibold text-indigo-600 dark:text-indigo-400">Ingeniero de Software y Full Stack Developer</span> de Puebla, México. No me conformo con que "funcione": me obsesiona construir sistemas que escalen sin romperse y que realmente ayuden a negocios a crecer.
        </p>
        
        <p>
          Domino el ecosistema <span className="font-semibold text-gray-900 dark:text-white">TypeScript</span> de punta a punta: <span className="font-semibold text-indigo-600 dark:text-indigo-400">Next.js (App Router + Server Components)</span> para frontends rápidos y <span className="font-semibold text-indigo-600 dark:text-indigo-400">NestJS + Prisma</span> para backends limpios y mantenibles. He reducido latencia en MongoDB un 35%, mejorado LCP un 20% y automatizado despliegues con Docker y CI/CD.
        </p>

        {/* Bloque destacado más personal */}
        <div className="bg-indigo-50/50 dark:bg-indigo-900/10 p-6 rounded-xl border border-indigo-100 dark:border-indigo-800/30 border-l-4 border-l-indigo-500 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-start gap-3">
            <Rocket className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-base font-semibold text-gray-900 dark:text-white mb-1">Lo que más me motiva ahora:</p>
              <p className="text-sm md:text-base">
                Crear productos production-ready con IA integrada (como en Staicka, mi estudio freelance), optimizar APIs para que respondan en milisegundos y ayudar a startups a lanzar sin dolores técnicos.
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-3">
          Fuera del código, exploro videojuegos independientes y proyectos creativos que me mantienen pensando diferente.
        </p>

      </div>
    </section>
  )
}