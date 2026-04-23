'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useLang } from '@/context/LangContext'

type Lang = 'pt' | 'en'
type ToolName = 'Pandas' | 'Polars' | 'DuckDB'
type MetricKey = 'seconds' | 'ramMb' | 'ratio' | 'throughput'

type BenchmarkRow = {
  id: string
  label: Record<Lang, string>
  diskMb: number
  results: Record<ToolName, {
    ramMb: number | null
    seconds: number | null
    ratio: number | null
  }>
}

const benchmarkData: BenchmarkRow[] = [
  {
    id: 'file-155mb',
    label: { pt: 'Arquivo 1', en: 'File 1' },
    diskMb: 156,
    results: {
      Pandas: { ramMb: 339.9, seconds: 2.20, ratio: 2.18 },
      Polars: { ramMb: 280.9, seconds: 0.29, ratio: 1.80 },
      DuckDB: { ramMb: 405.3, seconds: 1.31, ratio: 2.60 },
    },
  },
  {
    id: 'file-779mb',
    label: { pt: 'Arquivo 2', en: 'File 2' },
    diskMb: 780,
    results: {
      Pandas: { ramMb: 1630.5, seconds: 9.45, ratio: 2.09 },
      Polars: { ramMb: 1570.2, seconds: 0.73, ratio: 2.01 },
      DuckDB: { ramMb: 1486.3, seconds: 4.15, ratio: 1.91 },
    },
  },
  {
    id: 'file-1596mb',
    label: { pt: 'Arquivo 3', en: 'File 3' },
    diskMb: 1597,
    results: {
      Pandas: { ramMb: 3342.0, seconds: 18.10, ratio: 2.09 },
      Polars: { ramMb: 3250.1, seconds: 1.47, ratio: 2.04 },
      DuckDB: { ramMb: 3368.1, seconds: 8.55, ratio: 2.11 },
    },
  },
  {
    id: 'file-4788mb',
    label: { pt: 'Arquivo 4', en: 'File 4' },
    diskMb: 4789,
    results: {
      Pandas: { ramMb: null, seconds: null, ratio: null },
      Polars: { ramMb: 8696.7, seconds: 22.50, ratio: 1.82 },
      DuckDB: { ramMb: 9893.1, seconds: 24.21, ratio: 2.07 },
    },
  },
]

const tools: ToolName[] = ['Pandas', 'Polars', 'DuckDB']

const toolTheme: Record<ToolName, { color: string; bg: string; border: string; icon: string }> = {
  Pandas: {
    color: '#3b82f6',
    bg: 'rgba(59, 130, 246, 0.14)',
    border: 'rgba(59, 130, 246, 0.28)',
    icon: 'Pd',
  },
  Polars: {
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.14)',
    border: 'rgba(16, 185, 129, 0.28)',
    icon: 'Pl',
  },
  DuckDB: {
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.14)',
    border: 'rgba(245, 158, 11, 0.28)',
    icon: 'Dk',
  },
}

