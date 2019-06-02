import { reduce } from '../_helpers/utils';
import { movieService } from '../_services';
import { movieConstants } from '../_constants';

const getMoviesPopular = (page = 1) => (dispatch) => {
  dispatch(reduce(movieConstants.MOVIES_REQUEST));
  return (movieService.getMoviesPopular(page)
    .then((movies) => {
      const {
        page: paginationPage,
        total_pages: paginationTotal,
        results,
      } = movies; // results is movie data array

      dispatch(reduce(movieConstants.MOVIES_SUCCESS));
      dispatch(reduce(movieConstants.SAVE, results));
      dispatch(reduce(movieConstants.PAGINATION_SAVE, {
        page: paginationPage,
        total: paginationTotal,
      }));

      return Promise.resolve(movies);
    })
    .catch((error) => {
      dispatch(reduce(movieConstants.MOVIES_FAILURE, error.message));
      return Promise.reject(error);
    })
  );
};

const getMovieById = id => (dispatch) => {
  dispatch(reduce(movieConstants.MOVIEINFO_REQUEST));
  return (movieService.getMovieById(id)
    .then((movie) => {
      dispatch(reduce(movieConstants.MOVIEINFO_SUCCESS));
      dispatch(reduce(movieConstants.MOVIEINFO_SAVE, movie));
      return Promise.resolve(movie);
    })
    .catch((error) => {
      dispatch(reduce(movieConstants.MOVIEINFO_FAILURE, error.message));
      return Promise.reject(error);
    })
  );
};

const searchMovies = query => (dispatch) => {
  dispatch(reduce(movieConstants.SEARCH_REQUEST));
  return (movieService.searchMovies(query)
    .then((movies) => {
      const {
        page: paginationPage,
        total_pages: paginationTotal,
        results,
      } = movies; // results is movie data array

      dispatch(reduce(movieConstants.SEARCH_SUCCESS));
      dispatch(reduce(movieConstants.SEARCH_QUERY, results));
      dispatch(reduce(movieConstants.PAGINATION_SAVE, {
        page: paginationPage,
        total: paginationTotal,
      }));

      return Promise.resolve(movies);
    })
    .catch((error) => {
      dispatch(reduce(movieConstants.SEARCH_FAILURE, error.message));
      return Promise.reject(error);
    })
  );
};

const resetMovieInfo = () => ({ type: movieConstants.MOVIEINFO_RESET });

export default {
  getMoviesPopular,
  getMovieById,
  resetMovieInfo,
  searchMovies,
};
