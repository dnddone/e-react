import { notificationConstants } from '../_constants';

export default (state = [], action) => {
  const { type } = action;

  switch (type) {
    case notificationConstants.ADD:
    case notificationConstants.REMOVE:
    case notificationConstants.EXPIRED:
      return [...action.payload];
    default:
      return state;
  }
};
