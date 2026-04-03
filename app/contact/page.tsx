import { ContactHeroSection } from "@/components/features/contact/ContactHeroSection"
import { ContactLinksSection } from "@/components/features/contact/ContactLinksSection"
import { ContactPageShellSection } from "@/components/features/contact/ContactPageShellSection"

export default function ContactPage() {
  return (
    <ContactPageShellSection>
      <ContactHeroSection />
      <ContactLinksSection />
    </ContactPageShellSection>
  )
}
