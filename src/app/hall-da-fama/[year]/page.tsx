import { notFound } from 'next/navigation'
import { hallByYear, yearsWithEntries, HALL_START, HALL_END } from '@/data/hallOfFame'
import HallYearClient from './HallYearClient'

export function generateStaticParams() {
  return yearsWithEntries.map(year => ({ year: String(year) }))
}

export const dynamicParams = true

export default async function HallYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year: yearStr } = await params
  const year = parseInt(yearStr, 10)

  if (isNaN(year) || year < HALL_START || year > HALL_END) notFound()

  const entry = hallByYear.get(year) ?? null

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '56px' }}>
      <HallYearClient year={year} entry={entry} />
    </main>
  )
}
