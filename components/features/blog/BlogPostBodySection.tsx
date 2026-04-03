import type { BlogPost } from "@/lib/data/blog-posts"

import { BlogMarkdown } from "./BlogMarkdown"

type BlogPostBodySectionProps = {
  post: BlogPost
}

export function BlogPostBodySection({ post }: BlogPostBodySectionProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <article>
        <BlogMarkdown content={post.content} />
      </article>
      <div className="mt-10 flex flex-wrap gap-2 border-t border-border/80 pt-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border/80 bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>
    </section>
  )
}
