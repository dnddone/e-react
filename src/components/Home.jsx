import React, { Component } from 'react';
import { string, number } from 'prop-types';
import { movieConstants } from '../constants';
import SearchForm from './SearchForm';
import Film from './Film';
import Pagination from './Pagination';

const propTypes = {
  page: number,
  totalPages: number,
  searchValue: string,
};

const defaultProps = {
  page: 1,
  totalPage: 1,
  searchValues: '',
  errors: {},
  loading: {},
  data: {},
};

// It show movie's preview at home page
class Home extends Component {
  state = {};

  componentDidMount() {
    this.getMovieAsync();
    // TODO: Genre request is required here;
  }

  onChangeHandler = (event) => {
    const searchValue = event.target.value;

    if (!searchValue) {
      this.setState({ page: 1, searchValue: '' }, () => this.getMovieAsync());
      return;
    }

    // TODO: Pagination for search queries

    this.setState({
      searchValue,
    });

    fetch(`${movieConstants.SEARCH_URL}&query=${searchValue}`)
      .then(response => response.json())
      .then((response) => {
        this.setState((state) => {
          movie: {
            ...state.movie, 
            isLoaded: true,
            movies: response.results,
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

  render() {
    const { movie, genre, page, totalPages, searchValue } = this.state;

    const error = movie.error || genre.error,
      isLoaded = movie.isLoaded && genre.isLoaded;

    const { movies } = movie, { genres } = genre,
				moviesIsNotEmpty = movies.length > 0;
				
		const isInfoPage = this.props.isRecommendations;

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

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
