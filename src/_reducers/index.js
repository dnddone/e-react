import { combineReducers } from 'redux';

import movies from './movie.reducer';
import notification from './notification.reducer';
import genres from './genre.reducer';
import pagination from './pagination.reducer';

const rootReducer = combineReducers({
  movies,
  genres,
  pagination,
  notification,
});

export default rootReducer;
