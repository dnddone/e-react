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

import "./css/reset.css";
import "./css/styles.css";

const initialState = {
	ids: []
}

// TODO: redux notification
function reducer(state = initialState, action) {
	switch(action.type) {
		case "REMOVE_ID": 
			console.log('Action is REMOVE');
			console.log(state.ids);
			return {

			}
		
		case "ADD_ID": 
			console.log('Action is REMOVE');
			console.log(state.ids);
			return {

			}
	}
	return state;
}

const store = createStore(reducer);

store.dispatch({ type: "REMOVE_ID" });
store.dispatch({ type: "ADD_ID" });

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
