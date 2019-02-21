import { API_KEY } from './app.constants';

export const GENRE_URL = `/genre/movie/list?${API_KEY}`;

export const ADD_GENRES = 'ADD_GENRES';

export default {
  ADD_GENRES,
  GENRE_URL,
};
