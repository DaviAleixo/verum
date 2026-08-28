import { ShieldCheck, Banknote, Clock, Check, LockKeyhole, Scale, TrendingDown, Ban, FileCheck2 } from 'lucide-react'
import { CaseItem } from '@/types/cases.types'

export const cases: CaseItem[] = [
  {
    tag: 'CONSTRUÇÃO CIVIL',
    title: 'Cobrança de 17 milhões anulada e crédito de 5 milhões conquistado',
    description: 'Empresário de Alagoas da Construção Civil teve R$ 17 milhões de suposta dívida com a Caixa Econômica anulada e conquistou R$ 5 milhões em créditos a serem devolvidos dentro da Recuperação Judicial. Fato ocorrido depois do trabalho profissional realizado pela equipe da Verum que auditou centenas de milhões em movimentações bancárias em 10 anos com a Caixa. Resultado: Acordos favoráveis na Recuperação Judicial, extinção da dívida com a Caixa e fôlego para voltar a normalidade.',
    bullets: [
      { icon: ShieldCheck, value: 'R$ 17 MILHÕES', label: 'Dívida anulada' },
      { icon: Banknote, value: 'R$ 5 MILHÕES', label: 'Crédito conquistado' },
      { icon: Clock, value: '10 ANOS', label: 'De análise bancária' },
      { icon: Check, value: 'RESULTADO', label: 'Acordos favoráveis' },
    ],
  },
  {
    tag: 'CAIXA ECONÔMICA',
    title: 'Cobrança milionária quitada por pouco mais de 13 mil reais',
    description: 'Neste caso, a Caixa Econômica já havia consolidado a propriedade dada em garantia e o empresário já não via saída. Mas com o trabalho de Auditoria nas movimentações de 10 anos e estratégias jurídicas foi possível anular uma suposta dívida de R$ 4.935.001,68. No processo, a Caixa não conseguiu apresentar de forma precisa o que havia sido pago (parcelas) pelo cliente, restando um saldo devedor de apenas R$ 13.912,20. Com isto foi possível quitar a dívida trazendo alívio ao empresário que hoje permanece em posse do imóvel.',
    bullets: [
      { icon: ShieldCheck, value: 'R$ 4,9 MILHÕES', label: 'Dívida cobrada' },
      { icon: Banknote, value: 'R$ 13 MIL', label: 'Valor para quitação' },
      { icon: LockKeyhole, value: 'IMÓVEL', label: 'Preservado e mantido' },
      { icon: Check, value: 'RESULTADO', label: 'Quitação e alívio' },
    ],
  },
  {
    tag: 'GOIÂNIA',
    title: 'Dívida de R$ 1.308.003,00 quitada por apenas R$ 168.000,00',
    description: 'Empresário de Goiânia já estava sendo executado na justiça o que tirava a sua paz, dificultando a condução da empresa. Na auditoria de 10 anos, a Verum identificou mais de R$ 400 mil reais em cobranças abusivas e ilegais, ingressando na justiça com ação contra o Banco do Brasil. Após o trabalho jurídico e de negociação, foi firmado acordo para encerrar a demanda pagando apenas R$ 168.000,00 (13%), gerando alívio para o empresário voltar a dedicar-se ao seu negócio.',
    bullets: [
      { icon: ShieldCheck, value: 'R$ 1,3 MILHÃO', label: 'Execução judicial' },
      { icon: Banknote, value: 'R$ 168 MIL', label: 'Acordo firmado' },
      { icon: Scale, value: 'R$ 400 MIL', label: 'Abusos identificados' },
      { icon: Check, value: 'RESULTADO', label: 'Acordo de 13%' },
    ],
  },
  {
    tag: 'MINAS GERAIS',
    title: 'Cancelamento de leilão e redução do valor a ser pago ao banco',
    description: 'O Sicoob já havia realizado leilão sem sucesso de imóvel penhorado e solicitado na justiça, penhora mensal de 10% do faturamento para um de nossos clientes em Minas Gerais, o que inviabilizaria a continuidade da empresa gerando grande preocupação para os sócios. Com o trabalho da Verum, foi possível declarar a impenhorabilidade do imóvel e estabelecer a penhora de apenas 2,5% do faturamento, trazendo alívio aos empresários. Isto foi possível através de estudos técnicos e jurídicos acolhidos pelo poder judiciário, permitindo assim, pagar o banco de forma equilibrada.',
    bullets: [
      { icon: ShieldCheck, value: '10%', label: 'Penhora original' },
      { icon: TrendingDown, value: '2,5%', label: 'Penhora reduzida' },
      { icon: Ban, value: 'LEILÃO', label: 'Cancelado com sucesso' },
      { icon: Check, value: 'RESULTADO', label: 'Imóvel protegido' },
    ],
  },
  {
    tag: 'RONDÔNIA',
    title: 'Juiz de Rondônia suspende execução do Banco do Brasil',
    description: 'Em recente decisão, o juiz suspendeu execução que o banco movia contra a empresa e que restringia o crédito, negativando CNPJ e CPFs, gerando bloqueios em dinheiro e penhora de bens. O cenário trazia extremo desconforto para o empresário que não via solução. O trabalho técnico e jurídico da Verum demonstrou os abusos e irregularidades no contrato e movimentação bancária, dando base para a decisão da justiça. Sem riscos, sem penhoras e com crédito restabelecido, a empresa conseguiu se erguer para renegociar com o banco de forma justa no momento oportuno.',
    bullets: [
      { icon: ShieldCheck, value: 'SUSPENSA', label: 'Execução bancária' },
      { icon: FileCheck2, value: 'CNPJ', label: 'Limpo e regularizado' },
      { icon: LockKeyhole, value: 'CONTAS', label: 'Bloqueios liberados' },
      { icon: Check, value: 'RESULTADO', label: 'Crédito restabelecido' },
    ],
  },
]
