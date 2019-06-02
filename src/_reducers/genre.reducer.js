import { movieConstants } from '../_constants';

export default (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case movieConstants.GENRES_SAVE:
      return action.payload.genres;
    default:
      return state;
  }
};
