'use client'

import { Lang } from '@/types'

const t = {
  pt: {
    available: 'disponível para projetos',
    role_sw: 'Engenheiro de Software',
    role_ds: 'Cientista de Dados',
    desc: 'Construindo sistemas robustos e soluções orientadas a dados. Apaixonado por código limpo, arquitetura escalável e análise que gera valor real.',
    cv: '↓ download CV',
    projects: 'ver projetos',
  },
  en: {
    available: 'available for projects',
    role_sw: 'Software Engineer',
    role_ds: 'Data Scientist',
    desc: 'Building robust systems and data-driven solutions. Passionate about clean code, scalable architecture and analysis that generates real value.',
    cv: '↓ download CV',
    projects: 'see projects',
  },
}

export default function Hero({ lang }: { lang: Lang }) {
  const tx = t[lang]
  return (
    <section className="section-main" id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '56px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
        backgroundImage: 'linear-gradient(var(--blue) 1px, transparent 1px), linear-gradient(90deg, var(--blue) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div className="container-main" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 60px', position: 'relative', zIndex: 1, width: '100%' }}>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '11px', color: 'var(--blue)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px' }}>
          <span style={{ width: '28px', height: '1px', background: 'var(--blue)', display: 'inline-block' }} />
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          {tx.available}
        </div>

        <h1 className="hero-name" style={{
          fontFamily: '"Syne", sans-serif',
          fontSize: 'clamp(64px, 9vw, 110px)',
          fontWeight: 700,
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '20px',
        }}>
          Felipe<br />Cezar
        </h1>

        <div className="hero-roles" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', padding: '6px 16px', borderRadius: '4px', border: '0.5px solid var(--red)', color: 'var(--red)', background: 'var(--red-dim)' }}>
            {tx.role_sw}
          </span>
          <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', padding: '6px 16px', borderRadius: '4px', border: '0.5px solid var(--green)', color: 'var(--green)', background: 'var(--green-dim)' }}>
            {tx.role_ds}
          </span>
        </div>

        <p style={{ fontSize: '14px', color: 'var(--text2)', maxWidth: '520px', lineHeight: 1.8, marginBottom: '36px' }}>
          {tx.desc}
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '24px' }}>
          <a href="/curriculo-felipe.pdf" download
            style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', padding: '11px 24px', borderRadius: '6px', background: 'var(--blue)', color: '#080808', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            {tx.cv}
          </a>
          <a href="#projetos"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', padding: '11px 24px', borderRadius: '6px', background: 'transparent', color: 'var(--text2)', border: '0.5px solid var(--border2)', textDecoration: 'none' }}>
            {tx.projects}
          </a>
        </div>

        <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
          {[
            {
              label: 'GitHub',
              url: 'https://github.com/felipecezar01',
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              )
            },
            {
              label: 'LinkedIn',
              url: 'https://linkedin.com/in/felipecezar01',
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              )
            }
          ].map(({ label, url, icon }) => (
            <a key={label} href={url} target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '12px', color: 'var(--text2)',
                textDecoration: 'none',
                padding: '8px 16px', borderRadius: '6px',
                border: '0.5px solid var(--border2)',
                background: 'var(--bg2)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'var(--blue)'
                el.style.color = 'var(--blue)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'var(--border2)'
                el.style.color = 'var(--text2)'
              }}>
              {icon} {label}
            </a>
          ))}
        </div>
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
    </section>
  )
}