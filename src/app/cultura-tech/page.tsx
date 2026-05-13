'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { culturaTechCategories } from '@/data/culturaTech'

const PURPLE = '#bf5fff'

const t = {
  pt: {
    label: 'cultura tech',
    title: 'Cultura Tech',
    subtitle: 'Um espaço para consumir cultura tech. Abaixo seguem algumas categorias que levam você a nomes de obras ou links de sites, canais e referências para explorar.',
  },
  en: {
    label: 'tech culture',
    title: 'Tech Culture',
    subtitle: 'A space to consume tech culture. Below are categories that lead to names of works or links to sites, channels and references to explore.',
  },
}

export default function CulturaTechPage() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '56px' }}>
      <div className="breadcrumb-main" style={{
        borderBottom: '0.5px solid var(--border)',
        padding: '14px 60px',
        display: 'flex', alignItems: 'center', gap: '8px',
        fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text3)',
      }}>
        <Link href="/" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = PURPLE)}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          felipecezar.dev
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <Link href="/blog" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = PURPLE)}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          blog
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: PURPLE }}>{tx.label}</span>
      </div>

      <div className="culture-shell page-shell" style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 40px 100px' }}>
        <div style={{ marginBottom: '48px' }}>
          <h1 className="page-title" style={{
            fontFamily: 'var(--font-cyber)', fontSize: '52px', fontWeight: 800,
            color: 'var(--text)', letterSpacing: '0.01em', lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            {tx.title}
          </h1>

          <p className="page-subtitle" style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85, maxWidth: '760px' }}>
            {tx.subtitle}
          </p>
        </div>

        <div
          className="culture-list"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {culturaTechCategories.map(category => (
            <Link
              key={category.slug}
              href={`/cultura-tech/${category.slug}`}
              style={{
                textDecoration: 'none',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                alignItems: 'center',
                gap: '16px',
                padding: '22px 24px',
                borderRadius: '10px',
                border: '0.5px solid var(--border)',
                background: 'var(--bg2)',
                transition: 'border-color 0.2s, transform 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = category.color
                el.style.transform = 'translateY(-2px)'
                el.style.background = category.dim
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'var(--border)'
                el.style.transform = 'translateY(0)'
                el.style.background = 'var(--bg2)'
              }}
            >
              <span style={{
                fontFamily: 'var(--font-cyber)',
                fontSize: '24px',
                lineHeight: 1.25,
                color: category.color,
                fontWeight: 800,
              }}>
                {category.title[lang]}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '16px',
                color: category.color,
                lineHeight: 1,
              }}>
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
