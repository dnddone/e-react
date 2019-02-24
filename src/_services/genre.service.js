import axios from '../_helpers/axios';
import { genreConstants } from '../_constants';

const getGenres = () => axios.get(genreConstants.GENRE_URL);

export default {
  getGenres,
};
