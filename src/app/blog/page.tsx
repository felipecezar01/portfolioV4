'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/context/LangContext'
import { posts, Post } from '@/data/posts'
import { HALL_END, HALL_START } from '@/data/hallOfFame'

const t = {
  pt: {
    label: 'blog',
    title: 'Blog',
    subtitle: 'Testes, benchmarks, epifanias e visualizações — tudo que vale documentar mas não chega a ser um projeto. Uma aventura solo de desbravamento pela TI: ferramentas, ambientes e territórios ainda inexplorados.',
    linksLabel: 'Também estou por aí em',
    newsletter: 'Newsletter · Tech News',
    count: (n: number) => `${n} ${n === 1 ? 'post' : 'posts'}`,
    read: 'Ler →',
    min: 'min',
  },
  en: {
    label: 'blog',
    title: 'Blog',
    subtitle: 'Tests, benchmarks, epiphanies and visualizations — everything worth documenting but not big enough for a repo. A solo voyage through uncharted IT territory: tools, environments and concepts waiting to be discovered.',
    linksLabel: 'You can also find me at',
    newsletter: 'Newsletter · Tech News',
    count: (n: number) => `${n} ${n === 1 ? 'post' : 'posts'}`,
    read: 'Read →',
    min: 'min',
  },
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

const ICON_MAP: Record<string, string> = {
  Python: '🐍',
  Pandas: '🐼',
  Polars: '⚡',
  DuckDB: '🦆',
  LangChain: '🔗',
  RAG: '🧠',
  LLM: '🤖',
  FastAPI: '⚡',
  Pydantic: '🛡',
  Backend: '⚙',
  Benchmark: '📊',
}

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{
      color: 'var(--text2)', textDecoration: 'none', transition: 'color 0.2s',
    }}
      onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}>
      {children}
    </a>
  )
}

function PostCard({ post, lang }: { post: Post; lang: 'pt' | 'en' }) {
  const tx = t[lang]
  const title = lang === 'pt' ? post.titlePt : post.titleEn
  const excerpt = lang === 'pt' ? post.excerptPt : post.excerptEn
  const accent = post.accent ?? 'linear-gradient(135deg, #0a1520 0%, #0d2035 100%)'

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        className="blog-post-card"
        style={{
          border: '0.5px solid var(--border)',
          borderRadius: '10px',
          background: 'var(--bg2)',
          display: 'flex',
          overflow: 'hidden',
          transition: 'all 0.25s',
          cursor: 'pointer',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.borderColor = 'var(--blue)'
          el.style.transform = 'translateY(-2px)'
          el.style.background = 'var(--bg3)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.borderColor = 'var(--border)'
          el.style.transform = 'translateY(0)'
          el.style.background = 'var(--bg2)'
        }}
      >
        {/* image — left side */}
        <div className="blog-post-thumb" style={{
          width: '200px',
          flexShrink: 0,
          background: accent,
          position: 'relative',
          borderRight: '0.5px solid var(--border)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '140px',
        }}>
          {post.image ? (
            <Image
              src={post.image}
              alt={title}
              fill
              sizes="200px"
              style={{ objectFit: 'cover', opacity: 0.85 }}
            />
          ) : (
            /* grid overlay for cyberpunk feel */
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(rgba(0,234,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,234,255,0.07) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }} />
          )}
          {/* tag icon overlay */}
          {!post.image && (
            <span style={{
              fontSize: '28px',
              position: 'relative', zIndex: 1,
              opacity: 0.6,
              filter: 'grayscale(0.3)',
            }}>
              {ICON_MAP[post.tags[0]] ?? '📝'}
            </span>
          )}
        </div>

        {/* content — right side */}
        <div style={{
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '10px',
          flex: 1,
          minWidth: 0,
        }}>
          {/* top: meta + title + excerpt */}
          <div>
            {/* meta */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              color: 'var(--text3)', letterSpacing: '0.06em',
              marginBottom: '8px',
            }}>
              <span>{formatDate(post.date, lang)}</span>
            </div>

            {/* title */}
            <div style={{
              fontFamily: 'var(--font-cyber)',
              fontSize: '16px',
              fontWeight: 700,
              color: 'var(--text)',
              lineHeight: 1.35,
              letterSpacing: '-0.02em',
              marginBottom: '8px',
            }}>
              {title}
            </div>

            {/* excerpt — 3 lines max */}
            <p style={{
              fontSize: '13px',
              color: 'var(--text2)',
              lineHeight: 1.75,
              margin: 0,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {excerpt}
            </p>
          </div>

          {/* bottom: tags + read link */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {post.tags.slice(0, 4).map(tag => (
                <span key={tag} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px',
                  padding: '2px 8px', borderRadius: '4px',
                  border: '0.5px solid rgba(0,234,255,0.25)',
                  color: 'var(--blue)',
                  background: 'rgba(0,234,255,0.06)',
                  whiteSpace: 'nowrap',
                }}>
                  {tag}
                </span>
              ))}
            </div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px',
              color: 'var(--blue)', letterSpacing: '0.04em',
              flexShrink: 0,
            }}>
              {tx.read}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function HallSideCard({ lang }: { lang: 'pt' | 'en' }) {
  return (
    <Link href="/hall-da-fama" className="hall-side-card" style={{
      textDecoration: 'none',
      border: '0.5px solid rgba(255,216,77,0.42)',
      borderRadius: '8px',
      background: 'var(--bg2)',
      width: '100%',
      minWidth: 0,
      padding: '28px 24px',
      minHeight: '280px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '22px',
      cursor: 'pointer',
      transition: 'all 0.25s',
      overflow: 'hidden',
      position: 'relative',
    }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.borderColor = 'rgba(255,216,77,0.78)'
        el.style.background = 'var(--bg3)'
        el.style.boxShadow = '0 8px 24px rgba(255,216,77,0.08), 0 2px 8px rgba(0,0,0,0.12)'
        el.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.borderColor = 'rgba(255,216,77,0.42)'
        el.style.background = 'var(--bg2)'
        el.style.boxShadow = 'none'
        el.style.transform = 'translateY(0)'
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,216,77,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,216,77,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.55), transparent 62%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '8px',
          border: '0.5px solid var(--gold-border)',
          background: 'var(--gold-dim)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--gold)',
          fontSize: '24px',
          lineHeight: 1,
          marginBottom: '22px',
        }}>
          ✦
        </div>

        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--gold)',
          opacity: 0.72,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}>
          {HALL_START} - {HALL_END}
        </div>

        <div style={{
          fontFamily: 'var(--font-cyber)',
          fontSize: '23px',
          fontWeight: 800,
          color: 'var(--gold)',
          letterSpacing: '0.01em',
          lineHeight: 1.12,
          marginBottom: '12px',
        }}>
          {lang === 'pt' ? 'Hall da Fama' : 'Hall of Fame'}
        </div>

        <p style={{
          fontSize: '13px',
          color: 'var(--text2)',
          lineHeight: 1.75,
          margin: 0,
          overflowWrap: 'break-word',
        }}>
          {lang === 'pt'
            ? 'Nomes e marcos que moldaram a computação.'
            : 'Names and milestones that shaped computing.'}
        </p>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--gold)',
          letterSpacing: '0.06em',
          borderTop: '0.5px solid var(--gold-border)',
          paddingTop: '14px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
        }}>
          <span>{lang === 'pt' ? 'Conhecer' : 'Explore'}</span>
          <span aria-hidden="true" style={{ fontSize: '15px', lineHeight: 1 }}>→</span>
        </div>
      </div>
    </Link>
  )
}

