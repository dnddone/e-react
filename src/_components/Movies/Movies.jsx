import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MovieBlock from './MovieBlock';
import bookmarkActions from '../../_actions/bookmark.actions';
import { bookmarkChecker } from '../../_helpers/utils';

const propTypes = {
  bookmarkButtonHandler: PropTypes.func,
  genres: PropTypes.shape({}),
  bookmarks: PropTypes.arrayOf(PropTypes.number),
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    overview: PropTypes.string,
  })).isRequired,
};

const defaultProps = {
  bookmarks: [],
  genres: {},
  bookmarkButtonHandler: () => {},
};

class Movies extends PureComponent {
  getBookmarkAdded = () => {
    const { movies, bookmarks } = this.props;

    return movies.map(({ id }) => bookmarkChecker(id, bookmarks));
  }

  render() {
    const {
      movies,
      genres,
      bookmarkButtonHandler,
    } = this.props;

    const isAnyMovie = movies.length;
    const isBookmarkAddedArray = this.getBookmarkAdded();

    if (isAnyMovie) {
      return (
        <ul className="film__list">
          {movies.map((movie, index) => (
            <MovieBlock
              movie={movie}
              genreIDs={movie.genre_ids}
              isBookmarkAdded={isBookmarkAddedArray[index]}
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
  const { genres, bookmarks } = state;
  return {
    genres,
    bookmarks,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
