'use client'

import { useLang } from '@/context/LangContext'

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
        fontFamily: 'var(--font-mono)',
        fontSize: '20px',
        fontWeight: 700,
        color,
        letterSpacing: '-0.02em',
        whiteSpace: 'nowrap',
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
    // CTA
    ctaLabel: '↗ acessar o painel interativo',
    ctaNote: <>Antes de ler o artigo, <strong>acesse o painel e interaja com os dados</strong>. Explore os gráficos, filtre por estado e cargo. O painel contém também uma série de perguntas e respostas espalhadas pela interface — leia todas. Elas explicam como funciona o sistema eleitoral brasileiro de um jeito que nenhuma aula de educação cívica jamais fez: direto, sem eufemismos.</>,

    // Intro
    intro1: <>Estamos em <strong>2026</strong> — ano de eleições. O Brasil tem um histórico denso de instabilidade política, polarização e desinformação. Criei este projeto não apenas como um painel de dados, mas como uma ferramenta de utilidade pública: mostrar para onde vai o nosso dinheiro e o que fazemos ao digitar aqueles quatro números na urna.</>,
    intro2: <>Não é um projeto neutro. É um projeto honesto. Os dados são públicos — e quando você os organiza direito, eles falam por si mesmos.</>,

    // Dados
    dataTitle: 'Os dados: crus e complexos',
    data1: <>Utilizei os dados abertos do <strong>TSE (Tribunal Superior Eleitoral)</strong>. São bases gigantescas, cruas, separadas por cargo, por estado e por turno — tabelas com dezenas de colunas sem documentação clara. A maior parte dos cidadãos nunca vai abrir um desses arquivos na vida. O objetivo do painel foi justamente esse: <strong>mastigar, organizar e visualizar</strong> o que está escondido nessas planilhas.</>,
    data2: <>O projeto cobriu <strong>todos os cargos disputados</strong> nas Eleições Gerais de 2022: Presidente, Governador, Vice-Governador, Senador, Deputado Federal, Deputado Estadual e Deputado Distrital. Cada cargo, em cada estado, com os gastos declarados de campanha cruzados com o resultado eleitoral. Da Presidência da República até os deputados estaduais cujos nomes a maioria dos eleitores nunca pronunciou em voz alta.</>,

    // Vice e Senado
    viceTitle: 'Você sabe quem representa você?',
    vice1: <>Faça um exercício mental. Pergunte a dez pessoas na rua quem é o <strong>Presidente da República</strong>. Provavelmente todos os dez sabem. Quem é o <strong>Governador do estado</strong>? Talvez quatro ou cinco. Quem é o <strong>Vice-Governador</strong>? Sorte se um responder.</>,
    vice2: <>E o Senado? Provavelmente menos de 1% das pessoas sabem que cada estado elege <strong>3 Senadores</strong>, com mandatos de 8 anos. E talvez <strong>0,02%</strong> consiga nomear os três que representam seu estado — mesmo sendo os parlamentares de mandato mais longo e, proporcionalmente, mais caros do sistema.</>,
    vice3: <>O problema não é a ignorância das pessoas. É que o sistema foi desenhado para ser opaco. <strong>Quanto mais invisível o cargo, mais fácil é abusar dele.</strong> E é exatamente aí que mora o perigo — porque é esse cargo invisível que vota nas leis que definem quanto você vai pagar de imposto amanhã.</>,
    vice4: <>A carga tributária brasileira beira os <strong>33% do PIB</strong> e pune, acima de tudo, o consumo. O <strong>ICMS</strong> — Imposto sobre Circulação de Mercadorias e Serviços — é o principal vilão. Existe uma regra chamada de <em>"essencialidade"</em>: produtos considerados não essenciais, como eletrônicos e perfumes, podem ter alíquotas que ultrapassam facilmente os <strong>100%</strong>. Você compra um produto para você e entrega o valor de mais de um produto inteiro ao governo. É esse dinheiro — do seu celular, do seu perfume, da sua cerveja — que banca os salários da galera que a gente nem lembra que existe.</>,

    // Choque
    shockTitle: 'O choque de realidade: R$ 6,15 bilhões em 45 dias',
    shock1: <>Em 2022, as campanhas eleitorais declaradas custaram aproximadamente <strong>R$ 6,15 bilhões</strong>. Para ter dimensão: o governo federal investiu cerca de <strong>R$ 8,25 bilhões em Ciência e Tecnologia</strong> no ano inteiro de 2022.</>,
    shock2: <>Isso significa que em <strong>45 dias de campanha</strong>, o Brasil gastou aproximadamente <strong>75% do orçamento anual de ciência</strong>. Esse é o valor declarado — o real é maior. Com gastos indiretos, estruturas de partido, serviços não declarados e assessorias paralelas, estimativas conservadoras apontam para <strong>R$ 8,75 bilhões a R$ 10 bilhões</strong>. Em alguns cenários, as campanhas custaram mais do que o Brasil inteiro investiu em pesquisa e inovação no mesmo ano.</>,
    shockStats: [
      { value: 'R$ 6,15 bi', label: 'Gastos declarados de campanha', color: 'var(--red)' },
      { value: 'R$ 8,25 bi', label: 'Orçamento federal de C&T em 2022', color: 'var(--blue)' },
      { value: '~75%', label: 'Do orçamento de ciência gasto em campanha', color: 'var(--green)' },
    ],

    // Semideus
    semigodTitle: 'A vida de semideus',
    semigod1: <>A maioria das pessoas, quando ouve "salário de deputado", pensa nos R$ 33 a 46 mil do subsídio base e acha que já sabe o número. Não sabe. Esse valor é a ponta do iceberg — e nem é a parte que mais dói. Veja o raio-X real, com base nos dados públicos da própria Câmara dos Deputados:</>,
    semigod2: (
      <div style={{ background: 'var(--bg3)', border: '0.5px solid var(--border)', borderRadius: '8px', padding: '20px 24px', margin: '0.5rem 0 1.2rem', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
        {[
          ['Subsídio (salário base, com desconto de IR e previdência)', '~R$ 44.000'],
          ['Verba de Gabinete (para contratar até 25 assessores)', '~R$ 125.000'],
          ['Cota Parlamentar / "Cotão" (passagens, combustível, marketing, alimentação)', '~R$ 40.000'],
          ['Auxílio-Moradia', '~R$ 8.400'],
        ].map(([item, val], i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px', padding: '8px 0', borderBottom: '0.5px solid var(--border)' }}>
            <span style={{ color: 'var(--text2)' }}>{item}</span>
            <span style={{ color: 'var(--blue)', whiteSpace: 'nowrap', fontWeight: 600 }}>{val}</span>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px', padding: '12px 0 0' }}>
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>Total estimado por mês</span>
          <span style={{ color: 'var(--red)', whiteSpace: 'nowrap', fontWeight: 700, fontSize: '15px' }}>~R$ 217.400</span>
        </div>
      </div>
    ),
    semigod3: <>Falar em R$ 210 mil é até ser conservador. A conta acima ainda <strong>não inclui</strong> o incalculável: plano de saúde ilimitado que cobre cirurgias milionárias, passagens da FAB quando conveniente, e uma aposentadoria especial que nenhum trabalhador comum conseguirá na vida. Nessas eleições, o Brasil preencheu <strong>1.654 vagas</strong>. Se cada uma custar R$ 210 mil mensais, estamos falando de <strong>R$ 347,3 milhões por mês</strong>. Multiplicando por 13 (incluindo o décimo-terceiro), o custo ultrapassa <strong>R$ 4,51 bilhões por ano</strong> — só para manter a estrutura dos eleitos. Com o salário mínimo atual de R$ 1.500, esses R$ 4,51 bilhões seriam suficientes para pagar um salário mínimo a mais de <strong>3 milhões de pessoas</strong> num único mês, ou sustentar <strong>231 mil trabalhadores</strong> pelo ano inteiro.</>,
    semigod4: <>Faça um exercício de lógica. Quais outras pessoas no mundo têm um estilo de vida com tanto acesso livre a capital e recursos? Você pode pensar em grandes empresários ou CEOs de Big Techs — Apple, Microsoft, Google. Mas esses executivos vivem sob <strong>pressão esmagadora</strong>: metas trimestrais, risco de demissão por acionistas, concorrência global e inovação constante. Se falharem, caem.</>,
    semigod5: <>O político brasileiro vive o <strong>luxo do CEO sem nenhuma das responsabilidades</strong>. Tem estabilidade garantida, pode faltar a dezenas de sessões, trabalha presencialmente poucos dias na semana e não sofre nenhuma avaliação de desempenho real. O povo — que seria o acionista — é obrigado a continuar pagando impostos, sob pena de prisão, para financiar um sistema onde o funcionário é <strong>impossível de ser demitido</strong> antes do fim do mandato.</>,
    semigod6: <>Além de todos esses benefícios custeados pelo Estado — da roupa que vestem, disfarçada em auxílios, até os carros que andam e os voos que pegam — muitos possuem suas próprias empresas, fazendas e holdings. Com uma vida legalmente tão luxuosa e sem estresse real, a pergunta que fica é: <strong>como ainda existe tanta corrupção e desvio de verbas?</strong> A resposta é o projeto de poder. O luxo vira o padrão, e o dinheiro ilícito financia a perpetuação no cargo.</>,
    semigod7: <>Ao olharmos para o mundo, a anomalia brasileira choca não apenas na disparidade relativa, mas no <strong>valor absoluto</strong>. Na Nigéria — que lidera o ranking de desigualdade por ter um salário mínimo de apenas US$ 40 —, o custo de um político ronda os US$ 14 mil mensais. No Brasil, estamos falando de quase <strong>US$ 42 mil por mês</strong>. O parlamentar brasileiro ganha, em valores absolutos, <strong>mais do que parlamentares das nações mais ricas do planeta Terra</strong>.</>,

    // Fundo
    fundTitle: 'Fundo Partidário e Fundão Eleitoral: a cereja do bolo',
    fund1: <>Com todos esses benefícios, você poderia imaginar que os candidatos usam o próprio dinheiro nas campanhas. Mas não. Existe o <strong>Fundo Partidário</strong> — um repasse anual do governo aos partidos para manutenção de suas estruturas — e o <strong>Fundo Especial de Financiamento de Campanha (FEFC)</strong>, popularmente chamado de <em>Fundão Eleitoral</em>.</>,
    fund2: <>O Fundão Eleitoral em 2022 foi de <strong>R$ 4,96 bilhões</strong>. Dinheiro público, retirado do Orçamento da União, distribuído entre os partidos conforme critérios definidos pelo próprio Congresso.</>,
    fund3: <>A ironia máxima: <strong>são os próprios parlamentares que votam para definir o tamanho desse fundo</strong>. E os seus próprios salários. E os seus próprios benefícios. E as regras que regulam as suas campanhas. O guardião da caixa é quem decide o tamanho da caixa — e quem decide o quanto você vai pagar por ela.</>,

    // Tabela
    tableTitle: 'O Brasil no espelho do mundo',
    tableIntro: <>Para entender o nível do absurdo, é preciso comparar. A tabela abaixo ranqueia países da maior para a menor disparidade entre o <strong>salário mínimo</strong> e o custo mensal de um político (incluindo benefícios e indenizações):</>,
    tableHeaders: ['País', 'Sal. Mínimo (US$/mês)', 'Custo Político (US$/mês)', 'Disparidade'],
    tableRows: [
      ['🇳🇬 Nigéria',       '~$40',    '~$14.000',                      '~350x maior'],
      ['🇧🇷 Brasil',        '~$280',   '~$42.000 (Base + Indenizações)', '~150x maior'],
      ['🇲🇽 México',        '~$350',   '~$15.750',                      '~45x maior'],
      ['🇨🇴 Colômbia',      '~$330',   '~$11.000',                      '~33x maior'],
      ['🇷🇺 Rússia',        '~$200',   '~$6.000',                       '~30x maior'],
      ['🇿🇦 África do Sul', '~$250',   '~$6.000',                       '~24x maior'],
      ['🇨🇱 Chile',         '~$520',   '~$7.300',                       '~14x maior'],
      ['🇺🇸 EUA',           '~$1.160', '~$14.500',                      '~12.5x maior'],
      ['🇦🇷 Argentina',     '~$200',   '~$2.000',                       '~10x maior'],
      ['🇪🇬 Egito',         '~$150',   '~$1.500',                       '~10x maior'],
      ['🇮🇹 Itália',        '~$1.300', '~$11.200',                      '~8.6x maior'],
      ['🇩🇪 Alemanha',      '~$2.150', '~$11.300',                      '~5.2x maior'],
      ['🇮🇪 Irlanda',       '~$2.000', '~$9.500',                       '~4.7x maior'],
      ['🇵🇹 Portugal',      '~$880',   '~$4.100',                       '~4.6x maior'],
      ['🇫🇷 França',        '~$1.900', '~$8.100',                       '~4.3x maior'],
      ['🇧🇪 Bélgica',       '~$2.000', '~$8.500',                       '~4.2x maior'],
      ['🇬🇧 Reino Unido',   '~$2.000', '~$8.000',                       '~4x maior'],
      ['🇪🇸 Espanha',       '~$1.220', '~$4.500',                       '~3.7x maior'],
      ['🇨🇭 Suíça',         '~$4.000', '~$14.000',                      '~3.5x maior'],
      ['🇳🇴 Noruega',       '~$3.000', '~$10.000',                      '~3.3x maior'],
      ['🇸🇪 Suécia',        '~$2.500', '~$7.500',                       '~3x maior'],
    ],
    tableNote1: <><strong>Nota:</strong> Países como China, Arábia Saudita, Etiópia e Eritreia ficaram de fora desta tabela pois não operam como democracias tradicionais; não possuem salário mínimo nacional unificado ou suas legislaturas são compostas por membros não-assalariados do partido ou da realeza.</>,
    tableNote2: <>Observe os extremos. Na Europa, onde o parlamento é encarado como um serviço público real, a diferença fica entre <strong>3 a 5 vezes</strong> — e os políticos andam de trem com a população. No topo do ranking, temos a <strong>Nigéria</strong>: um parlamento com poder legal de criar suas próprias <em>allowances</em> num país com recursos abundantes (petróleo), mas com uma população na miséria. O Brasil copiou exatamente essa fórmula: uma elite intocável que aprova os próprios privilégios, sustentada por um povo que paga impostos punitivos sobre tudo o que consome.</>,

    // Próximos passos
    nextTitle: 'Próximos passos',
    next1: <>Este painel é a <strong>primeira camada</strong> de uma análise que pretendo expandir. Os dados do TSE permitem ir muito além: cruzar os gastos de campanha com os <strong>doadores</strong> — pessoas físicas e jurídicas — e identificar quais setores da economia financiam determinados candidatos.</>,
    next2: <>A pergunta que guia essa expansão é simples: <strong>quem pagou a conta, e o que recebeu em troca?</strong> As concessões, os contratos, as emendas parlamentares — tudo deixa rastro. Os dados estão disponíveis. É só saber onde procurar.</>,
  },

  en: {
    // CTA
    ctaLabel: '↗ open the interactive dashboard',
    ctaNote: <>Before reading this article, <strong>open the dashboard and interact with the data</strong>. Explore the charts, filter by state and office. The dashboard also includes a series of Q&A cards spread throughout the interface — read them all. They explain how the Brazilian electoral system actually works in a way no civics class ever did: direct, without euphemisms.</>,

    // Intro
    intro1: <>We're in <strong>2026</strong> — an election year. Brazil has a dense history of political instability, polarization, and misinformation. I built this project not just as a data dashboard, but as a public utility tool: to show where our money goes and what we're actually doing when we punch those four numbers into the voting machine.</>,
    intro2: <>This is not a neutral project. It's an honest one. The data is public — and when you organize it properly, it speaks for itself.</>,

    // Dados
    dataTitle: 'The data: raw and complex',
    data1: <>I used the open data from the <strong>TSE (Superior Electoral Court)</strong>. These are massive, raw databases — split by office, by state, and by round, with dozens of columns and no clear documentation. Most citizens will never open one of these files in their lifetime. The whole point of the dashboard was to <strong>process, organize, and visualize</strong> what's buried in these spreadsheets.</>,
    data2: <>The project covered <strong>every contested office</strong> in the 2022 General Elections: President, Governor, Vice-Governor, Senator, Federal Deputy, State Deputy, and District Deputy. Every office, in every state, with declared campaign spending crossed against electoral results. From the Presidency of the Republic down to the state deputies whose names most voters have never said out loud.</>,

    // Vice e Senado
    viceTitle: 'Do you know who represents you?',
    vice1: <>Try a mental exercise. Ask ten people on the street who the <strong>President</strong> is. Probably all ten know. Who is the <strong>State Governor</strong>? Maybe four or five. Who is the <strong>Vice-Governor</strong>? Lucky if one person answers.</>,
    vice2: <>And the Senate? Probably fewer than 1% of people know that each state elects <strong>3 Senators</strong> with 8-year terms. And maybe <strong>0.02%</strong> can name all three representing their state — even though they hold the longest mandates and are, proportionally, the most expensive legislators in the system.</>,
    vice3: <>The problem isn't people's ignorance. It's that the system was designed to be opaque. <strong>The more invisible the office, the easier it is to abuse it.</strong> And that's exactly where the danger lies — because it's those invisible offices that vote on the laws deciding how much tax you'll pay tomorrow.</>,
    vice4: <>Brazil's tax burden hovers around <strong>33% of GDP</strong> and punishes consumption above all else. The <strong>ICMS</strong> — a state-level sales tax on goods and services — is the main culprit. There's a rule called <em>"essentiality"</em>: products considered non-essential, such as electronics and perfumes, can carry effective rates that easily exceed <strong>100%</strong>. You buy one product for yourself and hand over the value of more than an entire second product to the government. That money — from your phone, your perfume, your beer — is what funds the salaries of people most voters can't even name.</>,

    // Choque
    shockTitle: 'The reality check: R$6.15 billion in 45 days',
    shock1: <>In 2022, declared electoral campaigns cost approximately <strong>R$6.15 billion</strong>. For scale: the federal government invested around <strong>R$8.25 billion in Science and Technology</strong> for the entire year of 2022.</>,
    shock2: <>That means in <strong>45 days of campaigning</strong>, Brazil spent roughly <strong>75% of its annual science budget</strong>. And that's the declared figure — the real number is higher. With indirect costs, party infrastructure, undeclared services, and parallel consultancies, conservative estimates point to <strong>R$8.75 billion to R$10 billion</strong>. In some scenarios, the campaigns cost more than Brazil's entire investment in research and innovation in the same year.</>,
    shockStats: [
      { value: 'R$6.15 bi', label: 'Declared campaign spending', color: 'var(--red)' },
      { value: 'R$8.25 bi', label: 'Federal S&T budget in 2022', color: 'var(--blue)' },
      { value: '~75%', label: 'Science budget spent on campaigns', color: 'var(--green)' },
    ],

    // Semideus
    semigodTitle: 'The demigod lifestyle',
    semigod1: <>Most people, when they hear "legislator's salary," think of the R$33,000–46,000 base subsidy and assume they know the number. They don't. That figure is the tip of the iceberg — and not even the most painful part. Here's the real breakdown, based on public data from Brazil's own Chamber of Deputies:</>,
    semigod2: (
      <div style={{ background: 'var(--bg3)', border: '0.5px solid var(--border)', borderRadius: '8px', padding: '20px 24px', margin: '0.5rem 0 1.2rem', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
        {[
          ['Base subsidy (subject to income tax and social security)', '~R$44,000'],
          ['Cabinet fund (to hire up to 25 aides)', '~R$125,000'],
          ['Parliamentary quota / "Cotão" (flights, fuel, marketing, meals)', '~R$40,000'],
          ['Housing allowance', '~R$8,400'],
        ].map(([item, val], i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px', padding: '8px 0', borderBottom: '0.5px solid var(--border)' }}>
            <span style={{ color: 'var(--text2)' }}>{item}</span>
            <span style={{ color: 'var(--blue)', whiteSpace: 'nowrap', fontWeight: 600 }}>{val}</span>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px', padding: '12px 0 0' }}>
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>Estimated total per month</span>
          <span style={{ color: 'var(--red)', whiteSpace: 'nowrap', fontWeight: 700, fontSize: '15px' }}>~R$217,400</span>
        </div>
      </div>
    ),
    semigod3: <>Putting it at R$210,000 is actually conservative. The breakdown above still <strong>excludes</strong> the incalculable: an unlimited health plan covering million-dollar surgeries, Brazilian Air Force flights when convenient, and a special pension no ordinary worker will ever access. In these elections, Brazil filled <strong>1,654 seats</strong>. At R$210,000 per seat per month, that's <strong>R$347.3 million per month</strong>. Multiplied by 13 (including the year-end bonus), the cost exceeds <strong>R$4.51 billion per year</strong> — just to maintain the structure of those elected. At the current minimum wage of R$1,500, those R$4.51 billion would be enough to pay a minimum wage to more than <strong>3 million people</strong> in a single month, or sustain <strong>231,000 workers</strong> for an entire year.</>,
    semigod4: <>Do a logic exercise. Who else in the world has a lifestyle with this level of unrestricted access to capital and resources? You might think of major entrepreneurs or Big Tech CEOs — Apple, Microsoft, Google. But those executives live under <strong>crushing pressure</strong>: quarterly targets, shareholder accountability, global competition, and relentless pressure to innovate. If they fail, they fall.</>,
    semigod5: <>The Brazilian politician gets the <strong>CEO lifestyle with none of the accountability</strong>. They have guaranteed tenure, can miss dozens of sessions, work on-site only a few days a week, and face no real performance review. The people — who are effectively the shareholders — are legally compelled to keep paying taxes, under threat of criminal prosecution, to fund a system where the employee <strong>cannot be fired</strong> before the end of their term.</>,
    semigod6: <>On top of all the state-funded benefits — from the clothes they wear, disguised as allowances, to the cars they drive and the flights they take — many also own private companies, farms, and holding companies. With a legal lifestyle this luxurious and this free of real stress, the question becomes: <strong>how is there still so much corruption and embezzlement?</strong> The answer is the power project. The luxury becomes the baseline, and illicit money funds the perpetuation of power.</>,
    semigod7: <>Looking at the world, the Brazilian anomaly shocks not just in relative disparity, but in <strong>absolute value</strong>. In Nigeria — which leads the inequality ranking with a minimum wage of just US$40 — a politician costs around US$14,000 per month. In Brazil, we're talking about nearly <strong>US$42,000 per month</strong>. The Brazilian legislator earns, in absolute terms, <strong>more than parliamentarians in the wealthiest nations on Earth</strong>.</>,

    // Fundo
    fundTitle: 'Party Fund and Electoral Fund: the cherry on top',
    fund1: <>With all these benefits, you might expect candidates to use their own money for campaigns. But no. There's the <strong>Party Fund</strong> — an annual government transfer to parties for structural maintenance — and the <strong>Special Electoral Campaign Financing Fund (FEFC)</strong>, popularly known as the <em>Electoral Fund</em>.</>,
    fund2: <>The Electoral Fund in 2022 was <strong>R$4.96 billion</strong>. Public money, drawn from the federal budget, distributed among parties according to criteria defined by Congress itself.</>,
    fund3: <>The ultimate irony: <strong>the legislators themselves vote to define the size of this fund</strong>. And their own salaries. And their own benefits. And the rules governing their campaigns. The guardian of the box decides the size of the box — and decides how much you'll pay for it.</>,

    // Tabela
    tableTitle: 'Brazil in the world mirror',
    tableIntro: <>To understand the scale of the absurdity, comparison is necessary. The table below ranks countries from the highest to the lowest disparity between the <strong>minimum wage</strong> and the monthly cost of a politician (including benefits and indemnities):</>,
    tableHeaders: ['Country', 'Min. Wage (US$/mo)', 'Politician Cost (US$/mo)', 'Disparity'],
    tableRows: [
      ['🇳🇬 Nigeria',       '~$40',    '~$14,000',                      '~350x higher'],
      ['🇧🇷 Brazil',        '~$280',   '~$42,000 (Base + Indemnities)', '~150x higher'],
      ['🇲🇽 Mexico',        '~$350',   '~$15,750',                      '~45x higher'],
      ['🇨🇴 Colombia',      '~$330',   '~$11,000',                      '~33x higher'],
      ['🇷🇺 Russia',        '~$200',   '~$6,000',                       '~30x higher'],
      ['🇿🇦 South Africa',  '~$250',   '~$6,000',                       '~24x higher'],
      ['🇨🇱 Chile',         '~$520',   '~$7,300',                       '~14x higher'],
      ['🇺🇸 USA',           '~$1,160', '~$14,500',                      '~12.5x higher'],
      ['🇦🇷 Argentina',     '~$200',   '~$2,000',                       '~10x higher'],
      ['🇪🇬 Egypt',         '~$150',   '~$1,500',                       '~10x higher'],
      ['🇮🇹 Italy',         '~$1,300', '~$11,200',                      '~8.6x higher'],
      ['🇩🇪 Germany',       '~$2,150', '~$11,300',                      '~5.2x higher'],
      ['🇮🇪 Ireland',       '~$2,000', '~$9,500',                       '~4.7x higher'],
      ['🇵🇹 Portugal',      '~$880',   '~$4,100',                       '~4.6x higher'],
      ['🇫🇷 France',        '~$1,900', '~$8,100',                       '~4.3x higher'],
      ['🇧🇪 Belgium',       '~$2,000', '~$8,500',                       '~4.2x higher'],
      ['🇬🇧 United Kingdom','~$2,000', '~$8,000',                       '~4x higher'],
      ['🇪🇸 Spain',         '~$1,220', '~$4,500',                       '~3.7x higher'],
      ['🇨🇭 Switzerland',   '~$4,000', '~$14,000',                      '~3.5x higher'],
      ['🇳🇴 Norway',        '~$3,000', '~$10,000',                      '~3.3x higher'],
      ['🇸🇪 Sweden',        '~$2,500', '~$7,500',                       '~3x higher'],
    ],
    tableNote1: <><strong>Note:</strong> Countries such as China, Saudi Arabia, Ethiopia and Eritrea were excluded from this table as they do not operate as traditional democracies; they lack a unified national minimum wage, or their legislatures are composed of non-salaried party members or royalty.</>,
    tableNote2: <>Look at the extremes. In Europe, where parliament is treated as genuine public service, the gap is between <strong>3 and 5 times</strong> — and politicians commute by train alongside the population. At the top of the ranking sits <strong>Nigeria</strong>: a parliament with the legal power to create its own <em>allowances</em> in a country with abundant resources (oil) but a population living in poverty. Brazil copied exactly that formula: an untouchable elite that approves its own privileges, sustained by a people paying punitive taxes on everything they consume.</>,

    // Próximos passos
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
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    fontWeight: i === 3 ? 600 : 400,
    borderBottom: '0.5px solid var(--border)',
    whiteSpace: 'nowrap',
  })

  const thStyle = (i: number): React.CSSProperties => ({
    textAlign: i === 3 ? 'right' : 'left',
    padding: '10px 14px',
    color: 'var(--text3)',
    fontFamily: 'var(--font-mono)',
    fontWeight: 500,
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    borderBottom: '0.5px solid var(--border)',
    whiteSpace: 'nowrap',
  })

  return (
    <div className="mdx-content">

      {/* ── CTA painel ── */}
      <a
        href="https://felipecezar01.github.io/eleicoes_gerais_2022/"
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
        {tx.ctaLabel}
      </a>
      <p>{tx.ctaNote}</p>
      <hr />

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
      <p>{tx.vice4}</p>
      <hr />

      {/* ── Choque de realidade ── */}
      <h2>{tx.shockTitle}</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
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
      {tx.semigod2}
      <p>{tx.semigod3}</p>
      <p>{tx.semigod4}</p>
      <p>{tx.semigod5}</p>
      <p>{tx.semigod6}</p>
      <p>{tx.semigod7}</p>
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
      <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
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
              <tr key={ri} style={{
                background: ri === 0
                  ? 'rgba(255,45,85,0.06)'
                  : ri === 1
                  ? 'rgba(255,45,85,0.03)'
                  : 'transparent',
              }}>
                {row.map((cell, ci) => (
                  <td key={ci} style={colStyle(ci)}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '12px', color: 'var(--text3)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
        {tx.tableNote1}
      </p>
      <p>{tx.tableNote2}</p>
      <hr />

      {/* ── Próximos passos ── */}
      <h2>{tx.nextTitle}</h2>
      <p>{tx.next1}</p>
      <p>{tx.next2}</p>

    </div>
  )
}
