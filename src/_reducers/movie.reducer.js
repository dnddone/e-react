import { movieConstants } from '../_constants';

export default (state = [], action) => {
  const { type, payload: movies } = action;

  switch (type) {
    case movieConstants.ADD_MOVIES_POPULAR:
      return movies;
    default:
      return state;
  }
};
