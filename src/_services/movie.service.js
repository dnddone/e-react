import axios from '../_helpers/axios';
import { movieConstants } from '../_constants';
import { API_KEY } from '../_constants/app.constants';

const getMoviesPopular = page => axios.get(`${movieConstants.MOVIES_POPULAR_URL}&page=${page}`);

const getMovieById = id => axios.get(`/movie/${id}?${API_KEY}`);

const searchMovies = query => axios.get(`${movieConstants.SEARCH_URL}&query=${query}`);

export default {
  getMoviesPopular,
  getMovieById,
  searchMovies,
};
