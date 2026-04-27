import { HALL_END, HALL_START } from '@/data/hallOfFame'
import HallPageClient from './HallPageClient'

const PAGE_SIZE = 20
const TOTAL_PAGES = Math.ceil((HALL_END - HALL_START + 1) / PAGE_SIZE)

function getInitialPage(value?: string | string[]) {
  const raw = Array.isArray(value) ? value[0] : value
  const pageNumber = Number(raw)

  if (!Number.isInteger(pageNumber)) return 0

  return Math.min(TOTAL_PAGES - 1, Math.max(0, pageNumber - 1))
}

export default async function HallPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string | string[] }>
}) {
  const params = await searchParams

  const initialPage = getInitialPage(params?.page)

  return <HallPageClient key={initialPage} initialPage={initialPage} />
}
