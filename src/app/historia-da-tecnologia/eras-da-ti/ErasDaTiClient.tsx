'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { ERAS } from '@/data/erasDaTi'

const GOLD = 'var(--gold)'

const t = {
  pt: {
    backLabel: 'história da tecnologia',
    crumb: 'eras da tecnologia',
    label: 'linha do tempo',
    title: 'As Eras da Tecnologia',
    span: '6 eras · 1843 – 2025+',
    subtitle: 'A história da tecnologia não é linear — é feita de saltos abruptos, marcos quase invisíveis na época e finais de era que só ficam óbvios em retrospecto. Aqui estão as seis eras que dividem essa história, cada uma com seu marco inicial, ponto de virada e o evento que fechou (ou está fechando) o ciclo.',
    eraLabel: 'Era',
  },
  en: {
    backLabel: 'history of technology',
    crumb: 'technology eras',
    label: 'timeline',
    title: 'The Eras of Technology',
    span: '6 eras · 1843 – 2025+',
    subtitle: 'The history of technology is not linear — it is made of abrupt jumps, milestones nearly invisible at the time, and ends of eras that only become obvious in hindsight. Here are the six eras that divide this story, each with its initial milestone, turning point, and the event that closed (or is closing) the cycle.',
    eraLabel: 'Era',
  },
}

export default function ErasDaTiClient({ returnHref }: { returnHref: string }) {
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
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          felipecezar.dev
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <Link href={returnHref} style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          {tx.backLabel}
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: GOLD }}>{tx.crumb}</span>
      </div>

      <div className="eras-shell page-shell" style={{ maxWidth: '780px', margin: '0 auto', padding: '60px 40px 100px' }}>

        {/* header */}
        <div style={{ marginBottom: '64px' }}>
          <h1 className="page-title" style={{
            fontFamily: 'var(--font-cyber)', fontSize: '52px', fontWeight: 800,
            color: 'var(--text)', letterSpacing: '0.01em', lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            {tx.title}
          </h1>
          <p className="page-subtitle" style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85 }}>
            {tx.subtitle}
          </p>
        </div>

        {/* eras */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {ERAS.map((era, idx) => {
            const eraColor = `var(${era.colorVar})`
            const eraBorder = `color-mix(in srgb, ${eraColor} 35%, transparent)`
            const eraDim = `color-mix(in srgb, ${eraColor} 9%, transparent)`
            const eraGridA = `color-mix(in srgb, ${eraColor} 7%, transparent)`
            const eraGridB = `color-mix(in srgb, ${eraColor} 5%, transparent)`
            return (
            <article key={era.id} style={{
              border: `0.5px solid ${eraBorder}`,
              borderRadius: '14px',
              background: 'var(--bg2)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {/* subtle grid texture */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `linear-gradient(${eraGridA} 1px, transparent 1px), linear-gradient(90deg, ${eraGridB} 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
                maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.5), transparent 35%)',
                pointerEvents: 'none',
              }} />

              {/* era header */}
              <header className="era-header" style={{
                position: 'relative',
                padding: '32px 32px 24px',
                borderBottom: `0.5px solid ${eraBorder}`,
                background: eraDim,
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
              }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '12px',
                  border: `0.5px solid ${eraBorder}`,
                  background: 'var(--bg)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '9px',
                    color: eraColor, opacity: 0.6,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}>
                    {tx.eraLabel}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-cyber)', fontSize: '28px',
                    fontWeight: 800, color: eraColor,
                    letterSpacing: '0.02em', lineHeight: 1,
                  }}>
                    {era.number}
                  </div>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '12px',
                    color: eraColor, opacity: 0.85,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}>
                    {era.range}
                  </div>
                  <h2 style={{
                    fontFamily: 'var(--font-cyber)',
                    fontSize: 'clamp(20px, 3vw, 26px)',
                    fontWeight: 800,
                    color: 'var(--text)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.2,
                    margin: 0,
                    marginBottom: '6px',
                  }}>
                    {era.title[lang]}
                  </h2>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '13px',
                    color: 'var(--text3)',
                    letterSpacing: '0.02em',
                  }}>
                    {era.subtitle[lang]}
                  </div>
                </div>
              </header>

              {/* era image — 16:9 */}
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                background: 'var(--bg)',
                borderBottom: `0.5px solid ${eraBorder}`,
                overflow: 'hidden',
              }}>
                <Image
                  src={era.image}
                  alt={era.title[lang]}
                  fill
                  sizes="(max-width: 780px) 100vw, 700px"
                  style={{ objectFit: 'cover' }}
                  priority={idx === 0}
                />
              </div>

              {/* body */}
              <div className="era-body" style={{ position: 'relative', padding: '28px 32px 32px' }}>
                <p style={{
                  fontSize: '14.5px', color: 'var(--text2)', lineHeight: 1.85,
                  margin: 0, marginBottom: '28px',
                }}>
                  {era.intro[lang]}
                </p>

                {/* milestones */}
                <div style={{
                  display: 'flex', flexDirection: 'column', gap: '14px',
                }}>
                  {era.milestones.map((m, i) => (
                    <div key={i} className="era-milestone" style={{
                      display: 'grid',
                      gridTemplateColumns: '110px 1fr',
                      gap: '18px',
                      alignItems: 'flex-start',
                      padding: '14px 16px',
                      borderRadius: '8px',
                      border: '0.5px solid var(--border)',
                      background: 'var(--bg)',
                    }}>
                      <div>
                        <div style={{
                          fontFamily: 'var(--font-mono)', fontSize: '10px',
                          color: eraColor, opacity: 0.75,
                          letterSpacing: '0.1em', textTransform: 'uppercase',
                          marginBottom: '4px',
                        }}>
                          {m.label[lang]}
                        </div>
                        <div style={{
                          fontFamily: 'var(--font-cyber)', fontSize: '16px',
                          fontWeight: 700, color: eraColor,
                          letterSpacing: '0.01em',
                          lineHeight: 1.15,
                        }}>
                          {m.year}
                        </div>
                      </div>
                      <p style={{
                        fontSize: '13.5px', color: 'var(--text2)',
                        lineHeight: 1.75, margin: 0,
                      }}>
                        {m.text[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* connector to next era */}
              {idx < ERAS.length - 1 && (
                <div aria-hidden="true" style={{
                  position: 'absolute',
                  bottom: -28,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0.5px',
                  height: '20px',
                  background: `linear-gradient(180deg, ${eraBorder}, transparent)`,
                  pointerEvents: 'none',
                }} />
              )}
            </article>
            )
          })}
        </div>

        {/* footer cap */}
        <div style={{
          marginTop: '48px',
          textAlign: 'center',
          fontFamily: 'var(--font-mono)', fontSize: '12px',
          color: GOLD, opacity: 0.6, letterSpacing: '0.1em',
        }}>
          ✦ {lang === 'pt' ? 'fim da linha — por enquanto' : 'end of line — for now'} ✦
        </div>
      </div>
    </main>
  )
}
