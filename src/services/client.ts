import { client } from './api';

export type PensionType = 'Multimercados' | 'Renda Fixa Pós' | 'Renda Fixa Pré';

export type FundsType = 'Multimercados' | 'RF' | 'FIA';

export enum FundsStatus {
  '0' = 'Comum',
  '1' = 'Novo',
  '2' = 'Fechado',
}

export type Stock = {
  id: number;
  name: string;
  ticker: string;
  minimumValue: 100;
  profitability: 27.05;
  favorite: boolean;
};

export type Pension = {
  id: number;
  name: string;
  type: PensionType;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
};

export type Funds = {
  id: number;
  name: string;
  type: FundsType;
  minimumValue: number;
  rating: number;
  profitability: number;
  status: 0 | 1 | 2;
};

export type GetDataReturn<T> = {
  success: boolean;
  data: T[];
  error: null;
};

export async function getStocks(): Promise<GetDataReturn<Stock>> {
  const response = await client.get('stocks');

  return response.data;
}

export async function getPension(): Promise<GetDataReturn<Pension>> {
  const response = await client.get('pension');

  return response.data;
}
export async function getFunds(): Promise<GetDataReturn<Funds>> {
  const response = await client.get('funds');

  return response.data;
}
