import React from 'react'
import ScrollRevealContentA from '@/components/ui/scroll-reveal-content-a'
import { especialistaItems } from '@/data/specialist.data'

export function AboutSpecialistSection() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[#071322] text-white border-t border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full bg-[url('/reduzirpressao.webp')] bg-cover bg-center bg-no-repeat opacity-5 mix-blend-luminosity" />
      </div>

      <div className="relative z-10 w-full">
        <ScrollRevealContentA
          header={
            <div className="text-left mb-6">
              <h2 className="font-serif text-[20px] sm:text-[26px] lg:text-[34px] font-normal leading-[1.2] text-white mb-3 uppercase tracking-wide">
                Verum, a maior especialista em gestão de dívidas bancárias empresariais e rurais do Brasil.
              </h2>
              <div className="h-[2px] w-8 bg-[#2b86ff] mb-3.5" />
              <p className="text-[13px] sm:text-[15px] leading-relaxed text-slate-300 font-light">
                Há mais de 15 anos a Verum vem garantindo o direito de empresários e produtores rurais quando o assunto é a dívida com banco.
              </p>
            </div>
          }
          items={especialistaItems}
          sideImage={{
            url: '/estatua1.webp',
            alt: 'Verum Especialista em Dívidas Bancárias',
          }}
        />
      </div>
    </section>
  )
}
