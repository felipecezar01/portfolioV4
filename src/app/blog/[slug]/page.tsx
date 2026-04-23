import { notFound } from 'next/navigation'
import { posts } from '@/data/posts'
import BlogPostClient from './BlogPostClient'
import PandasPolarsDuckDB from '@/content/posts/PandasPolarsDuckDB'
import NginxLoadBalancer from '@/content/posts/NginxLoadBalancer'

const contentMap: Record<string, React.ComponentType> = {
  'pandas-polars-duckdb-benchmark': PandasPolarsDuckDB,
  'nginx-load-balancer-arquitetura': NginxLoadBalancer,
}

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) notFound()

  const Content = contentMap[slug] || null

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '56px' }}>
      <BlogPostClient post={post}>
        {Content ? <Content /> : (
          <p style={{ color: 'var(--text3)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
            Conteúdo em breve.
          </p>
        )}
      </BlogPostClient>
    </main>
  )
}
