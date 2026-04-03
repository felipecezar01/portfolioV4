'use client'

import { useLang } from '@/context/LangContext'

const content = {
  pt: {
    placeholder: 'Este projeto analisa o financiamento e o gasto das campanhas eleitorais das Eleições Gerais de 2022 no Brasil, cruzando dados do TSE sobre candidatos, partidos e valores declarados para identificar padrões de investimento por cargo, estado e resultado eleitoral. A documentação completa será publicada em breve.',
  },
  en: {
    placeholder: 'This project analyzes the financing and spending of electoral campaigns in the 2022 Brazilian General Elections, cross-referencing TSE data on candidates, parties, and declared amounts to identify investment patterns by office, state, and electoral outcome. Full documentation coming soon.',
  },
}

export default function EleicoesCampanhas2022() {
  const { lang } = useLang()
  const tx = content[lang]

  return (
    <div className="mdx-content">
      <p>{tx.placeholder}</p>
    </div>
  )
}
