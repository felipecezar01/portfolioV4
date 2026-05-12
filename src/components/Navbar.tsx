'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect, useRef, type MouseEvent as ReactMouseEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from '@/context/LangContext'

export type Lang = 'pt' | 'en'

const PURPLE = '#bf5fff'
const PURPLE_DIM = 'rgba(191,95,255,0.10)'
const YELLOW = '#ffd84d'
const YELLOW_DIM = 'rgba(255,216,77,0.10)'
const COFFEE = '#d4885a'
const COFFEE_DIM = 'rgba(212,136,90,0.10)'

const BLOG_SHORTCUT = {
  href: '/blog',
  title: { pt: '☕ Blog', en: '☕ Blog' },
}

const EXPLORE_LINKS = [
  {
    href: '/blog',
    color: COFFEE,
    title: { pt: 'Blog', en: 'Blog' },
    description: { pt: 'Posts técnicos e experimentos.', en: 'Technical posts and experiments.' },
  },
  {
    href: '/historia-da-tecnologia',
    color: 'var(--gold)',
    title: { pt: 'História da Tecnologia', en: 'History of Technology' },
    description: { pt: 'Linha do tempo, nomes e marcos.', en: 'Timeline, names and milestones.' },
  },
  {
    href: '/ai-arena',
    color: 'var(--green)',
    title: { pt: 'AI Arena', en: 'AI Arena' },
    description: { pt: 'Benchmarks e comparativos de IA.', en: 'AI benchmarks and comparisons.' },
  },
  {
    href: '/carreira-tech',
    color: 'var(--blue)',
    title: { pt: 'Carreira Tech', en: 'Carreira Tech' },
    description: { pt: 'Mercado, trilhas e bastidores.', en: 'Market, paths and career notes.' },
  },
]

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme()
  const { lang, setLang } = useLang()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)
  const exploreRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    setMenuOpen(false)
    setExploreOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (!exploreRef.current?.contains(event.target as Node)) setExploreOpen(false)
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExploreOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const isDark = !mounted || resolvedTheme === 'dark'
  const editorialPrefixes = ['/blog', '/historia-da-tecnologia', '/ai-arena', '/carreira-tech']
  const isEditorialArea = editorialPrefixes.some(prefix => pathname === prefix || (pathname?.startsWith(`${prefix}/`) ?? false))
  const showPortfolioLinks = !isEditorialArea
  const showBlogShortcut = !isEditorialArea
  const showExploreMenu = isEditorialArea
  const exploreLinks = pathname?.startsWith('/blog')
    ? EXPLORE_LINKS.filter(item => item.href !== '/blog')
    : EXPLORE_LINKS

  const navLinks = {
    pt: ['Sobre', 'Educação', 'Jornada', 'Projetos', 'Skills'],
    en: ['About', 'Education', 'Journey', 'Projects', 'Skills'],
  }
  const anchors = ['/#sobre', '/#educacao', '/#jornada', '/#projetos', '/#skills']
  const exploreLabel = { pt: 'Explorar', en: 'Explore' }
  const langFlag = { pt: '🇧🇷', en: '🇺🇸' }

  const bgColor = isDark ? 'rgba(8,8,8,0.96)' : 'rgba(248,248,246,0.98)'

  const isRouteActive = (href: string) => pathname === href || (pathname?.startsWith(`${href}/`) ?? false)

  const handleAnchorClick = (event: ReactMouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    const targetId = href.split('#')[1]
    if (!targetId || window.location.pathname !== '/') return
    const target = document.getElementById(targetId)
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (window.location.hash !== `#${targetId}`) window.history.pushState(null, '', `/#${targetId}`)
  }

  /* ── theme hover color based on what you're switching TO ── */
  const themeHoverColor = isDark ? YELLOW : PURPLE
  const themeHoverDim   = isDark ? YELLOW_DIM : PURPLE_DIM
  const themeHoverGlow  = isDark
    ? '0 0 10px rgba(255,216,77,0.35)'
    : '0 0 10px rgba(191,95,255,0.35)'

  /* ── lang button hover helpers ── */
  const langHover = {
    pt: { color: 'var(--green)', border: 'var(--green)', bg: 'var(--green-dim)', glow: '0 0 8px rgba(57,255,20,0.3)' },
    en: { color: 'var(--red)',   border: 'var(--red)',   bg: 'var(--red-dim)',   glow: '0 0 8px rgba(255,45,85,0.3)'  },
  }

  const themeIcon = mounted ? (isDark ? '🌙' : '☀') : '🌙'

  return (
    <>
      <nav className="navbar-main" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', height: '56px',
        background: bgColor,
        backdropFilter: 'blur(12px)',
        borderBottom: '0.5px solid var(--border)',
        fontFamily: 'var(--font-mono)',
      }}>
        {/* logo */}
        <Link href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700, color: 'var(--text)', textDecoration: 'none', letterSpacing: '-0.02em', flexShrink: 0 }}>
          felipecezar<span style={{ color: 'var(--blue)' }}>.</span><span style={{ color: 'var(--text2)' }}>dev</span>
        </Link>

        {/* desktop section links — portfolio side only */}
        {showPortfolioLinks && (
          <div className="nav-links-desktop" style={{ display: 'flex', gap: '32px' }}>
            {navLinks[lang].map((label, i) => (
              <Link key={i} href={anchors[i]}
                style={{ fontSize: '12px', color: 'var(--text2)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s' }}
                onClick={e => handleAnchorClick(e, anchors[i])}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}>
                {label}
              </Link>
            ))}
          </div>
        )}

        {/* desktop controls */}
        <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

          {/* blog shortcut — portfolio side only */}
          {showBlogShortcut && (
            <Link href={BLOG_SHORTCUT.href} style={{
              fontSize: '12px', fontFamily: 'var(--font-mono)',
              padding: '4px 14px', borderRadius: '20px',
              border: '0.5px solid var(--border2)',
              background: 'transparent',
              color: 'var(--text2)',
              textDecoration: 'none', transition: 'all 0.2s',
              letterSpacing: '0.04em',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = COFFEE
                e.currentTarget.style.color = COFFEE
                e.currentTarget.style.background = COFFEE_DIM
                e.currentTarget.style.boxShadow = '0 0 8px rgba(212,136,90,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border2)'
                e.currentTarget.style.color = 'var(--text2)'
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              {BLOG_SHORTCUT.title[lang]}
            </Link>
          )}

          {/* explore menu */}
          {showExploreMenu && (
          <div ref={exploreRef} style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setExploreOpen(open => !open)}
              aria-haspopup="menu"
              aria-expanded={exploreOpen}
              style={{
              fontSize: '12px', fontFamily: 'var(--font-mono)',
              padding: '4px 14px', borderRadius: '20px',
              border: `0.5px solid ${exploreOpen ? COFFEE : 'var(--border2)'}`,
              background: exploreOpen ? COFFEE_DIM : 'transparent',
              color: exploreOpen ? COFFEE : 'var(--text2)',
              cursor: 'pointer', transition: 'all 0.2s',
              letterSpacing: '0.04em',
              display: 'flex', alignItems: 'center', gap: '6px',
              boxShadow: exploreOpen ? '0 0 8px rgba(212,136,90,0.3)' : 'none',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = COFFEE
                e.currentTarget.style.color = COFFEE
                e.currentTarget.style.background = COFFEE_DIM
                e.currentTarget.style.boxShadow = '0 0 8px rgba(212,136,90,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = exploreOpen ? COFFEE : 'var(--border2)'
                e.currentTarget.style.color = exploreOpen ? COFFEE : 'var(--text2)'
                e.currentTarget.style.background = exploreOpen ? COFFEE_DIM : 'transparent'
                e.currentTarget.style.boxShadow = exploreOpen ? '0 0 8px rgba(212,136,90,0.3)' : 'none'
              }}>
              {exploreLabel[lang]}
              <span aria-hidden="true" style={{ fontSize: '10px', transform: exploreOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>⌄</span>
            </button>

            {exploreOpen && (
              <div
                role="menu"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 10px)',
                  right: 0,
                  width: '292px',
                  padding: '8px',
                  border: '0.5px solid var(--border)',
                  borderRadius: '10px',
                  background: bgColor,
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 18px 50px rgba(0,0,0,0.35)',
                }}
              >
                {exploreLinks.map(item => {
                  const active = isRouteActive(item.href)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setExploreOpen(false)}
                      style={{
                        display: 'block',
                        padding: '10px 11px',
                        borderRadius: '7px',
                        border: `0.5px solid ${active ? item.color : 'transparent'}`,
                        background: active ? 'color-mix(in srgb, var(--bg3) 84%, transparent)' : 'transparent',
                        color: 'var(--text)',
                        textDecoration: 'none',
                        transition: 'background 0.2s, border-color 0.2s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = item.color
                        e.currentTarget.style.background = 'var(--bg3)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = active ? item.color : 'transparent'
                        e.currentTarget.style.background = active ? 'color-mix(in srgb, var(--bg3) 84%, transparent)' : 'transparent'
                      }}
                    >
                      <span style={{
                        display: 'block',
                        fontFamily: 'var(--font-cyber)',
                        fontSize: '14px',
                        fontWeight: 800,
                        color: item.color,
                        lineHeight: 1.2,
                        marginBottom: '4px',
                      }}>
                        {item.title[lang]}
                      </span>
                      <span style={{
                        display: 'block',
                        fontSize: '11px',
                        color: 'var(--text3)',
                        lineHeight: 1.45,
                      }}>
                        {item.description[lang]}
                      </span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
          )}

          {/* PT / EN buttons */}
          {(['pt', 'en'] as const).map(l => {
            const isActive = lang === l
            const h = langHover[l]
            return (
              <button key={l} onClick={() => setLang(l)} style={{
                fontSize: '12px', fontFamily: 'var(--font-mono)',
                padding: '4px 12px', borderRadius: '20px',
                border: `0.5px solid ${isActive ? (l === 'pt' ? 'var(--green)' : 'var(--red)') : 'var(--border2)'}`,
                background: isActive ? (l === 'pt' ? 'var(--green-dim)' : 'var(--red-dim)') : 'transparent',
                color: isActive ? (l === 'pt' ? 'var(--green)' : 'var(--red)') : 'var(--text2)',
                cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: isActive ? (l === 'pt' ? '0 0 8px rgba(57,255,20,0.2)' : '0 0 8px rgba(255,45,85,0.2)') : 'none',
              }}
                onMouseEnter={e => {
                  if (isActive) return
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.borderColor = h.border
                  el.style.color = h.color
                  el.style.background = h.bg
                  el.style.boxShadow = h.glow
                }}
                onMouseLeave={e => {
                  if (isActive) return
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.borderColor = 'var(--border2)'
                  el.style.color = 'var(--text2)'
                  el.style.background = 'transparent'
                  el.style.boxShadow = 'none'
                }}>
                {langFlag[l]} {l.toUpperCase()}
              </button>
            )
          })}

          {/* theme toggle */}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            style={{
              width: '32px', height: '32px', borderRadius: '8px',
              border: '0.5px solid var(--border2)', background: 'transparent',
              color: 'var(--text2)', cursor: 'pointer', fontSize: '16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.borderColor = themeHoverColor
              el.style.color = themeHoverColor
              el.style.background = themeHoverDim
              el.style.boxShadow = themeHoverGlow
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.borderColor = 'var(--border2)'
              el.style.color = 'var(--text2)'
              el.style.background = 'transparent'
              el.style.boxShadow = 'none'
            }}>
            {themeIcon}
          </button>
        </div>

        {/* mobile controls */}
        <div style={{ display: 'none', alignItems: 'center', gap: '8px' }} className="nav-mobile-menu">
          {(['pt', 'en'] as const).map(l => {
            const isActive = lang === l
            const h = langHover[l]
            return (
              <button key={l} onClick={() => setLang(l)} style={{
                fontSize: '11px', fontFamily: 'var(--font-mono)',
                padding: '3px 9px', borderRadius: '20px',
                border: `0.5px solid ${isActive ? (l === 'pt' ? 'var(--green)' : 'var(--red)') : 'var(--border2)'}`,
                background: isActive ? (l === 'pt' ? 'var(--green-dim)' : 'var(--red-dim)') : 'transparent',
                color: isActive ? (l === 'pt' ? 'var(--green)' : 'var(--red)') : 'var(--text2)',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  if (isActive) return
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.borderColor = h.border
                  el.style.color = h.color
                  el.style.background = h.bg
                  el.style.boxShadow = h.glow
                }}
                onMouseLeave={e => {
                  if (isActive) return
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.borderColor = 'var(--border2)'
                  el.style.color = 'var(--text2)'
                  el.style.background = 'transparent'
                  el.style.boxShadow = 'none'
                }}>
                {langFlag[l]} {l.toUpperCase()}
              </button>
            )
          })}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            style={{
              width: '28px', height: '28px', borderRadius: '6px',
              border: '0.5px solid var(--border2)', background: 'transparent',
              color: 'var(--text2)', cursor: 'pointer', fontSize: '15px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.borderColor = themeHoverColor
              el.style.color = themeHoverColor
              el.style.background = themeHoverDim
              el.style.boxShadow = themeHoverGlow
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.borderColor = 'var(--border2)'
              el.style.color = 'var(--text2)'
              el.style.background = 'transparent'
              el.style.boxShadow = 'none'
            }}>
            {themeIcon}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            width: '28px', height: '28px', borderRadius: '6px',
            border: '0.5px solid var(--border2)', background: 'transparent',
            color: 'var(--text2)', cursor: 'pointer', fontSize: '16px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '56px', left: 0, right: 0, zIndex: 99,
          background: bgColor,
          borderBottom: '0.5px solid var(--border)',
          padding: '16px 20px',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {showBlogShortcut && (
            <Link href={BLOG_SHORTCUT.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '13px', color: 'var(--text2)',
                textDecoration: 'none', padding: '10px 0',
                borderBottom: '0.5px solid var(--border)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = COFFEE)}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}>
              {BLOG_SHORTCUT.title[lang]}
            </Link>
          )}
          {showExploreMenu && (
            <>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--text3)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0 0 6px',
              }}>
                {exploreLabel[lang]}
              </div>
              {exploreLinks.map(item => {
                const active = isRouteActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      color: active ? item.color : 'var(--text2)',
                      textDecoration: 'none', padding: '10px 0',
                      borderBottom: '0.5px solid var(--border)',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = item.color)}
                    onMouseLeave={e => (e.currentTarget.style.color = active ? item.color : 'var(--text2)')}>
                    <span style={{
                      display: 'block',
                      fontFamily: 'var(--font-cyber)',
                      fontSize: '14px',
                      fontWeight: 800,
                      lineHeight: 1.2,
                    }}>
                      {item.title[lang]}
                    </span>
                    <span style={{
                      display: 'block',
                      marginTop: '3px',
                      fontSize: '11px',
                      color: 'var(--text3)',
                      lineHeight: 1.45,
                    }}>
                      {item.description[lang]}
                    </span>
                  </Link>
                )
              })}
            </>
          )}
          {showPortfolioLinks && navLinks[lang].map((label, i) => (
            <Link key={i} href={anchors[i]}
              onClick={e => { setMenuOpen(false); handleAnchorClick(e, anchors[i]) }}
              style={{
                fontSize: '13px', color: 'var(--text2)',
                textDecoration: 'none', padding: '10px 0',
                borderBottom: '0.5px solid var(--border)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
