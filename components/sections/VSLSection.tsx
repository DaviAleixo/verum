'use client'

import React from 'react'
import { VSLPlayer } from '@/components/media/VSLPlayer'
import { useIsMobile } from '@/hooks/useIsMobile'

export function VSLSection() {
  const isMobile = useIsMobile()

  if (isMobile) return null

  return (
    <section id="conheca-a-verum" className="relative overflow-hidden bg-[#040814] py-16 sm:py-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-[#6fa8e7] uppercase backdrop-blur-sm">
            CONHEÇA A VERUM
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] text-white max-w-2xl mx-auto">
            Entenda como a Verum atua ao lado da sua empresa.
          </h2>
          <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-slate-400 max-w-xl mx-auto font-light">
            Experiência técnica e jurídica para negociar de igual para igual com o sistema bancário.
          </p>
        </div>

        <div className="relative max-w-[680px] w-full mx-auto">
          {/* Lion Background Art placed much larger on mobile */}
          <div
            className="pointer-events-none absolute -left-[200px] sm:-left-[235px] lg:-left-[260px] -top-20 sm:-top-24 lg:-top-[85px] w-[560px] sm:w-[580px] lg:w-[540px] select-none z-0"
            aria-hidden="true"
          >
            <img
              src="/backgroundvideo.webp"
              alt=""
              className="w-full h-auto object-contain invert brightness-95 hue-rotate-[185deg] saturate-150 mix-blend-screen opacity-45 sm:opacity-35"
            />
          </div>

          <VSLPlayer />
        </div>
      </div>
    </section>
  )
}
