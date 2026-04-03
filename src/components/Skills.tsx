'use client'

import { Lang } from '@/types'

const t = {
  pt: {
    title: 'skills',
    intro: 'Eu poderia simplesmente listar ferramentas aqui — mas prefiro dizer o que sei fazer e quais ferramentas uso pra isso. Acredito mais no impacto do que na ferramenta em si.',
    blocks: [
      {
        area: 'Engenharia de Software',
        color: 'var(--red)',
        items: [
          {
            title: 'Sites e sistemas modernos e escaláveis',
            desc: 'Construção de aplicações web robustas, desde interfaces até APIs e arquitetura de backend.',
            tags: ['JavaScript', 'TypeScript', 'Java', 'React', 'Next.js', 'Node.js', 'NestJS', 'GCP', 'AWS', 'Claude', 'IA'],
          },
          {
            title: 'Aplicativos mobile',
            desc: 'Desenvolvimento para celulares e tablets com experiência nativa.',
            tags: ['Dart', 'Flutter', 'Android Studio'],
          },
          {
            title: 'Controle e qualidade de código',
            desc: 'Trabalho com versionamento, etapas, sprints e entrega contínua.',
            tags: ['GitHub', 'GitLab', 'CI/CD', 'Testes', 'Pipelines'],
          },
          {
            title: 'Ambientes controlados e escaláveis',
            desc: 'Containerização e orquestração para garantir que o sistema funcione igual em qualquer lugar.',
            tags: ['Docker', 'Kubernetes'],
          },
          {
            title: 'Banco de dados',
            desc: 'Armazenamento e consulta de dados — seja de formulários, registros ou qualquer informação do seu negócio.',
            tags: ['SQL', 'MySQL', 'MongoDB', 'PostgreSQL'],
          },
        ],
      },
      {
        area: 'Ciência de Dados & IA',
        color: 'var(--green)',
        items: [
          {
            title: 'Automações inteligentes',
            desc: 'Automação de processos repetitivos e reconhecimento de imagem — como aquele sistema de academia que libera a catraca pelo rosto.',
            tags: ['Python', 'OCR'],
          },
          {
            title: 'Análise de dados e insights',
            desc: 'Pego todos os dados do seu negócio, identifico pontos fortes, fracos e o que precisa melhorar. Transformo números em decisões.',
            tags: ['Pandas', 'NumPy', 'SciPy', 'Matplotlib'],
          },
          {
            title: 'Análise geográfica',
            desc: 'Visualização de dados por localização — ideal para empresas com múltiplas sedes ou operações distribuídas.',
            tags: ['Folium', 'GeoPandas', 'GeoJSON'],
          },
          {
            title: 'Previsões e Machine Learning',
            desc: 'Analiso o passado para prever tendências futuras. Útil para entender para onde o seu negócio está caminhando.',
            tags: ['R Language', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'MLflow', 'LangChain', 'Machine Learning', 'Deep Learning'],
          },
          {
            title: 'Agentes conversacionais',
            desc: 'Em vez de um ChatGPT genérico, crio um assistente que só conhece o seu negócio — responde dúvidas dos seus clientes, acessa seus dados e fala só sobre o que você quer.',
            tags: ['LLMs', 'ChatGPT', 'Claude', 'Gemini'],
          },
        ],
      },
    ],
  },
  en: {
    title: 'skills',
    intro: 'I could simply list tools here — but I prefer to say what I can do and which tools I use for it. I believe in impact more than in the tool itself.',
    blocks: [
      {
        area: 'Software Engineering',
        color: 'var(--red)',
        items: [
          {
            title: 'Modern and scalable web systems',
            desc: 'Building robust web applications, from interfaces to APIs and backend architecture.',
            tags: ['JavaScript', 'TypeScript', 'Java', 'React', 'Next.js', 'Node.js', 'NestJS', 'GCP', 'AWS', 'Claude', 'AI'],
          },
          {
            title: 'Mobile apps',
            desc: 'Development for phones and tablets with native experience.',
            tags: ['Dart', 'Flutter', 'Android Studio'],
          },
          {
            title: 'Code quality and control',
            desc: 'Versioning, sprints, and continuous delivery workflows.',
            tags: ['GitHub', 'GitLab', 'CI/CD', 'Tests', 'Pipelines'],
          },
          {
            title: 'Controlled and scalable environments',
            desc: 'Containerization and orchestration to ensure the system runs the same everywhere.',
            tags: ['Docker', 'Kubernetes'],
          },
          {
            title: 'Databases',
            desc: 'Data storage and querying — from forms and records to any business information.',
            tags: ['SQL', 'MySQL', 'MongoDB', 'PostgreSQL'],
          },
        ],
      },
      {
        area: 'Data Science & AI',
        color: 'var(--green)',
        items: [
          {
            title: 'Intelligent automations',
            desc: 'Automating repetitive processes and image recognition — like gym systems that unlock the turnstile by face.',
            tags: ['Python', 'OCR'],
          },
          {
            title: 'Data analysis and insights',
            desc: 'I take all your business data, identify strengths, weaknesses, and what needs improvement. I turn numbers into decisions.',
            tags: ['Pandas', 'NumPy', 'SciPy', 'Matplotlib'],
          },
          {
            title: 'Geographic analysis',
            desc: 'Location-based data visualization — ideal for businesses with multiple locations or distributed operations.',
            tags: ['Folium', 'GeoPandas', 'GeoJSON'],
          },
          {
            title: 'Forecasting and Machine Learning',
            desc: 'I analyze the past to predict future trends. Useful for understanding where your business is heading.',
            tags: ['R Language', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'MLflow', 'LangChain', 'Machine Learning', 'Deep Learning'],
          },
          {
            title: 'Conversational agents',
            desc: 'Instead of a generic ChatGPT, I build an assistant that only knows your business — answers your customers\' questions, accesses your data, and talks only about what you want.',
            tags: ['LLMs', 'ChatGPT', 'Claude', 'Gemini'],
          },
        ],
      },
    ],
  },
}

