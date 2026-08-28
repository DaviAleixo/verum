import React from 'react'
import { Logo } from '@/components/common/Logo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container flex flex-col items-center gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex justify-center w-full sm:w-auto">
          <Logo src="/logo2.webp" />
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start gap-5 text-xs text-muted-foreground">
          <a href="#sobre" className="hover:text-white transition-colors">Sobre a Verum</a>
          <a href="#analise" className="hover:text-white transition-colors">Contato</a>
          <a href="/privacidade" className="hover:text-white transition-colors">Política de privacidade</a>
        </div>
        <div className="flex flex-col sm:items-end gap-1 text-center sm:text-right">
          <p className="text-xs text-muted-foreground">Copyright 2026 © every.pub</p>
          <p className="text-[11px] text-muted-foreground/70">
            Desenvolvido por{' '}
            <a
              href="https://instagram.com/davialeixo_nogueira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#6fa8e7] transition-colors underline underline-offset-2"
            >
              Davi Aleixo
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
