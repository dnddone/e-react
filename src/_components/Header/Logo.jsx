import React from "react";
import { Link } from "react-router-dom";
import { pathsConstants } from "../../_constants";

const Logo = () => (
  <div className="header__logo-container header__logo">
    <Link to={pathsConstants.HOME_PAGE} className="header__logo-link">
      <span className="header__logo-white">white</span>
      <span className="header__logo-onblack">on black</span>
    </Link>
  </div>
);

export default Logo;
