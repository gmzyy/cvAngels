import SectionHeader from "../molecules/SectionHeader"
import ProjectCard from "../molecules/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="mb-20">
      <SectionHeader title="Proyectos Destacados" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Staicka como proyecto principal / estrella – sin mención a Emir */}
        <ProjectCard
          title="Staicka – Estudio Freelance de Fullstack & IA"
          description="Proyecto fundado y desarrollado por mí. Estudio especializado en desarrollo de software escalable e integración real de IA (LLMs). Incluye productos como VaultNote AI (notas seguras con asistencia inteligente), AI Business Assistant (automatización de procesos con modelos de lenguaje) y Secure Auth System (autenticación dockerizada con detección de amenazas). Landing profesional con Next.js + Tailwind CSS, enfoque en arquitectura limpia, producción-ready y cero deuda técnica."
          tech={["Next.js",  "IA / LLMs", "Tailwind CSS"]}
          github="https://github.com/gmzyy" // Tu perfil principal, o sube un repo específico de Staicka si lo tienes
          link="https://staicka.vercel.app/" // Abre la landing
        />

        <ProjectCard
          title="AUTH CORE (Identity System)"
          description="Sistema de identidad fullstack dockerizado con NestJS y Prisma. Integración de MySQL y JWT para gestión segura de sesiones, roles y control de acceso. Arquitectura limpia y escalable, listo para producción."
          tech={["NestJS", "Prisma", "MySQL", "Docker", "JWT"]}
          github="https://github.com/gmzyy/auth-system-docker"
        />

        <ProjectCard
          title="TRELLUNA (API Kanban)"
          description="API REST modular para gestión de tableros Kanban con Node.js + Express + SQL. Validación estricta TypeScript, manejo de workspaces, columnas y tareas. Enfoque en reducción de errores y rendimiento."
          tech={["Node.js", "Express", "SQL", "TypeScript"]}
          github="https://github.com/gmzyy/kanban-api"
        />

        <ProjectCard
          title="Barber Management Platform"
          description="Plataforma completa de gestión de citas en tiempo real. Panel administrativo, diseño responsive y experiencia de usuario optimizada. Backend Node/Express + MongoDB con CRUD completo."
          tech={["Next.js", "MongoDB", "Tailwind CSS", "Node.js", "Express"]}
          github="https://github.com/gmzyy/BarberAngeles"
        />

      </div>
    </section>
  )
}