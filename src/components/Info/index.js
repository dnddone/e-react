import React, { Component } from 'react';
import InfoMovie from './InfoMovie';

export default class Info extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			movie: {
				isLoaded: false,
				movie: ''
			}
			// genre: {
      //   error: null,
      //   isLoaded: false,
      //   genres: []
      // }
		};
	}

	componentWillMount() {
		const id = window.location.pathname.replace('/movie/', '');
		this.setState({ id: id });
	}

	async componentDidMount() {
		const { id } = this.state;

		await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=677522a533aae20a5fa0d80d392c1496`)
      .then(response => response.json())
      .then(
        (movie) => {
          this.setState({
            movie: {
              ...this.state.movie, 
              isLoaded: true,
              movie: movie
            }
          });
        },
        (error) => {
          this.setState({
            movie: {
              ...this.state.genre, 
              isLoaded: true,
              error: error
            }
          });
        }
			);
			
		// await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=677522a533aae20a5fa0d80d392c1496")
    //   .then(response => response.json())
    //   .then(
    //     (genre) => {
    //       this.setState({
    //         genre: {
    //           ...this.state.genre, 
    //           isLoaded: true,
    //           genres: genre.genres
    //         }
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         genre: {
    //           ...this.state.genre, 
    //           isLoaded: true,
    //           error: error
    //         }
    //       });
    //     }
    //   );
	}

	render() {
		const { movie } = this.state,
				info = movie.movie;

		const error = movie.error,
      isLoaded = movie.isLoaded;

		return (
			<div className="main-content">
				<div className="container">
					{(
            (error && <div className="film__user color-error">Error: {error.message}</div>)
            || 
            (!isLoaded && <div className="film__user">Loading...</div>)
            ||
            <InfoMovie info={info} />
					)}
				</div>
			</div>
		);
	}
}