import { bookmarkService } from '../_services';
import { bookmarkConstants } from '../_constants';
import { reduce } from '../_helpers/utils';
// import { reduce } from '../_helpers/utils';

const getBookmarks = () => {
  const bookmarks = bookmarkService.getBookmarks();

  return reduce(bookmarkConstants.BOOKMARK_GET, bookmarks);
};

const updateBookmarks = () => (dispatch, getState) => {
  // id = new id

  const array = getState();
  const bookmarks = array;

  // if (id) { bookmarks.push(id); }
  // bookmarkService.updateBookmarks(array);

  return reduce(bookmarkConstants.BOOKMARK_UPDATE, bookmarks);
};

// const getGenres = () => (dispatch) => {
//   dispatch(reduce(genreConstants.GENRES_REQUEST));
//   return genreService.getGenres()
//     .then((response) => {
//       const genres = makeGenresUsable(response);

//       dispatch(reduce(genreConstants.GENRES_SUCCESS));
//       dispatch(reduce(genreConstants.ADD_GENRES, { genres }));

//       return Promise.resolve(genres);
//     })
//     .catch(() => {
//       // dispatch(reduce(genreConstants.GENRES_FAILURE, error.message));
//       // return Promise.reject(error);
//     });
// };

export default {
  getBookmarks,
  updateBookmarks,
};
