import { bookmarkService } from '../_services';
import { bookmarkConstants, notificationConstants } from '../_constants';
import { reduce } from '../_helpers/utils';

const getBookmarks = () => (dispatch) => {
  const bookmarks = bookmarkService.getBookmarks();

  return dispatch(reduce(bookmarkConstants.BOOKMARK_GET, bookmarks));
};

const updateBookmarks = (id, title) => (dispatch, getState) => {
  // id = new id
  const { bookmarks } = getState();
  const index = bookmarks.indexOf(id);

  if (index > -1) {
    bookmarks.splice(index, 1);
    dispatch(reduce(notificationConstants.NOTIFICATION_REMOVE, { id, title }));
  } else {
    bookmarks.push(id);
    dispatch(reduce(notificationConstants.NOTIFICATION_ADD, { id, title }));
  }

  bookmarkService.updateBookmarks(bookmarks);
  return dispatch(reduce(bookmarkConstants.BOOKMARK_UPDATE, bookmarks));
};

export default {
  getBookmarks,
  updateBookmarks,
};
