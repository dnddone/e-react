import React, { Component } from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducer from './reducers';

import Header from "./components/Header";
import Main from "./components/Main";
import Info from "./components/Info";
import Bookmarks from "./components/Bookmarks";
import Notification from "./components/Notification";
import Error from "./components/Error";

import "./css/reset.css";
import "./css/styles.css";

const store = createStore(reducer);

class App extends Component {
	constructor() {
		super();

		store.subscribe(() => {
			console.log(store.getState());
		})
	}
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
