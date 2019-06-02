import { movieConstants } from '../_constants';

export default (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case movieConstants.PAGINATION_SAVE:
      return {
        page: action.payload.page,
        total: action.payload.total,
      };

    case movieConstants.PAGINATION_RESET:
      return {
        page: null,
        total: null,
      };

    default:
      return state;
  }
};
