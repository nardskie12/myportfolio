import { ProjectsGridSection } from "@/components/features/projects/ProjectsGridSection"
import { ProjectsHeroSection } from "@/components/features/projects/ProjectsHeroSection"
import { ProjectsPageShellSection } from "@/components/features/projects/ProjectsPageShellSection"
import { portfolioProjects } from "@/lib/data/projects"

export default function ProjectsPage() {
  return (
    <ProjectsPageShellSection>
      <ProjectsHeroSection />
      <ProjectsGridSection projects={portfolioProjects} />
    </ProjectsPageShellSection>
  )
}
