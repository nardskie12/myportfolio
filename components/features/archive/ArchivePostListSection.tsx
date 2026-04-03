import type { BlogPost } from "@/lib/data/blog-posts"
import { BlogPostCard } from "@/components/features/blog/BlogPostCard"

type ArchivePostListSectionProps = {
  posts: BlogPost[]
}

export function ArchivePostListSection({ posts }: ArchivePostListSectionProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <BlogPostCard post={post} />
          </li>
        ))}
      </ul>
      {posts.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          No posts match this date filter.
        </p>
      )}
    </section>
  )
}
