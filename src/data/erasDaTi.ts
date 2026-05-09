export type EraMilestone = {
  label: { pt: string; en: string }
  year: string
  text: { pt: string; en: string }
}

export type Era = {
  id: string
  number: string // 'I', 'II', 'III'...
  range: string // '1843 – 1945'
  startYear: number
  endYear: number // last year covered (inclusive); use a large value for open ranges
  colorVar: string // CSS variable name e.g. '--era-1'
  title: { pt: string; en: string }
  subtitle: { pt: string; en: string }
  image: string
  intro: { pt: string; en: string }
  milestones: EraMilestone[]
}

const CLOUDINARY = 'https://res.cloudinary.com/dzxlnefn4/image/upload/q_auto/f_auto'

export const ERAS: Era[] = [
  {
    id: 'mecanica-teorica',
    number: 'I',
    range: '1843 – 1945',
    startYear: 1843,
    endYear: 1945,
    colorVar: '--era-1',
    title: {
      pt: 'A Era Mecânica e Teórica',
      en: 'The Mechanical and Theoretical Era',
    },
    subtitle: {
      pt: 'O Berço da Lógica',
      en: 'The Cradle of Logic',
    },
    image: `${CLOUDINARY}/v1778359776/era1_ax9xyc.png`,
    intro: {
      pt: 'Esta é a era dos profetas. Não havia eletricidade guiando bits, apenas engrenagens de latão, cartões perfurados e matemática pura. A computação era um conceito puramente teórico ou mecânico, usado para tabelas de navegação ou quebra de códigos de guerra.',
      en: 'This is the era of the prophets. There was no electricity guiding bits — only brass gears, punched cards, and pure mathematics. Computing was a purely theoretical or mechanical concept, used for navigation tables or wartime code breaking.',
    },
    milestones: [
      {
        label: { pt: 'O Marco Inicial', en: 'The Initial Milestone' },
        year: '1843',
        text: {
          pt: 'Ada Lovelace publica o primeiro algoritmo do mundo para a Máquina Analítica de Charles Babbage. A TI nasce no papel.',
          en: 'Ada Lovelace publishes the world\'s first algorithm for Charles Babbage\'s Analytical Engine. IT is born on paper.',
        },
      },
      {
        label: { pt: 'O Ponto de Virada', en: 'The Turning Point' },
        year: '1936',
        text: {
          pt: 'Alan Turing publica o conceito da "Máquina Universal", provando que uma única máquina poderia resolver qualquer problema matemático se recebesse as instruções corretas.',
          en: 'Alan Turing publishes the concept of the "Universal Machine", proving that a single machine could solve any mathematical problem if given the correct instructions.',
        },
      },
      {
        label: { pt: 'O Fim da Era', en: 'The End of the Era' },
        year: '1945',
        text: {
          pt: 'Termina com a Segunda Guerra Mundial, quando a necessidade militar de calcular trajetórias de artilharia e quebrar códigos nazistas forçou a transição da mecânica para a eletrônica (com o Colossus e o rascunho do ENIAC).',
          en: 'Ends with World War II, when the military need to calculate artillery trajectories and break Nazi codes forced the transition from mechanics to electronics (with Colossus and the ENIAC draft).',
        },
      },
    ],
  },
  {
    id: 'gigantes-ferro',
    number: 'II',
    range: '1946 – 1970',
    startYear: 1946,
    endYear: 1970,
    colorVar: '--era-2',
    title: {
      pt: 'A Era dos Gigantes de Ferro',
      en: 'The Era of the Iron Giants',
    },
    subtitle: {
      pt: 'Os Mainframes e a Eletrônica de Força Bruta',
      en: 'Mainframes and Brute-Force Electronics',
    },
    image: `${CLOUDINARY}/v1778359775/era2_qwgq5m.png`,
    intro: {
      pt: 'A computação ganha eletricidade, mas exige galpões inteiros refrigerados. O computador não é um produto, é uma "instalação" que pertence a governos, exércitos ou corporações colossais como a IBM. O processamento é feito em lotes (batch), e programar significava literalmente conectar cabos ou furar cartões.',
      en: 'Computing gains electricity, but requires entire refrigerated warehouses. The computer is not a product — it is an "installation" belonging to governments, armies, or colossal corporations like IBM. Processing is done in batches, and programming meant literally connecting cables or punching cards.',
    },
    milestones: [
      {
        label: { pt: 'O Marco Inicial', en: 'The Initial Milestone' },
        year: '1946 / 1947',
        text: {
          pt: 'A ativação do ENIAC (o primeiro computador eletrônico de propósito geral) e, logo em seguida, a invenção do Transistor no Bell Labs, que substituiu as frágeis válvulas de vidro e permitiu a miniaturização da tecnologia.',
          en: 'The activation of ENIAC (the first general-purpose electronic computer) and, soon after, the invention of the Transistor at Bell Labs, which replaced fragile glass tubes and enabled the miniaturization of technology.',
        },
      },
      {
        label: { pt: 'O Ponto de Virada', en: 'The Turning Point' },
        year: '1952',
        text: {
          pt: 'Grace Hopper inventa o Compilador, permitindo que os humanos escrevessem códigos com palavras em inglês em vez de zeros e uns.',
          en: 'Grace Hopper invents the Compiler, allowing humans to write code with English words instead of zeros and ones.',
        },
      },
      {
        label: { pt: 'O Fim da Era', en: 'The End of the Era' },
        year: '1969',
        text: {
          pt: 'Dois eventos matam o isolamento da máquina: o desenvolvimento do sistema operacional UNIX e a transmissão da primeira mensagem na ARPANET (a avó da internet). A máquina aprendeu a falar com outras máquinas.',
          en: 'Two events kill the machine\'s isolation: the development of the UNIX operating system and the transmission of the first message over ARPANET (the grandmother of the internet). The machine learned to talk to other machines.',
        },
      },
    ],
  },
  {
    id: 'rebeliao-silicio',
    number: 'III',
    range: '1971 – 1989',
    startYear: 1971,
    endYear: 1989,
    colorVar: '--era-3',
    title: {
      pt: 'A Era da Rebelião do Silício',
      en: 'The Silicon Rebellion Era',
    },
    subtitle: {
      pt: 'O Computador Pessoal (PC) e o Software Proprietário',
      en: 'The Personal Computer (PC) and Proprietary Software',
    },
    image: `${CLOUDINARY}/v1778359775/era3_da40gi.png`,
    intro: {
      pt: 'A computação foge dos laboratórios militares e invade as mesas dos escritórios e os quartos dos adolescentes. O microprocessador permite que o cérebro da máquina caiba na ponta de um dedo. É a era da consolidação da Microsoft, do nascimento da Apple e da transformação do software em um produto comercial.',
      en: 'Computing escapes military labs and invades office desks and teenagers\' bedrooms. The microprocessor allows the brain of the machine to fit on the tip of a finger. This is the era of Microsoft\'s consolidation, the birth of Apple, and the transformation of software into a commercial product.',
    },
    milestones: [
      {
        label: { pt: 'O Marco Inicial', en: 'The Initial Milestone' },
        year: '1971',
        text: {
          pt: 'A Intel lança o 4004, o primeiro microprocessador comercial do mundo. Um computador inteiro esculpido em uma única pastilha de silício.',
          en: 'Intel releases the 4004, the world\'s first commercial microprocessor. An entire computer carved into a single silicon chip.',
        },
      },
      {
        label: { pt: 'O Ponto de Virada', en: 'The Turning Point' },
        year: '1984',
        text: {
          pt: 'O lançamento do Apple Macintosh e do Windows. O teclado de tela preta e comandos em texto (MS-DOS) foi substituído pela Interface Gráfica (GUI) e pelo mouse. O computador tornou-se acessível para quem não era matemático.',
          en: 'The launch of the Apple Macintosh and Windows. The black-screen keyboard with text commands (MS-DOS) was replaced by the Graphical User Interface (GUI) and the mouse. The computer became accessible to those who weren\'t mathematicians.',
        },
      },
      {
        label: { pt: 'O Fim da Era', en: 'The End of the Era' },
        year: '1989',
        text: {
          pt: 'A guerra dos PCs de mesa atinge o seu pico, mas os computadores ainda são, em grande parte, ilhas isoladas. Tudo muda no apagar das luzes dos anos 80.',
          en: 'The desktop PC war reaches its peak, but computers are still, for the most part, isolated islands. Everything changes as the lights of the \'80s fade.',
        },
      },
    ],
  },
  {
    id: 'conexao',
    number: 'IV',
    range: '1990 – 2006',
    startYear: 1990,
    endYear: 2006,
    colorVar: '--era-4',
    title: {
      pt: 'A Era da Conexão',
      en: 'The Connection Era',
    },
    subtitle: {
      pt: 'A Web, o Ciberespaço e a Bolha',
      en: 'The Web, Cyberspace and the Bubble',
    },
    image: `${CLOUDINARY}/v1778359775/era4_kylmph.png`,
    intro: {
      pt: 'A era em que o mundo físico foi digitalizado e indexado. A TI deixa de ser apenas sobre "processar planilhas e textos" para se tornar o sistema nervoso central do comércio global e da informação. É a era dos provedores de internet, do Google, da bolha pontocom e do nascimento da Web 2.0 (redes sociais).',
      en: 'The era in which the physical world was digitized and indexed. IT ceases to be just about "processing spreadsheets and texts" to become the central nervous system of global commerce and information. It is the era of internet providers, Google, the dot-com bubble, and the birth of Web 2.0 (social networks).',
    },
    milestones: [
      {
        label: { pt: 'O Marco Inicial', en: 'The Initial Milestone' },
        year: '1990 / 1991',
        text: {
          pt: 'Tim Berners-Lee inventa a World Wide Web (WWW). A internet deixa de ser uma rede de transferência de arquivos em tela preta e vira um "site" navegável através de links.',
          en: 'Tim Berners-Lee invents the World Wide Web (WWW). The internet stops being a black-screen file transfer network and becomes a "site" navigable through links.',
        },
      },
      {
        label: { pt: 'O Ponto de Virada', en: 'The Turning Point' },
        year: '1998 / 2000',
        text: {
          pt: 'A fundação do Google e a subsequente explosão e estouro da "Bolha da Internet", que separou as empresas que tinham modelos reais de negócios daquelas que eram apenas fumaça especulativa. O nascimento do Linux consolida o código aberto nos servidores.',
          en: 'The founding of Google and the subsequent explosion and burst of the "Internet Bubble", which separated companies with real business models from those that were just speculative smoke. The birth of Linux consolidates open source on servers.',
        },
      },
      {
        label: { pt: 'O Fim da Era', en: 'The End of the Era' },
        year: '2006',
        text: {
          pt: 'O Facebook é aberto ao público geral e o MySpace atinge o seu auge. A internet nos computadores de mesa estava madura, mas as pessoas ainda precisavam "ir até o computador" para se conectar.',
          en: 'Facebook opens to the general public and MySpace reaches its peak. Desktop internet was mature, but people still had to "go to the computer" to connect.',
        },
      },
    ],
  },
  {
    id: 'movel-nuvem',
    number: 'V',
    range: '2007 – 2016',
    startYear: 2007,
    endYear: 2016,
    colorVar: '--era-5',
    title: {
      pt: 'A Era Móvel e da Nuvem',
      en: 'The Mobile and Cloud Era',
    },
    subtitle: {
      pt: 'O Mundo no Bolso e a Computação Invisível',
      en: 'The World in Your Pocket and Invisible Computing',
    },
    image: `${CLOUDINARY}/v1778359775/era5_xp8tua.png`,
    intro: {
      pt: 'A TI abandona as mesas. O hardware do usuário encolhe para o tamanho da palma da mão, enquanto o hardware corporativo é empurrado para fazendas de servidores gigantescas e invisíveis (Datacenters). O termo "Gig Economy" (Uber, Airbnb) nasce aqui, alimentado por GPS contínuo e notificações em tempo real.',
      en: 'IT abandons the desk. User hardware shrinks to palm size, while corporate hardware is pushed to gigantic, invisible server farms (Datacenters). The term "Gig Economy" (Uber, Airbnb) is born here, fueled by continuous GPS and real-time notifications.',
    },
    milestones: [
      {
        label: { pt: 'O Marco Inicial', en: 'The Initial Milestone' },
        year: '2007',
        text: {
          pt: 'O lançamento do iPhone. Ele convergiu o navegador de internet, o comunicador e o software na tela de vidro portátil definitiva. Simultaneamente, a Amazon lança a AWS (Amazon Web Services), fundando a computação em nuvem moderna.',
          en: 'The launch of the iPhone. It converged the internet browser, communicator and software into the definitive portable glass screen. Simultaneously, Amazon launches AWS (Amazon Web Services), founding modern cloud computing.',
        },
      },
      {
        label: { pt: 'O Ponto de Virada', en: 'The Turning Point' },
        year: '2008 – 2014',
        text: {
          pt: 'O lançamento da App Store (2008), do WhatsApp (2009) e do Kubernetes (2014). A economia global inteira passa a operar através de aplicativos móveis apoiados por contêineres e APIs em nuvem.',
          en: 'The launch of the App Store (2008), WhatsApp (2009) and Kubernetes (2014). The entire global economy starts operating through mobile apps backed by containers and cloud APIs.',
        },
      },
      {
        label: { pt: 'O Fim da Era', en: 'The End of the Era' },
        year: '2016',
        text: {
          pt: 'A vitória do AlphaGo (IA do Google) sobre o campeão mundial de Go mostra que o silício conectado já estava rápido o suficiente para algo muito maior do que apenas transferir fotos e hospedar sites.',
          en: 'The victory of AlphaGo (Google\'s AI) over the world Go champion shows that connected silicon was already fast enough for something much greater than just transferring photos and hosting sites.',
        },
      },
    ],
  },
  {
    id: 'cognicao-sintetica',
    number: 'VI',
    range: '2017 – 2025+',
    startYear: 2017,
    endYear: 9999,
    colorVar: '--era-6',
    title: {
      pt: 'A Era da Cognição Sintética',
      en: 'The Synthetic Cognition Era',
    },
    subtitle: {
      pt: 'A Revolução da IA e da Mídia Generativa',
      en: 'The Revolution of AI and Generative Media',
    },
    image: `${CLOUDINARY}/v1778359775/era6_pvck2d.png`,
    intro: {
      pt: 'A era que estamos vivendo agora. O código tradicional baseado em "se isto, então aquilo" (if/else) atinge os seus limites. A TI passa a focar em Redes Neurais que aprendem padrões probabilísticos sozinhas. A máquina deixa de ser uma calculadora burra que aguarda comandos para se tornar uma entidade geradora, capaz de criar texto, imagens, códigos e inferências lógicas.',
      en: 'The era we are living in now. Traditional code based on "if this, then that" (if/else) reaches its limits. IT shifts its focus to Neural Networks that learn probabilistic patterns on their own. The machine ceases to be a dumb calculator waiting for commands and becomes a generative entity, capable of creating text, images, code and logical inferences.',
    },
    milestones: [
      {
        label: { pt: 'O Marco Inicial', en: 'The Initial Milestone' },
        year: '2017',
        text: {
          pt: 'A publicação do artigo "Attention Is All You Need", que introduziu a arquitetura Transformer. Sem esse marco acadêmico, nenhum dos modelos modernos de IA existiria.',
          en: 'The publication of the paper "Attention Is All You Need", which introduced the Transformer architecture. Without this academic milestone, none of the modern AI models would exist.',
        },
      },
      {
        label: { pt: 'O Ponto de Virada', en: 'The Turning Point' },
        year: '2022',
        text: {
          pt: 'O lançamento do ChatGPT, que cruzou a ponte entre o laboratório científico e o consumidor comum, quebrando o monopólio da interface visual e inaugurando a era do "Prompt" e do Software Autônomo.',
          en: 'The launch of ChatGPT, which crossed the bridge between the scientific lab and the everyday consumer, breaking the monopoly of the visual interface and ushering in the era of the "Prompt" and Autonomous Software.',
        },
      },
      {
        label: { pt: 'O Novo Horizonte', en: 'The New Horizon' },
        year: '2024 / 2025',
        text: {
          pt: 'O lançamento de IAs Agentivas (Devin) e de Modelos de Raciocínio hiper-eficientes (DeepSeek-R1). A era em que a IA deixa de ser um "chatbot" passivo e ganha o Computer Use, assumindo o controle da própria interface para agir como um piloto operacional em tempo real e com custo democratizado.',
          en: 'The release of Agentic AIs (Devin) and hyper-efficient Reasoning Models (DeepSeek-R1). The era in which AI ceases to be a passive "chatbot" and gains Computer Use, taking control of the interface itself to act as an operational pilot in real time and with democratized cost.',
        },
      },
    ],
  },
]

export function getEraForYear(year: number): Era | null {
  return ERAS.find(era => year >= era.startYear && year <= era.endYear) ?? null
}
