import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  func,
  bool,
  shape,
  arrayOf,
  number,
} from 'prop-types';
import { movieActions, bookmarkActions } from '../../_actions';
import { getMovieIdFromUrl, bookmarkChecker } from '../../_helpers/utils';

import Loader from '../Loader';
import MovieInfo from './MovieInfo';

const propTypes = {
  getMovieById: func,
  removeMovieInfo: func,
  bookmarkButtonHandler: func,
  infoLoading: bool,
  bookmarks: arrayOf(number),
  info: shape({}),
};

const defaultProps = {
  getMovieById: () => {},
  removeMovieInfo: () => {},
  bookmarkButtonHandler: () => {},
  infoLoading: true,
  info: {},
  bookmarks: [],
};

class MovieInfoContainer extends Component {
  componentDidMount() {
    const id = getMovieIdFromUrl();
    this.props.getMovieById(id);
  }

  componentWillUnmount() {
    this.props.removeMovieInfo();
  }

  render() {
    const id = getMovieIdFromUrl();
    const {
      infoLoading,
      bookmarkButtonHandler,
      bookmarks,
    } = this.props;
    // console.log(infoLoading);
    const { info } = this.props;
    const isBookmarkAdded = bookmarkChecker(id, bookmarks);

    return (
      <div className="container content movie">
        <Loader className="" isLoading={infoLoading} />
        {!infoLoading && (
          <MovieInfo
            id={id}
            info={info}
            isBookmarkAdded={isBookmarkAdded}
            bookmarkButtonHandler={bookmarkButtonHandler}
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
  getMovieById: id => (dispatch(movieActions.getMovieById(id))),
  removeMovieInfo: () => (dispatch(movieActions.movieInfoReset())),
  bookmarkButtonHandler: (id, title) => dispatch(bookmarkActions.updateBookmarks(id, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfoContainer);
