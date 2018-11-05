import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./components/header";
import MainContent from "./components/mainContent";

import "./css/reset.css";
import "./css/styles.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
		  <Header />
          <Switch>
            <Route path="/" component={MainContent} exact />
            {/* <Route path="/about" component={About} />*/}
            {/*<Route path="/contact" component={Contact} />*/}
            {/*<Route component={Error} />*/}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
