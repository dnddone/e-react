import React, { Component } from 'react';
import Film from './';

class FilmList extends Component {
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
			}
		};
	}

	componentDidMount() {
		fetch("https://api.themoviedb.org/3/movie/popular?api_key=677522a533aae20a5fa0d80d392c1496")
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

		fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=677522a533aae20a5fa0d80d392c1496")
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

		if (error) {
			return <div>Error: {error.message}</div>
		} else if (!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				<ul className="film__list">
					{movies.map(movie => (
						<Film movie={movie} genres={genre} key={movie.id} />
					))}
				</ul>
			);
		}

		return (
			<Film />
		);
	}
}

export default FilmList;