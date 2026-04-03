import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome — Bernard Bioco, full stack developer and UI/UX designer.",
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
