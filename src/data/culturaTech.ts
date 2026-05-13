type LocalizedText = {
  pt: string
  en: string
}

export type CulturaTechItem = {
  title: LocalizedText
  description: LocalizedText
  href?: string
}

export type CulturaTechSection = {
  title: LocalizedText
  items: CulturaTechItem[]
  defaultOpen?: boolean
}

export type CulturaTechCategory = {
  slug: string
  color: string
  dim: string
  title: LocalizedText
  description: LocalizedText
  items?: CulturaTechItem[]
  sections?: CulturaTechSection[]
}

const linkExamples: CulturaTechItem[] = [
  {
    title: { pt: 'www.youtube.com', en: 'www.youtube.com' },
    href: 'https://www.youtube.com',
    description: {
      pt: 'Descrição breve do canal, site ou referência. Depois esse texto entra com o motivo real de estar na lista.',
      en: 'Short description of the channel, site or reference. Later this text will explain why it belongs here.',
    },
  },
  {
    title: { pt: 'www.youtube.com', en: 'www.youtube.com' },
    href: 'https://www.youtube.com',
    description: {
      pt: 'Descrição breve do canal, site ou referência. Depois esse texto entra com o motivo real de estar na lista.',
      en: 'Short description of the channel, site or reference. Later this text will explain why it belongs here.',
    },
  },
  {
    title: { pt: 'www.youtube.com', en: 'www.youtube.com' },
    href: 'https://www.youtube.com',
    description: {
      pt: 'Descrição breve do canal, site ou referência. Depois esse texto entra com o motivo real de estar na lista.',
      en: 'Short description of the channel, site or reference. Later this text will explain why it belongs here.',
    },
  },
]

const bookExamples: CulturaTechItem[] = [
  {
    title: { pt: 'YouTube', en: 'YouTube' },
    description: {
      pt: 'Descrição breve do livro e do motivo dele agregar de alguma forma.',
      en: 'Short description of the book and why it adds something useful.',
    },
  },
  {
    title: { pt: 'YouTube', en: 'YouTube' },
    description: {
      pt: 'Descrição breve do livro e do motivo dele agregar de alguma forma.',
      en: 'Short description of the book and why it adds something useful.',
    },
  },
  {
    title: { pt: 'YouTube', en: 'YouTube' },
    description: {
      pt: 'Descrição breve do livro e do motivo dele agregar de alguma forma.',
      en: 'Short description of the book and why it adds something useful.',
    },
  },
]

const fictionExamples: CulturaTechItem[] = [
  {
    title: { pt: 'Filme exemplo', en: 'Example movie' },
    description: {
      pt: 'Descrição breve do filme e do tipo de ideia, insight ou sensação que ele pode trazer.',
      en: 'Short description of the movie and the kind of idea, insight or feeling it can bring.',
    },
  },
  {
    title: { pt: 'Série exemplo', en: 'Example series' },
    description: {
      pt: 'Descrição breve da série e do motivo dela aparecer aqui como referência de ficção.',
      en: 'Short description of the series and why it appears here as a fiction reference.',
    },
  },
  {
    title: { pt: 'Anime exemplo', en: 'Example anime' },
    description: {
      pt: 'Descrição breve do anime e de como ele pode gerar criatividade, repertório ou relaxamento.',
      en: 'Short description of the anime and how it can bring creativity, repertoire or relaxation.',
    },
  },
  {
    title: { pt: 'Desenho exemplo', en: 'Example cartoon' },
    description: {
      pt: 'Descrição breve do desenho e do que torna ele interessante para essa lista.',
      en: 'Short description of the cartoon and what makes it interesting for this list.',
    },
  },
  {
    title: { pt: 'Vídeo exemplo', en: 'Example video' },
    description: {
      pt: 'Descrição breve do vídeo fictício, criativo ou narrativo que vale guardar aqui.',
      en: 'Short description of the fictional, creative or narrative video worth keeping here.',
    },
  },
  {
    title: { pt: 'Livro exemplo', en: 'Example book' },
    description: {
      pt: 'Descrição breve do livro de ficção e da ideia ou experiência que ele pode entregar.',
      en: 'Short description of the fiction book and the idea or experience it can deliver.',
    },
  },
]

