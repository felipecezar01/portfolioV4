'use client'

import { useLang } from '@/context/LangContext'

const content = {
  pt: {
    liveLabel: '↗ acessar a aplicação ao vivo',
    liveNote: <>Antes de ler, <strong>acesse a aplicação e faça uma pergunta ao agente</strong>. Pergunte sobre vendas por estado, tempo médio de entrega, categorias mais lucrativas — ele responde em linguagem natural com os dados reais do dataset da Olist.</>,

    introTitle: 'Dashboards estáticos não respondem a perguntas novas.',
    intro1: <>A maioria das empresas de e-commerce possui planilhas imensas de vendas e logística. Quando o time de negócios precisa de um insight fora do comum, um analista de dados precisa ser acionado para criar um novo dashboard, o que pode levar dias. Os dados brutos sozinhos não geram decisões rápidas; a empresa precisava de uma ponte direta entre a <strong>pergunta executiva</strong> e a <strong>resposta extraída da base</strong>.</>,

    archTitle: 'IA Agêntica com Tabular RAG',
    arch1: <>Em vez do RAG tradicional focado em texto — que falha em cálculos exatos —, desenvolvi um <strong>Agente Autônomo</strong> capaz de raciocinar sobre dados tabulares. Utilizando o <strong>LangChain</strong> e a <strong>API do Gemini Flash</strong>, a aplicação atua como um raciocinador: lê a pergunta de negócios, escreve o código Python/Pandas necessário, executa esse código sobre uma amostra de <strong>10.000 registros reais da Olist</strong> em memória RAM, avalia o output numérico e gera uma resposta gerencial formatada em Markdown.</>,
    arch2: <>O resultado: extração de insights reduzida de <strong>dias para menos de 15 segundos</strong>. O pipeline completo usa <strong>FastAPI</strong> para expor a API, <strong>LangChain</strong> para orquestrar o agente e as ferramentas de busca, <strong>Pandas</strong> para processar e filtrar o dataset, e o <strong>Gemini API</strong> para gerar a resposta em linguagem natural.</>,

    dataTitle: 'O dataset: Brazilian E-Commerce (Olist)',
    data1: <>O dataset utilizado é o <strong>Brazilian E-Commerce Public Dataset</strong> da Olist, disponível no Kaggle. São mais de 100.000 pedidos reais realizados entre 2016 e 2018, com informações de produto, vendedor, comprador, pagamento, avaliação e logística.</>,
    data2: <>Para este projeto, trabalhei com um subconjunto curado de <strong>10.000 registros</strong>, garantindo respostas rápidas sem comprometer a representatividade dos dados. O agente consegue responder perguntas sobre categorias, estados, prazos de entrega, ticket médio, avaliações e muito mais.</>,

  },
  en: {
    liveLabel: '↗ open the live application',
    liveNote: <>Before reading, <strong>open the application and ask the agent a question</strong>. Ask about sales by state, average delivery time, most profitable categories — it responds in natural language with real data from the Olist dataset.</>,

    introTitle: 'Static dashboards don\'t answer new questions.',
    intro1: <>Most e-commerce companies have massive spreadsheets of sales and logistics data. When the business team needs an unusual insight, a data analyst must be called to build a new dashboard — a process that can take days. Raw data alone doesn't generate fast decisions; the company needed a direct bridge between the <strong>executive question</strong> and the <strong>answer extracted from the database</strong>.</>,

    archTitle: 'Agentic AI with Tabular RAG',
    arch1: <>Instead of traditional text-focused RAG — which fails on exact calculations — I built an <strong>Autonomous Agent</strong> capable of reasoning over tabular data. Using <strong>LangChain</strong> and the <strong>Gemini Flash API</strong>, the application acts as a reasoner: reads the business question, writes the necessary Python/Pandas code, executes that code over a sample of <strong>10,000 real Olist records</strong> in RAM, evaluates the numerical output, and generates a managerial response formatted in Markdown.</>,
    arch2: <>The result: insight extraction reduced from <strong>days to under 15 seconds</strong>. The full pipeline uses <strong>FastAPI</strong> to expose the API, <strong>LangChain</strong> to orchestrate the agent and search tools, <strong>Pandas</strong> to process and filter the dataset, and the <strong>Gemini API</strong> to generate the natural language response.</>,

    dataTitle: 'The dataset: Brazilian E-Commerce (Olist)',
    data1: <>The dataset used is the <strong>Brazilian E-Commerce Public Dataset</strong> by Olist, available on Kaggle. It contains over 100,000 real orders placed between 2016 and 2018, with information on products, sellers, buyers, payments, reviews, and logistics.</>,
    data2: <>For this project, I worked with a curated subset of <strong>10,000 records</strong>, ensuring fast responses without compromising data representativeness. The agent can answer questions about categories, states, delivery times, average ticket, ratings, and much more.</>,

  },
}

export default function AgentOlist() {
  const { lang } = useLang()
  const tx = content[lang]

  return (
    <div className="mdx-content">

      {/* ── CTA live app ── */}
      <a
        href="https://olist-ai-advisor.onrender.com/ui/index.html"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          fontSize: '12px', fontFamily: 'var(--font-mono)',
          padding: '10px 18px', borderRadius: '6px',
          border: '0.5px solid rgba(0,234,255,0.3)',
          background: 'rgba(0,234,255,0.06)',
          color: 'var(--blue)', textDecoration: 'none',
          marginBottom: '1rem',
        }}
      >
        {tx.liveLabel}
      </a>
      <p>{tx.liveNote}</p>
      <hr />

      <h2>{tx.introTitle}</h2>
      <p>{tx.intro1}</p>
      <hr />

      <h2>{tx.archTitle}</h2>
      <p>{tx.arch1}</p>
      <p>{tx.arch2}</p>
      <hr />

      <h2>{tx.dataTitle}</h2>
      <p>{tx.data1}</p>
      <p>{tx.data2}</p>

    </div>
  )
}
