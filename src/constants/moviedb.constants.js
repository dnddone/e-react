export const API_TOKEN = '677522a533aae20a5fa0d80d392c1496';
export const API_KEY = `api_key=${API_TOKEN}`;
export const API_URL = 'https://api.themoviedb.org/3';

export const MOVIE_URL = `${API_URL}/movie`;
export const GENRE_URL = `${API_URL}/genre`;
export const SEARCH_URL = `${API_URL}/search/movie?${API_KEY}`;

export default {
  API_TOKEN,
  API_KEY,
  API_URL,
  MOVIE_URL,
  GENRE_URL,
};
