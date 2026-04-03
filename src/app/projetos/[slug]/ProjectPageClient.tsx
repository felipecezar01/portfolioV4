'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/data/projects'

export default function ProjectPageClient({
  project: p,
  children,
}: {
  project: Project
  children: React.ReactNode
}) {
  return (
    <>
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
        <Link href="/#projetos" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          projetos
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: 'var(--blue)' }}>{p.slug}</span>
      </div>

      <div className="project-content" style={{ maxWidth: '780px', margin: '0 auto', padding: '60px 40px 100px' }}>

        {/* capa 16:9 */}
        <div style={{
          width: '100%', aspectRatio: '16/9',
          borderRadius: '10px', overflow: 'hidden',
          border: '0.5px solid var(--border)',
          background: 'var(--bg3)',
          position: 'relative', marginBottom: '40px',
        }}>
          <Image
            src={p.image}
            alt={p.namePt}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ fontSize: '11px', color: 'var(--text3)', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
            {p.year}
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: 800,
            color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px',
          }}>
            {p.namePt}
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.75, marginBottom: '20px' }}>
            {p.descPt}
          </p>

          {/* tags */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {p.tags.map(tag => (
              <span key={tag} style={{
                fontSize: '11px', padding: '4px 12px', borderRadius: '4px',
                background: 'rgba(0,234,255,0.06)',
                border: '0.5px solid rgba(0,234,255,0.25)',
                color: 'var(--blue)', fontFamily: 'var(--font-mono)',
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* links */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href={p.github} target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              padding: '7px 16px', borderRadius: '6px',
              border: '0.5px solid var(--border2)',
              color: 'var(--text2)', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: '6px',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--blue)'; el.style.color = 'var(--blue)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--border2)'; el.style.color = 'var(--text2)' }}>
              GitHub ↗
            </a>
          </div>
        </div>

        {/* divider */}
        <div style={{ height: '0.5px', background: 'var(--border)', marginBottom: '48px' }} />

        {/* conteúdo MDX */}
        <div className="mdx-content">
          {children}
        </div>

      </div>
    </>
  )
}