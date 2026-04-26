// ─── Qualitative rating system ─────────────────────────────────────────────────

// ratingLevel: 1=muito alta/alto, 2=alta/alto, 3=média/médio, 4=baixa/baixo, 5=muito baixa/baixo
export type QualitativeParam = {
  label: { pt: string; en: string }
  rating: { pt: string; en: string }    // display string (handles gender)
  ratingLevel: 1 | 2 | 3 | 4 | 5
  description: { pt: string; en: string }
}

// ─── Model version (for individual accordion pages) ───────────────────────────

export type ModelVersion = {
  id: string
  name: string
  description: { pt: string; en: string }
  pros?: { pt: string[]; en: string[] }
  cons?: { pt: string[]; en: string[] }
  goodParams?: QualitativeParam[]
  badParams?: QualitativeParam[]
  locked?: boolean                          // if true, accordion won't expand
  lockedNote?: { pt: string; en: string }   // note shown on locked versions
  released: string
}

// ─── Full LLM profile (used in main ranking) ───────────────────────────────────

export type AIScore = {
  overall: number
  conversational: number  // quão conversacional
  didactic: number        // quão didático
  precise: number         // quão preciso
  intelligent: number     // quão inteligente
}

export type AIModel = {
  id: string
  name: string
  company: string
  color: string
  logo?: string
  currentModel: { pt: string; en: string }
  rank: number
  tier: 'S' | 'A' | 'B' | 'C'
  scores: AIScore
  verdict: { pt: string; en: string }
  review: { pt: string; en: string }
  modelNote?: { pt: string; en: string }
  versions: ModelVersion[]
  lastUpdated: string
}

// ─── Category entry (simple — used inside category pages) ──────────────────────

export type CategoryEntry = {
  id: string
  name: string
  company: string
  color: string
  logo?: string
  rank: number
  score: number
  verdict: { pt: string; en: string }
  hasDetail: boolean  // true = has /ai-arena/modelo/[id] page
}

// ─── Arena category ────────────────────────────────────────────────────────────

export type ArenaCategory = {
  id: string
  slug: string
  icon: string
  color: string
  name: { pt: string; en: string }
  description: { pt: string; en: string }
  categoryNote?: { pt: string; en: string }
  evaluatedParams?: { pt: string; en: string }[]
  entries: CategoryEntry[]
}

// ─── Main LLM models ───────────────────────────────────────────────────────────

