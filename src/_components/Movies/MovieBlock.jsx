import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  number,
  shape,
  objectOf,
  func,
  arrayOf,
  bool,
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
  isBookmarkAdded: bool,
  movie: shape({
    id: number.isRequired,
    title: string.isRequired,
    genre_ids: arrayOf(number),
    overview: string,
  }).isRequired,
};

const defaultProps = {
  genreIDs: [],
  isBookmarkAdded: [],
};

// It is the movie's container at /home page.
class MovieBlock extends Component {
  getGenresFromIDs = () => {
    const { genres, genreIDs: ids } = this.props;

    return isObjectEmpty(genres)
      ? 'Genres error'
      : ids.map(id => genres[id]).join(', ');
  };

  imagePosterPath = path =>
    (path ? `https://image.tmdb.org/t/p/w300${path}` : NoImagePNG);

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

    const image = this.imagePosterPath(posterPath);
    const bookmarkNotificationInfo = { id, title };

    return (
      <li className="film__item film">
        <Link to={`/movie/${id}`} className="film__link">
          <BookmarkStar
            id={id}
            data={bookmarkNotificationInfo}
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
