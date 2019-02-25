import { API_KEY } from './app.constants';

export const MOVIES_URL = '/movie';

export const MOVIE_POPULAR = `${MOVIES_URL}/popular?${API_KEY}`;
export const SEARCH_URL = `/search/movie?${API_KEY}`;

export const ADD_ID = 'ADD_ID';
export const REMOVE_ID = 'REMOVE_ID';
export const TOGGLE_ID = 'TOGGLE_ID';
export const UPDATE_ID = 'UPDATE_ID';

export const MOVIES_REQUEST = 'MOVIES_REQUEST';
export const MOVIES_SUCCESS = 'MOVIES_SUCCESS';
export const MOVIES_FAILURE = 'MOVIES_FAILURE';
export const MOVIES_RESET = 'MOVIES_RESET';

export const PAGINATION_UPDATE = 'PAGINATION_UPDATE';
export const PAGINATION_RESET = 'PAGINATION_RESET';

export const ADD_MOVIES_POPULAR = 'ADD_MOVIE_POPULAR';

export default {
  API_KEY,
  MOVIES_URL,
  ADD_ID,
  REMOVE_ID,
  TOGGLE_ID,
  UPDATE_ID,
  ADD_MOVIES_POPULAR,
  PAGINATION_UPDATE,
  PAGINATION_RESET,
  MOVIE_POPULAR,
  MOVIES_REQUEST,
  MOVIES_SUCCESS,
  MOVIES_FAILURE,
  MOVIES_RESET,
};
