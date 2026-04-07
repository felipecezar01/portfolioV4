'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import ProjectCard from '@/components/ProjectCard'
import Footer from '@/components/Footer'
import { projects } from '@/data/projects'

const t = {
  pt: {
    label: 'arquivo',
    title: 'Todos os Projetos',
    subtitle: 'Repositório completo de análises, experimentos e ferramentas.',
    count: (n: number) => `${n} projetos`,
  },
  en: {
    label: 'archive',
    title: 'All Projects',
    subtitle: 'Complete repository of analyses, experiments and tools.',
    count: (n: number) => `${n} projects`,
  },
}

export default function ArquivoPage() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '56px' }}>

      {/* breadcrumb */}
      <div className="breadcrumb-main" style={{
        borderBottom: '0.5px solid var(--border)',
        padding: '14px 60px',
        display: 'flex', alignItems: 'center', gap: '8px',
        fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)',
      }}>
        <Link href="/" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          felipecezar.dev
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: 'var(--blue)' }}>{tx.label}</span>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 60px 100px' }}>

        {/* header */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            color: 'var(--text3)', letterSpacing: '0.08em',
            textTransform: 'uppercase', marginBottom: '12px',
          }}>
            {tx.count(projects.length)}
          </div>
          <h1 style={{
            fontFamily: 'var(--font-mono)', fontSize: '32px', fontWeight: 700,
            color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.2,
            marginBottom: '12px',
          }}>
            {tx.title}
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.85, maxWidth: '580px' }}>
            {tx.subtitle}
          </p>
        </div>

        {/* grid */}
        <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {projects.map(p => <ProjectCard key={p.slug} project={p} lang={lang} />)}
        </div>

      </div>

      <Footer />
    </main>
  )
}
