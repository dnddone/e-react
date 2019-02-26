import { bookmarkService } from '../_services';
import { bookmarkConstants } from '../_constants';
import { reduce } from '../_helpers/utils';
// import { reduce } from '../_helpers/utils';

const getBookmarks = () => (dispatch) => {
  const bookmarks = bookmarkService.getBookmarks();

  return dispatch(reduce(bookmarkConstants.BOOKMARK_GET, bookmarks));
};

const updateBookmarks = id => (dispatch, getState) => {
  // id = new id
  const { bookmarks } = getState();
  const index = bookmarks.indexOf(id);

  if (index > -1) {
    bookmarks.splice(index, 1);
  } else {
    bookmarks.push(id);
  }

  bookmarkService.updateBookmarks(bookmarks);
  return dispatch(reduce(bookmarkConstants.BOOKMARK_UPDATE, bookmarks));
};

export default {
  getBookmarks,
  updateBookmarks,
};
