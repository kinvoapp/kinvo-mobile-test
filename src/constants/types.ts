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
