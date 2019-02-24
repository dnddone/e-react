import React from 'react';
import { arrayOf, string } from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  navigationList: arrayOf(string),
};

const defaultProps = {
  navigationList: ['Home', 'Bookmark'],
};

const NavMenu = ({ navigationList }) => (
  <ul className="header__menu nav__list">
    {
      navigationList.map(path => (
        <li className="nav__item" key={path}>
          <Link to={path.toLowerCase()} className="nav__link">{path}</Link>
        </li>
      ))
    }
  </ul>
);

NavMenu.propTypes = propTypes;
NavMenu.defaultProps = defaultProps;

export default NavMenu;
