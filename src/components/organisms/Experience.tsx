import SectionHeader from "../molecules/SectionHeader"

export default function Experience() {
  return (
    <section className="mb-14" id="experience">
      <SectionHeader title="Experiencia Laboral" />

      <div className="space-y-10"> 
        
        {/* ================= SOFTECH ================= */}
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 pl-6">
          <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Full Stack Developer <span className="text-blue-600 dark:text-blue-400 font-semibold">@ Softech</span>
            </h3>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
              Julio 2024 – Febrero 2025
            </span>
          </div>
          
          <ul className="mt-4 list-disc ml-4 space-y-2 text-gray-700 dark:text-gray-300 text-[0.95rem]">
            <li>
              Optimizé el rendimiento del backend reduciendo la <strong className="font-semibold text-gray-900 dark:text-white">latencia de consultas en MongoDB en un 35%</strong> mediante el rediseño de esquemas e índices.
            </li>
            <li>
              Implementé componentes con Next.js App Router logrando una mejora del <strong className="font-semibold text-gray-900 dark:text-white">20% en las métricas de LCP</strong> (Largest Contentful Paint).
            </li>
            <li>
              Automaticé pipelines de CI/CD para despliegues en producción, incrementando la <strong className="font-semibold text-gray-900 dark:text-white">velocidad de entrega de nuevas funcionalidades en un 15%</strong>.
            </li>
          </ul>
        </div>

        {/* ================= QUAVANTI ================= */}
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 pl-6">
          <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Software Developer Jr <span className="text-indigo-600 dark:text-indigo-400 font-semibold">@ Quavanti Innovación Digital</span>
            </h3>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
              Julio 2025 – Septiembre 2025
            </span>
          </div>
          
          <ul className="mt-4 list-disc ml-4 space-y-2 text-gray-700 dark:text-gray-300 text-[0.95rem]">
            <li>
              Desarrollé y mantuve módulos MVC utilizando <strong className="font-semibold text-gray-900 dark:text-white">C# / .NET Core</strong>, garantizando la consistencia de datos en bases MySQL.
            </li>
            <li>
              Participé en revisiones de código y ceremonias <strong className="font-semibold text-gray-900 dark:text-white">Scrum</strong> para asegurar la calidad del software y el cumplimiento de entregas.
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}