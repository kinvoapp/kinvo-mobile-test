import { client } from './api';

type PensionType = 'Multimercados' | 'Renda Fixa Pós' | 'Renda Fixa Pré';

type FundsType = 'Multimercados' | 'RF' | 'FIA';

enum FundsStatus {
  '0' = 'Comum',
  '1' = 'Novo',
  '2' = 'Fechado',
}

type Stock = {
  id: number;
  name: string;
  ticker: string;
  minimumValue: 100;
  profitability: 27.05;
};

type Pension = {
  id: number;
  name: string;
  type: PensionType;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
};

type Funds = {
  id: number;
  name: string;
  type: FundsType;
  minimumValue: number;
  rating: number;
  profitability: number;
  status: FundsStatus;
};

type GetDataReturn<T> = {
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
