import { genreService } from '../services';
import { genreConstants } from '../constants';

const makeGenresUsable = ({ genres }) => {
  const genreUsableObject = {};

  genres.forEach(({ id, name }) => {
    genreUsableObject[id] = name;
  });

  return genreUsableObject;
};

const getGenres = () => dispatch => (
  genreService.getGenres()
    .then(
      (response) => {
        const genres = makeGenresUsable(response);

        dispatch({
          type: genreConstants.ADD_GENRES,
          payload: { genres },
        });

        return Promise.resolve(genres);
      },
      error => Promise.reject(error),
    ).catch(() => {})
);

export default {
  getGenres,
};