export default function BlogPage() {
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
        <span style={{ color: 'var(--blue)' }}>{tx.label}</span>
      </div>

      <div className="blog-shell" style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '60px 60px 100px',
        position: 'relative',
      }}>

        <div className="blog-header" style={{ marginBottom: '48px' }}>
          {/* header */}
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            color: 'var(--text3)', letterSpacing: '0.08em',
            textTransform: 'uppercase', marginBottom: '12px',
          }}>
            {tx.count(posts.length)}
          </div>
          <h1 style={{
            fontFamily: 'var(--font-cyber)', fontSize: '52px', fontWeight: 800,
            color: 'var(--text)', letterSpacing: '0.01em', lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            {tx.title}
          </h1>
          <p style={{
            fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85,
          }}>
            {tx.subtitle}
          </p>

          {/* external links */}
          <div style={{
            marginTop: '20px', paddingTop: '16px',
            borderTop: '0.5px solid var(--border)',
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            color: 'var(--text3)', lineHeight: 1.9,
          }}>
            {lang === 'pt' ? (
              <>
                Para notícias quentinhas diárias de TI, acompanha minha{' '}
                <ExtLink href="https://www.linkedin.com/newsletters/tech-news-7446586347982757888/">Newsletter Tech News ↗</ExtLink>
                {' '}no LinkedIn.
                {' '}Para conteúdos mais conceituais e menos dopaminérgicos, uso o{' '}
                <ExtLink href="https://medium.com/@felipecezar01">Medium ↗</ExtLink>
                {' '}ou o{' '}
                <ExtLink href="https://dev.to/felipecezar01">Dev.to ↗</ExtLink>.
              </>
            ) : (
              <>
                For daily hot tech news, follow my{' '}
                <ExtLink href="https://www.linkedin.com/newsletters/tech-news-7446586347982757888/">Tech News Newsletter ↗</ExtLink>
                {' '}on LinkedIn.
                {' '}For more conceptual and less dopamine-driven content, I use{' '}
                <ExtLink href="https://medium.com/@felipecezar01">Medium ↗</ExtLink>
                {' '}or{' '}
                <ExtLink href="https://dev.to/felipecezar01">Dev.to ↗</ExtLink>.
              </>
            )}
          </div>
        </div>

        <aside className="blog-aside" style={{
          position: 'absolute',
          top: '92px',
          left: 'calc(100% + 52px)',
          width: '280px',
        }}>
          <HallSideCard lang={lang} />
        </aside>

        {/* posts list */}
        <div className="blog-posts" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {posts.map(post => (
            <PostCard key={post.slug} post={post} lang={lang} />
          ))}
        </div>
      </div>

    </main>
  )
}
