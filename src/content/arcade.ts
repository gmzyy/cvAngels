export interface ProjectItem {
  name: string
  category: 'featured' | 'web'
  image: string
  url: string
  tech: string
  es: string
  en: string
  isExternal?: boolean
  badge?: string
}

export const projects: ProjectItem[] = [
  {
    name: 'Glazzy',
    category: 'featured',
    image: '/glazzy-screenshot.png',
    url: 'https://glazzy.vercel.app/',
    tech: 'Next.js · React · TypeScript · Tailwind CSS · GSAP · ScrollTrigger · UI/UX Design',
    es: 'Plataforma web para marca de joyería streetwear. Co-creación en branding (nombre, logo y paleta junto a diseñadora), liderando de forma integral todo el diseño UI/UX y el desarrollo frontend completo con animaciones fluidas en GSAP y arquitectura moderna en Next.js.',
    en: 'Streetwear jewelry web platform. Collaborative branding (naming, logo and color palette with a designer), leading end-to-end UI/UX design and full frontend development featuring fluid GSAP animations and Next.js.',
    isExternal: true,
    badge: 'Joyería Street / UI·UX & Dev'
  },
  {
    name: 'SaaS STAICKA',
    category: 'featured',
    image: '/staickasaas.png',
    url: 'https://staickaa.vercel.app',
    tech: 'Next.js · TypeScript · Tailwind CSS · Prisma ORM',
    es: 'Plataforma SaaS en arquitectura de monolito modular con persistencia de datos mediante Prisma ORM e interfaz optimizada.',
    en: 'SaaS platform with modular monolith architecture, Prisma ORM data persistence, and high-performance UI.',
    isExternal: true,
    badge: 'SaaS / Modular'
  },
  {
    name: 'Motor de Búsqueda de Talento',
    category: 'featured',
    image: '/talent-search.jpg',
    url: '#portfolio',
    tech: 'Python · SpaCy NLP · FastAPI · Docker',
    es: 'Sistema de análisis inteligente y extracción de currículums (CVs) con procesamiento de lenguaje natural (SpaCy NLP) y API en FastAPI.',
    en: 'Intelligent resume analysis and extraction system using Natural Language Processing (SpaCy NLP) and FastAPI deployed on-premise.',
    isExternal: false,
    badge: 'NLP / On-Premise'
  },
  {
    name: 'Herramienta Interna de Arquitectura',
    category: 'featured',
    image: '/arch-generator.jpg',
    url: '#portfolio',
    tech: 'Node.js · TypeScript · Docker · Modular CLI',
    es: 'Generador y CLI para estandarizar la arquitectura base, setup inicial y configuración automatizada de proyectos web modernos.',
    en: 'Architecture scaffolding generator and CLI automating base structure, initial setups, and Docker configurations for web projects.',
    isExternal: false,
    badge: 'DevTool / Architecture'
  },
  {
    name: 'Barber Angeles',
    category: 'web',
    image: '/barber.png',
    url: 'https://barber-angeles.vercel.app/home',
    tech: 'Next.js · MongoDB · AWS S3',
    es: 'De encontrar tu estilo a reservar tu próxima cita. Catálogo, reservas y gestión multimedia en la nube.',
    en: 'From finding your style to booking your next appointment. Cloud bookings and multimedia management.',
    isExternal: true,
    badge: 'Web App'
  },
  {
    name: 'San Andrés Empaques',
    category: 'web',
    image: '/empaques.png',
    url: 'https://emciel.vercel.app/',
    tech: 'Next.js · React · Tailwind CSS',
    es: 'Un catálogo industrial con un camino directo a la cotización y especificaciones técnicas.',
    en: 'An industrial catalog with a direct path to quotes and technical specifications.',
    isExternal: true,
    badge: 'Commercial'
  },
  {
    name: 'Taller Mecánico Nava',
    category: 'web',
    image: '/tallerMecanico.png',
    url: 'https://nava-opal.vercel.app/',
    tech: 'Next.js · React · Vercel',
    es: 'Servicios automotrices, diagnósticos y contacto sin fricción para clientes locales.',
    en: 'Automotive services, diagnostics, and frictionless contact for local clients.',
    isExternal: true,
    badge: 'Business'
  },
  {
    name: 'EMCiel Nails',
    category: 'web',
    image: '/emciel.png',
    url: 'https://emciel.vercel.app/',
    tech: 'Next.js · React · Tailwind CSS',
    es: 'Diseños de uñas, servicios y reservas para un salón de belleza con experiencia estética.',
    en: 'Designs, services, and online appointments for a modern beauty salon.',
    isExternal: true,
    badge: 'Beauty & Booking'
  },
]

