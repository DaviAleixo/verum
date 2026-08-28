'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Scale } from 'lucide-react'
import { cases } from '@/data/cases.data'

export function CaseCarousel() {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const minSwipeDistance = 40

  const next = useCallback(() => setIdx((i) => (i + 1) % cases.length), [])
  const prev = useCallback(() => setIdx((i) => (i - 1 + cases.length) % cases.length), [])

  useEffect(() => {
    timerRef.current = setInterval(next, 7000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [next])

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    if (distance > minSwipeDistance) {
      next()
    } else if (distance < -minSwipeDistance) {
      prev()
    }
  }

  return (
    <div className="relative w-full max-w-[1180px]">
      {/* Navigation Arrows */}
      <div className="hidden lg:flex absolute top-[calc(50%-16px)] -translate-y-1/2 -left-5 -right-5 items-center justify-between pointer-events-none z-10">
        <button
          onClick={prev}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white border border-[#E7EBF1] text-slate-700 shadow-md hover:text-[#2b86ff] transition-all hover:scale-105"
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white border border-[#E7EBF1] text-slate-700 shadow-md hover:text-[#2b86ff] transition-all hover:scale-105"
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      </div>

      {/* Sliding Track Wrapper with Touch/Swipe Support */}
      <div
        className="overflow-hidden rounded-[20px] bg-white border border-[#E7EBF1] shadow-[0_4px_24px_rgba(0,0,0,0.04)] touch-pan-y select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {cases.map((c, i) => (
            <div key={i} className="w-full shrink-0">
              <article className="flex flex-col lg:flex-row h-full lg:h-[340px]">
                {/* Left Photo Panel with Law / Justice photo (approx 20%) */}
                <div className="relative w-full lg:w-[20%] shrink-0 overflow-hidden bg-[#09152b] h-[150px] sm:h-[170px] lg:h-auto min-h-0 border-b-4 lg:border-b-0 lg:border-r-4 border-[#3b82f6] flex items-center justify-center">
                  <img
                    src="/estatua1.webp"
                    alt="Direito e Justiça"
                    className="absolute inset-0 h-full w-full object-cover object-top brightness-75 scale-105 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#09152b]/85 via-[#09152b]/30 to-transparent pointer-events-none"></div>

                  {/* Subtle centered icon badge */}
                  <div className="relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#09152b]/70 backdrop-blur-md border border-white/20 shadow-lg pointer-events-none">
                    <Scale size={24} className="text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Middle Panel - Content (approx 52%) */}
                <div className="flex-1 w-full lg:w-[52%] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="size-1.5 rounded-full bg-[#2b86ff]"></span>
                    <span className="text-[11px] font-semibold tracking-widest text-[#2b86ff] uppercase">{c.tag}</span>
                  </div>
                  <h3 className="font-serif text-[1.25rem] lg:text-[22px] font-normal leading-[1.2] text-slate-900 pr-2">{c.title}</h3>
                  <div className="mt-2.5 mb-3 h-[2px] w-8 bg-[#2b86ff]"></div>
                  <p className="text-[13.5px] lg:text-[14px] leading-[1.6] text-slate-600 pr-1 lg:pr-6">{c.description}</p>
                </div>

                {/* Right Panel - Bullets (Hidden on mobile, only shown on desktop) */}
                <div className="hidden lg:flex w-full lg:w-[28%] shrink-0 bg-white px-6 py-6 flex-col justify-center">
                  <div className="flex flex-col justify-center border-l border-[#e2e8f0] pl-6">
                    {c.bullets.map((b, idxBullet) => (
                      <div key={idxBullet} className="flex items-center gap-3.5 py-2 border-b border-[#e2e8f0] last:border-b-0">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0f5ff] text-[#2b86ff]">
                          <b.icon size={16} strokeWidth={1.75} />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="font-serif text-[14px] lg:text-[15px] font-bold text-slate-900 leading-[1.15]">{b.value}</span>
                          <span className="text-[11px] text-slate-500 mt-0.5 leading-[1.15]">{b.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-5 lg:mt-6 flex items-center justify-center gap-2.5">
        {cases.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'w-8 bg-[#3b82f6]' : 'w-1.5 bg-[#bfdbfe] hover:bg-[#93c5fd]'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function SuccessStoriesSection() {
  return (
    <section id="casos" className="bg-[#f8fafc] py-16 sm:py-20 text-slate-900">
      <div className="container max-w-6xl">
        <div className="mx-auto mb-10 sm:mb-12 text-center max-w-4xl">
          <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-[#2b86ff]/20 bg-[#2b86ff]/5 px-4 py-1 text-[11px] font-semibold tracking-widest text-[#2b86ff] uppercase">
            Resultados que comprovam
          </div>
          <h2 className="mx-auto text-balance text-[2rem] font-bold leading-[1.15] tracking-tight text-[#0b1120] sm:text-[2.75rem] font-serif">
            5 Histórias de clientes da Verum <br className="hidden sm:block" />
            que <span className="text-[#2b86ff]">&ldquo;viraram o jogo&rdquo;</span> com os bancos
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Empresas que enfrentaram o endividamento bancário e encontraram na Verum a estratégia certa para recuperar o fôlego e voltar a crescer.
          </p>
        </div>
        <div className="mx-auto w-full flex justify-center">
          <CaseCarousel />
        </div>
      </div>
    </section>
  )
}