const metricCopy: Record<Lang, Record<MetricKey, {
  title: string
  subtitle: string
  lead?: ReactNode
  note: ReactNode
}>> = {
  pt: {
    seconds: {
      title: 'Tempo de execução',
      subtitle: 'Segundos para leitura completa',
      lead: <>
        Parece pouco, mas em arquivos grandes a leitura já é onde a coisa começa a desandar. Então, pra começar, vamos dar uma olhada em como ficou o tempo de execução. Se liga aqui no gráfico.
      </>,
      note: <>
        <p style={{ margin: 0 }}>Esse gráfico mede quanto tempo cada ferramenta levou pra carregar o CSV do início ao fim. O Polars foi muito mais rápido nos três primeiros arquivos. No arquivo de 1.597 MB, por exemplo, ele terminou em 1,47s, enquanto o Pandas levou 18,10s — mais de 12 vezes mais lento.</p>
        <p style={{ margin: '8px 0 0' }}>No maior arquivo aconteceu uma coisa meio engraçada, no sentido trágico da computação doméstica: eu tinha mais ou menos 10 GB de RAM livre pra fazer esse teste e não foi suficiente. Meu PC tem 16 GB de RAM, e a gente sabe o quanto RAM está cara hoje. Eu estava acompanhando pelo <code>btop++</code>, vi a memória acabar, o mouse começou a travar, o VS Code travou junto e eu tive que reiniciar a máquina.</p>
        <p style={{ margin: '8px 0 0' }}>Então eu não sei exatamente quanto tempo o Pandas levaria no arquivo maior. Se você tiver mais RAM e quiser brincar com isso, pega uns arquivos grandes e testa. Aqui, a comparação real ficou entre Polars e DuckDB, com os dois chegando ali perto de 22 a 24 segundos.</p>
      </>,
    },
    ramMb: {
      title: 'Pico de RAM utilizado',
      subtitle: 'Megabytes no pico',
      lead: <>
        O próximo gráfico interessante é o pico de RAM utilizado. O nome é meio autoexplicativo, mas ele é importante porque mostra onde a leitura começa a bater no limite físico da máquina.
      </>,
      note: <>
        <p style={{ margin: 0 }}>Aqui a ideia é registrar o maior uso de memória observado enquanto cada ferramenta lia o arquivo. Todas consumiram mais RAM do que o tamanho em disco, porque o parser precisa de espaço extra para montar as estruturas internas.</p>
        <p style={{ margin: '8px 0 0' }}>No arquivo de quase 4,8 GB, o DuckDB chegou a quase 10 GB de RAM no pico. O Polars ficou em 8.697 MB. Já o Pandas, infelizmente, eu não consegui medir até o fim. Como eu disse, eu tinha cerca de 10 GB livres e não teve como: estourou. Provavelmente ficaria acima disso, talvez perto de 12 GB, mas isso aqui já entra como leitura minha, não como número medido.</p>
      </>,
    },
    ratio: {
      title: 'Razão RAM / Disco',
      subtitle: 'Multiplicador de memória',
      lead: <>
        Outra coisa interessante de olhar é a razão RAM/disco. Ela ajuda a sair do “será que cabe?” e transformar isso em uma conta mais concreta antes de rodar o script.
      </>,
      note: <>
        <p style={{ margin: 0 }}>Esse gráfico divide o pico de RAM pelo tamanho real do arquivo em disco. É um multiplicador: mostra quantas vezes a ferramenta precisa de memória além do tamanho do arquivo.</p>
        <p style={{ margin: '8px 0 0' }}>Todos ficaram perto de 2x nos arquivos intermediários. Na prática, isso significa que pra ler um CSV de quase 5 GB você precisa ter pelo menos 9 a 10 GB de RAM disponível. Saber essa razão antes de rodar evita surpresa no meio do script. E deixando claro: o Pandas provavelmente tenderia a subir também no arquivo maior, mas como ele não concluiu, eu não tenho esse ponto medido no gráfico.</p>
      </>,
    },
    throughput: {
      title: 'Throughput (MB/s)',
      subtitle: 'Tamanho real dividido pelo tempo',
      lead: <>
        E aí temos o throughput em MB/s, que é uma forma rápida de enxergar quantos megabytes por segundo cada ferramenta conseguiu processar.
      </>,
      note: <>
        <p style={{ margin: 0 }}>Esse número é calculado dividindo o tamanho do arquivo pelo tempo de leitura. O Polars dispara aqui: passa de 1.000 MB/s nos arquivos intermediários e fica muito acima do Pandas nos testes que o Pandas conseguiu concluir.</p>
        <p style={{ margin: '8px 0 0' }}>Pra quem não conhece, o Polars é escrito em Rust e tem uma arquitetura bem voltada pra eficiência e paralelismo. O DuckDB é um banco analítico escrito em C++, também muito forte pra esse tipo de trabalho. Já o Pandas é uma biblioteca Python com muita coisa otimizada por baixo em C e Cython, mas carrega um modelo mais antigo e nem sempre brilha quando o arquivo começa a ficar grande.</p>
        <p style={{ margin: '8px 0 0' }}>No maior arquivo, o throughput do Polars cai bastante, provavelmente por pressão de memória, mas ainda fica levemente acima do DuckDB. O Pandas, além de consumir muita memória, ficou bem mais lento nos arquivos que concluiu.</p>
      </>,
    },
  },
  en: {
    seconds: {
      title: 'Execution Time',
      subtitle: 'Seconds for a complete read',
      note: <>
        <p style={{ margin: 0 }}><strong>What it is:</strong> measures how long each tool took to load the CSV from start to finish.</p>
        <p style={{ margin: '8px 0 0' }}><strong>What the data says:</strong> Polars was much faster on the first three files. On the 1,597 MB file, for example, it finished in 1.47s while Pandas took 18.10s — more than 12x slower. On the largest file, Pandas did not finish, so the real comparison was only between Polars and DuckDB, both landing around 22–24s.</p>
      </>,
    },
    ramMb: {
      title: 'Peak RAM Used',
      subtitle: 'Megabytes at peak',
      note: <>
        <p style={{ margin: 0 }}><strong>What it is:</strong> records the highest memory usage observed while each tool was reading the file.</p>
        <p style={{ margin: '8px 0 0' }}><strong>What the data says:</strong> all tools used more RAM than the file size on disk — the parser needs extra space to build internal structures. On the 4,789 MB file, DuckDB peaked at 9,894 MB. Polars reached 8,697 MB. Pandas did not finish that size.</p>
      </>,
    },
    ratio: {
      title: 'RAM / Disk Ratio',
      subtitle: 'Memory multiplier',
      note: <>
        <p style={{ margin: 0 }}><strong>What it is:</strong> divides peak RAM by the real file size on disk. It's a multiplier: shows how many times more memory the tool needs beyond the file size itself.</p>
        <p style={{ margin: '8px 0 0' }}><strong>What the data says:</strong> all tools stayed close to 2x on the middle files. In practice, this means reading a 5 GB CSV requires at least 9 to 10 GB of available RAM. Knowing this ratio before running avoids surprises halfway through the script.</p>
      </>,
    },
    throughput: {
      title: 'Throughput (MB/s)',
      subtitle: 'Real size divided by time',
      note: <>
        <p style={{ margin: 0 }}><strong>What it is:</strong> approximates how many megabytes per second each tool processed, by dividing the file size by the read time.</p>
        <p style={{ margin: '8px 0 0' }}><strong>What the data says:</strong> Polars had very high throughput on the middle files, passing 1,000 MB/s on files 2 and 3. On the largest file the number drops significantly — likely due to memory pressure — but it still finished slightly ahead of DuckDB. Pandas stayed well below on the files it completed.</p>
      </>,
    },
  },
}

