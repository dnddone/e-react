import React, { Component } from 'react';
import FilmTitle from './FilmTitle';
import FilmImage from './FilmImage';
import FilmDescription from './FilmDescription';
import Bookmark from '../Bookmark';

const Film = (props) => {
	const { genres, movie } = props,
		genreIDs = movie.genre_ids,
		posterPath = props.movie.poster_path;

	const { id, title } = movie;

	const href = '/movie/' + id;

	return (
		<li className="film__item film">
			<a href={href} className="film__link">
				<Bookmark />
				<FilmTitle title={title} />
				<FilmImage poster={posterPath} />
				<FilmDescription genreIDs={genreIDs} genres={genres.genres} />
			</a>
		</li>
	);
}

export default Film;