import React from 'react';
import {
  string,
} from 'props-type';

const propTypes = {};
const defaultProps = {};

const Movies = ({ movies }) => {
  return (
    <ul className="film__list">
      {movies.map(movie => (
        <MovieBlock
          movie={movie}
          genreIDs={movie.genre_ids}
          genres={genres}
          key={movie.id}
          id={movie.id}
        />
      ))
    }
    </ul>
  );
};

index.propTypes = propTypes;
index.defaultProps = defaultProps;

export default Movies;
