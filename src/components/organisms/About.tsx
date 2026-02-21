import SectionHeader from "../molecules/SectionHeader"
import { Rocket } from "lucide-react"

export default function About() {
  return (
    <section className="mb-14" id="about">
      <SectionHeader title="Sobre mí" />

      <div className="flex flex-col gap-5 text-gray-700 dark:text-gray-300 leading-relaxed text-[1.05rem]">
        
        <p>
          Soy un <span className="font-semibold text-indigo-600 dark:text-indigo-400">Ingeniero de Software & Full Stack Developer</span> apasionado por la eficiencia. Mi enfoque no es solo "hacer que funcione", sino construir arquitecturas mantenibles dentro del ecosistema <span className="font-semibold text-gray-900 dark:text-white">TypeScript</span>.
        </p>
        
        <p>
          Me especializo en arquitecturas modernas utilizando <span className="font-semibold text-indigo-600 dark:text-indigo-400">Next.js (App Router)</span> para interfaces de alto rendimiento y servicios backend modulares con <span className="font-semibold text-indigo-600 dark:text-indigo-400">NestJS y Prisma</span>. Tengo experiencia comprobable optimizando consultas a bases de datos (SQL/NoSQL) y automatizando flujos de despliegue con CI/CD y Docker.
        </p>

        {/* Bloque de experiencia técnica destacada sin emojis y con diseño premium */}
        <div className="bg-indigo-50/50 dark:bg-indigo-900/10 p-5 rounded-xl border border-indigo-100 dark:border-indigo-800/30 border-l-4 border-l-indigo-500 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-start gap-3">
            {/* Ícono de Lucide reemplazando al emoji */}
            <Rocket className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
            
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white font-semibold">Enfoque actual:</strong> Reducción de latencia en APIs, implementación de patrones de diseño escalables y mejora de métricas Core Web Vitals.
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-2">
          Cuando no estoy optimizando servidores o diseñando APIs REST, aplico mi lógica en el desarrollo de videojuegos independientes y proyectos creativos.
        </p>

      </div>
    </section>
  )
}