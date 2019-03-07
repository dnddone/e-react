import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Loader from '../Loader';
import InfoMovie from './InfoMovie';

class Info extends Component {
  // state = {
  //   isBookmark: '',
  //   movie: {
  //     isLoaded: false,
  //     movie: '',
  //   },
  // };

  componentDidMount() {
    // TODO: Load MovieInfo (Redux);
  }

  render() {
    // const { movieInfo, api: { loading } } = this.props;
    const isLoading = true;

    return (
      <div>
        <div className="main-content">
          <div className="container">
            <Loader
              className=""
              isLoading={isLoading}
            />
            {!isLoading
            && (
              <InfoMovie />
            )
            }
          </div>
        </div>
        {/* <div className="recommendations"></div> */}
      </div>
    );
  }
}

export default Info;
