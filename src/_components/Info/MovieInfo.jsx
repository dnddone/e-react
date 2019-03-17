import React, { PureComponent } from 'react';
import classNames from 'classnames';
import {
  shape,
  string,
  number,
  func,
  bool,
  arrayOf,
} from 'prop-types';

import { getGenresForMovieInfo, separateBitNumber, imagePosterPath } from '../../_helpers/utils';
import BookmarkStar from '../BookmarkStar';

const propTypes = {
  id: number.isRequired,
  bookmarkButtonHandler: func.isRequired,
  isBookmarkAdded: bool.isRequired,
  info: shape({
    title: string,
    poster_path: string,
    original_title: string,
    tagline: string,
    budget: number,
    genres: arrayOf(shape({
      id: number,
      name: string,
    })),
    homepage: string,
    runtime: number,
    release_date: string,
    vote_average: number,
    vote_count: number,
    overview: string,
  }),
};

const defaultProps = {
  info: {},
};


class MovieInfo extends PureComponent {
  render() {
    const {
      id,
      info,
      isBookmarkAdded,
      bookmarkButtonHandler,
    } = this.props;
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

    const notificationData = { id, title };

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
              <span className={classNames('info__button', { added: isBookmarkAdded })}>
              {/* TODO: Button with text */}
                <BookmarkStar
                  bookmarkButtonHandler={bookmarkButtonHandler}
                  notificationData={notificationData}
                  isBookmarkAdded={isBookmarkAdded}
                />
                <span className="info__button-text">favorite</span>
              </span>
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
