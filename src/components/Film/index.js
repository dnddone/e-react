import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';

import FilmTitle from './FilmTitle';
import FilmImage from './FilmImage';
import FilmDescription from './FilmDescription';
import Bookmark from '../Bookmark';

import { addID, removeID } from '../../redux/actions';

// dispatch for displaying notification, when bookmark is added/removed
const mapDispatchToProps = (dispatch) => {
	return {
		addID: (id, title) => dispatch(addID(id, title)),
		removeID: (id, title) => dispatch(removeID(id, title)),
	}
};

// It is the movie's container at /home or /bookmarks pages.
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
	    // At this point, the while loop has stopped and `element` represents the element that has
	    // the class you specified in the second parameter of the function `clazz`

	    // Then return the matched element
	    return true;
	}

	toggleLocalStorageBookmark = (id) => {
		// Single toogle bookmark for fast getting from localStorage by id;
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
		if (result) {
			this.props.addID(id, this.props.movie.title);
		} else {
			this.props.removeID(id, this.props.movie.title);
		}

		this.updateLocalStorageBookmarkMovies(id, result);

		return result;
	}

	updateLocalStorageBookmarkMovies = (id, prevResultAddingRemoving) => {
		// Full list of movies' bookmark list from localStorage
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

	getLocalStorageArray = () => {
		const localStorageIDsArray = localStorage.getItem('ids');

		return localStorageIDsArray ? localStorageIDsArray.split('/') : [];
	}

	onBookmarkClickHandler = (event) => {
		// When bookmark star button is clicked
	    if (this.closestByClass(event.target, 'bookmark')) {
				event.preventDefault();
				const { id } = this.state;
				const isBookmark = this.toggleLocalStorageBookmark(id) ? 'added' : '';

				this.setState({ isBookmark: isBookmark });
	    } 
	}

	render() {
		const { genres, movie, id, onClickBookmarkHandler } = this.props,
			genreIDs = movie.genre_ids || movie.genres,
			posterPath = this.props.movie.poster_path;

		const { title } = movie;

		// const href = '/e-react/movie/' + id;
		const href = '/movie/' + id;

		return (
			<li className="film__item film">
				<Link to={href} className="film__link" onClick={this.onBookmarkClickHandler}>
					<Bookmark isBookmark={this.state.isBookmark} />
					<FilmTitle title={title} />
					<FilmImage poster={posterPath} />
					<FilmDescription genreIDs={genreIDs} genres={genres.genres} />
				</Link>
			</li>
		);
	}
}

export default connect(null, mapDispatchToProps)(Film);