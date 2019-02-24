import { movieConstants } from '../_constants';

export default (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case movieConstants.MOVIE_REQUEST:
      return {
        ...state,
        // action.payload.genres
      };
    case movieConstants.MOVIE_SUCCES:
      return action.payload.genres;
    case movieConstants.MOVIE_FAILURE:
      return action.payload.genres;
    default:
      return state;
  }
};
