import NoImagePNG from '../assets/images/no-image.png';

export const reduce = (type, payload) => ({ type, payload });

export const isObjectEmpty = obj =>
  Object.entries(obj).length === 0 && obj.constructor === Object;

export const getMovieIdFromUrl = () => {
  const movie = 'movie';
  const movieLength = movie.length;
  const path = window.location.pathname;
  const moviePosition = path.indexOf(movie);

  const id = path.substring(moviePosition + movieLength + 1);

  try {
    return id ? parseInt(id, 10) : '';
  } catch (error) {
    console.log('Error id parsing');
  }

  return '';
};

export const getGenresForMovieInfo = (genres) => {
  return genres.map(genre => genre.name).join(', ');
};

export const separateBitNumber = number => (
  number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
);

export const imagePosterPath = path =>
  (path ? `https://image.tmdb.org/t/p/w300${path}` : NoImagePNG);

export const bookmarkChecker = (movieId, bookmarks) => (
  bookmarks.some(bookmarkId => movieId === bookmarkId)
);

export default {
  reduce,
  isObjectEmpty,
  getMovieIdFromUrl,
  getGenresForMovieInfo,
  imagePosterPath,
  bookmarkChecker,
};
