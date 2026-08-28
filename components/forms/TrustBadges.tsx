import React from 'react'
import { Shield, User, LockKeyhole } from 'lucide-react'

export interface TrustBadgesProps {
  className?: string
}

export function TrustBadges({ className = '' }: TrustBadgesProps) {
  return (
    <div className={`grid grid-cols-3 gap-4 pt-8 border-t border-white/10 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#6fa8e7] shrink-0">
          <Shield size={18} strokeWidth={1.5} />
        </div>
        <div className="text-[12px] text-slate-300 leading-tight font-medium">
          Análise<br />sigilosa
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#6fa8e7] shrink-0">
          <User size={18} strokeWidth={1.5} />
        </div>
        <div className="text-[12px] text-slate-300 leading-tight font-medium">
          Atendimento<br />especializado
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#6fa8e7] shrink-0">
          <LockKeyhole size={18} strokeWidth={1.5} />
        </div>
        <div className="text-[12px] text-slate-300 leading-tight font-medium">
          Sem<br />compromisso
        </div>
      </div>
    </div>
  )
}
