import axios from 'axios';
import Cookies from 'js-cookie';

export const api = axios.create({
  baseURL: import.meta.env.API_Url,
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : Cookies.get('token');
    if (config.method === 'get' || (config.url === '/admin/login' && config.method === 'post')) {
      return config;
    } else {
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
      } else {
        throw new Error('Requisição cancelada');
      }
    }
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && [401, 403].includes(error.response.status)) {
      Cookies.remove('token');
      window.location.href = '/';
    } else {
      return Promise.reject(error);
    }
  },
);
