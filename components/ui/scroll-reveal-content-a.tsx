"use client"

import React, { useRef } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useMotionValueEvent, useScroll } from "motion/react"
import { ChevronRight } from "lucide-react"

export interface ItemContent {
  number?: string
  title: string
  description?: string
  image?: {
    url: string
    alt: string
  }
}

interface Props extends React.ComponentProps<"div"> {
  header?: React.ReactNode
  items: ItemContent[]
  sideImage?: {
    url: string
    alt: string
  }
  className?: string
}

export default function ScrollRevealContentA({
  header,
  items,
  sideImage = {
    url: "/estatua1.webp",
    alt: "Especialista Verum",
  },
  className,
  ...props
}: Props) {
  const [scrollProgress, setScrollProgress] = React.useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const count = items.length || 1
  const step = 1 / count

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest)
  })

  const activeIndex = Math.min(Math.max(Math.floor(scrollProgress / step), 0), count - 1)

  return (
    <div className={cn("relative w-full", className)} ref={containerRef} {...props}>
      {/* Mobile view with integrated background statue */}
      <div className="lg:hidden relative overflow-hidden py-12 px-5 sm:px-8">
        {/* Integrated background image of the statue with graceful gradient fading */}
        <div className="pointer-events-none absolute right-0 top-0 w-[80%] max-w-[340px] h-[380px] select-none z-0">
          <img
            src={sideImage.url}
            alt=""
            className="w-full h-full object-cover object-top opacity-85 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071322] via-[#071322]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-[#071322]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071322]/70 via-transparent to-[#071322]" />
        </div>

        <div className="relative z-10">
          {header && <div className="mb-6 max-w-[85%]">{header}</div>}

          <div className="flex flex-col gap-3.5">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-[#091627]/80 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3.5 pr-2">
                  <span className="text-[11px] font-mono px-2 py-1 rounded border font-bold shrink-0 mt-0.5 bg-white/5 border-white/10 text-slate-400">
                    {item.number || `0${idx + 1}`}
                  </span>
                  <div>
                    <h3 className="font-serif text-[15.5px] text-white font-medium leading-snug">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-[12.5px] text-slate-400 mt-1 leading-relaxed font-light">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-500 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop view: 55/45 layout with full-bleed photographic right panel */}
      <div className="hidden lg:grid grid-cols-[55%_45%] w-full items-stretch min-h-full relative">
        {/* Left Column: Header + Natural Flow of Items */}
        <div className="flex flex-col justify-center py-16 sm:py-20 pl-8 sm:pl-12 lg:pl-20 pr-8 lg:pr-14 max-w-[760px] ml-auto w-full">
          {header && <div className="mb-6">{header}</div>}

          <div className="flex flex-col gap-4">
            {items.map((item, idx) => {
              const isActive = idx === activeIndex
              const isPast = idx < activeIndex

              return (
                <div
                  key={idx}
                  className={cn(
                    "flex items-start gap-4 p-5 rounded-xl border transition-all duration-300",
                    isActive
                      ? "bg-[#09182d] border-[#6fa8e7]/40 shadow-[0_4px_25px_rgba(43,134,255,0.12)]"
                      : isPast
                      ? "bg-white/[0.03] border-white/10 opacity-80"
                      : "bg-white/[0.02] border-white/5 opacity-45"
                  )}
                >
                  {/* Number Badge */}
                  <span
                    className={cn(
                      "text-[11px] font-mono px-2.5 py-1 rounded border transition-colors shrink-0 mt-0.5 font-bold",
                      isActive
                        ? "bg-[#6fa8e7]/20 border-[#6fa8e7]/50 text-[#6fa8e7] shadow-[0_0_12px_rgba(111,168,231,0.3)]"
                        : "bg-white/5 border-white/10 text-slate-400"
                    )}
                  >
                    {item.number || `0${idx + 1}`}
                  </span>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "font-serif text-[17px] tracking-wide leading-snug transition-colors",
                        isActive ? "text-white font-semibold" : "text-slate-300 font-normal"
                      )}
                    >
                      {item.title}
                    </h3>
                    {item.description && (
                      <p
                        className={cn(
                          "text-[13.5px] leading-relaxed transition-colors mt-1.5 font-light",
                          isActive ? "text-slate-300" : "text-slate-400"
                        )}
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: 100% full panel photographic block (no card, no rounded corners, no floating margins) */}
        <div className="relative w-full h-full min-h-[640px]">
          <Image
            src={sideImage.url}
            alt={sideImage.alt}
            fill
            priority
            className="object-cover object-center brightness-90"
          />

          {/* Gradient overlays for depth & corporate elegance */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/95 via-transparent to-[#071322]/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/70 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
