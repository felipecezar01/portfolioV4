'use client'

import { createContext, useContext, useState } from 'react'
import { Lang } from '@/types'

const LangContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
}>({ lang: 'pt', setLang: () => {} })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}