type Translate = (es: string, en: string) => string
export function getExperience(t: Translate) {
  return [
    {
      company: 'Pharos Payments',
      period: 'Ene 2026 – Jul 2026',
      role: t('Desarrollador Full-Stack | FinTech', 'Full-Stack Developer | FinTech'),
      badge: 'FinTech · SPEI · Payments',
      bullets: [
        t(
          'Desarrollé funcionalidades para plataformas FinTech orientadas a pagos, conciliaciones y onboarding digital, trabajando con React/TypeScript, NestJS/Fastify y bases de datos PostgreSQL/MongoDB.',
          'Built features for FinTech platforms focused on payments, reconciliations, and digital onboarding using React/TypeScript, NestJS/Fastify, and PostgreSQL/MongoDB.'
        ),
        t(
          'Implementé autenticación 2FA/TOTP para operaciones críticas y colaboré en la refactorización del motor de consultas SPEI hacia un modelo de filtrado híbrido, centralizando paginación, filtros y búsqueda.',
          'Implemented 2FA/TOTP authentication for critical operations and collaborated on refactoring the SPEI query engine into a hybrid filtering model centralizing pagination, filters, and search.'
        ),
        t(
          'Participé en módulos de conciliación: importación y parseo de CSV, matching de transacciones, tablas con paginación server-side, filtros avanzados y endpoints REST documentados con Swagger/OpenAPI.',
          'Contributed to reconciliation modules: CSV importing and parsing, transaction matching, server-side paginated tables, advanced filters, and REST endpoints documented with Swagger/OpenAPI.'
        ),
        t(
          'Integré AWS S3 mediante Presigned URLs para carga de documentos e imágenes en KYC, con validaciones de archivos y mejoras de compatibilidad entre navegadores.',
          'Integrated AWS S3 via Presigned URLs for KYC document and image uploads, with file validations and cross-browser compatibility enhancements.'
        ),
        t(
          'Apoyé ajustes de esquemas, migraciones e índices con PostgreSQL/TypeORM y MongoDB, además de optimizaciones de React/Next.js enfocadas en rendimiento y flujos CI/CD.',
          'Supported schema adjustments, migrations, and indexes with PostgreSQL/TypeORM and MongoDB, as well as React/Next.js optimizations focused on performance and CI/CD pipelines.'
        )
      ],
      stack: ['React', 'TypeScript', 'NestJS', 'Fastify', 'PostgreSQL', 'MongoDB', 'TypeORM', 'AWS S3', 'SPEI', '2FA/TOTP', 'Swagger/OpenAPI']
    },
    {
      company: 'STAICKA',
      period: t('Nov 2025 – Presente', 'Nov 2025 – Present'),
      role: t('Trabajo de Freelancer | Desarrollador Full-Stack', 'Freelancer | Full-Stack Developer'),
      badge: 'Freelance · SaaS & Architecture',
      bullets: [
        t(
          'Diseño y desarrollo de soluciones web comerciales, combinando sólidos fundamentos en HTML, CSS y Vanilla JavaScript para una maquetación semántica y lógica a medida, escalando a frameworks modernos como Next.js, TypeScript y Tailwind CSS según los requerimientos del proyecto.',
          'Designed and developed commercial web solutions combining solid HTML, CSS, and Vanilla JavaScript foundations for semantic markup and custom logic, scaling to Next.js, TypeScript, and Tailwind CSS.'
        ),
        t(
          'Desarrollo de una plataforma SaaS con arquitectura de monolito modular, integrando el ecosistema de React con persistencia de datos mediante Prisma ORM para lograr fluidez entre el frontend y el backend.',
          'Developed a SaaS platform with modular monolith architecture, integrating the React ecosystem with data persistence via Prisma ORM for seamless frontend-backend harmony.'
        ),
        t(
          'Implementación de interfaces de usuario altamente optimizadas y accesibles, manipulando el DOM directamente con JavaScript puro (Vanilla JS) en módulos específicos para maximizar el rendimiento sin depender de librerías externas.',
          'Implemented highly optimized and accessible user interfaces, manipulating the DOM directly with pure JavaScript (Vanilla JS) in specific modules to maximize performance without external libraries.'
        )
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'Vanilla JS', 'Monolito Modular', 'HTML5/CSS3 Semántico']
    },
    {
      company: 'Soft Tech Solutions',
      period: 'Jul 2024 – Feb 2025',
      role: t('Desarrollador Full-Stack Jr.', 'Full-Stack Developer Jr.'),
      badge: 'Incidencias & Servicios REST',
      bullets: [
        t(
          'Desarrollé módulos web con React/Next.js, TypeScript, NestJS y MongoDB para soporte, gestión y seguimiento de incidencias, implementando CRUD, búsquedas, comentarios y consumo de APIs REST.',
          'Developed web modules using React/Next.js, TypeScript, NestJS, and MongoDB for incident tracking and support, implementing CRUD, search, commenting, and REST API consumption.'
        ),
        t(
          'Participé en arquitectura basada en componentes, integraciones con servicios externos y automatización de flujos; utilicé Docker para estandarizar entornos de desarrollo.',
          'Participated in component-based architecture, third-party integrations, and workflow automation; leveraged Docker to standardize local development environments.'
        )
      ],
      stack: ['React', 'Next.js', 'TypeScript', 'NestJS', 'MongoDB', 'Docker', 'APIs REST', 'CRUD']
    }
  ]

}
export function getStack(t: Translate) {
  return [
    {
      num: '01',
      title: t('Principales', 'Core Technologies'),

      desc: t(
        'Bases sólidas en la web, maquetación semántica, lógica tipada en TypeScript y desarrollo reactivo.',
        'Strong web foundations, semantic layout, type-safe TypeScript logic, and reactive frontend ecosystems.'
      ),
      tags: [
        'HTML',
        'CSS',
        'JavaScript',
        'Vanilla JS',
        'TypeScript',
        'React',
        'Next.js',
        'Tailwind CSS',
        'Node.js',
        'NestJS',
        'Python',
        'C#',
        'Git/GitHub'
      ]
    },
    {
      num: '02',
      title: t('Backend / Datos', 'Backend & Data'),

      desc: t(
        'Arquitecturas modulares, modelado relacional y NoSQL, caché de alta velocidad y contratos OpenAPI/Swagger.',
        'Modular architectures, relational and NoSQL modeling, high-speed caching, and documented OpenAPI/Swagger REST APIs.'
      ),
      tags: [
        'Fastify',
        'TypeORM',
        'Prisma ORM',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Redis',
        'APIs REST',
        'OpenAPI/Swagger'
      ]
    },
    {
      num: '03',
      title: t('Cloud / DevOps / Otros', 'Cloud, DevOps & Systems'),

      desc: t(
        'Contenerización con Docker, almacenamiento seguro S3, pipelines CI/CD y buenas prácticas de ingeniería.',
        'Docker containerization, S3 cloud storage with Presigned URLs, automated CI/CD pipelines, and OOP paradigms.'
      ),
      tags: [
        'AWS S3',
        'Docker',
        'Docker Compose',
        'GitHub Actions (CI/CD)',
        'Flutter',
        'PWA',
        'POO (OOP)',
        'Linux (básico)'
      ]
    },
    {
      num: '04',
      title: t('IA Agéntica y Automatización', 'Agentic AI & Automation'),

      desc: t(
        'Integración de modelos y asistentes agénticos para aceleración del ciclo de desarrollo y automatización de flujos.',
        'Integration of agentic models and automated workflows to accelerate software development and process efficiency.'
      ),
      tags: [
        'Antigravity',
        'Codex',
        'Claude Code',
        'Claude',
        'n8n'
      ]
    }
  ]

}
