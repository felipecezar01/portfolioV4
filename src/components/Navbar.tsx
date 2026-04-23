'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect, type MouseEvent } from 'react'
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

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme()
  const { lang, setLang } = useLang()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const isDark = !mounted || resolvedTheme === 'dark'
  const isBlog = pathname?.startsWith('/blog') ?? false

  const navLinks = {
    pt: ['Sobre', 'Educação', 'Jornada', 'Projetos', 'Skills'],
    en: ['About', 'Education', 'Journey', 'Projects', 'Skills'],
  }
  const anchors = ['/#sobre', '/#educacao', '/#jornada', '/#projetos', '/#skills']
  const blogLabel = { pt: '☕ Blog', en: '☕ Blog' }
  const langFlag = { pt: '🇧🇷', en: '🇺🇸' }

  const bgColor = isDark ? 'rgba(8,8,8,0.96)' : 'rgba(248,248,246,0.98)'

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
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
      <nav style={{
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

        {/* desktop section links — hidden on blog pages */}
        {!isBlog && (
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

          {/* blog link */}
          <Link href="/blog" style={{
            fontSize: '12px', fontFamily: 'var(--font-mono)',
            padding: '4px 14px', borderRadius: '20px',
            border: `0.5px solid ${isBlog ? COFFEE : 'var(--border2)'}`,
            background: isBlog ? COFFEE_DIM : 'transparent',
            color: isBlog ? COFFEE : 'var(--text2)',
            textDecoration: 'none', transition: 'all 0.2s',
            letterSpacing: '0.04em',
            boxShadow: isBlog ? `0 0 8px rgba(212,136,90,0.3)` : 'none',
          }}
            onMouseEnter={e => {
              if (!isBlog) {
                e.currentTarget.style.borderColor = COFFEE
                e.currentTarget.style.color = COFFEE
                e.currentTarget.style.background = COFFEE_DIM
                e.currentTarget.style.boxShadow = '0 0 8px rgba(212,136,90,0.3)'
              }
            }}
            onMouseLeave={e => {
              if (!isBlog) {
                e.currentTarget.style.borderColor = 'var(--border2)'
                e.currentTarget.style.color = 'var(--text2)'
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.boxShadow = 'none'
              }
            }}>
            {blogLabel[lang]}
          </Link>

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
          <Link href="/blog"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: '13px', color: isBlog ? COFFEE : 'var(--text2)',
              textDecoration: 'none', padding: '10px 0',
              borderBottom: '0.5px solid var(--border)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = COFFEE)}
            onMouseLeave={e => (e.currentTarget.style.color = isBlog ? COFFEE : 'var(--text2)')}>
            {blogLabel[lang]}
          </Link>
          {!isBlog && navLinks[lang].map((label, i) => (
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
