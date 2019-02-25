import { reduce } from '../_helpers/utils';
import { movieService } from '../_services';
import { movieConstants } from '../_constants';

const getMoviePopular = page => (dispatch) => {
  dispatch(reduce(movieConstants.MOVIES_REQUEST));
  return (movieService.getMoviePopular(page)
    .then((movie) => {
      /* eslint-disable */
      const { page, total_pages, results } = movie; // results is movie data array
      /* eslint-disable */

      dispatch(reduce(movieConstants.MOVIES_SUCCESS));
      dispatch(reduce(movieConstants.ADD_MOVIES_POPULAR, results));
      dispatch(reduce(movieConstants.PAGINATION_UPDATE, { page, total_pages }));

      return Promise.resolve(movie);
    })
    .catch((error) => {
      console.log(error);
      dispatch(reduce(movieConstants.MOVIE_FAILURE, error.message));
      return Promise.reject(error);
    })
  );
};

export default {
  getMoviePopular,
};
