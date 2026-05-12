'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import type { CareerTrack, CareerTrackTable, TableCell, CareerLink } from '@/data/carreiraTech'

const BLUE = 'var(--blue)'

function renderCell(cell: TableCell, lang: 'pt' | 'en'): string {
  if (typeof cell === 'object') return cell[lang]
  if (typeof cell === 'string' && lang === 'en' && /^\d+,\d+%$/.test(cell)) {
    return cell.replace(',', '.')
  }
  return String(cell)
}

function prettyUrl(url: string): string {
  return url.replace(/^https?:\/\/(?:www\.)?/, '').replace(/\/$/, '')
}

function CareerLinkList({ items, color, borderColor, dimBg }: {
  items: CareerLink[]
  color: string
  borderColor: string
  dimBg: string
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map(item => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="career-link-card"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '16px', flexWrap: 'wrap',
            padding: '14px 18px',
            border: `0.5px solid ${borderColor}`,
            borderRadius: '8px',
            background: 'var(--bg2)',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = color
            el.style.background = `linear-gradient(${dimBg}, ${dimBg}), var(--bg2)`
            el.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = borderColor
            el.style.background = 'var(--bg2)'
            el.style.transform = 'translateY(0)'
          }}
        >
          <span className="career-link-card-name" style={{
            fontFamily: 'var(--font-cyber)', fontSize: '17px', fontWeight: 700,
            color: 'var(--text)', letterSpacing: '0.01em',
          }}>
            {item.name}
          </span>
          <span className="career-link-card-url" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--font-mono)', fontSize: '13px',
            color: 'var(--text2)',
            overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            <span>{prettyUrl(item.url)}</span>
            <span style={{ color, fontSize: '14px', lineHeight: 1 }}>↗</span>
          </span>
        </a>
      ))}
    </div>
  )
}


