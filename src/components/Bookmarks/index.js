import React, { Component } from 'react';
import Film from "../Film";

export default class Bookmarks extends Component {
	constructor(props) {
    super(props);
    this.state = {
      movie: {
        error: null,
        isLoaded: false,
        movies: []
			},
			isEmpty: true,
      genre: {
        error: null,
        isLoaded: false,
        genres: []
      }
    };
  }

  getAllMovieSAsync = async () => {
		let fetchArrayMovies = [], fetchMovie;
		const localStorageIDs = localStorage.getItem('ids');

		if (localStorageIDs) {
			const localStorageArray = localStorageIDs.split('/');

			for (let i = 0; i < localStorageArray.length; i++) {
				await fetch(`https://api.themoviedb.org/3/movie/${localStorageArray[i]}?api_key=677522a533aae20a5fa0d80d392c1496`)
						.then(response => response.json())
						.then((response) => {
									let currentMovies = this.state.movie.movies;
									currentMovies.push(response);
									
									this.setState({
										movie: {
											...this.state.movie, 
											isLoaded: true,
											movies: currentMovies
										},
										isEmpty: false
									})

									return response;
							},
								(error) => {
												this.setState({
													movie: {
														...this.state.movie, 
														isLoaded: true,
														error: error
													}
												});
						});

				// fetchArrayMovies.push(fetchMovie);
			}

			// console.log(`fetchArrayMovies = {${fetchArrayMovies}}`);
		}
  }

  async componentDidMount() {
    this.getAllMovieSAsync();

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
    const { movie, genre, isEmpty } = this.state;

    const error = movie.error || genre.error,
      isLoaded = movie.isLoaded && genre.isLoaded;

    const { movies } = movie, { genres } = genre,
        moviesIsNotEmpty = movies.length > 0;

    return (
      <section className="main-content">
        <div className="container">
          {(
            (error && <div className="film__user color-error">Error: {error.message}</div>)
            || 
						(isEmpty && <div className="film__user">The list of bookmark movies is empty</div>) 
						||
            (!isLoaded && <div className="film__user">Loading...</div>)
						||
            (
              <ul className="film__list">
                {
                  (
                    moviesIsNotEmpty && movies.map((movie, index) => {
                      return (index < 18) ? <Film movie={movie} genres={genre} key={movie.id} id={movie.id} /> : '';
                    })
                  ) 

                  || 

                  (<div className="film__user">The movie list is empty!</div>)
                }
              </ul>
            )
          )}
        </div>
      </section>
    );
  }
};