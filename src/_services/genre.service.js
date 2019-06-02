import axios from '../_helpers/axios';
import { movieConstants } from '../_constants';

const getGenres = () => axios.get(movieConstants.GENRES_URL);

export default {
  getGenres,
};