function CareerTable({ table, lang, color, borderColor, dimBg }: {
  table: CareerTrackTable
  lang: 'pt' | 'en'
  color: string
  borderColor: string
  dimBg: string
}) {
  const gridCols = '56px minmax(0, 1fr) 88px 76px'
  const scrollable = !!table.scrollable

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        gap: '12px', flexWrap: 'wrap',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 700,
          color, letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          {table.title[lang]}
        </div>
        {table.note && (
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '14px',
            color: 'var(--text2)', lineHeight: 1.6,
          }}>
            {table.note[lang]}
          </div>
        )}
      </div>

      <div style={{
        border: `0.5px solid ${borderColor}`,
        borderRadius: '8px',
        background: 'var(--bg2)',
        overflow: 'hidden',
      }}>
        <div className={scrollable ? 'career-table-scroll' : undefined} style={{
          maxHeight: scrollable ? '420px' : undefined,
          overflowY: scrollable ? 'auto' : 'visible',
        }}>
          {/* head */}
          <div className="career-table-head" style={{
            display: 'grid',
            gridTemplateColumns: gridCols,
            gap: '14px',
            padding: '14px 18px',
            background: `linear-gradient(${dimBg}, ${dimBg}), var(--bg2)`,
            position: scrollable ? 'sticky' : 'static',
            top: 0, zIndex: 2,
            borderBottom: `0.5px solid ${borderColor}`,
            fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700,
            color, letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            {table.columns.map((col, ci) => (
              <span key={ci} style={{
                textAlign: ci === 0 ? 'right' : ci === 1 ? 'left' : 'right',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>
                {col[lang]}
              </span>
            ))}
          </div>
          {/* rows */}
          {table.rows.map((row, ri) => (
            <div key={ri} className="career-table-row" style={{
              display: 'grid',
              gridTemplateColumns: gridCols,
              gap: '14px',
              padding: '11px 18px',
              borderTop: ri === 0 ? 'none' : '0.5px solid var(--border)',
              fontFamily: 'var(--font-mono)', fontSize: '15px',
              color: 'var(--text2)',
            }}>
              {row.map((cell, ci) => (
                <span key={ci} style={{
                  textAlign: ci === 0 ? 'right' : ci === 1 ? 'left' : 'right',
                  color: ci === 1 ? 'var(--text)' : 'var(--text2)',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {renderCell(cell, lang)}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CarreiraTechTrackClient({ track }: { track: CareerTrack }) {
  const { lang } = useLang()
  const c = `var(${track.colorVar})`
  const cBorder = `color-mix(in srgb, ${c} 35%, transparent)`
  const cDim = `color-mix(in srgb, ${c} 7%, transparent)`

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
        <Link href="/carreira-tech" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          carreira tech
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: c }}>{track.slug}</span>
      </div>

      <article className="career-detail-shell page-shell" style={{ maxWidth: '780px', margin: '0 auto', padding: '60px 40px 100px' }}>

        {/* header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            color: c, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: `0.5px solid ${cBorder}`,
            background: cDim,
            padding: '4px 12px', borderRadius: '4px',
            marginBottom: '20px',
          }}>
            <span>{track.icon}</span>
            <span>{track.tagline[lang]}</span>
          </div>

          <h1 className="page-title" style={{
            fontFamily: 'var(--font-cyber)', fontSize: '52px', fontWeight: 800,
            color: c, letterSpacing: '0.01em', lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            {track.name[lang]}
          </h1>

          <p className="career-detail-intro" style={{
            fontSize: '17px', color: 'var(--text2)', lineHeight: 1.85,
            margin: 0,
          }}>
            {track.intro[lang]}
          </p>
        </div>

        {/* sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '38px' }}>
          {track.sections.map((section, i) => (
            <section key={i}>
              <h2 className="page-section-title" style={{
                fontFamily: 'var(--font-cyber)', fontSize: '22px', fontWeight: 800,
                color: 'var(--text)', letterSpacing: '0.01em',
                marginBottom: '16px',
                paddingBottom: '10px',
                borderBottom: `0.5px solid ${cBorder}`,
              }}>
                <span style={{ color: c, marginRight: '10px', opacity: 0.7 }}>{track.icon}</span>
                {section.heading[lang]}
              </h2>
              {section.paragraphs && section.paragraphs.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="page-paragraph" style={{
                      fontSize: '15px', color: 'var(--text2)',
                      lineHeight: 1.85, margin: 0,
                    }}>
                      {p[lang]}
                    </p>
                  ))}
                </div>
              )}
              {section.content && section.content.length > 0 && (
                <div style={{
                  display: 'flex', flexDirection: 'column', gap: '16px',
                  marginTop: section.paragraphs && section.paragraphs.length > 0 ? '16px' : 0,
                }}>
                  {section.content.map((block, j) => {
                    if (block.kind === 'paragraph') {
                      return (
                        <p key={j} className="page-paragraph" style={{
                          fontSize: '15px', color: 'var(--text2)',
                          lineHeight: 1.85, margin: 0,
                        }}>
                          {block.text[lang]}
                        </p>
                      )
                    }
                    if (block.kind === 'links') {
                      return (
                        <CareerLinkList
                          key={j}
                          items={block.items}
                          color={c}
                          borderColor={cBorder}
                          dimBg={cDim}
                        />
                      )
                    }
                    return null
                  })}
                </div>
              )}
              {section.tables && section.tables.length > 0 && (
                <div style={{
                  display: 'flex', flexDirection: 'column', gap: '28px',
                  marginTop: '24px',
                }}>
                  {section.tables.map((tbl, ti) => (
                    <CareerTable
                      key={ti}
                      table={tbl}
                      lang={lang}
                      color={c}
                      borderColor={cBorder}
                      dimBg={cDim}
                    />
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* back link */}
        <div style={{
          marginTop: '64px',
          paddingTop: '24px',
          borderTop: '0.5px solid var(--border)',
        }}>
          <Link href="/carreira-tech" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            color: 'var(--text3)', textDecoration: 'none',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = c)}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
          >
            <span>←</span>
            <span>{lang === 'pt' ? 'voltar para Carreira Tech' : 'back to Carreira Tech'}</span>
          </Link>
        </div>
      </article>
    </>
  )
}
