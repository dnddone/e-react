import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { pathsConstants } from '../constants';
import { genreActions } from '../actions';

import Header from '../components/Header/Header';
import Home from '../components/Home';
// import Info from '../components/Info';
// import Bookmarks from '../components/Bookmarks';
// import NotFound from '../components/NotFound';

const propTypes = {
  getGenres: func,
};

const defaultProps = {
  getGenres: () => {},
};

class App extends Component {
  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="rsa">
          <Header navigationList={pathsConstants.NAVIGATION_LIST} />
          <Switch>
            <Route exact path={pathsConstants.HOME_PAGE} component={Home} />
            {/* <Route path={pathsConstants.MOVIE_PAGE} component={Info} />
            <Route path={pathsConstants.BOOKMARKS_PAGE} component={Bookmarks} />
            <Route component={Error} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => ({
  getGenres: () => dispatch(genreActions.getGenres()),
});

export default connect(null, mapDispatchToProps)(App);