const content = {
  pt: <>
    <p>Esse é o primeiro projeto que publico aqui no blog. Ainda não tem todo o nível de detalhe que eu quero ter nos próximos posts, mas achei interessante o suficiente pra servir como artigo inaugural.</p>
    <p>A história é simples: eu estava acompanhando um módulo do meu MBA em <strong>Data Science</strong> e, no meio das aulas, apareceu aquela discussão clássica sobre qual ferramenta usar pra trabalhar com dados tabulares. Pandas, Polars, DuckDB — cada uma com seus fãs e seus motivos. Aí veio a coceira: em vez de ficar só no achismo, por que não medir?</p>
    <p>Decidi começar pelo básico, a operação mais comum de todas: <strong>ler um arquivo CSV grande</strong>. Queria entender quanto de RAM cada ferramenta consome, quanto tempo leva e onde cada uma começa a sofrer. Analisei quatro arquivos CSV com tamanhos reais de <strong>156 MB</strong>, <strong>780 MB</strong>, <strong>1.597 MB</strong> e <strong>4.789 MB</strong> em disco. Para cada ferramenta, rodei o mesmo script de benchmark e registrei tempo de execução, pico de RAM, razão RAM/disco e throughput. Sem filtros, sem agregações, sem nada depois da leitura: só ler o arquivo e medir o que acontece na memória.</p>
    <BenchmarkDashboard lang="pt" />
    <p>Olhando tudo junto, dá pra ver que o problema não é só “qual biblioteca é mais rápida”. É também quanto de memória ela pede, como ela escala conforme o arquivo cresce e se ela continua confortável quando o dataset começa a encostar no limite da máquina.</p>
    <p>O que eu concluo com esse primeiro recorte: <strong>Polars quando velocidade importa</strong>, isso ficou bem claro. <strong>DuckDB quando eu quero SQL e previsibilidade em arquivo grande</strong>. E <strong>Pandas quando o arquivo ainda cabe com folga na RAM ou quando o ecossistema ao redor pesa mais que performance</strong>.</p>
    <p>Como esse foi um projeto relativamente antigo, eu não lembro todos os pormenores da execução, então preferi não inventar detalhe que eu não tenho registrado. O que está aqui é o que eu medi e o que aconteceu na prática. E esse teste foi só leitura. Ainda dá pra testar filtros, agregações, joins, escrita, tudo isso. Mas só esse pedaço já mostra uma coisa: em dados grandes, escolher biblioteca sem medir é apostar RAM no escuro.</p>
    <p>E cuidado ao tentarem isso em casa, meus caros cavaleiros. Se a máquina não tiver RAM sobrando, pode acontecer igual aconteceu comigo: travar tudo e ter que reiniciar o PC. Eu já rodei o teste meio esperando que isso pudesse acontecer, mas se tivesse algo importante aberto na hora, teria sido uma dor de cabeça bonita.</p>
    <p>É isso. Esse foi o primeiro artigo do blog, e a ideia é continuar trazendo esse tipo de experimento por aqui. Eu sempre fiz essas coisas mais sozinho, meio no meu canto; agora a graça é usar esse espaço pra trocar uma ideia e compartilhar um pouco do processo também.</p>
  </>,
  en: <>
    <p>This is the first project I'm publishing here. It doesn't have the level of detail I want for future posts yet, but it's interesting enough to set a starting point and show the tone of what's coming.</p>
    <p>The story is simple: I was following a module in my <strong>Data Science</strong> MBA and, in the middle of class, people started debating which library to use for tabular data work. Pandas, Polars, DuckDB — everyone had an opinion. And that itch appeared: instead of staying in opinion-land, why not just measure?</p>
    <p>I decided to start with the most basic operation of all: <strong>reading a large CSV file</strong>. I wanted to understand how much RAM each tool uses, how long it takes, and where each one stops behaving. I analyzed four CSV files with real disk sizes of <strong>156 MB</strong>, <strong>780 MB</strong>, <strong>1,597 MB</strong>, and <strong>4,789 MB</strong>. For each tool, I ran the same benchmark script and recorded execution time, peak RAM, RAM/disk ratio, and throughput. No filters, no aggregations, nothing after the read — just read the file and measure what happens in memory. Seems basic, but with large files the read itself is already where things start to go sideways.</p>
    <BenchmarkDashboard lang="en" />
    <p>On the 4,789 MB file, Pandas started reading but didn't finish. My machine simply ran out of memory. I had around 10 GB free and that wasn't enough to finish reading a nearly 5 GB file with Pandas. So the useful result is exactly that: at this file size, in this setup, Pandas stopped being a comfortable option.</p>
    <p><strong>Polars when speed matters</strong>, <strong>DuckDB when I want SQL and predictability over large files</strong>, and <strong>Pandas when the file fits comfortably in RAM or when the surrounding ecosystem matters more than performance</strong>. This is still a first slice. The next natural step is to test what comes after reading: filters, aggregations, joins, writes. But this test alone already shows one thing: with large data, picking a library without measuring is betting RAM in the dark.</p>
  </>,
}

