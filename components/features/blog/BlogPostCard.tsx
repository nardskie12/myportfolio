import Link from "next/link"

import type { BlogPost } from "@/lib/data/blog-posts"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type BlogPostCardProps = {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const date = new Date(post.publishedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="h-full border-border/80 transition-colors hover:border-primary/35 hover:shadow-md">
        <CardHeader>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{post.categoryLabel}</Badge>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <CardTitle className="text-lg transition-colors group-hover:text-primary sm:text-xl">
            {post.title}
          </CardTitle>
          <CardDescription>{post.excerpt}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {post.readTimeMinutes} min read
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
