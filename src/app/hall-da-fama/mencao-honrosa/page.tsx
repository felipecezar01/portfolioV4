import MencaoHonrosaClient from './MencaoHonrosaClient'

function getReturnHref(value?: string | string[]) {
  const raw = Array.isArray(value) ? value[0] : value
  const pageNumber = Number(raw)

  if (!Number.isInteger(pageNumber) || pageNumber <= 1) return '/hall-da-fama'

  return `/hall-da-fama?page=${pageNumber}`
}

export default async function MencaoHonrosaPage({
  searchParams,
}: {
  searchParams?: Promise<{ from?: string | string[] }>
}) {
  const params = await searchParams

  return <MencaoHonrosaClient returnHref={getReturnHref(params?.from)} />
}
