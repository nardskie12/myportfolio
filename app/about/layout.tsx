import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Background, skills, and technologies Bernard Bioco works with.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
