import axios from 'axios';

export var url = 'https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/'

const api = axios.create({
    baseURL: url
})
export default api;
