'use client'

import React, { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Logo } from '@/components/common/Logo'
import { navigationItems } from '@/data/navigation.data'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`site-header transition-all duration-300 ${
          scrolled
            ? 'bg-[#081220]/95 backdrop-blur-md border-b border-white/5 py-2.5 sm:py-3 shadow-lg'
            : 'bg-transparent border-none shadow-none py-3.5 sm:py-5'
        }`}
      >
        <div className="container flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          {scrolled && (
            <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
              {navigationItems.map((item) => (
                <a
                  key={item.number}
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors text-[13px] font-medium"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          )}

          {/* Mobile Hamburger Button */}
          <button
            className="rounded-md p-2 text-primary-foreground lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setMobileMenu(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenu} onClose={() => setMobileMenu(false)} />
    </>
  )
}
