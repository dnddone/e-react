import { bookmarkService } from '../_services';
import { bookmarkConstants } from '../_constants';
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

export default {
  getBookmarks,
  updateBookmarks,
};
