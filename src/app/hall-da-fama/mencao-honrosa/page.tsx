'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'

const SILVER = '#b0b8c8'
const SILVER_DIM = 'color-mix(in srgb, #b0b8c8 10%, transparent)'
const SILVER_BORDER = 'color-mix(in srgb, #b0b8c8 30%, transparent)'

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text3)',
  marginBottom: '3px',
}

const valueStyle: React.CSSProperties = {
  fontSize: '14px',
  color: 'var(--text2)',
  lineHeight: 1.5,
}

function PersonPhoto({ base, name }: { base: string; name: string }) {
  const [src, setSrc] = useState(`${base}.jpg`)
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <span style={{ fontSize: '40px', color: SILVER, opacity: 0.2 }}>✧</span>
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      onError={() => {
        if (src.endsWith('.jpg')) setSrc(`${base}.png`)
        else if (src.endsWith('.png')) setSrc(`${base}.webp`)
        else setFailed(true)
      }}
      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
    />
  )
}

type Person = {
  name: string
  image: string
  year: number
  flag: string
  nationality: { pt: string; en: string }
  formation: { pt: string; en: string }
  role: { pt: string; en: string }
  summary: { pt: string; en: string }
  detail: { pt: string; en: string }
  imageNote?: { pt: string; en: string }
}

const people: Person[] = [
  {
    name: 'Gottfried Wilhelm Leibniz',
    image: '/hall/gottfried',
    year: 1703,
    flag: '🇩🇪',
    nationality: { pt: 'Alemão', en: 'German' },
    formation: {
      pt: 'Matemática e Filosofia, Univ. de Leipzig · Doutorado em Direito, Univ. de Altdorf',
      en: 'Mathematics and Philosophy, Univ. of Leipzig · PhD in Law, Univ. of Altdorf',
    },
    role: { pt: 'O Arquiteto da Lógica', en: 'The Architect of Logic' },
    summary: {
      pt: 'Provou e documentou o sistema binário — a matemática por trás de todo processador moderno',
      en: 'Proved and documented the binary system — the mathematics behind every modern processor',
    },
    detail: {
      pt: 'Foi o matemático que provou e documentou o sistema binário. Ele enxergou que a complexidade do universo poderia ser reduzida a apenas dois estados: o zero e o um. Ele não construiu uma máquina, mas escreveu a teoria matemática que rege todos os nossos processadores hoje.',
      en: 'He was the mathematician who proved and documented the binary system. He saw that the complexity of the universe could be reduced to just two states: zero and one. He did not build a machine, but wrote the mathematical theory that governs all our processors today.',
    },
  },
  {
    name: 'Basile Bouchon',
    image: '/hall/basile',
    year: 1725,
    flag: '🇫🇷',
    nationality: { pt: 'Francês', en: 'French' },
    formation: {
      pt: 'Autodidata · Mestre tecelão em Lyon',
      en: 'Self-taught · Master weaver in Lyon',
    },
    role: { pt: 'O Pioneiro do Hardware', en: 'The Hardware Pioneer' },
    summary: {
      pt: 'Primeiro a materializar o zero e o um no mundo físico — com papel perfurado num tear',
      en: 'First to materialize zero and one in the physical world — with punched paper on a loom',
    },
    detail: {
      pt: 'Foi o primeiro a materializar a lógica do zero e um no mundo físico. Ele inventou um sistema usando rolos de papel perfurado para controlar o padrão dos fios em um tear. Onde havia um furo, a agulha passava (1); onde não havia, ela parava (0). Era o primeiro "Produto Mínimo Viável" (MVP) da programação.',
      en: 'He was the first to materialize the logic of zero and one in the physical world. He invented a system using rolls of punched paper to control the thread pattern on a loom. Where there was a hole, the needle passed through (1); where there was none, it stopped (0). It was the first Minimum Viable Product (MVP) of programming.',
    },
    imageNote: {
      pt: 'Infelizmente, não existe nenhum retrato histórico de Basile Bouchon. No início do século XVIII, encomendar uma pintura era um luxo reservado à nobreza e grandes comerciantes. Bouchon era um trabalhador têxtil modesto em Lyon — sem dinheiro nem status para ser imortalizado em tela.\n\nA história é diferente com Jacquard: após patentear sua invenção e enriquecer, teve um retrato tecido em seda no próprio tear automatizado, usando cerca de 24.000 cartões perfurados. O próprio Charles Babbage guardava uma cópia em casa.\n\nNo lugar do rosto de Bouchon, a réplica do Tear de 1725 — exposta no Musée des Arts et Métiers, em Paris — é a melhor homenagem ao avô do código.',
      en: 'Unfortunately, no historical portrait of Basile Bouchon exists. In the early 18th century, commissioning a painting was a luxury reserved for nobility and wealthy merchants. Bouchon was a modest textile worker in Lyon — without the money or status to be immortalized on canvas.\n\nThe story is different with Jacquard: after patenting his invention and becoming wealthy, he had a portrait woven in silk on the very automated loom, using around 24,000 punched cards. Charles Babbage himself kept a copy at his home.\n\nIn place of Bouchon\'s face, the replica of his 1725 loom — on display at the Musée des Arts et Métiers in Paris — is the best tribute to the grandfather of code.',
    },
  },
  {
    name: 'Joseph Marie Jacquard',
    image: '/hall/joseph_marie_jacquard',
    year: 1804,
    flag: '🇫🇷',
    nationality: { pt: 'Francês', en: 'French' },
    formation: {
      pt: 'Autodidata · Aprendiz de tecelão em Lyon',
      en: 'Self-taught · Weaving apprentice in Lyon',
    },
    role: { pt: 'O Engenheiro de Escala', en: 'The Scale Engineer' },
    summary: {
      pt: 'Criou a primeira máquina autônoma controlada por "código" — os cartões que inspiraram Babbage',
      en: 'Created the first autonomous machine controlled by "code" — the cards that inspired Babbage',
    },
    detail: {
      pt: 'O cara que pegou o conceito rudimentar e o transformou em uma revolução industrial. Jacquard substituiu o papel frágil por cartões de papelão rígidos e interligados, criando o Tear de Jacquard. Ele construiu a primeira máquina autônoma, robusta e comercialmente viável controlada por "código".',
      en: 'The man who took the rudimentary concept and turned it into an industrial revolution. Jacquard replaced fragile paper with rigid, interlinked cardboard cards, creating the Jacquard Loom. He built the first autonomous, robust and commercially viable machine controlled by "code".',
    },
  },
]

