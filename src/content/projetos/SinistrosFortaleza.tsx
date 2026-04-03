'use client'

import Image from 'next/image'
import { useLang } from '@/context/LangContext'

const rankings = [
  ['1º', '1st', 'Av. Osório de Paiva', '1.770'],
  ['2º', '2nd', 'Av. Rodolfo Teófilo', '1.296'],
  ['3º', '3rd', 'Av. Presidente Castelo Branco', '1.165'],
  ['4º', '4th', 'Av. Silas Munguba', '1.148'],
  ['5º', '5th', 'Av. Santos Dumont', '1.096'],
]

const content = {
  pt: {
    intro1: <>A ideia surgiu vasculhando o <a href="https://dados.fortaleza.ce.gov.br" target="_blank" rel="noreferrer" style={{color:'var(--blue)'}}>Portal Dados Abertos de Fortaleza</a>. Queria fazer algo com impacto real — não mais um projeto de análise qualquer, mas algo que tocasse na vida das pessoas. Foi quando encontrei os dados da <strong>AMC</strong> (Autarquia Municipal de Trânsito e Cidadania) sobre acidentes de trânsito em Fortaleza.</>,
    intro2: <>Os dados cobrem o período de <strong>2015 a 2024</strong>, documentados por hora, dia e mês — todos organizados de forma exemplar pela equipe da AMC. O termo oficial que eles usam é <em>sinistros</em>, que nada mais é do que o nome técnico para acidentes de trânsito.</>,
    questions: 'As perguntas que guiaram a análise:',
    q: ['Quais veículos geram mais acidentes?', 'Quais avenidas concentram o maior número de ocorrências?', 'Existe relação com sinalização e fiscalização eletrônica?', 'Em quais horários e meses os acidentes se concentram?'],
    exploring: 'Explorando os dados',
    byYear: 'Acidentes por ano',
    byYearDesc: 'Primeira coisa: entender a evolução ao longo do tempo.',
    byYearAnalysis: <><strong>2016</strong> foi o pico histórico. A partir daí, tendência de queda — com um vale bem visível entre <strong>2020 e 2022</strong>, exatamente o período mais restritivo da pandemia. Com a cidade parada, menos veículos nas ruas, menos acidentes.</>,
    bySeverity: 'Acidentes por severidade',
    bySeverityDesc: 'Nem todo acidente é igual. Quão graves são esses registros?',
    bySeverityAnalysis: <>A grande maioria é classificada como <strong>feridos</strong>, seguida de ilesos. Os casos fatais representam uma minoria — mas, como a gente vai ver mais pra frente, essa minoria tem um padrão bem definido.</>,
    byVehicle: 'Acidentes por tipo de veículo',
    byVehicleDesc: 'Qual veículo aparece mais nos registros?',
    byVehicleAnalysis: <>O <strong>automóvel</strong> lidera com folga, seguido da motocicleta, ônibus, bicicleta e caminhão. Faz sentido: qualquer arranhão num carro já vira boletim de ocorrência. A burocracia colabora para o número alto. Mas guarda esse dado — a moto vai aparecer de outro ângulo mais pra frente.</>,
    byHour: 'Acidentes por hora do dia',
    byHourDesc: 'Quando os acidentes acontecem?',
    byHourAnalysis: <>Os dois picos são <strong>7h da manhã</strong> e <strong>16h da tarde</strong> — horários de pico, todo mundo indo ou voltando do trabalho. Dado consistente com o que qualquer fortalezense já sabe na prática.</>,
    byMonth: 'Acidentes por mês',
    byMonthDesc: 'Algum período do ano se destaca?',
    byMonthAnalysis: <><strong>Não tem um padrão claro.</strong> Janeiro aparece levemente acima dos outros meses, mas nada expressivo. Esperava que carnaval ou férias criassem picos visíveis — os dados não confirmam. A distribuição ao longo do ano é bem uniforme.</>,
    fatal: 'Acidentes fatais: o papel da moto',
    fatalDesc: 'Agora o dado mais revelador da análise.',
    fatalAnalysis: <>Quando a gente filtra <strong>apenas os acidentes com vítima fatal</strong>, o cenário muda completamente. A <strong>motocicleta dispara</strong> — bem à frente do automóvel. Isso confirma o senso popular em Fortaleza: moto é um veículo de alto risco. Por mais que o automóvel domine o volume total, quando o assunto é morte no trânsito, a moto é protagonista. Os dados comprovam.</>,
    map: 'Visualizando no mapa',
    mapDesc: <>Com os gráficos prontos, a próxima pergunta foi natural: <strong>e se a gente pudesse ver isso no mapa de Fortaleza?</strong></>,
    mapLink: '↗ visualizar mapa interativo com filtros e zoom',
    osmTitle: 'OpenStreetMap',
    osmDesc: <>O <strong>OpenStreetMap</strong> é uma plataforma de mapeamento colaborativo — construída por voluntários, com dados abertos que podem ser usados livremente em projetos de pesquisa. Tinha toda a delimitação de Fortaleza bem estruturada. O problema: <strong>não tinha a estruturação por trechos de avenida</strong>. E isso era exatamente o que eu precisava.</>,
    qgisTitle: 'QGIS',
    qgisDesc: <>A solução foi o <strong>QGIS</strong> — um software de geoprocessamento open source. Com ele, fiz o trabalho de um cartógrafo: marquei manualmente onde cada avenida começa e termina, validando com o Google Maps e o OpenStreetMap. Trabalhoso, mas necessário para garantir que os dados fossem atribuídos corretamente a cada trecho.</>,
    rankingTitle: 'As avenidas mais perigosas',
    rankingDesc: 'Com os trechos mapeados, deu para ranquear as avenidas com mais acidentes registrados entre 2015 e 2024:',
    rankingNote: <><strong>Todas essas avenidas têm fiscalização eletrônica e semáforos.</strong> Ou seja, a presença de infraestrutura de controle não é, por si só, suficiente para reduzir os acidentes. Uma inspeção física dos trechos seria necessária para entender os fatores reais por trás desses números.</>,
    position: 'Posição', avenue: 'Avenida', accidents: 'Acidentes',
    noteTitle: 'Uma nota sobre os dados',
    note1: <><strong>Esses são os dados registrados pela AMC.</strong> A gente sabe que muitos acidentes nunca viram boletim de ocorrência — seja por acordo entre as partes, por falta de lesões visíveis, ou porque as autoridades não foram acionadas.</>,
    note2: 'Os dados são um modelo de aproximação da realidade, não a realidade completa. Eles apontam tendências e padrões relevantes, mas é importante ter essa limitação em mente na hora de interpretar qualquer conclusão.',
  },
  en: {
    intro1: <>The idea came from browsing the <a href="https://dados.fortaleza.ce.gov.br" target="_blank" rel="noreferrer" style={{color:'var(--blue)'}}>Fortaleza Open Data Portal</a>. I wanted to do something with real impact — not just another analysis project, but something that touched people's lives. That's when I found the <strong>AMC</strong> (Municipal Transit and Citizenship Authority) data on traffic accidents in Fortaleza.</>,
    intro2: <>The data covers the period from <strong>2015 to 2024</strong>, documented by hour, day and month — all well organized by the AMC team. The official term they use is <em>sinistros</em> (incidents), which is simply the technical name for traffic accidents.</>,
    questions: 'The questions that guided the analysis:',
    q: ['Which vehicles cause the most accidents?', 'Which avenues concentrate the most occurrences?', 'Is there a relationship with signaling and electronic enforcement?', 'At what times and months do accidents concentrate?'],
    exploring: 'Exploring the data',
    byYear: 'Accidents by year',
    byYearDesc: 'First thing: understanding the evolution over time.',
    byYearAnalysis: <><strong>2016</strong> was the historical peak. From there, a downward trend — with a clear valley between <strong>2020 and 2022</strong>, exactly the most restrictive period of the pandemic. With the city at a standstill, fewer vehicles on the streets, fewer accidents.</>,
    bySeverity: 'Accidents by severity',
    bySeverityDesc: 'Not every accident is the same. How serious are these records?',
    bySeverityAnalysis: <>The vast majority are classified as <strong>injured</strong>, followed by unharmed. Fatal cases represent a minority — but, as we'll see later, this minority has a very defined pattern.</>,
    byVehicle: 'Accidents by vehicle type',
    byVehicleDesc: 'Which vehicle appears most in the records?',
    byVehicleAnalysis: <>The <strong>automobile</strong> leads by far, followed by motorcycles, buses, bicycles and trucks. Makes sense: any scratch on a car becomes a police report. The bureaucracy contributes to the high number. But hold onto that data — motorcycles will appear from a different angle soon.</>,
    byHour: 'Accidents by time of day',
    byHourDesc: 'When do accidents happen?',
    byHourAnalysis: <>The two peaks are <strong>7am</strong> and <strong>4pm</strong> — rush hours, everyone going to or coming from work. Consistent with what any Fortaleza resident already knows in practice.</>,
    byMonth: 'Accidents by month',
    byMonthDesc: 'Does any period of the year stand out?',
    byMonthAnalysis: <><strong>No clear pattern.</strong> January appears slightly above other months, but nothing significant. I expected carnival or holidays to create visible peaks — the data doesn't confirm it. The distribution throughout the year is quite uniform.</>,
    fatal: 'Fatal accidents: the role of motorcycles',
    fatalDesc: 'Now the most revealing data in the analysis.',
    fatalAnalysis: <>When we filter <strong>only accidents with fatal victims</strong>, the scenario changes completely. <strong>Motorcycles surge</strong> — well ahead of automobiles. This confirms the popular belief in Fortaleza: motorcycles are high-risk vehicles. Even though automobiles dominate the total volume, when it comes to traffic deaths, motorcycles are the protagonist. The data proves it.</>,
    map: 'Visualizing on the map',
    mapDesc: <>With the charts ready, the next question was natural: <strong>what if we could see this on a map of Fortaleza?</strong></>,
    mapLink: '↗ view interactive map with filters and zoom',
    osmTitle: 'OpenStreetMap',
    osmDesc: <>The <strong>OpenStreetMap</strong> is a collaborative mapping platform — built by volunteers, with open data freely usable in research projects. It had the entire delimitation of Fortaleza well structured. The problem: <strong>it didn't have street segment structure</strong>. And that was exactly what I needed.</>,
    qgisTitle: 'QGIS',
    qgisDesc: <>The solution was <strong>QGIS</strong> — an open source geoprocessing software. With it, I did the work of a cartographer: manually marking where each avenue starts and ends, validating with Google Maps and OpenStreetMap. Tedious, but necessary to ensure the accident data was correctly attributed to each segment.</>,
    rankingTitle: 'The most dangerous avenues',
    rankingDesc: 'With the segments mapped, it was possible to rank the avenues with the most accidents recorded between 2015 and 2024:',
    rankingNote: <><strong>All these avenues have electronic surveillance and traffic lights.</strong> That is, the presence of control infrastructure alone is not sufficient to reduce accidents. A physical inspection of the segments would be needed to understand the real factors behind these numbers.</>,
    position: 'Position', avenue: 'Avenue', accidents: 'Accidents',
    noteTitle: 'A note about the data',
    note1: <><strong>These are the records reported by AMC.</strong> We know that many accidents never become police reports — whether by agreement between parties, lack of visible injuries, or simply because authorities were not called.</>,
    note2: 'The data is an approximation model of reality, not the complete reality. They point to relevant trends and patterns, but it\'s important to keep this limitation in mind when interpreting any conclusion.',
  }
}

