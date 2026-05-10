'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLang } from '@/context/LangContext'
import { historyByYear, HISTORY_START, HISTORY_END, HISTORY_SPAN } from '@/data/historiaTecnologia'
import { getEraForYear } from '@/data/erasDaTi'
import { HISTORY_STATS } from '@/data/historyStats'

const PAGE_SIZE = 20
const ALL_YEARS = Array.from({ length: HISTORY_END - HISTORY_START + 1 }, (_, i) => HISTORY_END - i)
const TOTAL_PAGES = Math.ceil(ALL_YEARS.length / PAGE_SIZE)

const t = {
  pt: {
    label: 'história da tecnologia',
    title: 'História da Tecnologia',
    span: (n: number) => `${n} anos de história da tecnologia`,
    subtitle: 'De 1843 até hoje, cada pessoa que entrou aqui deixou a área de tecnologia diferente do que encontrou. Este é o meu registro pessoal — baseado no que estudei, no que li, no que aprendi. A lista será sempre imperfeita e sempre crescendo.',
    entries: (n: number) => `${n} ${n === 1 ? 'pessoa' : 'pessoas'}`,
    page: 'Página',
    of: 'de',
    medal: '✦',
    honorBadge: 'Menção Honrosa',
    honorTitle: 'A Fundação do Código',
    honorSub: 'Leibniz · Bouchon · Jacquard — antes de 1843',
    honorDesc: 'Três mentes que tornaram possível o que Ada Lovelace escreveu.',
    erasLabel: 'linha do tempo',
    erasCount: '6 eras · 1843 – 2025+',
    erasTitle: 'As Eras da Tecnologia',
    erasDesc: 'Da máquina analítica à IA agentiva — seis capítulos que dividem 180 anos de história da computação.',
    erasCta: 'Ler agora',
    statsLabel: 'números do hall',
    statsTitle: 'Quem entrou aqui',
    statsPeople: 'Pessoas',
    statsGroups: 'Grupos',
    statsNationalities: 'Nacionalidades',
  },
  en: {
    label: 'history of technology',
    title: 'History of Technology',
    span: (n: number) => `${n} years of technology history`,
    subtitle: 'From 1843 to today, every person who made it here left the technology field different from how they found it. This is my personal record — based on what I\'ve studied, read, and learned. The list will always be imperfect and always growing.',
    entries: (n: number) => `${n} ${n === 1 ? 'person' : 'people'}`,
    page: 'Page',
    of: 'of',
    medal: '✦',
    honorBadge: 'Honorable Mention',
    honorTitle: 'The Foundation of Code',
    honorSub: 'Leibniz · Bouchon · Jacquard — before 1843',
    honorDesc: 'Three minds that made what Ada Lovelace wrote possible.',
    erasLabel: 'timeline',
    erasCount: '6 eras · 1843 – 2025+',
    erasTitle: 'The Eras of Technology',
    erasDesc: 'From the analytical engine to agentic AI — six chapters that divide 180 years of computing history.',
    erasCta: 'Read now',
    statsLabel: 'hall numbers',
    statsTitle: 'Who made it in',
    statsPeople: 'People',
    statsGroups: 'Groups',
    statsNationalities: 'Nationalities',
  },
}

const GOLD = 'var(--gold)'

function getHistoryHref(page: number) {
  return page === 0 ? '/historia-da-tecnologia' : `/historia-da-tecnologia?page=${page + 1}`
}

function getDetailHref(year: number, page: number) {
  return page === 0 ? `/historia-da-tecnologia/${year}` : `/historia-da-tecnologia/${year}?from=${page + 1}`
}

function getHonorableMentionHref(page: number) {
  return page === 0 ? '/historia-da-tecnologia/mencao-honrosa' : `/historia-da-tecnologia/mencao-honrosa?from=${page + 1}`
}

function getErasHref(page: number) {
  return page === 0 ? '/historia-da-tecnologia/eras-da-ti' : `/historia-da-tecnologia/eras-da-ti?from=${page + 1}`
}

