import React, { Component } from "react";
import SearchForm from "../SearchForm";
import FilmList from "../Film/FilmList";


class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="main-content">
        <div className="container">
          <SearchForm />
          <FilmList />
        </div>
      </section>
    );
  }
}

export default MainContent;
