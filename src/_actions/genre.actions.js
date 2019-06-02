import { reduce, genresArrayToObject } from '../_helpers/utils';
import { genreService } from '../_services';
import { movieConstants } from '../_constants';

const getGenres = () => (dispatch) => {
  dispatch(reduce(movieConstants.GENRES_REQUEST));
  return genreService.getGenres()
    .then((response) => {
      const genres = genresArrayToObject(response);

      dispatch(reduce(movieConstants.GENRES_SUCCESS));
      dispatch(reduce(movieConstants.GENRES_SAVE, { genres }));

      return Promise.resolve(genres);
    })
    .catch((error) => {
      dispatch(reduce(movieConstants.GENRES_FAILURE, error.message));
      return Promise.reject(error);
    });
};

export default {
  getGenres,
};
