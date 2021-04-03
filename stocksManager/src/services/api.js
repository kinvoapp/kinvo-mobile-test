import axios from 'axios';

export var url = 'https://blog.cheesecakelabs.com/'

const api = axios.create({
    baseURL: url
})
export default api;
