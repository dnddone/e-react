import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createLoadingSelector } from '../_helpers/selector';
import Loader from './Loader';
import SearchInput from './SearchInput';

const propTypes = {
  showSearchInput: PropTypes.bool,
  loadingMovies: PropTypes.bool,
  className: PropTypes.string,
  searchHandler: PropTypes.func,
  children: PropTypes.node.isRequired,
  getContextMovieAction: PropTypes.func.isRequired,
};

const defaultProps = {
  showSearchInput: true,
  className: '',
  searchHandler: () => {},
  loadingMovies: true,
};

// It show movie's preview at home/bookmarks pages
class ContextMovie extends Component {
  componentDidMount() {
    this.props.getContextMovieAction();
  }

  render() {
    const {
      showSearchInput,
      children,
      className,
      searchHandler,
      loadingMovies,
    } = this.props;

    if (!loadingMovies) {
      return (
        <div className={`container content ${className}`}>
          {showSearchInput && <SearchInput searchHandler={searchHandler} />}
          {children}
        </div>
      );
    }

    return (
      <div className="container content">
        <Loader
          isLoading={loadingMovies}
        />
      </div>
    );
  }
}

const loadingMoviesSelector = createLoadingSelector('MOVIES');

const mapStateToProps = state => ({
  loadingMovies: loadingMoviesSelector(state),
});

ContextMovie.propTypes = propTypes;
ContextMovie.defaultProps = defaultProps;

export default connect(mapStateToProps)(ContextMovie);

/* {(isInfoPage && <h1 className="recommendations__title">Movie recommendations</h1>)}
{(!isInfoPage && <SearchForm onChangeHandler={this.onChangeHandler} />)} */
// (error && <div className="film__user color-error">Error: {error.message}</div>)
// (!isLoaded && <div className="film__user">Loading...</div>)
