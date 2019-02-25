import { reduce } from '../_helpers/utils';
import { genreService } from '../_services';
import { genreConstants } from '../_constants';

const makeGenresUsable = ({ genres }) => {
  const genreUsableObject = {};

  genres.forEach(({ id, name }) => {
    genreUsableObject[id] = name;
  });

  return genreUsableObject;
};

const getGenres = () => (dispatch) => {
  dispatch(reduce(genreConstants.GENRES_REQUEST));
  return genreService.getGenres()
    .then((response) => {
      const genres = makeGenresUsable(response);

      dispatch(reduce(genreConstants.GENRES_SUCCESS));
      dispatch(reduce(genreConstants.ADD_GENRES, { genres }));

      return Promise.resolve(genres);
    })
    .catch(() => {
      // dispatch(reduce(genreConstants.GENRES_FAILURE, error.message));
      // return Promise.reject(error);
    });
};

export default {
  getGenres,
};
