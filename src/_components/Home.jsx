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
};

const defaultProps = {};

// It show movie's preview at home page
class Home extends Component {
  componentDidMount() {
    this.props.getMoviePopular();
  }

  render() {
    return (
      <ContextMovies
        className="home"
        getContextMovie={this.props.getMoviePopular}
      >
        <Movies />
      </ContextMovies>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getMoviePopular: (page = 1) => dispatch(movieActions.getMoviePopular(page)),
});

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default connect(null, mapDispatchToProps)(Home);

/* {(isInfoPage && <h1 className="recommendations__title">Movie recommendations</h1>)}
{(!isInfoPage && <SearchForm onChangeHandler={this.onChangeHandler} />)} */
// (error && <div className="film__user color-error">Error: {error.message}</div>)
// (!isLoaded && <div className="film__user">Loading...</div>)
