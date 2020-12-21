export interface IPension {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}

export interface ChipItem {
  label: string;
  type: string;
  value: number;
}

export type Item = {
  [key: string]: number;
};

export type Filter = {
  tax: number;
  minimumValue: number;
  redemptionTerm: number;
};
