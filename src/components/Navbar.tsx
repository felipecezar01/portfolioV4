'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { useLang } from '@/context/LangContext'

export type Lang = 'pt' | 'en'

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme()
  const { lang, setLang } = useLang()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const isDark = !mounted || resolvedTheme === 'dark'

  const navLinks = {
    pt: ['sobre', 'educação', 'jornada', 'projetos', 'skills'],
    en: ['about', 'education', 'journey', 'projects', 'skills'],
  }
  const anchors = ['#sobre', '#educacao', '#jornada', '#projetos', '#skills']

  const bgColor = isDark ? 'rgba(8,8,8,0.96)' : 'rgba(248,248,246,0.98)'

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
        <a href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700, color: 'var(--text)', textDecoration: 'none', letterSpacing: '-0.02em', flexShrink: 0 }}>
          felipecezar<span style={{ color: 'var(--blue)' }}>.</span><span style={{ color: 'var(--text2)' }}>dev</span>
        </a>

        {/* desktop links */}
        <div className="nav-links-desktop" style={{ display: 'flex', gap: '32px' }}>
          {navLinks[lang].map((label, i) => (
            <a key={i} href={anchors[i]} style={{ fontSize: '12px', color: 'var(--text2)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}>
              {label}
            </a>
          ))}
        </div>

        {/* desktop controls */}
        <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {(['pt', 'en'] as const).map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              fontSize: '11px', fontFamily: 'var(--font-mono)',
              padding: '4px 12px', borderRadius: '20px',
              border: `0.5px solid ${lang === l ? (l === 'pt' ? 'var(--green)' : 'var(--red)') : 'var(--border2)'}`,
              background: lang === l ? (l === 'pt' ? 'var(--green-dim)' : 'var(--red-dim)') : 'transparent',
              color: lang === l ? (l === 'pt' ? 'var(--green)' : 'var(--red)') : 'var(--text2)',
              cursor: 'pointer', transition: 'all 0.2s',
              boxShadow: lang === l ? (l === 'pt' ? '0 0 8px rgba(57,255,20,0.2)' : '0 0 8px rgba(255,45,85,0.2)') : 'none',
            }}>{l.toUpperCase()}</button>
          ))}
          <button onClick={() => setTheme(isDark ? 'light' : 'dark')} style={{
            width: '32px', height: '32px', borderRadius: '8px',
            border: '0.5px solid var(--border2)', background: 'transparent',
            color: 'var(--text2)', cursor: 'pointer', fontSize: '15px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {mounted ? (isDark ? '◑' : '◐') : '◑'}
          </button>
        </div>

        {/* mobile controls */}
        <div style={{ display: 'none', alignItems: 'center', gap: '8px' }} className="nav-mobile-menu">
          {(['pt', 'en'] as const).map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              fontSize: '10px', fontFamily: 'var(--font-mono)',
              padding: '3px 9px', borderRadius: '20px',
              border: `0.5px solid ${lang === l ? (l === 'pt' ? 'var(--green)' : 'var(--red)') : 'var(--border2)'}`,
              background: lang === l ? (l === 'pt' ? 'var(--green-dim)' : 'var(--red-dim)') : 'transparent',
              color: lang === l ? (l === 'pt' ? 'var(--green)' : 'var(--red)') : 'var(--text2)',
              cursor: 'pointer',
            }}>{l.toUpperCase()}</button>
          ))}
          <button onClick={() => setTheme(isDark ? 'light' : 'dark')} style={{
            width: '28px', height: '28px', borderRadius: '6px',
            border: '0.5px solid var(--border2)', background: 'transparent',
            color: 'var(--text2)', cursor: 'pointer', fontSize: '13px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {mounted ? (isDark ? '◑' : '◐') : '◑'}
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
          {navLinks[lang].map((label, i) => (
            <a key={i} href={anchors[i]}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '13px', color: 'var(--text2)',
                textDecoration: 'none', padding: '10px 0',
                borderBottom: '0.5px solid var(--border)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}>
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}