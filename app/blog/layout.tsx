import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dummy seafood-themed articles: recipes, shellfish, fish, and sustainability.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
