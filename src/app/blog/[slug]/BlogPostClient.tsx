'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/data/posts'
import { useLang } from '@/context/LangContext'

const t = {
  pt: { back: 'blog', min: 'min de leitura' },
  en: { back: 'blog', min: 'min read' },
}

function formatDate(dateStr: string, lang: 'pt' | 'en') {
  const [year, month, day] = dateStr.split('-')
  const months = {
    pt: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  }
  const monthName = months[lang][parseInt(month) - 1]
  return lang === 'pt'
    ? `${parseInt(day)} de ${monthName} de ${year}`
    : `${monthName} ${parseInt(day)}, ${year}`
}

export default function BlogPostClient({
  post,
  children,
}: {
  post: Post
  children: React.ReactNode
}) {
  const { lang } = useLang()
  const tx = t[lang]
  const title = lang === 'pt' ? post.titlePt : post.titleEn

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
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          felipecezar.dev
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <Link href="/blog" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          {tx.back}
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: 'var(--blue)' }}>{post.slug}</span>
      </div>

      <div className="project-content" style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 40px 100px' }}>

        {/* header */}
        <div style={{ marginBottom: '48px' }}>
          {/* meta row */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap',
            fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text3)',
            marginBottom: '20px',
          }}>
            <span>{formatDate(post.date, lang)}</span>
          </div>

          {/* title */}
          <h1 style={{
            fontFamily: 'var(--font-cyber)',
            fontSize: 'clamp(26px, 4vw, 36px)',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}>
            {title}
          </h1>

          {/* tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '32px' }}>
            {post.tags.map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                padding: '4px 12px', borderRadius: '4px',
                border: '0.5px solid var(--border2)',
                color: 'var(--blue)',
                background: 'color-mix(in srgb, var(--blue) 8%, transparent)',
              }}>
                {tag}
              </span>
            ))}
          </div>

          {post.image && (
            <div style={{
              border: '0.5px solid var(--border)',
              borderRadius: '8px',
              overflow: 'hidden',
              background: 'var(--bg2)',
              marginBottom: '32px',
            }}>
              <Image
                src={post.image}
                alt={title}
                width={1254}
                height={1254}
                priority
                sizes="(max-width: 720px) 100vw, 720px"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          )}

          <div style={{ height: '0.5px', background: 'var(--border)' }} />
        </div>

        {/* content */}
        <div style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.95 }}>
          {children}
        </div>

      </div>
    </>
  )
}
