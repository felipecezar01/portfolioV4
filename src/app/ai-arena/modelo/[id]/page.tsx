'use client'

import { use, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { useLang } from '@/context/LangContext'
import { modelMap, TIER_COLOR, ModelVersion, QualitativeParam, AIModel } from '@/data/aiArena'

function computeScore(model: AIModel): number | null {
  const v = model.versions[0]
  if (!v?.goodParams?.length && !v?.badParams?.length) return null

  const good = v.goodParams ?? []
  const bad = v.badParams ?? []

  // good: level 1 = 5pts, level 5 = 1pt → (6 - level)
  const goodActual = good.reduce((s, p) => s + (6 - p.ratingLevel), 0)
  // bad: level 1 = -5pts, level 5 = -1pt → -(6 - level)
  const badActual = bad.reduce((s, p) => s - (6 - p.ratingLevel), 0)

  // max: all good at level 1 (5pts each), all bad at level 5 (-1pt each)
  const maxGood = good.length * 5
  const maxBad = bad.length * -1

  const actual = goodActual + badActual
  const max = maxGood + maxBad

  return max === 0 ? 0 : actual / max
}

const t = {
  pt: {
    arena: 'ai arena',
    lastUpdated: 'Atualizado em',
    scores: {
      overall: 'Nota geral',
      conversational: 'Conversacional',
      didactic: 'Didático',
      precise: 'Preciso',
      intelligent: 'Inteligente',
    },
    modelNote: 'Sobre esta análise',
    versions: 'Modelos analisados',
    pros: 'Pontos fortes',
    cons: 'Pontos fracos',
    goodParams: 'Parâmetros bons',
    badParams: 'Parâmetros ruins',
    review: 'Análise geral',
  },
  en: {
    arena: 'ai arena',
    lastUpdated: 'Updated on',
    scores: {
      overall: 'Overall score',
      conversational: 'Conversational',
      didactic: 'Didactic',
      precise: 'Precise',
      intelligent: 'Intelligent',
    },
    modelNote: 'About this review',
    versions: 'Reviewed models',
    pros: 'Strengths',
    cons: 'Weaknesses',
    goodParams: 'Good parameters',
    badParams: 'Bad parameters',
    review: 'General review',
  },
}

// Color for good params (higher=better): 1=bright green → 5=red
// Color for bad params (lower=better): 1=red → 5=bright green
// Each level uses a clearly distinct color
const GOOD_PARAM_COLORS: Record<number, string> = {
  1: '#22c55e',   // green
  2: '#a3e635',   // lime (yellow-green, clearly distinct from green)
  3: '#eab308',   // yellow
  4: '#f97316',   // orange
  5: '#ef4444',   // red
}
const BAD_PARAM_COLORS: Record<number, string> = {
  1: '#ef4444',   // red
  2: '#f97316',   // orange
  3: '#eab308',   // yellow
  4: '#a3e635',   // lime
  5: '#22c55e',   // green
}

function QualParamBlock({
  param,
  lang,
  colorMap,
}: {
  param: QualitativeParam
  lang: 'pt' | 'en'
  colorMap: Record<number, string>
}) {
  const color = colorMap[param.ratingLevel]
  const desc = lang === 'pt' ? param.description.pt : param.description.en

  return (
    <div style={{
      borderLeft: `3px solid color-mix(in srgb, ${color} 50%, transparent)`,
      paddingLeft: '16px',
      marginBottom: '24px',
    }}>
      {/* label + rating */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '12px',
        marginBottom: desc ? '10px' : 0,
      }}>
        <span style={{
          fontSize: '15px', fontWeight: 600,
          color: 'var(--text)',
        }}>
          {lang === 'pt' ? param.label.pt : param.label.en}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          color, letterSpacing: '0.04em', flexShrink: 0,
          background: `color-mix(in srgb, ${color} 12%, transparent)`,
          border: `0.5px solid color-mix(in srgb, ${color} 35%, transparent)`,
          padding: '2px 10px', borderRadius: '4px',
        }}>
          {lang === 'pt' ? param.rating.pt : param.rating.en}
        </span>
      </div>
      {/* description — normal article text */}
      {desc && (
        <p style={{
          fontSize: '15px', color: 'var(--text2)',
          lineHeight: 1.9, margin: 0,
        }}>
          {desc}
        </p>
      )}
    </div>
  )
}

