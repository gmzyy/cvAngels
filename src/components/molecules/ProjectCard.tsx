import { Github, ExternalLink } from "lucide-react"

type Props = {
  title: string
  description: string
  image?: string
  tech: string[]
  github: string
  demo?: string
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo
}: Props) {
  return (
    <div className="
      group flex flex-col justify-between h-full
      bg-white dark:bg-gray-800/40 
      border border-gray-100 dark:border-gray-700/50
      rounded-2xl p-6 
      shadow-sm hover:shadow-xl hover:-translate-y-1.5 
      transition-all duration-300 ease-out
    ">
      
      <div>
        <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {tech.map(t => (
            <span
              key={t}
              className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-5 mt-6 pt-4 border-t border-gray-100 dark:border-gray-700/50">
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <Github className="w-4 h-4" />
          Código
        </a>
        
        {demo && (
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        )}
      </div>

    </div>
  )
}