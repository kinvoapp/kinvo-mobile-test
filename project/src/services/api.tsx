import axios from 'axios';

const api = axios.create({
  baseURL: 'https://e9a02505-3276-4fee-aede-c7023dfb9034.mock.pstmn.io',
});

export default api;
