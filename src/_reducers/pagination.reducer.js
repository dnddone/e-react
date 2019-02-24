import { movieConstants } from '../_constants';

export default (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case movieConstants.PAGINATION_UPDATE:
      return {
        page: action.payload.page,
        totalPages: action.payload.total_pages,
      };

    case movieConstants.PAGINATION_RESET:
      return {
        page: 1,
        totalPages: 1,
      };

    default:
      return state;
  }
};
