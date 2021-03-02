export interface Props {
  id?: number
  name: string
  profitability: number
  minimumValue: number
  redemptionTerm?: number
  type?: string
  ticker?: string
  tax?: number
  rating?: number
  status?: number
  onPressItem?: () => void
  disabled: boolean
}
