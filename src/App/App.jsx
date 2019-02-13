import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducer from '../redux/reducers';

import { pathsConstants } from '../constants';

import Header from '../components/Header/Header';
import Home from '../components/Home';
// import Info from '../components/Info';
// import Bookmarks from '../components/Bookmarks';
// import Error from '../components/Error';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
