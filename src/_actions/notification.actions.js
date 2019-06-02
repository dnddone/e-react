import { notificationConstants } from '../_constants';
import { reduce, uniqueFilter } from '../_helpers/utils';

const add = ({ id, title }) => (dispatch, getState) => {
  const { notification } = getState();
  const notificationFiltered = notification.filter(uniqueFilter(id, true));

  notificationFiltered.push({
    status: true,
    id,
    title,
  });

  return dispatch(reduce(notificationConstants.ADD, notificationFiltered));
};

const remove = ({ id, title }) => (dispatch, getState) => {
  const { notification } = getState();
  const notificationFiltered = notification.filter(uniqueFilter(id, false));

  notificationFiltered.push({
    status: false,
    id,
    title,
  });

  return dispatch(reduce(notificationConstants.REMOVE, notificationFiltered));
};

export const expired = (id, status) => (dispatch, getState) => {
  const { notification } = getState();
  const notificationFiltered = notification.filter(uniqueFilter(id, status));

  return dispatch(
    reduce(notificationConstants.EXPIRED, notificationFiltered),
  );
};

export default {
  add,
  remove,
  expired,
};
