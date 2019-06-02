import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { movieActions, bookmarkActions } from '../../_actions';
import { getMovieIdFromUrl, bookmarkChecker } from '../../_helpers/utils';

import Loader from '../Loader';
import MovieInfo from './MovieInfo';

const propTypes = {
  infoLoading: PropTypes.bool,
  bookmarks: PropTypes.arrayOf(PropTypes.number),
  info: PropTypes.shape({}),
  getMovieByIdAction: PropTypes.func,
  resetMovieInfoAction: PropTypes.func,
  updateBookmarksAction: PropTypes.func,
};

const defaultProps = {
  infoLoading: true,
  info: {},
  bookmarks: [],
  getMovieByIdAction: () => {},
  resetMovieInfoAction: () => {},
  updateBookmarksAction: () => {},
};

class MovieInfoContainer extends Component {
  componentDidMount() {
    const id = getMovieIdFromUrl();
    this.props.getMovieByIdAction(id);
  }

  componentWillUnmount() {
    this.props.resetMovieInfoAction();
  }

  render() {
    const id = getMovieIdFromUrl();
    const {
      infoLoading,
      bookmarks,
      updateBookmarksAction,
    } = this.props;
    const { info } = this.props;
    const isBookmarkAdded = bookmarkChecker(id, bookmarks);

    return (
      <div className="container content movie">
        <Loader className="" isLoading={infoLoading} />
        {info.title && (
          <MovieInfo
            id={id}
            info={info}
            isBookmarkAdded={isBookmarkAdded}
            bookmarkButtonHandler={updateBookmarksAction}
          />
        )}
      </div>
    );
  }
}

MovieInfoContainer.propTypes = propTypes;
MovieInfoContainer.defaultProps = defaultProps;

const mapStateToProps = state => ({
  infoLoading: state.api.loading.MOVIEINFO,
  info: state.info,
  bookmarks: state.bookmarks,
});

const mapDispatchToProps = dispatch => ({
  getMovieByIdAction: id => (dispatch(movieActions.getMovieById(id))),
  resetMovieInfoAction: () => (dispatch(movieActions.resetMovieInfo())),
  updateBookmarksAction: (id, title) => dispatch(bookmarkActions.updateBookmarks(id, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfoContainer);
