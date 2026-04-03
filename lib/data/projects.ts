export type PortfolioProject = {
  id: string
  title: string
  description: string
  stack: string[]
  imageSrc: string
  href: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "ocean-ui",
    title: "Ocean UI Kit",
    description:
      "Dummy design system exploration for coastal-themed dashboards and marketing pages.",
    stack: ["Next.js", "Tailwind CSS", "Figma"],
    imageSrc: "/profile1.jpg",
    href: "https://example.com",
  },
  {
    id: "tide-tracker",
    title: "Tide Tracker PWA",
    description:
      "Placeholder project for offline-friendly tide charts and saved harbors.",
    stack: ["React", "TypeScript", "IndexedDB"],
    imageSrc: "/profile1.jpg",
    href: "https://example.com",
  },
  {
    id: "recipe-api",
    title: "Seafood Recipe API",
    description:
      "Mock REST API for tagging recipes, allergens, and seasonal availability.",
    stack: ["Node.js", "Express", "PostgreSQL"],
    imageSrc: "/profile1.jpg",
    href: "https://example.com",
  },
  {
    id: "portfolio-v2",
    title: "Portfolio v2",
    description:
      "This site: a Next.js portfolio with theme switching and content sections.",
    stack: ["Next.js", "next-themes", "shadcn/ui"],
    imageSrc: "/profile1.jpg",
    href: "https://example.com",
  },
]
