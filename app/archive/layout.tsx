import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Archive",
  description: "Blog posts filtered by optional date segments.",
}

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
