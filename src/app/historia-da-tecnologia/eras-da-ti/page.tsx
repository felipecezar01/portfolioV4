import ErasDaTiClient from './ErasDaTiClient'

function getReturnHref(value?: string | string[]) {
  const raw = Array.isArray(value) ? value[0] : value
  const pageNumber = Number(raw)

  if (!Number.isInteger(pageNumber) || pageNumber <= 1) return '/historia-da-tecnologia'

  return `/historia-da-tecnologia?page=${pageNumber}`
}

export default async function ErasDaTiPage({
  searchParams,
}: {
  searchParams?: Promise<{ from?: string | string[] }>
}) {
  const params = await searchParams

  return <ErasDaTiClient returnHref={getReturnHref(params?.from)} />
}
