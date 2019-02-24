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

const getGenres = () => dispatch => (
  genreService.getGenres()
    .then(
      (response) => {
        const genres = makeGenresUsable(response);

        dispatch(reduce(genreConstants.ADD_GENRES, { genres }));

        return Promise.resolve(genres);
      },
      error => Promise.reject(error),
    ).catch(() => {})
);

export default {
  getGenres,
};
