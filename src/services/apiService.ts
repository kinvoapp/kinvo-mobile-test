import {BASE_URL} from '@env';
import axios from 'axios';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});
export async function fetchStocks(): Promise<IgetStocks[] | null> {
  try {
    const response = await api.get('/stocks');
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchFunds(): Promise<IgetFunds[] | null> {
  try {
    const response = await api.get('/funds');
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchPensions(): Promise<IgetPensions[] | null> {
  try {
    const response = await api.get('/pension');
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default api;
