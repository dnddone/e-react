import React, { PureComponent } from 'react';
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
  bookmarks: arrayOf(number),
  movies: arrayOf(shape({
    id: number.isRequired,
    title: string.isRequired,
    genre_ids: arrayOf(number),
    overview: string,
  })),
};

const defaultProps = {
  movies: [],
  bookmarks: [],
  genres: {},
  bookmarkButtonHandler: () => {},
};

class Movies extends PureComponent {
  getBookmarkAdded = () => {
    const { movies, bookmarks } = this.props;

    return movies.map((movie) => {
      const look = bookmarks.some((id) => {
        if (movie.id === id) {
          // console.log(`Movie [${movie.id}] and id [${id}]`);
        }
        return movie.id === id;
      });

      // console.log(`Look = [${look}]`);
      return look;
    });
  };

  render() {
    const {
      movies,
      genres,
      bookmarkButtonHandler,
    } = this.props;

    const isAnyMovie = movies.length;
    const isBookmarkAdded = this.getBookmarkAdded();

    if (isAnyMovie) {
      return (
        <ul className="film__list">
          {movies.map((movie, index) => (
            <MovieBlock
              movie={movie}
              genreIDs={movie.genre_ids}
              isBookmarkAdded={isBookmarkAdded[index]}
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
  }
}

Movies.propTypes = propTypes;
Movies.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => ({
  bookmarkButtonHandler: (id, title) => dispatch(bookmarkActions.updateBookmarks(id, title)),
});

const mapStateToProps = (state) => {
  const { genres, movies, bookmarks } = state;
  return {
    genres,
    movies,
    bookmarks,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
