import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Download,
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  Code2,
  Server,
  Cloud,
  Cpu,
  GraduationCap,
  Languages,
  Briefcase,
  ExternalLink,
  Check
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface ProjectItem {
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

const projects: ProjectItem[] = [
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

function Star({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`ed-star ${className}`}>✳</span>
}

export default function EditorialPortfolio({ personal = false }: { personal?: boolean }) {
  const root = useRef<HTMLDivElement>(null)
  const { t, lang, setLang } = useLanguage()
  const [filter, setFilter] = useState<'all' | 'featured' | 'web'>('all')
  const [copyStatus, setCopyStatus] = useState('')

  const visibleProjects = projects.filter(p => filter === 'all' || p.category === filter)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.ed-word span', {
        yPercent: 110,
        rotation: 8,
        opacity: 0,
        stagger: 0.04,
        duration: 1.05,
        ease: 'power3.out'
      })
      gsap.from('.ed-hero-chips', {
        y: 18,
        opacity: 0,
        duration: 0.8,
        delay: 0.35,
        ease: 'power2.out'
      })
      gsap.from('.ed-hero-bottom', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.45
      })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el => {
        gsap.from(el, {
          y: 45,
          opacity: 0,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 94%',
            once: true
          }
        })
      })
      gsap.utils.toArray<HTMLElement>('.ed-star').forEach(el => {
        gsap.to(el, {
          rotation: 140,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })
      })
      gsap.to('.ed-hero-art', {
        y: 40,
        rotation: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: '.ed-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })
    }, root)

    mm.add('(pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const cleanups: (() => void)[] = []
      root.current?.querySelectorAll<HTMLElement>('[data-magnetic]').forEach(el => {
        const x = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3.out' })
        const y = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3.out' })
        const move = (event: PointerEvent) => {
          const bounds = el.getBoundingClientRect()
          x((event.clientX - bounds.left - bounds.width / 2) * 0.12)
          y((event.clientY - bounds.top - bounds.height / 2) * 0.12)
        }
        const reset = () => { x(0); y(0) }
        el.addEventListener('pointermove', move)
        el.addEventListener('pointerleave', reset)
        cleanups.push(() => {
          el.removeEventListener('pointermove', move)
          el.removeEventListener('pointerleave', reset)
        })
      })
      return () => cleanups.forEach(cleanup => cleanup())
    }, root)

    return () => mm.revert()
  }, [])

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [filter, lang])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('angelgom042@gmail.com')
      setCopyStatus(t('✓ Correo copiado al portapapeles', '✓ Email copied to clipboard'))
    } catch {
      setCopyStatus(t('Escríbeme a: angelgom042@gmail.com', 'Contact me: angelgom042@gmail.com'))
    }
    setTimeout(() => setCopyStatus(''), 4000)
  }

  // Exact tech stack requested
  const techCategories = [
    {
      num: '01',
      title: t('Principales', 'Core Technologies'),
      icon: Code2,
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
      icon: Server,
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
      icon: Cloud,
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
      icon: Cpu,
      desc: t(
        'Integración de modelos y asistentes agénticos para aceleración del ciclo de desarrollo y automatización de flujos.',
        'Integration of agentic models and automated workflows to accelerate software development and process efficiency.'
      ),
      tags: [
        'Antigravity',
        'Codex',
        'Claw Code',
        'Claude',
        'n8n'
      ]
    }
  ]

  // Exact professional experience requested
  const experienceList = [
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

  const heroTitleLetters = (personal ? 'Ángel Gómez' : 'Ángel Gómez').split('')

  return (
    <div className="editorial" ref={root}>
      <Head>
        <title>{`${personal ? t('Sobre mí', 'About me') : 'Ángel Gómez García'} — Frontend / Full-Stack Developer Jr. | React · Next.js · TypeScript · NestJS`}</title>
        <meta
          name="description"
          content="Ángel Gómez García - Frontend / Full-Stack Developer Jr. Especializado en React, Next.js, TypeScript, NestJS, FinTech (SPEI/2FA), bases de datos y Docker/AWS. Puebla, México."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f1eee3" />
      </Head>

      <a className="ed-skip" href="#main">
        {t('Saltar al contenido', 'Skip to content')}
      </a>

      {/* ── Sticky Top Nav ── */}
      <header className="ed-nav">
        <a className="ed-brand" href="#hero">
          angel<span>gómez®</span>
        </a>
        <nav aria-label={t('Navegación principal', 'Main navigation')}>
          <a href="#about">{t('Perfil', 'Profile')}</a>
          <a href="#skills">{t('Tecnologías', 'Skills')}</a>
          <a href="#experience">{t('Experiencia', 'Experience')}</a>
          <a href="#portfolio">{t('Proyectos', 'Projects')}</a>
          <a href="#education">{t('Educación', 'Education')}</a>
          <a href="#contact">
            {t('Contacto', 'Contact')} <ArrowUpRight size={13} />
          </a>
        </nav>
        <button
          className="ed-language"
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          aria-label={t('Switch to English', 'Cambiar a español')}
        >
          {lang.toUpperCase()} <span> / {lang === 'es' ? 'EN' : 'ES'}</span>
        </button>
      </header>

      <main id="main">
        {/* ── HERO SECTION ── */}
        <section className="ed-hero ed-pad" id="hero">
          <div className="ed-eyebrow">
            <span>
              {t(
                'FRONTEND / FULL-STACK DEVELOPER JR. · REACT · NEXT.JS · TYPESCRIPT · NESTJS',
                'FRONTEND / FULL-STACK DEVELOPER JR. · REACT · NEXT.JS · TYPESCRIPT · NESTJS'
              )}
            </span>
            <span>PUEBLA, MÉXICO ↗</span>
          </div>

          <h1 className="ed-word" aria-label="Ángel Gómez García">
            {heroTitleLetters.map((letter, i) => (
              <span aria-hidden="true" key={i}>
                {letter === ' ' ? '\u00a0' : letter}
              </span>
            ))}
          </h1>

          <p className="ed-hero-subtitle">
            {t(
              'Frontend / Full-Stack Developer Jr. | React · Next.js · TypeScript · NestJS',
              'Frontend / Full-Stack Developer Jr. | React · Next.js · TypeScript · NestJS'
            )}
          </p>

          {/* Quick Contact & Network Chips Strip */}
          <div className="ed-hero-chips" aria-label={t('Enlaces rápidos de contacto', 'Quick contact links')}>
            <span className="ed-chip">
              <MapPin size={13} /> Puebla, México
            </span>
            <a className="ed-chip" href="https://wa.me/522218226470" target="_blank" rel="noreferrer">
              <Phone size={13} /> +52 221 822 6470
            </a>
            <a className="ed-chip" href="mailto:angelgom042@gmail.com">
              <Mail size={13} /> angelgom042@gmail.com
            </a>
            <a className="ed-chip" href="https://github.com/Gmzyy" target="_blank" rel="noreferrer">
              <Github size={13} /> GitHub
            </a>
            <a
              className="ed-chip"
              href="https://www.linkedin.com/in/angel-gomez-59b341350"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={13} /> LinkedIn
            </a>
            <a className="ed-chip" href="#portfolio">
              <ExternalLink size={13} /> {t('Portafolio', 'Portfolio')}
            </a>
          </div>

          <div className="ed-hero-stage">
            <div className="ed-hero-note">
              <Star />
              <p>
                {t(
                  'Código con intención.\nArquitectura con carácter.',
                  'Code with intention.\nArchitecture with character.'
                )}
              </p>
            </div>

            <div className="ed-hero-art">
              <Image
                src="/geelmz-logo.png"
                alt="Ángel Gómez - GEELMZ"
                width={1536}
                height={600}
                priority
                sizes="(max-width: 650px) 65vw, 360px"
              />
            </div>

            <div className="ed-hero-intro">
              <span className="ed-hand">¡Hola, soy Ángel!</span>
              <p>
                {t(
                  'Convierto ideas complejas en productos digitales accesibles, de alto rendimiento y arquitectura escalable.',
                  'I turn complex business logic into intuitive, accessible, and high-performance digital products.'
                )}
              </p>
              <a
                className="ed-round"
                href="#about"
                data-magnetic
                aria-label={t('Explorar perfil profesional', 'Explore professional profile')}
              >
                <ArrowDown size={24} />
              </a>
            </div>
          </div>

          <div className="ed-hero-bottom">
            <span>
              ÁNGEL GÓMEZ GARCÍA <span className="ed-muted">/ FULL-STACK DEVELOPER JR.</span>
            </span>
            <a className="ed-cv-link" href="/CV_Angel_GG.pdf" download>
              {t('Descargar CV (PDF)', 'Download CV (PDF)')} <Download size={15} />
            </a>
            <span>{t('PUEBLA, MÉXICO', 'PUEBLA, MEXICO')} © 2026</span>
          </div>
        </section>

        {/* ── PERFIL PROFESIONAL (ABOUT SECTION) ── */}
        <section className="ed-about ed-pad" id="about">
          <div className="ed-section-top">
            <span>01 / {t('PERFIL PROFESIONAL', 'PROFESSIONAL PROFILE')}</span>
            <Star />
          </div>

          <div className="ed-about-grid">
            <h2 data-reveal>
              {t('Detrás', 'Behind')}
              <br />
              {t('del código.', 'the code.')}
              <span className="ed-hand">{t('hay una persona.', 'there’s a person.')}</span>
            </h2>

            <div className="ed-about-copy" data-reveal>
              <p className="ed-lead">
                {t(
                  'Desarrollador Frontend / Full-Stack Jr. con alrededor de 2 años de experiencia en productos web, FinTech y proyectos freelance.',
                  'Frontend / Full-Stack Developer Jr. with ~2 years of experience in web products, FinTech platforms, and freelance solutions.'
                )}
              </p>

              <p>
                {t(
                  'Especializado en React, Next.js y TypeScript, con experiencia backend en Node.js/NestJS, APIs REST, PostgreSQL/MongoDB y despliegues con Docker/AWS.',
                  'Specialized in React, Next.js, and TypeScript, with backend experience in Node.js/NestJS, REST APIs, PostgreSQL/MongoDB, and Docker/AWS deployments.'
                )}
              </p>

              <p>
                {t(
                  'He trabajado en autenticación (2FA/TOTP), conciliaciones y consultas SPEI, carga de archivos con S3 mediante Presigned URLs, paginación server-side, documentación OpenAPI/Swagger y optimización de interfaces.',
                  'Proven track record in 2FA/TOTP authentication, SPEI reconciliations and high-speed queries, S3 Presigned URLs file uploads, server-side pagination, OpenAPI/Swagger documentation, and UI performance optimization.'
                )}
              </p>

              {/* Stat Highlights Cards */}
              <div className="ed-stats-grid">
                <div className="ed-stat-card">
                  <strong>+2 {t('Años', 'Years')}</strong>
                  <span>{t('Experiencia en productos web, FinTech y SaaS', 'Experience across web products, FinTech, & SaaS')}</span>
                </div>
                <div className="ed-stat-card">
                  <strong>Full-Stack</strong>
                  <span>React · Next.js · TypeScript · NestJS · Node</span>
                </div>
                <div className="ed-stat-card">
                  <strong>FinTech</strong>
                  <span>{t('SPEI, conciliaciones, 2FA/TOTP & AWS S3 KYC', 'SPEI, reconciliations, 2FA/TOTP & AWS S3 KYC')}</span>
                </div>
                <div className="ed-stat-card">
                  <strong>Cloud & DB</strong>
                  <span>Docker · PostgreSQL · MongoDB · Prisma · TypeORM</span>
                </div>
              </div>

              <a className="ed-text-link" href="#skills">
                {t('Ver tecnologías y habilidades', 'Explore technologies & skills')} <ArrowDown size={17} />
              </a>
            </div>
          </div>

          {personal && (
            <div className="ed-personal">
              <h3>{t('Fuera del código', 'Beyond the code')}</h3>
              <p>
                {t(
                  'Me interesan el diseño de interfaces, la animación web con GSAP y crear productos propios. Fuera de la pantalla, encuentro inspiración en la filosofía, la psicología humana, la música electrónica y la cultura urbana. Me gusta explorar lugares nuevos y seguir aprendiendo continuamente.',
                  'I am passionate about UI design, web animation with GSAP, and building standalone products. Away from the screen, I find inspiration in philosophy, human psychology, electronic music, and urban culture. Always curious and eager to learn.'
                )}
              </p>
            </div>
          )}

          <div className="ed-about-bottom">
            <span>FRONTEND / FULL-STACK</span>
            <Star />
            <span>FINTECH & SPEI</span>
            <Star />
            <span>{t('IA AGÉNTICA & AUTOMATIZACIÓN', 'AGENTIC AI & AUTOMATION')}</span>
          </div>
        </section>

        {/* ── TECNOLOGÍAS (SKILLS SECTION) ── */}
        <section className="ed-skills ed-pad" id="skills">
          <div className="ed-section-top">
            <span>02 / {t('STACK TECNOLÓGICO', 'TECH STACK')}</span>
            <Star />
          </div>

          <div className="ed-skills-grid">
            <div data-reveal>
              <h2>
                {t('Bases sólidas.', 'Solid foundations.')}
                <br />
                <em>{t('Herramientas modernas.', 'Modern tooling.')}</em>
              </h2>
              <p>
                {t(
                  'Dominio de tecnologías clave organizadas por capas de arquitectura: desde interfaces semánticas y reactivas hasta persistencia de datos, infraestructura cloud y flujos agénticos.',
                  'Mastery of key technologies organized by architectural layers: from semantic and reactive interfaces to data persistence, cloud infrastructure, and agentic workflows.'
                )}
              </p>
            </div>

            <div className="ed-tech-categories" data-reveal>
              {techCategories.map(cat => {
                const IconComponent = cat.icon
                return (
                  <div className="ed-tech-category-card" key={cat.num}>
                    <div className="ed-tech-category-header">
                      <h3>
                        <IconComponent size={20} />
                        {cat.title}
                      </h3>
                      <span className="ed-tech-num">{cat.num} / 04</span>
                    </div>
                    <p>{cat.desc}</p>
                    <div className="ed-tech-tags">
                      {cat.tags.map(tag => (
                        <span className="ed-tech-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCIA PROFESIONAL (EXPERIENCE SECTION) ── */}
        <section className="ed-experience ed-pad" id="experience">
          <div className="ed-section-top">
            <span>03 / {t('EXPERIENCIA PROFESIONAL', 'PROFESSIONAL EXPERIENCE')}</span>
            <span>2024 — 2026</span>
          </div>

          <h2 data-reveal>
            {t('Trayectoria', 'Professional')}
            <br />
            <em>{t('y resultados.', 'journey.')}</em>
          </h2>

          <div className="ed-jobs">
            {experienceList.map(job => (
              <article className="ed-job-item" key={job.company} data-reveal>
                <div className="ed-job-meta">
                  <span className="ed-job-date">{job.period}</span>
                  <span className="ed-job-badge">{job.badge}</span>
                </div>
                <div className="ed-job-content">
                  <h3>{job.company}</h3>
                  <div className="ed-job-role">{job.role}</div>
                  <ul className="ed-job-bullets">
                    {job.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="ed-job-tags">
                    {job.stack.map(st => (
                      <span className="ed-job-tag" key={st}>
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ── EDUCACIÓN E IDIOMAS ── */}
          <div className="ed-edu-lang-wrapper" id="education" data-reveal>
            <div className="ed-edu-lang-grid">
              <div className="ed-edu-column">
                <h4>
                  <GraduationCap size={16} />
                  {t('Educación', 'Education')}
                </h4>

                <div className="ed-edu-item">
                  <h5>
                    {t(
                      'Ingeniería en Desarrollo de software multiplataforma',
                      'Software Multiplatform Development Engineering'
                    )}
                  </h5>
                  <p>Universidad Tecnológica de Puebla (UTP)</p>
                  <span className="ed-edu-period">2024 – 2026 · {t('Concluida', 'Graduated')}</span>
                </div>

                <div className="ed-edu-item">
                  <h5>
                    {t(
                      'TSU en Desarrollo de software multiplataforma',
                      'Associate Degree in Multiplatform Software Development'
                    )}
                  </h5>
                  <p>Universidad Tecnológica de Puebla (UTP)</p>
                  <span className="ed-edu-period">2022 – 2024</span>
                </div>
              </div>

              <div className="ed-lang-column">
                <h4>
                  <Languages size={16} />
                  {t('Idiomas', 'Languages')}
                </h4>

                <div className="ed-lang-item">
                  <div className="ed-lang-item-header">
                    <strong>{t('Inglés', 'English')}</strong>
                    <span>A2 / {t('Técnico', 'Technical')}</span>
                  </div>
                  <p>
                    {t(
                      'Lectura de documentación oficial, compresión técnica y especificaciones de APIs sin fricción.',
                      'Fluent reading of technical documentation, RFCs, and API specifications.'
                    )}
                  </p>
                </div>

                <div className="ed-lang-item">
                  <div className="ed-lang-item-header">
                    <strong>{t('Español', 'Spanish')}</strong>
                    <span>{t('Nativo', 'Native')}</span>
                  </div>
                  <p>{t('Lengua materna y comunicación fluida.', 'Native language and fluent communication.')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROYECTOS DESTACADOS (PORTFOLIO SECTION) ── */}
        <section className="ed-work ed-pad" id="portfolio">
          <div className="ed-section-top">
            <span>04 / {t('PROYECTOS DESTACADOS', 'FEATURED PROJECTS')}</span>
            <span>PORTFOLIO</span>
          </div>

          <div className="ed-work-heading" data-reveal>
            <h2>
              {t('Proyectos', 'Featured')}
              <br />
              <em>{t('destacados.', 'projects.')}</em>
            </h2>
            <p>
              {t(
                'Soluciones reales en producción: arquitecturas SaaS, procesamiento NLP on-premise, DevTools e interfaces comerciales.',
                'Real-world systems: SaaS architectures, on-premise NLP processing, developer tooling, and commercial web platforms.'
              )}
            </p>
          </div>

          <div className="ed-filters" aria-label={t('Filtrar proyectos', 'Filter projects')}>
            <button
              aria-pressed={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              {t('Todos', 'All')}
              <span>07</span>
            </button>
            <button
              aria-pressed={filter === 'featured'}
              onClick={() => setFilter('featured')}
            >
              {t('Destacados (SaaS & IA)', 'Featured (SaaS & AI)')}
              <span>03</span>
            </button>
            <button
              aria-pressed={filter === 'web'}
              onClick={() => setFilter('web')}
            >
              {t('Web Comercial', 'Commercial Web')}
              <span>04</span>
            </button>
          </div>

          <span className="ed-sr" role="status">
            {visibleProjects.length} {t('proyectos', 'projects')}
          </span>

          <div className="ed-projects">
            {visibleProjects.map((p, idx) => (
              <article className="ed-project" key={p.name} data-reveal>
                <a
                  className="ed-project-image"
                  href={p.url}
                  target={p.isExternal ? '_blank' : '_self'}
                  rel="noreferrer"
                  aria-label={`${t('Abrir', 'Open')} ${p.name}`}
                >
                  <Image
                    src={p.image}
                    alt={`${t('Vista de', 'Preview of')} ${p.name}`}
                    width={1200}
                    height={750}
                    sizes="(max-width: 650px) 90vw, 45vw"
                  />
                  <span className="ed-project-open">
                    {p.isExternal ? (
                      <>
                        {t('Ver en vivo', 'View live')} <ArrowUpRight size={18} />
                      </>
                    ) : (
                      <>
                        {t('Detalles', 'Details')} <ArrowDown size={18} />
                      </>
                    )}
                  </span>
                </a>

                <div className="ed-project-title">
                  <h3>{p.name}</h3>
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                </div>

                <p>{t(p.es, p.en)}</p>
                <span className="ed-tech">{p.tech}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* ── FOOTER & CONTACT SECTION ── */}
      <footer className="ed-contact ed-pad" id="contact">
        <div className="ed-section-top">
          <span>{t('¿TIENES UN PROYECTO O VACANTE EN MENTE?', 'HAVE A PROJECT OR ROLE IN MIND?')}</span>
          <Star />
        </div>

        <a className="ed-contact-title" href="mailto:angelgom042@gmail.com" data-magnetic>
          {t('Hagámosla', 'Let’s make')}
          <br />
          <em>{t('realidad.', 'it happen.')}</em>
          <ArrowUpRight />
        </a>

        <div className="ed-contact-links">
          <a href="mailto:angelgom042@gmail.com">
            <Mail size={16} /> angelgom042@gmail.com <ArrowUpRight size={16} />
          </a>
          <button onClick={copyEmail}>
            <Check size={14} style={{ display: 'inline', marginRight: 4 }} />
            {t('Copiar correo', 'Copy email')}
          </button>
          <a href="https://wa.me/522218226470" target="_blank" rel="noreferrer">
            <Phone size={16} /> WhatsApp (+52 221 822 6470) <ArrowUpRight size={16} />
          </a>
          <a href="https://github.com/Gmzyy" target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub <ArrowUpRight size={16} />
          </a>
          <a href="https://www.linkedin.com/in/angel-gomez-59b341350" target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn <ArrowUpRight size={16} />
          </a>
          <a href="/CV_Angel_GG.pdf" download>
            <Download size={16} /> {t('Descargar CV (PDF)', 'Download CV (PDF)')}
          </a>
        </div>

        <p role="status" className="ed-copy-status">
          {copyStatus}
        </p>

        <div className="ed-footer-bottom">
          <span>© 2026 ÁNGEL GÓMEZ GARCÍA · FULL-STACK DEVELOPER JR.</span>
          <span>PUEBLA, MÉXICO</span>
          <a href="#hero">
            {t('Volver arriba', 'Back to top')} <ArrowUp size={16} />
          </a>
        </div>
      </footer>
    </div>
  )
}
