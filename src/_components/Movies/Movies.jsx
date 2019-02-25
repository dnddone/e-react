import React from 'react';
import { connect } from 'react-redux';
import {
  string,
  arrayOf,
  func,
  objectOf,
  shape,
  number,
} from 'prop-types';

import MovieBlock from './MovieBlock';
import bookmarkActions from '../../_actions/bookmark.actions';

const propTypes = {
  bookmarkButtonHandler: func,
  genres: objectOf(string),
  movies: arrayOf(shape({
    id: number.isRequired,
    title: string.isRequired,
    genre_ids: arrayOf(number),
    overview: string,
  })),
};

const defaultProps = {
  movies: [],
  genres: {},
  bookmarkButtonHandler: () => {},
};

const Movies = (props) => {
  const { movies, genres, bookmarkButtonHandler } = props;
  const isAnyMovie = movies.length;

  if (isAnyMovie) {
    return (
      <ul className="film__list">
        {movies.map(movie => (
          <MovieBlock
            movie={movie}
            genreIDs={movie.genre_ids}
            genres={genres}
            key={movie.id}
            id={movie.id}
            bookmarkButtonHandler={bookmarkButtonHandler}
          />
        ))}
      </ul>
    );
  }

  return (<div className="film__user">The movie list is empty!</div>);
};

Movies.propTypes = propTypes;
Movies.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => ({
  bookmarkButtonHandler: () => dispatch(bookmarkActions.updateBookmarks()),
});

const mapStateToProps = (state) => {
  const { genres, movies } = state;
  return {
    genres,
    movies,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
