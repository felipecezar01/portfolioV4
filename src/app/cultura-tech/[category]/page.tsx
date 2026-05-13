import { notFound } from 'next/navigation'
import { culturaTechCategories, getCulturaTechCategory } from '@/data/culturaTech'
import CulturaTechCategoryClient from './CulturaTechCategoryClient'

export function generateStaticParams() {
  return culturaTechCategories.map(category => ({ category: category.slug }))
}

export const dynamicParams = false

export default async function CulturaTechCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category: categorySlug } = await params
  const category = getCulturaTechCategory(categorySlug)

  if (!category) notFound()

  return <CulturaTechCategoryClient category={category} />
}
