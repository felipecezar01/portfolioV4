export type Post = {
  slug: string
  titlePt: string
  titleEn: string
  excerptPt: string
  excerptEn: string
  date: string       // 'YYYY-MM-DD'
  tags: string[]
  readTime: number   // minutes
  image?: string     // optional image path; falls back to accent gradient
  accent?: string    // CSS gradient for placeholder when no image
}

export const posts: Post[] = [
  {
    slug: 'nginx-load-balancer-arquitetura',
    titlePt: 'Desmistificando o Nginx, Load Balancers e a Escala da Internet',
    titleEn: 'Demystifying Nginx, Load Balancers and Internet Scale',
    excerptPt: 'Diário de estudos em infraestrutura: do choque Apache vs Nginx até um laboratório local com Docker, Prometheus, Grafana e Locust para entender como requisições sobrevivem no mundo real.',
    excerptEn: 'An infrastructure study log: from Apache vs Nginx to a local lab with Docker, Prometheus, Grafana and Locust — understanding how requests survive in the real world.',
    date: '2026-04-23',
    tags: ['Nginx', 'DevOps', 'Infraestrutura', 'Docker', 'System Design'],
    readTime: 12,
    image: '/blog/nginx-load-balancer/capa_nginx.png',
    accent: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 40%, #061020 100%)',
  },
  {
    slug: 'pandas-polars-duckdb-benchmark',
    titlePt: 'Pandas vs Polars vs DuckDB: Quem Sobrevive Melhor à RAM?',
    titleEn: 'Pandas vs Polars vs DuckDB: Which One Handles RAM Better?',
    excerptPt: 'Comparei Pandas, Polars e DuckDB lendo CSVs de 156 MB até 4.789 MB medidos em disco. Polars voou nos arquivos menores, DuckDB foi estável, e Pandas não conseguiu fechar o maior teste.',
    excerptEn: 'I compared Pandas, Polars and DuckDB while reading CSVs from 156 MB to 4,789 MB on disk. Polars flew through smaller files, DuckDB stayed steady, and Pandas could not finish the largest test.',
    date: '2026-04-21',
    tags: ['Python', 'Pandas', 'Polars', 'DuckDB', 'Benchmark'],
    readTime: 9,
    image: '/blog/pandas-polars-duckdb/pandas-polars-duckdb-ram-benchmark-cover.png',
    accent: 'linear-gradient(135deg, #0a2a1a 0%, #0d3320 40%, #061a10 100%)',
  },
]
