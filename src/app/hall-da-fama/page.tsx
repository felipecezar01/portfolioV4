'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { hallByYear, HALL_START, HALL_END, HALL_SPAN } from '@/data/hallOfFame'

const PAGE_SIZE = 20
const ALL_YEARS = Array.from({ length: HALL_END - HALL_START + 1 }, (_, i) => HALL_END - i)
const TOTAL_PAGES = Math.ceil(ALL_YEARS.length / PAGE_SIZE)

const t = {
  pt: {
    label: 'hall da fama',
    title: 'Hall da Fama',
    span: (n: number) => `${n} anos de história da TI`,
    subtitle: 'De 1843 até hoje, cada pessoa que entrou aqui deixou a área de TI diferente do que encontrou. Este é o meu registro pessoal — baseado no que estudei, no que li, no que aprendi. A lista será sempre imperfeita e sempre crescendo.',
    note: 'Se você acha que esqueci alguém que merece estar aqui, me manda uma mensagem.',
    entries: (n: number) => `${n} ${n === 1 ? 'pessoa' : 'pessoas'}`,
    page: 'Página',
    of: 'de',
    medal: '✦',
    honorBadge: 'Menção Honrosa',
    honorTitle: 'A Fundação do Código',
    honorSub: 'Leibniz · Bouchon · Jacquard — antes de 1843',
    honorDesc: 'Três mentes que tornaram possível o que Ada Lovelace escreveu.',
  },
  en: {
    label: 'hall of fame',
    title: 'Hall of Fame',
    span: (n: number) => `${n} years of IT history`,
    subtitle: 'From 1843 to today, every person who made it here left the IT field different from how they found it. This is my personal record — based on what I\'ve studied, read, and learned. The list will always be imperfect and always growing.',
    note: 'If you think I missed someone who deserves to be here, send me a message.',
    entries: (n: number) => `${n} ${n === 1 ? 'person' : 'people'}`,
    page: 'Page',
    of: 'of',
    medal: '✦',
    honorBadge: 'Honorable Mention',
    honorTitle: 'The Foundation of Code',
    honorSub: 'Leibniz · Bouchon · Jacquard — before 1843',
    honorDesc: 'Three minds that made what Ada Lovelace wrote possible.',
  },
}

const GOLD = 'var(--gold)'
const SILVER = '#b0b8c8'
const SILVER_DIM = 'color-mix(in srgb, #b0b8c8 10%, transparent)'
const SILVER_BORDER = 'color-mix(in srgb, #b0b8c8 30%, transparent)'

export default function HallPage() {
  const { lang } = useLang()
  const tx = t[lang]
  const [page, setPage] = useState(0)

  const pageYears = ALL_YEARS.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

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
        <Link href="/blog" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          blog
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: GOLD }}>{tx.label}</span>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 60px 100px' }}>

        {/* header */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px', color: GOLD,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span>✦</span>
            <span>{tx.span(HALL_SPAN)}</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-cyber)', fontSize: '52px', fontWeight: 800,
            color: 'var(--text)', letterSpacing: '0.01em', lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            {tx.title}
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85, marginBottom: '12px' }}>
            {tx.subtitle}
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text3)', lineHeight: 1.7,
          }}>
            {tx.note}
          </p>
        </div>

        {/* year grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          marginBottom: '32px',
        }}>
          {pageYears.map((year, idx) => {
            const entry = hallByYear.get(year)
            const peopleCount = entry?.people.length ?? 0
            const hasEntries = peopleCount > 0
            return (
              <Link key={year} href={`/hall-da-fama/${year}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  border: `0.5px solid ${hasEntries ? 'var(--gold-border)' : 'var(--border)'}`,
                  borderRadius: '8px',
                  padding: '14px 16px',
                  background: hasEntries ? 'var(--gold-dim)' : 'var(--bg2)',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  minHeight: '80px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'var(--gold)'
                    el.style.background = 'var(--gold-dim)'
                    el.style.opacity = '0.85'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = hasEntries ? 'var(--gold-border)' : 'var(--border)'
                    el.style.background = hasEntries ? 'var(--gold-dim)' : 'var(--bg2)'
                    el.style.opacity = '1'
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-cyber)', fontSize: '20px', fontWeight: 700,
                    color: hasEntries ? GOLD : 'var(--text3)',
                    letterSpacing: '0.02em',
                  }}>
                    {year}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px',
                    color: hasEntries ? GOLD : 'var(--border2)',
                    marginTop: '6px',
                    letterSpacing: '0.06em',
                    opacity: hasEntries ? 0.7 : 1,
                  }}>
                    ✦ {tx.entries(peopleCount)}
                  </div>
                </div>
              </Link>
            )
          })}

          {/* honorable mention — last page only, full width */}
          {page === TOTAL_PAGES - 1 && (
            <Link href="/hall-da-fama/mencao-honrosa" style={{ textDecoration: 'none', gridColumn: '1 / -1' }}>
              <div style={{
                border: '0.5px solid var(--gold-border)',
                borderRadius: '8px',
                padding: '22px 28px',
                background: 'var(--gold-dim)',
                transition: 'all 0.2s',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--gold)'
                  el.style.opacity = '0.85'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--gold-border)'
                  el.style.opacity = '1'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontSize: '22px', color: GOLD, opacity: 0.5, flexShrink: 0 }}>✦</span>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: '11px',
                      color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}>
                      {tx.honorBadge}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-cyber)', fontSize: '20px', fontWeight: 700,
                      color: GOLD, letterSpacing: '0.01em', marginBottom: '6px',
                    }}>
                      {tx.honorTitle}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: '13px',
                      color: 'var(--text2)',
                    }}>
                      {tx.honorSub}
                    </div>
                  </div>
                </div>
                <span style={{ color: GOLD, fontSize: '18px', flexShrink: 0, opacity: 0.6 }}>→</span>
              </div>
            </Link>
          )}
        </div>

        {/* pagination */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
          fontFamily: 'var(--font-mono)', fontSize: '11px',
        }}>
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            style={{
              padding: '6px 12px', borderRadius: '6px',
              border: '0.5px solid var(--border2)',
              background: 'transparent', color: page === 0 ? 'var(--border2)' : 'var(--text2)',
              cursor: page === 0 ? 'default' : 'pointer', transition: 'all 0.2s',
            }}
          >←</button>

          {Array.from({ length: TOTAL_PAGES }, (_, i) => (
            <button key={i} onClick={() => setPage(i)} style={{
              width: '32px', height: '32px', borderRadius: '6px',
              border: `0.5px solid ${i === page ? GOLD : 'var(--border2)'}`,
              background: i === page ? 'var(--gold-dim)' : 'transparent',
              color: i === page ? GOLD : 'var(--text2)',
              cursor: 'pointer', transition: 'all 0.2s',
              fontFamily: 'var(--font-mono)', fontSize: '11px',
            }}>
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage(p => Math.min(TOTAL_PAGES - 1, p + 1))}
            disabled={page === TOTAL_PAGES - 1}
            style={{
              padding: '6px 12px', borderRadius: '6px',
              border: '0.5px solid var(--border2)',
              background: 'transparent',
              color: page === TOTAL_PAGES - 1 ? 'var(--border2)' : 'var(--text2)',
              cursor: page === TOTAL_PAGES - 1 ? 'default' : 'pointer', transition: 'all 0.2s',
            }}
          >→</button>
        </div>

      </div>
    </main>
  )
}
