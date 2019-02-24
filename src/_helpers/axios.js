import axios from 'axios';
import { SERVER_URL, FETCH_TIMEOUT } from '../_constants/app.constants';

const instance = axios.create({
  baseURL: SERVER_URL,
  timeout: FETCH_TIMEOUT,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

instance.interceptors.response.use(
  response => response.data,
  (error) => {
    if (error.response) {
      throw new axios.Cancel('444');
    }

    return Promise.reject(error);
  },
);

export default instance;
