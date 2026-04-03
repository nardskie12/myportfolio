import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-muted/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} Bernard Bioco. Built with Next.js.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground sm:justify-end sm:gap-6">
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <Link href="/categories" className="hover:text-foreground">
            Categories
          </Link>
          <Link href="/archive" className="hover:text-foreground">
            Archive
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
          <a
            href="https://github.com/nardskie12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
