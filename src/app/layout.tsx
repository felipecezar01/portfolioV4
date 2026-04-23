import type { Metadata } from 'next'
import { Syne, JetBrains_Mono, Oxanium } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { LangProvider } from '@/context/LangContext'
import Navbar from '@/components/Navbar'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

const oxanium = Oxanium({
  subsets: ['latin'],
  variable: '--font-cyber',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Felipe Cezar | Portfolio',
  description: 'Desenvolvedor Fullstack & Especialista em Dados',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${syne.variable} ${jetbrains.variable} ${oxanium.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <LangProvider>
            <Navbar />
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
