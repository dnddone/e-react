import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Main from "./components/Main";
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
            {/*<Route path="/contact" component={Contact} />*/}
            {/* <Route path="/movie" component={Info} /> */}
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
