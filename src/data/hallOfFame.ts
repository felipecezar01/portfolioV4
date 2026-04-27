import { HALL_IMAGES } from './hallImages'

export type HallPerson = {
  name: string
  image?: string
  imagePlaceholder?: { pt: string; en: string }
  images?: Array<{
    src: string
    alt: string
  }>
  flag: string
  nationality: { pt: string; en: string }
  formation: { pt: string; en: string }
  summary: { pt: string; en: string }
  role: { pt: string; en: string }
  contribution: { pt: string; en: string }
  detail: { pt: string; en: string }
  additionalImage?: {
    src: string
    caption: { pt: string; en: string }
  }
  additionalImages?: Array<{
    src: string
    caption: { pt: string; en: string }
  }>
}

export type HallYear = {
  year: number
  era: { pt: string; en: string }
  context: { pt: string; en: string }
  peopleCount?: number
  people: HallPerson[]
}

export const HALL_START = 1843
export const HALL_END   = 2026
export const HALL_SPAN  = HALL_END - HALL_START // 183

const YEAR_1852_PLACEHOLDER = {
  pt: 'Redes Elétricas Entram em Produção\n1852',
  en: 'Electrical Networks Go Into Production\n1852',
}

const YEAR_1853_PLACEHOLDER = {
  pt: 'O Cálculo Automático Entra em Cena\n1853',
  en: 'Automatic Calculation Enters the Stage\n1853',
}

const YEAR_1854_PLACEHOLDER = {
  pt: 'A Lógica Vira Matemática\n1854',
  en: 'Logic Becomes Mathematics\n1854',
}

const YEAR_1855_PLACEHOLDER = {
  pt: 'A Máquina Calcula, a Rede Imprime\n1855',
  en: 'The Machine Calculates, the Network Prints\n1855',
}

const YEAR_1856_PLACEHOLDER = {
  pt: 'A Imagem Começa a Viajar pelo Fio\n1856',
  en: 'Images Begin to Travel by Wire\n1856',
}

const YEAR_1857_PLACEHOLDER = {
  pt: 'O Som Vira Dado, a Rede Entra em Crise\n1857',
  en: 'Sound Becomes Data, the Network Enters Crisis\n1857',
}

const YEAR_1858_PLACEHOLDER = {
  pt: 'O Oceano Vira Rede, o Dado Vira Argumento\n1858',
  en: 'The Ocean Becomes a Network, Data Becomes an Argument\n1858',
}

const YEAR_1859_PLACEHOLDER = {
  pt: 'A Rede Descobre que o Sol Também Dá Bug\n1859',
  en: 'The Network Discovers the Sun Can Also Cause Bugs\n1859',
}

const YEAR_1860_PLACEHOLDER = {
  pt: 'A Rede Quer Cruzar Continentes\n1860',
  en: 'The Network Wants to Cross Continents\n1860',
}

const YEAR_1861_PLACEHOLDER = {
  pt: 'A Voz, a Cor e o Continente Entram na Rede\n1861',
  en: 'Voice, Color and the Continent Enter the Network\n1861',
}

