// import Consts from '../../lib/Constants';
// import RequestsURLsCreator from '../../js/RequestsURLsCreator';

// const loadMovies = movies => ({
//   type: Consts.LOAD_MOVIES_BY_PAGE_NAME,
//   payload: {
//     isMoviesLoaded: true,
//     moviesList: movies,
//   },
// });

// const loadMoviesByPageNumber = pageNumber => dispatch => (
//   fetch(RequestsURLsCreator.loadPopularMoviesByPageNumber(pageNumber))
//     .then(response => response.json())
//     .then((json) => {
//       dispatch(loadMovies(json));
//     })
//     .catch(() => {})
// );

// export default {
//   loadMovies,
//   loadMoviesByPageNumber,
// };
