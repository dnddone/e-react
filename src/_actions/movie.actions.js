import { reduce } from '../_helpers/utils';
import { movieService } from '../_services';
import { movieConstants } from '../_constants';

const getMoviePopular = (page = 1) => (dispatch) => {
  dispatch(reduce(movieConstants.MOVIES_REQUEST));
  return (movieService.getMoviePopular(page)
    .then((movies) => {
      /* eslint-disable-next-line */
      const { page, total_pages, results } = movies; // results is movie data array

      dispatch(reduce(movieConstants.MOVIES_SUCCESS));
      dispatch(reduce(movieConstants.SAVE, results));
      dispatch(reduce(movieConstants.PAGINATION_UPDATE, { page, total_pages }));

      return Promise.resolve(movies);
    })
    .catch((error) => {
      dispatch(reduce(movieConstants.MOVIE_FAILURE, error.message));
      return Promise.reject(error);
    })
  );
};

const getMovieById = id => (dispatch) => {
  dispatch(reduce(movieConstants.MOVIEINFO_REQUEST));
  return (movieService.getMovieById(id)
    .then((movies) => {
      dispatch(reduce(movieConstants.MOVIEINFO_SUCCESS));
      dispatch(reduce(movieConstants.MOVIEINFO_ADD, movies));
      return Promise.resolve(movies);
    })
    .catch((error) => {
      dispatch(reduce(movieConstants.MOVIEINFO_FAILURE, error.message));
      return Promise.reject(error);
    })
  );
};

const searchMovie = query => (dispatch) => {
  dispatch(reduce(movieConstants.SEARCH_REQUEST));
  return (movieService.searchMovie(query)
    .then((movies) => {
      /* eslint-disable-next-line */
      const { page, total_pages, results } = movies;

      dispatch(reduce(movieConstants.SEARCH_SUCCESS));
      dispatch(reduce(movieConstants.SEARCH_QUERY, results));
      dispatch(reduce(movieConstants.PAGINATION_UPDATE, { page, total_pages }));
      return Promise.resolve(movies);
    })
    .catch((error) => {
      dispatch(reduce(movieConstants.SEARCH_FAILURE, error.message));
      return Promise.reject(error);
    })
  );
};

const movieInfoReset = () => ({ type: movieConstants.MOVIEINFO_RESET });

export default {
  getMoviePopular,
  getMovieById,
  movieInfoReset,
  searchMovie,
};
