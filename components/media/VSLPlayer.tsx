'use client'

import React, { useEffect } from 'react'

export function VSLPlayer() {
  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://scripts.converteai.net/1c526ef2-6b7e-45da-af4a-faf71d6f51ab/players/696155cb23fc590cf35ff8b8/v4/player.js'
    s.async = true
    document.head.appendChild(s)

    return () => {
      try {
        document.head.removeChild(s)
      } catch {}
    }
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-[680px] rounded-2xl bg-slate-900/80 p-1.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 backdrop-blur-md">
      {/* Elegant, subtle top highlight for a corporate feel */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#6fa8e7]/40 to-transparent" />

      <div className="relative overflow-hidden rounded-[12px] bg-black">
        {/* VTurb Smartplayer Embed */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <vturb-smartplayer id="vid-696155cb23fc590cf35ff8b8" style="display: block; margin: 0 auto; width: 100%;">
                <div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 56.25% 0 0; z-index: 0; background-color: black;"></div>
              </vturb-smartplayer>
            `,
          }}
        />
      </div>
    </div>
  )
}
