import React, { Component } from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Main from "./components/Main";
import Info from "./components/Info";
import Bookmarks from "./components/Bookmarks";
import Notification from "./components/Notification";
import Error from "./components/Error";

import configureStore from './redux/store/configureStore';

import "./css/reset.css";
import "./css/styles.css";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
					<div className="rsa">
						<Notification />
						<Header />
						<Switch>
							<Route path="/" component={Main} exact />
							{/* <Route path="/about" component={About} />*/}
							<Route path="/movie/" component={Info} />
							<Route path="/bookmarks" component={Bookmarks} />
							<Route component={Error} />
						</Switch>
					</div>
				</Provider>
      </BrowserRouter>
    );
  }
}

export default App;
