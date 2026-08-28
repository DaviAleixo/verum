'use client'

import React from 'react'
import { FileCheck2, BookOpen, ShieldCheck, Scale } from 'lucide-react'
import { track } from '@/lib/analytics'

export function ConsultingSection() {
  return (
    <section id="consultoria" className="relative overflow-hidden bg-[#040c18] py-16 sm:py-20 text-white">
      {/* Background Image: reduzirpressao.webp - only on desktop */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        <div className="absolute left-0 top-0 h-full w-full bg-[url('/reduzirpressao.webp')] bg-cover bg-center bg-no-repeat opacity-15 sm:opacity-20 mix-blend-luminosity" />
      </div>

      <div className="container relative z-10 max-w-6xl">
        <div className="mb-10 sm:mb-12 text-center max-w-3xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-[#6fa8e7] uppercase backdrop-blur-sm">
            CONSULTORIA ESPECIALIZADA
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px] leading-tight">
            Seja assessorado por quem já foi bancário e conhece o sistema por dentro.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            Nossos especialistas entendem como os bancos operam e sabem exatamente onde encontrar as inconsistências para negociar o valor correto.
          </p>
        </div>

        {/* 3 Large Value Prop Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              num: '01',
              title: 'PROTEGER SEU PATRIMÔNIO\nE SUA EMPRESA',
              text: 'Alívio imediato no caixa enquanto\ndiscutimos seus direitos.',
              icon: FileCheck2,
            },
            {
              num: '02',
              title: 'ALÍVIO DO ESTRESSE\nCOM AS DÍVIDAS BANCÁRIAS',
              text: 'Tenha ao seu lado, os melhores profissionais\nque darão todo suporte e orientação.',
              icon: BookOpen,
            },
            {
              num: '03',
              title: 'PODER NA HORA DE\nRENEGOCIAR',
              text: 'Negociação feita por especialistas experientes\nque sabem do seu direito e o correto a ser pago.',
              icon: ShieldCheck,
            },
          ].map((item) => (
            <div
              key={item.num}
              className="relative flex flex-col items-center bg-[#091627] px-8 py-14 text-center transition-colors hover:bg-[#0d1f36]"
            >
              <div className="absolute left-6 top-6 bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-mono text-[#6fa8e7]">
                {item.num}
              </div>
              <item.icon size={52} strokeWidth={1} className="mb-8 text-[#6fa8e7]" />
              <h3 className="mb-4 font-serif text-[15px] font-semibold tracking-wider text-white uppercase whitespace-pre-line leading-snug">
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-400 whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar (Hidden on mobile) */}
        <div className="mt-8 hidden lg:flex flex-col items-center justify-between gap-6 border border-white/10 rounded-xl bg-[#091627] p-4 lg:p-0 lg:pr-8 lg:flex-row overflow-hidden">
          <div className="flex items-center gap-6 self-stretch">
            <div className="flex w-20 items-center justify-center bg-white/5 py-6">
              <Scale size={26} strokeWidth={1.25} className="text-[#6fa8e7]" />
            </div>
            <a
              href="#formulario"
              onClick={() => track('cta_click')}
              className="font-serif text-[14px] font-semibold tracking-wider text-white uppercase hover:text-[#6fa8e7] transition-colors"
            >
              Quero falar com um especialista
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[12px] text-slate-400">
            <span>Atendimento sigiloso</span>
            <span className="size-1 rounded-full bg-slate-600"></span>
            <span>Estratégias personalizadas</span>
            <span className="size-1 rounded-full bg-slate-600"></span>
            <span>Foco em resultados</span>
          </div>
        </div>
      </div>
    </section>
  )
}
