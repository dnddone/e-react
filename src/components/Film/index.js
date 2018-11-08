import React, { Component } from 'react';
import FilmTitle from './FilmTitle';
import FilmImage from './FilmImage';
import FilmDescription from './FilmDescription';
import Bookmark from '../Bookmark';


class Film extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.id,
			isBookmark: ''
		}
	}

	componentWillMount() {
		const isAlreadyBookmarked = localStorage.getItem(this.state.id.toString()) ? 'added' : '';

		this.setState({ isBookmark: isAlreadyBookmarked });
	}

	isAlreadyBookmarkedFunction = () => {

	}

	closestByClass = (element, clazz) => {
	    // Traverse the DOM up with a while loop
	    const regexClazz = new RegExp(clazz);
	    let className = element.className;

	    while (!regexClazz.test(className)) {
	        // Increment the loop to the parent node
	        element = element.parentNode;

	        if (!element) {
	    		return false;
	        }

	        className = (typeof element.className) === 'string' ? element.className : '';
	    }
	    // At this point, the while loop has stopped and `el` represents the element that has
	    // the class you specified in the second parameter of the function `clazz`

	    // Then return the matched element
	    return true;
	}

	toggleLocalStorageBookmark = (id) => {
		id = id.toString();
		const localStorageExist = localStorage.getItem(id);

		let result;

		if (localStorageExist) {
			localStorage.removeItem(id);
			result = false;
		} else {
			localStorage.setItem(id, 'true');
			result = true;
		}
		return result;
	}

	onBookmarkClickHandler = (event) => {
	    if (this.closestByClass(event.target, 'bookmark')) {
			event.preventDefault();

			const isBookmark = this.toggleLocalStorageBookmark(this.state.id) ? 'added' : '';

			this.setState({ isBookmark: isBookmark });
	    } 
	}

	render() {
		const { genres, movie, id, onClickBookmarkHandler } = this.props,
			genreIDs = movie.genre_ids,
			posterPath = this.props.movie.poster_path;

		const { title } = movie;

		const href = '/movie/' + id;

		return (
			<li className="film__item film">
				<a href={href} className="film__link" onClick={this.onBookmarkClickHandler}>
					<Bookmark isBookmark={this.state.isBookmark} />
					<FilmTitle title={title} />
					<FilmImage poster={posterPath} />
					<FilmDescription genreIDs={genreIDs} genres={genres.genres} />
				</a>
			</li>
		);
	}

	
}

export default Film;