export default function SinistrosFortaleza() {
  const { lang } = useLang()
  const tx = content[lang]
  const posKey = lang === 'pt' ? 0 : 1

  const imgStyle = { width: '100%', height: 'auto', borderRadius: '8px', border: '0.5px solid var(--border)', margin: '1.5rem 0' } as const

  return (
    <div className="mdx-content">
      <p>{tx.intro1}</p>
      <p>{tx.intro2}</p>
      <p>{tx.questions}</p>
      <ul>{tx.q.map((q, i) => <li key={i}>{q}</li>)}</ul>
      <hr />

      <h2>{tx.exploring}</h2>

      <h3>{tx.byYear}</h3>
      <p>{tx.byYearDesc}</p>
      <Image src="/projects/sinistros-fortaleza/graph1.png" alt={tx.byYear} width={780} height={440} style={imgStyle} />
      <p>{tx.byYearAnalysis}</p>
      <hr />

      <h3>{tx.bySeverity}</h3>
      <p>{tx.bySeverityDesc}</p>
      <Image src="/projects/sinistros-fortaleza/graph2.png" alt={tx.bySeverity} width={780} height={440} style={imgStyle} />
      <p>{tx.bySeverityAnalysis}</p>
      <hr />

      <h3>{tx.byVehicle}</h3>
      <p>{tx.byVehicleDesc}</p>
      <Image src="/projects/sinistros-fortaleza/graph3.png" alt={tx.byVehicle} width={780} height={440} style={imgStyle} />
      <p>{tx.byVehicleAnalysis}</p>
      <hr />

      <h3>{tx.byHour}</h3>
      <p>{tx.byHourDesc}</p>
      <Image src="/projects/sinistros-fortaleza/graph4.png" alt={tx.byHour} width={780} height={440} style={imgStyle} />
      <p>{tx.byHourAnalysis}</p>
      <hr />

      <h3>{tx.byMonth}</h3>
      <p>{tx.byMonthDesc}</p>
      <Image src="/projects/sinistros-fortaleza/graph5.png" alt={tx.byMonth} width={780} height={440} style={imgStyle} />
      <p>{tx.byMonthAnalysis}</p>
      <hr />

      <h3>{tx.fatal}</h3>
      <p>{tx.fatalDesc}</p>
      <Image src="/projects/sinistros-fortaleza/graph6.png" alt={tx.fatal} width={780} height={440} style={imgStyle} />
      <p>{tx.fatalAnalysis}</p>
      <hr />

      <h2>{tx.map}</h2>
      <p>{tx.mapDesc}</p>
      <Image src="/projects/sinistros-fortaleza/heatmap.png" alt={tx.map} width={780} height={440} style={imgStyle} />
      <a href="https://felipecezar01.github.io/mapa-sinistros-fortaleza/" target="_blank" rel="noreferrer" style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        fontSize: '12px', fontFamily: 'var(--font-mono)',
        padding: '10px 18px', borderRadius: '6px',
        border: '0.5px solid rgba(0,234,255,0.3)',
        background: 'rgba(0,234,255,0.06)',
        color: 'var(--blue)', textDecoration: 'none',
        marginBottom: '1.5rem',
      }}>
        {tx.mapLink}
      </a>

      <h3>{tx.osmTitle}</h3>
      <Image src="/projects/sinistros-fortaleza/openstreetmap.jpg" alt="OpenStreetMap" width={780} height={440} style={imgStyle} />
      <p>{tx.osmDesc}</p>

      <h3>{tx.qgisTitle}</h3>
      <Image src="/projects/sinistros-fortaleza/qgis.png" alt="QGIS" width={780} height={440} style={imgStyle} />
      <p>{tx.qgisDesc}</p>
      <hr />

      <h2>{tx.rankingTitle}</h2>
      <p>{tx.rankingDesc}</p>
      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '0.5px solid var(--border)' }}>
              {[tx.position, tx.avenue, tx.accidents].map((h, i) => (
                <th key={i} style={{ textAlign: i === 2 ? 'right' : 'left', padding: '10px 14px', color: 'var(--text3)', fontWeight: 500, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rankings.map(([posPt, posEn, av, num], i) => (
              <tr key={i} style={{ borderBottom: '0.5px solid var(--border)' }}>
                <td style={{ padding: '10px 14px', color: 'var(--blue)', fontFamily: 'var(--font-mono)' }}>{lang === 'pt' ? posPt : posEn}</td>
                <td style={{ padding: '10px 14px', color: 'var(--text)' }}>{av}</td>
                <td style={{ padding: '10px 14px', color: 'var(--text2)', textAlign: 'right', fontFamily: 'var(--font-mono)' }}>{num}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>{tx.rankingNote}</p>
      <hr />

      <h2>{tx.noteTitle}</h2>
      <p>{tx.note1}</p>
      <p>{tx.note2}</p>
    </div>
  )
}