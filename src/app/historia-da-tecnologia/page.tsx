import { HISTORY_END, HISTORY_START } from '@/data/historiaTecnologia'
import HistoriaPageClient from './HistoriaPageClient'

const PAGE_SIZE = 20
const TOTAL_PAGES = Math.ceil((HISTORY_END - HISTORY_START + 1) / PAGE_SIZE)

function getInitialPage(value?: string | string[]) {
  const raw = Array.isArray(value) ? value[0] : value
  const pageNumber = Number(raw)

  if (!Number.isInteger(pageNumber)) return 0

  return Math.min(TOTAL_PAGES - 1, Math.max(0, pageNumber - 1))
}

export default async function HistoriaPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string | string[] }>
}) {
  const params = await searchParams

  const initialPage = getInitialPage(params?.page)

  return <HistoriaPageClient key={initialPage} initialPage={initialPage} />
}
