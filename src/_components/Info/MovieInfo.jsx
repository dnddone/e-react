import React from 'react';
import { shape, string } from 'prop-types';

import { getGenresForMovieInfo, separateBitNumber, imagePosterPath } from '../../_helpers/utils';
import BookmarkStar from '../BookmarkStar';

const propTypes = {
  info: shape({
    title: string,
  }),
};

const defaultProps = {
  info: {},
};


const MovieInfo = ({ info }) => {
  const {
    title,
    poster_path: posterPath,
    original_title: originalTitle,
    tagline,
    budget,
    genres,
    homepage,
    runtime,
    release_date: releaseDate,
    vote_average: voteAverage,
    vote_count: voteCount,
    overview,
  } = info;

  return (
    <div className="info">
      <h1 className="info__title">{title}</h1>
      <div>
        <div className="info__image-container info__item">
          <img src={imagePosterPath(posterPath)} alt={title} />
        </div>
        <div className="info__container info__item">
          <div className="info__description">{`Original title: ${originalTitle}`}</div>
          <div className="info__description">{`Tagline: ${tagline}`}</div>
          <div className="info__description">{`Budget: ${separateBitNumber(budget)}`}</div>
          <div className="info__description">{`Genres: ${getGenresForMovieInfo(genres)}`}</div>
          <div className="info__description">
            {'Homepage: '}
            <a href={homepage} className="info__link">{homepage}</a>
          </div>
          <div className="info__description">{`Runtime: ${runtime} minutes`}</div>
          <div className="info__description">{`Release date: ${releaseDate}`}</div>
          <div className="info__description">
            {'Vote avarage: '}
            <span className="color-yellow">{voteAverage}</span>
          </div>
          <div className="info__description">
            {'Vote count: '}
            <span className="color-blue">{voteCount}</span>
          </div>
          <div className="info__button-container">
            <span className="info__button">
              <BookmarkStar />
              <span className="info__button-text">favorite</span>
            </span>
          </div>
        </div>
        <h2 className="info__sub-title">Overview</h2>
        <p className="info__overview">{overview}</p>
      </div>
    </div>
  );
};

MovieInfo.propTypes = propTypes;
MovieInfo.defaultProps = defaultProps;

export default MovieInfo;
