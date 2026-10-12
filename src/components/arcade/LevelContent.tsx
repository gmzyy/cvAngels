import { useState } from 'react'
import { getStack } from '@/content/arcade'
import { useLanguage } from '@/context/LanguageContext'
import { Level } from '@/lib/arcade/motion'
import ProjectSelector from './ProjectSelector'
import ExperienceViewer from './ExperienceViewer'

export default function LevelContent({ level, reduced }: { level: Level; reduced: boolean }) {
  const { t } = useLanguage()
  const [item, setItem] = useState('React')
  const [copied, setCopied] = useState('')

  if (level === 'perfil') {
    return (
      <div className="arc-profile">
        <div className="arc-prose" data-enter>
          <span className="arc-script">{t('hay una persona.', 'there’s a person.')}</span>
          <p className="arc-lead">
            {t(
              'Soy Ángel, desarrollador Frontend / Full-Stack Jr. de Puebla, México.',
              'I’m Ángel, a Frontend / Full-Stack Developer Jr. from Puebla, Mexico.'
            )}
          </p>
          <p>
            {t(
              'Tengo alrededor de dos años de experiencia construyendo productos web, soluciones FinTech y proyectos freelance. Especializado en React, Next.js y TypeScript, con experiencia backend en Node.js/NestJS, APIs REST, PostgreSQL/MongoDB y despliegues con Docker/AWS. He trabajado en autenticación (2FA/TOTP), conciliaciones y consultas SPEI, carga de archivos con S3 mediante Presigned URLs, paginación server-side, documentación OpenAPI/Swagger y optimización de interfaces.',
              'I have around two years of experience building web products, FinTech solutions, and freelance projects. Specialized in React, Next.js, and TypeScript, with backend experience in Node.js/NestJS, REST APIs, PostgreSQL/MongoDB, and Docker/AWS deployments. Proven track record in 2FA/TOTP authentication, SPEI reconciliations & queries, S3 Presigned URLs file uploads, server-side pagination, OpenAPI/Swagger documentation, and UI performance optimization.'
            )}
          </p>
          <p>
            {t(
              'Fuera del código: filosofía, música electrónica, cultura urbana y curiosidad constante por aprender algo nuevo.',
              'Beyond code: philosophy, electronic music, urban culture, and constant curiosity to learn something new.'
            )}
          </p>
          <a className="pixel-button" href="/CV_Angel_GG.pdf" download>
            {t('↓ Descargar CV (PDF)', '↓ Download CV (PDF)')}
          </a>
        </div>
        <div className="arc-stats">
          {[
            ['+2', t('Años de experiencia web, FinTech y freelance', 'Years of experience in web, FinTech & freelance')],
            ['Full-Stack', 'React · Next.js · TypeScript · NestJS · Node'],
            ['FinTech', 'SPEI · Conciliaciones · 2FA/TOTP · AWS S3 KYC'],
            ['Cloud & DB', 'Docker · PostgreSQL · MongoDB · Prisma · TypeORM']
          ].map(([value, text]) => (
            <article className="arc-stat" data-enter key={value}>
              <span className="pixel-label">{t('ENFOQUE', 'FOCUS')} +</span>
              <h3>{value}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    )
  }

  if (level === 'stack') {
    return (
      <div className="arc-stack-view">
        <div className="arc-inventory-status" role="status">
          <span className="pixel-label">{t('TECNOLOGÍA ACTIVA', 'ACTIVE TECHNOLOGY')}</span>
          <strong key={item}>{item}</strong>
          <span>{t('Explora las herramientas y tecnologías clave de mi stack.', 'Explore key tools and technologies in my stack.')}</span>
        </div>
        <div className="arc-inventory">
          {getStack(t).map(group => (
            <article key={group.num} data-enter>
              <span className="pixel-label">ÁREA {group.num}</span>
              <h3>{group.title}</h3>
              <p>{group.desc}</p>
              <div className="arc-items">
                {group.tags.map(tag => (
                  <button
                    key={tag}
                    aria-pressed={item === tag}
                    onClick={() => setItem(tag)}
                  >
                    <span aria-hidden="true">{item === tag ? '◆' : '◇'}</span>
                    {tag}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    )
  }

  if (level === 'experiencia') return <ExperienceViewer reduced={reduced} />

  if (level === 'proyectos') return <ProjectSelector reduced={reduced} />

  if (level === 'educacion') {
    return (
      <div className="arc-education">
        {[
          ['2024 — 2026', t('Ingeniería en Desarrollo de Software Multiplataforma (Concluida)', 'Multiplatform Software Development Engineering (Graduated)')],
          ['2022 — 2024', t('Técnico Superior Universitario (TSU) en Desarrollo de Software', 'Associate Degree (TSU) in Multiplatform Software Development')]
        ].map(([years, title]) => (
          <article data-enter key={years}>
            <span className="arc-medal" aria-hidden="true">✳</span>
            <div>
              <span className="pixel-label">{years}</span>
              <h3>{title}</h3>
              <p>Universidad Tecnológica de Puebla (UTP)</p>
            </div>
          </article>
        ))}
        <div className="arc-language-cards" data-enter>
          <p>
            ES <strong>{t('Español · Nativo', 'Spanish · Native')}</strong>
          </p>
          <p>
            EN <strong>{t('Inglés · A2 / Técnico (Documentación & Comprensión)', 'English · A2 / Technical (Documentation & APIs)')}</strong>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="arc-contact" data-enter>
      <span className="arc-script">
        {t('El siguiente proyecto empieza con una conversación.', 'The next project starts with a conversation.')}
      </span>
      <p className="arc-lead">
        {t(
          '¿Tienes una idea, vacante o proyecto? Construyamos algo con intención.',
          'Have an idea, open role, or project? Let’s build something with intention.'
        )}
      </p>
      <a className="pixel-button filled" href="mailto:angelgom042@gmail.com">
        {t('CONECTAR → HABLEMOS', 'CONNECT → LET’S TALK')}
      </a>
      <div className="arc-contact-links">
        <a href="mailto:angelgom042@gmail.com">angelgom042@gmail.com ↗</a>
        <button
          className="pixel-button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText('angelgom042@gmail.com')
              setCopied(t('✓ Correo copiado', '✓ Email copied'))
            } catch {
              setCopied(t('Escríbeme a angelgom042@gmail.com', 'Email me at angelgom042@gmail.com'))
            }
          }}
        >
          {t('Copiar correo', 'Copy email')}
        </button>
        <a href="https://wa.me/522218226470" target="_blank" rel="noreferrer">
          WhatsApp (+52 221 822 6470) ↗
        </a>
        <a href="https://github.com/Gmzyy" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href="https://www.linkedin.com/in/angel-gomez-59b341350" target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
      </div>
      <p role="status">{copied}</p>
    </div>
  )
}
