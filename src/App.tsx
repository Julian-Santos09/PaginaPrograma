import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { ProgramSection } from "@/components/ProgramSection"
import { CurriculumSection } from "@/components/CurriculumSection"
import { DocumentsSection } from "@/components/DocumentsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ProgramSection />
        <CurriculumSection />
        <DocumentsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
