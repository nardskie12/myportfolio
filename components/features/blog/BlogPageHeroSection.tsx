import Link from "next/link"
import { BookOpen } from "lucide-react"

export function BlogPageHeroSection() {
  return (
    <section className="border-b border-border/60 bg-muted/20 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-4">
          <BookOpen className="h-12 w-12 text-primary sm:h-14 sm:w-14" />
        </div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Seafood Notes
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground sm:text-lg">
          Articles about fish, shellfish, recipes, and sustainability —
          filter by category and open a post for the full story.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <Link
            href="/categories"
            className="rounded-md border border-border/80 bg-background px-3 py-1.5 font-medium text-primary underline-offset-4 hover:underline"
          >
            Browse by category route
          </Link>
          <Link
            href="/archive"
            className="rounded-md border border-border/80 bg-background px-3 py-1.5 font-medium text-primary underline-offset-4 hover:underline"
          >
            Date archive
          </Link>
        </div>
      </div>
    </section>
  )
}
