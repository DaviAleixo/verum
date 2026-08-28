export interface NavItem {
  number: string
  title: string
  href: string
  desc: string
}

export const navigationItems: NavItem[] = [
  { number: '01', title: 'Como atuamos', href: '#como-atuamos', desc: 'Metodologia e proteção' },
  { number: '02', title: 'Consultoria', href: '#consultoria', desc: 'Renegociação estratégica' },
  { number: '03', title: 'Casos de sucesso', href: '#casos', desc: 'Histórias e resultados' },
  { number: '04', title: 'Sobre a Verum', href: '#sobre', desc: 'Referência nacional' },
]
