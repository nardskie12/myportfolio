import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogPostBodySection } from "@/components/features/blog/BlogPostBodySection"
import { BlogPostHeroSection } from "@/components/features/blog/BlogPostHeroSection"
import { BlogPageShellSection } from "@/components/features/blog/BlogPageShellSection"
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog-posts"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) {
    return { title: "Not found" }
  }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) {
    notFound()
  }

  return (
    <BlogPageShellSection>
      <BlogPostHeroSection post={post} />
      <BlogPostBodySection post={post} />
    </BlogPageShellSection>
  )
}