function formatNumber(value: number, lang: Lang, digits = 1) {
  return new Intl.NumberFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value)
}

function formatInteger(value: number, lang: Lang) {
  return new Intl.NumberFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
    maximumFractionDigits: 0,
  }).format(Math.round(value))
}

function formatMb(value: number, lang: Lang) {
  return `${new Intl.NumberFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
    maximumFractionDigits: 0,
  }).format(Math.ceil(value))} MB`
}

function getThroughput(row: BenchmarkRow, tool: ToolName) {
  const seconds = row.results[tool].seconds
  if (seconds === null) return null
  return row.diskMb / seconds
}

function getMetricValue(row: BenchmarkRow, tool: ToolName, metric: MetricKey) {
  if (metric === 'throughput') return getThroughput(row, tool)
  return row.results[tool][metric]
}

function formatMetric(value: number | null, metric: MetricKey, lang: Lang) {
  if (value === null) return lang === 'pt' ? 'não concluiu' : 'did not finish'

  if (metric === 'seconds') return `${formatNumber(value, lang, 2)}s`
  if (metric === 'ramMb') return formatMb(value, lang)
  if (metric === 'ratio') return `${formatNumber(value, lang, 2)}x`

  return `${formatInteger(value, lang)} MB/s`
}

function formatAxisValue(value: number, metric: MetricKey, lang: Lang) {
  if (metric === 'seconds') return `${formatInteger(value, lang)}s`
  if (metric === 'ramMb') return value >= 1000 ? `${formatInteger(value / 1000, lang)} GB` : `${formatInteger(value, lang)} MB`
  if (metric === 'ratio') return `${formatNumber(value, lang)}x`
  return `${formatInteger(value, lang)} MB/s`
}

