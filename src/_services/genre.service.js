import axios from '../_helpers/axios';
import { genreConstants } from '../_constants';

const getGenres = () => axios.get(genreConstants.GENRES_URL);

export default {
  getGenres,
};
