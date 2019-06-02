import React from 'react';
import classNames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

library.add(faStar);

// TODO: Bookmark handler

const propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  isBookmarkAdded: PropTypes.bool,
  bookmarkButtonHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  isBookmarkAdded: false,
  text: '',
  className: '',
};

const BookmarkStar = ({
  data,
  bookmarkButtonHandler,
  isBookmarkAdded,
  text,
  className,
}) => {
  const onClickBookmark = (event) => {
    event.preventDefault();
    bookmarkButtonHandler(data);
  };

  return (
    <span className={classNames(className, { added: isBookmarkAdded })}>
      <button className={classNames('bookmark', { added: isBookmarkAdded })} type="button" onClick={onClickBookmark}>
        <FontAwesomeIcon icon={faStar} />
        {text && <span>{text}</span> }
      </button>
    </span>
  );
};

BookmarkStar.propTypes = propTypes;
BookmarkStar.defaultProps = defaultProps;

export default BookmarkStar;