// Qualitative score bar — fill based on ratingLevel
function QualScoreBar({
  label, rating, ratingLevel, barColor, ratingColor,
}: {
  label: string; rating: string; ratingLevel: number; barColor: string; ratingColor: string
}) {
  const fill = ((6 - ratingLevel) / 5) * 100
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
      <div style={{
        fontSize: '12px', color: 'var(--text2)',
        width: '200px', flexShrink: 0,
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      }}>
        {label}
      </div>
      <div style={{
        flex: 1, height: '4px', borderRadius: '2px',
        background: 'var(--border)', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', borderRadius: '2px',
          width: `${fill}%`,
          background: barColor,
          transition: 'width 0.5s ease',
        }} />
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '11px',
        color: ratingColor, width: '80px', textAlign: 'right', flexShrink: 0,
      }}>
        {rating}
      </div>
    </div>
  )
}

function VersionAccordion({ version, color, lang, tx, modelColor }: {
  version: ModelVersion
  color: string
  lang: 'pt' | 'en'
  tx: typeof t['pt']
  modelColor: string
}) {
  const [open, setOpen] = useState(false)
  const goodSorted = version.goodParams ? [...version.goodParams].sort((a, b) => a.ratingLevel - b.ratingLevel) : []
  const badSorted = version.badParams ? [...version.badParams].sort((a, b) => b.ratingLevel - a.ratingLevel) : []

  if (version.locked) {
    const note = version.lockedNote ? (lang === 'pt' ? version.lockedNote.pt : version.lockedNote.en) : ''
    return (
      <div style={{
        border: '0.5px solid var(--border)',
        borderRadius: '10px',
        background: 'var(--bg2)',
        padding: '16px 22px',
        display: 'flex',
        alignItems: note ? 'flex-start' : 'center',
        gap: '14px',
      }}>
        <span style={{ fontSize: '16px', opacity: 0.35, flexShrink: 0, marginTop: note ? '2px' : 0 }}>🔒</span>
        <div>
          <div style={{
            fontFamily: 'var(--font-cyber)', fontSize: '16px', fontWeight: 700,
            color: 'var(--text3)', marginBottom: note ? '6px' : 0,
          }}>
            {version.name}
          </div>
          {note && (
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px',
              color: 'var(--text3)', lineHeight: 1.7, margin: 0,
            }}>
              {note}
            </p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div style={{
      border: `0.5px solid ${open ? `color-mix(in srgb, ${color} 35%, transparent)` : 'var(--border)'}`,
      borderRadius: '10px',
      background: 'var(--bg2)',
      overflow: 'hidden',
      transition: 'border-color 0.2s, background 0.2s',
    }}>
      {/* header */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', background: 'transparent', border: 'none',
          cursor: 'pointer', padding: '18px 22px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '12px', textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-cyber)', fontSize: '17px', fontWeight: 700,
          color: 'var(--text)',
        }}>
          {version.name}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '16px',
          color: color, flexShrink: 0,
          display: 'inline-block',
          transition: 'transform 0.2s',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>
          +
        </span>
      </button>

      {/* content */}
      {open && (
        <div style={{ padding: '0 22px 22px', borderTop: '0.5px solid var(--border)' }}>

          {/* score bars summary */}
          {(goodSorted.length > 0 || badSorted.length > 0) && (
            <div style={{ margin: '20px 0 28px', padding: '18px 20px', background: 'var(--bg)', borderRadius: '8px', border: '0.5px solid var(--border)' }}>
              {goodSorted.length > 0 && (
                <div style={{ marginBottom: badSorted.length > 0 ? '18px' : 0 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#22c55e', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                    {tx.goodParams}
                  </div>
                  {goodSorted.map((p, i) => (
                    <QualScoreBar key={i}
                      label={lang === 'pt' ? p.label.pt : p.label.en}
                      rating={lang === 'pt' ? p.rating.pt : p.rating.en}
                      ratingLevel={p.ratingLevel}
                      barColor='#22c55e'
                      ratingColor={GOOD_PARAM_COLORS[p.ratingLevel]}
                    />
                  ))}
                </div>
              )}
              {badSorted.length > 0 && (
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#ef4444', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                    {tx.badParams}
                  </div>
                  {badSorted.map((p, i) => (
                    <QualScoreBar key={i}
                      label={lang === 'pt' ? p.label.pt : p.label.en}
                      rating={lang === 'pt' ? p.rating.pt : p.rating.en}
                      ratingLevel={p.ratingLevel}
                      barColor='#ef4444'
                      ratingColor={BAD_PARAM_COLORS[p.ratingLevel]}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* qualitative good params */}
          {version.goodParams && version.goodParams.length > 0 && (
            <div style={{ marginBottom: '36px' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                color: '#22c55e',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                paddingBottom: '10px',
                borderBottom: '0.5px solid color-mix(in srgb, #22c55e 25%, transparent)',
              }}>
                {tx.goodParams}
              </div>
              {version.goodParams.map((p, i) => (
                <QualParamBlock key={i} param={p} lang={lang} colorMap={GOOD_PARAM_COLORS} />
              ))}
            </div>
          )}

          {/* qualitative bad params */}
          {version.badParams && version.badParams.length > 0 && (
            <div style={{ marginBottom: '4px' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                color: '#ef4444',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                paddingBottom: '10px',
                borderBottom: '0.5px solid color-mix(in srgb, #ef4444 25%, transparent)',
              }}>
                {tx.badParams}
              </div>
              {version.badParams.map((p, i) => (
                <QualParamBlock key={i} param={p} lang={lang} colorMap={BAD_PARAM_COLORS} />
              ))}
            </div>
          )}

          {/* fallback: simple pros/cons if no qualitative params */}
          {!version.goodParams && version.pros && (
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--green)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                {tx.pros}
              </div>
              {(lang === 'pt' ? version.pros.pt : version.pros.en).map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '6px' }}>
                  <span style={{ color: 'var(--green)', flexShrink: 0 }}>+</span>{p}
                </div>
              ))}
            </div>
          )}
          {!version.badParams && version.cons && (
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--red)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                {tx.cons}
              </div>
              {(lang === 'pt' ? version.cons.pt : version.cons.en).map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '6px' }}>
                  <span style={{ color: 'var(--red)', flexShrink: 0 }}>−</span>{c}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function ModelPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { lang } = useLang()
  const tx = t[lang]
  const model = modelMap.get(id)
  const [imgFailed, setImgFailed] = useState(false)

  if (!model) notFound()

  const tierColor = TIER_COLOR[model.tier]
  const computedScore = computeScore(model)

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
        <span style={{ color: model.color }}>{model.name}</span>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 60px 100px' }}>

        {/* ── HEADER ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', marginBottom: '36px' }}>
          <div style={{
            width: '68px', height: '68px', borderRadius: '14px', flexShrink: 0,
            border: `0.5px solid color-mix(in srgb, ${model.color} 40%, transparent)`,
            background: `color-mix(in srgb, ${model.color} 10%, transparent)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: `0 0 18px color-mix(in srgb, ${model.color} 14%, transparent)`,
          }}>
            {model.logo && !imgFailed ? (
              <Image src={model.logo} alt={model.name} width={68} height={68}
                onError={() => setImgFailed(true)}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            ) : (
              <span style={{ fontFamily: 'var(--font-cyber)', fontSize: '20px', fontWeight: 800, color: model.color }}>
                {model.name.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px', flexWrap: 'wrap' }}>
              <h1 style={{
                fontFamily: 'var(--font-cyber)', fontSize: '34px', fontWeight: 800,
                color: 'var(--text)', margin: 0, lineHeight: 1,
              }}>
                {model.name}
              </h1>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                color: tierColor,
                border: `0.5px solid color-mix(in srgb, ${tierColor} 40%, transparent)`,
                background: `color-mix(in srgb, ${tierColor} 12%, transparent)`,
                padding: '3px 10px', borderRadius: '4px',
              }}>
                Tier {model.tier}
              </span>
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px',
              color: 'var(--text3)', marginBottom: '10px',
            }}>
              {model.company}
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{
                fontFamily: 'var(--font-cyber)', fontSize: '30px', fontWeight: 800,
                color: model.color, lineHeight: 1,
              }}>
                {computedScore !== null ? computedScore.toFixed(2) : model.scores.overall.toFixed(1)}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text3)' }}>
                {computedScore !== null ? '/ 1' : '/10'}
              </span>
            </div>
          </div>
        </div>

        {/* ── MODEL NOTE (if present) ── */}
        {model.modelNote && (
          <div style={{
            border: `0.5px solid color-mix(in srgb, ${model.color} 25%, transparent)`,
            background: `color-mix(in srgb, ${model.color} 5%, transparent)`,
            borderRadius: '8px',
            padding: '14px 18px',
            marginBottom: '28px',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px',
              color: model.color, letterSpacing: '0.1em', textTransform: 'uppercase',
              marginBottom: '8px',
            }}>
              {tx.modelNote}
            </div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px',
              color: 'var(--text2)', lineHeight: 1.8, margin: 0,
            }}>
              {lang === 'pt' ? model.modelNote.pt : model.modelNote.en}
            </p>
          </div>
        )}

        {/* ── MODELS ACCORDION ── */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            {tx.versions}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {model.versions.map(v => (
              <VersionAccordion key={v.id} version={v} color={model.color} lang={lang} tx={tx} modelColor={model.color} />
            ))}
          </div>
        </div>

        {/* ── LAST UPDATED ── */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          color: 'var(--text3)', paddingTop: '20px',
          borderTop: '0.5px solid var(--border)',
        }}>
          {tx.lastUpdated}: {model.lastUpdated}
        </div>

      </div>
    </main>
  )
}
