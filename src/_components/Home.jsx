import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { movieActions } from '../_actions';
import ContextMovies from './ContextMovies';
// import SearchForm from './SearchForm';
import Movies from './Movies';
// import Pagination from './Pagination';

const propTypes = {
  getMoviePopular: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    overview: PropTypes.string,
  })).isRequired,
};

const defaultProps = {};

// It show movie's preview at home page
class Home extends Component {
  componentDidMount() {
    this.props.getMoviePopular();
  }

  handleSearch = (search) => {
    this.props.searchMovies(search);
  }

  render() {
    const { movies } = this.props;

    return (
      <ContextMovies
        className="home"
        handleSearch={this.handleSearch}
        getContextMovie={this.props.getMoviePopular}
      >
        <Movies movies={movies} />
      </ContextMovies>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getMoviePopular: (page = 1) => dispatch(movieActions.getMoviePopular(page)),
  searchMovies: query => dispatch(movieActions.searchMovies(query)),
});

const mapStateToProps = state => ({
  movies: state.movies,
});

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/* {(isInfoPage && <h1 className="recommendations__title">Movie recommendations</h1>)}
{(!isInfoPage && <SearchForm onChangeHandler={this.onChangeHandler} />)} */
// (error && <div className="film__user color-error">Error: {error.message}</div>)
