'use client'

import { Lang } from '@/types'

const t = {
  pt: { title: 'Educação', pos: 'mba', grad: 'tecnólogo', grad2: 'bacharel' },
  en: { title: 'Education', pos: 'mba', grad: 'technologist', grad2: 'bachelor' },
}

const edu = [
  {
    title: { pt: 'MBA em Ciência de Dados', en: 'MBA in Data Science' },
    sub: 'Unifor · 2026–2027',
    type: 'mba',
  },
  {
    title: { pt: 'Bacharel em Sistemas de Informação', en: "Bachelor's in Information Systems" },
    sub: 'Unifametro · 2021–2025',
    type: 'bacharel',
  },
  {
    title: { pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', en: 'Technologist in Systems Analysis and Development' },
    sub: 'Unifametro · 2021–2024',
    type: 'tecnólogo',
  },
]

const badgeStyle: Record<string, { border: string; color: string }> = {
  mba:       { border: 'var(--green)', color: 'var(--green)' },
  bacharel:  { border: 'var(--red)',   color: 'var(--red)'   },
  tecnólogo: { border: 'var(--blue)',  color: 'var(--blue)'  },
}

export default function Educacao({ lang }: { lang: Lang }) {
  const tx = t[lang]
  return (
    <section className="section-main" id="educacao" style={{ padding: '100px 0', borderTop: '0.5px solid var(--border)' }}>
      <div className="container-main" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '52px' }}>
          <span style={{ fontSize: '10px', color: 'var(--text3)', letterSpacing: '0.1em' }}>02</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, color: 'var(--text)' }}>{tx.title}</span>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {edu.map((item, i) => (
            <div key={i}
              style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center', padding: '18px 22px', border: '0.5px solid var(--border)', borderRadius: '8px', background: 'var(--bg2)', transition: 'all 0.2s', cursor: 'default' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'var(--blue)'; el.style.background = 'var(--blue-dim)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'var(--border)'; el.style.background = 'var(--bg2)' }}>
              <div>
                <div style={{ fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '4px' }}>
                  {item.title[lang]}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text3)' }}>{item.sub}</div>
              </div>
              <div style={{ fontSize: '9px', padding: '3px 10px', borderRadius: '3px', background: 'var(--bg3)', border: `0.5px solid ${badgeStyle[item.type].border}`, color: badgeStyle[item.type].color, whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {item.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}