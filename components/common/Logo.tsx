import React from 'react'

export interface LogoProps {
  src?: string
  alt?: string
  className?: string
}

export function Logo({ src = '/logo-verum.webp', alt = 'Grupo Verum', className }: LogoProps) {
  return (
    <a href="#inicio" className="flex items-center" aria-label="Grupo Verum, início">
      <img
        src={src}
        alt={alt}
        className={className || "h-11 sm:h-14 md:h-16 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"}
      />
    </a>
  )
}
