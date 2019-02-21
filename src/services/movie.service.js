import axios from '../helpers/axios';
import { movieConstants } from '../constants';

const getMoviePopular = page => axios.get(`${movieConstants.POPULAR_URL}&page=${page}`);

export default {
  getMoviePopular,
};
