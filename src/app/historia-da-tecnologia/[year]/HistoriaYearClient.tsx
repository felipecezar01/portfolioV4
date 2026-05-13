'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HistoryYear } from '@/data/historiaTecnologia'
import { getEraForYear } from '@/data/erasDaTi'
import { useLang } from '@/context/LangContext'

function hasImageExtension(src: string) {
  return /\.(jpe?g|png|webp|avif)(\?.*)?$/i.test(src)
}

// renders inline `**bold**` markers as <strong>
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color: 'var(--text)', fontWeight: 600 }}>{part.slice(2, -2)}</strong>
    }
    return <span key={i}>{part}</span>
  })
}

// renders text with `**bold**` and `- bullet` markdown-lite
function renderRich(text: string) {
  const lines = text.split('\n')
  const blocks: React.ReactNode[] = []
  let listBuf: string[] = []
  let paraBuf: string[] = []
  let key = 0

  const flushList = () => {
    if (listBuf.length === 0) return
    blocks.push(
      <ul key={`ul-${key++}`} style={{ margin: '0 0 8px 0', paddingLeft: '18px', listStyle: 'disc' }}>
        {listBuf.map((item, i) => (
          <li key={i} style={{ marginBottom: '6px' }}>{renderInline(item)}</li>
        ))}
      </ul>
    )
    listBuf = []
  }

  const flushPara = () => {
    if (paraBuf.length === 0) return
    blocks.push(
      <p key={`p-${key++}`} style={{ margin: '0 0 10px 0' }}>{renderInline(paraBuf.join(' '))}</p>
    )
    paraBuf = []
  }

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) {
      flushPara(); flushList()
      continue
    }
    if (trimmed.startsWith('- ')) {
      flushPara()
      listBuf.push(trimmed.slice(2))
    } else {
      flushList()
      paraBuf.push(trimmed)
    }
  }
  flushPara(); flushList()

  return <>{blocks}</>
}

function isList(text: string) {
  return text.trim().startsWith('- ')
}

function PersonPhoto({ base, name }: { base: string; name: string }) {
  const usesExactSrc = hasImageExtension(base)
  const [src, setSrc] = useState(usesExactSrc ? base : `${base}.jpg`)
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
        if (usesExactSrc) {
          setFailed(true)
          return
        }
        if (src.endsWith('.jpg')) setSrc(`${base}.png`)
        else if (src.endsWith('.png')) setSrc(`${base}.webp`)
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

function PersonPhotoGroup({ images }: { images: Array<{ src: string; alt: string }> }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))',
      alignItems: 'center',
      justifyItems: 'center',
      gap: '16px',
    }}>
      {images.map(image => (
        <div key={image.src} style={{
          width: '100%',
          height: '100%',
          minHeight: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <PersonPhoto base={image.src} name={image.alt} />
        </div>
      ))}
    </div>
  )
}

function PersonPhotoPlaceholder({ text }: { text: string }) {
  const [title, subtitle] = text.split('\n')

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      textAlign: 'center',
      padding: '24px',
      border: '0.5px dashed var(--gold-border)',
      borderRadius: '8px',
      background: 'var(--gold-dim)',
      boxSizing: 'border-box',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        lineHeight: 1.6,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: GOLD,
      }}>
        {title}
      </div>
      {subtitle && (
        <div style={{
          fontFamily: 'var(--font-cyber)',
          fontSize: '36px',
          fontWeight: 800,
          color: 'var(--text)',
          lineHeight: 1,
        }}>
          {subtitle}
        </div>
      )}
    </div>
  )
}

const GOLD = 'var(--gold)'
const GOLD_DIM = 'var(--gold-dim)'

