import React, { Component } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const navMenuList = ["Home", "About", "Bookmarks"];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <Logo />
          <NavMenu navMenuList={navMenuList} />
        </div>
      </header>
    );
  }
}

export default Header;
