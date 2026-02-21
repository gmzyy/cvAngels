import SectionHeader from "../molecules/SectionHeader"
import ProjectCard from "../molecules/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="mb-20">
      <SectionHeader title="Proyectos Destacados" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <ProjectCard
          title="AUTH CORE (Identity System)"
          description="Sistema de identidad dockerizado. Integración de MySQL y JWT para la gestión segura de sesiones y control de acceso basado en roles con una arquitectura limpia."
          tech={["NestJS", "Prisma", "MySQL", "Docker", "JWT"]}
          github="https://github.com/Gmzyy/tu-repo-auth-core"
        />

        <ProjectCard
          title="TRELLUNA (API Kanban)"
          description="API REST modular para la gestión de tableros. Implementación de esquemas relacionales en SQL para workspaces y validación estricta de datos para reducir errores en tiempo de ejecución."
          tech={["Node.js", "Express", "SQL", "TypeScript"]}
          github="https://github.com/Gmzyy/tu-repo-trelluna"
        />

        <ProjectCard
          title="Barber Management Platform"
          description="Solución integral para gestión de citas en tiempo real. Implementación de panel administrativo y diseño responsivo enfocado en la experiencia de usuario final."
          tech={["Next.js", "MongoDB", "Tailwind CSS"]}
          github="https://github.com/Gmzyy/tu-repo-barberia"
        />

        
      </div>
    </section>
  )
}