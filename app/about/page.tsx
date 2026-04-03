import { AboutHeaderSection } from "@/components/features/about/AboutHeaderSection"
import { AboutPageShellSection } from "@/components/features/about/AboutPageShellSection"
import { AboutSkillsSection } from "@/components/features/about/AboutSkillsSection"
import { AboutStorySection } from "@/components/features/about/AboutStorySection"
import { AboutTechnologiesSection } from "@/components/features/about/AboutTechnologiesSection"

export default function AboutPage() {
  return (
    <AboutPageShellSection>
      <AboutHeaderSection />
      <AboutStorySection />
      <AboutSkillsSection />
      <AboutTechnologiesSection />
    </AboutPageShellSection>
  )
}
