import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { pathsConstants } from '../_constants';
import { genreActions } from '../_actions';

import Header from '../_components/Header/Header';
import Home from '../_components/Home';
// import Info from '../_components/Info';
// import Bookmarks from '../_components/Bookmarks';
import NotFound from '../_components/NotFound';

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
        <>
          <Header navigationList={pathsConstants.NAVIGATION_LIST} />
          <Switch>
            <Route exact path={pathsConstants.HOME_PAGE} component={Home} />
            {/* <Route path={pathsConstants.MOVIE_PAGE} component={Info} />
            <Route path={pathsConstants.BOOKMARKS_PAGE} component={Bookmarks} /> */}
            <Route component={NotFound} />
          </Switch>
        </>
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
