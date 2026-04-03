import type { Metadata } from "next"

import { ArchiveHeroSection } from "@/components/features/archive/ArchiveHeroSection"
import { ArchivePageShellSection } from "@/components/features/archive/ArchivePageShellSection"
import { ArchivePostListSection } from "@/components/features/archive/ArchivePostListSection"
import { formatArchiveLabel, getPostsByDateSegments } from "@/lib/blog-queries"

type ArchivePageProps = {
  params: Promise<{ date?: string[] }>
}

export async function generateMetadata({
  params,
}: ArchivePageProps): Promise<Metadata> {
  const { date } = await params
  return {
    title: `Archive — ${formatArchiveLabel(date)}`,
    description: "Filter blog posts by published date.",
  }
}

export default async function ArchivePage({ params }: ArchivePageProps) {
  const { date } = await params
  const posts = getPostsByDateSegments(date)

  return (
    <ArchivePageShellSection>
      <ArchiveHeroSection dateSegments={date} />
      <ArchivePostListSection posts={posts} />
    </ArchivePageShellSection>
  )
}