export const models: AIModel[] = [
  {
    id: 'claude',
    name: 'Claude',
    company: 'Anthropic',
    color: '#D97757',
    logo: '/ai-arena/claude.png',
    currentModel: { pt: 'Sonnet 4.6 (analisado) · Opus 4.7 / 4.6 (inacessíveis)', en: 'Sonnet 4.6 (reviewed) · Opus 4.7 / 4.6 (inaccessible)' },
    rank: 1,
    tier: 'S',
    scores: { overall: 9.3, conversational: 9.2, didactic: 9.5, precise: 9.4, intelligent: 9.5 },
    verdict: {
      pt: 'O melhor para trabalho técnico profundo e escrita de qualidade — meu uso diário.',
      en: 'The best for deep technical work and quality writing — my daily driver.',
    },
    review: {
      pt: 'O Claude é, na prática, uma IA focada em programação e tarefas técnicas — não uma IA de texto conversacional. A Anthropic tem puxado o modelo nessa direção, e o resultado é que usar o Claude para estudo ou conversas longas consome muito mais do que o razoável para quem está no plano Pro. Os modelos Opus são tecnicamente impressionantes, mas financeiramente inviáveis para a maioria. A análise aqui se restringe ao Sonnet 4.6, o único modelo acessível para uso consistente no dia a dia.',
      en: 'Claude is, in practice, a coding and technical task AI — not a conversational text AI. Anthropic has been pushing the model in that direction, and the result is that using Claude for studying or long conversations consumes far more than what is reasonable on the Pro plan. The Opus models are technically impressive, but financially inaccessible for most people. The analysis here is restricted to Sonnet 4.6, the only model accessible for consistent daily use.',
    },
    modelNote: {
      pt: 'O Claude é um caso especial nesta arena. Diferente do Gemini e do ChatGPT, ele não é pensado para uso conversacional ou de estudo. A Anthropic está claramente focando o modelo em tarefas de programação e trabalho técnico profundo. Para quem está no plano Pro, os modelos Opus são praticamente inutilizáveis — uma única tarefa pode consumir duas sessões de 5 horas. O plano que permitiria uso real dos Opus custa em torno de R$ 650/mês, metade de um salário mínimo, o que não cabe na realidade da maioria. Por isso, esta análise foca no Sonnet 4.6, que ainda é acessível e usável.',
      en: 'Claude is a special case in this arena. Unlike Gemini and ChatGPT, it is not designed for conversational or study use. Anthropic is clearly focusing the model on programming and deep technical work. For those on the Pro plan, the Opus models are practically unusable — a single task can consume two 5-hour sessions. The plan that would allow real Opus use costs around $130/month, which does not fit most people\'s reality. This analysis therefore focuses on Sonnet 4.6, which is still accessible and usable.',
    },
    versions: [
      {
        id: 'claude-opus-4-7',
        name: 'Claude Opus 4.7',
        description: { pt: '', en: '' },
        locked: true,
        lockedNote: {
          pt: 'Modelo inacessível para análise. O consumo é tão alto que uma única tarefa pode exigir duas sessões de 5 horas no plano Pro. Uso consistente exige o plano Max (~R$ 650/mês). Sem análise aqui.',
          en: 'Model inaccessible for review. The consumption is so high that a single task can require two 5-hour sessions on the Pro plan. Consistent use requires the Max plan (~$130/month). No review here.',
        },
        released: '2025-07',
      },
      {
        id: 'claude-opus-4-6',
        name: 'Claude Opus 4.6',
        description: { pt: '', en: '' },
        locked: true,
        lockedNote: {
          pt: 'Mesmo problema do Opus 4.7 — consumo inviável para o plano Pro. Não entra na análise pelo mesmo motivo.',
          en: 'Same problem as Opus 4.7 — consumption is unfeasible on the Pro plan. Not included in the analysis for the same reason.',
        },
        released: '2025-04',
      },
      {
        id: 'claude-sonnet-4-6',
        name: 'Claude Sonnet 4.6',
        description: {
          pt: 'O modelo do Claude com melhor custo-benefício para uso no plano Pro. Ainda assim, é mais voltado para tarefas técnicas do que para conversas ou estudo.',
          en: 'The Claude model with the best value for Pro plan use. Still more geared toward technical tasks than conversation or study.',
        },
        released: '2025-06',
      },
    ],
    lastUpdated: '2026-04-23',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    company: 'OpenAI',
    color: '#e8e8e8',
    logo: '/ai-arena/chatgpt.png',
    currentModel: { pt: 'Thinking 5.5 Extended', en: 'Thinking 5.5 Extended' },
    rank: 2,
    tier: 'S',
    scores: { overall: 8.9, conversational: 8.8, didactic: 8.7, precise: 9.0, intelligent: 9.2 },
    verdict: {
      pt: 'O padrão da indústria — mais rápido e versátil, mas ligeiramente atrás em escrita e contexto.',
      en: 'The industry standard — faster and more versatile, but slightly behind in writing and context.',
    },
    review: {
      pt: 'O ChatGPT é o padrão de mercado por uma razão: é confiável, tem ecossistema maduro e o Thinking 5.5 Extended representa um salto real em raciocínio. Ainda assim, a tendência de concordar demais e a frequência de alucinações de conteúdo exigem atenção redobrada em contextos de estudo e pesquisa.',
      en: 'ChatGPT is the market standard for a reason: reliable, mature ecosystem, and Thinking 5.5 Extended represents a real leap in reasoning. Still, the tendency to over-agree and the frequency of content hallucinations require extra attention in study and research contexts.',
    },
    modelNote: {
      pt: 'Aqui analiso somente o ChatGPT Thinking 5.5 Extended — o modelo mais avançado disponível atualmente. Versões anteriores como o GPT-4o e o o3 não entram nesta análise.',
      en: 'Here I only analyze ChatGPT Thinking 5.5 Extended — the most advanced model currently available. Previous versions like GPT-4o and o3 are not part of this analysis.',
    },
    versions: [
      {
        id: 'thinking-5-5-extended',
        name: 'Thinking 5.5 Extended',
        description: {
          pt: 'O modelo mais avançado da OpenAI atualmente disponível.',
          en: 'The most advanced OpenAI model currently available.',
        },
        goodParams: [
          {
            label: { pt: 'Criação de conteúdo', en: 'Content creation' },
            rating: { pt: 'Baixa', en: 'Low' },
            ratingLevel: 4,
            description: {
              pt: 'Na minha opinião, a criação de conteúdo do ChatGPT ainda é um ponto fraco. Assim como acontece com o Gemini, ele muitas vezes escreve de forma sensacionalista, marqueteira e clichê. O texto pode ficar robotizado, exagerado e meio desagradável de ler, principalmente quando a intenção é produzir algo mais natural, autoral ou com uma voz mais humana.',
              en: 'In my opinion, content creation is still a weak point for ChatGPT. Like Gemini, it often writes in a sensationalist, marketing-heavy and clichê way. The text can feel robotic, exaggerated and somewhat unpleasant to read, especially when the goal is something more natural, authorial or with a more human voice.',
            },
          },
          {
            label: { pt: 'Conversa humanizada', en: 'Humanized conversation' },
            rating: { pt: 'Média', en: 'Medium' },
            ratingLevel: 3,
            description: {
              pt: 'No quesito conversa humanizada, eu colocaria o ChatGPT como médio. Ele consegue conversar bem em vários momentos, mas ainda fica atrás do Gemini nesse aspecto. Às vezes escreve demais, faz comparações demais e demora para chegar ao ponto. Em algumas situações, também não oferece conselhos tão bons ou tão naturais. Além disso, nem sempre passa uma sensação tão acolhedora ou compreensível. A conversa pode funcionar, mas nem sempre parece tão humana, leve ou realmente próxima.',
              en: 'On humanized conversation, I would rate ChatGPT as medium. It can converse well in many situations, but still falls behind Gemini. Sometimes it writes too much, makes too many comparisons and takes too long to get to the point. It does not always feel as welcoming or comprehensible either. The conversation can work, but it does not always feel truly human, light or close.',
            },
          },
          {
            label: { pt: 'Inteligência', en: 'Intelligence' },
            rating: { pt: 'Alta', en: 'High' },
            ratingLevel: 2,
            description: {
              pt: 'Em resolução de questões, especialmente pensando em estudos para concurso público, eu colocaria o ChatGPT como alto. Ele costuma resolver muitas questões corretamente e tem boa capacidade de raciocínio, mas comparado ao Gemini, ainda erra bem mais. Ao longo dos testes, a sensação é que, a cada 100 questões, ele pode errar algo em torno de 10, enquanto o Gemini parece ter uma taxa de acerto muito superior. Então, ele é inteligente, sim, mas não chega ao nível de "muito alto" nesse tipo de uso.',
              en: 'On question solving, especially for competitive exam preparation, I would rate ChatGPT as high. It usually solves many questions correctly and has good reasoning ability, but compared to Gemini it still makes significantly more errors. The feeling is that for every 100 questions, it may get around 10 wrong, while Gemini seems to have a much higher accuracy rate. So it is intelligent, yes, but does not reach "very high" for this type of use.',
            },
          },
          {
            label: { pt: 'Precisão', en: 'Precision' },
            rating: { pt: 'Média', en: 'Medium' },
            ratingLevel: 3,
            description: {
              pt: 'A precisão do ChatGPT fica em um nível médio. Ele traz boas informações sobre fatos e conteúdos, mas também erra com certa frequência. Além disso, muitas vezes ele repete a mesma ideia várias vezes com pequenas variações, tentando explicar a mesma coisa de formas diferentes, o que gera bastante ruído. Isso acaba prejudicando a percepção de precisão, porque nem sempre ele vai direto ao ponto. Às vezes parece que está tentando preencher espaço, reforçar demais uma ideia ou criar nuances que não ajudam tanto.',
              en: 'The precision of ChatGPT is at a medium level. It brings good information on facts and content, but also makes errors with some frequency. Additionally, it often repeats the same idea multiple times with small variations, which generates noise. It does not always go straight to the point — sometimes it seems to be trying to fill space or over-reinforce an idea.',
            },
          },
          {
            label: { pt: 'Didática', en: 'Teaching ability' },
            rating: { pt: 'Alta', en: 'High' },
            ratingLevel: 2,
            description: {
              pt: 'A didática do ChatGPT é boa — eu colocaria como alta. Ele consegue explicar muitos assuntos com clareza, organizar ideias e construir respostas úteis para estudo. Porém, comparado ao Gemini, ainda fica atrás em alguns pontos. Em resolução de questões de matemática, por exemplo, ele muitas vezes escolhe o caminho mais complexo possível, tornando a explicação mais difícil do que precisava ser. Ainda assim, não é uma didática ruim. Ela é boa, só não chega ao nível de muito alta.',
              en: 'The teaching ability of ChatGPT is good — I would rate it as high. It can explain many subjects clearly, organize ideas and build useful study responses. However, compared to Gemini, it still falls behind on some points. In math question solving, for example, it often chooses the most complex path possible. Still, it is not bad teaching ability — it is good, just not at the very high level.',
            },
          },
          {
            label: { pt: 'Lidar com grandes inputs', en: 'Handling large inputs' },
            rating: { pt: 'Alta', en: 'High' },
            ratingLevel: 2,
            description: {
              pt: 'O ChatGPT lida bem com grandes inputs — consegue analisar textos longos, levantar pontos importantes e responder considerando boa parte do contexto. Ainda assim, eu colocaria como alto e não muito alto, porque tanto o ChatGPT quanto o Claude parecem estar adotando uma abordagem de compactar grandes textos em arquivos ou resumos internos, o que ainda precisa ser testado com mais cuidado para saber se não há perda de informação.',
              en: 'ChatGPT handles large inputs well — it can analyze long texts, raise important points and respond considering much of the context. Still, I would rate it as high not very high, because both ChatGPT and Claude seem to be adopting an approach of compacting large texts into internal summaries, which still needs more careful testing to ensure there is no information loss.',
            },
          },
          {
            label: { pt: 'Análise multimodal', en: 'Multimodal analysis' },
            rating: { pt: 'Alta', en: 'High' },
            ratingLevel: 2,
            description: {
              pt: 'A análise multimodal do ChatGPT é muito boa no geral — ele lida bem com imagens, arquivos, PDFs e diferentes tipos de entrada. Mesmo assim, eu colocaria como alta e não muito alta, porque ainda seria necessário fazer mais testes e comparações diretas com o Gemini para afirmar que o desempenho é realmente equivalente ou superior.',
              en: 'The multimodal analysis of ChatGPT is very good overall — it handles images, files, PDFs and different types of input well. Even so, I would rate it as high not very high, because more direct comparisons with Gemini would still be needed to confirm the performance is truly equivalent or superior.',
            },
          },
          {
            label: { pt: 'Gerar grandes outputs', en: 'Generating large outputs' },
            rating: { pt: 'Média', en: 'Medium' },
            ratingLevel: 3,
            description: {
              pt: 'O ChatGPT até consegue gerar outputs grandes, mas isso não significa que a qualidade será alta. Ele produz respostas longas e textos maiores do que o Gemini costuma gerar, porém muitas vezes esses outputs vêm com repetição, excesso de explicação e ideias reapresentadas de formas levemente diferentes. Ele consegue escrever bastante, mas nem sempre com boa precisão, objetividade ou qualidade constante.',
              en: 'ChatGPT can generate large outputs, but this does not mean the quality will be high. It produces longer responses and larger texts than Gemini usually generates, but these outputs often come with repetition, excessive explanation and ideas re-presented in slightly different ways. It can write a lot, but not always with good precision, objectivity or consistent quality.',
            },
          },
        ],
        badParams: [
          {
            label: { pt: 'Alucinação interna', en: 'Internal hallucination' },
            rating: { pt: 'Média', en: 'Medium' },
            ratingLevel: 3,
            description: {
              pt: 'A alucinação interna do ChatGPT fica em um nível médio. Muitas vezes, ele traz informações erradas, interpretações duvidosas ou conclusões que parecem fazer sentido à primeira vista, mas que não se sustentam bem quando verificadas. Esse é um dos grandes problemas do ChatGPT: ele pode soar muito convincente mesmo quando está errado. Para uso em estudo, pesquisa ou tomada de decisão, isso exige uma atenção maior.',
              en: 'The internal hallucination of ChatGPT is at a medium level. It often brings incorrect information, dubious interpretations or conclusions that seem to make sense at first but do not hold up when verified. This is one of the biggest problems with ChatGPT: it can sound very convincing even when it is wrong. For study, research or decision-making, this requires greater attention.',
            },
          },
          {
            label: { pt: 'Alucinação de memória', en: 'Memory hallucination' },
            rating: { pt: 'Baixa', en: 'Low' },
            ratingLevel: 4,
            description: {
              pt: 'A alucinação de memória do ChatGPT parece ser baixa. Comparado ao Gemini, ele não costuma misturar tanto informações antigas, nem insistir em memórias estranhas ou fora de contexto. No geral, a memória do chat e a memória global parecem ser mais estáveis. Pode acontecer uma alucinação ou outra, mas não parece ser uma grande preocupação no uso geral.',
              en: 'The memory hallucination of ChatGPT seems to be low. Compared to Gemini, it does not usually mix up old information or insist on strange out-of-context memories. Overall, chat memory and global memory seem more stable. A hallucination may happen occasionally, but it does not seem to be a major concern in general use.',
            },
          },
          {
            label: { pt: 'Maria-vai-com-as-outras', en: 'Sycophancy' },
            rating: { pt: 'Muito alta', en: 'Very high' },
            ratingLevel: 1,
            description: {
              pt: 'Esse é um dos pontos mais fracos do ChatGPT. Se você começa uma conversa afirmando uma informação errada, muitas vezes ele tenta fazer o possível para encaixar aquela informação como se estivesse certa. Em vez de apontar o erro, ele frequentemente acompanha sua lógica e tenta justificar o raciocínio. Parece que a OpenAI já tentou ajustar isso, fazendo o modelo discordar um pouco mais — mas em alguns casos o resultado ficou irritante: ele dizia "isso faz sentido, mas não exatamente" e depois repetia a mesma ideia. Quando perguntado se estava certo, acabava dizendo "tecnicamente sim". O problema não foi totalmente resolvido. A tendência de concordar demais ainda é muito forte.',
              en: 'This is one of ChatGPT\'s biggest weaknesses. If you start a conversation asserting wrong information, it often tries everything to fit that information as if it were correct. Instead of pointing out the error, it follows your logic and tries to justify the reasoning. OpenAI seems to have tried adjusting this — but in some cases the result became irritating: it would say "that makes sense, but not exactly" then repeat practically the same idea. When asked if you were right, it would say "technically yes". The problem was not fully resolved. The tendency to over-agree is still very strong.',
            },
          },
        ],
        released: '2025-05',
      },
    ],
    lastUpdated: '2026-04-23',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    company: 'Google',
    color: '#4ade80',
    logo: '/ai-arena/gemini.png',
    currentModel: { pt: 'Gemini 2.5 Pro / Flash', en: 'Gemini 2.5 Pro / Flash' },
    rank: 3,
    tier: 'A',
    scores: { overall: 8.3, conversational: 8.5, didactic: 8.8, precise: 7.8, intelligent: 8.6 },
    verdict: {
      pt: 'O mais rápido e barato do tier alto — melhorou muito, ainda perde em consistência.',
      en: 'The fastest and cheapest in the high tier — improved a lot, still loses in consistency.',
    },
    review: {
      pt: 'O Gemini evoluiu muito e o 3.1 Pro é genuinamente impressionante. O problema histórico continua sendo a inconsistência: às vezes entrega algo brilhante, na próxima sessão parece regressão. A integração com o ecossistema Google é o grande diferencial para quem vive no Docs/Drive. Em texto e raciocínio geral, surpreende positivamente — mas cuidado com alucinações ocasionais.',
      en: 'Gemini evolved a lot and 3.1 Pro is genuinely impressive. The historical problem remains inconsistency: sometimes brilliant, next session feels like a regression. Google ecosystem integration is the big differentiator for Docs/Drive users. In text and general reasoning, it positively surprises — but watch out for occasional hallucinations.',
    },
    modelNote: {
      pt: 'Aqui analiso somente o Gemini 3.1 Pro. Por conta dos 15 meses gratuitos para estudantes, tenho acesso ao Pro até setembro de 2026 — e praticamente só uso ele. Toda a validação é baseada nesse modelo.',
      en: 'Here I only analyze Gemini 3.1 Pro. Due to the 15-month free access for students, I have Pro access until September 2026 — and it\'s basically all I use. All validation is based on this model.',
    },
    versions: [
      {
        id: 'gemini-3-1-pro',
        name: 'Gemini 3.1 Pro',
        description: {
          pt: 'O modelo principal que uso. Contexto de 1 milhão de tokens, integração nativa com Google Search e capacidade multimodal avançada.',
          en: 'The main model I use. 1 million token context, native Google Search integration and advanced multimodal capability.',
        },
        goodParams: [
          {
            label: { pt: 'Criação de conteúdo', en: 'Content creation' },
            rating: { pt: 'Baixa', en: 'Low' },
            ratingLevel: 4,
            description: {
              pt: 'Por mais que o Gemini tenha boa precisão e até uma boa capacidade de pesquisa, por algum motivo ele ainda é muito fraco para escrever artigos ou gerar textos mais naturais. Os textos costumam ficar muito robotizados e sensacionalistas. Ele frequentemente tenta usar um tom de marketing, criando sensação de urgência, exagerando nas dramatizações e deixando a leitura pouco agradável.',
              en: 'Even though Gemini has good precision and research capability, it is still very weak at writing articles or generating more natural text. Texts tend to be robotic and sensationalist. It frequently tries to use a marketing tone, creating urgency, overdramatizing and making the reading unpleasant.',
            },
          },
          {
            label: { pt: 'Conversa humanizada', en: 'Humanized conversation' },
            rating: { pt: 'Alta', en: 'High' },
            ratingLevel: 2,
            description: {
              pt: 'Na conversa, o Gemini se sai muito bem. Ele consegue falar de forma natural, entende o problema, propõe soluções e costuma ser compreensível, acolhedor e até divertido em alguns momentos. Apesar disso, em algumas situações ele ainda não consegue oferecer conselhos tão bons ou tão profundos quanto poderia.',
              en: 'In conversation, Gemini does very well. It speaks naturally, understands the problem, proposes solutions and tends to be comprehensible, welcoming and even fun at times. Despite this, in some situations it still cannot offer advice as good or as deep as it could.',
            },
          },
          {
            label: { pt: 'Inteligência', en: 'Intelligence' },
            rating: { pt: 'Muito alta', en: 'Very high' },
            ratingLevel: 1,
            description: {
              pt: 'Para ser sincero, hoje eu considero o Gemini um dos melhores modelos nesse aspecto. Já fiz cerca de 1000 questões com ele ao longo de meses, e ele praticamente teve uma taxa de acerto próxima de 100%. Muitas vezes, ele até apontou que determinada questão talvez tivesse sido anulada — e, de fato, ela havia sido, ou pelo menos existia um forte motivo para isso.',
              en: 'To be honest, I consider Gemini one of the best models in this aspect today. I have done around 1000 questions with it over months, and it had a success rate close to 100%. Many times, it even pointed out that a certain question may have been annulled — and it had been, or at least there was a strong reason for it.',
            },
          },
          {
            label: { pt: 'Precisão', en: 'Precision' },
            rating: { pt: 'Muito alta', en: 'Very high' },
            ratingLevel: 1,
            description: {
              pt: 'Precisão e inteligência andam lado a lado. O Gemini é um dos modelos mais precisos atualmente e também um dos que menos alucina em relação a fatos e conteúdos. Além disso, possui um dos melhores OCRs que já testei. É impressionante como a taxa de erro dele, nesse sentido, é muito baixa, chegando perto de uma precisão quase absoluta.',
              en: 'Precision and intelligence go hand in hand. Gemini is one of the most precise models currently and also one that hallucinates least regarding facts and content. It also has one of the best OCRs I have tested. Its error rate in this regard is very low, reaching near-absolute precision.',
            },
          },
          {
            label: { pt: 'Didática', en: 'Teaching ability' },
            rating: { pt: 'Muito alta', en: 'Very high' },
            ratingLevel: 1,
            description: {
              pt: 'A didática do Gemini é muito boa mesmo, sendo um dos melhores modelos para estudo. Ele traz bons exemplos, todos bem precisos, resumidos e extremamente eficientes. Também faz boas analogias, apresenta boas definições e consegue explicar assuntos complexos de uma forma clara e fácil de acompanhar. É um dos pontos que mais gosto nele.',
              en: "Gemini's teaching ability is really good, being one of the best models for study. It brings good examples, all precise, concise and extremely efficient. It also makes good analogies, presents good definitions and can explain complex subjects in a clear and easy-to-follow way. It is one of the things I like most about it.",
            },
          },
          {
            label: { pt: 'Lidar com grandes inputs', en: 'Handling large inputs' },
            rating: { pt: 'Muito alta', en: 'Very high' },
            ratingLevel: 1,
            description: {
              pt: 'O Gemini é extremamente eficiente e preciso quando precisa lidar com inputs grandes. Ele consegue levantar praticamente todos os pontos propostos, abordar tudo que foi perguntado ou discutido e identificar muito bem o que precisa ser feito, mesmo quando o input é enorme. Na prática, ele quase sempre consegue capturar tudo que está no contexto, organizar as informações e responder considerando todos os detalhes importantes. Nesse ponto, ele é excelente.',
              en: 'Gemini is extremely efficient and precise when handling large inputs. It can raise virtually all proposed points, address everything asked or discussed and identify very well what needs to be done, even when the input is huge. In practice, it almost always captures everything in the context, organizes the information and responds considering all important details. In this regard, it is excellent.',
            },
          },
          {
            label: { pt: 'Análise multimodal', en: 'Multimodal analysis' },
            rating: { pt: 'Muito alta', en: 'Very high' },
            ratingLevel: 1,
            description: {
              pt: 'Além de lidar muito bem com grandes contextos, o Gemini também trabalha muito bem com diferentes formatos de input. Ele consegue analisar links, imagens, PDFs e outros tipos de arquivo com muita eficiência. O modelo realmente parece navegar bem entre diferentes fontes, cruzar informações e trazer aquilo que foi pedido sem se perder tanto no processo. Esse é um dos grandes diferenciais dele: não é só entender um texto grande, mas conseguir lidar com vários formatos ao mesmo tempo e ainda assim manter uma análise precisa, organizada e útil.',
              en: 'In addition to handling large contexts very well, Gemini also works very well with different input formats. It can analyze links, images, PDFs and other file types with great efficiency. The model really seems to navigate well between different sources, cross-reference information and deliver what was requested without getting too lost. This is one of its biggest differentiators: not just understanding a large text, but handling multiple formats at the same time while maintaining a precise, organized and useful analysis.',
            },
          },
          {
            label: { pt: 'Gerar grandes outputs', en: 'Generating large outputs' },
            rating: { pt: 'Baixa', en: 'Low' },
            ratingLevel: 4,
            description: {
              pt: 'Hoje, no mercado, modelos como Claude e ChatGPT conseguem gerar respostas muito grandes, principalmente o Claude. O Gemini tem uma das melhores análises de input, mas é muito limitado quando o assunto é output extenso. Se você precisa de um texto realmente grande, como algo equivalente a 10 páginas de um PDF, ele dificilmente vai gerar. Normalmente, ele entrega no máximo algo em torno de 2 páginas de PDF. Não importa o quanto você insista: ele dificilmente produz um material realmente muito extenso.',
              en: 'Today, models like Claude and ChatGPT can generate very large responses, especially Claude. Gemini has one of the best input analyses, but is very limited when it comes to extensive output. If you need a really large text, like something equivalent to 10 pages of a PDF, it will rarely generate it. Normally it delivers at most around 2 PDF pages. No matter how much you insist: it rarely produces truly extensive material.',
            },
          },
        ],
        badParams: [
          {
            label: { pt: 'Alucinação interna', en: 'Internal hallucination' },
            rating: { pt: 'Muito baixa', en: 'Very low' },
            ratingLevel: 5,
            description: {
              pt: 'Nesse ponto, quase dispensa comentários. Quando o assunto é conteúdo, fatos, questões, explicações e análise lógica, o Gemini se destaca muito por errar pouco, manter boa consistência nas respostas e apresentar uma das menores taxas de alucinação entre os modelos atuais.',
              en: 'In this regard, it almost speaks for itself. When it comes to content, facts, questions, explanations and logical analysis, Gemini stands out for making few errors, maintaining good consistency in responses and presenting one of the lowest hallucination rates among current models.',
            },
          },
          {
            label: { pt: 'Alucinação de memória', en: 'Memory hallucination' },
            rating: { pt: 'Muito alta', en: 'Very high' },
            ratingLevel: 1,
            description: {
              pt: 'Embora a alucinação de fatos e conteúdos seja baixa, a alucinação de memória do Gemini é muito alta. Ele constantemente fixa informações por um longo período, insiste que você é especialista em algo que talvez tenha feito meses atrás e, em alguns casos, coisas que ele deveria lembrar simplesmente não sabe. O problema aparece tanto na memória global quanto na memória dentro do próprio chat. Ele mistura muito as informações, atualiza lembranças de forma confusa e às vezes cria uma continuidade que não existe. O curioso é que existe um contraste enorme: ao mesmo tempo em que ele tem precisão absurda para fatos, ele tem uma das piores precisões quando o assunto é memória.',
              en: 'Although content hallucination is low, Gemini\'s memory hallucination is very high. It constantly fixates on information for a long time, insists you are an expert in something you may have done months ago, and in some cases simply does not know things it should remember. The problem appears both in global memory and in memory within the chat itself. It mixes up information, updates memories confusingly and sometimes creates a continuity that does not exist. Curiously, there is a huge contrast: while it has absurd precision for facts, it has one of the worst precisions when it comes to memory.',
            },
          },
          {
            label: { pt: 'Maria-vai-com-as-outras', en: 'Sycophancy' },
            rating: { pt: 'Muito baixo', en: 'Very low' },
            ratingLevel: 5,
            description: {
              pt: 'Esse é um dos pontos mais fortes do Gemini 3.1 Pro. Se você está falando besteira, ele tem uma alta capacidade de apontar o que está errado na sua fala. Ele não simplesmente segue uma lógica equivocada tentando encontrar motivos para transformar aquilo em algo certo. Isso é maravilhoso e representa um diferencial muito forte do Gemini 3.1 Pro. É justamente por isso que ele é tão bom para estudo: ele não apenas responde, mas também corrige o raciocínio quando percebe que algo está errado.',
              en: "This is one of Gemini 3.1 Pro's strongest points. If you are saying something wrong, it has a high capacity to point out what is wrong in your statement. It does not simply follow flawed logic trying to find reasons to turn it into something right. This is wonderful and represents a very strong differentiator of Gemini 3.1 Pro. It is precisely because of this that it is so good for studying: it does not just respond, but also corrects reasoning when it notices something is wrong.",
            },
          },
        ],
        released: '2025-03',
      },
    ],
    lastUpdated: '2026-04-23',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    company: 'DeepSeek AI',
    color: '#38bdf8',
    logo: '/ai-arena/deepseek.png',
    currentModel: { pt: 'DeepSeek-V3 / R1', en: 'DeepSeek-V3 / R1' },
    rank: 4,
    tier: 'A',
    scores: { overall: 8.0, conversational: 7.5, didactic: 7.8, precise: 8.4, intelligent: 8.8 },
    verdict: {
      pt: 'A surpresa chinesa — absurdamente barato, R1 é elite em raciocínio, mas perde em UX e confiabilidade.',
      en: 'The Chinese surprise — absurdly cheap, R1 is elite in reasoning, but loses in UX and reliability.',
    },
    review: {
      pt: 'O DeepSeek foi a maior surpresa do mercado de LLMs desde o ChatGPT. O R1 compete de frente com o o3 da OpenAI em raciocínio matemático e científico, custando uma fração do preço. Para quem quer rodar open source localmente, é uma opção séria. O problema principal para meu uso é a questão de privacidade, a qualidade de escrita em PT, e uma interface que parece beta eterno.',
      en: 'DeepSeek was the biggest LLM market surprise since ChatGPT. R1 competes head-to-head with OpenAI\'s o3 in mathematical reasoning, at a fraction of the price. For open source local use, it\'s a serious option. Main problems: privacy concern, Portuguese writing quality, and an interface that feels like eternal beta.',
    },
    versions: [
      {
        id: 'deepseek-r1',
        name: 'DeepSeek-R1',
        description: {
          pt: 'O modelo de raciocínio do DeepSeek. Compete com o o3 da OpenAI em matemática e ciência, com open weights.',
          en: 'DeepSeek\'s reasoning model. Competes with OpenAI\'s o3 in math and science, with open weights.',
        },
        pros: {
          pt: ['Raciocínio matemático de elite', 'Open source — pode rodar localmente', 'Custo de API mínimo'],
          en: ['Elite mathematical reasoning', 'Open source — can run locally', 'Minimal API cost'],
        },
        cons: {
          pt: ['Escrita em PT muito fraca', 'Alucinações frequentes em contexto geral', 'Dados processados em servidores chineses'],
          en: ['Very weak Portuguese writing', 'Frequent hallucinations in general context', 'Data processed on Chinese servers'],
        },
        released: '2025-01',
      },
      {
        id: 'deepseek-v3',
        name: 'DeepSeek-V3',
        description: {
          pt: 'Modelo principal de chat e código. Competitivo com GPT-4o em muitas tarefas, mas por uma fração do custo.',
          en: 'Main chat and code model. Competitive with GPT-4o in many tasks, at a fraction of the cost.',
        },
        pros: {
          pt: ['Excelente em código', 'Custo muito baixo', 'Capacidade surpreendente para o preço'],
          en: ['Excellent in code', 'Very low cost', 'Surprising capability for the price'],
        },
        cons: {
          pt: ['Interface ruim', 'Menos confiável que os líderes em geral'],
          en: ['Poor interface', 'Less reliable than the leaders in general'],
        },
        released: '2024-12',
      },
    ],
    lastUpdated: '2026-04-23',
  },
  {
    id: 'grok',
    name: 'Grok',
    company: 'xAI',
    color: '#a1a1aa',
    logo: '/ai-arena/grok.png',
    currentModel: { pt: 'Grok 3', en: 'Grok 3' },
    rank: 5,
    tier: 'B',
    scores: { overall: 7.4, conversational: 7.8, didactic: 7.2, precise: 7.5, intelligent: 7.8 },
    verdict: {
      pt: 'Melhorou com o Grok 3, mas ainda atrás dos líderes — o diferencial é o acesso ao X em tempo real.',
      en: 'Improved with Grok 3, but still behind the leaders — the differentiator is real-time X access.',
    },
    review: {
      pt: 'O Grok 3 foi uma virada real para o xAI — saiu de "curiosidade" para "concorrente legítimo". O maior diferencial é o acesso a dados em tempo real do X/Twitter. Para desenvolvimento e análise de dados, ainda fica atrás do Claude e do GPT-4o. Para o meu uso do dia a dia, não entra na rotina, mas a velocidade de evolução do xAI é impressionante.',
      en: 'Grok 3 was a real turning point for xAI — went from "curiosity" to "legitimate competitor." Real-time X/Twitter data is the biggest differentiator. For development and data analysis, still behind Claude and GPT-4o. Doesn\'t make it into my daily routine, but xAI\'s evolution speed is impressive.',
    },
    versions: [
      {
        id: 'grok-3',
        name: 'Grok 3',
        description: {
          pt: 'A versão mais capaz do xAI. Melhor em raciocínio, código e compreensão que versões anteriores, com acesso em tempo real ao X.',
          en: 'xAI\'s most capable version. Better in reasoning, code and understanding than previous versions, with real-time X access.',
        },
        pros: {
          pt: ['Acesso ao X em tempo real', 'Melhor raciocínio que versões anteriores', 'Personalidade mais direta e útil'],
          en: ['Real-time X access', 'Better reasoning than previous versions', 'More direct and useful personality'],
        },
        cons: {
          pt: ['Ainda atrás dos líderes em tarefas técnicas', 'Acesso vinculado ao X Premium', 'Menos didático que Claude e Gemini'],
          en: ['Still behind leaders on technical tasks', 'Access tied to X Premium', 'Less didactic than Claude and Gemini'],
        },
        released: '2025-02',
      },
    ],
    lastUpdated: '2026-04-23',
  },
]

