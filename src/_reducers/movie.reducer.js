import { movieConstants } from '../_constants';

export default (state = [], action) => {
  const { type } = action;

  switch (type) {
    case movieConstants.ADD_MOVIES_POPULAR:
    case movieConstants.SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
};
