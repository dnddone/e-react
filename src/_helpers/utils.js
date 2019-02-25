export const reduce = (type, payload) => ({ type, payload });

export const isObjectEmpty = obj =>
  Object.entries(obj).length === 0 && obj.constructor === Object;

export default {
  reduce,
  isObjectEmpty,
};
