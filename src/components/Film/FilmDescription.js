import React from 'react';

const FilmDescription = (props) => {
	const { genreIDs, genres } = props;

	const genreArray = genreIDs.map((genre) => {
			for (let i = 0; i < genres.length; i++) {
				const genreItem = genres[i];

				let genreSearchResult = genreItem.find(obj => {
				  return genreItem.id === genre ? genreItem.name : undefined;
				});

				if (genreSearchResult) {
					return genreSearchResult;
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