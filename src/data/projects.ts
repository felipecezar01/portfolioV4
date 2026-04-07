export type Project = {
  slug: string
  namePt: string
  nameEn: string
  descPt: string
  descEn: string
  tags: string[]
  image: string
  github: string
  linkedin: string
  year: string
}

export const projects: Project[] = [
  {
    slug: 'agent-olist',
    namePt: 'Agente Conversacional para Análise de Negócios (Olist)',
    nameEn: 'Conversational Agent for Business Analysis (Olist)',
    descPt: 'Agente de IA autônomo com Tabular RAG para análise instantânea de 10.000 registros de vendas e logística.',
    descEn: 'Autonomous AI agent with Tabular RAG for instant analysis of 10,000 sales and logistics records.',
    tags: ['Python', 'FastAPI', 'LangChain', 'Pandas', 'Gemini API'],
    image: '/projects/agent_olist/capa-olist.png',
    github: 'https://github.com/felipecezar01/brazilian_ecomerce_agent',
    linkedin: 'https://www.linkedin.com/in/felipecezarcruz/',
    year: '2026',
  },
  {
    slug: 'analise-churn',
    namePt: 'Análise Bancária da Taxa de Churn',
    nameEn: 'Banking Churn Rate Analysis',
    descPt: 'Sistema preditivo de retenção integrando Machine Learning (Random Forest) com IA Generativa.',
    descEn: 'Predictive retention system integrating Machine Learning (Random Forest) with Generative AI.',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'Gemini API', 'ML'],
    image: '/projects/analise_churn/capa-churn.jpg',
    github: 'https://github.com/felipecezar01/analise_churn',
    linkedin: 'https://www.linkedin.com/in/felipecezarcruz/',
    year: '2026',
  },
  {
    slug: 'eleicoes-gerais-2022',
    namePt: 'Eleições Gerais de 2022',
    nameEn: 'General Elections of 2022',
    descPt: 'Análise do gasto nas campanhas das eleições gerais de 2022 no Brasil.',
    descEn: 'Analysis of campaign spending in the 2022 Brazilian general elections.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    image: '/projects/eleicoes_gerais_2022/eleicoes.png',
    github: 'https://github.com/felipecezar01/eleicoes_2022_analise',
    linkedin: 'https://www.linkedin.com/in/felipecezarcruz/',
    year: '2026',
  },
  {
    slug: 'sinistros-fortaleza',
    namePt: 'Sinistros em Fortaleza',
    nameEn: 'Accidents in Fortaleza',
    descPt: 'Análise de dados de acidentes e trechos perigosos em Fortaleza por meio de dados públicos.',
    descEn: 'Data analysis of accidents and dangerous road segments in Fortaleza using public data.',
    tags: ['Jupyter', 'Python', 'GeoJSON', 'GeoPandas', 'Folium'],
    image: '/projects/sinistros-fortaleza/heatmap.png',
    github: 'https://github.com/felipecezar01/sinistros-fortaleza/tree/main',
    linkedin: 'https://www.linkedin.com/in/felipecezarcruz/',
    year: '2026',
  },
]
