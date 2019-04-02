import axios from '../_helpers/axios';
import { movieConstants } from '../_constants';
import { API_KEY } from '../_constants/app.constants';

const getMoviePopular = page => axios.get(`${movieConstants.MOVIE_POPULAR}&page=${page}`);

const getMovieById = id => axios.get(`/movie/${id}?${API_KEY}`);

const searchMovie = query => axios.get(`${movieConstants.SEARCH_URL}&query=${query}`);

export default {
  getMoviePopular,
  getMovieById,
  searchMovie,
};
