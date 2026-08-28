import React from 'react'
import { Shield, User, LockKeyhole } from 'lucide-react'
import { LeadForm } from '@/components/forms/LeadForm'

export function FinalFormCTASection() {
  return (
    <section id="analise" className="relative overflow-hidden bg-[#02060f] py-16 sm:py-20 text-white border-t border-white/10">
      {/* Background lion logo art placed slightly lower and more transparent */}
      <div
        className="pointer-events-none absolute -right-12 sm:-right-20 lg:-right-24 -top-2 sm:top-0 lg:top-4 w-[780px] sm:w-[950px] lg:w-[1150px] select-none z-0 opacity-[0.06] mix-blend-screen"
        aria-hidden="true"
      >
        <img
          src="/backgroundvideo.webp"
          alt=""
          className="w-full h-auto object-contain invert brightness-90 hue-rotate-[185deg] saturate-150"
        />
      </div>

      <div className="container relative z-10 max-w-6xl">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1fr_1.1fr] items-center">
          {/* Form & Mobile Badges (Order 2 on mobile, Order 1 on desktop) */}
          <div className="w-full order-2 lg:order-1 flex flex-col gap-8">
            <LeadForm id="formulario-final" />

            {/* 3 Badges on Mobile (Placed below the form) */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 lg:hidden w-full max-w-[440px] mx-auto">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#6fa8e7] shrink-0">
                  <Shield size={16} strokeWidth={1.5} />
                </div>
                <div className="text-[11px] text-slate-300 leading-tight font-medium">
                  Análise<br />sigilosa
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#6fa8e7] shrink-0">
                  <User size={16} strokeWidth={1.5} />
                </div>
                <div className="text-[11px] text-slate-300 leading-tight font-medium">
                  Atendimento<br />especializado
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#6fa8e7] shrink-0">
                  <LockKeyhole size={16} strokeWidth={1.5} />
                </div>
                <div className="text-[11px] text-slate-300 leading-tight font-medium">
                  Sem<br />compromisso
                </div>
              </div>
            </div>
          </div>

          {/* Text Content (Order 1 on mobile, Order 2 on desktop) */}
          <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-[#6fa8e7] uppercase mb-4 justify-center lg:justify-start">
              <span className="h-px w-8 bg-[#6fa8e7]/60" />
              Análise Confidencial
              <span className="h-px w-8 bg-[#6fa8e7]/60 lg:hidden" />
            </div>

            <h2 className="font-serif text-[26px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.18] text-white">
              Dívidas bancárias relevantes exigem{' '}
              <span className="text-[#6fa8e7]">estratégia, técnica e negociação especializada.</span>
            </h2>

            <div className="w-12 h-[2px] bg-[#2b86ff] my-5" />

            <p className="text-[14px] sm:text-[16px] text-slate-300 leading-relaxed max-w-lg font-normal">
              Preencha seus dados para uma análise inicial e confidencial do seu caso.
            </p>

            {/* 3 Badges on Desktop */}
            <div className="mt-10 hidden lg:grid grid-cols-3 gap-4 pt-8 border-t border-white/10 w-full">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#6fa8e7] shrink-0">
                  <Shield size={18} strokeWidth={1.5} />
                </div>
                <div className="text-[12px] text-slate-300 leading-tight font-medium">
                  Análise<br />sigilosa
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#6fa8e7] shrink-0">
                  <User size={18} strokeWidth={1.5} />
                </div>
                <div className="text-[12px] text-slate-300 leading-tight font-medium">
                  Atendimento<br />especializado
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#6fa8e7] shrink-0">
                  <LockKeyhole size={18} strokeWidth={1.5} />
                </div>
                <div className="text-[12px] text-slate-300 leading-tight font-medium">
                  Sem<br />compromisso
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
