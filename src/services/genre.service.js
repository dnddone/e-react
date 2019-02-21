import axios from '../helpers/axios';
import { genreConstants } from '../constants';

const getGenres = () => axios.get(genreConstants.GENRE_URL);

export default {
  getGenres,
};
