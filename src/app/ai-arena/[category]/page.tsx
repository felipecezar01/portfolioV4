'use client'

import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import { useLang } from '@/context/LangContext'
import { categoryMap, CategoryEntry } from '@/data/aiArena'

const t = {
  pt: {
    arena: 'ai arena',
    verdict: 'Veredicto',
    detail: 'Ver análise →',
    params: 'Parâmetros avaliados',
    paramCount: (n: number) => `${n} parâmetros`,
  },
  en: {
    arena: 'ai arena',
    verdict: 'Verdict',
    detail: 'See review →',
    params: 'Evaluated parameters',
    paramCount: (n: number) => `${n} parameters`,
  },
}

const MEDAL: Record<number, { border: string; bg: string; glow: string; label: string; rankColor: string }> = {
  1: { border: '#f59e0b', bg: 'color-mix(in srgb, #f59e0b 8%, var(--bg2))', glow: 'color-mix(in srgb, #f59e0b 22%, transparent)', label: '🥇', rankColor: '#f59e0b' },
  2: { border: '#94a3b8', bg: 'color-mix(in srgb, #94a3b8 6%, var(--bg2))', glow: 'color-mix(in srgb, #94a3b8 16%, transparent)', label: '🥈', rankColor: '#94a3b8' },
  3: { border: '#b45309', bg: 'color-mix(in srgb, #b45309 6%, var(--bg2))', glow: 'color-mix(in srgb, #b45309 16%, transparent)', label: '🥉', rankColor: '#b45309' },
}

