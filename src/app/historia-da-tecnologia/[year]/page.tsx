import { notFound } from 'next/navigation'
import { historyByYear, yearsWithEntries, HISTORY_START, HISTORY_END } from '@/data/historiaTecnologia'
import HistoriaYearClient from './HistoriaYearClient'

export function generateStaticParams() {
  return yearsWithEntries.map(year => ({ year: String(year) }))
}

export const dynamicParams = true

function getReturnHref(value?: string | string[]) {
  const raw = Array.isArray(value) ? value[0] : value
  const pageNumber = Number(raw)

  if (!Number.isInteger(pageNumber) || pageNumber <= 1) return '/historia-da-tecnologia'

  return `/historia-da-tecnologia?page=${pageNumber}`
}

export default async function HistoriaYearPage({
  params,
  searchParams,
}: {
  params: Promise<{ year: string }>
  searchParams?: Promise<{ from?: string | string[] }>
}) {
  const { year: yearStr } = await params
  const query = await searchParams
  const year = parseInt(yearStr, 10)

  if (isNaN(year) || year < HISTORY_START || year > HISTORY_END) notFound()

  const entry = historyByYear.get(year) ?? null

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '56px' }}>
      <HistoriaYearClient year={year} entry={entry} returnHref={getReturnHref(query?.from)} />
    </main>
  )
}
