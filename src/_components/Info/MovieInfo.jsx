import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { getGenresForMovieInfo, separateBitNumber, imagePosterPath } from '../../_helpers/utils';
import BookmarkStar from '../BookmarkStar';

const propTypes = {
  id: PropTypes.number.isRequired,
  bookmarkButtonHandler: PropTypes.func.isRequired,
  isBookmarkAdded: PropTypes.bool.isRequired,
  info: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    tagline: PropTypes.string,
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
    homepage: PropTypes.string,
    runtime: PropTypes.number,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    overview: PropTypes.string,
  }),
};

const defaultProps = {
  info: {},
};


class MovieInfo extends PureComponent {
  render() {
    const {
      info,
      isBookmarkAdded,
      bookmarkButtonHandler,
    } = this.props;

    const {
      id,
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

    const movieData = { id, title };

    const bookmarkButtonText = isBookmarkAdded
      ? 'Remove favorite'
      : 'Make favorite';

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
              <a href={homepage} target="_blank" rel="noopener noreferrer" className="info__link">{homepage}</a>
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
              <BookmarkStar
                data={movieData}
                text={bookmarkButtonText}
                className="info__button"
                isBookmarkAdded={isBookmarkAdded}
                bookmarkButtonHandler={bookmarkButtonHandler}
              />
            </div>
          </div>
          <h2 className="info__sub-title">Overview</h2>
          <p className="info__overview">{overview}</p>
        </div>
      </div>
    );
  }
}

MovieInfo.propTypes = propTypes;
MovieInfo.defaultProps = defaultProps;

export default MovieInfo;
