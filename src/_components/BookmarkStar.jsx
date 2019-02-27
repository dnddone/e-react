import React from 'react';
import classNames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  number,
  func,
  shape,
  string,
  bool,
} from 'prop-types';

library.add(faStar);

// TODO: Bookmark handler

const propTypes = {
  data: shape({
    id: number.isRequired,
    title: string,
  }).isRequired,
  isBookmarkAdded: bool,
  bookmarkButtonHandler: func.isRequired,
};

const defaultProps = {
  isBookmarkAdded: false,
};

const BookmarkStar = ({ data, bookmarkButtonHandler, isBookmarkAdded }) => {
  const onClickBookmark = (event) => {
    event.preventDefault();
    bookmarkButtonHandler(data.id, data.title);
  };

  return (
    <button className={classNames('bookmark', { added: isBookmarkAdded })} type="button" onClick={onClickBookmark}>
      <FontAwesomeIcon icon={faStar} />
    </button>
  );
};

BookmarkStar.propTypes = propTypes;
BookmarkStar.defaultProps = defaultProps;

export default BookmarkStar;
