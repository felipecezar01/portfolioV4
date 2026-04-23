'use client'

import { useEffect } from 'react'
import { useLang } from '@/context/LangContext'
import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Educacao from '@/components/Educacao'
import Jornada from '@/components/Jornada'
import Projetos from '@/components/Projetos'
import Skills from '@/components/Skills'

export default function Home() {
  const { lang } = useLang()

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    const hash = window.location.hash
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <main>
      <Hero lang={lang} />
      <Sobre lang={lang} />
      <Educacao lang={lang} />
      <Jornada lang={lang} />
      <Projetos lang={lang} />
      <Skills lang={lang} />
    </main>
  )
}