import axios from '../_helpers/axios';
import { movieConstants } from '../_constants';

const getMoviePopular = page => axios.get(`${movieConstants.POPULAR_URL}&page=${page}`);

export default {
  getMoviePopular,
};