function CompactCard({ entry, lang }: { entry: CategoryEntry; lang: 'pt' | 'en' }) {
  const [hovered, setHovered] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)
  const medal = MEDAL[entry.rank]
  const isTop3 = entry.rank <= 3

  const defaultBorder = isTop3 ? medal.border : 'var(--border)'
  const defaultBg = isTop3 ? medal.bg : 'var(--bg2)'

  const inner = (
    <div
      style={{
        border: `${isTop3 && entry.rank === 1 ? '1.5px' : '0.5px'} solid ${hovered
          ? (isTop3 ? medal.border : `color-mix(in srgb, ${entry.color} 55%, transparent)`)
          : defaultBorder}`,
        borderRadius: '10px',
        background: defaultBg,
        padding: '14px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
        boxShadow: hovered
          ? (isTop3 ? `0 0 18px ${medal.glow}` : `0 0 12px color-mix(in srgb, ${entry.color} 14%, transparent)`)
          : (isTop3 && entry.rank === 1 ? `0 0 8px color-mix(in srgb, #f59e0b 10%, transparent)` : 'none'),
        transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
        cursor: entry.hasDetail ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* bg radial */}
      <div style={{
        position: 'absolute', inset: 0,
        background: isTop3
          ? `radial-gradient(ellipse at top left, color-mix(in srgb, ${medal.border} 6%, transparent) 0%, transparent 60%)`
          : `radial-gradient(ellipse at left, color-mix(in srgb, ${entry.color} 3%, transparent) 0%, transparent 65%)`,
        pointerEvents: 'none',
      }} />

      {/* rank */}
      <div style={{
        flexShrink: 0, width: '28px', textAlign: 'center',
        fontSize: isTop3 ? '20px' : '16px',
        fontFamily: 'var(--font-cyber)', fontWeight: 800,
        color: isTop3 ? medal.rankColor : 'var(--text3)',
        lineHeight: 1,
      }}>
        {isTop3 ? medal.label : entry.rank}
      </div>

      {/* logo */}
      <div style={{
        width: '36px', height: '36px', borderRadius: '8px',
        flexShrink: 0, overflow: 'hidden',
        border: `0.5px solid color-mix(in srgb, ${entry.color} 30%, transparent)`,
        background: `color-mix(in srgb, ${entry.color} 10%, transparent)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {entry.logo && !imgFailed ? (
          <Image src={entry.logo} alt={entry.name} width={36} height={36}
            onError={() => setImgFailed(true)}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        ) : (
          <span style={{ fontFamily: 'var(--font-cyber)', fontSize: '12px', fontWeight: 700, color: entry.color }}>
            {entry.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      {/* name */}
      <div style={{ flex: 1, minWidth: 0, position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-cyber)', fontSize: '16px', fontWeight: 700,
          color: 'var(--text)',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {entry.name}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)' }}>
          {entry.company}
        </div>
      </div>

      {/* score — auto-detect scale: < 2 → 0–1, else → 0–10 */}
      <div style={{ flexShrink: 0, textAlign: 'right', position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-cyber)', fontSize: '20px', fontWeight: 800,
          color: isTop3 ? medal.rankColor : entry.color, lineHeight: 1,
        }}>
          {entry.score < 2 ? entry.score.toFixed(2) : entry.score.toFixed(1)}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text3)' }}>
          {entry.score < 2 ? '/ 1' : '/10'}
        </div>
      </div>
    </div>
  )

  if (entry.hasDetail) {
    return <Link href={`/ai-arena/modelo/${entry.id}`} style={{ textDecoration: 'none', display: 'block' }}>{inner}</Link>
  }
  return inner
}

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params)
  const { lang } = useLang()
  const tx = t[lang]
  const cat = categoryMap.get(category)

  if (!cat) notFound()

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
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          felipecezar.dev
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <Link href="/ai-arena" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          {tx.arena}
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: cat.color }}>{lang === 'pt' ? cat.name.pt : cat.name.en}</span>
      </div>

      {/* two-column layout */}
      <div style={{
        maxWidth: '1180px',
        margin: '0 auto',
        padding: '60px 60px 100px',
        display: 'grid',
        gridTemplateColumns: '1.7fr 1fr',
        gap: '48px',
        alignItems: 'start',
      }}>

        {/* ── LEFT: info column ── */}
        <div>
          {/* badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            color: cat.color, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: `0.5px solid color-mix(in srgb, ${cat.color} 30%, transparent)`,
            background: `color-mix(in srgb, ${cat.color} 8%, transparent)`,
            padding: '4px 12px', borderRadius: '4px',
            marginBottom: '20px',
          }}>
            <span>{cat.icon}</span>
            <span>AI Arena</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-cyber)', fontSize: '36px', fontWeight: 800,
            color: 'var(--text)', letterSpacing: '0.01em', lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            {lang === 'pt' ? cat.name.pt : cat.name.en}
          </h1>

          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85, marginBottom: '24px' }}>
            {lang === 'pt' ? cat.description.pt : cat.description.en}
          </p>

          {cat.categoryNote && (
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px',
              color: 'var(--text3)', lineHeight: 1.8,
              marginBottom: '32px',
            }}>
              {lang === 'pt' ? cat.categoryNote.pt : cat.categoryNote.en}
            </p>
          )}

          {cat.evaluatedParams && cat.evaluatedParams.length > 0 && (
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                color: cat.color, letterSpacing: '0.1em', textTransform: 'uppercase',
                marginBottom: '14px',
              }}>
                {tx.params} · {tx.paramCount(cat.evaluatedParams.length)}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {cat.evaluatedParams.map((p, i) => (
                  <span key={i} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--text2)',
                    border: '0.5px solid var(--border)',
                    background: 'var(--bg2)',
                    padding: '4px 10px', borderRadius: '4px',
                  }}>
                    {lang === 'pt' ? p.pt : p.en}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── RIGHT: ranking column ── */}
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '14px',
          }}>
            Ranking · {cat.entries.length} {cat.entries.length === 1 ? (lang === 'pt' ? 'modelo' : 'model') : (lang === 'pt' ? 'modelos' : 'models')}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {cat.entries.map(entry => (
              <CompactCard key={entry.id} entry={entry} lang={lang} />
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
