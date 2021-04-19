export interface PrevidenciasRequestData {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}

export type FilterFunction = (el: PrevidenciasRequestData) => Boolean;
export type SetFilterFunction = (newFilters: Array<FilterFunction>) => void;
export type SetOptionFunction = (newOptions: Array<FilterOption>) => void;

export interface PrevidenciasRequest {
  success: Boolean;
  data: PrevidenciasRequestData[];
  error: Boolean | null;
}

export enum PrevidenciasSceneFilterEnum {
  Taxa = 'SEM TAXA',
  ValorMinimo = 'R$100,00',
  Resgate = 'D+1',
}

export interface FilterOption {
  title: string;
  filter: FilterFunction;
  isSelected: Boolean;
}
