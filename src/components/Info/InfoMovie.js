import React from 'react';

export default (props) => {
	const { info } = props;

	const isProprtyOk = (prop) => {
		return prop ? prop : 'Property does not exist';
	}

	const genreDefiner = (genreIDs) => {
		if (genreIDs.length == 0) {
			return 'no data';
		} else {
			const genreArray = genreIDs.map((obj) => obj.name);
			return genreArray.join(', ');
		} 
	}

	return (
		<div className="info">
			<h1 className="info__title">{info.title}</h1>
			<div>
				<div className="info__container info__item">
					<div className="info__description">{`Original title: ${info.original_title}`}</div>
					<div className="info__description">{`Budget: ${info.budget}`}</div>
					<div className="info__description">{`$Genres: ${genreDefiner(info.genres)}`}</div>
				</div>
				<div className="info__image-container info__item">
					<img src={`https://image.tmdb.org/t/p/w300${info.poster_path}`} alt={info.title}/>
				</div>
			</div>
		</div>
	);
}