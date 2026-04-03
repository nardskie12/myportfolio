import {
  type BlogPost,
  getAllBlogPosts,
  blogPosts,
} from "@/lib/data/blog-posts"

function normalizeSegment(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, "-")
}

/** Filter posts whose category slug path matches the catch-all segments (root not included). */
export function getPostsByCategorySegments(segments: string[]): BlogPost[] {
  if (!segments.length) {
    return getAllBlogPosts()
  }
  const joined = segments.map(normalizeSegment).join("/")
  return blogPosts.filter((p) => {
    const cat = normalizeSegment(p.categorySlug)
    return joined === cat || joined.startsWith(`${cat}/`)
  })
}

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

/** Optional date segments: [year], [year, month], or [year, month, day] — scope from site archive root. */
export function getPostsByDateSegments(date: string[] | undefined): BlogPost[] {
  if (!date || date.length === 0) {
    return getAllBlogPosts()
  }
  const [y, m, d] = date
  const year = y ? Number.parseInt(y, 10) : NaN
  if (Number.isNaN(year)) {
    return getAllBlogPosts()
  }
  const month = m !== undefined ? Number.parseInt(m, 10) : undefined
  const day = d !== undefined ? Number.parseInt(d, 10) : undefined

  return blogPosts.filter((p) => {
    const dt = new Date(p.publishedAt)
    if (dt.getFullYear() !== year) return false
    if (month !== undefined && !Number.isNaN(month)) {
      if (dt.getMonth() + 1 !== month) return false
    }
    if (day !== undefined && !Number.isNaN(day)) {
      if (dt.getDate() !== day) return false
    }
    return true
  })
}

export function formatArchiveLabel(date: string[] | undefined): string {
  if (!date || date.length === 0) return "All dates"
  const [y, m, d] = date
  if (d && m && y) {
    return `${y}-${pad(Number(m))}-${pad(Number(d))}`
  }
  if (m && y) {
    return `${y}-${pad(Number(m))}`
  }
  return y ?? "All dates"
}
