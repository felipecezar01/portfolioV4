'use client'

import Link from 'next/link'
import { Lang } from '@/types'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

const featuredProjects = projects.slice(0, 2)

const t = {
  pt: {
    title: 'projetos',
    intro: 'Aqui estão os meus projetos em destaque — os que melhor representam meu trabalho atual em IA e dados.',
    detail: <>Clicando em <span style={{ color: 'var(--blue)' }}>"Ver projeto"</span> você vê toda a linha de raciocínio e como o projeto foi feito. Clicando em <span style={{ color: 'var(--blue)' }}>"GitHub"</span> você vai direto ao repositório para ver o código-fonte.</>,
    seeAll: 'Ver todos os projetos →',
  },
  en: {
    title: 'projects',
    intro: 'Here are my featured projects — the ones that best represent my current work in AI and data.',
    detail: <>Clicking <span style={{ color: 'var(--blue)' }}>"See project"</span> shows the full reasoning and how the project was built. Clicking <span style={{ color: 'var(--blue)' }}>"GitHub"</span> takes you directly to the repository to see the source code.</>,
    seeAll: 'See all projects →',
  },
}

export default function Projetos({ lang }: { lang: Lang }) {
  const tx = t[lang]

  return (
    <section className="section-main" id="projetos" style={{ padding: '100px 0', borderTop: '0.5px solid var(--border)' }}>
      <div className="container-main" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 60px' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
          <span style={{ fontSize: '10px', color: 'var(--text3)', letterSpacing: '0.1em' }}>04</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, color: 'var(--text)' }}>{tx.title}</span>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        </div>

        <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.85, maxWidth: '680px', marginBottom: '16px' }}>
          {tx.intro}
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text3)', lineHeight: 1.8, maxWidth: '680px', marginBottom: '52px' }}>
          {tx.detail}
        </p>

        <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {featuredProjects.map(p => <ProjectCard key={p.slug} project={p} lang={lang} />)}
        </div>

        {/* Ver todos */}
        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end' }}>
          <Link
            href="/arquivo"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px',
              color: 'var(--text3)', textDecoration: 'none',
              letterSpacing: '0.04em', transition: 'color 0.2s',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '8px 0',
              borderBottom: '0.5px solid var(--border)',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
          >
            {tx.seeAll}
          </Link>
        </div>

      </div>
    </section>
  )
}
