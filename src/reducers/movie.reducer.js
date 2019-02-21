import { movieConstants } from '../constants';

export default (state = [], action) => {
  const { type, payload: movies } = action;

  switch (type) {
    case movieConstants.ADD_MOVIE_POPULAR:
      return movies;
    default:
      return state;
  }
};
