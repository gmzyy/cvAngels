import SectionHeader from "../molecules/SectionHeader"
import ProjectCard from "../molecules/ProjectCard"
import { FolderGit2 } from "lucide-react"

const projects = [
  {
    title: "Staicka – Estudio Freelance de Fullstack & IA",
    description:
      "Proyecto fundado y desarrollado por mí. Estudio especializado en desarrollo de software escalable e integración real de IA (LLMs). Incluye productos como VaultNote AI (notas seguras con asistencia inteligente), AI Business Assistant (automatización de procesos) y Secure Auth System. Landing profesional con Next.js + Tailwind CSS, enfoque en arquitectura limpia y cero deuda técnica.",
    tech: ["Next.js", "IA / LLMs", "Tailwind CSS"],
    github: "https://github.com/gmzyy",
    demo: "https://staicka.vercel.app/",
    accentColor: "#7c3aed",
    featured: true,
  },
  {
    title: "AUTH CORE (Identity System)",
    description:
      "Sistema de identidad fullstack dockerizado con NestJS y Prisma. Integración de MySQL y JWT para gestión segura de sesiones, roles y control de acceso. Arquitectura limpia y escalable, listo para producción.",
    tech: ["NestJS", "Prisma", "MySQL", "Docker", "JWT"],
    github: "https://github.com/gmzyy/auth-system-docker",
    accentColor: "#06b6d4",
    featured: false,
  },
  {
    title: "TRELLUNA (API Kanban)",
    description:
      "API REST modular para gestión de tableros Kanban con Node.js + Express + SQL. Validación estricta TypeScript, manejo de workspaces, columnas y tareas. Enfoque en reducción de errores y rendimiento.",
    tech: ["Node.js", "Express", "SQL", "TypeScript"],
    github: "https://github.com/gmzyy/kanban-api",
    accentColor: "#10b981",
    featured: false,
  },
  {
    title: "Barber Management Platform",
    description:
      "Plataforma completa de gestión de citas en tiempo real. Panel administrativo, diseño responsive y experiencia de usuario optimizada. Backend Node/Express + MongoDB con CRUD completo.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Node.js", "Express"],
    github: "https://github.com/gmzyy/BarberAngeles",
    accentColor: "#f59e0b",
    featured: false,
  },
]

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="flex flex-col gap-4">
      <div
        className="rounded-2xl p-6 md:p-8"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid rgba(99,102,241,0.1)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        }}
      >
        <SectionHeader title="Proyectos Destacados" sectionNumber="04" icon={<FolderGit2 className="w-5 h-5" />} />

        {/* Featured card (full width) */}
        <div className="mb-4">
          <ProjectCard {...featured} />
        </div>

        {/* Rest in 2-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}