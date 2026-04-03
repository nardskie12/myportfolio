import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Email and social links to reach Bernard Bioco.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
