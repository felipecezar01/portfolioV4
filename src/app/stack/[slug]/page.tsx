'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useLang } from '@/context/LangContext'
import { getStackDetail, StackDetailSection } from '@/data/stack'

const t = {
  pt: { items: (n: number) => `${n} ${n === 1 ? 'item' : 'itens'}` },
  en: { items: (n: number) => `${n} ${n === 1 ? 'item' : 'items'}` },
}

function SectionAccordion({
  section,
  isOpen,
  onToggle,
  lang,
}: {
  section: StackDetailSection
  isOpen: boolean
  onToggle: () => void
  lang: 'pt' | 'en'
}) {
  const tx = t[lang]
  return (
    <div style={{
      border: isOpen
        ? '0.5px solid rgba(0,234,255,0.3)'
        : '0.5px solid var(--border)',
      borderRadius: '10px',
      background: 'var(--bg2)',
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textAlign: 'left',
          transition: 'background 0.18s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,234,255,0.03)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'none' }}
      >
        <span style={{
          flex: 1,
          fontFamily: 'var(--font-cyber)',
          fontSize: '15px',
          fontWeight: 700,
          color: 'var(--text)',
          letterSpacing: '0.01em',
        }}>
          {section.title[lang]}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--blue)',
          opacity: 0.55,
        }}>
          {tx.items(section.items.length)}
        </span>
        <span style={{
          color: 'var(--blue)',
          opacity: 0.6,
          fontSize: '16px',
          lineHeight: 1,
          transition: 'transform 0.22s',
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
        }}>
          ›
        </span>
      </button>

      <div style={{
        maxHeight: isOpen ? '800px' : '0px',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
      }}>
        <div style={{
          padding: '0 20px 18px',
          borderTop: '0.5px solid rgba(0,234,255,0.1)',
          paddingTop: '14px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '7px',
        }}>
          {section.items.map(item => (
            <span
              key={item}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '4px 10px',
                borderRadius: '5px',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '0.02em',
                border: '0.5px solid var(--border)',
                color: 'var(--text2)',
                background: 'transparent',
                whiteSpace: 'nowrap',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function StackDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { lang } = useLang()
  const { slug } = use(params)
  const detail = getStackDetail(slug)

  if (!detail) notFound()

  const [open, setOpen] = useState<Set<string>>(() => new Set([detail.sections[0]?.id]))

  function toggle(id: string) {
    setOpen(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
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
        <Link href="/stack" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          stack
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: 'var(--blue)' }}>{detail.name.toLowerCase()}</span>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 40px 100px' }}>

        {/* header */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            marginBottom: '24px',
          }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '12px',
              border: '0.5px solid rgba(0,234,255,0.25)',
              background: 'var(--blue-dim)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '26px', lineHeight: 1,
              flexShrink: 0,
            }}>
              {detail.icon}
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                color: 'var(--blue)', opacity: 0.7,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                marginBottom: '4px',
              }}>
                {detail.sections.length} {lang === 'pt' ? 'seções' : 'sections'}
              </div>
              <h1 style={{
                fontFamily: 'var(--font-cyber)', fontSize: '42px', fontWeight: 800,
                color: 'var(--text)', letterSpacing: '0.01em', lineHeight: 1.1,
              }}>
                {detail.name}
              </h1>
            </div>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85 }}>
            {detail.description[lang]}
          </p>
        </div>

        {/* sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {detail.sections.map(section => (
            <SectionAccordion
              key={section.id}
              section={section}
              isOpen={open.has(section.id)}
              onToggle={() => toggle(section.id)}
              lang={lang}
            />
          ))}
        </div>

        {/* back link */}
        <div style={{ marginTop: '48px' }}>
          <Link href="/stack" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            color: 'var(--text3)', textDecoration: 'none',
            letterSpacing: '0.06em',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
            ← {lang === 'pt' ? 'voltar ao Stack Map' : 'back to Stack Map'}
          </Link>
        </div>
      </div>
    </main>
  )
}
