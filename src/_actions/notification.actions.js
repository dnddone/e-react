import { notificationConstants } from '../_constants';
import { reduce } from '../_helpers/utils';

export const notificationExpired = (id, status) => (dispatch, getState) => {
  const { notification } = getState();
  let notificationUpdated;

  if (id) {
    notificationUpdated = notification.filter(data => (
      // Remove notification by `id` and `status`
      !(data.id === id && data.status === status)
    ));
  } else {
    // Or remove first item
    notificationUpdated = notification.slice(1, 3);
  }

  return dispatch(reduce(notificationConstants.NOTIFICATION_EXPIRED, notificationUpdated));
};

export default {
  notificationExpired,
};
