'use client'

import { Lang } from '@/types'

const t = {
  pt: { title: 'Jornada' },
  en: { title: 'Journey' },
}

const timeline = [
  {
    year: '2025',
    type: 'sw',
    title: { pt: 'Desenvolvedor de IA & Automações', en: 'AI & Automation Developer' },
    org: 'Prefeitura Eficiente · 2025',
    desc: {
      pt: 'Implementação de soluções de inteligência artificial e criação de fluxos automatizados para otimização de processos internos.',
      en: 'Implementation of artificial intelligence solutions and creation of automated workflows for internal process optimization.',
    },
    tags: ['Kommo', 'WhatsApp API', 'Meta', 'N8N', 'LLMs'],
  },
  {
    year: '2025',
    type: 'ds',
    title: { pt: 'Desenvolvedor Low-Code', en: 'Low-Code Developer' },
    org: 'Instituto Teslando (ONG) · 2025',
    desc: {
      pt: 'Desenvolvimento de automações com N8N e arquitetura de um aplicativo de ordens de serviço com AppSheet, focando na digitalização da operação.',
      en: 'Development of automations using N8N and architecture of a service order application with AppSheet, focusing on operation digitalization.',
    },
    tags: ['AppSheet', 'N8N'],
  },
]

const dotColor: Record<string, string> = {
  sw: 'var(--red)',
  ds: 'var(--green)',
  blue: 'var(--blue)',
}

export default function Jornada({ lang }: { lang: Lang }) {
  const tx = t[lang]
  return (
    <section className="section-main" id="jornada" style={{ padding: '100px 0', borderTop: '0.5px solid var(--border)' }}>
      <div className="container-main" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '52px' }}>
          <span style={{ fontSize: '12px', color: 'var(--text3)', letterSpacing: '0.1em' }}>03</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, color: 'var(--text)' }}>{tx.title}</span>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {timeline.map((item, i) => (
            <div key={i} className="timeline-grid" style={{ display: 'grid', gridTemplateColumns: '70px 16px 1fr', gap: '0 24px', paddingBottom: i < timeline.length - 1 ? '36px' : 0 }}>
              <div style={{ fontSize: '10px', color: 'var(--text3)', textAlign: 'right', paddingTop: '4px' }}>{item.year}</div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: dotColor[item.type], boxShadow: `0 0 8px ${dotColor[item.type]}`, flexShrink: 0, marginTop: '3px' }} />
                {i < timeline.length - 1 && <div style={{ width: '0.5px', flex: 1, background: 'var(--border)', marginTop: '6px' }} />}
              </div>
              <div>
                <div style={{ fontSize: '15px', color: 'var(--text)', fontWeight: 500, marginBottom: '3px' }}>{item.title[lang]}</div>
                <div style={{ fontSize: '12px', color: 'var(--text3)', marginBottom: '8px' }}>{item.org}</div>
                <div style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.75, marginBottom: '12px' }}>{item.desc[lang]}</div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {item.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '12px', padding: '4px 12px', borderRadius: '4px',
                      background: 'rgba(0,234,255,0.06)',
                      border: '0.5px solid rgba(0,234,255,0.25)',
                      color: 'var(--blue)',
                      letterSpacing: '0.02em',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}