function BenchmarkDashboard({ lang }: { lang: Lang }) {
  return (
    <div style={chartsStackStyle}>
      <ChartPanel metric="seconds" lang={lang}>
        <BarChart metric="seconds" yMax={25} ticks={[0, 5, 10, 15, 20, 25]} lang={lang} />
      </ChartPanel>

      <ChartPanel metric="ramMb" lang={lang}>
        <BarChart metric="ramMb" yMax={10000} ticks={[0, 2000, 4000, 6000, 8000, 10000]} lang={lang} />
      </ChartPanel>

      <ChartPanel metric="ratio" lang={lang}>
        <LineChart metric="ratio" yMin={1.5} yMax={2.8} ticks={[1.5, 1.8, 2.1, 2.4, 2.8]} lang={lang} />
      </ChartPanel>

      <ChartPanel metric="throughput" lang={lang}>
        <BarChart metric="throughput" yMax={1200} ticks={[0, 200, 400, 600, 800, 1000, 1200]} lang={lang} />
      </ChartPanel>

      <RawDataPanel lang={lang} />
    </div>
  )
}

function ChartPanel({
  metric,
  lang,
  children,
}: {
  metric: MetricKey
  lang: Lang
  children: ReactNode
}) {
  const copy = metricCopy[lang][metric]

  return (
    <section style={chartSectionStyle}>
      <div style={chartHeaderStyle}>
        <span style={sectionTitleStyle}>{copy.title}</span>
      </div>
      {copy.lead && <p style={chartLeadStyle}>{copy.lead}</p>}
      <div style={chartCardStyle}>
        <Legend />
        {children}
      </div>
      <div style={chartNoteStyle}>{copy.note}</div>
    </section>
  )
}

function Legend() {
  return (
    <div style={legendStyle}>
      {tools.map(tool => (
        <span key={tool} style={legendItemStyle}>
          <span style={{ ...legendSwatchStyle, background: toolTheme[tool].color }} />
          {tool}
        </span>
      ))}
    </div>
  )
}

function BarChart({
  metric,
  yMax,
  ticks,
  lang,
  compact = false,
}: {
  metric: MetricKey
  yMax: number
  ticks: number[]
  lang: Lang
  compact?: boolean
  langLabels?: boolean
}) {
  const width = compact ? 520 : 860
  const height = compact ? 300 : 330
  const left = metric === 'throughput' ? 108 : compact ? 68 : 74
  const right = metric === 'throughput' ? 44 : compact ? 50 : 28
  const top = 18
  const bottom = 58
  const plotWidth = width - left - right
  const plotHeight = height - top - bottom
  const groupWidth = plotWidth / benchmarkData.length
  const barWidth = compact ? 18 : 22
  const gap = compact ? 8 : 10
  const clusterWidth = tools.length * barWidth + (tools.length - 1) * gap

  const xCenter = (index: number) => left + groupWidth * index + groupWidth / 2
  const y = (value: number) => top + plotHeight - (value / yMax) * plotHeight

  return (
    <div style={chartSvgWrapStyle}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={metricCopy[lang][metric].title}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <rect x={left} y={top} width={plotWidth} height={plotHeight} rx="2" style={{ fill: 'rgba(255,255,255,0.012)' }} />

        {ticks.map(tick => (
          <g key={tick}>
            <line x1={left} x2={left + plotWidth} y1={y(tick)} y2={y(tick)} style={{ stroke: 'rgba(255,255,255,0.055)' }} />
            <text x={left - 10} y={y(tick) + 4} textAnchor="end" style={axisTextStyle}>
              {formatAxisValue(tick, metric, lang)}
            </text>
          </g>
        ))}

        {benchmarkData.map((row, rowIndex) => (
          <g key={row.id}>
            <text x={xCenter(rowIndex)} y={height - 22} textAnchor="middle" style={axisTextStyle}>
              {formatMb(row.diskMb, lang)}
            </text>
            {tools.map((tool, toolIndex) => {
              const value = getMetricValue(row, tool, metric)
              const x = xCenter(rowIndex) - clusterWidth / 2 + toolIndex * (barWidth + gap)

              if (value === null) {
                const fx = x + barWidth / 2
                const fy = top + plotHeight - 12
                return (
                  <g key={tool}>
                    <line x1={fx - 6} x2={fx + 6} y1={fy - 6} y2={fy + 6} style={{ stroke: '#ef4444' }} strokeWidth="2" />
                    <line x1={fx + 6} x2={fx - 6} y1={fy - 6} y2={fy + 6} style={{ stroke: '#ef4444' }} strokeWidth="2" />
                  </g>
                )
              }

              const barHeight = Math.max(2, (value / yMax) * plotHeight)
              const barY = top + plotHeight - barHeight

              return (
                <rect
                  key={tool}
                  x={x}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  rx="4"
                  style={{
                    fill: toolTheme[tool].bg,
                    stroke: toolTheme[tool].color,
                    strokeWidth: 1.5,
                  }}
                />
              )
            })}
          </g>
        ))}
      </svg>
    </div>
  )
}

