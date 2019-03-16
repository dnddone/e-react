import React, { Component } from 'react';
import { func, bool, shape } from 'prop-types';
import { connect } from 'react-redux';
import { movieActions } from '../../_actions';
import { getMovieIdFromUrl } from '../../_helpers/utils';

import Loader from '../Loader';
import MovieInfo from './MovieInfo';

const propTypes = {
  getMovieById: func,
  // removeMovieInfo: func,
  infoLoading: bool,
  info: shape({}),
};
const defaultProps = {
  getMovieById: () => {},
  // removeMovieInfo: () => {},
  infoLoading: true,
  info: {},
};

class MovieInfoContainer extends Component {
  componentDidMount() {
    // TODO: Load MovieInfo (Redux);
    // getMovieById();
    const id = getMovieIdFromUrl();
    this.props.getMovieById(id);
  }

  componentWillUnmount() {
    // this.props.removeMovieInfo();
  }

  render() {
    const { infoLoading } = this.props;
    // console.log(infoLoading);
    const { info } = this.props;

    return (
      <div className="container content movie">
        <Loader className="" isLoading={infoLoading} />
        {!infoLoading && <MovieInfo info={info} />}
      </div>
    );
  }
}

MovieInfoContainer.propTypes = propTypes;
MovieInfoContainer.defaultProps = defaultProps;

const mapStateToProps = state => ({
  infoLoading: state.api.loading.MOVIEINFO,
  info: state.info,
});

const mapDispatchToProps = dispatch => ({
  getMovieById: id => (dispatch(movieActions.getMovieById(id))),
  removeMovieInfo: () => (dispatch(movieActions.movieInfoReset())),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfoContainer);
