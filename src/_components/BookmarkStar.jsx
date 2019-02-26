import React from 'react';
import classNames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  number,
  func,
  bool,
} from 'prop-types';

library.add(faStar);

// TODO: Bookmark handler

const propTypes = {
  id: number.isRequired,
  isBookmarkAdded: bool,
  bookmarkButtonHandler: func.isRequired,
};

const defaultProps = {
  isBookmarkAdded: false,
};

const BookmarkStar = ({ id, bookmarkButtonHandler, isBookmarkAdded }) => {
  const onClickBookmark = (event) => {
    event.preventDefault();
    bookmarkButtonHandler(id);
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
