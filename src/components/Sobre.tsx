'use client'

import Image from 'next/image'
import { Lang } from '@/types'

const t = {
  pt: {
    title: 'Sobre',
    text: <>Olá, sou Felipe — desenvolvedor fullstack com especialização em dados, baseado no <strong style={{color:'var(--blue)',fontWeight:500}}>Ceará, Brasil</strong>. Atuo no <span style={{color:'var(--red)'}}>desenvolvimento fullstack</span> e em <span style={{color:'var(--green)'}}>dados e inteligência artificial</span>, com foco em aplicações web, pipelines de dados e machine learning aplicado.<br/><br/>Acredito que boas soluções nascem da interseção entre <strong style={{color:'var(--text)',fontWeight:500}}>código bem estruturado</strong> e <strong style={{color:'var(--text)',fontWeight:500}}>dados bem interpretados</strong>.</>
  },
  en: {
    title: 'About',
    text: <>Hi, I'm Felipe — fullstack developer with a specialization in data, based in <strong style={{color:'var(--blue)',fontWeight:500}}>Ceará, Brazil</strong>. I work across <span style={{color:'var(--red)'}}>fullstack development</span> and <span style={{color:'var(--green)'}}>data & AI</span>, focusing on web applications, data pipelines and applied machine learning.<br/><br/>I believe great solutions arise from the intersection of <strong style={{color:'var(--text)',fontWeight:500}}>well-structured code</strong> and <strong style={{color:'var(--text)',fontWeight:500}}>well-interpreted data</strong>.</>
  }
}

export default function Sobre({ lang }: { lang: Lang }) {
  const tx = t[lang]
  return (
    <section className="section-main" id="sobre" style={{ padding: '100px 0', borderTop: '0.5px solid var(--border)' }}>
      <div className="container-main" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '52px' }}>
          <span style={{ fontSize: '10px', color: 'var(--text3)', letterSpacing: '0.1em' }}>01</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, color: 'var(--text)' }}>{tx.title}</span>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        </div>
        <div className="sobre-grid" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px', alignItems: 'start' }}>
          <div style={{
            width: '120px', height: '120px', borderRadius: '12px',
            background: 'var(--bg3)', border: '0.5px solid var(--border2)',
            overflow: 'hidden', position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Image
              src="/avatar.png"
              alt="Felipe Cezar"
              fill
              sizes="120px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.9 }}>{tx.text}</p>
        </div>
      </div>
    </section>
  )
}
