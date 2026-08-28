import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyMobileCTA } from '@/components/common/StickyMobileCTA'
import { HeroSection } from '@/components/sections/HeroSection'
import { VSLSection } from '@/components/sections/VSLSection'
import { HowWeWorkSection } from '@/components/sections/HowWeWorkSection'
import { ConsultingSection } from '@/components/sections/ConsultingSection'
import { SuccessStoriesSection } from '@/components/sections/SuccessStoriesSection'
import { AboutSpecialistSection } from '@/components/sections/AboutSpecialistSection'
import { FinalFormCTASection } from '@/components/sections/FinalFormCTASection'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      {/* Fixed Header with Desktop Navigation and Mobile Drawer */}
      <Header />

      {/* 1. Hero Section with Copy and Lead Form */}
      <HeroSection />

      {/* 2. VSL / Conheça a Verum Section */}
      <VSLSection />

      {/* 3. Como Atuamos Section */}
      <HowWeWorkSection />

      {/* 4. Consultoria Especializada Section */}
      <ConsultingSection />

      {/* 5. Casos de Sucesso Section */}
      <SuccessStoriesSection />

      {/* 6. Sobre a Verum / Especialistas Section */}
      <AboutSpecialistSection />

      {/* 7. Formulário Final / Análise Confidencial Section */}
      <FinalFormCTASection />

      {/* Institutional Footer */}
      <Footer />

      {/* Floating CTA for Mobile Screens */}
      <StickyMobileCTA />
    </main>
  )
}
