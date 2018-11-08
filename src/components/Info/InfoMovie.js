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

	console.log(info);

	return (
		<div className="info">
			<h1 className="info__title">{info.title}</h1>
			<div>
				<div className="info__image-container info__item">
					<img src={`https://image.tmdb.org/t/p/w300${info.poster_path}`} alt={info.title}/>
				</div>
				<div className="info__container info__item">
					<div className="info__description">{`Original title: ${info.original_title}`}</div>
					<div className="info__description">{`Tagline: ${info.tagline}`}</div>
					<div className="info__description">{`Budget: $${info.budget.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`}</div>
					<div className="info__description">{`Genres: ${genreDefiner(info.genres)}`}</div>
					<div className="info__description">Homepage: <a href={info.homepage} className="info__link">{info.homepage}</a></div>
					<div className="info__description">{`Runtime: ${info.runtime} minutes`}</div>
					<div className="info__description">{`Release date: ${info.release_date}`}</div>
					<div className="info__description">Vote avarage: <span className="color-yellow">{info.vote_average}</span></div>
					<div className="info__description">Vote count: <span className="color-blue">{info.vote_count}</span></div>
				</div>
				<p className="info__overview">{info.overview}</p>
			</div>
		</div>
	);
}