import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Categories",
  description: "Blog posts filtered by category path (catch-all route).",
}

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
