'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HallYear } from '@/data/hallOfFame'
import { useLang } from '@/context/LangContext'

function PersonPhoto({ base, name }: { base: string; name: string }) {
  const [src, setSrc] = useState(`${base}.jpg`)
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <span style={{ fontSize: '48px', color: 'var(--gold)', opacity: 0.25 }}>✦</span>
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      onError={() => {
        if (src.endsWith('.jpg')) setSrc(`${base}.png`)
        else setFailed(true)
      }}
      style={{
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
        display: 'block',
      }}
    />
  )
}

const GOLD = 'var(--gold)'
const GOLD_DIM = 'var(--gold-dim)'

const t = {
  pt: {
    back: 'hall da fama',
    expandAll: 'Expandir tudo',
    collapseAll: 'Colapsar tudo',
    noEntries: 'Nenhuma entrada para este ano ainda.',
    noEntriesSub: 'Este ano ainda não tem registros no Hall da Fama. A lista cresce com o tempo.',
    labelName: 'Nome',
    labelNationality: 'Nacionalidade',
    labelFormation: 'Formação',
    labelWhatDid: 'O que fez',
    seeMore: 'Ver mais',
    collapse: 'Recolher',
  },
  en: {
    back: 'hall of fame',
    expandAll: 'Expand all',
    collapseAll: 'Collapse all',
    noEntries: 'No entries for this year yet.',
    noEntriesSub: 'This year has no Hall of Fame records yet. The list grows over time.',
    labelName: 'Name',
    labelNationality: 'Nationality',
    labelFormation: 'Formation',
    labelWhatDid: 'What they did',
    seeMore: 'See more',
    collapse: 'Collapse',
  },
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text3)',
  marginBottom: '3px',
}

const valueStyle: React.CSSProperties = {
  fontSize: '14px',
  color: 'var(--text2)',
  lineHeight: 1.5,
}

