import { bookmarkConstants } from '../_constants';

export default (state = [], action) => {
  const { type } = action;

  switch (type) {
    case bookmarkConstants.BOOKMARK_GET:
    case bookmarkConstants.BOOKMARK_UPDATE:
      return action.payload;
    case bookmarkConstants.BOOKMARK_RESET:
      return [];
    default:
      return state;
  }
};
