import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { movieActions } from '../../_actions';

import ContextMovies from '../ContextMovies';
import Movies from '../Movies';
import Pagination from '../Pagination';

const propTypes = {
  getMoviePopularAction: PropTypes.func.isRequired,
  searchMovieAction: PropTypes.func.isRequired,
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
    const { searchMovieAction, getMoviePopularAction } = this.props;
    if (search) {
      searchMovieAction(search);
    } else {
      getMoviePopularAction();
    }
  }

  render() {
    const { movies, getMoviePopularAction } = this.props;

    return (
      <ContextMovies
        className="home"
        searchHandler={this.searchHandler}
        getContextMovie={getMoviePopularAction}
      >
        <Movies movies={movies} />
        <Pagination paginationHandler={getMoviePopularAction} />
      </ContextMovies>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getMoviePopularAction: page => dispatch(movieActions.getMoviePopular(page)),
  searchMovieAction: query => dispatch(movieActions.searchMovie(query)),
});

const mapStateToProps = state => ({
  movies: state.movies,
});

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// {(isInfoPage && <h1 className="recommendations__title">Movie recommendations</h1>)}
// (error && <div className="film__user color-error">Error: {error.message}</div>)
