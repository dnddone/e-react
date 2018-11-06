import React from 'react';
import NoImagePNG from '../../images/no-image.png';

const FilmImage = (props) => {
	const { poster } = props;

	if (poster) {
		const posterPath = 'https://image.tmdb.org/t/p/w300' + poster;
		return <img src={posterPath} className="film__image" />
	} else {
		return <img src={NoImagePNG} className="film__image" />
	}
}

export default FilmImage;