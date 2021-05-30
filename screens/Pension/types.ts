export interface PensionProps {
  id: number;
  name: string;
  tax: string;
  minimumValue: string;
  profitability: string;
  type: string;
  redemptionTerm: string;
}

export interface PensionCardContainerProps {
  backgroundColor?: string | null;
  opacity?: number;
}

export interface FilterProps{
  key: number,
  isActive: boolean,
  changeFilterActive?: (filterId: number)=>void,
}

export interface FilterContainerProps {
  isActive: boolean
}

export interface FilterTextProps{
  isActive: boolean,
}