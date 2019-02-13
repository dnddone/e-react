/* eslint-disable prefer-destructuring */
const env = process.env;
/* eslint-enable prefer-destructuring */

export const SERVER_URL = env.REACT_APP_SERVER_URL || '';
export const PUBLIC_URL = env.PUBLIC_URL || '';
export const FETCH_TIMEOUT = env.REACT_APP_FETCH_TIMEOUT || 30000;

export default {
  SERVER_URL,
  PUBLIC_URL,
  FETCH_TIMEOUT,
};
