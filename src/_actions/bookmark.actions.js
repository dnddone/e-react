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

const pagePerPage = 9;
const getBookmarkMovies = (page = 1) => (dispatch, getState) => {
  const { bookmarks: getStateBookmarks } = getState();
  const bookmarks = getStateBookmarks.length ? getStateBookmarks : bookmarkService.getBookmarks();

  const fork = [];

  const forPageFor = pagePerPage * (page - 1);

  for (let i = forPageFor; i < forPageFor + pagePerPage; i += 1) {
    if (i < bookmarks.length) {
      fork.push(movieService.getMovieById(bookmarks[i]));
    }
  }

  dispatch(reduce(movieConstants.MOVIES_REQUEST));
  Promise.all(fork)
    .then((get) => {
      dispatch(reduce(movieConstants.MOVIES_SUCCESS));
      dispatch(reduce(movieConstants.SAVE, get));
      dispatch(reduce(movieConstants.PAGINATION_UPDATE, {
        page,
        totalPages: Math.ceil(bookmarks.length / pagePerPage),
      }));
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
