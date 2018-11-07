import React, { Component } from "react";
import SearchForm from "../SearchForm";
import Film from "../Film";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        error: null,
        isLoaded: false,
        movies: []
      },
      genre: {
        error: null,
        isLoaded: false,
        genres: []
      },
      searchValue: ''
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      searchValue: event.target.value
    });

    const dndd = setTimeout(() => {console.log(`Timer with id ${dndd}`)}, 1000);
    clearInterval(dndd);
    console.log(`Timer ${dndd} stopped`);
  }

  async componentDidMount() {
    await fetch("https://api.themoviedb.org/3/movie/popular?api_key=677522a533aae20a5fa0d80d392c1496")
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            movie: {
              ...this.state.movie, 
              isLoaded: true,
              movies: result.results
            }
          });
        },
        (error) => {
          this.setState({
            movie: {
              ...this.state.movie, 
              isLoaded: true,
              error: error
            }
          });
        }
      );

    await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=677522a533aae20a5fa0d80d392c1496")
      .then(response => response.json())
      .then(
        (genre) => {
          this.setState({
            genre: {
              ...this.state.genre, 
              isLoaded: true,
              genres: genre.genres
            }
          });
        },
        (error) => {
          this.setState({
            genre: {
              ...this.state.genre, 
              isLoaded: true,
              error: error
            }
          });
        }
      );
  }

  render() {
    const { movie, genre } = this.state;

    const error = movie.error || genre.error,
      isLoaded = movie.isLoaded && genre.isLoaded;

    const { movies } = movie, { genres } = genre;

    return (
      <section className="main-content">
        <div className="container">
          <SearchForm onChangeHandler={this.onChangeHandler} test={this.state.searchValue} />
          {(
            (error && <div>Error: {error.message}</div>)
            || 
            (!isLoaded && <div>Loading...</div>)
            ||
            (
              <ul className="film__list">
                {
                  movies.map((movie, index) => {
                    return (index < 18) ? <Film movie={movie} genres={genre} key={movie.id} /> : '';
                  })
                }
              </ul>
            )
          )}
        </div>
      </section>
    );
  }
}

export default Main;
