import axios from 'axios';
import { api } from '~/services/api';

interface GetFundsProps {
  data: Fund[];
  error: boolean | null;
  success: boolean | null;
}

const getFunds = async (): Promise<Fund[]> => {
  try {
    const { data } = await api.get<GetFundsProps>('/funds');

    const { data: funds } = data;

    return funds;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error(`${e}`);
    }

    throw new Error('Não foi possível buscar os fundos');
  }
};

export default getFunds;
