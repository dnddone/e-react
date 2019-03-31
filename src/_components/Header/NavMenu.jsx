import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { formatedPath, activeNavLink } from '../../_helpers/utils';

const propTypes = {
  navigationList: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  navigationList: ['Home', 'Bookmark'],
};

const NavMenu = ({ navigationList }) => (
  <ul className="header__menu nav__list">
    {
      navigationList.map(path => (
        <li className="nav__item" key={path}>
          <Link
            to={formatedPath(path)}
            className={classNames('nav__link', { nav__active: activeNavLink(path) })}
          >
            {path}
          </Link>
        </li>
      ))
    }
  </ul>
);

NavMenu.propTypes = propTypes;
NavMenu.defaultProps = defaultProps;

export default NavMenu;
