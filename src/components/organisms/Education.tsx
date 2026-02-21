import SectionHeader from "../molecules/SectionHeader"
import { Globe, GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section className="mb-14" id="education">
      
      {/* ================= EDUCACIÓN ================= */}
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        <SectionHeader title="Educación" />
      </div>
      
      <div className="space-y-8 mb-12">
        {/* INGENIERÍA */}
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 pl-6">
          <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-indigo-600 dark:bg-indigo-500"></span>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Ingeniería en Software
            </h3>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
              2024 – 2026
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 font-medium text-[1.05rem]">
            Universidad Tecnológica de Puebla (UTP)
          </p>
        </div>

        {/* TSU */}
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 pl-6">
          <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-gray-400 dark:bg-gray-600"></span>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Técnico Superior Universitario (TSU) en Software
            </h3>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
              2022 – 2024
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 font-medium text-[1.05rem]">
            Universidad Tecnológica de Puebla (UTP)
          </p>
        </div>
      </div>

      {/* ================= IDIOMAS ================= */}
      <SectionHeader title="Idiomas" />
      
      <div className="bg-white dark:bg-gray-800/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out group">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-3">
          
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Inglés
            </h3>
          </div>

          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20 w-fit">
            Nivel A2 (Técnico)
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-[0.95rem] leading-relaxed">
          Capacidad sólida para la <strong className="font-semibold text-gray-900 dark:text-white">lectura de documentación técnica</strong>, gestión y resolución de <i className="text-indigo-600 dark:text-indigo-400">issues</i> en repositorios (GitHub), y comunicación escrita efectiva en entornos de desarrollo de software.
        </p>
      </div>

    </section>
  )
}