function LineChart({
  metric,
  yMin,
  yMax,
  ticks,
  lang,
}: {
  metric: MetricKey
  yMin: number
  yMax: number
  ticks: number[]
  lang: Lang
}) {
  const width = 860
  const height = 330
  const left = 74
  const right = metric === 'ratio' ? 72 : 28
  const top = 18
  const bottom = 58
  const plotWidth = width - left - right
  const plotHeight = height - top - bottom
  const x = (index: number) => left + (plotWidth / (benchmarkData.length - 1)) * index
  const y = (value: number) => top + plotHeight - ((value - yMin) / (yMax - yMin)) * plotHeight

  const linePath = (tool: ToolName) => benchmarkData
    .map((row, index) => ({ value: getMetricValue(row, tool, metric), index }))
    .filter(point => point.value !== null)
    .map((point, pointIndex) => `${pointIndex === 0 ? 'M' : 'L'} ${x(point.index)} ${y(point.value ?? yMin)}`)
    .join(' ')

  return (
    <div style={chartSvgWrapStyle}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={metricCopy[lang][metric].title}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <rect x={left} y={top} width={plotWidth} height={plotHeight} rx="2" style={{ fill: 'rgba(255,255,255,0.012)' }} />

        {ticks.map(tick => (
          <g key={tick}>
            <line x1={left} x2={left + plotWidth} y1={y(tick)} y2={y(tick)} style={{ stroke: 'rgba(255,255,255,0.055)' }} />
            <text x={left - 10} y={y(tick) + 4} textAnchor="end" style={axisTextStyle}>
              {formatAxisValue(tick, metric, lang)}
            </text>
          </g>
        ))}

        {benchmarkData.map((row, index) => (
          <text key={row.id} x={x(index)} y={height - 22} textAnchor="middle" style={axisTextStyle}>
            {formatMb(row.diskMb, lang)}
          </text>
        ))}

        {tools.map(tool => (
          <g key={tool}>
            <path
              d={linePath(tool)}
              fill="none"
              style={{ stroke: toolTheme[tool].color }}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {benchmarkData.map((row, index) => {
              const value = getMetricValue(row, tool, metric)
              if (value === null) return null
              return (
                <circle
                  key={`${tool}-${row.id}`}
                  cx={x(index)}
                  cy={y(value)}
                  r="4.6"
                  style={{ fill: toolTheme[tool].color, stroke: '#12151c' }}
                  strokeWidth="2"
                />
              )
            })}
          </g>
        ))}
      </svg>
    </div>
  )
}

