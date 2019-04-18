import React, { Component } from 'react';
import Film from '../Film';

// It shows the moevies from bookmark list at hostname/bookmarks
export default class Bookmarks extends Component {
  state = {
    movie: {
      error: null,
      isLoaded: false,
      movies: [],
    },
    isEmpty: true,
    genre: {
      error: null,
      isLoaded: false,
      genres: [],
    },
  }

  async componentDidMount() {
    this.getAllMovieSAsync();
    // It gets the genres to define genre_ids
    await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=677522a533aae20a5fa0d80d392c1496')
      .then(response => response.json())
      .then(
        (genre) => {
          this.setState(state => ({
            genre: {
              ...state.genre,
              isLoaded: true,
              genres: genre.genres,
            },
          }));
        },
        (error) => {
          this.setState(state => ({
            genre: {
              ...state.genre,
              isLoaded: true,
              error,
            },
          }));
        },
      );
  }

  getAllMovieSAsync = () => {
    // It gets all movies of bookmark list from localStorage
    // let fetchArrayMovies = [], fetchMovie;
    const localStorageIDs = localStorage.getItem('ids');

    if (localStorageIDs) {
      const localStorageArray = localStorageIDs.split('/');

      for (let i = 0; i < localStorageArray.length; i += 1) {
        fetch(`https://api.themoviedb.org/3/movie/${localStorageArray[i]}?api_key=677522a533aae20a5fa0d80d392c1496`)
          .then(response => response.json())
          .then((response) => {
            const currentMovies = this.state.movie.movies;
            currentMovies.push(response);

            // this.setState({
            //   movie: {
            //     ...this.state.movie,
            //     isLoaded: true,
            //     movies: currentMovies
            //   },
            //   isEmpty: false
            // })

            return response;
          });
        // (error) => {
        //   this.setState({
        //     movie: {
        //       ...this.state.movie,
        //       isLoaded: true,
        //       error: error
        //     }
        //   });
        // });

        // fetchArrayMovies.push(fetchMovie);
      }
    }
  };


  render() {
    const { movie, genre, isEmpty } = this.state;

    const error = movie.error || genre.error;
    const isLoaded = movie.isLoaded && genre.isLoaded;

    const { movies } = movie;
    // const { genres } = genre;
    const moviesIsNotEmpty = movies.length > 0;

    // TODO: Bookmarks pagination
    return (
      <section className="main-content">
        <div className="container">
          {(
            (error
              && (
                <div className="film__user color-error">
                  Error:
                  {error.message}
                </div>
              ))
            || (isEmpty && <div className="film__user">The list of bookmark movies is empty</div>)
            || (!isLoaded && <div className="film__user">Loading...</div>)
            || (
              <ul className="film__list">
                {
                  (
                    moviesIsNotEmpty && movies.map(movieItem => (
                      <Film movie={movieItem} genres={genre} key={movieItem.id} id={movieItem.id} />
                    ))
                  ) || (
                    <div className="film__user">The movie list is empty</div>
                  )
                }
              </ul>
            )
          )}
        </div>
      </section>
    );
  }
}
