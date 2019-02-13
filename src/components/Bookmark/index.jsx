import React from 'react';
import { string } from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);

const propTypes

const Bookmark = ({ isBookmark }) => (
  <div className={`bookmark ${isBookmark}`}>
    <FontAwesomeIcon icon={faStar} />
  </div>
);

export default Bookmark;
