'use client'

import { Lang } from '@/types'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

const t = {
  pt: {
    title: 'projetos',
    intro: 'Tenho diversos projetos, mas aqui estão os dois melhores — que atualizo continuamente conforme vou evoluindo.',
    detail: 'Clicando em "Ver projeto" você vê toda a linha de raciocínio e como o projeto foi feito. Clicando em "GitHub" você vai direto ao repositório para ver o código-fonte.',
  },
  en: {
    title: 'projects',
    intro: 'I have several projects, but here are my two best ones — which I continuously update as I evolve.',
    detail: 'Clicking "See project" shows the full reasoning and how the project was built. Clicking "GitHub" takes you directly to the repository to see the source code.',
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
          {lang === 'pt'
            ? <>Clicando em <span style={{ color: 'var(--blue)' }}>"Ver projeto"</span> você vê toda a linha de raciocínio e como o projeto foi feito. Clicando em <span style={{ color: 'var(--blue)' }}>"GitHub"</span> você vai direto ao repositório para ver o código-fonte.</>
            : <>Clicking <span style={{ color: 'var(--blue)' }}>"See project"</span> shows the full reasoning and how the project was built. Clicking <span style={{ color: 'var(--blue)' }}>"GitHub"</span> takes you directly to the repository to see the source code.</>
          }
        </p>

        <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {projects.map(p => <ProjectCard key={p.slug} project={p} lang={lang} />)}
        </div>

      </div>
    </section>
  )
}