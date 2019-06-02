import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Loader from './Loader';
import SearchInput from './SearchInput';

const propTypes = {
  getContextMovie: PropTypes.func.isRequired,
  moviesLoading: PropTypes.bool,
  className: PropTypes.string,
  handleSearch: PropTypes.func,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  className: '',
  handleSearch: () => {},
  moviesLoading: true,
};

// It show movie's preview at home/bookmarks pages
class ContextMovie extends Component {
  componentDidMount() {
    this.props.getContextMovie();
  }

  render() {
    const {
      children,
      className,
      handleSearch,
      moviesLoading,
    } = this.props;

    if (!moviesLoading) {
      return (
        <div className={`container content ${className}`}>
          <SearchInput handleSearch={handleSearch} />
          {children}
        </div>
      )
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
