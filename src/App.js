import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Main from "./components/Main";
import Bookmarks from "./components/Bookmarks";
import Error from "./components/Error";

import "./css/reset.css";
import "./css/styles.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
		  		<Header />
          <Switch>
            <Route path="/" component={Main} exact />
            {/* <Route path="/about" component={About} />*/}
            {/* <Route path="/movie" component={Info} /> */}
            <Route path="/bookmarks" component={Bookmarks} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