const content = {
  pt: {
    back: 'hall da fama',
    badge: 'Menção Honrosa',
    title: 'A Fundação do Código',
    subtitle: 'Como o 0 e o 1 ganharam forma',
    intro: 'A história da programação não começou com teclados e telas brilhantes, mas sim com matemática e linhas de costura. A base de toda a tecnologia moderna foi uma construção colaborativa de três mentes brilhantes através dos séculos:',
    expandAll: 'Expandir tudo',
    collapseAll: 'Colapsar tudo',
    labelName: 'Nome',
    labelNationality: 'Nacionalidade',
    labelFormation: 'Formação',
    labelRole: 'Papel',
    labelWhatDid: 'O que fez',
    seeMore: 'Ver mais',
    collapse: 'Recolher',
    imageNoteTitle: 'Sobre esta imagem',
    legacyTitle: 'O Legado',
    legacyText: 'Foi exatamente observando os cartões de Jacquard trabalhando em sequência que Charles Babbage projetou sua Máquina Analítica. E foi para essa mesma máquina que Ada Lovelace escreveu o primeiro algoritmo do mundo.\n\nSem a matemática de Leibniz, o furo de Bouchon e a engenharia de Jacquard, a primeira programadora da história não teria onde rodar o seu código.',
  },
  en: {
    back: 'hall of fame',
    badge: 'Honorable Mention',
    title: 'The Foundation of Code',
    subtitle: 'How the 0 and 1 took shape',
    intro: 'The history of programming did not begin with keyboards and bright screens, but with mathematics and threads. The foundation of all modern technology was a collaborative construction by three brilliant minds across the centuries:',
    expandAll: 'Expand all',
    collapseAll: 'Collapse all',
    labelName: 'Name',
    labelNationality: 'Nationality',
    labelFormation: 'Formation',
    labelRole: 'Role',
    labelWhatDid: 'What they did',
    seeMore: 'See more',
    collapse: 'Collapse',
    imageNoteTitle: 'About this image',
    legacyTitle: 'The Legacy',
    legacyText: 'It was precisely by observing Jacquard\'s cards working in sequence that Charles Babbage designed his Analytical Engine. And it was for that very machine that Ada Lovelace wrote the world\'s first algorithm.\n\nWithout Leibniz\'s mathematics, Bouchon\'s hole, and Jacquard\'s engineering, the first programmer in history would have had nowhere to run her code.',
  },
}

