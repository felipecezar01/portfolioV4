import { HALL_IMAGES } from './hallImages'

export type HallPerson = {
  name: string
  image?: string
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
}

export type HallYear = {
  year: number
  era: { pt: string; en: string }
  context: { pt: string; en: string }
  people: HallPerson[]
}

export const HALL_START = 1843
export const HALL_END   = 2026
export const HALL_SPAN  = HALL_END - HALL_START // 183

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
