import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { pathsConstants } from '../_constants';
import { genreActions, bookmarkActions } from '../_actions';

import Header from '../_components/Header/Header';
import Home from '../_components/Pages/Home';
import Bookmarks from '../_components/Pages/Bookmarks';
import Info from '../_components/Info';
import NotFound from '../_components/NotFound';
import Notification from '../_components/Notification';

const propTypes = {
  getGenresAction: func,
  getBookmarksAction: func,
};

const defaultProps = {
  getGenresAction: () => {},
  getBookmarksAction: () => {},
};

class App extends Component {
  componentDidMount() {
    this.props.getBookmarksAction();
    this.props.getGenresAction();
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Notification />
          <Header navigationList={pathsConstants.NAVIGATION_LIST} />
          <Switch>
            <Route exact path={pathsConstants.HOME_PAGE} component={Home} />
            <Route path={pathsConstants.MOVIE_PAGE} component={Info} />
            <Route path={pathsConstants.BOOKMARKS_PAGE} component={Bookmarks} />
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
  getGenresAction: () => dispatch(genreActions.getGenres()),
  getBookmarksAction: () => dispatch(bookmarkActions.getBookmarks()),
});

export default connect(null, mapDispatchToProps)(App);
