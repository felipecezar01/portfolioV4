type LocalizedText = {
  pt: string
  en: string
}

export type CulturaTechItem = {
  title: LocalizedText
  description: LocalizedText
  href?: string
  subItems?: CulturaTechItem[]
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

function siteItem(title: string, href: string, description: string): CulturaTechItem {
  return {
    title: { pt: title, en: title },
    href,
    description: { pt: description, en: description },
  }
}

function siteGroup(title: string, description: string, subItems: CulturaTechItem[]): CulturaTechItem {
  return {
    title: { pt: title, en: title },
    description: { pt: description, en: description },
    subItems,
  }
}

const obviousSiteItems: CulturaTechItem[] = [
  siteItem('GitHub', 'https://github.com/', 'Hospedagem de código, projetos open source, issues, pull requests e portfólios técnicos.'),
  siteItem('GitLab', 'https://gitlab.com/', 'Plataforma para repositórios Git, CI/CD, gestão de código e colaboração em times.'),
  siteItem('ChatGPT', 'https://chatgpt.com/', 'IA para estudar, programar, revisar ideias, escrever melhor e acelerar projetos.'),
  siteItem('Gemini', 'https://gemini.google.com/', 'Assistente de IA do Google, útil para pesquisa, multimodalidade e produtividade.'),
  siteItem('Claude', 'https://claude.ai/', 'IA forte para escrita, análise de código, documentos longos e raciocínio.'),
  siteItem('DeepSeek', 'https://chat.deepseek.com/', 'IA popular para programação, raciocínio e uso geral com foco em custo e desempenho.'),
  siteItem('Grok', 'https://grok.com/', 'IA da xAI com integração ao ecossistema do X e foco em respostas rápidas.'),
  siteItem('Stack Overflow', 'https://stackoverflow.com/', 'Base enorme de perguntas e respostas técnicas, com muitos problemas reais de programação.'),
  siteGroup('Reddit', 'Comunidades com discussões, dúvidas, carreira, bastidores e relatos reais da área.', [
    siteItem('r/programming', 'https://www.reddit.com/r/programming/', 'Discussões gerais sobre programação, linguagens, ferramentas e indústria.'),
    siteItem('r/learnprogramming', 'https://www.reddit.com/r/learnprogramming/', 'Comunidade para quem está aprendendo programação e precisa tirar dúvidas básicas.'),
    siteItem('r/datascience', 'https://www.reddit.com/r/datascience/', 'Discussões sobre dados, mercado, ferramentas, estudos e carreira em ciência de dados.'),
    siteItem('r/MachineLearning', 'https://www.reddit.com/r/MachineLearning/', 'Papers, pesquisas, debates técnicos e novidades em machine learning.'),
    siteItem('r/devops', 'https://www.reddit.com/r/devops/', 'Conversas sobre infraestrutura, automação, CI/CD, operação e cultura DevOps.'),
    siteItem('r/brdev', 'https://www.reddit.com/r/brdev/', 'Comunidade brasileira sobre desenvolvimento, carreira, estudos e mercado de TI.'),
    siteItem('r/cscareerquestions', 'https://www.reddit.com/r/cscareerquestions/', 'Discussões sobre carreira em computação, entrevistas, vagas e trajetória profissional.'),
    siteItem('r/ExperiencedDevs', 'https://www.reddit.com/r/ExperiencedDevs/', 'Comunidade mais focada em sênior, tech lead, arquitetura e decisões de carreira.'),
    siteItem('r/sysadmin', 'https://www.reddit.com/r/sysadmin/', 'Discussões de administração de sistemas, suporte, redes, servidores e operação.'),
  ]),
  siteItem('DEV Community', 'https://dev.to/', 'Blog comunitário com posts de programação, carreira, ferramentas e experiências práticas.'),
  siteItem('Hacker News', 'https://news.ycombinator.com/', 'Agregador clássico sobre tecnologia, startups, engenharia, ciência e cultura hacker.'),
  siteItem('W3Schools', 'https://www.w3schools.com/', 'Referência rápida para HTML, CSS, JavaScript, SQL e fundamentos web.'),
  siteItem('freeCodeCamp', 'https://www.freecodecamp.org/', 'Cursos e artigos gratuitos para aprender programação, web, dados e computação.'),
  siteItem('Coursera', 'https://www.coursera.org/', 'Cursos online de universidades e empresas, incluindo tecnologia, dados e IA.'),
  siteItem('edX', 'https://www.edx.org/', 'Plataforma com cursos online de instituições como Harvard, MIT e outras universidades.'),
  siteItem('Udemy', 'https://www.udemy.com/', 'Marketplace de cursos práticos, útil quando você filtra bem instrutor e conteúdo.'),
  siteItem('Alura', 'https://www.alura.com.br/', 'Plataforma brasileira de cursos em tecnologia, dados, produto, design e carreira.'),
  siteItem('Rocketseat', 'https://www.rocketseat.com.br/', 'Conteúdo brasileiro focado em desenvolvimento web, carreira e ecossistema JavaScript.'),
  siteItem('Khan Academy', 'https://www.khanacademy.org/', 'Boa base gratuita para matemática, lógica, ciências e fundamentos de estudo.'),
  siteItem('CS50 da Harvard', 'https://cs50.harvard.edu/', 'Curso introdutório de ciência da computação muito conhecido e bem estruturado.'),
  siteItem('MIT OpenCourseWare', 'https://ocw.mit.edu/', 'Materiais gratuitos de disciplinas do MIT, incluindo computação, matemática e engenharia.'),
  siteItem('Stanford Online', 'https://online.stanford.edu/', 'Cursos e programas online de Stanford, com boas opções em tecnologia e IA.'),
  siteItem('LinkedIn Learning', 'https://www.linkedin.com/learning/', 'Cursos curtos ligados a carreira, ferramentas, negócios e tecnologia.'),
  siteItem('Codecademy', 'https://www.codecademy.com/', 'Aprendizado interativo de programação, linguagens e ferramentas populares.'),
  siteItem('LeetCode', 'https://leetcode.com/', 'Treino de algoritmos, estruturas de dados e entrevistas técnicas.'),
  siteItem('HackerRank', 'https://www.hackerrank.com/', 'Plataforma para desafios de código, prática técnica e testes de recrutamento.'),
  siteItem('Kaggle', 'https://www.kaggle.com/', 'Datasets, notebooks, competições e exemplos práticos de dados e machine learning.'),
  siteItem('Hugging Face', 'https://huggingface.co/', 'Modelos, datasets, espaços e ferramentas para IA, NLP e machine learning moderno.'),
  siteItem('Google Colab', 'https://colab.research.google.com/', 'Notebooks Python na nuvem, muito úteis para dados, IA e experimentos rápidos.'),
  siteItem('Vercel', 'https://vercel.com/', 'Hospedagem e deploy simples para front-end, Next.js, APIs leves e projetos web.'),
  siteItem('OpenAI Platform', 'https://platform.openai.com/', 'Console e documentação para usar modelos, APIs e ferramentas da OpenAI.'),
  siteItem('Anthropic Console', 'https://console.anthropic.com/', 'Ambiente para testar Claude, criar prompts e trabalhar com APIs da Anthropic.'),
  siteItem('Google AI Studio', 'https://aistudio.google.com/', 'Ambiente do Google para prototipar prompts, testar Gemini e explorar recursos de IA.'),
  siteItem('AWS', 'https://aws.amazon.com/', 'Grande plataforma de cloud com serviços para computação, dados, redes, IA e infraestrutura.'),
  siteItem('Google Cloud', 'https://cloud.google.com/', 'Cloud do Google com serviços de infraestrutura, dados, IA, APIs e deploy.'),
  siteItem('Azure', 'https://azure.microsoft.com/', 'Cloud da Microsoft para aplicações, dados, IA, identidade, infraestrutura e empresas.'),
  siteItem('Oracle Cloud', 'https://www.oracle.com/cloud/', 'Cloud da Oracle com banco de dados, computação, infraestrutura e serviços corporativos.'),
  siteItem('DigitalOcean', 'https://www.digitalocean.com/', 'Cloud simples para VPS, bancos, deploy e projetos pequenos ou médios.'),
  siteItem('Linode - Akamai', 'https://www.linode.com/', 'Cloud com VPS, storage, rede e serviços de infraestrutura da Akamai.'),
  siteItem('Vultr', 'https://www.vultr.com/', 'Cloud para VPS, instâncias, Kubernetes, storage e deploy em várias regiões.'),
  siteItem('Hetzner', 'https://www.hetzner.com/', 'Provedor conhecido por servidores e cloud com bom custo-benefício.'),
  siteItem('Cloudflare', 'https://www.cloudflare.com/', 'DNS, CDN, segurança, Workers, Pages e ferramentas de performance para web.'),
  siteItem('Railway', 'https://railway.app/', 'Deploy simples para aplicações, bancos e serviços pequenos com boa experiência de uso.'),
  siteItem('Render', 'https://render.com/', 'Hospedagem para aplicações web, APIs, workers, bancos e sites estáticos.'),
  siteItem('Fly.io', 'https://fly.io/', 'Deploy de aplicações perto dos usuários, com foco em apps distribuídos.'),
  siteItem('Heroku', 'https://www.heroku.com/', 'Plataforma clássica de deploy, útil para entender PaaS e prototipar aplicações.'),
  siteItem('Supabase', 'https://supabase.com/', 'Backend como serviço com Postgres, autenticação, storage, realtime e edge functions.'),
  siteItem('Firebase', 'https://firebase.google.com/', 'Backend do Google com auth, banco, hosting, analytics e ferramentas mobile/web.'),
  siteItem('Docker Hub', 'https://hub.docker.com/', 'Registro de imagens Docker, muito usado para buscar imagens oficiais e publicar containers.'),
  siteItem('Kubernetes Docs', 'https://kubernetes.io/docs/', 'Documentação oficial do Kubernetes para estudar orquestração e operação de containers.'),
  siteItem('Postman', 'https://www.postman.com/', 'Ferramenta para testar APIs, montar coleções, documentar endpoints e automatizar requests.'),
  siteItem('Insomnia', 'https://insomnia.rest/', 'Cliente de APIs mais direto, útil para testar REST, GraphQL e ambientes de requisição.'),
  siteItem('npm', 'https://www.npmjs.com/', 'Registro de pacotes JavaScript e Node.js, essencial para o ecossistema web.'),
  siteItem('PyPI', 'https://pypi.org/', 'Registro oficial de pacotes Python, útil para bibliotecas, versões e documentação.'),
  siteItem('ngrok', 'https://ngrok.com/', 'Cria túneis seguros para expor serviços locais e testar webhooks.'),
  siteItem('TechCrunch', 'https://techcrunch.com/', 'Notícias de tecnologia, startups, investimentos e movimentos do mercado.'),
  siteItem('The Verge', 'https://www.theverge.com/', 'Cobertura de tecnologia, produtos, cultura digital e grandes empresas.'),
  siteItem('WIRED', 'https://www.wired.com/', 'Reportagens sobre tecnologia, ciência, cultura digital, segurança e sociedade.'),
  siteItem('MIT Technology Review', 'https://www.technologyreview.com/', 'Análises e reportagens sobre tecnologia, ciência, IA e impactos futuros.'),
  siteItem('The Register', 'https://www.theregister.com/', 'Notícias de infraestrutura, cloud, segurança, hardware, software e bastidores de TI.'),
  siteItem('Tecnoblog', 'https://tecnoblog.net/', 'Notícias brasileiras sobre tecnologia, telecom, produtos digitais e mercado.'),
  siteItem('Olhar Digital', 'https://olhardigital.com.br/', 'Portal brasileiro com notícias de tecnologia, ciência, internet e inovação.'),
  siteItem('Canaltech', 'https://canaltech.com.br/', 'Notícias e guias sobre tecnologia, produtos, ciência, mercado e cultura digital.'),
  siteItem('The Pragmatic Engineer', 'https://www.pragmaticengineer.com/', 'Textos sobre engenharia de software, carreira, gestão técnica e indústria.'),
  siteItem('TabNews', 'https://www.tabnews.com.br/', 'Comunidade brasileira para textos, discussões e aprendizados sobre tecnologia.'),
  siteItem('Figma', 'https://www.figma.com/', 'Ferramenta de design colaborativo para interfaces, protótipos e design systems.'),
  siteItem('Excalidraw', 'https://excalidraw.com/', 'Quadro simples para desenhar ideias, fluxos, diagramas e explicações visuais.'),
  siteItem('Whimsical', 'https://whimsical.com/', 'Ferramenta para fluxogramas, wireframes, mapas mentais e documentação visual.'),
  siteItem('Miro', 'https://miro.com/', 'Quadro colaborativo para workshops, discovery, mapas, fluxos e organização de ideias.'),
  siteItem('Unsplash', 'https://unsplash.com/', 'Banco de imagens gratuitas, útil para layouts, referências visuais e protótipos.'),
  siteItem('Pexels', 'https://www.pexels.com/', 'Fotos e vídeos gratuitos para projetos, estudos, mockups e materiais visuais.'),
  siteItem('Pixabay', 'https://pixabay.com/', 'Imagens, vídeos, ilustrações e assets gratuitos para uso em projetos.'),
  siteItem('Google Fonts', 'https://fonts.google.com/', 'Biblioteca de fontes web gratuitas, com fácil integração em projetos.'),
  siteItem('LinkedIn', 'https://www.linkedin.com/', 'Rede profissional para carreira, networking, vagas, portfólio e presença pública.'),
  siteItem('Indeed', 'https://br.indeed.com/', 'Agregador de vagas para pesquisar oportunidades, salários e requisitos do mercado.'),
  siteItem('Glassdoor', 'https://www.glassdoor.com.br/', 'Informações sobre empresas, salários, entrevistas e avaliações de funcionários.'),
  siteItem('Gupy', 'https://www.gupy.io/', 'Plataforma brasileira de recrutamento muito presente em processos seletivos.'),
  siteItem('Programathor', 'https://programathor.com.br/', 'Vagas de tecnologia no Brasil, com foco em desenvolvedores e empresas tech.'),
  siteItem('Vagas.com', 'https://www.vagas.com.br/', 'Portal tradicional de vagas e processos seletivos no Brasil.'),
  siteItem('Revelo', 'https://www.revelo.com.br/', 'Plataforma de recrutamento e carreira voltada para profissionais de tecnologia.'),
  siteItem('Remote OK', 'https://remoteok.com/', 'Vagas remotas globais, útil para acompanhar demanda e cargos fora do Brasil.'),
  siteItem('Internet Archive', 'https://archive.org/', 'Biblioteca digital com páginas, livros, softwares, vídeos e arquivos históricos.'),
  siteItem('Wayback Machine', 'https://web.archive.org/', 'Ferramenta para consultar versões antigas de páginas e recuperar conteúdo perdido.'),
  siteItem('archive.ph', 'https://archive.ph/', 'Serviço para preservar snapshots de páginas e contornar perda de conteúdo.'),
  siteItem('Wikipedia', 'https://www.wikipedia.org/', 'Enciclopédia colaborativa, boa para visão geral, termos, contexto e ponto de partida.'),
  siteItem('ByteByteGo', 'https://bytebytego.com/', 'Conteúdo visual e direto sobre arquitetura, sistemas distribuídos e engenharia.'),
  siteItem('Notion', 'https://www.notion.so/', 'Workspace para notas, documentos, organização pessoal, bases de dados e projetos.'),
  siteItem('Obsidian', 'https://obsidian.md/', 'App de notas em Markdown, bom para criar uma base pessoal de conhecimento.'),
  siteItem('Anki', 'https://apps.ankiweb.net/', 'Flashcards com repetição espaçada para memorizar conceitos e revisar estudos.'),
  siteItem('Logseq', 'https://logseq.com/', 'Ferramenta de notas, backlinks e organização de conhecimento em formato de grafo.'),
  siteItem('Toggl', 'https://toggl.com/', 'Controle de tempo para medir foco, rotina, estudos e trabalho.'),
  siteItem('Clockify', 'https://clockify.me/', 'Time tracker para registrar horas, projetos, estudos e produtividade.'),
  siteItem('Curso em Vídeo', 'https://www.cursoemvideo.com/', 'Cursos gratuitos em português, bons para fundamentos e primeiros passos.'),
  siteItem('Google Scholar', 'https://scholar.google.com/', 'Busca acadêmica para artigos, citações, autores e publicações científicas.'),
  siteItem('IEEE Xplore', 'https://ieeexplore.ieee.org/', 'Biblioteca técnica com papers, conferências e publicações de engenharia e computação.'),
  siteItem('CAPES Periódicos', 'https://www.periodicos.capes.gov.br/', 'Portal brasileiro para acesso a conteúdo científico, periódicos e bases acadêmicas.'),
  siteItem('ORCID', 'https://orcid.org/', 'Identificador acadêmico para autores, publicações, pesquisa e currículo científico.'),
  siteItem('Slack', 'https://slack.com/', 'Comunicação de times, comunidades, canais técnicos e colaboração no trabalho.'),
  siteItem('Zoom', 'https://zoom.us/', 'Reuniões, aulas, eventos online, entrevistas e comunicação por vídeo.'),
  siteItem('Google Meet', 'https://meet.google.com/', 'Videoconferência do Google para reuniões, aulas, entrevistas e calls rápidas.'),
  siteItem('Jira', 'https://www.atlassian.com/software/jira', 'Gestão de tarefas, bugs, sprints e fluxo de trabalho em times de produto e engenharia.'),
  siteItem('Trello', 'https://trello.com/', 'Kanban simples para organizar tarefas, estudos, projetos e fluxos pequenos.'),
  siteItem('ClickUp', 'https://clickup.com/', 'Gestão de tarefas, projetos, docs e produtividade para pessoas e times.'),
  siteItem('Asana', 'https://asana.com/', 'Organização de projetos, tarefas, responsabilidades e acompanhamento de entregas.'),
]

const extraSiteItems: CulturaTechItem[] = [
  siteItem('Bitbucket', 'https://bitbucket.org/', 'Hospedagem Git da Atlassian, comum em times que usam Jira e ecossistema corporativo.'),
  siteItem('SourceForge', 'https://sourceforge.net/', 'Repositório histórico de software open source, ainda útil para achar projetos antigos.'),
  siteItem('Codeberg', 'https://codeberg.org/', 'Forge Git sem fins lucrativos, focada em software livre e colaboração aberta.'),
  siteItem('Gitea', 'https://about.gitea.com/', 'Forge Git leve e self-hosted para repositórios, issues, pull requests e colaboração.'),
  siteItem('Forgejo', 'https://forgejo.org/', 'Forge Git livre e federável, nascida como alternativa comunitária ao Gitea.'),
  siteItem('Sourcegraph', 'https://sourcegraph.com/search', 'Busca e navegação em código para explorar repositórios e encontrar padrões.'),
  siteItem('grep.app', 'https://grep.app/', 'Busca rápida por código em repositórios públicos do GitHub usando texto ou regex.'),
  siteItem('Lobsters', 'https://lobste.rs/', 'Comunidade curada de links e discussões sobre programação, segurança, sistemas e tecnologia.'),
  siteGroup('Discord servers', 'Servidores úteis para conversar, tirar dúvidas, acompanhar comunidades e aprender com outros devs.', [
    siteItem('The Programmer\'s Hangout', 'https://discord.com/servers/the-programmer-s-hangout-244230771232079873', 'Comunidade grande e generalista para programação, carreira, linguagens e ajuda técnica.'),
    siteItem('Python Discord', 'https://www.pythondiscord.com/', 'Comunidade focada em Python, com canais de ajuda, eventos e contribuição open source.'),
    siteItem('Reactiflux', 'https://www.reactiflux.com/', 'Comunidade de React, React Native, Redux, GraphQL e ecossistema JavaScript.'),
    siteItem('The Coding Den', 'https://discord.gg/code', 'Servidor para tirar dúvidas de código, receber feedback e conviver com outros devs.'),
    siteItem('devcord', 'https://discord.com/servers/devcord-174075418410876928', 'Comunidade para desenvolvimento web, front-end, back-end e conversas técnicas gerais.'),
  ]),
  siteGroup('Slack communities', 'Comunidades em Slack que ajudam a acompanhar projetos, segurança, cloud native e ecossistemas técnicos.', [
    siteItem('Kubernetes Slack', 'https://slack.k8s.io/', 'Workspace enorme da comunidade Kubernetes, com canais por SIG, projeto e assunto.'),
    siteItem('CNCF Slack', 'https://slack.cncf.io/', 'Comunidade cloud native para projetos como Argo, OpenTofu, OpenFGA, Prometheus e outros.'),
    siteItem('OWASP Slack', 'https://owasp.org/slack/invite', 'Comunidade de segurança de aplicações, projetos OWASP e discussões de AppSec.'),
    siteItem('OpenTofu Slack', 'https://opentofu.org/slack/', 'Canal da comunidade OpenTofu dentro do Slack da CNCF, focado em infraestrutura como código.'),
    siteItem('Argo Slack', 'https://argoproj.github.io/community/join-slack/', 'Canais do Argo no Slack da CNCF para CD, workflows, rollouts e eventos.'),
  ]),
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
    items: [...obviousSiteItems, ...extraSiteItems],
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