export default function HallYearClient({ year, entry }: { year: number; entry: HallYear | null }) {
  const { lang } = useLang()
  const tx = t[lang]
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const allOpen = entry ? openItems.size === entry.people.length : false

  const toggleAll = () => {
    if (!entry) return
    if (allOpen) {
      setOpenItems(new Set())
    } else {
      setOpenItems(new Set(entry.people.map((_, i) => i)))
    }
  }

  const toggle = (i: number) => {
    setOpenItems(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <>
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
        <Link href="/hall-da-fama" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          {tx.back}
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: GOLD }}>{year}</span>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 40px 100px' }}>

        {/* year header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            color: GOLD, letterSpacing: '0.1em',
            textTransform: 'uppercase', marginBottom: '10px',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span>✦</span>
            <span>{entry ? (lang === 'pt' ? entry.era.pt : entry.era.en) : String(year)}</span>
          </div>
          <div style={{
            fontFamily: 'var(--font-cyber)', fontSize: '68px', fontWeight: 800,
            color: 'var(--text)', letterSpacing: '0.01em', lineHeight: 1.0,
            marginBottom: '20px',
          }}>
            {year}
          </div>
          {entry && (
            <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85 }}>
              {lang === 'pt' ? entry.context.pt : entry.context.en}
            </p>
          )}
        </div>

        {/* no entries state */}
        {!entry && (
          <div style={{
            border: '0.5px solid var(--border)',
            borderRadius: '10px',
            padding: '40px',
            textAlign: 'center',
            background: 'var(--bg2)',
          }}>
            <div style={{ fontSize: '24px', marginBottom: '12px', opacity: 0.3 }}>✦</div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text2)', marginBottom: '8px' }}>
              {tx.noEntries}
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text3)' }}>
              {tx.noEntriesSub}
            </p>
          </div>
        )}

        {/* person cards */}
        {entry && entry.people.length > 0 && (
          <>
            {/* controls */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
              marginBottom: '20px', gap: '8px',
            }}>
              <button onClick={toggleAll} style={{
                fontFamily: 'var(--font-mono)', fontSize: '12px',
                padding: '5px 14px', borderRadius: '6px',
                border: `0.5px solid ${GOLD}`,
                background: GOLD_DIM, color: GOLD,
                cursor: 'pointer', transition: 'all 0.2s',
                letterSpacing: '0.04em',
              }}>
                {allOpen ? tx.collapseAll : tx.expandAll}
              </button>
            </div>

            {/* cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {entry.people.map((person, i) => {
                const isOpen = openItems.has(i)
                return (
                  <div key={i} style={{
                    border: `0.5px solid ${isOpen ? 'var(--gold-border)' : 'var(--border)'}`,
                    borderRadius: '12px',
                    background: 'var(--bg2)',
                    overflow: 'hidden',
                    transition: 'border-color 0.25s',
                  }}>

                    {/* photo */}
                    <div style={{
                      width: '100%',
                      height: '280px',
                      background: 'var(--bg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottom: '0.5px solid var(--border)',
                      padding: '16px',
                      boxSizing: 'border-box',
                    }}>
                      {person.image
                        ? <PersonPhoto base={person.image} name={person.name} />
                        : <span style={{ fontSize: '48px', color: GOLD, opacity: 0.25 }}>✦</span>
                      }
                    </div>

                    {/* card body */}
                    <div style={{ padding: '24px 24px 20px' }}>

                      {/* Nome */}
                      <div style={{ marginBottom: '16px' }}>
                        <div style={labelStyle}>{tx.labelName}</div>
                        <div style={{
                          fontFamily: 'var(--font-cyber)',
                          fontSize: '22px',
                          fontWeight: 700,
                          color: 'var(--text)',
                          letterSpacing: '0.01em',
                          lineHeight: 1.15,
                        }}>
                          {person.name}
                        </div>
                      </div>

                      {/* Nacionalidade */}
                      <div style={{ marginBottom: '14px' }}>
                        <div style={labelStyle}>{tx.labelNationality}</div>
                        <div style={valueStyle}>
                          <span style={{ marginRight: '6px' }}>{person.flag}</span>
                          {lang === 'pt' ? person.nationality.pt : person.nationality.en}
                        </div>
                      </div>

                      {/* Formação */}
                      <div style={{ marginBottom: '20px' }}>
                        <div style={labelStyle}>{tx.labelFormation}</div>
                        <div style={valueStyle}>
                          {lang === 'pt' ? person.formation.pt : person.formation.en}
                        </div>
                      </div>

                      {/* divider */}
                      <div style={{ height: '0.5px', background: 'var(--border)', marginBottom: '16px' }} />

                      {/* O que fez */}
                      <div style={{ marginBottom: '20px' }}>
                        <div style={{ ...labelStyle, color: GOLD }}>{tx.labelWhatDid}</div>
                        <div style={{ ...valueStyle, color: 'var(--text)', fontSize: '15px', lineHeight: 1.6 }}>
                          {lang === 'pt' ? person.summary.pt : person.summary.en}
                        </div>
                      </div>

                      {/* expand button */}
                      <button onClick={() => toggle(i)} style={{
                        fontFamily: 'var(--font-mono)', fontSize: '12px',
                        padding: '6px 16px', borderRadius: '6px',
                        border: `0.5px solid ${isOpen ? GOLD : 'var(--border2)'}`,
                        background: isOpen ? GOLD_DIM : 'transparent',
                        color: isOpen ? GOLD : 'var(--text3)',
                        cursor: 'pointer', transition: 'all 0.2s',
                        letterSpacing: '0.04em',
                        display: 'flex', alignItems: 'center', gap: '6px',
                      }}>
                        <span style={{
                          display: 'inline-block',
                          transition: 'transform 0.2s',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          lineHeight: 1,
                        }}>+</span>
                        {isOpen ? tx.collapse : tx.seeMore}
                      </button>

                      {/* expanded detail */}
                      {isOpen && (
                        <div style={{
                          marginTop: '20px',
                          paddingTop: '20px',
                          borderTop: '0.5px solid var(--gold-border)',
                        }}>
                          <p style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '14px',
                            color: 'var(--blue)',
                            lineHeight: 1.85,
                            marginBottom: '16px',
                          }}>
                            {lang === 'pt' ? person.contribution.pt : person.contribution.en}
                          </p>
                          <p style={{
                            fontSize: '14px',
                            color: 'var(--text2)',
                            lineHeight: 1.95,
                            margin: 0,
                          }}>
                            {lang === 'pt' ? person.detail.pt : person.detail.en}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </>
  )
}
