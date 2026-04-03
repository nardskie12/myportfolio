type CategoriesHeroSectionProps = {
  segments: string[] | undefined
}

export function CategoriesHeroSection({
  segments,
}: CategoriesHeroSectionProps) {
  const path =
    segments && segments.length > 0 ? segments.join(" / ") : "All categories"

  return (
    <section className="border-b border-border/60 bg-muted/20 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Category browse
        </h1>
        <p className="text-muted-foreground sm:text-lg">
          Catch-all route:{" "}
          <span className="font-medium text-foreground">{path}</span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Segments are resolved from the URL only — site root is not part of the
          catch-all array.
        </p>
      </div>
    </section>
  )
}
