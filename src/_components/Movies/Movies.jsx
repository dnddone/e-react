import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MovieBlock from './MovieBlock';
import bookmarkActions from '../../_actions/bookmark.actions';
import { bookmarkChecker } from '../../_helpers/utils';

const propTypes = {
  genres: PropTypes.shape({}),
  bookmarks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })),
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    overview: PropTypes.string,
  })).isRequired,
  updateBookmarksAction: PropTypes.func,
};

const defaultProps = {
  bookmarks: [],
  genres: {},
  updateBookmarksAction: () => {},
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
      updateBookmarksAction,
    } = this.props;

    const isAnyMovie = movies.length;
    const isBookmarkAddedArray = this.getBookmarkAdded();

    if (isAnyMovie) {
      return (
        <ul className="film__list">
          {movies.map((movie, index) => (
            <MovieBlock
              key={movie.id}
              movie={movie}
              isBookmarkAdded={isBookmarkAddedArray[index]}
              genres={genres}
              bookmarkButtonHandler={updateBookmarksAction}
            />
          ))}
        </ul>
      );
    }

    return (<div className="film__user">The movie list is empty</div>);
  }
}

Movies.propTypes = propTypes;
Movies.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => ({
  updateBookmarksAction: data => dispatch(bookmarkActions.updateBookmarks(data)),
});

const mapStateToProps = state => ({
  genres: state.genres,
  bookmarks: state.bookmarks,
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
