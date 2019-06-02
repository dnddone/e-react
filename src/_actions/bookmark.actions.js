import { bookmarkService, movieService } from '../_services';
import { movieConstants, bookmarkConstants } from '../_constants';
import { reduce } from '../_helpers/utils';

import notificationActions from './notification.actions';

const getBookmarks = () => (dispatch) => {
  const bookmarks = bookmarkService.getBookmarks();
  return dispatch(reduce(bookmarkConstants.SAVE, bookmarks));
};

const updateBookmarks = (id, title) => (dispatch, getState) => {
  // id = new id
  const { bookmarks } = getState();
  const index = bookmarks.indexOf(id);
  const notificationData = { id, title };

  if (index > -1) {
    bookmarks.splice(index, 1);
    dispatch(notificationActions.remove(notificationData));
  } else {
    bookmarks.push(id);
    dispatch(notificationActions.add(notificationData));
  }

  bookmarkService.updateBookmarks(bookmarks);
  return dispatch(reduce(bookmarkConstants.SAVE, bookmarks));
};

const moviesPerPage = 9;
const getBookmarkMovies = (page = 1) => (dispatch, getState) => {
  const { bookmarks: getStateBookmarks } = getState();
  const bookmarks = getStateBookmarks.length ? getStateBookmarks : bookmarkService.getBookmarks();

  const moviesIDPromises = [];

  const baseMoviesIterator = moviesPerPage * (page - 1);

  for (let i = baseMoviesIterator; i < baseMoviesIterator + moviesPerPage; i += 1) {
    if (i < bookmarks.length) {
      moviesIDPromises.push(movieService.getMovieById(bookmarks[i]));
    }
  }

  dispatch(reduce(movieConstants.MOVIES_REQUEST));
  Promise.all(moviesIDPromises)
    .then((get) => {
      dispatch(reduce(movieConstants.MOVIES_SUCCESS));
      dispatch(reduce(movieConstants.SAVE, get));
      dispatch(reduce(movieConstants.PAGINATION_SAVE, {
        page,
        total: Math.ceil(bookmarks.length / moviesPerPage),
      }));
    })
    .catch((error) => {
      dispatch(reduce(movieConstants.MOVIES_FAILURE, error.message));
      return Promise.reject(error);
    });
};

export default {
  getBookmarks,
  updateBookmarks,
  getBookmarkMovies,
};
