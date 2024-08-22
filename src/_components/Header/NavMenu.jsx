import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { activeNavLink } from "../../_helpers/utils";
import { pathsConstants } from "../../_constants";

const propTypes = {
  navigationList: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  navigationList: [],
};

const NavMenu = ({ navigationList }) => (
  <ul className="header__menu nav__list">
    {navigationList.map((path) => {
      const text =
        path === pathsConstants.HOME_PAGE ? "Home" : path.replace("/", "");

      return (
        <li className="nav__item" key={path}>
          <Link
            to={path}
            className={classNames("nav__link", {
              nav__active: activeNavLink(path),
            })}
          >
            {text}
          </Link>
        </li>
      );
    })}
  </ul>
);

NavMenu.propTypes = propTypes;
NavMenu.defaultProps = defaultProps;

export default NavMenu;
