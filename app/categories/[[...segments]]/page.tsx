import type { Metadata } from "next"

import { CategoriesHeroSection } from "@/components/features/categories/CategoriesHeroSection"
import { CategoriesPageShellSection } from "@/components/features/categories/CategoriesPageShellSection"
import { CategoriesPostListSection } from "@/components/features/categories/CategoriesPostListSection"
import { getPostsByCategorySegments } from "@/lib/blog-queries"

type CategoriesPageProps = {
  params: Promise<{ segments?: string[] }>
}

export async function generateMetadata({
  params,
}: CategoriesPageProps): Promise<Metadata> {
  const { segments } = await params
  const path = segments?.length ? segments.join(" / ") : "All"
  return {
    title: `Categories — ${path}`,
    description: "Browse seafood blog posts by category path.",
  }
}

export default async function CategoriesPage({ params }: CategoriesPageProps) {
  const { segments } = await params
  const posts = getPostsByCategorySegments(segments ?? [])

  return (
    <CategoriesPageShellSection>
      <CategoriesHeroSection segments={segments} />
      <CategoriesPostListSection posts={posts} />
    </CategoriesPageShellSection>
  )
}
