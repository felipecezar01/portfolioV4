'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { categories } from '@/data/aiArena'

const t = {
  pt: {
    label: 'ai arena',
    title: 'AI Arena',
    subtitle: 'Minha análise pessoal dos principais modelos de IA do mercado, organizada por categoria de uso.',
    disclaimer: 'Isso não é um benchmark técnico rigoroso. É o benchmark da minha bolha — baseado no meu uso diário como desenvolvedor e analista de dados. As perguntas que faço normalmente envolvem TI, programação e ciências, mas de vez em quando tiro dúvidas de outras áreas também. Se você é médico, advogado, matemático ou trabalha em um domínio muito diferente, sua experiência pode ser completamente diferente da minha. Use isso como um ponto de vista, não como verdade absoluta.',
    note: 'Os rankings refletem minha realidade. Atualizo sempre que um novo modelo relevante chega ou quando minha percepção muda com o uso contínuo.',
    choose: 'Escolha uma categoria',
    models: (n: number) => `${n} ${n === 1 ? 'modelo' : 'modelos'}`,
    explore: 'Ver ranking →',
  },
  en: {
    label: 'ai arena',
    title: 'AI Arena',
    subtitle: 'My personal analysis of the top AI models on the market, organized by category of use.',
    disclaimer: 'This is not a rigorous technical benchmark. It\'s my bubble\'s benchmark — based on my daily use as a developer and data analyst. The questions I ask usually involve IT, programming and sciences, but I occasionally ask about other areas too. If you\'re a doctor, lawyer, mathematician or work in a very different domain, your experience may be completely different from mine. Use this as a point of view, not as absolute truth.',
    note: 'Rankings reflect my reality. I update whenever a relevant new model arrives or when my perception changes with continued use.',
    choose: 'Choose a category',
    models: (n: number) => `${n} ${n === 1 ? 'model' : 'models'}`,
    explore: 'See ranking →',
  },
}

export default function AIArenaPage() {
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
        <Link href="/blog" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          blog
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: 'var(--green)' }}>{tx.label}</span>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 40px 100px' }}>

        {/* header */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            color: 'var(--green)', letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '0.5px solid color-mix(in srgb, var(--green) 30%, transparent)',
            background: 'var(--green-dim)',
            padding: '4px 12px', borderRadius: '4px',
            marginBottom: '20px',
          }}>
            ⚡ {categories.length} categorias
          </div>

          <h1 style={{
            fontFamily: 'var(--font-cyber)', fontSize: '52px', fontWeight: 800,
            color: 'var(--text)', letterSpacing: '0.01em', lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            {tx.title}
          </h1>

          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85, marginBottom: '20px' }}>
            {tx.subtitle}
          </p>

          <div style={{
            border: '0.5px solid color-mix(in srgb, var(--gold) 30%, transparent)',
            background: 'color-mix(in srgb, var(--gold) 5%, transparent)',
            borderRadius: '8px',
            padding: '14px 18px',
            marginBottom: '14px',
          }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text2)', lineHeight: 1.8, margin: 0 }}>
              ⚠ {tx.disclaimer}
            </p>
          </div>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)', lineHeight: 1.7 }}>
            {tx.note}
          </p>
        </div>

        {/* section label */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          {tx.choose}
        </div>

        {/* category list — 1 column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {categories.map(cat => (
            <Link key={cat.id} href={`/ai-arena/${cat.slug}`} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  border: '0.5px solid var(--border)',
                  borderRadius: '12px',
                  padding: '20px 24px',
                  background: 'var(--bg2)',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  height: '88px',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = `color-mix(in srgb, ${cat.color} 55%, transparent)`
                  el.style.boxShadow = `0 0 18px color-mix(in srgb, ${cat.color} 14%, transparent), 0 4px 10px rgba(0,0,0,0.12)`
                  el.style.transform = 'translateX(3px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--border)'
                  el.style.boxShadow = 'none'
                  el.style.transform = 'translateX(0)'
                }}
              >
                {/* bg glow */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(ellipse at left, color-mix(in srgb, ${cat.color} 5%, transparent) 0%, transparent 60%)`,
                  pointerEvents: 'none',
                }} />

                {/* icon */}
                <div style={{
                  fontSize: '24px', lineHeight: 1, flexShrink: 0,
                  width: '44px', height: '44px', borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `color-mix(in srgb, ${cat.color} 10%, transparent)`,
                  border: `0.5px solid color-mix(in srgb, ${cat.color} 25%, transparent)`,
                  position: 'relative', zIndex: 1,
                }}>
                  {cat.icon}
                </div>

                {/* text */}
                <div style={{ flex: 1, minWidth: 0, position: 'relative', zIndex: 1 }}>
                  <div style={{
                    fontFamily: 'var(--font-cyber)', fontSize: '17px', fontWeight: 700,
                    color: 'var(--text)', letterSpacing: '0.01em', marginBottom: '4px',
                  }}>
                    {lang === 'pt' ? cat.name.pt : cat.name.en}
                  </div>
                  <div style={{
                    fontSize: '12px', color: 'var(--text3)', lineHeight: 1.5,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {lang === 'pt' ? cat.description.pt : cat.description.en}
                  </div>
                </div>

                {/* count + arrow */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  flexShrink: 0, position: 'relative', zIndex: 1,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: cat.color, opacity: 0.7,
                  }}>
                    {tx.models(cat.entries.length)}
                  </span>
                  <span style={{ fontSize: '16px', color: cat.color, opacity: 0.6 }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}
