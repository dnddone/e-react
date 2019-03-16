import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  func,
  bool,
} from 'prop-types';
import { movieActions } from '../_actions';
import Loader from './Loader';
// import SearchForm from './SearchForm';
import Movies from './Movies/Movies';
// import Pagination from './Pagination';

const propTypes = {
  getMoviePopular: func.isRequired,
  moviesLoading: bool,
};

const defaultProps = {
  moviesLoading: true,
};

// It show movie's preview at home page
class Home extends Component {
  componentDidMount() {
    this.props.getMoviePopular();
  }

  render() {
    const { moviesLoading } = this.props;

    return (
      <div className="container content home">
        <Loader
          className="test"
          isLoading={moviesLoading}
        />
        {!moviesLoading && <Movies />}
        {/* {
          (!searchValue && !isInfoPage
            && <Pagination
              handlePage={this.updatePage} currentPage={page} totalPages={totalPages} />)
        } */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moviesLoading: state.api.loading.MOVIES,
});

const mapDispatchToProps = dispatch => ({
  getMoviePopular: (page = 1) => dispatch(movieActions.getMoviePopular(page)),
});

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/* {(isInfoPage && <h1 className="recommendations__title">Movie recommendations</h1>)}
{(!isInfoPage && <SearchForm onChangeHandler={this.onChangeHandler} />)} */
// (error && <div className="film__user color-error">Error: {error.message}</div>)
// (!isLoaded && <div className="film__user">Loading...</div>)
