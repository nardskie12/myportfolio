import { BlogListingSection } from "@/components/features/blog/BlogListingSection"
import { BlogPageHeroSection } from "@/components/features/blog/BlogPageHeroSection"
import { BlogPageShellSection } from "@/components/features/blog/BlogPageShellSection"
import { getAllBlogPosts } from "@/lib/data/blog-posts"

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <BlogPageShellSection>
      <BlogPageHeroSection />
      <BlogListingSection posts={posts} />
    </BlogPageShellSection>
  )
}
