import { movieService } from '../services';
import { movieConstants } from '../constants';

const getMoviePopular = page => dispatch => (
  movieService.getMoviePopular(page)
    .then(
      (movie) => {
        /* eslint-disable */
        const { page, total_pages, results } = movie; // results is movie data array
        /* eslint-disable */

        console.log(movie);

        dispatch({
          type: movieConstants.ADD_MOVIE_POPULAR,
          payload: results,
        });
        
        dispatch({
          type: movieConstants.PAGINATION_UPDATE,
          payload: { page, total_pages },
        });

        return Promise.resolve(movie);
      },
      error => Promise.reject(error),
    )
);

export default {
  getMoviePopular,
};
