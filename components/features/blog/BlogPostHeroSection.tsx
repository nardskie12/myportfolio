import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import type { BlogPost } from "@/lib/data/blog-posts"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type BlogPostHeroSectionProps = {
  post: BlogPost
}

export function BlogPostHeroSection({ post }: BlogPostHeroSectionProps) {
  const date = new Date(post.publishedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="border-b border-border/60 bg-muted/20 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </Button>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge>{post.categoryLabel}</Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
          <span className="text-sm text-muted-foreground">
            · {post.readTimeMinutes} min read
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
      </div>
    </section>
  )
}
