import axios from '../_helpers/axios';
import { movieConstants } from '../_constants';

const getMoviePopular = page => axios.get(`${movieConstants.MOVIE_POPULAR}&page=${page}`);

export default {
  getMoviePopular,
};