export default function HistoriaPageClient({ initialPage }: { initialPage: number }) {
  const router = useRouter()
  const { lang } = useLang()
  const tx = t[lang]
  const [page, setPage] = useState(initialPage)

  const pageYears = ALL_YEARS.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

  const goToPage = (nextPage: number) => {
    const clampedPage = Math.min(TOTAL_PAGES - 1, Math.max(0, nextPage))
    setPage(clampedPage)
    router.replace(getHistoryHref(clampedPage), { scroll: false })
  }

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

      <div className="historia-shell" style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 60px 100px', position: 'relative' }}>

        {/* left aside — Eras da Tecnologia */}
        <aside className="historia-aside historia-aside-eras" style={{
          position: 'absolute',
          top: '92px',
          right: 'calc(100% + 36px)',
          width: '260px',
        }}>
          <Link href={getErasHref(page)} className="side-card" style={{
            textDecoration: 'none',
            border: '0.5px solid rgba(255,216,77,0.42)',
            borderRadius: '8px',
            background: 'var(--bg2)',
            width: '100%',
            minWidth: 0,
            padding: '28px 24px',
            minHeight: '280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '22px',
            cursor: 'pointer',
            transition: 'all 0.25s',
            overflow: 'hidden',
            position: 'relative',
          }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(255,216,77,0.78)'
              el.style.background = 'var(--bg3)'
              el.style.boxShadow = '0 8px 24px rgba(255,216,77,0.08), 0 2px 8px rgba(0,0,0,0.12)'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(255,216,77,0.42)'
              el.style.background = 'var(--bg2)'
              el.style.boxShadow = 'none'
              el.style.transform = 'translateY(0)'
            }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(rgba(255,216,77,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,216,77,0.06) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.55), transparent 62%)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--gold)',
                opacity: 0.72,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                {tx.erasLabel}
              </div>

              <div style={{
                fontFamily: 'var(--font-cyber)',
                fontSize: '23px',
                fontWeight: 800,
                color: 'var(--gold)',
                letterSpacing: '0.01em',
                lineHeight: 1.12,
                marginBottom: '12px',
              }}>
                {tx.erasTitle}
              </div>

              <p style={{
                fontSize: '13px',
                color: 'var(--text2)',
                lineHeight: 1.75,
                margin: 0,
                overflowWrap: 'break-word',
              }}>
                {tx.erasDesc}
              </p>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--gold)',
                letterSpacing: '0.06em',
                borderTop: '0.5px solid var(--gold-border)',
                paddingTop: '14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span>{tx.erasCta}</span>
                <span aria-hidden="true" style={{ fontSize: '15px', lineHeight: 1 }}>→</span>
              </div>
            </div>
          </Link>
        </aside>

        {/* right aside — Stats */}
        <aside className="historia-aside historia-aside-stats" style={{
          position: 'absolute',
          top: '92px',
          left: 'calc(100% + 36px)',
          width: '260px',
        }}>
          <div className="stats-card" style={{
            border: '0.5px solid var(--border)',
            borderRadius: '8px',
            background: 'var(--bg2)',
            width: '100%',
            minWidth: 0,
            padding: '22px 22px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text3)',
                opacity: 0.78,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                {tx.statsLabel}
              </div>
              <div style={{
                fontFamily: 'var(--font-cyber)',
                fontSize: '20px',
                fontWeight: 800,
                color: 'var(--text)',
                letterSpacing: '0.01em',
                lineHeight: 1.15,
              }}>
                {tx.statsTitle}
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}>
              <div style={{
                border: '0.5px solid var(--border)',
                borderRadius: '6px',
                padding: '12px 10px',
                background: 'var(--bg3)',
                display: 'flex', flexDirection: 'column', gap: '4px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  color: 'var(--text3)', letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {tx.statsPeople}
                </div>
                <div style={{
                  fontFamily: 'var(--font-cyber)', fontSize: '22px', fontWeight: 800,
                  color: GOLD, lineHeight: 1, letterSpacing: '0.01em',
                }}>
                  {HISTORY_STATS.totalPeople}
                </div>
              </div>
              <div style={{
                border: '0.5px solid var(--border)',
                borderRadius: '6px',
                padding: '12px 10px',
                background: 'var(--bg3)',
                display: 'flex', flexDirection: 'column', gap: '4px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  color: 'var(--text3)', letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {tx.statsGroups}
                </div>
                <div style={{
                  fontFamily: 'var(--font-cyber)', fontSize: '22px', fontWeight: 800,
                  color: GOLD, lineHeight: 1, letterSpacing: '0.01em',
                }}>
                  {HISTORY_STATS.totalGroups}
                </div>
              </div>
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                color: 'var(--text3)', letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '10px',
                borderTop: '0.5px solid var(--border)',
                paddingTop: '14px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span>{tx.statsNationalities}</span>
                <span style={{ color: 'var(--text2)' }}>{HISTORY_STATS.nationalities.length}</span>
              </div>
              <div className="stats-nationality-list" style={{
                display: 'flex', flexDirection: 'column', gap: '4px',
                maxHeight: '320px', overflowY: 'auto',
                paddingRight: '4px',
              }}>
                {HISTORY_STATS.nationalities.map(nat => (
                  <div key={nat.flag} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--text2)',
                    padding: '3px 0',
                  }}>
                    <span style={{ fontSize: '13px', lineHeight: 1, flexShrink: 0 }}>{nat.flag}</span>
                    <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {lang === 'pt' ? nat.pt : nat.en}
                    </span>
                    <span style={{ color: 'var(--text3)', flexShrink: 0 }}>{nat.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* header */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px', color: GOLD,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span>✦</span>
            <span>{tx.span(HISTORY_SPAN)}</span>
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

        {/* year grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          marginBottom: '32px',
        }}>
          {pageYears.map(year => {
            const entry = historyByYear.get(year)
            const peopleCount = entry?.peopleCount ?? entry?.people.length ?? 0
            const hasEntries = peopleCount > 0
            const era = getEraForYear(year)
            const eraColor = era ? `var(${era.colorVar})` : 'var(--text3)'
            const eraBorder = era ? `color-mix(in srgb, ${eraColor} 35%, transparent)` : 'var(--border)'
            const eraDim = era ? `color-mix(in srgb, ${eraColor} 9%, transparent)` : 'var(--bg2)'
            return (
              <Link key={year} href={getDetailHref(year, page)} style={{ textDecoration: 'none' }}>
                <div style={{
                  border: `0.5px solid ${hasEntries ? eraBorder : 'var(--border)'}`,
                  borderRadius: '8px',
                  padding: '14px 16px',
                  background: hasEntries ? eraDim : 'var(--bg2)',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  minHeight: '80px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = era ? eraColor : 'var(--border2)'
                    el.style.background = hasEntries ? eraDim : 'var(--bg3)'
                    el.style.opacity = '0.85'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = hasEntries ? eraBorder : 'var(--border)'
                    el.style.background = hasEntries ? eraDim : 'var(--bg2)'
                    el.style.opacity = '1'
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-cyber)', fontSize: '20px', fontWeight: 700,
                    color: hasEntries ? eraColor : 'var(--text3)',
                    letterSpacing: '0.02em',
                  }}>
                    {year}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px',
                    color: hasEntries ? eraColor : 'var(--border2)',
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
            <Link href={getHonorableMentionHref(page)} style={{ textDecoration: 'none', gridColumn: '1 / -1' }}>
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
            onClick={() => goToPage(page - 1)}
            disabled={page === 0}
            style={{
              padding: '6px 12px', borderRadius: '6px',
              border: '0.5px solid var(--border2)',
              background: 'transparent', color: page === 0 ? 'var(--border2)' : 'var(--text2)',
              cursor: page === 0 ? 'default' : 'pointer', transition: 'all 0.2s',
            }}
          >←</button>

          {Array.from({ length: TOTAL_PAGES }, (_, i) => (
            <button key={i} onClick={() => goToPage(i)} style={{
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
            onClick={() => goToPage(page + 1)}
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
