import axios from 'axios';

export const API_URL =
  'https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/';

const api = axios.create({ baseURL: API_URL });

export default api;
