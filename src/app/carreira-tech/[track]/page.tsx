import { notFound } from 'next/navigation'
import { getCareerTrack, careerTracks } from '@/data/carreiraTech'
import CarreiraTechTrackClient from './CarreiraTechTrackClient'

export function generateStaticParams() {
  return careerTracks.map(t => ({ track: t.slug }))
}

export const dynamicParams = false

export default async function CarreiraTechTrackPage({
  params,
}: {
  params: Promise<{ track: string }>
}) {
  const { track: trackSlug } = await params
  const track = getCareerTrack(trackSlug)

  if (!track) notFound()

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '56px' }}>
      <CarreiraTechTrackClient track={track} />
    </main>
  )
}
