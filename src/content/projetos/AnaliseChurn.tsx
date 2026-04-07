'use client'

import { useLang } from '@/context/LangContext'

const content = {
  pt: {
    introTitle: 'O custo oculto da inação bancária',
    intro1: <>Instituições financeiras perdem bilhões anualmente por não agirem a tempo quando um cliente decide encerrar sua conta. A retenção tradicional é baseada em reações tardias. O desafio aqui foi <strong>prever o comportamento de evasão (Churn)</strong> e engatilhar uma ação de retenção automática antes que a decisão de cancelamento fosse tomada — mantendo o fator humano na aprovação final.</>,

    mlTitle: 'Random Forest em Dados Históricos',
    ml1: <>Utilizei o clássico <strong>Bank Customer Churn Dataset</strong> do Kaggle, contendo 10.000 clientes com variáveis transacionais e demográficas. Construí um pipeline de Machine Learning escalável utilizando <strong>Scikit-Learn</strong>. O modelo <strong>Random Forest</strong> obteve alta acurácia na identificação dos padrões de evasão — como saldos decrescentes e inatividade prolongada —, calculando a probabilidade de risco em tempo real.</>,
    ml2: <>A distribuição de classes é desbalanceada: a maioria dos clientes não cancela. Isso exige atenção especial nas métricas de avaliação — acurácia bruta é enganosa. O foco recai sobre <strong>precision, recall e F1-score</strong> para a classe minoritária (churners). O pipeline inclui encoding de variáveis categóricas, normalização, balanceamento com SMOTE e validação cruzada.</>,

    genaiTitle: 'Agindo sobre a previsão',
    genai1: <>Identificar o risco é apenas o primeiro passo. O diferencial do sistema está no <em>Agentic Workflow</em>. Quando o Random Forest aponta um risco de churn superior a <strong>70%</strong>, o sistema aciona automaticamente a <strong>API do Google Gemini</strong>. A IA analisa os motivos específicos daquele cliente e elabora um e-mail empático e estratégico oferecendo condições de retenção.</>,
    genai2: <>O gerente <strong>aprova ou refina o texto final</strong>, unindo o rigor analítico do Machine Learning com a criatividade da Inteligência Artificial em escala. O resultado é um sistema híbrido que transforma uma previsão fria de probabilidade em uma ação humana e personalizada.</>,

  },
  en: {
    introTitle: 'The hidden cost of banking inaction',
    intro1: <>Financial institutions lose billions annually by failing to act in time when a customer decides to close their account. Traditional retention is based on late reactions. The challenge here was to <strong>predict churn behavior</strong> and trigger an automatic retention action before the cancellation decision was made — keeping the human factor in the final approval.</>,

    mlTitle: 'Random Forest on Historical Data',
    ml1: <>I used the classic <strong>Bank Customer Churn Dataset</strong> from Kaggle, containing 10,000 customers with transactional and demographic variables. I built a scalable Machine Learning pipeline using <strong>Scikit-Learn</strong>. The <strong>Random Forest</strong> model achieved high accuracy in identifying evasion patterns — such as declining balances and prolonged inactivity — calculating risk probability in real time.</>,
    ml2: <>The class distribution is imbalanced: most customers don't churn. This requires special attention on evaluation metrics — raw accuracy is misleading. The focus falls on <strong>precision, recall, and F1-score</strong> for the minority class (churners). The pipeline includes categorical encoding, normalization, SMOTE balancing, and cross-validation.</>,

    genaiTitle: 'Acting on the prediction',
    genai1: <>Identifying the risk is only the first step. The differentiator of the system lies in the <em>Agentic Workflow</em>. When the Random Forest flags a churn risk above <strong>70%</strong>, the system automatically triggers the <strong>Google Gemini API</strong>. The AI analyzes the specific reasons for that customer and drafts an empathetic, strategic email offering retention conditions.</>,
    genai2: <>The manager <strong>approves or refines the final text</strong>, combining the analytical rigor of Machine Learning with the creativity of Generative AI at scale. The result is a hybrid system that turns a cold probability prediction into a human, personalized action.</>,

  },
}

export default function AnaliseChurn() {
  const { lang } = useLang()
  const tx = content[lang]

  return (
    <div className="mdx-content">

      <h2>{tx.introTitle}</h2>
      <p>{tx.intro1}</p>
      <hr />

      <h2>{tx.mlTitle}</h2>
      <p>{tx.ml1}</p>
      <p>{tx.ml2}</p>
      <hr />

      <h2>{tx.genaiTitle}</h2>
      <p>{tx.genai1}</p>
      <p>{tx.genai2}</p>

    </div>
  )
}
