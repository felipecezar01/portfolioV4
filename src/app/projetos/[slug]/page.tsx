import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import ProjectPageClient from './ProjectPageClient'
import SinistrosFortaleza from '@/content/projetos/SinistrosFortaleza'
import EleicoesCampanhas2022 from '@/content/projetos/EleicoesCampanhas2022'
import AgentOlist from '@/content/projetos/AgentOlist'
import AnaliseChurn from '@/content/projetos/AnaliseChurn'

const contentMap: Record<string, React.ComponentType> = {
  'sinistros-fortaleza': SinistrosFortaleza,
  'eleicoes-gerais-2022': EleicoesCampanhas2022,
  'agent-olist': AgentOlist,
  'analise-churn': AnaliseChurn,
}

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) notFound()

  const Content = contentMap[slug] || null

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '56px' }}>
      <ProjectPageClient project={project}>
        {Content ? <Content /> : (
          <p style={{ color: 'var(--text3)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
            Documentação em breve.
          </p>
        )}
      </ProjectPageClient>
    </main>
  )
}