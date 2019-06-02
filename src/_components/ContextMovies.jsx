import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Loader from './Loader';
import SearchInput from './SearchInput';

const propTypes = {
  showSearchInput: PropTypes.bool,
  moviesLoading: PropTypes.bool,
  className: PropTypes.string,
  searchHandler: PropTypes.func,
  children: PropTypes.node.isRequired,
  getContextMovieAction: PropTypes.func.isRequired,
};

const defaultProps = {
  showSearchInput: true,
  className: '',
  searchHandler: () => {},
  moviesLoading: true,
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
      moviesLoading,
    } = this.props;

    if (!moviesLoading) {
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
          isLoading={moviesLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moviesLoading: state.api.loading.MOVIES,
});

ContextMovie.propTypes = propTypes;
ContextMovie.defaultProps = defaultProps;

export default connect(mapStateToProps)(ContextMovie);

/* {(isInfoPage && <h1 className="recommendations__title">Movie recommendations</h1>)}
{(!isInfoPage && <SearchForm onChangeHandler={this.onChangeHandler} />)} */
// (error && <div className="film__user color-error">Error: {error.message}</div>)
// (!isLoaded && <div className="film__user">Loading...</div>)
