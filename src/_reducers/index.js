import { combineReducers } from 'redux';

import movies from './movie.reducer';
import info from './info.reducer';
import notification from './notification.reducer';
import genres from './genre.reducer';
import pagination from './pagination.reducer';
import bookmarks from './bookmark.reducer';

import loading from './api/loading.reducer';
import error from './api/error.reducer';
import lastFetch from './api/lastFetch.reducer';

const rootReducer = combineReducers({
  movies,
  info,
  genres,
  bookmarks,
  pagination,
  notification,
  api: combineReducers({
    loading,
    error,
    lastFetch,
  }),
});

export default rootReducer;
