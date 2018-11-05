import React from "react";

const NavMenu = props => {
  const { navMenuList } = props;
  const menuList = navMenuList.map((item, index) => {
    const href = item === 'Home' ? "/" : "/" + item; 
    return (
      <li className="nav__item" key={index}>
        <a href={href} className="nav__link">
          {item}
        </a>
      </li>
    );
  });

  return <ul className="header__menu nav__list">{menuList}</ul>;
};

export default NavMenu;
