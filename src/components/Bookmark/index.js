import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

const Bookmark = (props) => <FontAwesomeIcon icon={faStar} />;

export default Bookmark;