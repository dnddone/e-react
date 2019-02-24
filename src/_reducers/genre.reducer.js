import { genreConstants } from '../_constants';

export default (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case genreConstants.ADD_GENRES:
      return action.payload.genres;
    default:
      return state;
  }
};