// ─── Arena categories ──────────────────────────────────────────────────────────

export const categories: ArenaCategory[] = [
  {
    id: 'agi',
    slug: 'agi',
    icon: '🌐',
    color: '#c084fc',
    name: { pt: 'AGI', en: 'AGI' },
    description: {
      pt: 'A categoria que eu mais gosto. A ideia aqui é simples: dentro de um único aplicativo, sem abrir terminal, IDE ou qualquer outra ferramenta, o quão longe a IA consegue ir sozinha? Você pede, ela executa. Gera imagem, áudio, vídeo, acessa seu calendário, organiza arquivos na sua máquina, pesquisa sem ser pedida, integra com outros softwares. Tudo de um lugar só — como se ela lesse a sua mente.',
      en: 'The category I enjoy the most. The idea here is simple: within a single app, without opening a terminal, IDE or any other tool, how far can the AI go on its own? You ask, it executes. Generates images, audio, video, accesses your calendar, organizes files on your machine, searches without being asked, integrates with other software. All from one place — as if it reads your mind.',
    },
    categoryNote: {
      pt: 'Regra desta categoria: avaliação feita exclusivamente de dentro da aplicação de chat de cada IA. Nada de CLI, IDE ou integrações externas avulsas. Se a pessoa precisar sair do app para qualquer coisa, já é uma limitação. Imagine alguém que não é da área de tecnologia pedindo algo — a IA tem que resolver, ponto. Aqui também entra uma questão importante que ainda limita muito tudo isso: segurança e privacidade. Dar permissões amplas a uma IA é uma decisão séria, e isso pesa na análise.',
      en: 'Rule of this category: evaluation done exclusively from within each AI\'s chat application. No CLI, IDE or standalone external integrations. If the person needs to leave the app for anything, that is already a limitation. Imagine someone who is not in tech asking for something — the AI has to handle it, period. An important issue that still heavily limits all of this also comes into play here: security and privacy. Giving broad permissions to an AI is a serious decision, and that weighs in the analysis.',
    },
    evaluatedParams: [
      { pt: 'Autonomia de execução (quão longe vai sem ser guiada)', en: 'Execution autonomy (how far it goes without being guided)' },
      { pt: 'Geração multimodal (imagem, áudio e vídeo no mesmo lugar)', en: 'Multimodal generation (image, audio and video in one place)' },
      { pt: 'Integrações com aplicativos externos (calendário, e-mail, etc.)', en: 'External app integrations (calendar, email, etc.)' },
      { pt: 'Ações na máquina (organizar arquivos, interagir com o sistema)', en: 'Machine actions (organizing files, interacting with the system)' },
      { pt: 'Autonomia de pesquisa (pesquisa sem ser pedida)', en: 'Search autonomy (searches without being asked)' },
      { pt: 'Segurança e privacidade (como lida com permissões amplas)', en: 'Security and privacy (how it handles broad permissions)' },
    ],
    entries: [
      { id: 'chatgpt', name: 'ChatGPT', company: 'OpenAI', color: '#e8e8e8', logo: '/ai-arena/chatgpt.png', rank: 1, score: 9.0, verdict: { pt: 'Ecossistema mais completo dentro de um único app', en: 'Most complete ecosystem within a single app' }, hasDetail: true },
      { id: 'gemini', name: 'Gemini', company: 'Google', color: '#4ade80', logo: '/ai-arena/gemini.png', rank: 2, score: 8.6, verdict: { pt: 'Integração nativa com Google Workspace é o grande diferencial', en: 'Native Google Workspace integration is the big differentiator' }, hasDetail: true },
      { id: 'claude', name: 'Claude', company: 'Anthropic', color: '#D97757', logo: '/ai-arena/claude.png', rank: 3, score: 7.8, verdict: { pt: 'Poderoso no raciocínio, mais limitado em integrações nativas', en: 'Powerful in reasoning, more limited in native integrations' }, hasDetail: true },
      { id: 'grok', name: 'Grok', company: 'xAI', color: '#a1a1aa', logo: '/ai-arena/grok.png', rank: 4, score: 7.2, verdict: { pt: 'X como hub de integração, ainda em expansão', en: 'X as integration hub, still expanding' }, hasDetail: true },
      { id: 'deepseek', name: 'DeepSeek', company: 'DeepSeek AI', color: '#38bdf8', logo: '/ai-arena/deepseek.png', rank: 5, score: 6.1, verdict: { pt: 'Capacidades autônomas dentro do app ainda muito limitadas', en: 'Autonomous capabilities within the app still very limited' }, hasDetail: true },
    ],
  },
  {
    id: 'texto-raciocinio',
    slug: 'texto-raciocinio',
    icon: '🧠',
    color: '#D97757',
    name: { pt: 'Texto & Raciocínio', en: 'Text & Reasoning' },
    description: {
      pt: 'Geração de texto pura — foco em estudo, aprendizado e conversas gerais. As minhas perguntas normalmente são de TI, programação e ciências, mas às vezes vou além e pergunto sobre biologia, física ou qualquer coisa que quero entender melhor. O critério: o modelo vai além do óbvio? Explica o raciocínio passo a passo? Oferece abordagens otimizadas? É preciso e prestativo — ou só confirma o que eu já disse? E alucinação conta muito: se ele inventa fatos com confiança, desce no ranking.',
      en: 'Pure text generation — focused on study, learning and general conversations. My questions are usually about IT, programming and sciences, but sometimes I go beyond and ask about biology, physics or anything I want to understand better. The criterion: does the model go beyond the obvious? Does it explain reasoning step by step? Offer optimized approaches? Is it precise and helpful — or does it just confirm what I already said? And hallucination counts a lot: if it confidently makes up facts, it drops in the ranking.',
    },
    categoryNote: {
      pt: 'Aqui avalio apenas texto e raciocínio puro — sem chamadas externas à internet, sem pesquisa na web, sem plugins. Tudo dentro da conversa. Se você quer ver como cada IA pesquisa, isso está na categoria Pesquisa & Busca. Os 11 parâmetros abaixo são avaliados em todas as IAs desta categoria e podem aumentar conforme eu identifique a necessidade de novos critérios.',
      en: 'Here I evaluate only pure text and reasoning — no external internet calls, no web search, no plugins. Everything within the conversation. If you want to see how each AI searches, that is in the Research & Search category. The 11 parameters below are evaluated across all AIs in this category and may grow as I identify the need for new criteria.',
    },
    evaluatedParams: [
      { pt: 'Inteligência', en: 'Intelligence' },
      { pt: 'Precisão', en: 'Precision' },
      { pt: 'Didática', en: 'Teaching ability' },
      { pt: 'Lidar com grandes inputs', en: 'Handling large inputs' },
      { pt: 'Análise multimodal', en: 'Multimodal analysis' },
      { pt: 'Conversa humanizada', en: 'Humanized conversation' },
      { pt: 'Criação de conteúdo', en: 'Content creation' },
      { pt: 'Gerar grandes outputs', en: 'Generating large outputs' },
      { pt: 'Alucinação interna', en: 'Internal hallucination' },
      { pt: 'Maria-vai-com-as-outras', en: 'Sycophancy' },
      { pt: 'Alucinação de memória', en: 'Memory hallucination' },
    ],
    entries: [
      { id: 'gemini', name: 'Gemini', company: 'Google', color: '#4ade80', logo: '/ai-arena/gemini.png', rank: 1, score: 0.70, verdict: { pt: 'Contexto longo, respostas ricas e integração com Search em tempo real', en: 'Long context, rich responses and real-time Search integration' }, hasDetail: true },
      { id: 'chatgpt', name: 'ChatGPT', company: 'OpenAI', color: '#e8e8e8', logo: '/ai-arena/chatgpt.png', rank: 2, score: 0.46, verdict: { pt: 'Sólido, mas concordância excessiva e alucinação interna no nível médio', en: 'Solid, but excessive sycophancy and medium-level internal hallucination' }, hasDetail: true },
      { id: 'claude', name: 'Claude', company: 'Anthropic', color: '#D97757', logo: '/ai-arena/claude.png', rank: 3, score: 8.6, verdict: { pt: 'Escrita mais natural e raciocínio profundo sem perder o contexto', en: 'Most natural writing and deep reasoning without losing context' }, hasDetail: true },
      { id: 'grok', name: 'Grok', company: 'xAI', color: '#a1a1aa', logo: '/ai-arena/grok.png', rank: 4, score: 7.6, verdict: { pt: 'Acesso ao X em tempo real, raciocínio ainda amadurecendo', en: 'Real-time X access, reasoning still maturing' }, hasDetail: true },
      { id: 'deepseek', name: 'DeepSeek', company: 'DeepSeek AI', color: '#38bdf8', logo: '/ai-arena/deepseek.png', rank: 5, score: 7.2, verdict: { pt: 'R1 forte em lógica, mas fraco em escrita e tende a alucinar em PT', en: 'R1 strong in logic, but weak in writing and tends to hallucinate in PT' }, hasDetail: true },
    ],
  },
  {
    id: 'codando-na-ide',
    slug: 'codando-na-ide',
    icon: '💻',
    color: '#38bdf8',
    name: { pt: 'Codando na IDE', en: 'Coding in the IDE' },
    description: {
      pt: 'Modelos avaliados diretamente no VS Code — Gemini via Antigravity, Claude e ChatGPT via suas integrações nativas. O foco aqui é prático: o quanto a IA consegue ir longe dentro do ambiente de desenvolvimento real, resolvendo problemas de verdade.',
      en: 'Models evaluated directly in VS Code — Gemini via Antigravity, Claude and ChatGPT via their native integrations. The focus here is practical: how far the AI can go inside a real development environment, solving real problems.',
    },
    categoryNote: {
      pt: 'Aqui não avalio estilo de código, padrões de projeto ou boas práticas — se funcionou bem, com boa performance e seguiu o que foi pedido, está aprovado. O que importa é a taxa de sucesso em relação à complexidade da tarefa. Código feio que funciona rápido vale mais do que código bonito que não entrega. Os parâmetros abaixo refletem isso.',
      en: 'Here I do not evaluate code style, design patterns or best practices — if it worked well, with good performance and followed what was asked, it passes. What matters is the success rate relative to task complexity. Ugly code that runs fast is worth more than beautiful code that does not deliver. The parameters below reflect this.',
    },
    evaluatedParams: [
      { pt: 'Inteligência (taxa de sucesso vs. complexidade)', en: 'Intelligence (success rate vs. complexity)' },
      { pt: 'Performance', en: 'Performance' },
      { pt: 'Cybersecurity (análise de vulnerabilidades)', en: 'Cybersecurity (vulnerability analysis)' },
      { pt: 'UX/UI', en: 'UX/UI' },
      { pt: 'Precisão', en: 'Precision' },
    ],
    entries: [
      { id: 'claude', name: 'Claude', company: 'Anthropic', color: '#D97757', logo: '/ai-arena/claude.png', rank: 1, score: 9.5, verdict: { pt: 'Referência em código no VS Code', en: 'Code reference in VS Code' }, hasDetail: true },
      { id: 'chatgpt', name: 'ChatGPT', company: 'OpenAI', color: '#e8e8e8', logo: '/ai-arena/chatgpt.png', rank: 2, score: 9.0, verdict: { pt: 'Sólido e capaz em tarefas complexas', en: 'Solid and capable on complex tasks' }, hasDetail: true },
      { id: 'gemini', name: 'Gemini', company: 'Google', color: '#4ade80', logo: '/ai-arena/gemini.png', rank: 3, score: 8.2, verdict: { pt: 'Forte via Antigravity, inconsistente entre sessões', en: 'Strong via Antigravity, inconsistent across sessions' }, hasDetail: true },
    ],
  },
  {
    id: 'pesquisa',
    slug: 'pesquisa',
    icon: '🔍',
    color: '#a78bfa',
    name: { pt: 'Pesquisa & Busca', en: 'Research & Search' },
    description: {
      pt: 'IAs são treinadas até uma data e ficam estáticas — pesquisa e busca é o mecanismo que contorna isso. Aqui avaliamos não só o quão bem cada IA pesquisa, mas o quão inteligentemente ela usa esse recurso para se manter atualizada: versões de bibliotecas, compatibilidade de dependências, notícias recentes, conteúdo obscuro ou recém-publicado.',
      en: 'AIs are trained up to a date and become static — search and research is the mechanism that works around that. Here we evaluate not just how well each AI searches, but how intelligently it uses this resource to stay current: library versions, dependency compatibility, recent news, obscure or freshly published content.',
    },
    categoryNote: {
      pt: 'Hoje, quase toda resposta de uma IA se beneficia de uma pesquisa — para confirmar versões, checar o que mudou, ou encontrar algo que não estava no treinamento. O que avaliamos aqui é se a IA sabe disso, quando aciona a busca, quão longe ela consegue ir e o que ela faz com o que encontra.',
      en: 'Today, almost every AI response benefits from a search — to confirm versions, check what changed, or find something not in the training data. What we evaluate here is whether the AI knows this, when it triggers a search, how far it can go, and what it does with what it finds.',
    },
    evaluatedParams: [
      { pt: 'Autonomia de busca (saber quando pesquisar)', en: 'Search autonomy (knowing when to search)' },
      { pt: 'Profundidade de alcance (fontes obscuras e recentes)', en: 'Search depth (obscure and recent sources)' },
      { pt: 'Qualidade e confiabilidade das fontes', en: 'Source quality and reliability' },
      { pt: 'Navegação por links (acessar e ler URLs)', en: 'Link navigation (access and read URLs)' },
      { pt: 'Suporte a vídeo (transcrição de YouTube)', en: 'Video support (YouTube transcription)' },
      { pt: 'Atualidade das informações', en: 'Information freshness' },
    ],
    entries: [
      { id: 'gemini', name: 'Gemini', company: 'Google', color: '#4ade80', logo: '/ai-arena/gemini.png', rank: 1, score: 9.2, verdict: { pt: 'Google Search nativo + YouTube + links em tempo real', en: 'Native Google Search + YouTube + real-time links' }, hasDetail: true },
      { id: 'chatgpt', name: 'ChatGPT', company: 'OpenAI', color: '#e8e8e8', logo: '/ai-arena/chatgpt.png', rank: 2, score: 8.5, verdict: { pt: 'Browsing sólido com boa leitura de links e vídeos', en: 'Solid browsing with good link and video reading' }, hasDetail: true },
      { id: 'grok', name: 'Grok', company: 'xAI', color: '#a1a1aa', logo: '/ai-arena/grok.png', rank: 3, score: 8.1, verdict: { pt: 'X em tempo real + web search — forte em tendências', en: 'Real-time X + web search — strong on trends' }, hasDetail: true },
      { id: 'claude', name: 'Claude', company: 'Anthropic', color: '#D97757', logo: '/ai-arena/claude.png', rank: 4, score: 7.4, verdict: { pt: 'Busca disponível, mas acionada de forma mais conservadora', en: 'Search available, but triggered more conservatively' }, hasDetail: true },
      { id: 'deepseek', name: 'DeepSeek', company: 'DeepSeek AI', color: '#38bdf8', logo: '/ai-arena/deepseek.png', rank: 5, score: 6.8, verdict: { pt: 'Capacidade de busca limitada e menos integrada', en: 'Limited and less integrated search capability' }, hasDetail: true },
    ],
  },
  {
    id: 'cli',
    slug: 'cli',
    icon: '⌨️',
    color: '#fb923c',
    name: { pt: 'CLI', en: 'CLI' },
    description: {
      pt: 'Modelos avaliados no terminal — via Claude Code, Gemini CLI, ChatGPT CLI e similares. O foco é em execução autônoma de tarefas via linha de comando: criar arquivos, rodar scripts, navegar no sistema, encadear operações e resolver problemas sem sair do terminal.',
      en: 'Models evaluated in the terminal — via Claude Code, Gemini CLI, ChatGPT CLI and similar. The focus is on autonomous task execution via command line: creating files, running scripts, navigating the system, chaining operations and solving problems without leaving the terminal.',
    },
    entries: [
      { id: 'claude', name: 'Claude', company: 'Anthropic', color: '#D97757', logo: '/ai-arena/claude.png', rank: 1, score: 9.2, verdict: { pt: 'Claude Code é referência em execução autônoma via CLI', en: 'Claude Code is the reference for autonomous CLI execution' }, hasDetail: true },
      { id: 'chatgpt', name: 'ChatGPT', company: 'OpenAI', color: '#e8e8e8', logo: '/ai-arena/chatgpt.png', rank: 2, score: 8.5, verdict: { pt: 'CLI maduro com boa integração de ferramentas', en: 'Mature CLI with good tool integration' }, hasDetail: true },
    ],
  },
  {
    id: 'imagem',
    slug: 'imagem',
    icon: '🎨',
    color: '#f472b6',
    name: { pt: 'Geração de Imagem', en: 'Image Generation' },
    description: {
      pt: 'Modelos especializados em criar imagens a partir de texto — avaliados em qualidade, controle e aderência ao prompt.',
      en: 'Models specialized in creating images from text — evaluated on quality, control and prompt adherence.',
    },
    entries: [
      { id: 'midjourney', name: 'Midjourney', company: 'Midjourney', color: '#f472b6', rank: 1, score: 9.4, verdict: { pt: 'Referência absoluta em qualidade artística', en: 'Absolute reference in artistic quality' }, hasDetail: false },
      { id: 'dalle3', name: 'DALL-E 3', company: 'OpenAI', color: '#e8e8e8', rank: 2, score: 8.6, verdict: { pt: 'Melhor aderência ao prompt, integrado ao ChatGPT', en: 'Best prompt adherence, integrated with ChatGPT' }, hasDetail: false },
    ],
  },
  {
    id: 'video',
    slug: 'video',
    icon: '🎬',
    color: '#f87171',
    name: { pt: 'Geração de Vídeo', en: 'Video Generation' },
    description: {
      pt: 'IAs que transformam texto ou imagem em vídeo — avaliadas em coerência, qualidade visual e controle criativo.',
      en: 'AIs that transform text or image into video — evaluated on coherence, visual quality and creative control.',
    },
    entries: [
      { id: 'sora', name: 'Sora', company: 'OpenAI', color: '#e8e8e8', rank: 1, score: 8.8, verdict: { pt: 'Melhor coerência física e temporal do mercado', en: 'Best physical and temporal coherence on the market' }, hasDetail: false },
      { id: 'kling', name: 'Kling AI', company: 'Kuaishou', color: '#38bdf8', rank: 2, score: 8.3, verdict: { pt: 'Forte concorrente asiático com ótima qualidade', en: 'Strong Asian competitor with great quality' }, hasDetail: false },
    ],
  },
  {
    id: 'audio',
    slug: 'audio',
    icon: '🎵',
    color: '#fbbf24',
    name: { pt: 'Geração de Áudio', en: 'Audio Generation' },
    description: {
      pt: 'Modelos de síntese de voz e música — avaliados em naturalidade, clonagem de voz e versatilidade.',
      en: 'Voice and music synthesis models — evaluated on naturalness, voice cloning and versatility.',
    },
    entries: [
      { id: 'elevenlabs', name: 'ElevenLabs', company: 'ElevenLabs', color: '#fbbf24', rank: 1, score: 9.5, verdict: { pt: 'Referência em síntese de voz — impossível distinguir do humano', en: 'Voice synthesis reference — impossible to distinguish from human' }, hasDetail: false },
      { id: 'openai-tts', name: 'OpenAI TTS', company: 'OpenAI', color: '#e8e8e8', rank: 2, score: 8.1, verdict: { pt: 'Sólido e barato, integrado ao ecossistema OpenAI', en: 'Solid and cheap, integrated with OpenAI ecosystem' }, hasDetail: false },
    ],
  },
]

export const modelMap = new Map(models.map(m => [m.id, m]))
export const categoryMap = new Map(categories.map(c => [c.slug, c]))
export const sortedModels = [...models].sort((a, b) => a.rank - b.rank)

export const TIER_COLOR: Record<string, string> = {
  S: '#f59e0b',
  A: '#22c55e',
  B: '#3b82f6',
  C: '#6b7280',
}
