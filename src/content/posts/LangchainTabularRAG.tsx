'use client'

import { useLang } from '@/context/LangContext'

const content = {
  pt: {
    sections: [
      {
        title: 'Por Que RAG Padrão Falha com Tabelas',
        body: <>
          <p>RAG clássico — chunking de texto, embedding, busca por similaridade — foi projetado para documentos em prosa. Quando você joga um CSV de 10.000 linhas nesse pipeline, o resultado é terrível.</p>
          <p>O problema é semântico: a linha <code>SP | 2024-03 | R$4.200 | entregue</code> não carrega contexto por si só. O LLM não sabe que "SP" é estado, que "R$4.200" é receita de pedido, que "entregue" é um enum de status. Sem esse contexto, as respostas são alucinações disfarçadas de análise.</p>
        </>,
      },
      {
        title: 'A Abordagem: Contexto Semântico por Linha',
        body: <>
          <p>A solução que funcionou foi converter cada linha do DataFrame em uma sentença em linguagem natural antes de gerar o embedding. Em vez de embeddar a linha crua, faço isso:</p>
          <pre style={{ background: 'var(--bg3)', border: '0.5px solid var(--border)', borderRadius: '6px', padding: '16px', fontSize: '12px', color: 'var(--text)', overflowX: 'auto' }}><code>{`def row_to_text(row):
    return (
        f"Pedido de {row['categoria']} no estado de {row['estado']}, "
        f"valor R${'$'}{row['valor']:.2f}, status '{row['status']}', "
        f"realizado em {row['data']}."
    )`}</code></pre>
          <p>Cada linha vira uma sentença descritiva. Essas sentenças são embeddadas e indexadas no FAISS. Na query, o retriever busca as linhas mais semanticamente relevantes e as devolve ao LLM como contexto estruturado.</p>
        </>,
      },
      {
        title: 'O Pipeline Completo',
        body: <>
          <p>O fluxo final tem três estágios: <strong>ingestão</strong> (DataFrame → sentenças → embeddings → índice FAISS), <strong>retrieval</strong> (query → busca semântica → top-k linhas) e <strong>geração</strong> (linhas recuperadas + prompt de sistema → resposta do LLM).</p>
          <p>O prompt de sistema instrui o modelo a responder somente com base nas linhas fornecidas, nunca inventar dados, e formatar a resposta com números e unidades corretas. Esse constraint é o que elimina a maioria das alucinações.</p>
        </>,
      },
      {
        title: 'Limitações Honestas',
        body: <>
          <p>Essa abordagem tem teto. Ela funciona bem para perguntas sobre registros específicos ("qual estado vendeu mais em março?"), mas falha em análises que exigem agregações globais sobre o dataset inteiro — porque o retriever só devolve top-k linhas, não o dataset completo.</p>
          <p>Para esse caso, a solução certa é um agente com ferramenta de Python — o LLM gera código Pandas/DuckDB, executa, e interpreta o resultado. Assunto para um próximo post.</p>
        </>,
      },
    ],
  },
  en: {
    sections: [
      {
        title: 'Why Standard RAG Fails with Tables',
        body: <>
          <p>Classic RAG — text chunking, embedding, similarity search — was designed for prose documents. When you throw a 10,000-row CSV into this pipeline, the results are terrible.</p>
          <p>The problem is semantic: the row <code>SP | 2024-03 | R$4,200 | delivered</code> carries no context on its own. The LLM doesn't know that "SP" is a state, that "R$4,200" is order revenue, or that "delivered" is a status enum. Without that context, the answers are hallucinations disguised as analysis.</p>
        </>,
      },
      {
        title: 'The Approach: Semantic Context Per Row',
        body: <>
          <p>The solution that worked was converting each DataFrame row into a natural language sentence before generating the embedding. Instead of embedding the raw row, I do this:</p>
          <pre style={{ background: 'var(--bg3)', border: '0.5px solid var(--border)', borderRadius: '6px', padding: '16px', fontSize: '12px', color: 'var(--text)', overflowX: 'auto' }}><code>{`def row_to_text(row):
    return (
        f"Order for {row['category']} in state {row['state']}, "
        f"value ${'$'}{row['value']:.2f}, status '{row['status']}', "
        f"placed on {row['date']}."
    )`}</code></pre>
          <p>Each row becomes a descriptive sentence. Those sentences are embedded and indexed in FAISS. On query, the retriever finds the most semantically relevant rows and returns them to the LLM as structured context.</p>
        </>,
      },
      {
        title: 'The Full Pipeline',
        body: <>
          <p>The final flow has three stages: <strong>ingestion</strong> (DataFrame → sentences → embeddings → FAISS index), <strong>retrieval</strong> (query → semantic search → top-k rows) and <strong>generation</strong> (retrieved rows + system prompt → LLM response).</p>
          <p>The system prompt instructs the model to answer only based on the provided rows, never invent data, and format the response with correct numbers and units. This constraint is what eliminates most hallucinations.</p>
        </>,
      },
      {
        title: 'Honest Limitations',
        body: <>
          <p>This approach has a ceiling. It works well for questions about specific records ("which state sold the most in March?"), but fails for analyses requiring global aggregations over the entire dataset — because the retriever only returns top-k rows, not the full dataset.</p>
          <p>For that case, the right solution is an agent with a Python tool — the LLM generates Pandas/DuckDB code, executes it, and interprets the result. Topic for a future post.</p>
        </>,
      },
    ],
  },
}

export default function LangchainTabularRAG() {
  const { lang } = useLang()
  const c = content[lang]
  return (
    <>
      {c.sections.map((s, i) => (
        <div key={i} style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 500,
            color: 'var(--blue)', letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{ color: 'var(--text3)', fontSize: '11px' }}>0{i + 1}</span>
            {s.title}
          </h2>
          <div style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.95 }}>
            {s.body}
          </div>
        </div>
      ))}
    </>
  )
}
