import { notFound } from 'next/navigation'
import { hallByYear, yearsWithEntries, HALL_START, HALL_END } from '@/data/hallOfFame'
import HallYearClient from './HallYearClient'

export function generateStaticParams() {
  return yearsWithEntries.map(year => ({ year: String(year) }))
}

export const dynamicParams = true

function getReturnHref(value?: string | string[]) {
  const raw = Array.isArray(value) ? value[0] : value
  const pageNumber = Number(raw)

  if (!Number.isInteger(pageNumber) || pageNumber <= 1) return '/hall-da-fama'

  return `/hall-da-fama?page=${pageNumber}`
}

export default async function HallYearPage({
  params,
  searchParams,
}: {
  params: Promise<{ year: string }>
  searchParams?: Promise<{ from?: string | string[] }>
}) {
  const { year: yearStr } = await params
  const query = await searchParams
  const year = parseInt(yearStr, 10)

  if (isNaN(year) || year < HALL_START || year > HALL_END) notFound()

  const entry = hallByYear.get(year) ?? null

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '56px' }}>
      <HallYearClient year={year} entry={entry} returnHref={getReturnHref(query?.from)} />
    </main>
  )
}
