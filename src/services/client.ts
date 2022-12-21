import { client } from './api';
import { GetDataReturn, Stock, Pension } from 'types/client';

export async function getStocks(): Promise<GetDataReturn<Stock>> {
  const response = await client.get('stocks');

  return response.data;
}

export async function getPension(): Promise<GetDataReturn<Pension>> {
  const response = await client.get('pension');

  return response.data;
}

export async function getFunds(): Promise<GetDataReturn<Funds[]>> {
  const response = await client.get('funds');

  return response.data;
}
