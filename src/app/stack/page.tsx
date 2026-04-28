'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { stackCategories, categoryItemCount, StackItem } from '@/data/stack'

const t = {
  pt: {
    label: 'stack',
    title: 'Stack Map',
    subtitle: 'Um índice vivo de linguagens, bancos de dados, libs, frameworks, sistemas operacionais e formatos de arquivos que habitam o universo da TI. Itens sublinhados têm página própria com o ecossistema detalhado.',
    items: (n: number) => `${n} ${n === 1 ? 'item' : 'itens'}`,
  },
  en: {
    label: 'stack',
    title: 'Stack Map',
    subtitle: 'A living index of languages, databases, libraries, frameworks, operating systems and file formats that inhabit the IT universe. Underlined items have their own page with a detailed ecosystem.',
    items: (n: number) => `${n} ${n === 1 ? 'item' : 'items'}`,
  },
}

const visibleStackCategories = stackCategories
  .filter(cat => (
    cat.id === 'languages'
    || cat.id === 'databases'
    || cat.id === 'libs'
    || cat.id === 'frameworks'
    || cat.id === 'operating-systems'
    || cat.id === 'file-formats'
  ))
  .map(cat => ({
    ...cat,
    items: cat.items ?? cat.subcategories?.flatMap(sub => sub.items) ?? [],
    subcategories: undefined,
  }))

function ListItem({ item, index }: { item: StackItem; index: number }) {
  const num = String(index + 1).padStart(2, ' ')
  const rowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'baseline',
    gap: '10px',
    padding: '5px 0',
    borderBottom: '0.5px solid var(--border)',
  }
  const numStyle: React.CSSProperties = {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: 'var(--text3)',
    letterSpacing: '0.04em',
    flexShrink: 0,
    width: '28px',
    textAlign: 'right',
  }

  if (item.slug) {
    return (
      <div style={rowStyle}>
        <span style={numStyle}>{num}.</span>
        <Link
          href={`/stack/${item.slug}`}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: 'var(--blue)',
            textDecoration: 'underline',
            textDecorationColor: 'rgba(0,234,255,0.4)',
            textUnderlineOffset: '3px',
            transition: 'text-decoration-color 0.18s, opacity 0.18s',
            letterSpacing: '0.02em',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.textDecorationColor = 'var(--blue)'
            e.currentTarget.style.opacity = '0.8'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.textDecorationColor = 'rgba(0,234,255,0.4)'
            e.currentTarget.style.opacity = '1'
          }}
        >
          {item.name}
        </Link>
      </div>
    )
  }

  return (
    <div style={rowStyle}>
      <span style={numStyle}>{num}.</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text2)', letterSpacing: '0.02em' }}>
        {item.name}
      </span>
    </div>
  )
}

function CategoryAccordionHeader({
  icon, name, count, isOpen, onToggle, lang,
}: {
  icon: string
  name: { pt: string; en: string }
  count: number
  isOpen: boolean
  onToggle: () => void
  lang: 'pt' | 'en'
}) {
  const tx = t[lang]
  return (
    <button
      onClick={onToggle}
      style={{
        width: '100%',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '18px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        textAlign: 'left',
        transition: 'background 0.18s',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,234,255,0.03)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'none' }}
    >
      <span style={{
        width: '36px', height: '36px', borderRadius: '7px',
        border: '0.5px solid rgba(0,234,255,0.2)',
        background: 'rgba(0,234,255,0.05)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-mono)', fontSize: '13px',
        color: 'var(--blue)', flexShrink: 0,
      }}>
        {icon}
      </span>
      <span style={{
        flex: 1,
        fontFamily: 'var(--font-cyber)', fontSize: '16px', fontWeight: 700,
        color: 'var(--text)', letterSpacing: '0.01em',
      }}>
        {name[lang]}
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '11px',
        color: 'var(--blue)', opacity: 0.55, letterSpacing: '0.06em',
      }}>
        {tx.items(count)}
      </span>
      <span style={{
        color: 'var(--blue)', opacity: 0.6, fontSize: '16px', lineHeight: 1,
        transition: 'transform 0.22s',
        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
        flexShrink: 0,
      }}>
        ›
      </span>
    </button>
  )
}

export default function StackPage() {
  const { lang } = useLang()
  const tx = t[lang]
  const [open, setOpen] = useState<Set<string>>(() => new Set([visibleStackCategories[0].id]))

  function toggleCat(id: string) {
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
        <span style={{ color: 'var(--blue)' }}>{tx.label}</span>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 40px 100px' }}>

        {/* header */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            color: 'var(--blue)', letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '0.5px solid rgba(0,234,255,0.25)',
            background: 'var(--blue-dim)',
            padding: '4px 12px', borderRadius: '4px',
            marginBottom: '20px',
          }}>
            ◈ {visibleStackCategories.length} {lang === 'pt' ? 'categorias' : 'categories'}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-cyber)', fontSize: '52px', fontWeight: 800,
            color: 'var(--text)', letterSpacing: '0.01em', lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            {tx.title}
          </h1>

          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85 }}>
            {tx.subtitle}
          </p>
        </div>

        {/* accordion list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {visibleStackCategories.map(cat => {
            const isOpen = open.has(cat.id)
            const count = categoryItemCount(cat)
            return (
              <div
                key={cat.id}
                style={{
                  border: isOpen ? '0.5px solid rgba(0,234,255,0.3)' : '0.5px solid var(--border)',
                  borderRadius: '10px',
                  background: 'var(--bg2)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                <CategoryAccordionHeader
                  icon={cat.icon}
                  name={cat.name}
                  count={count}
                  isOpen={isOpen}
                  onToggle={() => toggleCat(cat.id)}
                  lang={lang}
                />

                <div style={{
                  maxHeight: isOpen ? 'none' : '0px',
                  overflow: 'hidden',
                  transition: isOpen ? 'max-height 0.4s ease' : 'max-height 0.25s ease',
                }}>
                  {/* flat items */}
                  {cat.items && (
                    <div style={{
                      padding: '0 24px 20px',
                      borderTop: '0.5px solid rgba(0,234,255,0.1)',
                      paddingTop: '4px',
                    }}>
                      {cat.items.map((item, i) => (
                        <ListItem key={`${item.name}-${i}`} item={item} index={i} />
                      ))}
                    </div>
                  )}

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
