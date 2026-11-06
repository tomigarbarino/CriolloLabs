import { notFound } from 'next/navigation'
import BudgetLanding, { budgetMetadata } from '@/components/BudgetLanding'

export const metadata = budgetMetadata('es')
export default function BudgetPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'es') notFound()
  return <BudgetLanding locale="es" />
}
