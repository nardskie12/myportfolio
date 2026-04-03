import { formatArchiveLabel } from "@/lib/blog-queries"

type ArchiveHeroSectionProps = {
  dateSegments: string[] | undefined
}

export function ArchiveHeroSection({ dateSegments }: ArchiveHeroSectionProps) {
  const label = formatArchiveLabel(dateSegments)

  return (
    <section className="border-b border-border/60 bg-muted/20 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Archive by date
        </h1>
        <p className="text-muted-foreground sm:text-lg">
          Optional catch-all:{" "}
          <span className="font-medium text-foreground">{label}</span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Try <code className="rounded bg-muted px-1">/archive/2026</code>,{" "}
          <code className="rounded bg-muted px-1">/archive/2026/03</code>, or{" "}
          <code className="rounded bg-muted px-1">/archive/2026/03/22</code>.
        </p>
      </div>
    </section>
  )
}
