import React, { Component } from 'react';
import FilmTitle from './FilmTitle';
import FilmImage from './FilmImage';
import FilmDescription from './FilmDescription';
import Bookmark from '../Bookmark';

const Film = (props) => {
	const { title, poster_path, genres, movie } = props,
		genreIDs = movie.genre_ids;

	return (
		<li className="film__item">
			<FilmTitle title={title} />
			<FilmImage poster={poster_path} />
			<FilmDescription genreIDs={genreIDs} genres={genres} />
			<Bookmark className="bookmark" />
		</li>
	);
}

export default Film;