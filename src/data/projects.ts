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
  {
    slug: 'em-breve',
    namePt: 'Em breve',
    nameEn: 'Coming soon',
    descPt: 'Novo projeto em construção. Volte em breve.',
    descEn: 'New project under construction. Check back soon.',
    tags: ['...'],
    image: '/projects/coming-soon.png',
    github: 'https://github.com/felipecezar01',
    linkedin: 'https://www.linkedin.com/in/felipecezarcruz/',
    year: '2026',
  },
]