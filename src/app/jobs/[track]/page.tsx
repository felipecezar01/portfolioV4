import { notFound } from 'next/navigation'
import { getJobTrack, jobTracks } from '@/data/jobs'
import JobsTrackClient from './JobsTrackClient'

export function generateStaticParams() {
  return jobTracks.map(t => ({ track: t.slug }))
}

export const dynamicParams = false

export default async function JobsTrackPage({
  params,
}: {
  params: Promise<{ track: string }>
}) {
  const { track: trackSlug } = await params
  const track = getJobTrack(trackSlug)

  if (!track) notFound()

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '56px' }}>
      <JobsTrackClient track={track} />
    </main>
  )
}
