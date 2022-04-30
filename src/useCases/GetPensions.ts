import axios from 'axios';
import { api } from '~/services/api';

interface GetPensionsProps {
  data: Pension[];
  error: boolean | null;
  success: boolean | null;
}

const getPensions = async (): Promise<Pension[]> => {
  try {
    const { data } = await api.get<GetPensionsProps>('/pension');

    const { data: pensions } = data;

    return pensions;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error(`${e}`);
    }

    throw new Error('Não foi possível buscar as previdências');
  }
};

export default getPensions;
