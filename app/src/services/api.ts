import axios from 'axios';

const api = axios.create({
  baseURL: 'https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/',
});

export default api;