export default function MencaoHonrosaPage() {
  const { lang } = useLang()
  const tx = content[lang]
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const [openNotes, setOpenNotes] = useState<Set<number>>(new Set())

  const allOpen = openItems.size === people.length
  const toggleAll = () => allOpen
    ? setOpenItems(new Set())
    : setOpenItems(new Set(people.map((_, i) => i)))
  const toggle = (i: number) => setOpenItems(prev => {
    const next = new Set(prev)
    next.has(i) ? next.delete(i) : next.add(i)
    return next
  })
  const toggleNote = (i: number) => setOpenNotes(prev => {
    const next = new Set(prev)
    next.has(i) ? next.delete(i) : next.add(i)
    return next
  })

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
        <Link href="/hall-da-fama" style={{ color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = SILVER)}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}>
          {tx.back}
        </Link>
        <span style={{ color: 'var(--border2)' }}>/</span>
        <span style={{ color: SILVER }}>{tx.badge.toLowerCase()}</span>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 40px 100px' }}>

        {/* header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            color: SILVER, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: `0.5px solid ${SILVER_BORDER}`,
            background: SILVER_DIM,
            padding: '4px 12px', borderRadius: '4px',
            marginBottom: '20px',
          }}>
            ✧ {tx.badge}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-cyber)', fontSize: '42px', fontWeight: 800,
            color: 'var(--text)', letterSpacing: '0.01em', lineHeight: 1.1,
            marginBottom: '8px',
          }}>
            {tx.title}
          </h1>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '14px',
            color: SILVER, marginBottom: '24px',
          }}>
            {tx.subtitle}
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85 }}>
            {tx.intro}
          </p>
        </div>

        {/* controls */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button onClick={toggleAll} style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            padding: '5px 14px', borderRadius: '6px',
            border: `0.5px solid ${SILVER}`,
            background: SILVER_DIM, color: SILVER,
            cursor: 'pointer', letterSpacing: '0.04em',
          }}>
            {allOpen ? tx.collapseAll : tx.expandAll}
          </button>
        </div>

        {/* person cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
          {people.map((person, i) => {
            const isOpen = openItems.has(i)
            const isNoteOpen = openNotes.has(i)
            return (
              <div key={i} style={{
                border: `0.5px solid ${isOpen ? SILVER_BORDER : 'var(--border)'}`,
                borderRadius: '12px',
                background: 'var(--bg2)',
                overflow: 'hidden',
                transition: 'border-color 0.25s',
              }}>

                {/* photo */}
                <div style={{
                  width: '100%',
                  height: '280px',
                  background: 'var(--bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '0.5px solid var(--border)',
                  padding: '16px',
                  boxSizing: 'border-box',
                }}>
                  <PersonPhoto base={person.image} name={person.name} />
                </div>

                {/* image note toggle (Bouchon only) */}
                {person.imageNote && (
                  <div style={{ borderBottom: '0.5px solid var(--border)' }}>
                    <button
                      onClick={() => toggleNote(i)}
                      style={{
                        width: '100%', background: 'transparent', border: 'none',
                        cursor: 'pointer', padding: '10px 24px',
                        display: 'flex', alignItems: 'center', gap: '8px',
                        fontFamily: 'var(--font-mono)', fontSize: '11px',
                        color: SILVER, letterSpacing: '0.06em', textAlign: 'left',
                      }}
                    >
                      <span style={{
                        display: 'inline-block', transition: 'transform 0.2s',
                        transform: isNoteOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        lineHeight: 1,
                      }}>+</span>
                      {tx.imageNoteTitle}
                    </button>
                    {isNoteOpen && (
                      <div style={{ padding: '0 24px 20px' }}>
                        {(lang === 'pt' ? person.imageNote.pt : person.imageNote.en)
                          .split('\n\n')
                          .map((para, j) => (
                            <p key={j} style={{
                              fontSize: '13px', color: 'var(--text3)',
                              lineHeight: 1.85, fontStyle: 'italic',
                              marginBottom: j < 2 ? '12px' : 0,
                            }}>
                              {para}
                            </p>
                          ))}
                      </div>
                    )}
                  </div>
                )}

                {/* card body */}
                <div style={{ padding: '24px 24px 20px' }}>

                  {/* year badge */}
                  <div style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: SILVER, border: `0.5px solid ${SILVER_BORDER}`,
                    background: SILVER_DIM,
                    padding: '2px 10px', borderRadius: '4px',
                    marginBottom: '14px', letterSpacing: '0.08em',
                  }}>
                    {person.year}
                  </div>

                  {/* Nome */}
                  <div style={{ marginBottom: '14px' }}>
                    <div style={labelStyle}>{tx.labelName}</div>
                    <div style={{
                      fontFamily: 'var(--font-cyber)', fontSize: '20px', fontWeight: 700,
                      color: 'var(--text)', letterSpacing: '0.01em', lineHeight: 1.15,
                    }}>
                      {person.name}
                    </div>
                  </div>

                  {/* Papel */}
                  <div style={{ marginBottom: '14px' }}>
                    <div style={labelStyle}>{tx.labelRole}</div>
                    <div style={{ ...valueStyle, color: SILVER }}>
                      {lang === 'pt' ? person.role.pt : person.role.en}
                    </div>
                  </div>

                  {/* Nacionalidade */}
                  <div style={{ marginBottom: '14px' }}>
                    <div style={labelStyle}>{tx.labelNationality}</div>
                    <div style={valueStyle}>
                      <span style={{ marginRight: '6px' }}>{person.flag}</span>
                      {lang === 'pt' ? person.nationality.pt : person.nationality.en}
                    </div>
                  </div>

                  {/* Formação */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={labelStyle}>{tx.labelFormation}</div>
                    <div style={valueStyle}>
                      {lang === 'pt' ? person.formation.pt : person.formation.en}
                    </div>
                  </div>

                  {/* divider */}
                  <div style={{ height: '0.5px', background: 'var(--border)', marginBottom: '16px' }} />

                  {/* O que fez */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ ...labelStyle, color: SILVER }}>{tx.labelWhatDid}</div>
                    <div style={{ ...valueStyle, color: 'var(--text)', fontSize: '15px', lineHeight: 1.6 }}>
                      {lang === 'pt' ? person.summary.pt : person.summary.en}
                    </div>
                  </div>

                  {/* expand button */}
                  <button onClick={() => toggle(i)} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '12px',
                    padding: '6px 16px', borderRadius: '6px',
                    border: `0.5px solid ${isOpen ? SILVER : 'var(--border2)'}`,
                    background: isOpen ? SILVER_DIM : 'transparent',
                    color: isOpen ? SILVER : 'var(--text3)',
                    cursor: 'pointer', transition: 'all 0.2s',
                    letterSpacing: '0.04em',
                    display: 'flex', alignItems: 'center', gap: '6px',
                  }}>
                    <span style={{
                      display: 'inline-block', transition: 'transform 0.2s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      lineHeight: 1,
                    }}>+</span>
                    {isOpen ? tx.collapse : tx.seeMore}
                  </button>

                  {/* expanded detail */}
                  {isOpen && (
                    <div style={{
                      marginTop: '20px', paddingTop: '20px',
                      borderTop: `0.5px solid ${SILVER_BORDER}`,
                    }}>
                      <p style={{
                        fontSize: '14px', color: 'var(--text2)',
                        lineHeight: 1.95, margin: 0,
                      }}>
                        {lang === 'pt' ? person.detail.pt : person.detail.en}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* legacy section */}
        <div style={{
          border: `0.5px solid ${SILVER_BORDER}`,
          borderRadius: '12px',
          background: SILVER_DIM,
          padding: '28px 32px',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            color: SILVER, letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '14px',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span>✧</span>
            <span>{tx.legacyTitle}</span>
          </div>
          {tx.legacyText.split('\n\n').map((paragraph, i, arr) => (
            <p key={i} style={{
              fontSize: '15px', color: 'var(--text2)',
              lineHeight: 1.9,
              marginBottom: i < arr.length - 1 ? '16px' : 0,
            }}>
              {paragraph}
            </p>
          ))}
        </div>

      </div>
    </main>
  )
}