function TagCloud({ tags, color }: { tags: string[]; color: string }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
      {tags.map(tag => (
        <span key={tag} style={{
          fontSize: '10px', padding: '3px 10px', borderRadius: '4px',
          background: 'var(--bg)',
          border: `0.5px solid ${color}33`,
          color: 'var(--text2)',
          transition: 'all 0.2s', cursor: 'default',
        }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLSpanElement
            el.style.borderColor = color
            el.style.color = color
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLSpanElement
            el.style.borderColor = `${color}33`
            el.style.color = 'var(--text2)'
          }}>
          {tag}
        </span>
      ))}
    </div>
  )
}

export default function Skills({ lang }: { lang: Lang }) {
  const tx = t[lang]

  return (
    <section id="skills" className="section-main" style={{ padding: '100px 0', borderTop: '0.5px solid var(--border)' }}>
      <div className="container-main" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 60px' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
          <span style={{ fontSize: '10px', color: 'var(--text3)', letterSpacing: '0.1em' }}>05</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, color: 'var(--text)' }}>{tx.title}</span>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        </div>

        <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.85, maxWidth: '680px', marginBottom: '52px' }}>
          {tx.intro}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {tx.blocks.map((block, bi) => (
            <div key={bi}>
              {/* área title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <span style={{ width: '16px', height: '1px', background: block.color, display: 'inline-block' }} />
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: block.color, fontWeight: 600 }}>
                  {block.area}
                </span>
              </div>

              {/* items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {block.items.map((item, ii) => (
                  <div key={ii} style={{
                    padding: '16px 20px',
                    border: '0.5px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--bg2)',
                    transition: 'border-color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = block.color}
                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'}
                  >
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px', fontFamily: 'var(--font-display)' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '2px' }}>
                      {item.desc}
                    </div>
                    <TagCloud tags={item.tags} color={block.color} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}