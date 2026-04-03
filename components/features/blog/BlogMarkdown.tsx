type BlogMarkdownProps = {
  content: string
}

/** Minimal markdown-style renderer for dummy posts (## headings + paragraphs). */
export function BlogMarkdown({ content }: BlogMarkdownProps) {
  const blocks = content.trim().split(/\n(?=## )/)

  return (
    <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
      {blocks.map((block, i) => {
        const trimmed = block.trim()
        if (trimmed.startsWith("## ")) {
          const without = trimmed.slice(3)
          const nl = without.indexOf("\n")
          const title = nl === -1 ? without : without.slice(0, nl)
          const body = nl === -1 ? "" : without.slice(nl + 1).trim()
          return (
            <section key={i} className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">{title}</h2>
              {body ? (
                <p className="whitespace-pre-line">{body}</p>
              ) : null}
            </section>
          )
        }
        return (
          <p key={i} className="whitespace-pre-line">
            {trimmed}
          </p>
        )
      })}
    </div>
  )
}
