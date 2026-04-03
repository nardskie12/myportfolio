"use client"

import { useMemo, useState } from "react"

import type { BlogPost } from "@/lib/data/blog-posts"
import { getBlogCategories } from "@/lib/data/blog-posts"
import { Button } from "@/components/ui/button"

import { BlogPostCard } from "./BlogPostCard"

type BlogListingSectionProps = {
  posts: BlogPost[]
}

export function BlogListingSection({ posts }: BlogListingSectionProps) {
  const categories = useMemo(() => getBlogCategories(), [])
  const [activeSlug, setActiveSlug] = useState<string | "all">("all")

  const filtered = useMemo(() => {
    if (activeSlug === "all") return posts
    return posts.filter((p) => p.categorySlug === activeSlug)
  }, [posts, activeSlug])

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            size="sm"
            variant={activeSlug === "all" ? "default" : "outline"}
            onClick={() => setActiveSlug("all")}
          >
            All
          </Button>
          {categories.map((c) => (
            <Button
              key={c.slug}
              type="button"
              size="sm"
              variant={activeSlug === c.slug ? "default" : "outline"}
              onClick={() => setActiveSlug(c.slug)}
            >
              {c.label}
            </Button>
          ))}
        </div>
      </div>

      <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-2">
        {filtered.map((post) => (
          <li key={post.slug}>
            <BlogPostCard post={post} />
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          No posts in this category yet.
        </p>
      )}
    </section>
  )
}
