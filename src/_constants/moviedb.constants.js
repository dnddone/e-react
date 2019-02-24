import { API_KEY } from './app.constants';

export const MOVIE_URL = '/movie';

export const POPULAR_URL = `${MOVIE_URL}/popular?${API_KEY}`;
export const SEARCH_URL = `/search/movie?${API_KEY}`;

export const ADD_ID = 'ADD_ID';
export const REMOVE_ID = 'REMOVE_ID';
export const TOGGLE_ID = 'TOGGLE_ID';
export const UPDATE_ID = 'UPDATE_ID';

export const PAGINATION_UPDATE = 'PAGINATION_UPDATE';
export const PAGINATION_RESET = 'PAGINATION_RESET';

export const MOVIE_LOADING = 'MOVIE_LOADING';
export const MOVIE_LOADED = 'MOVIE_LOADED';

export const ADD_MOVIE_POPULAR = 'ADD_MOVIE_POPULAR';

export default {
  API_KEY,
  MOVIE_URL,
  POPULAR_URL,
  ADD_ID,
  REMOVE_ID,
  TOGGLE_ID,
  UPDATE_ID,
  ADD_MOVIE_POPULAR,
  PAGINATION_UPDATE,
  PAGINATION_RESET,
  MOVIE_LOADING,
  MOVIE_LOADED,
};
