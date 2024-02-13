const env = process.env;

export const SERVER_URL = env.REACT_APP_SERVER_URL;
export const PUBLIC_URL = env.PUBLIC_URL || "/e-react";
export const FETCH_TIMEOUT = env.REACT_APP_FETCH_TIMEOUT || 30000;

export const API_TOKEN = "677522a533aae20a5fa0d80d392c1496";
export const API_KEY = `api_key=${API_TOKEN}`;

export default {
  SERVER_URL,
  PUBLIC_URL,
  FETCH_TIMEOUT,
  API_KEY,
  API_TOKEN,
};
