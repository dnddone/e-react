import { notificationConstants } from '../_constants';

export const notificationExpired = () => dispatch => (
  dispatch({
    type: notificationConstants.NOTIFICATION_EXPIRED,
  })
);

export default {
  notificationExpired,
};
