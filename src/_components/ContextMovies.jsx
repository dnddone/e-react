import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import PropTypes from 'prop-types';
import Loader from './Loader';
// import SearchForm from './SearchForm';
// import Pagination from './Pagination';

const propTypes = {
  getContextMovie: PropTypes.func.isRequired,
  moviesLoading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.shape({

  }).isRequired,
};

const defaultProps = {
  moviesLoading: true,
  className: '',
};

// It show movie's preview at home page
class ContextMovie extends Component {
  componentDidMount() {
    this.props.getContextMovie();
  }

  render() {
    const { moviesLoading, children, className } = this.props;

    return (
      <div className={classNames('container content', className)}>
        <Loader
          className="test"
          isLoading={moviesLoading}
        />
        {!moviesLoading && children}
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

ContextMovie.propTypes = propTypes;
ContextMovie.defaultProps = defaultProps;

export default connect(mapStateToProps)(ContextMovie);

/* {(isInfoPage && <h1 className="recommendations__title">Movie recommendations</h1>)}
{(!isInfoPage && <SearchForm onChangeHandler={this.onChangeHandler} />)} */
// (error && <div className="film__user color-error">Error: {error.message}</div>)
// (!isLoaded && <div className="film__user">Loading...</div>)
