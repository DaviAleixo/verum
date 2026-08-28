'use client'

import React from 'react'
import { Shield, Users, TrendingUp, Calendar, ArrowRight } from 'lucide-react'
import { LeadForm } from '@/components/forms/LeadForm'
import { VSLPlayer } from '@/components/media/VSLPlayer'
import { useIsMobile } from '@/hooks/useIsMobile'
import { track } from '@/lib/analytics'

export function HeroSection() {
  const isMobile = useIsMobile()

  return (
    <section id="inicio" className="hero-section">
      <div className="container relative z-10 grid items-center gap-10 pt-32 sm:pt-40 pb-14 lg:min-h-[100vh] lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pt-36 lg:pb-16">
        {/* Left: Copy */}
        <div className="hero-copy text-center sm:text-left flex flex-col items-center sm:items-start pt-3 sm:pt-0">
          {/* Pill Tag (Hidden on mobile) */}
          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-[11px] font-medium tracking-wide text-slate-300 backdrop-blur-sm mb-5 sm:mb-6">
            <Shield size={13} className="text-slate-400 shrink-0" />
            <span>AUDITORIA BANCÁRIA • REDUÇÃO DE DÍVIDAS • PROTEÇÃO PATRIMONIAL</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-[2.25rem] sm:text-[3.25rem] lg:text-[3.65rem] xl:text-[4rem] leading-[1.15] tracking-normal font-bold text-white text-center sm:text-left">
            Você vai esperar<br className="hidden sm:inline" />{' '}
            o banco tomar<br className="hidden sm:inline" />{' '}
            <span className="text-[#6fa8e7]">o que levou uma<br className="hidden sm:inline" />{' '}
            vida para construir?</span>
          </h1>

          {/* Paragraphs */}
          <p className="mt-5 max-w-xl text-[14px] sm:text-[15px] leading-relaxed text-slate-300 text-center sm:text-left mx-auto sm:mx-0">
            Entenda como milhares de empresários retomaram o controle das suas finanças, primeiro reduzindo as dívidas bancárias para depois renegociar e voltar a pagar o que é justo.
          </p>

          <p className="hidden sm:block mt-3.5 max-w-xl text-[14px] sm:text-[15px] leading-relaxed text-slate-300 text-center sm:text-left mx-auto sm:mx-0">
            Se a sua empresa possui endividamento bancário entre <span className="font-semibold text-white">R$ 1 milhão</span> e <span className="font-semibold text-white">R$ 50 milhões</span> ou <span className="font-semibold text-white">mais</span>, solicite uma análise prévia do seu caso.
          </p>

          {/* Mobile Video Player - ABOVE the button on mobile */}
          {isMobile && (
            <div className="w-full my-6">
              <VSLPlayer />
            </div>
          )}

          {/* CTA Button */}
          <div className="mt-6 mb-8 lg:mb-0 w-full sm:w-auto">
            <a
              href="#formulario"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-[#1d3d63] hover:bg-[#254d7d] border border-[#3b82f6]/30 px-8 py-3.5 text-[12px] font-bold uppercase tracking-widest text-white transition-all shadow-lg shadow-black/40 text-center group"
              onClick={() => track('cta_click')}
            >
              <span>Solicitar Análise do Caso</span>
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Authority stats */}
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 pt-8 border-t border-white/10 w-full">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <strong className="block text-[15px] font-bold text-white leading-tight">R$ 15 bilhões</strong>
                <span className="mt-1 block text-[11px] leading-snug text-slate-400">em movimentações bancárias auditadas</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <strong className="block text-[15px] font-bold text-white leading-tight">R$ 150 milhões</strong>
                <span className="mt-1 block text-[11px] leading-snug text-slate-400">recuperados para clientes</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <strong className="block text-[15px] font-bold text-white leading-tight">+ 4.500</strong>
                <span className="mt-1 block text-[11px] leading-snug text-slate-400">contas correntes auditadas</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <strong className="block text-[15px] font-bold text-white leading-tight">+ 10 anos</strong>
                <span className="mt-1 block text-[11px] leading-snug text-slate-400">de movimentações analisadas pela auditoria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <LeadForm />
      </div>
    </section>
  )
}
