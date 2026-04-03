import type { Metadata } from 'next'
import { Syne, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { LangProvider } from '@/context/LangContext'
import Navbar from '@/components/Navbar'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Felipe Cezar | Portfolio',
  description: 'Engenheiro de Software & Cientista de Dados',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${syne.variable} ${jetbrains.variable}`}>
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