import React from 'react';

const FilmDescription = (props) => {
	const { genreIDs, genres } = props;

	const genreArray = genreIDs.length == 0 ? ['Genres: no data'] : genreIDs.map((genre) => {
		for (let i = 0; i < genres.length; i++) {
			const genreItem = genres[i];


			let genreSearchResult = genres.find(obj => {
			  return obj.id === genre ? obj.name : undefined;
			});


			if (genreSearchResult) {
				return genreSearchResult.name;
			}
		}
	});

	return (
		<div className="film__description">
			{genreArray.join(', ')}
		</div>
	);
}

export default FilmDescription;