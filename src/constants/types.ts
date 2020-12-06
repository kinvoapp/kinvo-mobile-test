import { ImageSourcePropType } from 'react-native';

export interface IHomeSection {
  title: string;
  description: string;
  icon: ImageSourcePropType;
  route: string;
  label?: string;
}

// FUNDS

export interface IFund {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  rating: number;
  profitability: number;
  status: number;
}

// PENSION

export interface IPension {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  profitability: number;
  redemptionTerm: number;
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
