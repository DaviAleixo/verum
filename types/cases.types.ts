import { LucideIcon } from "lucide-react"

export interface CaseBullet {
  icon: LucideIcon
  value: string
  label: string
}

export interface CaseItem {
  tag: string
  title: string
  description: string
  bullets: CaseBullet[]
}
