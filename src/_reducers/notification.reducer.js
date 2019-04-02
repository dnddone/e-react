import { notificationConstants } from '../_constants';

export default (state = [], action) => {
  const { type } = action;

  switch (type) {
    case notificationConstants.NOTIFICATION_ADD:
    case notificationConstants.NOTIFICATION_REMOVE:
    case notificationConstants.NOTIFICATION_EXPIRED:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
};
