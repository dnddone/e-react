import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  number,
  shape,
  objectOf,
  func,
  arrayOf,
  string,
} from 'prop-types';
import BookmarkStar from '../BookmarkStar';
import NoImagePNG from '../../assets/images/no-image.png';
import { isObjectEmpty } from '../../_helpers/utils';

const propTypes = {
  id: number.isRequired,
  bookmarkButtonHandler: func.isRequired,
  genres: objectOf(string).isRequired,
  genreIDs: arrayOf(number),
  movie: shape({
    id: number.isRequired,
    title: string.isRequired,
    genre_ids: arrayOf(number),
    overview: string,
  }).isRequired,
};

const defaultProps = {
  genreIDs: [],
};

// It is the movie's container at /home or /bookmarks pages.
class MovieBlock extends Component {
  // componentWillMount() {
  //  const isAlreadyBookmarked = localStorage.getItem(this.state.id.toString()) ? 'added' : '';

  // this.setState({ isBookmark: isAlreadyBookmarked });
  // }

  closestByClass = (elements, clazz) => {
    // Traverse the DOM up with a while loop
    const regexClazz = new RegExp(clazz);
    let { className } = elements;

    while (!regexClazz.test(className)) {
      // Increment the loop to the parent node
      const element = elements.parentNode;

      if (!element) {
        return false;
      }

      className = (typeof element.className) === 'string' ? element.className : '';
    }
    // At this point, the while loop has stopped and `element` represents the element that has
    // the class you specified in the second parameter of the function `clazz`

    // Then return the matched element
    return true;
  }

  toggleLocalStorageBookmark = (id) => {
    // Single toogle bookmark for fast getting from localStorage by id;
    const idString = id.toString();
    const localStorageExist = localStorage.getItem(idString);

    // let shouldAddIDtoLocalStorageArray = true;
    let result;

    if (localStorageExist) {
      localStorage.removeItem(idString);
      result = false;
    } else {
      localStorage.setItem(idString, 'true');
      result = true;
    }

    // if result is `true`, add ID then, if `false` remove that ID from localStorage.
    if (result) {
      // this.props.addID(id, this.props.movie.title);
    } else {
      // this.props.removeID(id, this.props.movie.title);
    }

    // this.updateLocalStorageBookmarkMovies(id, result);

    return result;
  }

  // updateLocalStorageBookmarkMovies = (id, prevResultAddingRemoving) => {
  // Full list of movies' bookmark list from localStorage
  // const shouldIAdd = prevResultAddingRemoving;
  // const arrayIDs = this.getLocalStorageArray();
  // let stringIDs;

  // if (shouldIAdd) {
  //   arrayIDs.push(id);
  //   stringIDs = arrayIDs.join('/');
  // } else if (arrayIDs.length > 0) {
  //   const index = arrayIDs.indexOf(id.toString());

  //   if (index > -1) { arrayIDs.splice(index, 1); }

  //   stringIDs = arrayIDs.join('/');
  // }

  // localStorage.setItem('ids', stringIDs);
  // }

  getLocalStorageArray = () => {
    const localStorageIDsArray = localStorage.getItem('ids');

    return localStorageIDsArray ? localStorageIDsArray.split('/') : [];
  }

  onBookmarkClickHandler = (event) => {
    // When bookmark star button is clicked
    if (this.closestByClass(event.target, 'bookmark')) {
      event.preventDefault();
      // const { id } = this.state;
      // const isBookmark = this.toggleLocalStorageBookmark(id) ? 'added' : '';

      // this.setState({ isBookmark: isBookmark });
    }
  }

  getGenresFromIDs = () => {
    const { genres, genreIDs: ids } = this.props;

    return isObjectEmpty(genres)
      ? 'Genres error'
      : ids.map(id => genres[id]).join(', ');
  };

  render() {
    const {
      id,
      bookmarkButtonHandler,
      isBookmarkAdded,
      movie: {
        title,
        poster_path: posterPath,
      },
    } = this.props;

    const image = posterPath
      ? `https://image.tmdb.org/t/p/w300${posterPath}`
      : NoImagePNG;

    return (
      <li className="film__item film">
        <Link to={`/movie/${id}`} className="film__link">
          <BookmarkStar
            id={id}
            bookmarkButtonHandler={bookmarkButtonHandler}
            isBookmarkAdded={isBookmarkAdded}
          />
          <h2 className="film__title">{title}</h2>
          <img src={image} className="film__image" alt={`${title}`} />
          <div className="film__description">{this.getGenresFromIDs()}</div>
        </Link>
      </li>
    );
  }
}

MovieBlock.propTypes = propTypes;
MovieBlock.defaultProps = defaultProps;

export default MovieBlock;
