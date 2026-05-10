'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { jobTracks } from '@/data/jobs'

const t = {
  pt: {
    label: 'jobs',
    badge: '3 setores · 1 carreira',
    title: 'Jobs',
    subtitle: 'Essa página é focada em te explicar e te guiar pelos três caminhos que existem pra trabalhar e fazer seu dinheiro — e isso não é exclusivo da TI, vale pra grande maioria das profissões. Basicamente são os três setores onde a gente constrói carreira: privado, público e empresa. Cada um tem seu próprio jogo e suas próprias regras.',
    explore: 'Ler agora',
  },
  en: {
    label: 'jobs',
    badge: '3 sectors · 1 career',
    title: 'Jobs',
    subtitle: 'This page is focused on explaining and guiding you through the three paths that exist for working and making your money — and this is not exclusive to IT, it applies to most professions. These are basically the three sectors where people build a career: private, public and business. Each one has its own game and its own rules.',
    explore: 'Read now',
  },
}

const BLUE = 'var(--blue)'

export default function JobsPage() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '56px' }}>

      {/* breadcrumb */}
      <div className="breadcrumb-main" style={{
        borderBottom: '0.5px solid var(--border)',
        padding: '14px 60px',
        display: 'flex', alignItems: 'center', gap: '8px',
        fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text3)',
      }}>
        <Link href="/" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          felipecezar.dev
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <Link href="/blog" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          blog
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: BLUE }}>{tx.label}</span>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 40px 100px' }}>

        {/* header */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            color: BLUE, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '0.5px solid rgba(0,234,255,0.25)',
            background: 'var(--blue-dim)',
            padding: '4px 12px', borderRadius: '4px',
            marginBottom: '20px',
          }}>
            ◈ {tx.badge}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-cyber)', fontSize: '52px', fontWeight: 800,
            color: 'var(--text)', letterSpacing: '0.01em', lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            {tx.title}
          </h1>

          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85 }}>
            {tx.subtitle}
          </p>
        </div>

        {/* track cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {jobTracks.map(track => {
            const c = `var(${track.colorVar})`
            const cBorder = `color-mix(in srgb, ${c} 35%, transparent)`
            const cBorderHover = `color-mix(in srgb, ${c} 65%, transparent)`
            const cDim = `color-mix(in srgb, ${c} 7%, transparent)`
            const cShadow = `color-mix(in srgb, ${c} 12%, transparent)`
            return (
              <Link
                key={track.id}
                href={`/jobs/${track.slug}`}
                style={{
                  textDecoration: 'none',
                  border: `0.5px solid ${cBorder}`,
                  borderRadius: '10px',
                  background: 'var(--bg2)',
                  padding: '28px 28px',
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr auto',
                  alignItems: 'center',
                  gap: '22px',
                  transition: 'all 0.22s',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = cBorderHover
                  el.style.background = cDim
                  el.style.boxShadow = `0 8px 24px ${cShadow}, 0 2px 8px rgba(0,0,0,0.12)`
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = cBorder
                  el.style.background = 'var(--bg2)'
                  el.style.boxShadow = 'none'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <span style={{
                  width: '48px', height: '48px', borderRadius: '8px',
                  border: `0.5px solid ${cBorder}`,
                  background: cDim,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: '20px',
                  color: c, flexShrink: 0,
                }}>
                  {track.icon}
                </span>

                <div style={{ minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: c, opacity: 0.72,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}>
                    {track.tagline[lang]}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-cyber)', fontSize: '24px', fontWeight: 800,
                    color: c, letterSpacing: '0.01em',
                    marginBottom: '8px',
                  }}>
                    {track.name[lang]}
                  </div>
                  <p style={{
                    fontSize: '13px', color: 'var(--text2)',
                    lineHeight: 1.65, margin: 0,
                  }}>
                    {track.shortDesc[lang]}
                  </p>
                </div>

                <span style={{
                  color: c, opacity: 0.6,
                  fontSize: '20px', lineHeight: 1, flexShrink: 0,
                  transition: 'transform 0.22s, opacity 0.22s',
                }}>
                  →
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
