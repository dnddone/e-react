import React, { Component } from 'react';
import InfoMovie from './InfoMovie';

export default class Info extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			isBookmark: '',
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
		const isAlreadyBookmarked = localStorage.getItem(this.state.id.toString()) ? 'added' : '';

		this.setState({ isBookmark: isAlreadyBookmarked });
		this.setState({ id: id });
	}

	getLocalStorageArray = () => {
		const localStorageIDsArray = localStorage.getItem('ids');

		return localStorageIDsArray ? localStorageIDsArray.split('/') : [];
	}

	onBookmarkClickHandler = () => {
		const { id } = this.state;
		const isBookmark = this.toggleLocalStorageBookmark(id) ? 'added' : '';

		this.setState({ isBookmark: isBookmark });
	}

	toggleLocalStorageBookmark = (id) => {
		const idString = id.toString();
		const localStorageExist = localStorage.getItem(idString);

		let shouldAddIDtoLocalStorageArray = true;
		let result;

		if (localStorageExist) {
			localStorage.removeItem(idString);
			result = false;
		} else {
			localStorage.setItem(idString, 'true');
			result = true;
		}

		// if result is `true`, add ID then, if `false` remove that ID from localStorage.
		this.updateLocalStorageBookmarkMovies(id, result);

		return result;
	}

	updateLocalStorageBookmarkMovies = (id, prevResultAddingRemoving) => {
		const shouldIAdd = prevResultAddingRemoving;
		let arrayIDs = this.getLocalStorageArray(),
				stringIDs;

		if (shouldIAdd) {
			arrayIDs.push(id);
			stringIDs = arrayIDs.join('/');
		} else if (arrayIDs.length > 0) {
			const index = arrayIDs.indexOf(id.toString());

			if (index > -1) { arrayIDs.splice(index, 1); }

			stringIDs = arrayIDs.join('/');
		}
		
		localStorage.setItem('ids', stringIDs);
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
		const { movie, isBookmark } = this.state,
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
						<InfoMovie 
							info={info} 
							isBookmark={isBookmark} 
							onBookmarkHandler={this.onBookmarkClickHandler} 
						/>
					)}
				</div>
			</div>
		);
	}
}