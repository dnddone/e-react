import React, { Component } from "react";
import SearchForm from "../SearchForm";
import Film from "../Film";
import Pagination from "../Pagination";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
			page: 1,
			totalPages: 1,
			searchValue: '',
      movie: {
        error: null,
        isLoaded: false,
        movies: []
      },
      genre: {
        error: null,
        isLoaded: false,
        genres: []
      }
    };
  }

  onChangeHandler = async (event) => {

    const searchValue = event.target.value;

    if (!searchValue) {
			this.setState({ page: 1, searchValue: '' });
      this.getMovieAsync();
      return;
    }

		// TODO: Pagination for search query

    this.setState({ isLoaded: false, searchValue: searchValue });

    const searchURL = `https://api.themoviedb.org/3/search/movie?&api_key=677522a533aae20a5fa0d80d392c1496&query=${searchValue}`;

    const getSearchMovies = await fetch(searchURL)
        .then(response => response.json())
        .then((response) => {
          this.setState({
            movie: {
              ...this.state.movie, 
              isLoaded: true,
              movies: response.results
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
	}
	
	updatePage = (page) => {
		this.setState({ page: page });
		this.getMovieAsync();
	}

  getMovieAsync = async () => {
		const { page } = this.state
		const  defineURL = this.props.isRecommendations 
				? `https://api.themoviedb.org/3/movie/${this.props.specialID}/recommendations?api_key=677522a533aae20a5fa0d80d392c1496`
				: `https://api.themoviedb.org/3/movie/popular?api_key=677522a533aae20a5fa0d80d392c1496&page=${page}`;
		
		
    await fetch(defineURL)
      .then(response => response.json())
      .then(
        (response) => {
          this.setState({
            movie: {
              ...this.state.movie, 
              isLoaded: true,
              movies: response.results
						},
						totalPages: response.total_pages
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
  }

  async componentWillMount() {
		this.getMovieAsync();

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
    const { movie, genre, page, totalPages, searchValue } = this.state;

    const error = movie.error || genre.error,
      isLoaded = movie.isLoaded && genre.isLoaded;

    const { movies } = movie, { genres } = genre,
				moviesIsNotEmpty = movies.length > 0;
				
		const isInfoPage = this.props.isRecommendations;

		console.log(`IsInfo page is [${isInfoPage}]`);

    return (
      <section className="main-content">
        <div className="container">
					{(isInfoPage && <h1 className="recommendations__title">Movie recommendations</h1>)}
          {(!isInfoPage && <SearchForm onChangeHandler={this.onChangeHandler} />)}
          {(
            (error && <div className="film__user color-error">Error: {error.message}</div>)
            || 
            (!isLoaded && <div className="film__user">Loading...</div>)
            ||
            (
              <div>
								<ul className="film__list">
									{
										(
											moviesIsNotEmpty && movies.map((movie, index) => {
												if (isInfoPage && index < 3) {
													return <Film movie={movie} genres={genre} key={movie.id} id={movie.id} />;
												} else if (!isInfoPage && index < 18) {
													return  <Film movie={movie} genres={genre} key={movie.id} id={movie.id} />;
												}
											
											})
										) 

										|| 

										(<div className="film__user">The movie list is empty!</div>)
									}
								</ul>
								
							</div>
            )
					)}
					{
						(!searchValue && !isInfoPage && <Pagination handlePage={this.updatePage} currentPage={page} totalPages={totalPages}	/>)
					}
        </div>
      </section>
    );
  }
}

export default Main;
