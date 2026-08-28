'use client'

import React, { useRef, useState, useEffect } from 'react'
import { estados } from '@/data/locations.data'
import { track } from '@/lib/analytics'
import { LeadFormProps } from '@/types/lead.types'

export function LeadForm({ id = 'formulario', compact = false }: LeadFormProps) {
  const started = useRef(false)
  const [selectedEstado, setSelectedEstado] = useState('')
  const [cidades, setCidades] = useState<string[]>([])
  const [loadingCidades, setLoadingCidades] = useState(false)
  const [selectedCidade, setSelectedCidade] = useState('')
  const [tipoDivida, setTipoDivida] = useState('')
  const [showCpfMsg, setShowCpfMsg] = useState(false)
  const [, setTipoDividaCpf] = useState('')

  useEffect(() => {
    if (!selectedEstado) {
      setCidades([])
      setSelectedCidade('')
      return
    }

    const uf = selectedEstado.split(' - ')[0]?.trim()
    if (!uf) return

    setLoadingCidades(true)
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`)
      .then((res) => res.json())
      .then((data: Array<{ nome: string }>) => {
        if (Array.isArray(data)) {
          setCidades(data.map((c) => c.nome))
        }
      })
      .catch((err) => {
        console.error('Erro ao carregar cidades do IBGE:', err)
      })
      .finally(() => {
        setLoadingCidades(false)
      })
  }, [selectedEstado])

  const handleTipoDivida = (val: string) => {
    setTipoDivida(val)
    setShowCpfMsg(false)
    setTipoDividaCpf('')
  }

  const handleTipoDividaCpf = (val: string) => {
    setTipoDividaCpf(val)
    if (val === 'Crédito Pessoal') {
      setShowCpfMsg(true)
    } else {
      setShowCpfMsg(false)
    }
  }

  return (
    <div
      id={id}
      className="relative z-10 w-full max-w-[440px] mx-auto lg:mx-0 lg:ml-auto"
      onFocus={() => {
        if (!started.current) {
          started.current = true
          track('form_start')
        }
      }}
    >
      <div
        className="rounded-2xl bg-[#091524]/95 border border-white/10 p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-md"
        aria-label="Formulário de análise prévia da Verum"
      >
        <div className="mb-5">
          <span className="text-[10px] font-bold text-[#6fa8e7] uppercase tracking-widest block">
            ANÁLISE DO CASO
          </span>
          <h2 className="font-serif text-[22px] sm:text-[24px] font-normal leading-snug text-white mt-1.5">
            Preencha para receber<br />o contato de um especialista
          </h2>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Nome Completo *</label>
            <input className="field-input" type="text" name="nome" placeholder="Seu nome completo" required />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">E-mail Corporativo *</label>
            <input className="field-input" type="email" name="email" placeholder="E-mail da sua empresa" required />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Telefone / WhatsApp *</label>
            <input className="field-input" type="tel" name="tel" placeholder="(11) 99999-0000" required />
          </div>

          <div className="grid gap-3 grid-cols-2">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Estado *</label>
              <select
                className="field-input"
                name="estado"
                value={selectedEstado}
                required
                onChange={(e) => setSelectedEstado(e.target.value)}
              >
                <option value="" disabled>Selecione...</option>
                {estados.map((e) => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sua Cidade *</label>
              <select
                className="field-input"
                name="cidade"
                value={selectedCidade}
                required
                onChange={(e) => setSelectedCidade(e.target.value)}
                disabled={!selectedEstado || loadingCidades}
              >
                {!selectedEstado && <option value="">Selecione o estado...</option>}
                {loadingCidades && <option value="">Carregando cidades...</option>}
                {!loadingCidades && selectedEstado && (
                  <>
                    <option value="" disabled>Selecione a cidade...</option>
                    {cidades.map((cidade) => (
                      <option key={cidade} value={cidade}>{cidade}</option>
                    ))}
                  </>
                )}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tipo de Dívida *</label>
            <select
              className="field-input"
              name="divida"
              defaultValue=""
              required
              onChange={(e) => handleTipoDivida(e.target.value)}
            >
              <option value="" disabled>Sua dívida está em (CNPJ ou CPF)?</option>
              <option value="CNPJ">CNPJ</option>
              <option value="CPF">CPF</option>
            </select>
          </div>

          {tipoDivida === 'CPF' && (
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Especificação *</label>
              <select
                className="field-input"
                name="divida_tipo"
                defaultValue=""
                onChange={(e) => handleTipoDividaCpf(e.target.value)}
              >
                <option value="">Qual o tipo de dívida?</option>
                <option value="Crédito Pessoal">Crédito Pessoal</option>
                <option value="Crédito Empresarial">Crédito Empresarial</option>
                <option value="Crédito Rural">Crédito Rural</option>
              </select>
            </div>
          )}

          {showCpfMsg && (
            <div className="rounded border border-amber-500/30 bg-amber-500/10 p-2.5 text-[11px] text-amber-200">
              Agradecemos, mas não atendemos este tipo de dívida (somente empresarial/rural).
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Valor Aproximado *</label>
            <select className="field-input" name="valor" defaultValue="" required>
              <option value="" disabled>Selecione a faixa de valor...</option>
              <option value="Entre 1 a 3 milhões">Entre 1 a 3 milhões</option>
              <option value="Entre 4 a 10 milhões">Entre 4 a 10 milhões</option>
              <option value="Entre 11 a 50 milhões">Entre 11 a 50 milhões</option>
              <option value="Acima de 50 milhões">Acima de 50 milhões</option>
            </select>
          </div>

          <label className="flex items-start gap-2.5 text-[11px] text-slate-400 mt-1 cursor-pointer">
            <input className="mt-0.5 rounded border-slate-700 bg-[#060e18] accent-[#254d7d]" type="checkbox" name="acceptance" value="1" required />
            <span>Li e aceito os termos de segurança e sigilo de dados.</span>
          </label>

          <button
            type="button"
            className="w-full rounded-md bg-[#244c78] hover:bg-[#2f5e94] text-white text-[12px] font-bold uppercase tracking-wider py-3.5 transition-all shadow-lg mt-1"
            onClick={() => track('form_submit')}
          >
            Solicitar Análise do Caso
          </button>
        </div>
      </div>
    </div>
  )
}
