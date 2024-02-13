import { movieService } from "../_services";
import { movieConstants, bookmarkConstants } from "../_constants";
import * as bookmarksUtils from "../_helpers/bookmarksUtils";
import { reduce } from "../_helpers/utils";

import notificationActions from "./notification.actions";

const getBookmarks = () => (dispatch) => {
  const bookmarks = bookmarksUtils.getBookmarks();
  return dispatch(reduce(bookmarkConstants.SAVE, bookmarks));
};

const updateBookmarks = (data) => (dispatch, getState) => {
  const { bookmarks } = getState();
  const { id } = data;
  let index = -1;

  const newBookmark = bookmarks.some((bookmark) => {
    const is = bookmark.id === id;
    if (is) {
      index = id;
    }
    return is;
  });

  if (newBookmark) {
    bookmarks.splice(index, 1);
    dispatch(notificationActions.remove(data));
  } else {
    bookmarks.push(data);
    dispatch(notificationActions.add(data));
  }

  bookmarksUtils.updateBookmarks(bookmarks);
  return dispatch(reduce(bookmarkConstants.SAVE, bookmarks));
};

const moviesPerPage = 9;
const getBookmarkMovies =
  (page = 1) =>
  (dispatch, getState) => {
    const { bookmarks: getStateBookmarks } = getState();
    const bookmarks = getStateBookmarks.length
      ? getStateBookmarks
      : bookmarksUtils.getBookmarks();

    const moviesIDPromises = [];

    const baseMoviesIterator = moviesPerPage * (page - 1);

    for (
      let i = baseMoviesIterator;
      i < baseMoviesIterator + moviesPerPage;
      i += 1
    ) {
      if (i < bookmarks.length) {
        moviesIDPromises.push(movieService.getMovieById(bookmarks[i].id));
      }
    }

    dispatch(reduce(movieConstants.MOVIES_REQUEST));
    Promise.all(moviesIDPromises)
      .then((get) => {
        dispatch(reduce(movieConstants.MOVIES_SUCCESS));
        dispatch(reduce(movieConstants.SAVE, get));
        dispatch(
          reduce(movieConstants.PAGINATION_SAVE, {
            page,
            // Round up page amount to make a number not float
            total: Math.ceil(bookmarks.length / moviesPerPage),
          })
        );
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
