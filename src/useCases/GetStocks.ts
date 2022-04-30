import axios from 'axios';
import { api } from '~/services/api';

interface GetStocksProps {
  data: Stock[];
  error: boolean | null;
  success: boolean | null;
}

const getStocks = async (): Promise<Stock[]> => {
  try {
    const { data } = await api.get<GetStocksProps>('/stocks');

    const { data: stocks } = data;

    return stocks;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error(`${e}`);
    }

    throw new Error('Não foi possível buscar as ações');
  }
};

export default getStocks;
