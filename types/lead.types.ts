export interface LeadFormData {
  nome: string
  email: string
  tel: string
  estado: string
  cidade: string
  divida: string
  tipoDividaCpf?: string
  valor: string
  termos: boolean
}

export interface LeadFormProps {
  id?: string
  compact?: boolean
}
