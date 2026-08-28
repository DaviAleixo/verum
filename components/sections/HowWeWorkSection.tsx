import React from 'react'
import { ShieldCheck, FileCheck2, Users, Hourglass } from 'lucide-react'

export function HowWeWorkSection() {
  return (
    <section id="como-atuamos" className="bg-white py-14 sm:py-18 text-slate-900 relative overflow-hidden">
      <div className="container max-w-6xl relative z-10">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f0f5ff] px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#2b86ff] uppercase mb-4">
            COMO ATUAMOS
          </div>
          <h2 className="font-serif text-[28px] sm:text-4xl lg:text-[42px] font-normal leading-[1.15] tracking-tight text-slate-900">
            Entenda como a <span className="text-[#2b86ff] font-medium">Verum</span> atua ao lado<br className="hidden sm:block" />da sua empresa.
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-slate-500 font-medium max-w-2xl mx-auto">
            Experiência técnica e jurídica para negociar de igual para igual<br className="hidden sm:block" />com o sistema bancário.
          </p>
        </div>

        <div className="mx-auto grid md:grid-cols-2 max-w-[1000px] relative">
          {/* Grid Dividers (Cross) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#f1f5f9] -translate-x-1/2" />
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-[#f1f5f9] -translate-y-1/2" />

          {/* Card 1 */}
          <div className="bg-white p-6 sm:p-10 lg:p-12 border-b md:border-b-0 border-[#f1f5f9] flex flex-col sm:flex-row gap-6 sm:gap-8 hover:bg-slate-50/50 transition-colors">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#2b86ff] shrink-0 shadow-[0_6px_30px_rgba(43,134,255,0.08)] border border-[#eff4fb]">
              <ShieldCheck size={28} strokeWidth={1.5} />
            </div>
            <div className="pt-1">
              <span className="inline-flex items-center justify-center rounded bg-[#f0f5ff] text-[#2b86ff] font-bold text-[11px] tracking-wider px-2 py-0.5 mb-3">01</span>
              <h3 className="font-serif text-xl sm:text-[22px] font-normal text-slate-900 leading-snug mb-3">
                Proteção financeira<br />e patrimonial sob medida
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed font-medium">
                Orientamos tudo que deve ser feito para proteção financeira e patrimonial da empresa e dos sócios enquanto discutimos seu direito junto ao banco.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 sm:p-10 lg:p-12 border-b border-[#f1f5f9] flex flex-col sm:flex-row gap-6 sm:gap-8 hover:bg-slate-50/50 transition-colors">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#2b86ff] shrink-0 shadow-[0_6px_30px_rgba(43,134,255,0.08)] border border-[#eff4fb]">
              <FileCheck2 size={28} strokeWidth={1.5} />
            </div>
            <div className="pt-1">
              <span className="inline-flex items-center justify-center rounded bg-[#f0f5ff] text-[#2b86ff] font-bold text-[11px] tracking-wider px-2 py-0.5 mb-3">02</span>
              <h3 className="font-serif text-xl sm:text-[22px] font-normal text-slate-900 leading-snug mb-3">
                Geramos créditos<br />em seu favor
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed font-medium">
                Auditamos os últimos 10 anos, mapeando cada movimentação bancária, identificando as abusividades de acordo com a lei e normativas do Banco Central. Gerando créditos em seu favor.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 sm:p-10 lg:p-12 border-b md:border-b-0 border-[#f1f5f9] flex flex-col sm:flex-row gap-6 sm:gap-8 hover:bg-slate-50/50 transition-colors">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#2b86ff] shrink-0 shadow-[0_6px_30px_rgba(43,134,255,0.08)] border border-[#eff4fb]">
              <Users size={28} strokeWidth={1.5} />
            </div>
            <div className="pt-1">
              <span className="inline-flex items-center justify-center rounded bg-[#f0f5ff] text-[#2b86ff] font-bold text-[11px] tracking-wider px-2 py-0.5 mb-3">03</span>
              <h3 className="font-serif text-xl sm:text-[22px] font-normal text-slate-900 leading-snug mb-3">
                Alívio da pressão<br />das dívidas bancárias
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed font-medium">
                Caminhamos juntos, assumindo as tratativas com os bancos trazendo paz ao empresário que fica livre para focar em seu negócio.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 sm:p-10 lg:p-12 flex flex-col sm:flex-row gap-6 sm:gap-8 hover:bg-slate-50/50 transition-colors">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#2b86ff] shrink-0 shadow-[0_6px_30px_rgba(43,134,255,0.08)] border border-[#eff4fb]">
              <Hourglass size={28} strokeWidth={1.5} />
            </div>
            <div className="pt-1">
              <span className="inline-flex items-center justify-center rounded bg-[#f0f5ff] text-[#2b86ff] font-bold text-[11px] tracking-wider px-2 py-0.5 mb-3">04</span>
              <h3 className="font-serif text-xl sm:text-[22px] font-normal text-slate-900 leading-snug mb-3">
                Tempo para sua<br />recuperação financeira
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed font-medium">
                Possibilitamos que você e sua empresa tenham tempo para a reestruturação financeira e então voltar a pagar o banco com redução e de forma justa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
