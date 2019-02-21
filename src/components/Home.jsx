import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  func,
  arrayOf,
  shape,
  number,
  objectOf,
  string,
} from 'prop-types';
import { movieActions } from '../actions';
// import SearchForm from './SearchForm';
import Film from './Film';
// import Pagination from './Pagination';

const propTypes = {
  getMoviePopular: func.isRequired,
  genres: objectOf(string),
  movies: arrayOf(shape({
    id: number.isRequired,
    title: string.isRequired,
    genre_ids: arrayOf(number),
    overview: string,
  })),
};

const defaultProps = {
  movies: [],
  genres: {},
};

// It show movie's preview at home page
class Home extends Component {
  componentDidMount() {
    this.props.getMoviePopular();
    // this.getMovieAsync();
    // TODO: Genre request is required here;
  }

  // onChangeHandler = (event) => {
  //   const searchValue = event.target.value;

  //   if (!searchValue) {
  //     this.setState({ page: 1, searchValue: '' }, () => this.getMovieAsync());
  //     return;
  //   }

  //   // TODO: Pagination for search queries

  //   this.setState({
  //     searchValue,
  //   });

  //   fetch(`${movieConstants.SEARCH_URL}&query=${searchValue}`);
  // };

  // updatePage = (page) => {
  // this.setState({ page });
  // this.getMovieAsync();
  // }

  // getMovieAsync = async () => {
  // const { page } = this.state
  // const  defineURL = this.props.isRecommendations
  //  ? `https://api.themoviedb.org/3/movie/${this.props.specialID}/recommendations?api_key=677522a533aae20a5fa0d80d392c1496`
  //  : `https://api.themoviedb.org/3/movie/popular?api_key=677522a533aae20a5fa0d80d392c1496&page=${page}`;


  // await fetch(defineURL)
  //   .then(response => response.json())
  //   .then(
  //     (response) => {
  //       this.setState({
  //         movie: {
  //           ...this.state.movie,
  //           isLoaded: true,
  //           movies: response.results
  // },
  // totalPages: response.total_pages
  //       });
  //     },
  //     (error) => {
  //       this.setState({
  //         movie: {
  //           ...this.state.movie,
  //           isLoaded: true,
  //           error: error
  //         }
  //       });
  //     }
  //   );
  // }

  render() {
    const { movies, genres } = this.props;

    return (
      <section className="main-content">
        <div className="container">
          <div>
            <ul className="film__list">
              {
                movies.map(movie => (
                  <Film
                    movie={movie}
                    genreIDs={movie.genre_ids}
                    genres={genres}
                    key={movie.id}
                    id={movie.id}
                  />
                ))

                // (<div className="film__user">The movie list is empty!</div>)
              }
            </ul>
          </div>
          {/* {
            (!searchValue && !isInfoPage
              && <Pagination
                handlePage={this.updatePage} currentPage={page} totalPages={totalPages} />)
          } */}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const { movies, genres } = state;

  return {
    movies,
    genres,
  };
};

const mapDispatchToProps = dispatch => ({
  getMoviePopular: (page = 1) => dispatch(movieActions.getMoviePopular(page)),
});

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/* {(isInfoPage && <h1 className="recommendations__title">Movie recommendations</h1>)}
{(!isInfoPage && <SearchForm onChangeHandler={this.onChangeHandler} />)} */
// (error && <div className="film__user color-error">Error: {error.message}</div>)
// (!isLoaded && <div className="film__user">Loading...</div>)