export const culturaTechCategories: CulturaTechCategory[] = [
  {
    slug: 'canais-youtube',
    color: 'var(--red)',
    dim: 'var(--red-dim)',
    title: { pt: 'Canais no YouTube', en: 'YouTube Channels' },
    description: {
      pt: 'Aqui são links de canais no YouTube que eu acho que agregam quem é da área da TI de alguma forma. Não tem a ver com popularidade, e sim com agregação de conhecimento. Eu tento evitar trazer para cá canais muito marqueteiros, dramáticos ou que vivem só em cima do hype de IA ou de qualquer outra onda do momento.',
      en: 'These are YouTube channels that I think add something useful to people in IT. It is not about popularity, but about knowledge. I try to avoid overly marketing-driven or dramatic channels that live only from AI hype or whatever the current trend is.',
    },
    items: linkExamples,
  },
  {
    slug: 'influencers',
    color: 'var(--blue)',
    dim: 'var(--blue-dim)',
    title: { pt: 'Influencers', en: 'Influencers' },
    description: {
      pt: 'São pessoas da área da TI que trazem conteúdos rotineiros que impactam e agregam muito, principalmente para quem é estudante, estagiário ou júnior. Mais uma vez, eu tento evitar pessoas que só querem causar drama, vivem de marketing ou estão simplesmente atrás de fazer dinheiro.',
      en: 'People in IT who consistently share content that has a positive impact, especially for students, interns and juniors. Again, I try to avoid people who only create drama, live from marketing or are simply chasing money.',
    },
    items: linkExamples,
  },
  {
    slug: 'sites',
    color: 'var(--green)',
    dim: 'var(--green-dim)',
    title: { pt: 'Sites', en: 'Sites' },
    description: {
      pt: 'Sites que eu considero bacanas e que acho que quem é da área da TI deveria conhecer.',
      en: 'Sites I consider useful and that I think people in IT should know.',
    },
    sections: [
      {
        title: { pt: 'Os óbvios', en: 'The obvious ones' },
        defaultOpen: true,
        items: linkExamples,
      },
      {
        title: { pt: 'Os não tão óbvios', en: 'The not so obvious ones' },
        items: linkExamples,
      },
    ],
  },
  {
    slug: 'livros',
    color: 'var(--gold)',
    dim: 'var(--gold-dim)',
    title: { pt: 'Livros', en: 'Books' },
    description: {
      pt: 'O nome já é autoexplicativo: são livros que eu considero bons. Todos os livros que aparecem aqui eu já li ou pelo menos passei por cima, e acho que agregam de alguma forma.\n\nTem uma observação importante: a nossa área não se dá tão bem com livros. Primeiro porque muda constantemente. Segundo porque a nossa cultura não é tão voltada a livros. Terceiro porque hoje você pode pedir para uma IA explicar um conceito ou guiar você em um projeto. Mesmo assim, existem momentos em que vale mudar o ritmo e ler alguma coisa. Então eu ainda acho relevante manter alguns livros por aqui, entendendo que eles demandam tempo, às vezes ficam desatualizados e nem sempre ensinam tanto quanto uma prática bem guiada.',
      en: 'The name is self-explanatory: books I consider good. Every book here is something I have read or at least skimmed, and I think it adds something useful.\n\nThere is an important note: our field does not always work that well with books. First, because it changes constantly. Second, because our culture is not very book-oriented. Third, because today you can ask an AI to explain a concept or guide you through a project. Even so, sometimes it is worth changing the rhythm and reading something. I still think it is relevant to keep a few books here, while understanding that they take time, can become outdated and do not always teach as much as well-guided practice.',
    },
    items: bookExamples,
  },
  {
    slug: 'papers',
    color: 'var(--era-5)',
    dim: 'color-mix(in srgb, var(--era-5) 9%, transparent)',
    title: { pt: 'Papers', en: 'Papers' },
    description: {
      pt: 'Artigos, pesquisas e publicações acadêmicas voltadas à tecnologia, ciência da computação, dados e inteligência artificial.',
      en: 'Articles, research and academic publications about technology, computer science, data and artificial intelligence.',
    },
    items: linkExamples,
  },
  {
    slug: 'ficcao',
    color: 'var(--era-6)',
    dim: 'color-mix(in srgb, var(--era-6) 9%, transparent)',
    title: { pt: 'Ficção', en: 'Fiction' },
    description: {
      pt: 'Livros, filmes, séries, animes, desenhos, vídeos e demais coisas que remetam a coisas fictícias, ou seja, não reais e não técnicas, mas que podem ser interessantes para gerar ideias, provocar algum insight, alimentar criatividade ou simplesmente passar um tempo de forma mais relaxante.',
      en: 'Books, movies, series, anime, cartoons, videos and other things related to fiction: not real and not technical, but still interesting for generating ideas, bringing insight, feeding creativity or simply spending time in a more relaxed way.',
    },
    items: fictionExamples,
  },
]

export function getCulturaTechCategory(slug: string) {
  return culturaTechCategories.find(category => category.slug === slug)
}
