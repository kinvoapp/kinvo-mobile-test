import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6266f62263e0f382568936e4.mockapi.io/',
});

export default api;
