import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { movieActions } from '../../_actions';

import ContextMovies from '../ContextMovies';
import Movies from '../Movies';
import Pagination from '../Pagination';

const propTypes = {
  getMoviesPopularAction: PropTypes.func.isRequired,
  searchMoviesAction: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    overview: PropTypes.string,
  })).isRequired,
};

const defaultProps = {};

class Home extends Component {
  searchHandler = (search) => {
    const { searchMoviesAction, getMoviesPopularAction } = this.props;
    if (search) {
      searchMoviesAction(search);
    } else {
      getMoviesPopularAction();
    }
  }

  render() {
    const { movies, getMoviesPopularAction } = this.props;

    return (
      <ContextMovies
        className="home"
        searchHandler={this.searchHandler}
        getContextMovie={getMoviesPopularAction}
      >
        <Movies movies={movies} />
        <Pagination paginationHandler={getMoviesPopularAction} />
      </ContextMovies>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getMoviesPopularAction: page => dispatch(movieActions.getMoviesPopular(page)),
  searchMoviesAction: query => dispatch(movieActions.searchMovies(query)),
});

const mapStateToProps = state => ({
  movies: state.movies,
});

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// {(isInfoPage && <h1 className="recommendations__title">Movie recommendations</h1>)}
// (error && <div className="film__user color-error">Error: {error.message}</div>)
