import { movieConstants } from '../_constants';

export default (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case movieConstants.MOVIEINFO_ADD:
      return action.payload;
    case movieConstants.MOVIEINFO_RESET:
      return {};
    default:
      return state;
  }
};
