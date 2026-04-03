import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description: "Highlighted projects and practice builds.",
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
