import { notificationConstants } from '../_constants';

export default (state = [], action) => {
  const { type } = action;

  switch (type) {
    case notificationConstants.NOTIFICATION_ADD:
      return [
        ...state,
        {
          status: true,
          ...action.payload,
        },
      ];
    case notificationConstants.NOTIFICATION_REMOVE:
      return [
        ...state,
        {
          status: false,
          ...action.payload,
        },
      ];
    case notificationConstants.NOTIFICATION_EXPIRED:
      return [
        ...state.slice(1),
      ];
    default:
      return state;
  }
};
