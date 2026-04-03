'use client'

import { useState } from 'react'
import { useLang } from '@/context/LangContext'

// ── Accordion ─────────────────────────────────────────────────────────────────
function Accordion({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      borderBottom: '0.5px solid var(--border)',
      marginBottom: '0',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '16px 0', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: '16px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '13px',
          color: open ? 'var(--blue)' : 'var(--text)',
          fontWeight: 500, transition: 'color 0.2s',
        }}>
          {question}
        </span>
        <span style={{
          color: 'var(--blue)', fontSize: '16px', flexShrink: 0,
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s',
          fontFamily: 'var(--font-mono)',
        }}>+</span>
      </button>
      {open && (
        <div style={{
          paddingBottom: '16px', fontSize: '14px',
          color: 'var(--text2)', lineHeight: '1.9',
        }}>
          {answer}
        </div>
      )}
    </div>
  )
}

// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({ value, label, color = 'var(--blue)' }: { value: string; label: string; color?: string }) {
  return (
    <div style={{
      padding: '20px 24px',
      background: 'var(--bg3)',
      border: '0.5px solid var(--border)',
      borderRadius: '8px',
      display: 'flex', flexDirection: 'column', gap: '6px',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)', fontSize: '28px',
        fontWeight: 800, color, letterSpacing: '-0.02em',
      }}>{value}</span>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '11px',
        color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.06em',
      }}>{label}</span>
    </div>
  )
}

