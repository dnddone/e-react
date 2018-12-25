import React from "react";
import { NavLink } from 'react-router-dom'; 

const NavMenu = props => {
	const { navMenuList } = props;

	// const url = '/e-react';
	const url = '';

  const menuList = navMenuList.map((item, index) => {
    const href = item === 'Home' ? `${url}/` : `${url}/${item.toLowerCase()}`; 
    return (
      <li className="nav__item" key={index}>
        <NavLink to={href} className="nav__link">{item}</NavLink>
      </li>
    );
  });

  return <ul className="header__menu nav__list">{menuList}</ul>;
};

export default NavMenu;
