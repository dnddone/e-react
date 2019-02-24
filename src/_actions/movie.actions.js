import { reduce } from '../_helpers/utils';
import { movieService } from '../_services';
import { movieConstants } from '../_constants';

const getMoviePopular = page => (dispatch) => {
  dispatch(reduce());
  return (movieService.getMoviePopular(page)
    .then(
      (movie) => {
        /* eslint-disable */
        const { page, total_pages, results } = movie; // results is movie data array
        /* eslint-disable */

        dispatch(reduce(movieConstants.ADD_MOVIE_POPULAR, results));
        dispatch(reduce(movieConstants.PAGINATION_UPDATE, { page, total_pages }));

        return Promise.resolve(movie);
      },
      error => Promise.reject(error),
    )
  );
};

export default {
  getMoviePopular,
};
