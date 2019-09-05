import axios from 'axios';

const api = axios.crate({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;
