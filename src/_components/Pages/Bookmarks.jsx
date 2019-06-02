import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bookmarkActions } from '../../_actions';

import ContextMovies from '../ContextMovies';
import Movies from '../Movies';
import Pagination from '../Pagination';

const propTypes = {
  getBookmarkMoviesAction: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    overview: PropTypes.string,
  })).isRequired,
};

const defaultProps = {
  getBookmarkMoviesAction: () => {},
};

// It shows the moevies from bookmark list at hostname/bookmarks
class Bookmarks extends PureComponent {
  render() {
    const { movies, getBookmarkMoviesAction } = this.props;

    return (
      <ContextMovies
        showSearchInput={false}
        className="bookmarks"
        searchHandler={() => {}}
        getContextMovieAction={getBookmarkMoviesAction}
      >
        <Movies movies={movies} />
        <Pagination paginationHandler={getBookmarkMoviesAction} />
      </ContextMovies>
    );
  }
}

Bookmarks.propTypes = propTypes;
Bookmarks.defaultProps = defaultProps;

const mapStateToProps = state => ({
  movies: state.movies,
  bookmarks: state.bookmarks,
});

const mapDispatchToProps = dispatch => ({
  getBookmarkMoviesAction: page => dispatch(bookmarkActions.getBookmarkMovies(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);
