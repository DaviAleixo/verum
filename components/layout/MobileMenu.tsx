'use client'

import React from 'react'
import { X, ChevronRight, ArrowRight, Shield } from 'lucide-react'
import { Logo } from '@/components/common/Logo'
import { navigationItems } from '@/data/navigation.data'
import { track } from '@/lib/analytics'

export interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Content */}
      <nav
        className="fixed top-0 right-0 bottom-0 w-[88vw] max-w-[360px] bg-[#071322] border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-50 flex flex-col justify-between p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        aria-label="Menu Mobile"
      >
        {/* Ambient Top Glow & Watermark */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-[#2b86ff]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 w-60 select-none opacity-[0.06] mix-blend-screen">
          <img src="/backgroundvideo.png" alt="" className="w-full h-auto invert brightness-90" />
        </div>

        {/* Header with Logo & Close Button */}
        <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/10">
          <Logo />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="relative z-10 my-auto py-6 flex flex-col gap-2">
          <span className="text-[10px] font-bold tracking-widest text-[#6fa8e7] uppercase px-3 mb-1">
            NAVEGAÇÃO
          </span>
          {navigationItems.map((item) => (
            <a
              key={item.number}
              href={item.href}
              onClick={onClose}
              className="group flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 border border-white/10 font-mono text-[11px] font-semibold text-[#6fa8e7] group-hover:bg-[#2b86ff]/20 transition-colors">
                  {item.number}
                </span>
                <div>
                  <div className="text-[15px] font-medium text-white group-hover:text-[#6fa8e7] transition-colors leading-tight">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight mt-0.5 font-light">
                    {item.desc}
                  </div>
                </div>
              </div>
              <ChevronRight size={16} className="text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>
          ))}
        </div>

        {/* Drawer Footer / CTA */}
        <div className="relative z-10 pt-5 border-t border-white/10 flex flex-col gap-4">
          <a
            href="#formulario"
            onClick={() => {
              onClose()
              track('cta_click')
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1d3d63] to-[#254d7d] hover:from-[#254d7d] hover:to-[#2e5d95] border border-[#3b82f6]/40 py-3 text-[12px] font-bold uppercase tracking-wider text-white shadow-lg shadow-black/40 transition-all text-center"
          >
            Solicitar Análise do Caso
            <ArrowRight size={14} />
          </a>

          <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
            <span className="flex items-center gap-1.5">
              <Shield size={12} className="text-[#6fa8e7]" />
              Atendimento 100% Sigiloso
            </span>
            <a href="/privacidade" onClick={onClose} className="hover:text-white transition-colors underline underline-offset-2">
              Privacidade
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
