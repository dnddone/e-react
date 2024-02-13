import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  number,
  shape,
  objectOf,
  func,
  arrayOf,
  bool,
  string,
} from "prop-types";
import BookmarkStar from "../BookmarkStar";
import { isObjectEmpty, imagePosterPath } from "../../_helpers/utils";
import { pathsConstants } from "../../_constants";

const propTypes = {
  bookmarkButtonHandler: func.isRequired,
  genres: objectOf(string).isRequired,
  isBookmarkAdded: bool,
  movie: shape({
    id: number.isRequired,
    title: string.isRequired,
    genre_ids: arrayOf(number),
    overview: string,
  }).isRequired,
};

const defaultProps = {
  isBookmarkAdded: [],
};

// It is the movie's container at /home page.
class MovieBlock extends Component {
  getGenresFromIDs = () => {
    const { genres, movie } = this.props;

    if (isObjectEmpty(genres)) {
      return "Genres error";
    }

    if (movie.genres) {
      return movie.genres.map(({ id }) => genres[id]).join(", ");
    }

    return movie.genre_ids.map((id) => genres[id]).join(", ");
  };

  render() {
    const {
      bookmarkButtonHandler,
      isBookmarkAdded,
      movie: { id, title, poster_path: posterPath },
    } = this.props;

    const image = imagePosterPath(posterPath);
    const movieData = { id, title };

    return (
      <li className="film__item film">
        <Link to={`${pathsConstants.MOVIE_PAGE}/${id}`} className="film__link">
          <BookmarkStar
            data={movieData}
            bookmarkButtonHandler={bookmarkButtonHandler}
            isBookmarkAdded={isBookmarkAdded}
          />
          <h2 className="film__title">{title}</h2>
          <img src={image} className="film__image" alt={title} />
          <div className="film__description">{this.getGenresFromIDs()}</div>
        </Link>
      </li>
    );
  }
}

MovieBlock.propTypes = propTypes;
MovieBlock.defaultProps = defaultProps;

export default MovieBlock;
