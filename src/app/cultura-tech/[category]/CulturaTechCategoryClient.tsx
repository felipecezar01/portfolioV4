'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import type { CulturaTechCategory, CulturaTechItem } from '@/data/culturaTech'
import type { Lang } from '@/types'

const PURPLE = '#bf5fff'

const t = {
  pt: {
    cultura: 'cultura tech',
  },
  en: {
    cultura: 'tech culture',
  },
}

function DescriptionText({ text }: { text: string }) {
  return text.split('\n\n').map(paragraph => (
    <p
      key={paragraph}
      className="page-subtitle"
      style={{
        fontSize: '15px',
        color: 'var(--text2)',
        lineHeight: 1.85,
        margin: '0 0 16px',
      }}
    >
      {paragraph}
    </p>
  ))
}

function EntryList({
  items,
  lang,
  color,
  showHrefAsTitle = false,
}: {
  items: CulturaTechItem[]
  lang: Lang
  color: string
  showHrefAsTitle?: boolean
}) {
  function renderTitle(item: CulturaTechItem, size = showHrefAsTitle && item.href ? '14px' : '18px') {
    const label = showHrefAsTitle && item.href ? item.href : item.title[lang]

    return item.href ? (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        style={{
          color,
          fontFamily: showHrefAsTitle ? 'var(--font-mono)' : 'var(--font-cyber)',
          fontSize: size,
          fontWeight: showHrefAsTitle ? 600 : 800,
          lineHeight: 1.35,
          textDecoration: 'underline',
          textUnderlineOffset: '5px',
          overflowWrap: 'anywhere',
          wordBreak: 'break-word',
        }}
      >
        {label} <span aria-hidden="true">↗</span>
      </a>
    ) : (
      <strong style={{
        color,
        fontFamily: 'var(--font-cyber)',
        fontSize: size,
        fontWeight: 800,
        lineHeight: 1.25,
      }}>
        {item.title[lang]}
      </strong>
    )
  }

  return (
    <ol style={{
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '22px',
    }}>
      {items.map((item, index) => (
        <li
          key={`${item.title[lang]}-${index}`}
          style={{
            display: 'grid',
            gridTemplateColumns: '44px 1fr',
            gap: '12px',
            borderTop: index === 0 ? `0.5px solid color-mix(in srgb, ${color} 34%, transparent)` : '0.5px solid var(--border)',
            paddingTop: '18px',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color,
            lineHeight: 1.7,
          }}>
            {index + 1}.
          </span>

          <div>
            {renderTitle(item)}

            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--text2)',
              lineHeight: 1.75,
              margin: '10px 0 0',
            }}>
              {item.description[lang]}
            </p>

            {item.subItems && (
              <ol style={{
                listStyle: 'none',
                padding: 0,
                margin: '18px 0 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                {item.subItems.map((subItem, subIndex) => (
                  <li
                    key={`${subItem.title[lang]}-${subIndex}`}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '48px 1fr',
                      gap: '10px',
                      paddingTop: '14px',
                      borderTop: '0.5px solid var(--border)',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color,
                      lineHeight: 1.7,
                    }}>
                      {index + 1}.{subIndex + 1}
                    </span>
                    <div>
                      {renderTitle(subItem, showHrefAsTitle && subItem.href ? '12px' : '15px')}
                      <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: 'var(--text2)',
                        lineHeight: 1.7,
                        margin: '8px 0 0',
                      }}>
                        {subItem.description[lang]}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function CulturaTechCategoryClient({ category }: { category: CulturaTechCategory }) {
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
        <Link href="/cultura-tech" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = PURPLE)}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          {tx.cultura}
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: category.color }}>{category.title[lang].toLowerCase()}</span>
      </div>

      <div className="culture-shell page-shell" style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 40px 100px' }}>
        <header style={{ marginBottom: '42px' }}>
          <h1 className="page-title" style={{
            fontFamily: 'var(--font-cyber)', fontSize: '52px', fontWeight: 800,
            color: category.color, letterSpacing: '0.01em', lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            {category.title[lang]}
          </h1>
          <div>
            <DescriptionText text={category.description[lang]} />
          </div>
        </header>

        {category.sections ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {category.sections.map(section => (
              <details
                key={section.title[lang]}
                open={section.defaultOpen}
                style={{
                  borderTop: `0.5px solid color-mix(in srgb, ${category.color} 32%, transparent)`,
                  borderBottom: '0.5px solid var(--border)',
                  padding: '18px 0 22px',
                }}
              >
                <summary style={{
                  cursor: 'pointer',
                  color: category.color,
                  fontFamily: 'var(--font-cyber)',
                  fontSize: '22px',
                  fontWeight: 800,
                  lineHeight: 1.25,
                }}>
                  {section.title[lang]}
                </summary>

                <div style={{ marginTop: '22px' }}>
                  <EntryList
                    items={section.items}
                    lang={lang}
                    color={category.color}
                    showHrefAsTitle={category.slug === 'sites'}
                  />
                </div>
              </details>
            ))}
          </div>
        ) : (
          <EntryList
            items={category.items ?? []}
            lang={lang}
            color={category.color}
            showHrefAsTitle={category.slug === 'sites'}
          />
        )}
      </div>
    </main>
  )
}
