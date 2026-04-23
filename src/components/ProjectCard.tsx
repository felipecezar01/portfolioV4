'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Project } from '@/data/projects'
import { Lang } from '@/types'

export default function ProjectCard({ project: p, lang }: { project: Project; lang: Lang }) {
  const router = useRouter()
  const isComingSoon = p.slug === 'em-breve'

  const handleCardClick = () => {
    if (!isComingSoon) router.push(`/projetos/${p.slug}`)
  }

  return (
    <div
      onClick={handleCardClick}
      style={{
        border: '0.5px solid var(--border)', borderRadius: '10px',
        overflow: 'hidden', background: 'var(--bg2)',
        transition: 'all 0.25s',
        cursor: isComingSoon ? 'default' : 'pointer',
        opacity: isComingSoon ? 0.5 : 1,
        display: 'flex', flexDirection: 'column',
      }}
      onMouseEnter={e => {
        if (isComingSoon) return
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--blue)'
        el.style.transform = 'translateY(-3px)'
        el.style.background = 'var(--blue-dim)'
      }}
      onMouseLeave={e => {
        if (isComingSoon) return
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--border)'
        el.style.transform = 'translateY(0)'
        el.style.background = 'var(--bg2)'
      }}
    >
      {/* thumbnail 16:9 */}
      <div style={{
        width: '100%', aspectRatio: '16 / 9',
        background: 'var(--bg3)', position: 'relative',
        borderBottom: '0.5px solid var(--border)', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        {!isComingSoon && (
          <Image
            src={p.image} alt={lang === 'pt' ? p.namePt : p.nameEn} fill
            sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1200px) calc((100vw - 136px) / 2), 482px"
            style={{ objectFit: 'cover', opacity: 0.9 }}
          />
        )}
        {isComingSoon && (
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            color: 'var(--text3)', letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            {lang === 'pt' ? 'em construção' : 'under construction'}
          </span>
        )}
      </div>

      {/* body — flex col, fills remaining height */}
      <div style={{
        padding: '18px 20px',
        display: 'flex', flexDirection: 'column', flex: 1,
      }}>

        {/* content — grows to push footer down */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '12px', color: 'var(--text3)', marginBottom: '6px', letterSpacing: '0.06em' }}>
            {p.year}
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
            {lang === 'pt' ? p.namePt : p.nameEn}
          </div>
          <div style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.75, marginBottom: '16px' }}>
            {lang === 'pt' ? p.descPt : p.descEn}
          </div>
        </div>

        {/* tags */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
          {p.tags.map(tag => (
            <span key={tag} style={{
              fontSize: '12px', padding: '4px 10px', borderRadius: '4px',
              background: 'rgba(0,234,255,0.06)',
              border: '0.5px solid rgba(0,234,255,0.25)',
              color: 'var(--blue)',
            }}>{tag}</span>
          ))}
        </div>

        {/* footer */}
        {!isComingSoon && (
          <div style={{
            display: 'flex', gap: '16px', alignItems: 'center',
            paddingTop: '12px', borderTop: '0.5px solid var(--border)',
          }}>
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ fontSize: '12px', color: 'var(--blue)', textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              GitHub ↗
            </a>
            <span style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--blue)', fontWeight: 600 }}>
              {lang === 'pt' ? 'Ver projeto →' : 'See project →'}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