const data: HallYear[] = [
  {
    year: 1843,
    era: { pt: 'O Start de Tudo', en: 'Where It All Began' },
    context: {
      pt: 'Décadas antes do primeiro computador físico existir, a matemática Ada Lovelace já escrevia o que hoje reconhecemos como o primeiro algoritmo da história — para uma máquina que sequer havia sido construída.',
      en: 'Decades before any physical computer existed, mathematician Ada Lovelace was already writing what we now recognize as the first algorithm in history — for a machine that had not even been built yet.',
    },
    people: [
      {
        name: 'Ada Lovelace',
        image: HALL_IMAGES.year1843.adaLovelace,
        flag: '🇬🇧',
        nationality: { pt: 'Britânica', en: 'British' },
        formation: {
          pt: 'Autodidata em Matemática · Tutorizada por Augustus De Morgan',
          en: 'Self-taught in Mathematics · Tutored by Augustus De Morgan',
        },
        summary: { pt: 'Escreveu o primeiro algoritmo da história', en: 'Wrote the first algorithm in history' },
        role: { pt: 'Matemática e primeira programadora da história', en: 'Mathematician and first programmer in history' },
        contribution: {
          pt: 'Escreveu o primeiro algoritmo da história, destinado à Máquina Analítica de Charles Babbage — uma máquina que nunca chegou a ser construída em vida.',
          en: 'Wrote the first algorithm in history, intended for Charles Babbage\'s Analytical Engine — a machine that was never built in her lifetime.',
        },
        detail: {
          pt: 'Ada foi além de simples traduções dos trabalhos de Babbage: ela adicionou suas próprias notas, que eram três vezes mais longas que o texto original. Nessas notas, descreveu como a máquina poderia ser programada para calcular os Números de Bernoulli — o que hoje é considerado o primeiro programa de computador da história. Ela também foi a primeira a enxergar que uma máquina de calcular poderia ir além dos números, manipulando símbolos e composições musicais.',
          en: 'Ada went far beyond simple translations of Babbage\'s work: she added her own notes, which were three times longer than the original text. In these notes, she described how the machine could be programmed to calculate Bernoulli Numbers — what is now considered the first computer program in history. She was also the first to envision that a calculating machine could go beyond numbers, manipulating symbols and musical compositions.',
        },
      },
    ],
  },
  {
    year: 1844,
    era: { pt: 'O Primeiro Ping da História', en: 'History\'s First Ping' },
    context: {
      pt: 'Em 24 de maio de 1844, uma mensagem de 35 letras percorreu 60 km de fio de cobre entre Washington e Baltimore — e mudou para sempre a relação da humanidade com a distância, o tempo e a informação.',
      en: 'On May 24, 1844, a 35-letter message traveled 60 km of copper wire between Washington and Baltimore — forever changing humanity\'s relationship with distance, time and information.',
    },
    people: [
      {
        name: 'Samuel Morse',
        image: HALL_IMAGES.year1844.samuelMorse,
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Arte Liberal, Yale College (1810) · Belas Artes, Royal Academy of Arts, Londres',
          en: 'Liberal Arts, Yale College (1810) · Fine Arts, Royal Academy of Arts, London',
        },
        summary: {
          pt: 'Enviou o primeiro "ping" da história — fundando a primeira rede de comunicação binária de longa distância do mundo',
          en: 'Sent history\'s first "ping" — founding the world\'s first long-distance binary communication network',
        },
        role: {
          pt: 'Inventor, pintor e pai das telecomunicações',
          en: 'Inventor, painter and father of telecommunications',
        },
        contribution: {
          pt: 'Em 24 de maio de 1844, enviou a primeira mensagem oficial de telégrafo da história: "What hath God wrought?" — de Washington D.C. ao B&O Pratt Street Station em Baltimore, 60 km de distância. Com o Código Morse, criou a primeira linguagem binária de comunicação de dados de longa distância da humanidade.',
          en: 'On May 24, 1844, he sent the first official telegraph message in history: "What hath God wrought?" — from Washington D.C. to the B&O Pratt Street Station in Baltimore, 60 km away. With Morse Code, he created humanity\'s first long-distance binary data communication language.',
        },
        detail: {
          pt: 'Samuel Morse não era engenheiro — era um pintor consagrado, premiado pela Royal Academy of Arts de Londres e autor de retratos célebres de Lafayette. A ideia do telégrafo elétrico surgiu em 1832 durante uma travessia de navio, quando ouviu conversas sobre experimentos de eletromagnetismo e percebeu que impulsos elétricos poderiam transportar informação a qualquer distância. Ele passou doze anos desenvolvendo o sistema, com contribuição fundamental do seu assistente Alfred Vail, que aperfeiçoou o hardware e simplificou o código — trocando o sistema numérico original de Morse pela elegante lógica de pontos e traços que conhecemos hoje.\n\nO texto da mensagem histórica foi sugerido por Annie Ellsworth, filha do comissário de patentes, e retirado do livro de Números (23:23) da Bíblia. Morse enviou do Capitólio em Washington; Vail recebeu e confirmou em Baltimore. A fita original da mensagem está preservada na Library of Congress.\n\nO Código Morse é, na essência, um sistema binário: ponto (sinal curto) e traço (sinal longo), combinados para representar letras e números — a mesma lógica fundamental de 0s e 1s que governa todo processador moderno. Em menos de vinte anos após aquela primeira mensagem, o telégrafo havia conectado os EUA de costa a costa. Em 1866, um cabo transatlântico ligou a América à Europa, reduzindo a comunicação entre continentes de duas semanas para dois minutos. Sem essa fundação, a internet não existiria.',
          en: 'Samuel Morse was not an engineer — he was an accomplished painter, awarded by the Royal Academy of Arts in London and the author of celebrated portraits of Lafayette. The idea of the electric telegraph arose in 1832 during an ocean crossing, when he overheard conversations about electromagnetism experiments and realized that electrical pulses could carry information over any distance. He spent twelve years developing the system, with crucial contributions from his assistant Alfred Vail, who improved the hardware and simplified the code — replacing Morse\'s original numerical system with the elegant dot-and-dash logic we know today.\n\nThe text of the historic message was suggested by Annie Ellsworth, daughter of the patent commissioner, taken from the book of Numbers (23:23) in the Bible. Morse transmitted from the Capitol in Washington; Vail received and confirmed in Baltimore. The original message tape is preserved at the Library of Congress.\n\nMorse Code is, in essence, a binary system: dot (short signal) and dash (long signal), combined to represent letters and numbers — the same fundamental logic of 0s and 1s that governs every modern processor. Within twenty years of that first message, the telegraph had connected the US coast to coast. In 1866, a transatlantic cable linked America to Europe, reducing cross-continental communication from two weeks to two minutes. Without this foundation, the internet would not exist.',
        },
        additionalImage: {
          src: HALL_IMAGES.year1844.firstPing,
          caption: {
            pt: 'A fita original de papel do receptor de telégrafo, registrando em pontos e traços do Código Morse a chegada da mensagem "What hath God wrought?" em Baltimore — o primeiro "ping" da história da humanidade, impresso fisicamente pelo próprio mecanismo da máquina.',
            en: 'The original paper tape from the telegraph receiver, recording in Morse Code dots and dashes the arrival of "What hath God wrought?" in Baltimore — history\'s first "ping", physically printed by the machine\'s own mechanism.',
          },
        },
      },
    ],
  },
  {
    year: 1845,
    era: { pt: 'A Primeira Empresa de Telecomunicações', en: 'The First Telecommunications Company' },
    context: {
      pt: 'Um ano após o primeiro ping da história, Morse transformou o experimento em negócio — fundando a primeira empresa comercial de telecomunicações do mundo e iniciando a corrida para conectar as cidades americanas por fio.',
      en: 'One year after history\'s first ping, Morse turned the experiment into a business — founding the world\'s first commercial telecommunications company and starting the race to connect American cities by wire.',
    },
    people: [
      {
        name: 'Samuel Morse',
        image: HALL_IMAGES.year1845.samuelMorse,
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Arte Liberal, Yale College (1810) · Belas Artes, Royal Academy of Arts, Londres',
          en: 'Liberal Arts, Yale College (1810) · Fine Arts, Royal Academy of Arts, London',
        },
        summary: {
          pt: 'Fundou a Magnetic Telegraph Company — a primeira empresa comercial de telecomunicações da história',
          en: 'Founded the Magnetic Telegraph Company — the first commercial telecommunications company in history',
        },
        role: {
          pt: 'Inventor, pintor e pai das telecomunicações',
          en: 'Inventor, painter and father of telecommunications',
        },
        contribution: {
          pt: 'Em 26 de março de 1845, Morse e seus sócios incorporaram a Magnetic Telegraph Company, a primeira empresa comercial de telecomunicações da história. A empresa começou a construir linhas de telégrafo para uso público, conectando Nova York, Filadélfia, Baltimore e Washington — criando o modelo de negócio que toda a indústria de comunicações seguiria.',
          en: 'On March 26, 1845, Morse and his partners incorporated the Magnetic Telegraph Company, the first commercial telecommunications company in history. The company began building telegraph lines for public use, connecting New York, Philadelphia, Baltimore and Washington — creating the business model that the entire communications industry would follow.',
        },
        detail: {
          pt: 'O salto de 1844 para 1845 foi o salto do laboratório para o mercado. Morse sabia que a tecnologia funcionava — o problema era escalar. Com Amos Kendall como gestor de negócios, a Magnetic Telegraph Company foi a primeira a provar que comunicação instantânea podia ser vendida como serviço. A notícia da fundação correu os jornais americanos: a ideia de que qualquer pessoa poderia enviar uma mensagem de Nova York para Washington em minutos era simplesmente inacreditável para a época.\n\nO modelo funcionou. Em poucos anos, dezenas de empresas imitaram o formato. Em 1851, havia mais de cinquenta companhias de telégrafo operando só nos EUA. A concorrência acelerou a expansão das linhas: em 1861, um cabo conectou a costa leste à costa oeste americana, tornando o Pony Express obsoleto da noite para o dia.\n\nA Western Union, fundada em 1851, consolidou todo esse mercado fragmentado em 1866 — tornando-se a primeira grande corporação de telecomunicações do mundo. Tudo isso nasceu do modelo que Morse inaugurou em 1845: infraestrutura de comunicação como serviço pago, disponível ao público. É exatamente esse modelo que ainda governa operadoras, provedores de internet e plataformas digitais hoje.',
          en: 'The leap from 1844 to 1845 was the leap from the laboratory to the market. Morse knew the technology worked — the problem was scaling it. With Amos Kendall as business manager, the Magnetic Telegraph Company was the first to prove that instant communication could be sold as a service. News of the founding spread across American newspapers: the idea that anyone could send a message from New York to Washington in minutes was simply unbelievable at the time.\n\nThe model worked. Within a few years, dozens of companies copied the format. By 1851, there were over fifty telegraph companies operating in the US alone. Competition accelerated line expansion: by 1861, a cable connected the American east coast to the west coast, making the Pony Express obsolete overnight.\n\nWestern Union, founded in 1851, consolidated this fragmented market in 1866 — becoming the world\'s first major telecommunications corporation. All of this was born from the model Morse inaugurated in 1845: communication infrastructure as a paid service, available to the public. That is exactly the model that still governs carriers, internet providers and digital platforms today.',
        },
        additionalImage: {
          src: HALL_IMAGES.year1845.firstCompanyTelegraph,
          caption: {
            pt: 'Notícia de jornal da época cobrindo a fundação da Magnetic Telegraph Company em 1845 — o anúncio público da primeira empresa comercial de telecomunicações da história, que transformou uma invenção de laboratório em serviço acessível ao cidadão comum.',
            en: 'Period newspaper coverage of the founding of the Magnetic Telegraph Company in 1845 — the public announcement of the first commercial telecommunications company in history, which transformed a laboratory invention into a service accessible to the ordinary citizen.',
          },
        },
      },
    ],
  },
  {
    year: 1846,
    era: { pt: 'O Primeiro Salto de Largura de Banda', en: 'The First Bandwidth Leap' },
    context: {
      pt: 'Dois anos após o primeiro ping da história, um relojoeiro escocês autodidata patenteou um sistema que multiplicou por vinte e cinco a velocidade de transmissão de dados — e introduziu sem saber o conceito de processamento em lote que os computadores usariam 100 anos depois.',
      en: 'Two years after history\'s first ping, a self-taught Scottish clockmaker patented a system that multiplied data transmission speed by twenty-five — and unknowingly introduced the concept of batch processing that computers would use 100 years later.',
    },
    people: [
      {
        name: 'Alexander Bain',
        image: HALL_IMAGES.year1846.alexanderBain,
        flag: '🇬🇧',
        nationality: { pt: 'Escocês', en: 'Scottish' },
        formation: {
          pt: 'Aprendiz de relojoeiro em Wick, Escócia · Autodidata em Elétrica e Mecânica, Londres',
          en: 'Clockmaker apprentice in Wick, Scotland · Self-taught in Electricity and Mechanics, London',
        },
        summary: {
          pt: 'Inventou o telégrafo químico: saltou de 40 para mais de 1.000 palavras por minuto e criou a fita perfurada — mídia que os primeiros computadores usariam um século depois',
          en: 'Invented the chemical telegraph: jumped from 40 to over 1,000 words per minute and created the punched tape — the medium early computers would use a century later',
        },
        role: {
          pt: 'Inventor, relojoeiro e pioneiro do processamento automatizado de dados',
          en: 'Inventor, clockmaker and pioneer of automated data processing',
        },
        contribution: {
          pt: 'Patenteou o telégrafo químico em 12 de dezembro de 1846, introduzindo dois conceitos revolucionários: a fita de papel perfurada para pré-gravar e transmitir dados automaticamente, e o papel tratado quimicamente para registrar a mensagem no receptor — atingindo 325 palavras por minuto de imediato e mais de 1.000 wpm nas versões refinadas. O telégrafo de Morse transmitia 40.',
          en: 'Patented the chemical telegraph on December 12, 1846, introducing two revolutionary concepts: the punched paper tape to pre-record and automatically transmit data, and chemically treated paper to register the message at the receiver — achieving 325 words per minute immediately and over 1,000 wpm in refined versions. Morse\'s telegraph transmitted 40.',
        },
        detail: {
          pt: 'Alexander Bain nasceu em 1810 em Watten, na remota Caithness escocesa, filho de um pequeno agricultor. Aprendiz de relojoeiro por sete anos em Wick, mudou-se para Londres em 1837 sem dinheiro e sem conexões — apenas com a obsessão por mecânica e eletricidade. Em 1841, patenteou o primeiro relógio elétrico da história. Em 1843, inventou o fax: dois pêndulos sincronizados que escaneavam e reproduziam imagens à distância, décadas antes de qualquer concorrente.\n\nMas foi em 1846 que Bain mudou o jogo das comunicações. O telégrafo de Morse dependia de um operador humano batendo manualmente no manipulador para enviar cada sinal. Bain eliminou o operador do processo: os dados eram pré-gravados perfurando furos em uma fita de papel, que depois passava por um mecanismo automático. Do outro lado, em vez de um mecanismo mecânico, havia papel embebido em nitrato de amônio e ferrocianeto de potássio — a eletricidade deixava marcas coloridas instantaneamente. Era mais rápido, mais barato e mais confiável.\n\nO conceito da fita perfurada como meio de armazenar e transmitir dados foi a sua herança mais profunda. O Colossus britânico de 1944 lia 5.000 caracteres por segundo em fita de papel. O ENIAC e quase todos os computadores das décadas de 1940 a 1970 usaram fita perfurada como entrada e saída padrão de dados. Bain inventou a ideia um século antes.\n\nA história de Bain tem um final amargo. Em 1848, viajou à América para patentear suas invenções e foi destruído juridicamente pela máquina de Morse, que controlava o mercado e os políticos. A Suprema Corte dos EUA decidiu contra ele em 1853. Voltou a Londres com uma dívida de $58.000. Morreu quase na pobreza em 1877 — ignorado pela história enquanto Morse era celebrado. Ironicamente, a limitação que a Corte impôs ao monopólio de Morse para derrotá-lo foi a mesma que abriu caminho para o telefone, a televisão e o computador.',
          en: 'Alexander Bain was born in 1810 in Watten, in the remote Scottish Caithness, the son of a small farmer. A clockmaker\'s apprentice for seven years in Wick, he moved to London in 1837 with no money and no connections — only an obsession with mechanics and electricity. In 1841, he patented the first electric clock in history. In 1843, he invented the fax: two synchronized pendulums that scanned and reproduced images at a distance, decades ahead of any competitor.\n\nBut it was in 1846 that Bain changed the communications game. Morse\'s telegraph relied on a human operator manually tapping the key to send each signal. Bain removed the operator from the process: data was pre-recorded by punching holes in a paper tape, which then passed through an automatic mechanism. On the receiving end, instead of a mechanical device, there was paper soaked in ammonium nitrate and potassium ferrocyanide — electricity left colored marks instantly. It was faster, cheaper and more reliable.\n\nThe concept of the punched tape as a medium for storing and transmitting data was his deepest legacy. Britain\'s Colossus of 1944 read 5,000 characters per second from paper tape. The ENIAC and virtually all computers of the 1940s through 1970s used punched tape as standard data input and output. Bain invented the idea a century earlier.\n\nBain\'s story has a bitter ending. In 1848, he traveled to America to patent his inventions and was legally destroyed by the Morse machine, which controlled both the market and the politicians. The US Supreme Court decided against him in 1853. He returned to London with a $58,000 debt. He died nearly in poverty in 1877 — ignored by history while Morse was celebrated. Ironically, the limitation the Court imposed on Morse\'s monopoly to defeat him was the same one that opened the path for the telephone, television and the computer.',
        },
        additionalImage: {
          src: HALL_IMAGES.year1846.chemicalTelegraph,
          caption: {
            pt: 'O telégrafo químico de Bain: à esquerda, o mecanismo transmissor que puxava automaticamente a fita de papel perfurada; à direita, o receptor com o papel tratado quimicamente que registrava a mensagem através de reação eletroquímica. A velocidade desse sistema foi o equivalente a passar de um modem dial-up para banda larga — em 1846.',
            en: 'Bain\'s chemical telegraph: on the left, the transmitter mechanism that automatically pulled the punched paper tape; on the right, the receiver with chemically treated paper that recorded the message through an electrochemical reaction. The speed of this system was the equivalent of going from a dial-up modem to broadband — in 1846.',
          },
        },
      },
    ],
  },
  {
    year: 1847,
    era: { pt: 'A Matemática que Virou Código', en: 'The Mathematics That Became Code' },
    context: {
      pt: 'Um professor autodidata de Lincoln publicou um livro que a maioria dos matemáticos ignorou por décadas. Noventa anos depois, um estudante de 21 anos do MIT leu aquelas páginas e percebeu que elas descreviam exatamente como construir um computador.',
      en: 'A self-taught professor from Lincoln published a book that most mathematicians ignored for decades. Ninety years later, a 21-year-old MIT student read those pages and realized they described exactly how to build a computer.',
    },
    people: [
      {
        name: 'George Boole',
        image: HALL_IMAGES.year1847.georgeBoole,
        flag: '🇬🇧',
        nationality: { pt: 'Inglês', en: 'English' },
        formation: {
          pt: 'Autodidata em Matemática e Lógica · Primeiro Catedrático de Matemática, Queen\'s College Cork (sem graduação prévia)',
          en: 'Self-taught in Mathematics and Logic · First Professor of Mathematics, Queen\'s College Cork (no prior university degree)',
        },
        summary: {
          pt: 'Criou a álgebra booleana — o sistema Verdadeiro/Falso que está dentro de todo processador e de todo if/else já escrito',
          en: 'Created Boolean algebra — the True/False system inside every processor and every if/else ever written',
        },
        role: {
          pt: 'Matemático e criador da lógica booleana',
          en: 'Mathematician and creator of Boolean logic',
        },
        contribution: {
          pt: 'Publicou "The Mathematical Analysis of Logic" em 1847, criando um sistema matemático baseado em apenas dois estados — Verdadeiro e Falso — e os operadores AND, OR e NOT. Era a primeira vez na história que lógica e matemática eram unificadas numa álgebra formal. Todo if/else já escrito e toda porta lógica de todo processador moderno rodam sobre essa fundação.',
          en: 'Published "The Mathematical Analysis of Logic" in 1847, creating a mathematical system based on only two states — True and False — and the AND, OR and NOT operators. It was the first time in history that logic and mathematics were unified in a formal algebra. Every if/else ever written and every logic gate in every modern processor runs on this foundation.',
        },
        detail: {
          pt: 'George Boole nasceu em 1815 em Lincoln, Inglaterra, filho de um sapateiro. Sem dinheiro para a universidade, aprendeu latim, grego, francês, alemão e italiano sozinho, e dominou a matemática por conta própria. Em 1849, foi nomeado o primeiro professor de matemática do Queen\'s College Cork, na Irlanda — sem nunca ter tido um diploma universitário. Seu mentor intelectual era Augustus De Morgan, o mesmo que tutoriou Ada Lovelace.\n\nO livro de 1847 foi apenas o início. Em 1854, publicou "An Investigation of the Laws of Thought", a versão completa e corrigida do sistema — hoje chamado de álgebra de Boole. A ideia central era elegante e radical: qualquer raciocínio lógico pode ser reduzido a operações matemáticas sobre dois valores. AND, OR e NOT eram as peças. Com essas três operações, qualquer condição, qualquer decisão, qualquer circuito pode ser representado.\n\nO problema foi que ninguém ligou por noventa anos. A matemática do século XIX era dominada por quem achava que lógica era filosofia, não cálculo. Boole morreu em 1864, aos 49 anos, de pneumonia — ele havia caminhado sob chuva para não faltar a uma aula, e sua esposa, seguindo crenças homeopáticas, o tratou jogando baldes de água fria nele. A filha do casal documentou o episódio.\n\nA virada veio em 1937. Claude Shannon, com 21 anos, escreveu sua dissertação de mestrado no MIT mostrando que a álgebra booleana descrevia perfeitamente o comportamento de circuitos elétricos com relés — ligado/desligado, 1/0, Verdadeiro/Falso. A dissertação é considerada a mais importante da história da engenharia. Naquele momento, o trabalho de Boole deixou de ser abstração matemática e se tornou a planta baixa do hardware moderno. Cada AND, OR e NOT que você escreve no código é executado literalmente como uma porta lógica no silício.',
          en: 'George Boole was born in 1815 in Lincoln, England, the son of a shoemaker. With no money for university, he taught himself Latin, Greek, French, German and Italian, and mastered mathematics on his own. In 1849, he was appointed the first professor of mathematics at Queen\'s College Cork, Ireland — without ever having held a university degree. His intellectual mentor was Augustus De Morgan, the same person who tutored Ada Lovelace.\n\nThe 1847 book was only the beginning. In 1854, he published "An Investigation of the Laws of Thought," the complete and corrected version of the system — now called Boolean algebra. The central idea was elegant and radical: any logical reasoning can be reduced to mathematical operations on two values. AND, OR and NOT were the pieces. With these three operations, any condition, any decision, any circuit can be represented.\n\nThe problem was that nobody cared for ninety years. 19th-century mathematics was dominated by those who thought logic was philosophy, not calculus. Boole died in 1864, aged 49, from pneumonia — he had walked in the rain to avoid missing a lecture, and his wife, following homeopathic beliefs, treated him by pouring buckets of cold water over him. The couple\'s daughter documented the episode.\n\nThe turning point came in 1937. Claude Shannon, aged 21, wrote his MIT master\'s dissertation showing that Boolean algebra perfectly described the behavior of electrical circuits with relays — on/off, 1/0, True/False. The dissertation is considered the most important in the history of engineering. At that moment, Boole\'s work ceased to be mathematical abstraction and became the blueprint for modern hardware. Every AND, OR and NOT you write in code is executed literally as a logic gate in silicon.',
        },
        additionalImage: {
          src: HALL_IMAGES.year1847.mathematicalAnalysisOfLogic,
          caption: {
            pt: 'A capa original de "The Mathematical Analysis of Logic" (1847) — o panfleto de 82 páginas que George Boole publicou por conta própria e que contém, em linguagem matemática do século XIX, a fundação lógica de todo computador que já existiu ou existirá.',
            en: 'The original cover of "The Mathematical Analysis of Logic" (1847) — the 82-page pamphlet that George Boole self-published, containing, in 19th-century mathematical language, the logical foundation of every computer that has ever existed or will exist.',
          },
        },
      },
    ],
  },
  {
    year: 1848,
    era: { pt: 'O Cálculo da Lógica', en: 'The Calculus of Logic' },
    context: {
      pt: 'Depois de lançar a base em 1847, George Boole publicou um ensaio curto e decisivo em 1848: "The Calculus of Logic". Ali, ele deixou mais claro que a lógica podia ser operada como cálculo — uma ideia que, décadas depois, encontraria seu corpo físico nos circuitos digitais.',
      en: 'After laying the foundation in 1847, George Boole published a short and decisive essay in 1848: "The Calculus of Logic." There, he made clearer that logic could be operated as calculus — an idea that, decades later, would find its physical body in digital circuits.',
    },
    people: [
      {
        name: 'George Boole',
        image: HALL_IMAGES.year1848.georgeBoole,
        flag: '🇬🇧',
        nationality: { pt: 'Inglês', en: 'English' },
        formation: {
          pt: 'Autodidata em Matemática e Lógica · Primeiro Catedrático de Matemática, Queen\'s College Cork (sem graduação prévia)',
          en: 'Self-taught in Mathematics and Logic · First Professor of Mathematics, Queen\'s College Cork (no prior university degree)',
        },
        summary: {
          pt: 'Publicou "The Calculus of Logic", consolidando a ideia de tratar Verdadeiro/Falso, AND, OR e NOT como operações matemáticas',
          en: 'Published "The Calculus of Logic," consolidating the idea of treating True/False, AND, OR and NOT as mathematical operations',
        },
        role: {
          pt: 'Matemático e criador da lógica booleana',
          en: 'Mathematician and creator of Boolean logic',
        },
        contribution: {
          pt: 'Em 1847, George Boole lançou "The Mathematical Analysis of Logic" e, logo em seguida, em 1848, publicou o ensaio "The Calculus of Logic" no Cambridge and Dublin Mathematical Journal. Nesse texto, ele reforçou a ideia de uma lógica calculável: classes, proposições e relações podiam ser manipuladas por símbolos e regras algébricas. É o chão matemático por trás de True e False, IF, AND, OR e NOT, filtros de dados e circuitos binários de 0 e 1.',
          en: 'In 1847, George Boole released "The Mathematical Analysis of Logic" and, soon after, in 1848, published the essay "The Calculus of Logic" in the Cambridge and Dublin Mathematical Journal. In that text, he reinforced the idea of calculable logic: classes, propositions and relations could be manipulated through symbols and algebraic rules. It is the mathematical ground behind True and False, IF, AND, OR and NOT, data filters and binary 0/1 circuits.',
        },
        detail: {
          pt: '"The Calculus of Logic" não era uma troca de assunto: era Boole voltando ao próprio livro de 1847 para explicar melhor o núcleo da invenção. Logo na abertura, ele diz que havia apresentado uma nova forma de matemática aplicada às operações da mente no raciocínio; agora queria dar uma visão mais direta da natureza daquele sistema. O alvo era transformar lógica, que por séculos tinha sido tratada como território da filosofia, em uma linguagem formal que pudesse ser calculada.\n\nA peça central era pensar em classes e proposições como objetos manipuláveis. Em vez de depender apenas de frases como "todo A é B" ou "nenhum A é C", Boole usava símbolos e operações. A interseção de classes se comportava como multiplicação; a união, em certas condições, como soma; a negação entrava como complemento. Hoje isso aparece para a gente como AND, OR e NOT. Para Boole, era uma tentativa de mostrar que o pensamento lógico tinha leis matemáticas.\n\nPor que isso importa hoje? Porque quase tudo em programação e computação digital descansa sobre essa redução brutalmente poderosa: decisões complexas podem ser quebradas em valores lógicos. Um IF em Python, um filtro em SQL, uma busca com operadores booleanos, uma porta AND dentro de um processador e o fluxo elétrico que alterna entre 0 e 1 estão todos falando, com sotaque moderno, a língua que Boole começou a formalizar.\n\nA ironia é bonita: Boole não estava tentando inventar computadores. Ele estava tentando entender o raciocínio. Mas quando Claude Shannon mostrou, em 1937, que a álgebra de Boole descrevia circuitos elétricos com relés, o ensaio filosófico-matemático virou engenharia. Sem essa ponte entre lógica e álgebra, a arquitetura de computadores como conhecemos não teria o mesmo alicerce.',
          en: '"The Calculus of Logic" was not a change of subject: it was Boole returning to his own 1847 book to explain the core of the invention more clearly. At the opening, he says he had presented a new form of mathematics applied to the operations of the mind in reasoning; now he wanted to give a more direct account of the nature of that system. The target was to turn logic, which for centuries had been treated as philosophical territory, into a formal language that could be calculated.\n\nThe central move was to think of classes and propositions as manipulable objects. Instead of relying only on sentences such as "all A is B" or "no A is C," Boole used symbols and operations. The intersection of classes behaved like multiplication; union, under certain conditions, like addition; negation entered as complement. Today, we see that as AND, OR and NOT. For Boole, it was an attempt to show that logical thought had mathematical laws.\n\nWhy does this matter today? Because almost everything in programming and digital computing rests on this brutally powerful reduction: complex decisions can be broken into logical values. An IF in Python, a SQL filter, a search with Boolean operators, an AND gate inside a processor and the electric flow alternating between 0 and 1 are all speaking, in a modern accent, the language Boole began to formalize.\n\nThe irony is beautiful: Boole was not trying to invent computers. He was trying to understand reasoning. But when Claude Shannon showed in 1937 that Boole\'s algebra described electrical circuits with relays, the philosophical-mathematical essay became engineering. Without that bridge between logic and algebra, computer architecture as we know it would not have the same foundation.',
        },
        additionalImage: {
          src: HALL_IMAGES.year1848.calculusOfLogic,
          caption: {
            pt: 'A página de "The Calculus of Logic" (1848), ensaio publicado por George Boole no Cambridge and Dublin Mathematical Journal, vol. III, pp. 183-198. É uma versão mais direta e concentrada da ideia que ele havia lançado no ano anterior: transformar lógica em cálculo.',
            en: 'The page from "The Calculus of Logic" (1848), an essay published by George Boole in the Cambridge and Dublin Mathematical Journal, vol. III, pp. 183-198. It is a more direct and concentrated version of the idea he had launched the year before: turning logic into calculus.',
          },
        },
      },
    ],
  },
  {
    year: 1849,
    era: { pt: 'O Computador Mecânico que Esperou 142 Anos', en: 'The Mechanical Computer That Waited 142 Years' },
    context: {
      pt: 'Enquanto Boole colocava a lógica em forma algébrica, Charles Babbage fechava o desenho mais elegante de uma máquina de calcular automática. Em 1849, a Difference Engine No. 2 estava pronta no papel — faltavam apenas a indústria, o dinheiro e o século certo.',
      en: 'While Boole was giving logic an algebraic form, Charles Babbage was completing the most elegant design for an automatic calculating machine. In 1849, Difference Engine No. 2 was ready on paper — it lacked only the industry, the money and the right century.',
    },
    people: [
      {
        name: 'Charles Babbage',
        image: HALL_IMAGES.year1849.charlesBabbage,
        flag: '🇬🇧',
        nationality: { pt: 'Britânico', en: 'British' },
        formation: {
          pt: 'Matemática, Trinity College Cambridge · BA, Peterhouse Cambridge · MA, Cambridge · Lucasian Professor de Matemática (1828-1839)',
          en: 'Mathematics, Trinity College Cambridge · BA, Peterhouse Cambridge · MA, Cambridge · Lucasian Professor of Mathematics (1828-1839)',
        },
        summary: {
          pt: 'Concluiu o projeto da Difference Engine No. 2 — uma calculadora mecânica automática capaz de calcular e imprimir tabelas matemáticas',
          en: 'Completed the design of Difference Engine No. 2 — an automatic mechanical calculator capable of calculating and printing mathematical tables',
        },
        role: {
          pt: 'Matemático, inventor e pioneiro da computação mecânica',
          en: 'Mathematician, inventor and pioneer of mechanical computing',
        },
        contribution: {
          pt: 'Entre 1847 e 1849, Charles Babbage projetou a Difference Engine No. 2, uma máquina puramente mecânica feita para calcular valores numéricos e produzir tabelas matemáticas automaticamente. O projeto incluía também um aparato de saída capaz de imprimir os resultados, reduzindo erros humanos de cálculo, cópia e composição tipográfica.',
          en: 'Between 1847 and 1849, Charles Babbage designed Difference Engine No. 2, a purely mechanical machine intended to calculate numerical values and automatically produce mathematical tables. The design also included output apparatus capable of printing the results, reducing human errors in calculation, copying and typesetting.',
        },
        detail: {
          pt: 'Charles Babbage nasceu em 1791, em Londres, filho de um banqueiro. Entrou no Trinity College, Cambridge, em 1810 para estudar matemática, transferiu-se para Peterhouse e se formou em 1814. Mais tarde, foi Lucasian Professor de Matemática em Cambridge — a mesma cátedra que já havia sido ocupada por Isaac Newton. Seu incômodo central era simples e enorme: tabelas astronômicas, náuticas e de engenharia eram calculadas por humanos, copiadas por humanos e impressas por humanos. Cada etapa introduzia erro.\n\nA Difference Engine No. 2 foi a versão refinada dessa obsessão. Babbage já havia passado anos tentando construir sua primeira Máquina Diferencial, mas o projeto era caro, complexo e dependia de uma precisão de usinagem difícil para a época. A segunda versão, desenhada entre 1847 e 1849, era mais elegante: aproveitava aprendizados da Máquina Analítica e reduzia drasticamente a complexidade em relação ao primeiro projeto. Ela calculava tabelas por diferenças finitas, sem precisar multiplicar ou dividir diretamente, usando colunas de engrenagens para propagar valores.\n\nPor que isso importa hoje? Porque a máquina atacava três problemas que continuam centrais em computação: automatizar cálculo, armazenar estado mecânico e produzir saída confiável. Não era um computador programável como a Máquina Analítica, mas era uma máquina automática de processamento numérico. E o detalhe quase absurdo: Babbage também desenhou um mecanismo de impressão. A ideia não era só calcular; era calcular e registrar o resultado sem que uma pessoa introduzisse erro no meio do caminho.\n\nBabbage nunca construiu essa versão em vida. Faltavam financiamento, estabilidade política, apoio institucional e uma indústria de precisão madura o bastante. Mas as plantas eram reais. Em 1985, o Science Museum de Londres começou a construir a máquina a partir dos desenhos originais. Em junho de 1991, a seção calculadora funcionou para o bicentenário do nascimento de Babbage; em 2002, o mecanismo de impressão foi concluído e acoplado. A máquina provou uma coisa poderosa: o projeto de 1849 não era fantasia vitoriana. Era engenharia esperando o mundo alcançar seu nível.',
          en: 'Charles Babbage was born in 1791 in London, the son of a banker. He entered Trinity College, Cambridge, in 1810 to study mathematics, transferred to Peterhouse and graduated in 1814. He later became Lucasian Professor of Mathematics at Cambridge — the same chair once held by Isaac Newton. His central irritation was simple and enormous: astronomical, nautical and engineering tables were calculated by humans, copied by humans and printed by humans. Every step introduced error.\n\nDifference Engine No. 2 was the refined version of that obsession. Babbage had already spent years trying to build his first Difference Engine, but the project was expensive, complex and dependent on machining precision that was difficult for the time. The second version, designed between 1847 and 1849, was more elegant: it used lessons from the Analytical Engine and drastically reduced the complexity of the first design. It calculated tables through finite differences, without needing to multiply or divide directly, using columns of gears to propagate values.\n\nWhy does this matter today? Because the machine attacked three problems that remain central to computing: automating calculation, storing mechanical state and producing reliable output. It was not a programmable computer like the Analytical Engine, but it was an automatic machine for numerical processing. And the almost absurd detail: Babbage also designed a printing mechanism. The idea was not just to calculate; it was to calculate and record the result without a person introducing errors along the way.\n\nBabbage never built this version in his lifetime. Funding, political stability, institutional support and a precision industry mature enough for the work were missing. But the plans were real. In 1985, London\'s Science Museum began building the machine from the original drawings. In June 1991, the calculating section worked for the bicentenary of Babbage\'s birth; in 2002, the printing mechanism was completed and attached. The machine proved something powerful: the 1849 design was not Victorian fantasy. It was engineering waiting for the world to catch up.',
        },
        additionalImage: {
          src: HALL_IMAGES.year1849.differenceEngine2,
          caption: {
            pt: 'A Difference Engine No. 2 de Babbage, projetada entre 1847 e 1849 e construída pelo Science Museum a partir das plantas originais. A seção calculadora foi concluída em 1991; o mecanismo de impressão, parte integral do projeto, foi adicionado em 2002.',
            en: 'Babbage\'s Difference Engine No. 2, designed between 1847 and 1849 and built by the Science Museum from the original plans. The calculating section was completed in 1991; the printing mechanism, an integral part of the design, was added in 2002.',
          },
        },
      },
    ],
  },
  {
    year: 1850,
    era: { pt: 'Cabos no Mar, Pombos no Ar', en: 'Cables at Sea, Pigeons in the Air' },
    context: {
      pt: 'Em 1850, a rede mundial começou a aprender dois truques que ainda usamos: atravessar oceanos com cabos físicos e contornar falhas de infraestrutura com rotas alternativas. De um lado, os irmãos Brett provaram que era possível mandar sinais elétricos sob o mar; do outro, Paul Julius Reuter transformou pombos-correio em uma ponte de dados entre redes telegráficas.',
      en: 'In 1850, the global network began learning two tricks we still use: crossing oceans with physical cables and routing around infrastructure gaps with alternative links. On one side, the Brett brothers proved that electrical signals could travel under the sea; on the other, Paul Julius Reuter turned carrier pigeons into a data bridge between telegraph networks.',
    },
    peopleCount: 3,
    people: [
      {
        name: 'John Watkins Brett & Jacob Brett',
        images: [
          { src: HALL_IMAGES.year1850.johnBrett, alt: 'John Watkins Brett' },
          { src: HALL_IMAGES.year1850.jacobBrett, alt: 'Jacob Brett' },
        ],
        flag: '🇬🇧',
        nationality: { pt: 'Britânicos', en: 'British' },
        formation: {
          pt: 'John: formação prática em telegrafia e negócios · Jacob: inventor prático, patentes em telégrafo impressor, ferrovias atmosféricas e comunicação submarina',
          en: 'John: practical training in telegraphy and business · Jacob: practical inventor, patents in printing telegraphs, atmospheric railways and submarine communication',
        },
        summary: {
          pt: 'Lançaram juntos o primeiro cabo submarino telegráfico internacional entre Inglaterra e França',
          en: 'Together, they laid the first international submarine telegraph cable between England and France',
        },
        role: {
          pt: 'Pioneiros da telegrafia submarina',
          en: 'Pioneers of submarine telegraphy',
        },
        contribution: {
          pt: 'Em 28 de agosto de 1850, John Watkins Brett e seu irmão Jacob lançaram um fio de cobre isolado com guta-percha pelo Canal da Mancha, ligando Dover, na Inglaterra, a Cap Gris-Nez, perto de Calais, na França. A conexão durou pouco, mas provou que uma rede internacional podia atravessar o fundo do mar.',
          en: 'On August 28, 1850, John Watkins Brett and his brother Jacob laid a copper wire insulated with gutta-percha across the English Channel, linking Dover in England to Cap Gris-Nez near Calais in France. The connection lasted only briefly, but it proved that an international network could cross the seabed.',
        },
        detail: {
          pt: 'John Watkins Brett nasceu em Bristol, em 1805, filho de um marceneiro. Jacob Brett nasceu em 1808 e aparece na história como o irmão mais silencioso, mas não como figurante: antes do cabo submarino, já havia se envolvido com patentes mecânicas, telégrafos impressores e projetos de comunicação "oceânica e subterrânea". A dupla funcionava bem porque juntava ambição empresarial, concessões políticas e uma vontade meio teimosa de provar que o mar podia virar infraestrutura.\n\nAinda nos anos 1840, os irmãos defendiam a ideia de unir Inglaterra e França por telégrafo submarino, mesmo quando muita gente tratava isso como uma aposta cara demais, frágil demais e talvez impossível. Em 1847, buscaram permissão de Louis-Philippe; em 1849, conseguiram de Louis-Napoléon Bonaparte uma concessão mais forte para a rota. Em 1850, colocaram a hipótese no mar.\n\nA peça que mudou o jogo foi a guta-percha, um material natural que funcionava muito melhor como isolante elétrico sob água do que as alternativas anteriores. O cabo de 1850 era absurdamente simples para os padrões modernos: um único fio de cobre, isolado, sem armadura metálica, mantido no fundo por pesos de chumbo. Era mais prova de conceito do que produto final.\n\nE a prova funcionou. A linha permitiu transmitir mensagens pelo Canal da Mancha, incluindo uma saudação a Louis-Napoléon Bonaparte, então presidente da França. Poucas horas depois, ou na primeira noite segundo registros do Science Museum, o cabo falhou. A versão mais famosa do bug é deliciosa: um pescador francês teria puxado o cabo, achado que era uma alga estranha com metal valioso dentro e cortado um pedaço. Rede fora do ar.\n\nMas, em infraestrutura, uma falha útil pode valer ouro. O experimento mostrou que o problema não era a ideia, era a engenharia de produção. No ano seguinte, em 1851, um cabo muito mais robusto, com armadura, colocou a comunicação Dover-Calais em operação. A lógica que nasceu ali é a mesma que sustenta a internet global: continentes conversando por cabos físicos no fundo do mar.',
          en: 'John Watkins Brett was born in Bristol in 1805, the son of a cabinetmaker. Jacob Brett was born in 1808 and appears in the story as the quieter brother, but not as a background figure: before the submarine cable, he had already worked with mechanical patents, printing telegraphs and projects for "oceanic and subterranean" communication. The pair worked well because they combined business ambition, political concessions and a stubborn willingness to prove that the sea could become infrastructure.\n\nIn the 1840s, the brothers were already pushing the idea of joining England and France by submarine telegraph, even when many people saw it as too expensive, too fragile and perhaps impossible. In 1847, they sought permission from Louis-Philippe; in 1849, they secured a stronger concession from Louis-Napoléon Bonaparte for the route. In 1850, they put the hypothesis into the sea.\n\nThe material that changed the game was gutta-percha, a natural substance that worked far better as an underwater electrical insulator than earlier alternatives. The 1850 cable was almost absurdly simple by modern standards: a single copper wire, insulated, without metal armouring, held down by lead weights. It was more proof of concept than finished product.\n\nAnd the proof worked. The line allowed messages to be transmitted across the English Channel, including a greeting to Louis-Napoléon Bonaparte, then president of France. A few hours later, or during the first night according to Science Museum records, the cable failed. The famous bug report is almost cinematic: a French fisherman reportedly pulled it up, thought it was a strange seaweed with valuable metal inside, and cut off a piece. Network down.\n\nBut in infrastructure, a useful failure can be priceless. The experiment showed that the problem was not the idea, but the production engineering. The following year, in 1851, a much stronger armoured cable put the Dover-Calais link into service. The logic born there is the same one that supports the global internet: continents talking through physical cables on the seabed.',
        },
        additionalImage: {
          src: HALL_IMAGES.year1850.channelCable,
          caption: {
            pt: 'Trecho preservado do cabo submarino Dover-Calais de 1850: um fio de cobre isolado com guta-percha, sem armadura metálica, lançado como prova de conceito para atravessar o Canal da Mancha.',
            en: 'A preserved section of the 1850 Dover-Calais submarine cable: a copper wire insulated with gutta-percha, without metal armouring, laid as a proof of concept across the English Channel.',
          },
        },
      },
      {
        name: 'Paul Julius Reuter',
        image: HALL_IMAGES.year1850.paulJuliusReuter,
        flag: '🇩🇪',
        nationality: { pt: 'Alemão de nascimento; britânico naturalizado em 1857', en: 'German-born; naturalized British in 1857' },
        formation: {
          pt: 'Formação comercial · Funcionário no banco do tio em Göttingen · Experiência em publicação, tradução de notícias e dados financeiros',
          en: 'Commercial training · Clerk in his uncle\'s bank in Göttingen · Experience in publishing, news translation and financial data',
        },
        summary: {
          pt: 'Criou uma ponte de rede com 45 pombos-correio para levar notícias e preços entre Aachen e Bruxelas',
          en: 'Created a network bridge with 45 carrier pigeons to move news and prices between Aachen and Brussels',
        },
        role: {
          pt: 'Empreendedor de notícias e dados financeiros, fundador da Reuters',
          en: 'News and financial data entrepreneur, founder of Reuters',
        },
        contribution: {
          pt: 'Em 1850, Paul Julius Reuter percebeu um gargalo: a rede telegráfica alemã chegava até Aachen, enquanto a rede belga-francesa terminava em Bruxelas. Entre os dois pontos havia um buraco de cerca de 120 km. A solução dele foi uma rede híbrida: telégrafo, transcrição, 45 pombos-correio e telégrafo de novo.',
          en: 'In 1850, Paul Julius Reuter spotted a bottleneck: the German telegraph network reached Aachen, while the Belgian-French network ended at Brussels. Between the two points was a gap of about 120 km. His solution was a hybrid network: telegraph, transcription, 45 carrier pigeons and telegraph again.',
        },
        detail: {
          pt: 'Paul Julius Reuter nasceu em Kassel, em 1816, com o nome Israel Beer Josaphat. Trabalhou como funcionário no banco de um tio em Göttingen, onde teve contato com Carl Friedrich Gauss, que experimentava com telégrafo elétrico. Depois passou por publicação em Berlim e tradução de notícias comerciais em Paris. Ou seja: quando o telégrafo começou a encurtar o mundo, Reuter já entendia duas coisas que importavam muito: dinheiro e informação rápida.\n\nEm 1850, ele viu uma falha de infraestrutura que parecia pequena, mas valia muito. As cotações e notícias chegavam por telégrafo até Aachen; do outro lado, Bruxelas se conectava à rede belga e francesa. Entre as duas cidades, ainda não havia cabo. O dado acelerava pela rede, parava no vazio e seguia por trem ou correio, perdendo horas.\n\nA solução foi quase uma aula de redes distribuídas antes de existir esse vocabulário. Reuter alugou 45 pombos-correio de Heinrich Geller, em Aachen. As mensagens eram copiadas em papel leve, presas aos pombos e enviadas entre Bruxelas e Aachen em cerca de duas horas, vencendo o trem por várias horas. Quando chegavam, eram retransmitidas para assinantes ou recolocadas no telégrafo.\n\nPor que isso importa hoje? Porque Reuter criou, na prática, uma ponte entre redes incompatíveis usando outro meio físico. É network bridging vitoriano: detectar um gargalo, escolher uma rota alternativa e manter o fluxo de dados andando. Quando o trecho telegráfico Aachen-Bruxelas foi finalmente fechado, os pombos deixaram de ser necessários. Mas o negócio já tinha mostrado seu valor. Em 1851, Reuter foi para Londres, usou o novo cabo Dover-Calais para transmitir dados financeiros entre Londres e Paris e plantou a semente da Reuters.',
          en: 'Paul Julius Reuter was born in Kassel in 1816 as Israel Beer Josaphat. He worked as a clerk in an uncle\'s bank in Göttingen, where he encountered Carl Friedrich Gauss, who was experimenting with the electric telegraph. He later worked in publishing in Berlin and translated commercial news in Paris. So when the telegraph began shrinking the world, Reuter already understood two very valuable things: money and fast information.\n\nIn 1850, he saw an infrastructure failure that looked small, but was worth a lot. Prices and news arrived by telegraph as far as Aachen; on the other side, Brussels connected to the Belgian and French network. Between the two cities, there was still no cable. The data raced through the network, stopped in the void and then continued by train or post, losing hours.\n\nThe solution was almost a lesson in distributed networks before that vocabulary existed. Reuter hired 45 carrier pigeons from Heinrich Geller in Aachen. Messages were copied onto light paper, attached to the pigeons and flown between Brussels and Aachen in about two hours, beating the train by several hours. When they arrived, they were distributed to subscribers or put back onto the telegraph.\n\nWhy does this matter today? Because Reuter effectively created a bridge between incompatible networks using another physical medium. It was Victorian network bridging: detect a bottleneck, choose an alternate route and keep the data flowing. When the Aachen-Brussels telegraph gap was finally closed, the pigeons were no longer needed. But the business had already proved its value. In 1851, Reuter moved to London, used the new Dover-Calais cable to transmit financial data between London and Paris and planted the seed of Reuters.',
        },
        additionalImage: {
          src: HALL_IMAGES.year1850.doverCalaisMap,
          caption: {
            pt: 'Mapa para situar o gargalo que Reuter explorou: entre Aachen e Bruxelas havia uma lacuna sem telégrafo, então as mensagens cruzavam esse trecho por pombos-correio até a ligação física ser concluída depois.',
            en: 'Map used to situate the bottleneck Reuter exploited: between Aachen and Brussels there was a gap without telegraph, so messages crossed that stretch by carrier pigeon until the physical link was later completed.',
          },
        },
      },
    ],
  },
  {
    year: 1851,
    era: { pt: 'A Prova de Conceito Vira Infraestrutura', en: 'The Proof of Concept Becomes Infrastructure' },
    context: {
      pt: 'Em 1851, várias ideias que pareciam improviso começaram a virar infraestrutura. O cabo submarino do Canal da Mancha voltou, agora blindado. Boston aprovou um sistema urbano de alarme de incêndio por telégrafo. Nos EUA, a consolidação telegráfica que daria origem à Western Union começou a ganhar forma. E Paul Julius Reuter percebeu que o dinheiro do futuro estava em transportar informação antes dos outros.',
      en: 'In 1851, several ideas that had looked improvised began turning into infrastructure. The English Channel cable returned, now armoured. Boston approved an urban fire alarm system over telegraph lines. In the United States, the telegraph consolidation that would become Western Union began taking shape. And Paul Julius Reuter realized that the money of the future was in moving information before everyone else.',
    },
    peopleCount: 8,
    people: [
      {
        name: 'John Watkins Brett & Jacob Brett',
        images: [
          { src: HALL_IMAGES.year1850.johnBrett, alt: 'John Watkins Brett' },
          { src: HALL_IMAGES.year1850.jacobBrett, alt: 'Jacob Brett' },
        ],
        flag: '🇬🇧',
        nationality: { pt: 'Britânicos', en: 'British' },
        formation: {
          pt: 'Empreendedores práticos de telegrafia · John: negócios e engenharia telegráfica · Jacob: inventor e articulador de patentes e concessões',
          en: 'Practical telegraph entrepreneurs · John: telegraph business and engineering · Jacob: inventor and organizer of patents and concessions',
        },
        summary: {
          pt: 'Depois do cabo cortado em 1850, insistiram na segunda tentativa e levantaram apoio para o cabo submarino blindado de 1851',
          en: 'After the 1850 cable was cut, they pushed the second attempt and raised support for the armoured submarine cable of 1851',
        },
        role: {
          pt: 'Empresários teimosos da telegrafia submarina',
          en: 'Persistent entrepreneurs of submarine telegraphy',
        },
        contribution: {
          pt: 'Os irmãos Brett já tinham enfiado o primeiro cabo no mar em 1850. Quando a conexão falhou, eles não desistiram: renovaram a concessão, reorganizaram a empresa como Submarine Telegraph Company e buscaram dinheiro para uma segunda tentativa, muito mais séria, em 1851.',
          en: 'The Brett brothers had already put the first cable into the sea in 1850. When the connection failed, they did not quit: they renewed the concession, reorganized the venture as the Submarine Telegraph Company and raised money for a much more serious second attempt in 1851.',
        },
        detail: {
          pt: 'John Watkins Brett e Jacob Brett eram os empresários teimosos dessa história. Em 1850, eles tinham provado que dava para transmitir sinal elétrico pelo fundo do Canal da Mancha. O problema é que a primeira versão era frágil demais: um fio de cobre isolado por guta-percha, sem proteção externa suficiente para sobreviver ao mar, às rochas, às âncoras e ao uso real.\n\nA história do pescador francês que cortou o cabo virou quase um bug report folclórico: a rede funcionou, alguém puxou o cabo, achou aquele fio submarino estranho demais e a conexão caiu. Mas o mais importante já estava feito. O fracasso não dizia "isso é impossível"; dizia "a versão 1.0 não aguenta produção".\n\nEm 1851, os Brett voltaram com outra postura. Eles não estavam mais só tentando provar uma ideia bonita: queriam uma linha permanente entre Inglaterra e França. Reorganizaram a operação, trouxeram mais capital e entregaram o problema técnico para Thomas Russell Crampton. A função deles foi essencialmente de founders: insistir, levantar recursos, amarrar concessões e manter vivo o projeto até a engenharia alcançar a ambição.\n\nÉ por isso que eles aparecem de novo em 1851. O primeiro cabo foi a demonstração; o segundo foi o começo da infraestrutura. É a diferença entre um protótipo que funciona na bancada e um sistema que precisa ficar de pé no mundo real.',
          en: 'John Watkins Brett and Jacob Brett were the stubborn entrepreneurs in this story. In 1850, they had proved that an electrical signal could travel along the bottom of the English Channel. The problem was that the first version was too fragile: a copper wire insulated with gutta-percha, without enough external protection to survive the sea, rocks, anchors and real use.\n\nThe story of the French fisherman cutting the cable became almost a folkloric bug report: the network worked, someone pulled up the cable, found the strange underwater wire suspicious and the connection went down. But the most important thing had already been proven. The failure did not say "this is impossible"; it said "version 1.0 cannot survive production".\n\nIn 1851, the Bretts came back with a different posture. They were no longer just trying to prove a beautiful idea: they wanted a permanent line between England and France. They reorganized the operation, brought in more capital and handed the technical problem to Thomas Russell Crampton. Their role was essentially that of founders: insist, raise resources, secure concessions and keep the project alive until engineering caught up with ambition.\n\nThat is why they appear again in 1851. The first cable was the demonstration; the second was the beginning of infrastructure. It is the difference between a prototype that works on a bench and a system that needs to stand up in the real world.',
        },
      },
      {
        name: 'Thomas Russell Crampton',
        image: HALL_IMAGES.year1851.thomasRussellCrampton,
        flag: '🇬🇧',
        nationality: { pt: 'Britânico', en: 'British' },
        formation: {
          pt: 'Educação particular · Engenharia ferroviária · Treinado na Great Western Railway de Isambard Kingdom Brunel · MICE e MIMechE',
          en: 'Privately educated · Railway engineering · Trained on Isambard Kingdom Brunel\'s Great Western Railway · MICE and MIMechE',
        },
        summary: {
          pt: 'Projetou o cabo submarino blindado que tornou permanente a conexão telegráfica entre Inglaterra e França',
          en: 'Designed the armoured submarine cable that made the telegraph connection between England and France permanent',
        },
        role: {
          pt: 'Engenheiro ferroviário, inventor e arquiteto técnico do cabo Dover-Calais de 1851',
          en: 'Railway engineer, inventor and technical architect of the 1851 Dover-Calais cable',
        },
        contribution: {
          pt: 'Thomas Russell Crampton foi o gênio técnico da operação de 1851. Ele especificou um cabo novo: quatro fios de cobre, cada um isolado por duas camadas de guta-percha, envolvidos em cânhamo e protegidos por dez grossos fios de ferro galvanizado em espiral. O resultado parecia um cano de aço flexível e pesado, mas era exatamente isso que o fundo do mar exigia.',
          en: 'Thomas Russell Crampton was the technical brain of the 1851 operation. He specified a new cable: four copper wires, each insulated with two layers of gutta-percha, wrapped in hemp and protected by ten thick galvanized iron wires laid helically around it. The result looked like a heavy flexible steel pipe, but that was exactly what the seabed required.',
        },
        detail: {
          pt: 'Crampton nasceu em Broadstairs, Kent, em 1816. Era engenheiro ferroviário por formação prática, treinado na órbita de Brunel e conhecido por locomotivas, máquinas e projetos grandes demais para caberem em uma única categoria. Em 1851, ele entrou no projeto do Canal da Mancha como o cara que transformaria a ideia dos Brett em um artefato industrial.\n\nA solução dele foi brutal e elegante. O cabo de 1850 era delicado demais; o de 1851 precisava ser um animal diferente. Crampton especificou quatro condutores de cobre, aumentando a capacidade potencial da linha. Cada condutor recebeu isolamento de guta-percha. O conjunto foi preenchido e envolvido com cânhamo, depois blindado por fora com dez fios de ferro galvanizado. O cabo ficou pesado, caro e muito mais difícil de manusear, mas ganhou a coisa que faltava: resistência.\n\nEsse é um padrão clássico da engenharia de infraestrutura. A primeira versão prova que o fenômeno existe. A segunda versão entende o ambiente hostil. No caso do cabo submarino, o ambiente hostil era literal: água salgada, correnteza, abrasão, pesca, peso próprio, emendas, atrito e quilômetros de material sendo desenrolados de um navio.\n\nEm novembro de 1851, a ligação Dover-Calais entrou em operação e permitiu mensagens telegráficas regulares entre Londres e Paris. O cabo de Crampton ficou em serviço por anos. A era dos cabos submarinos tinha saído do modo experimento e entrado no modo infraestrutura.',
          en: 'Crampton was born in Broadstairs, Kent, in 1816. He was a railway engineer by practical training, formed in Brunel\'s orbit and known for locomotives, machines and projects too large to fit into a single category. In 1851, he entered the English Channel project as the person who would turn the Bretts\' idea into an industrial artifact.\n\nHis solution was brutal and elegant. The 1850 cable was too delicate; the 1851 cable had to be a different creature. Crampton specified four copper conductors, increasing the potential capacity of the line. Each conductor was insulated with gutta-percha. The bundle was filled and wrapped with hemp, then armoured on the outside with ten galvanized iron wires. The cable became heavy, expensive and much harder to handle, but it gained the thing it lacked: resilience.\n\nThis is a classic infrastructure engineering pattern. The first version proves that the phenomenon exists. The second version understands the hostile environment. In the case of submarine cable, the hostile environment was literal: salt water, currents, abrasion, fishing, its own weight, joints, friction and miles of material being paid out from a ship.\n\nIn November 1851, the Dover-Calais link entered service and enabled regular telegraphic messages between London and Paris. Crampton\'s cable remained in service for years. The age of submarine cables had left experiment mode and entered infrastructure mode.',
        },
        additionalImage: {
          src: HALL_IMAGES.year1851.channelCable,
          caption: {
            pt: 'Representação do cabo blindado do Canal da Mancha: quatro condutores isolados, cânhamo e uma armadura externa de fios metálicos. Foi essa mudança de engenharia que fez a conexão sobreviver.',
            en: 'Representation of the armoured English Channel cable: four insulated conductors, hemp and an external metal-wire armour. This engineering change is what made the connection survive.',
          },
        },
      },
      {
        name: 'William Francis Channing & Moses Gerrish Farmer',
        images: [
          { src: HALL_IMAGES.year1851.williamFrancisChanning, alt: 'William Francis Channing' },
          { src: HALL_IMAGES.year1851.mosesGerrishFarmer, alt: 'Moses Gerrish Farmer' },
        ],
        flag: '🇺🇸',
        nationality: { pt: 'Americanos', en: 'American' },
        formation: {
          pt: 'Channing: Harvard College (1839) · Medicina, University of Pennsylvania (1844) · Farmer: Phillips Academy · Dartmouth College, estudos interrompidos por saúde',
          en: 'Channing: Harvard College (1839) · Medicine, University of Pennsylvania (1844) · Farmer: Phillips Academy · Dartmouth College, studies interrupted by illness',
        },
        summary: {
          pt: 'Convenceram Boston a construir o primeiro sistema municipal de alarme de incêndio por telégrafo',
          en: 'Convinced Boston to build the first municipal fire alarm system using telegraphy',
        },
        role: {
          pt: 'Criadores do "IoT urbano" antes do telefone',
          en: 'Creators of urban IoT before the telephone',
        },
        contribution: {
          pt: 'Dr. William Francis Channing teve a visão teórica: usar a rede telegráfica para avisar uma central sobre fogo antes que o quarteirão inteiro queimasse. Moses Gerrish Farmer foi o engenheiro que colocou a mão na massa: caixas de rua, engrenagens, circuitos e o painel central que recebia os sinais e indicava de onde vinha o alarme.',
          en: 'Dr. William Francis Channing had the theoretical vision: use the telegraph network to warn a central office about fire before the entire block burned. Moses Gerrish Farmer was the engineer who built the thing: street boxes, gearing, circuits and the central panel that received the signals and showed where the alarm came from.',
        },
        detail: {
          pt: 'Channing era médico de Harvard e da University of Pennsylvania, mas tinha cabeça de inventor elétrico. Ele olhou para a rede de telégrafos e pensou algo muito moderno: se uma cidade já pode transmitir sinais por fio, por que não transformar cada ponto da cidade em um sensor de emergência? Antes de telefone, rádio, internet ou 911, isso era uma ideia poderosa.\n\nFarmer era o complemento perfeito. Nascido em Boscawen, New Hampshire, em 1820, estudou na Phillips Academy e em Dartmouth, mas precisou interromper os estudos por problemas de saúde. Isso não impediu nada. Ele virou professor, operador de telégrafo, engenheiro elétrico e inventor. Em 1847, já tinha demonstrado uma pequena locomotiva eletromagnética. Décadas antes de Edison virar sinônimo de lâmpada, Farmer também experimentava com iluminação elétrica e chegou a iluminar uma casa com lâmpadas incandescentes.\n\nEm 1851, Boston aprovou recursos para construir o sistema que Channing e Farmer vinham defendendo. A lógica era quase um IoT urbano vitoriano: caixas instaladas nas ruas, cada uma com um código próprio; quando alguém acionava a caixa, um circuito telegráfico enviava pulsos para uma central; a central identificava o ponto da cidade e podia despachar ajuda com muito menos atraso.\n\nO sistema entrou em operação em 28 de abril de 1852 e recebeu o primeiro alarme no dia seguinte. Mas 1851 é o momento em que a cidade compra a ideia e a transforma em obra pública. A sacada é enorme: não era só comunicação entre pessoas. Era uma rede urbana de dispositivos distribuídos, detectando evento físico e convertendo isso em dado operacional.',
          en: 'Channing was a physician educated at Harvard and the University of Pennsylvania, but he had the mind of an electrical inventor. He looked at the telegraph network and thought something very modern: if a city can already transmit signals by wire, why not turn points across the city into emergency sensors? Before telephones, radio, the internet or 911, that was a powerful idea.\n\nFarmer was the perfect complement. Born in Boscawen, New Hampshire, in 1820, he studied at Phillips Academy and Dartmouth, but had to interrupt his studies because of health problems. That did not stop much. He became a teacher, telegraph operator, electrical engineer and inventor. In 1847, he had already demonstrated a small electromagnetic locomotive. Decades before Edison became synonymous with the light bulb, Farmer was also experimenting with electric lighting and later lit a house with incandescent lamps.\n\nIn 1851, Boston approved funds to build the system Channing and Farmer had been advocating. The logic was almost Victorian urban IoT: boxes installed in the streets, each with its own code; when someone activated a box, a telegraph circuit sent pulses to a central office; the central office identified the point in the city and could dispatch help with much less delay.\n\nThe system entered service on April 28, 1852 and received its first alarm the next day. But 1851 is the moment when the city bought the idea and turned it into public works. The insight is enormous: this was not just communication between people. It was an urban network of distributed devices, detecting a physical event and converting it into operational data.',
        },
        additionalImage: {
          src: HALL_IMAGES.year1851.fireAlarm,
          caption: {
            pt: 'O sistema de alarme de incêndio de Boston usava caixas de rua, circuitos telegráficos e uma central para indicar de qual ponto vinha o sinal. Uma rede urbana de sensores antes da eletrônica moderna.',
            en: 'Boston\'s fire alarm system used street boxes, telegraph circuits and a central office to indicate where the signal came from. An urban sensor network before modern electronics.',
          },
        },
      },
      {
        name: 'Hiram Sibley & Ezra Cornell',
        images: [
          { src: HALL_IMAGES.year1851.hiramSibley, alt: 'Hiram Sibley' },
          { src: HALL_IMAGES.year1851.ezraCornell, alt: 'Ezra Cornell' },
        ],
        flag: '🇺🇸',
        nationality: { pt: 'Americanos', en: 'American' },
        formation: {
          pt: 'Sibley: educação rural básica, aprendiz e dono de oficina mecânica · Cornell: educação Quaker básica, carpinteiro, mecânico, agricultor e construtor de linhas telegráficas',
          en: 'Sibley: basic rural education, apprentice and machine-shop owner · Cornell: basic Quaker education, carpenter, mechanic, farmer and telegraph-line builder',
        },
        summary: {
          pt: 'Foram arquitetos da consolidação telegráfica que virou a Western Union, a primeira grande plataforma nacional de comunicação dos EUA',
          en: 'They were architects of the telegraph consolidation that became Western Union, the first major national communications platform in the United States',
        },
        role: {
          pt: 'Empresários de rede e fundadores da "Big Tech" telegráfica',
          en: 'Network entrepreneurs and founders of telegraph-era Big Tech',
        },
        contribution: {
          pt: 'Em 1851, Hiram Sibley e o grupo de Rochester organizaram a New York and Mississippi Valley Printing Telegraph Company, com a ambição de criar um sistema grande e integrado. Ezra Cornell já construía linhas telegráficas em escala e logo se tornaria peça central da consolidação que assumiria o nome Western Union em 1856.',
          en: 'In 1851, Hiram Sibley and the Rochester group organized the New York and Mississippi Valley Printing Telegraph Company, aiming to create a large integrated system. Ezra Cornell was already building telegraph lines at scale and soon became central to the consolidation that would take the name Western Union in 1856.',
        },
        detail: {
          pt: 'Hiram Sibley nasceu em 1807, em North Adams, Massachusetts. Não teve uma formação universitária polida; teve formação de chão de fábrica. Trabalhou como aprendiz, passou por algodão, cardagem de lã, oficina mecânica, negócios locais e política. Essa trajetória importa porque Sibley entendia infraestrutura como operação, não como teoria. Em 1851, ele participou da criação da New York and Mississippi Valley Printing Telegraph Company em Rochester, Nova York.\n\nEzra Cornell, também nascido em 1807, vinha de uma família Quaker de poucos recursos. Foi carpinteiro, mecânico, agricultor, vendedor e inventor. Quando entrou no mundo do telégrafo, não ficou só na sala de reunião: supervisionou construção de linhas, abriu caminho, montou postes, lidou com terreno, capital e risco. Ele enriqueceu de verdade quando as linhas e ações telegráficas se consolidaram.\n\nAqui vale a precisão histórica: a empresa de 1851 nasce com Sibley, Samuel L. Selden e outros; Cornell estava em uma rede concorrente e se tornaria decisivo na consolidação posterior. Em 1856, quando empresas rivais se uniram, o nome Western Union foi adotado, com Cornell como um dos grandes personagens e maior acionista por muitos anos. Então, no espírito da história, Sibley e Cornell são dois fundadores/arquitetos da Big Tech telegráfica americana: um organiza a máquina corporativa, o outro constrói e capitaliza a infraestrutura.\n\nA curiosidade é forte demais para ficar de fora: Cornell fez fortuna construindo quilômetros e quilômetros de postes e fios pelos EUA. Depois de se aposentar do mercado de tecnologia da época, colocou terra e dinheiro na criação da Cornell University, fundada em 1865. A universidade que hoje é Ivy League nasce, em parte, de dinheiro de rede. De cabo, poste, risco e escala.',
          en: 'Hiram Sibley was born in 1807 in North Adams, Massachusetts. He did not have a polished university education; he had a shop-floor education. He worked as an apprentice, moved through cotton, wool carding, machine shops, local business and politics. That trajectory matters because Sibley understood infrastructure as operation, not theory. In 1851, he helped create the New York and Mississippi Valley Printing Telegraph Company in Rochester, New York.\n\nEzra Cornell, also born in 1807, came from a Quaker family of limited means. He was a carpenter, mechanic, farmer, salesman and inventor. When he entered the telegraph world, he did not stay in the boardroom: he supervised line construction, cleared routes, raised poles, handled terrain, capital and risk. He became truly wealthy when telegraph lines and shares consolidated.\n\nThere is a historical nuance worth keeping: the 1851 company was born with Sibley, Samuel L. Selden and others; Cornell was in a competing network and became decisive in the later consolidation. In 1856, when rival companies merged, the Western Union name was adopted, with Cornell as one of the central figures and its largest stockholder for many years. So, in the spirit of the story, Sibley and Cornell are two founders/architects of American telegraph Big Tech: one organized the corporate machine, the other built and capitalized the infrastructure.\n\nThe side note is too good to leave out: Cornell made a fortune building miles and miles of poles and wires across the United States. After retiring from the technology market of the era, he put land and money into creating Cornell University, founded in 1865. The university that is now Ivy League was born, in part, from network money. From cable, poles, risk and scale.',
        },
        additionalImage: {
          src: HALL_IMAGES.year1851.westernUnion,
          caption: {
            pt: 'A Western Union consolidou linhas telegráficas em uma plataforma nacional. No século 19, controlar fios, postes e rotas era controlar o fluxo de dados.',
            en: 'Western Union consolidated telegraph lines into a national platform. In the 19th century, controlling wires, poles and routes meant controlling data flow.',
          },
        },
      },
      {
        name: 'Paul Julius Reuter',
        image: HALL_IMAGES.year1850.paulJuliusReuter,
        flag: '🇩🇪',
        nationality: { pt: 'Alemão de nascimento; britânico naturalizado em 1857', en: 'German-born; naturalized British in 1857' },
        formation: {
          pt: 'Formação comercial · Funcionário no banco do tio em Göttingen · Experiência em publicação, tradução de notícias e dados financeiros',
          en: 'Commercial training · Clerk in his uncle\'s bank in Göttingen · Experience in publishing, news translation and financial data',
        },
        summary: {
          pt: 'Abandonou a ponte dos pombos e abriu em Londres o negócio que virou Reuters, transmitindo cotações pelo novo cabo Dover-Calais',
          en: 'Left the pigeon bridge behind and opened the London business that became Reuters, transmitting market quotations over the new Dover-Calais cable',
        },
        role: {
          pt: 'Barão dos dados financeiros e fundador da Reuters',
          en: 'Baron of financial data and founder of Reuters',
        },
        contribution: {
          pt: 'Quando o cabo submarino dos Brett e de Crampton finalmente funcionou em 1851, Reuter percebeu a virada de chave. Ele saiu de Aachen, foi para Londres, alugou duas salas perto da Bolsa e passou a transmitir preços de ações e notícias comerciais entre Londres e Paris pelo novo cabo.',
          en: 'When the submarine cable built by the Bretts and Crampton finally worked in 1851, Reuter understood the shift immediately. He left Aachen, moved to London, rented two rooms near the Exchange and began transmitting stock prices and commercial news between London and Paris over the new cable.',
        },
        detail: {
          pt: 'Paul Julius Reuter já tinha mostrado em 1850 que entendia roteamento melhor que muita empresa moderna. Onde a rede telegráfica tinha um buraco entre Aachen e Bruxelas, ele colocou pombos-correio para transportar cotações e notícias. Mas Reuter não era apegado ao meio físico; ele era apegado à vantagem de velocidade. Quando o cabo novo entre Dover e Calais entrou em operação, a frota alada perdeu o sentido.\n\nEm 14 de outubro de 1851, Reuter abriu um escritório em duas salas no 1 Royal Exchange Buildings, no coração financeiro de Londres. Menos de um mês depois, em 13 de novembro, começaram as transmissões permanentes pelo cabo submarino entre Dover e Calais. Reuter estava no lugar certo, na hora certa, com o produto certo: informação financeira mais rápida que a concorrência.\n\nA sacada dele era simples e imensa. O dinheiro do futuro não estava só em transportar pessoas ou mercadorias; estava em transportar informação antes dos outros. Uma cotação que chega duas horas antes vale dinheiro. Uma notícia comercial que cruza fronteiras antes dos concorrentes vale dinheiro. Uma rede confiável de dados vira poder econômico.\n\nEsse é o embrião da Reuters. Primeiro, dados financeiros para bancos, corretoras e casas comerciais. Depois, notícias gerais. Mais tarde, uma das maiores agências de informação do mundo. O pulo de 1851 é bonito porque mostra Reuter como um empreendedor de rede: ele trocava o meio, mas mantinha o objetivo. Pombos quando não havia fio; cabo quando o fio chegou.',
          en: 'Paul Julius Reuter had already shown in 1850 that he understood routing better than many modern companies. Where the telegraph network had a gap between Aachen and Brussels, he used carrier pigeons to move quotations and news. But Reuter was not attached to the physical medium; he was attached to the speed advantage. When the new cable between Dover and Calais entered service, the flying fleet no longer made sense.\n\nOn October 14, 1851, Reuter opened an office in two rooms at 1 Royal Exchange Buildings, in London\'s financial center. Less than a month later, on November 13, permanent transmissions began over the submarine cable between Dover and Calais. Reuter was in the right place, at the right time, with the right product: financial information faster than the competition.\n\nHis insight was simple and huge. The money of the future was not only in moving people or goods; it was in moving information before everyone else. A quotation that arrives two hours earlier is worth money. A commercial news item that crosses borders before competitors is worth money. A reliable data network becomes economic power.\n\nThis is the embryo of Reuters. First, financial data for banks, brokers and commercial houses. Then, general news. Later, one of the largest information agencies in the world. The 1851 leap is elegant because it shows Reuter as a network entrepreneur: he changed the medium, but kept the goal. Pigeons when there was no wire; cable when the wire arrived.',
        },
      },
    ],
  },
  {
    year: 1852,
    era: { pt: 'Redes Elétricas Entram em Produção', en: 'Electrical Networks Go Into Production' },
    context: {
      pt: 'Em 1852, a história da TI ainda não era sobre computadores digitais. Era sobre uma coisa anterior e essencial: transformar acontecimentos do mundo real em sinais elétricos, transmitir esses sinais por uma rede e coordenar uma resposta. Foi um ano de infraestrutura, telégrafo, cidade conectada e informação operacional.',
      en: 'In 1852, IT history was not yet about digital computers. It was about something earlier and essential: turning real-world events into electrical signals, transmitting those signals through a network and coordinating a response. It was a year of infrastructure, telegraphy, connected cities and operational information.',
    },
    peopleCount: 5,
    people: [
      {
        name: 'William Francis Channing & Moses Gerrish Farmer',
        imagePlaceholder: YEAR_1852_PLACEHOLDER,
        flag: '🇺🇸',
        nationality: { pt: 'Americanos', en: 'Americans' },
        formation: {
          pt: 'Channing: Harvard College, medicina pela University of Pennsylvania, pesquisador de eletricidade e inventor · Farmer: Phillips Academy, estudos no Dartmouth College, engenheiro elétrico prático, operador de telégrafo e inventor',
          en: 'Channing: Harvard College, medicine at the University of Pennsylvania, electricity researcher and inventor · Farmer: Phillips Academy, studies at Dartmouth College, practical electrical engineer, telegraph operator and inventor',
        },
        summary: {
          pt: 'Colocaram em operação, em Boston, o primeiro sistema municipal elétrico de alarme de incêndio por telégrafo',
          en: 'Put the first municipal electric fire alarm system using telegraphy into operation in Boston',
        },
        role: {
          pt: 'Pioneiros de redes urbanas de alerta',
          en: 'Pioneers of urban alert networks',
        },
        contribution: {
          pt: 'Em 1852, William Francis Channing e Moses Gerrish Farmer tiraram do papel uma das ideias mais modernas do século XIX: uma cidade capaz de detectar um evento físico, transformar esse evento em sinal elétrico e acionar uma resposta organizada.',
          en: 'In 1852, William Francis Channing and Moses Gerrish Farmer turned one of the most modern ideas of the 19th century into reality: a city capable of detecting a physical event, turning it into an electrical signal and triggering an organized response.',
        },
        detail: {
          pt: 'No dia 28 de abril de 1852, Boston colocou em operação o primeiro sistema municipal elétrico de alarme de incêndio do mundo. No dia seguinte, 29 de abril de 1852, às 20h25, o sistema recebeu seu primeiro alarme real. A rede inicial tinha três circuitos de caixas, três circuitos de sinos, quarenta caixas de chamada, dezesseis sinos de alarme e uma central capaz de identificar de onde vinha o chamado.\n\nA lógica era poderosa. Em vez de depender apenas de gritos, sinos locais ou pessoas correndo pela cidade para avisar sobre um incêndio, Boston passou a ter uma infraestrutura distribuída. Caixas eram instaladas nas ruas. Cada caixa tinha uma identidade própria. Quando alguém acionava uma delas, pulsos elétricos viajavam pelos fios até uma central, que interpretava o sinal e apontava a localização do problema.\n\nChanning foi o visionário do sistema. Ele entendeu que o telégrafo não precisava servir apenas para mensagens entre pessoas. Ele podia virar uma rede urbana de alerta. Farmer foi o engenheiro que deu corpo físico à ideia: circuitos, caixas, engrenagens, sinalização e central de operação.\n\nEsse é um dos ancestrais mais bonitos da TI aplicada à infraestrutura pública. Ainda não existia computador, internet, dashboard ou sensor digital, mas a lógica já estava ali: dispositivos distribuídos, transmissão de dados, identificação de origem, central de controle e resposta em tempo real.\n\nEm termos modernos, o sistema de Boston parece um avô distante de IoT urbano, observabilidade, redes de sensores, sistemas de emergência e infraestrutura crítica baseada em dados.\n\nNo Hall da Fama, esse evento conversa diretamente com 1851: em 1851, Boston aprovou a construção do sistema; em 1852, ele entrou em produção e começou a operar de verdade.',
          en: 'On April 28, 1852, Boston put the first municipal electric fire alarm system in the world into operation. The next day, April 29, 1852, at 8:25 p.m., the system received its first real alarm. The initial network had three box circuits, three bell circuits, forty call boxes, sixteen alarm bells and a central office capable of identifying where a call came from.\n\nThe logic was powerful. Instead of relying only on shouting, local bells or people running through the city to report a fire, Boston gained distributed infrastructure. Boxes were installed in the streets. Each box had its own identity. When someone activated one, electrical pulses traveled along wires to a central office, which interpreted the signal and indicated the problem location.\n\nChanning was the visionary behind the system. He understood that the telegraph did not need to serve only messages between people. It could become an urban alert network. Farmer was the engineer who gave the idea physical form: circuits, boxes, gears, signaling and the operating center.\n\nThis is one of the most elegant ancestors of IT applied to public infrastructure. There was still no computer, internet, dashboard or digital sensor, but the logic was already there: distributed devices, data transmission, source identification, central control and real-time response.\n\nIn modern terms, the Boston system looks like a distant ancestor of urban IoT, observability, sensor networks, emergency systems and data-based critical infrastructure.\n\nIn the Hall of Fame, this event speaks directly to 1851: in 1851, Boston approved construction of the system; in 1852, it went into production and began operating for real.',
        },
      },
      {
        name: 'Guilherme Schüch de Capanema',
        imagePlaceholder: YEAR_1852_PLACEHOLDER,
        flag: '🇧🇷',
        nationality: { pt: 'Brasileiro', en: 'Brazilian' },
        formation: {
          pt: 'Engenharia na Europa, com curso concluído na Escola Politécnica de Viena · Doutor em matemática e ciências pela antiga Escola Militar do Rio de Janeiro · Professor de física e mineralogia na Escola Militar',
          en: 'Engineering in Europe, completed at the Vienna Polytechnic Institute · Doctor in mathematics and sciences from the former Military School of Rio de Janeiro · Professor of physics and mineralogy at the Military School',
        },
        summary: {
          pt: 'Foi o responsável técnico pela instalação da primeira linha telegráfica elétrica do Brasil e se tornou o primeiro diretor do Telégrafo Nacional',
          en: 'Was the technical lead for installing the first electric telegraph line in Brazil and became the first director of the National Telegraph',
        },
        role: {
          pt: 'Pioneiro das telecomunicações brasileiras',
          en: 'Pioneer of Brazilian telecommunications',
        },
        contribution: {
          pt: 'Em 1852, o Brasil entrou oficialmente na era da comunicação elétrica. No dia 11 de maio de 1852, foi inaugurada a primeira linha telegráfica elétrica do país, no Rio de Janeiro, sob direção técnica de Guilherme Schüch de Capanema.',
          en: 'In 1852, Brazil officially entered the age of electrical communication. On May 11, 1852, the first electric telegraph line in the country was inaugurated in Rio de Janeiro under the technical direction of Guilherme Schüch de Capanema.',
        },
        detail: {
          pt: 'A linha era subterrânea e ligava o Palácio de São Cristóvão, residência imperial, ao Quartel General no Campo, na região do atual Campo de Santana. O responsável por dirigir a instalação e os trabalhos foi Guilherme Schüch de Capanema.\n\nCapanema era um personagem perfeito para esse momento. Nascido em Ouro Preto, em 1824, filho de imigrantes europeus, foi enviado jovem para estudar engenharia na Europa. Concluiu o curso na Escola Politécnica de Viena e, de volta ao Brasil, consolidou sua carreira como engenheiro, físico, professor e homem de ciência. Mais tarde, seria conhecido como Barão de Capanema.\n\nA primeira linha telegráfica brasileira ainda era pequena, mas seu significado era enorme. Ela conectava dois pontos estratégicos do poder imperial e mostrava que o Estado brasileiro começava a experimentar a transmissão elétrica de informação. A partir dali, comunicação não precisava mais depender apenas de mensageiros, cavalos, navios ou deslocamento físico.\n\nPara a história da TI no Brasil, Capanema merece um lugar especial porque ele ajudou a criar a base material das telecomunicações nacionais: fio, sinal, rota, centralidade estatal e transmissão rápida de mensagens.\n\nAinda não era computação, mas era rede. E antes de existir software, banco de dados, internet ou cloud, o país precisava aprender a transportar informação por infraestrutura técnica. Em 1852, com Capanema, esse processo começou oficialmente no Brasil.',
          en: 'The line was underground and connected the Palace of São Cristóvão, the imperial residence, to the General Headquarters in Campo, in the area of what is now Campo de Santana. Guilherme Schüch de Capanema directed the installation and the work.\n\nCapanema was a perfect figure for that moment. Born in Ouro Preto in 1824, the son of European immigrants, he was sent to Europe as a young man to study engineering. He completed his course at the Vienna Polytechnic Institute and, after returning to Brazil, built his career as an engineer, physicist, professor and man of science. Later, he would be known as Baron of Capanema.\n\nThe first Brazilian telegraph line was still small, but its meaning was enormous. It connected two strategic points of imperial power and showed that the Brazilian state was beginning to experiment with the electrical transmission of information. From that point, communication no longer needed to depend only on messengers, horses, ships or physical displacement.\n\nFor the history of IT in Brazil, Capanema deserves a special place because he helped create the material basis of national telecommunications: wire, signal, route, state centrality and fast message transmission.\n\nIt was not computing yet, but it was networking. And before software, databases, the internet or cloud could exist, the country needed to learn how to move information through technical infrastructure. In 1852, with Capanema, that process officially began in Brazil.',
        },
      },
      {
        name: 'Royal Earl House',
        imagePlaceholder: YEAR_1852_PLACEHOLDER,
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Inventor autodidata, com interesse em mecânica, eletricidade, magnetismo e química · Chegou a estudar direito em Buffalo, Nova York, mas abandonou esse caminho depois de se interessar profundamente por eletricidade',
          en: 'Self-taught inventor interested in mechanics, electricity, magnetism and chemistry · Studied law in Buffalo, New York, but left that path after becoming deeply interested in electricity',
        },
        summary: {
          pt: 'Avançou o telégrafo impressor, uma máquina que transmitia mensagens por teclado e imprimia caracteres legíveis no receptor',
          en: 'Advanced the printing telegraph, a machine that transmitted messages through a keyboard and printed readable characters at the receiver',
        },
        role: {
          pt: 'Inventor do telégrafo impressor',
          en: 'Printing telegraph inventor',
        },
        contribution: {
          pt: 'Royal Earl House já havia patenteado seu telégrafo impressor em 1846, mas em 1852 sua invenção aparece em uma versão mais avançada, associada ao modelo de patente preservado pelo Smithsonian.',
          en: 'Royal Earl House had patented his printing telegraph in 1846, but in 1852 his invention appeared in a more advanced version associated with the patent model preserved by the Smithsonian.',
        },
        detail: {
          pt: 'O sistema de House era diferente do telégrafo Morse comum: em vez de exigir que operadores interpretassem pontos e traços, ele permitia digitar em um teclado alfabético e imprimir a mensagem recebida em caracteres romanos.\n\nEsse detalhe é muito importante para a história da TI. O telégrafo de House aproximava a comunicação elétrica de uma interface mais direta entre pessoa e máquina.\n\nO sistema usava dois teclados no estilo piano, com 28 teclas, ligados por fios a rodas tipográficas sincronizadas. Quando uma tecla era pressionada no transmissor, o equipamento do outro lado imprimia o caractere correspondente. A Science History Institute descreve esse mecanismo como um exemplo de transmissão síncrona de dados, com teclados e rodas de caracteres nas duas pontas do sistema.\n\nEm linguagem moderna, House estava antecipando ideias que depois ficariam muito familiares: entrada por teclado, transmissão codificada, sincronização entre dispositivos e saída impressa.\n\nEle não venceu a guerra comercial contra o sistema Morse, que era mais simples e mais fácil de espalhar em larga escala. Mas sua invenção aponta para uma direção essencial da computação: máquinas que não apenas transmitem sinais, mas traduzem esses sinais em texto legível para humanos.\n\nPor isso, Royal Earl House entra como um personagem secundário, mas muito interessante, em 1852. Ele representa a ponte entre telégrafo, interface, terminal e impressão automática de dados.',
          en: 'The House system was different from the common Morse telegraph: instead of requiring operators to interpret dots and dashes, it allowed a person to type on an alphabetic keyboard and print the received message in Roman characters.\n\nThat detail matters deeply for IT history. The House telegraph brought electrical communication closer to a more direct interface between person and machine.\n\nThe system used two piano-style keyboards, with 28 keys, connected by wires to synchronized type wheels. When a key was pressed at the transmitter, the equipment at the other end printed the corresponding character. The Science History Institute describes the mechanism as an example of synchronous data transmission, with keyboards and character wheels at both ends of the system.\n\nIn modern language, House was anticipating ideas that would later become very familiar: keyboard input, encoded transmission, synchronization between devices and printed output.\n\nHe did not win the commercial battle against the Morse system, which was simpler and easier to spread at scale. But his invention points toward an essential direction in computing: machines that do not merely transmit signals, but translate those signals into human-readable text.\n\nThat is why Royal Earl House appears as a secondary but very interesting figure in 1852. He represents the bridge between telegraphy, interface, terminal and automatic data printing.',
        },
      },
      {
        name: 'Ada Lovelace',
        imagePlaceholder: YEAR_1852_PLACEHOLDER,
        flag: '🇬🇧',
        nationality: { pt: 'Britânica', en: 'British' },
        formation: {
          pt: 'Educação particular em matemática, lógica e ciências, com orientação de tutores como Augustus De Morgan e forte contato intelectual com Charles Babbage',
          en: 'Private education in mathematics, logic and science, with guidance from tutors such as Augustus De Morgan and strong intellectual contact with Charles Babbage',
        },
        summary: {
          pt: 'Morreu em 1852. Seu grande feito para a história da computação aconteceu antes, em 1843, com suas notas sobre a Máquina Analítica de Charles Babbage',
          en: 'Died in 1852. Her major contribution to computing history had happened earlier, in 1843, with her notes on Charles Babbage and the Analytical Engine',
        },
        role: {
          pt: 'Nota histórica: primeira programadora da história',
          en: 'Historical note: the first programmer in history',
        },
        contribution: {
          pt: 'Em 27 de novembro de 1852, morreu Ada Lovelace, uma das figuras mais simbólicas da história da computação. Ela não entra em 1852 por uma nova invenção ou descoberta naquele ano.',
          en: 'On November 27, 1852, Ada Lovelace died. She remains one of the most symbolic figures in computing history, but she does not appear in 1852 because of a new invention or discovery that year.',
        },
        detail: {
          pt: 'O motivo de sua importância vem de 1843, quando publicou suas famosas notas sobre a Máquina Analítica de Charles Babbage. Nessas notas, Ada enxergou algo que ia além de cálculo mecânico: a possibilidade de uma máquina manipular símbolos seguindo instruções formais.',
          en: 'Her importance comes from 1843, when she published her famous notes on the Analytical Engine of Charles Babbage. In those notes, Ada saw something beyond mechanical calculation: the possibility of a machine manipulating symbols by following formal instructions.',
        },
      },
    ],
  },
  {
    year: 1853,
    era: { pt: 'O Cálculo Automático Entra em Cena', en: 'Automatic Calculation Enters the Stage' },
    context: {
      pt: 'Em 1853, a história da TI ganha um marco muito especial: uma máquina inspirada nas ideias de Charles Babbage finalmente consegue calcular e imprimir tabelas automaticamente. Ao mesmo tempo, redes telegráficas continuam crescendo em escala nacional e imperial, mostrando que informação já estava virando infraestrutura estratégica.',
      en: 'In 1853, IT history gained a very special milestone: a machine inspired by Charles Babbage finally managed to calculate and print tables automatically. At the same time, telegraph networks kept growing at national and imperial scale, showing that information was already becoming strategic infrastructure.',
    },
    peopleCount: 7,
    people: [
      {
        name: 'Per Georg Scheutz & Edvard Scheutz',
        imagePlaceholder: YEAR_1853_PLACEHOLDER,
        flag: '🇸🇪',
        nationality: { pt: 'Suecos', en: 'Swedish' },
        formation: {
          pt: 'Per Georg Scheutz: editor, impressor, jornalista, tradutor e inventor, com formação prática em publicação, mecânica e experimentação técnica · Edvard Scheutz: engenheiro e construtor mecânico prático, envolvido desde jovem na fabricação da máquina de diferenças do pai',
          en: 'Per Georg Scheutz: editor, printer, journalist, translator and inventor, with practical training in publishing, mechanics and technical experimentation · Edvard Scheutz: practical engineer and mechanical builder, involved from a young age in making his father\'s difference engine',
        },
        summary: {
          pt: 'Construíram, em 1853, uma máquina de diferenças funcional em metal, capaz de calcular tabelas numéricas e imprimir os resultados automaticamente',
          en: 'Built, in 1853, a working metal difference engine capable of calculating numerical tables and printing the results automatically',
        },
        role: {
          pt: 'Construtores da primeira calculadora impressora vendida',
          en: 'Builders of the first printing calculator sold',
        },
        contribution: {
          pt: 'Em 1853, Per Georg Scheutz e seu filho Edvard Scheutz concluíram em Estocolmo uma das máquinas mais importantes da pré-história da computação: uma máquina de diferenças funcional, feita em metal, inspirada diretamente nas ideias de Charles Babbage.',
          en: 'In 1853, Per Georg Scheutz and his son Edvard Scheutz completed in Stockholm one of the most important machines in the prehistory of computing: a working metal difference engine directly inspired by the ideas of Charles Babbage.',
        },
        detail: {
          pt: 'Babbage tinha imaginado máquinas capazes de calcular tabelas matemáticas automaticamente, mas seus grandes projetos ficaram inacabados. Os Scheutz pegaram essa visão e conseguiram levar uma versão menor, mais simples e mais prática para o mundo físico.\n\nA máquina usava o método das diferenças finitas para calcular valores de tabelas numéricas. O ponto mais importante é que ela não apenas calculava: ela também imprimia os resultados. Isso atacava dois problemas enormes da época: erros humanos de cálculo e erros humanos de reprodução em tabelas científicas, astronômicas, náuticas e estatísticas.\n\nO Computer History Museum registra que Per Georg Scheutz foi inspirado pelo trabalho de Babbage em 1834, construiu protótipos com o filho Edvard e produziu uma versão completa em metal em Estocolmo, em 1853. O museu também destaca que o protótipo anterior, de 1843, já produzia as primeiras tabelas calculadas e impressas por máquina.\n\nO Smithsonian descreve a máquina dos Scheutz como a primeira calculadora impressora vendida. Ela foi exibida na Exposição Universal de Paris em 1855 e depois vendida ao Dudley Observatory, nos Estados Unidos. O próprio registro do Smithsonian data o objeto de 1853 e o classifica como uma máquina de diferenças feita em Estocolmo.\n\nPara a história da TI, esse é um momento gigantesco. A máquina dos Scheutz mostra uma lógica muito próxima do que depois seria central na computação: entrada de parâmetros, processamento mecânico, cálculo automático e saída impressa.\n\nAinda não era computador programável no sentido moderno. Mas era uma máquina construída para automatizar trabalho intelectual repetitivo, reduzir erro humano e produzir informação confiável em escala.\n\nÉ por isso que 1853 pode ser chamado de o ano em que o cálculo automático começou a sair da teoria e virar produto físico.',
          en: 'Babbage had imagined machines capable of calculating mathematical tables automatically, but his major projects remained unfinished. The Scheutzes took that vision and managed to bring a smaller, simpler and more practical version into the physical world.\n\nThe machine used the method of finite differences to calculate values for numerical tables. The most important point is that it did not only calculate: it also printed the results. That attacked two enormous problems of the period: human errors in calculation and human errors in reproducing scientific, astronomical, nautical and statistical tables.\n\nThe Computer History Museum records that Per Georg Scheutz was inspired by Babbage in 1834, built prototypes with his son Edvard and produced a complete metal version in Stockholm in 1853. The museum also notes that the earlier prototype, from 1843, had already produced the first tables calculated and printed by machine.\n\nThe Smithsonian describes the Scheutz machine as the first printing calculator ever sold. It was shown at the Paris Universal Exposition in 1855 and later sold to the Dudley Observatory in the United States. The Smithsonian record itself dates the object to 1853 and classifies it as a difference engine made in Stockholm.\n\nFor IT history, this is a huge moment. The Scheutz machine shows a logic very close to what would later become central to computing: parameter input, mechanical processing, automatic calculation and printed output.\n\nIt was not a programmable computer in the modern sense. But it was a machine built to automate repetitive intellectual work, reduce human error and produce reliable information at scale.\n\nThat is why 1853 can be called the year when automatic calculation began to leave theory and become a physical product.',
        },
      },
      {
        name: 'William Brooke O’Shaughnessy & James Andrew Broun-Ramsay, Lord Dalhousie',
        imagePlaceholder: YEAR_1853_PLACEHOLDER,
        flag: '🇮🇪 🇬🇧',
        nationality: {
          pt: 'O’Shaughnessy: irlandês · Lord Dalhousie: britânico, escocês',
          en: 'O’Shaughnessy: Irish · Lord Dalhousie: British, Scottish',
        },
        formation: {
          pt: 'O’Shaughnessy: médico formado pela University of Edinburgh, onde obteve o grau de M.D. em 1830; também foi químico, pesquisador, professor e inventor · Lord Dalhousie: aristocrata e administrador colonial britânico, educado na tradição política e administrativa da elite britânica, atuando como governador-geral da Índia',
          en: 'O’Shaughnessy: physician trained at the University of Edinburgh, where he received an M.D. in 1830; also a chemist, researcher, professor and inventor · Lord Dalhousie: British aristocrat and colonial administrator, educated in the political and administrative tradition of the British elite, serving as governor-general of India',
        },
        summary: {
          pt: 'Foram os personagens centrais na implantação inicial da rede telegráfica da Índia britânica, que começou a ser construída em escala em 1853',
          en: 'Were central figures in the initial deployment of the British Indian telegraph network, which began to be built at scale in 1853',
        },
        role: {
          pt: 'Arquitetos técnico e político do telégrafo na Índia britânica',
          en: 'Technical and political architects of the telegraph in British India',
        },
        contribution: {
          pt: 'Em 1853, a Índia britânica começou a ser costurada por fios telegráficos em escala muito maior. Esse processo teve dois personagens fundamentais: William Brooke O’Shaughnessy, o técnico-científico do projeto, e Lord Dalhousie, o patrocinador político e administrativo.',
          en: 'In 1853, British India began to be stitched together by telegraph wires at a much larger scale. Two figures were fundamental to that process: William Brooke O’Shaughnessy, the technical and scientific leader, and Lord Dalhousie, the political and administrative sponsor.',
        },
        detail: {
          pt: 'O’Shaughnessy era médico, químico e inventor. Nasceu em Limerick, na Irlanda, e estudou medicina na University of Edinburgh, onde se formou M.D. em 1830. Mais tarde, tornou-se uma figura científica importante na Índia, trabalhando com química, farmacologia, eletricidade e telegrafia.\n\nA partir de 1852, O’Shaughnessy foi nomeado Superintendent of Telegraphs. Entre 1853 e 1855, foram instaladas milhares de milhas de linhas telegráficas na Índia. O relato biográfico registra que, nesse período, cerca de 3.500 milhas de telégrafo foram instaladas, além da produção de manuais e relatórios técnicos sobre os sistemas telegráficos usados no país.\n\nLord Dalhousie foi o grande impulsionador político. Como governador-geral da Índia, ele entendeu que o telégrafo poderia servir como infraestrutura de governo, administração, comércio e controle militar. O telégrafo reduzia drasticamente o tempo entre um evento acontecer em uma região distante e a autoridade central receber a informação.\n\nPara a história da TI, esse evento é importante porque mostra a rede elétrica deixando de ser apenas uma curiosidade técnica e virando infraestrutura imperial. Informação passou a circular com velocidade inédita em um território gigantesco.\n\nO telégrafo na Índia não era só comunicação. Era uma rede de decisão. Era uma forma de comprimir distância, acelerar comando, conectar cidades e transformar território em sistema.\n\nEsse é um dos grandes passos do século XIX rumo ao mundo conectado.',
          en: 'O’Shaughnessy was a physician, chemist and inventor. He was born in Limerick, Ireland, and studied medicine at the University of Edinburgh, where he received his M.D. in 1830. Later, he became an important scientific figure in India, working with chemistry, pharmacology, electricity and telegraphy.\n\nFrom 1852, O’Shaughnessy was appointed Superintendent of Telegraphs. Between 1853 and 1855, thousands of miles of telegraph lines were installed in India. His biographical record notes that around 3,500 miles of telegraph were installed during that period, along with manuals and technical reports on the telegraph systems used in the country.\n\nLord Dalhousie was the major political driver. As governor-general of India, he understood that the telegraph could serve as infrastructure for government, administration, commerce and military control. The telegraph drastically reduced the time between an event occurring in a distant region and the central authority receiving the information.\n\nFor IT history, this event matters because it shows the electrical network leaving the realm of technical curiosity and becoming imperial infrastructure. Information began to circulate at unprecedented speed across a vast territory.\n\nThe telegraph in India was not just communication. It was a decision network. It compressed distance, accelerated command, connected cities and turned territory into a system.\n\nThis is one of the major 19th-century steps toward the connected world.',
        },
      },
      {
        name: 'Werner von Siemens & Carl Heinrich von Siemens',
        imagePlaceholder: YEAR_1853_PLACEHOLDER,
        flag: '🇩🇪',
        nationality: { pt: 'Alemães', en: 'German' },
        formation: {
          pt: 'Werner von Siemens: formação militar e técnica na artilharia prussiana, com estudos na Escola de Artilharia e Engenharia de Berlim; inventor, engenheiro elétrico e empreendedor · Carl Heinrich von Siemens: formação prática em negócios, operação internacional e gestão técnica dentro da empresa familiar Siemens & Halske',
          en: 'Werner von Siemens: military and technical training in the Prussian artillery, with studies at the Artillery and Engineering School in Berlin; inventor, electrical engineer and entrepreneur · Carl Heinrich von Siemens: practical training in business, international operation and technical management inside the Siemens & Halske family company',
        },
        summary: {
          pt: 'Em 1853, a Siemens & Halske recebeu o contrato para construir a rede telegráfica estatal russa, com cerca de 9.000 quilômetros, e Carl Siemens foi enviado para São Petersburgo para organizar a operação local',
          en: 'In 1853, Siemens & Halske received the contract to build the Russian state telegraph network, about 9,000 kilometers long, and Carl Siemens was sent to Saint Petersburg to organize local operations',
        },
        role: {
          pt: 'Construtores de infraestrutura telegráfica continental',
          en: 'Builders of continental telegraph infrastructure',
        },
        contribution: {
          pt: 'Em 1853, a Siemens deixou de ser apenas uma empresa jovem e promissora de telégrafos para se tornar uma construtora de infraestrutura em escala continental.',
          en: 'In 1853, Siemens stopped being only a young and promising telegraph company and became a builder of infrastructure at continental scale.',
        },
        detail: {
          pt: 'Naquele ano, o governo russo contratou a Siemens & Halske para construir a rede telegráfica estatal russa, com aproximadamente 9.000 quilômetros. A própria Siemens registra esse contrato como um marco da fase inicial de expansão da empresa. Para executar a operação, foi aberto um escritório de construção em São Petersburgo, que mais tarde se tornaria uma subsidiária independente chefiada por Carl Heinrich von Siemens, irmão mais novo de Werner.\n\nWerner von Siemens já vinha construindo sua reputação desde a fundação da Siemens & Halske, em 1847, quando criou o telégrafo de ponteiro e montou a empresa com Johann Georg Halske. Sua formação militar e técnica ajudou muito nesse começo: ele vinha da tradição de engenharia aplicada da artilharia prussiana, misturando ciência, oficina, instrumento e infraestrutura. Fontes históricas registram sua formação na Escola de Artilharia e Engenharia de Berlim antes de sua carreira como inventor e empresário.\n\nCarl Heinrich von Siemens entrou como peça essencial na expansão internacional. Ele foi enviado a São Petersburgo em 1853 para tocar a frente russa da empresa. A operação deu tão certo que ajudou a transformar a Siemens em uma companhia internacional de infraestrutura elétrica. A linha histórica oficial da Siemens registra que, em 1856, a empresa já tinha 330 funcionários, dois terços deles trabalhando na Rússia.\n\nPara a história da TI, esse evento representa a transformação das redes de comunicação em grandes projetos nacionais. Construir telégrafo em 1853 era como construir backbone de internet no século XX: exigia capital, técnica, território, padrão, manutenção, escala e confiança política.\n\nA Siemens começou ali a se consolidar como uma das grandes empresas de infraestrutura tecnológica do mundo moderno.',
          en: 'That year, the Russian government hired Siemens & Halske to build the Russian state telegraph network, approximately 9,000 kilometers long. Siemens itself records this contract as a milestone in the company\'s early expansion. To execute the operation, a construction office was opened in Saint Petersburg; later, it would become an independent subsidiary headed by Carl Heinrich von Siemens, Werner\'s younger brother.\n\nWerner von Siemens had been building his reputation since the founding of Siemens & Halske in 1847, when he created the pointer telegraph and set up the company with Johann Georg Halske. His military and technical training helped a great deal in this beginning: he came from the applied engineering tradition of the Prussian artillery, mixing science, workshop practice, instruments and infrastructure. Historical sources record his training at the Artillery and Engineering School in Berlin before his career as inventor and entrepreneur.\n\nCarl Heinrich von Siemens became an essential part of international expansion. He was sent to Saint Petersburg in 1853 to run the Russian front of the company. The operation worked so well that it helped transform Siemens into an international electrical infrastructure company. The official Siemens timeline records that, by 1856, the company already had 330 employees, two thirds of them working in Russia.\n\nFor IT history, this event represents the transformation of communication networks into large national projects. Building telegraphy in 1853 was like building internet backbone in the 20th century: it required capital, technique, territory, standards, maintenance, scale and political trust.\n\nSiemens began there to consolidate itself as one of the great technological infrastructure companies of the modern world.',
        },
      },
      {
        name: 'Robert Stirling Newall',
        imagePlaceholder: YEAR_1853_PLACEHOLDER,
        flag: '🇬🇧',
        nationality: { pt: 'Britânico, escocês', en: 'British, Scottish' },
        formation: {
          pt: 'Engenheiro e inventor prático, formado pela experiência industrial em máquinas a vapor, cabos metálicos, fabricação de wire rope e engenharia de lançamento de cabos submarinos',
          en: 'Practical engineer and inventor, formed by industrial experience with steam machinery, metal cables, wire rope manufacturing and submarine cable-laying engineering',
        },
        summary: {
          pt: 'Inventou, em 1853, o sistema de brake-drum and cone, usado para controlar o lançamento de cabos submarinos em águas profundas',
          en: 'Invented, in 1853, the brake-drum and cone system used to control the laying of submarine cables in deep water',
        },
        role: {
          pt: 'Engenheiro de cabos submarinos',
          en: 'Submarine cable engineer',
        },
        contribution: {
          pt: 'Em 1853, Robert Stirling Newall deu um passo importante para tornar os cabos submarinos mais viáveis e controláveis em águas profundas.',
          en: 'In 1853, Robert Stirling Newall took an important step toward making submarine cables more viable and controllable in deep water.',
        },
        detail: {
          pt: 'Newall era um engenheiro escocês nascido em Dundee, em 1812. Começou sua carreira no mundo comercial e industrial, trabalhou com experimentos envolvendo vapor e depois se tornou um dos nomes centrais da fabricação de cabos metálicos. Sua empresa, R. S. Newall and Company, ficou conhecida por produzir cabos de aço e depois cabos telegráficos submarinos.\n\nO grande problema dos cabos submarinos era simples de explicar e difícil de resolver: como lançar quilômetros de cabo pesado no fundo do mar sem quebrar, embolar, esticar demais ou perder o controle da descida?\n\nEm 1853, Newall inventou o brake-drum and cone, um mecanismo para controlar a saída do cabo durante o lançamento em águas profundas. O Dictionary of National Biography registra essa invenção como um avanço importante para o lançamento de cabos em alto-mar.\n\nEsse tipo de avanço parece mecânico demais à primeira vista, mas é fundamental para a história da TI. Sem cabo confiável, não existe rede. Sem rede submarina, não existe comunicação internacional rápida. Sem comunicação internacional rápida, não existe o mundo conectado que depois permitiria internet, cloud, sistemas financeiros globais e infraestrutura digital.\n\nNewall já havia participado da evolução dos cabos blindados usados em linhas submarinas anteriores, incluindo o cabo Dover-Calais de 1851. Em 1853, sua contribuição foi atacar outro gargalo: não apenas fabricar o cabo, mas conseguir lançá-lo de forma mais segura em ambientes marítimos difíceis.\n\nEle representa uma parte essencial da história da tecnologia que muita gente esquece: antes dos dados atravessarem oceanos em fibra óptica, alguém precisou aprender a colocar fios no fundo do mar sem destruir tudo no processo.',
          en: 'Newall was a Scottish engineer born in Dundee in 1812. He began his career in the commercial and industrial world, worked with experiments involving steam and later became one of the central names in metal cable manufacturing. His company, R. S. Newall and Company, became known for producing steel cables and later submarine telegraph cables.\n\nThe big problem of submarine cables was easy to explain and hard to solve: how do you lay kilometers of heavy cable on the seabed without breaking it, tangling it, stretching it too far or losing control of the descent?\n\nIn 1853, Newall invented the brake-drum and cone, a mechanism for controlling the payout of cable during deep-water laying. The Dictionary of National Biography records this invention as an important advance for laying cables in the open sea.\n\nThis kind of advance may look too mechanical at first, but it is fundamental to IT history. Without reliable cable, there is no network. Without submarine networks, there is no fast international communication. Without fast international communication, there is no connected world that later makes the internet, cloud, global financial systems and digital infrastructure possible.\n\nNewall had already taken part in the evolution of armoured cables used in earlier submarine lines, including the Dover-Calais cable of 1851. In 1853, his contribution was to attack another bottleneck: not just manufacturing the cable, but laying it more safely in difficult maritime environments.\n\nHe represents an essential part of technology history that many people forget: before data crossed oceans through optical fiber, someone had to learn how to put wires on the seabed without destroying everything in the process.',
        },
      },
    ],
  },
  {
    year: 1854,
    era: { pt: 'A Lógica Vira Matemática', en: 'Logic Becomes Mathematics' },
    context: {
      pt: 'Em 1854, a TI ganha um dos seus ancestrais mais importantes: George Boole publica a obra que daria origem à lógica booleana, base conceitual dos circuitos digitais, da computação binária e das operações lógicas usadas até hoje.\n\nAo mesmo tempo, o telégrafo continua virando infraestrutura global: nasce o plano do cabo transatlântico, o Japão recebe demonstrações de telegrafia ocidental e os problemas físicos dos cabos submarinos começam a ser tratados matematicamente.',
      en: 'In 1854, IT gained one of its most important ancestors: George Boole published the work that would give rise to Boolean logic, the conceptual foundation of digital circuits, binary computing and the logical operations still used today.\n\nAt the same time, the telegraph kept becoming global infrastructure: the plan for the transatlantic cable was born, Japan received demonstrations of Western telegraphy, and the physical problems of submarine cables began to be treated mathematically.',
    },
    peopleCount: 6,
    people: [
      {
        name: 'George Boole',
        imagePlaceholder: YEAR_1854_PLACEHOLDER,
        flag: '🇬🇧',
        nationality: { pt: 'Britânico, inglês', en: 'British, English' },
        formation: {
          pt: 'Autodidata em matemática, lógica e línguas. Trabalhou como professor escolar na Inglaterra e, em 1849, tornou-se o primeiro professor de matemática do Queen’s College, Cork, na Irlanda, mesmo sem ter seguido uma formação universitária tradicional.',
          en: 'Self-taught in mathematics, logic and languages. He worked as a schoolteacher in England and, in 1849, became the first professor of mathematics at Queen’s College, Cork, in Ireland, even without following a traditional university path.',
        },
        summary: {
          pt: 'Publicou, em 1854, An Investigation of the Laws of Thought, obra que lançou as bases da álgebra booleana',
          en: 'Published, in 1854, An Investigation of the Laws of Thought, the work that laid the foundations of Boolean algebra',
        },
        role: {
          pt: 'Matemático e fundador da lógica booleana',
          en: 'Mathematician and founder of Boolean logic',
        },
        contribution: {
          pt: 'Em 1854, George Boole publicou uma das obras mais importantes da história da computação antes mesmo de existir computador: An Investigation of the Laws of Thought, on Which are Founded the Mathematical Theories of Logic and Probabilities.',
          en: 'In 1854, George Boole published one of the most important works in the history of computing before computers existed: An Investigation of the Laws of Thought, on Which are Founded the Mathematical Theories of Logic and Probabilities.',
        },
        detail: {
          pt: 'A ideia central era radical para a época. Boole tentou mostrar que o pensamento lógico podia ser tratado matematicamente. Em vez de lidar com lógica apenas como filosofia ou linguagem, ele propôs representar raciocínios por símbolos e operações algébricas.\n\nEsse movimento criou o que depois seria chamado de álgebra booleana.\n\nNa prática, Boole abriu caminho para uma ideia que hoje parece óbvia em computação: decisões podem ser representadas por estados lógicos, como verdadeiro/falso, sim/não, ligado/desligado, 1/0.\n\nQuase um século depois, Claude Shannon mostraria como essa lógica poderia ser aplicada a circuitos elétricos. A ponte entre Boole e Shannon é uma das conexões mais bonitas da história da TI: uma teoria matemática criada para representar pensamento humano acabou se tornando base para computadores digitais, portas lógicas, linguagens de programação, bancos de dados, filtros de busca e praticamente toda tomada de decisão computacional.\n\nPor isso, Boole é o grande nome de 1854. Se Babbage imaginou máquinas de calcular e Ada Lovelace imaginou instruções para máquinas, Boole ajudou a criar a linguagem lógica que mais tarde faria essas máquinas decidirem.\n\nEsse é um marco obrigatório no Hall da Fama.',
          en: 'The central idea was radical for its time. Boole tried to show that logical thought could be treated mathematically. Instead of handling logic only as philosophy or language, he proposed representing reasoning with symbols and algebraic operations.\n\nThat move created what would later be called Boolean algebra.\n\nIn practice, Boole opened the path to an idea that now feels obvious in computing: decisions can be represented by logical states such as true/false, yes/no, on/off, 1/0.\n\nAlmost a century later, Claude Shannon would show how this logic could be applied to electrical circuits. The bridge between Boole and Shannon is one of the most beautiful connections in IT history: a mathematical theory created to represent human thought became the foundation for digital computers, logic gates, programming languages, databases, search filters and practically every computational decision.\n\nThat is why Boole is the great name of 1854. If Babbage imagined calculating machines and Ada Lovelace imagined instructions for machines, Boole helped create the logical language that would later let those machines decide.\n\nThis is a mandatory milestone in the Hall of Fame.',
        },
      },
      {
        name: 'Cyrus West Field & Frederic Newton Gisborne',
        imagePlaceholder: YEAR_1854_PLACEHOLDER,
        flag: '🇺🇸 🇬🇧 🇨🇦',
        nationality: {
          pt: 'Field: americano · Gisborne: britânico de nascimento, associado à história canadense da telegrafia',
          en: 'Field: American · Gisborne: British-born, associated with Canadian telegraph history',
        },
        formation: {
          pt: 'Field: comerciante e empresário do setor de papel, com formação prática em negócios, financiamento e organização empresarial. Não era engenheiro de telégrafo, mas entendeu rapidamente o valor comercial da comunicação instantânea entre continentes.\n\nGisborne: engenheiro, eletricista e inventor, com educação especial em matemática e engenharia civil, além de experiência prática em linhas telegráficas e cabos submarinos.',
          en: 'Field: merchant and paper-industry entrepreneur, with practical training in business, finance and company organization. He was not a telegraph engineer, but quickly understood the commercial value of instant communication between continents.\n\nGisborne: engineer, electrician and inventor, with special education in mathematics and civil engineering, plus practical experience in telegraph lines and submarine cables.',
        },
        summary: {
          pt: 'Em 1854, deram o primeiro grande impulso empresarial ao projeto de conectar a América do Norte e a Europa por cabo telegráfico transatlântico',
          en: 'In 1854, gave the first major business push to the project of connecting North America and Europe by transatlantic telegraph cable',
        },
        role: {
          pt: 'Impulsionadores do projeto do cabo transatlântico',
          en: 'Drivers of the transatlantic cable project',
        },
        contribution: {
          pt: 'Em 1854, Frederic Newton Gisborne apresentou a Cyrus West Field uma ideia que parecia quase absurda para a época: conectar Newfoundland, no atual Canadá, ao sistema telegráfico norte-americano e, a partir dali, sonhar com uma conexão atravessando o Atlântico até a Europa.',
          en: 'In 1854, Frederic Newton Gisborne presented Cyrus West Field with an idea that seemed almost absurd for the time: connect Newfoundland, in present-day Canada, to the North American telegraph system and, from there, dream of a connection across the Atlantic to Europe.',
        },
        detail: {
          pt: 'Gisborne já tinha experiência com cabos submarinos e havia trabalhado em projetos telegráficos na região atlântica do Canadá. Mas faltava dinheiro. Field, por outro lado, era um empresário rico, vindo do setor de papel, com faro comercial e capacidade de mobilizar investidores.\n\nO encontro dos dois foi decisivo.\n\nField percebeu que, se fosse possível conectar Newfoundland à América do Norte, talvez também fosse possível estender a rede até a Irlanda. A partir dessa visão, ele participou da organização da New York, Newfoundland and London Telegraph Company, fundada em 1854 para levar adiante essa primeira etapa do projeto. A Britannica registra Field como um dos fundadores da empresa naquele ano.\n\nEsse projeto ainda levaria anos para funcionar de verdade. O primeiro cabo transatlântico só conseguiria enviar mensagens em 1858, e mesmo assim falharia pouco depois. A ligação confiável só viria em 1866.\n\nMas 1854 é o ano em que a ambição entra em cena.\n\nPara a história da TI, esse evento é enorme porque representa a visão de uma rede global de informação. Antes de internet, fibra óptica, satélite ou cloud, já existia a pergunta central:\n\ne se continentes pudessem trocar informação quase em tempo real?\n\nField e Gisborne ajudaram a transformar essa pergunta em empresa, financiamento, rota, projeto e risco real.',
          en: 'Gisborne already had experience with submarine cables and had worked on telegraph projects in Atlantic Canada. But he lacked money. Field, on the other hand, was a wealthy entrepreneur from the paper industry, with commercial instinct and the ability to mobilize investors.\n\nTheir meeting was decisive.\n\nField realized that, if Newfoundland could be connected to North America, perhaps the network could also be extended to Ireland. From that vision, he helped organize the New York, Newfoundland and London Telegraph Company, founded in 1854 to carry this first stage of the project forward. Britannica records Field as one of the company’s founders that year.\n\nThe project would still take years to truly work. The first transatlantic cable would only manage to send messages in 1858, and even then it failed shortly afterward. A reliable link would only arrive in 1866.\n\nBut 1854 is the year when the ambition enters the stage.\n\nFor IT history, this event is enormous because it represents the vision of a global information network. Before the internet, optical fiber, satellites or cloud, the central question already existed:\n\nwhat if continents could exchange information almost in real time?\n\nField and Gisborne helped turn that question into a company, financing, a route, a project and real risk.',
        },
      },
      {
        name: 'Michael Faraday & William Thomson',
        imagePlaceholder: YEAR_1854_PLACEHOLDER,
        flag: '🇬🇧',
        nationality: {
          pt: 'Faraday: britânico, inglês · Thomson: britânico, nascido em Belfast, na atual Irlanda do Norte',
          en: 'Faraday: British, English · Thomson: British, born in Belfast, in present-day Northern Ireland',
        },
        formation: {
          pt: 'Faraday: formação prática e autodidata, começou como aprendiz de encadernador e se tornou um dos maiores experimentalistas da história da eletricidade e do magnetismo.\n\nThomson: formação matemática e física na University of Glasgow e na University of Cambridge, tornando-se professor de filosofia natural em Glasgow ainda muito jovem.',
          en: 'Faraday: practical and self-taught formation; he began as a bookbinder’s apprentice and became one of the greatest experimentalists in the history of electricity and magnetism.\n\nThomson: mathematical and physical training at the University of Glasgow and the University of Cambridge, becoming professor of natural philosophy in Glasgow while still very young.',
        },
        summary: {
          pt: 'Em 1854, Faraday ajudou a tornar público o problema da retardação de sinais em cabos subterrâneos e submarinos, enquanto Thomson começou a modelar matematicamente como sinais elétricos se propagavam em cabos longos',
          en: 'In 1854, Faraday helped make public the problem of signal retardation in underground and submarine cables, while Thomson began mathematically modeling how electrical signals propagated through long cables',
        },
        role: {
          pt: 'Pioneiros da teoria física dos sinais em cabos longos',
          en: 'Pioneers of the physical theory of signals in long cables',
        },
        contribution: {
          pt: 'Em 1854, a telegrafia submarina encontrou um problema que parece muito moderno: o sinal chegava deformado.',
          en: 'In 1854, submarine telegraphy encountered a problem that feels very modern: the signal arrived distorted.',
        },
        detail: {
          pt: 'Em linhas aéreas curtas, o telégrafo funcionava relativamente bem. Mas em cabos longos, especialmente subterrâneos e submarinos, os pulsos elétricos não viajavam de forma limpa. Eles se espalhavam, atrasavam e se misturavam. O resultado era uma espécie de “borrão” no sinal, dificultando a leitura das mensagens.\n\nHoje, olhando com cabeça de TI, dá para enxergar isso como um ancestral dos problemas de latência, largura de banda, ruído, perda de sinal e interferência entre símbolos.\n\nLatimer Clark já havia observado o problema em cabos, e Michael Faraday ajudou a chamar atenção para o fenômeno em 1854. Em seguida, William Thomson começou a tratar o problema matematicamente. O artigo de Thomson, On the Theory of the Electric Telegraph, foi recebido pela Royal Society em 1855, mas o próprio texto informa que a investigação começou a partir de uma carta de George Gabriel Stokes datada de 16 de outubro de 1854.\n\nA importância disso é gigantesca.\n\nAté então, muita gente pensava no telégrafo como uma questão de fio, bateria e operador. Thomson começa a mostrar que comunicação elétrica em longa distância também é matemática aplicada: resistência, capacitância, comprimento do cabo, atraso e forma do sinal importam.\n\nEssa linha de pensamento seria essencial para cabos submarinos, telefonia, rádio, transmissão de dados, redes e telecomunicações modernas.\n\nFaraday mostrou que havia um fenômeno físico profundo ali. Thomson começou a transformar esse fenômeno em teoria de engenharia.\n\nÉ um marco menos “popular” que Boole, mas muito importante para a história da infraestrutura de dados.',
          en: 'On short overhead lines, the telegraph worked relatively well. But in long cables, especially underground and submarine cables, electrical pulses did not travel cleanly. They spread, delayed and mixed together. The result was a kind of signal “blur,” making messages harder to read.\n\nToday, with an IT mindset, this looks like an ancestor of latency, bandwidth, noise, signal loss and intersymbol interference problems.\n\nLatimer Clark had already observed the problem in cables, and Michael Faraday helped draw attention to the phenomenon in 1854. Then William Thomson began treating the problem mathematically. Thomson’s paper, On the Theory of the Electric Telegraph, was received by the Royal Society in 1855, but the text itself states that the investigation began from a letter by George Gabriel Stokes dated October 16, 1854.\n\nThe importance of this is enormous.\n\nUntil then, many people thought of the telegraph as a question of wire, battery and operator. Thomson began showing that long-distance electrical communication was also applied mathematics: resistance, capacitance, cable length, delay and signal shape mattered.\n\nThis line of thought would be essential for submarine cables, telephony, radio, data transmission, networks and modern telecommunications.\n\nFaraday showed that there was a deep physical phenomenon there. Thomson began turning that phenomenon into engineering theory.\n\nIt is a less “popular” milestone than Boole, but it is very important for the history of data infrastructure.',
        },
      },
      {
        name: 'Matthew Calbraith Perry',
        imagePlaceholder: YEAR_1854_PLACEHOLDER,
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Oficial naval de carreira da Marinha dos Estados Unidos, formado pela experiência militar, marítima e diplomática. Comandou a expedição norte-americana ao Japão entre 1852 e 1854.',
          en: 'Career naval officer in the United States Navy, formed by military, maritime and diplomatic experience. He commanded the American expedition to Japan between 1852 and 1854.',
        },
        summary: {
          pt: 'Em 1854, levou instrumentos telegráficos ao Japão como parte da expedição que abriu contato diplomático e comercial entre os Estados Unidos e o xogunato Tokugawa',
          en: 'In 1854, brought telegraph instruments to Japan as part of the expedition that opened diplomatic and commercial contact between the United States and the Tokugawa shogunate',
        },
        role: {
          pt: 'Difusor diplomático da telegrafia no Japão',
          en: 'Diplomatic diffuser of telegraphy in Japan',
        },
        contribution: {
          pt: 'Em 1854, durante a segunda visita da expedição de Matthew C. Perry ao Japão, a telegrafia elétrica foi apresentada como uma das tecnologias-símbolo do Ocidente industrial.',
          en: 'In 1854, during the second visit of Matthew C. Perry’s expedition to Japan, electrical telegraphy was presented as one of the symbolic technologies of the industrial West.',
        },
        detail: {
          pt: 'A Marinha dos Estados Unidos registra que Perry levou, entre os presentes da missão, dois instrumentos telegráficos. A NTT, empresa japonesa de telecomunicações, também registra que, quando Perry retornou ao Japão em 1854, o xogunato recebeu conjuntos de telégrafo.\n\nEsse evento não significa que o Japão tenha criado imediatamente uma rede telegráfica nacional em 1854. Isso viria depois, especialmente no período de modernização Meiji. Mas o episódio é importante porque marcou a chegada simbólica e diplomática da tecnologia telegráfica ao Japão.\n\nPerry não era inventor de telégrafo, e por isso eu não colocaria ele no mesmo peso técnico de Boole, Faraday ou Thomson. Mas, para uma trilha histórica de TI, o evento é interessante porque mostra a difusão global da tecnologia de comunicação elétrica.\n\nO telégrafo aparece ali como demonstração de poder técnico. Era uma forma de dizer: o mundo industrial agora transmite informação por fios, comprime distâncias e acelera decisões.\n\nEm 1854, o Japão viu de perto uma tecnologia que depois se tornaria parte essencial de sua própria modernização.',
          en: 'The United States Navy records that Perry brought two telegraph instruments among the mission’s gifts. NTT, the Japanese telecommunications company, also records that when Perry returned to Japan in 1854, the shogunate received telegraph sets.\n\nThis event does not mean that Japan immediately created a national telegraph network in 1854. That would come later, especially during the Meiji modernization period. But the episode matters because it marked the symbolic and diplomatic arrival of telegraph technology in Japan.\n\nPerry was not a telegraph inventor, so I would not place him at the same technical weight as Boole, Faraday or Thomson. But for an IT historical path, the event is interesting because it shows the global diffusion of electrical communication technology.\n\nThe telegraph appears there as a demonstration of technical power. It was a way of saying: the industrial world now transmits information through wires, compresses distances and accelerates decisions.\n\nIn 1854, Japan saw up close a technology that would later become an essential part of its own modernization.',
        },
      },
    ],
  },
  {
    year: 1855,
    era: { pt: 'A Máquina Calcula, a Rede Imprime', en: 'The Machine Calculates, the Network Prints' },
    context: {
      pt: 'Em 1855, a história da TI avança em duas direções importantes. De um lado, a máquina de diferenças dos Scheutz aparece publicamente como uma calculadora mecânica capaz de produzir tabelas. De outro, o telégrafo começa a ficar mais parecido com uma interface de texto: teclado, impressão automática e comunicação mais direta para humanos.',
      en: 'In 1855, IT history advanced in two important directions. On one side, the Scheutz difference engine appeared publicly as a mechanical calculator capable of producing tables. On the other, the telegraph began to look more like a text interface: keyboard, automatic printing and more direct communication for humans.',
    },
    peopleCount: 5,
    people: [
      {
        name: 'Per Georg Scheutz & Edvard Scheutz',
        imagePlaceholder: YEAR_1855_PLACEHOLDER,
        flag: '🇸🇪',
        nationality: { pt: 'Suecos', en: 'Swedish' },
        formation: {
          pt: 'Per Georg Scheutz: estudou Direito na Universidade de Lund, mas construiu sua carreira como tradutor, jornalista, editor, publicista e inventor.\n\nEdvard Scheutz: formado como engenheiro pelo Technological Institute de Estocolmo, em 1841.',
          en: 'Per Georg Scheutz: studied law at Lund University, but built his career as a translator, journalist, editor, publicist and inventor.\n\nEdvard Scheutz: trained as an engineer at the Technological Institute of Stockholm, graduating in 1841.',
        },
        summary: {
          pt: 'Levaram sua máquina de diferenças à Exposição Universal de Paris de 1855, onde a invenção ganhou reconhecimento internacional',
          en: 'Brought their difference engine to the Paris Universal Exposition of 1855, where the invention gained international recognition',
        },
        role: {
          pt: 'Construtores da máquina de diferenças dos Scheutz',
          en: 'Builders of the Scheutz difference engine',
        },
        contribution: {
          pt: 'Em 1855, Per Georg Scheutz e Edvard Scheutz colocaram sua máquina de diferenças diante do público internacional na Exposição Universal de Paris.',
          en: 'In 1855, Per Georg Scheutz and Edvard Scheutz placed their difference engine before an international public at the Paris Universal Exposition.',
        },
        detail: {
          pt: 'A máquina já havia sido concluída em metal em 1853, mas 1855 foi o ano em que ela ganhou vitrine mundial. Inspirada nas ideias de Charles Babbage, ela calculava tabelas numéricas usando o método das diferenças finitas e também imprimia os resultados. O Computer History Museum registra que a máquina dos Scheutz venceu uma medalha de ouro na Exposição de Paris de 1855 e depois foi usada pelo Dudley Observatory, em Nova York, para calcular algumas tabelas.\n\nO ponto importante é que essa máquina não era um computador geral. Ela não executava qualquer programa, não tinha memória como entendemos hoje e não era eletrônica. Mas ela automatizava uma tarefa intelectual importante: calcular e imprimir tabelas numéricas com menos erro humano.\n\nIsso era enorme para a época. Tabelas matemáticas, astronômicas, náuticas, estatísticas e atuariais dependiam de cálculos repetitivos feitos por pessoas. Um erro em uma tabela podia afetar navegação, engenharia, seguros e ciência.\n\nA máquina dos Scheutz aparece como uma ponte entre o mundo das calculadoras mecânicas e a ideia futura de computação automática. Ela não era o computador moderno, mas fazia uma pergunta que a computação depois responderia em escala gigantesca:\n\ne se máquinas pudessem assumir trabalho mental repetitivo?\n\nPor isso, os Scheutz continuam sendo um dos nomes mais fortes desse período da sua trilha.',
          en: 'The machine had already been completed in metal in 1853, but 1855 was the year when it gained a world stage. Inspired by Charles Babbage’s ideas, it calculated numerical tables using the method of finite differences and also printed the results. The Computer History Museum records that the Scheutz machine won a gold medal at the Paris Exposition of 1855 and was later used by the Dudley Observatory in New York to calculate some tables.\n\nThe important point is that this machine was not a general computer. It did not execute arbitrary programs, it did not have memory as we understand it today, and it was not electronic. But it automated an important intellectual task: calculating and printing numerical tables with less human error.\n\nThat was enormous for the time. Mathematical, astronomical, nautical, statistical and actuarial tables depended on repetitive calculations made by people. An error in a table could affect navigation, engineering, insurance and science.\n\nThe Scheutz machine appears as a bridge between the world of mechanical calculators and the future idea of automatic computing. It was not the modern computer, but it asked a question that computing would later answer at gigantic scale:\n\nwhat if machines could take over repetitive mental work?\n\nThat is why the Scheutzes remain among the strongest names in this period of the timeline.',
        },
      },
      {
        name: 'David Edward Hughes',
        imagePlaceholder: YEAR_1855_PLACEHOLDER,
        flag: '🇬🇧 🇺🇸',
        nationality: {
          pt: 'Britânico de nascimento, associado também aos Estados Unidos pela formação e carreira inicial',
          en: 'British-born, also associated with the United States through his education and early career',
        },
        formation: {
          pt: 'Educado no St. Joseph’s College, em Bardstown, Kentucky. Tornou-se professor de música ainda jovem e depois também assumiu a cadeira de filosofia natural, trabalhando de forma prática com eletricidade, som e experimentação.',
          en: 'Educated at St. Joseph’s College in Bardstown, Kentucky. He became a music professor while still young and later also took the chair of natural philosophy, working practically with electricity, sound and experimentation.',
        },
        summary: {
          pt: 'Inventou e patenteou, em 1855, um telégrafo impressor que usava teclado e imprimia letras normais no receptor',
          en: 'Invented and patented, in 1855, a printing telegraph that used a keyboard and printed ordinary letters at the receiver',
        },
        role: {
          pt: 'Inventor do telégrafo impressor de Hughes',
          en: 'Inventor of the Hughes printing telegraph',
        },
        contribution: {
          pt: 'Em 1855, David Edward Hughes criou um dos avanços mais importantes da telegrafia impressa: um sistema capaz de transmitir letras comuns e imprimi-las automaticamente do outro lado da linha.',
          en: 'In 1855, David Edward Hughes created one of the most important advances in printing telegraphy: a system capable of transmitting ordinary letters and automatically printing them at the other end of the line.',
        },
        detail: {
          pt: 'Até então, muitos sistemas telegráficos dependiam de operadores treinados para codificar e decodificar sinais, especialmente no padrão Morse. Isso exigia habilidade, ritmo, memória e interpretação humana. Hughes atacou esse problema criando uma máquina com teclado, parecida com um piano, em que cada tecla correspondia a uma letra. O receptor imprimia os caracteres em papel.\n\nEsse detalhe é muito importante para a história da TI. Hughes aproximou o telégrafo da ideia de uma interface textual direta: uma pessoa pressiona teclas, a máquina transmite sinais, outra máquina imprime texto legível.\n\nParece simples hoje, mas isso antecipa uma linhagem inteira de tecnologias: teleimpressores, teletipos, terminais, comunicação máquina-máquina e interfaces baseadas em texto.\n\nA Britannica registra que Hughes obteve uma patente americana para seu telégrafo impressor em 1855 e que o sistema se espalhou na Europa depois de 1857.\n\nPara sua trilha, Hughes é um nome muito bom porque ele representa uma mudança de mentalidade. A rede não servia apenas para transmitir sinais abstratos. Ela podia transmitir texto diretamente utilizável por pessoas.\n\nÉ a comunicação elétrica ficando mais “amigável” para o usuário.',
          en: 'Until then, many telegraph systems depended on trained operators to encode and decode signals, especially in the Morse pattern. That required skill, rhythm, memory and human interpretation. Hughes attacked this problem by creating a machine with a keyboard, similar to a piano, in which each key corresponded to a letter. The receiver printed the characters on paper.\n\nThis detail is very important for IT history. Hughes brought the telegraph closer to the idea of a direct text interface: a person presses keys, the machine transmits signals, and another machine prints readable text.\n\nIt seems simple today, but it anticipates an entire lineage of technologies: teleprinters, teletypes, terminals, machine-to-machine communication and text-based interfaces.\n\nBritannica records that Hughes received an American patent for his printing telegraph in 1855 and that the system spread in Europe after 1857.\n\nFor this timeline, Hughes is a very good name because he represents a change in mindset. The network did not serve only to transmit abstract signals. It could transmit text directly usable by people.\n\nIt is electrical communication becoming more “user-friendly.”',
        },
      },
      {
        name: 'William Thomson',
        imagePlaceholder: YEAR_1855_PLACEHOLDER,
        flag: '🇬🇧',
        nationality: { pt: 'Britânico, nascido em Belfast, na atual Irlanda do Norte', en: 'British, born in Belfast, in present-day Northern Ireland' },
        formation: {
          pt: 'Formação em matemática e física na University of Glasgow e na University of Cambridge. Tornou-se professor de filosofia natural na University of Glasgow ainda muito jovem.',
          en: 'Training in mathematics and physics at the University of Glasgow and the University of Cambridge. He became professor of natural philosophy at the University of Glasgow while still very young.',
        },
        summary: {
          pt: 'Apresentou em 1855 o trabalho On the Theory of the Electric Telegraph, ajudando a criar a base matemática para entender a transmissão de sinais em cabos longos',
          en: 'Presented in 1855 the work On the Theory of the Electric Telegraph, helping create the mathematical basis for understanding signal transmission in long cables',
        },
        role: {
          pt: 'Pioneiro da engenharia matemática de sinais',
          en: 'Pioneer of mathematical signal engineering',
        },
        contribution: {
          pt: 'Em 1855, William Thomson levou para a Royal Society um problema que seria central para toda a história das telecomunicações: sinais elétricos não atravessam cabos longos de forma perfeita.',
          en: 'In 1855, William Thomson brought to the Royal Society a problem that would become central to the entire history of telecommunications: electrical signals do not cross long cables perfectly.',
        },
        detail: {
          pt: 'Em cabos submarinos e subterrâneos, os pulsos elétricos se espalhavam, atrasavam e ficavam deformados. Isso dificultava a leitura das mensagens. Em termos modernos, dá para ver esse problema como um ancestral de coisas que depois seriam fundamentais em redes: latência, degradação de sinal, interferência entre símbolos e limite de transmissão.\n\nO artigo On the Theory of the Electric Telegraph foi recebido pela Royal Society em 3 de maio de 1855 e tratava justamente da teoria matemática por trás da propagação de sinais em cabos telegráficos.\n\nA importância de Thomson é que ele mostrou que comunicação elétrica não era só uma questão de fio, bateria e operador. Era também matemática aplicada. O comprimento do cabo, a resistência, a capacitância e o formato do sinal importavam.\n\nIsso foi crucial para os futuros cabos submarinos, especialmente os transatlânticos. Sem entender como o sinal se comportava dentro de um cabo longo, a rede global de comunicação elétrica simplesmente não seria confiável.\n\nPara a história da TI, Thomson entra como um dos nomes que ajudaram a transformar comunicação em engenharia de sinais.',
          en: 'In submarine and underground cables, electrical pulses spread, delayed and became distorted. That made messages harder to read. In modern terms, this problem can be seen as an ancestor of things that would later become fundamental in networks: latency, signal degradation, intersymbol interference and transmission limits.\n\nThe paper On the Theory of the Electric Telegraph was received by the Royal Society on May 3, 1855 and dealt precisely with the mathematical theory behind signal propagation in telegraph cables.\n\nThomson’s importance is that he showed electrical communication was not only a matter of wire, battery and operator. It was also applied mathematics. Cable length, resistance, capacitance and signal shape mattered.\n\nThis was crucial for future submarine cables, especially transatlantic ones. Without understanding how the signal behaved inside a long cable, the global electrical communication network simply would not be reliable.\n\nFor IT history, Thomson appears as one of the names who helped transform communication into signal engineering.',
        },
      },
      {
        name: 'Giovanni Caselli',
        imagePlaceholder: YEAR_1855_PLACEHOLDER,
        flag: '🇮🇹',
        nationality: { pt: 'Italiano', en: 'Italian' },
        formation: {
          pt: 'Sacerdote, físico e inventor. Estudou na Universidade de Florença e lecionou física, dedicando-se a eletricidade, magnetismo e transmissão telegráfica de imagens.',
          en: 'Priest, physicist and inventor. He studied at the University of Florence and taught physics, dedicating himself to electricity, magnetism and telegraphic image transmission.',
        },
        summary: {
          pt: 'Começou, em meados da década de 1850, o desenvolvimento do pantelegraph, um precursor do fax capaz de transmitir escrita, assinaturas e desenhos por linhas telegráficas',
          en: 'Began, in the mid-1850s, developing the pantelegraph, a fax precursor capable of transmitting handwriting, signatures and drawings over telegraph lines',
        },
        role: {
          pt: 'Pioneiro da transmissão elétrica de imagens',
          en: 'Pioneer of electrical image transmission',
        },
        contribution: {
          pt: 'Em meados da década de 1850, Giovanni Caselli começou a desenvolver o pantelegraph, uma das primeiras tentativas práticas de transmitir imagens por rede elétrica.',
          en: 'In the mid-1850s, Giovanni Caselli began developing the pantelegraph, one of the first practical attempts to transmit images over an electrical network.',
        },
        detail: {
          pt: 'Giovanni Caselli é um caso que eu colocaria com um pouco de cuidado em 1855.\n\nAlgumas fontes associam o pantelegraph a 1855, mas as fontes mais prudentes falam em desenvolvimento entre 1855 e 1861, com protótipo suficiente por volta de 1856, demonstrações posteriores e operação comercial na França só na década de 1860.\n\nMesmo assim, ele merece aparecer na sua linha histórica porque a ideia é forte demais: transmitir não só texto codificado, mas imagem, assinatura e escrita manual por fios elétricos.\n\nO pantelegraph usava sincronização mecânica entre transmissor e receptor. Uma ponta “varria” a imagem ou escrita, enquanto a outra reproduzia o conteúdo linha por linha. Em linguagem moderna, é quase um ancestral do scanner, do fax e da transmissão de imagem.\n\nPara 1855, o melhor é tratar Caselli como um bloco cauteloso: em meados da década de 1850, ele começou a desenvolver o pantelegraph, uma das primeiras tentativas práticas de transmitir imagens por rede elétrica.\n\nAssim a data não fica forçada demais, mas a importância histórica também não se perde.',
          en: 'Giovanni Caselli is a case I would place in 1855 with some care.\n\nSome sources associate the pantelegraph with 1855, but more cautious sources describe development between 1855 and 1861, with a sufficient prototype around 1856, later demonstrations and commercial operation in France only in the 1860s.\n\nEven so, he deserves to appear in this historical line because the idea is too strong: transmitting not only encoded text, but image, signature and handwriting through electrical wires.\n\nThe pantelegraph used mechanical synchronization between transmitter and receiver. One end “scanned” the image or writing, while the other reproduced the content line by line. In modern language, it is almost an ancestor of the scanner, fax and image transmission.\n\nFor 1855, the best approach is to treat Caselli as a cautious block: in the mid-1850s, he began developing the pantelegraph, one of the first practical attempts to transmit images over an electrical network.\n\nThat way the date is not forced too hard, but the historical importance is not lost either.',
        },
      },
    ],
  },
  {
    year: 1856,
    era: { pt: 'A Imagem Começa a Viajar pelo Fio', en: 'Images Begin to Travel by Wire' },
    context: {
      pt: 'Em 1856, a comunicação elétrica começa a ficar mais ambiciosa. Não era mais só mandar pontos, traços ou letras. A ideia agora era transmitir imagem, escrita manual, assinatura, desenho e documentos por linhas telegráficas.\n\nAo mesmo tempo, empresas de telégrafo começaram a se consolidar em grandes redes, apontando para algo que a TI conheceria muito bem no futuro: plataformas nacionais de comunicação.',
      en: 'In 1856, electrical communication began to grow more ambitious. It was no longer only about sending dots, dashes or letters. The idea now was to transmit images, handwriting, signatures, drawings and documents over telegraph lines.\n\nAt the same time, telegraph companies began consolidating into large networks, pointing toward something IT would know very well in the future: national communication platforms.',
    },
    peopleCount: 10,
    people: [
      {
        name: 'Giovanni Caselli',
        imagePlaceholder: YEAR_1856_PLACEHOLDER,
        flag: '🇮🇹',
        nationality: { pt: 'Italiano', en: 'Italian' },
        formation: {
          pt: 'Sacerdote, físico e inventor. Estudou na Universidade de Florença, dedicou-se a eletricidade e magnetismo, e atuou como professor de física. Também criou uma revista técnica para explicar ciência ao público.',
          en: 'Priest, physicist and inventor. He studied at the University of Florence, dedicated himself to electricity and magnetism, and worked as a physics teacher. He also created a technical magazine to explain science to the public.',
        },
        summary: {
          pt: 'Construiu, em Florença, um protótipo do pantelegraph, uma máquina capaz de transmitir imagens, escrita manual e assinaturas por linhas telegráficas',
          en: 'Built, in Florence, a prototype of the pantelegraph, a machine capable of transmitting images, handwriting and signatures over telegraph lines',
        },
        role: {
          pt: 'Pioneiro da transmissão de imagens por fio',
          en: 'Pioneer of image transmission by wire',
        },
        contribution: {
          pt: 'Em 1856, Giovanni Caselli realizou um dos experimentos mais futuristas do século XIX: criou um protótipo do pantelegraph, uma espécie de ancestral do fax.',
          en: 'In 1856, Giovanni Caselli carried out one of the most futuristic experiments of the 19th century: he created a prototype of the pantelegraph, a kind of ancestor of the fax.',
        },
        detail: {
          pt: 'A ideia era absurda para a época. O telégrafo comum transmitia mensagens codificadas, geralmente em sinais ou letras. Caselli queria transmitir algo muito mais rico: escrita à mão, assinaturas, desenhos e imagens simples. Em vez de apenas mandar uma mensagem como texto, ele queria mandar a forma visual do documento.\n\nO Smithsonian descreve o pantelegraph de Caselli como um equipamento criado em 1856 para transmitir imagens. O sistema envolvia transmissores, receptores e pêndulos usados para sincronizar as duas pontas da comunicação.\n\nO funcionamento era quase um “scanner vitoriano”. A imagem era preparada em uma superfície condutora, com tinta não condutora formando o desenho ou a escrita. Uma ponta mecânica varria essa superfície linha por linha. Onde havia condução, o sinal passava. Onde havia tinta, o sinal era interrompido. Do outro lado da linha, outro mecanismo sincronizado reproduzia o padrão recebido.\n\nO problema central era a sincronização. Para a imagem sair reconhecível, transmissor e receptor precisavam se mover no mesmo ritmo, como se os dois lados estivessem dançando a mesma coreografia mecânica. Por isso o pantelegraph misturava telégrafo, eletroquímica, mecânica fina e relógios reguladores.\n\nEsse é um marco lindo para a história da TI porque antecipa ideias que depois se tornariam comuns: digitalização de documentos, transmissão de imagem, scanner, fax, reprodução remota e comunicação visual por rede.\n\nAinda não era computação digital. Mas era dado visual viajando por infraestrutura elétrica.\n\nÉ muito forte.',
          en: 'The idea was absurd for the time. The ordinary telegraph transmitted encoded messages, usually as signals or letters. Caselli wanted to transmit something much richer: handwriting, signatures, drawings and simple images. Instead of only sending a message as text, he wanted to send the visual form of the document.\n\nThe Smithsonian describes Caselli’s pantelegraph as equipment created in 1856 to transmit images. The system involved transmitters, receivers and pendulums used to synchronize both ends of the communication.\n\nIts operation was almost a “Victorian scanner.” The image was prepared on a conductive surface, with non-conductive ink forming the drawing or writing. A mechanical point scanned that surface line by line. Where there was conduction, the signal passed. Where there was ink, the signal was interrupted. At the other end of the line, another synchronized mechanism reproduced the received pattern.\n\nThe central problem was synchronization. For the image to come out recognizable, transmitter and receiver needed to move at the same rhythm, as if both sides were dancing the same mechanical choreography. That is why the pantelegraph mixed telegraphy, electrochemistry, fine mechanics and regulating clocks.\n\nThis is a beautiful milestone for IT history because it anticipates ideas that would later become common: document digitization, image transmission, scanner, fax, remote reproduction and visual communication over a network.\n\nIt was not digital computing yet. But it was visual data traveling through electrical infrastructure.\n\nIt is very strong.',
        },
      },
      {
        name: 'Hiram Sibley, Samuel Lee Selden & Ezra Cornell',
        imagePlaceholder: YEAR_1856_PLACEHOLDER,
        flag: '🇺🇸',
        nationality: { pt: 'Americanos', en: 'Americans' },
        formation: {
          pt: 'Sibley: formação prática em negócios, oficinas, banco, terras e política local. Mudou-se para Rochester, atuou em negócios e foi sheriff do condado de Monroe.\n\nSelden: advogado e juiz, formado pela prática jurídica em Nova York; foi juiz da Suprema Corte de Nova York e depois juiz da Court of Appeals.\n\nCornell: educação Quaker básica, carpinteiro, mecânico, agricultor, construtor de linhas telegráficas e empreendedor de infraestrutura.',
          en: 'Sibley: practical formation in business, workshops, banking, land and local politics. He moved to Rochester, worked in business and served as sheriff of Monroe County.\n\nSelden: lawyer and judge, formed by legal practice in New York; he served as a justice of the New York Supreme Court and later as a judge of the Court of Appeals.\n\nCornell: basic Quaker education, carpenter, mechanic, farmer, telegraph-line builder and infrastructure entrepreneur.',
        },
        summary: {
          pt: 'Participaram da consolidação que transformou a New York and Mississippi Valley Printing Telegraph Company na Western Union Telegraph Company em 1856',
          en: 'Took part in the consolidation that transformed the New York and Mississippi Valley Printing Telegraph Company into the Western Union Telegraph Company in 1856',
        },
        role: {
          pt: 'Consolidadores da Western Union',
          en: 'Consolidators of Western Union',
        },
        contribution: {
          pt: 'Em 1856, a história das redes nos Estados Unidos deu um passo enorme: a empresa que havia nascido em Rochester como New York and Mississippi Valley Printing Telegraph Company passou a se chamar Western Union Telegraph Company.',
          en: 'In 1856, the history of networks in the United States took a huge step: the company born in Rochester as the New York and Mississippi Valley Printing Telegraph Company became the Western Union Telegraph Company.',
        },
        detail: {
          pt: 'O nome não era só branding. Ele dizia exatamente o objetivo: unir linhas telegráficas do oeste em um sistema mais compacto, confiável e integrado. O Smithsonian registra que, em 1856, o nome da empresa foi alterado para Western Union Telegraph Company, indicando a união das linhas ocidentais em um sistema único.\n\nHiram Sibley era o organizador empresarial. Samuel Selden tinha papel jurídico, institucional e de patentes. Ezra Cornell trazia experiência prática em construção de linhas telegráficas, infraestrutura e investimento. Juntos, eles representam uma virada importante: o telégrafo deixou de ser apenas uma coleção de linhas regionais e começou a virar uma grande plataforma nacional de comunicação.\n\nEsse ponto é essencial para a história da TI porque toda tecnologia de rede passa por essa fase. Primeiro aparecem experimentos. Depois surgem linhas isoladas. Depois alguém percebe que o valor real está em integrar tudo.\n\nA Western Union se tornaria uma das empresas mais importantes da história das telecomunicações. Mais tarde, construiria a primeira linha telegráfica transcontinental dos Estados Unidos, em 1861, e lançaria serviços como transmissão de dinheiro por fio. Mas o marco de 1856 é a consolidação da identidade e da ambição: transformar o telégrafo em uma rede nacional.\n\nEm linguagem moderna, dá para pensar nela como uma “big tech telegráfica” do século XIX.',
          en: 'The name was not just branding. It stated the goal exactly: uniting western telegraph lines into a more compact, reliable and integrated system. The Smithsonian records that in 1856 the company name was changed to Western Union Telegraph Company, indicating the union of western lines into a single system.\n\nHiram Sibley was the business organizer. Samuel Selden had a legal, institutional and patent role. Ezra Cornell brought practical experience in telegraph-line construction, infrastructure and investment. Together, they represent an important turn: the telegraph stopped being just a collection of regional lines and began becoming a large national communication platform.\n\nThis point is essential to IT history because every network technology goes through this phase. First come experiments. Then isolated lines appear. Then someone realizes that the real value is in integrating everything.\n\nWestern Union would become one of the most important companies in telecommunications history. Later, it would build the first transcontinental telegraph line in the United States, in 1861, and launch services such as money transmission by wire. But the 1856 milestone is the consolidation of identity and ambition: turning the telegraph into a national network.\n\nIn modern language, you can think of it as a 19th-century “telegraph big tech.”',
        },
      },
      {
        name: 'Cyrus West Field, John Watkins Brett & Charles Tilston Bright',
        imagePlaceholder: YEAR_1856_PLACEHOLDER,
        flag: '🇺🇸 🇬🇧',
        nationality: {
          pt: 'Field: americano · Brett: britânico · Bright: britânico',
          en: 'Field: American · Brett: British · Bright: British',
        },
        formation: {
          pt: 'Field: comerciante e empresário do setor de papel, com formação prática em negócios, investimento e organização empresarial.\n\nBrett: empreendedor de telegrafia submarina, articulador de concessões, empresas e projetos de cabos.\n\nBright: engenheiro elétrico; estudou na Merchant Taylors’ School e trabalhou na Electric Telegraph Company e na Magnetic Telegraph Company.',
          en: 'Field: merchant and paper-industry entrepreneur, with practical formation in business, investment and company organization.\n\nBrett: submarine telegraph entrepreneur, organizer of concessions, companies and cable projects.\n\nBright: electrical engineer; he studied at Merchant Taylors’ School and worked at the Electric Telegraph Company and the Magnetic Telegraph Company.',
        },
        summary: {
          pt: 'Formaram, em 1856, a Atlantic Telegraph Company, criada para tentar instalar um cabo telegráfico submarino entre a Irlanda e Newfoundland',
          en: 'Formed, in 1856, the Atlantic Telegraph Company, created to try to install a submarine telegraph cable between Ireland and Newfoundland',
        },
        role: {
          pt: 'Fundadores do projeto empresarial do cabo atlântico',
          en: 'Founders of the Atlantic cable business project',
        },
        contribution: {
          pt: 'Em 1856, a ideia de conectar Europa e América por telégrafo deixou de ser apenas um sonho técnico e virou uma empresa formal: a Atlantic Telegraph Company.',
          en: 'In 1856, the idea of connecting Europe and America by telegraph stopped being only a technical dream and became a formal company: the Atlantic Telegraph Company.',
        },
        detail: {
          pt: 'Cyrus West Field foi o grande articulador financeiro. Ele não era engenheiro de telégrafo. Era um empresário que havia feito fortuna no setor de papel, mas entendeu o potencial comercial de uma comunicação quase instantânea entre continentes. Britannica registra que Field ajudou a organizar a Atlantic Telegraph Company dois anos depois de participar da criação da New York, Newfoundland and London Telegraph Company.\n\nJohn Watkins Brett já vinha da história dos cabos submarinos do Canal da Mancha. Ele era um dos nomes ligados à telegrafia submarina britânica e já aparecia como personagem importante nos blocos anteriores. Charles Tilston Bright entrou como engenheiro-chefe, trazendo experiência em linhas subterrâneas e cabos submarinos. Britannica registra que, em 1856, Bright, Field e J. W. Brett formaram a Atlantic Telegraph Company, com Bright como engenheiro-chefe.\n\nO objetivo era gigantesco: passar um cabo pelo Atlântico, entre Irlanda e Newfoundland, e permitir que mensagens atravessassem o oceano em minutos, não em semanas.\n\nAinda daria errado algumas vezes. O cabo de 1858 funcionaria por pouco tempo. A conexão confiável só viria em 1866. Mas 1856 é o ano em que a ambição foi institucionalizada. Criaram empresa, levantaram capital, organizaram engenharia e transformaram o sonho de uma rede transatlântica em projeto real.\n\nPara a história da TI, isso é um dos ancestrais do backbone global. Antes de internet, fibra óptica e data centers intercontinentais, havia empresários e engenheiros tentando resolver a mesma pergunta:\n\ncomo fazer informação atravessar oceanos rapidamente?',
          en: 'Cyrus West Field was the great financial organizer. He was not a telegraph engineer. He was a businessman who had made a fortune in the paper industry, but he understood the commercial potential of almost instant communication between continents. Britannica records that Field helped organize the Atlantic Telegraph Company two years after taking part in the creation of the New York, Newfoundland and London Telegraph Company.\n\nJohn Watkins Brett already came from the history of submarine cables across the English Channel. He was one of the names connected to British submarine telegraphy and had already appeared as an important figure in earlier blocks. Charles Tilston Bright entered as chief engineer, bringing experience in underground lines and submarine cables. Britannica records that, in 1856, Bright, Field and J. W. Brett formed the Atlantic Telegraph Company, with Bright as chief engineer.\n\nThe goal was enormous: lay a cable across the Atlantic, between Ireland and Newfoundland, and allow messages to cross the ocean in minutes, not weeks.\n\nIt would still go wrong a few times. The 1858 cable would work only briefly. A reliable connection would only arrive in 1866. But 1856 is the year when the ambition was institutionalized. They created a company, raised capital, organized engineering and turned the dream of a transatlantic network into a real project.\n\nFor IT history, this is one of the ancestors of the global backbone. Before the internet, optical fiber and intercontinental data centers, there were entrepreneurs and engineers trying to answer the same question:\n\nhow do we make information cross oceans quickly?',
        },
      },
      {
        name: 'Cyrus West Field & Frederic Newton Gisborne',
        imagePlaceholder: YEAR_1856_PLACEHOLDER,
        flag: '🇺🇸 🇬🇧 🇨🇦',
        nationality: {
          pt: 'Field: americano · Gisborne: britânico de nascimento, ligado à história canadense da telegrafia',
          en: 'Field: American · Gisborne: British-born, connected to Canadian telegraph history',
        },
        formation: {
          pt: 'Field: empresário do setor de papel, investidor e organizador financeiro.\n\nGisborne: engenheiro e eletricista com formação prática em telegrafia, cabos submarinos e projetos de comunicação no Canadá atlântico.',
          en: 'Field: paper-industry entrepreneur, investor and financial organizer.\n\nGisborne: engineer and electrician with practical formation in telegraphy, submarine cables and communication projects in Atlantic Canada.',
        },
        summary: {
          pt: 'Ajudaram a consolidar, em 1856, a ligação telegráfica entre Nova York e Newfoundland, com o cabo submarino atravessando o Estreito de Cabot',
          en: 'Helped consolidate, in 1856, the telegraph link between New York and Newfoundland, with the submarine cable crossing the Cabot Strait',
        },
        role: {
          pt: 'Construtores do trecho norte-americano rumo ao Atlântico',
          en: 'Builders of the North American segment toward the Atlantic',
        },
        contribution: {
          pt: 'Também em 1856, aconteceu uma etapa essencial para o futuro cabo transatlântico: a ligação entre Cape Breton, na Nova Scotia, e Newfoundland, atravessando o Estreito de Cabot.',
          en: 'Also in 1856, an essential stage for the future transatlantic cable took place: the link between Cape Breton, in Nova Scotia, and Newfoundland, crossing the Cabot Strait.',
        },
        detail: {
          pt: 'Esse cabo era importante porque Newfoundland seria a ponta norte-americana mais próxima da Europa. Antes de jogar um cabo pelo Atlântico inteiro, era preciso conectar Newfoundland ao restante da rede telegráfica norte-americana.\n\nMuseums Victoria descreve o cabo do Estreito de Cabot como um elo vital na conexão telegráfica entre os Estados Unidos e a Europa, além de destacar uma inovação técnica: foi o primeiro cabo submarino a usar um condutor formado por vários fios torcidos em uma trança, em vez de um único fio sólido de cobre. Isso aumentava a resiliência do cabo, porque a quebra de um fio não necessariamente interromperia todo o sinal.\n\nParks Canada também registra o lançamento bem-sucedido, em 1856, do cabo submarino entre Cape Breton e Newfoundland como parte do plano de comunicação oceânica mais rápida que depois evoluiria para o cabo atlântico.\n\nEsse evento é muito bom para sua trilha porque mostra uma ideia clássica de infraestrutura: antes da rede global existir, alguém precisa construir os trechos intermediários.\n\nÉ tipo montar a internet física em pedaços. Primeiro conecta cidades. Depois regiões. Depois países. Depois oceanos.\n\nO Estreito de Cabot foi um desses pedaços fundamentais.',
          en: 'This cable mattered because Newfoundland would be the North American endpoint closest to Europe. Before laying a cable across the entire Atlantic, Newfoundland had to be connected to the rest of the North American telegraph network.\n\nMuseums Victoria describes the Cabot Strait cable as a vital link in the telegraph connection between the United States and Europe, and also highlights a technical innovation: it was the first submarine cable to use a conductor made of several wires twisted into a strand, instead of a single solid copper wire. This increased the cable’s resilience, because the breakage of one wire would not necessarily interrupt the entire signal.\n\nParks Canada also records the successful laying, in 1856, of the submarine cable between Cape Breton and Newfoundland as part of the plan for faster ocean communication that would later evolve into the Atlantic cable.\n\nThis event is very good for the timeline because it shows a classic infrastructure idea: before the global network can exist, someone needs to build the intermediate segments.\n\nIt is like assembling the physical internet in pieces. First cities are connected. Then regions. Then countries. Then oceans.\n\nThe Cabot Strait was one of those fundamental pieces.',
        },
      },
      {
        name: 'David Edward Hughes',
        imagePlaceholder: YEAR_1856_PLACEHOLDER,
        flag: '🇬🇧 🇺🇸',
        nationality: { pt: 'Britânico de nascimento, associado aos Estados Unidos pela carreira inicial', en: 'British-born, associated with the United States through his early career' },
        formation: {
          pt: 'Músico, professor e inventor. Sua família emigrou para os Estados Unidos quando ele era criança. Em 1850, tornou-se professor de música no St. Joseph’s College, em Bardstown, Kentucky, e desenvolveu interesse prático por física, eletricidade e instrumentos.',
          en: 'Musician, teacher and inventor. His family emigrated to the United States when he was a child. In 1850, he became a music professor at St. Joseph’s College in Bardstown, Kentucky, and developed a practical interest in physics, electricity and instruments.',
        },
        summary: {
          pt: 'Recebeu, em 1856, a patente americana do seu telégrafo impressor, um sistema com teclado que imprimia caracteres diretamente no receptor',
          en: 'Received, in 1856, the American patent for his printing telegraph, a keyboard-based system that printed characters directly at the receiver',
        },
        role: {
          pt: 'Pioneiro da interface textual telegráfica',
          en: 'Pioneer of the telegraphic text interface',
        },
        contribution: {
          pt: 'Em 1856, David Edward Hughes recebeu a patente americana nº 14.917 para seu telégrafo impressor. A patente, registrada em 20 de maio de 1856, aparece como uma melhoria em telégrafos.',
          en: 'In 1856, David Edward Hughes received U.S. patent no. 14,917 for his printing telegraph. The patent, registered on May 20, 1856, appears as an improvement in telegraphs.',
        },
        detail: {
          pt: 'A invenção de Hughes já havia surgido por volta de 1855, mas a patente americana de 1856 ajuda a marcar sua entrada formal na história técnica.\n\nO sistema era importante porque tornava o telégrafo mais parecido com uma interface de texto. Em vez de depender apenas de código Morse interpretado por operadores treinados, o equipamento de Hughes usava teclas e imprimia caracteres em uma fita de papel. O Science Museum Group descreve o equipamento como um telégrafo de escrita, com máquinas transmissora e receptora trabalhando sincronizadas por mecanismo de relógio. Ao pressionar uma tecla, uma corrente elétrica era enviada pela linha e ativava o receptor, que registrava o caractere no papel.\n\nPara a história da TI, esse detalhe é muito importante. Hughes aproxima comunicação elétrica de algo que depois ficaria familiar em terminais, teletipos, máquinas de escrever conectadas, consoles e sistemas de entrada e saída.\n\nA ideia é simples e poderosa:\n\numa pessoa digita, a rede transmite, outra máquina imprime.\n\nIsso ainda não é computador, mas já parece muito com a lógica de uma interface textual remota.',
          en: 'Hughes’s invention had already appeared around 1855, but the 1856 American patent helps mark its formal entry into technical history.\n\nThe system mattered because it made the telegraph look more like a text interface. Instead of depending only on Morse code interpreted by trained operators, Hughes’s equipment used keys and printed characters on a paper tape. The Science Museum Group describes the equipment as a writing telegraph, with transmitting and receiving machines synchronized by clockwork. When a key was pressed, an electric current was sent along the line and activated the receiver, which recorded the character on paper.\n\nFor IT history, this detail is very important. Hughes brings electrical communication closer to something that would later become familiar in terminals, teletypes, connected typewriters, consoles and input-output systems.\n\nThe idea is simple and powerful:\n\na person types, the network transmits, another machine prints.\n\nThis is not yet a computer, but it already looks a lot like the logic of a remote text interface.',
        },
      },
    ],
  },
  {
    year: 1857,
    era: { pt: 'O Som Vira Dado, a Rede Entra em Crise', en: 'Sound Becomes Data, the Network Enters Crisis' },
    context: {
      pt: 'Em 1857, a história da TI ganha uma virada poética e técnica ao mesmo tempo: pela primeira vez, o som começa a ser registrado por uma máquina. Não para ser tocado de volta ainda, mas para virar rastro, forma, sinal, evidência física.\n\nAo mesmo tempo, o projeto do cabo transatlântico sai do papel e tenta cruzar o oceano. Falha, mas ensina. E na Índia, durante a Rebelião de 1857, o telégrafo mostra seu lado mais estratégico: informação rápida podia mudar decisões políticas e militares.',
      en: 'In 1857, IT history gained a turn that was both poetic and technical: for the first time, sound began to be recorded by a machine. Not to be played back yet, but to become a trace, a shape, a signal, physical evidence.\n\nAt the same time, the transatlantic cable project left paper and tried to cross the ocean. It failed, but it taught. And in India, during the Rebellion of 1857, the telegraph showed its most strategic side: fast information could change political and military decisions.',
    },
    peopleCount: 9,
    people: [
      {
        name: 'Édouard-Léon Scott de Martinville',
        imagePlaceholder: YEAR_1857_PLACEHOLDER,
        flag: '🇫🇷',
        nationality: { pt: 'Francês', en: 'French' },
        formation: {
          pt: 'Tipógrafo, editor, livreiro e inventor. Trabalhava com manuscritos e publicações científicas em Paris, e se interessou por fisiologia, acústica, linguagem e formas mecânicas de registrar a fala.',
          en: 'Typographer, editor, bookseller and inventor. He worked with manuscripts and scientific publications in Paris, and became interested in physiology, acoustics, language and mechanical ways to record speech.',
        },
        summary: {
          pt: 'Patenteou, em 1857, o phonautograph, o primeiro aparelho conhecido para registrar som',
          en: 'Patented, in 1857, the phonautograph, the first known device for recording sound',
        },
        role: {
          pt: 'Pioneiro do registro sonoro',
          en: 'Pioneer of sound recording',
        },
        contribution: {
          pt: 'Em 1857, Édouard-Léon Scott de Martinville criou uma das invenções mais bonitas da pré-história da informação: o phonautograph.',
          en: 'In 1857, Édouard-Léon Scott de Martinville created one of the most beautiful inventions in the prehistory of information: the phonautograph.',
        },
        detail: {
          pt: 'A ideia dele era quase poética: se a fotografia conseguia capturar imagens usando uma máquina inspirada no olho, talvez fosse possível capturar a voz usando uma máquina inspirada no ouvido.\n\nO aparelho usava um funil para captar o som, uma membrana que vibrava como um tímpano e uma pequena ponta que riscava essas vibrações em uma superfície coberta de fuligem. O resultado era uma linha irregular, desenhada pelo próprio som. O National Park Service descreve o phonautograph como uma tecnologia que tornou o som visível e permanente, embora Scott ainda não tivesse a ideia de reproduzir o áudio depois.\n\nEsse detalhe é essencial: o phonautograph gravava, mas não tocava de volta. Ele não era um fonógrafo como o de Edison, que só viria em 1877. Scott queria fazer a fala “escrever a si mesma”, como uma espécie de estenografia automática da voz.\n\nPara a história da TI, isso é muito forte. Pela primeira vez, um fenômeno invisível e passageiro, o som, foi convertido em um registro físico analisável. Em linguagem moderna, é como se o mundo tivesse dado um passo em direção à ideia de captura de sinal, representação de dados, onda sonora registrada, visualização de informação e armazenamento analógico.\n\nAinda não era áudio digital. Ainda não era reprodução sonora. Mas era o som virando dado.\n\nEsse é, para mim, o grande marco de 1857.',
          en: 'His idea was almost poetic: if photography could capture images using a machine inspired by the eye, perhaps it would be possible to capture the voice using a machine inspired by the ear.\n\nThe device used a horn to capture sound, a membrane that vibrated like an eardrum and a small point that scratched those vibrations onto a soot-covered surface. The result was an irregular line, drawn by sound itself. The National Park Service describes the phonautograph as a technology that made sound visible and permanent, although Scott did not yet have the idea of playing the audio back afterward.\n\nThis detail is essential: the phonautograph recorded, but did not play back. It was not a phonograph like Edison’s, which would only come in 1877. Scott wanted to make speech “write itself,” as a kind of automatic shorthand of the voice.\n\nFor IT history, this is very strong. For the first time, an invisible and transient phenomenon, sound, was converted into an analyzable physical record. In modern language, it is as if the world had taken a step toward signal capture, data representation, recorded sound waves, information visualization and analog storage.\n\nIt was not digital audio yet. It was not sound playback yet. But it was sound becoming data.\n\nThis is, to me, the great milestone of 1857.',
        },
      },
      {
        name: 'Cyrus West Field, John Watkins Brett, Charles Tilston Bright & William Thomson',
        imagePlaceholder: YEAR_1857_PLACEHOLDER,
        flag: '🇺🇸 🇬🇧',
        nationality: {
          pt: 'Field: americano · Brett: britânico · Bright: britânico · Thomson: britânico, nascido em Belfast, atual Irlanda do Norte',
          en: 'Field: American · Brett: British · Bright: British · Thomson: British, born in Belfast, present-day Northern Ireland',
        },
        formation: {
          pt: 'Field: empresário do setor de papel, investidor e organizador financeiro.\n\nBrett: empreendedor de telegrafia submarina, articulador de concessões e projetos de cabos.\n\nBright: engenheiro elétrico prático, com experiência em companhias telegráficas e cabos submarinos.\n\nThomson: matemático e físico, formado pela University of Glasgow e pela University of Cambridge, futuro Lord Kelvin.',
          en: 'Field: paper-industry entrepreneur, investor and financial organizer.\n\nBrett: submarine telegraph entrepreneur, organizer of concessions and cable projects.\n\nBright: practical electrical engineer, with experience in telegraph companies and submarine cables.\n\nThomson: mathematician and physicist, educated at the University of Glasgow and the University of Cambridge, future Lord Kelvin.',
        },
        summary: {
          pt: 'Participaram da primeira tentativa real de lançar um cabo telegráfico transatlântico entre Irlanda e Newfoundland',
          en: 'Took part in the first real attempt to lay a transatlantic telegraph cable between Ireland and Newfoundland',
        },
        role: {
          pt: 'Pioneiros da primeira tentativa prática do cabo transatlântico',
          en: 'Pioneers of the first practical transatlantic cable attempt',
        },
        contribution: {
          pt: 'Em 1857, o projeto de ligar Europa e América por telégrafo finalmente foi para o mar.',
          en: 'In 1857, the project to connect Europe and America by telegraph finally went to sea.',
        },
        detail: {
          pt: 'A Atlantic Telegraph Company já havia sido organizada em 1856, mas 1857 foi o ano da primeira grande tentativa prática. A ideia era lançar um cabo entre a Irlanda e Newfoundland, criando uma conexão quase instantânea entre os dois lados do Atlântico.\n\nCyrus West Field era o grande articulador financeiro e empresarial. John Watkins Brett já vinha da história dos cabos submarinos britânicos. Charles Tilston Bright atuava como engenheiro central do projeto. William Thomson, futuro Lord Kelvin, entrou como uma das cabeças científicas capazes de entender o problema físico dos sinais em cabos longos.\n\nA operação usou dois navios de guerra adaptados: o USS Niagara e o HMS Agamemnon. O plano era ambicioso demais para a tecnologia ainda imatura. Em agosto de 1857, o cabo rompeu, e a tentativa foi abandonada naquele ano. O History of Information registra que o cabo se rompeu em 11 de agosto de 1857 e que uma investigação posterior concluiu que futuras expedições deveriam começar no meio do oceano, com os navios seguindo em direções opostas.\n\nOu seja: falhou, mas falhou ensinando.\n\nEsse é um ponto muito importante para sua trilha. Nem todo marco histórico é sucesso. Às vezes, o avanço é descobrir que a arquitetura estava errada.\n\nA tentativa de 1857 mostrou que conectar continentes não era só uma questão de ter cabo suficiente. Era preciso entender peso, tensão, profundidade, sinal elétrico, isolamento, operação naval, armazenamento do cabo nos navios e método de lançamento.\n\nPara a história da TI, esse evento é ancestral direto da infraestrutura global de dados. Antes de internet, fibra óptica e cloud intercontinental, existia esse problema bruto:\n\ncomo fazer informação atravessar oceanos?\n\n1857 não resolveu de vez. Mas colocou o problema em produção pela primeira vez.',
          en: 'The Atlantic Telegraph Company had already been organized in 1856, but 1857 was the year of the first major practical attempt. The idea was to lay a cable between Ireland and Newfoundland, creating an almost instant connection between both sides of the Atlantic.\n\nCyrus West Field was the great financial and business organizer. John Watkins Brett already came from the history of British submarine cables. Charles Tilston Bright acted as a central engineer on the project. William Thomson, future Lord Kelvin, entered as one of the scientific minds capable of understanding the physical problem of signals in long cables.\n\nThe operation used two adapted warships: USS Niagara and HMS Agamemnon. The plan was too ambitious for the still immature technology. In August 1857, the cable broke, and the attempt was abandoned that year. History of Information records that the cable broke on August 11, 1857, and that a later investigation concluded future expeditions should begin in the middle of the ocean, with the ships moving in opposite directions.\n\nIn other words: it failed, but it failed while teaching.\n\nThis is a very important point for the timeline. Not every historical milestone is a success. Sometimes the advance is discovering that the architecture was wrong.\n\nThe 1857 attempt showed that connecting continents was not only a matter of having enough cable. It required understanding weight, tension, depth, electrical signal, insulation, naval operation, cable storage aboard ships and laying method.\n\nFor IT history, this event is a direct ancestor of global data infrastructure. Before the internet, optical fiber and intercontinental cloud, there was this raw problem:\n\nhow do we make information cross oceans?\n\n1857 did not solve it for good. But it put the problem into production for the first time.',
        },
      },
      {
        name: 'William Brendish, J. W. Pilkington & Charles Todd',
        imagePlaceholder: YEAR_1857_PLACEHOLDER,
        flag: '🇬🇧 🇮🇳',
        nationality: { pt: 'Associados à administração telegráfica da Índia britânica', en: 'Associated with the telegraph administration of British India' },
        formation: {
          pt: 'Brendish: operador de telégrafo, treinado na prática da sinalização telegráfica.\n\nPilkington: assistente e operador ligado ao escritório telegráfico de Delhi.\n\nTodd: mestre de telégrafo em Delhi, responsável por verificar linhas e manter a operação local.',
          en: 'Brendish: telegraph operator, trained in practical telegraph signaling.\n\nPilkington: assistant and operator connected to the Delhi telegraph office.\n\nTodd: telegraph master in Delhi, responsible for checking lines and maintaining local operations.',
        },
        summary: {
          pt: 'Durante a Rebelião Indiana de 1857, operadores do escritório telegráfico de Delhi enviaram mensagens de alerta para Ambala enquanto a cidade entrava em caos',
          en: 'During the Indian Rebellion of 1857, operators at the Delhi telegraph office sent warning messages to Ambala while the city entered chaos',
        },
        role: {
          pt: 'Operadores de telégrafo em infraestrutura de crise',
          en: 'Telegraph operators in crisis infrastructure',
        },
        contribution: {
          pt: 'Em 1857, o telégrafo mostrou um lado menos “romântico” e muito mais estratégico: ele virou infraestrutura de crise.',
          en: 'In 1857, the telegraph showed a less “romantic” and much more strategic side: it became crisis infrastructure.',
        },
        detail: {
          pt: 'Durante a Rebelião Indiana de 1857, o escritório telegráfico de Delhi teve papel importante na transmissão de alertas para outras estações britânicas. Segundo o museu PK Porthcurno, no dia 11 de maio de 1857, Charles Todd saiu para verificar linhas cortadas e foi morto. Mesmo assim, William Brendish e J. W. Pilkington permaneceram no escritório por horas, enviando atualizações para Ambala sobre o que estava acontecendo em Delhi. A última mensagem dizia que o oficial que havia saído de manhã tinha sido morto e terminava com “we are off”.\n\nEsse evento precisa ser tratado com cuidado, porque está dentro de um contexto colonial violento. Não é uma história simples de “heróis da tecnologia”. A Rebelião de 1857 foi um conflito enorme contra o domínio da Companhia Britânica das Índias Orientais, com causas políticas, militares, econômicas e sociais profundas.\n\nMas, para a história da TI, o ponto técnico é muito claro: o telégrafo mudou a velocidade da decisão.\n\nAntes, uma notícia desse tipo dependeria de mensageiros, cavalos, estradas e dias de atraso. Com o telégrafo, a informação podia ser transmitida quase em tempo real, alterando a forma como autoridades, exércitos e administrações reagiam.\n\nIsso é um ancestral direto de algo que vemos até hoje: sistemas de comunicação usados em crise, guerra, governo, emergência e infraestrutura crítica.\n\nEm 1857, o telégrafo deixou de ser só uma tecnologia de conexão. Ele virou um sistema nervoso político e militar.',
          en: 'During the Indian Rebellion of 1857, the Delhi telegraph office played an important role in transmitting alerts to other British stations. According to the PK Porthcurno museum, on May 11, 1857, Charles Todd went out to check cut lines and was killed. Even so, William Brendish and J. W. Pilkington remained in the office for hours, sending updates to Ambala about what was happening in Delhi. The last message said that the officer who had gone out in the morning had been killed and ended with “we are off”.\n\nThis event must be treated carefully, because it sits inside a violent colonial context. It is not a simple story of “technology heroes.” The Rebellion of 1857 was a huge conflict against the rule of the British East India Company, with deep political, military, economic and social causes.\n\nBut, for IT history, the technical point is very clear: the telegraph changed the speed of decision-making.\n\nBefore, news of this kind would depend on messengers, horses, roads and days of delay. With the telegraph, information could be transmitted almost in real time, changing how authorities, armies and administrations reacted.\n\nThis is a direct ancestor of something we still see today: communication systems used in crisis, war, government, emergency and critical infrastructure.\n\nIn 1857, the telegraph stopped being only a connection technology. It became a political and military nervous system.',
        },
      },
      {
        name: 'David Edward Hughes',
        imagePlaceholder: YEAR_1857_PLACEHOLDER,
        flag: '🇬🇧 🇺🇸',
        nationality: { pt: 'Britânico de nascimento, associado aos Estados Unidos pela carreira inicial', en: 'British-born, associated with the United States through his early career' },
        formation: {
          pt: 'Músico, professor e inventor. Foi educado no St. Joseph’s College, em Bardstown, Kentucky, tornou-se professor de música ainda jovem e depois assumiu também a cadeira de filosofia natural.',
          en: 'Musician, teacher and inventor. He was educated at St. Joseph’s College in Bardstown, Kentucky, became a music professor while still young and later also took the chair of natural philosophy.',
        },
        summary: {
          pt: 'Em 1857, levou seu telégrafo impressor para a Europa, tentando introduzir uma forma mais direta de comunicação telegráfica baseada em teclado e impressão automática',
          en: 'In 1857, brought his printing telegraph to Europe, trying to introduce a more direct form of telegraphic communication based on keyboard input and automatic printing',
        },
        role: {
          pt: 'Difusor europeu do telégrafo impressor',
          en: 'European diffuser of the printing telegraph',
        },
        contribution: {
          pt: 'David Edward Hughes já havia concluído e patenteado seu telégrafo impressor em meados da década de 1850, mas 1857 é importante porque ele levou a invenção para a Europa.',
          en: 'David Edward Hughes had already completed and patented his printing telegraph in the mid-1850s, but 1857 matters because he brought the invention to Europe.',
        },
        detail: {
          pt: 'O sistema de Hughes era muito interessante porque aproximava o telégrafo de uma interface de texto. Em vez de exigir que o operador interpretasse Morse, a máquina usava teclas e imprimia caracteres no receptor. A pessoa digitava, a linha transmitia, a outra ponta imprimia.\n\nSegundo o Dictionary of Welsh Biography, Hughes levou o instrumento para a Inglaterra em 1857, mas ele não foi bem recebido. Depois, seguiu para a França, onde a tecnologia seria comprada pelo governo em 1860 e instalada em linhas oficiais, espalhando-se pela Europa nos anos seguintes.\n\nEntão, para 1857, Hughes é um personagem de transição. O grande impacto comercial ainda viria depois, mas a movimentação europeia começa aqui.\n\nPara a história da TI, o telégrafo impressor é muito importante porque antecipa uma linha inteira de tecnologias: teletipos, terminais, consoles, máquinas de entrada e saída, interfaces textuais e comunicação remota entre pessoas e sistemas.\n\nÉ quase o “chat por fio” do século XIX, só que impresso em papel.',
          en: 'Hughes’s system was very interesting because it brought the telegraph closer to a text interface. Instead of requiring the operator to interpret Morse, the machine used keys and printed characters at the receiver. A person typed, the line transmitted, the other end printed.\n\nAccording to the Dictionary of Welsh Biography, Hughes brought the instrument to England in 1857, but it was not well received. He then went to France, where the technology would be bought by the government in 1860 and installed on official lines, spreading across Europe in the following years.\n\nSo, for 1857, Hughes is a transitional figure. The major commercial impact would come later, but the European movement begins here.\n\nFor IT history, the printing telegraph is very important because it anticipates an entire line of technologies: teletypes, terminals, consoles, input-output machines, text interfaces and remote communication between people and systems.\n\nIt is almost the 19th-century “chat by wire,” except printed on paper.',
        },
      },
    ],
  },
  {
    year: 1858,
    era: { pt: 'O Oceano Vira Rede, o Dado Vira Argumento', en: 'The Ocean Becomes a Network, Data Becomes an Argument' },
    context: {
      pt: 'Em 1858, a informação atravessou o Atlântico por cabo telegráfico pela primeira vez, mesmo que por pouco tempo. No mesmo ano, Florence Nightingale mostrou que dados bem visualizados podiam mudar decisões de governo. E o pantelegraph de Giovanni Caselli deu mais um passo rumo à transmissão de imagens por fio.',
      en: 'In 1858, information crossed the Atlantic by telegraph cable for the first time, even if only briefly. That same year, Florence Nightingale showed that well-visualized data could change government decisions. And Giovanni Caselli’s pantelegraph took another step toward image transmission by wire.',
    },
    peopleCount: 10,
    people: [
      {
        name: 'Cyrus West Field, John Watkins Brett, Charles Tilston Bright, William Thomson & Wildman Whitehouse',
        imagePlaceholder: YEAR_1858_PLACEHOLDER,
        flag: '🇺🇸 🇬🇧',
        nationality: {
          pt: 'Cyrus West Field: americano · John Watkins Brett: britânico · Charles Tilston Bright: britânico · William Thomson: britânico, nascido em Belfast · Wildman Whitehouse: britânico',
          en: 'Cyrus West Field: American · John Watkins Brett: British · Charles Tilston Bright: British · William Thomson: British, born in Belfast · Wildman Whitehouse: British',
        },
        formation: {
          pt: 'Field: empresário e investidor do setor de papel, com formação prática em negócios, financiamento e organização de grandes projetos.\n\nBrett: empreendedor de telegrafia submarina, articulador de concessões e empresas de cabos.\n\nBright: engenheiro elétrico, educado na Merchant Taylors’ School, com experiência prática em companhias telegráficas e cabos submarinos.\n\nThomson: matemático e físico formado pela University of Glasgow e pela University of Cambridge, futuro Lord Kelvin.\n\nWhitehouse: médico cirurgião de Brighton que se interessou por eletricidade e telegrafia, tornando-se eletricista da Atlantic Telegraph Company.',
          en: 'Field: paper-industry entrepreneur and investor, with practical formation in business, financing and the organization of large projects.\n\nBrett: submarine telegraph entrepreneur, organizer of concessions and cable companies.\n\nBright: electrical engineer, educated at Merchant Taylors’ School, with practical experience in telegraph companies and submarine cables.\n\nThomson: mathematician and physicist trained at the University of Glasgow and the University of Cambridge, future Lord Kelvin.\n\nWhitehouse: Brighton surgeon who became interested in electricity and telegraphy, becoming electrician of the Atlantic Telegraph Company.',
        },
        summary: {
          pt: 'Participaram da instalação do primeiro cabo telegráfico transatlântico funcional entre a Irlanda e Newfoundland, permitindo a primeira troca oficial de mensagens por cabo entre a rainha Vitória e o presidente James Buchanan',
          en: 'Took part in installing the first functional transatlantic telegraph cable between Ireland and Newfoundland, enabling the first official cable message exchange between Queen Victoria and President James Buchanan',
        },
        role: {
          pt: 'Pioneiros do primeiro cabo transatlântico funcional',
          en: 'Pioneers of the first functional transatlantic cable',
        },
        contribution: {
          pt: 'Em 1858, a humanidade conseguiu algo que parecia absurdo poucos anos antes: enviar uma mensagem elétrica através do Oceano Atlântico.',
          en: 'In 1858, humanity achieved something that had seemed absurd only a few years earlier: sending an electrical message across the Atlantic Ocean.',
        },
        detail: {
          pt: 'Depois da tentativa fracassada de 1857, a Atlantic Telegraph Company tentou de novo. Os navios HMS Agamemnon e USS Niagara se encontraram no meio do Atlântico, uniram as pontas do cabo e seguiram em direções opostas, um para a Irlanda e outro para Newfoundland. Em 5 de agosto de 1858, o cabo estava conectado. Em 16 de agosto de 1858, a rainha Vitória enviou a primeira mensagem oficial ao presidente James Buchanan.\n\nO feito foi gigantesco. Antes disso, uma mensagem entre Europa e América dependia de navios e podia levar dias ou semanas. Com o cabo, pelo menos em teoria, a comunicação podia acontecer em minutos ou horas.\n\nSó que a tecnologia ainda era imatura. A mensagem da rainha Vitória tinha menos de 100 palavras e levou mais de 16 horas para ser transmitida e confirmada. O sinal era fraco, lento e difícil de interpretar. O cabo funcionou por poucas semanas e falhou em setembro de 1858. Mesmo assim, o impacto simbólico foi enorme. Pela primeira vez, dois continentes tinham sido conectados eletricamente.\n\nEsse evento é importantíssimo para a história da TI porque antecipa a ideia de rede global de dados. Ainda não existia internet, fibra óptica, satélite, cloud ou data center. Mas o problema central já estava ali:\n\ncomo fazer informação atravessar longas distâncias quase em tempo real?\n\nTambém é um caso perfeito de aprendizado por falha. William Thomson defendia instrumentos mais sensíveis, como o mirror galvanometer, patenteado em 1858 para uso em cabos submarinos. Wildman Whitehouse, por outro lado, apostou em tensões elétricas muito altas para tentar forçar a comunicação, e relatos históricos apontam que isso contribuiu para danificar o cabo.\n\nEntão 1858 tem essa beleza histórica: foi um sucesso técnico e um fracasso operacional ao mesmo tempo. O cabo funcionou, provou que a ideia era possível, mas não aguentou. A conexão confiável só viria em 1866.\n\nPara o Hall da Fama, esse é um bloco obrigatório.',
          en: 'After the failed attempt of 1857, the Atlantic Telegraph Company tried again. HMS Agamemnon and USS Niagara met in the middle of the Atlantic, joined the cable ends and sailed in opposite directions, one toward Ireland and the other toward Newfoundland. On August 5, 1858, the cable was connected. On August 16, 1858, Queen Victoria sent the first official message to President James Buchanan.\n\nThe achievement was gigantic. Before this, a message between Europe and America depended on ships and could take days or weeks. With the cable, at least in theory, communication could happen in minutes or hours.\n\nBut the technology was still immature. Queen Victoria’s message had fewer than 100 words and took more than 16 hours to transmit and confirm. The signal was weak, slow and hard to interpret. The cable worked for only a few weeks and failed in September 1858. Even so, the symbolic impact was enormous. For the first time, two continents had been electrically connected.\n\nThis event is extremely important for IT history because it anticipates the idea of a global data network. There was still no internet, optical fiber, satellite, cloud or data center. But the central problem was already there:\n\nhow do we make information cross long distances almost in real time?\n\nIt is also a perfect case of learning through failure. William Thomson defended more sensitive instruments, such as the mirror galvanometer, patented in 1858 for submarine cable use. Wildman Whitehouse, on the other hand, relied on very high electrical voltages to try to force communication, and historical accounts indicate that this contributed to damaging the cable.\n\nSo 1858 has this historical beauty: it was a technical success and an operational failure at the same time. The cable worked, proved the idea was possible, but did not endure. A reliable connection would only come in 1866.\n\nFor the Hall of Fame, this is a mandatory block.',
        },
      },
      {
        name: 'Florence Nightingale & William Farr',
        imagePlaceholder: YEAR_1858_PLACEHOLDER,
        flag: '🇬🇧',
        nationality: { pt: 'Florence Nightingale: britânica · William Farr: britânico', en: 'Florence Nightingale: British · William Farr: British' },
        formation: {
          pt: 'Nightingale: educação particular em matemática, idiomas, filosofia, estatística e administração, além de formação prática em enfermagem e gestão hospitalar.\n\nFarr: médico e estatístico, um dos grandes nomes da estatística médica britânica no século XIX, ligado ao General Register Office.',
          en: 'Nightingale: private education in mathematics, languages, philosophy, statistics and administration, plus practical training in nursing and hospital management.\n\nFarr: physician and statistician, one of the major figures of 19th-century British medical statistics, connected to the General Register Office.',
        },
        summary: {
          pt: 'Usaram dados de mortalidade da Guerra da Crimeia para criar argumentos estatísticos e visuais em defesa de reformas sanitárias no Exército Britânico',
          en: 'Used mortality data from the Crimean War to create statistical and visual arguments in favor of sanitary reforms in the British Army',
        },
        role: {
          pt: 'Pioneiros da visualização de dados para decisão pública',
          en: 'Pioneers of data visualization for public decision-making',
        },
        contribution: {
          pt: 'Em 1858, Florence Nightingale mostrou que dados não servem apenas para registrar o passado. Eles podem convencer governos, mudar políticas públicas e salvar vidas.',
          en: 'In 1858, Florence Nightingale showed that data is not only for recording the past. It can persuade governments, change public policy and save lives.',
        },
        detail: {
          pt: 'Depois da Guerra da Crimeia, Nightingale analisou dados de mortalidade dos soldados britânicos e percebeu que muitas mortes não vinham diretamente de ferimentos de batalha, mas de doenças evitáveis, más condições sanitárias e falhas hospitalares. Com apoio estatístico de William Farr, ela transformou esses dados em relatórios e gráficos visuais poderosos.\n\nO grande símbolo desse trabalho é o famoso diagrama polar, muitas vezes chamado de rose diagram ou coxcomb chart. Ele mostrava, mês a mês, as causas de morte no exército. Em vez de entregar apenas uma tabela seca, Nightingale criou uma visualização que tornava o problema impossível de ignorar.\n\nEm 1858, ela publicou privadamente o relatório Notes on Matters Affecting the Health, Efficiency, and Hospital Administration of the British Army, enviado a pessoas influentes do governo. Esse material incluía gráficos estatísticos para defender reformas sanitárias.\n\nEsse bloco é muito importante para a história da TI porque entra na raiz de ciência de dados, visualização de dados, analytics, dashboard e tomada de decisão baseada em evidência.\n\nA lógica é muito moderna:\n\ncoletar dados, organizar dados, visualizar dados e usar dados para mudar uma decisão institucional.\n\nTambém em 1858, Nightingale se tornou a primeira mulher eleita Fellow da Statistical Society of London, com William Farr entre os nomes que apoiaram sua eleição.\n\nNo Hall da Fama, esse é um bloco muito forte porque mostra outra linhagem da TI: não só máquinas e cabos, mas dados como instrumento de decisão.',
          en: 'After the Crimean War, Nightingale analyzed mortality data from British soldiers and realized that many deaths did not come directly from battle wounds, but from preventable disease, poor sanitary conditions and hospital failures. With statistical support from William Farr, she turned that data into powerful reports and visual charts.\n\nThe great symbol of this work is the famous polar diagram, often called a rose diagram or coxcomb chart. It showed, month by month, the causes of death in the army. Instead of delivering only a dry table, Nightingale created a visualization that made the problem impossible to ignore.\n\nIn 1858, she privately published Notes on Matters Affecting the Health, Efficiency, and Hospital Administration of the British Army, sent to influential people in government. That material included statistical charts arguing for sanitary reforms.\n\nThis block is very important for IT history because it sits at the root of data science, data visualization, analytics, dashboards and evidence-based decision-making.\n\nThe logic is very modern:\n\ncollect data, organize data, visualize data and use data to change an institutional decision.\n\nAlso in 1858, Nightingale became the first woman elected Fellow of the Statistical Society of London, with William Farr among those who supported her election.\n\nIn the Hall of Fame, this is a very strong block because it shows another lineage of IT: not only machines and cables, but data as an instrument of decision.',
        },
      },
      {
        name: 'Giovanni Caselli, Paul-Gustave Froment & Alexandre-Edmond Becquerel',
        imagePlaceholder: YEAR_1858_PLACEHOLDER,
        flag: '🇮🇹 🇫🇷',
        nationality: {
          pt: 'Caselli: italiano · Froment: francês · Becquerel: francês',
          en: 'Caselli: Italian · Froment: French · Becquerel: French',
        },
        formation: {
          pt: 'Caselli: sacerdote, físico e inventor, ligado à Universidade de Florença, com interesse em eletricidade, magnetismo e transmissão de imagens.\n\nFroment: engenheiro e construtor francês de instrumentos científicos e mecânicos de precisão.\n\nBecquerel: físico francês, pesquisador de luz, eletricidade, óptica e magnetismo; tornou-se professor de física no Conservatoire des arts et métiers.',
          en: 'Caselli: priest, physicist and inventor, connected to the University of Florence, with an interest in electricity, magnetism and image transmission.\n\nFroment: French engineer and builder of scientific instruments and precision mechanisms.\n\nBecquerel: French physicist, researcher of light, electricity, optics and magnetism; he became professor of physics at the Conservatoire des arts et métiers.',
        },
        summary: {
          pt: 'Em 1858, uma versão aperfeiçoada do pantelegraph de Caselli foi apresentada à Academia Francesa de Ciências, com apoio técnico de Froment e demonstração por Alexandre-Edmond Becquerel',
          en: 'In 1858, an improved version of Caselli’s pantelegraph was presented to the French Academy of Sciences, with technical support from Froment and demonstration by Alexandre-Edmond Becquerel',
        },
        role: {
          pt: 'Pioneiros da validação científica da transmissão de imagens',
          en: 'Pioneers in the scientific validation of image transmission',
        },
        contribution: {
          pt: 'O pantelegraph é uma das invenções mais legais desse período porque parece um fax steampunk.',
          en: 'The pantelegraph is one of the coolest inventions of this period because it feels like a steampunk fax.',
        },
        detail: {
          pt: 'A ideia era transmitir imagens, escrita manual e assinaturas por linhas telegráficas. Ou seja, não era só mandar texto codificado. Era mandar a aparência visual de um documento.\n\nCaselli já vinha desenvolvendo o sistema desde meados da década de 1850. Em Paris, trabalhou com o engenheiro Paul-Gustave Froment para aperfeiçoar o aparelho. Em 1858, uma versão melhorada foi demonstrada pelo físico Alexandre-Edmond Becquerel na Academia Francesa de Ciências.\n\nO funcionamento era engenhoso. O transmissor varria a imagem ou escrita linha por linha. O receptor, sincronizado mecanicamente, reproduzia o padrão recebido em papel tratado quimicamente. O grande desafio era manter as duas pontas perfeitamente sincronizadas, como se fossem dois scanners mecânicos ligados por um fio.\n\nPara a história da TI, isso é muito bonito porque antecipa várias ideias futuras:\n\nscanner;\nfax;\ntransmissão de imagem;\ndocumentos remotos;\nassinatura transmitida;\nsincronização entre dispositivos;\nrepresentação visual como dado.\n\nO pantelegraph ainda não era digital, mas já tratava imagem como informação transmissível. Isso é um salto enorme.\n\nEsse bloco entra em 1858 justamente porque, depois do protótipo inicial, esse é o ano em que a invenção ganha validação científica pública na França.',
          en: 'The idea was to transmit images, handwriting and signatures over telegraph lines. In other words, it was not just sending encoded text. It was sending the visual appearance of a document.\n\nCaselli had been developing the system since the mid-1850s. In Paris, he worked with engineer Paul-Gustave Froment to improve the device. In 1858, an improved version was demonstrated by physicist Alexandre-Edmond Becquerel at the French Academy of Sciences.\n\nThe operation was ingenious. The transmitter scanned the image or writing line by line. The receiver, mechanically synchronized, reproduced the received pattern on chemically treated paper. The great challenge was keeping both ends perfectly synchronized, as if they were two mechanical scanners connected by a wire.\n\nFor IT history, this is very beautiful because it anticipates several future ideas:\n\nscanner;\nfax;\nimage transmission;\nremote documents;\ntransmitted signatures;\nsynchronization between devices;\nvisual representation as data.\n\nThe pantelegraph was not digital yet, but it already treated images as transmissible information. That is a huge leap.\n\nThis block belongs in 1858 precisely because, after the initial prototype, this is the year when the invention gained public scientific validation in France.',
        },
      },
    ],
  },
  {
    year: 1859,
    era: { pt: 'A Rede Descobre que o Sol Também Dá Bug', en: 'The Network Discovers the Sun Can Also Cause Bugs' },
    context: {
      pt: 'Em 1859, a história da TI ganha um dos seus primeiros grandes incidentes de infraestrutura: uma tempestade solar derruba e enlouquece sistemas telegráficos. No mesmo ano, uma máquina de diferenças inspirada em Babbage é entregue ao governo britânico para ajudar no cálculo de tabelas estatísticas.\n\nOu seja: de um lado, automação de cálculo entrando no Estado. Do outro, a rede elétrica descobrindo que o mundo físico também quebra sistemas de informação.',
      en: 'In 1859, IT history gained one of its first major infrastructure incidents: a solar storm knocked out and disrupted telegraph systems. That same year, a Babbage-inspired difference engine was delivered to the British government to help calculate statistical tables.\n\nIn other words: on one side, calculation automation entered the state. On the other, the electrical network discovered that the physical world also breaks information systems.',
    },
    peopleCount: 6,
    people: [
      {
        name: 'Richard Christopher Carrington & Richard Hodgson',
        imagePlaceholder: YEAR_1859_PLACEHOLDER,
        flag: '🇬🇧',
        nationality: { pt: 'Britânicos', en: 'British' },
        formation: {
          pt: 'Carrington: astrônomo formado no Trinity College, Cambridge, dedicado à observação solar e ao estudo de manchas solares.\n\nHodgson: astrônomo amador britânico, também dedicado à observação do Sol.',
          en: 'Carrington: astronomer educated at Trinity College, Cambridge, dedicated to solar observation and the study of sunspots.\n\nHodgson: British amateur astronomer, also dedicated to observing the Sun.',
        },
        summary: {
          pt: 'Observaram, em 1º de setembro de 1859, a primeira erupção solar registrada em luz branca, evento associado à grande tempestade geomagnética que afetou sistemas telegráficos no mundo todo',
          en: 'Observed, on September 1, 1859, the first solar flare recorded in white light, an event associated with the great geomagnetic storm that affected telegraph systems worldwide',
        },
        role: {
          pt: 'Observadores do Evento Carrington',
          en: 'Observers of the Carrington Event',
        },
        contribution: {
          pt: 'Em 1859, a infraestrutura de comunicação elétrica descobriu que não vivia isolada do planeta.',
          en: 'In 1859, electrical communication infrastructure discovered that it did not live isolated from the planet.',
        },
        detail: {
          pt: 'No dia 1º de setembro de 1859, Richard Carrington observava manchas solares quando viu duas regiões brilhantes surgirem de repente sobre a superfície do Sol. Richard Hodgson observou o mesmo fenômeno de forma independente. Hoje, esse evento é reconhecido como um dos primeiros registros de uma erupção solar em luz branca.\n\nPoucas horas depois, a Terra foi atingida por uma enorme tempestade geomagnética. O céu se iluminou com auroras visíveis em lugares incomuns, e os sistemas telegráficos, que eram a grande rede de comunicação da época, começaram a falhar.\n\nAs linhas ficaram carregadas com correntes induzidas pela tempestade. Operadores receberam choques, equipamentos soltaram faíscas e algumas estações ficaram inutilizáveis. A NOAA descreve o evento como um momento em que picos de eletricidade invadiram sistemas telegráficos do mundo, impedindo o envio normal de mensagens.\n\nA parte mais bizarra é que alguns operadores conseguiram enviar mensagens mesmo com as baterias desconectadas, usando apenas a corrente induzida pela tempestade. A Wired registra o famoso caso entre Boston e Portland, em que operadores trabalharam com a chamada “corrente auroral”.\n\nPara a história da TI, esse evento é maravilhoso porque parece um incidente moderno de infraestrutura crítica.\n\nAinda não existia internet, cloud, satélite ou data center. Mas já existia uma rede elétrica de comunicação grande o suficiente para ser afetada por um fenômeno externo global.\n\nEm linguagem atual, o Evento Carrington foi quase um “apagão de rede” causado por clima espacial.\n\nEle mostra uma lição que continua atualíssima: sistemas de informação dependem do mundo físico. Cabos, energia, magnetismo, clima, Sol, atmosfera, tudo isso importa. A TI nunca foi só software.\n\nEsse bloco é obrigatório em 1859.',
          en: 'On September 1, 1859, Richard Carrington was observing sunspots when he saw two bright regions suddenly appear on the surface of the Sun. Richard Hodgson observed the same phenomenon independently. Today, this event is recognized as one of the first records of a solar flare in white light.\n\nA few hours later, Earth was hit by a huge geomagnetic storm. The sky lit up with auroras visible in unusual places, and telegraph systems, the great communication network of the time, began to fail.\n\nThe lines became charged with currents induced by the storm. Operators received shocks, equipment produced sparks and some stations became unusable. NOAA describes the event as a moment when surges of electricity invaded telegraph systems around the world, preventing normal message transmission.\n\nThe strangest part is that some operators managed to send messages even with batteries disconnected, using only the current induced by the storm. Wired records the famous case between Boston and Portland, where operators worked with the so-called “auroral current.”\n\nFor IT history, this event is wonderful because it looks like a modern critical infrastructure incident.\n\nThere was still no internet, cloud, satellite or data center. But there was already an electrical communication network large enough to be affected by a global external phenomenon.\n\nIn current language, the Carrington Event was almost a “network outage” caused by space weather.\n\nIt shows a lesson that remains extremely current: information systems depend on the physical world. Cables, energy, magnetism, weather, the Sun, atmosphere, all of this matters. IT was never only software.\n\nThis block is mandatory in 1859.',
        },
      },
      {
        name: 'Per Georg Scheutz, Edvard Scheutz, Bryan Donkin Jr. & William Farr',
        imagePlaceholder: YEAR_1859_PLACEHOLDER,
        flag: '🇸🇪 🇬🇧',
        nationality: {
          pt: 'Per Georg Scheutz: sueco · Edvard Scheutz: sueco · Bryan Donkin Jr.: britânico · William Farr: britânico',
          en: 'Per Georg Scheutz: Swedish · Edvard Scheutz: Swedish · Bryan Donkin Jr.: British · William Farr: British',
        },
        formation: {
          pt: 'Per Georg Scheutz: editor, jornalista, tradutor, publicista e inventor, com formação prática em publicação, mecânica e experimentação técnica.\n\nEdvard Scheutz: engenheiro mecânico, formado no Technological Institute de Estocolmo.\n\nBryan Donkin Jr.: engenheiro e fabricante britânico, ligado à firma Bryan Donkin & Co., especializada em máquinas industriais de precisão.\n\nWilliam Farr: médico, estatístico e epidemiologista, ligado ao General Register Office, um dos grandes nomes da estatística médica britânica.',
          en: 'Per Georg Scheutz: editor, journalist, translator, publicist and inventor, with practical formation in publishing, mechanics and technical experimentation.\n\nEdvard Scheutz: mechanical engineer, trained at the Technological Institute of Stockholm.\n\nBryan Donkin Jr.: British engineer and manufacturer, connected to Bryan Donkin & Co., a firm specialized in precision industrial machinery.\n\nWilliam Farr: physician, statistician and epidemiologist, connected to the General Register Office, one of the major figures of British medical statistics.',
        },
        summary: {
          pt: 'Em 1859, uma máquina de diferenças baseada no projeto dos Scheutz, construída por Bryan Donkin & Co., foi entregue ao General Register Office britânico para uso em cálculos estatísticos, especialmente tabelas de vida',
          en: 'In 1859, a difference engine based on the Scheutz design, built by Bryan Donkin & Co., was delivered to the British General Register Office for use in statistical calculations, especially life tables',
        },
        role: {
          pt: 'Pioneiros do cálculo automático aplicado à estatística pública',
          en: 'Pioneers of automatic calculation applied to public statistics',
        },
        contribution: {
          pt: 'Em 1859, a automação de cálculo deu um passo muito importante: saiu do palco das exposições e entrou na burocracia estatal.',
          en: 'In 1859, calculation automation took a very important step: it left the exhibition stage and entered state bureaucracy.',
        },
        detail: {
          pt: 'Per Georg Scheutz e Edvard Scheutz já tinham construído uma máquina de diferenças funcional em 1853, inspirada nas ideias de Charles Babbage. A máquina calculava tabelas pelo método das diferenças finitas e imprimia os resultados. Isso já era impressionante. Mas em 1859 acontece algo ainda mais interessante: uma versão construída em Londres pela firma Bryan Donkin & Co. foi entregue ao General Register Office, o órgão estatístico britânico. O IEEE Computer Society registra que essa cópia foi encomendada pelo General Register Office, construída por Bryan Donkin & Co., entregue em 1859 e usada para produzir tabelas de vida.\n\nWilliam Farr é o personagem que dá sentido prático a essa história. Ele era médico e estatístico, interessado em mortalidade, saúde pública e tabelas de vida. Para esse tipo de trabalho, era preciso lidar com muitos números, repetições, cálculos e tabelas. Exatamente o tipo de tarefa em que erro humano era comum.\n\nA máquina de diferenças era feita para isso: automatizar cálculo tabular.\n\nEm 1859, Farr publicou um trabalho sobre construção de tabelas de vida, associado ao uso da máquina dos Scheutz no contexto do General Register Office. O History of Information descreve esse relatório como uma das primeiras descrições do uso da máquina Scheutz nº 3 para preparar tabelas de vida, incluindo tabela calculada e composta pela máquina.\n\nEsse evento é muito forte para a história da TI porque mostra um dos primeiros usos institucionais de uma máquina de cálculo automático para trabalho estatístico real.\n\nAinda não era computador moderno. Não era programável como um computador atual. Mas era uma máquina assumindo uma tarefa intelectual repetitiva dentro de uma instituição pública.\n\nAqui já aparecem várias ideias que depois seriam centrais:\n\nautomação de cálculo;\nestatística pública;\nredução de erro humano;\nprodução mecânica de tabelas;\ndados usados pelo Estado;\nmáquina como ferramenta para processamento de informação.\n\nÉ quase um ancestral dos sistemas usados hoje por governos para calcular estatísticas, mortalidade, população, previdência, saúde pública e planejamento.',
          en: 'Per Georg Scheutz and Edvard Scheutz had already built a working difference engine in 1853, inspired by the ideas of Charles Babbage. The machine calculated tables using the method of finite differences and printed the results. That was already impressive. But in 1859 something even more interesting happened: a version built in London by Bryan Donkin & Co. was delivered to the General Register Office, the British statistical agency. The IEEE Computer Society records that this copy was ordered by the General Register Office, built by Bryan Donkin & Co., delivered in 1859 and used to produce life tables.\n\nWilliam Farr is the person who gives practical meaning to this story. He was a physician and statistician interested in mortality, public health and life tables. For that kind of work, one had to handle many numbers, repetitions, calculations and tables. Exactly the kind of task where human error was common.\n\nThe difference engine was made for this: automating tabular calculation.\n\nIn 1859, Farr published a work on the construction of life tables, associated with the use of the Scheutz machine in the context of the General Register Office. History of Information describes this report as one of the earliest accounts of the use of Scheutz Machine No. 3 to prepare life tables, including a table calculated and typeset by the machine.\n\nThis event is very strong for IT history because it shows one of the first institutional uses of an automatic calculating machine for real statistical work.\n\nIt was not a modern computer yet. It was not programmable like a present-day computer. But it was a machine taking on a repetitive intellectual task inside a public institution.\n\nSeveral ideas that would later become central are already present here:\n\nautomation of calculation;\npublic statistics;\nreduction of human error;\nmechanical production of tables;\ndata used by the state;\nthe machine as a tool for information processing.\n\nIt is almost an ancestor of the systems governments use today to calculate statistics, mortality, population, pensions, public health and planning.',
        },
      },
    ],
  },
  {
    year: 1860,
    era: { pt: 'A Rede Quer Cruzar Continentes', en: 'The Network Wants to Cross Continents' },
    context: {
      pt: 'Em 1860, a grande história é a corrida para vencer distância. Os Estados Unidos criam a base legal para uma linha telegráfica transcontinental, o Pony Express tenta ser a última grande rede física de mensagens rápidas, e o telégrafo impressor de Hughes começa a ganhar terreno na Europa.\n\nNão é ainda a era dos computadores. É a era em que o mundo está aprendendo a transportar informação mais rápido que pessoas, cavalos, navios e papel.',
      en: 'In 1860, the great story is the race to overcome distance. The United States created the legal basis for a transcontinental telegraph line, the Pony Express tried to be the last great physical network for fast messages, and Hughes’s printing telegraph began gaining ground in Europe.\n\nIt is not yet the age of computers. It is the age in which the world is learning to move information faster than people, horses, ships and paper.',
    },
    peopleCount: 8,
    people: [
      {
        name: 'Hiram Sibley & James Buchanan',
        imagePlaceholder: YEAR_1860_PLACEHOLDER,
        flag: '🇺🇸',
        nationality: { pt: 'Americanos', en: 'Americans' },
        formation: {
          pt: 'Sibley: formação prática em negócios, oficinas, banco, terras e política local; tornou-se empresário de telecomunicações e um dos grandes nomes da Western Union.\n\nBuchanan: advogado e político, formado pelo Dickinson College; foi presidente dos Estados Unidos entre 1857 e 1861.',
          en: 'Sibley: practical formation in business, workshops, banking, land and local politics; he became a telecommunications entrepreneur and one of the major names at Western Union.\n\nBuchanan: lawyer and politician, educated at Dickinson College; he served as president of the United States from 1857 to 1861.',
        },
        summary: {
          pt: 'Em 1860, a lei conhecida como Pacific Telegraph Act autorizou o financiamento federal para construir uma linha telegráfica entre o leste e o oeste dos Estados Unidos. James Buchanan assinou a lei, e Hiram Sibley, representando a Western Union, tornou-se o principal vencedor do contrato.',
          en: 'In 1860, the law known as the Pacific Telegraph Act authorized federal funding to build a telegraph line between the eastern and western United States. James Buchanan signed the law, and Hiram Sibley, representing Western Union, became the main contract winner.',
        },
        role: {
          pt: 'Articuladores da linha telegráfica transcontinental dos EUA',
          en: 'Architects of the U.S. transcontinental telegraph line',
        },
        contribution: {
          pt: 'Em 1860, os Estados Unidos deram um passo decisivo para conectar eletricamente o país de costa a costa.',
          en: 'In 1860, the United States took a decisive step toward electrically connecting the country from coast to coast.',
        },
        detail: {
          pt: 'Até aquele momento, a comunicação entre o leste americano e a Califórnia ainda era lenta, cara e dependente de rotas físicas. Mensagens atravessavam o continente por correio, diligências, navios ou rotas mistas. A Califórnia já era parte dos Estados Unidos desde 1850, mas, em termos de comunicação, ainda parecia distante demais.\n\nO Pacific Telegraph Act, assinado em 16 de junho de 1860, autorizou o governo federal a financiar a construção de uma linha telegráfica transcontinental. A lei previa apoio de até 40 mil dólares por ano por até dez anos para construir e manter a linha, além de dar prioridade a mensagens do governo. O National Park Service destaca que o objetivo também era acelerar comunicação militar entre fortes e pontos estratégicos.\n\nHiram Sibley entra como o nome empresarial central. Ele era presidente da Western Union e defendia a construção de uma linha transcontinental. Nem todos na empresa estavam convencidos no começo, mas a oportunidade federal mudou o jogo. O Smithsonian registra que, quando os outros concorrentes saíram, Sibley ficou como único licitante e venceu por default. Também registra que a Pacific Telegraph Company foi organizada para construir a seção oriental da linha.\n\nO resultado final só viria em 1861, quando a linha telegráfica transcontinental fosse concluída. Mas 1860 é o ano da virada política e institucional. A rede deixou de ser apenas uma ambição comercial e virou projeto nacional.\n\nPara a história da TI, isso é muito forte: antes da internet cruzar continentes, antes da fibra óptica e antes dos backbones digitais, o telégrafo já estava ensinando uma lição básica da era da informação.\n\nQuem controla a infraestrutura de comunicação controla velocidade, coordenação e poder.',
          en: 'Until that moment, communication between the American East and California was still slow, expensive and dependent on physical routes. Messages crossed the continent by mail, stagecoach, ships or mixed routes. California had been part of the United States since 1850, but in communication terms it still felt far too distant.\n\nThe Pacific Telegraph Act, signed on June 16, 1860, authorized the federal government to finance the construction of a transcontinental telegraph line. The law provided support of up to 40,000 dollars per year for up to ten years to build and maintain the line, and gave priority to government messages. The National Park Service notes that the goal was also to speed military communication between forts and strategic points.\n\nHiram Sibley enters as the central business figure. He was president of Western Union and advocated building a transcontinental line. Not everyone in the company was convinced at first, but the federal opportunity changed the game. The Smithsonian records that, when the other competitors withdrew, Sibley was left as the only bidder and won by default. It also records that the Pacific Telegraph Company was organized to build the eastern section of the line.\n\nThe final result would only come in 1861, when the transcontinental telegraph line was completed. But 1860 is the year of the political and institutional turn. The network stopped being only a commercial ambition and became a national project.\n\nFor IT history, this is very strong: before the internet crossed continents, before optical fiber and before digital backbones, the telegraph was already teaching a basic lesson of the information age.\n\nWhoever controls communication infrastructure controls speed, coordination and power.',
        },
      },
      {
        name: 'William Hepburn Russell, Alexander Majors & William Bradford Waddell',
        imagePlaceholder: YEAR_1860_PLACEHOLDER,
        flag: '🇺🇸',
        nationality: { pt: 'Americanos', en: 'Americans' },
        formation: {
          pt: 'Russell: empresário de transporte, frete e contratos governamentais, com formação prática em logística e negócios.\n\nMajors: empreendedor de frete, transporte e organização de rotas, conhecido por sua disciplina operacional e experiência com caravanas e suprimentos militares.\n\nWaddell: empresário de transporte e parceiro comercial em operações de frete no oeste americano.',
          en: 'Russell: transportation, freight and government-contract entrepreneur, with practical formation in logistics and business.\n\nMajors: freight, transport and route-organization entrepreneur, known for operational discipline and experience with wagon trains and military supplies.\n\nWaddell: transportation entrepreneur and business partner in freight operations in the American West.',
        },
        summary: {
          pt: 'Fundaram o Pony Express, serviço de entrega rápida de mensagens por cavaleiros em revezamento entre Missouri e Califórnia. O primeiro envio oficial saiu de St. Joseph, Missouri, em 3 de abril de 1860.',
          en: 'Founded the Pony Express, a fast message delivery service using relay riders between Missouri and California. The first official dispatch left St. Joseph, Missouri, on April 3, 1860.',
        },
        role: {
          pt: 'Fundadores da última grande rede rápida pré-elétrica continental',
          en: 'Founders of the last great fast pre-electrical continental network',
        },
        contribution: {
          pt: 'O Pony Express parece, à primeira vista, uma coisa mais “Velho Oeste” do que TI. Mas ele merece aparecer em 1860 porque é uma peça perfeita na história da informação.',
          en: 'At first glance, the Pony Express looks more like the “Old West” than IT. But it deserves to appear in 1860 because it is a perfect piece in the history of information.',
        },
        detail: {
          pt: 'Ele foi uma tentativa extrema de resolver o mesmo problema que o telégrafo também tentava resolver: como fazer uma mensagem atravessar um continente o mais rápido possível?\n\nEm 3 de abril de 1860, começou a primeira entrega oficial do Pony Express em St. Joseph, Missouri. A mala levava cartas, telegramas e outros papéis, e o sistema funcionava por revezamento de cavaleiros e estações ao longo da rota. O National Park Service descreve esse primeiro envio como um evento público, com autoridades, cerimônia, tiro de canhão e partida do cavaleiro às 19h15.\n\nOs fundadores foram Russell, Majors e Waddell, três empresários de transporte e frete. O Smithsonian registra que eles fundaram o Pony Express como uma empresa privada, tentando atender à necessidade de comunicação rápida entre o leste e o oeste.\n\nA lógica era quase uma rede humana de pacotes. Cada cavaleiro carregava a mensagem por um trecho, entregava para o próximo, e assim por diante. Era uma arquitetura de relay, só que com cavalos, estações e risco de morte.\n\nO mais interessante é que o Pony Express já nasceu com prazo de validade. Ele era impressionante, mas caro, perigoso e fisicamente limitado. Assim que o telégrafo transcontinental fosse concluído em 1861, esse tipo de rede deixaria de fazer sentido.\n\nPor isso ele é tão bom para a trilha: o Pony Express é quase o “último suspiro” da comunicação rápida pré-elétrica em escala continental.\n\nEle mostra o mundo antigo tentando correr contra o mundo novo.',
          en: 'It was an extreme attempt to solve the same problem the telegraph was also trying to solve: how do you make a message cross a continent as fast as possible?\n\nOn April 3, 1860, the first official Pony Express delivery began in St. Joseph, Missouri. The mailbag carried letters, telegrams and other papers, and the system worked through relay riders and stations along the route. The National Park Service describes this first dispatch as a public event, with officials, ceremony, a cannon shot and the rider departing at 7:15 p.m.\n\nThe founders were Russell, Majors and Waddell, three transportation and freight entrepreneurs. The Smithsonian records that they founded the Pony Express as a private company, trying to meet the need for fast communication between East and West.\n\nThe logic was almost a human packet network. Each rider carried the message for one segment, handed it to the next, and so on. It was a relay architecture, but with horses, stations and mortal risk.\n\nThe most interesting part is that the Pony Express was born with an expiration date. It was impressive, but expensive, dangerous and physically limited. As soon as the transcontinental telegraph was completed in 1861, this kind of network stopped making sense.\n\nThat is why it is so good for the timeline: the Pony Express is almost the “last breath” of fast pre-electrical communication at continental scale.\n\nIt shows the old world trying to race against the new one.',
        },
      },
      {
        name: 'David Edward Hughes',
        imagePlaceholder: YEAR_1860_PLACEHOLDER,
        flag: '🇬🇧 🇺🇸',
        nationality: { pt: 'Britânico de nascimento, associado aos Estados Unidos pela carreira inicial', en: 'British-born, associated with the United States through his early career' },
        formation: {
          pt: 'Músico, professor e inventor. Foi educado no St. Joseph’s College, em Bardstown, Kentucky, tornou-se professor de música e depois também se envolveu com filosofia natural, eletricidade e experimentação técnica.',
          en: 'Musician, teacher and inventor. He was educated at St. Joseph’s College in Bardstown, Kentucky, became a music teacher and later also became involved with natural philosophy, electricity and technical experimentation.',
        },
        summary: {
          pt: 'Em 1860, levou seu telégrafo impressor para a França, onde encontrou apoio maior do que havia recebido na Inglaterra. O sistema de Hughes usava teclado e imprimia caracteres diretamente no receptor.',
          en: 'In 1860, brought his printing telegraph to France, where he found greater support than he had received in England. Hughes’s system used a keyboard and printed characters directly at the receiver.',
        },
        role: {
          pt: 'Pioneiro da interface textual em redes telegráficas',
          en: 'Pioneer of text interfaces in telegraph networks',
        },
        contribution: {
          pt: 'Em 1860, David Edward Hughes levou sua invenção para a França e encontrou um ambiente mais receptivo.',
          en: 'In 1860, David Edward Hughes brought his invention to France and found a more receptive environment.',
        },
        detail: {
          pt: 'O telégrafo impressor de Hughes já vinha sendo desenvolvido desde meados da década de 1850. A ideia era poderosa: em vez de exigir que operadores codificassem e decodificassem Morse, a pessoa podia usar um teclado, e a máquina do outro lado imprimia caracteres legíveis.\n\nA fonte Heroes of the Telegraph registra que Hughes foi para a Inglaterra em 1857 tentando introduzir seu instrumento, mas depois de dois anos sem avanço significativo, foi para a França em 1860, onde recebeu uma recepção melhor.\n\nEsse tipo de invenção importa muito para a história da TI porque aproxima a rede de uma interface textual. A comunicação elétrica deixa de ser apenas pulso e código especializado. Ela começa a virar algo mais parecido com digitar e receber texto.\n\nÉ um ancestral conceitual dos teletipos, terminais, consoles e interfaces de entrada e saída baseadas em texto.\n\nEm termos modernos, a lógica é simples:\n\nusuário pressiona teclas, sistema transmite sinais, outro dispositivo imprime a saída.\n\nAinda não é computador. Mas já parece muito com a forma como humanos mais tarde interagiriam com computadores remotos.\n\nHughes mostra que a história da TI não é só sobre processamento. Também é sobre interface.',
          en: 'Hughes’s printing telegraph had been under development since the mid-1850s. The idea was powerful: instead of requiring operators to encode and decode Morse, a person could use a keyboard, and the machine at the other end printed readable characters.\n\nHeroes of the Telegraph records that Hughes went to England in 1857 trying to introduce his instrument, but after two years without significant progress, he went to France in 1860, where he received a better reception.\n\nThis kind of invention matters a lot for IT history because it brings the network closer to a text interface. Electrical communication stops being only pulse and specialized code. It begins to become something closer to typing and receiving text.\n\nIt is a conceptual ancestor of teletypes, terminals, consoles and text-based input-output interfaces.\n\nIn modern terms, the logic is simple:\n\nthe user presses keys, the system transmits signals, another device prints the output.\n\nIt is not yet a computer. But it already looks a lot like the way humans would later interact with remote computers.\n\nHughes shows that IT history is not only about processing. It is also about interface.',
        },
      },
      {
        name: 'Robert Stirling Newall & Werner von Siemens',
        imagePlaceholder: YEAR_1860_PLACEHOLDER,
        flag: '🇬🇧 🇩🇪',
        nationality: { pt: 'Newall: britânico, escocês · Siemens: alemão', en: 'Newall: British, Scottish · Siemens: German' },
        formation: {
          pt: 'Newall: engenheiro e inventor prático, formado pela experiência industrial em cabos metálicos, máquinas e engenharia submarina.\n\nSiemens: formação militar e técnica na artilharia prussiana, com estudos em engenharia e forte atuação como inventor, engenheiro elétrico e empreendedor.',
          en: 'Newall: practical engineer and inventor, formed by industrial experience in metal cables, machinery and submarine engineering.\n\nSiemens: military and technical training in the Prussian artillery, with engineering studies and strong work as an inventor, electrical engineer and entrepreneur.',
        },
        summary: {
          pt: 'Participaram da tentativa de criar uma rota telegráfica submarina entre o Egito e a Índia pela região do Mar Vermelho. A etapa Aden, Hallaniyah, Muscat e Karachi foi lançada entre janeiro e fevereiro de 1860, mas o sistema acabou ficando conhecido como um grande fracasso técnico.',
          en: 'Took part in the attempt to create a submarine telegraph route between Egypt and India through the Red Sea region. The Aden, Hallaniyah, Muscat and Karachi section was laid between January and February 1860, but the system became known as a major technical failure.',
        },
        role: {
          pt: 'Engenheiros de uma rota submarina imperial fracassada',
          en: 'Engineers of a failed imperial submarine route',
        },
        contribution: {
          pt: 'Em 1860, a tentativa britânica de conectar a Índia por cabo submarino avançou, mas mostrou como infraestrutura global era difícil.',
          en: 'In 1860, the British attempt to connect India by submarine cable advanced, but showed how difficult global infrastructure was.',
        },
        detail: {
          pt: 'A Red Sea and India Telegraph Company havia sido formada para conectar a Índia a Londres por uma rota passando pelo Egito e pelo Mar Vermelho. O Museum Victoria registra que o trecho Aden, Hallani, Muscat e Karachi foi instalado entre 17 de janeiro e 12 de fevereiro de 1860. O cabo foi fabricado pela R. S. Newall & Company, usando núcleo fornecido pela Gutta Percha Company.\n\nA Siemens também aparece nessa história pelo lado do monitoramento elétrico da instalação. Um material histórico da Siemens registra que o projeto era liderado pela Red Sea and India Telegraph Company, com cabo fornecido e lançado por Newall em colaboração com empresas Siemens em Londres e Berlim, responsáveis pelo monitoramento elétrico durante o lançamento.\n\nSó que o projeto fracassou rapidamente. O cabo era vulnerável, a rota era difícil, e os problemas físicos do ambiente submarino ainda eram mal compreendidos. Fontes históricas sobre telegrafia submarina registram que a linha Suez-Karachi abriu por pouco tempo no início de 1860, mas falhou rapidamente.\n\nEsse bloco é importante porque mostra uma coisa muito real na história da tecnologia: rede global não nasce bonita. Nasce quebrando.\n\nAntes de existir backbone internacional confiável, fibra óptica submarina ou internet global, engenheiros precisaram aprender na marra sobre isolamento, profundidade, corrosão, tensão mecânica, relevo submarino, material, manutenção e monitoramento.\n\nEm 1860, a ambição era conectar impérios por fio. O resultado foi falha, prejuízo e aprendizado técnico.\n\nE isso também é história da TI.',
          en: 'The Red Sea and India Telegraph Company had been formed to connect India to London through a route passing by Egypt and the Red Sea. Museum Victoria records that the Aden, Hallani, Muscat and Karachi section was installed between January 17 and February 12, 1860. The cable was manufactured by R. S. Newall & Company, using a core supplied by the Gutta Percha Company.\n\nSiemens also appears in this story through the electrical monitoring of the installation. Historical Siemens material records that the project was led by the Red Sea and India Telegraph Company, with cable supplied and laid by Newall in collaboration with Siemens companies in London and Berlin, which were responsible for electrical monitoring during laying.\n\nBut the project quickly failed. The cable was vulnerable, the route was difficult, and the physical problems of the submarine environment were still poorly understood. Historical sources on submarine telegraphy record that the Suez-Karachi line opened briefly in early 1860, but failed quickly.\n\nThis block matters because it shows something very real in technology history: the global network is not born beautiful. It is born breaking.\n\nBefore reliable international backbones, submarine optical fiber or the global internet existed, engineers had to learn the hard way about insulation, depth, corrosion, mechanical tension, seabed relief, material, maintenance and monitoring.\n\nIn 1860, the ambition was to connect empires by wire. The result was failure, loss and technical learning.\n\nAnd that is also IT history.',
        },
      },
    ],
  },
  {
    year: 1861,
    era: { pt: 'A Voz, a Cor e o Continente Entram na Rede', en: 'Voice, Color and the Continent Enter the Network' },
    context: {
      pt: 'Em 1861, a história da TI ainda não tem computador moderno, mas já tem ideias que vão virar fundamentais: comunicação instantânea entre costas de um país, voz transmitida eletricamente, imagem colorida separada em canais e documentos visuais enviados por fio.\n\nÉ um ano muito bom para mostrar que a TI não nasceu de uma coisa só. Ela veio da mistura entre cálculo, sinal, rede, imagem, som e infraestrutura.',
      en: 'In 1861, IT history still does not have the modern computer, but it already has ideas that would become fundamental: instant communication between the coasts of a country, electrically transmitted voice, color images separated into channels and visual documents sent by wire.\n\nIt is a very good year for showing that IT was not born from just one thing. It came from the mixture of calculation, signal, network, image, sound and infrastructure.',
    },
    peopleCount: 11,
    people: [
      {
        name: 'Hiram Sibley, Edward Creighton & James Gamble',
        imagePlaceholder: YEAR_1861_PLACEHOLDER,
        flag: '🇺🇸',
        nationality: { pt: 'Americanos', en: 'Americans' },
        formation: {
          pt: 'Sibley: formação prática em negócios, oficinas, banco, política local e consolidação de empresas telegráficas.\n\nCreighton: construtor de linhas telegráficas e empreendedor de infraestrutura, com experiência prática em rotas, postes, fios e logística no oeste americano.\n\nGamble: engenheiro e construtor de telégrafos na Califórnia, com experiência prática em implantação de linhas telegráficas.',
          en: 'Sibley: practical formation in business, workshops, banking, local politics and the consolidation of telegraph companies.\n\nCreighton: telegraph-line builder and infrastructure entrepreneur, with practical experience in routes, poles, wires and logistics in the American West.\n\nGamble: telegraph engineer and builder in California, with practical experience deploying telegraph lines.',
        },
        summary: {
          pt: 'Participaram da conclusão da primeira linha telegráfica transcontinental dos Estados Unidos, conectando as redes do leste e do oeste em 24 de outubro de 1861.',
          en: 'Took part in the completion of the first transcontinental telegraph line in the United States, connecting the eastern and western networks on October 24, 1861.',
        },
        role: {
          pt: 'Construtores da ligação telegráfica transcontinental dos EUA',
          en: 'Builders of the U.S. transcontinental telegraph connection',
        },
        contribution: {
          pt: 'Em 1861, os Estados Unidos conseguiram conectar eletricamente o país de costa a costa.',
          en: 'In 1861, the United States managed to electrically connect the country from coast to coast.',
        },
        detail: {
          pt: 'A primeira linha telegráfica transcontinental foi concluída em 24 de outubro de 1861, quando as redes do leste e do oeste se encontraram em Salt Lake City. O National Park Service registra que, nesse dia, a Overland Telegraph Company alcançou Salt Lake City e completou a ligação com a seção oriental, permitindo mensagens entre a Califórnia e Washington, D.C. quase em tempo real.\n\nHiram Sibley entra como o articulador empresarial por trás da Western Union. Ele ajudou a transformar o telégrafo em uma plataforma nacional de comunicação. Edward Creighton ficou associado à construção da seção oriental, avançando a partir de Omaha. James Gamble ficou ligado à frente ocidental, vindo da Califórnia e de Nevada.\n\nO impacto foi enorme. Antes disso, a comunicação entre o Atlântico e o Pacífico dependia de correio, mensageiros, navios, diligências ou do Pony Express. Depois da linha transcontinental, uma mensagem podia atravessar o país em minutos.\n\nEsse evento também tornou o Pony Express obsoleto quase imediatamente. A rede elétrica venceu a rede de cavalos.\n\nPara a história da TI, esse é um marco de infraestrutura. Antes de internet, fibra óptica, backbone nacional e data centers distribuídos, já existia a ideia central:\n\nconectar territórios distantes por uma rede de comunicação rápida e confiável.\n\nEm 1861, o telégrafo virou a espinha dorsal informacional dos Estados Unidos.',
          en: 'The first transcontinental telegraph line was completed on October 24, 1861, when the eastern and western networks met in Salt Lake City. The National Park Service records that, on that day, the Overland Telegraph Company reached Salt Lake City and completed the connection with the eastern section, allowing messages between California and Washington, D.C. almost in real time.\n\nHiram Sibley enters as the business organizer behind Western Union. He helped turn the telegraph into a national communication platform. Edward Creighton became associated with the construction of the eastern section, advancing from Omaha. James Gamble was tied to the western front, coming from California and Nevada.\n\nThe impact was enormous. Before that, communication between the Atlantic and the Pacific depended on mail, messengers, ships, stagecoaches or the Pony Express. After the transcontinental line, a message could cross the country in minutes.\n\nThis event also made the Pony Express obsolete almost immediately. The electrical network beat the horse network.\n\nFor IT history, this is an infrastructure milestone. Before the internet, optical fiber, national backbones and distributed data centers, the central idea already existed:\n\nconnecting distant territories through a fast and reliable communication network.\n\nIn 1861, the telegraph became the informational backbone of the United States.',
        },
      },
      {
        name: 'James Clerk Maxwell & Thomas Sutton',
        imagePlaceholder: YEAR_1861_PLACEHOLDER,
        flag: '🇬🇧',
        nationality: { pt: 'Maxwell: britânico, escocês · Sutton: britânico, inglês', en: 'Maxwell: British, Scottish · Sutton: British, English' },
        formation: {
          pt: 'Maxwell: matemático e físico, estudou na University of Edinburgh e na University of Cambridge; foi professor de filosofia natural no King’s College London.\n\nSutton: fotógrafo, autor e inventor, formado em Cambridge, conhecido por trabalhos técnicos em fotografia e por desenvolver câmeras e processos fotográficos.',
          en: 'Maxwell: mathematician and physicist, educated at the University of Edinburgh and the University of Cambridge; he was professor of natural philosophy at King’s College London.\n\nSutton: photographer, author and inventor, educated at Cambridge, known for technical work in photography and for developing cameras and photographic processes.',
        },
        summary: {
          pt: 'Produziram, em 1861, a primeira demonstração de fotografia colorida pelo método de três cores, usando filtros vermelho, verde e azul.',
          en: 'Produced, in 1861, the first demonstration of color photography by the three-color method, using red, green and blue filters.',
        },
        role: {
          pt: 'Pioneiros da decomposição de imagem em canais de cor',
          en: 'Pioneers of decomposing images into color channels',
        },
        contribution: {
          pt: 'Em 1861, James Clerk Maxwell e Thomas Sutton fizeram uma demonstração que parece pequena à primeira vista, mas é gigantesca para a história da imagem computacional.',
          en: 'In 1861, James Clerk Maxwell and Thomas Sutton made a demonstration that looks small at first glance, but is enormous for the history of computational imaging.',
        },
        detail: {
          pt: 'Maxwell queria demonstrar sua teoria de que a percepção de cor podia ser reconstruída pela combinação de três componentes. Para isso, Thomas Sutton fotografou uma fita xadrez três vezes, usando filtros de cores diferentes. Depois, as imagens foram recombinadas por projeção para formar uma imagem colorida. A James Clerk Maxwell Foundation registra que Sutton fez três imagens usando filtros vermelho, verde e azul diante da lente.\n\nO resultado não era perfeito, porque as placas fotográficas da época tinham limitações químicas, especialmente para captar vermelho e verde. Mesmo assim, o princípio estava ali: decompor uma imagem em canais e depois recombiná-los.\n\nIsso é muito importante para TI porque antecipa a lógica do RGB.\n\nHoje, telas, câmeras digitais, sensores, imagens, vídeos, design gráfico, processamento visual e computação gráfica trabalham com essa ideia de canais de cor. O que Maxwell estava mostrando era uma base conceitual para representar cor como informação separável e recombinável.\n\nAinda não era imagem digital. Mas era uma ideia muito próxima do pensamento computacional:\n\numa imagem complexa pode ser decomposta em componentes simples, processada por partes e reconstruída depois.\n\nPara a trilha, esse bloco é excelente porque mostra a origem de uma das bases da computação visual moderna.',
          en: 'Maxwell wanted to demonstrate his theory that color perception could be reconstructed by combining three components. To do that, Thomas Sutton photographed a tartan ribbon three times, using different color filters. The images were then recombined by projection to form a color image. The James Clerk Maxwell Foundation records that Sutton made three images using red, green and blue filters in front of the lens.\n\nThe result was not perfect, because photographic plates of the time had chemical limitations, especially for capturing red and green. Even so, the principle was there: decompose an image into channels and then recombine them.\n\nThis is very important for IT because it anticipates the logic of RGB.\n\nToday, screens, digital cameras, sensors, images, videos, graphic design, visual processing and computer graphics work with this idea of color channels. What Maxwell was showing was a conceptual basis for representing color as separable and recombinable information.\n\nIt was not digital imaging yet. But it was an idea very close to computational thinking:\n\na complex image can be decomposed into simple components, processed in parts and reconstructed afterward.\n\nFor the timeline, this block is excellent because it shows the origin of one of the foundations of modern visual computing.',
        },
      },
      {
        name: 'Johann Philipp Reis',
        imagePlaceholder: YEAR_1861_PLACEHOLDER,
        flag: '🇩🇪',
        nationality: { pt: 'Alemão', en: 'German' },
        formation: {
          pt: 'Professor e físico autodidata, educado em Frankfurt am Main. Trabalhou como professor em Friedrichsdorf e desenvolveu experimentos com eletricidade, acústica e anatomia do ouvido humano.',
          en: 'Teacher and self-taught physicist, educated in Frankfurt am Main. He worked as a teacher in Friedrichsdorf and developed experiments with electricity, acoustics and the anatomy of the human ear.',
        },
        summary: {
          pt: 'Demonstrou, em 1861, um aparelho capaz de transmitir som por sinais elétricos, conhecido como telefone de Reis.',
          en: 'Demonstrated, in 1861, a device capable of transmitting sound through electrical signals, known as the Reis telephone.',
        },
        role: {
          pt: 'Pioneiro da transmissão elétrica da voz',
          en: 'Pioneer of electrical voice transmission',
        },
        contribution: {
          pt: 'Em 1861, Johann Philipp Reis apresentou uma das primeiras tentativas práticas de transmitir som por eletricidade.',
          en: 'In 1861, Johann Philipp Reis presented one of the first practical attempts to transmit sound by electricity.',
        },
        detail: {
          pt: 'O aparelho dele ficou conhecido como telefone de Reis. A ideia era converter vibrações sonoras em impulsos elétricos, enviar esses impulsos por fios e depois transformá-los novamente em som do outro lado. O Heinz Nixdorf MuseumsForum registra que, em 1861, Reis demonstrou a transmissão elétrica da fala.\n\nO sistema ainda era limitado. Ele conseguia transmitir sons e, em certas condições, palavras ou trechos de fala, mas não era um telefone comercial confiável como o de Alexander Graham Bell, que viria depois. Mesmo assim, Reis foi importante por atacar o problema essencial:\n\ncomo transformar voz em sinal elétrico e reconstruir essa voz à distância?\n\nIsso é uma base enorme para telecomunicações. Telefone, rádio, microfone, transmissão de áudio, VoIP, chamada de vídeo e assistentes de voz dependem dessa mesma ideia geral: converter som em sinal, transmitir o sinal e reconstruir o som.\n\nPara a história da TI, Reis representa a entrada da voz no mundo das redes elétricas.\n\nAté ali, o telégrafo transmitia mensagens codificadas. Com Reis, a ambição muda: não transmitir apenas símbolos, mas transmitir o próprio som.',
          en: 'His device became known as the Reis telephone. The idea was to convert sound vibrations into electrical impulses, send those impulses through wires and then turn them back into sound at the other end. The Heinz Nixdorf MuseumsForum records that, in 1861, Reis demonstrated the electrical transmission of speech.\n\nThe system was still limited. It could transmit sounds and, under certain conditions, words or fragments of speech, but it was not a reliable commercial telephone like Alexander Graham Bell’s later device. Even so, Reis was important because he attacked the essential problem:\n\nhow do you turn voice into an electrical signal and reconstruct that voice at a distance?\n\nThis is a huge foundation for telecommunications. Telephone, radio, microphone, audio transmission, VoIP, video calls and voice assistants all depend on the same general idea: convert sound into signal, transmit the signal and reconstruct the sound.\n\nFor IT history, Reis represents the entry of voice into the world of electrical networks.\n\nUntil then, the telegraph transmitted coded messages. With Reis, the ambition changes: not only to transmit symbols, but to transmit sound itself.',
        },
      },
      {
        name: 'Giovanni Caselli & Paul-Gustave Froment',
        imagePlaceholder: YEAR_1861_PLACEHOLDER,
        flag: '🇮🇹 🇫🇷',
        nationality: { pt: 'Caselli: italiano · Froment: francês', en: 'Caselli: Italian · Froment: French' },
        formation: {
          pt: 'Caselli: sacerdote, físico e inventor, com formação ligada à Universidade de Florença e forte interesse em eletricidade, magnetismo e transmissão de imagens.\n\nFroment: engenheiro e construtor francês de instrumentos científicos e mecânicos de precisão.',
          en: 'Caselli: priest, physicist and inventor, with training connected to the University of Florence and a strong interest in electricity, magnetism and image transmission.\n\nFroment: French engineer and builder of precision scientific and mechanical instruments.',
        },
        summary: {
          pt: 'Em 1861, Caselli patenteou o pantelegraph, com apoio técnico de Froment no aperfeiçoamento do aparelho.',
          en: 'In 1861, Caselli patented the pantelegraph, with technical support from Froment in refining the device.',
        },
        role: {
          pt: 'Pioneiros da transmissão visual por linhas telegráficas',
          en: 'Pioneers of visual transmission over telegraph lines',
        },
        contribution: {
          pt: 'Em 1861, Giovanni Caselli registrou oficialmente uma das invenções mais impressionantes do século XIX: o pantelegraph, uma máquina capaz de transmitir imagens, escrita manual e assinaturas por linhas telegráficas.',
          en: 'In 1861, Giovanni Caselli officially registered one of the most impressive inventions of the nineteenth century: the pantelegraph, a machine capable of transmitting images, handwriting and signatures over telegraph lines.',
        },
        detail: {
          pt: 'Caselli já vinha trabalhando nesse sistema desde a década de 1850, e em Paris contou com o apoio técnico de Paul-Gustave Froment, especialista em instrumentos de precisão. A invenção foi aperfeiçoada entre 1857 e 1861, e Caselli registrou a patente europeia do aparelho em 1861.\n\nO pantelegraph funcionava como um ancestral do fax. Uma ponta mecânica varria o documento linha por linha. Do outro lado, um receptor sincronizado reproduzia o conteúdo em papel. Em vez de transmitir apenas texto digitado ou código Morse, o sistema transmitia a aparência visual da informação.\n\nIsso é muito forte para a trilha porque aproxima o telégrafo de várias ideias modernas:\n\ntransmissão de imagem, scanner, fax, assinatura remota, reprodução de documentos e sincronização entre dispositivos.\n\nAinda não era digital. Mas já era informação visual viajando por rede.\n\nO pantelegraph mostra que, desde cedo, a humanidade não queria apenas mandar mensagens. Queria mandar documentos, imagens, formas, assinaturas e evidências visuais.',
          en: 'Caselli had been working on this system since the 1850s, and in Paris he had technical support from Paul-Gustave Froment, a specialist in precision instruments. The invention was refined between 1857 and 1861, and Caselli registered the European patent for the device in 1861.\n\nThe pantelegraph worked as an ancestor of the fax. A mechanical point scanned the document line by line. At the other end, a synchronized receiver reproduced the content on paper. Instead of transmitting only typed text or Morse code, the system transmitted the visual appearance of information.\n\nThis is very strong for the timeline because it brings the telegraph closer to several modern ideas:\n\nimage transmission, scanner, fax, remote signature, document reproduction and synchronization between devices.\n\nIt was not digital yet. But it was already visual information traveling through a network.\n\nThe pantelegraph shows that, from early on, humanity did not only want to send messages. It wanted to send documents, images, shapes, signatures and visual evidence.',
        },
      },
      {
        name: 'Thomas Alexander Scott, Andrew Carnegie & Anson Stager',
        imagePlaceholder: YEAR_1861_PLACEHOLDER,
        flag: '🇺🇸 🇬🇧',
        nationality: {
          pt: 'Scott: americano · Carnegie: escocês de nascimento, naturalizado americano · Stager: americano',
          en: 'Scott: American · Carnegie: Scottish-born, naturalized American · Stager: American',
        },
        formation: {
          pt: 'Scott: executivo ferroviário, formado pela experiência prática na Pennsylvania Railroad e em grandes operações logísticas.\n\nCarnegie: operador e superintendente ferroviário, com experiência prática em telégrafo, ferrovias e organização operacional.\n\nStager: operador e executivo de telégrafo, ligado à Western Union, com experiência técnica e administrativa em redes telegráficas.',
          en: 'Scott: railroad executive, formed by practical experience at the Pennsylvania Railroad and in large logistical operations.\n\nCarnegie: railroad operator and superintendent, with practical experience in telegraphy, railroads and operational organization.\n\nStager: telegraph operator and executive, connected to Western Union, with technical and administrative experience in telegraph networks.',
        },
        summary: {
          pt: 'Ajudaram a estruturar, em 1861, o uso militar do telégrafo pela União durante a Guerra Civil Americana, processo que levou à formação do U.S. Military Telegraph Corps.',
          en: 'Helped structure, in 1861, the Union’s military use of the telegraph during the American Civil War, a process that led to the formation of the U.S. Military Telegraph Corps.',
        },
        role: {
          pt: 'Organizadores do telégrafo como sistema militar de comando',
          en: 'Organizers of the telegraph as a military command system',
        },
        contribution: {
          pt: 'Em 1861, com o início da Guerra Civil Americana, o telégrafo entrou de vez no centro da estratégia militar.',
          en: 'In 1861, with the beginning of the American Civil War, the telegraph moved fully into the center of military strategy.',
        },
        detail: {
          pt: 'Washington precisava manter comunicação rápida com tropas, ferrovias, oficiais e departamentos do governo. Thomas A. Scott, ligado à Pennsylvania Railroad, foi chamado para ajudar a organizar ferrovias e comunicações. Andrew Carnegie, que já tinha experiência com telégrafo e ferrovias, também foi enviado a Washington para auxiliar na operação. Anson Stager, vindo da Western Union, tornou-se uma figura central na organização do sistema telegráfico militar da União. Fontes históricas sobre o U.S. Military Telegraph Corps registram que o corpo foi formado em 1861 e que Stager foi nomeado chefe em outubro daquele ano.\n\nEsse bloco é importante porque mostra o telégrafo deixando de ser apenas comunicação comercial e virando sistema de comando.\n\nDurante a guerra, mensagens, ordens, relatórios e atualizações estratégicas passaram a circular por uma rede elétrica. Isso mudou a forma como governo e exército acompanhavam eventos em tempo real.\n\nPara a história da TI, esse é um ancestral claro de sistemas de comunicação militar, redes de comando e controle, infraestrutura crítica, cibersegurança estatal e operações baseadas em informação.\n\nEm 1861, a guerra mostrou uma coisa que o século XX e XXI confirmariam com força:\n\nquem transmite informação mais rápido decide mais rápido.',
          en: 'Washington needed to maintain fast communication with troops, railroads, officers and government departments. Thomas A. Scott, connected to the Pennsylvania Railroad, was called to help organize railroads and communications. Andrew Carnegie, who already had experience with telegraphy and railroads, was also sent to Washington to assist in the operation. Anson Stager, coming from Western Union, became a central figure in organizing the Union’s military telegraph system. Historical sources on the U.S. Military Telegraph Corps record that the corps was formed in 1861 and that Stager was appointed chief in October of that year.\n\nThis block matters because it shows the telegraph ceasing to be only commercial communication and becoming a command system.\n\nDuring the war, messages, orders, reports and strategic updates circulated through an electrical network. This changed the way government and army followed events in real time.\n\nFor IT history, this is a clear ancestor of military communication systems, command-and-control networks, critical infrastructure, state cybersecurity and information-based operations.\n\nIn 1861, the war showed something that the twentieth and twenty-first centuries would strongly confirm:\n\nwhoever transmits information faster decides faster.',
        },
      },
    ],
  },
  {
    year: 1936,
    era: { pt: 'A Fundação Teórica', en: 'The Theoretical Foundation' },
    context: {
      pt: 'Antes de qualquer transistor, antes de qualquer computador eletrônico, um matemático britânico de 24 anos publicou um paper que definia matematicamente o que é computação — e seus limites.',
      en: 'Before any transistor, before any electronic computer, a 24-year-old British mathematician published a paper that mathematically defined what computation is — and its limits.',
    },
    people: [
      {
        name: 'Alan Turing',
        image: '/hall/1936/alan-turing',
        flag: '🇬🇧',
        nationality: { pt: 'Britânico', en: 'British' },
        formation: {
          pt: 'Matemática, King\'s College Cambridge · Doutorado em Princeton',
          en: 'Mathematics, King\'s College Cambridge · PhD, Princeton University',
        },
        summary: { pt: 'Definiu matematicamente o que é computação e seus limites', en: 'Mathematically defined what computation is and its limits' },
        role: { pt: 'Matemático e pai da ciência da computação', en: 'Mathematician and father of computer science' },
        contribution: {
          pt: 'Publicou "On Computable Numbers", definindo o conceito de Máquina de Turing — o modelo teórico que até hoje fundamenta tudo que um computador pode ou não pode fazer.',
          en: 'Published "On Computable Numbers", defining the concept of the Turing Machine — the theoretical model that to this day underpins everything a computer can or cannot do.',
        },
        detail: {
          pt: 'Com um único paper, Turing criou o conceito de algoritmo universal e provou que existem problemas matematicamente insolúveis — o Problema da Parada. Durante a Segunda Guerra Mundial, liderou a equipe que quebrou o código Enigma nazista, tendo salvo potencialmente milhões de vidas. Em 1950, propôs o Teste de Turing, questionando se máquinas podem pensar. Seu legado é a própria base sobre a qual toda a ciência da computação foi construída. Foi perseguido e condenado pelo governo britânico por ser gay, e morreu aos 41 anos em circunstâncias trágicas. Recebeu perdão póstimo apenas em 2013.',
          en: 'With a single paper, Turing created the concept of a universal algorithm and proved that mathematically unsolvable problems exist — the Halting Problem. During World War II, he led the team that broke the Nazi Enigma code, potentially saving millions of lives. In 1950, he proposed the Turing Test, questioning whether machines can think. His legacy is the very foundation upon which all computer science was built. He was prosecuted by the British government for being gay, and died at 41 in tragic circumstances. He received a posthumous pardon only in 2013.',
        },
      },
    ],
  },
  {
    year: 1947,
    era: { pt: 'A Peça que Mudou o Hardware', en: 'The Part That Changed Hardware' },
    context: {
      pt: 'Válvulas eletrônicas eram grandes, quentes e quebravam constantemente. Três engenheiros dos Bell Labs inventaram algo que cabia na palma da mão e rodaria para sempre.',
      en: 'Vacuum tubes were large, hot and broke constantly. Three Bell Labs engineers invented something that fit in the palm of a hand and would run indefinitely.',
    },
    people: [
      {
        name: 'John Bardeen',
        image: '/hall/1947/john-bardeen',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Engenharia Elétrica, Univ. Wisconsin-Madison · Doutorado em Física, Princeton',
          en: 'Electrical Engineering, Univ. Wisconsin-Madison · PhD in Physics, Princeton',
        },
        summary: { pt: 'Co-inventou o transistor, peça fundamental de todo chip moderno', en: 'Co-invented the transistor, the fundamental component of every modern chip' },
        role: { pt: 'Físico, co-inventor do transistor', en: 'Physicist, co-inventor of the transistor' },
        contribution: {
          pt: 'Co-inventou o transistor em dezembro de 1947, a peça fundamental que tornou possível toda a miniaturização da eletrônica moderna.',
          en: 'Co-invented the transistor in December 1947, the fundamental component that made possible all miniaturization of modern electronics.',
        },
        detail: {
          pt: 'Bardeen é o único físico a ganhar o Nobel de Física duas vezes: em 1956 pelo transistor e em 1972 pela teoria da supercondutividade. O transistor que ele co-inventou com Brattain e Shockley substituiu as frágeis válvulas de vácuo e abriu caminho para os circuitos integrados, os microprocessadores e tudo que veio depois. Cada chip moderno contém bilhões de transistores — todos descendentes diretos do protótipo que cabia numa mão.',
          en: 'Bardeen is the only physicist to win the Nobel Prize in Physics twice: in 1956 for the transistor and in 1972 for the theory of superconductivity. The transistor he co-invented with Brattain and Shockley replaced fragile vacuum tubes and paved the way for integrated circuits, microprocessors, and everything that followed. Every modern chip contains billions of transistors — all direct descendants of the prototype that fit in one hand.',
        },
      },
      {
        name: 'Walter Brattain',
        image: '/hall/1947/walter-brattain',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Física e Matemática, Whitman College · Doutorado em Física, Univ. Minnesota',
          en: 'Physics and Mathematics, Whitman College · PhD in Physics, Univ. of Minnesota',
        },
        summary: { pt: 'Construiu o primeiro transistor funcional da história', en: 'Built the first functional transistor in history' },
        role: { pt: 'Físico experimental, co-inventor do transistor', en: 'Experimental physicist, co-inventor of the transistor' },
        contribution: {
          pt: 'Foi quem realizou os experimentos práticos que levaram à invenção do transistor de ponto de contato, o primeiro a funcionar.',
          en: 'Conducted the practical experiments that led to the invention of the point-contact transistor, the first to actually work.',
        },
        detail: {
          pt: 'Brattain era o experimentador do trio — enquanto Bardeen fornecia a teoria e Shockley a visão, Brattain construía e testava. Em 16 de dezembro de 1947, ele montou o primeiro transistor funcional com dois fios de ouro e um cristal de germânio. O dispositivo amplificou o sinal de áudio com sucesso, e os três correram para demonstrar ao laboratório antes que alguém copiasse a ideia.',
          en: 'Brattain was the experimenter of the trio — while Bardeen provided the theory and Shockley the vision, Brattain built and tested. On December 16, 1947, he assembled the first functional transistor with two gold wires and a germanium crystal. The device successfully amplified an audio signal, and the three rushed to demonstrate it to the lab before anyone could copy the idea.',
        },
      },
      {
        name: 'William Shockley',
        image: '/hall/1947/william-shockley',
        flag: '🇺🇸',
        nationality: { pt: 'Britânico-Americano', en: 'British-American' },
        formation: {
          pt: 'Física, Caltech · Doutorado em Física, MIT',
          en: 'Physics, Caltech · PhD in Physics, MIT',
        },
        summary: { pt: 'Liderou a invenção do transistor e originou o Vale do Silício', en: 'Led the transistor invention and originated Silicon Valley' },
        role: { pt: 'Físico, líder da equipe do transistor', en: 'Physicist, leader of the transistor team' },
        contribution: {
          pt: 'Liderou o grupo de física de estado sólido nos Bell Labs que inventou o transistor, e posteriormente criou o transistor de junção bipolar, mais prático e amplamente adotado.',
          en: 'Led the solid-state physics group at Bell Labs that invented the transistor, and later created the bipolar junction transistor, more practical and widely adopted.',
        },
        detail: {
          pt: 'Shockley é uma figura complexa na história da TI. Foi ele quem montou o grupo que inventou o transistor, mas seus ex-funcionários — os "Oito Traidores" — fundaram a Fairchild Semiconductor e, depois, a Intel. Essas spinoffs deram origem ao Vale do Silício como o conhecemos. Shockley recebeu o Nobel em 1956, mas seus anos finais foram manchados por posições controversas sobre eugenia e inteligência.',
          en: 'Shockley is a complex figure in IT history. He assembled the group that invented the transistor, but his former employees — the "Traitorous Eight" — went on to found Fairchild Semiconductor and, later, Intel. These spinoffs gave birth to Silicon Valley as we know it. Shockley received the Nobel in 1956, but his later years were tainted by controversial positions on eugenics and intelligence.',
        },
      },
    ],
  },
  {
    year: 1951,
    era: { pt: 'A Primeira Compiladora', en: 'The First Compiler' },
    context: {
      pt: 'Programar computadores significava escrever em binário ou assembly puro. Uma almirante da marinha americana achou isso absurdo e decidiu mudar.',
      en: 'Programming computers meant writing in pure binary or assembly. An American Navy admiral found this absurd and decided to change it.',
    },
    people: [
      {
        name: 'Grace Hopper',
        image: '/hall/1951/grace-hopper',
        flag: '🇺🇸',
        nationality: { pt: 'Americana', en: 'American' },
        formation: {
          pt: 'Matemática e Física, Vassar College · Doutorado em Matemática, Yale',
          en: 'Mathematics and Physics, Vassar College · PhD in Mathematics, Yale',
        },
        summary: { pt: 'Criou o primeiro compilador da história', en: 'Created the first compiler in history' },
        role: { pt: 'Cientista da computação e almirante da Marinha dos EUA', en: 'Computer scientist and US Navy Rear Admiral' },
        contribution: {
          pt: 'Criou o primeiro compilador da história (A-0), provando que era possível escrever programas em linguagem próxima ao inglês em vez de código binário.',
          en: 'Created the first compiler in history (A-0), proving it was possible to write programs in language closer to English instead of binary code.',
        },
        detail: {
          pt: 'Hopper acreditava que qualquer pessoa deveria poder programar, não apenas especialistas em matemática. O A-0 traduzia instruções simbólicas em código de máquina — uma ideia que seus superiores inicialmente rejeitaram, dizendo que "computadores não podem entender inglês". Ela também popularizou o termo "bug" após encontrar uma mariposa real presa nos relés do Harvard Mark II. Mais tarde, liderou o desenvolvimento do COBOL, a linguagem que ainda roda bilhões de dólares em transações bancárias hoje.',
          en: 'Hopper believed anyone should be able to program, not just math specialists. The A-0 translated symbolic instructions into machine code — an idea her superiors initially rejected, saying "computers cannot understand English." She also popularized the term "bug" after finding an actual moth stuck in the relays of the Harvard Mark II. She later led the development of COBOL, the language that still runs billions of dollars in banking transactions today.',
        },
      },
    ],
  },
  {
    year: 1957,
    era: { pt: 'A Primeira Linguagem de Alto Nível', en: 'The First High-Level Language' },
    context: {
      pt: 'Programar em assembly era tedioso e sujeito a erros. Uma equipe da IBM apostou que era possível criar uma linguagem que se aproximasse da matemática e que fosse tão eficiente quanto o código manual.',
      en: 'Programming in assembly was tedious and error-prone. An IBM team bet it was possible to create a language that approached mathematics and was as efficient as manual code.',
    },
    people: [
      {
        name: 'John Backus',
        image: '/hall/1957/john-backus',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Matemática, Columbia University',
          en: 'Mathematics, Columbia University',
        },
        summary: { pt: 'Criou o FORTRAN, a primeira linguagem de alto nível amplamente adotada', en: 'Created FORTRAN, the first widely adopted high-level programming language' },
        role: { pt: 'Cientista da computação, criador do FORTRAN', en: 'Computer scientist, creator of FORTRAN' },
        contribution: {
          pt: 'Liderou o time da IBM que criou o FORTRAN — a primeira linguagem de programação de alto nível amplamente adotada, que provou que compiladores podiam gerar código eficiente.',
          en: 'Led the IBM team that created FORTRAN — the first widely adopted high-level programming language, which proved compilers could generate efficient code.',
        },
        detail: {
          pt: 'Antes do FORTRAN, os programadores escreviam instruções diretamente para a máquina. Backus e sua equipe levaram três anos para convencer a IBM de que uma linguagem próxima da matemática poderia gerar código tão rápido quanto o escrito manualmente. O FORTRAN (FORmula TRANslation) foi lançado em 1957 e revolucionou a computação científica. Backus também criou a notação BNF (Backus-Naur Form), usada até hoje para definir a gramática de linguagens de programação.',
          en: 'Before FORTRAN, programmers wrote instructions directly for the machine. Backus and his team spent three years convincing IBM that a language close to mathematics could generate code as fast as hand-written code. FORTRAN (FORmula TRANslation) was released in 1957 and revolutionized scientific computing. Backus also created BNF notation (Backus-Naur Form), still used today to define the grammar of programming languages.',
        },
      },
    ],
  },
  {
    year: 1958,
    era: { pt: 'Tudo num Só Chip', en: 'Everything on One Chip' },
    context: {
      pt: 'Computadores da época eram armários cheios de componentes ligados por fios. Um engenheiro recém-contratado, sem direito a férias ainda, ficou no laboratório enquanto todos saíam e teve uma ideia.',
      en: 'Computers of the era were cabinets full of components connected by wires. A newly hired engineer, not yet entitled to vacation, stayed in the lab while everyone left and had an idea.',
    },
    people: [
      {
        name: 'Jack Kilby',
        image: '/hall/1958/jack-kilby',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Engenharia Elétrica, Univ. de Illinois · Mestrado, Univ. de Wisconsin',
          en: 'Electrical Engineering, Univ. of Illinois · MS, Univ. of Wisconsin',
        },
        summary: { pt: 'Inventou o circuito integrado, a base de todo chip moderno', en: 'Invented the integrated circuit, the foundation of every modern chip' },
        role: { pt: 'Engenheiro elétrico, inventor do circuito integrado', en: 'Electrical engineer, inventor of the integrated circuit' },
        contribution: {
          pt: 'Inventou o circuito integrado em 1958, colocando múltiplos componentes eletrônicos num único pedaço de semicondutor — o fundamento de todo chip moderno.',
          en: 'Invented the integrated circuit in 1958, placing multiple electronic components on a single piece of semiconductor — the foundation of every modern chip.',
        },
        detail: {
          pt: 'Kilby estava na Texas Instruments há apenas dois meses quando teve a ideia que mudaria o mundo: e se transistores, resistores e capacitores fossem todos fabricados no mesmo material, no mesmo chip? Em julho de 1958, com o laboratório quase vazio durante as férias de verão, ele construiu o primeiro circuito integrado funcional. A Intel, fundada dez anos depois pelos ex-colaboradores de Shockley, usaria esse princípio para criar o primeiro microprocessador. Kilby ganhou o Nobel de Física em 2000.',
          en: 'Kilby had been at Texas Instruments for only two months when he had the idea that would change the world: what if transistors, resistors and capacitors were all manufactured from the same material, on the same chip? In July 1958, with the lab nearly empty during summer vacation, he built the first functional integrated circuit. Intel, founded ten years later by Shockley\'s former colleagues, would use this principle to create the first microprocessor. Kilby won the Nobel Prize in Physics in 2000.',
        },
      },
    ],
  },
  {
    year: 1969,
    era: { pt: 'Unix e a Internet Que Não Era Internet', en: 'Unix and the Internet That Wasn\'t Internet' },
    context: {
      pt: 'Dois dos maiores alicerces da TI moderna nasceram no mesmo ano: um sistema operacional que ainda roda em quase tudo, e a rede que se tornaria a internet.',
      en: 'Two of the greatest foundations of modern IT were born the same year: an operating system that still runs on almost everything, and the network that would become the internet.',
    },
    people: [
      {
        name: 'Ken Thompson',
        image: '/hall/1969/ken-thompson',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Engenharia Elétrica, UC Berkeley',
          en: 'Electrical Engineering, UC Berkeley',
        },
        summary: { pt: 'Co-criou o Unix e a linguagem B, predecessora do C', en: 'Co-created Unix and the B language, predecessor to C' },
        role: { pt: 'Cientista da computação, co-criador do Unix', en: 'Computer scientist, co-creator of Unix' },
        contribution: {
          pt: 'Co-criou o Unix nos Bell Labs, o sistema operacional que influenciou praticamente todos os sistemas modernos — de Linux e macOS a Android.',
          en: 'Co-created Unix at Bell Labs, the operating system that influenced practically every modern system — from Linux and macOS to Android.',
        },
        detail: {
          pt: 'Thompson começou a trabalhar no Unix para ter onde rodar um jogo espacial que havia criado. O que surgiu foi um sistema operacional elegante, filosófico e poderoso — baseado na ideia de que programas pequenos deveriam fazer uma coisa bem e se compor com outros. Thompson também criou a linguagem B, predecessora do C, e décadas depois co-criou a linguagem Go no Google.',
          en: 'Thompson started working on Unix to have somewhere to run a space game he had created. What emerged was an elegant, philosophical and powerful operating system — based on the idea that small programs should do one thing well and compose with others. Thompson also created the B language, predecessor to C, and decades later co-created the Go language at Google.',
        },
      },
      {
        name: 'Dennis Ritchie',
        image: '/hall/1969/dennis-ritchie',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Física e Matemática, Harvard · Doutorado em Matemática, Harvard (incompleto)',
          en: 'Physics and Mathematics, Harvard · PhD in Mathematics, Harvard (incomplete)',
        },
        summary: { pt: 'Co-criou o Unix e criou a linguagem C', en: 'Co-created Unix and created the C language' },
        role: { pt: 'Cientista da computação, co-criador do Unix e criador do C', en: 'Computer scientist, co-creator of Unix and creator of C' },
        contribution: {
          pt: 'Co-criou o Unix e, em seguida, criou a linguagem C — a base sobre a qual sistemas operacionais, kernels e linguagens modernas foram construídos.',
          en: 'Co-created Unix and then created the C language — the foundation upon which operating systems, kernels and modern languages were built.',
        },
        detail: {
          pt: 'Se o impacto de uma pessoa fosse medido por quantas linhas de código ela inspirou, Ritchie seria imbatível. O C moldou o Linux, o Windows, o macOS, o Python (em sua implementação CPython), o PHP, e dezenas de outras linguagens. Ritchie faleceu em 2011, uma semana depois de Steve Jobs, com praticamente nenhuma cobertura da mídia — apesar de seu impacto ser, por qualquer métrica técnica, igualmente transformador.',
          en: 'If impact were measured by how many lines of code someone inspired, Ritchie would be unmatched. C shaped Linux, Windows, macOS, Python (in its CPython implementation), PHP, and dozens of other languages. Ritchie passed away in 2011, one week after Steve Jobs, with practically no media coverage — despite his impact being, by any technical metric, equally transformative.',
        },
      },
      {
        name: 'Vint Cerf',
        image: '/hall/1969/vint-cerf',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Matemática, Stanford · Doutorado em Ciência da Computação, UCLA',
          en: 'Mathematics, Stanford · PhD in Computer Science, UCLA',
        },
        summary: { pt: 'Co-desenvolveu o TCP/IP, o protocolo que conecta o mundo', en: 'Co-developed TCP/IP, the protocol that connects the world' },
        role: { pt: 'Cientista da computação, co-criador do TCP/IP e da ARPANET', en: 'Computer scientist, co-creator of TCP/IP and ARPANET' },
        contribution: {
          pt: 'Trabalhou na ARPANET, a rede precursora da internet, e co-desenvolveu o TCP/IP — o protocolo que conecta o mundo até hoje.',
          en: 'Worked on ARPANET, the precursor network to the internet, and co-developed TCP/IP — the protocol that connects the world to this day.',
        },
        detail: {
          pt: 'A ARPANET foi criada como projeto militar norte-americano para comunicação descentralizada. Cerf, junto com Bob Kahn, formalizou o protocolo TCP/IP em 1974, definindo a linguagem universal que permite que qualquer computador do mundo se comunique com qualquer outro. Quando você acessa um site, envia um email ou usa qualquer serviço online, está usando um sistema que Cerf ajudou a projetar há mais de 50 anos.',
          en: 'ARPANET was created as a US military project for decentralized communication. Cerf, together with Bob Kahn, formalized the TCP/IP protocol in 1974, defining the universal language that allows any computer in the world to communicate with any other. When you access a website, send an email, or use any online service, you\'re using a system Cerf helped design over 50 years ago.',
        },
      },
    ],
  },
  {
    year: 1972,
    era: { pt: 'A Linguagem que Está em Tudo', en: 'The Language That Is in Everything' },
    context: {
      pt: 'C nasceu como ferramenta interna para reescrever o Unix. Tornou-se a linguagem mais influente da história da computação.',
      en: 'C was born as an internal tool to rewrite Unix. It became the most influential language in the history of computing.',
    },
    people: [
      {
        name: 'Dennis Ritchie',
        image: '/hall/1972/dennis-ritchie',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Física e Matemática, Harvard · Doutorado em Matemática, Harvard (incompleto)',
          en: 'Physics and Mathematics, Harvard · PhD in Mathematics, Harvard (incomplete)',
        },
        summary: { pt: 'Criou a linguagem C, base de todo o software moderno', en: 'Created C, the foundation of all modern software' },
        role: { pt: 'Criador da linguagem C', en: 'Creator of the C language' },
        contribution: {
          pt: 'Criou a linguagem C nos Bell Labs, a linguagem de programação que moldou praticamente toda a infraestrutura de software do mundo moderno.',
          en: 'Created the C language at Bell Labs, the programming language that shaped virtually all the software infrastructure of the modern world.',
        },
        detail: {
          pt: 'C foi criada para resolver um problema prático: reescrever o Unix em algo portável entre máquinas diferentes. O resultado foi uma linguagem que combinava o poder do assembly com a legibilidade de alto nível. Linux, Windows NT, macOS, iOS e Android têm C como base. CPython, V8 (o motor do JavaScript), e o kernel do Linux foram escritos em C. É o ombro de gigante sobre o qual todo o software moderno está de pé.',
          en: 'C was created to solve a practical problem: rewrite Unix in something portable across different machines. The result was a language that combined the power of assembly with high-level readability. Linux, Windows NT, macOS, iOS, and Android have C as their foundation. CPython, V8 (the JavaScript engine), and the Linux kernel were written in C. It is the giant\'s shoulder upon which all modern software stands.',
        },
      },
    ],
  },
  {
    year: 1975,
    era: { pt: 'O Computador Pessoal se Torna Real', en: 'The Personal Computer Becomes Real' },
    context: {
      pt: 'Computadores eram máquinas de corporações e universidades. Dois jovens apostaram que qualquer pessoa poderia ter um em casa.',
      en: 'Computers were machines for corporations and universities. Two young men bet that anyone could have one at home.',
    },
    people: [
      {
        name: 'Bill Gates',
        image: '/hall/1975/bill-gates',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Ciência da Computação, Harvard University (sem graduação)',
          en: 'Computer Science, Harvard University (dropped out)',
        },
        summary: { pt: 'Co-fundou a Microsoft e democratizou o software para o consumidor comum', en: 'Co-founded Microsoft and democratized software for everyday consumers' },
        role: { pt: 'Co-fundador da Microsoft', en: 'Co-founder of Microsoft' },
        contribution: {
          pt: 'Co-fundou a Microsoft e liderou a criação do MS-DOS e do Windows, transformando o software em indústria e o PC numa realidade para o consumidor comum.',
          en: 'Co-founded Microsoft and led the creation of MS-DOS and Windows, transforming software into an industry and the PC into a reality for everyday consumers.',
        },
        detail: {
          pt: 'Gates e Allen fundaram a Microsoft com a visão de que haveria "um computador em toda mesa e em todo lar" — algo que parecia delírio em 1975. A decisão de licenciar o MS-DOS para a IBM sem vender exclusividade foi o maior negócio da história do software: enquanto a IBM vendeu hardware, a Microsoft ficou com o software que rodava em tudo. Nos anos 90, o Windows se tornou o sistema operacional dominante do mundo. Independente de opiniões sobre práticas de negócios, o impacto de Gates na democratização do PC é inegável.',
          en: 'Gates and Allen founded Microsoft with the vision that there would be "a computer on every desk and in every home" — something that sounded delusional in 1975. The decision to license MS-DOS to IBM without selling exclusivity was the greatest deal in software history: while IBM sold hardware, Microsoft kept the software that ran on everything. In the 90s, Windows became the world\'s dominant operating system. Regardless of opinions about business practices, Gates\'s impact on democratizing the PC is undeniable.',
        },
      },
      {
        name: 'Paul Allen',
        image: '/hall/1975/paul-allen',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Ciência da Computação, Washington State Univ. (sem graduação)',
          en: 'Computer Science, Washington State Univ. (dropped out)',
        },
        summary: { pt: 'Co-fundou a Microsoft e identificou o potencial do Altair 8800', en: 'Co-founded Microsoft and identified the potential of the Altair 8800' },
        role: { pt: 'Co-fundador da Microsoft', en: 'Co-founder of Microsoft' },
        contribution: {
          pt: 'Co-fundou a Microsoft com Bill Gates e foi o visionário técnico que identificou o potencial do Altair 8800 — o gatilho que deu origem à empresa.',
          en: 'Co-founded Microsoft with Bill Gates and was the technical visionary who identified the potential of the Altair 8800 — the trigger that gave rise to the company.',
        },
        detail: {
          pt: 'Foi Allen quem viu a capa da Popular Electronics com o Altair 8800 em janeiro de 1975 e correu para mostrar a Gates. Os dois passaram semanas escrevendo um interpretador BASIC para o computador — antes mesmo de terem acesso a uma unidade real. Allen programou um emulador do processador 8080 no minicomputador da Harvard para testar o código. A aposta funcionou: o interpretador rodou perfeitamente na primeira tentativa no hardware real.',
          en: 'It was Allen who saw the Popular Electronics cover with the Altair 8800 in January 1975 and ran to show Gates. The two spent weeks writing a BASIC interpreter for the computer — before even having access to a real unit. Allen programmed an emulator of the 8080 processor on Harvard\'s minicomputer to test the code. The bet worked: the interpreter ran perfectly on the first attempt on real hardware.',
        },
      },
    ],
  },
  {
    year: 1976,
    era: { pt: 'Design Como Diferencial Técnico', en: 'Design as a Technical Differentiator' },
    context: {
      pt: 'A Apple I foi montada numa garagem. Mas a ideia que havia por trás — de que tecnologia poderia e deveria ser bonita — mudou para sempre a relação entre humanos e máquinas.',
      en: 'The Apple I was assembled in a garage. But the idea behind it — that technology could and should be beautiful — forever changed the relationship between humans and machines.',
    },
    people: [
      {
        name: 'Steve Jobs',
        image: '/hall/1976/steve-jobs',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Reed College, Portland (sem graduação) · Autodidata',
          en: 'Reed College, Portland (dropped out) · Self-taught',
        },
        summary: { pt: 'Redefiniu o que um produto de tecnologia pode ser', en: 'Redefined what a technology product can be' },
        role: { pt: 'Co-fundador da Apple', en: 'Co-founder of Apple' },
        contribution: {
          pt: 'Co-fundou a Apple e redefiniu o que um produto de tecnologia poderia ser — unindo design, simplicidade e engenharia num padrão que a indústria inteira passou a perseguir.',
          en: 'Co-founded Apple and redefined what a technology product could be — uniting design, simplicity and engineering into a standard the entire industry began to pursue.',
        },
        detail: {
          pt: 'Jobs não inventou o mouse, a interface gráfica ou o touchscreen. Ele foi o primeiro a entender que tecnologia mediocre embalada em design excelente seria capaz de mudar o mundo. Do Macintosh ao iPod, do iPhone ao iPad, cada produto da Apple sob Jobs redefiniu a categoria em que entrou. A apresentação do iPhone em 2007 é considerada o maior keynote da história da tecnologia — e o smartphone que ele lançou moldou o século XXI de maneiras que ainda estamos processando.',
          en: 'Jobs did not invent the mouse, the graphical interface, or the touchscreen. He was the first to understand that mediocre technology packaged in excellent design would be capable of changing the world. From the Macintosh to the iPod, from the iPhone to the iPad, every Apple product under Jobs redefined the category it entered. The 2007 iPhone presentation is considered the greatest keynote in technology history — and the smartphone he launched shaped the 21st century in ways we are still processing.',
        },
      },
      {
        name: 'Steve Wozniak',
        image: '/hall/1976/steve-wozniak',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Engenharia Elétrica, UC Berkeley',
          en: 'Electrical Engineering, UC Berkeley',
        },
        summary: { pt: 'Projetou o Apple I e o Apple II quase sozinho', en: 'Designed the Apple I and Apple II almost single-handedly' },
        role: { pt: 'Co-fundador da Apple e engenheiro do Apple I e II', en: 'Co-founder of Apple and engineer of Apple I and II' },
        contribution: {
          pt: 'Projetou o Apple I e o Apple II quase sozinho — computadores pessoais genuinamente funcionais que tornaram o sonho do PC acessível e real para milhões de pessoas.',
          en: 'Designed the Apple I and Apple II almost single-handedly — genuinely functional personal computers that made the PC dream accessible and real for millions of people.',
        },
        detail: {
          pt: 'Wozniak é um dos maiores engenheiros de hardware da história. O Apple II tinha gráficos coloridos e som em 1977 — algo que a concorrência levaria anos para alcançar. Ele projetou o computador com uma elegância que engenheiros ainda estudam: menos chips, mais eficiência, mais poder. Enquanto Jobs vendia a visão, Woz a construía. Após um acidente de avião em 1981, se afastou progressivamente da Apple, mas seu legado técnico é o coração do que a empresa foi em seus primeiros anos.',
          en: 'Wozniak is one of the greatest hardware engineers in history. The Apple II had color graphics and sound in 1977 — something competitors would take years to match. He designed the computer with an elegance that engineers still study: fewer chips, more efficiency, more power. While Jobs sold the vision, Woz built it. After a plane crash in 1981, he progressively distanced himself from Apple, but his technical legacy is the heart of what the company was in its early years.',
        },
      },
    ],
  },
  {
    year: 1983,
    era: { pt: 'Software Livre Como Filosofia', en: 'Free Software as Philosophy' },
    context: {
      pt: 'Enquanto Microsoft e Apple construíam impérios de software proprietário, um programador do MIT decidiu que código deveria ser um bem comum — e lançou um movimento que mudaria a indústria.',
      en: 'While Microsoft and Apple built proprietary software empires, an MIT programmer decided that code should be a common good — and launched a movement that would change the industry.',
    },
    people: [
      {
        name: 'Richard Stallman',
        image: '/hall/1983/richard-stallman',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Física, Harvard University',
          en: 'Physics, Harvard University',
        },
        summary: { pt: 'Fundou o movimento do software livre e criou a licença GPL', en: 'Founded the free software movement and created the GPL license' },
        role: { pt: 'Programador e fundador do movimento do software livre (GNU)', en: 'Programmer and founder of the free software movement (GNU)' },
        contribution: {
          pt: 'Fundou o Projeto GNU e criou a GPL, estabelecendo os princípios do software livre — uma filosofia que pavimentou o caminho para Linux, Apache, e boa parte da internet moderna.',
          en: 'Founded the GNU Project and created the GPL, establishing the principles of free software — a philosophy that paved the way for Linux, Apache, and much of the modern internet.',
        },
        detail: {
          pt: 'Stallman ficou indignado quando não pôde acessar o código de um driver de impressora com bug. Sua resposta foi lançar o GNU em 1983 com o objetivo de criar um sistema operacional completamente livre. Ele criou ferramentas como o GCC (compilador C), Emacs e a licença GPL. Quando Linus Torvalds criou o kernel Linux em 1991, ele usou as ferramentas de Stallman — e o sistema operacional "GNU/Linux" nasceu. Sem o trabalho filosófico e técnico de Stallman, o ecossistema open source que roda a internet inteira não existiria.',
          en: 'Stallman was infuriated when he couldn\'t access the code of a buggy printer driver. His response was to launch GNU in 1983 with the goal of creating a completely free operating system. He created tools like GCC (C compiler), Emacs, and the GPL license. When Linus Torvalds created the Linux kernel in 1991, he used Stallman\'s tools — and the "GNU/Linux" operating system was born. Without Stallman\'s philosophical and technical work, the open source ecosystem running the entire internet would not exist.',
        },
      },
    ],
  },
  {
    year: 1989,
    era: { pt: 'A Teia que Conectou o Mundo', en: 'The Web That Connected the World' },
    context: {
      pt: 'A internet existia, mas era um conjunto de redes técnicas inacessíveis para a maioria. Um físico suíço propôs um sistema de documentos interligados que qualquer pessoa pudesse usar.',
      en: 'The internet existed, but was a set of technical networks inaccessible to most. A Swiss physicist proposed a system of interlinked documents that anyone could use.',
    },
    people: [
      {
        name: 'Tim Berners-Lee',
        image: '/hall/1989/tim-berners-lee',
        flag: '🇬🇧',
        nationality: { pt: 'Britânico', en: 'British' },
        formation: {
          pt: 'Física, The Queen\'s College, Oxford',
          en: 'Physics, The Queen\'s College, Oxford',
        },
        summary: { pt: 'Inventou a World Wide Web e recusou patentear qualquer parte dela', en: 'Invented the World Wide Web and refused to patent any part of it' },
        role: { pt: 'Cientista da computação, inventor da World Wide Web', en: 'Computer scientist, inventor of the World Wide Web' },
        contribution: {
          pt: 'Inventou a World Wide Web, o HTTP, o HTML e o primeiro navegador — e recusou patentear qualquer parte disso, tornando a web um bem público universal.',
          en: 'Invented the World Wide Web, HTTP, HTML and the first browser — and refused to patent any part of it, making the web a universal public good.',
        },
        detail: {
          pt: 'Berners-Lee submeteu a proposta original da web ao CERN em março de 1989 sob o título modesto "Information Management: A Proposal". Seu chefe anotou "vague but exciting" na capa. O que veio depois redefiniu a civilização. Berners-Lee poderia ter se tornado bilionário patenteando HTTP ou HTML — em vez disso, abriu tudo ao público. Hoje lidera o movimento pela web aberta e contra a concentração do poder digital em poucas corporações. Uma decisão técnica de uma pessoa que nunca cobrou royalties de ninguém construiu a infraestrutura de comunicação da humanidade.',
          en: 'Berners-Lee submitted the original web proposal to CERN in March 1989 under the modest title "Information Management: A Proposal." His boss noted "vague but exciting" on the cover. What followed redefined civilization. Berners-Lee could have become a billionaire by patenting HTTP or HTML — instead, he opened everything to the public. Today he leads the movement for an open web and against the concentration of digital power in a few corporations. A technical decision by one person who never charged royalties built humanity\'s communication infrastructure.',
        },
      },
    ],
  },
  {
    year: 1991,
    era: { pt: 'O Kernel que Está em Todo Lugar', en: 'The Kernel That Is Everywhere' },
    context: {
      pt: 'Um estudante finlandês de 21 anos não gostou do Minix, o sistema operacional que usava, e decidiu escrever o seu próprio. Postou no Usenet que era "só um hobby, não será grande nem profissional".',
      en: 'A 21-year-old Finnish student didn\'t like Minix, the operating system he used, and decided to write his own. He posted on Usenet that it was "just a hobby, won\'t be big and professional".',
    },
    people: [
      {
        name: 'Linus Torvalds',
        image: '/hall/1991/linus-torvalds',
        flag: '🇫🇮',
        nationality: { pt: 'Finlandês-Americano', en: 'Finnish-American' },
        formation: {
          pt: 'Ciência da Computação, Universidade de Helsinque',
          en: 'Computer Science, University of Helsinki',
        },
        summary: { pt: 'Criou o kernel Linux e o Git', en: 'Created the Linux kernel and Git' },
        role: { pt: 'Engenheiro de software, criador do kernel Linux e do Git', en: 'Software engineer, creator of the Linux kernel and Git' },
        contribution: {
          pt: 'Criou o kernel Linux em 1991, que hoje roda em 97% dos supercomputadores do mundo, em todos os servidores Android, na maioria dos servidores web e na International Space Station.',
          en: 'Created the Linux kernel in 1991, which today runs on 97% of the world\'s supercomputers, all Android servers, most web servers, and the International Space Station.',
        },
        detail: {
          pt: 'O Linux estava em quase tudo antes de a maioria das pessoas saber que ele existia. Cada servidor Google, Amazon e Meta roda Linux. O Android (que é Linux com uma camada em cima) está em 3 bilhões de dispositivos. Em 2005, frustrado com as ferramentas de controle de versão existentes, Torvalds passou duas semanas criando o Git — a ferramenta que hoje é o padrão absoluto de versionamento de código no mundo inteiro. Duas criações, dois padrões de indústria.',
          en: 'Linux was in almost everything before most people knew it existed. Every Google, Amazon, and Meta server runs Linux. Android (which is Linux with a layer on top) is on 3 billion devices. In 2005, frustrated with existing version control tools, Torvalds spent two weeks creating Git — the tool that is today the absolute standard for code versioning worldwide. Two creations, two industry standards.',
        },
      },
    ],
  },
  {
    year: 1995,
    era: { pt: 'As Linguagens da Web', en: 'The Languages of the Web' },
    context: {
      pt: 'A web tinha HTML para estrutura, mas nada para comportamento dinâmico. Duas linguagens criadas em 1995 definiram o que a programação moderna seria.',
      en: 'The web had HTML for structure, but nothing for dynamic behavior. Two languages created in 1995 defined what modern programming would be.',
    },
    people: [
      {
        name: 'Brendan Eich',
        image: '/hall/1995/brendan-eich',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Matemática e Ciência da Computação, Santa Clara · Mestrado, Univ. de Illinois',
          en: 'Mathematics and Computer Science, Santa Clara Univ. · MS, Univ. of Illinois',
        },
        summary: { pt: 'Criou o JavaScript em 10 dias, a linguagem mais usada do mundo', en: 'Created JavaScript in 10 days, the most used language in the world' },
        role: { pt: 'Criador do JavaScript', en: 'Creator of JavaScript' },
        contribution: {
          pt: 'Criou o JavaScript em 10 dias para a Netscape — a linguagem que se tornou a mais usada do mundo e a única que roda nativamente em todos os navegadores.',
          en: 'Created JavaScript in 10 days for Netscape — the language that became the most used in the world and the only one that runs natively in all browsers.',
        },
        detail: {
          pt: 'Eich criou o JavaScript em maio de 1995 em condições caóticas: 10 dias, pressão da Netscape, e a exigência de que a linguagem "parecesse com Java" sem ser Java. O resultado foi uma linguagem com uma elegância escondida debaixo de inconsistências históricas. Décadas depois, JavaScript saiu do browser com o Node.js, virou linguagem de servidor, de IoT, de apps mobile com React Native, e de machine learning com TensorFlow.js. A linguagem criada em 10 dias roda hoje em literalmente tudo.',
          en: 'Eich created JavaScript in May 1995 under chaotic conditions: 10 days, pressure from Netscape, and the requirement that the language "look like Java" without being Java. The result was a language with a hidden elegance beneath historical inconsistencies. Decades later, JavaScript left the browser with Node.js, became a server language, an IoT language, a mobile app language with React Native, and a machine learning language with TensorFlow.js. The language created in 10 days now runs on literally everything.',
        },
      },
      {
        name: 'James Gosling',
        image: '/hall/1995/james-gosling',
        flag: '🇨🇦',
        nationality: { pt: 'Canadense', en: 'Canadian' },
        formation: {
          pt: 'Ciência da Computação, Univ. de Calgary · Doutorado, Carnegie Mellon',
          en: 'Computer Science, Univ. of Calgary · PhD, Carnegie Mellon',
        },
        summary: { pt: 'Criou o Java com o princípio "escreva uma vez, rode em qualquer lugar"', en: 'Created Java with the "write once, run anywhere" principle' },
        role: { pt: 'Cientista da computação, criador do Java', en: 'Computer scientist, creator of Java' },
        contribution: {
          pt: 'Criou o Java na Sun Microsystems com o princípio "write once, run anywhere" — a ideia de que um programa compilado poderia rodar em qualquer máquina com uma JVM.',
          en: 'Created Java at Sun Microsystems with the principle "write once, run anywhere" — the idea that a compiled program could run on any machine with a JVM.',
        },
        detail: {
          pt: 'Gosling começou o Java como um projeto para dispositivos embarcados. O timing foi perfeito: a web explodiu, e Java se tornou a linguagem dos applets e depois dos servidores corporativos. Hoje o Android usa uma variante de Java (Kotlin é a sucessora oficial mas compila para a mesma JVM). Java ainda é a linguagem mais ensinada em universidades, domina o back-end empresarial, e roda em bilhões de dispositivos. Gosling é um dos engenheiros mais influentes da história, ainda que seu nome seja menos conhecido que sua criação.',
          en: 'Gosling started Java as a project for embedded devices. The timing was perfect: the web exploded, and Java became the language of applets and then corporate servers. Today Android uses a Java variant (Kotlin is the official successor but compiles to the same JVM). Java is still the most taught language at universities, dominates enterprise back-ends, and runs on billions of devices. Gosling is one of the most influential engineers in history, even if his name is less known than his creation.',
        },
      },
    ],
  },
  {
    year: 1998,
    era: { pt: 'Organizar o Caos da Web', en: 'Organizing the Web\'s Chaos' },
    context: {
      pt: 'A web crescia exponencialmente e os mecanismos de busca existentes eram ruins. Dois estudantes de doutorado da Stanford decidiram resolver isso com matemática.',
      en: 'The web was growing exponentially and existing search engines were poor. Two Stanford PhD students decided to solve it with math.',
    },
    people: [
      {
        name: 'Larry Page',
        image: '/hall/1998/larry-page',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Engenharia da Computação, Univ. de Michigan · Stanford (doutorado, incompleto)',
          en: 'Computer Engineering, Univ. of Michigan · Stanford (PhD, incomplete)',
        },
        summary: { pt: 'Co-fundou o Google e co-criou o algoritmo PageRank', en: 'Co-founded Google and co-created the PageRank algorithm' },
        role: { pt: 'Co-fundador do Google', en: 'Co-founder of Google' },
        contribution: {
          pt: 'Co-fundou o Google e co-criou o algoritmo PageRank, que revolucionou a busca na web ao ranquear páginas pela quantidade e qualidade dos links que apontavam para elas.',
          en: 'Co-founded Google and co-created the PageRank algorithm, which revolutionized web search by ranking pages by the quantity and quality of links pointing to them.',
        },
        detail: {
          pt: 'A dissertação de doutorado de Page era sobre a estrutura de links da web. A percepção central era simples e poderosa: um link de uma página para outra é como uma citação acadêmica — um voto de relevância. Quanto mais links de qualidade apontassem para uma página, mais importante ela seria. O Google foi lançado em setembro de 1998, ainda como projeto universitário. Em dois anos havia se tornado o motor de busca dominante do mundo. Hoje o Google processa mais de 8,5 bilhões de buscas por dia.',
          en: 'Page\'s doctoral dissertation was about the link structure of the web. The central insight was simple and powerful: a link from one page to another is like an academic citation — a vote of relevance. The more quality links pointed to a page, the more important it would be. Google was launched in September 1998, still as a university project. Within two years it had become the world\'s dominant search engine. Today Google processes over 8.5 billion searches per day.',
        },
      },
      {
        name: 'Sergey Brin',
        image: '/hall/1998/sergey-brin',
        flag: '🇷🇺',
        nationality: { pt: 'Russo-Americano', en: 'Russian-American' },
        formation: {
          pt: 'Matemática e Ciência da Computação, Univ. de Maryland · Stanford (doutorado, em pausa)',
          en: 'Mathematics and Computer Science, Univ. of Maryland · Stanford (PhD, on leave)',
        },
        summary: { pt: 'Co-fundou o Google e desenvolveu o núcleo matemático do PageRank', en: 'Co-founded Google and developed the mathematical core of PageRank' },
        role: { pt: 'Co-fundador do Google', en: 'Co-founder of Google' },
        contribution: {
          pt: 'Co-fundou o Google com Larry Page e foi central no desenvolvimento matemático do PageRank e na infraestrutura que tornou o Google capaz de escalar para bilhões de buscas.',
          en: 'Co-founded Google with Larry Page and was central to the mathematical development of PageRank and the infrastructure that enabled Google to scale to billions of searches.',
        },
        detail: {
          pt: 'Brin e Page se conheceram na orientação para novos alunos de Stanford em 1995 e discordaram em quase tudo — o que, por alguma razão, resultou numa das parcerias mais bem-sucedidas da história da tecnologia. Brin trouxe o rigor matemático para o desenvolvimento do PageRank e liderou esforços de infraestrutura que permitiram ao Google crescer sem parar. Mais tarde, foi ele quem liderou o projeto do Google Glass e outras iniciativas em X, a divisão de projetos moonshot do Google.',
          en: 'Brin and Page met at the orientation for new Stanford students in 1995 and disagreed on almost everything — which, for some reason, resulted in one of the most successful partnerships in technology history. Brin brought mathematical rigor to the development of PageRank and led infrastructure efforts that allowed Google to grow without stopping. Later, he led the Google Glass project and other initiatives at X, Google\'s moonshot projects division.',
        },
      },
    ],
  },
  {
    year: 2004,
    era: { pt: 'A Rede Social que Ficou Grande Demais', en: 'The Social Network That Got Too Big' },
    context: {
      pt: 'Redes sociais já existiam, mas nenhuma havia capturado a massa crítica que Facebook conseguiu — primeiro nas universidades americanas, depois no mundo inteiro.',
      en: 'Social networks already existed, but none had captured the critical mass that Facebook achieved — first in American universities, then worldwide.',
    },
    people: [
      {
        name: 'Mark Zuckerberg',
        image: '/hall/2004/mark-zuckerberg',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Psicologia e Ciência da Computação, Harvard (sem graduação)',
          en: 'Psychology and Computer Science, Harvard (dropped out)',
        },
        summary: { pt: 'Co-fundou o Facebook, hoje a maior rede social da história', en: 'Co-founded Facebook, now the largest social network in history' },
        role: { pt: 'Co-fundador e CEO do Facebook (Meta)', en: 'Co-founder and CEO of Facebook (Meta)' },
        contribution: {
          pt: 'Co-fundou o Facebook, que se tornou a maior rede social da história e redefiniu como bilhões de pessoas se comunicam, compartilham e consomem informação.',
          en: 'Co-founded Facebook, which became the largest social network in history and redefined how billions of people communicate, share, and consume information.',
        },
        detail: {
          pt: 'Lançado em fevereiro de 2004 para estudantes de Harvard, o Facebook tinha 1 milhão de usuários em menos de um ano. A escala que se seguiu é difícil de compreender: mais de 3 bilhões de pessoas usam algum produto da Meta (Facebook, Instagram, WhatsApp). O impacto de Zuckerberg na comunicação humana é inegável — assim como as controvérsias sobre privacidade, desinformação e poder concentrado. Ele é simultaneamente um dos maiores construtores de plataformas e uma das figuras mais debatidas da história recente da tecnologia.',
          en: 'Launched in February 2004 for Harvard students, Facebook had 1 million users in less than a year. The scale that followed is hard to comprehend: over 3 billion people use a Meta product (Facebook, Instagram, WhatsApp). Zuckerberg\'s impact on human communication is undeniable — as are the controversies about privacy, misinformation, and concentrated power. He is simultaneously one of the greatest platform builders and one of the most debated figures in recent technology history.',
        },
      },
    ],
  },
  {
    year: 2007,
    era: { pt: 'O Computador que Cabe no Bolso', en: 'The Computer That Fits in a Pocket' },
    context: {
      pt: 'Steve Jobs subiu ao palco do Macworld com um segredo que havia mantido por dois anos: um iPod que também era um telefone e um computador de internet. "Esses não são três aparelhos separados."',
      en: 'Steve Jobs took the Macworld stage with a secret he had kept for two years: an iPod that was also a phone and an internet computer. "These are not three separate devices."',
    },
    people: [
      {
        name: 'Steve Jobs',
        image: '/hall/2007/steve-jobs',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Reed College, Portland (sem graduação) · Autodidata',
          en: 'Reed College, Portland (dropped out) · Self-taught',
        },
        summary: { pt: 'Apresentou o iPhone e inaugurou a era dos smartphones modernos', en: 'Presented the iPhone and launched the era of modern smartphones' },
        role: { pt: 'Co-fundador da Apple, criador do iPhone', en: 'Co-founder of Apple, creator of the iPhone' },
        contribution: {
          pt: 'Apresentou o iPhone em janeiro de 2007, lançando o produto que redefiniu a categoria de smartphones e inaugurou a era dos computadores móveis de uso massivo.',
          en: 'Presented the iPhone in January 2007, launching the product that redefined the smartphone category and inaugurated the era of mass-use mobile computers.',
        },
        detail: {
          pt: 'A apresentação do iPhone durou 1 hora e 21 minutos e Jobs a dividiu em três partes: um iPod widescreen, um telefone revolucionário, e um dispositivo de internet. A plateia levou um tempo para perceber que eram o mesmo aparelho. O iPhone não inventou o smartphone — havia touchscreens e internet móvel antes. Mas Jobs percebeu que nenhum deles era bom o suficiente para ser desejável. O que ele lançou em 2007 estabeleceu o padrão que todos seguiram. Em 2024, mais de 1,5 bilhão de iPhones já foram vendidos.',
          en: 'The iPhone presentation lasted 1 hour and 21 minutes, and Jobs divided it into three parts: a widescreen iPod, a revolutionary phone, and an internet device. The audience took a moment to realize they were the same device. The iPhone did not invent the smartphone — there were touchscreens and mobile internet before. But Jobs realized none of them were good enough to be desirable. What he launched in 2007 set the standard everyone followed. By 2024, over 1.5 billion iPhones had been sold.',
        },
      },
      {
        name: 'Scott Forstall',
        image: '/hall/2007/scott-forstall',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Sistemas Simbólicos e Ciência da Computação, Stanford',
          en: 'Symbolic Systems and Computer Science, Stanford',
        },
        summary: { pt: 'Liderou o desenvolvimento do iOS e criou a App Store', en: 'Led the development of iOS and created the App Store' },
        role: { pt: 'VP de Software do iPhone, criador do iOS', en: 'iPhone Software VP, creator of iOS' },
        contribution: {
          pt: 'Liderou o desenvolvimento do iOS e da App Store, criando a plataforma de software que transformou o iPhone de telefone em computador universal.',
          en: 'Led the development of iOS and the App Store, creating the software platform that transformed the iPhone from a phone into a universal computer.',
        },
        detail: {
          pt: 'Forstall era o responsável técnico pelo software do iPhone — o que poucos sabem é que Jobs o recrutou especificamente por ser o único executivo da Apple disposto a abandonar tudo para criar um sistema operacional para um telefone secreto. Forstall liderou o time que desenvolveu o iOS em dois anos de segredo absoluto. Em 2008, ele foi o arquiteto da App Store, que hoje tem mais de 1,8 milhão de apps e gerou mais de um trilhão de dólares em receita para os desenvolvedores.',
          en: 'Forstall was the technical lead for iPhone software — what few people know is that Jobs recruited him specifically because he was the only Apple executive willing to abandon everything to create an operating system for a secret phone. Forstall led the team that developed iOS in two years of absolute secrecy. In 2008, he was the architect of the App Store, which today has over 1.8 million apps and has generated over a trillion dollars in revenue for developers.',
        },
      },
    ],
  },
  {
    year: 2022,
    era: { pt: 'A IA que o Mundo Viu', en: 'The AI the World Saw' },
    context: {
      pt: 'Modelos de linguagem grandes existiam há anos em pesquisa. O ChatGPT os colocou na frente de 100 milhões de pessoas em dois meses — o produto de adoção mais rápida da história.',
      en: 'Large language models had existed in research for years. ChatGPT put them in front of 100 million people in two months — the fastest-adopted product in history.',
    },
    people: [
      {
        name: 'Sam Altman',
        image: '/hall/2022/sam-altman',
        flag: '🇺🇸',
        nationality: { pt: 'Americano', en: 'American' },
        formation: {
          pt: 'Ciência da Computação, Stanford (sem graduação)',
          en: 'Computer Science, Stanford (dropped out)',
        },
        summary: { pt: 'Lançou o ChatGPT e desencadeou a maior corrida tecnológica desde a internet', en: 'Launched ChatGPT and triggered the greatest tech race since the internet' },
        role: { pt: 'CEO da OpenAI, lançou o ChatGPT ao público', en: 'CEO of OpenAI, launched ChatGPT to the public' },
        contribution: {
          pt: 'Liderou a OpenAI no lançamento do ChatGPT em novembro de 2022, desencadeando a maior corrida tecnológica desde a criação da internet.',
          en: 'Led OpenAI in the launch of ChatGPT in November 2022, triggering the greatest technological race since the creation of the internet.',
        },
        detail: {
          pt: 'O ChatGPT foi lançado como um "preview de pesquisa" sem grandes expectativas. Em 5 dias tinha 1 milhão de usuários. Em 2 meses, 100 milhões — algo que o Instagram levou 2,5 anos para alcançar. Altman não criou a arquitetura transformer nem treinou o modelo sozinho — mas foi ele quem apostou na estratégia de lançamento público e aberto que democratizou o acesso a LLMs. O impacto ainda está se desdobrando: IA generativa virou commodity em menos de dois anos.',
          en: 'ChatGPT was launched as a "research preview" without major expectations. In 5 days it had 1 million users. In 2 months, 100 million — something Instagram took 2.5 years to achieve. Altman did not create the transformer architecture nor train the model alone — but he bet on the open public launch strategy that democratized access to LLMs. The impact is still unfolding: generative AI became a commodity in less than two years.',
        },
      },
      {
        name: 'Ilya Sutskever',
        image: '/hall/2022/ilya-sutskever',
        flag: '🇮🇱',
        nationality: { pt: 'Israelense-Canadense', en: 'Israeli-Canadian' },
        formation: {
          pt: 'Matemática e Ciência da Computação, Univ. de Toronto · Doutorado com Geoffrey Hinton',
          en: 'Mathematics and Computer Science, Univ. of Toronto · PhD under Geoffrey Hinton',
        },
        summary: { pt: 'Arquitetou os modelos GPT e foi um dos fundadores da OpenAI', en: 'Architected the GPT models and co-founded OpenAI' },
        role: { pt: 'Co-fundador da OpenAI e arquiteto técnico dos modelos GPT', en: 'Co-founder of OpenAI and technical architect of GPT models' },
        contribution: {
          pt: 'Co-fundou a OpenAI e foi o principal arquiteto técnico por trás dos modelos GPT, incluindo o GPT-4 que alimenta o ChatGPT.',
          en: 'Co-founded OpenAI and was the primary technical architect behind the GPT models, including GPT-4 that powers ChatGPT.',
        },
        detail: {
          pt: 'Sutskever foi um dos autores do paper AlexNet em 2012, que deu início à era moderna do deep learning. Em 2015, co-fundou a OpenAI com Altman, Musk e outros. Foi ele quem liderou a pesquisa que resultou nos modelos GPT. Em 2024, saiu da OpenAI para fundar a Safe Superintelligence Inc. (SSI), focada exclusivamente em segurança de IA — uma das transições mais simbólicas da era da IA generativa.',
          en: 'Sutskever was one of the authors of the AlexNet paper in 2012, which launched the modern era of deep learning. In 2015, he co-founded OpenAI with Altman, Musk, and others. He led the research that resulted in the GPT models. In 2024, he left OpenAI to found Safe Superintelligence Inc. (SSI), focused exclusively on AI safety — one of the most symbolic transitions of the generative AI era.',
        },
      },
    ],
  },
]

// Build lookup map
export const hallByYear = new Map<number, HallYear>(data.map(y => [y.year, y]))

// All years with entries, sorted
export const yearsWithEntries = data.map(d => d.year).sort((a, b) => a - b)
