import { PUBLIC_URL } from "./app.constants";

const HOME_PAGE = `${PUBLIC_URL}/`;
const ABOUT_PAGE = `${PUBLIC_URL}/about`;
const BOOKMARKS_PAGE = `${PUBLIC_URL}/bookmarks`;
const MOVIE_PAGE = `${PUBLIC_URL}/movie`;

const NAVIGATION_LIST = [HOME_PAGE, ABOUT_PAGE, BOOKMARKS_PAGE];

export default {
  HOME_PAGE,
  BOOKMARKS_PAGE,
  MOVIE_PAGE,
  NAVIGATION_LIST,
};
