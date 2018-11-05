import React from 'react';
import NoImagePNG from '../../images/no-image.png';

const FilmImage = (props) => {
	const { poster } = props;

	if (poster) {
		return <img src={poster} className="film__image" />
	} else {
		return <img src={NoImagePNG} className="film__image" />
	}
}

export default FilmImage;