// ── Content ───────────────────────────────────────────────────────────────────
const content = {
  pt: {
    // Intro
    intro1: <>Estamos em <strong>2026</strong> — ano de eleições. O Brasil tem um histórico denso de instabilidade política, polarização e desinformação. Criei este projeto não apenas como um painel de dados, mas como uma ferramenta de utilidade pública: mostrar para onde vai o nosso dinheiro e o que fazemos ao digitar aqueles quatro números na urna.</>,
    intro2: <>Não é um projeto neutro. É um projeto honesto. Os dados são públicos — e quando você os organiza direito, eles falam por si mesmos.</>,

    // Dados
    dataTitle: 'Os dados: crús e complexos',
    data1: <>Utilizei os dados abertos do <strong>TSE (Tribunal Superior Eleitoral)</strong>. São bases gigantescas, cruas, separadas por cargo, por estado e por turno — tabelas com dezenas de colunas sem documentação clara. A maior parte dos cidadãos nunca vai abrir um desses arquivos na vida. O objetivo do painel foi justamente esse: <strong>mastigar, organizar e visualizar</strong> o que está escondido nessas planilhas.</>,
    data2: <>O recorte escolhido foram os candidatos a <strong>Presidente, Governador, Senador e Vice-Governador</strong> nas Eleições Gerais de 2022, cruzando dados de gastos declarados de campanha com resultado eleitoral.</>,

    // Vice e Senado
    viceTitle: 'Você sabe quem representa você?',
    vice1: <>Faça um exercício mental. Pergunte a dez pessoas na rua quem é o <strong>Presidente da República</strong>. Provavelmente todos os dez sabem. Quem é o <strong>Governador do estado</strong>? Talvez quatro ou cinco. Quem é o <strong>Vice-Governador</strong>? Sorte se um responder.</>,
    vice2: <>E o Senado? Provavelmente menos de 1% das pessoas sabem que cada estado elege <strong>3 Senadores</strong>, com mandatos de 8 anos. E talvez <strong>0,02%</strong> consiga nomear os três que representam seu estado — mesmo sendo os parlamentares mais caros do sistema.</>,
    vice3: <>O problema não é a ignorância das pessoas. É que o sistema foi desenhado para ser opaco. <strong>Quanto mais invisível o cargo, mais fácil é abusar dele.</strong> E é exatamente aí que mora o perigo: a carga tributária brasileira beira os <strong>33% do PIB</strong>. Isso significa que, em muitas compras, você paga o preço de um produto e entrega o valor de quase outro inteiro ao Estado. Uma parte desse dinheiro banca os salários da galera que a gente nem lembra que existe.</>,

    // Accordions
    faqTitle: 'Dúvidas frequentes no painel',
    faqIntro: 'O painel inclui uma seção de perguntas e respostas para quem nunca parou para pensar em como funciona o processo eleitoral brasileiro. Algumas das mais relevantes:',
    faqs: [
      {
        q: 'O que é o voto proporcional?',
        a: <>No Brasil, ao votar para <strong>Deputado Federal, Estadual ou Vereador</strong>, você não elege diretamente um candidato — você vota no partido ou coligação. Os votos são somados e as cadeiras são distribuídas proporcionalmente. Isso significa que o seu voto pode eleger alguém que você nunca ouviu falar.</>,
      },
      {
        q: 'O que é o "Efeito Tiririca"?',
        a: <>Em 2010, Tiririca — o palhaço — foi o deputado federal mais votado do Brasil, com mais de 1,3 milhão de votos. O efeito: ele carregou consigo, no "puxadinho" da coligação, vários outros candidatos que jamais teriam se elegido por conta própria. <strong>Com um único voto, o eleitor elegeu candidatos que nem sabia quem eram.</strong> Isso não é anedota — é o sistema funcionando exatamente como foi desenhado.</>,
      },
      {
        q: 'Qual a diferença entre Governador e Vice-Governador?',
        a: <>O Governador exerce o Poder Executivo estadual. O Vice assume em caso de impedimento ou vacância. Na prática, o Vice-Governador ocupa um cargo de alto custo, alta visibilidade dentro do governo e, na maioria das vezes, <strong>baixíssimo escrutínio público</strong>. A maior parte dos eleitores vota na chapa sem nem saber o nome do vice.</>,
      },
      {
        q: 'Por que o Senado tem um mandato tão longo?',
        a: <>Senadores têm mandato de <strong>8 anos</strong> — o dobro de um deputado, o dobro de um presidente. A justificativa é ser uma "casa de revisão" estável. O efeito colateral: um senador eleito em 2022 ainda estará no cargo em 2030, independentemente de qualquer mudança de opinião do eleitorado. Nenhuma eleição interina pode removê-lo — apenas um processo de cassação.</>,
      },
    ],

    // Choque
    shockTitle: 'O choque de realidade: R$ 6,15 bilhões em 45 dias',
    shock1: <>Em 2022, as campanhas eleitorais declaradas custaram aproximadamente <strong>R$ 6,15 bilhões</strong>. Para ter dimensão: o governo federal investiu cerca de <strong>R$ 8,25 bilhões em Ciência e Tecnologia</strong> no ano inteiro de 2022.</>,
    shock2: <>Isso significa que em <strong>45 dias de campanha</strong>, o Brasil gastou aproximadamente <strong>75% do orçamento anual de ciência</strong>. Esse é o valor declarado — o real é maior. Com gastos indiretos, estruturas de partido, serviços não declarados e assessorias paralelas, estimativas conservadoras apontam para <strong>R$ 8,75 bilhões a R$ 10 bilhões</strong>.</>,
    shockStats: [
      { value: 'R$ 6,15 bi', label: 'Gastos declarados de campanha', color: 'var(--red)' },
      { value: 'R$ 8,25 bi', label: 'Orçamento federal de C&T em 2022', color: 'var(--blue)' },
      { value: '~75%', label: 'Do orçamento de ciência gasto em campanha', color: 'var(--text3)' },
    ],

    // Semideus
    semigodTitle: 'A vida de semideus',
    semigod1: <>Quando se fala em salário de parlamentar, a maioria pensa no <strong>subsídio base</strong> — que gira em torno de R$ 33 a 46 mil mensais, dependendo do cargo. Mas esse valor representa, em geral, menos de 20% do custo real de um político ao erário.</>,
    semigod2: <>Existem as <strong>"indenizações"</strong>: auxílio-moradia, cota para escritório de apoio, verba de gabinete, passagens aéreas ilimitadas, servidores cedidos, carro oficial, plano de saúde, assessoria jurídica e mais. Nenhum desses benefícios é tributado como renda. Somados, o custo real mensal de um parlamentar ao Estado brasileiro gira em torno de <strong>R$ 210 mil</strong>.</>,
    semigod3: <>Eles voam em classe executiva quando a viagem é longa. Têm moradia custeada na capital federal. Transporte, alimentação e comunicação são reembolsados. Em democracias europeias, um parlamentar pega o metrô para ir trabalhar. Aqui, <strong>a lógica é outra.</strong></>,

    // Fundo
    fundTitle: 'Fundo Partidário e Fundão Eleitoral: a cereja do bolo',
    fund1: <>Com todos esses benefícios, você poderia imaginar que os candidatos usam o próprio dinheiro nas campanhas. Mas não. Existe o <strong>Fundo Partidário</strong> — um repasse anual do governo aos partidos para manutenção de suas estruturas — e o <strong>Fundo Especial de Financiamento de Campanha (FEFC)</strong>, popularmente chamado de <em>Fundão Eleitoral</em>.</>,
    fund2: <>O Fundão Eleitoral em 2022 foi de <strong>R$ 4,96 bilhões</strong>. Dinheiro público, distribuído entre os partidos conforme critérios definidos pelo próprio Congresso.</>,
    fund3: <>A ironia máxima: <strong>são os próprios parlamentares que votam para definir o tamanho desse fundo</strong>. E os seus próprios salários. E os seus próprios benefícios. E as regras que regulam as suas campanhas. O guardião da caixa é quem decide o tamanho da caixa.</>,

    // Tabela
    tableTitle: 'O Brasil no espelho do mundo',
    tableIntro: <>Para entender o nível do absurdo, é preciso comparar. A tabela abaixo cruza o <strong>salário mínimo</strong> de cada país com o custo mensal de um político (incluindo benefícios e indenizações):</>,
    tableHeaders: ['País', 'Salário Mínimo (Mensal/US$)', 'Custo/Salário Político (Mensal/US$)', 'Disparidade'],
    tableRows: [
      ['🇧🇷 Brasil', '~$280', '~$42.000 (Base + Indenizações)', '~150x maior'],
      ['🇨🇴 Colômbia', '~$330', '~$11.000', '~33x maior'],
      ['🇨🇱 Chile', '~$520', '~$7.300', '~14x maior'],
      ['🇺🇸 EUA', '~$1.160', '~$14.500', '~12.5x maior'],
      ['🇦🇷 Argentina', '~$200', '~$2.000', '~10x maior'],
      ['🇮🇹 Itália', '~$1.300', '~$11.200', '~8.6x maior'],
      ['🇩🇪 Alemanha', '~$2.150', '~$11.300', '~5.2x maior'],
      ['🇵🇹 Portugal', '~$880', '~$4.100', '~4.6x maior'],
      ['🇫🇷 França', '~$1.900', '~$8.100', '~4.3x maior'],
      ['🇪🇸 Espanha', '~$1.220', '~$4.500', '~3.7x maior'],
    ],
    tableNote: <>Em democracias consolidadas da Europa Ocidental, a disparidade entre o salário mínimo e o custo de um político fica entre <strong>3x e 5x</strong>. Nesses países, parlamentares usam transporte público, prestam contas detalhadas de gastos e vivem dentro de uma realidade que não é radicalmente diferente da dos seus eleitores. No Brasil, essa disparidade <strong>beira 150 vezes</strong>. Não é uma questão de desenvolvimento econômico — é uma questão de escolha política deliberada.</>,

    // Próximos passos
    nextTitle: 'Próximos passos',
    next1: <>Este painel é a <strong>primeira camada</strong> de uma análise que pretendo expandir. Os dados do TSE permitem ir muito além: cruzar os gastos de campanha com os <strong>doadores</strong> — pessoas físicas e jurídicas — e identificar quais setores da economia financiam determinados candidatos.</>,
    next2: <>A pergunta que guia essa expansão é simples: <strong>quem pagou a conta, e o que recebeu em troca?</strong> As concessões, os contratos, as emendas parlamentares — tudo deixa rastro. Os dados estão disponíveis. É só saber onde procurar.</>,
  },

  en: {
    intro1: <>We're in <strong>2026</strong> — an election year. Brazil has a dense history of political instability, polarization, and misinformation. I built this project not just as a data dashboard, but as a public utility tool: to show where our money goes and what we're actually doing when we punch those four numbers into the voting machine.</>,
    intro2: <>This is not a neutral project. It's an honest one. The data is public — and when you organize it properly, it speaks for itself.</>,

    dataTitle: 'The data: raw and complex',
    data1: <>I used the open data from the <strong>TSE (Superior Electoral Court)</strong>. These are massive, raw databases — split by office, by state, and by round, with dozens of columns and no clear documentation. Most citizens will never open one of these files in their lifetime. The whole point of the dashboard was to <strong>process, organize, and visualize</strong> what's buried in these spreadsheets.</>,
    data2: <>The scope was candidates for <strong>President, Governor, Senator, and Vice-Governor</strong> in the 2022 General Elections, crossing declared campaign spending data with electoral results.</>,

    viceTitle: 'Do you know who represents you?',
    vice1: <>Try a mental exercise. Ask ten people on the street who the <strong>President</strong> is. Probably all ten know. Who is the <strong>State Governor</strong>? Maybe four or five. Who is the <strong>Vice-Governor</strong>? Lucky if one person answers.</>,
    vice2: <>And the Senate? Probably fewer than 1% of people know that each state elects <strong>3 Senators</strong> with 8-year terms. And maybe <strong>0.02%</strong> can name all three representing their state — even though they're the most expensive legislators in the system.</>,
    vice3: <>The problem isn't people's ignorance. It's that the system was designed to be opaque. <strong>The more invisible the office, the easier it is to abuse it.</strong> And that's exactly where the danger lies: Brazil's tax burden is around <strong>33% of GDP</strong>. In many purchases, you pay the price of one product and hand the value of nearly another to the State. Part of that money funds the salaries of people most voters can't even name.</>,

    faqTitle: 'Frequently asked questions in the dashboard',
    faqIntro: 'The dashboard includes a Q&A section for anyone who has never thought deeply about how the Brazilian electoral process actually works. Some of the most relevant:',
    faqs: [
      {
        q: 'What is proportional voting?',
        a: <>In Brazil, when voting for <strong>Federal Deputy, State Deputy, or City Councilmember</strong>, you don't directly elect a candidate — you vote for a party or coalition. Votes are pooled and seats distributed proportionally. This means your vote may elect someone you've never heard of.</>,
      },
      {
        q: 'What is the "Tiririca Effect"?',
        a: <>In 2010, Tiririca — a clown — became the most voted federal deputy in Brazil with over 1.3 million votes. The effect: he carried along several other candidates in the coalition's "coattails" who never would have been elected on their own. <strong>With a single vote, the voter elected candidates they didn't even know existed.</strong> This isn't a joke — it's the system working exactly as designed.</>,
      },
      {
        q: "What's the difference between Governor and Vice-Governor?",
        a: <>The Governor exercises state executive power. The Vice assumes in case of impediment or vacancy. In practice, the Vice-Governor holds a high-cost, high-visibility position within government and, most of the time, <strong>extremely low public scrutiny</strong>. Most voters cast a ballot for the ticket without even knowing the running mate's name.</>,
      },
      {
        q: 'Why do Senators have such long terms?',
        a: <>Senators serve <strong>8-year terms</strong> — twice that of a deputy, twice that of a president. The justification is to be a stable "revision chamber." The side effect: a senator elected in 2022 will still be in office in 2030, regardless of any shift in public opinion. No interim election can remove them — only a formal recall process.</>,
      },
    ],

    shockTitle: 'The reality check: R$6.15 billion in 45 days',
    shock1: <>In 2022, declared electoral campaigns cost approximately <strong>R$6.15 billion</strong>. For scale: the federal government invested around <strong>R$8.25 billion in Science and Technology</strong> for the entire year of 2022.</>,
    shock2: <>That means in <strong>45 days of campaigning</strong>, Brazil spent roughly <strong>75% of its annual science budget</strong>. And that's the declared figure — the real number is higher. With indirect costs, party infrastructure, undeclared services, and parallel consultancies, conservative estimates point to <strong>R$8.75 billion to R$10 billion</strong>.</>,
    shockStats: [
      { value: 'R$6.15 bi', label: 'Declared campaign spending', color: 'var(--red)' },
      { value: 'R$8.25 bi', label: 'Federal S&T budget in 2022', color: 'var(--blue)' },
      { value: '~75%', label: 'Science budget spent on campaigns', color: 'var(--text3)' },
    ],

    semigodTitle: 'The demigod lifestyle',
    semigod1: <>When people think of a politician's salary, they think of the <strong>base subsidy</strong> — around R$33,000 to R$46,000 per month depending on the office. But that figure generally represents less than 20% of the real cost of a politician to the public treasury.</>,
    semigod2: <>There are the <strong>"indemnities"</strong>: housing allowance, office support quota, cabinet funds, unlimited airline tickets, loaned civil servants, official vehicle, health plan, legal consultancy, and more. None of these benefits are taxed as income. Combined, the real monthly cost of a Brazilian legislator to the state is around <strong>R$210,000</strong>.</>,
    semigod3: <>They fly business class on long trips. Housing in the federal capital is paid for. Transport, meals, and communications are reimbursed. In European democracies, a legislator takes the subway to work. Here, <strong>the logic is different.</strong></>,

    fundTitle: 'Party Fund and Electoral Fund: the cherry on top',
    fund1: <>With all these benefits, you might expect candidates to use their own money for campaigns. But no. There's the <strong>Party Fund</strong> — an annual government transfer to parties for structural maintenance — and the <strong>Special Electoral Campaign Financing Fund (FEFC)</strong>, popularly known as the <em>Electoral Fund</em>.</>,
    fund2: <>The Electoral Fund in 2022 was <strong>R$4.96 billion</strong>. Public money, distributed among parties according to criteria defined by Congress itself.</>,
    fund3: <>The ultimate irony: <strong>the legislators themselves vote to define the size of this fund</strong>. And their own salaries. And their own benefits. And the rules governing their campaigns. The guardian of the box decides the size of the box.</>,

    tableTitle: 'Brazil in the world mirror',
    tableIntro: <>To understand the scale of the absurdity, comparison is necessary. The table below crosses the <strong>minimum wage</strong> of each country against the monthly cost of a politician (including benefits and indemnities):</>,
    tableHeaders: ['Country', 'Minimum Wage (Monthly/US$)', 'Politician Cost (Monthly/US$)', 'Disparity'],
    tableRows: [
      ['🇧🇷 Brazil', '~$280', '~$42,000 (Base + Indemnities)', '~150x higher'],
      ['🇨🇴 Colombia', '~$330', '~$11,000', '~33x higher'],
      ['🇨🇱 Chile', '~$520', '~$7,300', '~14x higher'],
      ['🇺🇸 USA', '~$1,160', '~$14,500', '~12.5x higher'],
      ['🇦🇷 Argentina', '~$200', '~$2,000', '~10x higher'],
      ['🇮🇹 Italy', '~$1,300', '~$11,200', '~8.6x higher'],
      ['🇩🇪 Germany', '~$2,150', '~$11,300', '~5.2x higher'],
      ['🇵🇹 Portugal', '~$880', '~$4,100', '~4.6x higher'],
      ['🇫🇷 France', '~$1,900', '~$8,100', '~4.3x higher'],
      ['🇪🇸 Spain', '~$1,220', '~$4,500', '~3.7x higher'],
    ],
    tableNote: <>In consolidated Western European democracies, the disparity between minimum wage and a politician's cost is between <strong>3x and 5x</strong>. In those countries, legislators use public transit, file detailed expense reports, and live within a reality not radically different from their voters'. In Brazil, that disparity <strong>approaches 150 times</strong>. This is not a matter of economic development — it's a matter of deliberate political choice.</>,

    nextTitle: 'Next steps',
    next1: <>This dashboard is the <strong>first layer</strong> of an analysis I plan to expand. The TSE data allows going much further: crossing campaign spending with <strong>donors</strong> — individuals and corporations — and identifying which economic sectors fund specific candidates.</>,
    next2: <>The question driving this expansion is simple: <strong>who paid the bill, and what did they get in return?</strong> Concessions, contracts, parliamentary amendments — everything leaves a trail. The data is available. It's just a matter of knowing where to look.</>,
  },
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function EleicoesCampanhas2022() {
  const { lang } = useLang()
  const tx = content[lang]

  const colStyle = (i: number): React.CSSProperties => ({
    textAlign: i === 3 ? 'right' : 'left',
    padding: '10px 14px',
    color: i === 3 ? 'var(--red)' : i === 0 ? 'var(--text)' : 'var(--text2)',
    fontFamily: i === 3 ? 'var(--font-mono)' : 'inherit',
    fontSize: i === 3 ? '12px' : '13px',
    fontWeight: i === 3 ? 600 : 400,
    borderBottom: '0.5px solid var(--border)',
  })

  const thStyle = (i: number): React.CSSProperties => ({
    textAlign: i === 3 ? 'right' : 'left',
    padding: '10px 14px',
    color: 'var(--text3)',
    fontWeight: 500,
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    borderBottom: '0.5px solid var(--border)',
  })

  return (
    <div className="mdx-content">

      {/* ── Intro ── */}
      <p>{tx.intro1}</p>
      <p>{tx.intro2}</p>
      <hr />

      {/* ── Dados ── */}
      <h2>{tx.dataTitle}</h2>
      <p>{tx.data1}</p>
      <p>{tx.data2}</p>
      <hr />

      {/* ── Vice e Senado ── */}
      <h2>{tx.viceTitle}</h2>
      <p>{tx.vice1}</p>
      <p>{tx.vice2}</p>
      <p>{tx.vice3}</p>
      <hr />

      {/* ── Accordions ── */}
      <h2>{tx.faqTitle}</h2>
      <p>{tx.faqIntro}</p>
      <div style={{
        border: '0.5px solid var(--border)',
        borderRadius: '8px',
        padding: '0 20px',
        margin: '1.5rem 0',
        background: 'var(--bg3)',
      }}>
        {tx.faqs.map((faq, i) => (
          <Accordion key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>
      <hr />

      {/* ── Choque de realidade ── */}
      <h2>{tx.shockTitle}</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '12px',
        margin: '1.5rem 0',
      }}>
        {tx.shockStats.map((s, i) => (
          <StatCard key={i} value={s.value} label={s.label} color={s.color} />
        ))}
      </div>
      <p>{tx.shock1}</p>
      <p>{tx.shock2}</p>
      <hr />

      {/* ── Semideus ── */}
      <h2>{tx.semigodTitle}</h2>
      <p>{tx.semigod1}</p>
      <p>{tx.semigod2}</p>
      <p>{tx.semigod3}</p>
      <hr />

      {/* ── Fundo ── */}
      <h2>{tx.fundTitle}</h2>
      <p>{tx.fund1}</p>
      <p>{tx.fund2}</p>
      <blockquote>{tx.fund3}</blockquote>
      <hr />

      {/* ── Tabela Internacional ── */}
      <h2>{tx.tableTitle}</h2>
      <p>{tx.tableIntro}</p>
      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr>
              {tx.tableHeaders.map((h, i) => (
                <th key={i} style={thStyle(i)}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tx.tableRows.map((row, ri) => (
              <tr key={ri} style={{ background: ri === 0 ? 'rgba(255,45,85,0.04)' : 'transparent' }}>
                {row.map((cell, ci) => (
                  <td key={ci} style={colStyle(ci)}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>{tx.tableNote}</p>
      <hr />

      {/* ── Próximos passos ── */}
      <h2>{tx.nextTitle}</h2>
      <p>{tx.next1}</p>
      <p>{tx.next2}</p>

    </div>
  )
}
