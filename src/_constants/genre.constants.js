import { API_KEY } from './app.constants';

export const GENRES_URL = `/genre/movie/list?${API_KEY}`;

export const ADD_GENRES = 'ADD_GENRES';

export const GENRES_REQUEST = 'GENRES_REQUEST';
export const GENRES_SUCCESS = 'GENRES_SUCCESS';
export const GENRES_FAILURE = 'GENRES_FAILURE';
export const GENRES_RESET = 'GENRES_RESET';

export default {
  ADD_GENRES,
  GENRES_URL,
  GENRES_REQUEST,
  GENRES_SUCCESS,
  GENRES_FAILURE,
  GENRES_RESET,
};