function RawDataPanel({ lang }: { lang: Lang }) {
  return (
    <section style={chartSectionStyle}>
      <div style={chartHeaderStyle}>
        <span style={sectionTitleStyle}>{lang === 'pt' ? 'Todos os dados brutos' : 'All Raw Data'}</span>
      </div>
      <p style={chartLeadStyle}>
        {lang === 'pt'
          ? 'E aqui fica a tabelinha com todos os dados brutos, do jeito que saíram do benchmark. Ela é útil pra conferir cada número sem depender só da leitura visual dos gráficos.'
          : 'And here is the raw data table, exactly as it came out of the benchmark. It is useful for checking every number without relying only on the visual reading of the charts.'}
      </p>
      <div style={chartCardStyle}>
        <div style={{ overflowX: 'auto' }}>
          <table style={rawTableStyle}>
            <thead>
              <tr>
                {(lang === 'pt'
                  ? ['Ferramenta', 'Arquivo', 'Tamanho real', 'Pico RAM', 'Tempo', 'RAM/Disco', 'Throughput']
                  : ['Tool', 'File', 'Real size', 'Peak RAM', 'Time', 'RAM/Disk', 'Throughput']
                ).map(header => (
                  <th key={header} style={rawThStyle}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tools.flatMap(tool => benchmarkData.map(row => {
                const result = row.results[tool]
                const failed = result.ramMb === null || result.seconds === null
                const failStyle: CSSProperties = failed ? { color: '#ef4444', fontStyle: 'italic' } : {}

                return (
                  <tr key={`${row.id}-${tool}`}>
                    <td style={rawTdStyle}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: toolTheme[tool].color }} />
                        {tool}
                      </span>
                    </td>
                    <td style={rawTdStyle}>{row.label[lang]}</td>
                    <td style={rawTdStyle}>{formatMb(row.diskMb, lang)}</td>
                    <td style={{ ...rawTdStyle, ...failStyle }}>{failed ? (lang === 'pt' ? 'FALHOU' : 'FAILED') : formatMetric(result.ramMb, 'ramMb', lang)}</td>
                    <td style={{ ...rawTdStyle, ...failStyle }}>{failed ? '-' : formatMetric(result.seconds, 'seconds', lang)}</td>
                    <td style={{ ...rawTdStyle, ...failStyle }}>{failed ? '-' : formatMetric(result.ratio, 'ratio', lang)}</td>
                    <td style={{ ...rawTdStyle, ...failStyle }}>{failed ? '-' : formatMetric(getThroughput(row, tool), 'throughput', lang)}</td>
                  </tr>
                )
              }))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const chartsStackStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '26px',
  marginTop: '18px',
  marginBottom: '1.6rem',
}

const chartSectionStyle: CSSProperties = {
  marginBottom: 0,
}

const chartHeaderStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '12px',
}

const sectionNumStyle: CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  color: 'var(--text3)',
  background: 'var(--bg3)',
  padding: '4px 10px',
  borderRadius: '999px',
  border: '0.5px solid var(--border)',
}

const sectionTitleStyle: CSSProperties = {
  fontSize: '15px',
  fontWeight: 700,
  color: 'rgba(255,255,255,1)',
}

const chartNoteStyle: CSSProperties = {
  fontSize: '15px',
  color: 'rgba(255,255,255,0.87)',
  lineHeight: 1.95,
  marginTop: '14px',
  textAlign: 'justify',
}

const chartLeadStyle: CSSProperties = {
  fontSize: '15px',
  color: 'rgba(255,255,255,0.87)',
  lineHeight: 1.95,
  margin: '0 0 14px',
  textAlign: 'justify',
}

const chartCardStyle: CSSProperties = {
  background: 'var(--bg2)',
  border: '0.5px solid var(--border)',
  borderRadius: '8px',
  padding: '18px',
}

const legendStyle: CSSProperties = {
  display: 'flex',
  gap: '18px',
  flexWrap: 'wrap',
  marginBottom: '12px',
}

const legendItemStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '7px',
  fontSize: '11px',
  color: 'rgba(255,255,255,0.87)',
}

const legendSwatchStyle: CSSProperties = {
  width: '12px',
  height: '3px',
  borderRadius: '2px',
}

const chartSvgWrapStyle: CSSProperties = {
  width: '100%',
}

const axisTextStyle: CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '14px',
  fill: 'var(--text3)',
}

const rawTableStyle: CSSProperties = {
  width: '100%',
  minWidth: '820px',
  borderCollapse: 'collapse',
}

const rawThStyle: CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '12px',
  color: 'var(--text3)',
  textAlign: 'left',
  padding: '13px 16px',
  borderBottom: '0.5px solid var(--border)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  whiteSpace: 'nowrap',
}

const rawTdStyle: CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '13px',
  color: 'rgba(255,255,255,0.87)',
  padding: '13px 16px',
  borderBottom: '0.5px solid var(--border)',
  whiteSpace: 'nowrap',
}

export default function PandasPolarsDuckDB() {
  const { lang } = useLang()

  return (
    <>
      <style>{`.post-body p { margin-bottom: 1.6rem; }`}</style>
      <div className="post-body" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.87)', lineHeight: 1.95, textAlign: 'justify' }}>
        {content[lang]}
      </div>
    </>
  )
}
