import axios from 'axios';

const BASE_URL = '6266f62263e0f382568936e4'

const api = axios.create({
  baseURL: `https://${BASE_URL}.mockapi.io/`,
});



export default api;