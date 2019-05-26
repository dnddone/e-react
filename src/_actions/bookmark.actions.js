import { bookmarkService, movieService } from '../_services';
import { movieConstants, bookmarkConstants } from '../_constants';
import { reduce } from '../_helpers/utils';

import notificationActions from './notification.actions';

const getBookmarks = () => (dispatch) => {
  const bookmarks = bookmarkService.getBookmarks();
  return dispatch(reduce(bookmarkConstants.BOOKMARK_GET, bookmarks));
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
  return dispatch(reduce(bookmarkConstants.BOOKMARK_UPDATE, bookmarks));
};

const getBookmarkMovies = () => (dispatch, getState) => {
  const { bookmarks: getStateBookmarks } = getState();
  const bookmarks = getStateBookmarks.length ? getStateBookmarks : bookmarkService.getBookmarks();

  const fork = bookmarks.map(id => movieService.getMovieById(id));

  dispatch(reduce(movieConstants.MOVIES_REQUEST));
  Promise.all(fork)
    .then((get) => {
      dispatch(reduce(movieConstants.MOVIES_SUCCESS));
      dispatch(reduce(movieConstants.SAVE, get));
    })
    .catch((error) => {
      dispatch(reduce(movieConstants.MOVIE_FAILURE, error.message));
      return Promise.reject(error);
    });
};

export default {
  getBookmarks,
  updateBookmarks,
  getBookmarkMovies,
};
