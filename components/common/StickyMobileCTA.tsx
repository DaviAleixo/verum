'use client'

import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { track } from '@/lib/analytics'

export function StickyMobileCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`sticky-mobile-cta ${show ? 'visible' : ''}`}>
      <a
        href="#formulario"
        className="primary-button"
        onClick={() => track('sticky_cta_click')}
      >
        QUERO REDUZIR MINHA DÍVIDA <ArrowRight size={15} />
      </a>
    </div>
  )
}
