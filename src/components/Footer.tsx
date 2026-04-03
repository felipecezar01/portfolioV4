'use client'

export default function Footer() {
  return (
    <footer className="footer-main" style={{
      borderTop: '0.5px solid var(--border)',
      padding: '32px 60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'var(--bg2)',
      fontFamily: 'var(--font-mono)',
    }}>
      <span style={{ fontSize: '12px', color: 'var(--text2)' }}>
        © 2025 <span style={{ color: 'var(--blue)' }}>felipecezar.dev</span> — feito com Next.js & ☕
      </span>
      <div style={{ display: 'flex', gap: '20px' }}>
        {[
          ['GitHub', 'https://github.com/felipecezar01'],
          ['LinkedIn', 'https://www.linkedin.com/in/felipecezarcruz/'],
        ].map(([label, url]) => (
          <a key={label} href={url} target="_blank" rel="noreferrer" style={{
            fontSize: '12px', color: 'var(--text2)',
            textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '6px 14px', borderRadius: '6px',
            border: '0.5px solid var(--border2)',
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
            {label} ↗
          </a>
        ))}
      </div>
    </footer>
  )
}