const t = {
  pt: {
    back: 'história da tecnologia',
    expandAll: 'Expandir tudo',
    collapseAll: 'Colapsar tudo',
    noEntries: 'Nenhuma entrada para este ano ainda.',
    noEntriesSub: 'Este ano ainda não tem registros na História da Tecnologia. A lista cresce com o tempo.',
    labelName: 'Nome',
    labelNationality: 'Nacionalidade',
    labelFormation: 'Formação',
    labelWhatDid: 'O que fez',
    seeMore: 'Ver mais',
    collapse: 'Recolher',
    eraLabel: 'Era',
  },
  en: {
    back: 'history of technology',
    expandAll: 'Expand all',
    collapseAll: 'Collapse all',
    noEntries: 'No entries for this year yet.',
    noEntriesSub: 'This year has no History of Technology records yet. The list grows over time.',
    labelName: 'Name',
    labelNationality: 'Nationality',
    labelFormation: 'Formation',
    labelWhatDid: 'What they did',
    seeMore: 'See more',
    collapse: 'Collapse',
    eraLabel: 'Era',
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

export default function HistoriaYearClient({
  year,
  entry,
  returnHref,
}: {
  year: number
  entry: HistoryYear | null
  returnHref: string
}) {
  const { lang } = useLang()
  const tx = t[lang]
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const yearEra = getEraForYear(year)
  const yearEraColor = yearEra ? `var(${yearEra.colorVar})` : GOLD

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
      if (next.has(i)) {
        next.delete(i)
      } else {
        next.add(i)
      }
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
        <Link href={returnHref} style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          {tx.back}
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: yearEraColor }}>{year}</span>
      </div>

      <div className="historia-year-shell page-shell" style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 40px 100px' }}>

        {/* year header */}
        {(() => {
          const era = getEraForYear(year)
          const eraColor = era ? `var(${era.colorVar})` : GOLD
          const yearSubtitle = entry ? (lang === 'pt' ? entry.era.pt : entry.era.en).split('\n')[0] : null
          return (
            <div style={{ marginBottom: '48px' }}>
              <div className="historia-year-number" style={{
                fontFamily: 'var(--font-cyber)', fontSize: '68px', fontWeight: 800,
                color: eraColor, letterSpacing: '0.01em', lineHeight: 1.0,
                marginBottom: '14px',
              }}>
                {year}
              </div>
              {era && (
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '12px',
                  color: eraColor, letterSpacing: '0.08em',
                  marginBottom: '14px',
                  display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap',
                }}>
                  <span>{tx.eraLabel} {era.number}</span>
                  <span style={{ opacity: 0.4 }}>·</span>
                  <span>{era.title[lang]}</span>
                  <span style={{ opacity: 0.4 }}>·</span>
                  <span>{era.range}</span>
                </div>
              )}
              {yearSubtitle && (
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '12px',
                  color: 'var(--text3)', letterSpacing: '0.04em',
                  marginBottom: '20px',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                  <span style={{ color: eraColor, opacity: 0.7 }}>✦</span>
                  <span>{yearSubtitle}</span>
                </div>
              )}
              {entry && (
                <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85 }}>
                  {lang === 'pt' ? entry.context.pt : entry.context.en}
                </p>
              )}
            </div>
          )
        })()}

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
                const extraImages = [
                  ...(person.additionalImage ? [person.additionalImage] : []),
                  ...(person.additionalImages ?? []),
                ]
                return (
                  <div key={i} style={{
                    border: `0.5px solid ${isOpen ? 'var(--gold-border)' : 'var(--border)'}`,
                    borderRadius: '12px',
                    background: 'var(--bg2)',
                    overflow: 'hidden',
                    transition: 'border-color 0.25s',
                  }}>

                    {/* photo */}
                    <div style={person.imageWide ? {
                      width: '100%',
                      aspectRatio: '16 / 9',
                      background: 'var(--bg)',
                      borderBottom: '0.5px solid var(--border)',
                      overflow: 'hidden',
                      position: 'relative',
                    } : {
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
                      {person.images
                        ? <PersonPhotoGroup images={person.images} />
                        : person.image
                        ? (person.imageWide
                          // eslint-disable-next-line @next/next/no-img-element
                          ? <img src={person.image} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                          : <PersonPhoto base={person.image} name={person.name} />)
                        : person.imagePlaceholder
                        ? <PersonPhotoPlaceholder text={lang === 'pt' ? person.imagePlaceholder.pt : person.imagePlaceholder.en} />
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
                        {(() => {
                          const txt = lang === 'pt' ? person.nationality.pt : person.nationality.en
                          if (isList(txt)) {
                            return (
                              <div style={valueStyle}>
                                <div style={{ marginBottom: '6px' }}>{person.flag}</div>
                                {renderRich(txt)}
                              </div>
                            )
                          }
                          return (
                            <div style={valueStyle}>
                              <span style={{ marginRight: '6px' }}>{person.flag}</span>
                              {renderInline(txt)}
                            </div>
                          )
                        })()}
                      </div>

                      {/* Formação */}
                      <div style={{ marginBottom: '20px' }}>
                        <div style={labelStyle}>{tx.labelFormation}</div>
                        <div style={valueStyle}>
                          {renderRich(lang === 'pt' ? person.formation.pt : person.formation.en)}
                        </div>
                      </div>

                      {/* divider */}
                      <div style={{ height: '0.5px', background: 'var(--border)', marginBottom: '16px' }} />

                      {/* O que fez */}
                      <div style={{ marginBottom: '20px' }}>
                        <div style={{ ...labelStyle, color: GOLD }}>{tx.labelWhatDid}</div>
                        <div style={{ ...valueStyle, color: 'var(--text)', fontSize: '15px', lineHeight: 1.6 }}>
                          {renderRich(lang === 'pt' ? person.summary.pt : person.summary.en)}
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
                            marginBottom: '20px',
                          }}>
                            {lang === 'pt' ? person.contribution.pt : person.contribution.en}
                          </p>

                          {extraImages.map((image, imageIdx) => (
                            <div key={image.src} style={{ marginBottom: '20px' }}>
                              <div style={{
                                border: '0.5px solid var(--border)',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                background: 'var(--bg)',
                                padding: '12px',
                                boxSizing: 'border-box' as const,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '100px',
                              }}>
                                <PersonPhoto base={image.src} name={`additional-${imageIdx}`} />
                              </div>
                              <p style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '11px',
                                color: 'var(--text3)',
                                lineHeight: 1.7,
                                marginTop: '8px',
                                fontStyle: 'italic',
                              }}>
                                {lang === 'pt' ? image.caption.pt : image.caption.en}
                              </p>
                            </div>
                          ))}

                          {(lang === 'pt' ? person.detail.pt : person.detail.en)
                            .split('\n\n')
                            .map((paragraph, pIdx) => (
                              <p key={pIdx} style={{
                                fontSize: '14px',
                                color: 'var(--text2)',
                                lineHeight: 1.95,
                                marginBottom: '16px',
                              }}>
                                {renderInline(paragraph)}
                              </p>
                            ))
                          }
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
