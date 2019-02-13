import React from 'react';
import { arrayOf, string } from 'prop-types';
import Logo from './Logo';
import NavMenu from './NavMenu';

const propTypes = {
  navigationList: arrayOf(string),
};

const defaultProps = {
  navigationList: ['Home', 'Bookmark'],
};

const Header = ({ navigationList }) => (
  <header className="header">
    <div className="container">
      <Logo />
      <NavMenu navigationList={navigationList} />
    </div>
  </header>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
