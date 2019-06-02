import { bookmarkConstants } from '../_constants';

export default (state = [], action) => {
  const { type } = action;

  switch (type) {
    case bookmarkConstants.SAVE:
      return action.payload.slice();
    case bookmarkConstants.RESET:
      return [];
    default:
      return state;
  }
};
